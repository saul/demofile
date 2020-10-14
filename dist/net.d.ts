import { ECstrike15UserMessages } from "./protobufs/cstrike15_usermessages";
import { NET_Messages, SVC_Messages } from "./protobufs/netmessages";
export declare type NetMessageName = "net_NOP" | "net_Disconnect" | "net_File" | "net_SplitScreenUser" | "net_Tick" | "net_StringCmd" | "net_SetConVar" | "net_SignonState" | "net_PlayerAvatarData" | "svc_ServerInfo" | "svc_SendTable" | "svc_ClassInfo" | "svc_SetPause" | "svc_CreateStringTable" | "svc_UpdateStringTable" | "svc_VoiceInit" | "svc_VoiceData" | "svc_Print" | "svc_Sounds" | "svc_SetView" | "svc_FixAngle" | "svc_CrosshairAngle" | "svc_BSPDecal" | "svc_SplitScreen" | "svc_UserMessage" | "svc_EntityMessage" | "svc_GameEvent" | "svc_PacketEntities" | "svc_TempEntities" | "svc_Prefetch" | "svc_Menu" | "svc_GameEventList" | "svc_GetCvarValue" | "svc_PaintmapData" | "svc_CmdKeyValues" | "svc_EncryptedData" | "svc_HltvReplay";
interface NetMessage {
    decode(buf: Uint8Array): any;
}
interface INetMessageDescriptor {
    name: NetMessageName;
    class: NetMessage;
}
export declare let messages: INetMessageDescriptor[];
export declare function findByName(name: NetMessageName): INetMessageDescriptor;
export declare function findByType(type: NET_Messages | SVC_Messages): INetMessageDescriptor;
export declare type UserMessageName = "VGUIMenu" | "Geiger" | "Train" | "HudText" | "SayText" | "SayText2" | "TextMsg" | "HudMsg" | "ResetHud" | "GameTitle" | "Shake" | "Fade" | "Rumble" | "CloseCaption" | "CloseCaptionDirect" | "SendAudio" | "RawAudio" | "VoiceMask" | "RequestState" | "Damage" | "RadioText" | "HintText" | "KeyHintText" | "ProcessSpottedEntityUpdate" | "ReloadEffect" | "AdjustMoney" | "StopSpectatorMode" | "KillCam" | "DesiredTimescale" | "CurrentTimescale" | "AchievementEvent" | "MatchEndConditions" | "DisconnectToLobby" | "PlayerStatsUpdate" | "DisplayInventory" | "WarmupHasEnded" | "ClientInfo" | "XRankGet" | "XRankUpd" | "CallVoteFailed" | "VoteStart" | "VotePass" | "VoteFailed" | "VoteSetup" | "ServerRankRevealAll" | "SendLastKillerDamageToClient" | "ServerRankUpdate" | "ItemPickup" | "ShowMenu" | "BarTime" | "AmmoDenied" | "MarkAchievement" | "MatchStatsUpdate" | "ItemDrop" | "GlowPropTurnOff" | "SendPlayerItemDrops" | "RoundBackupFilenames" | "SendPlayerItemFound" | "ReportHit" | "XpUpdate" | "QuestProgress";
interface IUserMessageDescriptor {
    name: UserMessageName;
    class: any;
}
export declare let userMessages: IUserMessageDescriptor[];
export declare function findUserMessageByName(name: UserMessageName): IUserMessageDescriptor;
export declare function findUserMessageByType(type: ECstrike15UserMessages): IUserMessageDescriptor;
export {};
