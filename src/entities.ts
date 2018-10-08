import _ = require("lodash");
import assert = require("assert");
import EventEmitter = require("events");

import { BitStream } from "./ext/bitbuffer";
import assertExists from "ts-assert-exists";

import net = require("./net");
import consts = require("./consts");
import functional = require("./functional");

import { BaseEntity } from "./entities/baseentity";
import { GameRules } from "./entities/gamerules";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { Weapon } from "./entities/weapon";
import { DemoFile } from "./demo";
import {
  ICSVCMsg_SendTable,
  ICSVCMsg_TempEntities,
  ICSVCMsg_PacketEntities,
  CSVCMsg_SendTable
} from "./protobufs/netmessages";
import { IStringTableUpdateEvent } from "./stringtables";
import {
  PropValue,
  SPROP_EXCLUDE,
  SPROP_INSIDEARRAY,
  PropType,
  SPROP_COLLAPSIBLE,
  SPROP_CHANGES_OFTEN,
  makeDecoder
} from "./props";
import { EntityHandle } from "./entityhandle";
import { Networkable } from "./entities/networkable";
import {
  CCSGameRulesProxy,
  CCSPlayerResource,
  CCSTeam
} from "./sendtabletypes";

export interface NetworkableConstructor<T = Networkable<any>> {
  new (
    demo: DemoFile,
    index: number,
    classId: number,
    serialNum: number,
    props: any | undefined
  ): T;
}

export type IDataTable = RequiredNonNullable<ICSVCMsg_SendTable>;

export type UnknownEntityProps = {
  [tableName: string]:
    | { [propName: string]: PropValue | undefined }
    | undefined;
};

export type ISendProp = RequiredNonNullable<CSVCMsg_SendTable.Isendprop_t>;

export interface IFlattenedSendProp {
  prop: ISendProp;
  decode: (bitbuf: BitStream) => PropValue;
  table: IDataTable;
  collapsible: boolean;
}

export interface IServerClass {
  name: string;
  dtName: string;
  dataTable: IDataTable;
  flattenedProps: IFlattenedSendProp[];
}

export interface IPropUpdate {
  prop: IFlattenedSendProp;
  value: PropValue;
}

function isPropExcluded(
  excludes: ReadonlyArray<ISendProp>,
  table: IDataTable,
  prop: ISendProp
) {
  return excludes.find(
    excluded =>
      table.netTableName === excluded.dtName &&
      prop.varName === excluded.varName
  );
}

function readFieldIndex(
  entityBitBuffer: BitStream,
  lastIndex: number,
  newWay: boolean
): number {
  if (newWay && entityBitBuffer.readOneBit()) {
    return lastIndex + 1;
  }

  var ret = 0;

  if (newWay && entityBitBuffer.readOneBit()) {
    ret = entityBitBuffer.readUBits(3);
  } else {
    ret = entityBitBuffer.readUBits(7);

    switch (ret & (32 | 64)) {
      case 32:
        ret = (ret & ~96) | (entityBitBuffer.readUBits(2) << 5);
        assert(ret >= 32);
        break;
      case 64:
        ret = (ret & ~96) | (entityBitBuffer.readUBits(4) << 5);
        assert(ret >= 128);
        break;
      case 96:
        ret = (ret & ~96) | (entityBitBuffer.readUBits(7) << 5);
        assert(ret >= 512);
        break;
    }
  }

  if (ret === 0xfff) {
    // end marker is 4095 for CS:GO
    return -1;
  }

  return lastIndex + 1 + ret;
}

export interface IBaselineUpdateEvent {
  classId: number;
  serverClass: IServerClass;
  baseline: UnknownEntityProps;
}

export interface IEntityCreationEvent {
  entity: Networkable;
}

export interface IEntityBeforeRemoveEvent {
  /**
   * Entity to be deleted
   */
  entity: Networkable;

  /**
   * Entity is being replaced immediately, 'remove' will fire now instead of at tickend.
   */
  immediate: boolean;
}

export interface IEntityRemoveEvent {
  index: number;
}

export interface IEntityChangeEvent {
  /**
   * Updated entity
   */
  entity: Networkable;

  /**
   * Table containing updated property
   */
  tableName: string;

  /**
   * Network variable name
   */
  varName: string;

  /**
   * Old variable value
   */
  oldValue: PropValue | undefined;

  /**
   * New value of the property
   */
  newValue: PropValue;
}

export interface ITempEntEvent {
  /**
   * Delay in seconds in which the tempent should be fired.
   */
  delay: number;

  /**
   * Server class ID
   */
  classId: number;

