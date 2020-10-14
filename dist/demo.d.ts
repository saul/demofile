/// <reference types="node" />
import { EventEmitter } from "events";
import { ConVars } from "./convars";
import { Entities } from "./entities";
export { GameRules } from "./entities/gamerules";
export { Player } from "./entities/player";
export { Team } from "./entities/team";
import { GameRules } from "./entities/gamerules";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { GameEvents } from "./gameevents";
import { NetMessageName } from "./net";
import { ICNETMsg_Disconnect, ICNETMsg_File, ICNETMsg_NOP, ICNETMsg_PlayerAvatarData, ICNETMsg_SetConVar, ICNETMsg_SignonState, ICNETMsg_SplitScreenUser, ICNETMsg_StringCmd, ICNETMsg_Tick, ICSVCMsg_BSPDecal, ICSVCMsg_ClassInfo, ICSVCMsg_CmdKeyValues, ICSVCMsg_CreateStringTable, ICSVCMsg_CrosshairAngle, ICSVCMsg_EncryptedData, ICSVCMsg_EntityMsg, ICSVCMsg_FixAngle, ICSVCMsg_GameEvent, ICSVCMsg_GameEventList, ICSVCMsg_GetCvarValue, ICSVCMsg_HltvReplay, ICSVCMsg_Menu, ICSVCMsg_PacketEntities, ICSVCMsg_PaintmapData, ICSVCMsg_Prefetch, ICSVCMsg_Print, ICSVCMsg_SendTable, ICSVCMsg_ServerInfo, ICSVCMsg_SetPause, ICSVCMsg_SetView, ICSVCMsg_Sounds, ICSVCMsg_SplitScreen, ICSVCMsg_TempEntities, ICSVCMsg_UpdateStringTable, ICSVCMsg_UserMessage, ICSVCMsg_VoiceData, ICSVCMsg_VoiceInit } from "./protobufs/netmessages";
import { StringTables } from "./stringtables";
import { UserMessages } from "./usermessages";
export { parseBinaryKeyValues } from "./keyvalues";
interface IDemoHeader {
    /**
     * Header magic (HL2DEMO)
     */
    magic: string;
    /**
     * Demo protocol version
     */
    protocol: number;
    /**
     * Network protocol version
     */
    networkProtocol: number;
    /**
     * Server hostname
     */
    serverName: string;
    /**
     * Recording player name
     */
    clientName: string;
    /**
     * Level name
     */
    mapName: string;
    /**
     * Game directory
     */
    gameDirectory: string;
    /**
     * Total playback time (seconds)
     */
    playbackTime: number;
    /**
     * Total playback ticks
     */
    playbackTicks: number;
    /**
     * Total playback frames
     */
    playbackFrames: number;
    /**
     * Length of signon (bytes)
     */
    signonLength: number;
}
/**
 * Parses a demo file header from the buffer.
 * @param {ArrayBuffer} buffer - Buffer of the demo header
 * @returns {IDemoHeader} Header object
 */
