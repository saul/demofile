import { Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
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
export declare const CMsgVector: {
    encode(message: CMsgVector, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgVector;
    fromPartial<I extends {
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgVector>, never>>(object: I): CMsgVector;
};
export declare const CMsgVector2D: {
    encode(message: CMsgVector2D, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgVector2D;
    fromPartial<I extends {
        x?: number | undefined;
        y?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgVector2D>, never>>(object: I): CMsgVector2D;
};
export declare const CMsgQAngle: {
    encode(message: CMsgQAngle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgQAngle;
    fromPartial<I extends {
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgQAngle>, never>>(object: I): CMsgQAngle;
};
export declare const CMsgRGBA: {
    encode(message: CMsgRGBA, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgRGBA;
    fromPartial<I extends {
        r?: number | undefined;
        g?: number | undefined;
        b?: number | undefined;
        a?: number | undefined;
    } & {
        r?: number | undefined;
        g?: number | undefined;
        b?: number | undefined;
        a?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgRGBA>, never>>(object: I): CMsgRGBA;
};
export declare const CNETMsgTick: {
    encode(message: CNETMsgTick, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgTick;
    fromPartial<I extends {
        tick?: number | undefined;
        hostComputationtime?: number | undefined;
        hostComputationtimeStdDeviation?: number | undefined;
        hostFramestarttimeStdDeviation?: number | undefined;
        hltvReplayFlags?: number | undefined;
    } & {
        tick?: number | undefined;
        hostComputationtime?: number | undefined;
        hostComputationtimeStdDeviation?: number | undefined;
        hostFramestarttimeStdDeviation?: number | undefined;
        hltvReplayFlags?: number | undefined;
    } & Record<Exclude<keyof I, keyof CNETMsgTick>, never>>(object: I): CNETMsgTick;
};
export declare const CNETMsgStringCmd: {
    encode(message: CNETMsgStringCmd, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgStringCmd;
    fromPartial<I extends {
        command?: string | undefined;
    } & {
        command?: string | undefined;
    } & Record<Exclude<keyof I, "command">, never>>(object: I): CNETMsgStringCmd;
};
export declare const CNETMsgSignonState: {
    encode(message: CNETMsgSignonState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgSignonState;
    fromPartial<I extends {
        signonState?: number | undefined;
        spawnCount?: number | undefined;
        numServerPlayers?: number | undefined;
        playersNetworkids?: string[] | undefined;
        mapName?: string | undefined;
    } & {
        signonState?: number | undefined;
        spawnCount?: number | undefined;
        numServerPlayers?: number | undefined;
        playersNetworkids?: (string[] & string[] & Record<Exclude<keyof I["playersNetworkids"], keyof string[]>, never>) | undefined;
        mapName?: string | undefined;
    } & Record<Exclude<keyof I, keyof CNETMsgSignonState>, never>>(object: I): CNETMsgSignonState;
};
export declare const CMsgCVars: {
    encode(message: CMsgCVars, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgCVars;
    fromPartial<I extends {
        cvars?: {
            name?: string | undefined;
            value?: string | undefined;
            dictionaryName?: number | undefined;
        }[] | undefined;
    } & {
        cvars?: ({
            name?: string | undefined;
            value?: string | undefined;
            dictionaryName?: number | undefined;
        }[] & ({
            name?: string | undefined;
            value?: string | undefined;
            dictionaryName?: number | undefined;
        } & {
            name?: string | undefined;
            value?: string | undefined;
            dictionaryName?: number | undefined;
        } & Record<Exclude<keyof I["cvars"][number], keyof CMsgCVars_CVar>, never>)[] & Record<Exclude<keyof I["cvars"], keyof {
            name?: string | undefined;
            value?: string | undefined;
            dictionaryName?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "cvars">, never>>(object: I): CMsgCVars;
};
export declare const CMsgCVars_CVar: {
    encode(message: CMsgCVars_CVar, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgCVars_CVar;
    fromPartial<I extends {
        name?: string | undefined;
        value?: string | undefined;
        dictionaryName?: number | undefined;
    } & {
        name?: string | undefined;
        value?: string | undefined;
        dictionaryName?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgCVars_CVar>, never>>(object: I): CMsgCVars_CVar;
};
export declare const CNETMsgSetConVar: {
    encode(message: CNETMsgSetConVar, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgSetConVar;
    fromPartial<I extends {
        convars?: {
            cvars?: {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        convars?: ({
            cvars?: {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[] | undefined;
        } & {
            cvars?: ({
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[] & ({
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            } & {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            } & Record<Exclude<keyof I["convars"]["cvars"][number], keyof CMsgCVars_CVar>, never>)[] & Record<Exclude<keyof I["convars"]["cvars"], keyof {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["convars"], "cvars">, never>) | undefined;
    } & Record<Exclude<keyof I, "convars">, never>>(object: I): CNETMsgSetConVar;
};
export declare const CNETMsgNOP: {
    encode(_: CNETMsgNOP, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgNOP;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CNETMsgNOP;
};
export declare const CNETMsgDisconnect: {
    encode(message: CNETMsgDisconnect, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgDisconnect;
    fromPartial<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & Record<Exclude<keyof I, "text">, never>>(object: I): CNETMsgDisconnect;
};
export declare const CNETMsgFile: {
    encode(message: CNETMsgFile, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgFile;
    fromPartial<I extends {
        transferId?: number | undefined;
        fileName?: string | undefined;
        isReplayDemoFile?: boolean | undefined;
        deny?: boolean | undefined;
    } & {
        transferId?: number | undefined;
        fileName?: string | undefined;
        isReplayDemoFile?: boolean | undefined;
        deny?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CNETMsgFile>, never>>(object: I): CNETMsgFile;
};
export declare const CNETMsgSplitScreenUser: {
    encode(message: CNETMsgSplitScreenUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgSplitScreenUser;
    fromPartial<I extends {
        slot?: number | undefined;
    } & {
        slot?: number | undefined;
    } & Record<Exclude<keyof I, "slot">, never>>(object: I): CNETMsgSplitScreenUser;
};
export declare const CNETMsgPlayerAvatarData: {
    encode(message: CNETMsgPlayerAvatarData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CNETMsgPlayerAvatarData;
    fromPartial<I extends {
        accountid?: number | undefined;
        rgb?: Uint8Array | undefined;
    } & {
        accountid?: number | undefined;
        rgb?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CNETMsgPlayerAvatarData>, never>>(object: I): CNETMsgPlayerAvatarData;
};
export declare const CCLCMsgClientInfo: {
    encode(message: CCLCMsgClientInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgClientInfo;
    fromPartial<I extends {
        sendTableCrc?: number | undefined;
        serverCount?: number | undefined;
        isHltv?: boolean | undefined;
        isReplay?: boolean | undefined;
        friendsId?: number | undefined;
        friendsName?: string | undefined;
        customFiles?: number[] | undefined;
    } & {
        sendTableCrc?: number | undefined;
        serverCount?: number | undefined;
        isHltv?: boolean | undefined;
        isReplay?: boolean | undefined;
        friendsId?: number | undefined;
        friendsName?: string | undefined;
        customFiles?: (number[] & number[] & Record<Exclude<keyof I["customFiles"], keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgClientInfo>, never>>(object: I): CCLCMsgClientInfo;
};
export declare const CCLCMsgMove: {
    encode(message: CCLCMsgMove, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgMove;
    fromPartial<I extends {
        numBackupCommands?: number | undefined;
        numNewCommands?: number | undefined;
        data?: Uint8Array | undefined;
    } & {
        numBackupCommands?: number | undefined;
        numNewCommands?: number | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgMove>, never>>(object: I): CCLCMsgMove;
};
export declare const CCLCMsgVoiceData: {
    encode(message: CCLCMsgVoiceData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgVoiceData;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        xuid?: string | number | Long | undefined;
        format?: VoiceDataFormatT | undefined;
        sequenceBytes?: number | undefined;
        sectionNumber?: number | undefined;
        uncompressedSampleOffset?: number | undefined;
    } & {
        data?: Uint8Array | undefined;
        xuid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long>, never>) | undefined;
        format?: VoiceDataFormatT | undefined;
        sequenceBytes?: number | undefined;
        sectionNumber?: number | undefined;
        uncompressedSampleOffset?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgVoiceData>, never>>(object: I): CCLCMsgVoiceData;
};
export declare const CCLCMsgBaselineAck: {
    encode(message: CCLCMsgBaselineAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgBaselineAck;
    fromPartial<I extends {
        baselineTick?: number | undefined;
        baselineNr?: number | undefined;
    } & {
        baselineTick?: number | undefined;
        baselineNr?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgBaselineAck>, never>>(object: I): CCLCMsgBaselineAck;
};
export declare const CCLCMsgListenEvents: {
    encode(message: CCLCMsgListenEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgListenEvents;
    fromPartial<I extends {
        eventMask?: number[] | undefined;
    } & {
        eventMask?: (number[] & number[] & Record<Exclude<keyof I["eventMask"], keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "eventMask">, never>>(object: I): CCLCMsgListenEvents;
};
export declare const CCLCMsgRespondCvarValue: {
    encode(message: CCLCMsgRespondCvarValue, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgRespondCvarValue;
    fromPartial<I extends {
        cookie?: number | undefined;
        statusCode?: number | undefined;
        name?: string | undefined;
        value?: string | undefined;
    } & {
        cookie?: number | undefined;
        statusCode?: number | undefined;
        name?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgRespondCvarValue>, never>>(object: I): CCLCMsgRespondCvarValue;
};
export declare const CCLCMsgFileCRCCheck: {
    encode(message: CCLCMsgFileCRCCheck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgFileCRCCheck;
    fromPartial<I extends {
        codePath?: number | undefined;
        path?: string | undefined;
        codeFilename?: number | undefined;
        filename?: string | undefined;
        fileFraction?: number | undefined;
        md5?: Uint8Array | undefined;
        crc?: number | undefined;
        fileHashType?: number | undefined;
        fileLen?: number | undefined;
        packFileId?: number | undefined;
        packFileNumber?: number | undefined;
    } & {
        codePath?: number | undefined;
        path?: string | undefined;
        codeFilename?: number | undefined;
        filename?: string | undefined;
        fileFraction?: number | undefined;
        md5?: Uint8Array | undefined;
        crc?: number | undefined;
        fileHashType?: number | undefined;
        fileLen?: number | undefined;
        packFileId?: number | undefined;
        packFileNumber?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgFileCRCCheck>, never>>(object: I): CCLCMsgFileCRCCheck;
};
export declare const CCLCMsgLoadingProgress: {
    encode(message: CCLCMsgLoadingProgress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgLoadingProgress;
    fromPartial<I extends {
        progress?: number | undefined;
    } & {
        progress?: number | undefined;
    } & Record<Exclude<keyof I, "progress">, never>>(object: I): CCLCMsgLoadingProgress;
};
export declare const CCLCMsgSplitPlayerConnect: {
    encode(message: CCLCMsgSplitPlayerConnect, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgSplitPlayerConnect;
    fromPartial<I extends {
        convars?: {
            cvars?: {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        convars?: ({
            cvars?: {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[] | undefined;
        } & {
            cvars?: ({
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[] & ({
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            } & {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            } & Record<Exclude<keyof I["convars"]["cvars"][number], keyof CMsgCVars_CVar>, never>)[] & Record<Exclude<keyof I["convars"]["cvars"], keyof {
                name?: string | undefined;
                value?: string | undefined;
                dictionaryName?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["convars"], "cvars">, never>) | undefined;
    } & Record<Exclude<keyof I, "convars">, never>>(object: I): CCLCMsgSplitPlayerConnect;
};
export declare const CCLCMsgCmdKeyValues: {
    encode(message: CCLCMsgCmdKeyValues, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgCmdKeyValues;
    fromPartial<I extends {
        keyvalues?: Uint8Array | undefined;
    } & {
        keyvalues?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "keyvalues">, never>>(object: I): CCLCMsgCmdKeyValues;
};
export declare const CSVCMsgServerInfo: {
    encode(message: CSVCMsgServerInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgServerInfo;
    fromPartial<I extends {
        protocol?: number | undefined;
        serverCount?: number | undefined;
        isDedicated?: boolean | undefined;
        isOfficialValveServer?: boolean | undefined;
        isHltv?: boolean | undefined;
        isReplay?: boolean | undefined;
        isRedirectingToProxyRelay?: boolean | undefined;
        cOs?: number | undefined;
        mapCrc?: number | undefined;
        clientCrc?: number | undefined;
        stringTableCrc?: number | undefined;
        maxClients?: number | undefined;
        maxClasses?: number | undefined;
        playerSlot?: number | undefined;
        tickInterval?: number | undefined;
        gameDir?: string | undefined;
        mapName?: string | undefined;
        mapGroupName?: string | undefined;
        skyName?: string | undefined;
        hostName?: string | undefined;
        publicIp?: number | undefined;
        ugcMapId?: string | number | Long | undefined;
    } & {
        protocol?: number | undefined;
        serverCount?: number | undefined;
        isDedicated?: boolean | undefined;
        isOfficialValveServer?: boolean | undefined;
        isHltv?: boolean | undefined;
        isReplay?: boolean | undefined;
        isRedirectingToProxyRelay?: boolean | undefined;
        cOs?: number | undefined;
        mapCrc?: number | undefined;
        clientCrc?: number | undefined;
        stringTableCrc?: number | undefined;
        maxClients?: number | undefined;
        maxClasses?: number | undefined;
        playerSlot?: number | undefined;
        tickInterval?: number | undefined;
        gameDir?: string | undefined;
        mapName?: string | undefined;
        mapGroupName?: string | undefined;
        skyName?: string | undefined;
        hostName?: string | undefined;
        publicIp?: number | undefined;
        ugcMapId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["ugcMapId"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgServerInfo>, never>>(object: I): CSVCMsgServerInfo;
};
export declare const CSVCMsgClassInfo: {
    encode(message: CSVCMsgClassInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgClassInfo;
    fromPartial<I extends {
        createOnClient?: boolean | undefined;
        classes?: {
            classId?: number | undefined;
            dataTableName?: string | undefined;
            className?: string | undefined;
        }[] | undefined;
    } & {
        createOnClient?: boolean | undefined;
        classes?: ({
            classId?: number | undefined;
            dataTableName?: string | undefined;
            className?: string | undefined;
        }[] & ({
            classId?: number | undefined;
            dataTableName?: string | undefined;
            className?: string | undefined;
        } & {
            classId?: number | undefined;
            dataTableName?: string | undefined;
            className?: string | undefined;
        } & Record<Exclude<keyof I["classes"][number], keyof CSVCMsgClassInfo_classT>, never>)[] & Record<Exclude<keyof I["classes"], keyof {
            classId?: number | undefined;
            dataTableName?: string | undefined;
            className?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgClassInfo>, never>>(object: I): CSVCMsgClassInfo;
};
export declare const CSVCMsgClassInfo_classT: {
    encode(message: CSVCMsgClassInfo_classT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgClassInfo_classT;
    fromPartial<I extends {
        classId?: number | undefined;
        dataTableName?: string | undefined;
        className?: string | undefined;
    } & {
        classId?: number | undefined;
        dataTableName?: string | undefined;
        className?: string | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgClassInfo_classT>, never>>(object: I): CSVCMsgClassInfo_classT;
};
export declare const CSVCMsgSendTable: {
    encode(message: CSVCMsgSendTable, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSendTable;
    fromPartial<I extends {
        isEnd?: boolean | undefined;
        netTableName?: string | undefined;
        needsDecoder?: boolean | undefined;
        props?: {
            type?: number | undefined;
            varName?: string | undefined;
            flags?: number | undefined;
            priority?: number | undefined;
            dtName?: string | undefined;
            numElements?: number | undefined;
            lowValue?: number | undefined;
            highValue?: number | undefined;
            numBits?: number | undefined;
        }[] | undefined;
    } & {
        isEnd?: boolean | undefined;
        netTableName?: string | undefined;
        needsDecoder?: boolean | undefined;
        props?: ({
            type?: number | undefined;
            varName?: string | undefined;
            flags?: number | undefined;
            priority?: number | undefined;
            dtName?: string | undefined;
            numElements?: number | undefined;
            lowValue?: number | undefined;
            highValue?: number | undefined;
            numBits?: number | undefined;
        }[] & ({
            type?: number | undefined;
            varName?: string | undefined;
            flags?: number | undefined;
            priority?: number | undefined;
            dtName?: string | undefined;
            numElements?: number | undefined;
            lowValue?: number | undefined;
            highValue?: number | undefined;
            numBits?: number | undefined;
        } & {
            type?: number | undefined;
            varName?: string | undefined;
            flags?: number | undefined;
            priority?: number | undefined;
            dtName?: string | undefined;
            numElements?: number | undefined;
            lowValue?: number | undefined;
            highValue?: number | undefined;
            numBits?: number | undefined;
        } & Record<Exclude<keyof I["props"][number], keyof CSVCMsgSendTable_sendpropT>, never>)[] & Record<Exclude<keyof I["props"], keyof {
            type?: number | undefined;
            varName?: string | undefined;
            flags?: number | undefined;
            priority?: number | undefined;
            dtName?: string | undefined;
            numElements?: number | undefined;
            lowValue?: number | undefined;
            highValue?: number | undefined;
            numBits?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgSendTable>, never>>(object: I): CSVCMsgSendTable;
};
export declare const CSVCMsgSendTable_sendpropT: {
    encode(message: CSVCMsgSendTable_sendpropT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSendTable_sendpropT;
    fromPartial<I extends {
        type?: number | undefined;
        varName?: string | undefined;
        flags?: number | undefined;
        priority?: number | undefined;
        dtName?: string | undefined;
        numElements?: number | undefined;
        lowValue?: number | undefined;
        highValue?: number | undefined;
        numBits?: number | undefined;
    } & {
        type?: number | undefined;
        varName?: string | undefined;
        flags?: number | undefined;
        priority?: number | undefined;
        dtName?: string | undefined;
        numElements?: number | undefined;
        lowValue?: number | undefined;
        highValue?: number | undefined;
        numBits?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgSendTable_sendpropT>, never>>(object: I): CSVCMsgSendTable_sendpropT;
};
export declare const CSVCMsgPrint: {
    encode(message: CSVCMsgPrint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgPrint;
    fromPartial<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & Record<Exclude<keyof I, "text">, never>>(object: I): CSVCMsgPrint;
};
export declare const CSVCMsgSetPause: {
    encode(message: CSVCMsgSetPause, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSetPause;
    fromPartial<I extends {
        paused?: boolean | undefined;
    } & {
        paused?: boolean | undefined;
    } & Record<Exclude<keyof I, "paused">, never>>(object: I): CSVCMsgSetPause;
};
export declare const CSVCMsgSetView: {
    encode(message: CSVCMsgSetView, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSetView;
    fromPartial<I extends {
        entityIndex?: number | undefined;
    } & {
        entityIndex?: number | undefined;
    } & Record<Exclude<keyof I, "entityIndex">, never>>(object: I): CSVCMsgSetView;
};
export declare const CSVCMsgCreateStringTable: {
    encode(message: CSVCMsgCreateStringTable, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgCreateStringTable;
    fromPartial<I extends {
        name?: string | undefined;
        maxEntries?: number | undefined;
        numEntries?: number | undefined;
        userDataFixedSize?: boolean | undefined;
        userDataSize?: number | undefined;
        userDataSizeBits?: number | undefined;
        flags?: number | undefined;
        stringData?: Uint8Array | undefined;
    } & {
        name?: string | undefined;
        maxEntries?: number | undefined;
        numEntries?: number | undefined;
        userDataFixedSize?: boolean | undefined;
        userDataSize?: number | undefined;
        userDataSizeBits?: number | undefined;
        flags?: number | undefined;
        stringData?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgCreateStringTable>, never>>(object: I): CSVCMsgCreateStringTable;
};
export declare const CSVCMsgUpdateStringTable: {
    encode(message: CSVCMsgUpdateStringTable, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgUpdateStringTable;
    fromPartial<I extends {
        tableId?: number | undefined;
        numChangedEntries?: number | undefined;
        stringData?: Uint8Array | undefined;
    } & {
        tableId?: number | undefined;
        numChangedEntries?: number | undefined;
        stringData?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgUpdateStringTable>, never>>(object: I): CSVCMsgUpdateStringTable;
};
export declare const CSVCMsgVoiceInit: {
    encode(message: CSVCMsgVoiceInit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgVoiceInit;
    fromPartial<I extends {
        quality?: number | undefined;
        codec?: string | undefined;
        version?: number | undefined;
    } & {
        quality?: number | undefined;
        codec?: string | undefined;
        version?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgVoiceInit>, never>>(object: I): CSVCMsgVoiceInit;
};
export declare const CSVCMsgVoiceData: {
    encode(message: CSVCMsgVoiceData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgVoiceData;
    fromPartial<I extends {
        client?: number | undefined;
        proximity?: boolean | undefined;
        xuid?: string | number | Long | undefined;
        audibleMask?: number | undefined;
        voiceData?: Uint8Array | undefined;
        caster?: boolean | undefined;
        format?: VoiceDataFormatT | undefined;
        sequenceBytes?: number | undefined;
        sectionNumber?: number | undefined;
        uncompressedSampleOffset?: number | undefined;
    } & {
        client?: number | undefined;
        proximity?: boolean | undefined;
        xuid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long>, never>) | undefined;
        audibleMask?: number | undefined;
        voiceData?: Uint8Array | undefined;
        caster?: boolean | undefined;
        format?: VoiceDataFormatT | undefined;
        sequenceBytes?: number | undefined;
        sectionNumber?: number | undefined;
        uncompressedSampleOffset?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgVoiceData>, never>>(object: I): CSVCMsgVoiceData;
};
export declare const CSVCMsgFixAngle: {
    encode(message: CSVCMsgFixAngle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgFixAngle;
    fromPartial<I extends {
        relative?: boolean | undefined;
        angle?: {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } | undefined;
    } & {
        relative?: boolean | undefined;
        angle?: ({
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & Record<Exclude<keyof I["angle"], keyof CMsgQAngle>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgFixAngle>, never>>(object: I): CSVCMsgFixAngle;
};
export declare const CSVCMsgCrosshairAngle: {
    encode(message: CSVCMsgCrosshairAngle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgCrosshairAngle;
    fromPartial<I extends {
        angle?: {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } | undefined;
    } & {
        angle?: ({
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & Record<Exclude<keyof I["angle"], keyof CMsgQAngle>, never>) | undefined;
    } & Record<Exclude<keyof I, "angle">, never>>(object: I): CSVCMsgCrosshairAngle;
};
export declare const CSVCMsgPrefetch: {
    encode(message: CSVCMsgPrefetch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgPrefetch;
    fromPartial<I extends {
        soundIndex?: number | undefined;
    } & {
        soundIndex?: number | undefined;
    } & Record<Exclude<keyof I, "soundIndex">, never>>(object: I): CSVCMsgPrefetch;
};
export declare const CSVCMsgBSPDecal: {
    encode(message: CSVCMsgBSPDecal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgBSPDecal;
    fromPartial<I extends {
        pos?: {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } | undefined;
        decalTextureIndex?: number | undefined;
        entityIndex?: number | undefined;
        modelIndex?: number | undefined;
        lowPriority?: boolean | undefined;
    } & {
        pos?: ({
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & Record<Exclude<keyof I["pos"], keyof CMsgVector>, never>) | undefined;
        decalTextureIndex?: number | undefined;
        entityIndex?: number | undefined;
        modelIndex?: number | undefined;
        lowPriority?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgBSPDecal>, never>>(object: I): CSVCMsgBSPDecal;
};
export declare const CSVCMsgSplitScreen: {
    encode(message: CSVCMsgSplitScreen, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSplitScreen;
    fromPartial<I extends {
        type?: ESplitScreenMessageType | undefined;
        slot?: number | undefined;
        playerIndex?: number | undefined;
    } & {
        type?: ESplitScreenMessageType | undefined;
        slot?: number | undefined;
        playerIndex?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgSplitScreen>, never>>(object: I): CSVCMsgSplitScreen;
};
export declare const CSVCMsgGetCvarValue: {
    encode(message: CSVCMsgGetCvarValue, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgGetCvarValue;
    fromPartial<I extends {
        cookie?: number | undefined;
        cvarName?: string | undefined;
    } & {
        cookie?: number | undefined;
        cvarName?: string | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgGetCvarValue>, never>>(object: I): CSVCMsgGetCvarValue;
};
export declare const CSVCMsgMenu: {
    encode(message: CSVCMsgMenu, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgMenu;
    fromPartial<I extends {
        dialogType?: number | undefined;
        menuKeyValues?: Uint8Array | undefined;
    } & {
        dialogType?: number | undefined;
        menuKeyValues?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgMenu>, never>>(object: I): CSVCMsgMenu;
};
export declare const CSVCMsgUserMessage: {
    encode(message: CSVCMsgUserMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgUserMessage;
    fromPartial<I extends {
        msgType?: number | undefined;
        msgData?: Uint8Array | undefined;
        passthrough?: number | undefined;
    } & {
        msgType?: number | undefined;
        msgData?: Uint8Array | undefined;
        passthrough?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgUserMessage>, never>>(object: I): CSVCMsgUserMessage;
};
export declare const CSVCMsgPaintmapData: {
    encode(message: CSVCMsgPaintmapData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgPaintmapData;
    fromPartial<I extends {
        paintmap?: Uint8Array | undefined;
    } & {
        paintmap?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "paintmap">, never>>(object: I): CSVCMsgPaintmapData;
};
export declare const CSVCMsgGameEvent: {
    encode(message: CSVCMsgGameEvent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEvent;
    fromPartial<I extends {
        eventName?: string | undefined;
        eventid?: number | undefined;
        keys?: {
            type?: number | undefined;
            valString?: string | undefined;
            valFloat?: number | undefined;
            valLong?: number | undefined;
            valShort?: number | undefined;
            valByte?: number | undefined;
            valBool?: boolean | undefined;
            valUint64?: string | number | Long | undefined;
            valWstring?: Uint8Array | undefined;
        }[] | undefined;
        passthrough?: number | undefined;
    } & {
        eventName?: string | undefined;
        eventid?: number | undefined;
        keys?: ({
            type?: number | undefined;
            valString?: string | undefined;
            valFloat?: number | undefined;
            valLong?: number | undefined;
            valShort?: number | undefined;
            valByte?: number | undefined;
            valBool?: boolean | undefined;
            valUint64?: string | number | Long | undefined;
            valWstring?: Uint8Array | undefined;
        }[] & ({
            type?: number | undefined;
            valString?: string | undefined;
            valFloat?: number | undefined;
            valLong?: number | undefined;
            valShort?: number | undefined;
            valByte?: number | undefined;
            valBool?: boolean | undefined;
            valUint64?: string | number | Long | undefined;
            valWstring?: Uint8Array | undefined;
        } & {
            type?: number | undefined;
            valString?: string | undefined;
            valFloat?: number | undefined;
            valLong?: number | undefined;
            valShort?: number | undefined;
            valByte?: number | undefined;
            valBool?: boolean | undefined;
            valUint64?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["keys"][number]["valUint64"], keyof Long>, never>) | undefined;
            valWstring?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["keys"][number], keyof CSVCMsgGameEvent_keyT>, never>)[] & Record<Exclude<keyof I["keys"], keyof {
            type?: number | undefined;
            valString?: string | undefined;
            valFloat?: number | undefined;
            valLong?: number | undefined;
            valShort?: number | undefined;
            valByte?: number | undefined;
            valBool?: boolean | undefined;
            valUint64?: string | number | Long | undefined;
            valWstring?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        passthrough?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgGameEvent>, never>>(object: I): CSVCMsgGameEvent;
};
export declare const CSVCMsgGameEvent_keyT: {
    encode(message: CSVCMsgGameEvent_keyT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEvent_keyT;
    fromPartial<I extends {
        type?: number | undefined;
        valString?: string | undefined;
        valFloat?: number | undefined;
        valLong?: number | undefined;
        valShort?: number | undefined;
        valByte?: number | undefined;
        valBool?: boolean | undefined;
        valUint64?: string | number | Long | undefined;
        valWstring?: Uint8Array | undefined;
    } & {
        type?: number | undefined;
        valString?: string | undefined;
        valFloat?: number | undefined;
        valLong?: number | undefined;
        valShort?: number | undefined;
        valByte?: number | undefined;
        valBool?: boolean | undefined;
        valUint64?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["valUint64"], keyof Long>, never>) | undefined;
        valWstring?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgGameEvent_keyT>, never>>(object: I): CSVCMsgGameEvent_keyT;
};
export declare const CSVCMsgGameEventList: {
    encode(message: CSVCMsgGameEventList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEventList;
    fromPartial<I extends {
        descriptors?: {
            eventid?: number | undefined;
            name?: string | undefined;
            keys?: {
                type?: number | undefined;
                name?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        descriptors?: ({
            eventid?: number | undefined;
            name?: string | undefined;
            keys?: {
                type?: number | undefined;
                name?: string | undefined;
            }[] | undefined;
        }[] & ({
            eventid?: number | undefined;
            name?: string | undefined;
            keys?: {
                type?: number | undefined;
                name?: string | undefined;
            }[] | undefined;
        } & {
            eventid?: number | undefined;
            name?: string | undefined;
            keys?: ({
                type?: number | undefined;
                name?: string | undefined;
            }[] & ({
                type?: number | undefined;
                name?: string | undefined;
            } & {
                type?: number | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["descriptors"][number]["keys"][number], keyof CSVCMsgGameEventList_keyT>, never>)[] & Record<Exclude<keyof I["descriptors"][number]["keys"], keyof {
                type?: number | undefined;
                name?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["descriptors"][number], keyof CSVCMsgGameEventList_descriptorT>, never>)[] & Record<Exclude<keyof I["descriptors"], keyof {
            eventid?: number | undefined;
            name?: string | undefined;
            keys?: {
                type?: number | undefined;
                name?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "descriptors">, never>>(object: I): CSVCMsgGameEventList;
};
export declare const CSVCMsgGameEventList_keyT: {
    encode(message: CSVCMsgGameEventList_keyT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEventList_keyT;
    fromPartial<I extends {
        type?: number | undefined;
        name?: string | undefined;
    } & {
        type?: number | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgGameEventList_keyT>, never>>(object: I): CSVCMsgGameEventList_keyT;
};
export declare const CSVCMsgGameEventList_descriptorT: {
    encode(message: CSVCMsgGameEventList_descriptorT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEventList_descriptorT;
    fromPartial<I extends {
        eventid?: number | undefined;
        name?: string | undefined;
        keys?: {
            type?: number | undefined;
            name?: string | undefined;
        }[] | undefined;
    } & {
        eventid?: number | undefined;
        name?: string | undefined;
        keys?: ({
            type?: number | undefined;
            name?: string | undefined;
        }[] & ({
            type?: number | undefined;
            name?: string | undefined;
        } & {
            type?: number | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["keys"][number], keyof CSVCMsgGameEventList_keyT>, never>)[] & Record<Exclude<keyof I["keys"], keyof {
            type?: number | undefined;
            name?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgGameEventList_descriptorT>, never>>(object: I): CSVCMsgGameEventList_descriptorT;
};
export declare const CSVCMsgTempEntities: {
    encode(message: CSVCMsgTempEntities, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgTempEntities;
    fromPartial<I extends {
        reliable?: boolean | undefined;
        numEntries?: number | undefined;
        entityData?: Uint8Array | undefined;
    } & {
        reliable?: boolean | undefined;
        numEntries?: number | undefined;
        entityData?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgTempEntities>, never>>(object: I): CSVCMsgTempEntities;
};
export declare const CSVCMsgPacketEntities: {
    encode(message: CSVCMsgPacketEntities, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgPacketEntities;
    fromPartial<I extends {
        maxEntries?: number | undefined;
        updatedEntries?: number | undefined;
        isDelta?: boolean | undefined;
        updateBaseline?: boolean | undefined;
        baseline?: number | undefined;
        deltaFrom?: number | undefined;
        entityData?: Uint8Array | undefined;
    } & {
        maxEntries?: number | undefined;
        updatedEntries?: number | undefined;
        isDelta?: boolean | undefined;
        updateBaseline?: boolean | undefined;
        baseline?: number | undefined;
        deltaFrom?: number | undefined;
        entityData?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgPacketEntities>, never>>(object: I): CSVCMsgPacketEntities;
};
export declare const CSVCMsgSounds: {
    encode(message: CSVCMsgSounds, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSounds;
    fromPartial<I extends {
        reliableSound?: boolean | undefined;
        sounds?: {
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            volume?: number | undefined;
            delayValue?: number | undefined;
            sequenceNumber?: number | undefined;
            entityIndex?: number | undefined;
            channel?: number | undefined;
            pitch?: number | undefined;
            flags?: number | undefined;
            soundNum?: number | undefined;
            soundNumHandle?: number | undefined;
            speakerEntity?: number | undefined;
            randomSeed?: number | undefined;
            soundLevel?: number | undefined;
            isSentence?: boolean | undefined;
            isAmbient?: boolean | undefined;
        }[] | undefined;
    } & {
        reliableSound?: boolean | undefined;
        sounds?: ({
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            volume?: number | undefined;
            delayValue?: number | undefined;
            sequenceNumber?: number | undefined;
            entityIndex?: number | undefined;
            channel?: number | undefined;
            pitch?: number | undefined;
            flags?: number | undefined;
            soundNum?: number | undefined;
            soundNumHandle?: number | undefined;
            speakerEntity?: number | undefined;
            randomSeed?: number | undefined;
            soundLevel?: number | undefined;
            isSentence?: boolean | undefined;
            isAmbient?: boolean | undefined;
        }[] & ({
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            volume?: number | undefined;
            delayValue?: number | undefined;
            sequenceNumber?: number | undefined;
            entityIndex?: number | undefined;
            channel?: number | undefined;
            pitch?: number | undefined;
            flags?: number | undefined;
            soundNum?: number | undefined;
            soundNumHandle?: number | undefined;
            speakerEntity?: number | undefined;
            randomSeed?: number | undefined;
            soundLevel?: number | undefined;
            isSentence?: boolean | undefined;
            isAmbient?: boolean | undefined;
        } & {
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            volume?: number | undefined;
            delayValue?: number | undefined;
            sequenceNumber?: number | undefined;
            entityIndex?: number | undefined;
            channel?: number | undefined;
            pitch?: number | undefined;
            flags?: number | undefined;
            soundNum?: number | undefined;
            soundNumHandle?: number | undefined;
            speakerEntity?: number | undefined;
            randomSeed?: number | undefined;
            soundLevel?: number | undefined;
            isSentence?: boolean | undefined;
            isAmbient?: boolean | undefined;
        } & Record<Exclude<keyof I["sounds"][number], keyof CSVCMsgSounds_sounddataT>, never>)[] & Record<Exclude<keyof I["sounds"], keyof {
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            volume?: number | undefined;
            delayValue?: number | undefined;
            sequenceNumber?: number | undefined;
            entityIndex?: number | undefined;
            channel?: number | undefined;
            pitch?: number | undefined;
            flags?: number | undefined;
            soundNum?: number | undefined;
            soundNumHandle?: number | undefined;
            speakerEntity?: number | undefined;
            randomSeed?: number | undefined;
            soundLevel?: number | undefined;
            isSentence?: boolean | undefined;
            isAmbient?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgSounds>, never>>(object: I): CSVCMsgSounds;
};
export declare const CSVCMsgSounds_sounddataT: {
    encode(message: CSVCMsgSounds_sounddataT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgSounds_sounddataT;
    fromPartial<I extends {
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
        volume?: number | undefined;
        delayValue?: number | undefined;
        sequenceNumber?: number | undefined;
        entityIndex?: number | undefined;
        channel?: number | undefined;
        pitch?: number | undefined;
        flags?: number | undefined;
        soundNum?: number | undefined;
        soundNumHandle?: number | undefined;
        speakerEntity?: number | undefined;
        randomSeed?: number | undefined;
        soundLevel?: number | undefined;
        isSentence?: boolean | undefined;
        isAmbient?: boolean | undefined;
    } & {
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
        volume?: number | undefined;
        delayValue?: number | undefined;
        sequenceNumber?: number | undefined;
        entityIndex?: number | undefined;
        channel?: number | undefined;
        pitch?: number | undefined;
        flags?: number | undefined;
        soundNum?: number | undefined;
        soundNumHandle?: number | undefined;
        speakerEntity?: number | undefined;
        randomSeed?: number | undefined;
        soundLevel?: number | undefined;
        isSentence?: boolean | undefined;
        isAmbient?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgSounds_sounddataT>, never>>(object: I): CSVCMsgSounds_sounddataT;
};
export declare const CSVCMsgEntityMsg: {
    encode(message: CSVCMsgEntityMsg, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgEntityMsg;
    fromPartial<I extends {
        entIndex?: number | undefined;
        classId?: number | undefined;
        entData?: Uint8Array | undefined;
    } & {
        entIndex?: number | undefined;
        classId?: number | undefined;
        entData?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgEntityMsg>, never>>(object: I): CSVCMsgEntityMsg;
};
export declare const CSVCMsgCmdKeyValues: {
    encode(message: CSVCMsgCmdKeyValues, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgCmdKeyValues;
    fromPartial<I extends {
        keyvalues?: Uint8Array | undefined;
    } & {
        keyvalues?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "keyvalues">, never>>(object: I): CSVCMsgCmdKeyValues;
};
export declare const CSVCMsgEncryptedData: {
    encode(message: CSVCMsgEncryptedData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgEncryptedData;
    fromPartial<I extends {
        encrypted?: Uint8Array | undefined;
        keyType?: number | undefined;
    } & {
        encrypted?: Uint8Array | undefined;
        keyType?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgEncryptedData>, never>>(object: I): CSVCMsgEncryptedData;
};
export declare const CSVCMsgHltvReplay: {
    encode(message: CSVCMsgHltvReplay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgHltvReplay;
    fromPartial<I extends {
        delay?: number | undefined;
        primaryTarget?: number | undefined;
        replayStopAt?: number | undefined;
        replayStartAt?: number | undefined;
        replaySlowdownBegin?: number | undefined;
        replaySlowdownEnd?: number | undefined;
        replaySlowdownRate?: number | undefined;
    } & {
        delay?: number | undefined;
        primaryTarget?: number | undefined;
        replayStopAt?: number | undefined;
        replayStartAt?: number | undefined;
        replaySlowdownBegin?: number | undefined;
        replaySlowdownEnd?: number | undefined;
        replaySlowdownRate?: number | undefined;
    } & Record<Exclude<keyof I, keyof CSVCMsgHltvReplay>, never>>(object: I): CSVCMsgHltvReplay;
};
export declare const CCLCMsgHltvReplay: {
    encode(message: CCLCMsgHltvReplay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CCLCMsgHltvReplay;
    fromPartial<I extends {
        request?: number | undefined;
        slowdownLength?: number | undefined;
        slowdownRate?: number | undefined;
        primaryTargetEntIndex?: number | undefined;
        eventTime?: number | undefined;
    } & {
        request?: number | undefined;
        slowdownLength?: number | undefined;
        slowdownRate?: number | undefined;
        primaryTargetEntIndex?: number | undefined;
        eventTime?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCLCMsgHltvReplay>, never>>(object: I): CCLCMsgHltvReplay;
};
export declare const CSVCMsgBroadcastCommand: {
    encode(message: CSVCMsgBroadcastCommand, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CSVCMsgBroadcastCommand;
    fromPartial<I extends {
        cmd?: string | undefined;
    } & {
        cmd?: string | undefined;
    } & Record<Exclude<keyof I, "cmd">, never>>(object: I): CSVCMsgBroadcastCommand;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
