"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.CCLCMsg_HltvReplay = exports.CSVCMsg_HltvReplay = exports.CSVCMsg_EncryptedData = exports.CSVCMsg_CmdKeyValues = exports.CSVCMsg_EntityMsg = exports.CSVCMsg_Sounds = exports.CSVCMsg_PacketEntities = exports.CSVCMsg_TempEntities = exports.CSVCMsg_GameEventList = exports.CSVCMsg_GameEvent = exports.CSVCMsg_PaintmapData = exports.CSVCMsg_UserMessage = exports.CSVCMsg_Menu = exports.CSVCMsg_GetCvarValue = exports.CSVCMsg_SplitScreen = exports.CSVCMsg_BSPDecal = exports.CSVCMsg_Prefetch = exports.CSVCMsg_CrosshairAngle = exports.CSVCMsg_FixAngle = exports.CSVCMsg_VoiceData = exports.CSVCMsg_VoiceInit = exports.CSVCMsg_UpdateStringTable = exports.CSVCMsg_CreateStringTable = exports.CSVCMsg_SetView = exports.CSVCMsg_SetPause = exports.CSVCMsg_Print = exports.CSVCMsg_SendTable = exports.CSVCMsg_ClassInfo = exports.CSVCMsg_ServerInfo = exports.CCLCMsg_CmdKeyValues = exports.CCLCMsg_SplitPlayerConnect = exports.CCLCMsg_LoadingProgress = exports.CCLCMsg_FileCRCCheck = exports.CCLCMsg_RespondCvarValue = exports.CCLCMsg_ListenEvents = exports.CCLCMsg_BaselineAck = exports.CCLCMsg_VoiceData = exports.CCLCMsg_Move = exports.CCLCMsg_ClientInfo = exports.CNETMsg_PlayerAvatarData = exports.CNETMsg_SplitScreenUser = exports.CNETMsg_File = exports.CNETMsg_Disconnect = exports.CNETMsg_NOP = exports.CNETMsg_SetConVar = exports.CMsg_CVars = exports.CNETMsg_SignonState = exports.CNETMsg_StringCmd = exports.CNETMsg_Tick = exports.CMsgRGBA = exports.CMsgQAngle = exports.CMsgVector2D = exports.CMsgVector = exports.SVC_Messages = exports.NET_Messages = void 0;
/* tslint:disable */
const $protobuf = require("protobufjs/minimal");
// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;
// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
exports.default = $root;
/**
 * NET_Messages enum.
 * @exports NET_Messages
 * @enum {string}
 * @property {number} net_NOP=0 net_NOP value
 * @property {number} net_Disconnect=1 net_Disconnect value
 * @property {number} net_File=2 net_File value
 * @property {number} net_SplitScreenUser=3 net_SplitScreenUser value
 * @property {number} net_Tick=4 net_Tick value
 * @property {number} net_StringCmd=5 net_StringCmd value
 * @property {number} net_SetConVar=6 net_SetConVar value
 * @property {number} net_SignonState=7 net_SignonState value
 * @property {number} net_PlayerAvatarData=100 net_PlayerAvatarData value
 */
exports.NET_Messages = ($root.NET_Messages = (function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "net_NOP")] = 0;
    values[(valuesById[1] = "net_Disconnect")] = 1;
    values[(valuesById[2] = "net_File")] = 2;
    values[(valuesById[3] = "net_SplitScreenUser")] = 3;
    values[(valuesById[4] = "net_Tick")] = 4;
    values[(valuesById[5] = "net_StringCmd")] = 5;
    values[(valuesById[6] = "net_SetConVar")] = 6;
    values[(valuesById[7] = "net_SignonState")] = 7;
    values[(valuesById[100] = "net_PlayerAvatarData")] = 100;
    return values;
})());
/**
 * CLC_Messages enum.
 * @exports CLC_Messages
 * @enum {string}
 * @property {number} clc_ClientInfo=8 clc_ClientInfo value
 * @property {number} clc_Move=9 clc_Move value
 * @property {number} clc_VoiceData=10 clc_VoiceData value
 * @property {number} clc_BaselineAck=11 clc_BaselineAck value
 * @property {number} clc_ListenEvents=12 clc_ListenEvents value
 * @property {number} clc_RespondCvarValue=13 clc_RespondCvarValue value
 * @property {number} clc_FileCRCCheck=14 clc_FileCRCCheck value
 * @property {number} clc_LoadingProgress=15 clc_LoadingProgress value
 * @property {number} clc_SplitPlayerConnect=16 clc_SplitPlayerConnect value
 * @property {number} clc_ClientMessage=17 clc_ClientMessage value
 * @property {number} clc_CmdKeyValues=18 clc_CmdKeyValues value
 * @property {number} clc_HltvReplay=20 clc_HltvReplay value
 */
$root.CLC_Messages = (function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[8] = "clc_ClientInfo")] = 8;
    values[(valuesById[9] = "clc_Move")] = 9;
    values[(valuesById[10] = "clc_VoiceData")] = 10;
    values[(valuesById[11] = "clc_BaselineAck")] = 11;
    values[(valuesById[12] = "clc_ListenEvents")] = 12;
    values[(valuesById[13] = "clc_RespondCvarValue")] = 13;
    values[(valuesById[14] = "clc_FileCRCCheck")] = 14;
    values[(valuesById[15] = "clc_LoadingProgress")] = 15;
    values[(valuesById[16] = "clc_SplitPlayerConnect")] = 16;
    values[(valuesById[17] = "clc_ClientMessage")] = 17;
    values[(valuesById[18] = "clc_CmdKeyValues")] = 18;
    values[(valuesById[20] = "clc_HltvReplay")] = 20;
    return values;
})();
/**
 * VoiceDataFormat_t enum.
 * @exports VoiceDataFormat_t
 * @enum {string}
 * @property {number} VOICEDATA_FORMAT_STEAM=0 VOICEDATA_FORMAT_STEAM value
 * @property {number} VOICEDATA_FORMAT_ENGINE=1 VOICEDATA_FORMAT_ENGINE value
 */
$root.VoiceDataFormat_t = (function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "VOICEDATA_FORMAT_STEAM")] = 0;
    values[(valuesById[1] = "VOICEDATA_FORMAT_ENGINE")] = 1;
    return values;
})();
/**
 * ESplitScreenMessageType enum.
 * @exports ESplitScreenMessageType
 * @enum {string}
 * @property {number} MSG_SPLITSCREEN_ADDUSER=0 MSG_SPLITSCREEN_ADDUSER value
 * @property {number} MSG_SPLITSCREEN_REMOVEUSER=1 MSG_SPLITSCREEN_REMOVEUSER value
 * @property {number} MSG_SPLITSCREEN_TYPE_BITS=1 MSG_SPLITSCREEN_TYPE_BITS value
 */
$root.ESplitScreenMessageType = (function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "MSG_SPLITSCREEN_ADDUSER")] = 0;
    values[(valuesById[1] = "MSG_SPLITSCREEN_REMOVEUSER")] = 1;
    values["MSG_SPLITSCREEN_TYPE_BITS"] = 1;
    return values;
})();
/**
 * SVC_Messages enum.
 * @exports SVC_Messages
 * @enum {string}
 * @property {number} svc_ServerInfo=8 svc_ServerInfo value
 * @property {number} svc_SendTable=9 svc_SendTable value
 * @property {number} svc_ClassInfo=10 svc_ClassInfo value
 * @property {number} svc_SetPause=11 svc_SetPause value
 * @property {number} svc_CreateStringTable=12 svc_CreateStringTable value
 * @property {number} svc_UpdateStringTable=13 svc_UpdateStringTable value
 * @property {number} svc_VoiceInit=14 svc_VoiceInit value
 * @property {number} svc_VoiceData=15 svc_VoiceData value
 * @property {number} svc_Print=16 svc_Print value
 * @property {number} svc_Sounds=17 svc_Sounds value
 * @property {number} svc_SetView=18 svc_SetView value
 * @property {number} svc_FixAngle=19 svc_FixAngle value
 * @property {number} svc_CrosshairAngle=20 svc_CrosshairAngle value
 * @property {number} svc_BSPDecal=21 svc_BSPDecal value
 * @property {number} svc_SplitScreen=22 svc_SplitScreen value
 * @property {number} svc_UserMessage=23 svc_UserMessage value
 * @property {number} svc_EntityMessage=24 svc_EntityMessage value
 * @property {number} svc_GameEvent=25 svc_GameEvent value
 * @property {number} svc_PacketEntities=26 svc_PacketEntities value
 * @property {number} svc_TempEntities=27 svc_TempEntities value
 * @property {number} svc_Prefetch=28 svc_Prefetch value
 * @property {number} svc_Menu=29 svc_Menu value
 * @property {number} svc_GameEventList=30 svc_GameEventList value
 * @property {number} svc_GetCvarValue=31 svc_GetCvarValue value
 * @property {number} svc_PaintmapData=33 svc_PaintmapData value
 * @property {number} svc_CmdKeyValues=34 svc_CmdKeyValues value
 * @property {number} svc_EncryptedData=35 svc_EncryptedData value
 * @property {number} svc_HltvReplay=36 svc_HltvReplay value
 */
exports.SVC_Messages = ($root.SVC_Messages = (function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[8] = "svc_ServerInfo")] = 8;
    values[(valuesById[9] = "svc_SendTable")] = 9;
    values[(valuesById[10] = "svc_ClassInfo")] = 10;
    values[(valuesById[11] = "svc_SetPause")] = 11;
    values[(valuesById[12] = "svc_CreateStringTable")] = 12;
    values[(valuesById[13] = "svc_UpdateStringTable")] = 13;
    values[(valuesById[14] = "svc_VoiceInit")] = 14;
    values[(valuesById[15] = "svc_VoiceData")] = 15;
    values[(valuesById[16] = "svc_Print")] = 16;
    values[(valuesById[17] = "svc_Sounds")] = 17;
    values[(valuesById[18] = "svc_SetView")] = 18;
    values[(valuesById[19] = "svc_FixAngle")] = 19;
    values[(valuesById[20] = "svc_CrosshairAngle")] = 20;
    values[(valuesById[21] = "svc_BSPDecal")] = 21;
    values[(valuesById[22] = "svc_SplitScreen")] = 22;
    values[(valuesById[23] = "svc_UserMessage")] = 23;
    values[(valuesById[24] = "svc_EntityMessage")] = 24;
    values[(valuesById[25] = "svc_GameEvent")] = 25;
    values[(valuesById[26] = "svc_PacketEntities")] = 26;
    values[(valuesById[27] = "svc_TempEntities")] = 27;
    values[(valuesById[28] = "svc_Prefetch")] = 28;
    values[(valuesById[29] = "svc_Menu")] = 29;
    values[(valuesById[30] = "svc_GameEventList")] = 30;
    values[(valuesById[31] = "svc_GetCvarValue")] = 31;
    values[(valuesById[33] = "svc_PaintmapData")] = 33;
    values[(valuesById[34] = "svc_CmdKeyValues")] = 34;
    values[(valuesById[35] = "svc_EncryptedData")] = 35;
    values[(valuesById[36] = "svc_HltvReplay")] = 36;
    return values;
})());
/**
 * ReplayEventType_t enum.
 * @exports ReplayEventType_t
 * @enum {string}
 * @property {number} REPLAY_EVENT_CANCEL=0 REPLAY_EVENT_CANCEL value
 * @property {number} REPLAY_EVENT_DEATH=1 REPLAY_EVENT_DEATH value
 * @property {number} REPLAY_EVENT_GENERIC=2 REPLAY_EVENT_GENERIC value
 */
