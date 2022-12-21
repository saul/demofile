/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { CMsgVector2D, CMsgRGBA, CMsgVector } from "./netmessages";
import {
  CEconItemPreviewDataBlock,
  ScoreLeaderboardData,
  PlayerDecalDigitalSignature,
  CMsgGCCstrike15V2GC2ServerNotifyXPRewarded,
  CMsgGCCStrike15ClientDeepStats,
  CMsgGCCStrike15V2MatchmakingGC2ServerReserve
} from "./cstrike15_gcmessages";

export const protobufPackage = "";

export enum ECstrike15UserMessages {
  CS_UM_VGUIMenu = 1,
  CS_UM_Geiger = 2,
  CS_UM_Train = 3,
  CS_UM_HudText = 4,
  CS_UM_SayText = 5,
  CS_UM_SayText2 = 6,
  CS_UM_TextMsg = 7,
  CS_UM_HudMsg = 8,
  CS_UM_ResetHud = 9,
  CS_UM_GameTitle = 10,
  CS_UM_Shake = 12,
  CS_UM_Fade = 13,
  CS_UM_Rumble = 14,
  CS_UM_CloseCaption = 15,
  CS_UM_CloseCaptionDirect = 16,
  CS_UM_SendAudio = 17,
  CS_UM_RawAudio = 18,
  CS_UM_VoiceMask = 19,
  CS_UM_RequestState = 20,
  CS_UM_Damage = 21,
  CS_UM_RadioText = 22,
  CS_UM_HintText = 23,
  CS_UM_KeyHintText = 24,
  CS_UM_ProcessSpottedEntityUpdate = 25,
  CS_UM_ReloadEffect = 26,
  CS_UM_AdjustMoney = 27,
  CS_UM_UpdateTeamMoney = 28,
  CS_UM_StopSpectatorMode = 29,
  CS_UM_KillCam = 30,
  CS_UM_DesiredTimescale = 31,
  CS_UM_CurrentTimescale = 32,
  CS_UM_AchievementEvent = 33,
  CS_UM_MatchEndConditions = 34,
  CS_UM_DisconnectToLobby = 35,
  CS_UM_PlayerStatsUpdate = 36,
  CS_UM_DisplayInventory = 37,
  CS_UM_WarmupHasEnded = 38,
  CS_UM_ClientInfo = 39,
  CS_UM_XRankGet = 40,
  CS_UM_XRankUpd = 41,
  CS_UM_CallVoteFailed = 45,
  CS_UM_VoteStart = 46,
  CS_UM_VotePass = 47,
  CS_UM_VoteFailed = 48,
  CS_UM_VoteSetup = 49,
  CS_UM_ServerRankRevealAll = 50,
  CS_UM_SendLastKillerDamageToClient = 51,
  CS_UM_ServerRankUpdate = 52,
  CS_UM_ItemPickup = 53,
  CS_UM_ShowMenu = 54,
  CS_UM_BarTime = 55,
  CS_UM_AmmoDenied = 56,
  CS_UM_MarkAchievement = 57,
  CS_UM_MatchStatsUpdate = 58,
  CS_UM_ItemDrop = 59,
  CS_UM_GlowPropTurnOff = 60,
  CS_UM_SendPlayerItemDrops = 61,
  CS_UM_RoundBackupFilenames = 62,
  CS_UM_SendPlayerItemFound = 63,
  CS_UM_ReportHit = 64,
  CS_UM_XpUpdate = 65,
  CS_UM_QuestProgress = 66,
  CS_UM_ScoreLeaderboardData = 67,
  CS_UM_PlayerDecalDigitalSignature = 68,
  CS_UM_WeaponSound = 69,
  CS_UM_UpdateScreenHealthBar = 70,
  CS_UM_EntityOutlineHighlight = 71,
  CS_UM_SSUI = 72,
  CS_UM_SurvivalStats = 73,
  CS_UM_DisconnectToLobby2 = 74,
  CS_UM_EndOfMatchAllPlayersData = 75,
  CS_UM_RoundImpactScoreData = 79,
  CS_UM_CurrentRoundOdds = 80,
  CS_UM_DeepStats = 81,
  CS_UM_UtilMsg = 82
}

export enum ECSUsrMsgDisconnectToLobbyAction {
  k_ECSUsrMsg_DisconnectToLobby_Action_Default = 0,
  k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue = 1
}

export interface CCSUsrMsgVGUIMenu {
  name: string;
  show: boolean;
  subkeys: CCSUsrMsgVGUIMenu_Subkey[];
}

export interface CCSUsrMsgVGUIMenu_Subkey {
  name: string;
  str: string;
}

export interface CCSUsrMsgGeiger {
  range: number;
}

export interface CCSUsrMsgTrain {
  train: number;
}

export interface CCSUsrMsgHudText {
  text: string;
}

export interface CCSUsrMsgSayText {
  entIdx: number;
  text: string;
  chat: boolean;
  textallchat: boolean;
}

export interface CCSUsrMsgSayText2 {
  entIdx: number;
  chat: boolean;
  msgName: string;
  params: string[];
  textallchat: boolean;
}

export interface CCSUsrMsgTextMsg {
  msgDst: number;
  params: string[];
}

export interface CCSUsrMsgHudMsg {
  channel: number;
  pos: CMsgVector2D | undefined;
  clr1: CMsgRGBA | undefined;
  clr2: CMsgRGBA | undefined;
  effect: number;
  fadeInTime: number;
  fadeOutTime: number;
  holdTime: number;
  fxTime: number;
  text: string;
}

export interface CCSUsrMsgShake {
  command: number;
  localAmplitude: number;
  frequency: number;
  duration: number;
}

export interface CCSUsrMsgFade {
  duration: number;
  holdTime: number;
  flags: number;
  clr: CMsgRGBA | undefined;
}

export interface CCSUsrMsgRumble {
  index: number;
  data: number;
  flags: number;
}

export interface CCSUsrMsgCloseCaption {
  hash: number;
  duration: number;
  fromPlayer: boolean;
  cctoken: string;
}

export interface CCSUsrMsgCloseCaptionDirect {
  hash: number;
  duration: number;
  fromPlayer: boolean;
}

export interface CCSUsrMsgSendAudio {
  radioSound: string;
}

export interface CCSUsrMsgRawAudio {
  pitch: number;
  entidx: number;
  duration: number;
  voiceFilename: string;
}

export interface CCSUsrMsgVoiceMask {
  playerMasks: CCSUsrMsgVoiceMask_PlayerMask[];
  playerModEnable: boolean;
}

export interface CCSUsrMsgVoiceMask_PlayerMask {
  gameRulesMask: number;
  banMasks: number;
}

export interface CCSUsrMsgDamage {
  amount: number;
  inflictorWorldPos: CMsgVector | undefined;
  victimEntindex: number;
}

export interface CCSUsrMsgRadioText {
  msgDst: number;
  client: number;
  msgName: string;
  params: string[];
}

export interface CCSUsrMsgHintText {
  text: string;
}

export interface CCSUsrMsgKeyHintText {
  hints: string[];
}

export interface CCSUsrMsgProcessSpottedEntityUpdate {
  newUpdate: boolean;
  entityUpdates: CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate[];
}

export interface CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate {
  entityIdx: number;
  classId: number;
  originX: number;
  originY: number;
  originZ: number;
  angleY: number;
  defuser: boolean;
  playerHasDefuser: boolean;
  playerHasC4: boolean;
}

export interface CCSUsrMsgSendPlayerItemDrops {
  entityUpdates: CEconItemPreviewDataBlock[];
}

export interface CCSUsrMsgSendPlayerItemFound {
  iteminfo: CEconItemPreviewDataBlock | undefined;
  entindex: number;
}

export interface CCSUsrMsgReloadEffect {
  entidx: number;
  actanim: number;
  originX: number;
  originY: number;
  originZ: number;
}

export interface CCSUsrMsgWeaponSound {
  entidx: number;
  originX: number;
  originY: number;
  originZ: number;
  sound: string;
  timestamp: number;
}

export interface CCSUsrMsgUpdateScreenHealthBar {
  entidx: number;
  healthratioOld: number;
  healthratioNew: number;
  style: number;
}

export interface CCSUsrMsgEntityOutlineHighlight {
  entidx: number;
  removehighlight: boolean;
}

export interface CCSUsrMsgAdjustMoney {
  amount: number;
}

export interface CCSUsrMsgReportHit {
  posX: number;
  posY: number;
  timestamp: number;
  posZ: number;
}

export interface CCSUsrMsgKillCam {
  obsMode: number;
  firstTarget: number;
  secondTarget: number;
}

export interface CCSUsrMsgDesiredTimescale {
  desiredTimescale: number;
  durationRealtimeSec: number;
  interpolatorType: number;
  startBlendTime: number;
}

export interface CCSUsrMsgCurrentTimescale {
  curTimescale: number;
}

export interface CCSUsrMsgAchievementEvent {
  achievement: number;
  count: number;
  userId: number;
}

export interface CCSUsrMsgMatchEndConditions {
  fraglimit: number;
  mpMaxrounds: number;
  mpWinlimit: number;
  mpTimelimit: number;
}

export interface CCSUsrMsgPlayerStatsUpdate {
  version: number;
  stats: CCSUsrMsgPlayerStatsUpdate_Stat[];
  userId: number;
  crc: number;
}

export interface CCSUsrMsgPlayerStatsUpdate_Stat {
  idx: number;
  delta: number;
}

export interface CCSUsrMsgDisplayInventory {
  display: boolean;
  userId: number;
}

export interface CCSUsrMsgQuestProgress {
  questId: number;
  normalPoints: number;
  bonusPoints: number;
  isEventQuest: boolean;
}

export interface CCSUsrMsgScoreLeaderboardData {
  data: ScoreLeaderboardData | undefined;
}

export interface CCSUsrMsgPlayerDecalDigitalSignature {
  data: PlayerDecalDigitalSignature | undefined;
}

export interface CCSUsrMsgXRankGet {
  modeIdx: number;
  controller: number;
}

export interface CCSUsrMsgXRankUpd {
  modeIdx: number;
  controller: number;
  ranking: number;
}

export interface CCSUsrMsgCallVoteFailed {
  reason: number;
  time: number;
}

export interface CCSUsrMsgVoteStart {
  team: number;
  entIdx: number;
  voteType: number;
  dispStr: string;
  detailsStr: string;
  otherTeamStr: string;
  isYesNoVote: boolean;
  entidxTarget: number;
}

export interface CCSUsrMsgVotePass {
  team: number;
  voteType: number;
  dispStr: string;
  detailsStr: string;
}

export interface CCSUsrMsgVoteFailed {
  team: number;
  reason: number;
}

export interface CCSUsrMsgVoteSetup {
  potentialIssues: string[];
}

export interface CCSUsrMsgSendLastKillerDamageToClient {
  numHitsGiven: number;
  damageGiven: number;
  numHitsTaken: number;
  damageTaken: number;
}

export interface CCSUsrMsgServerRankUpdate {
  rankUpdate: CCSUsrMsgServerRankUpdate_RankUpdate[];
}

export interface CCSUsrMsgServerRankUpdate_RankUpdate {
  accountId: number;
  rankOld: number;
  rankNew: number;
  numWins: number;
  rankChange: number;
  rankTypeId: number;
}

export interface CCSUsrMsgXpUpdate {
  data: CMsgGCCstrike15V2GC2ServerNotifyXPRewarded | undefined;
}

export interface CCSUsrMsgItemPickup {
  item: string;
}

export interface CCSUsrMsgShowMenu {
  bitsValidSlots: number;
  displayTime: number;
  menuString: string;
}

export interface CCSUsrMsgBarTime {
  time: string;
}

export interface CCSUsrMsgAmmoDenied {
  ammoIdx: number;
}

export interface CCSUsrMsgMarkAchievement {
  achievement: string;
}

export interface CCSUsrMsgMatchStatsUpdate {
  update: string;
}

export interface CCSUsrMsgItemDrop {
  itemid: Long;
  death: boolean;
}

export interface CCSUsrMsgGlowPropTurnOff {
  entidx: number;
}

export interface CCSUsrMsgRoundBackupFilenames {
  count: number;
  index: number;
  filename: string;
  nicename: string;
}

export interface CCSUsrMsgSSUI {
  show: boolean;
  startTime: number;
  endTime: number;
}

export interface CCSUsrMsgSurvivalStats {
  xuid: Long;
  facts: CCSUsrMsgSurvivalStats_Fact[];
  users: CCSUsrMsgSurvivalStats_Placement[];
  damages: CCSUsrMsgSurvivalStats_Damage[];
  ticknumber: number;
}

export interface CCSUsrMsgSurvivalStats_Fact {
  type: number;
  display: number;
  value: number;
  interestingness: number;
}

export interface CCSUsrMsgSurvivalStats_Placement {
  xuid: Long;
  teamnumber: number;
  placement: number;
}

