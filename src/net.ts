import { NET_Messages, CNETMsg_NOP, CNETMsg_Disconnect, CNETMsg_File, CNETMsg_SplitScreenUser, CNETMsg_Tick, CNETMsg_StringCmd, CNETMsg_SetConVar, CNETMsg_SignonState, CNETMsg_PlayerAvatarData, SVC_Messages, CSVCMsg_ServerInfo, CSVCMsg_SendTable, CSVCMsg_ClassInfo, CSVCMsg_SetPause, CSVCMsg_CreateStringTable, CSVCMsg_UpdateStringTable, CSVCMsg_VoiceInit, CSVCMsg_VoiceData, CSVCMsg_Print, CSVCMsg_Sounds, CSVCMsg_SetView, CSVCMsg_FixAngle, CSVCMsg_CrosshairAngle, CSVCMsg_BSPDecal, CSVCMsg_SplitScreen, CSVCMsg_UserMessage, CSVCMsg_GameEvent, CSVCMsg_PacketEntities, CSVCMsg_TempEntities, CSVCMsg_Prefetch, CSVCMsg_Menu, CSVCMsg_GameEventList, CSVCMsg_GetCvarValue, CSVCMsg_PaintmapData, CSVCMsg_CmdKeyValues, CSVCMsg_EncryptedData, CSVCMsg_HltvReplay, CSVCMsg_EntityMsg } from './protobufs/netmessages';
import { ECstrike15UserMessages, CCSUsrMsg_VGUIMenu, CCSUsrMsg_Geiger, CCSUsrMsg_Train, CCSUsrMsg_HudText, CCSUsrMsg_SayText, CCSUsrMsg_SayText2, CCSUsrMsg_TextMsg, CCSUsrMsg_HudMsg, CCSUsrMsg_ResetHud, CCSUsrMsg_GameTitle, CCSUsrMsg_Shake, CCSUsrMsg_Fade, CCSUsrMsg_Rumble, CCSUsrMsg_CloseCaption, CCSUsrMsg_CloseCaptionDirect, CCSUsrMsg_SendAudio, CCSUsrMsg_RawAudio, CCSUsrMsg_VoiceMask, CCSUsrMsg_RequestState, CCSUsrMsg_Damage, CCSUsrMsg_RadioText, CCSUsrMsg_HintText, CCSUsrMsg_KeyHintText, CCSUsrMsg_ProcessSpottedEntityUpdate, CCSUsrMsg_ReloadEffect, CCSUsrMsg_AdjustMoney, CCSUsrMsg_StopSpectatorMode, CCSUsrMsg_KillCam, CCSUsrMsg_DesiredTimescale, CCSUsrMsg_CurrentTimescale, CCSUsrMsg_AchievementEvent, CCSUsrMsg_MatchEndConditions, CCSUsrMsg_DisconnectToLobby, CCSUsrMsg_PlayerStatsUpdate, CCSUsrMsg_DisplayInventory, CCSUsrMsg_WarmupHasEnded, CCSUsrMsg_ClientInfo, CCSUsrMsg_XRankGet, CCSUsrMsg_XRankUpd, CCSUsrMsg_CallVoteFailed, CCSUsrMsg_VoteStart, CCSUsrMsg_VotePass, CCSUsrMsg_VoteFailed, CCSUsrMsg_VoteSetup, CCSUsrMsg_ServerRankRevealAll, CCSUsrMsg_SendLastKillerDamageToClient, CCSUsrMsg_ServerRankUpdate, CCSUsrMsg_ItemPickup, CCSUsrMsg_ShowMenu, CCSUsrMsg_BarTime, CCSUsrMsg_AmmoDenied, CCSUsrMsg_MarkAchievement, CCSUsrMsg_MatchStatsUpdate, CCSUsrMsg_ItemDrop, CCSUsrMsg_GlowPropTurnOff, CCSUsrMsg_SendPlayerItemDrops, CCSUsrMsg_RoundBackupFilenames, CCSUsrMsg_SendPlayerItemFound, CCSUsrMsg_ReportHit, CCSUsrMsg_XpUpdate, CCSUsrMsg_QuestProgress } from './protobufs/cstrike15_usermessages';