$root.ReplayEventType_t = (function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "REPLAY_EVENT_CANCEL")] = 0;
    values[(valuesById[1] = "REPLAY_EVENT_DEATH")] = 1;
    values[(valuesById[2] = "REPLAY_EVENT_GENERIC")] = 2;
    return values;
})();
exports.CMsgVector = ($root.CMsgVector = (() => {
    /**
     * Properties of a CMsgVector.
     * @exports ICMsgVector
     * @interface ICMsgVector
     * @property {number|null} [x] CMsgVector x
     * @property {number|null} [y] CMsgVector y
     * @property {number|null} [z] CMsgVector z
     */
    /**
     * Constructs a new CMsgVector.
     * @exports CMsgVector
     * @classdesc Represents a CMsgVector.
     * @implements ICMsgVector
     * @constructor
     * @param {ICMsgVector=} [properties] Properties to set
     */
    function CMsgVector(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CMsgVector x.
     * @member {number} x
     * @memberof CMsgVector
     * @instance
     */
    CMsgVector.prototype.x = 0;
    /**
     * CMsgVector y.
     * @member {number} y
     * @memberof CMsgVector
     * @instance
     */
    CMsgVector.prototype.y = 0;
    /**
     * CMsgVector z.
     * @member {number} z
     * @memberof CMsgVector
     * @instance
     */
    CMsgVector.prototype.z = 0;
    /**
     * Decodes a CMsgVector message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgVector
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgVector} CMsgVector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgVector.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVector();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CMsgVector;
})());
exports.CMsgVector2D = ($root.CMsgVector2D = (() => {
    /**
     * Properties of a CMsgVector2D.
     * @exports ICMsgVector2D
     * @interface ICMsgVector2D
     * @property {number|null} [x] CMsgVector2D x
     * @property {number|null} [y] CMsgVector2D y
     */
    /**
     * Constructs a new CMsgVector2D.
     * @exports CMsgVector2D
     * @classdesc Represents a CMsgVector2D.
     * @implements ICMsgVector2D
     * @constructor
     * @param {ICMsgVector2D=} [properties] Properties to set
     */
    function CMsgVector2D(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CMsgVector2D x.
     * @member {number} x
     * @memberof CMsgVector2D
     * @instance
     */
    CMsgVector2D.prototype.x = 0;
    /**
     * CMsgVector2D y.
     * @member {number} y
     * @memberof CMsgVector2D
     * @instance
     */
    CMsgVector2D.prototype.y = 0;
    /**
     * Decodes a CMsgVector2D message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgVector2D
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgVector2D} CMsgVector2D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgVector2D.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVector2D();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CMsgVector2D;
})());
exports.CMsgQAngle = ($root.CMsgQAngle = (() => {
    /**
     * Properties of a CMsgQAngle.
     * @exports ICMsgQAngle
     * @interface ICMsgQAngle
     * @property {number|null} [x] CMsgQAngle x
     * @property {number|null} [y] CMsgQAngle y
     * @property {number|null} [z] CMsgQAngle z
     */
    /**
     * Constructs a new CMsgQAngle.
     * @exports CMsgQAngle
     * @classdesc Represents a CMsgQAngle.
     * @implements ICMsgQAngle
     * @constructor
     * @param {ICMsgQAngle=} [properties] Properties to set
     */
    function CMsgQAngle(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CMsgQAngle x.
     * @member {number} x
     * @memberof CMsgQAngle
     * @instance
     */
    CMsgQAngle.prototype.x = 0;
    /**
     * CMsgQAngle y.
     * @member {number} y
     * @memberof CMsgQAngle
     * @instance
     */
    CMsgQAngle.prototype.y = 0;
    /**
     * CMsgQAngle z.
     * @member {number} z
     * @memberof CMsgQAngle
     * @instance
     */
    CMsgQAngle.prototype.z = 0;
    /**
     * Decodes a CMsgQAngle message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgQAngle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgQAngle} CMsgQAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgQAngle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgQAngle();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CMsgQAngle;
})());
exports.CMsgRGBA = ($root.CMsgRGBA = (() => {
    /**
     * Properties of a CMsgRGBA.
     * @exports ICMsgRGBA
     * @interface ICMsgRGBA
     * @property {number|null} [r] CMsgRGBA r
     * @property {number|null} [g] CMsgRGBA g
     * @property {number|null} [b] CMsgRGBA b
     * @property {number|null} [a] CMsgRGBA a
     */
    /**
     * Constructs a new CMsgRGBA.
     * @exports CMsgRGBA
     * @classdesc Represents a CMsgRGBA.
     * @implements ICMsgRGBA
     * @constructor
     * @param {ICMsgRGBA=} [properties] Properties to set
     */
    function CMsgRGBA(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CMsgRGBA r.
     * @member {number} r
     * @memberof CMsgRGBA
     * @instance
     */
    CMsgRGBA.prototype.r = 0;
    /**
     * CMsgRGBA g.
     * @member {number} g
     * @memberof CMsgRGBA
     * @instance
     */
    CMsgRGBA.prototype.g = 0;
    /**
     * CMsgRGBA b.
     * @member {number} b
     * @memberof CMsgRGBA
     * @instance
     */
    CMsgRGBA.prototype.b = 0;
    /**
     * CMsgRGBA a.
     * @member {number} a
     * @memberof CMsgRGBA
     * @instance
     */
    CMsgRGBA.prototype.a = 0;
    /**
     * Decodes a CMsgRGBA message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgRGBA
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgRGBA} CMsgRGBA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgRGBA.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRGBA();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CMsgRGBA;
})());
exports.CNETMsg_Tick = ($root.CNETMsg_Tick = (() => {
    /**
     * Properties of a CNETMsg_Tick.
     * @exports ICNETMsg_Tick
     * @interface ICNETMsg_Tick
     * @property {number|null} [tick] CNETMsg_Tick tick
     * @property {number|null} [hostComputationtime] CNETMsg_Tick hostComputationtime
     * @property {number|null} [hostComputationtimeStdDeviation] CNETMsg_Tick hostComputationtimeStdDeviation
     * @property {number|null} [hostFramestarttimeStdDeviation] CNETMsg_Tick hostFramestarttimeStdDeviation
     * @property {number|null} [hltvReplayFlags] CNETMsg_Tick hltvReplayFlags
     */
    /**
     * Constructs a new CNETMsg_Tick.
     * @exports CNETMsg_Tick
     * @classdesc Represents a CNETMsg_Tick.
     * @implements ICNETMsg_Tick
     * @constructor
     * @param {ICNETMsg_Tick=} [properties] Properties to set
     */
    function CNETMsg_Tick(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_Tick tick.
     * @member {number} tick
     * @memberof CNETMsg_Tick
     * @instance
     */
    CNETMsg_Tick.prototype.tick = 0;
    /**
     * CNETMsg_Tick hostComputationtime.
     * @member {number} hostComputationtime
     * @memberof CNETMsg_Tick
     * @instance
     */
    CNETMsg_Tick.prototype.hostComputationtime = 0;
    /**
     * CNETMsg_Tick hostComputationtimeStdDeviation.
     * @member {number} hostComputationtimeStdDeviation
     * @memberof CNETMsg_Tick
     * @instance
     */
    CNETMsg_Tick.prototype.hostComputationtimeStdDeviation = 0;
    /**
     * CNETMsg_Tick hostFramestarttimeStdDeviation.
     * @member {number} hostFramestarttimeStdDeviation
     * @memberof CNETMsg_Tick
     * @instance
     */
    CNETMsg_Tick.prototype.hostFramestarttimeStdDeviation = 0;
    /**
     * CNETMsg_Tick hltvReplayFlags.
     * @member {number} hltvReplayFlags
     * @memberof CNETMsg_Tick
     * @instance
     */
    CNETMsg_Tick.prototype.hltvReplayFlags = 0;
    /**
     * Decodes a CNETMsg_Tick message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_Tick
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_Tick} CNETMsg_Tick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_Tick.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_Tick();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CNETMsg_Tick;
})());
exports.CNETMsg_StringCmd = ($root.CNETMsg_StringCmd = (() => {
    /**
     * Properties of a CNETMsg_StringCmd.
     * @exports ICNETMsg_StringCmd
     * @interface ICNETMsg_StringCmd
     * @property {string|null} [command] CNETMsg_StringCmd command
     */
    /**
     * Constructs a new CNETMsg_StringCmd.
     * @exports CNETMsg_StringCmd
     * @classdesc Represents a CNETMsg_StringCmd.
     * @implements ICNETMsg_StringCmd
     * @constructor
     * @param {ICNETMsg_StringCmd=} [properties] Properties to set
     */
    function CNETMsg_StringCmd(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_StringCmd command.
     * @member {string} command
     * @memberof CNETMsg_StringCmd
     * @instance
     */
    CNETMsg_StringCmd.prototype.command = "";
    /**
     * Decodes a CNETMsg_StringCmd message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_StringCmd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_StringCmd.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_StringCmd();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CNETMsg_StringCmd;
})());
exports.CNETMsg_SignonState = ($root.CNETMsg_SignonState = (() => {
    /**
     * Properties of a CNETMsg_SignonState.
     * @exports ICNETMsg_SignonState
     * @interface ICNETMsg_SignonState
     * @property {number|null} [signonState] CNETMsg_SignonState signonState
     * @property {number|null} [spawnCount] CNETMsg_SignonState spawnCount
     * @property {number|null} [numServerPlayers] CNETMsg_SignonState numServerPlayers
     * @property {Array.<string>|null} [playersNetworkids] CNETMsg_SignonState playersNetworkids
     * @property {string|null} [mapName] CNETMsg_SignonState mapName
     */
    /**
     * Constructs a new CNETMsg_SignonState.
     * @exports CNETMsg_SignonState
     * @classdesc Represents a CNETMsg_SignonState.
     * @implements ICNETMsg_SignonState
     * @constructor
     * @param {ICNETMsg_SignonState=} [properties] Properties to set
     */
    function CNETMsg_SignonState(properties) {
        this.playersNetworkids = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_SignonState signonState.
     * @member {number} signonState
     * @memberof CNETMsg_SignonState
     * @instance
     */
    CNETMsg_SignonState.prototype.signonState = 0;
    /**
     * CNETMsg_SignonState spawnCount.
     * @member {number} spawnCount
     * @memberof CNETMsg_SignonState
     * @instance
     */
    CNETMsg_SignonState.prototype.spawnCount = 0;
    /**
     * CNETMsg_SignonState numServerPlayers.
     * @member {number} numServerPlayers
     * @memberof CNETMsg_SignonState
     * @instance
     */
    CNETMsg_SignonState.prototype.numServerPlayers = 0;
    /**
     * CNETMsg_SignonState playersNetworkids.
     * @member {Array.<string>} playersNetworkids
     * @memberof CNETMsg_SignonState
     * @instance
     */
    CNETMsg_SignonState.prototype.playersNetworkids = $util.emptyArray;
    /**
     * CNETMsg_SignonState mapName.
     * @member {string} mapName
     * @memberof CNETMsg_SignonState
     * @instance
     */
    CNETMsg_SignonState.prototype.mapName = "";
    /**
     * Decodes a CNETMsg_SignonState message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_SignonState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_SignonState} CNETMsg_SignonState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_SignonState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SignonState();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
                    if (!(message.playersNetworkids && message.playersNetworkids.length))
                        message.playersNetworkids = [];
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
    };
    return CNETMsg_SignonState;
})());
exports.CMsg_CVars = ($root.CMsg_CVars = (() => {
    /**
     * Properties of a CMsg_CVars.
     * @exports ICMsg_CVars
     * @interface ICMsg_CVars
     * @property {Array.<CMsg_CVars.ICVar>|null} [cvars] CMsg_CVars cvars
     */
    /**
     * Constructs a new CMsg_CVars.
     * @exports CMsg_CVars
     * @classdesc Represents a CMsg_CVars.
     * @implements ICMsg_CVars
     * @constructor
     * @param {ICMsg_CVars=} [properties] Properties to set
     */
    function CMsg_CVars(properties) {
        this.cvars = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CMsg_CVars cvars.
     * @member {Array.<CMsg_CVars.ICVar>} cvars
     * @memberof CMsg_CVars
     * @instance
     */
    CMsg_CVars.prototype.cvars = $util.emptyArray;
    /**
     * Decodes a CMsg_CVars message from the specified reader or buffer.
     * @function decode
     * @memberof CMsg_CVars
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsg_CVars} CMsg_CVars
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsg_CVars.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsg_CVars();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.cvars && message.cvars.length))
                        message.cvars = [];
                    message.cvars.push($root.CMsg_CVars.CVar.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    CMsg_CVars.CVar = (function () {
        /**
         * Properties of a CVar.
         * @memberof CMsg_CVars
         * @interface ICVar
         * @property {string|null} [name] CVar name
         * @property {string|null} [value] CVar value
         * @property {number|null} [dictionaryName] CVar dictionaryName
         */
        /**
         * Constructs a new CVar.
         * @memberof CMsg_CVars
         * @classdesc Represents a CVar.
         * @implements ICVar
         * @constructor
         * @param {CMsg_CVars.ICVar=} [properties] Properties to set
         */
        function CVar(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * CVar name.
         * @member {string} name
         * @memberof CMsg_CVars.CVar
         * @instance
         */
        CVar.prototype.name = "";
        /**
         * CVar value.
         * @member {string} value
         * @memberof CMsg_CVars.CVar
         * @instance
         */
        CVar.prototype.value = "";
        /**
         * CVar dictionaryName.
         * @member {number} dictionaryName
         * @memberof CMsg_CVars.CVar
         * @instance
         */
        CVar.prototype.dictionaryName = 0;
        /**
         * Decodes a CVar message from the specified reader or buffer.
         * @function decode
         * @memberof CMsg_CVars.CVar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsg_CVars.CVar} CVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsg_CVars.CVar();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };
        return CVar;
    })();
    return CMsg_CVars;
})());
exports.CNETMsg_SetConVar = ($root.CNETMsg_SetConVar = (() => {
    /**
     * Properties of a CNETMsg_SetConVar.
     * @exports ICNETMsg_SetConVar
     * @interface ICNETMsg_SetConVar
     * @property {ICMsg_CVars|null} [convars] CNETMsg_SetConVar convars
     */
    /**
     * Constructs a new CNETMsg_SetConVar.
     * @exports CNETMsg_SetConVar
     * @classdesc Represents a CNETMsg_SetConVar.
     * @implements ICNETMsg_SetConVar
     * @constructor
     * @param {ICNETMsg_SetConVar=} [properties] Properties to set
     */
    function CNETMsg_SetConVar(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_SetConVar convars.
     * @member {ICMsg_CVars|null|undefined} convars
     * @memberof CNETMsg_SetConVar
     * @instance
     */
    CNETMsg_SetConVar.prototype.convars = null;
    /**
     * Decodes a CNETMsg_SetConVar message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_SetConVar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_SetConVar.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SetConVar();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.convars = $root.CMsg_CVars.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CNETMsg_SetConVar;
})());
exports.CNETMsg_NOP = ($root.CNETMsg_NOP = (() => {
    /**
     * Properties of a CNETMsg_NOP.
     * @exports ICNETMsg_NOP
     * @interface ICNETMsg_NOP
     */
    /**
     * Constructs a new CNETMsg_NOP.
     * @exports CNETMsg_NOP
     * @classdesc Represents a CNETMsg_NOP.
     * @implements ICNETMsg_NOP
     * @constructor
     * @param {ICNETMsg_NOP=} [properties] Properties to set
     */
    function CNETMsg_NOP(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Decodes a CNETMsg_NOP message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_NOP
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_NOP} CNETMsg_NOP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_NOP.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_NOP();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CNETMsg_NOP;
})());
exports.CNETMsg_Disconnect = ($root.CNETMsg_Disconnect = (() => {
    /**
     * Properties of a CNETMsg_Disconnect.
     * @exports ICNETMsg_Disconnect
     * @interface ICNETMsg_Disconnect
     * @property {string|null} [text] CNETMsg_Disconnect text
     */
    /**
     * Constructs a new CNETMsg_Disconnect.
     * @exports CNETMsg_Disconnect
     * @classdesc Represents a CNETMsg_Disconnect.
     * @implements ICNETMsg_Disconnect
     * @constructor
     * @param {ICNETMsg_Disconnect=} [properties] Properties to set
     */
    function CNETMsg_Disconnect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_Disconnect text.
     * @member {string} text
     * @memberof CNETMsg_Disconnect
     * @instance
     */
    CNETMsg_Disconnect.prototype.text = "";
    /**
     * Decodes a CNETMsg_Disconnect message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_Disconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_Disconnect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_Disconnect();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CNETMsg_Disconnect;
})());
exports.CNETMsg_File = ($root.CNETMsg_File = (() => {
    /**
     * Properties of a CNETMsg_File.
     * @exports ICNETMsg_File
     * @interface ICNETMsg_File
     * @property {number|null} [transferId] CNETMsg_File transferId
     * @property {string|null} [fileName] CNETMsg_File fileName
     * @property {boolean|null} [isReplayDemoFile] CNETMsg_File isReplayDemoFile
     * @property {boolean|null} [deny] CNETMsg_File deny
     */
    /**
     * Constructs a new CNETMsg_File.
     * @exports CNETMsg_File
     * @classdesc Represents a CNETMsg_File.
     * @implements ICNETMsg_File
     * @constructor
     * @param {ICNETMsg_File=} [properties] Properties to set
     */
    function CNETMsg_File(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_File transferId.
     * @member {number} transferId
     * @memberof CNETMsg_File
     * @instance
     */
    CNETMsg_File.prototype.transferId = 0;
    /**
     * CNETMsg_File fileName.
     * @member {string} fileName
     * @memberof CNETMsg_File
     * @instance
     */
    CNETMsg_File.prototype.fileName = "";
    /**
     * CNETMsg_File isReplayDemoFile.
     * @member {boolean} isReplayDemoFile
     * @memberof CNETMsg_File
     * @instance
     */
    CNETMsg_File.prototype.isReplayDemoFile = false;
    /**
     * CNETMsg_File deny.
     * @member {boolean} deny
     * @memberof CNETMsg_File
     * @instance
     */
    CNETMsg_File.prototype.deny = false;
    /**
     * Decodes a CNETMsg_File message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_File
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_File} CNETMsg_File
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_File.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_File();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CNETMsg_File;
})());
exports.CNETMsg_SplitScreenUser = ($root.CNETMsg_SplitScreenUser = (() => {
    /**
     * Properties of a CNETMsg_SplitScreenUser.
     * @exports ICNETMsg_SplitScreenUser
     * @interface ICNETMsg_SplitScreenUser
     * @property {number|null} [slot] CNETMsg_SplitScreenUser slot
     */
    /**
     * Constructs a new CNETMsg_SplitScreenUser.
     * @exports CNETMsg_SplitScreenUser
     * @classdesc Represents a CNETMsg_SplitScreenUser.
     * @implements ICNETMsg_SplitScreenUser
     * @constructor
     * @param {ICNETMsg_SplitScreenUser=} [properties] Properties to set
     */
    function CNETMsg_SplitScreenUser(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_SplitScreenUser slot.
     * @member {number} slot
     * @memberof CNETMsg_SplitScreenUser
     * @instance
     */
    CNETMsg_SplitScreenUser.prototype.slot = 0;
    /**
     * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_SplitScreenUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_SplitScreenUser.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SplitScreenUser();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CNETMsg_SplitScreenUser;
})());
exports.CNETMsg_PlayerAvatarData = ($root.CNETMsg_PlayerAvatarData = (() => {
    /**
     * Properties of a CNETMsg_PlayerAvatarData.
     * @exports ICNETMsg_PlayerAvatarData
     * @interface ICNETMsg_PlayerAvatarData
     * @property {number|null} [accountid] CNETMsg_PlayerAvatarData accountid
     * @property {Uint8Array|null} [rgb] CNETMsg_PlayerAvatarData rgb
     */
    /**
     * Constructs a new CNETMsg_PlayerAvatarData.
     * @exports CNETMsg_PlayerAvatarData
     * @classdesc Represents a CNETMsg_PlayerAvatarData.
     * @implements ICNETMsg_PlayerAvatarData
     * @constructor
     * @param {ICNETMsg_PlayerAvatarData=} [properties] Properties to set
     */
    function CNETMsg_PlayerAvatarData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CNETMsg_PlayerAvatarData accountid.
     * @member {number} accountid
     * @memberof CNETMsg_PlayerAvatarData
     * @instance
     */
    CNETMsg_PlayerAvatarData.prototype.accountid = 0;
    /**
     * CNETMsg_PlayerAvatarData rgb.
     * @member {Uint8Array} rgb
     * @memberof CNETMsg_PlayerAvatarData
     * @instance
     */
    CNETMsg_PlayerAvatarData.prototype.rgb = $util.newBuffer([]);
    /**
     * Decodes a CNETMsg_PlayerAvatarData message from the specified reader or buffer.
     * @function decode
     * @memberof CNETMsg_PlayerAvatarData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CNETMsg_PlayerAvatarData} CNETMsg_PlayerAvatarData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CNETMsg_PlayerAvatarData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_PlayerAvatarData();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CNETMsg_PlayerAvatarData;
})());
exports.CCLCMsg_ClientInfo = ($root.CCLCMsg_ClientInfo = (() => {
    /**
     * Properties of a CCLCMsg_ClientInfo.
     * @exports ICCLCMsg_ClientInfo
     * @interface ICCLCMsg_ClientInfo
     * @property {number|null} [sendTableCrc] CCLCMsg_ClientInfo sendTableCrc
     * @property {number|null} [serverCount] CCLCMsg_ClientInfo serverCount
     * @property {boolean|null} [isHltv] CCLCMsg_ClientInfo isHltv
     * @property {boolean|null} [isReplay] CCLCMsg_ClientInfo isReplay
     * @property {number|null} [friendsId] CCLCMsg_ClientInfo friendsId
     * @property {string|null} [friendsName] CCLCMsg_ClientInfo friendsName
     * @property {Array.<number>|null} [customFiles] CCLCMsg_ClientInfo customFiles
     */
    /**
     * Constructs a new CCLCMsg_ClientInfo.
     * @exports CCLCMsg_ClientInfo
     * @classdesc Represents a CCLCMsg_ClientInfo.
     * @implements ICCLCMsg_ClientInfo
     * @constructor
     * @param {ICCLCMsg_ClientInfo=} [properties] Properties to set
     */
    function CCLCMsg_ClientInfo(properties) {
        this.customFiles = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_ClientInfo sendTableCrc.
     * @member {number} sendTableCrc
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.sendTableCrc = 0;
    /**
     * CCLCMsg_ClientInfo serverCount.
     * @member {number} serverCount
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.serverCount = 0;
    /**
     * CCLCMsg_ClientInfo isHltv.
     * @member {boolean} isHltv
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.isHltv = false;
    /**
     * CCLCMsg_ClientInfo isReplay.
     * @member {boolean} isReplay
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.isReplay = false;
    /**
     * CCLCMsg_ClientInfo friendsId.
     * @member {number} friendsId
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.friendsId = 0;
    /**
     * CCLCMsg_ClientInfo friendsName.
     * @member {string} friendsName
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.friendsName = "";
    /**
     * CCLCMsg_ClientInfo customFiles.
     * @member {Array.<number>} customFiles
     * @memberof CCLCMsg_ClientInfo
     * @instance
     */
    CCLCMsg_ClientInfo.prototype.customFiles = $util.emptyArray;
    /**
     * Decodes a CCLCMsg_ClientInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_ClientInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_ClientInfo} CCLCMsg_ClientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_ClientInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_ClientInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
                    if (!(message.customFiles && message.customFiles.length))
                        message.customFiles = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.customFiles.push(reader.fixed32());
                    }
                    else
                        message.customFiles.push(reader.fixed32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CCLCMsg_ClientInfo;
})());
exports.CCLCMsg_Move = ($root.CCLCMsg_Move = (() => {
    /**
     * Properties of a CCLCMsg_Move.
     * @exports ICCLCMsg_Move
     * @interface ICCLCMsg_Move
     * @property {number|null} [numBackupCommands] CCLCMsg_Move numBackupCommands
     * @property {number|null} [numNewCommands] CCLCMsg_Move numNewCommands
     * @property {Uint8Array|null} [data] CCLCMsg_Move data
     */
    /**
     * Constructs a new CCLCMsg_Move.
     * @exports CCLCMsg_Move
     * @classdesc Represents a CCLCMsg_Move.
     * @implements ICCLCMsg_Move
     * @constructor
     * @param {ICCLCMsg_Move=} [properties] Properties to set
     */
    function CCLCMsg_Move(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_Move numBackupCommands.
     * @member {number} numBackupCommands
     * @memberof CCLCMsg_Move
     * @instance
     */
    CCLCMsg_Move.prototype.numBackupCommands = 0;
    /**
     * CCLCMsg_Move numNewCommands.
     * @member {number} numNewCommands
     * @memberof CCLCMsg_Move
     * @instance
     */
    CCLCMsg_Move.prototype.numNewCommands = 0;
    /**
     * CCLCMsg_Move data.
     * @member {Uint8Array} data
     * @memberof CCLCMsg_Move
     * @instance
     */
    CCLCMsg_Move.prototype.data = $util.newBuffer([]);
    /**
     * Decodes a CCLCMsg_Move message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_Move
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_Move} CCLCMsg_Move
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_Move.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_Move();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_Move;
})());
exports.CCLCMsg_VoiceData = ($root.CCLCMsg_VoiceData = (() => {
    /**
     * Properties of a CCLCMsg_VoiceData.
     * @exports ICCLCMsg_VoiceData
     * @interface ICCLCMsg_VoiceData
     * @property {Uint8Array|null} [data] CCLCMsg_VoiceData data
     * @property {number|Long|null} [xuid] CCLCMsg_VoiceData xuid
     * @property {VoiceDataFormat_t|null} [format] CCLCMsg_VoiceData format
     * @property {number|null} [sequenceBytes] CCLCMsg_VoiceData sequenceBytes
     * @property {number|null} [sectionNumber] CCLCMsg_VoiceData sectionNumber
     * @property {number|null} [uncompressedSampleOffset] CCLCMsg_VoiceData uncompressedSampleOffset
     */
    /**
     * Constructs a new CCLCMsg_VoiceData.
     * @exports CCLCMsg_VoiceData
     * @classdesc Represents a CCLCMsg_VoiceData.
     * @implements ICCLCMsg_VoiceData
     * @constructor
     * @param {ICCLCMsg_VoiceData=} [properties] Properties to set
     */
    function CCLCMsg_VoiceData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_VoiceData data.
     * @member {Uint8Array} data
     * @memberof CCLCMsg_VoiceData
     * @instance
     */
    CCLCMsg_VoiceData.prototype.data = $util.newBuffer([]);
    /**
     * CCLCMsg_VoiceData xuid.
     * @member {number|Long} xuid
     * @memberof CCLCMsg_VoiceData
     * @instance
     */
    CCLCMsg_VoiceData.prototype.xuid = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
    /**
     * CCLCMsg_VoiceData format.
     * @member {VoiceDataFormat_t} format
     * @memberof CCLCMsg_VoiceData
     * @instance
     */
    CCLCMsg_VoiceData.prototype.format = 1;
    /**
     * CCLCMsg_VoiceData sequenceBytes.
     * @member {number} sequenceBytes
     * @memberof CCLCMsg_VoiceData
     * @instance
     */
    CCLCMsg_VoiceData.prototype.sequenceBytes = 0;
    /**
     * CCLCMsg_VoiceData sectionNumber.
     * @member {number} sectionNumber
     * @memberof CCLCMsg_VoiceData
     * @instance
     */
    CCLCMsg_VoiceData.prototype.sectionNumber = 0;
    /**
     * CCLCMsg_VoiceData uncompressedSampleOffset.
     * @member {number} uncompressedSampleOffset
     * @memberof CCLCMsg_VoiceData
     * @instance
     */
    CCLCMsg_VoiceData.prototype.uncompressedSampleOffset = 0;
    /**
     * Decodes a CCLCMsg_VoiceData message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_VoiceData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_VoiceData} CCLCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_VoiceData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_VoiceData();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_VoiceData;
})());
exports.CCLCMsg_BaselineAck = ($root.CCLCMsg_BaselineAck = (() => {
    /**
     * Properties of a CCLCMsg_BaselineAck.
     * @exports ICCLCMsg_BaselineAck
     * @interface ICCLCMsg_BaselineAck
     * @property {number|null} [baselineTick] CCLCMsg_BaselineAck baselineTick
     * @property {number|null} [baselineNr] CCLCMsg_BaselineAck baselineNr
     */
    /**
     * Constructs a new CCLCMsg_BaselineAck.
     * @exports CCLCMsg_BaselineAck
     * @classdesc Represents a CCLCMsg_BaselineAck.
     * @implements ICCLCMsg_BaselineAck
     * @constructor
     * @param {ICCLCMsg_BaselineAck=} [properties] Properties to set
     */
    function CCLCMsg_BaselineAck(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_BaselineAck baselineTick.
     * @member {number} baselineTick
     * @memberof CCLCMsg_BaselineAck
     * @instance
     */
    CCLCMsg_BaselineAck.prototype.baselineTick = 0;
    /**
     * CCLCMsg_BaselineAck baselineNr.
     * @member {number} baselineNr
     * @memberof CCLCMsg_BaselineAck
     * @instance
     */
    CCLCMsg_BaselineAck.prototype.baselineNr = 0;
    /**
     * Decodes a CCLCMsg_BaselineAck message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_BaselineAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_BaselineAck} CCLCMsg_BaselineAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_BaselineAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_BaselineAck();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_BaselineAck;
})());
exports.CCLCMsg_ListenEvents = ($root.CCLCMsg_ListenEvents = (() => {
    /**
     * Properties of a CCLCMsg_ListenEvents.
     * @exports ICCLCMsg_ListenEvents
     * @interface ICCLCMsg_ListenEvents
     * @property {Array.<number>|null} [eventMask] CCLCMsg_ListenEvents eventMask
     */
    /**
     * Constructs a new CCLCMsg_ListenEvents.
     * @exports CCLCMsg_ListenEvents
     * @classdesc Represents a CCLCMsg_ListenEvents.
     * @implements ICCLCMsg_ListenEvents
     * @constructor
     * @param {ICCLCMsg_ListenEvents=} [properties] Properties to set
     */
    function CCLCMsg_ListenEvents(properties) {
        this.eventMask = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_ListenEvents eventMask.
     * @member {Array.<number>} eventMask
     * @memberof CCLCMsg_ListenEvents
     * @instance
     */
    CCLCMsg_ListenEvents.prototype.eventMask = $util.emptyArray;
    /**
     * Decodes a CCLCMsg_ListenEvents message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_ListenEvents
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_ListenEvents} CCLCMsg_ListenEvents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_ListenEvents.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_ListenEvents();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.eventMask && message.eventMask.length))
                        message.eventMask = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.eventMask.push(reader.fixed32());
                    }
                    else
                        message.eventMask.push(reader.fixed32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CCLCMsg_ListenEvents;
})());
exports.CCLCMsg_RespondCvarValue = ($root.CCLCMsg_RespondCvarValue = (() => {
    /**
     * Properties of a CCLCMsg_RespondCvarValue.
     * @exports ICCLCMsg_RespondCvarValue
     * @interface ICCLCMsg_RespondCvarValue
     * @property {number|null} [cookie] CCLCMsg_RespondCvarValue cookie
     * @property {number|null} [statusCode] CCLCMsg_RespondCvarValue statusCode
     * @property {string|null} [name] CCLCMsg_RespondCvarValue name
     * @property {string|null} [value] CCLCMsg_RespondCvarValue value
     */
    /**
     * Constructs a new CCLCMsg_RespondCvarValue.
     * @exports CCLCMsg_RespondCvarValue
     * @classdesc Represents a CCLCMsg_RespondCvarValue.
     * @implements ICCLCMsg_RespondCvarValue
     * @constructor
     * @param {ICCLCMsg_RespondCvarValue=} [properties] Properties to set
     */
    function CCLCMsg_RespondCvarValue(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_RespondCvarValue cookie.
     * @member {number} cookie
     * @memberof CCLCMsg_RespondCvarValue
     * @instance
     */
    CCLCMsg_RespondCvarValue.prototype.cookie = 0;
    /**
     * CCLCMsg_RespondCvarValue statusCode.
     * @member {number} statusCode
     * @memberof CCLCMsg_RespondCvarValue
     * @instance
     */
    CCLCMsg_RespondCvarValue.prototype.statusCode = 0;
    /**
     * CCLCMsg_RespondCvarValue name.
     * @member {string} name
     * @memberof CCLCMsg_RespondCvarValue
     * @instance
     */
    CCLCMsg_RespondCvarValue.prototype.name = "";
    /**
     * CCLCMsg_RespondCvarValue value.
     * @member {string} value
     * @memberof CCLCMsg_RespondCvarValue
     * @instance
     */
    CCLCMsg_RespondCvarValue.prototype.value = "";
    /**
     * Decodes a CCLCMsg_RespondCvarValue message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_RespondCvarValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_RespondCvarValue} CCLCMsg_RespondCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_RespondCvarValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_RespondCvarValue();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_RespondCvarValue;
})());
exports.CCLCMsg_FileCRCCheck = ($root.CCLCMsg_FileCRCCheck = (() => {
    /**
     * Properties of a CCLCMsg_FileCRCCheck.
     * @exports ICCLCMsg_FileCRCCheck
     * @interface ICCLCMsg_FileCRCCheck
     * @property {number|null} [codePath] CCLCMsg_FileCRCCheck codePath
     * @property {string|null} [path] CCLCMsg_FileCRCCheck path
     * @property {number|null} [codeFilename] CCLCMsg_FileCRCCheck codeFilename
     * @property {string|null} [filename] CCLCMsg_FileCRCCheck filename
     * @property {number|null} [fileFraction] CCLCMsg_FileCRCCheck fileFraction
     * @property {Uint8Array|null} [md5] CCLCMsg_FileCRCCheck md5
     * @property {number|null} [crc] CCLCMsg_FileCRCCheck crc
     * @property {number|null} [fileHashType] CCLCMsg_FileCRCCheck fileHashType
     * @property {number|null} [fileLen] CCLCMsg_FileCRCCheck fileLen
     * @property {number|null} [packFileId] CCLCMsg_FileCRCCheck packFileId
     * @property {number|null} [packFileNumber] CCLCMsg_FileCRCCheck packFileNumber
     */
    /**
     * Constructs a new CCLCMsg_FileCRCCheck.
     * @exports CCLCMsg_FileCRCCheck
     * @classdesc Represents a CCLCMsg_FileCRCCheck.
     * @implements ICCLCMsg_FileCRCCheck
     * @constructor
     * @param {ICCLCMsg_FileCRCCheck=} [properties] Properties to set
     */
    function CCLCMsg_FileCRCCheck(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_FileCRCCheck codePath.
     * @member {number} codePath
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.codePath = 0;
    /**
     * CCLCMsg_FileCRCCheck path.
     * @member {string} path
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.path = "";
    /**
     * CCLCMsg_FileCRCCheck codeFilename.
     * @member {number} codeFilename
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.codeFilename = 0;
    /**
     * CCLCMsg_FileCRCCheck filename.
     * @member {string} filename
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.filename = "";
    /**
     * CCLCMsg_FileCRCCheck fileFraction.
     * @member {number} fileFraction
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.fileFraction = 0;
    /**
     * CCLCMsg_FileCRCCheck md5.
     * @member {Uint8Array} md5
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.md5 = $util.newBuffer([]);
    /**
     * CCLCMsg_FileCRCCheck crc.
     * @member {number} crc
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.crc = 0;
    /**
     * CCLCMsg_FileCRCCheck fileHashType.
     * @member {number} fileHashType
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.fileHashType = 0;
    /**
     * CCLCMsg_FileCRCCheck fileLen.
     * @member {number} fileLen
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.fileLen = 0;
    /**
     * CCLCMsg_FileCRCCheck packFileId.
     * @member {number} packFileId
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.packFileId = 0;
    /**
     * CCLCMsg_FileCRCCheck packFileNumber.
     * @member {number} packFileNumber
     * @memberof CCLCMsg_FileCRCCheck
     * @instance
     */
    CCLCMsg_FileCRCCheck.prototype.packFileNumber = 0;
    /**
     * Decodes a CCLCMsg_FileCRCCheck message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_FileCRCCheck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_FileCRCCheck} CCLCMsg_FileCRCCheck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_FileCRCCheck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_FileCRCCheck();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_FileCRCCheck;
})());
exports.CCLCMsg_LoadingProgress = ($root.CCLCMsg_LoadingProgress = (() => {
    /**
     * Properties of a CCLCMsg_LoadingProgress.
     * @exports ICCLCMsg_LoadingProgress
     * @interface ICCLCMsg_LoadingProgress
     * @property {number|null} [progress] CCLCMsg_LoadingProgress progress
     */
    /**
     * Constructs a new CCLCMsg_LoadingProgress.
     * @exports CCLCMsg_LoadingProgress
     * @classdesc Represents a CCLCMsg_LoadingProgress.
     * @implements ICCLCMsg_LoadingProgress
     * @constructor
     * @param {ICCLCMsg_LoadingProgress=} [properties] Properties to set
     */
    function CCLCMsg_LoadingProgress(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_LoadingProgress progress.
     * @member {number} progress
     * @memberof CCLCMsg_LoadingProgress
     * @instance
     */
    CCLCMsg_LoadingProgress.prototype.progress = 0;
    /**
     * Decodes a CCLCMsg_LoadingProgress message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_LoadingProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_LoadingProgress} CCLCMsg_LoadingProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_LoadingProgress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_LoadingProgress();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_LoadingProgress;
})());
exports.CCLCMsg_SplitPlayerConnect = ($root.CCLCMsg_SplitPlayerConnect = (() => {
    /**
     * Properties of a CCLCMsg_SplitPlayerConnect.
     * @exports ICCLCMsg_SplitPlayerConnect
     * @interface ICCLCMsg_SplitPlayerConnect
     * @property {ICMsg_CVars|null} [convars] CCLCMsg_SplitPlayerConnect convars
     */
    /**
     * Constructs a new CCLCMsg_SplitPlayerConnect.
     * @exports CCLCMsg_SplitPlayerConnect
     * @classdesc Represents a CCLCMsg_SplitPlayerConnect.
     * @implements ICCLCMsg_SplitPlayerConnect
     * @constructor
     * @param {ICCLCMsg_SplitPlayerConnect=} [properties] Properties to set
     */
    function CCLCMsg_SplitPlayerConnect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_SplitPlayerConnect convars.
     * @member {ICMsg_CVars|null|undefined} convars
     * @memberof CCLCMsg_SplitPlayerConnect
     * @instance
     */
    CCLCMsg_SplitPlayerConnect.prototype.convars = null;
    /**
     * Decodes a CCLCMsg_SplitPlayerConnect message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_SplitPlayerConnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_SplitPlayerConnect} CCLCMsg_SplitPlayerConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_SplitPlayerConnect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_SplitPlayerConnect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.convars = $root.CMsg_CVars.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CCLCMsg_SplitPlayerConnect;
})());
exports.CCLCMsg_CmdKeyValues = ($root.CCLCMsg_CmdKeyValues = (() => {
    /**
     * Properties of a CCLCMsg_CmdKeyValues.
     * @exports ICCLCMsg_CmdKeyValues
     * @interface ICCLCMsg_CmdKeyValues
     * @property {Uint8Array|null} [keyvalues] CCLCMsg_CmdKeyValues keyvalues
     */
    /**
     * Constructs a new CCLCMsg_CmdKeyValues.
     * @exports CCLCMsg_CmdKeyValues
     * @classdesc Represents a CCLCMsg_CmdKeyValues.
     * @implements ICCLCMsg_CmdKeyValues
     * @constructor
     * @param {ICCLCMsg_CmdKeyValues=} [properties] Properties to set
     */
    function CCLCMsg_CmdKeyValues(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_CmdKeyValues keyvalues.
     * @member {Uint8Array} keyvalues
     * @memberof CCLCMsg_CmdKeyValues
     * @instance
     */
    CCLCMsg_CmdKeyValues.prototype.keyvalues = $util.newBuffer([]);
    /**
     * Decodes a CCLCMsg_CmdKeyValues message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_CmdKeyValues
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_CmdKeyValues} CCLCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_CmdKeyValues.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_CmdKeyValues();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_CmdKeyValues;
})());
exports.CSVCMsg_ServerInfo = ($root.CSVCMsg_ServerInfo = (() => {
    /**
     * Properties of a CSVCMsg_ServerInfo.
     * @exports ICSVCMsg_ServerInfo
     * @interface ICSVCMsg_ServerInfo
     * @property {number|null} [protocol] CSVCMsg_ServerInfo protocol
     * @property {number|null} [serverCount] CSVCMsg_ServerInfo serverCount
     * @property {boolean|null} [isDedicated] CSVCMsg_ServerInfo isDedicated
     * @property {boolean|null} [isOfficialValveServer] CSVCMsg_ServerInfo isOfficialValveServer
     * @property {boolean|null} [isHltv] CSVCMsg_ServerInfo isHltv
     * @property {boolean|null} [isReplay] CSVCMsg_ServerInfo isReplay
     * @property {boolean|null} [isRedirectingToProxyRelay] CSVCMsg_ServerInfo isRedirectingToProxyRelay
     * @property {number|null} [cOs] CSVCMsg_ServerInfo cOs
     * @property {number|null} [mapCrc] CSVCMsg_ServerInfo mapCrc
     * @property {number|null} [clientCrc] CSVCMsg_ServerInfo clientCrc
     * @property {number|null} [stringTableCrc] CSVCMsg_ServerInfo stringTableCrc
     * @property {number|null} [maxClients] CSVCMsg_ServerInfo maxClients
     * @property {number|null} [maxClasses] CSVCMsg_ServerInfo maxClasses
     * @property {number|null} [playerSlot] CSVCMsg_ServerInfo playerSlot
     * @property {number|null} [tickInterval] CSVCMsg_ServerInfo tickInterval
     * @property {string|null} [gameDir] CSVCMsg_ServerInfo gameDir
     * @property {string|null} [mapName] CSVCMsg_ServerInfo mapName
     * @property {string|null} [mapGroupName] CSVCMsg_ServerInfo mapGroupName
     * @property {string|null} [skyName] CSVCMsg_ServerInfo skyName
     * @property {string|null} [hostName] CSVCMsg_ServerInfo hostName
     * @property {number|null} [publicIp] CSVCMsg_ServerInfo publicIp
     * @property {number|Long|null} [ugcMapId] CSVCMsg_ServerInfo ugcMapId
     */
    /**
     * Constructs a new CSVCMsg_ServerInfo.
     * @exports CSVCMsg_ServerInfo
     * @classdesc Represents a CSVCMsg_ServerInfo.
     * @implements ICSVCMsg_ServerInfo
     * @constructor
     * @param {ICSVCMsg_ServerInfo=} [properties] Properties to set
     */
    function CSVCMsg_ServerInfo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_ServerInfo protocol.
     * @member {number} protocol
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.protocol = 0;
    /**
     * CSVCMsg_ServerInfo serverCount.
     * @member {number} serverCount
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.serverCount = 0;
    /**
     * CSVCMsg_ServerInfo isDedicated.
     * @member {boolean} isDedicated
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.isDedicated = false;
    /**
     * CSVCMsg_ServerInfo isOfficialValveServer.
     * @member {boolean} isOfficialValveServer
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.isOfficialValveServer = false;
    /**
     * CSVCMsg_ServerInfo isHltv.
     * @member {boolean} isHltv
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.isHltv = false;
    /**
     * CSVCMsg_ServerInfo isReplay.
     * @member {boolean} isReplay
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.isReplay = false;
    /**
     * CSVCMsg_ServerInfo isRedirectingToProxyRelay.
     * @member {boolean} isRedirectingToProxyRelay
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.isRedirectingToProxyRelay = false;
    /**
     * CSVCMsg_ServerInfo cOs.
     * @member {number} cOs
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.cOs = 0;
    /**
     * CSVCMsg_ServerInfo mapCrc.
     * @member {number} mapCrc
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.mapCrc = 0;
    /**
     * CSVCMsg_ServerInfo clientCrc.
     * @member {number} clientCrc
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.clientCrc = 0;
    /**
     * CSVCMsg_ServerInfo stringTableCrc.
     * @member {number} stringTableCrc
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.stringTableCrc = 0;
    /**
     * CSVCMsg_ServerInfo maxClients.
     * @member {number} maxClients
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.maxClients = 0;
    /**
     * CSVCMsg_ServerInfo maxClasses.
     * @member {number} maxClasses
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.maxClasses = 0;
    /**
     * CSVCMsg_ServerInfo playerSlot.
     * @member {number} playerSlot
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.playerSlot = 0;
    /**
     * CSVCMsg_ServerInfo tickInterval.
     * @member {number} tickInterval
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.tickInterval = 0;
    /**
     * CSVCMsg_ServerInfo gameDir.
     * @member {string} gameDir
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.gameDir = "";
    /**
     * CSVCMsg_ServerInfo mapName.
     * @member {string} mapName
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.mapName = "";
    /**
     * CSVCMsg_ServerInfo mapGroupName.
     * @member {string} mapGroupName
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.mapGroupName = "";
    /**
     * CSVCMsg_ServerInfo skyName.
     * @member {string} skyName
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.skyName = "";
    /**
     * CSVCMsg_ServerInfo hostName.
     * @member {string} hostName
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.hostName = "";
    /**
     * CSVCMsg_ServerInfo publicIp.
     * @member {number} publicIp
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.publicIp = 0;
    /**
     * CSVCMsg_ServerInfo ugcMapId.
     * @member {number|Long} ugcMapId
     * @memberof CSVCMsg_ServerInfo
     * @instance
     */
    CSVCMsg_ServerInfo.prototype.ugcMapId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
    /**
     * Decodes a CSVCMsg_ServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_ServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_ServerInfo} CSVCMsg_ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_ServerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_ServerInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_ServerInfo;
})());
exports.CSVCMsg_ClassInfo = ($root.CSVCMsg_ClassInfo = (() => {
    /**
     * Properties of a CSVCMsg_ClassInfo.
     * @exports ICSVCMsg_ClassInfo
     * @interface ICSVCMsg_ClassInfo
     * @property {boolean|null} [createOnClient] CSVCMsg_ClassInfo createOnClient
     * @property {Array.<CSVCMsg_ClassInfo.Iclass_t>|null} [classes] CSVCMsg_ClassInfo classes
     */
    /**
     * Constructs a new CSVCMsg_ClassInfo.
     * @exports CSVCMsg_ClassInfo
     * @classdesc Represents a CSVCMsg_ClassInfo.
     * @implements ICSVCMsg_ClassInfo
     * @constructor
     * @param {ICSVCMsg_ClassInfo=} [properties] Properties to set
     */
    function CSVCMsg_ClassInfo(properties) {
        this.classes = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_ClassInfo createOnClient.
     * @member {boolean} createOnClient
     * @memberof CSVCMsg_ClassInfo
     * @instance
     */
    CSVCMsg_ClassInfo.prototype.createOnClient = false;
    /**
     * CSVCMsg_ClassInfo classes.
     * @member {Array.<CSVCMsg_ClassInfo.Iclass_t>} classes
     * @memberof CSVCMsg_ClassInfo
     * @instance
     */
    CSVCMsg_ClassInfo.prototype.classes = $util.emptyArray;
    /**
     * Decodes a CSVCMsg_ClassInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_ClassInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_ClassInfo} CSVCMsg_ClassInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_ClassInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_ClassInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.createOnClient = reader.bool();
                    break;
                case 2:
                    if (!(message.classes && message.classes.length))
                        message.classes = [];
                    message.classes.push($root.CSVCMsg_ClassInfo.class_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    CSVCMsg_ClassInfo.class_t = (function () {
        /**
         * Properties of a class_t.
         * @memberof CSVCMsg_ClassInfo
         * @interface Iclass_t
         * @property {number|null} [classId] class_t classId
         * @property {string|null} [dataTableName] class_t dataTableName
         * @property {string|null} [className] class_t className
         */
        /**
         * Constructs a new class_t.
         * @memberof CSVCMsg_ClassInfo
         * @classdesc Represents a class_t.
         * @implements Iclass_t
         * @constructor
         * @param {CSVCMsg_ClassInfo.Iclass_t=} [properties] Properties to set
         */
        function class_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * class_t classId.
         * @member {number} classId
         * @memberof CSVCMsg_ClassInfo.class_t
         * @instance
         */
        class_t.prototype.classId = 0;
        /**
         * class_t dataTableName.
         * @member {string} dataTableName
         * @memberof CSVCMsg_ClassInfo.class_t
         * @instance
         */
        class_t.prototype.dataTableName = "";
        /**
         * class_t className.
         * @member {string} className
         * @memberof CSVCMsg_ClassInfo.class_t
         * @instance
         */
        class_t.prototype.className = "";
        /**
         * Decodes a class_t message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_ClassInfo.class_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_ClassInfo.class_t} class_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        class_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_ClassInfo.class_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };
        return class_t;
    })();
    return CSVCMsg_ClassInfo;
})());
exports.CSVCMsg_SendTable = ($root.CSVCMsg_SendTable = (() => {
    /**
     * Properties of a CSVCMsg_SendTable.
     * @exports ICSVCMsg_SendTable
     * @interface ICSVCMsg_SendTable
     * @property {boolean|null} [isEnd] CSVCMsg_SendTable isEnd
     * @property {string|null} [netTableName] CSVCMsg_SendTable netTableName
     * @property {boolean|null} [needsDecoder] CSVCMsg_SendTable needsDecoder
     * @property {Array.<CSVCMsg_SendTable.Isendprop_t>|null} [props] CSVCMsg_SendTable props
     */
    /**
     * Constructs a new CSVCMsg_SendTable.
     * @exports CSVCMsg_SendTable
     * @classdesc Represents a CSVCMsg_SendTable.
     * @implements ICSVCMsg_SendTable
     * @constructor
     * @param {ICSVCMsg_SendTable=} [properties] Properties to set
     */
    function CSVCMsg_SendTable(properties) {
        this.props = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_SendTable isEnd.
     * @member {boolean} isEnd
     * @memberof CSVCMsg_SendTable
     * @instance
     */
    CSVCMsg_SendTable.prototype.isEnd = false;
    /**
     * CSVCMsg_SendTable netTableName.
     * @member {string} netTableName
     * @memberof CSVCMsg_SendTable
     * @instance
     */
    CSVCMsg_SendTable.prototype.netTableName = "";
    /**
     * CSVCMsg_SendTable needsDecoder.
     * @member {boolean} needsDecoder
     * @memberof CSVCMsg_SendTable
     * @instance
     */
    CSVCMsg_SendTable.prototype.needsDecoder = false;
    /**
     * CSVCMsg_SendTable props.
     * @member {Array.<CSVCMsg_SendTable.Isendprop_t>} props
     * @memberof CSVCMsg_SendTable
     * @instance
     */
    CSVCMsg_SendTable.prototype.props = $util.emptyArray;
    /**
     * Decodes a CSVCMsg_SendTable message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_SendTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_SendTable} CSVCMsg_SendTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_SendTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_SendTable();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
                    if (!(message.props && message.props.length))
                        message.props = [];
                    message.props.push($root.CSVCMsg_SendTable.sendprop_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    CSVCMsg_SendTable.sendprop_t = (function () {
        /**
         * Properties of a sendprop_t.
         * @memberof CSVCMsg_SendTable
         * @interface Isendprop_t
         * @property {number|null} [type] sendprop_t type
         * @property {string|null} [varName] sendprop_t varName
         * @property {number|null} [flags] sendprop_t flags
         * @property {number|null} [priority] sendprop_t priority
         * @property {string|null} [dtName] sendprop_t dtName
         * @property {number|null} [numElements] sendprop_t numElements
         * @property {number|null} [lowValue] sendprop_t lowValue
         * @property {number|null} [highValue] sendprop_t highValue
         * @property {number|null} [numBits] sendprop_t numBits
         */
        /**
         * Constructs a new sendprop_t.
         * @memberof CSVCMsg_SendTable
         * @classdesc Represents a sendprop_t.
         * @implements Isendprop_t
         * @constructor
         * @param {CSVCMsg_SendTable.Isendprop_t=} [properties] Properties to set
         */
        function sendprop_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * sendprop_t type.
         * @member {number} type
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.type = 0;
        /**
         * sendprop_t varName.
         * @member {string} varName
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.varName = "";
        /**
         * sendprop_t flags.
         * @member {number} flags
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.flags = 0;
        /**
         * sendprop_t priority.
         * @member {number} priority
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.priority = 0;
        /**
         * sendprop_t dtName.
         * @member {string} dtName
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.dtName = "";
        /**
         * sendprop_t numElements.
         * @member {number} numElements
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.numElements = 0;
        /**
         * sendprop_t lowValue.
         * @member {number} lowValue
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.lowValue = 0;
        /**
         * sendprop_t highValue.
         * @member {number} highValue
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.highValue = 0;
        /**
         * sendprop_t numBits.
         * @member {number} numBits
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @instance
         */
        sendprop_t.prototype.numBits = 0;
        /**
         * Decodes a sendprop_t message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_SendTable.sendprop_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_SendTable.sendprop_t} sendprop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sendprop_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_SendTable.sendprop_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };
        return sendprop_t;
    })();
    return CSVCMsg_SendTable;
})());
exports.CSVCMsg_Print = ($root.CSVCMsg_Print = (() => {
    /**
     * Properties of a CSVCMsg_Print.
     * @exports ICSVCMsg_Print
     * @interface ICSVCMsg_Print
     * @property {string|null} [text] CSVCMsg_Print text
     */
    /**
     * Constructs a new CSVCMsg_Print.
     * @exports CSVCMsg_Print
     * @classdesc Represents a CSVCMsg_Print.
     * @implements ICSVCMsg_Print
     * @constructor
     * @param {ICSVCMsg_Print=} [properties] Properties to set
     */
    function CSVCMsg_Print(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_Print text.
     * @member {string} text
     * @memberof CSVCMsg_Print
     * @instance
     */
    CSVCMsg_Print.prototype.text = "";
    /**
     * Decodes a CSVCMsg_Print message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_Print
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_Print} CSVCMsg_Print
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_Print.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_Print();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_Print;
})());
exports.CSVCMsg_SetPause = ($root.CSVCMsg_SetPause = (() => {
    /**
     * Properties of a CSVCMsg_SetPause.
     * @exports ICSVCMsg_SetPause
     * @interface ICSVCMsg_SetPause
     * @property {boolean|null} [paused] CSVCMsg_SetPause paused
     */
    /**
     * Constructs a new CSVCMsg_SetPause.
     * @exports CSVCMsg_SetPause
     * @classdesc Represents a CSVCMsg_SetPause.
     * @implements ICSVCMsg_SetPause
     * @constructor
     * @param {ICSVCMsg_SetPause=} [properties] Properties to set
     */
    function CSVCMsg_SetPause(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_SetPause paused.
     * @member {boolean} paused
     * @memberof CSVCMsg_SetPause
     * @instance
     */
    CSVCMsg_SetPause.prototype.paused = false;
    /**
     * Decodes a CSVCMsg_SetPause message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_SetPause
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_SetPause} CSVCMsg_SetPause
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_SetPause.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_SetPause();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_SetPause;
})());
exports.CSVCMsg_SetView = ($root.CSVCMsg_SetView = (() => {
    /**
     * Properties of a CSVCMsg_SetView.
     * @exports ICSVCMsg_SetView
     * @interface ICSVCMsg_SetView
     * @property {number|null} [entityIndex] CSVCMsg_SetView entityIndex
     */
    /**
     * Constructs a new CSVCMsg_SetView.
     * @exports CSVCMsg_SetView
     * @classdesc Represents a CSVCMsg_SetView.
     * @implements ICSVCMsg_SetView
     * @constructor
     * @param {ICSVCMsg_SetView=} [properties] Properties to set
     */
    function CSVCMsg_SetView(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_SetView entityIndex.
     * @member {number} entityIndex
     * @memberof CSVCMsg_SetView
     * @instance
     */
    CSVCMsg_SetView.prototype.entityIndex = 0;
    /**
     * Decodes a CSVCMsg_SetView message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_SetView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_SetView} CSVCMsg_SetView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_SetView.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_SetView();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_SetView;
})());
exports.CSVCMsg_CreateStringTable = ($root.CSVCMsg_CreateStringTable = (() => {
    /**
     * Properties of a CSVCMsg_CreateStringTable.
     * @exports ICSVCMsg_CreateStringTable
     * @interface ICSVCMsg_CreateStringTable
     * @property {string|null} [name] CSVCMsg_CreateStringTable name
     * @property {number|null} [maxEntries] CSVCMsg_CreateStringTable maxEntries
     * @property {number|null} [numEntries] CSVCMsg_CreateStringTable numEntries
     * @property {boolean|null} [userDataFixedSize] CSVCMsg_CreateStringTable userDataFixedSize
     * @property {number|null} [userDataSize] CSVCMsg_CreateStringTable userDataSize
     * @property {number|null} [userDataSizeBits] CSVCMsg_CreateStringTable userDataSizeBits
     * @property {number|null} [flags] CSVCMsg_CreateStringTable flags
     * @property {Uint8Array|null} [stringData] CSVCMsg_CreateStringTable stringData
     */
    /**
     * Constructs a new CSVCMsg_CreateStringTable.
     * @exports CSVCMsg_CreateStringTable
     * @classdesc Represents a CSVCMsg_CreateStringTable.
     * @implements ICSVCMsg_CreateStringTable
     * @constructor
     * @param {ICSVCMsg_CreateStringTable=} [properties] Properties to set
     */
    function CSVCMsg_CreateStringTable(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_CreateStringTable name.
     * @member {string} name
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.name = "";
    /**
     * CSVCMsg_CreateStringTable maxEntries.
     * @member {number} maxEntries
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.maxEntries = 0;
    /**
     * CSVCMsg_CreateStringTable numEntries.
     * @member {number} numEntries
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.numEntries = 0;
    /**
     * CSVCMsg_CreateStringTable userDataFixedSize.
     * @member {boolean} userDataFixedSize
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.userDataFixedSize = false;
    /**
     * CSVCMsg_CreateStringTable userDataSize.
     * @member {number} userDataSize
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.userDataSize = 0;
    /**
     * CSVCMsg_CreateStringTable userDataSizeBits.
     * @member {number} userDataSizeBits
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.userDataSizeBits = 0;
    /**
     * CSVCMsg_CreateStringTable flags.
     * @member {number} flags
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.flags = 0;
    /**
     * CSVCMsg_CreateStringTable stringData.
     * @member {Uint8Array} stringData
     * @memberof CSVCMsg_CreateStringTable
     * @instance
     */
    CSVCMsg_CreateStringTable.prototype.stringData = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_CreateStringTable message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_CreateStringTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_CreateStringTable} CSVCMsg_CreateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_CreateStringTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_CreateStringTable();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_CreateStringTable;
})());
exports.CSVCMsg_UpdateStringTable = ($root.CSVCMsg_UpdateStringTable = (() => {
    /**
     * Properties of a CSVCMsg_UpdateStringTable.
     * @exports ICSVCMsg_UpdateStringTable
     * @interface ICSVCMsg_UpdateStringTable
     * @property {number|null} [tableId] CSVCMsg_UpdateStringTable tableId
     * @property {number|null} [numChangedEntries] CSVCMsg_UpdateStringTable numChangedEntries
     * @property {Uint8Array|null} [stringData] CSVCMsg_UpdateStringTable stringData
     */
    /**
     * Constructs a new CSVCMsg_UpdateStringTable.
     * @exports CSVCMsg_UpdateStringTable
     * @classdesc Represents a CSVCMsg_UpdateStringTable.
     * @implements ICSVCMsg_UpdateStringTable
     * @constructor
     * @param {ICSVCMsg_UpdateStringTable=} [properties] Properties to set
     */
    function CSVCMsg_UpdateStringTable(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_UpdateStringTable tableId.
     * @member {number} tableId
     * @memberof CSVCMsg_UpdateStringTable
     * @instance
     */
    CSVCMsg_UpdateStringTable.prototype.tableId = 0;
    /**
     * CSVCMsg_UpdateStringTable numChangedEntries.
     * @member {number} numChangedEntries
     * @memberof CSVCMsg_UpdateStringTable
     * @instance
     */
    CSVCMsg_UpdateStringTable.prototype.numChangedEntries = 0;
    /**
     * CSVCMsg_UpdateStringTable stringData.
     * @member {Uint8Array} stringData
     * @memberof CSVCMsg_UpdateStringTable
     * @instance
     */
    CSVCMsg_UpdateStringTable.prototype.stringData = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_UpdateStringTable message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_UpdateStringTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_UpdateStringTable} CSVCMsg_UpdateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_UpdateStringTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_UpdateStringTable();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_UpdateStringTable;
})());
exports.CSVCMsg_VoiceInit = ($root.CSVCMsg_VoiceInit = (() => {
    /**
     * Properties of a CSVCMsg_VoiceInit.
     * @exports ICSVCMsg_VoiceInit
     * @interface ICSVCMsg_VoiceInit
     * @property {number|null} [quality] CSVCMsg_VoiceInit quality
     * @property {string|null} [codec] CSVCMsg_VoiceInit codec
     * @property {number|null} [version] CSVCMsg_VoiceInit version
     */
    /**
     * Constructs a new CSVCMsg_VoiceInit.
     * @exports CSVCMsg_VoiceInit
     * @classdesc Represents a CSVCMsg_VoiceInit.
     * @implements ICSVCMsg_VoiceInit
     * @constructor
     * @param {ICSVCMsg_VoiceInit=} [properties] Properties to set
     */
    function CSVCMsg_VoiceInit(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_VoiceInit quality.
     * @member {number} quality
     * @memberof CSVCMsg_VoiceInit
     * @instance
     */
    CSVCMsg_VoiceInit.prototype.quality = 0;
    /**
     * CSVCMsg_VoiceInit codec.
     * @member {string} codec
     * @memberof CSVCMsg_VoiceInit
     * @instance
     */
    CSVCMsg_VoiceInit.prototype.codec = "";
    /**
     * CSVCMsg_VoiceInit version.
     * @member {number} version
     * @memberof CSVCMsg_VoiceInit
     * @instance
     */
    CSVCMsg_VoiceInit.prototype.version = 0;
    /**
     * Decodes a CSVCMsg_VoiceInit message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_VoiceInit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_VoiceInit} CSVCMsg_VoiceInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_VoiceInit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_VoiceInit();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_VoiceInit;
})());
exports.CSVCMsg_VoiceData = ($root.CSVCMsg_VoiceData = (() => {
    /**
     * Properties of a CSVCMsg_VoiceData.
     * @exports ICSVCMsg_VoiceData
     * @interface ICSVCMsg_VoiceData
     * @property {number|null} [client] CSVCMsg_VoiceData client
     * @property {boolean|null} [proximity] CSVCMsg_VoiceData proximity
     * @property {number|Long|null} [xuid] CSVCMsg_VoiceData xuid
     * @property {number|null} [audibleMask] CSVCMsg_VoiceData audibleMask
     * @property {Uint8Array|null} [voiceData] CSVCMsg_VoiceData voiceData
     * @property {boolean|null} [caster] CSVCMsg_VoiceData caster
     * @property {VoiceDataFormat_t|null} [format] CSVCMsg_VoiceData format
     * @property {number|null} [sequenceBytes] CSVCMsg_VoiceData sequenceBytes
     * @property {number|null} [sectionNumber] CSVCMsg_VoiceData sectionNumber
     * @property {number|null} [uncompressedSampleOffset] CSVCMsg_VoiceData uncompressedSampleOffset
     */
    /**
     * Constructs a new CSVCMsg_VoiceData.
     * @exports CSVCMsg_VoiceData
     * @classdesc Represents a CSVCMsg_VoiceData.
     * @implements ICSVCMsg_VoiceData
     * @constructor
     * @param {ICSVCMsg_VoiceData=} [properties] Properties to set
     */
    function CSVCMsg_VoiceData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_VoiceData client.
     * @member {number} client
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.client = 0;
    /**
     * CSVCMsg_VoiceData proximity.
     * @member {boolean} proximity
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.proximity = false;
    /**
     * CSVCMsg_VoiceData xuid.
     * @member {number|Long} xuid
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.xuid = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
    /**
     * CSVCMsg_VoiceData audibleMask.
     * @member {number} audibleMask
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.audibleMask = 0;
    /**
     * CSVCMsg_VoiceData voiceData.
     * @member {Uint8Array} voiceData
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.voiceData = $util.newBuffer([]);
    /**
     * CSVCMsg_VoiceData caster.
     * @member {boolean} caster
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.caster = false;
    /**
     * CSVCMsg_VoiceData format.
     * @member {VoiceDataFormat_t} format
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.format = 1;
    /**
     * CSVCMsg_VoiceData sequenceBytes.
     * @member {number} sequenceBytes
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.sequenceBytes = 0;
    /**
     * CSVCMsg_VoiceData sectionNumber.
     * @member {number} sectionNumber
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.sectionNumber = 0;
    /**
     * CSVCMsg_VoiceData uncompressedSampleOffset.
     * @member {number} uncompressedSampleOffset
     * @memberof CSVCMsg_VoiceData
     * @instance
     */
    CSVCMsg_VoiceData.prototype.uncompressedSampleOffset = 0;
    /**
     * Decodes a CSVCMsg_VoiceData message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_VoiceData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_VoiceData} CSVCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_VoiceData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_VoiceData();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_VoiceData;
})());
exports.CSVCMsg_FixAngle = ($root.CSVCMsg_FixAngle = (() => {
    /**
     * Properties of a CSVCMsg_FixAngle.
     * @exports ICSVCMsg_FixAngle
     * @interface ICSVCMsg_FixAngle
     * @property {boolean|null} [relative] CSVCMsg_FixAngle relative
     * @property {ICMsgQAngle|null} [angle] CSVCMsg_FixAngle angle
     */
    /**
     * Constructs a new CSVCMsg_FixAngle.
     * @exports CSVCMsg_FixAngle
     * @classdesc Represents a CSVCMsg_FixAngle.
     * @implements ICSVCMsg_FixAngle
     * @constructor
     * @param {ICSVCMsg_FixAngle=} [properties] Properties to set
     */
    function CSVCMsg_FixAngle(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_FixAngle relative.
     * @member {boolean} relative
     * @memberof CSVCMsg_FixAngle
     * @instance
     */
    CSVCMsg_FixAngle.prototype.relative = false;
    /**
     * CSVCMsg_FixAngle angle.
     * @member {ICMsgQAngle|null|undefined} angle
     * @memberof CSVCMsg_FixAngle
     * @instance
     */
    CSVCMsg_FixAngle.prototype.angle = null;
    /**
     * Decodes a CSVCMsg_FixAngle message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_FixAngle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_FixAngle} CSVCMsg_FixAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_FixAngle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_FixAngle();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relative = reader.bool();
                    break;
                case 2:
                    message.angle = $root.CMsgQAngle.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CSVCMsg_FixAngle;
})());
exports.CSVCMsg_CrosshairAngle = ($root.CSVCMsg_CrosshairAngle = (() => {
    /**
     * Properties of a CSVCMsg_CrosshairAngle.
     * @exports ICSVCMsg_CrosshairAngle
     * @interface ICSVCMsg_CrosshairAngle
     * @property {ICMsgQAngle|null} [angle] CSVCMsg_CrosshairAngle angle
     */
    /**
     * Constructs a new CSVCMsg_CrosshairAngle.
     * @exports CSVCMsg_CrosshairAngle
     * @classdesc Represents a CSVCMsg_CrosshairAngle.
     * @implements ICSVCMsg_CrosshairAngle
     * @constructor
     * @param {ICSVCMsg_CrosshairAngle=} [properties] Properties to set
     */
    function CSVCMsg_CrosshairAngle(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_CrosshairAngle angle.
     * @member {ICMsgQAngle|null|undefined} angle
     * @memberof CSVCMsg_CrosshairAngle
     * @instance
     */
    CSVCMsg_CrosshairAngle.prototype.angle = null;
    /**
     * Decodes a CSVCMsg_CrosshairAngle message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_CrosshairAngle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_CrosshairAngle} CSVCMsg_CrosshairAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_CrosshairAngle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_CrosshairAngle();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.angle = $root.CMsgQAngle.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    return CSVCMsg_CrosshairAngle;
})());
exports.CSVCMsg_Prefetch = ($root.CSVCMsg_Prefetch = (() => {
    /**
     * Properties of a CSVCMsg_Prefetch.
     * @exports ICSVCMsg_Prefetch
     * @interface ICSVCMsg_Prefetch
     * @property {number|null} [soundIndex] CSVCMsg_Prefetch soundIndex
     */
    /**
     * Constructs a new CSVCMsg_Prefetch.
     * @exports CSVCMsg_Prefetch
     * @classdesc Represents a CSVCMsg_Prefetch.
     * @implements ICSVCMsg_Prefetch
     * @constructor
     * @param {ICSVCMsg_Prefetch=} [properties] Properties to set
     */
    function CSVCMsg_Prefetch(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_Prefetch soundIndex.
     * @member {number} soundIndex
     * @memberof CSVCMsg_Prefetch
     * @instance
     */
    CSVCMsg_Prefetch.prototype.soundIndex = 0;
    /**
     * Decodes a CSVCMsg_Prefetch message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_Prefetch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_Prefetch} CSVCMsg_Prefetch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_Prefetch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_Prefetch();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_Prefetch;
})());
exports.CSVCMsg_BSPDecal = ($root.CSVCMsg_BSPDecal = (() => {
    /**
     * Properties of a CSVCMsg_BSPDecal.
     * @exports ICSVCMsg_BSPDecal
     * @interface ICSVCMsg_BSPDecal
     * @property {ICMsgVector|null} [pos] CSVCMsg_BSPDecal pos
     * @property {number|null} [decalTextureIndex] CSVCMsg_BSPDecal decalTextureIndex
     * @property {number|null} [entityIndex] CSVCMsg_BSPDecal entityIndex
     * @property {number|null} [modelIndex] CSVCMsg_BSPDecal modelIndex
     * @property {boolean|null} [lowPriority] CSVCMsg_BSPDecal lowPriority
     */
    /**
     * Constructs a new CSVCMsg_BSPDecal.
     * @exports CSVCMsg_BSPDecal
     * @classdesc Represents a CSVCMsg_BSPDecal.
     * @implements ICSVCMsg_BSPDecal
     * @constructor
     * @param {ICSVCMsg_BSPDecal=} [properties] Properties to set
     */
    function CSVCMsg_BSPDecal(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_BSPDecal pos.
     * @member {ICMsgVector|null|undefined} pos
     * @memberof CSVCMsg_BSPDecal
     * @instance
     */
    CSVCMsg_BSPDecal.prototype.pos = null;
    /**
     * CSVCMsg_BSPDecal decalTextureIndex.
     * @member {number} decalTextureIndex
     * @memberof CSVCMsg_BSPDecal
     * @instance
     */
    CSVCMsg_BSPDecal.prototype.decalTextureIndex = 0;
    /**
     * CSVCMsg_BSPDecal entityIndex.
     * @member {number} entityIndex
     * @memberof CSVCMsg_BSPDecal
     * @instance
     */
    CSVCMsg_BSPDecal.prototype.entityIndex = 0;
    /**
     * CSVCMsg_BSPDecal modelIndex.
     * @member {number} modelIndex
     * @memberof CSVCMsg_BSPDecal
     * @instance
     */
    CSVCMsg_BSPDecal.prototype.modelIndex = 0;
    /**
     * CSVCMsg_BSPDecal lowPriority.
     * @member {boolean} lowPriority
     * @memberof CSVCMsg_BSPDecal
     * @instance
     */
    CSVCMsg_BSPDecal.prototype.lowPriority = false;
    /**
     * Decodes a CSVCMsg_BSPDecal message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_BSPDecal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_BSPDecal} CSVCMsg_BSPDecal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_BSPDecal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_BSPDecal();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pos = $root.CMsgVector.decode(reader, reader.uint32());
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
    };
    return CSVCMsg_BSPDecal;
})());
exports.CSVCMsg_SplitScreen = ($root.CSVCMsg_SplitScreen = (() => {
    /**
     * Properties of a CSVCMsg_SplitScreen.
     * @exports ICSVCMsg_SplitScreen
     * @interface ICSVCMsg_SplitScreen
     * @property {ESplitScreenMessageType|null} [type] CSVCMsg_SplitScreen type
     * @property {number|null} [slot] CSVCMsg_SplitScreen slot
     * @property {number|null} [playerIndex] CSVCMsg_SplitScreen playerIndex
     */
    /**
     * Constructs a new CSVCMsg_SplitScreen.
     * @exports CSVCMsg_SplitScreen
     * @classdesc Represents a CSVCMsg_SplitScreen.
     * @implements ICSVCMsg_SplitScreen
     * @constructor
     * @param {ICSVCMsg_SplitScreen=} [properties] Properties to set
     */
    function CSVCMsg_SplitScreen(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_SplitScreen type.
     * @member {ESplitScreenMessageType} type
     * @memberof CSVCMsg_SplitScreen
     * @instance
     */
    CSVCMsg_SplitScreen.prototype.type = 0;
    /**
     * CSVCMsg_SplitScreen slot.
     * @member {number} slot
     * @memberof CSVCMsg_SplitScreen
     * @instance
     */
    CSVCMsg_SplitScreen.prototype.slot = 0;
    /**
     * CSVCMsg_SplitScreen playerIndex.
     * @member {number} playerIndex
     * @memberof CSVCMsg_SplitScreen
     * @instance
     */
    CSVCMsg_SplitScreen.prototype.playerIndex = 0;
    /**
     * Decodes a CSVCMsg_SplitScreen message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_SplitScreen
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_SplitScreen} CSVCMsg_SplitScreen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_SplitScreen.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_SplitScreen();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_SplitScreen;
})());
exports.CSVCMsg_GetCvarValue = ($root.CSVCMsg_GetCvarValue = (() => {
    /**
     * Properties of a CSVCMsg_GetCvarValue.
     * @exports ICSVCMsg_GetCvarValue
     * @interface ICSVCMsg_GetCvarValue
     * @property {number|null} [cookie] CSVCMsg_GetCvarValue cookie
     * @property {string|null} [cvarName] CSVCMsg_GetCvarValue cvarName
     */
    /**
     * Constructs a new CSVCMsg_GetCvarValue.
     * @exports CSVCMsg_GetCvarValue
     * @classdesc Represents a CSVCMsg_GetCvarValue.
     * @implements ICSVCMsg_GetCvarValue
     * @constructor
     * @param {ICSVCMsg_GetCvarValue=} [properties] Properties to set
     */
    function CSVCMsg_GetCvarValue(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_GetCvarValue cookie.
     * @member {number} cookie
     * @memberof CSVCMsg_GetCvarValue
     * @instance
     */
    CSVCMsg_GetCvarValue.prototype.cookie = 0;
    /**
     * CSVCMsg_GetCvarValue cvarName.
     * @member {string} cvarName
     * @memberof CSVCMsg_GetCvarValue
     * @instance
     */
    CSVCMsg_GetCvarValue.prototype.cvarName = "";
    /**
     * Decodes a CSVCMsg_GetCvarValue message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_GetCvarValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_GetCvarValue} CSVCMsg_GetCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_GetCvarValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GetCvarValue();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_GetCvarValue;
})());
exports.CSVCMsg_Menu = ($root.CSVCMsg_Menu = (() => {
    /**
     * Properties of a CSVCMsg_Menu.
     * @exports ICSVCMsg_Menu
     * @interface ICSVCMsg_Menu
     * @property {number|null} [dialogType] CSVCMsg_Menu dialogType
     * @property {Uint8Array|null} [menuKeyValues] CSVCMsg_Menu menuKeyValues
     */
    /**
     * Constructs a new CSVCMsg_Menu.
     * @exports CSVCMsg_Menu
     * @classdesc Represents a CSVCMsg_Menu.
     * @implements ICSVCMsg_Menu
     * @constructor
     * @param {ICSVCMsg_Menu=} [properties] Properties to set
     */
    function CSVCMsg_Menu(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_Menu dialogType.
     * @member {number} dialogType
     * @memberof CSVCMsg_Menu
     * @instance
     */
    CSVCMsg_Menu.prototype.dialogType = 0;
    /**
     * CSVCMsg_Menu menuKeyValues.
     * @member {Uint8Array} menuKeyValues
     * @memberof CSVCMsg_Menu
     * @instance
     */
    CSVCMsg_Menu.prototype.menuKeyValues = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_Menu message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_Menu
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_Menu} CSVCMsg_Menu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_Menu.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_Menu();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_Menu;
})());
exports.CSVCMsg_UserMessage = ($root.CSVCMsg_UserMessage = (() => {
    /**
     * Properties of a CSVCMsg_UserMessage.
     * @exports ICSVCMsg_UserMessage
     * @interface ICSVCMsg_UserMessage
     * @property {number|null} [msgType] CSVCMsg_UserMessage msgType
     * @property {Uint8Array|null} [msgData] CSVCMsg_UserMessage msgData
     * @property {number|null} [passthrough] CSVCMsg_UserMessage passthrough
     */
    /**
     * Constructs a new CSVCMsg_UserMessage.
     * @exports CSVCMsg_UserMessage
     * @classdesc Represents a CSVCMsg_UserMessage.
     * @implements ICSVCMsg_UserMessage
     * @constructor
     * @param {ICSVCMsg_UserMessage=} [properties] Properties to set
     */
    function CSVCMsg_UserMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_UserMessage msgType.
     * @member {number} msgType
     * @memberof CSVCMsg_UserMessage
     * @instance
     */
    CSVCMsg_UserMessage.prototype.msgType = 0;
    /**
     * CSVCMsg_UserMessage msgData.
     * @member {Uint8Array} msgData
     * @memberof CSVCMsg_UserMessage
     * @instance
     */
    CSVCMsg_UserMessage.prototype.msgData = $util.newBuffer([]);
    /**
     * CSVCMsg_UserMessage passthrough.
     * @member {number} passthrough
     * @memberof CSVCMsg_UserMessage
     * @instance
     */
    CSVCMsg_UserMessage.prototype.passthrough = 0;
    /**
     * Decodes a CSVCMsg_UserMessage message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_UserMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_UserMessage} CSVCMsg_UserMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_UserMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_UserMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_UserMessage;
})());
exports.CSVCMsg_PaintmapData = ($root.CSVCMsg_PaintmapData = (() => {
    /**
     * Properties of a CSVCMsg_PaintmapData.
     * @exports ICSVCMsg_PaintmapData
     * @interface ICSVCMsg_PaintmapData
     * @property {Uint8Array|null} [paintmap] CSVCMsg_PaintmapData paintmap
     */
    /**
     * Constructs a new CSVCMsg_PaintmapData.
     * @exports CSVCMsg_PaintmapData
     * @classdesc Represents a CSVCMsg_PaintmapData.
     * @implements ICSVCMsg_PaintmapData
     * @constructor
     * @param {ICSVCMsg_PaintmapData=} [properties] Properties to set
     */
    function CSVCMsg_PaintmapData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_PaintmapData paintmap.
     * @member {Uint8Array} paintmap
     * @memberof CSVCMsg_PaintmapData
     * @instance
     */
    CSVCMsg_PaintmapData.prototype.paintmap = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_PaintmapData message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_PaintmapData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_PaintmapData} CSVCMsg_PaintmapData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_PaintmapData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_PaintmapData();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_PaintmapData;
})());
exports.CSVCMsg_GameEvent = ($root.CSVCMsg_GameEvent = (() => {
    /**
     * Properties of a CSVCMsg_GameEvent.
     * @exports ICSVCMsg_GameEvent
     * @interface ICSVCMsg_GameEvent
     * @property {string|null} [eventName] CSVCMsg_GameEvent eventName
     * @property {number|null} [eventid] CSVCMsg_GameEvent eventid
     * @property {Array.<CSVCMsg_GameEvent.Ikey_t>|null} [keys] CSVCMsg_GameEvent keys
     * @property {number|null} [passthrough] CSVCMsg_GameEvent passthrough
     */
    /**
     * Constructs a new CSVCMsg_GameEvent.
     * @exports CSVCMsg_GameEvent
     * @classdesc Represents a CSVCMsg_GameEvent.
     * @implements ICSVCMsg_GameEvent
     * @constructor
     * @param {ICSVCMsg_GameEvent=} [properties] Properties to set
     */
    function CSVCMsg_GameEvent(properties) {
        this.keys = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_GameEvent eventName.
     * @member {string} eventName
     * @memberof CSVCMsg_GameEvent
     * @instance
     */
    CSVCMsg_GameEvent.prototype.eventName = "";
    /**
     * CSVCMsg_GameEvent eventid.
     * @member {number} eventid
     * @memberof CSVCMsg_GameEvent
     * @instance
     */
    CSVCMsg_GameEvent.prototype.eventid = 0;
    /**
     * CSVCMsg_GameEvent keys.
     * @member {Array.<CSVCMsg_GameEvent.Ikey_t>} keys
     * @memberof CSVCMsg_GameEvent
     * @instance
     */
    CSVCMsg_GameEvent.prototype.keys = $util.emptyArray;
    /**
     * CSVCMsg_GameEvent passthrough.
     * @member {number} passthrough
     * @memberof CSVCMsg_GameEvent
     * @instance
     */
    CSVCMsg_GameEvent.prototype.passthrough = 0;
    /**
     * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_GameEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_GameEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEvent();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventName = reader.string();
                    break;
                case 2:
                    message.eventid = reader.int32();
                    break;
                case 3:
                    if (!(message.keys && message.keys.length))
                        message.keys = [];
                    message.keys.push($root.CSVCMsg_GameEvent.key_t.decode(reader, reader.uint32()));
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
    };
    CSVCMsg_GameEvent.key_t = (function () {
        /**
         * Properties of a key_t.
         * @memberof CSVCMsg_GameEvent
         * @interface Ikey_t
         * @property {number|null} [type] key_t type
         * @property {string|null} [valString] key_t valString
         * @property {number|null} [valFloat] key_t valFloat
         * @property {number|null} [valLong] key_t valLong
         * @property {number|null} [valShort] key_t valShort
         * @property {number|null} [valByte] key_t valByte
         * @property {boolean|null} [valBool] key_t valBool
         * @property {number|Long|null} [valUint64] key_t valUint64
         * @property {Uint8Array|null} [valWstring] key_t valWstring
         */
        /**
         * Constructs a new key_t.
         * @memberof CSVCMsg_GameEvent
         * @classdesc Represents a key_t.
         * @implements Ikey_t
         * @constructor
         * @param {CSVCMsg_GameEvent.Ikey_t=} [properties] Properties to set
         */
        function key_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * key_t type.
         * @member {number} type
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.type = 0;
        /**
         * key_t valString.
         * @member {string} valString
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valString = "";
        /**
         * key_t valFloat.
         * @member {number} valFloat
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valFloat = 0;
        /**
         * key_t valLong.
         * @member {number} valLong
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valLong = 0;
        /**
         * key_t valShort.
         * @member {number} valShort
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valShort = 0;
        /**
         * key_t valByte.
         * @member {number} valByte
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valByte = 0;
        /**
         * key_t valBool.
         * @member {boolean} valBool
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valBool = false;
        /**
         * key_t valUint64.
         * @member {number|Long} valUint64
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valUint64 = $util.Long
            ? $util.Long.fromBits(0, 0, true)
            : 0;
        /**
         * key_t valWstring.
         * @member {Uint8Array} valWstring
         * @memberof CSVCMsg_GameEvent.key_t
         * @instance
         */
        key_t.prototype.valWstring = $util.newBuffer([]);
        /**
         * Decodes a key_t message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameEvent.key_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameEvent.key_t} key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        key_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEvent.key_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };
        return key_t;
    })();
    return CSVCMsg_GameEvent;
})());
exports.CSVCMsg_GameEventList = ($root.CSVCMsg_GameEventList = (() => {
    /**
     * Properties of a CSVCMsg_GameEventList.
     * @exports ICSVCMsg_GameEventList
     * @interface ICSVCMsg_GameEventList
     * @property {Array.<CSVCMsg_GameEventList.Idescriptor_t>|null} [descriptors] CSVCMsg_GameEventList descriptors
     */
    /**
     * Constructs a new CSVCMsg_GameEventList.
     * @exports CSVCMsg_GameEventList
     * @classdesc Represents a CSVCMsg_GameEventList.
     * @implements ICSVCMsg_GameEventList
     * @constructor
     * @param {ICSVCMsg_GameEventList=} [properties] Properties to set
     */
    function CSVCMsg_GameEventList(properties) {
        this.descriptors = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_GameEventList descriptors.
     * @member {Array.<CSVCMsg_GameEventList.Idescriptor_t>} descriptors
     * @memberof CSVCMsg_GameEventList
     * @instance
     */
    CSVCMsg_GameEventList.prototype.descriptors = $util.emptyArray;
    /**
     * Decodes a CSVCMsg_GameEventList message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_GameEventList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_GameEventList} CSVCMsg_GameEventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_GameEventList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEventList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.descriptors && message.descriptors.length))
                        message.descriptors = [];
                    message.descriptors.push($root.CSVCMsg_GameEventList.descriptor_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    CSVCMsg_GameEventList.key_t = (function () {
        /**
         * Properties of a key_t.
         * @memberof CSVCMsg_GameEventList
         * @interface Ikey_t
         * @property {number|null} [type] key_t type
         * @property {string|null} [name] key_t name
         */
        /**
         * Constructs a new key_t.
         * @memberof CSVCMsg_GameEventList
         * @classdesc Represents a key_t.
         * @implements Ikey_t
         * @constructor
         * @param {CSVCMsg_GameEventList.Ikey_t=} [properties] Properties to set
         */
        function key_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * key_t type.
         * @member {number} type
         * @memberof CSVCMsg_GameEventList.key_t
         * @instance
         */
        key_t.prototype.type = 0;
        /**
         * key_t name.
         * @member {string} name
         * @memberof CSVCMsg_GameEventList.key_t
         * @instance
         */
        key_t.prototype.name = "";
        /**
         * Decodes a key_t message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameEventList.key_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameEventList.key_t} key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        key_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEventList.key_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };
        return key_t;
    })();
    CSVCMsg_GameEventList.descriptor_t = (function () {
        /**
         * Properties of a descriptor_t.
         * @memberof CSVCMsg_GameEventList
         * @interface Idescriptor_t
         * @property {number|null} [eventid] descriptor_t eventid
         * @property {string|null} [name] descriptor_t name
         * @property {Array.<CSVCMsg_GameEventList.Ikey_t>|null} [keys] descriptor_t keys
         */
        /**
         * Constructs a new descriptor_t.
         * @memberof CSVCMsg_GameEventList
         * @classdesc Represents a descriptor_t.
         * @implements Idescriptor_t
         * @constructor
         * @param {CSVCMsg_GameEventList.Idescriptor_t=} [properties] Properties to set
         */
        function descriptor_t(properties) {
            this.keys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * descriptor_t eventid.
         * @member {number} eventid
         * @memberof CSVCMsg_GameEventList.descriptor_t
         * @instance
         */
        descriptor_t.prototype.eventid = 0;
        /**
         * descriptor_t name.
         * @member {string} name
         * @memberof CSVCMsg_GameEventList.descriptor_t
         * @instance
         */
        descriptor_t.prototype.name = "";
        /**
         * descriptor_t keys.
         * @member {Array.<CSVCMsg_GameEventList.Ikey_t>} keys
         * @memberof CSVCMsg_GameEventList.descriptor_t
         * @instance
         */
        descriptor_t.prototype.keys = $util.emptyArray;
        /**
         * Decodes a descriptor_t message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameEventList.descriptor_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameEventList.descriptor_t} descriptor_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        descriptor_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEventList.descriptor_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.eventid = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push($root.CSVCMsg_GameEventList.key_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        return descriptor_t;
    })();
    return CSVCMsg_GameEventList;
})());
exports.CSVCMsg_TempEntities = ($root.CSVCMsg_TempEntities = (() => {
    /**
     * Properties of a CSVCMsg_TempEntities.
     * @exports ICSVCMsg_TempEntities
     * @interface ICSVCMsg_TempEntities
     * @property {boolean|null} [reliable] CSVCMsg_TempEntities reliable
     * @property {number|null} [numEntries] CSVCMsg_TempEntities numEntries
     * @property {Uint8Array|null} [entityData] CSVCMsg_TempEntities entityData
     */
    /**
     * Constructs a new CSVCMsg_TempEntities.
     * @exports CSVCMsg_TempEntities
     * @classdesc Represents a CSVCMsg_TempEntities.
     * @implements ICSVCMsg_TempEntities
     * @constructor
     * @param {ICSVCMsg_TempEntities=} [properties] Properties to set
     */
    function CSVCMsg_TempEntities(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_TempEntities reliable.
     * @member {boolean} reliable
     * @memberof CSVCMsg_TempEntities
     * @instance
     */
    CSVCMsg_TempEntities.prototype.reliable = false;
    /**
     * CSVCMsg_TempEntities numEntries.
     * @member {number} numEntries
     * @memberof CSVCMsg_TempEntities
     * @instance
     */
    CSVCMsg_TempEntities.prototype.numEntries = 0;
    /**
     * CSVCMsg_TempEntities entityData.
     * @member {Uint8Array} entityData
     * @memberof CSVCMsg_TempEntities
     * @instance
     */
    CSVCMsg_TempEntities.prototype.entityData = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_TempEntities message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_TempEntities
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_TempEntities} CSVCMsg_TempEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_TempEntities.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_TempEntities();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_TempEntities;
})());
exports.CSVCMsg_PacketEntities = ($root.CSVCMsg_PacketEntities = (() => {
    /**
     * Properties of a CSVCMsg_PacketEntities.
     * @exports ICSVCMsg_PacketEntities
     * @interface ICSVCMsg_PacketEntities
     * @property {number|null} [maxEntries] CSVCMsg_PacketEntities maxEntries
     * @property {number|null} [updatedEntries] CSVCMsg_PacketEntities updatedEntries
     * @property {boolean|null} [isDelta] CSVCMsg_PacketEntities isDelta
     * @property {boolean|null} [updateBaseline] CSVCMsg_PacketEntities updateBaseline
     * @property {number|null} [baseline] CSVCMsg_PacketEntities baseline
     * @property {number|null} [deltaFrom] CSVCMsg_PacketEntities deltaFrom
     * @property {Uint8Array|null} [entityData] CSVCMsg_PacketEntities entityData
     */
    /**
     * Constructs a new CSVCMsg_PacketEntities.
     * @exports CSVCMsg_PacketEntities
     * @classdesc Represents a CSVCMsg_PacketEntities.
     * @implements ICSVCMsg_PacketEntities
     * @constructor
     * @param {ICSVCMsg_PacketEntities=} [properties] Properties to set
     */
    function CSVCMsg_PacketEntities(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_PacketEntities maxEntries.
     * @member {number} maxEntries
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.maxEntries = 0;
    /**
     * CSVCMsg_PacketEntities updatedEntries.
     * @member {number} updatedEntries
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.updatedEntries = 0;
    /**
     * CSVCMsg_PacketEntities isDelta.
     * @member {boolean} isDelta
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.isDelta = false;
    /**
     * CSVCMsg_PacketEntities updateBaseline.
     * @member {boolean} updateBaseline
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.updateBaseline = false;
    /**
     * CSVCMsg_PacketEntities baseline.
     * @member {number} baseline
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.baseline = 0;
    /**
     * CSVCMsg_PacketEntities deltaFrom.
     * @member {number} deltaFrom
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.deltaFrom = 0;
    /**
     * CSVCMsg_PacketEntities entityData.
     * @member {Uint8Array} entityData
     * @memberof CSVCMsg_PacketEntities
     * @instance
     */
    CSVCMsg_PacketEntities.prototype.entityData = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_PacketEntities message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_PacketEntities
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_PacketEntities} CSVCMsg_PacketEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_PacketEntities.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_PacketEntities();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_PacketEntities;
})());
exports.CSVCMsg_Sounds = ($root.CSVCMsg_Sounds = (() => {
    /**
     * Properties of a CSVCMsg_Sounds.
     * @exports ICSVCMsg_Sounds
     * @interface ICSVCMsg_Sounds
     * @property {boolean|null} [reliableSound] CSVCMsg_Sounds reliableSound
     * @property {Array.<CSVCMsg_Sounds.Isounddata_t>|null} [sounds] CSVCMsg_Sounds sounds
     */
    /**
     * Constructs a new CSVCMsg_Sounds.
     * @exports CSVCMsg_Sounds
     * @classdesc Represents a CSVCMsg_Sounds.
     * @implements ICSVCMsg_Sounds
     * @constructor
     * @param {ICSVCMsg_Sounds=} [properties] Properties to set
     */
    function CSVCMsg_Sounds(properties) {
        this.sounds = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_Sounds reliableSound.
     * @member {boolean} reliableSound
     * @memberof CSVCMsg_Sounds
     * @instance
     */
    CSVCMsg_Sounds.prototype.reliableSound = false;
    /**
     * CSVCMsg_Sounds sounds.
     * @member {Array.<CSVCMsg_Sounds.Isounddata_t>} sounds
     * @memberof CSVCMsg_Sounds
     * @instance
     */
    CSVCMsg_Sounds.prototype.sounds = $util.emptyArray;
    /**
     * Decodes a CSVCMsg_Sounds message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_Sounds
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_Sounds} CSVCMsg_Sounds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_Sounds.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_Sounds();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reliableSound = reader.bool();
                    break;
                case 2:
                    if (!(message.sounds && message.sounds.length))
                        message.sounds = [];
                    message.sounds.push($root.CSVCMsg_Sounds.sounddata_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    CSVCMsg_Sounds.sounddata_t = (function () {
        /**
         * Properties of a sounddata_t.
         * @memberof CSVCMsg_Sounds
         * @interface Isounddata_t
         * @property {number|null} [originX] sounddata_t originX
         * @property {number|null} [originY] sounddata_t originY
         * @property {number|null} [originZ] sounddata_t originZ
         * @property {number|null} [volume] sounddata_t volume
         * @property {number|null} [delayValue] sounddata_t delayValue
         * @property {number|null} [sequenceNumber] sounddata_t sequenceNumber
         * @property {number|null} [entityIndex] sounddata_t entityIndex
         * @property {number|null} [channel] sounddata_t channel
         * @property {number|null} [pitch] sounddata_t pitch
         * @property {number|null} [flags] sounddata_t flags
         * @property {number|null} [soundNum] sounddata_t soundNum
         * @property {number|null} [soundNumHandle] sounddata_t soundNumHandle
         * @property {number|null} [speakerEntity] sounddata_t speakerEntity
         * @property {number|null} [randomSeed] sounddata_t randomSeed
         * @property {number|null} [soundLevel] sounddata_t soundLevel
         * @property {boolean|null} [isSentence] sounddata_t isSentence
         * @property {boolean|null} [isAmbient] sounddata_t isAmbient
         */
        /**
         * Constructs a new sounddata_t.
         * @memberof CSVCMsg_Sounds
         * @classdesc Represents a sounddata_t.
         * @implements Isounddata_t
         * @constructor
         * @param {CSVCMsg_Sounds.Isounddata_t=} [properties] Properties to set
         */
        function sounddata_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        /**
         * sounddata_t originX.
         * @member {number} originX
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.originX = 0;
        /**
         * sounddata_t originY.
         * @member {number} originY
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.originY = 0;
        /**
         * sounddata_t originZ.
         * @member {number} originZ
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.originZ = 0;
        /**
         * sounddata_t volume.
         * @member {number} volume
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.volume = 0;
        /**
         * sounddata_t delayValue.
         * @member {number} delayValue
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.delayValue = 0;
        /**
         * sounddata_t sequenceNumber.
         * @member {number} sequenceNumber
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.sequenceNumber = 0;
        /**
         * sounddata_t entityIndex.
         * @member {number} entityIndex
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.entityIndex = 0;
        /**
         * sounddata_t channel.
         * @member {number} channel
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.channel = 0;
        /**
         * sounddata_t pitch.
         * @member {number} pitch
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.pitch = 0;
        /**
         * sounddata_t flags.
         * @member {number} flags
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.flags = 0;
        /**
         * sounddata_t soundNum.
         * @member {number} soundNum
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.soundNum = 0;
        /**
         * sounddata_t soundNumHandle.
         * @member {number} soundNumHandle
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.soundNumHandle = 0;
        /**
         * sounddata_t speakerEntity.
         * @member {number} speakerEntity
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.speakerEntity = 0;
        /**
         * sounddata_t randomSeed.
         * @member {number} randomSeed
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.randomSeed = 0;
        /**
         * sounddata_t soundLevel.
         * @member {number} soundLevel
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.soundLevel = 0;
        /**
         * sounddata_t isSentence.
         * @member {boolean} isSentence
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.isSentence = false;
        /**
         * sounddata_t isAmbient.
         * @member {boolean} isAmbient
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @instance
         */
        sounddata_t.prototype.isAmbient = false;
        /**
         * Decodes a sounddata_t message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_Sounds.sounddata_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_Sounds.sounddata_t} sounddata_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sounddata_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_Sounds.sounddata_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };
        return sounddata_t;
    })();
    return CSVCMsg_Sounds;
})());
exports.CSVCMsg_EntityMsg = ($root.CSVCMsg_EntityMsg = (() => {
    /**
     * Properties of a CSVCMsg_EntityMsg.
     * @exports ICSVCMsg_EntityMsg
     * @interface ICSVCMsg_EntityMsg
     * @property {number|null} [entIndex] CSVCMsg_EntityMsg entIndex
     * @property {number|null} [classId] CSVCMsg_EntityMsg classId
     * @property {Uint8Array|null} [entData] CSVCMsg_EntityMsg entData
     */
    /**
     * Constructs a new CSVCMsg_EntityMsg.
     * @exports CSVCMsg_EntityMsg
     * @classdesc Represents a CSVCMsg_EntityMsg.
     * @implements ICSVCMsg_EntityMsg
     * @constructor
     * @param {ICSVCMsg_EntityMsg=} [properties] Properties to set
     */
    function CSVCMsg_EntityMsg(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_EntityMsg entIndex.
     * @member {number} entIndex
     * @memberof CSVCMsg_EntityMsg
     * @instance
     */
    CSVCMsg_EntityMsg.prototype.entIndex = 0;
    /**
     * CSVCMsg_EntityMsg classId.
     * @member {number} classId
     * @memberof CSVCMsg_EntityMsg
     * @instance
     */
    CSVCMsg_EntityMsg.prototype.classId = 0;
    /**
     * CSVCMsg_EntityMsg entData.
     * @member {Uint8Array} entData
     * @memberof CSVCMsg_EntityMsg
     * @instance
     */
    CSVCMsg_EntityMsg.prototype.entData = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_EntityMsg message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_EntityMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_EntityMsg} CSVCMsg_EntityMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_EntityMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_EntityMsg();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_EntityMsg;
})());
exports.CSVCMsg_CmdKeyValues = ($root.CSVCMsg_CmdKeyValues = (() => {
    /**
     * Properties of a CSVCMsg_CmdKeyValues.
     * @exports ICSVCMsg_CmdKeyValues
     * @interface ICSVCMsg_CmdKeyValues
     * @property {Uint8Array|null} [keyvalues] CSVCMsg_CmdKeyValues keyvalues
     */
    /**
     * Constructs a new CSVCMsg_CmdKeyValues.
     * @exports CSVCMsg_CmdKeyValues
     * @classdesc Represents a CSVCMsg_CmdKeyValues.
     * @implements ICSVCMsg_CmdKeyValues
     * @constructor
     * @param {ICSVCMsg_CmdKeyValues=} [properties] Properties to set
     */
    function CSVCMsg_CmdKeyValues(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_CmdKeyValues keyvalues.
     * @member {Uint8Array} keyvalues
     * @memberof CSVCMsg_CmdKeyValues
     * @instance
     */
    CSVCMsg_CmdKeyValues.prototype.keyvalues = $util.newBuffer([]);
    /**
     * Decodes a CSVCMsg_CmdKeyValues message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_CmdKeyValues
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_CmdKeyValues} CSVCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_CmdKeyValues.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_CmdKeyValues();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_CmdKeyValues;
})());
exports.CSVCMsg_EncryptedData = ($root.CSVCMsg_EncryptedData = (() => {
    /**
     * Properties of a CSVCMsg_EncryptedData.
     * @exports ICSVCMsg_EncryptedData
     * @interface ICSVCMsg_EncryptedData
     * @property {Uint8Array|null} [encrypted] CSVCMsg_EncryptedData encrypted
     * @property {number|null} [keyType] CSVCMsg_EncryptedData keyType
     */
    /**
     * Constructs a new CSVCMsg_EncryptedData.
     * @exports CSVCMsg_EncryptedData
     * @classdesc Represents a CSVCMsg_EncryptedData.
     * @implements ICSVCMsg_EncryptedData
     * @constructor
     * @param {ICSVCMsg_EncryptedData=} [properties] Properties to set
     */
    function CSVCMsg_EncryptedData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_EncryptedData encrypted.
     * @member {Uint8Array} encrypted
     * @memberof CSVCMsg_EncryptedData
     * @instance
     */
    CSVCMsg_EncryptedData.prototype.encrypted = $util.newBuffer([]);
    /**
     * CSVCMsg_EncryptedData keyType.
     * @member {number} keyType
     * @memberof CSVCMsg_EncryptedData
     * @instance
     */
    CSVCMsg_EncryptedData.prototype.keyType = 0;
    /**
     * Decodes a CSVCMsg_EncryptedData message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_EncryptedData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_EncryptedData} CSVCMsg_EncryptedData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_EncryptedData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_EncryptedData();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_EncryptedData;
})());
exports.CSVCMsg_HltvReplay = ($root.CSVCMsg_HltvReplay = (() => {
    /**
     * Properties of a CSVCMsg_HltvReplay.
     * @exports ICSVCMsg_HltvReplay
     * @interface ICSVCMsg_HltvReplay
     * @property {number|null} [delay] CSVCMsg_HltvReplay delay
     * @property {number|null} [primaryTarget] CSVCMsg_HltvReplay primaryTarget
     * @property {number|null} [replayStopAt] CSVCMsg_HltvReplay replayStopAt
     * @property {number|null} [replayStartAt] CSVCMsg_HltvReplay replayStartAt
     * @property {number|null} [replaySlowdownBegin] CSVCMsg_HltvReplay replaySlowdownBegin
     * @property {number|null} [replaySlowdownEnd] CSVCMsg_HltvReplay replaySlowdownEnd
     * @property {number|null} [replaySlowdownRate] CSVCMsg_HltvReplay replaySlowdownRate
     */
    /**
     * Constructs a new CSVCMsg_HltvReplay.
     * @exports CSVCMsg_HltvReplay
     * @classdesc Represents a CSVCMsg_HltvReplay.
     * @implements ICSVCMsg_HltvReplay
     * @constructor
     * @param {ICSVCMsg_HltvReplay=} [properties] Properties to set
     */
    function CSVCMsg_HltvReplay(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CSVCMsg_HltvReplay delay.
     * @member {number} delay
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.delay = 0;
    /**
     * CSVCMsg_HltvReplay primaryTarget.
     * @member {number} primaryTarget
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.primaryTarget = 0;
    /**
     * CSVCMsg_HltvReplay replayStopAt.
     * @member {number} replayStopAt
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.replayStopAt = 0;
    /**
     * CSVCMsg_HltvReplay replayStartAt.
     * @member {number} replayStartAt
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.replayStartAt = 0;
    /**
     * CSVCMsg_HltvReplay replaySlowdownBegin.
     * @member {number} replaySlowdownBegin
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.replaySlowdownBegin = 0;
    /**
     * CSVCMsg_HltvReplay replaySlowdownEnd.
     * @member {number} replaySlowdownEnd
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.replaySlowdownEnd = 0;
    /**
     * CSVCMsg_HltvReplay replaySlowdownRate.
     * @member {number} replaySlowdownRate
     * @memberof CSVCMsg_HltvReplay
     * @instance
     */
    CSVCMsg_HltvReplay.prototype.replaySlowdownRate = 0;
    /**
     * Decodes a CSVCMsg_HltvReplay message from the specified reader or buffer.
     * @function decode
     * @memberof CSVCMsg_HltvReplay
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CSVCMsg_HltvReplay} CSVCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CSVCMsg_HltvReplay.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_HltvReplay();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CSVCMsg_HltvReplay;
})());
exports.CCLCMsg_HltvReplay = ($root.CCLCMsg_HltvReplay = (() => {
    /**
     * Properties of a CCLCMsg_HltvReplay.
     * @exports ICCLCMsg_HltvReplay
     * @interface ICCLCMsg_HltvReplay
     * @property {number|null} [request] CCLCMsg_HltvReplay request
     * @property {number|null} [slowdownLength] CCLCMsg_HltvReplay slowdownLength
     * @property {number|null} [slowdownRate] CCLCMsg_HltvReplay slowdownRate
     * @property {number|null} [primaryTargetEntIndex] CCLCMsg_HltvReplay primaryTargetEntIndex
     * @property {number|null} [eventTime] CCLCMsg_HltvReplay eventTime
     */
    /**
     * Constructs a new CCLCMsg_HltvReplay.
     * @exports CCLCMsg_HltvReplay
     * @classdesc Represents a CCLCMsg_HltvReplay.
     * @implements ICCLCMsg_HltvReplay
     * @constructor
     * @param {ICCLCMsg_HltvReplay=} [properties] Properties to set
     */
    function CCLCMsg_HltvReplay(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CCLCMsg_HltvReplay request.
     * @member {number} request
     * @memberof CCLCMsg_HltvReplay
     * @instance
     */
    CCLCMsg_HltvReplay.prototype.request = 0;
    /**
     * CCLCMsg_HltvReplay slowdownLength.
     * @member {number} slowdownLength
     * @memberof CCLCMsg_HltvReplay
     * @instance
     */
    CCLCMsg_HltvReplay.prototype.slowdownLength = 0;
    /**
     * CCLCMsg_HltvReplay slowdownRate.
     * @member {number} slowdownRate
     * @memberof CCLCMsg_HltvReplay
     * @instance
     */
    CCLCMsg_HltvReplay.prototype.slowdownRate = 0;
    /**
     * CCLCMsg_HltvReplay primaryTargetEntIndex.
     * @member {number} primaryTargetEntIndex
     * @memberof CCLCMsg_HltvReplay
     * @instance
     */
    CCLCMsg_HltvReplay.prototype.primaryTargetEntIndex = 0;
    /**
     * CCLCMsg_HltvReplay eventTime.
     * @member {number} eventTime
     * @memberof CCLCMsg_HltvReplay
     * @instance
     */
    CCLCMsg_HltvReplay.prototype.eventTime = 0;
    /**
     * Decodes a CCLCMsg_HltvReplay message from the specified reader or buffer.
     * @function decode
     * @memberof CCLCMsg_HltvReplay
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCLCMsg_HltvReplay} CCLCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCLCMsg_HltvReplay.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCLCMsg_HltvReplay();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    };
    return CCLCMsg_HltvReplay;
})());
//# sourceMappingURL=netmessages.js.map