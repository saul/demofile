/// <reference types="node" />
import { EventEmitter } from "events";
import * as Long from "long";
import { DemoFile } from "./demo";
import { BitStream } from "./ext/bitbuffer";
/**
 * Player info structure.
 * @property {Long} xuid - 64-bit Steam ID (e.g. 76561197988627193)
 * @property {string} name - Player name
 * @property {int} userId - Local server user ID, unique while server is running
 * @property {string} guid - Steam2 ID string (e.g. STEAM_0:1:14180732)
 * @property {int} friendsId - Friends identification number
 * @property {string} friendsName - Friends name
 * @property {bool} fakePlayer - true, if player is a bot
 * @property {bool} isHltv - true, if player is the HLTV proxy
 * @property {int[]} customFiles - custom files CRC for this player
 */
export interface IPlayerInfo {
    xuid: Long;
    name: string;
    userId: number;
    guid: string;
    friendsId: number;
    friendsName: string;
    fakePlayer: boolean;
    isHltv: boolean;
}
export interface IStringTableUpdateEvent<T> {
    table: IStringTable<T>;
    entryIndex: number;
    entry: string;
    userData: T | null;
}
export interface IStringTableEntry<T> {
    entry: string;
    userData: T | null;
}
export interface IStringTable<T> {
    name: string;
    entries: Array<IStringTableEntry<T>>;
    userDataSizeBits: number;
    userDataFixedSize: boolean;
    maxEntries: number;
}
export declare type WellKnownStringTable = "downloadables" | "modelprecache" | "genericprecache" | "soundprecache" | "decalprecache" | "instancebaseline" | "lightstyles" | "userinfo" | "dynamicmodel" | "server_query_info" | "ExtraParticleFilesTable" | "ParticleEffectNames" | "EffectDispatch" | "VguiScreen" | "Materials" | "InfoPanel" | "Scenes" | "Movies" | "GameRulesCreation";
export declare interface StringTables {
    findTableByName(table: "userinfo"): IStringTable<IPlayerInfo> | undefined;
    findTableByName(table: WellKnownStringTable): IStringTable<Buffer> | undefined;
    /**
     * Fired when a table is created. Entries are empty at this point.
     */
    on(event: "create", listener: (table: IStringTable<any>) => void): this;
    emit(name: "create", event: IStringTable<any>): boolean;
    /**
     * Fired after a table is created. Entries have been populated by now.
     */
    on(event: "postcreate", listener: (table: IStringTable<any>) => void): this;
    emit(name: "postcreate", event: IStringTable<any>): boolean;
    /**
     * Fired when a string table entry is updated.
     */
    on(event: "update", listener: (event: IStringTableUpdateEvent<any>) => void): this;
    emit(name: "update", event: IStringTableUpdateEvent<any>): boolean;
}
/**
 * Handles string tables for a demo file.
 */
export declare class StringTables extends EventEmitter {
    tables: Array<IStringTable<any>>;
    userDataCallbacks: {
        [table: string]: (buf: Buffer) => any;
    };
    constructor();
    listen(messageEvents: DemoFile): void;
    handleStringTables(bitbuf: BitStream): void;
    private _handleStringTable;
    private _parseStringTableUpdate;
    private _handleCreateStringTable;
    private _handleUpdateStringTable;
}
