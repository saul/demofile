// tslint:disable

import * as $protobuf from "protobufjs";
/** NET_Messages enum. */
export enum NET_Messages {
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

/** CLC_Messages enum. */
export enum CLC_Messages {
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

/** VoiceDataFormat_t enum. */
export enum VoiceDataFormat_t {
  VOICEDATA_FORMAT_STEAM = 0,
  VOICEDATA_FORMAT_ENGINE = 1
}

/** ESplitScreenMessageType enum. */
export enum ESplitScreenMessageType {
  MSG_SPLITSCREEN_ADDUSER = 0,
  MSG_SPLITSCREEN_REMOVEUSER = 1,
  MSG_SPLITSCREEN_TYPE_BITS = 1
}

/** SVC_Messages enum. */
export enum SVC_Messages {
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
  svc_HltvReplay = 36
}

/** ReplayEventType_t enum. */
export enum ReplayEventType_t {
  REPLAY_EVENT_CANCEL = 0,
  REPLAY_EVENT_DEATH = 1,
  REPLAY_EVENT_GENERIC = 2
}

/** Properties of a CMsgVector. */
export interface ICMsgVector {
  /** CMsgVector x */
  x?: number | null;

  /** CMsgVector y */
  y?: number | null;

  /** CMsgVector z */
  z?: number | null;
}

/** Represents a CMsgVector. */
export class CMsgVector implements ICMsgVector {
  /**
   * Decodes a CMsgVector message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CMsgVector
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CMsgVector;

  /** CMsgVector x. */
  public x: number;

  /** CMsgVector y. */
  public y: number;

  /** CMsgVector z. */
  public z: number;
  /**
   * Constructs a new CMsgVector.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICMsgVector);
}

/** Properties of a CMsgVector2D. */
export interface ICMsgVector2D {
  /** CMsgVector2D x */
  x?: number | null;

  /** CMsgVector2D y */
  y?: number | null;
}

/** Represents a CMsgVector2D. */
export class CMsgVector2D implements ICMsgVector2D {
  /**
   * Decodes a CMsgVector2D message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CMsgVector2D
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CMsgVector2D;

  /** CMsgVector2D x. */
  public x: number;

  /** CMsgVector2D y. */
  public y: number;
  /**
   * Constructs a new CMsgVector2D.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICMsgVector2D);
}

/** Properties of a CMsgQAngle. */
export interface ICMsgQAngle {
  /** CMsgQAngle x */
  x?: number | null;

  /** CMsgQAngle y */
  y?: number | null;

  /** CMsgQAngle z */
  z?: number | null;
}

/** Represents a CMsgQAngle. */
export class CMsgQAngle implements ICMsgQAngle {
  /**
   * Decodes a CMsgQAngle message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CMsgQAngle
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CMsgQAngle;

  /** CMsgQAngle x. */
  public x: number;

  /** CMsgQAngle y. */
  public y: number;

  /** CMsgQAngle z. */
  public z: number;
  /**
   * Constructs a new CMsgQAngle.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICMsgQAngle);
}

/** Properties of a CMsgRGBA. */
export interface ICMsgRGBA {
  /** CMsgRGBA r */
  r?: number | null;

  /** CMsgRGBA g */
  g?: number | null;

  /** CMsgRGBA b */
  b?: number | null;

  /** CMsgRGBA a */
  a?: number | null;
}

/** Represents a CMsgRGBA. */
export class CMsgRGBA implements ICMsgRGBA {
  /**
   * Decodes a CMsgRGBA message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CMsgRGBA
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CMsgRGBA;

  /** CMsgRGBA r. */
  public r: number;

  /** CMsgRGBA g. */
  public g: number;

  /** CMsgRGBA b. */
  public b: number;

  /** CMsgRGBA a. */
  public a: number;
  /**
   * Constructs a new CMsgRGBA.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICMsgRGBA);
}

/** Properties of a CNETMsg_Tick. */
export interface ICNETMsg_Tick {
  /** CNETMsg_Tick tick */
  tick?: number | null;

  /** CNETMsg_Tick hostComputationtime */
  hostComputationtime?: number | null;

  /** CNETMsg_Tick hostComputationtimeStdDeviation */
  hostComputationtimeStdDeviation?: number | null;

  /** CNETMsg_Tick hostFramestarttimeStdDeviation */
  hostFramestarttimeStdDeviation?: number | null;

  /** CNETMsg_Tick hltvReplayFlags */
  hltvReplayFlags?: number | null;
}

/** Represents a CNETMsg_Tick. */
export class CNETMsg_Tick implements ICNETMsg_Tick {
  /**
   * Decodes a CNETMsg_Tick message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_Tick
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_Tick;

  /** CNETMsg_Tick tick. */
  public tick: number;

  /** CNETMsg_Tick hostComputationtime. */
  public hostComputationtime: number;

  /** CNETMsg_Tick hostComputationtimeStdDeviation. */
  public hostComputationtimeStdDeviation: number;

  /** CNETMsg_Tick hostFramestarttimeStdDeviation. */
  public hostFramestarttimeStdDeviation: number;

  /** CNETMsg_Tick hltvReplayFlags. */
  public hltvReplayFlags: number;
  /**
   * Constructs a new CNETMsg_Tick.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_Tick);
}

/** Properties of a CNETMsg_StringCmd. */
export interface ICNETMsg_StringCmd {
  /** CNETMsg_StringCmd command */
  command?: string | null;
}

/** Represents a CNETMsg_StringCmd. */
export class CNETMsg_StringCmd implements ICNETMsg_StringCmd {
  /**
   * Decodes a CNETMsg_StringCmd message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_StringCmd
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_StringCmd;

  /** CNETMsg_StringCmd command. */
  public command: string;
  /**
   * Constructs a new CNETMsg_StringCmd.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_StringCmd);
}

/** Properties of a CNETMsg_SignonState. */
export interface ICNETMsg_SignonState {
  /** CNETMsg_SignonState signonState */
  signonState?: number | null;

  /** CNETMsg_SignonState spawnCount */
  spawnCount?: number | null;

  /** CNETMsg_SignonState numServerPlayers */
  numServerPlayers?: number | null;

  /** CNETMsg_SignonState playersNetworkids */
  playersNetworkids?: string[] | null;

  /** CNETMsg_SignonState mapName */
  mapName?: string | null;
}

/** Represents a CNETMsg_SignonState. */
export class CNETMsg_SignonState implements ICNETMsg_SignonState {
  /**
   * Decodes a CNETMsg_SignonState message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_SignonState
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_SignonState;

  /** CNETMsg_SignonState signonState. */
  public signonState: number;

  /** CNETMsg_SignonState spawnCount. */
  public spawnCount: number;

  /** CNETMsg_SignonState numServerPlayers. */
  public numServerPlayers: number;

  /** CNETMsg_SignonState playersNetworkids. */
  public playersNetworkids: string[];

  /** CNETMsg_SignonState mapName. */
  public mapName: string;
  /**
   * Constructs a new CNETMsg_SignonState.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_SignonState);
}

/** Properties of a CMsg_CVars. */
export interface ICMsg_CVars {
  /** CMsg_CVars cvars */
  cvars?: CMsg_CVars.ICVar[] | null;
}

/** Represents a CMsg_CVars. */
export class CMsg_CVars implements ICMsg_CVars {
  /**
   * Decodes a CMsg_CVars message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CMsg_CVars
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CMsg_CVars;

  /** CMsg_CVars cvars. */
  public cvars: CMsg_CVars.ICVar[];
  /**
   * Constructs a new CMsg_CVars.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICMsg_CVars);
}

export namespace CMsg_CVars {
  /** Properties of a CVar. */
  interface ICVar {
    /** CVar name */
    name?: string | null;

    /** CVar value */
    value?: string | null;

    /** CVar dictionaryName */
    dictionaryName?: number | null;
  }

  /** Represents a CVar. */
  class CVar implements ICVar {
    /**
     * Decodes a CVar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CMsg_CVars.CVar;

    /** CVar name. */
    public name: string;

    /** CVar value. */
    public value: string;

