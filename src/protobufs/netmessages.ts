/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

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

function createBaseCMsgVector(): CMsgVector {
  return { x: 0, y: 0, z: 0 };
}

export const CMsgVector = {
  encode(message: CMsgVector, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgVector {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgVector>, I>>(
    object: I
  ): CMsgVector {
    const message = createBaseCMsgVector();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  }
};

function createBaseCMsgVector2D(): CMsgVector2D {
  return { x: 0, y: 0 };
}

export const CMsgVector2D = {
  encode(message: CMsgVector2D, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgVector2D {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgVector2D>, I>>(
    object: I
  ): CMsgVector2D {
    const message = createBaseCMsgVector2D();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  }
};

function createBaseCMsgQAngle(): CMsgQAngle {
  return { x: 0, y: 0, z: 0 };
}

export const CMsgQAngle = {
  encode(message: CMsgQAngle, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgQAngle {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgQAngle>, I>>(
    object: I
  ): CMsgQAngle {
    const message = createBaseCMsgQAngle();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  }
};

function createBaseCMsgRGBA(): CMsgRGBA {
  return { r: 0, g: 0, b: 0, a: 0 };
}

export const CMsgRGBA = {
  encode(message: CMsgRGBA, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgRGBA {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgRGBA>, I>>(object: I): CMsgRGBA {
    const message = createBaseCMsgRGBA();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    message.a = object.a ?? 0;
    return message;
  }
};

function createBaseCNETMsgTick(): CNETMsgTick {
  return {
    tick: 0,
    hostComputationtime: 0,
    hostComputationtimeStdDeviation: 0,
    hostFramestarttimeStdDeviation: 0,
    hltvReplayFlags: 0
  };
}

export const CNETMsgTick = {
  encode(message: CNETMsgTick, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CNETMsgTick {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgTick>, I>>(
    object: I
  ): CNETMsgTick {
    const message = createBaseCNETMsgTick();
    message.tick = object.tick ?? 0;
    message.hostComputationtime = object.hostComputationtime ?? 0;
    message.hostComputationtimeStdDeviation =
      object.hostComputationtimeStdDeviation ?? 0;
    message.hostFramestarttimeStdDeviation =
      object.hostFramestarttimeStdDeviation ?? 0;
    message.hltvReplayFlags = object.hltvReplayFlags ?? 0;
    return message;
  }
};

function createBaseCNETMsgStringCmd(): CNETMsgStringCmd {
  return { command: "" };
}

export const CNETMsgStringCmd = {
  encode(message: CNETMsgStringCmd, writer: Writer = Writer.create()): Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgStringCmd {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgStringCmd>, I>>(
    object: I
  ): CNETMsgStringCmd {
    const message = createBaseCNETMsgStringCmd();
    message.command = object.command ?? "";
    return message;
  }
};

function createBaseCNETMsgSignonState(): CNETMsgSignonState {
  return {
    signonState: 0,
    spawnCount: 0,
    numServerPlayers: 0,
    playersNetworkids: [],
    mapName: ""
  };
}

export const CNETMsgSignonState = {
  encode(
    message: CNETMsgSignonState,
    writer: Writer = Writer.create()
  ): Writer {
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
      writer.uint32(34).string(v!);
    }
    if (message.mapName !== "") {
      writer.uint32(42).string(message.mapName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgSignonState {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgSignonState>, I>>(
    object: I
  ): CNETMsgSignonState {
    const message = createBaseCNETMsgSignonState();
    message.signonState = object.signonState ?? 0;
    message.spawnCount = object.spawnCount ?? 0;
    message.numServerPlayers = object.numServerPlayers ?? 0;
    message.playersNetworkids = object.playersNetworkids?.map(e => e) || [];
    message.mapName = object.mapName ?? "";
    return message;
  }
};

function createBaseCMsgCVars(): CMsgCVars {
  return { cvars: [] };
}

export const CMsgCVars = {
  encode(message: CMsgCVars, writer: Writer = Writer.create()): Writer {
    for (const v of message.cvars) {
      CMsgCVars_CVar.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgCVars {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCVars();
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
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCVars>, I>>(
    object: I
  ): CMsgCVars {
    const message = createBaseCMsgCVars();
    message.cvars = object.cvars?.map(e => CMsgCVars_CVar.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCMsgCVars_CVar(): CMsgCVars_CVar {
  return { name: "", value: "", dictionaryName: 0 };
}

export const CMsgCVars_CVar = {
  encode(message: CMsgCVars_CVar, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgCVars_CVar {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgCVars_CVar>, I>>(
    object: I
  ): CMsgCVars_CVar {
    const message = createBaseCMsgCVars_CVar();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.dictionaryName = object.dictionaryName ?? 0;
    return message;
  }
};

function createBaseCNETMsgSetConVar(): CNETMsgSetConVar {
  return { convars: undefined };
}

export const CNETMsgSetConVar = {
  encode(message: CNETMsgSetConVar, writer: Writer = Writer.create()): Writer {
    if (message.convars !== undefined) {
      CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgSetConVar {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSetConVar();
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
  },

  fromPartial<I extends Exact<DeepPartial<CNETMsgSetConVar>, I>>(
    object: I
  ): CNETMsgSetConVar {
    const message = createBaseCNETMsgSetConVar();
    message.convars =
      object.convars !== undefined && object.convars !== null
        ? CMsgCVars.fromPartial(object.convars)
        : undefined;
    return message;
  }
};

function createBaseCNETMsgNOP(): CNETMsgNOP {
  return {};
}

export const CNETMsgNOP = {
  encode(_: CNETMsgNOP, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgNOP {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgNOP>, I>>(_: I): CNETMsgNOP {
    const message = createBaseCNETMsgNOP();
    return message;
  }
};

function createBaseCNETMsgDisconnect(): CNETMsgDisconnect {
  return { text: "" };
}

export const CNETMsgDisconnect = {
  encode(message: CNETMsgDisconnect, writer: Writer = Writer.create()): Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgDisconnect {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgDisconnect>, I>>(
    object: I
  ): CNETMsgDisconnect {
    const message = createBaseCNETMsgDisconnect();
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCNETMsgFile(): CNETMsgFile {
  return { transferId: 0, fileName: "", isReplayDemoFile: false, deny: false };
}

export const CNETMsgFile = {
  encode(message: CNETMsgFile, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CNETMsgFile {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgFile>, I>>(
    object: I
  ): CNETMsgFile {
    const message = createBaseCNETMsgFile();
    message.transferId = object.transferId ?? 0;
    message.fileName = object.fileName ?? "";
    message.isReplayDemoFile = object.isReplayDemoFile ?? false;
    message.deny = object.deny ?? false;
    return message;
  }
};

function createBaseCNETMsgSplitScreenUser(): CNETMsgSplitScreenUser {
  return { slot: 0 };
}

export const CNETMsgSplitScreenUser = {
  encode(
    message: CNETMsgSplitScreenUser,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.slot !== 0) {
      writer.uint32(8).int32(message.slot);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgSplitScreenUser {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgSplitScreenUser>, I>>(
    object: I
  ): CNETMsgSplitScreenUser {
    const message = createBaseCNETMsgSplitScreenUser();
    message.slot = object.slot ?? 0;
    return message;
  }
};

function createBaseCNETMsgPlayerAvatarData(): CNETMsgPlayerAvatarData {
  return { accountid: 0, rgb: new Uint8Array() };
}

export const CNETMsgPlayerAvatarData = {
  encode(
    message: CNETMsgPlayerAvatarData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.rgb.length !== 0) {
      writer.uint32(18).bytes(message.rgb);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CNETMsgPlayerAvatarData {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CNETMsgPlayerAvatarData>, I>>(
    object: I
  ): CNETMsgPlayerAvatarData {
    const message = createBaseCNETMsgPlayerAvatarData();
    message.accountid = object.accountid ?? 0;
    message.rgb = object.rgb ?? new Uint8Array();
    return message;
  }
};

function createBaseCCLCMsgClientInfo(): CCLCMsgClientInfo {
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

export const CCLCMsgClientInfo = {
  encode(message: CCLCMsgClientInfo, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgClientInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<I extends Exact<DeepPartial<CCLCMsgClientInfo>, I>>(
    object: I
  ): CCLCMsgClientInfo {
    const message = createBaseCCLCMsgClientInfo();
    message.sendTableCrc = object.sendTableCrc ?? 0;
    message.serverCount = object.serverCount ?? 0;
    message.isHltv = object.isHltv ?? false;
    message.isReplay = object.isReplay ?? false;
    message.friendsId = object.friendsId ?? 0;
    message.friendsName = object.friendsName ?? "";
    message.customFiles = object.customFiles?.map(e => e) || [];
    return message;
  }
};

function createBaseCCLCMsgMove(): CCLCMsgMove {
  return { numBackupCommands: 0, numNewCommands: 0, data: new Uint8Array() };
}

export const CCLCMsgMove = {
  encode(message: CCLCMsgMove, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgMove {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgMove>, I>>(
    object: I
  ): CCLCMsgMove {
    const message = createBaseCCLCMsgMove();
    message.numBackupCommands = object.numBackupCommands ?? 0;
    message.numNewCommands = object.numNewCommands ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};

function createBaseCCLCMsgVoiceData(): CCLCMsgVoiceData {
  return {
    data: new Uint8Array(),
    xuid: Long.UZERO,
    format: 0,
    sequenceBytes: 0,
    sectionNumber: 0,
    uncompressedSampleOffset: 0
  };
}

export const CCLCMsgVoiceData = {
  encode(message: CCLCMsgVoiceData, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgVoiceData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgVoiceData();
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
  },

  fromPartial<I extends Exact<DeepPartial<CCLCMsgVoiceData>, I>>(
    object: I
  ): CCLCMsgVoiceData {
    const message = createBaseCCLCMsgVoiceData();
    message.data = object.data ?? new Uint8Array();
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.format = object.format ?? 0;
    message.sequenceBytes = object.sequenceBytes ?? 0;
    message.sectionNumber = object.sectionNumber ?? 0;
    message.uncompressedSampleOffset = object.uncompressedSampleOffset ?? 0;
    return message;
  }
};

function createBaseCCLCMsgBaselineAck(): CCLCMsgBaselineAck {
  return { baselineTick: 0, baselineNr: 0 };
}

export const CCLCMsgBaselineAck = {
  encode(
    message: CCLCMsgBaselineAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baselineTick !== 0) {
      writer.uint32(8).int32(message.baselineTick);
    }
    if (message.baselineNr !== 0) {
      writer.uint32(16).int32(message.baselineNr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgBaselineAck {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgBaselineAck>, I>>(
    object: I
  ): CCLCMsgBaselineAck {
    const message = createBaseCCLCMsgBaselineAck();
    message.baselineTick = object.baselineTick ?? 0;
    message.baselineNr = object.baselineNr ?? 0;
    return message;
  }
};

function createBaseCCLCMsgListenEvents(): CCLCMsgListenEvents {
  return { eventMask: [] };
}

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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgListenEvents {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<I extends Exact<DeepPartial<CCLCMsgListenEvents>, I>>(
    object: I
  ): CCLCMsgListenEvents {
    const message = createBaseCCLCMsgListenEvents();
    message.eventMask = object.eventMask?.map(e => e) || [];
    return message;
  }
};

function createBaseCCLCMsgRespondCvarValue(): CCLCMsgRespondCvarValue {
  return { cookie: 0, statusCode: 0, name: "", value: "" };
}

export const CCLCMsgRespondCvarValue = {
  encode(
    message: CCLCMsgRespondCvarValue,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgRespondCvarValue {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgRespondCvarValue>, I>>(
    object: I
  ): CCLCMsgRespondCvarValue {
    const message = createBaseCCLCMsgRespondCvarValue();
    message.cookie = object.cookie ?? 0;
    message.statusCode = object.statusCode ?? 0;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  }
};

function createBaseCCLCMsgFileCRCCheck(): CCLCMsgFileCRCCheck {
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

export const CCLCMsgFileCRCCheck = {
  encode(
    message: CCLCMsgFileCRCCheck,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgFileCRCCheck {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgFileCRCCheck>, I>>(
    object: I
  ): CCLCMsgFileCRCCheck {
    const message = createBaseCCLCMsgFileCRCCheck();
    message.codePath = object.codePath ?? 0;
    message.path = object.path ?? "";
    message.codeFilename = object.codeFilename ?? 0;
    message.filename = object.filename ?? "";
    message.fileFraction = object.fileFraction ?? 0;
    message.md5 = object.md5 ?? new Uint8Array();
    message.crc = object.crc ?? 0;
    message.fileHashType = object.fileHashType ?? 0;
    message.fileLen = object.fileLen ?? 0;
    message.packFileId = object.packFileId ?? 0;
    message.packFileNumber = object.packFileNumber ?? 0;
    return message;
  }
};

function createBaseCCLCMsgLoadingProgress(): CCLCMsgLoadingProgress {
  return { progress: 0 };
}

export const CCLCMsgLoadingProgress = {
  encode(
    message: CCLCMsgLoadingProgress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.progress !== 0) {
      writer.uint32(8).int32(message.progress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgLoadingProgress {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgLoadingProgress>, I>>(
    object: I
  ): CCLCMsgLoadingProgress {
    const message = createBaseCCLCMsgLoadingProgress();
    message.progress = object.progress ?? 0;
    return message;
  }
};

function createBaseCCLCMsgSplitPlayerConnect(): CCLCMsgSplitPlayerConnect {
  return { convars: undefined };
}

export const CCLCMsgSplitPlayerConnect = {
  encode(
    message: CCLCMsgSplitPlayerConnect,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.convars !== undefined) {
      CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCLCMsgSplitPlayerConnect {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgSplitPlayerConnect();
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
  },

  fromPartial<I extends Exact<DeepPartial<CCLCMsgSplitPlayerConnect>, I>>(
    object: I
  ): CCLCMsgSplitPlayerConnect {
    const message = createBaseCCLCMsgSplitPlayerConnect();
    message.convars =
      object.convars !== undefined && object.convars !== null
        ? CMsgCVars.fromPartial(object.convars)
        : undefined;
    return message;
  }
};

function createBaseCCLCMsgCmdKeyValues(): CCLCMsgCmdKeyValues {
  return { keyvalues: new Uint8Array() };
}

export const CCLCMsgCmdKeyValues = {
  encode(
    message: CCLCMsgCmdKeyValues,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.keyvalues.length !== 0) {
      writer.uint32(10).bytes(message.keyvalues);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgCmdKeyValues {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgCmdKeyValues>, I>>(
    object: I
  ): CCLCMsgCmdKeyValues {
    const message = createBaseCCLCMsgCmdKeyValues();
    message.keyvalues = object.keyvalues ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgServerInfo(): CSVCMsgServerInfo {
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

export const CSVCMsgServerInfo = {
  encode(message: CSVCMsgServerInfo, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgServerInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.ugcMapId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgServerInfo>, I>>(
    object: I
  ): CSVCMsgServerInfo {
    const message = createBaseCSVCMsgServerInfo();
    message.protocol = object.protocol ?? 0;
    message.serverCount = object.serverCount ?? 0;
    message.isDedicated = object.isDedicated ?? false;
    message.isOfficialValveServer = object.isOfficialValveServer ?? false;
    message.isHltv = object.isHltv ?? false;
    message.isReplay = object.isReplay ?? false;
    message.isRedirectingToProxyRelay =
      object.isRedirectingToProxyRelay ?? false;
    message.cOs = object.cOs ?? 0;
    message.mapCrc = object.mapCrc ?? 0;
    message.clientCrc = object.clientCrc ?? 0;
    message.stringTableCrc = object.stringTableCrc ?? 0;
    message.maxClients = object.maxClients ?? 0;
    message.maxClasses = object.maxClasses ?? 0;
    message.playerSlot = object.playerSlot ?? 0;
    message.tickInterval = object.tickInterval ?? 0;
    message.gameDir = object.gameDir ?? "";
    message.mapName = object.mapName ?? "";
    message.mapGroupName = object.mapGroupName ?? "";
    message.skyName = object.skyName ?? "";
    message.hostName = object.hostName ?? "";
    message.publicIp = object.publicIp ?? 0;
    message.ugcMapId =
      object.ugcMapId !== undefined && object.ugcMapId !== null
        ? Long.fromValue(object.ugcMapId)
        : Long.UZERO;
    return message;
  }
};

function createBaseCSVCMsgClassInfo(): CSVCMsgClassInfo {
  return { createOnClient: false, classes: [] };
}

export const CSVCMsgClassInfo = {
  encode(message: CSVCMsgClassInfo, writer: Writer = Writer.create()): Writer {
    if (message.createOnClient === true) {
      writer.uint32(8).bool(message.createOnClient);
    }
    for (const v of message.classes) {
      CSVCMsgClassInfo_classT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgClassInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgClassInfo();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgClassInfo>, I>>(
    object: I
  ): CSVCMsgClassInfo {
    const message = createBaseCSVCMsgClassInfo();
    message.createOnClient = object.createOnClient ?? false;
    message.classes =
      object.classes?.map(e => CSVCMsgClassInfo_classT.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCSVCMsgClassInfo_classT(): CSVCMsgClassInfo_classT {
  return { classId: 0, dataTableName: "", className: "" };
}

export const CSVCMsgClassInfo_classT = {
  encode(
    message: CSVCMsgClassInfo_classT,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgClassInfo_classT {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgClassInfo_classT>, I>>(
    object: I
  ): CSVCMsgClassInfo_classT {
    const message = createBaseCSVCMsgClassInfo_classT();
    message.classId = object.classId ?? 0;
    message.dataTableName = object.dataTableName ?? "";
    message.className = object.className ?? "";
    return message;
  }
};

function createBaseCSVCMsgSendTable(): CSVCMsgSendTable {
  return { isEnd: false, netTableName: "", needsDecoder: false, props: [] };
}

export const CSVCMsgSendTable = {
  encode(message: CSVCMsgSendTable, writer: Writer = Writer.create()): Writer {
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
      CSVCMsgSendTable_sendpropT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgSendTable {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSendTable>, I>>(
    object: I
  ): CSVCMsgSendTable {
    const message = createBaseCSVCMsgSendTable();
    message.isEnd = object.isEnd ?? false;
    message.netTableName = object.netTableName ?? "";
    message.needsDecoder = object.needsDecoder ?? false;
    message.props =
      object.props?.map(e => CSVCMsgSendTable_sendpropT.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCSVCMsgSendTable_sendpropT(): CSVCMsgSendTable_sendpropT {
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

export const CSVCMsgSendTable_sendpropT = {
  encode(
    message: CSVCMsgSendTable_sendpropT,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSVCMsgSendTable_sendpropT {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSendTable_sendpropT>, I>>(
    object: I
  ): CSVCMsgSendTable_sendpropT {
    const message = createBaseCSVCMsgSendTable_sendpropT();
    message.type = object.type ?? 0;
    message.varName = object.varName ?? "";
    message.flags = object.flags ?? 0;
    message.priority = object.priority ?? 0;
    message.dtName = object.dtName ?? "";
    message.numElements = object.numElements ?? 0;
    message.lowValue = object.lowValue ?? 0;
    message.highValue = object.highValue ?? 0;
    message.numBits = object.numBits ?? 0;
    return message;
  }
};

function createBaseCSVCMsgPrint(): CSVCMsgPrint {
  return { text: "" };
}

export const CSVCMsgPrint = {
  encode(message: CSVCMsgPrint, writer: Writer = Writer.create()): Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgPrint {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgPrint>, I>>(
    object: I
  ): CSVCMsgPrint {
    const message = createBaseCSVCMsgPrint();
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCSVCMsgSetPause(): CSVCMsgSetPause {
  return { paused: false };
}

export const CSVCMsgSetPause = {
  encode(message: CSVCMsgSetPause, writer: Writer = Writer.create()): Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgSetPause {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSetPause>, I>>(
    object: I
  ): CSVCMsgSetPause {
    const message = createBaseCSVCMsgSetPause();
    message.paused = object.paused ?? false;
    return message;
  }
};

function createBaseCSVCMsgSetView(): CSVCMsgSetView {
  return { entityIndex: 0 };
}

export const CSVCMsgSetView = {
  encode(message: CSVCMsgSetView, writer: Writer = Writer.create()): Writer {
    if (message.entityIndex !== 0) {
      writer.uint32(8).int32(message.entityIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgSetView {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSetView>, I>>(
    object: I
  ): CSVCMsgSetView {
    const message = createBaseCSVCMsgSetView();
    message.entityIndex = object.entityIndex ?? 0;
    return message;
  }
};

function createBaseCSVCMsgCreateStringTable(): CSVCMsgCreateStringTable {
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

export const CSVCMsgCreateStringTable = {
  encode(
    message: CSVCMsgCreateStringTable,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSVCMsgCreateStringTable {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgCreateStringTable>, I>>(
    object: I
  ): CSVCMsgCreateStringTable {
    const message = createBaseCSVCMsgCreateStringTable();
    message.name = object.name ?? "";
    message.maxEntries = object.maxEntries ?? 0;
    message.numEntries = object.numEntries ?? 0;
    message.userDataFixedSize = object.userDataFixedSize ?? false;
    message.userDataSize = object.userDataSize ?? 0;
    message.userDataSizeBits = object.userDataSizeBits ?? 0;
    message.flags = object.flags ?? 0;
    message.stringData = object.stringData ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgUpdateStringTable(): CSVCMsgUpdateStringTable {
  return { tableId: 0, numChangedEntries: 0, stringData: new Uint8Array() };
}

export const CSVCMsgUpdateStringTable = {
  encode(
    message: CSVCMsgUpdateStringTable,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSVCMsgUpdateStringTable {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgUpdateStringTable>, I>>(
    object: I
  ): CSVCMsgUpdateStringTable {
    const message = createBaseCSVCMsgUpdateStringTable();
    message.tableId = object.tableId ?? 0;
    message.numChangedEntries = object.numChangedEntries ?? 0;
    message.stringData = object.stringData ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgVoiceInit(): CSVCMsgVoiceInit {
  return { quality: 0, codec: "", version: 0 };
}

export const CSVCMsgVoiceInit = {
  encode(message: CSVCMsgVoiceInit, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgVoiceInit {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgVoiceInit>, I>>(
    object: I
  ): CSVCMsgVoiceInit {
    const message = createBaseCSVCMsgVoiceInit();
    message.quality = object.quality ?? 0;
    message.codec = object.codec ?? "";
    message.version = object.version ?? 0;
    return message;
  }
};

function createBaseCSVCMsgVoiceData(): CSVCMsgVoiceData {
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

export const CSVCMsgVoiceData = {
  encode(message: CSVCMsgVoiceData, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgVoiceData {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgVoiceData>, I>>(
    object: I
  ): CSVCMsgVoiceData {
    const message = createBaseCSVCMsgVoiceData();
    message.client = object.client ?? 0;
    message.proximity = object.proximity ?? false;
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.audibleMask = object.audibleMask ?? 0;
    message.voiceData = object.voiceData ?? new Uint8Array();
    message.caster = object.caster ?? false;
    message.format = object.format ?? 0;
    message.sequenceBytes = object.sequenceBytes ?? 0;
    message.sectionNumber = object.sectionNumber ?? 0;
    message.uncompressedSampleOffset = object.uncompressedSampleOffset ?? 0;
    return message;
  }
};

function createBaseCSVCMsgFixAngle(): CSVCMsgFixAngle {
  return { relative: false, angle: undefined };
}

export const CSVCMsgFixAngle = {
  encode(message: CSVCMsgFixAngle, writer: Writer = Writer.create()): Writer {
    if (message.relative === true) {
      writer.uint32(8).bool(message.relative);
    }
    if (message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgFixAngle {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgFixAngle();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgFixAngle>, I>>(
    object: I
  ): CSVCMsgFixAngle {
    const message = createBaseCSVCMsgFixAngle();
    message.relative = object.relative ?? false;
    message.angle =
      object.angle !== undefined && object.angle !== null
        ? CMsgQAngle.fromPartial(object.angle)
        : undefined;
    return message;
  }
};

function createBaseCSVCMsgCrosshairAngle(): CSVCMsgCrosshairAngle {
  return { angle: undefined };
}

export const CSVCMsgCrosshairAngle = {
  encode(
    message: CSVCMsgCrosshairAngle,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgCrosshairAngle {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgCrosshairAngle();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgCrosshairAngle>, I>>(
    object: I
  ): CSVCMsgCrosshairAngle {
    const message = createBaseCSVCMsgCrosshairAngle();
    message.angle =
      object.angle !== undefined && object.angle !== null
        ? CMsgQAngle.fromPartial(object.angle)
        : undefined;
    return message;
  }
};

function createBaseCSVCMsgPrefetch(): CSVCMsgPrefetch {
  return { soundIndex: 0 };
}

export const CSVCMsgPrefetch = {
  encode(message: CSVCMsgPrefetch, writer: Writer = Writer.create()): Writer {
    if (message.soundIndex !== 0) {
      writer.uint32(8).int32(message.soundIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgPrefetch {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgPrefetch>, I>>(
    object: I
  ): CSVCMsgPrefetch {
    const message = createBaseCSVCMsgPrefetch();
    message.soundIndex = object.soundIndex ?? 0;
    return message;
  }
};

function createBaseCSVCMsgBSPDecal(): CSVCMsgBSPDecal {
  return {
    pos: undefined,
    decalTextureIndex: 0,
    entityIndex: 0,
    modelIndex: 0,
    lowPriority: false
  };
}

export const CSVCMsgBSPDecal = {
  encode(message: CSVCMsgBSPDecal, writer: Writer = Writer.create()): Writer {
    if (message.pos !== undefined) {
      CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgBSPDecal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgBSPDecal();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgBSPDecal>, I>>(
    object: I
  ): CSVCMsgBSPDecal {
    const message = createBaseCSVCMsgBSPDecal();
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? CMsgVector.fromPartial(object.pos)
        : undefined;
    message.decalTextureIndex = object.decalTextureIndex ?? 0;
    message.entityIndex = object.entityIndex ?? 0;
    message.modelIndex = object.modelIndex ?? 0;
    message.lowPriority = object.lowPriority ?? false;
    return message;
  }
};

function createBaseCSVCMsgSplitScreen(): CSVCMsgSplitScreen {
  return { type: 0, slot: 0, playerIndex: 0 };
}

export const CSVCMsgSplitScreen = {
  encode(
    message: CSVCMsgSplitScreen,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgSplitScreen {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSplitScreen();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSplitScreen>, I>>(
    object: I
  ): CSVCMsgSplitScreen {
    const message = createBaseCSVCMsgSplitScreen();
    message.type = object.type ?? 0;
    message.slot = object.slot ?? 0;
    message.playerIndex = object.playerIndex ?? 0;
    return message;
  }
};

function createBaseCSVCMsgGetCvarValue(): CSVCMsgGetCvarValue {
  return { cookie: 0, cvarName: "" };
}

export const CSVCMsgGetCvarValue = {
  encode(
    message: CSVCMsgGetCvarValue,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cookie !== 0) {
      writer.uint32(8).int32(message.cookie);
    }
    if (message.cvarName !== "") {
      writer.uint32(18).string(message.cvarName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgGetCvarValue {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgGetCvarValue>, I>>(
    object: I
  ): CSVCMsgGetCvarValue {
    const message = createBaseCSVCMsgGetCvarValue();
    message.cookie = object.cookie ?? 0;
    message.cvarName = object.cvarName ?? "";
    return message;
  }
};

function createBaseCSVCMsgMenu(): CSVCMsgMenu {
  return { dialogType: 0, menuKeyValues: new Uint8Array() };
}

export const CSVCMsgMenu = {
  encode(message: CSVCMsgMenu, writer: Writer = Writer.create()): Writer {
    if (message.dialogType !== 0) {
      writer.uint32(8).int32(message.dialogType);
    }
    if (message.menuKeyValues.length !== 0) {
      writer.uint32(18).bytes(message.menuKeyValues);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgMenu {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgMenu>, I>>(
    object: I
  ): CSVCMsgMenu {
    const message = createBaseCSVCMsgMenu();
    message.dialogType = object.dialogType ?? 0;
    message.menuKeyValues = object.menuKeyValues ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgUserMessage(): CSVCMsgUserMessage {
  return { msgType: 0, msgData: new Uint8Array(), passthrough: 0 };
}

export const CSVCMsgUserMessage = {
  encode(
    message: CSVCMsgUserMessage,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgUserMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgUserMessage>, I>>(
    object: I
  ): CSVCMsgUserMessage {
    const message = createBaseCSVCMsgUserMessage();
    message.msgType = object.msgType ?? 0;
    message.msgData = object.msgData ?? new Uint8Array();
    message.passthrough = object.passthrough ?? 0;
    return message;
  }
};

function createBaseCSVCMsgPaintmapData(): CSVCMsgPaintmapData {
  return { paintmap: new Uint8Array() };
}

export const CSVCMsgPaintmapData = {
  encode(
    message: CSVCMsgPaintmapData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.paintmap.length !== 0) {
      writer.uint32(10).bytes(message.paintmap);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgPaintmapData {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgPaintmapData>, I>>(
    object: I
  ): CSVCMsgPaintmapData {
    const message = createBaseCSVCMsgPaintmapData();
    message.paintmap = object.paintmap ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgGameEvent(): CSVCMsgGameEvent {
  return { eventName: "", eventid: 0, keys: [], passthrough: 0 };
}

export const CSVCMsgGameEvent = {
  encode(message: CSVCMsgGameEvent, writer: Writer = Writer.create()): Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.eventid !== 0) {
      writer.uint32(16).int32(message.eventid);
    }
    for (const v of message.keys) {
      CSVCMsgGameEvent_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.passthrough !== 0) {
      writer.uint32(32).int32(message.passthrough);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEvent {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEvent>, I>>(
    object: I
  ): CSVCMsgGameEvent {
    const message = createBaseCSVCMsgGameEvent();
    message.eventName = object.eventName ?? "";
    message.eventid = object.eventid ?? 0;
    message.keys =
      object.keys?.map(e => CSVCMsgGameEvent_keyT.fromPartial(e)) || [];
    message.passthrough = object.passthrough ?? 0;
    return message;
  }
};

function createBaseCSVCMsgGameEvent_keyT(): CSVCMsgGameEvent_keyT {
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

export const CSVCMsgGameEvent_keyT = {
  encode(
    message: CSVCMsgGameEvent_keyT,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEvent_keyT {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEvent_keyT>, I>>(
    object: I
  ): CSVCMsgGameEvent_keyT {
    const message = createBaseCSVCMsgGameEvent_keyT();
    message.type = object.type ?? 0;
    message.valString = object.valString ?? "";
    message.valFloat = object.valFloat ?? 0;
    message.valLong = object.valLong ?? 0;
    message.valShort = object.valShort ?? 0;
    message.valByte = object.valByte ?? 0;
    message.valBool = object.valBool ?? false;
    message.valUint64 =
      object.valUint64 !== undefined && object.valUint64 !== null
        ? Long.fromValue(object.valUint64)
        : Long.UZERO;
    message.valWstring = object.valWstring ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgGameEventList(): CSVCMsgGameEventList {
  return { descriptors: [] };
}

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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgGameEventList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameEventList();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEventList>, I>>(
    object: I
  ): CSVCMsgGameEventList {
    const message = createBaseCSVCMsgGameEventList();
    message.descriptors =
      object.descriptors?.map(e =>
        CSVCMsgGameEventList_descriptorT.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCSVCMsgGameEventList_keyT(): CSVCMsgGameEventList_keyT {
  return { type: 0, name: "" };
}

export const CSVCMsgGameEventList_keyT = {
  encode(
    message: CSVCMsgGameEventList_keyT,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSVCMsgGameEventList_keyT {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEventList_keyT>, I>>(
    object: I
  ): CSVCMsgGameEventList_keyT {
    const message = createBaseCSVCMsgGameEventList_keyT();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    return message;
  }
};

function createBaseCSVCMsgGameEventList_descriptorT(): CSVCMsgGameEventList_descriptorT {
  return { eventid: 0, name: "", keys: [] };
}

export const CSVCMsgGameEventList_descriptorT = {
  encode(
    message: CSVCMsgGameEventList_descriptorT,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).int32(message.eventid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.keys) {
      CSVCMsgGameEventList_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSVCMsgGameEventList_descriptorT {
    const reader = input instanceof Reader ? input : new Reader(input);
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
  },

  fromPartial<
    I extends Exact<DeepPartial<CSVCMsgGameEventList_descriptorT>, I>
  >(object: I): CSVCMsgGameEventList_descriptorT {
    const message = createBaseCSVCMsgGameEventList_descriptorT();
    message.eventid = object.eventid ?? 0;
    message.name = object.name ?? "";
    message.keys =
      object.keys?.map(e => CSVCMsgGameEventList_keyT.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCSVCMsgTempEntities(): CSVCMsgTempEntities {
  return { reliable: false, numEntries: 0, entityData: new Uint8Array() };
}

export const CSVCMsgTempEntities = {
  encode(
    message: CSVCMsgTempEntities,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgTempEntities {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgTempEntities>, I>>(
    object: I
  ): CSVCMsgTempEntities {
    const message = createBaseCSVCMsgTempEntities();
    message.reliable = object.reliable ?? false;
    message.numEntries = object.numEntries ?? 0;
    message.entityData = object.entityData ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgPacketEntities(): CSVCMsgPacketEntities {
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

export const CSVCMsgPacketEntities = {
  encode(
    message: CSVCMsgPacketEntities,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgPacketEntities {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgPacketEntities>, I>>(
    object: I
  ): CSVCMsgPacketEntities {
    const message = createBaseCSVCMsgPacketEntities();
    message.maxEntries = object.maxEntries ?? 0;
    message.updatedEntries = object.updatedEntries ?? 0;
    message.isDelta = object.isDelta ?? false;
    message.updateBaseline = object.updateBaseline ?? false;
    message.baseline = object.baseline ?? 0;
    message.deltaFrom = object.deltaFrom ?? 0;
    message.entityData = object.entityData ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgSounds(): CSVCMsgSounds {
  return { reliableSound: false, sounds: [] };
}

export const CSVCMsgSounds = {
  encode(message: CSVCMsgSounds, writer: Writer = Writer.create()): Writer {
    if (message.reliableSound === true) {
      writer.uint32(8).bool(message.reliableSound);
    }
    for (const v of message.sounds) {
      CSVCMsgSounds_sounddataT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgSounds {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSounds();
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
  },

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSounds>, I>>(
    object: I
  ): CSVCMsgSounds {
    const message = createBaseCSVCMsgSounds();
    message.reliableSound = object.reliableSound ?? false;
    message.sounds =
      object.sounds?.map(e => CSVCMsgSounds_sounddataT.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCSVCMsgSounds_sounddataT(): CSVCMsgSounds_sounddataT {
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

export const CSVCMsgSounds_sounddataT = {
  encode(
    message: CSVCMsgSounds_sounddataT,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSVCMsgSounds_sounddataT {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgSounds_sounddataT>, I>>(
    object: I
  ): CSVCMsgSounds_sounddataT {
    const message = createBaseCSVCMsgSounds_sounddataT();
    message.originX = object.originX ?? 0;
    message.originY = object.originY ?? 0;
    message.originZ = object.originZ ?? 0;
    message.volume = object.volume ?? 0;
    message.delayValue = object.delayValue ?? 0;
    message.sequenceNumber = object.sequenceNumber ?? 0;
    message.entityIndex = object.entityIndex ?? 0;
    message.channel = object.channel ?? 0;
    message.pitch = object.pitch ?? 0;
    message.flags = object.flags ?? 0;
    message.soundNum = object.soundNum ?? 0;
    message.soundNumHandle = object.soundNumHandle ?? 0;
    message.speakerEntity = object.speakerEntity ?? 0;
    message.randomSeed = object.randomSeed ?? 0;
    message.soundLevel = object.soundLevel ?? 0;
    message.isSentence = object.isSentence ?? false;
    message.isAmbient = object.isAmbient ?? false;
    return message;
  }
};

function createBaseCSVCMsgEntityMsg(): CSVCMsgEntityMsg {
  return { entIndex: 0, classId: 0, entData: new Uint8Array() };
}

export const CSVCMsgEntityMsg = {
  encode(message: CSVCMsgEntityMsg, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgEntityMsg {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgEntityMsg>, I>>(
    object: I
  ): CSVCMsgEntityMsg {
    const message = createBaseCSVCMsgEntityMsg();
    message.entIndex = object.entIndex ?? 0;
    message.classId = object.classId ?? 0;
    message.entData = object.entData ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgCmdKeyValues(): CSVCMsgCmdKeyValues {
  return { keyvalues: new Uint8Array() };
}

export const CSVCMsgCmdKeyValues = {
  encode(
    message: CSVCMsgCmdKeyValues,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.keyvalues.length !== 0) {
      writer.uint32(10).bytes(message.keyvalues);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgCmdKeyValues {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgCmdKeyValues>, I>>(
    object: I
  ): CSVCMsgCmdKeyValues {
    const message = createBaseCSVCMsgCmdKeyValues();
    message.keyvalues = object.keyvalues ?? new Uint8Array();
    return message;
  }
};

function createBaseCSVCMsgEncryptedData(): CSVCMsgEncryptedData {
  return { encrypted: new Uint8Array(), keyType: 0 };
}

export const CSVCMsgEncryptedData = {
  encode(
    message: CSVCMsgEncryptedData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.encrypted.length !== 0) {
      writer.uint32(10).bytes(message.encrypted);
    }
    if (message.keyType !== 0) {
      writer.uint32(16).int32(message.keyType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgEncryptedData {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgEncryptedData>, I>>(
    object: I
  ): CSVCMsgEncryptedData {
    const message = createBaseCSVCMsgEncryptedData();
    message.encrypted = object.encrypted ?? new Uint8Array();
    message.keyType = object.keyType ?? 0;
    return message;
  }
};

function createBaseCSVCMsgHltvReplay(): CSVCMsgHltvReplay {
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

export const CSVCMsgHltvReplay = {
  encode(message: CSVCMsgHltvReplay, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgHltvReplay {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgHltvReplay>, I>>(
    object: I
  ): CSVCMsgHltvReplay {
    const message = createBaseCSVCMsgHltvReplay();
    message.delay = object.delay ?? 0;
    message.primaryTarget = object.primaryTarget ?? 0;
    message.replayStopAt = object.replayStopAt ?? 0;
    message.replayStartAt = object.replayStartAt ?? 0;
    message.replaySlowdownBegin = object.replaySlowdownBegin ?? 0;
    message.replaySlowdownEnd = object.replaySlowdownEnd ?? 0;
    message.replaySlowdownRate = object.replaySlowdownRate ?? 0;
    return message;
  }
};

function createBaseCCLCMsgHltvReplay(): CCLCMsgHltvReplay {
  return {
    request: 0,
    slowdownLength: 0,
    slowdownRate: 0,
    primaryTargetEntIndex: 0,
    eventTime: 0
  };
}

export const CCLCMsgHltvReplay = {
  encode(message: CCLCMsgHltvReplay, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CCLCMsgHltvReplay {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CCLCMsgHltvReplay>, I>>(
    object: I
  ): CCLCMsgHltvReplay {
    const message = createBaseCCLCMsgHltvReplay();
    message.request = object.request ?? 0;
    message.slowdownLength = object.slowdownLength ?? 0;
    message.slowdownRate = object.slowdownRate ?? 0;
    message.primaryTargetEntIndex = object.primaryTargetEntIndex ?? 0;
    message.eventTime = object.eventTime ?? 0;
    return message;
  }
};

function createBaseCSVCMsgBroadcastCommand(): CSVCMsgBroadcastCommand {
  return { cmd: "" };
}

export const CSVCMsgBroadcastCommand = {
  encode(
    message: CSVCMsgBroadcastCommand,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cmd !== "") {
      writer.uint32(10).string(message.cmd);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSVCMsgBroadcastCommand {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CSVCMsgBroadcastCommand>, I>>(
    object: I
  ): CSVCMsgBroadcastCommand {
    const message = createBaseCSVCMsgBroadcastCommand();
    message.cmd = object.cmd ?? "";
    return message;
  }
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