export type NetMessageName =
  'net_NOP' |
  'net_Disconnect' |
  'net_File' |
  'net_SplitScreenUser' |
  'net_Tick' |
  'net_StringCmd' |
  'net_SetConVar' |
  'net_SignonState' |
  'net_PlayerAvatarData' |
  'svc_ServerInfo' |
  'svc_SendTable' |
  'svc_ClassInfo' |
  'svc_SetPause' |
  'svc_CreateStringTable' |
  'svc_UpdateStringTable' |
  'svc_VoiceInit' |
  'svc_VoiceData' |
  'svc_Print' |
  'svc_Sounds' |
  'svc_SetView' |
  'svc_FixAngle' |
  'svc_CrosshairAngle' |
  'svc_BSPDecal' |
  'svc_SplitScreen' |
  'svc_UserMessage' |
  'svc_EntityMessage' |
  'svc_GameEvent' |
  'svc_PacketEntities' |
  'svc_TempEntities' |
  'svc_Prefetch' |
  'svc_Menu' |
  'svc_GameEventList' |
  'svc_GetCvarValue' |
  'svc_PaintmapData' |
  'svc_CmdKeyValues' |
  'svc_EncryptedData' |
  'svc_HltvReplay';

interface NetMessage {
  decode(buf: Uint8Array): any;
}

interface INetMessageDescriptor {
  name: NetMessageName;
  'class': NetMessage;
}