export interface CCSUsrMsgSurvivalStats_Damage {
  xuid: Long;
  to: number;
  toHits: number;
  from: number;
  fromHits: number;
}

export interface CCSUsrMsgEndOfMatchAllPlayersData {
  allplayerdata: CCSUsrMsgEndOfMatchAllPlayersData_PlayerData[];
  scene: number;
}

export interface CCSUsrMsgEndOfMatchAllPlayersData_Accolade {
  eaccolade: number;
  value: number;
  position: number;
}

export interface CCSUsrMsgEndOfMatchAllPlayersData_PlayerData {
  entindex: number;
  xuid: Long;
  name: string;
  teamnumber: number;
  nomination: CCSUsrMsgEndOfMatchAllPlayersData_Accolade | undefined;
  items: CEconItemPreviewDataBlock[];
  playercolor: number;
  isbot: boolean;
}

export interface CCSUsrMsgRoundImpactScoreData {
  initConditions: CCSUsrMsgRoundImpactScoreData_InitialConditions | undefined;
  allRisEventData: CCSUsrMsgRoundImpactScoreData_RisEvent[];
}

export interface CCSUsrMsgRoundImpactScoreData_RisEvent {
  timestamp: number;
  terroristOdds: number;
  ctAlive: number;
  tAlive: number;
  victimData: CCSUsrMsgRoundImpactScoreData_RisEvent_Victim | undefined;
  objectiveData: CCSUsrMsgRoundImpactScoreData_RisEvent_Objective | undefined;
  allDamageData: CCSUsrMsgRoundImpactScoreData_RisEvent_Damage[];
}

export interface CCSUsrMsgRoundImpactScoreData_RisEvent_Victim {
  teamNumber: number;
  entindex: number;
  xuid: Long;
  color: number;
  isBot: boolean;
  isDead: boolean;
}

export interface CCSUsrMsgRoundImpactScoreData_RisEvent_Objective {
  type: number;
}

export interface CCSUsrMsgRoundImpactScoreData_RisEvent_Damage {
  targetEntindex: number;
  targetXuid: Long;
  healthRemoved: number;
  numHits: number;
  returnHealthRemoved: number;
  numReturnHits: number;
}

export interface CCSUsrMsgRoundImpactScoreData_InitialConditions {
  ctEquipValue: number;
  tEquipValue: number;
  terroristOdds: number;
}

export interface CCSUsrMsgCurrentRoundOdds {
  odds: number;
}

export interface CCSUsrMsgDeepStats {
  stats: CMsgGCCStrike15ClientDeepStats | undefined;
}

export interface CCSUsrMsgResetHud {
  reset: boolean;
}

export interface CCSUsrMsgGameTitle {
  dummy: number;
}

export interface CCSUsrMsgRequestState {
  dummy: number;
}

export interface CCSUsrMsgStopSpectatorMode {
  dummy: number;
}

export interface CCSUsrMsgDisconnectToLobby {
  dummy: number;
}

export interface CCSUsrMsgWarmupHasEnded {
  dummy: number;
}

export interface CCSUsrMsgClientInfo {
  dummy: number;
}

export interface CCSUsrMsgServerRankRevealAll {
  secondsTillShutdown: number;
  reservation: CMsgGCCStrike15V2MatchmakingGC2ServerReserve | undefined;
}

export interface CCSUsrMsgUtilMsg {
  utilAction: string;
  util1: number;
  util2: number;
  util3: number;
  util4: number;
  util5: number;
}

function createBaseCCSUsrMsgVGUIMenu(): CCSUsrMsgVGUIMenu {
  return { name: "", show: false, subkeys: [] };
}