    /** CVar dictionaryName. */
    public dictionaryName: number;
    /**
     * Constructs a new CVar.
     * @param [properties] Properties to set
     */
    constructor(properties?: CMsg_CVars.ICVar);
  }
}

/** Properties of a CNETMsg_SetConVar. */
export interface ICNETMsg_SetConVar {
  /** CNETMsg_SetConVar convars */
  convars?: ICMsg_CVars | null;
}

/** Represents a CNETMsg_SetConVar. */
export class CNETMsg_SetConVar implements ICNETMsg_SetConVar {
  /**
   * Decodes a CNETMsg_SetConVar message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_SetConVar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_SetConVar;

  /** CNETMsg_SetConVar convars. */
  public convars?: ICMsg_CVars | null;
  /**
   * Constructs a new CNETMsg_SetConVar.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_SetConVar);
}

/** Properties of a CNETMsg_NOP. */
export interface ICNETMsg_NOP {}

/** Represents a CNETMsg_NOP. */
export class CNETMsg_NOP implements ICNETMsg_NOP {
  /**
   * Decodes a CNETMsg_NOP message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_NOP
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_NOP;
  /**
   * Constructs a new CNETMsg_NOP.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_NOP);
}

/** Properties of a CNETMsg_Disconnect. */
export interface ICNETMsg_Disconnect {
  /** CNETMsg_Disconnect text */
  text?: string | null;
}

/** Represents a CNETMsg_Disconnect. */
export class CNETMsg_Disconnect implements ICNETMsg_Disconnect {
  /**
   * Decodes a CNETMsg_Disconnect message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_Disconnect
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_Disconnect;

  /** CNETMsg_Disconnect text. */
  public text: string;
  /**
   * Constructs a new CNETMsg_Disconnect.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_Disconnect);
}

/** Properties of a CNETMsg_File. */
export interface ICNETMsg_File {
  /** CNETMsg_File transferId */
  transferId?: number | null;

  /** CNETMsg_File fileName */
  fileName?: string | null;

  /** CNETMsg_File isReplayDemoFile */
  isReplayDemoFile?: boolean | null;

  /** CNETMsg_File deny */
  deny?: boolean | null;
}

/** Represents a CNETMsg_File. */
export class CNETMsg_File implements ICNETMsg_File {
  /**
   * Decodes a CNETMsg_File message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_File
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_File;

  /** CNETMsg_File transferId. */
  public transferId: number;

  /** CNETMsg_File fileName. */
  public fileName: string;

  /** CNETMsg_File isReplayDemoFile. */
  public isReplayDemoFile: boolean;

  /** CNETMsg_File deny. */
  public deny: boolean;
  /**
   * Constructs a new CNETMsg_File.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_File);
}

/** Properties of a CNETMsg_SplitScreenUser. */
export interface ICNETMsg_SplitScreenUser {
  /** CNETMsg_SplitScreenUser slot */
  slot?: number | null;
}

/** Represents a CNETMsg_SplitScreenUser. */
export class CNETMsg_SplitScreenUser implements ICNETMsg_SplitScreenUser {
  /**
   * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_SplitScreenUser
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_SplitScreenUser;

  /** CNETMsg_SplitScreenUser slot. */
  public slot: number;
  /**
   * Constructs a new CNETMsg_SplitScreenUser.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_SplitScreenUser);
}

/** Properties of a CNETMsg_PlayerAvatarData. */
export interface ICNETMsg_PlayerAvatarData {
  /** CNETMsg_PlayerAvatarData accountid */
  accountid?: number | null;

  /** CNETMsg_PlayerAvatarData rgb */
  rgb?: Uint8Array | null;
}

/** Represents a CNETMsg_PlayerAvatarData. */
export class CNETMsg_PlayerAvatarData implements ICNETMsg_PlayerAvatarData {
  /**
   * Decodes a CNETMsg_PlayerAvatarData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CNETMsg_PlayerAvatarData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CNETMsg_PlayerAvatarData;

  /** CNETMsg_PlayerAvatarData accountid. */
  public accountid: number;

  /** CNETMsg_PlayerAvatarData rgb. */
  public rgb: Uint8Array;
  /**
   * Constructs a new CNETMsg_PlayerAvatarData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICNETMsg_PlayerAvatarData);
}

/** Properties of a CCLCMsg_ClientInfo. */
export interface ICCLCMsg_ClientInfo {
  /** CCLCMsg_ClientInfo sendTableCrc */
  sendTableCrc?: number | null;

  /** CCLCMsg_ClientInfo serverCount */
  serverCount?: number | null;

  /** CCLCMsg_ClientInfo isHltv */
  isHltv?: boolean | null;

  /** CCLCMsg_ClientInfo isReplay */
  isReplay?: boolean | null;

  /** CCLCMsg_ClientInfo friendsId */
  friendsId?: number | null;

  /** CCLCMsg_ClientInfo friendsName */
  friendsName?: string | null;

  /** CCLCMsg_ClientInfo customFiles */
  customFiles?: number[] | null;
}

/** Represents a CCLCMsg_ClientInfo. */
export class CCLCMsg_ClientInfo implements ICCLCMsg_ClientInfo {
  /**
   * Decodes a CCLCMsg_ClientInfo message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_ClientInfo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_ClientInfo;

  /** CCLCMsg_ClientInfo sendTableCrc. */
  public sendTableCrc: number;

  /** CCLCMsg_ClientInfo serverCount. */
  public serverCount: number;

  /** CCLCMsg_ClientInfo isHltv. */
  public isHltv: boolean;

  /** CCLCMsg_ClientInfo isReplay. */
  public isReplay: boolean;

  /** CCLCMsg_ClientInfo friendsId. */
  public friendsId: number;

  /** CCLCMsg_ClientInfo friendsName. */
  public friendsName: string;

  /** CCLCMsg_ClientInfo customFiles. */
  public customFiles: number[];
  /**
   * Constructs a new CCLCMsg_ClientInfo.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_ClientInfo);
}

/** Properties of a CCLCMsg_Move. */
export interface ICCLCMsg_Move {
  /** CCLCMsg_Move numBackupCommands */
  numBackupCommands?: number | null;

  /** CCLCMsg_Move numNewCommands */
  numNewCommands?: number | null;

  /** CCLCMsg_Move data */
  data?: Uint8Array | null;
}

/** Represents a CCLCMsg_Move. */
export class CCLCMsg_Move implements ICCLCMsg_Move {
  /**
   * Decodes a CCLCMsg_Move message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_Move
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_Move;

  /** CCLCMsg_Move numBackupCommands. */
  public numBackupCommands: number;

  /** CCLCMsg_Move numNewCommands. */
  public numNewCommands: number;

  /** CCLCMsg_Move data. */
  public data: Uint8Array;
  /**
   * Constructs a new CCLCMsg_Move.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_Move);
}

/** Properties of a CCLCMsg_VoiceData. */
export interface ICCLCMsg_VoiceData {
  /** CCLCMsg_VoiceData data */
  data?: Uint8Array | null;

  /** CCLCMsg_VoiceData xuid */
  xuid?: number | Long | null;

  /** CCLCMsg_VoiceData format */
  format?: VoiceDataFormat_t | null;

  /** CCLCMsg_VoiceData sequenceBytes */
  sequenceBytes?: number | null;

  /** CCLCMsg_VoiceData sectionNumber */
  sectionNumber?: number | null;

  /** CCLCMsg_VoiceData uncompressedSampleOffset */
  uncompressedSampleOffset?: number | null;
}

/** Represents a CCLCMsg_VoiceData. */
export class CCLCMsg_VoiceData implements ICCLCMsg_VoiceData {
  /**
   * Decodes a CCLCMsg_VoiceData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_VoiceData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_VoiceData;

  /** CCLCMsg_VoiceData data. */
  public data: Uint8Array;

  /** CCLCMsg_VoiceData xuid. */
  public xuid: number | Long;

  /** CCLCMsg_VoiceData format. */
  public format: VoiceDataFormat_t;

  /** CCLCMsg_VoiceData sequenceBytes. */
  public sequenceBytes: number;

  /** CCLCMsg_VoiceData sectionNumber. */
  public sectionNumber: number;