export var messages: Array<INetMessageDescriptor> = [];
messages[NET_Messages.net_NOP] = { name: 'net_NOP', 'class': CNETMsg_NOP };
messages[NET_Messages.net_Disconnect] = { name: 'net_Disconnect', 'class': CNETMsg_Disconnect };
messages[NET_Messages.net_File] = { name: 'net_File', 'class': CNETMsg_File };
messages[NET_Messages.net_SplitScreenUser] = { name: 'net_SplitScreenUser', 'class': CNETMsg_SplitScreenUser };
messages[NET_Messages.net_Tick] = { name: 'net_Tick', 'class': CNETMsg_Tick };
messages[NET_Messages.net_StringCmd] = { name: 'net_StringCmd', 'class': CNETMsg_StringCmd };
messages[NET_Messages.net_SetConVar] = { name: 'net_SetConVar', 'class': CNETMsg_SetConVar };
messages[NET_Messages.net_SignonState] = { name: 'net_SignonState', 'class': CNETMsg_SignonState };
messages[NET_Messages.net_PlayerAvatarData] = { name: 'net_PlayerAvatarData', 'class': CNETMsg_PlayerAvatarData };
messages[SVC_Messages.svc_ServerInfo] = { name: 'svc_ServerInfo', 'class': CSVCMsg_ServerInfo };
messages[SVC_Messages.svc_SendTable] = { name: 'svc_SendTable', 'class': CSVCMsg_SendTable };
messages[SVC_Messages.svc_ClassInfo] = { name: 'svc_ClassInfo', 'class': CSVCMsg_ClassInfo };
messages[SVC_Messages.svc_SetPause] = { name: 'svc_SetPause', 'class': CSVCMsg_SetPause };
messages[SVC_Messages.svc_CreateStringTable] = { name: 'svc_CreateStringTable', 'class': CSVCMsg_CreateStringTable };
messages[SVC_Messages.svc_UpdateStringTable] = { name: 'svc_UpdateStringTable', 'class': CSVCMsg_UpdateStringTable };
messages[SVC_Messages.svc_VoiceInit] = { name: 'svc_VoiceInit', 'class': CSVCMsg_VoiceInit };
messages[SVC_Messages.svc_VoiceData] = { name: 'svc_VoiceData', 'class': CSVCMsg_VoiceData };
messages[SVC_Messages.svc_Print] = { name: 'svc_Print', 'class': CSVCMsg_Print };
messages[SVC_Messages.svc_Sounds] = { name: 'svc_Sounds', 'class': CSVCMsg_Sounds };
messages[SVC_Messages.svc_SetView] = { name: 'svc_SetView', 'class': CSVCMsg_SetView };
messages[SVC_Messages.svc_FixAngle] = { name: 'svc_FixAngle', 'class': CSVCMsg_FixAngle };
messages[SVC_Messages.svc_CrosshairAngle] = { name: 'svc_CrosshairAngle', 'class': CSVCMsg_CrosshairAngle };
messages[SVC_Messages.svc_BSPDecal] = { name: 'svc_BSPDecal', 'class': CSVCMsg_BSPDecal };
messages[SVC_Messages.svc_SplitScreen] = { name: 'svc_SplitScreen', 'class': CSVCMsg_SplitScreen };
messages[SVC_Messages.svc_UserMessage] = { name: 'svc_UserMessage', 'class': CSVCMsg_UserMessage };
messages[SVC_Messages.svc_EntityMessage] = { name: 'svc_EntityMessage', 'class': CSVCMsg_EntityMsg };
messages[SVC_Messages.svc_GameEvent] = { name: 'svc_GameEvent', 'class': CSVCMsg_GameEvent };
messages[SVC_Messages.svc_PacketEntities] = { name: 'svc_PacketEntities', 'class': CSVCMsg_PacketEntities };
messages[SVC_Messages.svc_TempEntities] = { name: 'svc_TempEntities', 'class': CSVCMsg_TempEntities };
messages[SVC_Messages.svc_Prefetch] = { name: 'svc_Prefetch', 'class': CSVCMsg_Prefetch };
messages[SVC_Messages.svc_Menu] = { name: 'svc_Menu', 'class': CSVCMsg_Menu };
messages[SVC_Messages.svc_GameEventList] = { name: 'svc_GameEventList', 'class': CSVCMsg_GameEventList };
messages[SVC_Messages.svc_GetCvarValue] = { name: 'svc_GetCvarValue', 'class': CSVCMsg_GetCvarValue };
messages[SVC_Messages.svc_PaintmapData] = { name: 'svc_PaintmapData', 'class': CSVCMsg_PaintmapData };
messages[SVC_Messages.svc_CmdKeyValues] = { name: 'svc_CmdKeyValues', 'class': CSVCMsg_CmdKeyValues };
messages[SVC_Messages.svc_EncryptedData] = { name: 'svc_EncryptedData', 'class': CSVCMsg_EncryptedData };
messages[SVC_Messages.svc_HltvReplay] = { name: 'svc_HltvReplay', 'class': CSVCMsg_HltvReplay };

export function findByName(name: NetMessageName) {
  return messages.find(descriptor => descriptor.name == name) as INetMessageDescriptor;
}

export function findByType(type: NET_Messages | SVC_Messages) {
  return messages[type];
}

