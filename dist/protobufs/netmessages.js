"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVCMsgGetCvarValue = exports.CSVCMsgSplitScreen = exports.CSVCMsgBSPDecal = exports.CSVCMsgPrefetch = exports.CSVCMsgCrosshairAngle = exports.CSVCMsgFixAngle = exports.CSVCMsgVoiceData = exports.CSVCMsgVoiceInit = exports.CSVCMsgUpdateStringTable = exports.CSVCMsgCreateStringTable = exports.CSVCMsgSetView = exports.CSVCMsgSetPause = exports.CSVCMsgPrint = exports.CSVCMsgSendTable_sendpropT = exports.CSVCMsgSendTable = exports.CSVCMsgClassInfo_classT = exports.CSVCMsgClassInfo = exports.CSVCMsgServerInfo = exports.CCLCMsgCmdKeyValues = exports.CCLCMsgSplitPlayerConnect = exports.CCLCMsgLoadingProgress = exports.CCLCMsgFileCRCCheck = exports.CCLCMsgRespondCvarValue = exports.CCLCMsgListenEvents = exports.CCLCMsgBaselineAck = exports.CCLCMsgVoiceData = exports.CCLCMsgMove = exports.CCLCMsgClientInfo = exports.CNETMsgPlayerAvatarData = exports.CNETMsgSplitScreenUser = exports.CNETMsgFile = exports.CNETMsgDisconnect = exports.CNETMsgNOP = exports.CNETMsgSetConVar = exports.CMsgCVars_CVar = exports.CMsgCVars = exports.CNETMsgSignonState = exports.CNETMsgStringCmd = exports.CNETMsgTick = exports.CMsgRGBA = exports.CMsgQAngle = exports.CMsgVector2D = exports.CMsgVector = exports.ReplayEventTypeT = exports.SVCMessages = exports.ESplitScreenMessageType = exports.VoiceDataFormatT = exports.CLCMessages = exports.NETMessages = exports.protobufPackage = void 0;
exports.CSVCMsgBroadcastCommand = exports.CCLCMsgHltvReplay = exports.CSVCMsgHltvReplay = exports.CSVCMsgEncryptedData = exports.CSVCMsgCmdKeyValues = exports.CSVCMsgEntityMsg = exports.CSVCMsgSounds_sounddataT = exports.CSVCMsgSounds = exports.CSVCMsgPacketEntities = exports.CSVCMsgTempEntities = exports.CSVCMsgGameEventList_descriptorT = exports.CSVCMsgGameEventList_keyT = exports.CSVCMsgGameEventList = exports.CSVCMsgGameEvent_keyT = exports.CSVCMsgGameEvent = exports.CSVCMsgPaintmapData = exports.CSVCMsgUserMessage = exports.CSVCMsgMenu = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
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
function createBaseCMsgVector() {
    return { x: 0, y: 0, z: 0 };
}
exports.CMsgVector = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgVector();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgVector();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        message.z = (_c = object.z) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCMsgVector2D() {
    return { x: 0, y: 0 };
}
exports.CMsgVector2D = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgVector2D();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgVector2D();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgQAngle() {
    return { x: 0, y: 0, z: 0 };
}
exports.CMsgQAngle = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgQAngle();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgQAngle();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        message.z = (_c = object.z) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCMsgRGBA() {
    return { r: 0, g: 0, b: 0, a: 0 };
}
exports.CMsgRGBA = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.r !== 0) {
            writer.uint32(8).int32(message.r);
        }
        if (message.g !== 0) {
            writer.uint32(16).int32(message.g);
        }
        if (message.b !== 0) {
            writer.uint32(24).int32(message.b);
        }
        if (message.a !== 0) {
            writer.uint32(32).int32(message.a);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgRGBA();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgRGBA();
        message.r = (_a = object.r) !== null && _a !== void 0 ? _a : 0;
        message.g = (_b = object.g) !== null && _b !== void 0 ? _b : 0;
        message.b = (_c = object.b) !== null && _c !== void 0 ? _c : 0;
        message.a = (_d = object.a) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCNETMsgTick() {
    return {
        tick: 0,
        hostComputationtime: 0,
        hostComputationtimeStdDeviation: 0,
        hostFramestarttimeStdDeviation: 0,
        hltvReplayFlags: 0
    };
}
exports.CNETMsgTick = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tick !== 0) {
            writer.uint32(8).uint32(message.tick);
        }
        if (message.hostComputationtime !== 0) {
            writer.uint32(32).uint32(message.hostComputationtime);
        }
        if (message.hostComputationtimeStdDeviation !== 0) {
            writer.uint32(40).uint32(message.hostComputationtimeStdDeviation);
        }
        if (message.hostFramestarttimeStdDeviation !== 0) {
            writer.uint32(48).uint32(message.hostFramestarttimeStdDeviation);
        }
        if (message.hltvReplayFlags !== 0) {
            writer.uint32(56).uint32(message.hltvReplayFlags);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgTick();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCNETMsgTick();
        message.tick = (_a = object.tick) !== null && _a !== void 0 ? _a : 0;
        message.hostComputationtime = (_b = object.hostComputationtime) !== null && _b !== void 0 ? _b : 0;
        message.hostComputationtimeStdDeviation =
            (_c = object.hostComputationtimeStdDeviation) !== null && _c !== void 0 ? _c : 0;
        message.hostFramestarttimeStdDeviation =
            (_d = object.hostFramestarttimeStdDeviation) !== null && _d !== void 0 ? _d : 0;
        message.hltvReplayFlags = (_e = object.hltvReplayFlags) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCNETMsgStringCmd() {
    return { command: "" };
}
exports.CNETMsgStringCmd = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.command !== "") {
            writer.uint32(10).string(message.command);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgStringCmd();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCNETMsgStringCmd();
        message.command = (_a = object.command) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCNETMsgSignonState() {
    return {
        signonState: 0,
        spawnCount: 0,
        numServerPlayers: 0,
        playersNetworkids: [],
        mapName: ""
    };
}
exports.CNETMsgSignonState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.signonState !== 0) {
            writer.uint32(8).uint32(message.signonState);
        }
        if (message.spawnCount !== 0) {
            writer.uint32(16).uint32(message.spawnCount);
        }
        if (message.numServerPlayers !== 0) {
            writer.uint32(24).uint32(message.numServerPlayers);
        }
        for (const v of message.playersNetworkids) {
            writer.uint32(34).string(v);
        }
        if (message.mapName !== "") {
            writer.uint32(42).string(message.mapName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgSignonState();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCNETMsgSignonState();
        message.signonState = (_a = object.signonState) !== null && _a !== void 0 ? _a : 0;
        message.spawnCount = (_b = object.spawnCount) !== null && _b !== void 0 ? _b : 0;
        message.numServerPlayers = (_c = object.numServerPlayers) !== null && _c !== void 0 ? _c : 0;
        message.playersNetworkids = ((_d = object.playersNetworkids) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.mapName = (_e = object.mapName) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseCMsgCVars() {
    return { cvars: [] };
}
exports.CMsgCVars = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.cvars) {
            exports.CMsgCVars_CVar.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgCVars();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgCVars();
        message.cvars = ((_a = object.cvars) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgCVars_CVar.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgCVars_CVar() {
    return { name: "", value: "", dictionaryName: 0 };
}
exports.CMsgCVars_CVar = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.dictionaryName !== 0) {
            writer.uint32(24).uint32(message.dictionaryName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgCVars_CVar();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgCVars_CVar();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        message.dictionaryName = (_c = object.dictionaryName) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCNETMsgSetConVar() {
    return { convars: undefined };
}
exports.CNETMsgSetConVar = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.convars !== undefined) {
            exports.CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgSetConVar();
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
    },
    fromPartial(object) {
        const message = createBaseCNETMsgSetConVar();
        message.convars =
            object.convars !== undefined && object.convars !== null
                ? exports.CMsgCVars.fromPartial(object.convars)
                : undefined;
        return message;
    }
};
function createBaseCNETMsgNOP() {
    return {};
}
exports.CNETMsgNOP = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgNOP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseCNETMsgNOP();
        return message;
    }
};
function createBaseCNETMsgDisconnect() {
    return { text: "" };
}
exports.CNETMsgDisconnect = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgDisconnect();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCNETMsgDisconnect();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCNETMsgFile() {
    return { transferId: 0, fileName: "", isReplayDemoFile: false, deny: false };
}
exports.CNETMsgFile = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.transferId !== 0) {
            writer.uint32(8).int32(message.transferId);
        }
        if (message.fileName !== "") {
            writer.uint32(18).string(message.fileName);
        }
        if (message.isReplayDemoFile === true) {
            writer.uint32(24).bool(message.isReplayDemoFile);
        }
        if (message.deny === true) {
            writer.uint32(32).bool(message.deny);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgFile();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCNETMsgFile();
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : 0;
        message.fileName = (_b = object.fileName) !== null && _b !== void 0 ? _b : "";
        message.isReplayDemoFile = (_c = object.isReplayDemoFile) !== null && _c !== void 0 ? _c : false;
        message.deny = (_d = object.deny) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseCNETMsgSplitScreenUser() {
    return { slot: 0 };
}
exports.CNETMsgSplitScreenUser = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.slot !== 0) {
            writer.uint32(8).int32(message.slot);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgSplitScreenUser();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCNETMsgSplitScreenUser();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCNETMsgPlayerAvatarData() {
    return { accountid: 0, rgb: new Uint8Array() };
}
exports.CNETMsgPlayerAvatarData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (message.rgb.length !== 0) {
            writer.uint32(18).bytes(message.rgb);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgPlayerAvatarData();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCNETMsgPlayerAvatarData();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.rgb = (_b = object.rgb) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseCCLCMsgClientInfo() {
    return {
        sendTableCrc: 0,
        serverCount: 0,
        isHltv: false,
        isReplay: false,
        friendsId: 0,
        friendsName: "",
        customFiles: []
    };
}
exports.CCLCMsgClientInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.sendTableCrc !== 0) {
            writer.uint32(13).fixed32(message.sendTableCrc);
        }
        if (message.serverCount !== 0) {
            writer.uint32(16).uint32(message.serverCount);
        }
        if (message.isHltv === true) {
            writer.uint32(24).bool(message.isHltv);
        }
        if (message.isReplay === true) {
            writer.uint32(32).bool(message.isReplay);
        }
        if (message.friendsId !== 0) {
            writer.uint32(40).uint32(message.friendsId);
        }
        if (message.friendsName !== "") {
            writer.uint32(50).string(message.friendsName);
        }
        writer.uint32(58).fork();
        for (const v of message.customFiles) {
            writer.fixed32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgClientInfo();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCCLCMsgClientInfo();
        message.sendTableCrc = (_a = object.sendTableCrc) !== null && _a !== void 0 ? _a : 0;
        message.serverCount = (_b = object.serverCount) !== null && _b !== void 0 ? _b : 0;
        message.isHltv = (_c = object.isHltv) !== null && _c !== void 0 ? _c : false;
        message.isReplay = (_d = object.isReplay) !== null && _d !== void 0 ? _d : false;
        message.friendsId = (_e = object.friendsId) !== null && _e !== void 0 ? _e : 0;
        message.friendsName = (_f = object.friendsName) !== null && _f !== void 0 ? _f : "";
        message.customFiles = ((_g = object.customFiles) === null || _g === void 0 ? void 0 : _g.map(e => e)) || [];
        return message;
    }
};
function createBaseCCLCMsgMove() {
    return { numBackupCommands: 0, numNewCommands: 0, data: new Uint8Array() };
}
exports.CCLCMsgMove = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.numBackupCommands !== 0) {
            writer.uint32(8).uint32(message.numBackupCommands);
        }
        if (message.numNewCommands !== 0) {
            writer.uint32(16).uint32(message.numNewCommands);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgMove();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCLCMsgMove();
        message.numBackupCommands = (_a = object.numBackupCommands) !== null && _a !== void 0 ? _a : 0;
        message.numNewCommands = (_b = object.numNewCommands) !== null && _b !== void 0 ? _b : 0;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseCCLCMsgVoiceData() {
    return {
        data: new Uint8Array(),
        xuid: Long.UZERO,
        format: 0,
        sequenceBytes: 0,
        sectionNumber: 0,
        uncompressedSampleOffset: 0
    };
}
exports.CCLCMsgVoiceData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (!message.xuid.isZero()) {
            writer.uint32(17).fixed64(message.xuid);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        if (message.sequenceBytes !== 0) {
            writer.uint32(32).int32(message.sequenceBytes);
        }
        if (message.sectionNumber !== 0) {
            writer.uint32(40).uint32(message.sectionNumber);
        }
        if (message.uncompressedSampleOffset !== 0) {
            writer.uint32(48).uint32(message.uncompressedSampleOffset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgVoiceData();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCLCMsgVoiceData();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.sequenceBytes = (_c = object.sequenceBytes) !== null && _c !== void 0 ? _c : 0;
        message.sectionNumber = (_d = object.sectionNumber) !== null && _d !== void 0 ? _d : 0;
        message.uncompressedSampleOffset = (_e = object.uncompressedSampleOffset) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCCLCMsgBaselineAck() {
    return { baselineTick: 0, baselineNr: 0 };
}
exports.CCLCMsgBaselineAck = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.baselineTick !== 0) {
            writer.uint32(8).int32(message.baselineTick);
        }
        if (message.baselineNr !== 0) {
            writer.uint32(16).int32(message.baselineNr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgBaselineAck();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCLCMsgBaselineAck();
        message.baselineTick = (_a = object.baselineTick) !== null && _a !== void 0 ? _a : 0;
        message.baselineNr = (_b = object.baselineNr) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCLCMsgListenEvents() {
    return { eventMask: [] };
}
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
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgListenEvents();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCLCMsgListenEvents();
        message.eventMask = ((_a = object.eventMask) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCCLCMsgRespondCvarValue() {
    return { cookie: 0, statusCode: 0, name: "", value: "" };
}
exports.CCLCMsgRespondCvarValue = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cookie !== 0) {
            writer.uint32(8).int32(message.cookie);
        }
        if (message.statusCode !== 0) {
            writer.uint32(16).int32(message.statusCode);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(34).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgRespondCvarValue();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCLCMsgRespondCvarValue();
        message.cookie = (_a = object.cookie) !== null && _a !== void 0 ? _a : 0;
        message.statusCode = (_b = object.statusCode) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.value = (_d = object.value) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCCLCMsgFileCRCCheck() {
    return {
        codePath: 0,
        path: "",
        codeFilename: 0,
        filename: "",
        fileFraction: 0,
        md5: new Uint8Array(),
        crc: 0,
        fileHashType: 0,
        fileLen: 0,
        packFileId: 0,
        packFileNumber: 0
    };
}
exports.CCLCMsgFileCRCCheck = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.codePath !== 0) {
            writer.uint32(8).int32(message.codePath);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.codeFilename !== 0) {
            writer.uint32(24).int32(message.codeFilename);
        }
        if (message.filename !== "") {
            writer.uint32(34).string(message.filename);
        }
        if (message.fileFraction !== 0) {
            writer.uint32(40).int32(message.fileFraction);
        }
        if (message.md5.length !== 0) {
            writer.uint32(50).bytes(message.md5);
        }
        if (message.crc !== 0) {
            writer.uint32(56).uint32(message.crc);
        }
        if (message.fileHashType !== 0) {
            writer.uint32(64).int32(message.fileHashType);
        }
        if (message.fileLen !== 0) {
            writer.uint32(72).int32(message.fileLen);
        }
        if (message.packFileId !== 0) {
            writer.uint32(80).int32(message.packFileId);
        }
        if (message.packFileNumber !== 0) {
            writer.uint32(88).int32(message.packFileNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgFileCRCCheck();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseCCLCMsgFileCRCCheck();
        message.codePath = (_a = object.codePath) !== null && _a !== void 0 ? _a : 0;
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.codeFilename = (_c = object.codeFilename) !== null && _c !== void 0 ? _c : 0;
        message.filename = (_d = object.filename) !== null && _d !== void 0 ? _d : "";
        message.fileFraction = (_e = object.fileFraction) !== null && _e !== void 0 ? _e : 0;
        message.md5 = (_f = object.md5) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.crc = (_g = object.crc) !== null && _g !== void 0 ? _g : 0;
        message.fileHashType = (_h = object.fileHashType) !== null && _h !== void 0 ? _h : 0;
        message.fileLen = (_j = object.fileLen) !== null && _j !== void 0 ? _j : 0;
        message.packFileId = (_k = object.packFileId) !== null && _k !== void 0 ? _k : 0;
        message.packFileNumber = (_l = object.packFileNumber) !== null && _l !== void 0 ? _l : 0;
        return message;
    }
};
function createBaseCCLCMsgLoadingProgress() {
    return { progress: 0 };
}
exports.CCLCMsgLoadingProgress = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.progress !== 0) {
            writer.uint32(8).int32(message.progress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgLoadingProgress();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCLCMsgLoadingProgress();
        message.progress = (_a = object.progress) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCLCMsgSplitPlayerConnect() {
    return { convars: undefined };
}
exports.CCLCMsgSplitPlayerConnect = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.convars !== undefined) {
            exports.CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgSplitPlayerConnect();
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
    },
    fromPartial(object) {
        const message = createBaseCCLCMsgSplitPlayerConnect();
        message.convars =
            object.convars !== undefined && object.convars !== null
                ? exports.CMsgCVars.fromPartial(object.convars)
                : undefined;
        return message;
    }
};
function createBaseCCLCMsgCmdKeyValues() {
    return { keyvalues: new Uint8Array() };
}
exports.CCLCMsgCmdKeyValues = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.keyvalues.length !== 0) {
            writer.uint32(10).bytes(message.keyvalues);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgCmdKeyValues();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCLCMsgCmdKeyValues();
        message.keyvalues = (_a = object.keyvalues) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgServerInfo() {
    return {
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
}
exports.CSVCMsgServerInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.protocol !== 0) {
            writer.uint32(8).int32(message.protocol);
        }
        if (message.serverCount !== 0) {
            writer.uint32(16).int32(message.serverCount);
        }
        if (message.isDedicated === true) {
            writer.uint32(24).bool(message.isDedicated);
        }
        if (message.isOfficialValveServer === true) {
            writer.uint32(32).bool(message.isOfficialValveServer);
        }
        if (message.isHltv === true) {
            writer.uint32(40).bool(message.isHltv);
        }
        if (message.isReplay === true) {
            writer.uint32(48).bool(message.isReplay);
        }
        if (message.isRedirectingToProxyRelay === true) {
            writer.uint32(168).bool(message.isRedirectingToProxyRelay);
        }
        if (message.cOs !== 0) {
            writer.uint32(56).int32(message.cOs);
        }
        if (message.mapCrc !== 0) {
            writer.uint32(69).fixed32(message.mapCrc);
        }
        if (message.clientCrc !== 0) {
            writer.uint32(77).fixed32(message.clientCrc);
        }
        if (message.stringTableCrc !== 0) {
            writer.uint32(85).fixed32(message.stringTableCrc);
        }
        if (message.maxClients !== 0) {
            writer.uint32(88).int32(message.maxClients);
        }
        if (message.maxClasses !== 0) {
            writer.uint32(96).int32(message.maxClasses);
        }
        if (message.playerSlot !== 0) {
            writer.uint32(104).int32(message.playerSlot);
        }
        if (message.tickInterval !== 0) {
            writer.uint32(117).float(message.tickInterval);
        }
        if (message.gameDir !== "") {
            writer.uint32(122).string(message.gameDir);
        }
        if (message.mapName !== "") {
            writer.uint32(130).string(message.mapName);
        }
        if (message.mapGroupName !== "") {
            writer.uint32(138).string(message.mapGroupName);
        }
        if (message.skyName !== "") {
            writer.uint32(146).string(message.skyName);
        }
        if (message.hostName !== "") {
            writer.uint32(154).string(message.hostName);
        }
        if (message.publicIp !== 0) {
            writer.uint32(160).uint32(message.publicIp);
        }
        if (!message.ugcMapId.isZero()) {
            writer.uint32(176).uint64(message.ugcMapId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgServerInfo();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseCSVCMsgServerInfo();
        message.protocol = (_a = object.protocol) !== null && _a !== void 0 ? _a : 0;
        message.serverCount = (_b = object.serverCount) !== null && _b !== void 0 ? _b : 0;
        message.isDedicated = (_c = object.isDedicated) !== null && _c !== void 0 ? _c : false;
        message.isOfficialValveServer = (_d = object.isOfficialValveServer) !== null && _d !== void 0 ? _d : false;
        message.isHltv = (_e = object.isHltv) !== null && _e !== void 0 ? _e : false;
        message.isReplay = (_f = object.isReplay) !== null && _f !== void 0 ? _f : false;
        message.isRedirectingToProxyRelay =
            (_g = object.isRedirectingToProxyRelay) !== null && _g !== void 0 ? _g : false;
        message.cOs = (_h = object.cOs) !== null && _h !== void 0 ? _h : 0;
        message.mapCrc = (_j = object.mapCrc) !== null && _j !== void 0 ? _j : 0;
        message.clientCrc = (_k = object.clientCrc) !== null && _k !== void 0 ? _k : 0;
        message.stringTableCrc = (_l = object.stringTableCrc) !== null && _l !== void 0 ? _l : 0;
        message.maxClients = (_m = object.maxClients) !== null && _m !== void 0 ? _m : 0;
        message.maxClasses = (_o = object.maxClasses) !== null && _o !== void 0 ? _o : 0;
        message.playerSlot = (_p = object.playerSlot) !== null && _p !== void 0 ? _p : 0;
        message.tickInterval = (_q = object.tickInterval) !== null && _q !== void 0 ? _q : 0;
        message.gameDir = (_r = object.gameDir) !== null && _r !== void 0 ? _r : "";
        message.mapName = (_s = object.mapName) !== null && _s !== void 0 ? _s : "";
        message.mapGroupName = (_t = object.mapGroupName) !== null && _t !== void 0 ? _t : "";
        message.skyName = (_u = object.skyName) !== null && _u !== void 0 ? _u : "";
        message.hostName = (_v = object.hostName) !== null && _v !== void 0 ? _v : "";
        message.publicIp = (_w = object.publicIp) !== null && _w !== void 0 ? _w : 0;
        message.ugcMapId =
            object.ugcMapId !== undefined && object.ugcMapId !== null
                ? Long.fromValue(object.ugcMapId)
                : Long.UZERO;
        return message;
    }
};
function createBaseCSVCMsgClassInfo() {
    return { createOnClient: false, classes: [] };
}
exports.CSVCMsgClassInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.createOnClient === true) {
            writer.uint32(8).bool(message.createOnClient);
        }
        for (const v of message.classes) {
            exports.CSVCMsgClassInfo_classT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgClassInfo();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSVCMsgClassInfo();
        message.createOnClient = (_a = object.createOnClient) !== null && _a !== void 0 ? _a : false;
        message.classes =
            ((_b = object.classes) === null || _b === void 0 ? void 0 : _b.map(e => exports.CSVCMsgClassInfo_classT.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCSVCMsgClassInfo_classT() {
    return { classId: 0, dataTableName: "", className: "" };
}
exports.CSVCMsgClassInfo_classT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.classId !== 0) {
            writer.uint32(8).int32(message.classId);
        }
        if (message.dataTableName !== "") {
            writer.uint32(18).string(message.dataTableName);
        }
        if (message.className !== "") {
            writer.uint32(26).string(message.className);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgClassInfo_classT();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgClassInfo_classT();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : 0;
        message.dataTableName = (_b = object.dataTableName) !== null && _b !== void 0 ? _b : "";
        message.className = (_c = object.className) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCSVCMsgSendTable() {
    return { isEnd: false, netTableName: "", needsDecoder: false, props: [] };
}
exports.CSVCMsgSendTable = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.isEnd === true) {
            writer.uint32(8).bool(message.isEnd);
        }
        if (message.netTableName !== "") {
            writer.uint32(18).string(message.netTableName);
        }
        if (message.needsDecoder === true) {
            writer.uint32(24).bool(message.needsDecoder);
        }
        for (const v of message.props) {
            exports.CSVCMsgSendTable_sendpropT.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSendTable();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCSVCMsgSendTable();
        message.isEnd = (_a = object.isEnd) !== null && _a !== void 0 ? _a : false;
        message.netTableName = (_b = object.netTableName) !== null && _b !== void 0 ? _b : "";
        message.needsDecoder = (_c = object.needsDecoder) !== null && _c !== void 0 ? _c : false;
        message.props =
            ((_d = object.props) === null || _d === void 0 ? void 0 : _d.map(e => exports.CSVCMsgSendTable_sendpropT.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCSVCMsgSendTable_sendpropT() {
    return {
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
}
exports.CSVCMsgSendTable_sendpropT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.varName !== "") {
            writer.uint32(18).string(message.varName);
        }
        if (message.flags !== 0) {
            writer.uint32(24).int32(message.flags);
        }
        if (message.priority !== 0) {
            writer.uint32(32).int32(message.priority);
        }
        if (message.dtName !== "") {
            writer.uint32(42).string(message.dtName);
        }
        if (message.numElements !== 0) {
            writer.uint32(48).int32(message.numElements);
        }
        if (message.lowValue !== 0) {
            writer.uint32(61).float(message.lowValue);
        }
        if (message.highValue !== 0) {
            writer.uint32(69).float(message.highValue);
        }
        if (message.numBits !== 0) {
            writer.uint32(72).int32(message.numBits);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSendTable_sendpropT();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCSVCMsgSendTable_sendpropT();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.varName = (_b = object.varName) !== null && _b !== void 0 ? _b : "";
        message.flags = (_c = object.flags) !== null && _c !== void 0 ? _c : 0;
        message.priority = (_d = object.priority) !== null && _d !== void 0 ? _d : 0;
        message.dtName = (_e = object.dtName) !== null && _e !== void 0 ? _e : "";
        message.numElements = (_f = object.numElements) !== null && _f !== void 0 ? _f : 0;
        message.lowValue = (_g = object.lowValue) !== null && _g !== void 0 ? _g : 0;
        message.highValue = (_h = object.highValue) !== null && _h !== void 0 ? _h : 0;
        message.numBits = (_j = object.numBits) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
function createBaseCSVCMsgPrint() {
    return { text: "" };
}
exports.CSVCMsgPrint = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPrint();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgPrint();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCSVCMsgSetPause() {
    return { paused: false };
}
exports.CSVCMsgSetPause = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.paused === true) {
            writer.uint32(8).bool(message.paused);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSetPause();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgSetPause();
        message.paused = (_a = object.paused) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseCSVCMsgSetView() {
    return { entityIndex: 0 };
}
exports.CSVCMsgSetView = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.entityIndex !== 0) {
            writer.uint32(8).int32(message.entityIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSetView();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgSetView();
        message.entityIndex = (_a = object.entityIndex) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCSVCMsgCreateStringTable() {
    return {
        name: "",
        maxEntries: 0,
        numEntries: 0,
        userDataFixedSize: false,
        userDataSize: 0,
        userDataSizeBits: 0,
        flags: 0,
        stringData: new Uint8Array()
    };
}
exports.CSVCMsgCreateStringTable = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(16).int32(message.maxEntries);
        }
        if (message.numEntries !== 0) {
            writer.uint32(24).int32(message.numEntries);
        }
        if (message.userDataFixedSize === true) {
            writer.uint32(32).bool(message.userDataFixedSize);
        }
        if (message.userDataSize !== 0) {
            writer.uint32(40).int32(message.userDataSize);
        }
        if (message.userDataSizeBits !== 0) {
            writer.uint32(48).int32(message.userDataSizeBits);
        }
        if (message.flags !== 0) {
            writer.uint32(56).int32(message.flags);
        }
        if (message.stringData.length !== 0) {
            writer.uint32(66).bytes(message.stringData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgCreateStringTable();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseCSVCMsgCreateStringTable();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.maxEntries = (_b = object.maxEntries) !== null && _b !== void 0 ? _b : 0;
        message.numEntries = (_c = object.numEntries) !== null && _c !== void 0 ? _c : 0;
        message.userDataFixedSize = (_d = object.userDataFixedSize) !== null && _d !== void 0 ? _d : false;
        message.userDataSize = (_e = object.userDataSize) !== null && _e !== void 0 ? _e : 0;
        message.userDataSizeBits = (_f = object.userDataSizeBits) !== null && _f !== void 0 ? _f : 0;
        message.flags = (_g = object.flags) !== null && _g !== void 0 ? _g : 0;
        message.stringData = (_h = object.stringData) !== null && _h !== void 0 ? _h : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgUpdateStringTable() {
    return { tableId: 0, numChangedEntries: 0, stringData: new Uint8Array() };
}
exports.CSVCMsgUpdateStringTable = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tableId !== 0) {
            writer.uint32(8).int32(message.tableId);
        }
        if (message.numChangedEntries !== 0) {
            writer.uint32(16).int32(message.numChangedEntries);
        }
        if (message.stringData.length !== 0) {
            writer.uint32(26).bytes(message.stringData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgUpdateStringTable();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgUpdateStringTable();
        message.tableId = (_a = object.tableId) !== null && _a !== void 0 ? _a : 0;
        message.numChangedEntries = (_b = object.numChangedEntries) !== null && _b !== void 0 ? _b : 0;
        message.stringData = (_c = object.stringData) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgVoiceInit() {
    return { quality: 0, codec: "", version: 0 };
}
exports.CSVCMsgVoiceInit = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.quality !== 0) {
            writer.uint32(8).int32(message.quality);
        }
        if (message.codec !== "") {
            writer.uint32(18).string(message.codec);
        }
        if (message.version !== 0) {
            writer.uint32(24).int32(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgVoiceInit();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgVoiceInit();
        message.quality = (_a = object.quality) !== null && _a !== void 0 ? _a : 0;
        message.codec = (_b = object.codec) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCSVCMsgVoiceData() {
    return {
        client: 0,
        proximity: false,
        xuid: Long.UZERO,
        audibleMask: 0,
        voiceData: new Uint8Array(),
        caster: false,
        format: 0,
        sequenceBytes: 0,
        sectionNumber: 0,
        uncompressedSampleOffset: 0
    };
}
exports.CSVCMsgVoiceData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.client !== 0) {
            writer.uint32(8).int32(message.client);
        }
        if (message.proximity === true) {
            writer.uint32(16).bool(message.proximity);
        }
        if (!message.xuid.isZero()) {
            writer.uint32(25).fixed64(message.xuid);
        }
        if (message.audibleMask !== 0) {
            writer.uint32(32).int32(message.audibleMask);
        }
        if (message.voiceData.length !== 0) {
            writer.uint32(42).bytes(message.voiceData);
        }
        if (message.caster === true) {
            writer.uint32(48).bool(message.caster);
        }
        if (message.format !== 0) {
            writer.uint32(56).int32(message.format);
        }
        if (message.sequenceBytes !== 0) {
            writer.uint32(64).int32(message.sequenceBytes);
        }
        if (message.sectionNumber !== 0) {
            writer.uint32(72).uint32(message.sectionNumber);
        }
        if (message.uncompressedSampleOffset !== 0) {
            writer.uint32(80).uint32(message.uncompressedSampleOffset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgVoiceData();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCSVCMsgVoiceData();
        message.client = (_a = object.client) !== null && _a !== void 0 ? _a : 0;
        message.proximity = (_b = object.proximity) !== null && _b !== void 0 ? _b : false;
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.audibleMask = (_c = object.audibleMask) !== null && _c !== void 0 ? _c : 0;
        message.voiceData = (_d = object.voiceData) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.caster = (_e = object.caster) !== null && _e !== void 0 ? _e : false;
        message.format = (_f = object.format) !== null && _f !== void 0 ? _f : 0;
        message.sequenceBytes = (_g = object.sequenceBytes) !== null && _g !== void 0 ? _g : 0;
        message.sectionNumber = (_h = object.sectionNumber) !== null && _h !== void 0 ? _h : 0;
        message.uncompressedSampleOffset = (_j = object.uncompressedSampleOffset) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
function createBaseCSVCMsgFixAngle() {
    return { relative: false, angle: undefined };
}
exports.CSVCMsgFixAngle = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.relative === true) {
            writer.uint32(8).bool(message.relative);
        }
        if (message.angle !== undefined) {
            exports.CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgFixAngle();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgFixAngle();
        message.relative = (_a = object.relative) !== null && _a !== void 0 ? _a : false;
        message.angle =
            object.angle !== undefined && object.angle !== null
                ? exports.CMsgQAngle.fromPartial(object.angle)
                : undefined;
        return message;
    }
};
function createBaseCSVCMsgCrosshairAngle() {
    return { angle: undefined };
}
exports.CSVCMsgCrosshairAngle = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.angle !== undefined) {
            exports.CMsgQAngle.encode(message.angle, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgCrosshairAngle();
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
    },
    fromPartial(object) {
        const message = createBaseCSVCMsgCrosshairAngle();
        message.angle =
            object.angle !== undefined && object.angle !== null
                ? exports.CMsgQAngle.fromPartial(object.angle)
                : undefined;
        return message;
    }
};
function createBaseCSVCMsgPrefetch() {
    return { soundIndex: 0 };
}
exports.CSVCMsgPrefetch = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.soundIndex !== 0) {
            writer.uint32(8).int32(message.soundIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPrefetch();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgPrefetch();
        message.soundIndex = (_a = object.soundIndex) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCSVCMsgBSPDecal() {
    return {
        pos: undefined,
        decalTextureIndex: 0,
        entityIndex: 0,
        modelIndex: 0,
        lowPriority: false
    };
}
exports.CSVCMsgBSPDecal = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pos !== undefined) {
            exports.CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
        }
        if (message.decalTextureIndex !== 0) {
            writer.uint32(16).int32(message.decalTextureIndex);
        }
        if (message.entityIndex !== 0) {
            writer.uint32(24).int32(message.entityIndex);
        }
        if (message.modelIndex !== 0) {
            writer.uint32(32).int32(message.modelIndex);
        }
        if (message.lowPriority === true) {
            writer.uint32(40).bool(message.lowPriority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgBSPDecal();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCSVCMsgBSPDecal();
        message.pos =
            object.pos !== undefined && object.pos !== null
                ? exports.CMsgVector.fromPartial(object.pos)
                : undefined;
        message.decalTextureIndex = (_a = object.decalTextureIndex) !== null && _a !== void 0 ? _a : 0;
        message.entityIndex = (_b = object.entityIndex) !== null && _b !== void 0 ? _b : 0;
        message.modelIndex = (_c = object.modelIndex) !== null && _c !== void 0 ? _c : 0;
        message.lowPriority = (_d = object.lowPriority) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseCSVCMsgSplitScreen() {
    return { type: 0, slot: 0, playerIndex: 0 };
}
exports.CSVCMsgSplitScreen = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.slot !== 0) {
            writer.uint32(16).int32(message.slot);
        }
        if (message.playerIndex !== 0) {
            writer.uint32(24).int32(message.playerIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSplitScreen();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgSplitScreen();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.slot = (_b = object.slot) !== null && _b !== void 0 ? _b : 0;
        message.playerIndex = (_c = object.playerIndex) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCSVCMsgGetCvarValue() {
    return { cookie: 0, cvarName: "" };
}
exports.CSVCMsgGetCvarValue = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cookie !== 0) {
            writer.uint32(8).int32(message.cookie);
        }
        if (message.cvarName !== "") {
            writer.uint32(18).string(message.cvarName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGetCvarValue();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSVCMsgGetCvarValue();
        message.cookie = (_a = object.cookie) !== null && _a !== void 0 ? _a : 0;
        message.cvarName = (_b = object.cvarName) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCSVCMsgMenu() {
    return { dialogType: 0, menuKeyValues: new Uint8Array() };
}
exports.CSVCMsgMenu = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dialogType !== 0) {
            writer.uint32(8).int32(message.dialogType);
        }
        if (message.menuKeyValues.length !== 0) {
            writer.uint32(18).bytes(message.menuKeyValues);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgMenu();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSVCMsgMenu();
        message.dialogType = (_a = object.dialogType) !== null && _a !== void 0 ? _a : 0;
        message.menuKeyValues = (_b = object.menuKeyValues) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgUserMessage() {
    return { msgType: 0, msgData: new Uint8Array(), passthrough: 0 };
}
exports.CSVCMsgUserMessage = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msgType !== 0) {
            writer.uint32(8).int32(message.msgType);
        }
        if (message.msgData.length !== 0) {
            writer.uint32(18).bytes(message.msgData);
        }
        if (message.passthrough !== 0) {
            writer.uint32(24).int32(message.passthrough);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgUserMessage();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgUserMessage();
        message.msgType = (_a = object.msgType) !== null && _a !== void 0 ? _a : 0;
        message.msgData = (_b = object.msgData) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.passthrough = (_c = object.passthrough) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCSVCMsgPaintmapData() {
    return { paintmap: new Uint8Array() };
}
exports.CSVCMsgPaintmapData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.paintmap.length !== 0) {
            writer.uint32(10).bytes(message.paintmap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPaintmapData();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgPaintmapData();
        message.paintmap = (_a = object.paintmap) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgGameEvent() {
    return { eventName: "", eventid: 0, keys: [], passthrough: 0 };
}
exports.CSVCMsgGameEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventName !== "") {
            writer.uint32(10).string(message.eventName);
        }
        if (message.eventid !== 0) {
            writer.uint32(16).int32(message.eventid);
        }
        for (const v of message.keys) {
            exports.CSVCMsgGameEvent_keyT.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.passthrough !== 0) {
            writer.uint32(32).int32(message.passthrough);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEvent();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCSVCMsgGameEvent();
        message.eventName = (_a = object.eventName) !== null && _a !== void 0 ? _a : "";
        message.eventid = (_b = object.eventid) !== null && _b !== void 0 ? _b : 0;
        message.keys =
            ((_c = object.keys) === null || _c === void 0 ? void 0 : _c.map(e => exports.CSVCMsgGameEvent_keyT.fromPartial(e))) || [];
        message.passthrough = (_d = object.passthrough) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCSVCMsgGameEvent_keyT() {
    return {
        type: 0,
        valString: "",
        valFloat: 0,
        valLong: 0,
        valShort: 0,
        valByte: 0,
        valBool: false,
        valUint64: Long.UZERO,
        valWstring: new Uint8Array()
    };
}
exports.CSVCMsgGameEvent_keyT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.valString !== "") {
            writer.uint32(18).string(message.valString);
        }
        if (message.valFloat !== 0) {
            writer.uint32(29).float(message.valFloat);
        }
        if (message.valLong !== 0) {
            writer.uint32(32).int32(message.valLong);
        }
        if (message.valShort !== 0) {
            writer.uint32(40).int32(message.valShort);
        }
        if (message.valByte !== 0) {
            writer.uint32(48).int32(message.valByte);
        }
        if (message.valBool === true) {
            writer.uint32(56).bool(message.valBool);
        }
        if (!message.valUint64.isZero()) {
            writer.uint32(64).uint64(message.valUint64);
        }
        if (message.valWstring.length !== 0) {
            writer.uint32(74).bytes(message.valWstring);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEvent_keyT();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseCSVCMsgGameEvent_keyT();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.valString = (_b = object.valString) !== null && _b !== void 0 ? _b : "";
        message.valFloat = (_c = object.valFloat) !== null && _c !== void 0 ? _c : 0;
        message.valLong = (_d = object.valLong) !== null && _d !== void 0 ? _d : 0;
        message.valShort = (_e = object.valShort) !== null && _e !== void 0 ? _e : 0;
        message.valByte = (_f = object.valByte) !== null && _f !== void 0 ? _f : 0;
        message.valBool = (_g = object.valBool) !== null && _g !== void 0 ? _g : false;
        message.valUint64 =
            object.valUint64 !== undefined && object.valUint64 !== null
                ? Long.fromValue(object.valUint64)
                : Long.UZERO;
        message.valWstring = (_h = object.valWstring) !== null && _h !== void 0 ? _h : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgGameEventList() {
    return { descriptors: [] };
}
exports.CSVCMsgGameEventList = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.descriptors) {
            exports.CSVCMsgGameEventList_descriptorT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEventList();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgGameEventList();
        message.descriptors =
            ((_a = object.descriptors) === null || _a === void 0 ? void 0 : _a.map(e => exports.CSVCMsgGameEventList_descriptorT.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCSVCMsgGameEventList_keyT() {
    return { type: 0, name: "" };
}
exports.CSVCMsgGameEventList_keyT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEventList_keyT();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSVCMsgGameEventList_keyT();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCSVCMsgGameEventList_descriptorT() {
    return { eventid: 0, name: "", keys: [] };
}
exports.CSVCMsgGameEventList_descriptorT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventid !== 0) {
            writer.uint32(8).int32(message.eventid);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.keys) {
            exports.CSVCMsgGameEventList_keyT.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEventList_descriptorT();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgGameEventList_descriptorT();
        message.eventid = (_a = object.eventid) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.keys =
            ((_c = object.keys) === null || _c === void 0 ? void 0 : _c.map(e => exports.CSVCMsgGameEventList_keyT.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCSVCMsgTempEntities() {
    return { reliable: false, numEntries: 0, entityData: new Uint8Array() };
}
exports.CSVCMsgTempEntities = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.reliable === true) {
            writer.uint32(8).bool(message.reliable);
        }
        if (message.numEntries !== 0) {
            writer.uint32(16).int32(message.numEntries);
        }
        if (message.entityData.length !== 0) {
            writer.uint32(26).bytes(message.entityData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgTempEntities();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgTempEntities();
        message.reliable = (_a = object.reliable) !== null && _a !== void 0 ? _a : false;
        message.numEntries = (_b = object.numEntries) !== null && _b !== void 0 ? _b : 0;
        message.entityData = (_c = object.entityData) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgPacketEntities() {
    return {
        maxEntries: 0,
        updatedEntries: 0,
        isDelta: false,
        updateBaseline: false,
        baseline: 0,
        deltaFrom: 0,
        entityData: new Uint8Array()
    };
}
exports.CSVCMsgPacketEntities = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.maxEntries !== 0) {
            writer.uint32(8).int32(message.maxEntries);
        }
        if (message.updatedEntries !== 0) {
            writer.uint32(16).int32(message.updatedEntries);
        }
        if (message.isDelta === true) {
            writer.uint32(24).bool(message.isDelta);
        }
        if (message.updateBaseline === true) {
            writer.uint32(32).bool(message.updateBaseline);
        }
        if (message.baseline !== 0) {
            writer.uint32(40).int32(message.baseline);
        }
        if (message.deltaFrom !== 0) {
            writer.uint32(48).int32(message.deltaFrom);
        }
        if (message.entityData.length !== 0) {
            writer.uint32(58).bytes(message.entityData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPacketEntities();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCSVCMsgPacketEntities();
        message.maxEntries = (_a = object.maxEntries) !== null && _a !== void 0 ? _a : 0;
        message.updatedEntries = (_b = object.updatedEntries) !== null && _b !== void 0 ? _b : 0;
        message.isDelta = (_c = object.isDelta) !== null && _c !== void 0 ? _c : false;
        message.updateBaseline = (_d = object.updateBaseline) !== null && _d !== void 0 ? _d : false;
        message.baseline = (_e = object.baseline) !== null && _e !== void 0 ? _e : 0;
        message.deltaFrom = (_f = object.deltaFrom) !== null && _f !== void 0 ? _f : 0;
        message.entityData = (_g = object.entityData) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgSounds() {
    return { reliableSound: false, sounds: [] };
}
exports.CSVCMsgSounds = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.reliableSound === true) {
            writer.uint32(8).bool(message.reliableSound);
        }
        for (const v of message.sounds) {
            exports.CSVCMsgSounds_sounddataT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSounds();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSVCMsgSounds();
        message.reliableSound = (_a = object.reliableSound) !== null && _a !== void 0 ? _a : false;
        message.sounds =
            ((_b = object.sounds) === null || _b === void 0 ? void 0 : _b.map(e => exports.CSVCMsgSounds_sounddataT.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCSVCMsgSounds_sounddataT() {
    return {
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
}
exports.CSVCMsgSounds_sounddataT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.originX !== 0) {
            writer.uint32(8).sint32(message.originX);
        }
        if (message.originY !== 0) {
            writer.uint32(16).sint32(message.originY);
        }
        if (message.originZ !== 0) {
            writer.uint32(24).sint32(message.originZ);
        }
        if (message.volume !== 0) {
            writer.uint32(32).uint32(message.volume);
        }
        if (message.delayValue !== 0) {
            writer.uint32(45).float(message.delayValue);
        }
        if (message.sequenceNumber !== 0) {
            writer.uint32(48).int32(message.sequenceNumber);
        }
        if (message.entityIndex !== 0) {
            writer.uint32(56).int32(message.entityIndex);
        }
        if (message.channel !== 0) {
            writer.uint32(64).int32(message.channel);
        }
        if (message.pitch !== 0) {
            writer.uint32(72).int32(message.pitch);
        }
        if (message.flags !== 0) {
            writer.uint32(80).int32(message.flags);
        }
        if (message.soundNum !== 0) {
            writer.uint32(88).uint32(message.soundNum);
        }
        if (message.soundNumHandle !== 0) {
            writer.uint32(101).fixed32(message.soundNumHandle);
        }
        if (message.speakerEntity !== 0) {
            writer.uint32(104).int32(message.speakerEntity);
        }
        if (message.randomSeed !== 0) {
            writer.uint32(112).int32(message.randomSeed);
        }
        if (message.soundLevel !== 0) {
            writer.uint32(120).int32(message.soundLevel);
        }
        if (message.isSentence === true) {
            writer.uint32(128).bool(message.isSentence);
        }
        if (message.isAmbient === true) {
            writer.uint32(136).bool(message.isAmbient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSounds_sounddataT();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseCSVCMsgSounds_sounddataT();
        message.originX = (_a = object.originX) !== null && _a !== void 0 ? _a : 0;
        message.originY = (_b = object.originY) !== null && _b !== void 0 ? _b : 0;
        message.originZ = (_c = object.originZ) !== null && _c !== void 0 ? _c : 0;
        message.volume = (_d = object.volume) !== null && _d !== void 0 ? _d : 0;
        message.delayValue = (_e = object.delayValue) !== null && _e !== void 0 ? _e : 0;
        message.sequenceNumber = (_f = object.sequenceNumber) !== null && _f !== void 0 ? _f : 0;
        message.entityIndex = (_g = object.entityIndex) !== null && _g !== void 0 ? _g : 0;
        message.channel = (_h = object.channel) !== null && _h !== void 0 ? _h : 0;
        message.pitch = (_j = object.pitch) !== null && _j !== void 0 ? _j : 0;
        message.flags = (_k = object.flags) !== null && _k !== void 0 ? _k : 0;
        message.soundNum = (_l = object.soundNum) !== null && _l !== void 0 ? _l : 0;
        message.soundNumHandle = (_m = object.soundNumHandle) !== null && _m !== void 0 ? _m : 0;
        message.speakerEntity = (_o = object.speakerEntity) !== null && _o !== void 0 ? _o : 0;
        message.randomSeed = (_p = object.randomSeed) !== null && _p !== void 0 ? _p : 0;
        message.soundLevel = (_q = object.soundLevel) !== null && _q !== void 0 ? _q : 0;
        message.isSentence = (_r = object.isSentence) !== null && _r !== void 0 ? _r : false;
        message.isAmbient = (_s = object.isAmbient) !== null && _s !== void 0 ? _s : false;
        return message;
    }
};
function createBaseCSVCMsgEntityMsg() {
    return { entIndex: 0, classId: 0, entData: new Uint8Array() };
}
exports.CSVCMsgEntityMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.entIndex !== 0) {
            writer.uint32(8).int32(message.entIndex);
        }
        if (message.classId !== 0) {
            writer.uint32(16).int32(message.classId);
        }
        if (message.entData.length !== 0) {
            writer.uint32(26).bytes(message.entData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgEntityMsg();
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
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSVCMsgEntityMsg();
        message.entIndex = (_a = object.entIndex) !== null && _a !== void 0 ? _a : 0;
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : 0;
        message.entData = (_c = object.entData) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgCmdKeyValues() {
    return { keyvalues: new Uint8Array() };
}
exports.CSVCMsgCmdKeyValues = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.keyvalues.length !== 0) {
            writer.uint32(10).bytes(message.keyvalues);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgCmdKeyValues();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgCmdKeyValues();
        message.keyvalues = (_a = object.keyvalues) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseCSVCMsgEncryptedData() {
    return { encrypted: new Uint8Array(), keyType: 0 };
}
exports.CSVCMsgEncryptedData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.encrypted.length !== 0) {
            writer.uint32(10).bytes(message.encrypted);
        }
        if (message.keyType !== 0) {
            writer.uint32(16).int32(message.keyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgEncryptedData();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSVCMsgEncryptedData();
        message.encrypted = (_a = object.encrypted) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.keyType = (_b = object.keyType) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCSVCMsgHltvReplay() {
    return {
        delay: 0,
        primaryTarget: 0,
        replayStopAt: 0,
        replayStartAt: 0,
        replaySlowdownBegin: 0,
        replaySlowdownEnd: 0,
        replaySlowdownRate: 0
    };
}
exports.CSVCMsgHltvReplay = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delay !== 0) {
            writer.uint32(8).int32(message.delay);
        }
        if (message.primaryTarget !== 0) {
            writer.uint32(16).int32(message.primaryTarget);
        }
        if (message.replayStopAt !== 0) {
            writer.uint32(24).int32(message.replayStopAt);
        }
        if (message.replayStartAt !== 0) {
            writer.uint32(32).int32(message.replayStartAt);
        }
        if (message.replaySlowdownBegin !== 0) {
            writer.uint32(40).int32(message.replaySlowdownBegin);
        }
        if (message.replaySlowdownEnd !== 0) {
            writer.uint32(48).int32(message.replaySlowdownEnd);
        }
        if (message.replaySlowdownRate !== 0) {
            writer.uint32(61).float(message.replaySlowdownRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgHltvReplay();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCSVCMsgHltvReplay();
        message.delay = (_a = object.delay) !== null && _a !== void 0 ? _a : 0;
        message.primaryTarget = (_b = object.primaryTarget) !== null && _b !== void 0 ? _b : 0;
        message.replayStopAt = (_c = object.replayStopAt) !== null && _c !== void 0 ? _c : 0;
        message.replayStartAt = (_d = object.replayStartAt) !== null && _d !== void 0 ? _d : 0;
        message.replaySlowdownBegin = (_e = object.replaySlowdownBegin) !== null && _e !== void 0 ? _e : 0;
        message.replaySlowdownEnd = (_f = object.replaySlowdownEnd) !== null && _f !== void 0 ? _f : 0;
        message.replaySlowdownRate = (_g = object.replaySlowdownRate) !== null && _g !== void 0 ? _g : 0;
        return message;
    }
};
function createBaseCCLCMsgHltvReplay() {
    return {
        request: 0,
        slowdownLength: 0,
        slowdownRate: 0,
        primaryTargetEntIndex: 0,
        eventTime: 0
    };
}
exports.CCLCMsgHltvReplay = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.request !== 0) {
            writer.uint32(8).int32(message.request);
        }
        if (message.slowdownLength !== 0) {
            writer.uint32(21).float(message.slowdownLength);
        }
        if (message.slowdownRate !== 0) {
            writer.uint32(29).float(message.slowdownRate);
        }
        if (message.primaryTargetEntIndex !== 0) {
            writer.uint32(32).int32(message.primaryTargetEntIndex);
        }
        if (message.eventTime !== 0) {
            writer.uint32(45).float(message.eventTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgHltvReplay();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCLCMsgHltvReplay();
        message.request = (_a = object.request) !== null && _a !== void 0 ? _a : 0;
        message.slowdownLength = (_b = object.slowdownLength) !== null && _b !== void 0 ? _b : 0;
        message.slowdownRate = (_c = object.slowdownRate) !== null && _c !== void 0 ? _c : 0;
        message.primaryTargetEntIndex = (_d = object.primaryTargetEntIndex) !== null && _d !== void 0 ? _d : 0;
        message.eventTime = (_e = object.eventTime) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCSVCMsgBroadcastCommand() {
    return { cmd: "" };
}
exports.CSVCMsgBroadcastCommand = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cmd !== "") {
            writer.uint32(10).string(message.cmd);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgBroadcastCommand();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCSVCMsgBroadcastCommand();
        message.cmd = (_a = object.cmd) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=netmessages.js.map