export declare function parseHeader(buffer: Buffer): IDemoHeader;
export interface IDemoEndEvent {
    /**
     * Error that caused the premature end of parsing.
     */
    error?: Error;
    /**
     * Did parsing finish prematurely because the demo was incomplete?
     */
    incomplete: boolean;
}
export declare interface DemoFile {
    /**
     * Fired when parsing begins.
     */
    on(event: "start", listener: () => void): this;
    emit(name: "start"): boolean;
    /**
     * Fired when parsing failed.
     */
    on(event: "error", listener: (error: Error) => void): this;
    emit(name: "error", error: Error): boolean;
    /**
     * Fired when parsing has finished, successfully or otherwise.
     */
    on(event: "end", listener: (event: IDemoEndEvent) => void): this;
    emit(name: "end", event: IDemoEndEvent): boolean;
    /**
     * Fired when a tick starts, before any tick command processing.
     */
    on(event: "tickstart", listener: (tick: number) => void): this;
    emit(name: "tickstart", tick: number): boolean;
    /**
     * Fired per command. Parameter is a value in range [0,1] that indicates
     * the percentage of the demo file has been parsed so far.
     */
    on(event: "progress", listener: (progressFraction: number) => void): this;
    emit(name: "progress", progressFraction: number): boolean;
    /**
     * Fired after all commands are processed for a tick.
     */
    on(event: "tickend", listener: (tick: number) => void): this;
    emit(name: "tickend", tick: number): boolean;
    emit(name: NetMessageName, msg: any): boolean;
    on(message: "net_NOP", listener: (msg: RequiredNonNullable<ICNETMsg_NOP>) => void): this;
    on(message: "net_Disconnect", listener: (msg: RequiredNonNullable<ICNETMsg_Disconnect>) => void): this;
    on(message: "net_File", listener: (msg: RequiredNonNullable<ICNETMsg_File>) => void): this;
    on(message: "net_SplitScreenUser", listener: (msg: RequiredNonNullable<ICNETMsg_SplitScreenUser>) => void): this;
    on(message: "net_Tick", listener: (msg: RequiredNonNullable<ICNETMsg_Tick>) => void): this;
    on(message: "net_StringCmd", listener: (msg: RequiredNonNullable<ICNETMsg_StringCmd>) => void): this;
    on(message: "net_SetConVar", listener: (msg: RequiredNonNullable<ICNETMsg_SetConVar>) => void): this;
    on(message: "net_SignonState", listener: (msg: RequiredNonNullable<ICNETMsg_SignonState>) => void): this;
    on(message: "net_PlayerAvatarData", listener: (msg: RequiredNonNullable<ICNETMsg_PlayerAvatarData>) => void): this;
    on(message: "svc_ServerInfo", listener: (msg: RequiredNonNullable<ICSVCMsg_ServerInfo>) => void): this;
    on(message: "svc_SendTable", listener: (msg: RequiredNonNullable<ICSVCMsg_SendTable>) => void): this;
    on(message: "svc_ClassInfo", listener: (msg: RequiredNonNullable<ICSVCMsg_ClassInfo>) => void): this;
    on(message: "svc_SetPause", listener: (msg: RequiredNonNullable<ICSVCMsg_SetPause>) => void): this;
    on(message: "svc_CreateStringTable", listener: (msg: RequiredNonNullable<ICSVCMsg_CreateStringTable>) => void): this;
    on(message: "svc_UpdateStringTable", listener: (msg: RequiredNonNullable<ICSVCMsg_UpdateStringTable>) => void): this;
    on(message: "svc_VoiceInit", listener: (msg: RequiredNonNullable<ICSVCMsg_VoiceInit>) => void): this;
    on(message: "svc_VoiceData", listener: (msg: RequiredNonNullable<ICSVCMsg_VoiceData>) => void): this;
    on(message: "svc_Print", listener: (msg: RequiredNonNullable<ICSVCMsg_Print>) => void): this;
    on(message: "svc_Sounds", listener: (msg: RequiredNonNullable<ICSVCMsg_Sounds>) => void): this;
    on(message: "svc_SetView", listener: (msg: RequiredNonNullable<ICSVCMsg_SetView>) => void): this;
    on(message: "svc_FixAngle", listener: (msg: RequiredNonNullable<ICSVCMsg_FixAngle>) => void): this;
    on(message: "svc_CrosshairAngle", listener: (msg: RequiredNonNullable<ICSVCMsg_CrosshairAngle>) => void): this;
    on(message: "svc_BSPDecal", listener: (msg: RequiredNonNullable<ICSVCMsg_BSPDecal>) => void): this;
    on(message: "svc_SplitScreen", listener: (msg: RequiredNonNullable<ICSVCMsg_SplitScreen>) => void): this;
    on(message: "svc_UserMessage", listener: (msg: RequiredNonNullable<ICSVCMsg_UserMessage>) => void): this;
    on(message: "svc_EntityMessage", listener: (msg: RequiredNonNullable<ICSVCMsg_EntityMsg>) => void): this;
    on(message: "svc_GameEvent", listener: (msg: RequiredNonNullable<ICSVCMsg_GameEvent>) => void): this;
    on(message: "svc_PacketEntities", listener: (msg: RequiredNonNullable<ICSVCMsg_PacketEntities>) => void): this;
    on(message: "svc_TempEntities", listener: (msg: RequiredNonNullable<ICSVCMsg_TempEntities>) => void): this;
    on(message: "svc_Prefetch", listener: (msg: RequiredNonNullable<ICSVCMsg_Prefetch>) => void): this;
    on(message: "svc_Menu", listener: (msg: RequiredNonNullable<ICSVCMsg_Menu>) => void): this;
    on(message: "svc_GameEventList", listener: (msg: RequiredNonNullable<ICSVCMsg_GameEventList>) => void): this;
    on(message: "svc_GetCvarValue", listener: (msg: RequiredNonNullable<ICSVCMsg_GetCvarValue>) => void): this;
    on(message: "svc_PaintmapData", listener: (msg: RequiredNonNullable<ICSVCMsg_PaintmapData>) => void): this;
    on(message: "svc_CmdKeyValues", listener: (msg: RequiredNonNullable<ICSVCMsg_CmdKeyValues>) => void): this;
    on(message: "svc_EncryptedData", listener: (msg: RequiredNonNullable<ICSVCMsg_EncryptedData>) => void): this;
    on(message: "svc_HltvReplay", listener: (msg: RequiredNonNullable<ICSVCMsg_HltvReplay>) => void): this;
}
/**
 * Represents a demo file for parsing.
 */
export declare class DemoFile extends EventEmitter {
    /**
     * @returns Number of ticks per second
     */
    get tickRate(): number;
    /**
     * @returns Number of seconds elapsed
     */
    get currentTime(): number;
    /**
     * Shortcut for `this.entities.players`
     * @returns All connected player entities
     */
    get players(): Player[];
    /**
     * Shortcut for `this.entities.teams`
     * @returns All team entities
     */
    get teams(): Team[];
    /**
     * Shortcut for `this.entities.gameRules`
     * @returns GameRules entity
     */
    get gameRules(): GameRules;
    /**
     * When parsing, set to current tick.
     */
    currentTick: number;
    /**
     * Number of seconds per tick
     */
    tickInterval: number;
    header: IDemoHeader;
    /**
     * When parsing, set to player slot for current command.
     */
    playerSlot: number;
    readonly entities: Entities;
    readonly gameEvents: GameEvents;
    readonly stringTables: StringTables;
    readonly userMessages: UserMessages;
    readonly conVars: ConVars;
    private _bytebuf;
    private _lastThreadYieldTime;
    private _immediateTimerToken;
    private _timeoutTimerToken;
    /**
     * Starts parsing buffer as a demo file.
     *
     * @fires DemoFile#tickstart
     * @fires DemoFile#tickend
     * @fires DemoFile#end
     *
     * @param {ArrayBuffer} buffer - Buffer pointing to start of demo header
     */
    constructor();
    parse(buffer: Buffer): void;
    /**
     * Cancel the current parse operation.
     */
    cancel(): void;
    /**
     * Fired when a packet of this type is hit. `svc_MessageName` events are also fired.
     * @public
     * @event DemoFile#net_MessageName
     */
    private _handleDemoPacket;
    private _handleDataChunk;
    private _handleDataTables;
    private _handleUserCmd;
    private _handleStringTables;
    private _recurse;
    private _parseRecurse;
}