export type UserMessageName =
  'VGUIMenu' |
  'Geiger' |
  'Train' |
  'HudText' |
  'SayText' |
  'SayText2' |
  'TextMsg' |
  'HudMsg' |
  'ResetHud' |
  'GameTitle' |
  'Shake' |
  'Fade' |
  'Rumble' |
  'CloseCaption' |
  'CloseCaptionDirect' |
  'SendAudio' |
  'RawAudio' |
  'VoiceMask' |
  'RequestState' |
  'Damage' |
  'RadioText' |
  'HintText' |
  'KeyHintText' |
  'ProcessSpottedEntityUpdate' |
  'ReloadEffect' |
  'AdjustMoney' |
  'StopSpectatorMode' |
  'KillCam' |
  'DesiredTimescale' |
  'CurrentTimescale' |
  'AchievementEvent' |
  'MatchEndConditions' |
  'DisconnectToLobby' |
  'PlayerStatsUpdate' |
  'DisplayInventory' |
  'WarmupHasEnded' |
  'ClientInfo' |
  'XRankGet' |
  'XRankUpd' |
  'CallVoteFailed' |
  'VoteStart' |
  'VotePass' |
  'VoteFailed' |
  'VoteSetup' |
  'ServerRankRevealAll' |
  'SendLastKillerDamageToClient' |
  'ServerRankUpdate' |
  'ItemPickup' |
  'ShowMenu' |
  'BarTime' |
  'AmmoDenied' |
  'MarkAchievement' |
  'MatchStatsUpdate' |
  'ItemDrop' |
  'GlowPropTurnOff' |
  'SendPlayerItemDrops' |
  'RoundBackupFilenames' |
  'SendPlayerItemFound' |
  'ReportHit' |
  'XpUpdate' |
  'QuestProgress';

interface IUserMessageDescriptor {
  name: UserMessageName;
  'class': any;
}

