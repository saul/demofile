/// <reference types="bytebuffer" />
/// <reference types="node" />
import { EventEmitter } from "events";
import { BitStream } from "./ext/bitbuffer";
import { DemoFile } from "./demo";
import { GameRules } from "./entities/gamerules";
import { Networkable } from "./entities/networkable";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { Weapon } from "./entities/weapon";
import { EntityHandle } from "./entityhandle";
import { PropValue } from "./props";
import { CSVCMsg_SendTable, ICSVCMsg_SendTable } from "./protobufs/netmessages";
import { CCSPlayerResource } from "./sendtabletypes";
export interface NetworkableConstructor<T = Networkable<any>> {
    new (demo: DemoFile, index: number, classId: number, serialNum: number, props: any | undefined): T;
}
export declare type IDataTable = RequiredNonNullable<ICSVCMsg_SendTable>;
export interface UnknownEntityProps {
    [tableName: string]: {
        [propName: string]: PropValue | undefined;
    } | undefined;
}
export declare type ISendProp = RequiredNonNullable<CSVCMsg_SendTable.Isendprop_t>;
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
 * Represents entities and networked properties within a demo.
 */
export declare class Entities extends EventEmitter {
    get playerResource(): Networkable<CCSPlayerResource>;
    get gameRules(): GameRules;
    get teams(): Team[];
    get players(): Player[];
    get weapons(): Weapon[];
    dataTables: IDataTable[];
    serverClasses: IServerClass[];
    /**
     * Array of all entities in game.
     */
    entities: Array<Networkable | null>;
    markedForDeletion: number[];
    instanceBaselines: {
        [classId: number]: UnknownEntityProps | undefined;
    };
    pendingBaselines: {
        [classId: number]: BitStream | undefined;
    };
    serverClassBits: number;
    tableClassMap: {
        [tableName: string]: NetworkableConstructor;
    };
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
    findAllWithTable(table: string): Networkable[];
    findAllWithClass<T>(klass: NetworkableConstructor<T>): T[];
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
    private _parseInstanceBaseline;
    private _handleStringTableUpdate;
}