  /**
   * Server class of the temporary entity
   */
  serverClass: IServerClass;

  /**
   * Props of the temporary entity
   */
  props: UnknownEntityProps;
}

export declare interface Entities {
  /**
   * Fired after data tables have been parsed.
   * {@link Entities#serverClasses} can now be used.
   */
  on(event: "datatablesready", listener: () => void): this;
  emit(name: "datatablesready"): boolean;

  /**
   * Fired when an instance baseline is updated.
   */
  on(
    event: "baselineupdate",
    listener: (event: IBaselineUpdateEvent) => void
  ): this;
  emit(name: "baselineupdate", event: IBaselineUpdateEvent): boolean;

  /**
   * Fired when an entity is created.
   * Note no entity properties are available yet.
   * Use {@link Entities#postcreate} if you need access to properties.
   */
  on(event: "create", listener: (event: IEntityCreationEvent) => void): this;
  emit(name: "create", event: IEntityCreationEvent): boolean;

  /**
   * Fired after an entity has been created.
   * All properties are now available for inspection.
   */
  on(
    event: "postcreate",
    listener: (event: IEntityCreationEvent) => void
  ): this;
  emit(name: "postcreate", event: IEntityCreationEvent): boolean;

  /**
   * Fired when an entity is marked for deletion.
   */
  on(
    event: "beforeremove",
    listener: (event: IEntityBeforeRemoveEvent) => void
  ): this;
  emit(name: "beforeremove", event: IEntityBeforeRemoveEvent): boolean;

  /**
   * Fired during DemoFile#tickend when an entity is removed from the game.
   */
  on(event: "remove", listener: (event: IEntityRemoveEvent) => void): this;
  emit(name: "remove", event: IEntityRemoveEvent): boolean;

  /**
   * Fired when an entity property is changed.
   */
  on(event: "change", listener: (event: IEntityChangeEvent) => void): this;
  emit(name: "change", event: IEntityChangeEvent): boolean;

  /**
   * Fired when an a temp ent is created.
   */
  on(event: "tempent", listener: (event: ITempEntEvent) => void): this;
  emit(name: "tempent", event: ITempEntEvent): boolean;
}

/**
 * Represents entities and networked properties within a demo.
 */
export class Entities extends EventEmitter {
  _demo: DemoFile = null!;
  _singletonEnts: { [table: string]: Networkable | undefined } = {};
  _currentServerTick: number = -1;

  dataTables: IDataTable[] = [];
  serverClasses: IServerClass[] = [];

  /**
   * Array of all entities in game.
   */
  entities: (Networkable | null)[] = new Array(1 << consts.MAX_EDICT_BITS).fill(
    null
  );

  markedForDeletion: number[] = [];

  instanceBaselines: { [classId: number]: UnknownEntityProps | undefined } = {};
  pendingBaselines: { [classId: number]: BitStream | undefined } = {};

  serverClassBits: number = 0;

  tableClassMap: { [tableName: string]: NetworkableConstructor } = {
    DT_CSPlayer: Player,
    DT_Team: Team,
    DT_CSGameRules: GameRules,
    DT_WeaponCSBase: Weapon,
    DT_BaseEntity: BaseEntity
  };

  listen(demo: DemoFile) {
    this._demo = demo;
    demo.on("svc_PacketEntities", e => this._handlePacketEntities(e));
    demo.on("svc_TempEntities", e => this._handleTempEntities(e));
    demo.on("net_Tick", e => {
      this._currentServerTick = e.tick;
    });
    demo.stringTables.on("update", e => this._handleStringTableUpdate(e));

    demo.on("tickend", () => {
      if (this.markedForDeletion.length > 0) {
        for (var index of this.markedForDeletion) {
          this.entities[index] = null;
          this.emit("remove", { index });
        }

        this.markedForDeletion.length = 0;
      }
    });
  }

  /**
   * Determines whether handle is set.
   * This function does not determine whether the handle points to a valid entity.
   * @param {number} handle - Networked entity handle value
   * @returns {boolean} true if handle is set
   */
  isHandleSet(handle: number) {
    return handle !== consts.INVALID_NETWORKED_EHANDLE_VALUE;
  }

  /**
   * Returns the entity specified by a particular handle.
   * @param {number} handle - Networked entity handle value
   * @returns {Entity|null} Entity referenced by the handle. `null` if no matching entity.
   */
  getByHandle(handle: EntityHandle): Networkable | null {
    if (!handle.isValid) {
      return null;
    }

    let ent = this.entities[handle.index];
    if (ent == null || ent.serialNum !== handle.serialNum) {
      return null;
    }

    return ent;
  }

