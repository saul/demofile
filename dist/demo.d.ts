/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from "events";
import { Readable } from "stream";
import { ConVars } from "./convars";
import { Entities } from "./entities";
import { GameRules } from "./entities/gamerules";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { GameEvents } from "./gameevents";
import { NetMessageName } from "./net";
import { CNETMsgDisconnect, CNETMsgFile, CNETMsgNOP, CNETMsgPlayerAvatarData, CNETMsgSetConVar, CNETMsgSignonState, CNETMsgSplitScreenUser, CNETMsgStringCmd, CNETMsgTick, CSVCMsgBroadcastCommand, CSVCMsgBSPDecal, CSVCMsgClassInfo, CSVCMsgCmdKeyValues, CSVCMsgCreateStringTable, CSVCMsgCrosshairAngle, CSVCMsgEncryptedData, CSVCMsgEntityMsg, CSVCMsgFixAngle, CSVCMsgGameEvent, CSVCMsgGameEventList, CSVCMsgGetCvarValue, CSVCMsgHltvReplay, CSVCMsgMenu, CSVCMsgPacketEntities, CSVCMsgPaintmapData, CSVCMsgPrefetch, CSVCMsgPrint, CSVCMsgSendTable, CSVCMsgServerInfo, CSVCMsgSetPause, CSVCMsgSetView, CSVCMsgSounds, CSVCMsgSplitScreen, CSVCMsgTempEntities, CSVCMsgUpdateStringTable, CSVCMsgUserMessage, CSVCMsgVoiceData, CSVCMsgVoiceInit } from "./protobufs/netmessages";
import { Vector } from "./sendtabletypes";
import { StringTables } from "./stringtables";
import { UserMessages } from "./usermessages";
import { IGrenadeTrajectoryEvent } from "./supplements/grenadetrajectory";
import { IMolotovDetonateEvent } from "./supplements/molotovdetonate";
import { IItemPurchaseEvent } from "./supplements/itempurchase";
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
export declare function parseHeader(buffer: ArrayBuffer): IDemoHeader;
export interface IDemoStartEvent {
    /**
     * Cancel parsing the demo.
     */
    cancel: () => void;
}
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
export interface IDemoWarningEvent {
    /**
     * Message explaining the warning.
     */
    message: string;
}
export declare interface DemoFile {
    /**
     * Fired when parsing begins.
     */
    on(event: "start", listener: (event: IDemoStartEvent) => void): this;
    emit(name: "start", event: IDemoStartEvent): boolean;
    /**
     * Fired when a fatal error occurs during parsing.
     */
    on(event: "error", listener: (error: Error) => void): this;
    emit(name: "error", error: Error): boolean;
    /**
     * Fired when a non-fatal error occurs during parsing.
     */
    on(event: "warning", listener: (event: IDemoWarningEvent) => void): this;
    emit(name: "warning", event: IDemoWarningEvent): boolean;
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
     * This event is not emitted when parsing streams or broadcasts.
     */
    on(event: "progress", listener: (progressFraction: number) => void): this;
    emit(name: "progress", progressFraction: number): boolean;
    /**
     * Fired each frame indicating all inputs of the recording player.
     * Note this is only fired for in-eye/perspective demos.
     */
    on(event: "usercmd", listener: (userCmd: IUserCmd) => void): this;
    emit(name: "usercmd", userCmd: IUserCmd): boolean;
    on(event: "newListener", listener: (event: string) => void): this;
    on(event: "removeListener", listener: (event: string) => void): this;
    /**
     * Fired when a grenade detonates, giving information about its trajectory and who threw it.
     */
    on(event: "grenadeTrajectory", listener: (event: IGrenadeTrajectoryEvent) => void): this;
    emit(name: "grenadeTrajectory", event: IGrenadeTrajectoryEvent): boolean;
    /**
     * Fired when a molotov or incendiary grenade detonates, giving information about who threw it.
     * This is due to lack of information on the `molotov_detonate` game event.
     */
    on(event: "molotovDetonate", listener: (event: IMolotovDetonateEvent) => void): this;
    emit(name: "molotovDetonate", event: IMolotovDetonateEvent): boolean;
    /**
     * Fired when a player purchases an item.
     */
    on(event: "itemPurchase", listener: (event: IItemPurchaseEvent) => void): this;
    emit(name: "itemPurchase", event: IItemPurchaseEvent): boolean;
    /**
     * Fired after all commands are processed for a tick.
     */
    on(event: "tickend", listener: (tick: number) => void): this;
    emit(name: "tickend", tick: number): boolean;
    emit(name: NetMessageName, msg: any): boolean;
    on(message: "net_NOP", listener: (msg: CNETMsgNOP) => void): this;
    on(message: "net_Disconnect", listener: (msg: CNETMsgDisconnect) => void): this;
    on(message: "net_File", listener: (msg: CNETMsgFile) => void): this;
    on(message: "net_SplitScreenUser", listener: (msg: CNETMsgSplitScreenUser) => void): this;
    on(message: "net_Tick", listener: (msg: CNETMsgTick) => void): this;
    on(message: "net_StringCmd", listener: (msg: CNETMsgStringCmd) => void): this;
    on(message: "net_SetConVar", listener: (msg: CNETMsgSetConVar) => void): this;
    on(message: "net_SignonState", listener: (msg: CNETMsgSignonState) => void): this;
    on(message: "net_PlayerAvatarData", listener: (msg: CNETMsgPlayerAvatarData) => void): this;
    on(message: "svc_ServerInfo", listener: (msg: CSVCMsgServerInfo) => void): this;
    on(message: "svc_SendTable", listener: (msg: CSVCMsgSendTable) => void): this;
    on(message: "svc_ClassInfo", listener: (msg: CSVCMsgClassInfo) => void): this;
    on(message: "svc_SetPause", listener: (msg: CSVCMsgSetPause) => void): this;
    on(message: "svc_CreateStringTable", listener: (msg: CSVCMsgCreateStringTable) => void): this;
    on(message: "svc_UpdateStringTable", listener: (msg: CSVCMsgUpdateStringTable) => void): this;
    on(message: "svc_VoiceInit", listener: (msg: CSVCMsgVoiceInit) => void): this;
    on(message: "svc_VoiceData", listener: (msg: CSVCMsgVoiceData) => void): this;
    on(message: "svc_Print", listener: (msg: CSVCMsgPrint) => void): this;
    on(message: "svc_Sounds", listener: (msg: CSVCMsgSounds) => void): this;
    on(message: "svc_SetView", listener: (msg: CSVCMsgSetView) => void): this;
    on(message: "svc_FixAngle", listener: (msg: CSVCMsgFixAngle) => void): this;
    on(message: "svc_CrosshairAngle", listener: (msg: CSVCMsgCrosshairAngle) => void): this;
    on(message: "svc_BSPDecal", listener: (msg: CSVCMsgBSPDecal) => void): this;
    on(message: "svc_SplitScreen", listener: (msg: CSVCMsgSplitScreen) => void): this;
    on(message: "svc_UserMessage", listener: (msg: CSVCMsgUserMessage) => void): this;
    on(message: "svc_EntityMessage", listener: (msg: CSVCMsgEntityMsg) => void): this;
    on(message: "svc_GameEvent", listener: (msg: CSVCMsgGameEvent) => void): this;
    on(message: "svc_PacketEntities", listener: (msg: CSVCMsgPacketEntities) => void): this;
    on(message: "svc_TempEntities", listener: (msg: CSVCMsgTempEntities) => void): this;
    on(message: "svc_Prefetch", listener: (msg: CSVCMsgPrefetch) => void): this;
    on(message: "svc_Menu", listener: (msg: CSVCMsgMenu) => void): this;
    on(message: "svc_GameEventList", listener: (msg: CSVCMsgGameEventList) => void): this;
    on(message: "svc_GetCvarValue", listener: (msg: CSVCMsgGetCvarValue) => void): this;
    on(message: "svc_PaintmapData", listener: (msg: CSVCMsgPaintmapData) => void): this;
    on(message: "svc_CmdKeyValues", listener: (msg: CSVCMsgCmdKeyValues) => void): this;
    on(message: "svc_EncryptedData", listener: (msg: CSVCMsgEncryptedData) => void): this;
    on(message: "svc_HltvReplay", listener: (msg: CSVCMsgHltvReplay) => void): this;
    on(message: "svc_Broadcast_Command", listener: (msg: CSVCMsgBroadcastCommand) => void): this;
}
export declare type InputButton = "attack" | "jump" | "duck" | "forward" | "back" | "use" | "cancel" | "left" | "right" | "moveleft" | "moveright" | "attack2" | "run" | "reload" | "alt1" | "alt2" | "score" | "speed" | "walk" | "zoom" | "weapon1" | "weapon2" | "bullrush" | "grenade1" | "grenade2" | "lookspin";
export interface IUserCmd {
    commandNumber: number;
    tickCount: number;
    viewAngles: Vector;
    aimDirection: Vector;
    forwardMove: number;
    sideMove: number;
    upMove: number;
    buttons: ReadonlyArray<InputButton>;
    impulse: number;
    weaponSelect: number;
    weaponSubType: number;
    randomSeed: number;
    mouseDeltaX: number;
    mouseDeltaY: number;
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
    get players(): ReadonlyArray<Player>;
    /**
     * Shortcut for `this.entities.teams`
     * @returns All team entities
     */
    get teams(): ReadonlyArray<Team>;
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
     * When parsing, set to the splitscreen slot for the current command.
     * @deprecated Splitscreen slot is unused for PC games.
     */
    playerSlot: number;
    /**
     * Set to the client slot of the recording player.
     * Always null for GOTV demos.
     */
    recordingClientSlot: number | null;
    readonly entities: Entities;
    readonly gameEvents: GameEvents;
    readonly stringTables: StringTables;
    readonly userMessages: UserMessages;
    readonly conVars: ConVars;
    private _bytebuf;
    private _chunks;
    private _lastThreadYieldTime;
    private _immediateTimerToken;
    private _timeoutTimerToken;
    private _encryptionKey;
    private _hasEnded;
    private _isBroadcastFragment;
    private _supplementEvents;
    private _supplementCleanupFns;
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
    private _findSupplement;
    /**
     * Start streaming a GOTV broadcast over HTTP.
     * Will keep streaming until the broadcast finishes.
     *
     * @param url URL to the GOTV broadcast.
     * @returns Promise that resolves then the broadcast finishes.
     */
    parseBroadcast(url: string): Promise<void>;
    parseStream(stream: Readable): void;
    parse(buffer: Buffer): void;
    /**
     * Cancel the current parse operation.
     */
    cancel(): void;
    /**
     * Set encryption key for decrypting `svc_EncryptedData` packets.
     * This allows decryption of messages from public matchmaking, like
     * chat messages and caster voice data.
     *
     * The key can be extracted from `match730_*.dem.info` files with `extractPublicEncryptionKey`.
     *
     * @param publicKey Public encryption key.
     */
    setEncryptionKey(publicKey: Uint8Array | null): void;
    private _emitEnd;
    private _parseHeader;
    private _readIBytes;
    private _handleEncryptedData;
    private _handleStringTableUpdate;
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
    private _tryEnsureRemaining;
    private _ensureRemaining;
    private _readCommand;
    private _parseRecurse;
}
export {};
