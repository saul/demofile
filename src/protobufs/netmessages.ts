/* eslint-disable */
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

export interface CNETMsgNOP {}

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

const baseCMsgVector: object = {
  x: 0,
  y: 0,
  z: 0
};

const baseCMsgVector2D: object = {
  x: 0,
  y: 0
};

const baseCMsgQAngle: object = {
  x: 0,
  y: 0,
  z: 0
};

const baseCMsgRGBA: object = {
  r: 0,
  g: 0,
  b: 0,
  a: 0
};

const baseCNETMsgTick: object = {
  tick: 0,
  hostComputationtime: 0,
  hostComputationtimeStdDeviation: 0,
  hostFramestarttimeStdDeviation: 0,
  hltvReplayFlags: 0
};

const baseCNETMsgStringCmd: object = {
  command: ""
};

const baseCNETMsgSignonState: object = {
  signonState: 0,
  spawnCount: 0,
  numServerPlayers: 0,
  playersNetworkids: "",
  mapName: ""
};

const baseCMsgCVars: object = {};

const baseCMsgCVars_CVar: object = {
  name: "",
  value: "",
  dictionaryName: 0
};

const baseCNETMsgSetConVar: object = {};

const baseCNETMsgNOP: object = {};

const baseCNETMsgDisconnect: object = {
  text: ""
};

const baseCNETMsgFile: object = {
  transferId: 0,
  fileName: "",
  isReplayDemoFile: false,
  deny: false
};

const baseCNETMsgSplitScreenUser: object = {
  slot: 0
};

const baseCNETMsgPlayerAvatarData: object = {
  accountid: 0
};

const baseCCLCMsgClientInfo: object = {
  sendTableCrc: 0,
  serverCount: 0,
  isHltv: false,
  isReplay: false,
  friendsId: 0,
  friendsName: "",
  customFiles: 0
};

const baseCCLCMsgMove: object = {
  numBackupCommands: 0,
  numNewCommands: 0
};

const baseCCLCMsgVoiceData: object = {
  xuid: Long.UZERO,
  format: 0,
  sequenceBytes: 0,
  sectionNumber: 0,
  uncompressedSampleOffset: 0
};

const baseCCLCMsgBaselineAck: object = {
  baselineTick: 0,
  baselineNr: 0
};

const baseCCLCMsgListenEvents: object = {
  eventMask: 0
};

const baseCCLCMsgRespondCvarValue: object = {
  cookie: 0,
  statusCode: 0,
  name: "",
  value: ""
};

