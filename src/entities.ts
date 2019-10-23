import assert = require("assert");
import EventEmitter = require("events");
import _ = require("lodash");

import assertExists from "./assert-exists";
import { BitStream } from "./ext/bitbuffer";

import consts = require("./consts");
import functional = require("./functional");
import net = require("./net");

import { DemoFile } from "./demo";
import { BaseEntity } from "./entities/baseentity";
import { GameRules } from "./entities/gamerules";
import { Networkable } from "./entities/networkable";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { Weapon } from "./entities/weapon";
import { EntityHandle } from "./entityhandle";
import {
  makeDecoder,
  PropType,
  PropValue,
  SPROP_CHANGES_OFTEN,
  SPROP_COLLAPSIBLE,
  SPROP_EXCLUDE,
  SPROP_INSIDEARRAY
} from "./props";
import {
  CSVCMsg_SendTable,
  ICSVCMsg_PacketEntities,
  ICSVCMsg_SendTable,
  ICSVCMsg_TempEntities
} from "./protobufs/netmessages";
import { CCSGameRulesProxy, CCSPlayerResource } from "./sendtabletypes";
import { IStringTableUpdateEvent } from "./stringtables";

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

export interface UnknownEntityProps {
  [tableName: string]:
    | { [propName: string]: PropValue | undefined }
    | undefined;
}

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

  let ret = 0;

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

  public dataTables: IDataTable[] = [];
  public serverClasses: IServerClass[] = [];

  /**
   * Array of all entities in game.
   */
  public entities: Array<Networkable | null> = new Array(
    1 << consts.MAX_EDICT_BITS
  ).fill(null);

  public markedForDeletion: number[] = [];

  public instanceBaselines: {
    [classId: number]: UnknownEntityProps | undefined;
  } = {};
  public pendingBaselines: { [classId: number]: BitStream | undefined } = {};

  public serverClassBits: number = 0;

  public tableClassMap: { [tableName: string]: NetworkableConstructor } = {
    DT_CSPlayer: Player,
    DT_Team: Team,
    DT_CSGameRules: GameRules,
    DT_WeaponCSBase: Weapon,
    DT_BaseEntity: BaseEntity
  };
  private _demo: DemoFile = null!;
  private _singletonEnts: { [table: string]: Networkable | undefined } = {};
  private _currentServerTick: number = -1;

  public listen(demo: DemoFile) {
    this._demo = demo;
    demo.on("svc_PacketEntities", e => this._handlePacketEntities(e));
    demo.on("svc_TempEntities", e => this._handleTempEntities(e));
    demo.on("net_Tick", e => {
      this._currentServerTick = e.tick;
    });
    demo.stringTables.on("update", e => this._handleStringTableUpdate(e));

    demo.on("tickend", () => {
      if (this.markedForDeletion.length > 0) {
        for (const index of this.markedForDeletion) {
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
  public isHandleSet(handle: number) {
    return handle !== consts.INVALID_NETWORKED_EHANDLE_VALUE;
  }

  /**
   * Returns the entity specified by a particular handle.
   * @param {number} handle - Networked entity handle value
   * @returns {Entity|null} Entity referenced by the handle. `null` if no matching entity.
   */
  public getByHandle(handle: EntityHandle): Networkable | null {
    if (!handle.isValid) {
      return null;
    }

    const ent = this.entities[handle.index];
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
  public getByUserId(userId: number): Player | null {
    const userInfoTable = this._demo.stringTables.findTableByName("userinfo");
    if (!userInfoTable) {
      return null;
    }

    const userInfos = userInfoTable.entries;

    for (let i = 0; i < userInfos.length; ++i) {
      const userEntry = userInfos[i];

      if (userEntry.userData && userEntry.userData.userId === userId) {
        // UNSAFE: if we have 'userinfo' for this entity, it's definitely a player
        return (this.entities[i + 1] as unknown) as Player;
      }
    }

    return null;
  }

  public getSingleton<
    TServerClass,
    TEntityClass extends Networkable<TServerClass>
  >(serverClass: string): TEntityClass {
    const existing = this._singletonEnts[serverClass];
    if (existing) {
      return (existing as unknown) as TEntityClass;
    }

    const entity = this.entities.find(
      ent => (ent ? ent.serverClass.name === serverClass : false)
    );
    if (!entity) {
      throw new Error(`Missing singleton ${serverClass}`);
    }

    this._singletonEnts[serverClass] = entity;
    return (entity as unknown) as TEntityClass;
  }

  public findAllWithTable(table: string): Networkable[] {
    return this.entities.filter(
      (ent): ent is Networkable => (ent != null ? table in ent.props : false)
    );
  }

  public findAllWithClass<T>(klass: NetworkableConstructor<T>): T[] {
    return (this.entities.filter(
      ent => (ent ? ent instanceof klass : false)
    ) as unknown) as T[];
  }

  public handleDataTables(chunk: ByteBuffer) {
    while (true) {
      // eslint-disable-line no-constant-condition
      const descriptor = net.findByType(chunk.readVarint32());
      assert(descriptor.name === "svc_SendTable", "expected SendTable message");

      const length = chunk.readVarint32();

      const msg: RequiredNonNullable<
        ICSVCMsg_SendTable
      > = descriptor.class.decode(
        new Uint8Array(chunk.readBytes(length).toBuffer())
      );
      if (msg.isEnd) {
        break;
      }

      this.dataTables.push(msg);
    }

    const serverClasses = chunk.readShort();

    this.serverClassBits = Math.ceil(Math.log2(serverClasses));

    for (let i = 0; i < serverClasses; ++i) {
      const classId = chunk.readShort();
      assert(classId === i, "server class entry for invalid class ID");

      const name = chunk.readCString();

      const dtName = chunk.readCString();
      const dataTable = assertExists(
        this._findTableByName(dtName),
        "no data table for server class"
      );

      const serverClass = {
        name,
        dtName,
        dataTable,
        flattenedProps: this._flattenDataTable(dataTable)
      };

      this.serverClasses.push(serverClass);

      // parse any pending baseline
      const pendingBaseline = this.pendingBaselines[classId];
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

  private _gatherExcludes(table: IDataTable): ReadonlyArray<ISendProp> {
    const excludes = [];

    for (const prop of table.props) {
      if ((prop.flags & SPROP_EXCLUDE) !== 0) {
        excludes.push(prop);
      }

      if (prop.type === PropType.DataTable) {
        const subTable = assertExists(this._findTableByName(prop.dtName));
        excludes.push.apply(excludes, this._gatherExcludes(
          subTable
        ) as ISendProp[]);
      }
    }

    return excludes;
  }

  private _gatherProps(
    table: IDataTable,
    excludes: ReadonlyArray<ISendProp>
  ): ReadonlyArray<IFlattenedSendProp> {
    const flattened: IFlattenedSendProp[] = [];

    for (let index = 0; index < table.props.length; ++index) {
      const prop = table.props[index];

      if (
        (prop.flags & SPROP_INSIDEARRAY) !== 0 ||
        (prop.flags & SPROP_EXCLUDE) !== 0 ||
        isPropExcluded(excludes, table, prop)
      ) {
        continue;
      }

      if (prop.type === PropType.DataTable) {
        const subTable = assertExists(this._findTableByName(prop.dtName));
        const childProps = this._gatherProps(subTable, excludes);

        if ((prop.flags & SPROP_COLLAPSIBLE) === 0) {
          for (const fp of childProps) {
            fp.collapsible = false;
          }
        }

        flattened.push.apply(flattened, childProps as IFlattenedSendProp[]);
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

  private _flattenDataTable(table: IDataTable) {
    const flattenedProps = this._gatherProps(
      table,
      this._gatherExcludes(table)
    ).slice();

    const prioritySet = new Set(flattenedProps.map(fp => fp.prop.priority));

    prioritySet.add(64);

    const priorities = _.sortBy(Array.from(prioritySet));

    let start = 0;

    // sort flattenedProps by priority
    for (const priority of priorities) {
      while (true) {
        // eslint-disable-line no-constant-condition
        let currentProp;

        for (
          currentProp = start;
          currentProp < flattenedProps.length;
          ++currentProp
        ) {
          const prop = flattenedProps[currentProp].prop;

          if (
            prop.priority === priority ||
            (priority === 64 && (prop.flags & SPROP_CHANGES_OFTEN) !== 0)
          ) {
            if (start !== currentProp) {
              const temp = flattenedProps[start];
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

  private _findTableByName(name: string): IDataTable | undefined {
    return this.dataTables.find(table => table.netTableName === name);
  }

  private _addEntity(index: number, classId: number, serialNum: number) {
    if (this.entities[index]) {
      this._removeEntity(index, true);
    }

    const baseline = this.instanceBaselines[classId];

    let klass: NetworkableConstructor = Networkable;

    // Try to find a suitable class for this entity
    if (baseline !== undefined) {
      for (const tableName in this.tableClassMap) {
        if (baseline[tableName]) {
          klass = this.tableClassMap[tableName];
          break;
        }
      }
    }

    const entity = new klass(
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

  private _removeEntity(index: number, immediate: boolean) {
    const entity = assertExists(
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

  private _parseEntityUpdate(
    entityBitBuffer: BitStream,
    classId: number
  ): ReadonlyArray<IPropUpdate> {
    const serverClass = this.serverClasses[classId];

    const newWay = entityBitBuffer.readOneBit();
    const fieldIndices = functional.fillUntil(
      -1,
      lastIndex => readFieldIndex(entityBitBuffer, lastIndex, newWay),
      -1
    );

    const updatedProps = [];

    for (const index of fieldIndices) {
      const flattenedProp = serverClass.flattenedProps[index];
      assert(flattenedProp);
      updatedProps.push({
        prop: flattenedProp,
        value: flattenedProp.decode(entityBitBuffer)
      });
    }

    return updatedProps;
  }

  private _readNewEntity(entityBitBuffer: BitStream, entity: Networkable<any>) {
    const updates = this._parseEntityUpdate(entityBitBuffer, entity.classId);

    for (const update of updates) {
      const tableName = update.prop.table.netTableName;
      const varName = update.prop.prop.varName;

      const table = entity.props[tableName];
      const oldValue = table && varName in table ? table[varName] : undefined;

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

  private _updatesToPropObject(
    target: UnknownEntityProps,
    updates: ReadonlyArray<IPropUpdate>
  ) {
    for (const update of updates) {
      const tableName = update.prop.table.netTableName;
      const varName = update.prop.prop.varName;
      target[tableName] = Object.assign(target[tableName] || {}, {
        [varName]: update.value
      });
    }
    return target;
  }

  private _handleTempEntities(msg: RequiredNonNullable<ICSVCMsg_TempEntities>) {
    const entityBitBuffer = BitStream.from(msg.entityData as Uint8Array);
    let lastClassId = -1;
    let lastProps: UnknownEntityProps | null = null;

    for (let i = 0; i < msg.numEntries; ++i) {
      let fireDelay = 0.0;
      if (entityBitBuffer.readOneBit()) {
        fireDelay = entityBitBuffer.readSBits(8) / 100.0;
      }

      if (entityBitBuffer.readOneBit()) {
        // TODO: figure out why this is the server class - 1
        lastClassId = entityBitBuffer.readUBits(this.serverClassBits) - 1;

        const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
        lastProps = this._updatesToPropObject({}, updates);
      } else {
        // delta against last temp entity
        assert(lastClassId !== -1, "Delta with no baseline");
        const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
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

  private _handlePacketEntities(
    msg: RequiredNonNullable<ICSVCMsg_PacketEntities>
  ) {
    const entityBitBuffer = BitStream.from(msg.entityData as Uint8Array);

    let entityIndex = -1;

    // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/cl_ents_parse.cpp#L297-L431
    // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/cl_ents_parse.cpp#L544-L648
    // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/baseclientstate.cpp#L1245-L1312

    for (let i = 0; i < msg.updatedEntries; ++i) {
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
        // tslint:disable-next-line:no-identical-conditions
      } else if (entityBitBuffer.readOneBit()) {
        const classId = entityBitBuffer.readUBits(this.serverClassBits);
        const serialNum = entityBitBuffer.readUBits(
          consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS
        );

        const newEnt = this._addEntity(entityIndex, classId, serialNum);
        this._readNewEntity(entityBitBuffer, newEnt);
        this.emit("postcreate", {
          entity: newEnt
        });
      } else {
        const entity = assertExists(
          this.entities[entityIndex],
          "delta on deleted entity"
        );
        this._readNewEntity(entityBitBuffer, entity);
      }
    }

    // TODO: Delete old frames that we no longer need to reference
  }

  private _parseInstanceBaseline(baselineBuf: BitStream, classId: number) {
    const classBaseline: UnknownEntityProps = {};
    for (const bl of this._parseEntityUpdate(baselineBuf, classId)) {
      const tableName = bl.prop.table.netTableName;
      const varName = bl.prop.prop.varName;
      const table = classBaseline[tableName];
      if (table === undefined) {
        classBaseline[tableName] = { [varName]: bl.value };
      } else {
        table[varName] = bl.value;
      }
    }
    return classBaseline;
  }

  private _handleStringTableUpdate(event: IStringTableUpdateEvent<Buffer>) {
    if (event.table.name !== "instancebaseline" || !event.userData) {
      return;
    }

    const classId = parseInt(event.entry, 10);
    const baselineBuf = BitStream.from(event.userData);

    if (!this.serverClasses[classId]) {
      this.pendingBaselines[classId] = baselineBuf;
      return;
    }

    const baseline = this._parseInstanceBaseline(baselineBuf, classId);
    this.instanceBaselines[classId] = baseline;

    this.emit("baselineupdate", {
      classId,
      serverClass: this.serverClasses[classId],
      baseline
    });
  }
}