  /**
   * Returns the entity specified by a user ID.
   * @param {number} userId - Player user ID
   * @returns {Player|null} Entity referenced by the user ID. `null` if no matching player.
   */
  getByUserId(userId: number): Player | null {
    let userInfoTable = this._demo.stringTables.findTableByName("userinfo");
    if (!userInfoTable) return null;

    let userInfos = userInfoTable.entries;

    for (let i = 0; i < userInfos.length; ++i) {
      let userEntry = userInfos[i];

      if (userEntry.userData && userEntry.userData.userId === userId) {
        // UNSAFE: if we have 'userinfo' for this entity, it's definitely a player
        return (this.entities[i + 1] as unknown) as Player;
      }
    }

    return null;
  }

  getSingleton<TServerClass, TEntityClass extends Networkable<TServerClass>>(
    serverClass: string
  ): TEntityClass {
    let existing = this._singletonEnts[serverClass];
    if (existing) {
      return (existing as unknown) as TEntityClass;
    }

    let entity = this.entities.find(
      ent => (ent ? ent.serverClass.name == serverClass : false)
    );
    if (!entity) {
      throw new Error(`Missing singleton ${serverClass}`);
    }

    this._singletonEnts[serverClass] = entity;
    return (entity as unknown) as TEntityClass;
  }

  findAllWithTable(table: string): Networkable[] {
    return this.entities.filter(
      (ent): ent is Networkable => (ent != null ? table in ent.props : false)
    );
  }

  findAllWithClass<T>(klass: NetworkableConstructor<T>): T[] {
    return (this.entities.filter(
      ent => (ent ? ent instanceof klass : false)
    ) as unknown) as T[];
  }

  get playerResource(): Networkable<CCSPlayerResource> {
    return this._demo.entities.getSingleton<
      CCSPlayerResource,
      Networkable<CCSPlayerResource>
    >("CCSPlayerResource");
  }

  get gameRules(): GameRules {
    return this.getSingleton<CCSGameRulesProxy, GameRules>("CCSGameRulesProxy");
  }

  get teams(): Team[] {
    return this.findAllWithClass(Team);
  }

  get players(): Player[] {
    return this.findAllWithClass(Player);
  }

  get weapons(): Weapon[] {
    return this.findAllWithClass(Weapon);
  }

  _gatherExcludes(table: IDataTable): ReadonlyArray<ISendProp> {
    var excludes = [];

    for (var prop of table.props) {
      if ((prop.flags & SPROP_EXCLUDE) !== 0) {
        excludes.push(prop);
      }

      if (prop.type === PropType.DataTable) {
        var subTable = assertExists(this._findTableByName(prop.dtName));
        excludes.push.apply(excludes, this._gatherExcludes(subTable));
      }
    }

    return excludes;
  }

  _gatherProps(
    table: IDataTable,
    excludes: ReadonlyArray<ISendProp>
  ): ReadonlyArray<IFlattenedSendProp> {
    var flattened: IFlattenedSendProp[] = [];

    for (var index = 0; index < table.props.length; ++index) {
      var prop = table.props[index];

      if (
        (prop.flags & SPROP_INSIDEARRAY) !== 0 ||
        (prop.flags & SPROP_EXCLUDE) !== 0 ||
        isPropExcluded(excludes, table, prop)
      ) {
        continue;
      }

      if (prop.type === PropType.DataTable) {
        var subTable = assertExists(this._findTableByName(prop.dtName));
        var childProps = this._gatherProps(subTable, excludes);

        if ((prop.flags & SPROP_COLLAPSIBLE) === 0) {
          for (var fp of childProps) {
            fp.collapsible = false;
          }
        }

        flattened.push.apply(flattened, childProps);
      } else {
        flattened.push({
          prop,
          table,
          decode: makeDecoder(
            prop,
            prop.type === PropType.Array ? table.props[index - 1] : undefined
          ),
          collapsible: true
        });
      }
    }

    // collapsible props should come after non-collapsible
    return _.sortBy(flattened, fp => (fp.collapsible === false ? 0 : 1));
  }

