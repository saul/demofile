/// <reference types="bytebuffer" />
/// <reference types="node" />
import { EventEmitter } from "events";
import { BitStream } from "./ext/bitbuffer";
import * as immutable from "immutable";
import { DemoFile } from "./demo";
import { GameRules } from "./entities/gamerules";
import { Networkable } from "./entities/networkable";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { Weapon } from "./entities/weapon";
import { EntityHandle } from "./entityhandle";
import { PropValue } from "./props";
import { CSVCMsgSendTable, CSVCMsgSendTable_sendpropT } from "./protobufs/netmessages";
import { CCSPlayerResource } from "./sendtabletypes";
export interface NetworkableConstructor<T = Networkable<any>> {
    new (demo: DemoFile, index: number, classId: number, serialNum: number, props: any | undefined): T;
}
export declare type IDataTable = CSVCMsgSendTable;
export interface UnknownEntityProps {
    [tableName: string]: {
        [propName: string]: PropValue | undefined;
    } | undefined;
}
export declare type ISendProp = CSVCMsgSendTable_sendpropT;
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
    on(event: "baselineupdate", listener: (event: IBaselineUpdateEvent) => void): this;
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
    on(event: "postcreate", listener: (event: IEntityCreationEvent) => void): this;
    emit(name: "postcreate", event: IEntityCreationEvent): boolean;
    /**
     * Fired when an entity is marked for deletion.
     */
    on(event: "beforeremove", listener: (event: IEntityBeforeRemoveEvent) => void): this;
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
 * Represents all entities that are transmitting (i.e. within PVS) in a given frame.
 */
export declare type TransmitEntities = immutable.Set<number>;
/**
 * Represents entities and networked properties within a demo.
 */
export declare class Entities extends EventEmitter {
    get playerResource(): Networkable<CCSPlayerResource>;
    get gameRules(): GameRules;
    get teams(): ReadonlyArray<Team>;
    get players(): ReadonlyArray<Player>;
    get weapons(): ReadonlyArray<Weapon>;
    dataTables: IDataTable[];
    serverClasses: IServerClass[];
    /**
     * Map of entity index => networkable instance
     */
    entities: Map<number, Networkable>;
    markedForDeletion: number[];
    staticBaselines: {
        [classId: number]: UnknownEntityProps | undefined;
    };
    pendingBaselines: {
        [classId: number]: BitStream | undefined;
    };
    serverClassBits: number;
    tableClassMap: {
        [tableName: string]: NetworkableConstructor;
    };
    /**
     * Set of which entities were active in the most recent tick.
     */
    transmitEntities: TransmitEntities;
    private _entityBaselines;
    private _frames;
    private _demo;
    private _singletonEnts;
    private _currentServerTick;
    listen(demo: DemoFile): void;
    /**
     * Determines whether handle is set.
     * This function does not determine whether the handle points to a valid entity.
     * @param {number} handle - Networked entity handle value
     * @returns {boolean} true if handle is set
     */
    isHandleSet(handle: number): boolean;
    /**
     * Returns the entity specified by a particular handle.
     * @param {number} handle - Networked entity handle value
     * @returns {Entity|null} Entity referenced by the handle. `null` if no matching entity.
     */
    getByHandle(handle: EntityHandle): Networkable | null;
    /**
     * Returns the entity specified by a user ID.
     * @param {number} userId - Player user ID
     * @returns {Player|null} Entity referenced by the user ID. `null` if no matching player.
     */
    getByUserId(userId: number): Player | null;
    getSingleton<TServerClass, TEntityClass extends Networkable<TServerClass>>(serverClass: string): TEntityClass;
    findAllWithTable(table: string): Generator<Networkable>;
    findAllWithClass<T>(klass: NetworkableConstructor<T>): Generator<T>;
    handleDataTables(chunk: ByteBuffer): void;
    private _gatherExcludes;
    private _gatherProps;
    private _flattenDataTable;
    private _findTableByName;
    private _addEntity;
    private _removeEntity;
    private _parseEntityUpdate;
    private _readNewEntity;
    private _updatesToPropObject;
    private _handleTempEntities;
    private _handlePacketEntities;
    private _readPacketEntities;
    private _parseInstanceBaseline;
    private _handleStringTableUpdate;
}