export const CCSUsrMsgVGUIMenu = {
  encode(message: CCSUsrMsgVGUIMenu, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.show === true) {
      writer.uint32(16).bool(message.show);
    }
    for (const v of message.subkeys) {
      CCSUsrMsgVGUIMenu_Subkey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgVGUIMenu {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVGUIMenu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.show = reader.bool();
          break;
        case 3:
          message.subkeys.push(
            CCSUsrMsgVGUIMenu_Subkey.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVGUIMenu>, I>>(
    object: I
  ): CCSUsrMsgVGUIMenu {
    const message = createBaseCCSUsrMsgVGUIMenu();
    message.name = object.name ?? "";
    message.show = object.show ?? false;
    message.subkeys =
      object.subkeys?.map(e => CCSUsrMsgVGUIMenu_Subkey.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCCSUsrMsgVGUIMenu_Subkey(): CCSUsrMsgVGUIMenu_Subkey {
  return { name: "", str: "" };
}

export const CCSUsrMsgVGUIMenu_Subkey = {
  encode(
    message: CCSUsrMsgVGUIMenu_Subkey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.str !== "") {
      writer.uint32(18).string(message.str);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgVGUIMenu_Subkey {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVGUIMenu_Subkey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.str = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVGUIMenu_Subkey>, I>>(
    object: I
  ): CCSUsrMsgVGUIMenu_Subkey {
    const message = createBaseCCSUsrMsgVGUIMenu_Subkey();
    message.name = object.name ?? "";
    message.str = object.str ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgGeiger(): CCSUsrMsgGeiger {
  return { range: 0 };
}

export const CCSUsrMsgGeiger = {
  encode(message: CCSUsrMsgGeiger, writer: Writer = Writer.create()): Writer {
    if (message.range !== 0) {
      writer.uint32(8).int32(message.range);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgGeiger {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgGeiger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.range = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgGeiger>, I>>(
    object: I
  ): CCSUsrMsgGeiger {
    const message = createBaseCCSUsrMsgGeiger();
    message.range = object.range ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgTrain(): CCSUsrMsgTrain {
  return { train: 0 };
}

export const CCSUsrMsgTrain = {
  encode(message: CCSUsrMsgTrain, writer: Writer = Writer.create()): Writer {
    if (message.train !== 0) {
      writer.uint32(8).int32(message.train);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgTrain {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgTrain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.train = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgTrain>, I>>(
    object: I
  ): CCSUsrMsgTrain {
    const message = createBaseCCSUsrMsgTrain();
    message.train = object.train ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgHudText(): CCSUsrMsgHudText {
  return { text: "" };
}

export const CCSUsrMsgHudText = {
  encode(message: CCSUsrMsgHudText, writer: Writer = Writer.create()): Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgHudText {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgHudText();
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

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgHudText>, I>>(
    object: I
  ): CCSUsrMsgHudText {
    const message = createBaseCCSUsrMsgHudText();
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgSayText(): CCSUsrMsgSayText {
  return { entIdx: 0, text: "", chat: false, textallchat: false };
}

export const CCSUsrMsgSayText = {
  encode(message: CCSUsrMsgSayText, writer: Writer = Writer.create()): Writer {
    if (message.entIdx !== 0) {
      writer.uint32(8).int32(message.entIdx);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.chat === true) {
      writer.uint32(24).bool(message.chat);
    }
    if (message.textallchat === true) {
      writer.uint32(32).bool(message.textallchat);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgSayText {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSayText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entIdx = reader.int32();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.chat = reader.bool();
          break;
        case 4:
          message.textallchat = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSayText>, I>>(
    object: I
  ): CCSUsrMsgSayText {
    const message = createBaseCCSUsrMsgSayText();
    message.entIdx = object.entIdx ?? 0;
    message.text = object.text ?? "";
    message.chat = object.chat ?? false;
    message.textallchat = object.textallchat ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgSayText2(): CCSUsrMsgSayText2 {
  return {
    entIdx: 0,
    chat: false,
    msgName: "",
    params: [],
    textallchat: false
  };
}

export const CCSUsrMsgSayText2 = {
  encode(message: CCSUsrMsgSayText2, writer: Writer = Writer.create()): Writer {
    if (message.entIdx !== 0) {
      writer.uint32(8).int32(message.entIdx);
    }
    if (message.chat === true) {
      writer.uint32(16).bool(message.chat);
    }
    if (message.msgName !== "") {
      writer.uint32(26).string(message.msgName);
    }
    for (const v of message.params) {
      writer.uint32(34).string(v!);
    }
    if (message.textallchat === true) {
      writer.uint32(40).bool(message.textallchat);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgSayText2 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSayText2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entIdx = reader.int32();
          break;
        case 2:
          message.chat = reader.bool();
          break;
        case 3:
          message.msgName = reader.string();
          break;
        case 4:
          message.params.push(reader.string());
          break;
        case 5:
          message.textallchat = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSayText2>, I>>(
    object: I
  ): CCSUsrMsgSayText2 {
    const message = createBaseCCSUsrMsgSayText2();
    message.entIdx = object.entIdx ?? 0;
    message.chat = object.chat ?? false;
    message.msgName = object.msgName ?? "";
    message.params = object.params?.map(e => e) || [];
    message.textallchat = object.textallchat ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgTextMsg(): CCSUsrMsgTextMsg {
  return { msgDst: 0, params: [] };
}

export const CCSUsrMsgTextMsg = {
  encode(message: CCSUsrMsgTextMsg, writer: Writer = Writer.create()): Writer {
    if (message.msgDst !== 0) {
      writer.uint32(8).int32(message.msgDst);
    }
    for (const v of message.params) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgTextMsg {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgTextMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgDst = reader.int32();
          break;
        case 3:
          message.params.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgTextMsg>, I>>(
    object: I
  ): CCSUsrMsgTextMsg {
    const message = createBaseCCSUsrMsgTextMsg();
    message.msgDst = object.msgDst ?? 0;
    message.params = object.params?.map(e => e) || [];
    return message;
  }
};

function createBaseCCSUsrMsgHudMsg(): CCSUsrMsgHudMsg {
  return {
    channel: 0,
    pos: undefined,
    clr1: undefined,
    clr2: undefined,
    effect: 0,
    fadeInTime: 0,
    fadeOutTime: 0,
    holdTime: 0,
    fxTime: 0,
    text: ""
  };
}

export const CCSUsrMsgHudMsg = {
  encode(message: CCSUsrMsgHudMsg, writer: Writer = Writer.create()): Writer {
    if (message.channel !== 0) {
      writer.uint32(8).int32(message.channel);
    }
    if (message.pos !== undefined) {
      CMsgVector2D.encode(message.pos, writer.uint32(18).fork()).ldelim();
    }
    if (message.clr1 !== undefined) {
      CMsgRGBA.encode(message.clr1, writer.uint32(26).fork()).ldelim();
    }
    if (message.clr2 !== undefined) {
      CMsgRGBA.encode(message.clr2, writer.uint32(34).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(40).int32(message.effect);
    }
    if (message.fadeInTime !== 0) {
      writer.uint32(53).float(message.fadeInTime);
    }
    if (message.fadeOutTime !== 0) {
      writer.uint32(61).float(message.fadeOutTime);
    }
    if (message.holdTime !== 0) {
      writer.uint32(77).float(message.holdTime);
    }
    if (message.fxTime !== 0) {
      writer.uint32(85).float(message.fxTime);
    }
    if (message.text !== "") {
      writer.uint32(90).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgHudMsg {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgHudMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.int32();
          break;
        case 2:
          message.pos = CMsgVector2D.decode(reader, reader.uint32());
          break;
        case 3:
          message.clr1 = CMsgRGBA.decode(reader, reader.uint32());
          break;
        case 4:
          message.clr2 = CMsgRGBA.decode(reader, reader.uint32());
          break;
        case 5:
          message.effect = reader.int32();
          break;
        case 6:
          message.fadeInTime = reader.float();
          break;
        case 7:
          message.fadeOutTime = reader.float();
          break;
        case 9:
          message.holdTime = reader.float();
          break;
        case 10:
          message.fxTime = reader.float();
          break;
        case 11:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgHudMsg>, I>>(
    object: I
  ): CCSUsrMsgHudMsg {
    const message = createBaseCCSUsrMsgHudMsg();
    message.channel = object.channel ?? 0;
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? CMsgVector2D.fromPartial(object.pos)
        : undefined;
    message.clr1 =
      object.clr1 !== undefined && object.clr1 !== null
        ? CMsgRGBA.fromPartial(object.clr1)
        : undefined;
    message.clr2 =
      object.clr2 !== undefined && object.clr2 !== null
        ? CMsgRGBA.fromPartial(object.clr2)
        : undefined;
    message.effect = object.effect ?? 0;
    message.fadeInTime = object.fadeInTime ?? 0;
    message.fadeOutTime = object.fadeOutTime ?? 0;
    message.holdTime = object.holdTime ?? 0;
    message.fxTime = object.fxTime ?? 0;
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgShake(): CCSUsrMsgShake {
  return { command: 0, localAmplitude: 0, frequency: 0, duration: 0 };
}

export const CCSUsrMsgShake = {
  encode(message: CCSUsrMsgShake, writer: Writer = Writer.create()): Writer {
    if (message.command !== 0) {
      writer.uint32(8).int32(message.command);
    }
    if (message.localAmplitude !== 0) {
      writer.uint32(21).float(message.localAmplitude);
    }
    if (message.frequency !== 0) {
      writer.uint32(29).float(message.frequency);
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgShake {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgShake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.command = reader.int32();
          break;
        case 2:
          message.localAmplitude = reader.float();
          break;
        case 3:
          message.frequency = reader.float();
          break;
        case 4:
          message.duration = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgShake>, I>>(
    object: I
  ): CCSUsrMsgShake {
    const message = createBaseCCSUsrMsgShake();
    message.command = object.command ?? 0;
    message.localAmplitude = object.localAmplitude ?? 0;
    message.frequency = object.frequency ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgFade(): CCSUsrMsgFade {
  return { duration: 0, holdTime: 0, flags: 0, clr: undefined };
}

export const CCSUsrMsgFade = {
  encode(message: CCSUsrMsgFade, writer: Writer = Writer.create()): Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.holdTime !== 0) {
      writer.uint32(16).int32(message.holdTime);
    }
    if (message.flags !== 0) {
      writer.uint32(24).int32(message.flags);
    }
    if (message.clr !== undefined) {
      CMsgRGBA.encode(message.clr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgFade {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgFade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32();
          break;
        case 2:
          message.holdTime = reader.int32();
          break;
        case 3:
          message.flags = reader.int32();
          break;
        case 4:
          message.clr = CMsgRGBA.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgFade>, I>>(
    object: I
  ): CCSUsrMsgFade {
    const message = createBaseCCSUsrMsgFade();
    message.duration = object.duration ?? 0;
    message.holdTime = object.holdTime ?? 0;
    message.flags = object.flags ?? 0;
    message.clr =
      object.clr !== undefined && object.clr !== null
        ? CMsgRGBA.fromPartial(object.clr)
        : undefined;
    return message;
  }
};

function createBaseCCSUsrMsgRumble(): CCSUsrMsgRumble {
  return { index: 0, data: 0, flags: 0 };
}

export const CCSUsrMsgRumble = {
  encode(message: CCSUsrMsgRumble, writer: Writer = Writer.create()): Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.data !== 0) {
      writer.uint32(16).int32(message.data);
    }
    if (message.flags !== 0) {
      writer.uint32(24).int32(message.flags);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgRumble {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRumble();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int32();
          break;
        case 2:
          message.data = reader.int32();
          break;
        case 3:
          message.flags = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgRumble>, I>>(
    object: I
  ): CCSUsrMsgRumble {
    const message = createBaseCCSUsrMsgRumble();
    message.index = object.index ?? 0;
    message.data = object.data ?? 0;
    message.flags = object.flags ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgCloseCaption(): CCSUsrMsgCloseCaption {
  return { hash: 0, duration: 0, fromPlayer: false, cctoken: "" };
}

export const CCSUsrMsgCloseCaption = {
  encode(
    message: CCSUsrMsgCloseCaption,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== 0) {
      writer.uint32(8).uint32(message.hash);
    }
    if (message.duration !== 0) {
      writer.uint32(16).int32(message.duration);
    }
    if (message.fromPlayer === true) {
      writer.uint32(24).bool(message.fromPlayer);
    }
    if (message.cctoken !== "") {
      writer.uint32(34).string(message.cctoken);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgCloseCaption {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgCloseCaption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.uint32();
          break;
        case 2:
          message.duration = reader.int32();
          break;
        case 3:
          message.fromPlayer = reader.bool();
          break;
        case 4:
          message.cctoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgCloseCaption>, I>>(
    object: I
  ): CCSUsrMsgCloseCaption {
    const message = createBaseCCSUsrMsgCloseCaption();
    message.hash = object.hash ?? 0;
    message.duration = object.duration ?? 0;
    message.fromPlayer = object.fromPlayer ?? false;
    message.cctoken = object.cctoken ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgCloseCaptionDirect(): CCSUsrMsgCloseCaptionDirect {
  return { hash: 0, duration: 0, fromPlayer: false };
}

export const CCSUsrMsgCloseCaptionDirect = {
  encode(
    message: CCSUsrMsgCloseCaptionDirect,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== 0) {
      writer.uint32(8).uint32(message.hash);
    }
    if (message.duration !== 0) {
      writer.uint32(16).int32(message.duration);
    }
    if (message.fromPlayer === true) {
      writer.uint32(24).bool(message.fromPlayer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgCloseCaptionDirect {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgCloseCaptionDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.uint32();
          break;
        case 2:
          message.duration = reader.int32();
          break;
        case 3:
          message.fromPlayer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgCloseCaptionDirect>, I>>(
    object: I
  ): CCSUsrMsgCloseCaptionDirect {
    const message = createBaseCCSUsrMsgCloseCaptionDirect();
    message.hash = object.hash ?? 0;
    message.duration = object.duration ?? 0;
    message.fromPlayer = object.fromPlayer ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgSendAudio(): CCSUsrMsgSendAudio {
  return { radioSound: "" };
}

export const CCSUsrMsgSendAudio = {
  encode(
    message: CCSUsrMsgSendAudio,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.radioSound !== "") {
      writer.uint32(10).string(message.radioSound);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgSendAudio {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSendAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.radioSound = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSendAudio>, I>>(
    object: I
  ): CCSUsrMsgSendAudio {
    const message = createBaseCCSUsrMsgSendAudio();
    message.radioSound = object.radioSound ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgRawAudio(): CCSUsrMsgRawAudio {
  return { pitch: 0, entidx: 0, duration: 0, voiceFilename: "" };
}

export const CCSUsrMsgRawAudio = {
  encode(message: CCSUsrMsgRawAudio, writer: Writer = Writer.create()): Writer {
    if (message.pitch !== 0) {
      writer.uint32(8).int32(message.pitch);
    }
    if (message.entidx !== 0) {
      writer.uint32(16).int32(message.entidx);
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    if (message.voiceFilename !== "") {
      writer.uint32(34).string(message.voiceFilename);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgRawAudio {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRawAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pitch = reader.int32();
          break;
        case 2:
          message.entidx = reader.int32();
          break;
        case 3:
          message.duration = reader.float();
          break;
        case 4:
          message.voiceFilename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgRawAudio>, I>>(
    object: I
  ): CCSUsrMsgRawAudio {
    const message = createBaseCCSUsrMsgRawAudio();
    message.pitch = object.pitch ?? 0;
    message.entidx = object.entidx ?? 0;
    message.duration = object.duration ?? 0;
    message.voiceFilename = object.voiceFilename ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgVoiceMask(): CCSUsrMsgVoiceMask {
  return { playerMasks: [], playerModEnable: false };
}

export const CCSUsrMsgVoiceMask = {
  encode(
    message: CCSUsrMsgVoiceMask,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.playerMasks) {
      CCSUsrMsgVoiceMask_PlayerMask.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.playerModEnable === true) {
      writer.uint32(16).bool(message.playerModEnable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgVoiceMask {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVoiceMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerMasks.push(
            CCSUsrMsgVoiceMask_PlayerMask.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.playerModEnable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVoiceMask>, I>>(
    object: I
  ): CCSUsrMsgVoiceMask {
    const message = createBaseCCSUsrMsgVoiceMask();
    message.playerMasks =
      object.playerMasks?.map(e =>
        CCSUsrMsgVoiceMask_PlayerMask.fromPartial(e)
      ) || [];
    message.playerModEnable = object.playerModEnable ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgVoiceMask_PlayerMask(): CCSUsrMsgVoiceMask_PlayerMask {
  return { gameRulesMask: 0, banMasks: 0 };
}

export const CCSUsrMsgVoiceMask_PlayerMask = {
  encode(
    message: CCSUsrMsgVoiceMask_PlayerMask,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameRulesMask !== 0) {
      writer.uint32(8).int32(message.gameRulesMask);
    }
    if (message.banMasks !== 0) {
      writer.uint32(16).int32(message.banMasks);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgVoiceMask_PlayerMask {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVoiceMask_PlayerMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameRulesMask = reader.int32();
          break;
        case 2:
          message.banMasks = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVoiceMask_PlayerMask>, I>>(
    object: I
  ): CCSUsrMsgVoiceMask_PlayerMask {
    const message = createBaseCCSUsrMsgVoiceMask_PlayerMask();
    message.gameRulesMask = object.gameRulesMask ?? 0;
    message.banMasks = object.banMasks ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgDamage(): CCSUsrMsgDamage {
  return { amount: 0, inflictorWorldPos: undefined, victimEntindex: 0 };
}

export const CCSUsrMsgDamage = {
  encode(message: CCSUsrMsgDamage, writer: Writer = Writer.create()): Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int32(message.amount);
    }
    if (message.inflictorWorldPos !== undefined) {
      CMsgVector.encode(
        message.inflictorWorldPos,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.victimEntindex !== 0) {
      writer.uint32(24).int32(message.victimEntindex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgDamage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgDamage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.int32();
          break;
        case 2:
          message.inflictorWorldPos = CMsgVector.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.victimEntindex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgDamage>, I>>(
    object: I
  ): CCSUsrMsgDamage {
    const message = createBaseCCSUsrMsgDamage();
    message.amount = object.amount ?? 0;
    message.inflictorWorldPos =
      object.inflictorWorldPos !== undefined &&
      object.inflictorWorldPos !== null
        ? CMsgVector.fromPartial(object.inflictorWorldPos)
        : undefined;
    message.victimEntindex = object.victimEntindex ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgRadioText(): CCSUsrMsgRadioText {
  return { msgDst: 0, client: 0, msgName: "", params: [] };
}

export const CCSUsrMsgRadioText = {
  encode(
    message: CCSUsrMsgRadioText,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.msgDst !== 0) {
      writer.uint32(8).int32(message.msgDst);
    }
    if (message.client !== 0) {
      writer.uint32(16).int32(message.client);
    }
    if (message.msgName !== "") {
      writer.uint32(26).string(message.msgName);
    }
    for (const v of message.params) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgRadioText {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRadioText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgDst = reader.int32();
          break;
        case 2:
          message.client = reader.int32();
          break;
        case 3:
          message.msgName = reader.string();
          break;
        case 4:
          message.params.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgRadioText>, I>>(
    object: I
  ): CCSUsrMsgRadioText {
    const message = createBaseCCSUsrMsgRadioText();
    message.msgDst = object.msgDst ?? 0;
    message.client = object.client ?? 0;
    message.msgName = object.msgName ?? "";
    message.params = object.params?.map(e => e) || [];
    return message;
  }
};

function createBaseCCSUsrMsgHintText(): CCSUsrMsgHintText {
  return { text: "" };
}

export const CCSUsrMsgHintText = {
  encode(message: CCSUsrMsgHintText, writer: Writer = Writer.create()): Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgHintText {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgHintText();
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

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgHintText>, I>>(
    object: I
  ): CCSUsrMsgHintText {
    const message = createBaseCCSUsrMsgHintText();
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgKeyHintText(): CCSUsrMsgKeyHintText {
  return { hints: [] };
}

export const CCSUsrMsgKeyHintText = {
  encode(
    message: CCSUsrMsgKeyHintText,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.hints) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgKeyHintText {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgKeyHintText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hints.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgKeyHintText>, I>>(
    object: I
  ): CCSUsrMsgKeyHintText {
    const message = createBaseCCSUsrMsgKeyHintText();
    message.hints = object.hints?.map(e => e) || [];
    return message;
  }
};

function createBaseCCSUsrMsgProcessSpottedEntityUpdate(): CCSUsrMsgProcessSpottedEntityUpdate {
  return { newUpdate: false, entityUpdates: [] };
}

export const CCSUsrMsgProcessSpottedEntityUpdate = {
  encode(
    message: CCSUsrMsgProcessSpottedEntityUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.newUpdate === true) {
      writer.uint32(8).bool(message.newUpdate);
    }
    for (const v of message.entityUpdates) {
      CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgProcessSpottedEntityUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgProcessSpottedEntityUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newUpdate = reader.bool();
          break;
        case 2:
          message.entityUpdates.push(
            CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.decode(
              reader,
              reader.uint32()
            )
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
    I extends Exact<DeepPartial<CCSUsrMsgProcessSpottedEntityUpdate>, I>
  >(object: I): CCSUsrMsgProcessSpottedEntityUpdate {
    const message = createBaseCCSUsrMsgProcessSpottedEntityUpdate();
    message.newUpdate = object.newUpdate ?? false;
    message.entityUpdates =
      object.entityUpdates?.map(e =>
        CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate(): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate {
  return {
    entityIdx: 0,
    classId: 0,
    originX: 0,
    originY: 0,
    originZ: 0,
    angleY: 0,
    defuser: false,
    playerHasDefuser: false,
    playerHasC4: false
  };
}

export const CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = {
  encode(
    message: CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entityIdx !== 0) {
      writer.uint32(8).int32(message.entityIdx);
    }
    if (message.classId !== 0) {
      writer.uint32(16).int32(message.classId);
    }
    if (message.originX !== 0) {
      writer.uint32(24).int32(message.originX);
    }
    if (message.originY !== 0) {
      writer.uint32(32).int32(message.originY);
    }
    if (message.originZ !== 0) {
      writer.uint32(40).int32(message.originZ);
    }
    if (message.angleY !== 0) {
      writer.uint32(48).int32(message.angleY);
    }
    if (message.defuser === true) {
      writer.uint32(56).bool(message.defuser);
    }
    if (message.playerHasDefuser === true) {
      writer.uint32(64).bool(message.playerHasDefuser);
    }
    if (message.playerHasC4 === true) {
      writer.uint32(72).bool(message.playerHasC4);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityIdx = reader.int32();
          break;
        case 2:
          message.classId = reader.int32();
          break;
        case 3:
          message.originX = reader.int32();
          break;
        case 4:
          message.originY = reader.int32();
          break;
        case 5:
          message.originZ = reader.int32();
          break;
        case 6:
          message.angleY = reader.int32();
          break;
        case 7:
          message.defuser = reader.bool();
          break;
        case 8:
          message.playerHasDefuser = reader.bool();
          break;
        case 9:
          message.playerHasC4 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate>,
      I
    >
  >(object: I): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate {
    const message =
      createBaseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate();
    message.entityIdx = object.entityIdx ?? 0;
    message.classId = object.classId ?? 0;
    message.originX = object.originX ?? 0;
    message.originY = object.originY ?? 0;
    message.originZ = object.originZ ?? 0;
    message.angleY = object.angleY ?? 0;
    message.defuser = object.defuser ?? false;
    message.playerHasDefuser = object.playerHasDefuser ?? false;
    message.playerHasC4 = object.playerHasC4 ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgSendPlayerItemDrops(): CCSUsrMsgSendPlayerItemDrops {
  return { entityUpdates: [] };
}

export const CCSUsrMsgSendPlayerItemDrops = {
  encode(
    message: CCSUsrMsgSendPlayerItemDrops,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entityUpdates) {
      CEconItemPreviewDataBlock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgSendPlayerItemDrops {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSendPlayerItemDrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityUpdates.push(
            CEconItemPreviewDataBlock.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSendPlayerItemDrops>, I>>(
    object: I
  ): CCSUsrMsgSendPlayerItemDrops {
    const message = createBaseCCSUsrMsgSendPlayerItemDrops();
    message.entityUpdates =
      object.entityUpdates?.map(e =>
        CEconItemPreviewDataBlock.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCCSUsrMsgSendPlayerItemFound(): CCSUsrMsgSendPlayerItemFound {
  return { iteminfo: undefined, entindex: 0 };
}

export const CCSUsrMsgSendPlayerItemFound = {
  encode(
    message: CCSUsrMsgSendPlayerItemFound,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.entindex !== 0) {
      writer.uint32(16).int32(message.entindex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgSendPlayerItemFound {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSendPlayerItemFound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iteminfo = CEconItemPreviewDataBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.entindex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSendPlayerItemFound>, I>>(
    object: I
  ): CCSUsrMsgSendPlayerItemFound {
    const message = createBaseCCSUsrMsgSendPlayerItemFound();
    message.iteminfo =
      object.iteminfo !== undefined && object.iteminfo !== null
        ? CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
        : undefined;
    message.entindex = object.entindex ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgReloadEffect(): CCSUsrMsgReloadEffect {
  return { entidx: 0, actanim: 0, originX: 0, originY: 0, originZ: 0 };
}

export const CCSUsrMsgReloadEffect = {
  encode(
    message: CCSUsrMsgReloadEffect,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entidx !== 0) {
      writer.uint32(8).int32(message.entidx);
    }
    if (message.actanim !== 0) {
      writer.uint32(16).int32(message.actanim);
    }
    if (message.originX !== 0) {
      writer.uint32(29).float(message.originX);
    }
    if (message.originY !== 0) {
      writer.uint32(37).float(message.originY);
    }
    if (message.originZ !== 0) {
      writer.uint32(45).float(message.originZ);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgReloadEffect {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgReloadEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entidx = reader.int32();
          break;
        case 2:
          message.actanim = reader.int32();
          break;
        case 3:
          message.originX = reader.float();
          break;
        case 4:
          message.originY = reader.float();
          break;
        case 5:
          message.originZ = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgReloadEffect>, I>>(
    object: I
  ): CCSUsrMsgReloadEffect {
    const message = createBaseCCSUsrMsgReloadEffect();
    message.entidx = object.entidx ?? 0;
    message.actanim = object.actanim ?? 0;
    message.originX = object.originX ?? 0;
    message.originY = object.originY ?? 0;
    message.originZ = object.originZ ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgWeaponSound(): CCSUsrMsgWeaponSound {
  return {
    entidx: 0,
    originX: 0,
    originY: 0,
    originZ: 0,
    sound: "",
    timestamp: 0
  };
}

export const CCSUsrMsgWeaponSound = {
  encode(
    message: CCSUsrMsgWeaponSound,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entidx !== 0) {
      writer.uint32(8).int32(message.entidx);
    }
    if (message.originX !== 0) {
      writer.uint32(21).float(message.originX);
    }
    if (message.originY !== 0) {
      writer.uint32(29).float(message.originY);
    }
    if (message.originZ !== 0) {
      writer.uint32(37).float(message.originZ);
    }
    if (message.sound !== "") {
      writer.uint32(42).string(message.sound);
    }
    if (message.timestamp !== 0) {
      writer.uint32(53).float(message.timestamp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgWeaponSound {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgWeaponSound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entidx = reader.int32();
          break;
        case 2:
          message.originX = reader.float();
          break;
        case 3:
          message.originY = reader.float();
          break;
        case 4:
          message.originZ = reader.float();
          break;
        case 5:
          message.sound = reader.string();
          break;
        case 6:
          message.timestamp = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgWeaponSound>, I>>(
    object: I
  ): CCSUsrMsgWeaponSound {
    const message = createBaseCCSUsrMsgWeaponSound();
    message.entidx = object.entidx ?? 0;
    message.originX = object.originX ?? 0;
    message.originY = object.originY ?? 0;
    message.originZ = object.originZ ?? 0;
    message.sound = object.sound ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgUpdateScreenHealthBar(): CCSUsrMsgUpdateScreenHealthBar {
  return { entidx: 0, healthratioOld: 0, healthratioNew: 0, style: 0 };
}

export const CCSUsrMsgUpdateScreenHealthBar = {
  encode(
    message: CCSUsrMsgUpdateScreenHealthBar,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entidx !== 0) {
      writer.uint32(8).int32(message.entidx);
    }
    if (message.healthratioOld !== 0) {
      writer.uint32(21).float(message.healthratioOld);
    }
    if (message.healthratioNew !== 0) {
      writer.uint32(29).float(message.healthratioNew);
    }
    if (message.style !== 0) {
      writer.uint32(32).int32(message.style);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgUpdateScreenHealthBar {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgUpdateScreenHealthBar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entidx = reader.int32();
          break;
        case 2:
          message.healthratioOld = reader.float();
          break;
        case 3:
          message.healthratioNew = reader.float();
          break;
        case 4:
          message.style = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgUpdateScreenHealthBar>, I>>(
    object: I
  ): CCSUsrMsgUpdateScreenHealthBar {
    const message = createBaseCCSUsrMsgUpdateScreenHealthBar();
    message.entidx = object.entidx ?? 0;
    message.healthratioOld = object.healthratioOld ?? 0;
    message.healthratioNew = object.healthratioNew ?? 0;
    message.style = object.style ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgEntityOutlineHighlight(): CCSUsrMsgEntityOutlineHighlight {
  return { entidx: 0, removehighlight: false };
}

export const CCSUsrMsgEntityOutlineHighlight = {
  encode(
    message: CCSUsrMsgEntityOutlineHighlight,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entidx !== 0) {
      writer.uint32(8).int32(message.entidx);
    }
    if (message.removehighlight === true) {
      writer.uint32(16).bool(message.removehighlight);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgEntityOutlineHighlight {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgEntityOutlineHighlight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entidx = reader.int32();
          break;
        case 2:
          message.removehighlight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgEntityOutlineHighlight>, I>>(
    object: I
  ): CCSUsrMsgEntityOutlineHighlight {
    const message = createBaseCCSUsrMsgEntityOutlineHighlight();
    message.entidx = object.entidx ?? 0;
    message.removehighlight = object.removehighlight ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgAdjustMoney(): CCSUsrMsgAdjustMoney {
  return { amount: 0 };
}

export const CCSUsrMsgAdjustMoney = {
  encode(
    message: CCSUsrMsgAdjustMoney,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgAdjustMoney {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgAdjustMoney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgAdjustMoney>, I>>(
    object: I
  ): CCSUsrMsgAdjustMoney {
    const message = createBaseCCSUsrMsgAdjustMoney();
    message.amount = object.amount ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgReportHit(): CCSUsrMsgReportHit {
  return { posX: 0, posY: 0, timestamp: 0, posZ: 0 };
}

export const CCSUsrMsgReportHit = {
  encode(
    message: CCSUsrMsgReportHit,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.posX !== 0) {
      writer.uint32(13).float(message.posX);
    }
    if (message.posY !== 0) {
      writer.uint32(21).float(message.posY);
    }
    if (message.timestamp !== 0) {
      writer.uint32(37).float(message.timestamp);
    }
    if (message.posZ !== 0) {
      writer.uint32(29).float(message.posZ);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgReportHit {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgReportHit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posX = reader.float();
          break;
        case 2:
          message.posY = reader.float();
          break;
        case 4:
          message.timestamp = reader.float();
          break;
        case 3:
          message.posZ = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgReportHit>, I>>(
    object: I
  ): CCSUsrMsgReportHit {
    const message = createBaseCCSUsrMsgReportHit();
    message.posX = object.posX ?? 0;
    message.posY = object.posY ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.posZ = object.posZ ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgKillCam(): CCSUsrMsgKillCam {
  return { obsMode: 0, firstTarget: 0, secondTarget: 0 };
}

export const CCSUsrMsgKillCam = {
  encode(message: CCSUsrMsgKillCam, writer: Writer = Writer.create()): Writer {
    if (message.obsMode !== 0) {
      writer.uint32(8).int32(message.obsMode);
    }
    if (message.firstTarget !== 0) {
      writer.uint32(16).int32(message.firstTarget);
    }
    if (message.secondTarget !== 0) {
      writer.uint32(24).int32(message.secondTarget);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgKillCam {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgKillCam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.obsMode = reader.int32();
          break;
        case 2:
          message.firstTarget = reader.int32();
          break;
        case 3:
          message.secondTarget = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgKillCam>, I>>(
    object: I
  ): CCSUsrMsgKillCam {
    const message = createBaseCCSUsrMsgKillCam();
    message.obsMode = object.obsMode ?? 0;
    message.firstTarget = object.firstTarget ?? 0;
    message.secondTarget = object.secondTarget ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgDesiredTimescale(): CCSUsrMsgDesiredTimescale {
  return {
    desiredTimescale: 0,
    durationRealtimeSec: 0,
    interpolatorType: 0,
    startBlendTime: 0
  };
}

export const CCSUsrMsgDesiredTimescale = {
  encode(
    message: CCSUsrMsgDesiredTimescale,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.desiredTimescale !== 0) {
      writer.uint32(13).float(message.desiredTimescale);
    }
    if (message.durationRealtimeSec !== 0) {
      writer.uint32(21).float(message.durationRealtimeSec);
    }
    if (message.interpolatorType !== 0) {
      writer.uint32(24).int32(message.interpolatorType);
    }
    if (message.startBlendTime !== 0) {
      writer.uint32(37).float(message.startBlendTime);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgDesiredTimescale {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgDesiredTimescale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.desiredTimescale = reader.float();
          break;
        case 2:
          message.durationRealtimeSec = reader.float();
          break;
        case 3:
          message.interpolatorType = reader.int32();
          break;
        case 4:
          message.startBlendTime = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgDesiredTimescale>, I>>(
    object: I
  ): CCSUsrMsgDesiredTimescale {
    const message = createBaseCCSUsrMsgDesiredTimescale();
    message.desiredTimescale = object.desiredTimescale ?? 0;
    message.durationRealtimeSec = object.durationRealtimeSec ?? 0;
    message.interpolatorType = object.interpolatorType ?? 0;
    message.startBlendTime = object.startBlendTime ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgCurrentTimescale(): CCSUsrMsgCurrentTimescale {
  return { curTimescale: 0 };
}

export const CCSUsrMsgCurrentTimescale = {
  encode(
    message: CCSUsrMsgCurrentTimescale,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.curTimescale !== 0) {
      writer.uint32(13).float(message.curTimescale);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgCurrentTimescale {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgCurrentTimescale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.curTimescale = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgCurrentTimescale>, I>>(
    object: I
  ): CCSUsrMsgCurrentTimescale {
    const message = createBaseCCSUsrMsgCurrentTimescale();
    message.curTimescale = object.curTimescale ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgAchievementEvent(): CCSUsrMsgAchievementEvent {
  return { achievement: 0, count: 0, userId: 0 };
}

export const CCSUsrMsgAchievementEvent = {
  encode(
    message: CCSUsrMsgAchievementEvent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.achievement !== 0) {
      writer.uint32(8).int32(message.achievement);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    if (message.userId !== 0) {
      writer.uint32(24).int32(message.userId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgAchievementEvent {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgAchievementEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievement = reader.int32();
          break;
        case 2:
          message.count = reader.int32();
          break;
        case 3:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgAchievementEvent>, I>>(
    object: I
  ): CCSUsrMsgAchievementEvent {
    const message = createBaseCCSUsrMsgAchievementEvent();
    message.achievement = object.achievement ?? 0;
    message.count = object.count ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgMatchEndConditions(): CCSUsrMsgMatchEndConditions {
  return { fraglimit: 0, mpMaxrounds: 0, mpWinlimit: 0, mpTimelimit: 0 };
}

export const CCSUsrMsgMatchEndConditions = {
  encode(
    message: CCSUsrMsgMatchEndConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fraglimit !== 0) {
      writer.uint32(8).int32(message.fraglimit);
    }
    if (message.mpMaxrounds !== 0) {
      writer.uint32(16).int32(message.mpMaxrounds);
    }
    if (message.mpWinlimit !== 0) {
      writer.uint32(24).int32(message.mpWinlimit);
    }
    if (message.mpTimelimit !== 0) {
      writer.uint32(32).int32(message.mpTimelimit);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgMatchEndConditions {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgMatchEndConditions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fraglimit = reader.int32();
          break;
        case 2:
          message.mpMaxrounds = reader.int32();
          break;
        case 3:
          message.mpWinlimit = reader.int32();
          break;
        case 4:
          message.mpTimelimit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgMatchEndConditions>, I>>(
    object: I
  ): CCSUsrMsgMatchEndConditions {
    const message = createBaseCCSUsrMsgMatchEndConditions();
    message.fraglimit = object.fraglimit ?? 0;
    message.mpMaxrounds = object.mpMaxrounds ?? 0;
    message.mpWinlimit = object.mpWinlimit ?? 0;
    message.mpTimelimit = object.mpTimelimit ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgPlayerStatsUpdate(): CCSUsrMsgPlayerStatsUpdate {
  return { version: 0, stats: [], userId: 0, crc: 0 };
}

export const CCSUsrMsgPlayerStatsUpdate = {
  encode(
    message: CCSUsrMsgPlayerStatsUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    for (const v of message.stats) {
      CCSUsrMsgPlayerStatsUpdate_Stat.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.userId !== 0) {
      writer.uint32(40).int32(message.userId);
    }
    if (message.crc !== 0) {
      writer.uint32(48).int32(message.crc);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgPlayerStatsUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgPlayerStatsUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int32();
          break;
        case 4:
          message.stats.push(
            CCSUsrMsgPlayerStatsUpdate_Stat.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.userId = reader.int32();
          break;
        case 6:
          message.crc = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgPlayerStatsUpdate>, I>>(
    object: I
  ): CCSUsrMsgPlayerStatsUpdate {
    const message = createBaseCCSUsrMsgPlayerStatsUpdate();
    message.version = object.version ?? 0;
    message.stats =
      object.stats?.map(e => CCSUsrMsgPlayerStatsUpdate_Stat.fromPartial(e)) ||
      [];
    message.userId = object.userId ?? 0;
    message.crc = object.crc ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgPlayerStatsUpdate_Stat(): CCSUsrMsgPlayerStatsUpdate_Stat {
  return { idx: 0, delta: 0 };
}

export const CCSUsrMsgPlayerStatsUpdate_Stat = {
  encode(
    message: CCSUsrMsgPlayerStatsUpdate_Stat,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idx !== 0) {
      writer.uint32(8).int32(message.idx);
    }
    if (message.delta !== 0) {
      writer.uint32(16).int32(message.delta);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgPlayerStatsUpdate_Stat {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgPlayerStatsUpdate_Stat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idx = reader.int32();
          break;
        case 2:
          message.delta = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgPlayerStatsUpdate_Stat>, I>>(
    object: I
  ): CCSUsrMsgPlayerStatsUpdate_Stat {
    const message = createBaseCCSUsrMsgPlayerStatsUpdate_Stat();
    message.idx = object.idx ?? 0;
    message.delta = object.delta ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgDisplayInventory(): CCSUsrMsgDisplayInventory {
  return { display: false, userId: 0 };
}

export const CCSUsrMsgDisplayInventory = {
  encode(
    message: CCSUsrMsgDisplayInventory,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.display === true) {
      writer.uint32(8).bool(message.display);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int32(message.userId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgDisplayInventory {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgDisplayInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.display = reader.bool();
          break;
        case 2:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgDisplayInventory>, I>>(
    object: I
  ): CCSUsrMsgDisplayInventory {
    const message = createBaseCCSUsrMsgDisplayInventory();
    message.display = object.display ?? false;
    message.userId = object.userId ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgQuestProgress(): CCSUsrMsgQuestProgress {
  return { questId: 0, normalPoints: 0, bonusPoints: 0, isEventQuest: false };
}

export const CCSUsrMsgQuestProgress = {
  encode(
    message: CCSUsrMsgQuestProgress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.questId !== 0) {
      writer.uint32(8).uint32(message.questId);
    }
    if (message.normalPoints !== 0) {
      writer.uint32(16).uint32(message.normalPoints);
    }
    if (message.bonusPoints !== 0) {
      writer.uint32(24).uint32(message.bonusPoints);
    }
    if (message.isEventQuest === true) {
      writer.uint32(32).bool(message.isEventQuest);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgQuestProgress {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgQuestProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.uint32();
          break;
        case 2:
          message.normalPoints = reader.uint32();
          break;
        case 3:
          message.bonusPoints = reader.uint32();
          break;
        case 4:
          message.isEventQuest = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgQuestProgress>, I>>(
    object: I
  ): CCSUsrMsgQuestProgress {
    const message = createBaseCCSUsrMsgQuestProgress();
    message.questId = object.questId ?? 0;
    message.normalPoints = object.normalPoints ?? 0;
    message.bonusPoints = object.bonusPoints ?? 0;
    message.isEventQuest = object.isEventQuest ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgScoreLeaderboardData(): CCSUsrMsgScoreLeaderboardData {
  return { data: undefined };
}

export const CCSUsrMsgScoreLeaderboardData = {
  encode(
    message: CCSUsrMsgScoreLeaderboardData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined) {
      ScoreLeaderboardData.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgScoreLeaderboardData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgScoreLeaderboardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ScoreLeaderboardData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgScoreLeaderboardData>, I>>(
    object: I
  ): CCSUsrMsgScoreLeaderboardData {
    const message = createBaseCCSUsrMsgScoreLeaderboardData();
    message.data =
      object.data !== undefined && object.data !== null
        ? ScoreLeaderboardData.fromPartial(object.data)
        : undefined;
    return message;
  }
};

function createBaseCCSUsrMsgPlayerDecalDigitalSignature(): CCSUsrMsgPlayerDecalDigitalSignature {
  return { data: undefined };
}

export const CCSUsrMsgPlayerDecalDigitalSignature = {
  encode(
    message: CCSUsrMsgPlayerDecalDigitalSignature,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined) {
      PlayerDecalDigitalSignature.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgPlayerDecalDigitalSignature {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgPlayerDecalDigitalSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PlayerDecalDigitalSignature.decode(
            reader,
            reader.uint32()
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
    I extends Exact<DeepPartial<CCSUsrMsgPlayerDecalDigitalSignature>, I>
  >(object: I): CCSUsrMsgPlayerDecalDigitalSignature {
    const message = createBaseCCSUsrMsgPlayerDecalDigitalSignature();
    message.data =
      object.data !== undefined && object.data !== null
        ? PlayerDecalDigitalSignature.fromPartial(object.data)
        : undefined;
    return message;
  }
};

function createBaseCCSUsrMsgXRankGet(): CCSUsrMsgXRankGet {
  return { modeIdx: 0, controller: 0 };
}

export const CCSUsrMsgXRankGet = {
  encode(message: CCSUsrMsgXRankGet, writer: Writer = Writer.create()): Writer {
    if (message.modeIdx !== 0) {
      writer.uint32(8).int32(message.modeIdx);
    }
    if (message.controller !== 0) {
      writer.uint32(16).int32(message.controller);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgXRankGet {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgXRankGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modeIdx = reader.int32();
          break;
        case 2:
          message.controller = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgXRankGet>, I>>(
    object: I
  ): CCSUsrMsgXRankGet {
    const message = createBaseCCSUsrMsgXRankGet();
    message.modeIdx = object.modeIdx ?? 0;
    message.controller = object.controller ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgXRankUpd(): CCSUsrMsgXRankUpd {
  return { modeIdx: 0, controller: 0, ranking: 0 };
}

export const CCSUsrMsgXRankUpd = {
  encode(message: CCSUsrMsgXRankUpd, writer: Writer = Writer.create()): Writer {
    if (message.modeIdx !== 0) {
      writer.uint32(8).int32(message.modeIdx);
    }
    if (message.controller !== 0) {
      writer.uint32(16).int32(message.controller);
    }
    if (message.ranking !== 0) {
      writer.uint32(24).int32(message.ranking);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgXRankUpd {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgXRankUpd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modeIdx = reader.int32();
          break;
        case 2:
          message.controller = reader.int32();
          break;
        case 3:
          message.ranking = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgXRankUpd>, I>>(
    object: I
  ): CCSUsrMsgXRankUpd {
    const message = createBaseCCSUsrMsgXRankUpd();
    message.modeIdx = object.modeIdx ?? 0;
    message.controller = object.controller ?? 0;
    message.ranking = object.ranking ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgCallVoteFailed(): CCSUsrMsgCallVoteFailed {
  return { reason: 0, time: 0 };
}

export const CCSUsrMsgCallVoteFailed = {
  encode(
    message: CCSUsrMsgCallVoteFailed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgCallVoteFailed {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgCallVoteFailed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = reader.int32();
          break;
        case 2:
          message.time = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgCallVoteFailed>, I>>(
    object: I
  ): CCSUsrMsgCallVoteFailed {
    const message = createBaseCCSUsrMsgCallVoteFailed();
    message.reason = object.reason ?? 0;
    message.time = object.time ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgVoteStart(): CCSUsrMsgVoteStart {
  return {
    team: 0,
    entIdx: 0,
    voteType: 0,
    dispStr: "",
    detailsStr: "",
    otherTeamStr: "",
    isYesNoVote: false,
    entidxTarget: 0
  };
}

export const CCSUsrMsgVoteStart = {
  encode(
    message: CCSUsrMsgVoteStart,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    if (message.entIdx !== 0) {
      writer.uint32(16).int32(message.entIdx);
    }
    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }
    if (message.dispStr !== "") {
      writer.uint32(34).string(message.dispStr);
    }
    if (message.detailsStr !== "") {
      writer.uint32(42).string(message.detailsStr);
    }
    if (message.otherTeamStr !== "") {
      writer.uint32(50).string(message.otherTeamStr);
    }
    if (message.isYesNoVote === true) {
      writer.uint32(56).bool(message.isYesNoVote);
    }
    if (message.entidxTarget !== 0) {
      writer.uint32(64).int32(message.entidxTarget);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgVoteStart {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVoteStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.team = reader.int32();
          break;
        case 2:
          message.entIdx = reader.int32();
          break;
        case 3:
          message.voteType = reader.int32();
          break;
        case 4:
          message.dispStr = reader.string();
          break;
        case 5:
          message.detailsStr = reader.string();
          break;
        case 6:
          message.otherTeamStr = reader.string();
          break;
        case 7:
          message.isYesNoVote = reader.bool();
          break;
        case 8:
          message.entidxTarget = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVoteStart>, I>>(
    object: I
  ): CCSUsrMsgVoteStart {
    const message = createBaseCCSUsrMsgVoteStart();
    message.team = object.team ?? 0;
    message.entIdx = object.entIdx ?? 0;
    message.voteType = object.voteType ?? 0;
    message.dispStr = object.dispStr ?? "";
    message.detailsStr = object.detailsStr ?? "";
    message.otherTeamStr = object.otherTeamStr ?? "";
    message.isYesNoVote = object.isYesNoVote ?? false;
    message.entidxTarget = object.entidxTarget ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgVotePass(): CCSUsrMsgVotePass {
  return { team: 0, voteType: 0, dispStr: "", detailsStr: "" };
}

export const CCSUsrMsgVotePass = {
  encode(message: CCSUsrMsgVotePass, writer: Writer = Writer.create()): Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    if (message.voteType !== 0) {
      writer.uint32(16).int32(message.voteType);
    }
    if (message.dispStr !== "") {
      writer.uint32(26).string(message.dispStr);
    }
    if (message.detailsStr !== "") {
      writer.uint32(34).string(message.detailsStr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgVotePass {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVotePass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.team = reader.int32();
          break;
        case 2:
          message.voteType = reader.int32();
          break;
        case 3:
          message.dispStr = reader.string();
          break;
        case 4:
          message.detailsStr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVotePass>, I>>(
    object: I
  ): CCSUsrMsgVotePass {
    const message = createBaseCCSUsrMsgVotePass();
    message.team = object.team ?? 0;
    message.voteType = object.voteType ?? 0;
    message.dispStr = object.dispStr ?? "";
    message.detailsStr = object.detailsStr ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgVoteFailed(): CCSUsrMsgVoteFailed {
  return { team: 0, reason: 0 };
}

export const CCSUsrMsgVoteFailed = {
  encode(
    message: CCSUsrMsgVoteFailed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgVoteFailed {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVoteFailed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.team = reader.int32();
          break;
        case 2:
          message.reason = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVoteFailed>, I>>(
    object: I
  ): CCSUsrMsgVoteFailed {
    const message = createBaseCCSUsrMsgVoteFailed();
    message.team = object.team ?? 0;
    message.reason = object.reason ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgVoteSetup(): CCSUsrMsgVoteSetup {
  return { potentialIssues: [] };
}

export const CCSUsrMsgVoteSetup = {
  encode(
    message: CCSUsrMsgVoteSetup,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.potentialIssues) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgVoteSetup {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgVoteSetup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.potentialIssues.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgVoteSetup>, I>>(
    object: I
  ): CCSUsrMsgVoteSetup {
    const message = createBaseCCSUsrMsgVoteSetup();
    message.potentialIssues = object.potentialIssues?.map(e => e) || [];
    return message;
  }
};

function createBaseCCSUsrMsgSendLastKillerDamageToClient(): CCSUsrMsgSendLastKillerDamageToClient {
  return { numHitsGiven: 0, damageGiven: 0, numHitsTaken: 0, damageTaken: 0 };
}

export const CCSUsrMsgSendLastKillerDamageToClient = {
  encode(
    message: CCSUsrMsgSendLastKillerDamageToClient,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.numHitsGiven !== 0) {
      writer.uint32(8).int32(message.numHitsGiven);
    }
    if (message.damageGiven !== 0) {
      writer.uint32(16).int32(message.damageGiven);
    }
    if (message.numHitsTaken !== 0) {
      writer.uint32(24).int32(message.numHitsTaken);
    }
    if (message.damageTaken !== 0) {
      writer.uint32(32).int32(message.damageTaken);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgSendLastKillerDamageToClient {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSendLastKillerDamageToClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numHitsGiven = reader.int32();
          break;
        case 2:
          message.damageGiven = reader.int32();
          break;
        case 3:
          message.numHitsTaken = reader.int32();
          break;
        case 4:
          message.damageTaken = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CCSUsrMsgSendLastKillerDamageToClient>, I>
  >(object: I): CCSUsrMsgSendLastKillerDamageToClient {
    const message = createBaseCCSUsrMsgSendLastKillerDamageToClient();
    message.numHitsGiven = object.numHitsGiven ?? 0;
    message.damageGiven = object.damageGiven ?? 0;
    message.numHitsTaken = object.numHitsTaken ?? 0;
    message.damageTaken = object.damageTaken ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgServerRankUpdate(): CCSUsrMsgServerRankUpdate {
  return { rankUpdate: [] };
}

export const CCSUsrMsgServerRankUpdate = {
  encode(
    message: CCSUsrMsgServerRankUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.rankUpdate) {
      CCSUsrMsgServerRankUpdate_RankUpdate.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgServerRankUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgServerRankUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rankUpdate.push(
            CCSUsrMsgServerRankUpdate_RankUpdate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgServerRankUpdate>, I>>(
    object: I
  ): CCSUsrMsgServerRankUpdate {
    const message = createBaseCCSUsrMsgServerRankUpdate();
    message.rankUpdate =
      object.rankUpdate?.map(e =>
        CCSUsrMsgServerRankUpdate_RankUpdate.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCCSUsrMsgServerRankUpdate_RankUpdate(): CCSUsrMsgServerRankUpdate_RankUpdate {
  return {
    accountId: 0,
    rankOld: 0,
    rankNew: 0,
    numWins: 0,
    rankChange: 0,
    rankTypeId: 0
  };
}

export const CCSUsrMsgServerRankUpdate_RankUpdate = {
  encode(
    message: CCSUsrMsgServerRankUpdate_RankUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int32(message.accountId);
    }
    if (message.rankOld !== 0) {
      writer.uint32(16).int32(message.rankOld);
    }
    if (message.rankNew !== 0) {
      writer.uint32(24).int32(message.rankNew);
    }
    if (message.numWins !== 0) {
      writer.uint32(32).int32(message.numWins);
    }
    if (message.rankChange !== 0) {
      writer.uint32(45).float(message.rankChange);
    }
    if (message.rankTypeId !== 0) {
      writer.uint32(48).int32(message.rankTypeId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgServerRankUpdate_RankUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgServerRankUpdate_RankUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.int32();
          break;
        case 2:
          message.rankOld = reader.int32();
          break;
        case 3:
          message.rankNew = reader.int32();
          break;
        case 4:
          message.numWins = reader.int32();
          break;
        case 5:
          message.rankChange = reader.float();
          break;
        case 6:
          message.rankTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CCSUsrMsgServerRankUpdate_RankUpdate>, I>
  >(object: I): CCSUsrMsgServerRankUpdate_RankUpdate {
    const message = createBaseCCSUsrMsgServerRankUpdate_RankUpdate();
    message.accountId = object.accountId ?? 0;
    message.rankOld = object.rankOld ?? 0;
    message.rankNew = object.rankNew ?? 0;
    message.numWins = object.numWins ?? 0;
    message.rankChange = object.rankChange ?? 0;
    message.rankTypeId = object.rankTypeId ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgXpUpdate(): CCSUsrMsgXpUpdate {
  return { data: undefined };
}

export const CCSUsrMsgXpUpdate = {
  encode(message: CCSUsrMsgXpUpdate, writer: Writer = Writer.create()): Writer {
    if (message.data !== undefined) {
      CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgXpUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgXpUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgXpUpdate>, I>>(
    object: I
  ): CCSUsrMsgXpUpdate {
    const message = createBaseCCSUsrMsgXpUpdate();
    message.data =
      object.data !== undefined && object.data !== null
        ? CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.fromPartial(object.data)
        : undefined;
    return message;
  }
};

function createBaseCCSUsrMsgItemPickup(): CCSUsrMsgItemPickup {
  return { item: "" };
}

export const CCSUsrMsgItemPickup = {
  encode(
    message: CCSUsrMsgItemPickup,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.item !== "") {
      writer.uint32(10).string(message.item);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgItemPickup {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgItemPickup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgItemPickup>, I>>(
    object: I
  ): CCSUsrMsgItemPickup {
    const message = createBaseCCSUsrMsgItemPickup();
    message.item = object.item ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgShowMenu(): CCSUsrMsgShowMenu {
  return { bitsValidSlots: 0, displayTime: 0, menuString: "" };
}

export const CCSUsrMsgShowMenu = {
  encode(message: CCSUsrMsgShowMenu, writer: Writer = Writer.create()): Writer {
    if (message.bitsValidSlots !== 0) {
      writer.uint32(8).int32(message.bitsValidSlots);
    }
    if (message.displayTime !== 0) {
      writer.uint32(16).int32(message.displayTime);
    }
    if (message.menuString !== "") {
      writer.uint32(26).string(message.menuString);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgShowMenu {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgShowMenu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitsValidSlots = reader.int32();
          break;
        case 2:
          message.displayTime = reader.int32();
          break;
        case 3:
          message.menuString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgShowMenu>, I>>(
    object: I
  ): CCSUsrMsgShowMenu {
    const message = createBaseCCSUsrMsgShowMenu();
    message.bitsValidSlots = object.bitsValidSlots ?? 0;
    message.displayTime = object.displayTime ?? 0;
    message.menuString = object.menuString ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgBarTime(): CCSUsrMsgBarTime {
  return { time: "" };
}

export const CCSUsrMsgBarTime = {
  encode(message: CCSUsrMsgBarTime, writer: Writer = Writer.create()): Writer {
    if (message.time !== "") {
      writer.uint32(10).string(message.time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgBarTime {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgBarTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgBarTime>, I>>(
    object: I
  ): CCSUsrMsgBarTime {
    const message = createBaseCCSUsrMsgBarTime();
    message.time = object.time ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgAmmoDenied(): CCSUsrMsgAmmoDenied {
  return { ammoIdx: 0 };
}

export const CCSUsrMsgAmmoDenied = {
  encode(
    message: CCSUsrMsgAmmoDenied,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ammoIdx !== 0) {
      writer.uint32(8).int32(message.ammoIdx);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgAmmoDenied {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgAmmoDenied();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammoIdx = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgAmmoDenied>, I>>(
    object: I
  ): CCSUsrMsgAmmoDenied {
    const message = createBaseCCSUsrMsgAmmoDenied();
    message.ammoIdx = object.ammoIdx ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgMarkAchievement(): CCSUsrMsgMarkAchievement {
  return { achievement: "" };
}

export const CCSUsrMsgMarkAchievement = {
  encode(
    message: CCSUsrMsgMarkAchievement,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.achievement !== "") {
      writer.uint32(10).string(message.achievement);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgMarkAchievement {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgMarkAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievement = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgMarkAchievement>, I>>(
    object: I
  ): CCSUsrMsgMarkAchievement {
    const message = createBaseCCSUsrMsgMarkAchievement();
    message.achievement = object.achievement ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgMatchStatsUpdate(): CCSUsrMsgMatchStatsUpdate {
  return { update: "" };
}

export const CCSUsrMsgMatchStatsUpdate = {
  encode(
    message: CCSUsrMsgMatchStatsUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.update !== "") {
      writer.uint32(10).string(message.update);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgMatchStatsUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgMatchStatsUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.update = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgMatchStatsUpdate>, I>>(
    object: I
  ): CCSUsrMsgMatchStatsUpdate {
    const message = createBaseCCSUsrMsgMatchStatsUpdate();
    message.update = object.update ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgItemDrop(): CCSUsrMsgItemDrop {
  return { itemid: Long.ZERO, death: false };
}

export const CCSUsrMsgItemDrop = {
  encode(message: CCSUsrMsgItemDrop, writer: Writer = Writer.create()): Writer {
    if (!message.itemid.isZero()) {
      writer.uint32(8).int64(message.itemid);
    }
    if (message.death === true) {
      writer.uint32(16).bool(message.death);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgItemDrop {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgItemDrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemid = reader.int64() as Long;
          break;
        case 2:
          message.death = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgItemDrop>, I>>(
    object: I
  ): CCSUsrMsgItemDrop {
    const message = createBaseCCSUsrMsgItemDrop();
    message.itemid =
      object.itemid !== undefined && object.itemid !== null
        ? Long.fromValue(object.itemid)
        : Long.ZERO;
    message.death = object.death ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgGlowPropTurnOff(): CCSUsrMsgGlowPropTurnOff {
  return { entidx: 0 };
}

export const CCSUsrMsgGlowPropTurnOff = {
  encode(
    message: CCSUsrMsgGlowPropTurnOff,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entidx !== 0) {
      writer.uint32(8).int32(message.entidx);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgGlowPropTurnOff {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgGlowPropTurnOff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entidx = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgGlowPropTurnOff>, I>>(
    object: I
  ): CCSUsrMsgGlowPropTurnOff {
    const message = createBaseCCSUsrMsgGlowPropTurnOff();
    message.entidx = object.entidx ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgRoundBackupFilenames(): CCSUsrMsgRoundBackupFilenames {
  return { count: 0, index: 0, filename: "", nicename: "" };
}

export const CCSUsrMsgRoundBackupFilenames = {
  encode(
    message: CCSUsrMsgRoundBackupFilenames,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.count !== 0) {
      writer.uint32(8).int32(message.count);
    }
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.nicename !== "") {
      writer.uint32(34).string(message.nicename);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundBackupFilenames {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRoundBackupFilenames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.int32();
          break;
        case 2:
          message.index = reader.int32();
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.nicename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgRoundBackupFilenames>, I>>(
    object: I
  ): CCSUsrMsgRoundBackupFilenames {
    const message = createBaseCCSUsrMsgRoundBackupFilenames();
    message.count = object.count ?? 0;
    message.index = object.index ?? 0;
    message.filename = object.filename ?? "";
    message.nicename = object.nicename ?? "";
    return message;
  }
};

function createBaseCCSUsrMsgSSUI(): CCSUsrMsgSSUI {
  return { show: false, startTime: 0, endTime: 0 };
}

export const CCSUsrMsgSSUI = {
  encode(message: CCSUsrMsgSSUI, writer: Writer = Writer.create()): Writer {
    if (message.show === true) {
      writer.uint32(8).bool(message.show);
    }
    if (message.startTime !== 0) {
      writer.uint32(21).float(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(29).float(message.endTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgSSUI {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSSUI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.show = reader.bool();
          break;
        case 2:
          message.startTime = reader.float();
          break;
        case 3:
          message.endTime = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSSUI>, I>>(
    object: I
  ): CCSUsrMsgSSUI {
    const message = createBaseCCSUsrMsgSSUI();
    message.show = object.show ?? false;
    message.startTime = object.startTime ?? 0;
    message.endTime = object.endTime ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgSurvivalStats(): CCSUsrMsgSurvivalStats {
  return { xuid: Long.UZERO, facts: [], users: [], damages: [], ticknumber: 0 };
}

export const CCSUsrMsgSurvivalStats = {
  encode(
    message: CCSUsrMsgSurvivalStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.xuid.isZero()) {
      writer.uint32(8).uint64(message.xuid);
    }
    for (const v of message.facts) {
      CCSUsrMsgSurvivalStats_Fact.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.users) {
      CCSUsrMsgSurvivalStats_Placement.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.damages) {
      CCSUsrMsgSurvivalStats_Damage.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.ticknumber !== 0) {
      writer.uint32(32).int32(message.ticknumber);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgSurvivalStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSurvivalStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xuid = reader.uint64() as Long;
          break;
        case 2:
          message.facts.push(
            CCSUsrMsgSurvivalStats_Fact.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.users.push(
            CCSUsrMsgSurvivalStats_Placement.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.damages.push(
            CCSUsrMsgSurvivalStats_Damage.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.ticknumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSurvivalStats>, I>>(
    object: I
  ): CCSUsrMsgSurvivalStats {
    const message = createBaseCCSUsrMsgSurvivalStats();
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.facts =
      object.facts?.map(e => CCSUsrMsgSurvivalStats_Fact.fromPartial(e)) || [];
    message.users =
      object.users?.map(e => CCSUsrMsgSurvivalStats_Placement.fromPartial(e)) ||
      [];
    message.damages =
      object.damages?.map(e => CCSUsrMsgSurvivalStats_Damage.fromPartial(e)) ||
      [];
    message.ticknumber = object.ticknumber ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgSurvivalStats_Fact(): CCSUsrMsgSurvivalStats_Fact {
  return { type: 0, display: 0, value: 0, interestingness: 0 };
}

export const CCSUsrMsgSurvivalStats_Fact = {
  encode(
    message: CCSUsrMsgSurvivalStats_Fact,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.display !== 0) {
      writer.uint32(16).int32(message.display);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    if (message.interestingness !== 0) {
      writer.uint32(37).float(message.interestingness);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgSurvivalStats_Fact {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSurvivalStats_Fact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.display = reader.int32();
          break;
        case 3:
          message.value = reader.int32();
          break;
        case 4:
          message.interestingness = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSurvivalStats_Fact>, I>>(
    object: I
  ): CCSUsrMsgSurvivalStats_Fact {
    const message = createBaseCCSUsrMsgSurvivalStats_Fact();
    message.type = object.type ?? 0;
    message.display = object.display ?? 0;
    message.value = object.value ?? 0;
    message.interestingness = object.interestingness ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgSurvivalStats_Placement(): CCSUsrMsgSurvivalStats_Placement {
  return { xuid: Long.UZERO, teamnumber: 0, placement: 0 };
}

export const CCSUsrMsgSurvivalStats_Placement = {
  encode(
    message: CCSUsrMsgSurvivalStats_Placement,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.xuid.isZero()) {
      writer.uint32(8).uint64(message.xuid);
    }
    if (message.teamnumber !== 0) {
      writer.uint32(16).int32(message.teamnumber);
    }
    if (message.placement !== 0) {
      writer.uint32(24).int32(message.placement);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgSurvivalStats_Placement {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSurvivalStats_Placement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xuid = reader.uint64() as Long;
          break;
        case 2:
          message.teamnumber = reader.int32();
          break;
        case 3:
          message.placement = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CCSUsrMsgSurvivalStats_Placement>, I>
  >(object: I): CCSUsrMsgSurvivalStats_Placement {
    const message = createBaseCCSUsrMsgSurvivalStats_Placement();
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.teamnumber = object.teamnumber ?? 0;
    message.placement = object.placement ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgSurvivalStats_Damage(): CCSUsrMsgSurvivalStats_Damage {
  return { xuid: Long.UZERO, to: 0, toHits: 0, from: 0, fromHits: 0 };
}

export const CCSUsrMsgSurvivalStats_Damage = {
  encode(
    message: CCSUsrMsgSurvivalStats_Damage,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.xuid.isZero()) {
      writer.uint32(8).uint64(message.xuid);
    }
    if (message.to !== 0) {
      writer.uint32(16).int32(message.to);
    }
    if (message.toHits !== 0) {
      writer.uint32(24).int32(message.toHits);
    }
    if (message.from !== 0) {
      writer.uint32(32).int32(message.from);
    }
    if (message.fromHits !== 0) {
      writer.uint32(40).int32(message.fromHits);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgSurvivalStats_Damage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgSurvivalStats_Damage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xuid = reader.uint64() as Long;
          break;
        case 2:
          message.to = reader.int32();
          break;
        case 3:
          message.toHits = reader.int32();
          break;
        case 4:
          message.from = reader.int32();
          break;
        case 5:
          message.fromHits = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgSurvivalStats_Damage>, I>>(
    object: I
  ): CCSUsrMsgSurvivalStats_Damage {
    const message = createBaseCCSUsrMsgSurvivalStats_Damage();
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.to = object.to ?? 0;
    message.toHits = object.toHits ?? 0;
    message.from = object.from ?? 0;
    message.fromHits = object.fromHits ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgEndOfMatchAllPlayersData(): CCSUsrMsgEndOfMatchAllPlayersData {
  return { allplayerdata: [], scene: 0 };
}

export const CCSUsrMsgEndOfMatchAllPlayersData = {
  encode(
    message: CCSUsrMsgEndOfMatchAllPlayersData,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.allplayerdata) {
      CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.scene !== 0) {
      writer.uint32(16).int32(message.scene);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgEndOfMatchAllPlayersData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allplayerdata.push(
            CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 2:
          message.scene = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CCSUsrMsgEndOfMatchAllPlayersData>, I>
  >(object: I): CCSUsrMsgEndOfMatchAllPlayersData {
    const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData();
    message.allplayerdata =
      object.allplayerdata?.map(e =>
        CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.fromPartial(e)
      ) || [];
    message.scene = object.scene ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgEndOfMatchAllPlayersData_Accolade(): CCSUsrMsgEndOfMatchAllPlayersData_Accolade {
  return { eaccolade: 0, value: 0, position: 0 };
}

export const CCSUsrMsgEndOfMatchAllPlayersData_Accolade = {
  encode(
    message: CCSUsrMsgEndOfMatchAllPlayersData_Accolade,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eaccolade !== 0) {
      writer.uint32(8).int32(message.eaccolade);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    if (message.position !== 0) {
      writer.uint32(24).int32(message.position);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgEndOfMatchAllPlayersData_Accolade {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_Accolade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eaccolade = reader.int32();
          break;
        case 2:
          message.value = reader.float();
          break;
        case 3:
          message.position = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CCSUsrMsgEndOfMatchAllPlayersData_Accolade>, I>
  >(object: I): CCSUsrMsgEndOfMatchAllPlayersData_Accolade {
    const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_Accolade();
    message.eaccolade = object.eaccolade ?? 0;
    message.value = object.value ?? 0;
    message.position = object.position ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData(): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData {
  return {
    entindex: 0,
    xuid: Long.UZERO,
    name: "",
    teamnumber: 0,
    nomination: undefined,
    items: [],
    playercolor: 0,
    isbot: false
  };
}

export const CCSUsrMsgEndOfMatchAllPlayersData_PlayerData = {
  encode(
    message: CCSUsrMsgEndOfMatchAllPlayersData_PlayerData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (!message.xuid.isZero()) {
      writer.uint32(16).uint64(message.xuid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.teamnumber !== 0) {
      writer.uint32(32).int32(message.teamnumber);
    }
    if (message.nomination !== undefined) {
      CCSUsrMsgEndOfMatchAllPlayersData_Accolade.encode(
        message.nomination,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.items) {
      CEconItemPreviewDataBlock.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.playercolor !== 0) {
      writer.uint32(56).int32(message.playercolor);
    }
    if (message.isbot === true) {
      writer.uint32(64).bool(message.isbot);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entindex = reader.int32();
          break;
        case 2:
          message.xuid = reader.uint64() as Long;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.teamnumber = reader.int32();
          break;
        case 5:
          message.nomination =
            CCSUsrMsgEndOfMatchAllPlayersData_Accolade.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.items.push(
            CEconItemPreviewDataBlock.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.playercolor = reader.int32();
          break;
        case 8:
          message.isbot = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CCSUsrMsgEndOfMatchAllPlayersData_PlayerData>,
      I
    >
  >(object: I): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData {
    const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData();
    message.entindex = object.entindex ?? 0;
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.teamnumber = object.teamnumber ?? 0;
    message.nomination =
      object.nomination !== undefined && object.nomination !== null
        ? CCSUsrMsgEndOfMatchAllPlayersData_Accolade.fromPartial(
            object.nomination
          )
        : undefined;
    message.items =
      object.items?.map(e => CEconItemPreviewDataBlock.fromPartial(e)) || [];
    message.playercolor = object.playercolor ?? 0;
    message.isbot = object.isbot ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgRoundImpactScoreData(): CCSUsrMsgRoundImpactScoreData {
  return { initConditions: undefined, allRisEventData: [] };
}

export const CCSUsrMsgRoundImpactScoreData = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.initConditions !== undefined) {
      CCSUsrMsgRoundImpactScoreData_InitialConditions.encode(
        message.initConditions,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.allRisEventData) {
      CCSUsrMsgRoundImpactScoreData_RisEvent.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRoundImpactScoreData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initConditions =
            CCSUsrMsgRoundImpactScoreData_InitialConditions.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.allRisEventData.push(
            CCSUsrMsgRoundImpactScoreData_RisEvent.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgRoundImpactScoreData>, I>>(
    object: I
  ): CCSUsrMsgRoundImpactScoreData {
    const message = createBaseCCSUsrMsgRoundImpactScoreData();
    message.initConditions =
      object.initConditions !== undefined && object.initConditions !== null
        ? CCSUsrMsgRoundImpactScoreData_InitialConditions.fromPartial(
            object.initConditions
          )
        : undefined;
    message.allRisEventData =
      object.allRisEventData?.map(e =>
        CCSUsrMsgRoundImpactScoreData_RisEvent.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent(): CCSUsrMsgRoundImpactScoreData_RisEvent {
  return {
    timestamp: 0,
    terroristOdds: 0,
    ctAlive: 0,
    tAlive: 0,
    victimData: undefined,
    objectiveData: undefined,
    allDamageData: []
  };
}

export const CCSUsrMsgRoundImpactScoreData_RisEvent = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timestamp !== 0) {
      writer.uint32(13).float(message.timestamp);
    }
    if (message.terroristOdds !== 0) {
      writer.uint32(16).int32(message.terroristOdds);
    }
    if (message.ctAlive !== 0) {
      writer.uint32(24).int32(message.ctAlive);
    }
    if (message.tAlive !== 0) {
      writer.uint32(32).int32(message.tAlive);
    }
    if (message.victimData !== undefined) {
      CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.encode(
        message.victimData,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.objectiveData !== undefined) {
      CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.encode(
        message.objectiveData,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.allDamageData) {
      CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.float();
          break;
        case 2:
          message.terroristOdds = reader.int32();
          break;
        case 3:
          message.ctAlive = reader.int32();
          break;
        case 4:
          message.tAlive = reader.int32();
          break;
        case 5:
          message.victimData =
            CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.objectiveData =
            CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.decode(
              reader,
              reader.uint32()
            );
          break;
        case 7:
          message.allDamageData.push(
            CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.decode(
              reader,
              reader.uint32()
            )
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
    I extends Exact<DeepPartial<CCSUsrMsgRoundImpactScoreData_RisEvent>, I>
  >(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent {
    const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent();
    message.timestamp = object.timestamp ?? 0;
    message.terroristOdds = object.terroristOdds ?? 0;
    message.ctAlive = object.ctAlive ?? 0;
    message.tAlive = object.tAlive ?? 0;
    message.victimData =
      object.victimData !== undefined && object.victimData !== null
        ? CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.fromPartial(
            object.victimData
          )
        : undefined;
    message.objectiveData =
      object.objectiveData !== undefined && object.objectiveData !== null
        ? CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.fromPartial(
            object.objectiveData
          )
        : undefined;
    message.allDamageData =
      object.allDamageData?.map(e =>
        CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim(): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim {
  return {
    teamNumber: 0,
    entindex: 0,
    xuid: Long.UZERO,
    color: 0,
    isBot: false,
    isDead: false
  };
}

export const CCSUsrMsgRoundImpactScoreData_RisEvent_Victim = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent_Victim,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.teamNumber !== 0) {
      writer.uint32(8).int32(message.teamNumber);
    }
    if (message.entindex !== 0) {
      writer.uint32(16).int32(message.entindex);
    }
    if (!message.xuid.isZero()) {
      writer.uint32(24).uint64(message.xuid);
    }
    if (message.color !== 0) {
      writer.uint32(32).int32(message.color);
    }
    if (message.isBot === true) {
      writer.uint32(40).bool(message.isBot);
    }
    if (message.isDead === true) {
      writer.uint32(48).bool(message.isDead);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamNumber = reader.int32();
          break;
        case 2:
          message.entindex = reader.int32();
          break;
        case 3:
          message.xuid = reader.uint64() as Long;
          break;
        case 4:
          message.color = reader.int32();
          break;
        case 5:
          message.isBot = reader.bool();
          break;
        case 6:
          message.isDead = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CCSUsrMsgRoundImpactScoreData_RisEvent_Victim>,
      I
    >
  >(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim {
    const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim();
    message.teamNumber = object.teamNumber ?? 0;
    message.entindex = object.entindex ?? 0;
    message.xuid =
      object.xuid !== undefined && object.xuid !== null
        ? Long.fromValue(object.xuid)
        : Long.UZERO;
    message.color = object.color ?? 0;
    message.isBot = object.isBot ?? false;
    message.isDead = object.isDead ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective(): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective {
  return { type: 0 };
}

export const CCSUsrMsgRoundImpactScoreData_RisEvent_Objective = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent_Objective,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CCSUsrMsgRoundImpactScoreData_RisEvent_Objective>,
      I
    >
  >(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective {
    const message =
      createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective();
    message.type = object.type ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage(): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage {
  return {
    targetEntindex: 0,
    targetXuid: Long.UZERO,
    healthRemoved: 0,
    numHits: 0,
    returnHealthRemoved: 0,
    numReturnHits: 0
  };
}

export const CCSUsrMsgRoundImpactScoreData_RisEvent_Damage = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent_Damage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    if (!message.targetXuid.isZero()) {
      writer.uint32(16).uint64(message.targetXuid);
    }
    if (message.healthRemoved !== 0) {
      writer.uint32(24).int32(message.healthRemoved);
    }
    if (message.numHits !== 0) {
      writer.uint32(32).int32(message.numHits);
    }
    if (message.returnHealthRemoved !== 0) {
      writer.uint32(40).int32(message.returnHealthRemoved);
    }
    if (message.numReturnHits !== 0) {
      writer.uint32(48).int32(message.numReturnHits);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetEntindex = reader.int32();
          break;
        case 2:
          message.targetXuid = reader.uint64() as Long;
          break;
        case 3:
          message.healthRemoved = reader.int32();
          break;
        case 4:
          message.numHits = reader.int32();
          break;
        case 5:
          message.returnHealthRemoved = reader.int32();
          break;
        case 6:
          message.numReturnHits = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CCSUsrMsgRoundImpactScoreData_RisEvent_Damage>,
      I
    >
  >(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage {
    const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage();
    message.targetEntindex = object.targetEntindex ?? 0;
    message.targetXuid =
      object.targetXuid !== undefined && object.targetXuid !== null
        ? Long.fromValue(object.targetXuid)
        : Long.UZERO;
    message.healthRemoved = object.healthRemoved ?? 0;
    message.numHits = object.numHits ?? 0;
    message.returnHealthRemoved = object.returnHealthRemoved ?? 0;
    message.numReturnHits = object.numReturnHits ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgRoundImpactScoreData_InitialConditions(): CCSUsrMsgRoundImpactScoreData_InitialConditions {
  return { ctEquipValue: 0, tEquipValue: 0, terroristOdds: 0 };
}

export const CCSUsrMsgRoundImpactScoreData_InitialConditions = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_InitialConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ctEquipValue !== 0) {
      writer.uint32(8).int32(message.ctEquipValue);
    }
    if (message.tEquipValue !== 0) {
      writer.uint32(16).int32(message.tEquipValue);
    }
    if (message.terroristOdds !== 0) {
      writer.uint32(24).int32(message.terroristOdds);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_InitialConditions {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRoundImpactScoreData_InitialConditions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctEquipValue = reader.int32();
          break;
        case 2:
          message.tEquipValue = reader.int32();
          break;
        case 3:
          message.terroristOdds = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CCSUsrMsgRoundImpactScoreData_InitialConditions>,
      I
    >
  >(object: I): CCSUsrMsgRoundImpactScoreData_InitialConditions {
    const message = createBaseCCSUsrMsgRoundImpactScoreData_InitialConditions();
    message.ctEquipValue = object.ctEquipValue ?? 0;
    message.tEquipValue = object.tEquipValue ?? 0;
    message.terroristOdds = object.terroristOdds ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgCurrentRoundOdds(): CCSUsrMsgCurrentRoundOdds {
  return { odds: 0 };
}

export const CCSUsrMsgCurrentRoundOdds = {
  encode(
    message: CCSUsrMsgCurrentRoundOdds,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.odds !== 0) {
      writer.uint32(8).int32(message.odds);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgCurrentRoundOdds {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgCurrentRoundOdds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.odds = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgCurrentRoundOdds>, I>>(
    object: I
  ): CCSUsrMsgCurrentRoundOdds {
    const message = createBaseCCSUsrMsgCurrentRoundOdds();
    message.odds = object.odds ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgDeepStats(): CCSUsrMsgDeepStats {
  return { stats: undefined };
}

export const CCSUsrMsgDeepStats = {
  encode(
    message: CCSUsrMsgDeepStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.stats !== undefined) {
      CMsgGCCStrike15ClientDeepStats.encode(
        message.stats,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgDeepStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgDeepStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stats = CMsgGCCStrike15ClientDeepStats.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgDeepStats>, I>>(
    object: I
  ): CCSUsrMsgDeepStats {
    const message = createBaseCCSUsrMsgDeepStats();
    message.stats =
      object.stats !== undefined && object.stats !== null
        ? CMsgGCCStrike15ClientDeepStats.fromPartial(object.stats)
        : undefined;
    return message;
  }
};

function createBaseCCSUsrMsgResetHud(): CCSUsrMsgResetHud {
  return { reset: false };
}

export const CCSUsrMsgResetHud = {
  encode(message: CCSUsrMsgResetHud, writer: Writer = Writer.create()): Writer {
    if (message.reset === true) {
      writer.uint32(8).bool(message.reset);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgResetHud {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgResetHud();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reset = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgResetHud>, I>>(
    object: I
  ): CCSUsrMsgResetHud {
    const message = createBaseCCSUsrMsgResetHud();
    message.reset = object.reset ?? false;
    return message;
  }
};

function createBaseCCSUsrMsgGameTitle(): CCSUsrMsgGameTitle {
  return { dummy: 0 };
}

export const CCSUsrMsgGameTitle = {
  encode(
    message: CCSUsrMsgGameTitle,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dummy !== 0) {
      writer.uint32(8).int32(message.dummy);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgGameTitle {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgGameTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dummy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgGameTitle>, I>>(
    object: I
  ): CCSUsrMsgGameTitle {
    const message = createBaseCCSUsrMsgGameTitle();
    message.dummy = object.dummy ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgRequestState(): CCSUsrMsgRequestState {
  return { dummy: 0 };
}

export const CCSUsrMsgRequestState = {
  encode(
    message: CCSUsrMsgRequestState,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dummy !== 0) {
      writer.uint32(8).int32(message.dummy);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgRequestState {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgRequestState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dummy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgRequestState>, I>>(
    object: I
  ): CCSUsrMsgRequestState {
    const message = createBaseCCSUsrMsgRequestState();
    message.dummy = object.dummy ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgStopSpectatorMode(): CCSUsrMsgStopSpectatorMode {
  return { dummy: 0 };
}

export const CCSUsrMsgStopSpectatorMode = {
  encode(
    message: CCSUsrMsgStopSpectatorMode,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dummy !== 0) {
      writer.uint32(8).int32(message.dummy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgStopSpectatorMode {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgStopSpectatorMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dummy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgStopSpectatorMode>, I>>(
    object: I
  ): CCSUsrMsgStopSpectatorMode {
    const message = createBaseCCSUsrMsgStopSpectatorMode();
    message.dummy = object.dummy ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgDisconnectToLobby(): CCSUsrMsgDisconnectToLobby {
  return { dummy: 0 };
}

export const CCSUsrMsgDisconnectToLobby = {
  encode(
    message: CCSUsrMsgDisconnectToLobby,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dummy !== 0) {
      writer.uint32(8).int32(message.dummy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgDisconnectToLobby {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgDisconnectToLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dummy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgDisconnectToLobby>, I>>(
    object: I
  ): CCSUsrMsgDisconnectToLobby {
    const message = createBaseCCSUsrMsgDisconnectToLobby();
    message.dummy = object.dummy ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgWarmupHasEnded(): CCSUsrMsgWarmupHasEnded {
  return { dummy: 0 };
}

export const CCSUsrMsgWarmupHasEnded = {
  encode(
    message: CCSUsrMsgWarmupHasEnded,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dummy !== 0) {
      writer.uint32(8).int32(message.dummy);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgWarmupHasEnded {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgWarmupHasEnded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dummy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgWarmupHasEnded>, I>>(
    object: I
  ): CCSUsrMsgWarmupHasEnded {
    const message = createBaseCCSUsrMsgWarmupHasEnded();
    message.dummy = object.dummy ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgClientInfo(): CCSUsrMsgClientInfo {
  return { dummy: 0 };
}

export const CCSUsrMsgClientInfo = {
  encode(
    message: CCSUsrMsgClientInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dummy !== 0) {
      writer.uint32(8).int32(message.dummy);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgClientInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dummy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgClientInfo>, I>>(
    object: I
  ): CCSUsrMsgClientInfo {
    const message = createBaseCCSUsrMsgClientInfo();
    message.dummy = object.dummy ?? 0;
    return message;
  }
};

function createBaseCCSUsrMsgServerRankRevealAll(): CCSUsrMsgServerRankRevealAll {
  return { secondsTillShutdown: 0, reservation: undefined };
}

export const CCSUsrMsgServerRankRevealAll = {
  encode(
    message: CCSUsrMsgServerRankRevealAll,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.secondsTillShutdown !== 0) {
      writer.uint32(8).int32(message.secondsTillShutdown);
    }
    if (message.reservation !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CCSUsrMsgServerRankRevealAll {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgServerRankRevealAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsTillShutdown = reader.int32();
          break;
        case 2:
          message.reservation =
            CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgServerRankRevealAll>, I>>(
    object: I
  ): CCSUsrMsgServerRankRevealAll {
    const message = createBaseCCSUsrMsgServerRankRevealAll();
    message.secondsTillShutdown = object.secondsTillShutdown ?? 0;
    message.reservation =
      object.reservation !== undefined && object.reservation !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(
            object.reservation
          )
        : undefined;
    return message;
  }
};

function createBaseCCSUsrMsgUtilMsg(): CCSUsrMsgUtilMsg {
  return { utilAction: "", util1: 0, util2: 0, util3: 0, util4: 0, util5: 0 };
}

export const CCSUsrMsgUtilMsg = {
  encode(message: CCSUsrMsgUtilMsg, writer: Writer = Writer.create()): Writer {
    if (message.utilAction !== "") {
      writer.uint32(10).string(message.utilAction);
    }
    if (message.util1 !== 0) {
      writer.uint32(16).int32(message.util1);
    }
    if (message.util2 !== 0) {
      writer.uint32(24).int32(message.util2);
    }
    if (message.util3 !== 0) {
      writer.uint32(32).int32(message.util3);
    }
    if (message.util4 !== 0) {
      writer.uint32(40).int32(message.util4);
    }
    if (message.util5 !== 0) {
      writer.uint32(48).int32(message.util5);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CCSUsrMsgUtilMsg {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCSUsrMsgUtilMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.utilAction = reader.string();
          break;
        case 2:
          message.util1 = reader.int32();
          break;
        case 3:
          message.util2 = reader.int32();
          break;
        case 4:
          message.util3 = reader.int32();
          break;
        case 5:
          message.util4 = reader.int32();
          break;
        case 6:
          message.util5 = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CCSUsrMsgUtilMsg>, I>>(
    object: I
  ): CCSUsrMsgUtilMsg {
    const message = createBaseCCSUsrMsgUtilMsg();
    message.utilAction = object.utilAction ?? "";
    message.util1 = object.util1 ?? 0;
    message.util2 = object.util2 ?? 0;
    message.util3 = object.util3 ?? 0;
    message.util4 = object.util4 ?? 0;
    message.util5 = object.util5 ?? 0;
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