  /** CCLCMsg_VoiceData uncompressedSampleOffset. */
  public uncompressedSampleOffset: number;
  /**
   * Constructs a new CCLCMsg_VoiceData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_VoiceData);
}

/** Properties of a CCLCMsg_BaselineAck. */
export interface ICCLCMsg_BaselineAck {
  /** CCLCMsg_BaselineAck baselineTick */
  baselineTick?: number | null;

  /** CCLCMsg_BaselineAck baselineNr */
  baselineNr?: number | null;
}

/** Represents a CCLCMsg_BaselineAck. */
export class CCLCMsg_BaselineAck implements ICCLCMsg_BaselineAck {
  /**
   * Decodes a CCLCMsg_BaselineAck message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_BaselineAck
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_BaselineAck;

  /** CCLCMsg_BaselineAck baselineTick. */
  public baselineTick: number;

  /** CCLCMsg_BaselineAck baselineNr. */
  public baselineNr: number;
  /**
   * Constructs a new CCLCMsg_BaselineAck.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_BaselineAck);
}

/** Properties of a CCLCMsg_ListenEvents. */
export interface ICCLCMsg_ListenEvents {
  /** CCLCMsg_ListenEvents eventMask */
  eventMask?: number[] | null;
}

/** Represents a CCLCMsg_ListenEvents. */
export class CCLCMsg_ListenEvents implements ICCLCMsg_ListenEvents {
  /**
   * Decodes a CCLCMsg_ListenEvents message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_ListenEvents
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_ListenEvents;

  /** CCLCMsg_ListenEvents eventMask. */
  public eventMask: number[];
  /**
   * Constructs a new CCLCMsg_ListenEvents.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_ListenEvents);
}

/** Properties of a CCLCMsg_RespondCvarValue. */
export interface ICCLCMsg_RespondCvarValue {
  /** CCLCMsg_RespondCvarValue cookie */
  cookie?: number | null;

  /** CCLCMsg_RespondCvarValue statusCode */
  statusCode?: number | null;

  /** CCLCMsg_RespondCvarValue name */
  name?: string | null;

  /** CCLCMsg_RespondCvarValue value */
  value?: string | null;
}

/** Represents a CCLCMsg_RespondCvarValue. */
export class CCLCMsg_RespondCvarValue implements ICCLCMsg_RespondCvarValue {
  /**
   * Decodes a CCLCMsg_RespondCvarValue message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_RespondCvarValue
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_RespondCvarValue;

  /** CCLCMsg_RespondCvarValue cookie. */
  public cookie: number;

  /** CCLCMsg_RespondCvarValue statusCode. */
  public statusCode: number;

  /** CCLCMsg_RespondCvarValue name. */
  public name: string;

  /** CCLCMsg_RespondCvarValue value. */
  public value: string;
  /**
   * Constructs a new CCLCMsg_RespondCvarValue.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_RespondCvarValue);
}

/** Properties of a CCLCMsg_FileCRCCheck. */
export interface ICCLCMsg_FileCRCCheck {
  /** CCLCMsg_FileCRCCheck codePath */
  codePath?: number | null;

  /** CCLCMsg_FileCRCCheck path */
  path?: string | null;

  /** CCLCMsg_FileCRCCheck codeFilename */
  codeFilename?: number | null;

  /** CCLCMsg_FileCRCCheck filename */
  filename?: string | null;

  /** CCLCMsg_FileCRCCheck fileFraction */
  fileFraction?: number | null;

  /** CCLCMsg_FileCRCCheck md5 */
  md5?: Uint8Array | null;

  /** CCLCMsg_FileCRCCheck crc */
  crc?: number | null;

  /** CCLCMsg_FileCRCCheck fileHashType */
  fileHashType?: number | null;

  /** CCLCMsg_FileCRCCheck fileLen */
  fileLen?: number | null;

  /** CCLCMsg_FileCRCCheck packFileId */
  packFileId?: number | null;

  /** CCLCMsg_FileCRCCheck packFileNumber */
  packFileNumber?: number | null;
}

/** Represents a CCLCMsg_FileCRCCheck. */
export class CCLCMsg_FileCRCCheck implements ICCLCMsg_FileCRCCheck {
  /**
   * Decodes a CCLCMsg_FileCRCCheck message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_FileCRCCheck
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_FileCRCCheck;

  /** CCLCMsg_FileCRCCheck codePath. */
  public codePath: number;

  /** CCLCMsg_FileCRCCheck path. */
  public path: string;

  /** CCLCMsg_FileCRCCheck codeFilename. */
  public codeFilename: number;

  /** CCLCMsg_FileCRCCheck filename. */
  public filename: string;

  /** CCLCMsg_FileCRCCheck fileFraction. */
  public fileFraction: number;

  /** CCLCMsg_FileCRCCheck md5. */
  public md5: Uint8Array;

  /** CCLCMsg_FileCRCCheck crc. */
  public crc: number;

  /** CCLCMsg_FileCRCCheck fileHashType. */
  public fileHashType: number;

  /** CCLCMsg_FileCRCCheck fileLen. */
  public fileLen: number;

  /** CCLCMsg_FileCRCCheck packFileId. */
  public packFileId: number;

  /** CCLCMsg_FileCRCCheck packFileNumber. */
  public packFileNumber: number;
  /**
   * Constructs a new CCLCMsg_FileCRCCheck.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_FileCRCCheck);
}

/** Properties of a CCLCMsg_LoadingProgress. */
export interface ICCLCMsg_LoadingProgress {
  /** CCLCMsg_LoadingProgress progress */
  progress?: number | null;
}

/** Represents a CCLCMsg_LoadingProgress. */
export class CCLCMsg_LoadingProgress implements ICCLCMsg_LoadingProgress {
  /**
   * Decodes a CCLCMsg_LoadingProgress message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_LoadingProgress
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_LoadingProgress;

  /** CCLCMsg_LoadingProgress progress. */
  public progress: number;
  /**
   * Constructs a new CCLCMsg_LoadingProgress.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_LoadingProgress);
}

/** Properties of a CCLCMsg_SplitPlayerConnect. */
export interface ICCLCMsg_SplitPlayerConnect {
  /** CCLCMsg_SplitPlayerConnect convars */
  convars?: ICMsg_CVars | null;
}

/** Represents a CCLCMsg_SplitPlayerConnect. */
export class CCLCMsg_SplitPlayerConnect implements ICCLCMsg_SplitPlayerConnect {
  /**
   * Decodes a CCLCMsg_SplitPlayerConnect message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_SplitPlayerConnect
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_SplitPlayerConnect;

  /** CCLCMsg_SplitPlayerConnect convars. */
  public convars?: ICMsg_CVars | null;
  /**
   * Constructs a new CCLCMsg_SplitPlayerConnect.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_SplitPlayerConnect);
}

/** Properties of a CCLCMsg_CmdKeyValues. */
export interface ICCLCMsg_CmdKeyValues {
  /** CCLCMsg_CmdKeyValues keyvalues */
  keyvalues?: Uint8Array | null;
}

/** Represents a CCLCMsg_CmdKeyValues. */
export class CCLCMsg_CmdKeyValues implements ICCLCMsg_CmdKeyValues {
  /**
   * Decodes a CCLCMsg_CmdKeyValues message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_CmdKeyValues
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_CmdKeyValues;

  /** CCLCMsg_CmdKeyValues keyvalues. */
  public keyvalues: Uint8Array;
  /**
   * Constructs a new CCLCMsg_CmdKeyValues.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_CmdKeyValues);
}

/** Properties of a CSVCMsg_ServerInfo. */
export interface ICSVCMsg_ServerInfo {
  /** CSVCMsg_ServerInfo protocol */
  protocol?: number | null;

  /** CSVCMsg_ServerInfo serverCount */
  serverCount?: number | null;

  /** CSVCMsg_ServerInfo isDedicated */
  isDedicated?: boolean | null;

  /** CSVCMsg_ServerInfo isOfficialValveServer */
  isOfficialValveServer?: boolean | null;

  /** CSVCMsg_ServerInfo isHltv */
  isHltv?: boolean | null;

