import * as Long from "long";
import { Writer, Reader } from "protobufjs/minimal";
export interface CMsgVector {
    x: number;
    y: number;
    z: number;
}
export interface CMsgVector2D {
    x: number;
    y: number;
}
export interface CMsgQAngle {
    x: number;
    y: number;
    z: number;
}
export interface CMsgRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface CNETMsgTick {
    tick: number;
    hostComputationtime: number;
    hostComputationtimeStdDeviation: number;
    hostFramestarttimeStdDeviation: number;
    hltvReplayFlags: number;
}
export interface CNETMsgStringCmd {
    command: string;
}
export interface CNETMsgSignonState {
    signonState: number;
    spawnCount: number;
    numServerPlayers: number;
    playersNetworkids: string[];
    mapName: string;
}
export interface CMsgCVars {
    cvars: CMsgCVars_CVar[];
}
export interface CMsgCVars_CVar {
    name: string;
    value: string;
    dictionaryName: number;
}
export interface CNETMsgSetConVar {
    convars: CMsgCVars | undefined;
}
export interface CNETMsgNOP {
}
export interface CNETMsgDisconnect {
    text: string;
}
export interface CNETMsgFile {
    transferId: number;
    fileName: string;
    isReplayDemoFile: boolean;
    deny: boolean;
}
export interface CNETMsgSplitScreenUser {
    slot: number;
}
export interface CNETMsgPlayerAvatarData {
    accountid: number;
    rgb: Uint8Array;
}
export interface CCLCMsgClientInfo {
    sendTableCrc: number;
    serverCount: number;
    isHltv: boolean;
    isReplay: boolean;
    friendsId: number;
    friendsName: string;
    customFiles: number[];
}
export interface CCLCMsgMove {
    numBackupCommands: number;
    numNewCommands: number;
    data: Uint8Array;
}
export interface CCLCMsgVoiceData {
    data: Uint8Array;
    xuid: Long;
    format: VoiceDataFormatT;
    sequenceBytes: number;
    sectionNumber: number;
    uncompressedSampleOffset: number;
}
export interface CCLCMsgBaselineAck {
    baselineTick: number;
    baselineNr: number;
}
export interface CCLCMsgListenEvents {
    eventMask: number[];
}
export interface CCLCMsgRespondCvarValue {
    cookie: number;
    statusCode: number;
    name: string;
    value: string;
}
export interface CCLCMsgFileCRCCheck {
    codePath: number;
    path: string;
    codeFilename: number;
    filename: string;
    fileFraction: number;
    md5: Uint8Array;
    crc: number;
    fileHashType: number;
    fileLen: number;
    packFileId: number;
    packFileNumber: number;
}
export interface CCLCMsgLoadingProgress {
    progress: number;
}
export interface CCLCMsgSplitPlayerConnect {
    convars: CMsgCVars | undefined;
}
export interface CCLCMsgCmdKeyValues {
    keyvalues: Uint8Array;
}
export interface CSVCMsgServerInfo {
    protocol: number;
    serverCount: number;
    isDedicated: boolean;
    isOfficialValveServer: boolean;
    isHltv: boolean;
    isReplay: boolean;
    isRedirectingToProxyRelay: boolean;
    cOs: number;
    mapCrc: number;
    clientCrc: number;
    stringTableCrc: number;
    maxClients: number;
    maxClasses: number;
    playerSlot: number;
    tickInterval: number;
    gameDir: string;
    mapName: string;
    mapGroupName: string;
    skyName: string;
    hostName: string;
    publicIp: number;
    ugcMapId: Long;
}
export interface CSVCMsgClassInfo {
    createOnClient: boolean;
    classes: CSVCMsgClassInfo_classT[];
}
export interface CSVCMsgClassInfo_classT {
    classId: number;
    dataTableName: string;
    className: string;
}
export interface CSVCMsgSendTable {
    isEnd: boolean;
    netTableName: string;
    needsDecoder: boolean;
    props: CSVCMsgSendTable_sendpropT[];
}
export interface CSVCMsgSendTable_sendpropT {
    type: number;
    varName: string;
    flags: number;
    priority: number;
    dtName: string;
    numElements: number;
    lowValue: number;
    highValue: number;
    numBits: number;
}
export interface CSVCMsgPrint {
    text: string;
}
export interface CSVCMsgSetPause {
    paused: boolean;
}
export interface CSVCMsgSetView {
    entityIndex: number;
}
export interface CSVCMsgCreateStringTable {
    name: string;
    maxEntries: number;
    numEntries: number;
    userDataFixedSize: boolean;
    userDataSize: number;
    userDataSizeBits: number;
    flags: number;
    stringData: Uint8Array;
}
export interface CSVCMsgUpdateStringTable {
    tableId: number;
    numChangedEntries: number;
    stringData: Uint8Array;
}
export interface CSVCMsgVoiceInit {
    quality: number;
    codec: string;
    version: number;
}
export interface CSVCMsgVoiceData {
    client: number;
    proximity: boolean;
    xuid: Long;
    audibleMask: number;
    voiceData: Uint8Array;
    caster: boolean;
    format: VoiceDataFormatT;
    sequenceBytes: number;
    sectionNumber: number;
    uncompressedSampleOffset: number;
}
export interface CSVCMsgFixAngle {
    relative: boolean;
    angle: CMsgQAngle | undefined;
}
export interface CSVCMsgCrosshairAngle {
    angle: CMsgQAngle | undefined;
}
export interface CSVCMsgPrefetch {
    soundIndex: number;
}
export interface CSVCMsgBSPDecal {
    pos: CMsgVector | undefined;
    decalTextureIndex: number;
    entityIndex: number;
    modelIndex: number;
    lowPriority: boolean;
}
export interface CSVCMsgSplitScreen {
    type: ESplitScreenMessageType;
    slot: number;
    playerIndex: number;
}
export interface CSVCMsgGetCvarValue {
    cookie: number;
    cvarName: string;
}
export interface CSVCMsgMenu {
    dialogType: number;
    menuKeyValues: Uint8Array;
}
export interface CSVCMsgUserMessage {
    msgType: number;
    msgData: Uint8Array;
    passthrough: number;
}
export interface CSVCMsgPaintmapData {
    paintmap: Uint8Array;
}
export interface CSVCMsgGameEvent {
    eventName: string;
    eventid: number;
    keys: CSVCMsgGameEvent_keyT[];
    passthrough: number;
}
export interface CSVCMsgGameEvent_keyT {
    type: number;
    valString: string;
    valFloat: number;
    valLong: number;
    valShort: number;
    valByte: number;
    valBool: boolean;
    valUint64: Long;
    valWstring: Uint8Array;
}
export interface CSVCMsgGameEventList {
    descriptors: CSVCMsgGameEventList_descriptorT[];
}
export interface CSVCMsgGameEventList_keyT {
    type: number;
    name: string;
}
export interface CSVCMsgGameEventList_descriptorT {
    eventid: number;
    name: string;
    keys: CSVCMsgGameEventList_keyT[];
}
export interface CSVCMsgTempEntities {
    reliable: boolean;
    numEntries: number;
    entityData: Uint8Array;
}
export interface CSVCMsgPacketEntities {
    maxEntries: number;
    updatedEntries: number;
    isDelta: boolean;
    updateBaseline: boolean;
    baseline: number;
    deltaFrom: number;
    entityData: Uint8Array;
}
export interface CSVCMsgSounds {
    reliableSound: boolean;
    sounds: CSVCMsgSounds_sounddataT[];
}
export interface CSVCMsgSounds_sounddataT {
    originX: number;
    originY: number;
    originZ: number;
    volume: number;
    delayValue: number;
    sequenceNumber: number;
    entityIndex: number;
    channel: number;
    pitch: number;
    flags: number;
    soundNum: number;
    soundNumHandle: number;
    speakerEntity: number;
    randomSeed: number;
    soundLevel: number;
    isSentence: boolean;
    isAmbient: boolean;
}
export interface CSVCMsgEntityMsg {
    entIndex: number;
    classId: number;
    entData: Uint8Array;
}
export interface CSVCMsgCmdKeyValues {
    keyvalues: Uint8Array;
}
export interface CSVCMsgEncryptedData {
    encrypted: Uint8Array;
    keyType: number;
}
export interface CSVCMsgHltvReplay {
    delay: number;
    primaryTarget: number;
    replayStopAt: number;
    replayStartAt: number;
    replaySlowdownBegin: number;
    replaySlowdownEnd: number;
    replaySlowdownRate: number;
}
export interface CCLCMsgHltvReplay {
    request: number;
    slowdownLength: number;
    slowdownRate: number;
    primaryTargetEntIndex: number;
    eventTime: number;
}
export interface CSVCMsgBroadcastCommand {
    cmd: string;
}
export declare const protobufPackage = "";
export declare enum NETMessages {
    net_NOP = 0,
    net_Disconnect = 1,
    net_File = 2,
    net_SplitScreenUser = 3,
    net_Tick = 4,
    net_StringCmd = 5,
    net_SetConVar = 6,
    net_SignonState = 7,
    net_PlayerAvatarData = 100
}
export declare enum CLCMessages {
    clc_ClientInfo = 8,
    clc_Move = 9,
    clc_VoiceData = 10,
    clc_BaselineAck = 11,
    clc_ListenEvents = 12,
    clc_RespondCvarValue = 13,
    clc_FileCRCCheck = 14,
    clc_LoadingProgress = 15,
    clc_SplitPlayerConnect = 16,
    clc_ClientMessage = 17,
    clc_CmdKeyValues = 18,
    clc_HltvReplay = 20
}
export declare enum VoiceDataFormatT {
    VOICEDATA_FORMAT_STEAM = 0,
    VOICEDATA_FORMAT_ENGINE = 1
}
export declare enum ESplitScreenMessageType {
    MSG_SPLITSCREEN_ADDUSER = 0,
    MSG_SPLITSCREEN_REMOVEUSER = 1,
    MSG_SPLITSCREEN_TYPE_BITS = 1
}
export declare enum SVCMessages {
    svc_ServerInfo = 8,
    svc_SendTable = 9,
    svc_ClassInfo = 10,
    svc_SetPause = 11,
    svc_CreateStringTable = 12,
    svc_UpdateStringTable = 13,
    svc_VoiceInit = 14,
    svc_VoiceData = 15,
    svc_Print = 16,
    svc_Sounds = 17,
    svc_SetView = 18,
    svc_FixAngle = 19,
    svc_CrosshairAngle = 20,
    svc_BSPDecal = 21,
    svc_SplitScreen = 22,
    svc_UserMessage = 23,
    svc_EntityMessage = 24,
    svc_GameEvent = 25,
    svc_PacketEntities = 26,
    svc_TempEntities = 27,
    svc_Prefetch = 28,
    svc_Menu = 29,
    svc_GameEventList = 30,
    svc_GetCvarValue = 31,
    svc_PaintmapData = 33,
    svc_CmdKeyValues = 34,
    svc_EncryptedData = 35,
    svc_HltvReplay = 36,
    svc_Broadcast_Command = 38
}
export declare enum ReplayEventTypeT {
    REPLAY_EVENT_CANCEL = 0,
    REPLAY_EVENT_DEATH = 1,
    REPLAY_EVENT_GENERIC = 2,
    REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3
}
export declare const CMsgVector: {
    encode(message: CMsgVector, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgVector;
};
export declare const CMsgVector2D: {
    encode(message: CMsgVector2D, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgVector2D;
};
export declare const CMsgQAngle: {
    encode(message: CMsgQAngle, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgQAngle;
};
export declare const CMsgRGBA: {
    encode(message: CMsgRGBA, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgRGBA;
};
export declare const CNETMsgTick: {
    encode(message: CNETMsgTick, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgTick;
};
export declare const CNETMsgStringCmd: {
    encode(message: CNETMsgStringCmd, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgStringCmd;
};
export declare const CNETMsgSignonState: {
    encode(message: CNETMsgSignonState, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgSignonState;
};
export declare const CMsgCVars: {
    encode(message: CMsgCVars, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgCVars;
};
export declare const CMsgCVars_CVar: {
    encode(message: CMsgCVars_CVar, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgCVars_CVar;
};
export declare const CNETMsgSetConVar: {
    encode(message: CNETMsgSetConVar, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgSetConVar;
};
export declare const CNETMsgNOP: {
    encode(_: CNETMsgNOP, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgNOP;
};
export declare const CNETMsgDisconnect: {
    encode(message: CNETMsgDisconnect, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgDisconnect;
};
export declare const CNETMsgFile: {
    encode(message: CNETMsgFile, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgFile;
};
export declare const CNETMsgSplitScreenUser: {
    encode(message: CNETMsgSplitScreenUser, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgSplitScreenUser;
};
export declare const CNETMsgPlayerAvatarData: {
    encode(message: CNETMsgPlayerAvatarData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CNETMsgPlayerAvatarData;
};
export declare const CCLCMsgClientInfo: {
    encode(message: CCLCMsgClientInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgClientInfo;
};
export declare const CCLCMsgMove: {
    encode(message: CCLCMsgMove, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgMove;
};
export declare const CCLCMsgVoiceData: {
    encode(message: CCLCMsgVoiceData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgVoiceData;
};
export declare const CCLCMsgBaselineAck: {
    encode(message: CCLCMsgBaselineAck, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgBaselineAck;
};
export declare const CCLCMsgListenEvents: {
    encode(message: CCLCMsgListenEvents, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgListenEvents;
};
export declare const CCLCMsgRespondCvarValue: {
    encode(message: CCLCMsgRespondCvarValue, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgRespondCvarValue;
};
export declare const CCLCMsgFileCRCCheck: {
    encode(message: CCLCMsgFileCRCCheck, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgFileCRCCheck;
};
export declare const CCLCMsgLoadingProgress: {
    encode(message: CCLCMsgLoadingProgress, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgLoadingProgress;
};
export declare const CCLCMsgSplitPlayerConnect: {
    encode(message: CCLCMsgSplitPlayerConnect, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgSplitPlayerConnect;
};
export declare const CCLCMsgCmdKeyValues: {
    encode(message: CCLCMsgCmdKeyValues, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgCmdKeyValues;
};
export declare const CSVCMsgServerInfo: {
    encode(message: CSVCMsgServerInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgServerInfo;
};
export declare const CSVCMsgClassInfo: {
    encode(message: CSVCMsgClassInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgClassInfo;
};
export declare const CSVCMsgClassInfo_classT: {
    encode(message: CSVCMsgClassInfo_classT, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgClassInfo_classT;
};
export declare const CSVCMsgSendTable: {
    encode(message: CSVCMsgSendTable, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSendTable;
};
export declare const CSVCMsgSendTable_sendpropT: {
    encode(message: CSVCMsgSendTable_sendpropT, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSendTable_sendpropT;
};
export declare const CSVCMsgPrint: {
    encode(message: CSVCMsgPrint, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgPrint;
};
export declare const CSVCMsgSetPause: {
    encode(message: CSVCMsgSetPause, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSetPause;
};
export declare const CSVCMsgSetView: {
    encode(message: CSVCMsgSetView, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSetView;
};
export declare const CSVCMsgCreateStringTable: {
    encode(message: CSVCMsgCreateStringTable, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgCreateStringTable;
};
export declare const CSVCMsgUpdateStringTable: {
    encode(message: CSVCMsgUpdateStringTable, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgUpdateStringTable;
};
export declare const CSVCMsgVoiceInit: {
    encode(message: CSVCMsgVoiceInit, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgVoiceInit;
};
export declare const CSVCMsgVoiceData: {
    encode(message: CSVCMsgVoiceData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgVoiceData;
};
export declare const CSVCMsgFixAngle: {
    encode(message: CSVCMsgFixAngle, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgFixAngle;
};
export declare const CSVCMsgCrosshairAngle: {
    encode(message: CSVCMsgCrosshairAngle, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgCrosshairAngle;
};
export declare const CSVCMsgPrefetch: {
    encode(message: CSVCMsgPrefetch, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgPrefetch;
};
export declare const CSVCMsgBSPDecal: {
    encode(message: CSVCMsgBSPDecal, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgBSPDecal;
};
export declare const CSVCMsgSplitScreen: {
    encode(message: CSVCMsgSplitScreen, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSplitScreen;
};
export declare const CSVCMsgGetCvarValue: {
    encode(message: CSVCMsgGetCvarValue, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgGetCvarValue;
};
export declare const CSVCMsgMenu: {
    encode(message: CSVCMsgMenu, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgMenu;
};
export declare const CSVCMsgUserMessage: {
    encode(message: CSVCMsgUserMessage, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgUserMessage;
};
export declare const CSVCMsgPaintmapData: {
    encode(message: CSVCMsgPaintmapData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgPaintmapData;
};
export declare const CSVCMsgGameEvent: {
    encode(message: CSVCMsgGameEvent, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgGameEvent;
};
export declare const CSVCMsgGameEvent_keyT: {
    encode(message: CSVCMsgGameEvent_keyT, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgGameEvent_keyT;
};
export declare const CSVCMsgGameEventList: {
    encode(message: CSVCMsgGameEventList, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgGameEventList;
};
export declare const CSVCMsgGameEventList_keyT: {
    encode(message: CSVCMsgGameEventList_keyT, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgGameEventList_keyT;
};
export declare const CSVCMsgGameEventList_descriptorT: {
    encode(message: CSVCMsgGameEventList_descriptorT, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgGameEventList_descriptorT;
};
export declare const CSVCMsgTempEntities: {
    encode(message: CSVCMsgTempEntities, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgTempEntities;
};
export declare const CSVCMsgPacketEntities: {
    encode(message: CSVCMsgPacketEntities, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgPacketEntities;
};
export declare const CSVCMsgSounds: {
    encode(message: CSVCMsgSounds, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSounds;
};
export declare const CSVCMsgSounds_sounddataT: {
    encode(message: CSVCMsgSounds_sounddataT, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgSounds_sounddataT;
};
export declare const CSVCMsgEntityMsg: {
    encode(message: CSVCMsgEntityMsg, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgEntityMsg;
};
export declare const CSVCMsgCmdKeyValues: {
    encode(message: CSVCMsgCmdKeyValues, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgCmdKeyValues;
};
export declare const CSVCMsgEncryptedData: {
    encode(message: CSVCMsgEncryptedData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgEncryptedData;
};
export declare const CSVCMsgHltvReplay: {
    encode(message: CSVCMsgHltvReplay, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgHltvReplay;
};
export declare const CCLCMsgHltvReplay: {
    encode(message: CCLCMsgHltvReplay, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCLCMsgHltvReplay;
};
export declare const CSVCMsgBroadcastCommand: {
    encode(message: CSVCMsgBroadcastCommand, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSVCMsgBroadcastCommand;
};
