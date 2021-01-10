import {
  CNETMsgDisconnect,
  CNETMsgFile,
  CNETMsgNOP,
  CNETMsgPlayerAvatarData,
  CNETMsgSetConVar,
  CNETMsgSignonState,
  CNETMsgSplitScreenUser,
  CNETMsgStringCmd,
  CNETMsgTick,
  CSVCMsgBroadcastCommand,
  CSVCMsgBSPDecal,
  CSVCMsgClassInfo,
  CSVCMsgCmdKeyValues,
  CSVCMsgCreateStringTable,
  CSVCMsgCrosshairAngle,
  CSVCMsgEncryptedData,
  CSVCMsgEntityMsg,
  CSVCMsgFixAngle,
  CSVCMsgGameEvent,
  CSVCMsgGameEventList,
  CSVCMsgGetCvarValue,
  CSVCMsgHltvReplay,
  CSVCMsgMenu,
  CSVCMsgPacketEntities,
  CSVCMsgPaintmapData,
  CSVCMsgPrefetch,
  CSVCMsgPrint,
  CSVCMsgSendTable,
  CSVCMsgServerInfo,
  CSVCMsgSetPause,
  CSVCMsgSetView,
  CSVCMsgSounds,
  CSVCMsgSplitScreen,
  CSVCMsgTempEntities,
  CSVCMsgUpdateStringTable,
  CSVCMsgUserMessage,
  CSVCMsgVoiceData,
  CSVCMsgVoiceInit,
  NETMessages,
  SVCMessages
} from "./protobufs/netmessages";

export type NetMessageName =
  | keyof typeof NETMessages
  | keyof typeof SVCMessages;

interface NetMessage {
  decode(buf: Uint8Array): any;
}

interface INetMessageDescriptor {
  name: NetMessageName;
  class: NetMessage;
}

export let messages: INetMessageDescriptor[] = [];
messages[NETMessages.net_NOP] = { name: "net_NOP", class: CNETMsgNOP };
messages[NETMessages.net_Disconnect] = {
  name: "net_Disconnect",
  class: CNETMsgDisconnect
};
messages[NETMessages.net_File] = { name: "net_File", class: CNETMsgFile };
messages[NETMessages.net_SplitScreenUser] = {
  name: "net_SplitScreenUser",
  class: CNETMsgSplitScreenUser
};
messages[NETMessages.net_Tick] = { name: "net_Tick", class: CNETMsgTick };
messages[NETMessages.net_StringCmd] = {
  name: "net_StringCmd",
  class: CNETMsgStringCmd
};
messages[NETMessages.net_SetConVar] = {
  name: "net_SetConVar",
  class: CNETMsgSetConVar
};
messages[NETMessages.net_SignonState] = {
  name: "net_SignonState",
  class: CNETMsgSignonState
};
messages[NETMessages.net_PlayerAvatarData] = {
  name: "net_PlayerAvatarData",
  class: CNETMsgPlayerAvatarData
};
messages[SVCMessages.svc_ServerInfo] = {
  name: "svc_ServerInfo",
  class: CSVCMsgServerInfo
};
messages[SVCMessages.svc_SendTable] = {
  name: "svc_SendTable",
  class: CSVCMsgSendTable
};
messages[SVCMessages.svc_ClassInfo] = {
  name: "svc_ClassInfo",
  class: CSVCMsgClassInfo
};
messages[SVCMessages.svc_SetPause] = {
  name: "svc_SetPause",
  class: CSVCMsgSetPause
};
messages[SVCMessages.svc_CreateStringTable] = {
  name: "svc_CreateStringTable",
  class: CSVCMsgCreateStringTable
};
messages[SVCMessages.svc_UpdateStringTable] = {
  name: "svc_UpdateStringTable",
  class: CSVCMsgUpdateStringTable
};
messages[SVCMessages.svc_VoiceInit] = {
  name: "svc_VoiceInit",
  class: CSVCMsgVoiceInit
};
messages[SVCMessages.svc_VoiceData] = {
  name: "svc_VoiceData",
  class: CSVCMsgVoiceData
};
messages[SVCMessages.svc_Print] = { name: "svc_Print", class: CSVCMsgPrint };
messages[SVCMessages.svc_Sounds] = { name: "svc_Sounds", class: CSVCMsgSounds };
messages[SVCMessages.svc_SetView] = {
  name: "svc_SetView",
  class: CSVCMsgSetView
};
messages[SVCMessages.svc_FixAngle] = {
  name: "svc_FixAngle",
  class: CSVCMsgFixAngle
};
messages[SVCMessages.svc_CrosshairAngle] = {
  name: "svc_CrosshairAngle",
  class: CSVCMsgCrosshairAngle
};
messages[SVCMessages.svc_BSPDecal] = {
  name: "svc_BSPDecal",
  class: CSVCMsgBSPDecal
};
messages[SVCMessages.svc_SplitScreen] = {
  name: "svc_SplitScreen",
  class: CSVCMsgSplitScreen
};
messages[SVCMessages.svc_UserMessage] = {
  name: "svc_UserMessage",
  class: CSVCMsgUserMessage
};
messages[SVCMessages.svc_EntityMessage] = {
  name: "svc_EntityMessage",
  class: CSVCMsgEntityMsg
};
messages[SVCMessages.svc_GameEvent] = {
  name: "svc_GameEvent",
  class: CSVCMsgGameEvent
};
messages[SVCMessages.svc_PacketEntities] = {
  name: "svc_PacketEntities",
  class: CSVCMsgPacketEntities
};
messages[SVCMessages.svc_TempEntities] = {
  name: "svc_TempEntities",
  class: CSVCMsgTempEntities
};
messages[SVCMessages.svc_Prefetch] = {
  name: "svc_Prefetch",
  class: CSVCMsgPrefetch
};
messages[SVCMessages.svc_Menu] = { name: "svc_Menu", class: CSVCMsgMenu };
messages[SVCMessages.svc_GameEventList] = {
  name: "svc_GameEventList",
  class: CSVCMsgGameEventList
};
messages[SVCMessages.svc_GetCvarValue] = {
  name: "svc_GetCvarValue",
  class: CSVCMsgGetCvarValue
};
messages[SVCMessages.svc_PaintmapData] = {
  name: "svc_PaintmapData",
  class: CSVCMsgPaintmapData
};
messages[SVCMessages.svc_CmdKeyValues] = {
  name: "svc_CmdKeyValues",
  class: CSVCMsgCmdKeyValues
};
messages[SVCMessages.svc_EncryptedData] = {
  name: "svc_EncryptedData",
  class: CSVCMsgEncryptedData
};
messages[SVCMessages.svc_HltvReplay] = {
  name: "svc_HltvReplay",
  class: CSVCMsgHltvReplay
};
messages[SVCMessages.svc_Broadcast_Command] = {
  name: "svc_Broadcast_Command",
  class: CSVCMsgBroadcastCommand
};

export function findByName(name: NetMessageName) {
  return messages.find(
    descriptor => descriptor.name === name
  ) as INetMessageDescriptor;
}

export function findByType(type: NETMessages | SVCMessages) {
  return messages[type];
}