  /** CSVCMsg_ServerInfo isReplay */
  isReplay?: boolean | null;

  /** CSVCMsg_ServerInfo isRedirectingToProxyRelay */
  isRedirectingToProxyRelay?: boolean | null;

  /** CSVCMsg_ServerInfo cOs */
  cOs?: number | null;

  /** CSVCMsg_ServerInfo mapCrc */
  mapCrc?: number | null;

  /** CSVCMsg_ServerInfo clientCrc */
  clientCrc?: number | null;

  /** CSVCMsg_ServerInfo stringTableCrc */
  stringTableCrc?: number | null;

  /** CSVCMsg_ServerInfo maxClients */
  maxClients?: number | null;

  /** CSVCMsg_ServerInfo maxClasses */
  maxClasses?: number | null;

  /** CSVCMsg_ServerInfo playerSlot */
  playerSlot?: number | null;

  /** CSVCMsg_ServerInfo tickInterval */
  tickInterval?: number | null;

  /** CSVCMsg_ServerInfo gameDir */
  gameDir?: string | null;

  /** CSVCMsg_ServerInfo mapName */
  mapName?: string | null;

  /** CSVCMsg_ServerInfo mapGroupName */
  mapGroupName?: string | null;

  /** CSVCMsg_ServerInfo skyName */
  skyName?: string | null;

  /** CSVCMsg_ServerInfo hostName */
  hostName?: string | null;

  /** CSVCMsg_ServerInfo publicIp */
  publicIp?: number | null;

  /** CSVCMsg_ServerInfo ugcMapId */
  ugcMapId?: number | Long | null;
}

/** Represents a CSVCMsg_ServerInfo. */
export class CSVCMsg_ServerInfo implements ICSVCMsg_ServerInfo {
  /**
   * Decodes a CSVCMsg_ServerInfo message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_ServerInfo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_ServerInfo;

  /** CSVCMsg_ServerInfo protocol. */
  public protocol: number;

  /** CSVCMsg_ServerInfo serverCount. */
  public serverCount: number;

  /** CSVCMsg_ServerInfo isDedicated. */
  public isDedicated: boolean;

  /** CSVCMsg_ServerInfo isOfficialValveServer. */
  public isOfficialValveServer: boolean;

  /** CSVCMsg_ServerInfo isHltv. */
  public isHltv: boolean;

  /** CSVCMsg_ServerInfo isReplay. */
  public isReplay: boolean;

  /** CSVCMsg_ServerInfo isRedirectingToProxyRelay. */
  public isRedirectingToProxyRelay: boolean;

  /** CSVCMsg_ServerInfo cOs. */
  public cOs: number;

  /** CSVCMsg_ServerInfo mapCrc. */
  public mapCrc: number;

  /** CSVCMsg_ServerInfo clientCrc. */
  public clientCrc: number;

  /** CSVCMsg_ServerInfo stringTableCrc. */
  public stringTableCrc: number;

  /** CSVCMsg_ServerInfo maxClients. */
  public maxClients: number;

  /** CSVCMsg_ServerInfo maxClasses. */
  public maxClasses: number;

  /** CSVCMsg_ServerInfo playerSlot. */
  public playerSlot: number;

  /** CSVCMsg_ServerInfo tickInterval. */
  public tickInterval: number;

  /** CSVCMsg_ServerInfo gameDir. */
  public gameDir: string;

  /** CSVCMsg_ServerInfo mapName. */
  public mapName: string;

  /** CSVCMsg_ServerInfo mapGroupName. */
  public mapGroupName: string;

  /** CSVCMsg_ServerInfo skyName. */
  public skyName: string;

  /** CSVCMsg_ServerInfo hostName. */
  public hostName: string;

  /** CSVCMsg_ServerInfo publicIp. */
  public publicIp: number;

  /** CSVCMsg_ServerInfo ugcMapId. */
  public ugcMapId: number | Long;
  /**
   * Constructs a new CSVCMsg_ServerInfo.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_ServerInfo);
}

/** Properties of a CSVCMsg_ClassInfo. */
export interface ICSVCMsg_ClassInfo {
  /** CSVCMsg_ClassInfo createOnClient */
  createOnClient?: boolean | null;

  /** CSVCMsg_ClassInfo classes */
  classes?: CSVCMsg_ClassInfo.Iclass_t[] | null;
}

/** Represents a CSVCMsg_ClassInfo. */
export class CSVCMsg_ClassInfo implements ICSVCMsg_ClassInfo {
  /**
   * Decodes a CSVCMsg_ClassInfo message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_ClassInfo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_ClassInfo;

  /** CSVCMsg_ClassInfo createOnClient. */
  public createOnClient: boolean;

  /** CSVCMsg_ClassInfo classes. */
  public classes: CSVCMsg_ClassInfo.Iclass_t[];
  /**
   * Constructs a new CSVCMsg_ClassInfo.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_ClassInfo);
}

export namespace CSVCMsg_ClassInfo {
  /** Properties of a class_t. */
  interface Iclass_t {
    /** class_t classId */
    classId?: number | null;

    /** class_t dataTableName */
    dataTableName?: string | null;

    /** class_t className */
    className?: string | null;
  }

  /** Represents a class_t. */
  class class_t implements Iclass_t {
    /**
     * Decodes a class_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns class_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CSVCMsg_ClassInfo.class_t;

    /** class_t classId. */
    public classId: number;

    /** class_t dataTableName. */
    public dataTableName: string;

    /** class_t className. */
    public className: string;
    /**
     * Constructs a new class_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: CSVCMsg_ClassInfo.Iclass_t);
  }
}

/** Properties of a CSVCMsg_SendTable. */
export interface ICSVCMsg_SendTable {
  /** CSVCMsg_SendTable isEnd */
  isEnd?: boolean | null;

  /** CSVCMsg_SendTable netTableName */
  netTableName?: string | null;

  /** CSVCMsg_SendTable needsDecoder */
  needsDecoder?: boolean | null;

  /** CSVCMsg_SendTable props */
  props?: CSVCMsg_SendTable.Isendprop_t[] | null;
}

/** Represents a CSVCMsg_SendTable. */
export class CSVCMsg_SendTable implements ICSVCMsg_SendTable {
  /**
   * Decodes a CSVCMsg_SendTable message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_SendTable
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_SendTable;

  /** CSVCMsg_SendTable isEnd. */
  public isEnd: boolean;

  /** CSVCMsg_SendTable netTableName. */
  public netTableName: string;

  /** CSVCMsg_SendTable needsDecoder. */
  public needsDecoder: boolean;

  /** CSVCMsg_SendTable props. */
  public props: CSVCMsg_SendTable.Isendprop_t[];
  /**
   * Constructs a new CSVCMsg_SendTable.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_SendTable);
}

export namespace CSVCMsg_SendTable {
  /** Properties of a sendprop_t. */
  interface Isendprop_t {
    /** sendprop_t type */
    type?: number | null;

    /** sendprop_t varName */
    varName?: string | null;

    /** sendprop_t flags */
    flags?: number | null;

    /** sendprop_t priority */
    priority?: number | null;

    /** sendprop_t dtName */
    dtName?: string | null;

    /** sendprop_t numElements */
    numElements?: number | null;

    /** sendprop_t lowValue */
    lowValue?: number | null;

    /** sendprop_t highValue */
    highValue?: number | null;

    /** sendprop_t numBits */
    numBits?: number | null;
  }

  /** Represents a sendprop_t. */
  class sendprop_t implements Isendprop_t {
    /**
     * Decodes a sendprop_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns sendprop_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CSVCMsg_SendTable.sendprop_t;

    /** sendprop_t type. */
    public type: number;

    /** sendprop_t varName. */
    public varName: string;

    /** sendprop_t flags. */
    public flags: number;

    /** sendprop_t priority. */
    public priority: number;

    /** sendprop_t dtName. */
    public dtName: string;

    /** sendprop_t numElements. */
    public numElements: number;

    /** sendprop_t lowValue. */
    public lowValue: number;

    /** sendprop_t highValue. */
    public highValue: number;