  _flattenDataTable(table: IDataTable) {
    var flattenedProps = this._gatherProps(
      table,
      this._gatherExcludes(table)
    ).slice();

    var prioritySet = new Set(flattenedProps.map(fp => fp.prop.priority));

    prioritySet.add(64);

    var priorities = _.sortBy(Array.from(prioritySet));

    var start = 0;

    // sort flattenedProps by priority
    for (var priority of priorities) {
      while (true) {
        // eslint-disable-line no-constant-condition
        let currentProp;

        for (
          currentProp = start;
          currentProp < flattenedProps.length;
          ++currentProp
        ) {
          let prop = flattenedProps[currentProp].prop;

          if (
            prop.priority === priority ||
            (priority === 64 && (prop.flags & SPROP_CHANGES_OFTEN) !== 0)
          ) {
            if (start !== currentProp) {
              let temp = flattenedProps[start];
              flattenedProps[start] = flattenedProps[currentProp];
              flattenedProps[currentProp] = temp;
            }

            start++;
            break;
          }
        }

        if (currentProp === flattenedProps.length) {
          break;
        }
      }
    }

    return flattenedProps;
  }

  _findTableByName(name: string): IDataTable | undefined {
    return this.dataTables.find(table => table.netTableName == name);
  }

  _handleDataTables(chunk: ByteBuffer) {
    while (true) {
      // eslint-disable-line no-constant-condition
      var descriptor = net.findByType(chunk.readVarint32());
      assert(descriptor.name == "svc_SendTable", "expected SendTable message");

      var length = chunk.readVarint32();

      var msg: RequiredNonNullable<
        ICSVCMsg_SendTable
      > = descriptor.class.decode(
        new Uint8Array(chunk.readBytes(length).toBuffer())
      );
      if (msg.isEnd) {
        break;
      }

      this.dataTables.push(msg);
    }

    var serverClasses = chunk.readShort();

    this.serverClassBits = Math.ceil(Math.log2(serverClasses));

    for (var i = 0; i < serverClasses; ++i) {
      var classId = chunk.readShort();
      assert(classId === i, "server class entry for invalid class ID");

      var name = chunk.readCString();

      var dtName = chunk.readCString();
      var dataTable = assertExists(
        this._findTableByName(dtName),
        "no data table for server class"
      );

      var serverClass = {
        name,
        dtName,
        dataTable,
        flattenedProps: this._flattenDataTable(dataTable)
      };

      this.serverClasses.push(serverClass);

      // parse any pending baseline
      var pendingBaseline = this.pendingBaselines[classId];
      if (pendingBaseline) {
        this.instanceBaselines[classId] = this._parseInstanceBaseline(
          pendingBaseline,
          classId
        );
        this.emit("baselineupdate", {
          classId,
          serverClass,
          baseline: this.instanceBaselines[classId]!
        });
        delete this.pendingBaselines[classId];
      }
    }

    assert.equal(chunk.remaining(), 0);

    this.emit("datatablesready");
  }

  _addEntity(index: number, classId: number, serialNum: number) {
    if (this.entities[index]) {
      this._removeEntity(index, true);
    }

    let baseline = this.instanceBaselines[classId];

    let klass: NetworkableConstructor = Networkable;

    // Try to find a suitable class for this entity
    if (baseline !== undefined) {
      for (let tableName in this.tableClassMap) {
        if (baseline[tableName]) {
          klass = this.tableClassMap[tableName];
          break;
        }
      }
    }

    var entity = new klass(
      this._demo,
      index,
      classId,
      serialNum,
      _.cloneDeep(baseline)
    );
    this.entities[index] = entity;

    this.emit("create", { entity });

    return entity;
  }

  _removeEntity(index: number, immediate: boolean) {
    var entity = assertExists(
      this.entities[index],
      "cannot remove non-existent entity"
    );

    this.emit("beforeremove", { entity, immediate });

    if (immediate) {
      this.entities[index] = null;
      this.emit("remove", { index });
    } else {
      assert(
        !entity.deleting,
        "cannot delete an entity already marked for deletion"
      );
      entity.deleting = true;
      this.markedForDeletion.push(index);
    }
  }

  _parseEntityUpdate(
    entityBitBuffer: BitStream,
    classId: number
  ): ReadonlyArray<IPropUpdate> {
    var serverClass = this.serverClasses[classId];

    var newWay = entityBitBuffer.readOneBit();
    var fieldIndices = functional.fillUntil(
      -1,
      lastIndex => readFieldIndex(entityBitBuffer, lastIndex, newWay),
      -1
    );

    var updatedProps = [];

    for (var index of fieldIndices) {
      var flattenedProp = serverClass.flattenedProps[index];
      assert(flattenedProp);
      updatedProps.push({
        prop: flattenedProp,
        value: flattenedProp.decode(entityBitBuffer)
      });
    }

    return updatedProps;
  }

  _readNewEntity(entityBitBuffer: BitStream, entity: Networkable<any>) {
    var updates = this._parseEntityUpdate(entityBitBuffer, entity.classId);

    for (var update of updates) {
      var tableName = update.prop.table.netTableName;
      var varName = update.prop.prop.varName;

      var oldValue = entity.getProp(tableName, varName);

      entity.updateProp(tableName, varName, update.value);

      this.emit("change", {
        entity,
        tableName,
        varName,
        oldValue,
        newValue: update.value
      });
    }
  }