const baseCCLCMsgFileCRCCheck: object = {
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

const baseCCLCMsgLoadingProgress: object = {
  progress: 0
};

const baseCCLCMsgSplitPlayerConnect: object = {};

const baseCCLCMsgCmdKeyValues: object = {};

const baseCSVCMsgServerInfo: object = {
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

const baseCSVCMsgClassInfo: object = {
  createOnClient: false
};

const baseCSVCMsgClassInfo_classT: object = {
  classId: 0,
  dataTableName: "",
  className: ""
};

const baseCSVCMsgSendTable: object = {
  isEnd: false,
  netTableName: "",
  needsDecoder: false
};

const baseCSVCMsgSendTable_sendpropT: object = {
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

const baseCSVCMsgPrint: object = {
  text: ""
};

const baseCSVCMsgSetPause: object = {
  paused: false
};

const baseCSVCMsgSetView: object = {
  entityIndex: 0
};

const baseCSVCMsgCreateStringTable: object = {
  name: "",
  maxEntries: 0,
  numEntries: 0,
  userDataFixedSize: false,
  userDataSize: 0,
  userDataSizeBits: 0,
  flags: 0
};

const baseCSVCMsgUpdateStringTable: object = {
  tableId: 0,
  numChangedEntries: 0
};

const baseCSVCMsgVoiceInit: object = {
  quality: 0,
  codec: "",
  version: 0
};

const baseCSVCMsgVoiceData: object = {
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

const baseCSVCMsgFixAngle: object = {
  relative: false
};

const baseCSVCMsgCrosshairAngle: object = {};

const baseCSVCMsgPrefetch: object = {
  soundIndex: 0
};

const baseCSVCMsgBSPDecal: object = {
  decalTextureIndex: 0,
  entityIndex: 0,
  modelIndex: 0,
  lowPriority: false
};

const baseCSVCMsgSplitScreen: object = {
  type: 0,
  slot: 0,
  playerIndex: 0
};

const baseCSVCMsgGetCvarValue: object = {
  cookie: 0,
  cvarName: ""
};

const baseCSVCMsgMenu: object = {
  dialogType: 0
};

const baseCSVCMsgUserMessage: object = {
  msgType: 0,
  passthrough: 0
};

const baseCSVCMsgPaintmapData: object = {};

const baseCSVCMsgGameEvent: object = {
  eventName: "",
  eventid: 0,
  passthrough: 0
};

const baseCSVCMsgGameEvent_keyT: object = {
  type: 0,
  valString: "",
  valFloat: 0,
  valLong: 0,
  valShort: 0,
  valByte: 0,
  valBool: false,
  valUint64: Long.UZERO
};

const baseCSVCMsgGameEventList: object = {};

const baseCSVCMsgGameEventList_keyT: object = {
  type: 0,
  name: ""
};

const baseCSVCMsgGameEventList_descriptorT: object = {
  eventid: 0,
  name: ""
};

const baseCSVCMsgTempEntities: object = {
  reliable: false,
  numEntries: 0
};

const baseCSVCMsgPacketEntities: object = {
  maxEntries: 0,
  updatedEntries: 0,
  isDelta: false,
  updateBaseline: false,
  baseline: 0,
  deltaFrom: 0
};

const baseCSVCMsgSounds: object = {
  reliableSound: false
};

const baseCSVCMsgSounds_sounddataT: object = {
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

const baseCSVCMsgEntityMsg: object = {
  entIndex: 0,
  classId: 0
};

const baseCSVCMsgCmdKeyValues: object = {};

const baseCSVCMsgEncryptedData: object = {
  keyType: 0
};

const baseCSVCMsgHltvReplay: object = {
  delay: 0,
  primaryTarget: 0,
  replayStopAt: 0,
  replayStartAt: 0,
  replaySlowdownBegin: 0,
  replaySlowdownEnd: 0,
  replaySlowdownRate: 0
};

const baseCCLCMsgHltvReplay: object = {
  request: 0,
  slowdownLength: 0,
  slowdownRate: 0,
  primaryTargetEntIndex: 0,
  eventTime: 0
};

const baseCSVCMsgBroadcastCommand: object = {
  cmd: ""
};

export const protobufPackage = "";

export enum NETMessages {
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

export enum CLCMessages {
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

export enum VoiceDataFormatT {
  VOICEDATA_FORMAT_STEAM = 0,
  VOICEDATA_FORMAT_ENGINE = 1
}

export enum ESplitScreenMessageType {
  MSG_SPLITSCREEN_ADDUSER = 0,
  MSG_SPLITSCREEN_REMOVEUSER = 1,
  MSG_SPLITSCREEN_TYPE_BITS = 1
}

export enum SVCMessages {
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

export enum ReplayEventTypeT {
  REPLAY_EVENT_CANCEL = 0,
  REPLAY_EVENT_DEATH = 1,
  REPLAY_EVENT_GENERIC = 2,
  REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3
}

export const CMsgVector = {
  encode(message: CMsgVector, writer: Writer = Writer.create()): Writer {
    writer.uint32(13).float(message.x);
    writer.uint32(21).float(message.y);
    writer.uint32(29).float(message.z);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgVector {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgVector } as CMsgVector;
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

export const CMsgVector2D = {
  encode(message: CMsgVector2D, writer: Writer = Writer.create()): Writer {
    writer.uint32(13).float(message.x);
    writer.uint32(21).float(message.y);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgVector2D {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgVector2D } as CMsgVector2D;
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

export const CMsgQAngle = {
  encode(message: CMsgQAngle, writer: Writer = Writer.create()): Writer {
    writer.uint32(13).float(message.x);
    writer.uint32(21).float(message.y);
    writer.uint32(29).float(message.z);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgQAngle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgQAngle } as CMsgQAngle;
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

export const CMsgRGBA = {
  encode(message: CMsgRGBA, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.r);
    writer.uint32(16).int32(message.g);
    writer.uint32(24).int32(message.b);
    writer.uint32(32).int32(message.a);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgRGBA {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgRGBA } as CMsgRGBA;
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

export const CNETMsgTick = {
  encode(message: CNETMsgTick, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.tick);
    writer.uint32(32).uint32(message.hostComputationtime);
    writer.uint32(40).uint32(message.hostComputationtimeStdDeviation);
    writer.uint32(48).uint32(message.hostFramestarttimeStdDeviation);
    writer.uint32(56).uint32(message.hltvReplayFlags);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgTick {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgTick } as CNETMsgTick;
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

export const CNETMsgStringCmd = {
  encode(message: CNETMsgStringCmd, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.command);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgStringCmd {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgStringCmd } as CNETMsgStringCmd;
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

export const CNETMsgSignonState = {
  encode(
    message: CNETMsgSignonState,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.signonState);
    writer.uint32(16).uint32(message.spawnCount);
    writer.uint32(24).uint32(message.numServerPlayers);
    for (const v of message.playersNetworkids) {
      writer.uint32(34).string(v!);
    }
    writer.uint32(42).string(message.mapName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgSignonState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgSignonState } as CNETMsgSignonState;
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

export const CMsgCVars = {
  encode(message: CMsgCVars, writer: Writer = Writer.create()): Writer {
    for (const v of message.cvars) {
      CMsgCVars_CVar.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgCVars {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgCVars } as CMsgCVars;
    message.cvars = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cvars.push(CMsgCVars_CVar.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CMsgCVars_CVar = {
  encode(message: CMsgCVars_CVar, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.value);
    writer.uint32(24).uint32(message.dictionaryName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgCVars_CVar {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgCVars_CVar } as CMsgCVars_CVar;
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

export const CNETMsgSetConVar = {
  encode(message: CNETMsgSetConVar, writer: Writer = Writer.create()): Writer {
    if (message.convars !== undefined && message.convars !== undefined) {
      CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgSetConVar {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgSetConVar } as CNETMsgSetConVar;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convars = CMsgCVars.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CNETMsgNOP = {
  encode(_: CNETMsgNOP, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgNOP {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgNOP } as CNETMsgNOP;
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

export const CNETMsgDisconnect = {
  encode(message: CNETMsgDisconnect, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgDisconnect {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgDisconnect } as CNETMsgDisconnect;
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

export const CNETMsgFile = {
  encode(message: CNETMsgFile, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.transferId);
    writer.uint32(18).string(message.fileName);
    writer.uint32(24).bool(message.isReplayDemoFile);
    writer.uint32(32).bool(message.deny);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgFile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgFile } as CNETMsgFile;
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

export const CNETMsgSplitScreenUser = {
  encode(
    message: CNETMsgSplitScreenUser,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.slot);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgSplitScreenUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCNETMsgSplitScreenUser } as CNETMsgSplitScreenUser;
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

export const CNETMsgPlayerAvatarData = {
  encode(
    message: CNETMsgPlayerAvatarData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(18).bytes(message.rgb);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CNETMsgPlayerAvatarData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCNETMsgPlayerAvatarData
    } as CNETMsgPlayerAvatarData;
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

export const CCLCMsgClientInfo = {
  encode(message: CCLCMsgClientInfo, writer: Writer = Writer.create()): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgClientInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgClientInfo } as CCLCMsgClientInfo;
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
          } else {
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

export const CCLCMsgMove = {
  encode(message: CCLCMsgMove, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.numBackupCommands);
    writer.uint32(16).uint32(message.numNewCommands);
    writer.uint32(26).bytes(message.data);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgMove {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgMove } as CCLCMsgMove;
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

export const CCLCMsgVoiceData = {
  encode(message: CCLCMsgVoiceData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.data);
    writer.uint32(17).fixed64(message.xuid);
    writer.uint32(24).int32(message.format);
    writer.uint32(32).int32(message.sequenceBytes);
    writer.uint32(40).uint32(message.sectionNumber);
    writer.uint32(48).uint32(message.uncompressedSampleOffset);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgVoiceData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgVoiceData } as CCLCMsgVoiceData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.xuid = reader.fixed64() as Long;
          break;
        case 3:
          message.format = reader.int32() as any;
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

export const CCLCMsgBaselineAck = {
  encode(
    message: CCLCMsgBaselineAck,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.baselineTick);
    writer.uint32(16).int32(message.baselineNr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgBaselineAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgBaselineAck } as CCLCMsgBaselineAck;
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

export const CCLCMsgListenEvents = {
  encode(
    message: CCLCMsgListenEvents,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.eventMask) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgListenEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgListenEvents } as CCLCMsgListenEvents;
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
          } else {
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

export const CCLCMsgRespondCvarValue = {
  encode(
    message: CCLCMsgRespondCvarValue,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.cookie);
    writer.uint32(16).int32(message.statusCode);
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgRespondCvarValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCLCMsgRespondCvarValue
    } as CCLCMsgRespondCvarValue;
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

export const CCLCMsgFileCRCCheck = {
  encode(
    message: CCLCMsgFileCRCCheck,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgFileCRCCheck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgFileCRCCheck } as CCLCMsgFileCRCCheck;
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

export const CCLCMsgLoadingProgress = {
  encode(
    message: CCLCMsgLoadingProgress,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.progress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgLoadingProgress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgLoadingProgress } as CCLCMsgLoadingProgress;
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

export const CCLCMsgSplitPlayerConnect = {
  encode(
    message: CCLCMsgSplitPlayerConnect,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.convars !== undefined && message.convars !== undefined) {
      CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCLCMsgSplitPlayerConnect {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCLCMsgSplitPlayerConnect
    } as CCLCMsgSplitPlayerConnect;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convars = CMsgCVars.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CCLCMsgCmdKeyValues = {
  encode(
    message: CCLCMsgCmdKeyValues,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).bytes(message.keyvalues);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgCmdKeyValues {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgCmdKeyValues } as CCLCMsgCmdKeyValues;
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

export const CSVCMsgServerInfo = {
  encode(message: CSVCMsgServerInfo, writer: Writer = Writer.create()): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgServerInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgServerInfo } as CSVCMsgServerInfo;
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
          message.ugcMapId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgClassInfo = {
  encode(message: CSVCMsgClassInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.createOnClient);
    for (const v of message.classes) {
      CSVCMsgClassInfo_classT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgClassInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgClassInfo } as CSVCMsgClassInfo;
    message.classes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createOnClient = reader.bool();
          break;
        case 2:
          message.classes.push(
            CSVCMsgClassInfo_classT.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgClassInfo_classT = {
  encode(
    message: CSVCMsgClassInfo_classT,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.classId);
    writer.uint32(18).string(message.dataTableName);
    writer.uint32(26).string(message.className);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgClassInfo_classT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgClassInfo_classT
    } as CSVCMsgClassInfo_classT;
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

export const CSVCMsgSendTable = {
  encode(message: CSVCMsgSendTable, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.isEnd);
    writer.uint32(18).string(message.netTableName);
    writer.uint32(24).bool(message.needsDecoder);
    for (const v of message.props) {
      CSVCMsgSendTable_sendpropT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgSendTable {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgSendTable } as CSVCMsgSendTable;
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
          message.props.push(
            CSVCMsgSendTable_sendpropT.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgSendTable_sendpropT = {
  encode(
    message: CSVCMsgSendTable_sendpropT,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSVCMsgSendTable_sendpropT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgSendTable_sendpropT
    } as CSVCMsgSendTable_sendpropT;
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

export const CSVCMsgPrint = {
  encode(message: CSVCMsgPrint, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgPrint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgPrint } as CSVCMsgPrint;
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

export const CSVCMsgSetPause = {
  encode(message: CSVCMsgSetPause, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.paused);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgSetPause {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgSetPause } as CSVCMsgSetPause;
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

export const CSVCMsgSetView = {
  encode(message: CSVCMsgSetView, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.entityIndex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgSetView {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgSetView } as CSVCMsgSetView;
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

export const CSVCMsgCreateStringTable = {
  encode(
    message: CSVCMsgCreateStringTable,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSVCMsgCreateStringTable {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgCreateStringTable
    } as CSVCMsgCreateStringTable;
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

export const CSVCMsgUpdateStringTable = {
  encode(
    message: CSVCMsgUpdateStringTable,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.tableId);
    writer.uint32(16).int32(message.numChangedEntries);
    writer.uint32(26).bytes(message.stringData);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSVCMsgUpdateStringTable {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgUpdateStringTable
    } as CSVCMsgUpdateStringTable;
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

export const CSVCMsgVoiceInit = {
  encode(message: CSVCMsgVoiceInit, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.quality);
    writer.uint32(18).string(message.codec);
    writer.uint32(24).int32(message.version);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgVoiceInit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgVoiceInit } as CSVCMsgVoiceInit;
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

export const CSVCMsgVoiceData = {
  encode(message: CSVCMsgVoiceData, writer: Writer = Writer.create()): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgVoiceData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgVoiceData } as CSVCMsgVoiceData;
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
          message.xuid = reader.fixed64() as Long;
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
          message.format = reader.int32() as any;
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

export const CSVCMsgFixAngle = {
  encode(message: CSVCMsgFixAngle, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.relative);
    if (message.angle !== undefined && message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgFixAngle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgFixAngle } as CSVCMsgFixAngle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relative = reader.bool();
          break;
        case 2:
          message.angle = CMsgQAngle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgCrosshairAngle = {
  encode(
    message: CSVCMsgCrosshairAngle,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.angle !== undefined && message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgCrosshairAngle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgCrosshairAngle } as CSVCMsgCrosshairAngle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.angle = CMsgQAngle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgPrefetch = {
  encode(message: CSVCMsgPrefetch, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.soundIndex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgPrefetch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgPrefetch } as CSVCMsgPrefetch;
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

export const CSVCMsgBSPDecal = {
  encode(message: CSVCMsgBSPDecal, writer: Writer = Writer.create()): Writer {
    if (message.pos !== undefined && message.pos !== undefined) {
      CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).int32(message.decalTextureIndex);
    writer.uint32(24).int32(message.entityIndex);
    writer.uint32(32).int32(message.modelIndex);
    writer.uint32(40).bool(message.lowPriority);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgBSPDecal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgBSPDecal } as CSVCMsgBSPDecal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pos = CMsgVector.decode(reader, reader.uint32());
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

export const CSVCMsgSplitScreen = {
  encode(
    message: CSVCMsgSplitScreen,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(16).int32(message.slot);
    writer.uint32(24).int32(message.playerIndex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgSplitScreen {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgSplitScreen } as CSVCMsgSplitScreen;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
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

export const CSVCMsgGetCvarValue = {
  encode(
    message: CSVCMsgGetCvarValue,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.cookie);
    writer.uint32(18).string(message.cvarName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgGetCvarValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgGetCvarValue } as CSVCMsgGetCvarValue;
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

export const CSVCMsgMenu = {
  encode(message: CSVCMsgMenu, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.dialogType);
    writer.uint32(18).bytes(message.menuKeyValues);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgMenu {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgMenu } as CSVCMsgMenu;
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

export const CSVCMsgUserMessage = {
  encode(
    message: CSVCMsgUserMessage,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.msgType);
    writer.uint32(18).bytes(message.msgData);
    writer.uint32(24).int32(message.passthrough);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgUserMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgUserMessage } as CSVCMsgUserMessage;
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

export const CSVCMsgPaintmapData = {
  encode(
    message: CSVCMsgPaintmapData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).bytes(message.paintmap);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgPaintmapData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgPaintmapData } as CSVCMsgPaintmapData;
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

export const CSVCMsgGameEvent = {
  encode(message: CSVCMsgGameEvent, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.eventName);
    writer.uint32(16).int32(message.eventid);
    for (const v of message.keys) {
      CSVCMsgGameEvent_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int32(message.passthrough);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgGameEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgGameEvent } as CSVCMsgGameEvent;
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
          message.keys.push(
            CSVCMsgGameEvent_keyT.decode(reader, reader.uint32())
          );
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

export const CSVCMsgGameEvent_keyT = {
  encode(
    message: CSVCMsgGameEvent_keyT,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgGameEvent_keyT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgGameEvent_keyT } as CSVCMsgGameEvent_keyT;
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
          message.valUint64 = reader.uint64() as Long;
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

export const CSVCMsgGameEventList = {
  encode(
    message: CSVCMsgGameEventList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.descriptors) {
      CSVCMsgGameEventList_descriptorT.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgGameEventList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgGameEventList } as CSVCMsgGameEventList;
    message.descriptors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.descriptors.push(
            CSVCMsgGameEventList_descriptorT.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgGameEventList_keyT = {
  encode(
    message: CSVCMsgGameEventList_keyT,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(18).string(message.name);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSVCMsgGameEventList_keyT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgGameEventList_keyT
    } as CSVCMsgGameEventList_keyT;
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

export const CSVCMsgGameEventList_descriptorT = {
  encode(
    message: CSVCMsgGameEventList_descriptorT,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eventid);
    writer.uint32(18).string(message.name);
    for (const v of message.keys) {
      CSVCMsgGameEventList_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSVCMsgGameEventList_descriptorT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgGameEventList_descriptorT
    } as CSVCMsgGameEventList_descriptorT;
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
          message.keys.push(
            CSVCMsgGameEventList_keyT.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgTempEntities = {
  encode(
    message: CSVCMsgTempEntities,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.reliable);
    writer.uint32(16).int32(message.numEntries);
    writer.uint32(26).bytes(message.entityData);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgTempEntities {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgTempEntities } as CSVCMsgTempEntities;
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

export const CSVCMsgPacketEntities = {
  encode(
    message: CSVCMsgPacketEntities,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.maxEntries);
    writer.uint32(16).int32(message.updatedEntries);
    writer.uint32(24).bool(message.isDelta);
    writer.uint32(32).bool(message.updateBaseline);
    writer.uint32(40).int32(message.baseline);
    writer.uint32(48).int32(message.deltaFrom);
    writer.uint32(58).bytes(message.entityData);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgPacketEntities {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgPacketEntities } as CSVCMsgPacketEntities;
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

export const CSVCMsgSounds = {
  encode(message: CSVCMsgSounds, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.reliableSound);
    for (const v of message.sounds) {
      CSVCMsgSounds_sounddataT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgSounds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgSounds } as CSVCMsgSounds;
    message.sounds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reliableSound = reader.bool();
          break;
        case 2:
          message.sounds.push(
            CSVCMsgSounds_sounddataT.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CSVCMsgSounds_sounddataT = {
  encode(
    message: CSVCMsgSounds_sounddataT,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSVCMsgSounds_sounddataT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgSounds_sounddataT
    } as CSVCMsgSounds_sounddataT;
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

export const CSVCMsgEntityMsg = {
  encode(message: CSVCMsgEntityMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.entIndex);
    writer.uint32(16).int32(message.classId);
    writer.uint32(26).bytes(message.entData);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgEntityMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgEntityMsg } as CSVCMsgEntityMsg;
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

export const CSVCMsgCmdKeyValues = {
  encode(
    message: CSVCMsgCmdKeyValues,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).bytes(message.keyvalues);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgCmdKeyValues {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgCmdKeyValues } as CSVCMsgCmdKeyValues;
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

export const CSVCMsgEncryptedData = {
  encode(
    message: CSVCMsgEncryptedData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).bytes(message.encrypted);
    writer.uint32(16).int32(message.keyType);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgEncryptedData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgEncryptedData } as CSVCMsgEncryptedData;
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

export const CSVCMsgHltvReplay = {
  encode(message: CSVCMsgHltvReplay, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.delay);
    writer.uint32(16).int32(message.primaryTarget);
    writer.uint32(24).int32(message.replayStopAt);
    writer.uint32(32).int32(message.replayStartAt);
    writer.uint32(40).int32(message.replaySlowdownBegin);
    writer.uint32(48).int32(message.replaySlowdownEnd);
    writer.uint32(61).float(message.replaySlowdownRate);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgHltvReplay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSVCMsgHltvReplay } as CSVCMsgHltvReplay;
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

export const CCLCMsgHltvReplay = {
  encode(message: CCLCMsgHltvReplay, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.request);
    writer.uint32(21).float(message.slowdownLength);
    writer.uint32(29).float(message.slowdownRate);
    writer.uint32(32).int32(message.primaryTargetEntIndex);
    writer.uint32(45).float(message.eventTime);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCLCMsgHltvReplay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCLCMsgHltvReplay } as CCLCMsgHltvReplay;
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

export const CSVCMsgBroadcastCommand = {
  encode(
    message: CSVCMsgBroadcastCommand,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.cmd);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSVCMsgBroadcastCommand {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSVCMsgBroadcastCommand
    } as CSVCMsgBroadcastCommand;
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