    /** sendprop_t numBits. */
    public numBits: number;
    /**
     * Constructs a new sendprop_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: CSVCMsg_SendTable.Isendprop_t);
  }
}

/** Properties of a CSVCMsg_Print. */
export interface ICSVCMsg_Print {
  /** CSVCMsg_Print text */
  text?: string | null;
}

/** Represents a CSVCMsg_Print. */
export class CSVCMsg_Print implements ICSVCMsg_Print {
  /**
   * Decodes a CSVCMsg_Print message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_Print
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_Print;

  /** CSVCMsg_Print text. */
  public text: string;
  /**
   * Constructs a new CSVCMsg_Print.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_Print);
}

/** Properties of a CSVCMsg_SetPause. */
export interface ICSVCMsg_SetPause {
  /** CSVCMsg_SetPause paused */
  paused?: boolean | null;
}

/** Represents a CSVCMsg_SetPause. */
export class CSVCMsg_SetPause implements ICSVCMsg_SetPause {
  /**
   * Decodes a CSVCMsg_SetPause message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_SetPause
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_SetPause;

  /** CSVCMsg_SetPause paused. */
  public paused: boolean;
  /**
   * Constructs a new CSVCMsg_SetPause.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_SetPause);
}

/** Properties of a CSVCMsg_SetView. */
export interface ICSVCMsg_SetView {
  /** CSVCMsg_SetView entityIndex */
  entityIndex?: number | null;
}

/** Represents a CSVCMsg_SetView. */
export class CSVCMsg_SetView implements ICSVCMsg_SetView {
  /**
   * Decodes a CSVCMsg_SetView message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_SetView
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_SetView;

  /** CSVCMsg_SetView entityIndex. */
  public entityIndex: number;
  /**
   * Constructs a new CSVCMsg_SetView.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_SetView);
}

/** Properties of a CSVCMsg_CreateStringTable. */
export interface ICSVCMsg_CreateStringTable {
  /** CSVCMsg_CreateStringTable name */
  name?: string | null;

  /** CSVCMsg_CreateStringTable maxEntries */
  maxEntries?: number | null;

  /** CSVCMsg_CreateStringTable numEntries */
  numEntries?: number | null;

  /** CSVCMsg_CreateStringTable userDataFixedSize */
  userDataFixedSize?: boolean | null;

  /** CSVCMsg_CreateStringTable userDataSize */
  userDataSize?: number | null;

  /** CSVCMsg_CreateStringTable userDataSizeBits */
  userDataSizeBits?: number | null;

  /** CSVCMsg_CreateStringTable flags */
  flags?: number | null;

  /** CSVCMsg_CreateStringTable stringData */
  stringData?: Uint8Array | null;
}

/** Represents a CSVCMsg_CreateStringTable. */
export class CSVCMsg_CreateStringTable implements ICSVCMsg_CreateStringTable {
  /**
   * Decodes a CSVCMsg_CreateStringTable message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_CreateStringTable
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_CreateStringTable;

  /** CSVCMsg_CreateStringTable name. */
  public name: string;

  /** CSVCMsg_CreateStringTable maxEntries. */
  public maxEntries: number;

  /** CSVCMsg_CreateStringTable numEntries. */
  public numEntries: number;

  /** CSVCMsg_CreateStringTable userDataFixedSize. */
  public userDataFixedSize: boolean;

  /** CSVCMsg_CreateStringTable userDataSize. */
  public userDataSize: number;

  /** CSVCMsg_CreateStringTable userDataSizeBits. */
  public userDataSizeBits: number;

  /** CSVCMsg_CreateStringTable flags. */
  public flags: number;

  /** CSVCMsg_CreateStringTable stringData. */
  public stringData: Uint8Array;
  /**
   * Constructs a new CSVCMsg_CreateStringTable.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_CreateStringTable);
}

/** Properties of a CSVCMsg_UpdateStringTable. */
export interface ICSVCMsg_UpdateStringTable {
  /** CSVCMsg_UpdateStringTable tableId */
  tableId?: number | null;

  /** CSVCMsg_UpdateStringTable numChangedEntries */
  numChangedEntries?: number | null;

  /** CSVCMsg_UpdateStringTable stringData */
  stringData?: Uint8Array | null;
}

/** Represents a CSVCMsg_UpdateStringTable. */
export class CSVCMsg_UpdateStringTable implements ICSVCMsg_UpdateStringTable {
  /**
   * Decodes a CSVCMsg_UpdateStringTable message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_UpdateStringTable
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_UpdateStringTable;

  /** CSVCMsg_UpdateStringTable tableId. */
  public tableId: number;

  /** CSVCMsg_UpdateStringTable numChangedEntries. */
  public numChangedEntries: number;

  /** CSVCMsg_UpdateStringTable stringData. */
  public stringData: Uint8Array;
  /**
   * Constructs a new CSVCMsg_UpdateStringTable.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_UpdateStringTable);
}

/** Properties of a CSVCMsg_VoiceInit. */
export interface ICSVCMsg_VoiceInit {
  /** CSVCMsg_VoiceInit quality */
  quality?: number | null;

  /** CSVCMsg_VoiceInit codec */
  codec?: string | null;

  /** CSVCMsg_VoiceInit version */
  version?: number | null;
}

/** Represents a CSVCMsg_VoiceInit. */
export class CSVCMsg_VoiceInit implements ICSVCMsg_VoiceInit {
  /**
   * Decodes a CSVCMsg_VoiceInit message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_VoiceInit
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_VoiceInit;

  /** CSVCMsg_VoiceInit quality. */
  public quality: number;

  /** CSVCMsg_VoiceInit codec. */
  public codec: string;

  /** CSVCMsg_VoiceInit version. */
  public version: number;
  /**
   * Constructs a new CSVCMsg_VoiceInit.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_VoiceInit);
}

/** Properties of a CSVCMsg_VoiceData. */
export interface ICSVCMsg_VoiceData {
  /** CSVCMsg_VoiceData client */
  client?: number | null;

  /** CSVCMsg_VoiceData proximity */
  proximity?: boolean | null;

  /** CSVCMsg_VoiceData xuid */
  xuid?: number | Long | null;

  /** CSVCMsg_VoiceData audibleMask */
  audibleMask?: number | null;

  /** CSVCMsg_VoiceData voiceData */
  voiceData?: Uint8Array | null;

  /** CSVCMsg_VoiceData caster */
  caster?: boolean | null;

  /** CSVCMsg_VoiceData format */
  format?: VoiceDataFormat_t | null;

  /** CSVCMsg_VoiceData sequenceBytes */
  sequenceBytes?: number | null;

  /** CSVCMsg_VoiceData sectionNumber */
  sectionNumber?: number | null;

  /** CSVCMsg_VoiceData uncompressedSampleOffset */
  uncompressedSampleOffset?: number | null;
}

/** Represents a CSVCMsg_VoiceData. */
export class CSVCMsg_VoiceData implements ICSVCMsg_VoiceData {
  /**
   * Decodes a CSVCMsg_VoiceData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_VoiceData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_VoiceData;

  /** CSVCMsg_VoiceData client. */
  public client: number;

  /** CSVCMsg_VoiceData proximity. */
  public proximity: boolean;

  /** CSVCMsg_VoiceData xuid. */
  public xuid: number | Long;

  /** CSVCMsg_VoiceData audibleMask. */
  public audibleMask: number;

  /** CSVCMsg_VoiceData voiceData. */
  public voiceData: Uint8Array;

  /** CSVCMsg_VoiceData caster. */
  public caster: boolean;

  /** CSVCMsg_VoiceData format. */
  public format: VoiceDataFormat_t;

  /** CSVCMsg_VoiceData sequenceBytes. */
  public sequenceBytes: number;

  /** CSVCMsg_VoiceData sectionNumber. */
  public sectionNumber: number;

  /** CSVCMsg_VoiceData uncompressedSampleOffset. */
  public uncompressedSampleOffset: number;
  /**
   * Constructs a new CSVCMsg_VoiceData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_VoiceData);
}

/** Properties of a CSVCMsg_FixAngle. */
export interface ICSVCMsg_FixAngle {
  /** CSVCMsg_FixAngle relative */
  relative?: boolean | null;

