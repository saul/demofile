"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserMessageByType = exports.findUserMessageByName = exports.userMessages = exports.findByType = exports.findByName = exports.messages = void 0;
const cstrike15_usermessages_1 = require("./protobufs/cstrike15_usermessages");
const netmessages_1 = require("./protobufs/netmessages");
exports.messages = [];
exports.messages[netmessages_1.NET_Messages.net_NOP] = { name: "net_NOP", class: netmessages_1.CNETMsg_NOP };
exports.messages[netmessages_1.NET_Messages.net_Disconnect] = {
    name: "net_Disconnect",
    class: netmessages_1.CNETMsg_Disconnect
};
exports.messages[netmessages_1.NET_Messages.net_File] = { name: "net_File", class: netmessages_1.CNETMsg_File };
exports.messages[netmessages_1.NET_Messages.net_SplitScreenUser] = {
    name: "net_SplitScreenUser",
    class: netmessages_1.CNETMsg_SplitScreenUser
};
exports.messages[netmessages_1.NET_Messages.net_Tick] = { name: "net_Tick", class: netmessages_1.CNETMsg_Tick };
exports.messages[netmessages_1.NET_Messages.net_StringCmd] = {
    name: "net_StringCmd",
    class: netmessages_1.CNETMsg_StringCmd
};
exports.messages[netmessages_1.NET_Messages.net_SetConVar] = {
    name: "net_SetConVar",
    class: netmessages_1.CNETMsg_SetConVar
};
exports.messages[netmessages_1.NET_Messages.net_SignonState] = {
    name: "net_SignonState",
    class: netmessages_1.CNETMsg_SignonState
};
exports.messages[netmessages_1.NET_Messages.net_PlayerAvatarData] = {
    name: "net_PlayerAvatarData",
    class: netmessages_1.CNETMsg_PlayerAvatarData
};
exports.messages[netmessages_1.SVC_Messages.svc_ServerInfo] = {
    name: "svc_ServerInfo",
    class: netmessages_1.CSVCMsg_ServerInfo
};
exports.messages[netmessages_1.SVC_Messages.svc_SendTable] = {
    name: "svc_SendTable",
    class: netmessages_1.CSVCMsg_SendTable
};
exports.messages[netmessages_1.SVC_Messages.svc_ClassInfo] = {
    name: "svc_ClassInfo",
    class: netmessages_1.CSVCMsg_ClassInfo
};
exports.messages[netmessages_1.SVC_Messages.svc_SetPause] = {
    name: "svc_SetPause",
    class: netmessages_1.CSVCMsg_SetPause
};
exports.messages[netmessages_1.SVC_Messages.svc_CreateStringTable] = {
    name: "svc_CreateStringTable",
    class: netmessages_1.CSVCMsg_CreateStringTable
};
exports.messages[netmessages_1.SVC_Messages.svc_UpdateStringTable] = {
    name: "svc_UpdateStringTable",
    class: netmessages_1.CSVCMsg_UpdateStringTable
};
exports.messages[netmessages_1.SVC_Messages.svc_VoiceInit] = {
    name: "svc_VoiceInit",
    class: netmessages_1.CSVCMsg_VoiceInit
};
exports.messages[netmessages_1.SVC_Messages.svc_VoiceData] = {
    name: "svc_VoiceData",
    class: netmessages_1.CSVCMsg_VoiceData
};
exports.messages[netmessages_1.SVC_Messages.svc_Print] = { name: "svc_Print", class: netmessages_1.CSVCMsg_Print };
exports.messages[netmessages_1.SVC_Messages.svc_Sounds] = {
    name: "svc_Sounds",
    class: netmessages_1.CSVCMsg_Sounds
};
exports.messages[netmessages_1.SVC_Messages.svc_SetView] = {
    name: "svc_SetView",
    class: netmessages_1.CSVCMsg_SetView
};
exports.messages[netmessages_1.SVC_Messages.svc_FixAngle] = {
    name: "svc_FixAngle",
    class: netmessages_1.CSVCMsg_FixAngle
};
exports.messages[netmessages_1.SVC_Messages.svc_CrosshairAngle] = {
    name: "svc_CrosshairAngle",
    class: netmessages_1.CSVCMsg_CrosshairAngle
};
exports.messages[netmessages_1.SVC_Messages.svc_BSPDecal] = {
    name: "svc_BSPDecal",
    class: netmessages_1.CSVCMsg_BSPDecal
};
exports.messages[netmessages_1.SVC_Messages.svc_SplitScreen] = {
    name: "svc_SplitScreen",
    class: netmessages_1.CSVCMsg_SplitScreen
};
exports.messages[netmessages_1.SVC_Messages.svc_UserMessage] = {
    name: "svc_UserMessage",
    class: netmessages_1.CSVCMsg_UserMessage
};
exports.messages[netmessages_1.SVC_Messages.svc_EntityMessage] = {
    name: "svc_EntityMessage",
    class: netmessages_1.CSVCMsg_EntityMsg
};
exports.messages[netmessages_1.SVC_Messages.svc_GameEvent] = {
    name: "svc_GameEvent",
    class: netmessages_1.CSVCMsg_GameEvent
};
exports.messages[netmessages_1.SVC_Messages.svc_PacketEntities] = {
    name: "svc_PacketEntities",
    class: netmessages_1.CSVCMsg_PacketEntities
};
exports.messages[netmessages_1.SVC_Messages.svc_TempEntities] = {
    name: "svc_TempEntities",
    class: netmessages_1.CSVCMsg_TempEntities
};
exports.messages[netmessages_1.SVC_Messages.svc_Prefetch] = {
    name: "svc_Prefetch",
    class: netmessages_1.CSVCMsg_Prefetch
};
exports.messages[netmessages_1.SVC_Messages.svc_Menu] = { name: "svc_Menu", class: netmessages_1.CSVCMsg_Menu };
exports.messages[netmessages_1.SVC_Messages.svc_GameEventList] = {
    name: "svc_GameEventList",
    class: netmessages_1.CSVCMsg_GameEventList
};
exports.messages[netmessages_1.SVC_Messages.svc_GetCvarValue] = {
    name: "svc_GetCvarValue",
    class: netmessages_1.CSVCMsg_GetCvarValue
};
exports.messages[netmessages_1.SVC_Messages.svc_PaintmapData] = {
    name: "svc_PaintmapData",
    class: netmessages_1.CSVCMsg_PaintmapData
};
exports.messages[netmessages_1.SVC_Messages.svc_CmdKeyValues] = {
    name: "svc_CmdKeyValues",
    class: netmessages_1.CSVCMsg_CmdKeyValues
};
exports.messages[netmessages_1.SVC_Messages.svc_EncryptedData] = {
    name: "svc_EncryptedData",
    class: netmessages_1.CSVCMsg_EncryptedData
};
exports.messages[netmessages_1.SVC_Messages.svc_HltvReplay] = {
    name: "svc_HltvReplay",
    class: netmessages_1.CSVCMsg_HltvReplay
};
function findByName(name) {
    return exports.messages.find(descriptor => descriptor.name === name);
}
exports.findByName = findByName;
function findByType(type) {
    return exports.messages[type];
}
exports.findByType = findByType;
exports.userMessages = [];
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_VGUIMenu] = {
    name: "VGUIMenu",
    class: cstrike15_usermessages_1.CCSUsrMsg_VGUIMenu
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_Geiger] = {
    name: "Geiger",
    class: cstrike15_usermessages_1.CCSUsrMsg_Geiger
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_Train] = {
    name: "Train",
    class: cstrike15_usermessages_1.CCSUsrMsg_Train
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_HudText] = {
    name: "HudText",
    class: cstrike15_usermessages_1.CCSUsrMsg_HudText
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_SayText] = {
    name: "SayText",
    class: cstrike15_usermessages_1.CCSUsrMsg_SayText
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_SayText2] = {
    name: "SayText2",
    class: cstrike15_usermessages_1.CCSUsrMsg_SayText2
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_TextMsg] = {
    name: "TextMsg",
    class: cstrike15_usermessages_1.CCSUsrMsg_TextMsg
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_HudMsg] = {
    name: "HudMsg",
    class: cstrike15_usermessages_1.CCSUsrMsg_HudMsg
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ResetHud] = {
    name: "ResetHud",
    class: cstrike15_usermessages_1.CCSUsrMsg_ResetHud
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_GameTitle] = {
    name: "GameTitle",
    class: cstrike15_usermessages_1.CCSUsrMsg_GameTitle
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_Shake] = {
    name: "Shake",
    class: cstrike15_usermessages_1.CCSUsrMsg_Shake
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_Fade] = {
    name: "Fade",
    class: cstrike15_usermessages_1.CCSUsrMsg_Fade
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_Rumble] = {
    name: "Rumble",
    class: cstrike15_usermessages_1.CCSUsrMsg_Rumble
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_CloseCaption] = {
    name: "CloseCaption",
    class: cstrike15_usermessages_1.CCSUsrMsg_CloseCaption
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_CloseCaptionDirect] = {
    name: "CloseCaptionDirect",
    class: cstrike15_usermessages_1.CCSUsrMsg_CloseCaptionDirect
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_SendAudio] = {
    name: "SendAudio",
    class: cstrike15_usermessages_1.CCSUsrMsg_SendAudio
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_RawAudio] = {
    name: "RawAudio",
    class: cstrike15_usermessages_1.CCSUsrMsg_RawAudio
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_VoiceMask] = {
    name: "VoiceMask",
    class: cstrike15_usermessages_1.CCSUsrMsg_VoiceMask
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_RequestState] = {
    name: "RequestState",
    class: cstrike15_usermessages_1.CCSUsrMsg_RequestState
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_Damage] = {
    name: "Damage",
    class: cstrike15_usermessages_1.CCSUsrMsg_Damage
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_RadioText] = {
    name: "RadioText",
    class: cstrike15_usermessages_1.CCSUsrMsg_RadioText
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_HintText] = {
    name: "HintText",
    class: cstrike15_usermessages_1.CCSUsrMsg_HintText
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_KeyHintText] = {
    name: "KeyHintText",
    class: cstrike15_usermessages_1.CCSUsrMsg_KeyHintText
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ProcessSpottedEntityUpdate] = {
    name: "ProcessSpottedEntityUpdate",
    class: cstrike15_usermessages_1.CCSUsrMsg_ProcessSpottedEntityUpdate
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ReloadEffect] = {
    name: "ReloadEffect",
    class: cstrike15_usermessages_1.CCSUsrMsg_ReloadEffect
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_AdjustMoney] = {
    name: "AdjustMoney",
    class: cstrike15_usermessages_1.CCSUsrMsg_AdjustMoney
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_StopSpectatorMode] = {
    name: "StopSpectatorMode",
    class: cstrike15_usermessages_1.CCSUsrMsg_StopSpectatorMode
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_KillCam] = {
    name: "KillCam",
    class: cstrike15_usermessages_1.CCSUsrMsg_KillCam
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_DesiredTimescale] = {
    name: "DesiredTimescale",
    class: cstrike15_usermessages_1.CCSUsrMsg_DesiredTimescale
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_CurrentTimescale] = {
    name: "CurrentTimescale",
    class: cstrike15_usermessages_1.CCSUsrMsg_CurrentTimescale
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_AchievementEvent] = {
    name: "AchievementEvent",
    class: cstrike15_usermessages_1.CCSUsrMsg_AchievementEvent
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_MatchEndConditions] = {
    name: "MatchEndConditions",
    class: cstrike15_usermessages_1.CCSUsrMsg_MatchEndConditions
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_DisconnectToLobby] = {
    name: "DisconnectToLobby",
    class: cstrike15_usermessages_1.CCSUsrMsg_DisconnectToLobby
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_PlayerStatsUpdate] = {
    name: "PlayerStatsUpdate",
    class: cstrike15_usermessages_1.CCSUsrMsg_PlayerStatsUpdate
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_DisplayInventory] = {
    name: "DisplayInventory",
    class: cstrike15_usermessages_1.CCSUsrMsg_DisplayInventory
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_WarmupHasEnded] = {
    name: "WarmupHasEnded",
    class: cstrike15_usermessages_1.CCSUsrMsg_WarmupHasEnded
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ClientInfo] = {
    name: "ClientInfo",
    class: cstrike15_usermessages_1.CCSUsrMsg_ClientInfo
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_XRankGet] = {
    name: "XRankGet",
    class: cstrike15_usermessages_1.CCSUsrMsg_XRankGet
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_XRankUpd] = {
    name: "XRankUpd",
    class: cstrike15_usermessages_1.CCSUsrMsg_XRankUpd
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_CallVoteFailed] = {
    name: "CallVoteFailed",
    class: cstrike15_usermessages_1.CCSUsrMsg_CallVoteFailed
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_VoteStart] = {
    name: "VoteStart",
    class: cstrike15_usermessages_1.CCSUsrMsg_VoteStart
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_VotePass] = {
    name: "VotePass",
    class: cstrike15_usermessages_1.CCSUsrMsg_VotePass
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_VoteFailed] = {
    name: "VoteFailed",
    class: cstrike15_usermessages_1.CCSUsrMsg_VoteFailed
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_VoteSetup] = {
    name: "VoteSetup",
    class: cstrike15_usermessages_1.CCSUsrMsg_VoteSetup
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ServerRankRevealAll] = {
    name: "ServerRankRevealAll",
    class: cstrike15_usermessages_1.CCSUsrMsg_ServerRankRevealAll
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_SendLastKillerDamageToClient] = {
    name: "SendLastKillerDamageToClient",
    class: cstrike15_usermessages_1.CCSUsrMsg_SendLastKillerDamageToClient
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ServerRankUpdate] = {
    name: "ServerRankUpdate",
    class: cstrike15_usermessages_1.CCSUsrMsg_ServerRankUpdate
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ItemPickup] = {
    name: "ItemPickup",
    class: cstrike15_usermessages_1.CCSUsrMsg_ItemPickup
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ShowMenu] = {
    name: "ShowMenu",
    class: cstrike15_usermessages_1.CCSUsrMsg_ShowMenu
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_BarTime] = {
    name: "BarTime",
    class: cstrike15_usermessages_1.CCSUsrMsg_BarTime
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_AmmoDenied] = {
    name: "AmmoDenied",
    class: cstrike15_usermessages_1.CCSUsrMsg_AmmoDenied
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_MarkAchievement] = {
    name: "MarkAchievement",
    class: cstrike15_usermessages_1.CCSUsrMsg_MarkAchievement
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_MatchStatsUpdate] = {
    name: "MatchStatsUpdate",
    class: cstrike15_usermessages_1.CCSUsrMsg_MatchStatsUpdate
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ItemDrop] = {
    name: "ItemDrop",
    class: cstrike15_usermessages_1.CCSUsrMsg_ItemDrop
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_GlowPropTurnOff] = {
    name: "GlowPropTurnOff",
    class: cstrike15_usermessages_1.CCSUsrMsg_GlowPropTurnOff
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_SendPlayerItemDrops] = {
    name: "SendPlayerItemDrops",
    class: cstrike15_usermessages_1.CCSUsrMsg_SendPlayerItemDrops
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_RoundBackupFilenames] = {
    name: "RoundBackupFilenames",
    class: cstrike15_usermessages_1.CCSUsrMsg_RoundBackupFilenames
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_SendPlayerItemFound] = {
    name: "SendPlayerItemFound",
    class: cstrike15_usermessages_1.CCSUsrMsg_SendPlayerItemFound
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_ReportHit] = {
    name: "ReportHit",
    class: cstrike15_usermessages_1.CCSUsrMsg_ReportHit
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_XpUpdate] = {
    name: "XpUpdate",
    class: cstrike15_usermessages_1.CCSUsrMsg_XpUpdate
};
exports.userMessages[cstrike15_usermessages_1.ECstrike15UserMessages.CS_UM_QuestProgress] = {
    name: "QuestProgress",
    class: cstrike15_usermessages_1.CCSUsrMsg_QuestProgress
};
function findUserMessageByName(name) {
    return exports.userMessages.find(descriptor => descriptor.name === name);
}
exports.findUserMessageByName = findUserMessageByName;
function findUserMessageByType(type) {
    return exports.userMessages[type];
}
exports.findUserMessageByType = findUserMessageByType;
//# sourceMappingURL=net.js.map