import * as assert from "assert";
import { EventEmitter } from "events";

import assertExists from "./assert-exists";
import { BitStream } from "./ext/bitbuffer";

import * as consts from "./consts";
import * as net from "./net";

import * as immutable from "immutable";
import { filter, find } from "iter-tools";
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
  CSVCMsgPacketEntities,
  CSVCMsgSendTable,
  CSVCMsgSendTable_sendpropT,
  CSVCMsgTempEntities
} from "./protobufs/netmessages";
import { CCSGameRulesProxy, CCSPlayerResource } from "./sendtabletypes";
import {
  IPlayerInfo,
  IStringTableUpdateEvent,
  IInstanceBaselineStringTableUpdateEvent,
  IUserInfoStringTable
} from "./stringtables";
import * as Long from "long";

export interface NetworkableConstructor<T = Networkable<any>> {
  new (
    demo: DemoFile,
    index: number,
    classId: number,
    serialNum: number,
    props: any | undefined
  ): T;
}

export type IDataTable = CSVCMsgSendTable;

export interface UnknownEntityProps {
  [tableName: string]:
    | { [propName: string]: PropValue | undefined }
    | undefined;
}

export type ISendProp = CSVCMsgSendTable_sendpropT;

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
  flattenedProps: ReadonlyArray<IFlattenedSendProp>;
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

export interface IEntityPropChange {
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

export interface IEntityChangeEvent {
  /**
   * Updated entity
   */
  entity: Networkable;

  /**
   * Prop changes. At least one element in the array.
   */
  changes: ReadonlyArray<IEntityPropChange>;
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
   */
  on(event: "create", listener: (event: IEntityCreationEvent) => void): this;
  emit(name: "create", event: IEntityCreationEvent): boolean;

  /**
   * Fired after an entity has been created.
   * All entity props are available for inspection.
   * @deprecated Listen to {@link Entities#create} instead
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

type TickNumber = number & { readonly __tag: unique symbol };

/**
 * Represents all entities that are transmitting (i.e. within PVS) in a given frame.
 */
export type TransmitEntities = immutable.Set<number>;
type MutableTransmitEntities = TransmitEntities & {
  readonly __tag: unique symbol;
};

function cloneProps(props: UnknownEntityProps): UnknownEntityProps {
  const result = {} as UnknownEntityProps;
  // eslint-disable-next-line no-restricted-syntax
  for (const tableName in props) {
    const oldTable = props[tableName];
    const newTable = {} as Record<string, any>;
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in oldTable) {
      newTable[prop] = oldTable[prop];
    }
    result[tableName] = newTable;
  }
  return result;
}

interface IEntityBaseline {
  readonly classId: number;
  readonly props: UnknownEntityProps;
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

  get teams(): ReadonlyArray<Team> {
    return Array.from(this.findAllWithClass(Team));
  }

  get players(): ReadonlyArray<Player> {
    const players = [];
    for (let i = 1; i <= this._maxPlayers; ++i) {
      const entity = this.entities.get(i) as Player | undefined;

      // Only return players that are fully connected
      if (entity?.userInfo != null) {
        players.push(entity);
      }
    }
    return players;
  }

  get weapons(): ReadonlyArray<Weapon> {
    return Array.from(this.findAllWithClass(Weapon));
  }

  public dataTables: IDataTable[] = [];
  public serverClasses: IServerClass[] = [];

  /**
   * Map of entity index => networkable instance
   */
  public entities: Map<number, Networkable> = new Map();

  public markedForDeletion: number[] = [];