  /** CSVCMsg_FixAngle angle */
  angle?: ICMsgQAngle | null;
}

/** Represents a CSVCMsg_FixAngle. */
export class CSVCMsg_FixAngle implements ICSVCMsg_FixAngle {
  /**
   * Decodes a CSVCMsg_FixAngle message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_FixAngle
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_FixAngle;

  /** CSVCMsg_FixAngle relative. */
  public relative: boolean;

  /** CSVCMsg_FixAngle angle. */
  public angle?: ICMsgQAngle | null;
  /**
   * Constructs a new CSVCMsg_FixAngle.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_FixAngle);
}

/** Properties of a CSVCMsg_CrosshairAngle. */
export interface ICSVCMsg_CrosshairAngle {
  /** CSVCMsg_CrosshairAngle angle */
  angle?: ICMsgQAngle | null;
}

/** Represents a CSVCMsg_CrosshairAngle. */
export class CSVCMsg_CrosshairAngle implements ICSVCMsg_CrosshairAngle {
  /**
   * Decodes a CSVCMsg_CrosshairAngle message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_CrosshairAngle
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_CrosshairAngle;

  /** CSVCMsg_CrosshairAngle angle. */
  public angle?: ICMsgQAngle | null;
  /**
   * Constructs a new CSVCMsg_CrosshairAngle.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_CrosshairAngle);
}

/** Properties of a CSVCMsg_Prefetch. */
export interface ICSVCMsg_Prefetch {
  /** CSVCMsg_Prefetch soundIndex */
  soundIndex?: number | null;
}

/** Represents a CSVCMsg_Prefetch. */
export class CSVCMsg_Prefetch implements ICSVCMsg_Prefetch {
  /**
   * Decodes a CSVCMsg_Prefetch message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_Prefetch
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_Prefetch;

  /** CSVCMsg_Prefetch soundIndex. */
  public soundIndex: number;
  /**
   * Constructs a new CSVCMsg_Prefetch.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_Prefetch);
}

/** Properties of a CSVCMsg_BSPDecal. */
export interface ICSVCMsg_BSPDecal {
  /** CSVCMsg_BSPDecal pos */
  pos?: ICMsgVector | null;

  /** CSVCMsg_BSPDecal decalTextureIndex */
  decalTextureIndex?: number | null;

  /** CSVCMsg_BSPDecal entityIndex */
  entityIndex?: number | null;

  /** CSVCMsg_BSPDecal modelIndex */
  modelIndex?: number | null;

  /** CSVCMsg_BSPDecal lowPriority */
  lowPriority?: boolean | null;
}

/** Represents a CSVCMsg_BSPDecal. */
export class CSVCMsg_BSPDecal implements ICSVCMsg_BSPDecal {
  /**
   * Decodes a CSVCMsg_BSPDecal message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_BSPDecal
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_BSPDecal;

  /** CSVCMsg_BSPDecal pos. */
  public pos?: ICMsgVector | null;

  /** CSVCMsg_BSPDecal decalTextureIndex. */
  public decalTextureIndex: number;

  /** CSVCMsg_BSPDecal entityIndex. */
  public entityIndex: number;

  /** CSVCMsg_BSPDecal modelIndex. */
  public modelIndex: number;

  /** CSVCMsg_BSPDecal lowPriority. */
  public lowPriority: boolean;
  /**
   * Constructs a new CSVCMsg_BSPDecal.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_BSPDecal);
}

/** Properties of a CSVCMsg_SplitScreen. */
export interface ICSVCMsg_SplitScreen {
  /** CSVCMsg_SplitScreen type */
  type?: ESplitScreenMessageType | null;

  /** CSVCMsg_SplitScreen slot */
  slot?: number | null;

  /** CSVCMsg_SplitScreen playerIndex */
  playerIndex?: number | null;
}

/** Represents a CSVCMsg_SplitScreen. */
export class CSVCMsg_SplitScreen implements ICSVCMsg_SplitScreen {
  /**
   * Decodes a CSVCMsg_SplitScreen message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_SplitScreen
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_SplitScreen;

  /** CSVCMsg_SplitScreen type. */
  public type: ESplitScreenMessageType;

  /** CSVCMsg_SplitScreen slot. */
  public slot: number;

  /** CSVCMsg_SplitScreen playerIndex. */
  public playerIndex: number;
  /**
   * Constructs a new CSVCMsg_SplitScreen.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_SplitScreen);
}

/** Properties of a CSVCMsg_GetCvarValue. */
export interface ICSVCMsg_GetCvarValue {
  /** CSVCMsg_GetCvarValue cookie */
  cookie?: number | null;

  /** CSVCMsg_GetCvarValue cvarName */
  cvarName?: string | null;
}

/** Represents a CSVCMsg_GetCvarValue. */
export class CSVCMsg_GetCvarValue implements ICSVCMsg_GetCvarValue {
  /**
   * Decodes a CSVCMsg_GetCvarValue message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_GetCvarValue
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_GetCvarValue;

  /** CSVCMsg_GetCvarValue cookie. */
  public cookie: number;

  /** CSVCMsg_GetCvarValue cvarName. */
  public cvarName: string;
  /**
   * Constructs a new CSVCMsg_GetCvarValue.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_GetCvarValue);
}

/** Properties of a CSVCMsg_Menu. */
export interface ICSVCMsg_Menu {
  /** CSVCMsg_Menu dialogType */
  dialogType?: number | null;

  /** CSVCMsg_Menu menuKeyValues */
  menuKeyValues?: Uint8Array | null;
}

/** Represents a CSVCMsg_Menu. */
export class CSVCMsg_Menu implements ICSVCMsg_Menu {
  /**
   * Decodes a CSVCMsg_Menu message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_Menu
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_Menu;

  /** CSVCMsg_Menu dialogType. */
  public dialogType: number;

  /** CSVCMsg_Menu menuKeyValues. */
  public menuKeyValues: Uint8Array;
  /**
   * Constructs a new CSVCMsg_Menu.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_Menu);
}

/** Properties of a CSVCMsg_UserMessage. */
export interface ICSVCMsg_UserMessage {
  /** CSVCMsg_UserMessage msgType */
  msgType?: number | null;

  /** CSVCMsg_UserMessage msgData */
  msgData?: Uint8Array | null;

  /** CSVCMsg_UserMessage passthrough */
  passthrough?: number | null;
}

/** Represents a CSVCMsg_UserMessage. */
export class CSVCMsg_UserMessage implements ICSVCMsg_UserMessage {
  /**
   * Decodes a CSVCMsg_UserMessage message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_UserMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_UserMessage;

  /** CSVCMsg_UserMessage msgType. */
  public msgType: number;

  /** CSVCMsg_UserMessage msgData. */
  public msgData: Uint8Array;

  /** CSVCMsg_UserMessage passthrough. */
  public passthrough: number;
  /**
   * Constructs a new CSVCMsg_UserMessage.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_UserMessage);
}

/** Properties of a CSVCMsg_PaintmapData. */
export interface ICSVCMsg_PaintmapData {
  /** CSVCMsg_PaintmapData paintmap */
  paintmap?: Uint8Array | null;
}

/** Represents a CSVCMsg_PaintmapData. */
export class CSVCMsg_PaintmapData implements ICSVCMsg_PaintmapData {
  /**
   * Decodes a CSVCMsg_PaintmapData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_PaintmapData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_PaintmapData;

  /** CSVCMsg_PaintmapData paintmap. */
  public paintmap: Uint8Array;
  /**
   * Constructs a new CSVCMsg_PaintmapData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_PaintmapData);
}

/** Properties of a CSVCMsg_GameEvent. */
export interface ICSVCMsg_GameEvent {
  /** CSVCMsg_GameEvent eventName */
  eventName?: string | null;

  /** CSVCMsg_GameEvent eventid */
  eventid?: number | null;

  /** CSVCMsg_GameEvent keys */
  keys?: CSVCMsg_GameEvent.Ikey_t[] | null;

  /** CSVCMsg_GameEvent passthrough */
  passthrough?: number | null;
}

/** Represents a CSVCMsg_GameEvent. */
export class CSVCMsg_GameEvent implements ICSVCMsg_GameEvent {
  /**
   * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_GameEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_GameEvent;

  /** CSVCMsg_GameEvent eventName. */
  public eventName: string;

