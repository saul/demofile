"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByType = exports.findByName = exports.messages = void 0;
const netmessages_1 = require("./protobufs/netmessages");
exports.messages = [];
exports.messages[netmessages_1.NETMessages.net_NOP] = { name: "net_NOP", class: netmessages_1.CNETMsgNOP };
exports.messages[netmessages_1.NETMessages.net_Disconnect] = {
    name: "net_Disconnect",
    class: netmessages_1.CNETMsgDisconnect
};
exports.messages[netmessages_1.NETMessages.net_File] = { name: "net_File", class: netmessages_1.CNETMsgFile };
exports.messages[netmessages_1.NETMessages.net_SplitScreenUser] = {
    name: "net_SplitScreenUser",
    class: netmessages_1.CNETMsgSplitScreenUser
};
exports.messages[netmessages_1.NETMessages.net_Tick] = { name: "net_Tick", class: netmessages_1.CNETMsgTick };
exports.messages[netmessages_1.NETMessages.net_StringCmd] = {
    name: "net_StringCmd",
    class: netmessages_1.CNETMsgStringCmd
};
exports.messages[netmessages_1.NETMessages.net_SetConVar] = {
    name: "net_SetConVar",
    class: netmessages_1.CNETMsgSetConVar
};
exports.messages[netmessages_1.NETMessages.net_SignonState] = {
    name: "net_SignonState",
    class: netmessages_1.CNETMsgSignonState
};
exports.messages[netmessages_1.NETMessages.net_PlayerAvatarData] = {
    name: "net_PlayerAvatarData",
    class: netmessages_1.CNETMsgPlayerAvatarData
};
exports.messages[netmessages_1.SVCMessages.svc_ServerInfo] = {
    name: "svc_ServerInfo",
    class: netmessages_1.CSVCMsgServerInfo
};
exports.messages[netmessages_1.SVCMessages.svc_SendTable] = {
    name: "svc_SendTable",
    class: netmessages_1.CSVCMsgSendTable
};
exports.messages[netmessages_1.SVCMessages.svc_ClassInfo] = {
    name: "svc_ClassInfo",
    class: netmessages_1.CSVCMsgClassInfo
};
exports.messages[netmessages_1.SVCMessages.svc_SetPause] = {
    name: "svc_SetPause",
    class: netmessages_1.CSVCMsgSetPause
};
exports.messages[netmessages_1.SVCMessages.svc_CreateStringTable] = {
    name: "svc_CreateStringTable",
    class: netmessages_1.CSVCMsgCreateStringTable
};
exports.messages[netmessages_1.SVCMessages.svc_UpdateStringTable] = {
    name: "svc_UpdateStringTable",
    class: netmessages_1.CSVCMsgUpdateStringTable
};
exports.messages[netmessages_1.SVCMessages.svc_VoiceInit] = {
    name: "svc_VoiceInit",
    class: netmessages_1.CSVCMsgVoiceInit
};
exports.messages[netmessages_1.SVCMessages.svc_VoiceData] = {
    name: "svc_VoiceData",
    class: netmessages_1.CSVCMsgVoiceData
};
exports.messages[netmessages_1.SVCMessages.svc_Print] = { name: "svc_Print", class: netmessages_1.CSVCMsgPrint };
exports.messages[netmessages_1.SVCMessages.svc_Sounds] = { name: "svc_Sounds", class: netmessages_1.CSVCMsgSounds };
exports.messages[netmessages_1.SVCMessages.svc_SetView] = {
    name: "svc_SetView",
    class: netmessages_1.CSVCMsgSetView
};
exports.messages[netmessages_1.SVCMessages.svc_FixAngle] = {
    name: "svc_FixAngle",
    class: netmessages_1.CSVCMsgFixAngle
};
exports.messages[netmessages_1.SVCMessages.svc_CrosshairAngle] = {
    name: "svc_CrosshairAngle",
    class: netmessages_1.CSVCMsgCrosshairAngle
};
exports.messages[netmessages_1.SVCMessages.svc_BSPDecal] = {
    name: "svc_BSPDecal",
    class: netmessages_1.CSVCMsgBSPDecal
};
exports.messages[netmessages_1.SVCMessages.svc_SplitScreen] = {
    name: "svc_SplitScreen",
    class: netmessages_1.CSVCMsgSplitScreen
};
exports.messages[netmessages_1.SVCMessages.svc_UserMessage] = {
    name: "svc_UserMessage",
    class: netmessages_1.CSVCMsgUserMessage
};
exports.messages[netmessages_1.SVCMessages.svc_EntityMessage] = {
    name: "svc_EntityMessage",
    class: netmessages_1.CSVCMsgEntityMsg
};
exports.messages[netmessages_1.SVCMessages.svc_GameEvent] = {
    name: "svc_GameEvent",
    class: netmessages_1.CSVCMsgGameEvent
};
exports.messages[netmessages_1.SVCMessages.svc_PacketEntities] = {
    name: "svc_PacketEntities",
    class: netmessages_1.CSVCMsgPacketEntities
};
exports.messages[netmessages_1.SVCMessages.svc_TempEntities] = {
    name: "svc_TempEntities",
    class: netmessages_1.CSVCMsgTempEntities
};
exports.messages[netmessages_1.SVCMessages.svc_Prefetch] = {
    name: "svc_Prefetch",
    class: netmessages_1.CSVCMsgPrefetch
};
exports.messages[netmessages_1.SVCMessages.svc_Menu] = { name: "svc_Menu", class: netmessages_1.CSVCMsgMenu };
exports.messages[netmessages_1.SVCMessages.svc_GameEventList] = {
    name: "svc_GameEventList",
    class: netmessages_1.CSVCMsgGameEventList
};
exports.messages[netmessages_1.SVCMessages.svc_GetCvarValue] = {
    name: "svc_GetCvarValue",
    class: netmessages_1.CSVCMsgGetCvarValue
};
exports.messages[netmessages_1.SVCMessages.svc_PaintmapData] = {
    name: "svc_PaintmapData",
    class: netmessages_1.CSVCMsgPaintmapData
};
exports.messages[netmessages_1.SVCMessages.svc_CmdKeyValues] = {
    name: "svc_CmdKeyValues",
    class: netmessages_1.CSVCMsgCmdKeyValues
};
exports.messages[netmessages_1.SVCMessages.svc_EncryptedData] = {
    name: "svc_EncryptedData",
    class: netmessages_1.CSVCMsgEncryptedData
};
exports.messages[netmessages_1.SVCMessages.svc_HltvReplay] = {
    name: "svc_HltvReplay",
    class: netmessages_1.CSVCMsgHltvReplay
};
exports.messages[netmessages_1.SVCMessages.svc_Broadcast_Command] = {
    name: "svc_Broadcast_Command",
    class: netmessages_1.CSVCMsgBroadcastCommand
};
function findByName(name) {
    return exports.messages.find(descriptor => descriptor.name === name);
}
exports.findByName = findByName;
function findByType(type) {
    return exports.messages[type];
}
exports.findByType = findByType;
//# sourceMappingURL=net.js.map