export var userMessages: Array<IUserMessageDescriptor> = [];
userMessages[ECstrike15UserMessages.CS_UM_VGUIMenu] = { name: 'VGUIMenu', 'class': CCSUsrMsg_VGUIMenu }
userMessages[ECstrike15UserMessages.CS_UM_Geiger] = { name: 'Geiger', 'class': CCSUsrMsg_Geiger }
userMessages[ECstrike15UserMessages.CS_UM_Train] = { name: 'Train', 'class': CCSUsrMsg_Train }
userMessages[ECstrike15UserMessages.CS_UM_HudText] = { name: 'HudText', 'class': CCSUsrMsg_HudText }
userMessages[ECstrike15UserMessages.CS_UM_SayText] = { name: 'SayText', 'class': CCSUsrMsg_SayText }
userMessages[ECstrike15UserMessages.CS_UM_SayText2] = { name: 'SayText2', 'class': CCSUsrMsg_SayText2 }
userMessages[ECstrike15UserMessages.CS_UM_TextMsg] = { name: 'TextMsg', 'class': CCSUsrMsg_TextMsg }
userMessages[ECstrike15UserMessages.CS_UM_HudMsg] = { name: 'HudMsg', 'class': CCSUsrMsg_HudMsg }
userMessages[ECstrike15UserMessages.CS_UM_ResetHud] = { name: 'ResetHud', 'class': CCSUsrMsg_ResetHud }
userMessages[ECstrike15UserMessages.CS_UM_GameTitle] = { name: 'GameTitle', 'class': CCSUsrMsg_GameTitle }
userMessages[ECstrike15UserMessages.CS_UM_Shake] = { name: 'Shake', 'class': CCSUsrMsg_Shake }
userMessages[ECstrike15UserMessages.CS_UM_Fade] = { name: 'Fade', 'class': CCSUsrMsg_Fade }
userMessages[ECstrike15UserMessages.CS_UM_Rumble] = { name: 'Rumble', 'class': CCSUsrMsg_Rumble }
userMessages[ECstrike15UserMessages.CS_UM_CloseCaption] = { name: 'CloseCaption', 'class': CCSUsrMsg_CloseCaption }
userMessages[ECstrike15UserMessages.CS_UM_CloseCaptionDirect] = { name: 'CloseCaptionDirect', 'class': CCSUsrMsg_CloseCaptionDirect }
userMessages[ECstrike15UserMessages.CS_UM_SendAudio] = { name: 'SendAudio', 'class': CCSUsrMsg_SendAudio }
userMessages[ECstrike15UserMessages.CS_UM_RawAudio] = { name: 'RawAudio', 'class': CCSUsrMsg_RawAudio }
userMessages[ECstrike15UserMessages.CS_UM_VoiceMask] = { name: 'VoiceMask', 'class': CCSUsrMsg_VoiceMask }
userMessages[ECstrike15UserMessages.CS_UM_RequestState] = { name: 'RequestState', 'class': CCSUsrMsg_RequestState }
userMessages[ECstrike15UserMessages.CS_UM_Damage] = { name: 'Damage', 'class': CCSUsrMsg_Damage }
userMessages[ECstrike15UserMessages.CS_UM_RadioText] = { name: 'RadioText', 'class': CCSUsrMsg_RadioText }
userMessages[ECstrike15UserMessages.CS_UM_HintText] = { name: 'HintText', 'class': CCSUsrMsg_HintText }
userMessages[ECstrike15UserMessages.CS_UM_KeyHintText] = { name: 'KeyHintText', 'class': CCSUsrMsg_KeyHintText }
userMessages[ECstrike15UserMessages.CS_UM_ProcessSpottedEntityUpdate] = { name: 'ProcessSpottedEntityUpdate', 'class': CCSUsrMsg_ProcessSpottedEntityUpdate }
userMessages[ECstrike15UserMessages.CS_UM_ReloadEffect] = { name: 'ReloadEffect', 'class': CCSUsrMsg_ReloadEffect }
userMessages[ECstrike15UserMessages.CS_UM_AdjustMoney] = { name: 'AdjustMoney', 'class': CCSUsrMsg_AdjustMoney }
userMessages[ECstrike15UserMessages.CS_UM_StopSpectatorMode] = { name: 'StopSpectatorMode', 'class': CCSUsrMsg_StopSpectatorMode }
userMessages[ECstrike15UserMessages.CS_UM_KillCam] = { name: 'KillCam', 'class': CCSUsrMsg_KillCam }
userMessages[ECstrike15UserMessages.CS_UM_DesiredTimescale] = { name: 'DesiredTimescale', 'class': CCSUsrMsg_DesiredTimescale }
userMessages[ECstrike15UserMessages.CS_UM_CurrentTimescale] = { name: 'CurrentTimescale', 'class': CCSUsrMsg_CurrentTimescale }
userMessages[ECstrike15UserMessages.CS_UM_AchievementEvent] = { name: 'AchievementEvent', 'class': CCSUsrMsg_AchievementEvent }
userMessages[ECstrike15UserMessages.CS_UM_MatchEndConditions] = { name: 'MatchEndConditions', 'class': CCSUsrMsg_MatchEndConditions }
userMessages[ECstrike15UserMessages.CS_UM_DisconnectToLobby] = { name: 'DisconnectToLobby', 'class': CCSUsrMsg_DisconnectToLobby }
userMessages[ECstrike15UserMessages.CS_UM_PlayerStatsUpdate] = { name: 'PlayerStatsUpdate', 'class': CCSUsrMsg_PlayerStatsUpdate }
userMessages[ECstrike15UserMessages.CS_UM_DisplayInventory] = { name: 'DisplayInventory', 'class': CCSUsrMsg_DisplayInventory }
userMessages[ECstrike15UserMessages.CS_UM_WarmupHasEnded] = { name: 'WarmupHasEnded', 'class': CCSUsrMsg_WarmupHasEnded }
userMessages[ECstrike15UserMessages.CS_UM_ClientInfo] = { name: 'ClientInfo', 'class': CCSUsrMsg_ClientInfo }
userMessages[ECstrike15UserMessages.CS_UM_XRankGet] = { name: 'XRankGet', 'class': CCSUsrMsg_XRankGet }
userMessages[ECstrike15UserMessages.CS_UM_XRankUpd] = { name: 'XRankUpd', 'class': CCSUsrMsg_XRankUpd }
userMessages[ECstrike15UserMessages.CS_UM_CallVoteFailed] = { name: 'CallVoteFailed', 'class': CCSUsrMsg_CallVoteFailed }
userMessages[ECstrike15UserMessages.CS_UM_VoteStart] = { name: 'VoteStart', 'class': CCSUsrMsg_VoteStart }
userMessages[ECstrike15UserMessages.CS_UM_VotePass] = { name: 'VotePass', 'class': CCSUsrMsg_VotePass }
userMessages[ECstrike15UserMessages.CS_UM_VoteFailed] = { name: 'VoteFailed', 'class': CCSUsrMsg_VoteFailed }
userMessages[ECstrike15UserMessages.CS_UM_VoteSetup] = { name: 'VoteSetup', 'class': CCSUsrMsg_VoteSetup }
userMessages[ECstrike15UserMessages.CS_UM_ServerRankRevealAll] = { name: 'ServerRankRevealAll', 'class': CCSUsrMsg_ServerRankRevealAll }
userMessages[ECstrike15UserMessages.CS_UM_SendLastKillerDamageToClient] = { name: 'SendLastKillerDamageToClient', 'class': CCSUsrMsg_SendLastKillerDamageToClient }
userMessages[ECstrike15UserMessages.CS_UM_ServerRankUpdate] = { name: 'ServerRankUpdate', 'class': CCSUsrMsg_ServerRankUpdate }
userMessages[ECstrike15UserMessages.CS_UM_ItemPickup] = { name: 'ItemPickup', 'class': CCSUsrMsg_ItemPickup }
userMessages[ECstrike15UserMessages.CS_UM_ShowMenu] = { name: 'ShowMenu', 'class': CCSUsrMsg_ShowMenu }
userMessages[ECstrike15UserMessages.CS_UM_BarTime] = { name: 'BarTime', 'class': CCSUsrMsg_BarTime }
userMessages[ECstrike15UserMessages.CS_UM_AmmoDenied] = { name: 'AmmoDenied', 'class': CCSUsrMsg_AmmoDenied }
userMessages[ECstrike15UserMessages.CS_UM_MarkAchievement] = { name: 'MarkAchievement', 'class': CCSUsrMsg_MarkAchievement }
userMessages[ECstrike15UserMessages.CS_UM_MatchStatsUpdate] = { name: 'MatchStatsUpdate', 'class': CCSUsrMsg_MatchStatsUpdate }
userMessages[ECstrike15UserMessages.CS_UM_ItemDrop] = { name: 'ItemDrop', 'class': CCSUsrMsg_ItemDrop }
userMessages[ECstrike15UserMessages.CS_UM_GlowPropTurnOff] = { name: 'GlowPropTurnOff', 'class': CCSUsrMsg_GlowPropTurnOff }
userMessages[ECstrike15UserMessages.CS_UM_SendPlayerItemDrops] = { name: 'SendPlayerItemDrops', 'class': CCSUsrMsg_SendPlayerItemDrops }
userMessages[ECstrike15UserMessages.CS_UM_RoundBackupFilenames] = { name: 'RoundBackupFilenames', 'class': CCSUsrMsg_RoundBackupFilenames }
userMessages[ECstrike15UserMessages.CS_UM_SendPlayerItemFound] = { name: 'SendPlayerItemFound', 'class': CCSUsrMsg_SendPlayerItemFound }
userMessages[ECstrike15UserMessages.CS_UM_ReportHit] = { name: 'ReportHit', 'class': CCSUsrMsg_ReportHit }
userMessages[ECstrike15UserMessages.CS_UM_XpUpdate] = { name: 'XpUpdate', 'class': CCSUsrMsg_XpUpdate }
userMessages[ECstrike15UserMessages.CS_UM_QuestProgress] = { name: 'QuestProgress', 'class': CCSUsrMsg_QuestProgress }

export function findUserMessageByName(name: UserMessageName) {
  return userMessages.find(descriptor => descriptor.name == name) as IUserMessageDescriptor;
}

export function findUserMessageByType(type: ECstrike15UserMessages) {
  return userMessages[type];
}