  /** CSVCMsg_GameEvent eventid. */
  public eventid: number;

  /** CSVCMsg_GameEvent keys. */
  public keys: CSVCMsg_GameEvent.Ikey_t[];

  /** CSVCMsg_GameEvent passthrough. */
  public passthrough: number;
  /**
   * Constructs a new CSVCMsg_GameEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_GameEvent);
}

export namespace CSVCMsg_GameEvent {
  /** Properties of a key_t. */
  interface Ikey_t {
    /** key_t type */
    type?: number | null;

    /** key_t valString */
    valString?: string | null;

    /** key_t valFloat */
    valFloat?: number | null;

    /** key_t valLong */
    valLong?: number | null;

    /** key_t valShort */
    valShort?: number | null;

    /** key_t valByte */
    valByte?: number | null;

    /** key_t valBool */
    valBool?: boolean | null;

    /** key_t valUint64 */
    valUint64?: number | Long | null;

    /** key_t valWstring */
    valWstring?: Uint8Array | null;
  }

  /** Represents a key_t. */
  class key_t implements Ikey_t {
    /**
     * Decodes a key_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns key_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CSVCMsg_GameEvent.key_t;

    /** key_t type. */
    public type: number;

    /** key_t valString. */
    public valString: string;

    /** key_t valFloat. */
    public valFloat: number;

    /** key_t valLong. */
    public valLong: number;

    /** key_t valShort. */
    public valShort: number;

    /** key_t valByte. */
    public valByte: number;

    /** key_t valBool. */
    public valBool: boolean;

    /** key_t valUint64. */
    public valUint64: number | Long;

    /** key_t valWstring. */
    public valWstring: Uint8Array;
    /**
     * Constructs a new key_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: CSVCMsg_GameEvent.Ikey_t);
  }
}

/** Properties of a CSVCMsg_GameEventList. */
export interface ICSVCMsg_GameEventList {
  /** CSVCMsg_GameEventList descriptors */
  descriptors?: CSVCMsg_GameEventList.Idescriptor_t[] | null;
}

/** Represents a CSVCMsg_GameEventList. */
export class CSVCMsg_GameEventList implements ICSVCMsg_GameEventList {
  /**
   * Decodes a CSVCMsg_GameEventList message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_GameEventList
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_GameEventList;

  /** CSVCMsg_GameEventList descriptors. */
  public descriptors: CSVCMsg_GameEventList.Idescriptor_t[];
  /**
   * Constructs a new CSVCMsg_GameEventList.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_GameEventList);
}

export namespace CSVCMsg_GameEventList {
  /** Properties of a key_t. */
  interface Ikey_t {
    /** key_t type */
    type?: number | null;

    /** key_t name */
    name?: string | null;
  }

  /** Represents a key_t. */
  class key_t implements Ikey_t {
    /**
     * Decodes a key_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns key_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CSVCMsg_GameEventList.key_t;

    /** key_t type. */
    public type: number;

    /** key_t name. */
    public name: string;
    /**
     * Constructs a new key_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: CSVCMsg_GameEventList.Ikey_t);
  }

  /** Properties of a descriptor_t. */
  interface Idescriptor_t {
    /** descriptor_t eventid */
    eventid?: number | null;

    /** descriptor_t name */
    name?: string | null;

    /** descriptor_t keys */
    keys?: CSVCMsg_GameEventList.Ikey_t[] | null;
  }

  /** Represents a descriptor_t. */
  class descriptor_t implements Idescriptor_t {
    /**
     * Decodes a descriptor_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns descriptor_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CSVCMsg_GameEventList.descriptor_t;

    /** descriptor_t eventid. */
    public eventid: number;

    /** descriptor_t name. */
    public name: string;

    /** descriptor_t keys. */
    public keys: CSVCMsg_GameEventList.Ikey_t[];
    /**
     * Constructs a new descriptor_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: CSVCMsg_GameEventList.Idescriptor_t);
  }
}

/** Properties of a CSVCMsg_TempEntities. */
export interface ICSVCMsg_TempEntities {
  /** CSVCMsg_TempEntities reliable */
  reliable?: boolean | null;

  /** CSVCMsg_TempEntities numEntries */
  numEntries?: number | null;

  /** CSVCMsg_TempEntities entityData */
  entityData?: Uint8Array | null;
}

/** Represents a CSVCMsg_TempEntities. */
export class CSVCMsg_TempEntities implements ICSVCMsg_TempEntities {
  /**
   * Decodes a CSVCMsg_TempEntities message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_TempEntities
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_TempEntities;

  /** CSVCMsg_TempEntities reliable. */
  public reliable: boolean;

  /** CSVCMsg_TempEntities numEntries. */
  public numEntries: number;

  /** CSVCMsg_TempEntities entityData. */
  public entityData: Uint8Array;
  /**
   * Constructs a new CSVCMsg_TempEntities.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_TempEntities);
}

/** Properties of a CSVCMsg_PacketEntities. */
export interface ICSVCMsg_PacketEntities {
  /** CSVCMsg_PacketEntities maxEntries */
  maxEntries?: number | null;

  /** CSVCMsg_PacketEntities updatedEntries */
  updatedEntries?: number | null;

  /** CSVCMsg_PacketEntities isDelta */
  isDelta?: boolean | null;

  /** CSVCMsg_PacketEntities updateBaseline */
  updateBaseline?: boolean | null;

  /** CSVCMsg_PacketEntities baseline */
  baseline?: number | null;

  /** CSVCMsg_PacketEntities deltaFrom */
  deltaFrom?: number | null;

  /** CSVCMsg_PacketEntities entityData */
  entityData?: Uint8Array | null;
}

/** Represents a CSVCMsg_PacketEntities. */
export class CSVCMsg_PacketEntities implements ICSVCMsg_PacketEntities {
  /**
   * Decodes a CSVCMsg_PacketEntities message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_PacketEntities
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_PacketEntities;

  /** CSVCMsg_PacketEntities maxEntries. */
  public maxEntries: number;

  /** CSVCMsg_PacketEntities updatedEntries. */
  public updatedEntries: number;

  /** CSVCMsg_PacketEntities isDelta. */
  public isDelta: boolean;

  /** CSVCMsg_PacketEntities updateBaseline. */
  public updateBaseline: boolean;

  /** CSVCMsg_PacketEntities baseline. */
  public baseline: number;

  /** CSVCMsg_PacketEntities deltaFrom. */
  public deltaFrom: number;

  /** CSVCMsg_PacketEntities entityData. */
  public entityData: Uint8Array;
  /**
   * Constructs a new CSVCMsg_PacketEntities.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_PacketEntities);
}

/** Properties of a CSVCMsg_Sounds. */
export interface ICSVCMsg_Sounds {
  /** CSVCMsg_Sounds reliableSound */
  reliableSound?: boolean | null;

  /** CSVCMsg_Sounds sounds */
  sounds?: CSVCMsg_Sounds.Isounddata_t[] | null;
}

/** Represents a CSVCMsg_Sounds. */
export class CSVCMsg_Sounds implements ICSVCMsg_Sounds {
  /**
   * Decodes a CSVCMsg_Sounds message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_Sounds
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_Sounds;

  /** CSVCMsg_Sounds reliableSound. */
  public reliableSound: boolean;

  /** CSVCMsg_Sounds sounds. */
  public sounds: CSVCMsg_Sounds.Isounddata_t[];
  /**
   * Constructs a new CSVCMsg_Sounds.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_Sounds);
}

export namespace CSVCMsg_Sounds {
  /** Properties of a sounddata_t. */
  interface Isounddata_t {
    /** sounddata_t originX */
    originX?: number | null;

    /** sounddata_t originY */
    originY?: number | null;

    /** sounddata_t originZ */
    originZ?: number | null;

    /** sounddata_t volume */
    volume?: number | null;

    /** sounddata_t delayValue */
    delayValue?: number | null;

    /** sounddata_t sequenceNumber */
    sequenceNumber?: number | null;

    /** sounddata_t entityIndex */
    entityIndex?: number | null;