  public staticBaselines: {
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

  /**
   * Set of which entities were active in the most recent tick.
   */
  public transmitEntities: TransmitEntities = null!;

  private _entityBaselines: ReadonlyArray<Map<number, IEntityBaseline>> = [
    new Map(),
    new Map()
  ];

  private _frames: immutable.Map<
    TickNumber,
    TransmitEntities
  > = immutable.Map();

  private _demo: DemoFile = null!;
  private _singletonEnts: { [table: string]: Networkable | undefined } = {};
  private _currentServerTick: TickNumber = -1 as TickNumber;
  private _maxPlayers: number = 0;
  public _userInfoTable: IUserInfoStringTable = null!;

  private _userIdToEntity: Map<number, number> = new Map();
  private _steam64IdToEntity: Map<string, number> = new Map();
  private _accountNumberToEntity: Map<number, number> = new Map();

  public listen(demo: DemoFile): void {
    this._demo = demo;
    demo.on("svc_PacketEntities", e => this._handlePacketEntities(e));
    demo.on("svc_TempEntities", e => this._handleTempEntities(e));
    demo.on("svc_ServerInfo", e => {
      this._maxPlayers = e.maxClients;
    });
    demo.on("net_Tick", e => {
      this._currentServerTick = e.tick as TickNumber;
    });
    demo.stringTables.on("create", table => {
      if (table.name === "userinfo") this._userInfoTable = table;
    });
    demo.stringTables.on("update", e => this._handleStringTableUpdate(e));

    demo.on("tickend", () => {
      if (this.markedForDeletion.length > 0) {
        for (const index of this.markedForDeletion) {
          this.entities.delete(index);
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
  public isHandleSet(handle: number): boolean {
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

    const ent = this.entities.get(handle.index);
    if (ent == null || ent.serialNum !== handle.serialNum) {
      return null;
    }

    return ent;
  }

  /**
   * Returns the entity that belongs to the player with a given user ID.
   * @param {number} userId - Player user ID
   * @returns {Player|null} Entity referenced by the user ID. `null` if no matching player.
   */
  public getByUserId(userId: number): Player | null {
    const entityIndex = this._userIdToEntity.get(userId);
    if (entityIndex === undefined) return null;
    return (this.entities.get(entityIndex) as unknown) as Player;
  }

  /**
   * Returns the entity that belongs to the player with a given Steam account ID.
   * @param {number} accountId - Steam account ID
   * @returns {Player|null} Entity referenced by the account ID. `null` if no matching player.
   */
  public getByAccountId(accountId: number): Player | null {
    const entityIndex = this._accountNumberToEntity.get(accountId);
    if (entityIndex === undefined) return null;
    return (this.entities.get(entityIndex) as unknown) as Player;
  }

  /**
   * Returns the entity that belongs to the player with a given 64-bit Steam ID.
   * @param {Long|string} steam64Id - 64-bit Steam ID
   * @returns {Player|null} Entity referenced by the Steam ID. `null` if no matching player.
   */
  public getBySteam64Id(steam64Id: Long | string): Player | null {
    const idString =
      steam64Id instanceof Long ? steam64Id.toString() : steam64Id;
    const entityIndex = this._steam64IdToEntity.get(idString);
    if (entityIndex === undefined) return null;
    return (this.entities.get(entityIndex) as unknown) as Player;
  }

  public getSingleton<
    TServerClass,
    TEntityClass extends Networkable<TServerClass>
  >(serverClass: string): TEntityClass {
    const existing = this._singletonEnts[serverClass];
    if (existing) {
      return (existing as unknown) as TEntityClass;
    }

    const result = find(
      ([, ent]) => ent.serverClass.name === serverClass,
      this.entities
    );
    if (!result) {
      throw new Error(`Missing singleton ${serverClass}`);
    }

    const [, entity] = result;
    this._singletonEnts[serverClass] = entity;
    return (entity as unknown) as TEntityClass;
  }

  public *findAllWithTable(table: string): Generator<Networkable> {
    for (const ent of this.entities.values()) {
      if (table in ent.props) {
        yield ent;
      }
    }
  }

  public *findAllWithClass<T>(klass: NetworkableConstructor<T>): Generator<T> {
    for (const ent of this.entities.values()) {
      if (ent instanceof klass) {
        yield ent;
      }
    }
  }

  public handleDataTables(chunk: ByteBuffer): void {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const descriptor = net.findByType(chunk.readVarint32());
      assert(
        descriptor?.name === "svc_SendTable",
        "expected SendTable message"
      );

      const length = chunk.readVarint32();

      const msg = descriptor.class.decode(
        new Uint8Array(chunk.readBytes(length).toBuffer())
      ) as CSVCMsgSendTable;
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

      const serverClass: IServerClass = {
        name,
        dtName,
        dataTable,
        flattenedProps: this._flattenDataTable(dataTable)
      };

      this.serverClasses.push(serverClass);

      // parse any pending baseline
      const pendingBaseline = this.pendingBaselines[classId];
      if (pendingBaseline) {
        this.staticBaselines[classId] = this._parseInstanceBaseline(
          pendingBaseline,
          classId
        );
        this.emit("baselineupdate", {
          classId,
          serverClass,
          baseline: this.staticBaselines[classId]!
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
        excludes.push(...(this._gatherExcludes(subTable) as ISendProp[]));
      }
    }

    return excludes;
  }

  private _gatherProps(
    table: IDataTable,
    excludes: ReadonlyArray<ISendProp>
  ): IFlattenedSendProp[] {
    const flattened: IFlattenedSendProp[] = [];

    for (let index = 0; index < table.props.length; ++index) {
      const prop = table.props[index]!;

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

        flattened.push(...childProps);
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
    return flattened.sort(
      ({ collapsible: a }, { collapsible: b }) => (a ? 1 : 0) - (b ? 1 : 0)
    );
  }

  private _flattenDataTable(
    table: IDataTable
  ): ReadonlyArray<IFlattenedSendProp> {
    const flattenedProps = this._gatherProps(
      table,
      this._gatherExcludes(table)
    );

    const prioritySet = new Set(flattenedProps.map(fp => fp.prop.priority));

    prioritySet.add(64);

    const priorities = Array.from(prioritySet).sort((a, b) => a - b);

    let start = 0;

    // On this surface this looks like a sort by priority (or min(64, priority)
    // for CHANGES_OFTEN props). It's not a stable sort so it can't just be
    // replaced with JS Array#sort
    for (const priority of priorities) {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        let currentProp;

        for (
          currentProp = start;
          currentProp < flattenedProps.length;
          ++currentProp
        ) {
          const prop = flattenedProps[currentProp]!.prop;

          if (
            prop.priority === priority ||
            (priority === 64 && (prop.flags & SPROP_CHANGES_OFTEN) !== 0)
          ) {
            if (start !== currentProp) {
              const temp = flattenedProps[start]!;
              flattenedProps[start] = flattenedProps[currentProp]!;
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

  private _addEntity(
    index: number,
    classId: number,
    serialNum: number,
    existingEntity: Networkable<UnknownEntityProps> | undefined,
    entityBaseline: UnknownEntityProps | undefined
  ) {
    const baseline = entityBaseline || this.staticBaselines[classId];
    if (!baseline) {
      throw new Error(`no baseline for entity ${index} (class ID ${classId})`);
    }

    const props = cloneProps(baseline);

    // If we already have this entity, start fresh with baseline props
    if (existingEntity?.serialNum === serialNum) {
      existingEntity.props = props;
      return existingEntity;
    }

    // Delete the entity if the serial numbers mismatch
    if (existingEntity) {
      this._removeEntity(index, true);
    }

    // Try to find a suitable class for this entity
    let klass: NetworkableConstructor = Networkable;
    // eslint-disable-next-line no-restricted-syntax
    for (const tableName in this.tableClassMap) {
      if (baseline[tableName]) {
        // UNSAFE: we know this table exists in `tableClassMap`
        klass = this.tableClassMap[tableName]!;
        break;
      }
    }

    const entity = new klass(this._demo, index, classId, serialNum, props);
    this.entities.set(index, entity);
    return entity;
  }

  private _removeEntity(index: number, immediate: boolean) {
    const entity = this.entities.get(index);
    if (!entity) {
      return;
    }

    // It's possible that the entity is already marked for deletion.
    // This is because entities are deleted at the end of the dem_packet,
    // after the game events fire.
    if (!immediate && entity.deleting) {
      return;
    }

    this.emit("beforeremove", { entity, immediate });

    if (immediate) {
      this.entities.delete(index);
      this.emit("remove", { index });
    } else {
      entity.deleting = true;
      this.markedForDeletion.push(index);
    }
  }

  private _parseEntityUpdate(
    entityBitBuffer: BitStream,
    classId: number
  ): ReadonlyArray<IPropUpdate> {
    const serverClass = this.serverClasses[classId]!;

    const newWay = entityBitBuffer.readOneBit();

    let lastIndex = -1;
    const fieldIndices: number[] = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      lastIndex = readFieldIndex(entityBitBuffer, lastIndex, newWay);
      if (lastIndex === -1) {
        break;
      }

      fieldIndices.push(lastIndex);
    }

    const updatedProps = new Array<IPropUpdate>(fieldIndices.length);
    for (let i = 0; i < fieldIndices.length; ++i) {
      const propIndex = fieldIndices[i]!;
      const flattenedProp = serverClass.flattenedProps[propIndex]!;
      assert(flattenedProp);
      updatedProps[i] = {
        prop: flattenedProp,
        value: flattenedProp.decode(entityBitBuffer)
      };
    }

    return updatedProps;
  }

  private _readNewEntity(entityBitBuffer: BitStream, entity: Networkable) {
    const updates = this._parseEntityUpdate(entityBitBuffer, entity.classId);

    const recordChanges = this.listenerCount("change") > 0;

    const changes = recordChanges
      ? new Array<IEntityPropChange>(updates.length)
      : [];

    for (let i = 0; i < updates.length; ++i) {
      const update = updates[i]!;
      const tableName = update.prop.table.netTableName;
      const varName = update.prop.prop.varName;

      const table = entity.props[tableName];
      const oldValue = table && varName in table ? table[varName] : undefined;

      (entity as Networkable<any>).updateProp(tableName, varName, update.value);

      if (recordChanges) {
        changes[i] = {
          tableName,
          varName,
          oldValue,
          newValue: update.value
        };
      }
    }

    if (recordChanges) {
      this.emit("change", {
        entity,
        changes
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

  private _handleTempEntities(msg: CSVCMsgTempEntities) {
    const entityBitBuffer = BitStream.from(msg.entityData);
    let lastClassId = -1;
    let lastProps: UnknownEntityProps | null = null;

    // Reliable tempents are sent with 0 entries, but really they have 1
    const numEntries = msg.numEntries === 0 ? 1 : msg.numEntries;

    for (let i = 0; i < numEntries; ++i) {
      let fireDelay = 0.0;
      if (entityBitBuffer.readOneBit()) {
        fireDelay = entityBitBuffer.readSBits(8) / 100.0;
      }

      if (entityBitBuffer.readOneBit()) {
        lastClassId = entityBitBuffer.readUBits(this.serverClassBits) - 1;

        const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
        lastProps = this._updatesToPropObject({}, updates);
      } else {
        // delta against last temp entity
        assert(lastClassId !== -1, "Delta with no baseline");
        const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
        lastProps = this._updatesToPropObject(
          cloneProps(assertExists(lastProps)),
          updates
        );
      }

      this.emit("tempent", {
        delay: fireDelay,
        classId: lastClassId,
        serverClass: this.serverClasses[lastClassId]!,
        props: lastProps
      });
    }
  }

  private _handlePacketEntities(msg: CSVCMsgPacketEntities) {
    // Take a copy of the transmitted entities from the delta frame
    // Otherwise start with a blank slate
    const baseTransmitEntities = assertExists(
      msg.isDelta
        ? this._frames.get(msg.deltaFrom as TickNumber)
        : (immutable.Set() as TransmitEntities),
      `delta from unknown frame ${msg.deltaFrom}`
    );

    if (!msg.isDelta) {
      // Clear out old entities - this is a full update
      for (const entityIndex of Array.from(this.entities.keys())) {
        this._removeEntity(entityIndex, true);
      }

      // Remove all frames - we won't be using them
      this._frames = immutable.Map();

      // Clear all entity baselines
      for (const baseline of this._entityBaselines) {
        baseline.clear();
      }
    }

    const newFrame = baseTransmitEntities.withMutations(mutableFrame =>
      this._readPacketEntities(msg, mutableFrame as MutableTransmitEntities)
    );

    this._frames = this._frames.set(this._currentServerTick, newFrame);
    this.transmitEntities = newFrame;

    // Delete old frames that we no longer need to reference
    if (msg.isDelta) {
      const oldFrames = filter(
        tick => tick < msg.deltaFrom,
        this._frames.keys()
      );
      this._frames = this._frames.removeAll(oldFrames);
    }
  }

  private _readPacketEntities(
    msg: CSVCMsgPacketEntities,
    frame: MutableTransmitEntities
  ): void {
    const entityBitBuffer = BitStream.from(msg.entityData);

    let entityIndex = -1;

    for (let i = 0; i < msg.updatedEntries; ++i) {
      entityIndex += 1 + entityBitBuffer.readUBitVar();

      assert(entityIndex < consts.MAX_EDICTS, "newEntity >= MAX_EDICTS");

      if (entityBitBuffer.readOneBit()) {
        assert(msg.isDelta, "entity leaving PVS on full update");
        frame.remove(entityIndex);

        if (entityBitBuffer.readOneBit()) {
          // 0b11: FHDR_LEAVEPVS | FHDR_DELETE
          this._removeEntity(entityIndex, false);
        } else {
          // 0b10: FHDR_LEAVEPVS
        }
        // eslint-disable-next-line no-dupe-else-if
      } else if (entityBitBuffer.readOneBit()) {
        // 0b01: FHDR_ENTERPVS
        frame.add(entityIndex);

        const classId = entityBitBuffer.readUBits(this.serverClassBits);
        const serialNum = entityBitBuffer.readUBits(
          consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS
        );

        const existingBaseline = this._entityBaselines[msg.baseline]!.get(
          entityIndex
        );

        const entityBaselineProps =
          msg.isDelta && existingBaseline?.classId === classId
            ? existingBaseline.props
            : undefined;

        const existingEntity = this.entities.get(entityIndex);
        const entity = this._addEntity(
          entityIndex,
          classId,
          serialNum,
          existingEntity,
          entityBaselineProps
        );
        this._readNewEntity(entityBitBuffer, entity);

        if (entity !== existingEntity) {
          const eventVars = { entity };
          this.emit("create", eventVars);

          // Still emit 'postcreate' for backwards compatibility
          this.emit("postcreate", eventVars);
        }

        // Update the OTHER baseline with the merged result of `old baseline + new props`
        if (msg.updateBaseline) {
          this._entityBaselines[msg.baseline ? 0 : 1]!.set(entityIndex, {
            classId,
            props: cloneProps(entity.props)
          });
        }
      } else {
        // 0b00: DeltaEnt
        const entity = assertExists(
          this.entities.get(entityIndex),
          `missing client entity ${entityIndex}`
        );
        assert(
          frame.contains(entityIndex),
          `delta on dormant entity ${entityIndex}`
        );
        this._readNewEntity(entityBitBuffer, entity);
      }
    }

    // Read deletions
    if (msg.isDelta) {
      entityIndex = -1;

      const deletions = entityBitBuffer.readUBitVar();
      for (let i = 0; i < deletions; ++i) {
        entityIndex += entityBitBuffer.readUBitVar();

        // Entity wasn't dealt with in packet, but has been deleted
        frame.remove(entityIndex);
        this._removeEntity(entityIndex, false);
      }
    }
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

  private _handleUserInfoUpdate(
    clientSlot: number,
    oldPlayerInfo: IPlayerInfo | null,
    playerInfo: IPlayerInfo | null
  ) {
    if (oldPlayerInfo != null) {
      this._userIdToEntity.delete(oldPlayerInfo.userId);
      this._steam64IdToEntity.delete(oldPlayerInfo.xuid.toString());
      this._accountNumberToEntity.delete(oldPlayerInfo.friendsId);
    }

    if (playerInfo != null) {
      this._userIdToEntity.set(playerInfo.userId, clientSlot + 1);
      this._steam64IdToEntity.set(playerInfo.xuid.toString(), clientSlot + 1);
      this._accountNumberToEntity.set(playerInfo.friendsId, clientSlot + 1);
    }
  }

  private _handleInstanceBaselineUpdate(
    event: IInstanceBaselineStringTableUpdateEvent
  ) {
    if (!event.userData) return;

    const classId = parseInt(event.entry, 10);
    const baselineBuf = BitStream.from(event.userData);

    if (!this.serverClasses[classId]) {
      this.pendingBaselines[classId] = baselineBuf;
      return;
    }

    const baseline = this._parseInstanceBaseline(baselineBuf, classId);
    this.staticBaselines[classId] = baseline;

    this.emit("baselineupdate", {
      classId,
      serverClass: this.serverClasses[classId]!,
      baseline
    });
  }

  private _handleStringTableUpdate(event: IStringTableUpdateEvent) {
    if (event.name === "userinfo") {
      this._handleUserInfoUpdate(
        event.entryIndex,
        event.oldUserData,
        event.userData
      );
    } else if (event.name === "instancebaseline") {
      this._handleInstanceBaselineUpdate(event);
    }
  }
}