  _updatesToPropObject(
    target: UnknownEntityProps,
    updates: ReadonlyArray<IPropUpdate>
  ) {
    for (var update of updates) {
      var tableName = update.prop.table.netTableName;
      var varName = update.prop.prop.varName;
      target[tableName] = Object.assign(target[tableName] || {}, {
        [varName]: update.value
      });
    }
    return target;
  }

  _handleTempEntities(msg: RequiredNonNullable<ICSVCMsg_TempEntities>) {
    var entityBitBuffer = BitStream.from(msg.entityData as Uint8Array);
    var lastClassId = -1;
    var lastProps: UnknownEntityProps | null = null;

    for (var i = 0; i < msg.numEntries; ++i) {
      var fireDelay = 0.0;
      if (entityBitBuffer.readOneBit()) {
        fireDelay = entityBitBuffer.readSBits(8) / 100.0;
      }

      if (entityBitBuffer.readOneBit()) {
        // TODO: figure out why this is the server class - 1
        lastClassId = entityBitBuffer.readUBits(this.serverClassBits) - 1;

        var updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
        lastProps = this._updatesToPropObject({}, updates);
      } else {
        // delta against last temp entity
        assert(lastClassId != -1, "Delta with no baseline");
        var updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
        lastProps = this._updatesToPropObject(
          _.cloneDeep(assertExists(lastProps)),
          updates
        );
      }

      this.emit("tempent", {
        delay: fireDelay,
        classId: lastClassId,
        serverClass: this.serverClasses[lastClassId],
        props: lastProps
      });
    }
  }

  _handlePacketEntities(msg: RequiredNonNullable<ICSVCMsg_PacketEntities>) {
    var entityBitBuffer = BitStream.from(msg.entityData as Uint8Array);

    var entityIndex = -1;

    // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/cl_ents_parse.cpp#L297-L431
    // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/cl_ents_parse.cpp#L544-L648
    // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/baseclientstate.cpp#L1245-L1312

    for (var i = 0; i < msg.updatedEntries; ++i) {
      entityIndex += 1 + entityBitBuffer.readUBitVar();

      assert(entityIndex < this.entities.length, "newEntity >= MAX_EDICTS");

      if (entityBitBuffer.readOneBit()) {
        if (entityBitBuffer.readOneBit()) {
          assert(msg.isDelta, "deleting entity on full update");
          this._removeEntity(entityIndex, false);
        } else {
          assert(msg.isDelta, "entity leaving PVS on full update");
          // Maybe set a flag on the entity indicating that it is out of PVS?
        }
      } else if (entityBitBuffer.readOneBit()) {
        var classId = entityBitBuffer.readUBits(this.serverClassBits);
        var serialNum = entityBitBuffer.readUBits(
          consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS
        );

        let newEnt = this._addEntity(entityIndex, classId, serialNum);
        this._readNewEntity(entityBitBuffer, newEnt);
        this.emit("postcreate", { entity: newEnt });
      } else {
        let entity = assertExists(
          this.entities[entityIndex],
          "delta on deleted entity"
        );
        this._readNewEntity(entityBitBuffer, entity);
      }
    }

    // TODO: Delete old frames that we no longer need to reference
  }

  _parseInstanceBaseline(baselineBuf: BitStream, classId: number) {
    var classBaseline: UnknownEntityProps = {};
    for (var bl of this._parseEntityUpdate(baselineBuf, classId)) {
      var tableName = bl.prop.table.netTableName;
      var varName = bl.prop.prop.varName;
      var table = classBaseline[tableName];
      if (table === undefined) {
        classBaseline[tableName] = { [varName]: bl.value };
      } else {
        table[varName] = bl.value;
      }
    }
    return classBaseline;
  }

  _handleStringTableUpdate(event: IStringTableUpdateEvent<Buffer>) {
    if (event.table.name !== "instancebaseline" || !event.userData) {
      return;
    }

    var classId = parseInt(event.entry, 10);
    var baselineBuf = BitStream.from(event.userData);

    if (!this.serverClasses[classId]) {
      this.pendingBaselines[classId] = baselineBuf;
      return;
    }

    var baseline = this._parseInstanceBaseline(baselineBuf, classId);
    this.instanceBaselines[classId] = baseline;

    this.emit("baselineupdate", {
      classId,
      serverClass: this.serverClasses[classId],
      baseline
    });
  }
}
