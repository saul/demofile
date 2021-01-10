"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVCMsgBroadcastCommand = exports.CCLCMsgHltvReplay = exports.CSVCMsgHltvReplay = exports.CSVCMsgEncryptedData = exports.CSVCMsgCmdKeyValues = exports.CSVCMsgEntityMsg = exports.CSVCMsgSounds_sounddataT = exports.CSVCMsgSounds = exports.CSVCMsgPacketEntities = exports.CSVCMsgTempEntities = exports.CSVCMsgGameEventList_descriptorT = exports.CSVCMsgGameEventList_keyT = exports.CSVCMsgGameEventList = exports.CSVCMsgGameEvent_keyT = exports.CSVCMsgGameEvent = exports.CSVCMsgPaintmapData = exports.CSVCMsgUserMessage = exports.CSVCMsgMenu = exports.CSVCMsgGetCvarValue = exports.CSVCMsgSplitScreen = exports.CSVCMsgBSPDecal = exports.CSVCMsgPrefetch = exports.CSVCMsgCrosshairAngle = exports.CSVCMsgFixAngle = exports.CSVCMsgVoiceData = exports.CSVCMsgVoiceInit = exports.CSVCMsgUpdateStringTable = exports.CSVCMsgCreateStringTable = exports.CSVCMsgSetView = exports.CSVCMsgSetPause = exports.CSVCMsgPrint = exports.CSVCMsgSendTable_sendpropT = exports.CSVCMsgSendTable = exports.CSVCMsgClassInfo_classT = exports.CSVCMsgClassInfo = exports.CSVCMsgServerInfo = exports.CCLCMsgCmdKeyValues = exports.CCLCMsgSplitPlayerConnect = exports.CCLCMsgLoadingProgress = exports.CCLCMsgFileCRCCheck = exports.CCLCMsgRespondCvarValue = exports.CCLCMsgListenEvents = exports.CCLCMsgBaselineAck = exports.CCLCMsgVoiceData = exports.CCLCMsgMove = exports.CCLCMsgClientInfo = exports.CNETMsgPlayerAvatarData = exports.CNETMsgSplitScreenUser = exports.CNETMsgFile = exports.CNETMsgDisconnect = exports.CNETMsgNOP = exports.CNETMsgSetConVar = exports.CMsgCVars_CVar = exports.CMsgCVars = exports.CNETMsgSignonState = exports.CNETMsgStringCmd = exports.CNETMsgTick = exports.CMsgRGBA = exports.CMsgQAngle = exports.CMsgVector2D = exports.CMsgVector = exports.ReplayEventTypeT = exports.SVCMessages = exports.ESplitScreenMessageType = exports.VoiceDataFormatT = exports.CLCMessages = exports.NETMessages = exports.protobufPackage = void 0;
/* tslint:disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const baseCMsgVector = {
    x: 0,
    y: 0,
    z: 0
};
const baseCMsgVector2D = {
    x: 0,
    y: 0
};
const baseCMsgQAngle = {
    x: 0,
    y: 0,
    z: 0
};
const baseCMsgRGBA = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};
const baseCNETMsgTick = {
    tick: 0,
    hostComputationtime: 0,
    hostComputationtimeStdDeviation: 0,
    hostFramestarttimeStdDeviation: 0,
    hltvReplayFlags: 0
};
const baseCNETMsgStringCmd = {
    command: ""
};
const baseCNETMsgSignonState = {
    signonState: 0,
    spawnCount: 0,
    numServerPlayers: 0,
    playersNetworkids: "",
    mapName: ""
};
const baseCMsgCVars = {};
const baseCMsgCVars_CVar = {
    name: "",
    value: "",
    dictionaryName: 0
};
const baseCNETMsgSetConVar = {};
const baseCNETMsgNOP = {};
const baseCNETMsgDisconnect = {
    text: ""
};
const baseCNETMsgFile = {
    transferId: 0,
    fileName: "",
    isReplayDemoFile: false,
    deny: false
};
const baseCNETMsgSplitScreenUser = {
    slot: 0
};
const baseCNETMsgPlayerAvatarData = {
    accountid: 0
};
const baseCCLCMsgClientInfo = {
    sendTableCrc: 0,
    serverCount: 0,
    isHltv: false,
    isReplay: false,
    friendsId: 0,
    friendsName: "",
    customFiles: 0
};
const baseCCLCMsgMove = {
    numBackupCommands: 0,
    numNewCommands: 0
};
const baseCCLCMsgVoiceData = {
    xuid: Long.UZERO,
    format: 0,
    sequenceBytes: 0,
    sectionNumber: 0,
    uncompressedSampleOffset: 0
};
const baseCCLCMsgBaselineAck = {
    baselineTick: 0,
    baselineNr: 0
};
const baseCCLCMsgListenEvents = {
    eventMask: 0
};
const baseCCLCMsgRespondCvarValue = {
    cookie: 0,
    statusCode: 0,
    name: "",
    value: ""
};
const baseCCLCMsgFileCRCCheck = {
    codePath: 0,
    path: "",
    codeFilename: 0,
    filename: "",
    fileFraction: 0,
    crc: 0,
    fileHashType: 0,
    fileLen: 0,
    packFileId: 0,
    packFileNumber: 0
};
const baseCCLCMsgLoadingProgress = {
    progress: 0
};
const baseCCLCMsgSplitPlayerConnect = {};
const baseCCLCMsgCmdKeyValues = {};
const baseCSVCMsgServerInfo = {
    protocol: 0,
    serverCount: 0,
    isDedicated: false,
    isOfficialValveServer: false,
    isHltv: false,
    isReplay: false,
    isRedirectingToProxyRelay: false,
    cOs: 0,
    mapCrc: 0,
    clientCrc: 0,
    stringTableCrc: 0,
    maxClients: 0,
    maxClasses: 0,
    playerSlot: 0,
    tickInterval: 0,
    gameDir: "",
    mapName: "",
    mapGroupName: "",
    skyName: "",
    hostName: "",
    publicIp: 0,
    ugcMapId: Long.UZERO
};
const baseCSVCMsgClassInfo = {
    createOnClient: false
};
const baseCSVCMsgClassInfo_classT = {
    classId: 0,
    dataTableName: "",
    className: ""
};
const baseCSVCMsgSendTable = {
    isEnd: false,
    netTableName: "",
    needsDecoder: false
};
const baseCSVCMsgSendTable_sendpropT = {
    type: 0,
    varName: "",
    flags: 0,
    priority: 0,
    dtName: "",
    numElements: 0,
    lowValue: 0,
    highValue: 0,
    numBits: 0
};
const baseCSVCMsgPrint = {
    text: ""
};
const baseCSVCMsgSetPause = {
    paused: false
};
const baseCSVCMsgSetView = {
    entityIndex: 0
};
const baseCSVCMsgCreateStringTable = {
    name: "",
    maxEntries: 0,
    numEntries: 0,
    userDataFixedSize: false,
    userDataSize: 0,
    userDataSizeBits: 0,
    flags: 0
};
const baseCSVCMsgUpdateStringTable = {
    tableId: 0,
    numChangedEntries: 0
};
const baseCSVCMsgVoiceInit = {
    quality: 0,
    codec: "",
    version: 0
};
const baseCSVCMsgVoiceData = {
    client: 0,
    proximity: false,
    xuid: Long.UZERO,
    audibleMask: 0,
    caster: false,
    format: 0,
    sequenceBytes: 0,
    sectionNumber: 0,
    uncompressedSampleOffset: 0
};
const baseCSVCMsgFixAngle = {
    relative: false
};
const baseCSVCMsgCrosshairAngle = {};
const baseCSVCMsgPrefetch = {
    soundIndex: 0
};
const baseCSVCMsgBSPDecal = {
    decalTextureIndex: 0,
    entityIndex: 0,
    modelIndex: 0,
    lowPriority: false
};
const baseCSVCMsgSplitScreen = {
    type: 0,
    slot: 0,
    playerIndex: 0
};
const baseCSVCMsgGetCvarValue = {
    cookie: 0,
    cvarName: ""
};
const baseCSVCMsgMenu = {
    dialogType: 0
};
const baseCSVCMsgUserMessage = {
    msgType: 0,
    passthrough: 0
};
const baseCSVCMsgPaintmapData = {};
const baseCSVCMsgGameEvent = {
    eventName: "",
    eventid: 0,
    passthrough: 0
};
const baseCSVCMsgGameEvent_keyT = {
    type: 0,
    valString: "",
    valFloat: 0,
    valLong: 0,
    valShort: 0,
    valByte: 0,
    valBool: false,
    valUint64: Long.UZERO
};
const baseCSVCMsgGameEventList = {};
const baseCSVCMsgGameEventList_keyT = {
    type: 0,
    name: ""
};
const baseCSVCMsgGameEventList_descriptorT = {
    eventid: 0,
    name: ""
};
const baseCSVCMsgTempEntities = {
    reliable: false,
    numEntries: 0
};
const baseCSVCMsgPacketEntities = {
    maxEntries: 0,
    updatedEntries: 0,
    isDelta: false,
    updateBaseline: false,
    baseline: 0,
    deltaFrom: 0
};
const baseCSVCMsgSounds = {
    reliableSound: false
};
const baseCSVCMsgSounds_sounddataT = {
    originX: 0,
    originY: 0,
    originZ: 0,
    volume: 0,
    delayValue: 0,
    sequenceNumber: 0,
    entityIndex: 0,
    channel: 0,
    pitch: 0,
    flags: 0,
    soundNum: 0,
    soundNumHandle: 0,
    speakerEntity: 0,
    randomSeed: 0,
    soundLevel: 0,
    isSentence: false,
    isAmbient: false
};
const baseCSVCMsgEntityMsg = {
    entIndex: 0,
    classId: 0
};
const baseCSVCMsgCmdKeyValues = {};
const baseCSVCMsgEncryptedData = {
    keyType: 0
};
const baseCSVCMsgHltvReplay = {
    delay: 0,
    primaryTarget: 0,
    replayStopAt: 0,
    replayStartAt: 0,
    replaySlowdownBegin: 0,
    replaySlowdownEnd: 0,
    replaySlowdownRate: 0
};
const baseCCLCMsgHltvReplay = {
    request: 0,
    slowdownLength: 0,
    slowdownRate: 0,
    primaryTargetEntIndex: 0,
    eventTime: 0
};
const baseCSVCMsgBroadcastCommand = {
    cmd: ""
};
exports.protobufPackage = "";
var NETMessages;
(function (NETMessages) {
    NETMessages[NETMessages["net_NOP"] = 0] = "net_NOP";
    NETMessages[NETMessages["net_Disconnect"] = 1] = "net_Disconnect";
    NETMessages[NETMessages["net_File"] = 2] = "net_File";
    NETMessages[NETMessages["net_SplitScreenUser"] = 3] = "net_SplitScreenUser";
    NETMessages[NETMessages["net_Tick"] = 4] = "net_Tick";
    NETMessages[NETMessages["net_StringCmd"] = 5] = "net_StringCmd";
    NETMessages[NETMessages["net_SetConVar"] = 6] = "net_SetConVar";
    NETMessages[NETMessages["net_SignonState"] = 7] = "net_SignonState";
    NETMessages[NETMessages["net_PlayerAvatarData"] = 100] = "net_PlayerAvatarData";
})(NETMessages = exports.NETMessages || (exports.NETMessages = {}));
var CLCMessages;
(function (CLCMessages) {
    CLCMessages[CLCMessages["clc_ClientInfo"] = 8] = "clc_ClientInfo";
    CLCMessages[CLCMessages["clc_Move"] = 9] = "clc_Move";
    CLCMessages[CLCMessages["clc_VoiceData"] = 10] = "clc_VoiceData";
    CLCMessages[CLCMessages["clc_BaselineAck"] = 11] = "clc_BaselineAck";
    CLCMessages[CLCMessages["clc_ListenEvents"] = 12] = "clc_ListenEvents";
    CLCMessages[CLCMessages["clc_RespondCvarValue"] = 13] = "clc_RespondCvarValue";
    CLCMessages[CLCMessages["clc_FileCRCCheck"] = 14] = "clc_FileCRCCheck";
    CLCMessages[CLCMessages["clc_LoadingProgress"] = 15] = "clc_LoadingProgress";
    CLCMessages[CLCMessages["clc_SplitPlayerConnect"] = 16] = "clc_SplitPlayerConnect";
    CLCMessages[CLCMessages["clc_ClientMessage"] = 17] = "clc_ClientMessage";
    CLCMessages[CLCMessages["clc_CmdKeyValues"] = 18] = "clc_CmdKeyValues";
    CLCMessages[CLCMessages["clc_HltvReplay"] = 20] = "clc_HltvReplay";
})(CLCMessages = exports.CLCMessages || (exports.CLCMessages = {}));
var VoiceDataFormatT;
(function (VoiceDataFormatT) {
    VoiceDataFormatT[VoiceDataFormatT["VOICEDATA_FORMAT_STEAM"] = 0] = "VOICEDATA_FORMAT_STEAM";
    VoiceDataFormatT[VoiceDataFormatT["VOICEDATA_FORMAT_ENGINE"] = 1] = "VOICEDATA_FORMAT_ENGINE";
})(VoiceDataFormatT = exports.VoiceDataFormatT || (exports.VoiceDataFormatT = {}));
var ESplitScreenMessageType;
(function (ESplitScreenMessageType) {
    ESplitScreenMessageType[ESplitScreenMessageType["MSG_SPLITSCREEN_ADDUSER"] = 0] = "MSG_SPLITSCREEN_ADDUSER";
    ESplitScreenMessageType[ESplitScreenMessageType["MSG_SPLITSCREEN_REMOVEUSER"] = 1] = "MSG_SPLITSCREEN_REMOVEUSER";
    ESplitScreenMessageType[ESplitScreenMessageType["MSG_SPLITSCREEN_TYPE_BITS"] = 1] = "MSG_SPLITSCREEN_TYPE_BITS";
})(ESplitScreenMessageType = exports.ESplitScreenMessageType || (exports.ESplitScreenMessageType = {}));
var SVCMessages;
(function (SVCMessages) {
    SVCMessages[SVCMessages["svc_ServerInfo"] = 8] = "svc_ServerInfo";
    SVCMessages[SVCMessages["svc_SendTable"] = 9] = "svc_SendTable";
    SVCMessages[SVCMessages["svc_ClassInfo"] = 10] = "svc_ClassInfo";
    SVCMessages[SVCMessages["svc_SetPause"] = 11] = "svc_SetPause";
    SVCMessages[SVCMessages["svc_CreateStringTable"] = 12] = "svc_CreateStringTable";
    SVCMessages[SVCMessages["svc_UpdateStringTable"] = 13] = "svc_UpdateStringTable";
    SVCMessages[SVCMessages["svc_VoiceInit"] = 14] = "svc_VoiceInit";
    SVCMessages[SVCMessages["svc_VoiceData"] = 15] = "svc_VoiceData";
    SVCMessages[SVCMessages["svc_Print"] = 16] = "svc_Print";
    SVCMessages[SVCMessages["svc_Sounds"] = 17] = "svc_Sounds";
    SVCMessages[SVCMessages["svc_SetView"] = 18] = "svc_SetView";
    SVCMessages[SVCMessages["svc_FixAngle"] = 19] = "svc_FixAngle";
    SVCMessages[SVCMessages["svc_CrosshairAngle"] = 20] = "svc_CrosshairAngle";
    SVCMessages[SVCMessages["svc_BSPDecal"] = 21] = "svc_BSPDecal";
    SVCMessages[SVCMessages["svc_SplitScreen"] = 22] = "svc_SplitScreen";
    SVCMessages[SVCMessages["svc_UserMessage"] = 23] = "svc_UserMessage";
    SVCMessages[SVCMessages["svc_EntityMessage"] = 24] = "svc_EntityMessage";
    SVCMessages[SVCMessages["svc_GameEvent"] = 25] = "svc_GameEvent";
    SVCMessages[SVCMessages["svc_PacketEntities"] = 26] = "svc_PacketEntities";
    SVCMessages[SVCMessages["svc_TempEntities"] = 27] = "svc_TempEntities";
    SVCMessages[SVCMessages["svc_Prefetch"] = 28] = "svc_Prefetch";
    SVCMessages[SVCMessages["svc_Menu"] = 29] = "svc_Menu";
    SVCMessages[SVCMessages["svc_GameEventList"] = 30] = "svc_GameEventList";
    SVCMessages[SVCMessages["svc_GetCvarValue"] = 31] = "svc_GetCvarValue";
    SVCMessages[SVCMessages["svc_PaintmapData"] = 33] = "svc_PaintmapData";
    SVCMessages[SVCMessages["svc_CmdKeyValues"] = 34] = "svc_CmdKeyValues";
    SVCMessages[SVCMessages["svc_EncryptedData"] = 35] = "svc_EncryptedData";
    SVCMessages[SVCMessages["svc_HltvReplay"] = 36] = "svc_HltvReplay";
    SVCMessages[SVCMessages["svc_Broadcast_Command"] = 38] = "svc_Broadcast_Command";
})(SVCMessages = exports.SVCMessages || (exports.SVCMessages = {}));
var ReplayEventTypeT;
(function (ReplayEventTypeT) {
    ReplayEventTypeT[ReplayEventTypeT["REPLAY_EVENT_CANCEL"] = 0] = "REPLAY_EVENT_CANCEL";
    ReplayEventTypeT[ReplayEventTypeT["REPLAY_EVENT_DEATH"] = 1] = "REPLAY_EVENT_DEATH";
    ReplayEventTypeT[ReplayEventTypeT["REPLAY_EVENT_GENERIC"] = 2] = "REPLAY_EVENT_GENERIC";
    ReplayEventTypeT[ReplayEventTypeT["REPLAY_EVENT_STUCK_NEED_FULL_UPDATE"] = 3] = "REPLAY_EVENT_STUCK_NEED_FULL_UPDATE";
})(ReplayEventTypeT = exports.ReplayEventTypeT || (exports.ReplayEventTypeT = {}));
exports.CMsgVector = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.x);
        writer.uint32(21).float(message.y);
        writer.uint32(29).float(message.z);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgVector };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CMsgVector2D = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.x);
        writer.uint32(21).float(message.y);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgVector2D };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CMsgQAngle = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.x);
        writer.uint32(21).float(message.y);
        writer.uint32(29).float(message.z);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgQAngle };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CMsgRGBA = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.r);
        writer.uint32(16).int32(message.g);
        writer.uint32(24).int32(message.b);
        writer.uint32(32).int32(message.a);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgRGBA };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.r = reader.int32();
                    break;
                case 2:
                    message.g = reader.int32();
                    break;
                case 3:
                    message.b = reader.int32();
                    break;
                case 4:
                    message.a = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgTick = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.tick);
        writer.uint32(32).uint32(message.hostComputationtime);
        writer.uint32(40).uint32(message.hostComputationtimeStdDeviation);
        writer.uint32(48).uint32(message.hostFramestarttimeStdDeviation);
        writer.uint32(56).uint32(message.hltvReplayFlags);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgTick };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tick = reader.uint32();
                    break;
                case 4:
                    message.hostComputationtime = reader.uint32();
                    break;
                case 5:
                    message.hostComputationtimeStdDeviation = reader.uint32();
                    break;
                case 6:
                    message.hostFramestarttimeStdDeviation = reader.uint32();
                    break;
                case 7:
                    message.hltvReplayFlags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgStringCmd = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.command);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgStringCmd };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgSignonState = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.signonState);
        writer.uint32(16).uint32(message.spawnCount);
        writer.uint32(24).uint32(message.numServerPlayers);
        for (const v of message.playersNetworkids) {
            writer.uint32(34).string(v);
        }
        writer.uint32(42).string(message.mapName);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgSignonState };
        message.playersNetworkids = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signonState = reader.uint32();
                    break;
                case 2:
                    message.spawnCount = reader.uint32();
                    break;
                case 3:
                    message.numServerPlayers = reader.uint32();
                    break;
                case 4:
                    message.playersNetworkids.push(reader.string());
                    break;
                case 5:
                    message.mapName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CMsgCVars = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.cvars) {
            exports.CMsgCVars_CVar.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgCVars };
        message.cvars = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cvars.push(exports.CMsgCVars_CVar.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CMsgCVars_CVar = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.value);
        writer.uint32(24).uint32(message.dictionaryName);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgCVars_CVar };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.dictionaryName = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgSetConVar = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.convars !== undefined && message.convars !== undefined) {
            exports.CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgSetConVar };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.convars = exports.CMsgCVars.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgNOP = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgNOP };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgDisconnect = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.text);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgDisconnect };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgFile = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.transferId);
        writer.uint32(18).string(message.fileName);
        writer.uint32(24).bool(message.isReplayDemoFile);
        writer.uint32(32).bool(message.deny);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgFile };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.int32();
                    break;
                case 2:
                    message.fileName = reader.string();
                    break;
                case 3:
                    message.isReplayDemoFile = reader.bool();
                    break;
                case 4:
                    message.deny = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgSplitScreenUser = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.slot);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCNETMsgSplitScreenUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slot = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CNETMsgPlayerAvatarData = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.accountid);
        writer.uint32(18).bytes(message.rgb);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCNETMsgPlayerAvatarData
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.rgb = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgClientInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).fixed32(message.sendTableCrc);
        writer.uint32(16).uint32(message.serverCount);
        writer.uint32(24).bool(message.isHltv);
        writer.uint32(32).bool(message.isReplay);
        writer.uint32(40).uint32(message.friendsId);
        writer.uint32(50).string(message.friendsName);
        writer.uint32(58).fork();
        for (const v of message.customFiles) {
            writer.fixed32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgClientInfo };
        message.customFiles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sendTableCrc = reader.fixed32();
                    break;
                case 2:
                    message.serverCount = reader.uint32();
                    break;
                case 3:
                    message.isHltv = reader.bool();
                    break;
                case 4:
                    message.isReplay = reader.bool();
                    break;
                case 5:
                    message.friendsId = reader.uint32();
                    break;
                case 6:
                    message.friendsName = reader.string();
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.customFiles.push(reader.fixed32());
                        }
                    }
                    else {
                        message.customFiles.push(reader.fixed32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgMove = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.numBackupCommands);
        writer.uint32(16).uint32(message.numNewCommands);
        writer.uint32(26).bytes(message.data);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgMove };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numBackupCommands = reader.uint32();
                    break;
                case 2:
                    message.numNewCommands = reader.uint32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgVoiceData = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).bytes(message.data);
        writer.uint32(17).fixed64(message.xuid);
        writer.uint32(24).int32(message.format);
        writer.uint32(32).int32(message.sequenceBytes);
        writer.uint32(40).uint32(message.sectionNumber);
        writer.uint32(48).uint32(message.uncompressedSampleOffset);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgVoiceData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.xuid = reader.fixed64();
                    break;
                case 3:
                    message.format = reader.int32();
                    break;
                case 4:
                    message.sequenceBytes = reader.int32();
                    break;
                case 5:
                    message.sectionNumber = reader.uint32();
                    break;
                case 6:
                    message.uncompressedSampleOffset = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgBaselineAck = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.baselineTick);
        writer.uint32(16).int32(message.baselineNr);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgBaselineAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baselineTick = reader.int32();
                    break;
                case 2:
                    message.baselineNr = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgListenEvents = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.eventMask) {
            writer.fixed32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgListenEvents };
        message.eventMask = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.eventMask.push(reader.fixed32());
                        }
                    }
                    else {
                        message.eventMask.push(reader.fixed32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgRespondCvarValue = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.cookie);
        writer.uint32(16).int32(message.statusCode);
        writer.uint32(26).string(message.name);
        writer.uint32(34).string(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCLCMsgRespondCvarValue
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cookie = reader.int32();
                    break;
                case 2:
                    message.statusCode = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgFileCRCCheck = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.codePath);
        writer.uint32(18).string(message.path);
        writer.uint32(24).int32(message.codeFilename);
        writer.uint32(34).string(message.filename);
        writer.uint32(40).int32(message.fileFraction);
        writer.uint32(50).bytes(message.md5);
        writer.uint32(56).uint32(message.crc);
        writer.uint32(64).int32(message.fileHashType);
        writer.uint32(72).int32(message.fileLen);
        writer.uint32(80).int32(message.packFileId);
        writer.uint32(88).int32(message.packFileNumber);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgFileCRCCheck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codePath = reader.int32();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.codeFilename = reader.int32();
                    break;
                case 4:
                    message.filename = reader.string();
                    break;
                case 5:
                    message.fileFraction = reader.int32();
                    break;
                case 6:
                    message.md5 = reader.bytes();
                    break;
                case 7:
                    message.crc = reader.uint32();
                    break;
                case 8:
                    message.fileHashType = reader.int32();
                    break;
                case 9:
                    message.fileLen = reader.int32();
                    break;
                case 10:
                    message.packFileId = reader.int32();
                    break;
                case 11:
                    message.packFileNumber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgLoadingProgress = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.progress);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgLoadingProgress };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.progress = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgSplitPlayerConnect = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.convars !== undefined && message.convars !== undefined) {
            exports.CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCLCMsgSplitPlayerConnect
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.convars = exports.CMsgCVars.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgCmdKeyValues = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).bytes(message.keyvalues);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgCmdKeyValues };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyvalues = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgServerInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.protocol);
        writer.uint32(16).int32(message.serverCount);
        writer.uint32(24).bool(message.isDedicated);
        writer.uint32(32).bool(message.isOfficialValveServer);
        writer.uint32(40).bool(message.isHltv);
        writer.uint32(48).bool(message.isReplay);
        writer.uint32(168).bool(message.isRedirectingToProxyRelay);
        writer.uint32(56).int32(message.cOs);
        writer.uint32(69).fixed32(message.mapCrc);
        writer.uint32(77).fixed32(message.clientCrc);
        writer.uint32(85).fixed32(message.stringTableCrc);
        writer.uint32(88).int32(message.maxClients);
        writer.uint32(96).int32(message.maxClasses);
        writer.uint32(104).int32(message.playerSlot);
        writer.uint32(117).float(message.tickInterval);
        writer.uint32(122).string(message.gameDir);
        writer.uint32(130).string(message.mapName);
        writer.uint32(138).string(message.mapGroupName);
        writer.uint32(146).string(message.skyName);
        writer.uint32(154).string(message.hostName);
        writer.uint32(160).uint32(message.publicIp);
        writer.uint32(176).uint64(message.ugcMapId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgServerInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.int32();
                    break;
                case 2:
                    message.serverCount = reader.int32();
                    break;
                case 3:
                    message.isDedicated = reader.bool();
                    break;
                case 4:
                    message.isOfficialValveServer = reader.bool();
                    break;
                case 5:
                    message.isHltv = reader.bool();
                    break;
                case 6:
                    message.isReplay = reader.bool();
                    break;
                case 21:
                    message.isRedirectingToProxyRelay = reader.bool();
                    break;
                case 7:
                    message.cOs = reader.int32();
                    break;
                case 8:
                    message.mapCrc = reader.fixed32();
                    break;
                case 9:
                    message.clientCrc = reader.fixed32();
                    break;
                case 10:
                    message.stringTableCrc = reader.fixed32();
                    break;
                case 11:
                    message.maxClients = reader.int32();
                    break;
                case 12:
                    message.maxClasses = reader.int32();
                    break;
                case 13:
                    message.playerSlot = reader.int32();
                    break;
                case 14:
                    message.tickInterval = reader.float();
                    break;
                case 15:
                    message.gameDir = reader.string();
                    break;
                case 16:
                    message.mapName = reader.string();
                    break;
                case 17:
                    message.mapGroupName = reader.string();
                    break;
                case 18:
                    message.skyName = reader.string();
                    break;
                case 19:
                    message.hostName = reader.string();
                    break;
                case 20:
                    message.publicIp = reader.uint32();
                    break;
                case 22:
                    message.ugcMapId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgClassInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.createOnClient);
        for (const v of message.classes) {
            exports.CSVCMsgClassInfo_classT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgClassInfo };
        message.classes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.createOnClient = reader.bool();
                    break;
                case 2:
                    message.classes.push(exports.CSVCMsgClassInfo_classT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgClassInfo_classT = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.classId);
        writer.uint32(18).string(message.dataTableName);
        writer.uint32(26).string(message.className);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgClassInfo_classT
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.int32();
                    break;
                case 2:
                    message.dataTableName = reader.string();
                    break;
                case 3:
                    message.className = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSendTable = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.isEnd);
        writer.uint32(18).string(message.netTableName);
        writer.uint32(24).bool(message.needsDecoder);
        for (const v of message.props) {
            exports.CSVCMsgSendTable_sendpropT.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgSendTable };
        message.props = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isEnd = reader.bool();
                    break;
                case 2:
                    message.netTableName = reader.string();
                    break;
                case 3:
                    message.needsDecoder = reader.bool();
                    break;
                case 4:
                    message.props.push(exports.CSVCMsgSendTable_sendpropT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSendTable_sendpropT = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        writer.uint32(18).string(message.varName);
        writer.uint32(24).int32(message.flags);
        writer.uint32(32).int32(message.priority);
        writer.uint32(42).string(message.dtName);
        writer.uint32(48).int32(message.numElements);
        writer.uint32(61).float(message.lowValue);
        writer.uint32(69).float(message.highValue);
        writer.uint32(72).int32(message.numBits);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgSendTable_sendpropT
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.varName = reader.string();
                    break;
                case 3:
                    message.flags = reader.int32();
                    break;
                case 4:
                    message.priority = reader.int32();
                    break;
                case 5:
                    message.dtName = reader.string();
                    break;
                case 6:
                    message.numElements = reader.int32();
                    break;
                case 7:
                    message.lowValue = reader.float();
                    break;
                case 8:
                    message.highValue = reader.float();
                    break;
                case 9:
                    message.numBits = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgPrint = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.text);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgPrint };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSetPause = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.paused);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgSetPause };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paused = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSetView = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entityIndex);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgSetView };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entityIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgCreateStringTable = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(16).int32(message.maxEntries);
        writer.uint32(24).int32(message.numEntries);
        writer.uint32(32).bool(message.userDataFixedSize);
        writer.uint32(40).int32(message.userDataSize);
        writer.uint32(48).int32(message.userDataSizeBits);
        writer.uint32(56).int32(message.flags);
        writer.uint32(66).bytes(message.stringData);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgCreateStringTable
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.maxEntries = reader.int32();
                    break;
                case 3:
                    message.numEntries = reader.int32();
                    break;
                case 4:
                    message.userDataFixedSize = reader.bool();
                    break;
                case 5:
                    message.userDataSize = reader.int32();
                    break;
                case 6:
                    message.userDataSizeBits = reader.int32();
                    break;
                case 7:
                    message.flags = reader.int32();
                    break;
                case 8:
                    message.stringData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgUpdateStringTable = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.tableId);
        writer.uint32(16).int32(message.numChangedEntries);
        writer.uint32(26).bytes(message.stringData);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgUpdateStringTable
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.int32();
                    break;
                case 2:
                    message.numChangedEntries = reader.int32();
                    break;
                case 3:
                    message.stringData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgVoiceInit = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.quality);
        writer.uint32(18).string(message.codec);
        writer.uint32(24).int32(message.version);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgVoiceInit };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quality = reader.int32();
                    break;
                case 2:
                    message.codec = reader.string();
                    break;
                case 3:
                    message.version = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgVoiceData = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.client);
        writer.uint32(16).bool(message.proximity);
        writer.uint32(25).fixed64(message.xuid);
        writer.uint32(32).int32(message.audibleMask);
        writer.uint32(42).bytes(message.voiceData);
        writer.uint32(48).bool(message.caster);
        writer.uint32(56).int32(message.format);
        writer.uint32(64).int32(message.sequenceBytes);
        writer.uint32(72).uint32(message.sectionNumber);
        writer.uint32(80).uint32(message.uncompressedSampleOffset);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgVoiceData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client = reader.int32();
                    break;
                case 2:
                    message.proximity = reader.bool();
                    break;
                case 3:
                    message.xuid = reader.fixed64();
                    break;
                case 4:
                    message.audibleMask = reader.int32();
                    break;
                case 5:
                    message.voiceData = reader.bytes();
                    break;
                case 6:
                    message.caster = reader.bool();
                    break;
                case 7:
                    message.format = reader.int32();
                    break;
                case 8:
                    message.sequenceBytes = reader.int32();
                    break;
                case 9:
                    message.sectionNumber = reader.uint32();
                    break;
                case 10:
                    message.uncompressedSampleOffset = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgFixAngle = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.relative);
        if (message.angle !== undefined && message.angle !== undefined) {
            exports.CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgFixAngle };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relative = reader.bool();
                    break;
                case 2:
                    message.angle = exports.CMsgQAngle.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgCrosshairAngle = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.angle !== undefined && message.angle !== undefined) {
            exports.CMsgQAngle.encode(message.angle, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgCrosshairAngle };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.angle = exports.CMsgQAngle.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgPrefetch = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.soundIndex);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgPrefetch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.soundIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgBSPDecal = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pos !== undefined && message.pos !== undefined) {
            exports.CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(16).int32(message.decalTextureIndex);
        writer.uint32(24).int32(message.entityIndex);
        writer.uint32(32).int32(message.modelIndex);
        writer.uint32(40).bool(message.lowPriority);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgBSPDecal };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pos = exports.CMsgVector.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.decalTextureIndex = reader.int32();
                    break;
                case 3:
                    message.entityIndex = reader.int32();
                    break;
                case 4:
                    message.modelIndex = reader.int32();
                    break;
                case 5:
                    message.lowPriority = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSplitScreen = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        writer.uint32(16).int32(message.slot);
        writer.uint32(24).int32(message.playerIndex);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgSplitScreen };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.slot = reader.int32();
                    break;
                case 3:
                    message.playerIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgGetCvarValue = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.cookie);
        writer.uint32(18).string(message.cvarName);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgGetCvarValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cookie = reader.int32();
                    break;
                case 2:
                    message.cvarName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgMenu = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dialogType);
        writer.uint32(18).bytes(message.menuKeyValues);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgMenu };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dialogType = reader.int32();
                    break;
                case 2:
                    message.menuKeyValues = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgUserMessage = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.msgType);
        writer.uint32(18).bytes(message.msgData);
        writer.uint32(24).int32(message.passthrough);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgUserMessage };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.int32();
                    break;
                case 2:
                    message.msgData = reader.bytes();
                    break;
                case 3:
                    message.passthrough = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgPaintmapData = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).bytes(message.paintmap);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgPaintmapData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paintmap = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgGameEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.eventName);
        writer.uint32(16).int32(message.eventid);
        for (const v of message.keys) {
            exports.CSVCMsgGameEvent_keyT.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(32).int32(message.passthrough);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgGameEvent };
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventName = reader.string();
                    break;
                case 2:
                    message.eventid = reader.int32();
                    break;
                case 3:
                    message.keys.push(exports.CSVCMsgGameEvent_keyT.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.passthrough = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgGameEvent_keyT = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        writer.uint32(18).string(message.valString);
        writer.uint32(29).float(message.valFloat);
        writer.uint32(32).int32(message.valLong);
        writer.uint32(40).int32(message.valShort);
        writer.uint32(48).int32(message.valByte);
        writer.uint32(56).bool(message.valBool);
        writer.uint32(64).uint64(message.valUint64);
        writer.uint32(74).bytes(message.valWstring);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgGameEvent_keyT };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.valString = reader.string();
                    break;
                case 3:
                    message.valFloat = reader.float();
                    break;
                case 4:
                    message.valLong = reader.int32();
                    break;
                case 5:
                    message.valShort = reader.int32();
                    break;
                case 6:
                    message.valByte = reader.int32();
                    break;
                case 7:
                    message.valBool = reader.bool();
                    break;
                case 8:
                    message.valUint64 = reader.uint64();
                    break;
                case 9:
                    message.valWstring = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgGameEventList = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.descriptors) {
            exports.CSVCMsgGameEventList_descriptorT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgGameEventList };
        message.descriptors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.descriptors.push(exports.CSVCMsgGameEventList_descriptorT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgGameEventList_keyT = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        writer.uint32(18).string(message.name);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgGameEventList_keyT
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgGameEventList_descriptorT = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eventid);
        writer.uint32(18).string(message.name);
        for (const v of message.keys) {
            exports.CSVCMsgGameEventList_keyT.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgGameEventList_descriptorT
        };
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventid = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.keys.push(exports.CSVCMsgGameEventList_keyT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgTempEntities = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.reliable);
        writer.uint32(16).int32(message.numEntries);
        writer.uint32(26).bytes(message.entityData);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgTempEntities };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reliable = reader.bool();
                    break;
                case 2:
                    message.numEntries = reader.int32();
                    break;
                case 3:
                    message.entityData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgPacketEntities = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.maxEntries);
        writer.uint32(16).int32(message.updatedEntries);
        writer.uint32(24).bool(message.isDelta);
        writer.uint32(32).bool(message.updateBaseline);
        writer.uint32(40).int32(message.baseline);
        writer.uint32(48).int32(message.deltaFrom);
        writer.uint32(58).bytes(message.entityData);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgPacketEntities };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxEntries = reader.int32();
                    break;
                case 2:
                    message.updatedEntries = reader.int32();
                    break;
                case 3:
                    message.isDelta = reader.bool();
                    break;
                case 4:
                    message.updateBaseline = reader.bool();
                    break;
                case 5:
                    message.baseline = reader.int32();
                    break;
                case 6:
                    message.deltaFrom = reader.int32();
                    break;
                case 7:
                    message.entityData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSounds = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.reliableSound);
        for (const v of message.sounds) {
            exports.CSVCMsgSounds_sounddataT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgSounds };
        message.sounds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reliableSound = reader.bool();
                    break;
                case 2:
                    message.sounds.push(exports.CSVCMsgSounds_sounddataT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgSounds_sounddataT = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).sint32(message.originX);
        writer.uint32(16).sint32(message.originY);
        writer.uint32(24).sint32(message.originZ);
        writer.uint32(32).uint32(message.volume);
        writer.uint32(45).float(message.delayValue);
        writer.uint32(48).int32(message.sequenceNumber);
        writer.uint32(56).int32(message.entityIndex);
        writer.uint32(64).int32(message.channel);
        writer.uint32(72).int32(message.pitch);
        writer.uint32(80).int32(message.flags);
        writer.uint32(88).uint32(message.soundNum);
        writer.uint32(101).fixed32(message.soundNumHandle);
        writer.uint32(104).int32(message.speakerEntity);
        writer.uint32(112).int32(message.randomSeed);
        writer.uint32(120).int32(message.soundLevel);
        writer.uint32(128).bool(message.isSentence);
        writer.uint32(136).bool(message.isAmbient);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgSounds_sounddataT
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originX = reader.sint32();
                    break;
                case 2:
                    message.originY = reader.sint32();
                    break;
                case 3:
                    message.originZ = reader.sint32();
                    break;
                case 4:
                    message.volume = reader.uint32();
                    break;
                case 5:
                    message.delayValue = reader.float();
                    break;
                case 6:
                    message.sequenceNumber = reader.int32();
                    break;
                case 7:
                    message.entityIndex = reader.int32();
                    break;
                case 8:
                    message.channel = reader.int32();
                    break;
                case 9:
                    message.pitch = reader.int32();
                    break;
                case 10:
                    message.flags = reader.int32();
                    break;
                case 11:
                    message.soundNum = reader.uint32();
                    break;
                case 12:
                    message.soundNumHandle = reader.fixed32();
                    break;
                case 13:
                    message.speakerEntity = reader.int32();
                    break;
                case 14:
                    message.randomSeed = reader.int32();
                    break;
                case 15:
                    message.soundLevel = reader.int32();
                    break;
                case 16:
                    message.isSentence = reader.bool();
                    break;
                case 17:
                    message.isAmbient = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgEntityMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entIndex);
        writer.uint32(16).int32(message.classId);
        writer.uint32(26).bytes(message.entData);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgEntityMsg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entIndex = reader.int32();
                    break;
                case 2:
                    message.classId = reader.int32();
                    break;
                case 3:
                    message.entData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgCmdKeyValues = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).bytes(message.keyvalues);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgCmdKeyValues };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyvalues = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgEncryptedData = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).bytes(message.encrypted);
        writer.uint32(16).int32(message.keyType);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgEncryptedData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encrypted = reader.bytes();
                    break;
                case 2:
                    message.keyType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgHltvReplay = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.delay);
        writer.uint32(16).int32(message.primaryTarget);
        writer.uint32(24).int32(message.replayStopAt);
        writer.uint32(32).int32(message.replayStartAt);
        writer.uint32(40).int32(message.replaySlowdownBegin);
        writer.uint32(48).int32(message.replaySlowdownEnd);
        writer.uint32(61).float(message.replaySlowdownRate);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCSVCMsgHltvReplay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delay = reader.int32();
                    break;
                case 2:
                    message.primaryTarget = reader.int32();
                    break;
                case 3:
                    message.replayStopAt = reader.int32();
                    break;
                case 4:
                    message.replayStartAt = reader.int32();
                    break;
                case 5:
                    message.replaySlowdownBegin = reader.int32();
                    break;
                case 6:
                    message.replaySlowdownEnd = reader.int32();
                    break;
                case 7:
                    message.replaySlowdownRate = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCLCMsgHltvReplay = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.request);
        writer.uint32(21).float(message.slowdownLength);
        writer.uint32(29).float(message.slowdownRate);
        writer.uint32(32).int32(message.primaryTargetEntIndex);
        writer.uint32(45).float(message.eventTime);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCLCMsgHltvReplay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.request = reader.int32();
                    break;
                case 2:
                    message.slowdownLength = reader.float();
                    break;
                case 3:
                    message.slowdownRate = reader.float();
                    break;
                case 4:
                    message.primaryTargetEntIndex = reader.int32();
                    break;
                case 5:
                    message.eventTime = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CSVCMsgBroadcastCommand = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.cmd);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCSVCMsgBroadcastCommand
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
//# sourceMappingURL=netmessages.js.map