    /** sounddata_t channel */
    channel?: number | null;

    /** sounddata_t pitch */
    pitch?: number | null;

    /** sounddata_t flags */
    flags?: number | null;

    /** sounddata_t soundNum */
    soundNum?: number | null;

    /** sounddata_t soundNumHandle */
    soundNumHandle?: number | null;

    /** sounddata_t speakerEntity */
    speakerEntity?: number | null;

    /** sounddata_t randomSeed */
    randomSeed?: number | null;

    /** sounddata_t soundLevel */
    soundLevel?: number | null;

    /** sounddata_t isSentence */
    isSentence?: boolean | null;

    /** sounddata_t isAmbient */
    isAmbient?: boolean | null;
  }

  /** Represents a sounddata_t. */
  class sounddata_t implements Isounddata_t {
    /**
     * Decodes a sounddata_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns sounddata_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): CSVCMsg_Sounds.sounddata_t;

    /** sounddata_t originX. */
    public originX: number;

    /** sounddata_t originY. */
    public originY: number;

    /** sounddata_t originZ. */
    public originZ: number;

    /** sounddata_t volume. */
    public volume: number;

    /** sounddata_t delayValue. */
    public delayValue: number;

    /** sounddata_t sequenceNumber. */
    public sequenceNumber: number;

    /** sounddata_t entityIndex. */
    public entityIndex: number;

    /** sounddata_t channel. */
    public channel: number;

    /** sounddata_t pitch. */
    public pitch: number;

    /** sounddata_t flags. */
    public flags: number;

    /** sounddata_t soundNum. */
    public soundNum: number;

    /** sounddata_t soundNumHandle. */
    public soundNumHandle: number;

    /** sounddata_t speakerEntity. */
    public speakerEntity: number;

    /** sounddata_t randomSeed. */
    public randomSeed: number;

    /** sounddata_t soundLevel. */
    public soundLevel: number;

    /** sounddata_t isSentence. */
    public isSentence: boolean;

    /** sounddata_t isAmbient. */
    public isAmbient: boolean;
    /**
     * Constructs a new sounddata_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: CSVCMsg_Sounds.Isounddata_t);
  }
}

/** Properties of a CSVCMsg_EntityMsg. */
export interface ICSVCMsg_EntityMsg {
  /** CSVCMsg_EntityMsg entIndex */
  entIndex?: number | null;

  /** CSVCMsg_EntityMsg classId */
  classId?: number | null;

  /** CSVCMsg_EntityMsg entData */
  entData?: Uint8Array | null;
}

/** Represents a CSVCMsg_EntityMsg. */
export class CSVCMsg_EntityMsg implements ICSVCMsg_EntityMsg {
  /**
   * Decodes a CSVCMsg_EntityMsg message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_EntityMsg
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_EntityMsg;

  /** CSVCMsg_EntityMsg entIndex. */
  public entIndex: number;

  /** CSVCMsg_EntityMsg classId. */
  public classId: number;

  /** CSVCMsg_EntityMsg entData. */
  public entData: Uint8Array;
  /**
   * Constructs a new CSVCMsg_EntityMsg.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_EntityMsg);
}

/** Properties of a CSVCMsg_CmdKeyValues. */
export interface ICSVCMsg_CmdKeyValues {
  /** CSVCMsg_CmdKeyValues keyvalues */
  keyvalues?: Uint8Array | null;
}

/** Represents a CSVCMsg_CmdKeyValues. */
export class CSVCMsg_CmdKeyValues implements ICSVCMsg_CmdKeyValues {
  /**
   * Decodes a CSVCMsg_CmdKeyValues message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_CmdKeyValues
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_CmdKeyValues;

  /** CSVCMsg_CmdKeyValues keyvalues. */
  public keyvalues: Uint8Array;
  /**
   * Constructs a new CSVCMsg_CmdKeyValues.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_CmdKeyValues);
}

/** Properties of a CSVCMsg_EncryptedData. */
export interface ICSVCMsg_EncryptedData {
  /** CSVCMsg_EncryptedData encrypted */
  encrypted?: Uint8Array | null;

  /** CSVCMsg_EncryptedData keyType */
  keyType?: number | null;
}

/** Represents a CSVCMsg_EncryptedData. */
export class CSVCMsg_EncryptedData implements ICSVCMsg_EncryptedData {
  /**
   * Decodes a CSVCMsg_EncryptedData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_EncryptedData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_EncryptedData;

  /** CSVCMsg_EncryptedData encrypted. */
  public encrypted: Uint8Array;

  /** CSVCMsg_EncryptedData keyType. */
  public keyType: number;
  /**
   * Constructs a new CSVCMsg_EncryptedData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_EncryptedData);
}

/** Properties of a CSVCMsg_HltvReplay. */
export interface ICSVCMsg_HltvReplay {
  /** CSVCMsg_HltvReplay delay */
  delay?: number | null;

  /** CSVCMsg_HltvReplay primaryTarget */
  primaryTarget?: number | null;

  /** CSVCMsg_HltvReplay replayStopAt */
  replayStopAt?: number | null;

  /** CSVCMsg_HltvReplay replayStartAt */
  replayStartAt?: number | null;

  /** CSVCMsg_HltvReplay replaySlowdownBegin */
  replaySlowdownBegin?: number | null;

  /** CSVCMsg_HltvReplay replaySlowdownEnd */
  replaySlowdownEnd?: number | null;

  /** CSVCMsg_HltvReplay replaySlowdownRate */
  replaySlowdownRate?: number | null;
}

/** Represents a CSVCMsg_HltvReplay. */
export class CSVCMsg_HltvReplay implements ICSVCMsg_HltvReplay {
  /**
   * Decodes a CSVCMsg_HltvReplay message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CSVCMsg_HltvReplay
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CSVCMsg_HltvReplay;

  /** CSVCMsg_HltvReplay delay. */
  public delay: number;

  /** CSVCMsg_HltvReplay primaryTarget. */
  public primaryTarget: number;

  /** CSVCMsg_HltvReplay replayStopAt. */
  public replayStopAt: number;

  /** CSVCMsg_HltvReplay replayStartAt. */
  public replayStartAt: number;

  /** CSVCMsg_HltvReplay replaySlowdownBegin. */
  public replaySlowdownBegin: number;

  /** CSVCMsg_HltvReplay replaySlowdownEnd. */
  public replaySlowdownEnd: number;

  /** CSVCMsg_HltvReplay replaySlowdownRate. */
  public replaySlowdownRate: number;
  /**
   * Constructs a new CSVCMsg_HltvReplay.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICSVCMsg_HltvReplay);
}

/** Properties of a CCLCMsg_HltvReplay. */
export interface ICCLCMsg_HltvReplay {
  /** CCLCMsg_HltvReplay request */
  request?: number | null;

  /** CCLCMsg_HltvReplay slowdownLength */
  slowdownLength?: number | null;

  /** CCLCMsg_HltvReplay slowdownRate */
  slowdownRate?: number | null;

  /** CCLCMsg_HltvReplay primaryTargetEntIndex */
  primaryTargetEntIndex?: number | null;

  /** CCLCMsg_HltvReplay eventTime */
  eventTime?: number | null;
}

/** Represents a CCLCMsg_HltvReplay. */
export class CCLCMsg_HltvReplay implements ICCLCMsg_HltvReplay {
  /**
   * Decodes a CCLCMsg_HltvReplay message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns CCLCMsg_HltvReplay
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): CCLCMsg_HltvReplay;

  /** CCLCMsg_HltvReplay request. */
  public request: number;

  /** CCLCMsg_HltvReplay slowdownLength. */
  public slowdownLength: number;

  /** CCLCMsg_HltvReplay slowdownRate. */
  public slowdownRate: number;

  /** CCLCMsg_HltvReplay primaryTargetEntIndex. */
  public primaryTargetEntIndex: number;

  /** CCLCMsg_HltvReplay eventTime. */
  public eventTime: number;
  /**
   * Constructs a new CCLCMsg_HltvReplay.
   * @param [properties] Properties to set
   */
  constructor(properties?: ICCLCMsg_HltvReplay);
}
