/* eslint-disable */
import { CMsgVector2D, CMsgRGBA, CMsgVector } from "./netmessages";
import {
  CEconItemPreviewDataBlock,
  ScoreLeaderboardData,
  PlayerDecalDigitalSignature,
  CMsgGCCstrike15V2GC2ServerNotifyXPRewarded,
  CMsgGCCStrike15ClientDeepStats,
  CMsgGCCStrike15V2MatchmakingGC2ServerReserve
} from "./cstrike15_gcmessages";
import * as Long from "long";
import { Writer, Reader } from "protobufjs/minimal";

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

const baseCCSUsrMsgVGUIMenu: object = {
  name: "",
  show: false
};

const baseCCSUsrMsgVGUIMenu_Subkey: object = {
  name: "",
  str: ""
};

const baseCCSUsrMsgGeiger: object = {
  range: 0
};

const baseCCSUsrMsgTrain: object = {
  train: 0
};

const baseCCSUsrMsgHudText: object = {
  text: ""
};

const baseCCSUsrMsgSayText: object = {
  entIdx: 0,
  text: "",
  chat: false,
  textallchat: false
};

const baseCCSUsrMsgSayText2: object = {
  entIdx: 0,
  chat: false,
  msgName: "",
  params: "",
  textallchat: false
};

const baseCCSUsrMsgTextMsg: object = {
  msgDst: 0,
  params: ""
};

const baseCCSUsrMsgHudMsg: object = {
  channel: 0,
  effect: 0,
  fadeInTime: 0,
  fadeOutTime: 0,
  holdTime: 0,
  fxTime: 0,
  text: ""
};

const baseCCSUsrMsgShake: object = {
  command: 0,
  localAmplitude: 0,
  frequency: 0,
  duration: 0
};

const baseCCSUsrMsgFade: object = {
  duration: 0,
  holdTime: 0,
  flags: 0
};

const baseCCSUsrMsgRumble: object = {
  index: 0,
  data: 0,
  flags: 0
};

const baseCCSUsrMsgCloseCaption: object = {
  hash: 0,
  duration: 0,
  fromPlayer: false,
  cctoken: ""
};

const baseCCSUsrMsgCloseCaptionDirect: object = {
  hash: 0,
  duration: 0,
  fromPlayer: false
};

const baseCCSUsrMsgSendAudio: object = {
  radioSound: ""
};

const baseCCSUsrMsgRawAudio: object = {
  pitch: 0,
  entidx: 0,
  duration: 0,
  voiceFilename: ""
};

const baseCCSUsrMsgVoiceMask: object = {
  playerModEnable: false
};

const baseCCSUsrMsgVoiceMask_PlayerMask: object = {
  gameRulesMask: 0,
  banMasks: 0
};

const baseCCSUsrMsgDamage: object = {
  amount: 0,
  victimEntindex: 0
};

const baseCCSUsrMsgRadioText: object = {
  msgDst: 0,
  client: 0,
  msgName: "",
  params: ""
};

const baseCCSUsrMsgHintText: object = {
  text: ""
};

const baseCCSUsrMsgKeyHintText: object = {
  hints: ""
};

const baseCCSUsrMsgProcessSpottedEntityUpdate: object = {
  newUpdate: false
};

const baseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate: object = {
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

const baseCCSUsrMsgSendPlayerItemDrops: object = {};

const baseCCSUsrMsgSendPlayerItemFound: object = {
  entindex: 0
};

const baseCCSUsrMsgReloadEffect: object = {
  entidx: 0,
  actanim: 0,
  originX: 0,
  originY: 0,
  originZ: 0
};

const baseCCSUsrMsgWeaponSound: object = {
  entidx: 0,
  originX: 0,
  originY: 0,
  originZ: 0,
  sound: "",
  timestamp: 0
};

const baseCCSUsrMsgUpdateScreenHealthBar: object = {
  entidx: 0,
  healthratioOld: 0,
  healthratioNew: 0,
  style: 0
};

const baseCCSUsrMsgEntityOutlineHighlight: object = {
  entidx: 0,
  removehighlight: false
};

const baseCCSUsrMsgAdjustMoney: object = {
  amount: 0
};

const baseCCSUsrMsgReportHit: object = {
  posX: 0,
  posY: 0,
  timestamp: 0,
  posZ: 0
};

const baseCCSUsrMsgKillCam: object = {
  obsMode: 0,
  firstTarget: 0,
  secondTarget: 0
};

const baseCCSUsrMsgDesiredTimescale: object = {
  desiredTimescale: 0,
  durationRealtimeSec: 0,
  interpolatorType: 0,
  startBlendTime: 0
};

const baseCCSUsrMsgCurrentTimescale: object = {
  curTimescale: 0
};

const baseCCSUsrMsgAchievementEvent: object = {
  achievement: 0,
  count: 0,
  userId: 0
};

const baseCCSUsrMsgMatchEndConditions: object = {
  fraglimit: 0,
  mpMaxrounds: 0,
  mpWinlimit: 0,
  mpTimelimit: 0
};

const baseCCSUsrMsgPlayerStatsUpdate: object = {
  version: 0,
  userId: 0,
  crc: 0
};

const baseCCSUsrMsgPlayerStatsUpdate_Stat: object = {
  idx: 0,
  delta: 0
};

const baseCCSUsrMsgDisplayInventory: object = {
  display: false,
  userId: 0
};

const baseCCSUsrMsgQuestProgress: object = {
  questId: 0,
  normalPoints: 0,
  bonusPoints: 0,
  isEventQuest: false
};

const baseCCSUsrMsgScoreLeaderboardData: object = {};

const baseCCSUsrMsgPlayerDecalDigitalSignature: object = {};

const baseCCSUsrMsgXRankGet: object = {
  modeIdx: 0,
  controller: 0
};

const baseCCSUsrMsgXRankUpd: object = {
  modeIdx: 0,
  controller: 0,
  ranking: 0
};

const baseCCSUsrMsgCallVoteFailed: object = {
  reason: 0,
  time: 0
};

const baseCCSUsrMsgVoteStart: object = {
  team: 0,
  entIdx: 0,
  voteType: 0,
  dispStr: "",
  detailsStr: "",
  otherTeamStr: "",
  isYesNoVote: false,
  entidxTarget: 0
};

const baseCCSUsrMsgVotePass: object = {
  team: 0,
  voteType: 0,
  dispStr: "",
  detailsStr: ""
};

const baseCCSUsrMsgVoteFailed: object = {
  team: 0,
  reason: 0
};

const baseCCSUsrMsgVoteSetup: object = {
  potentialIssues: ""
};

const baseCCSUsrMsgSendLastKillerDamageToClient: object = {
  numHitsGiven: 0,
  damageGiven: 0,
  numHitsTaken: 0,
  damageTaken: 0
};

const baseCCSUsrMsgServerRankUpdate: object = {};

const baseCCSUsrMsgServerRankUpdate_RankUpdate: object = {
  accountId: 0,
  rankOld: 0,
  rankNew: 0,
  numWins: 0,
  rankChange: 0,
  rankTypeId: 0
};

const baseCCSUsrMsgXpUpdate: object = {};

const baseCCSUsrMsgItemPickup: object = {
  item: ""
};

const baseCCSUsrMsgShowMenu: object = {
  bitsValidSlots: 0,
  displayTime: 0,
  menuString: ""
};

const baseCCSUsrMsgBarTime: object = {
  time: ""
};

const baseCCSUsrMsgAmmoDenied: object = {
  ammoIdx: 0
};

const baseCCSUsrMsgMarkAchievement: object = {
  achievement: ""
};

const baseCCSUsrMsgMatchStatsUpdate: object = {
  update: ""
};

const baseCCSUsrMsgItemDrop: object = {
  itemid: Long.ZERO,
  death: false
};

const baseCCSUsrMsgGlowPropTurnOff: object = {
  entidx: 0
};

const baseCCSUsrMsgRoundBackupFilenames: object = {
  count: 0,
  index: 0,
  filename: "",
  nicename: ""
};

const baseCCSUsrMsgSSUI: object = {
  show: false,
  startTime: 0,
  endTime: 0
};

const baseCCSUsrMsgSurvivalStats: object = {
  xuid: Long.UZERO,
  ticknumber: 0
};

const baseCCSUsrMsgSurvivalStats_Fact: object = {
  type: 0,
  display: 0,
  value: 0,
  interestingness: 0
};

const baseCCSUsrMsgSurvivalStats_Placement: object = {
  xuid: Long.UZERO,
  teamnumber: 0,
  placement: 0
};

const baseCCSUsrMsgSurvivalStats_Damage: object = {
  xuid: Long.UZERO,
  to: 0,
  toHits: 0,
  from: 0,
  fromHits: 0
};

const baseCCSUsrMsgEndOfMatchAllPlayersData: object = {
  scene: 0
};

const baseCCSUsrMsgEndOfMatchAllPlayersData_Accolade: object = {
  eaccolade: 0,
  value: 0,
  position: 0
};

const baseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData: object = {
  entindex: 0,
  xuid: Long.UZERO,
  name: "",
  teamnumber: 0,
  playercolor: 0,
  isbot: false
};

const baseCCSUsrMsgRoundImpactScoreData: object = {};

const baseCCSUsrMsgRoundImpactScoreData_RisEvent: object = {
  timestamp: 0,
  terroristOdds: 0,
  ctAlive: 0,
  tAlive: 0
};

const baseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim: object = {
  teamNumber: 0,
  entindex: 0,
  xuid: Long.UZERO,
  color: 0,
  isBot: false,
  isDead: false
};

const baseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective: object = {
  type: 0
};

const baseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage: object = {
  targetEntindex: 0,
  targetXuid: Long.UZERO,
  healthRemoved: 0,
  numHits: 0,
  returnHealthRemoved: 0,
  numReturnHits: 0
};

const baseCCSUsrMsgRoundImpactScoreData_InitialConditions: object = {
  ctEquipValue: 0,
  tEquipValue: 0,
  terroristOdds: 0
};

const baseCCSUsrMsgCurrentRoundOdds: object = {
  odds: 0
};

const baseCCSUsrMsgDeepStats: object = {};

const baseCCSUsrMsgResetHud: object = {
  reset: false
};

const baseCCSUsrMsgGameTitle: object = {
  dummy: 0
};

const baseCCSUsrMsgRequestState: object = {
  dummy: 0
};

const baseCCSUsrMsgStopSpectatorMode: object = {
  dummy: 0
};

const baseCCSUsrMsgDisconnectToLobby: object = {
  dummy: 0
};

const baseCCSUsrMsgWarmupHasEnded: object = {
  dummy: 0
};

const baseCCSUsrMsgClientInfo: object = {
  dummy: 0
};

const baseCCSUsrMsgServerRankRevealAll: object = {
  secondsTillShutdown: 0
};

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
  CS_UM_DeepStats = 81
}

export enum ECSUsrMsgDisconnectToLobbyAction {
  k_ECSUsrMsg_DisconnectToLobby_Action_Default = 0,
  k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue = 1
}

export const CCSUsrMsgVGUIMenu = {
  encode(message: CCSUsrMsgVGUIMenu, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(16).bool(message.show);
    for (const v of message.subkeys) {
      CCSUsrMsgVGUIMenu_Subkey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgVGUIMenu {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgVGUIMenu } as CCSUsrMsgVGUIMenu;
    message.subkeys = [];
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
  }
};

export const CCSUsrMsgVGUIMenu_Subkey = {
  encode(
    message: CCSUsrMsgVGUIMenu_Subkey,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.str);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgVGUIMenu_Subkey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgVGUIMenu_Subkey
    } as CCSUsrMsgVGUIMenu_Subkey;
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
  }
};

export const CCSUsrMsgGeiger = {
  encode(message: CCSUsrMsgGeiger, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.range);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgGeiger {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgGeiger } as CCSUsrMsgGeiger;
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
  }
};

export const CCSUsrMsgTrain = {
  encode(message: CCSUsrMsgTrain, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.train);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgTrain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgTrain } as CCSUsrMsgTrain;
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
  }
};

export const CCSUsrMsgHudText = {
  encode(message: CCSUsrMsgHudText, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgHudText {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgHudText } as CCSUsrMsgHudText;
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

export const CCSUsrMsgSayText = {
  encode(message: CCSUsrMsgSayText, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.entIdx);
    writer.uint32(18).string(message.text);
    writer.uint32(24).bool(message.chat);
    writer.uint32(32).bool(message.textallchat);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgSayText {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgSayText } as CCSUsrMsgSayText;
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
  }
};

export const CCSUsrMsgSayText2 = {
  encode(message: CCSUsrMsgSayText2, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.entIdx);
    writer.uint32(16).bool(message.chat);
    writer.uint32(26).string(message.msgName);
    for (const v of message.params) {
      writer.uint32(34).string(v!);
    }
    writer.uint32(40).bool(message.textallchat);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgSayText2 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgSayText2 } as CCSUsrMsgSayText2;
    message.params = [];
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
  }
};

export const CCSUsrMsgTextMsg = {
  encode(message: CCSUsrMsgTextMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.msgDst);
    for (const v of message.params) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgTextMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgTextMsg } as CCSUsrMsgTextMsg;
    message.params = [];
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
  }
};

export const CCSUsrMsgHudMsg = {
  encode(message: CCSUsrMsgHudMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.channel);
    if (message.pos !== undefined && message.pos !== undefined) {
      CMsgVector2D.encode(message.pos, writer.uint32(18).fork()).ldelim();
    }
    if (message.clr1 !== undefined && message.clr1 !== undefined) {
      CMsgRGBA.encode(message.clr1, writer.uint32(26).fork()).ldelim();
    }
    if (message.clr2 !== undefined && message.clr2 !== undefined) {
      CMsgRGBA.encode(message.clr2, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.effect);
    writer.uint32(53).float(message.fadeInTime);
    writer.uint32(61).float(message.fadeOutTime);
    writer.uint32(77).float(message.holdTime);
    writer.uint32(85).float(message.fxTime);
    writer.uint32(90).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgHudMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgHudMsg } as CCSUsrMsgHudMsg;
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
  }
};

export const CCSUsrMsgShake = {
  encode(message: CCSUsrMsgShake, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.command);
    writer.uint32(21).float(message.localAmplitude);
    writer.uint32(29).float(message.frequency);
    writer.uint32(37).float(message.duration);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgShake {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgShake } as CCSUsrMsgShake;
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
  }
};

export const CCSUsrMsgFade = {
  encode(message: CCSUsrMsgFade, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.duration);
    writer.uint32(16).int32(message.holdTime);
    writer.uint32(24).int32(message.flags);
    if (message.clr !== undefined && message.clr !== undefined) {
      CMsgRGBA.encode(message.clr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgFade {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgFade } as CCSUsrMsgFade;
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
  }
};

export const CCSUsrMsgRumble = {
  encode(message: CCSUsrMsgRumble, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.index);
    writer.uint32(16).int32(message.data);
    writer.uint32(24).int32(message.flags);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgRumble {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgRumble } as CCSUsrMsgRumble;
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
  }
};

export const CCSUsrMsgCloseCaption = {
  encode(
    message: CCSUsrMsgCloseCaption,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.hash);
    writer.uint32(16).int32(message.duration);
    writer.uint32(24).bool(message.fromPlayer);
    writer.uint32(34).string(message.cctoken);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgCloseCaption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgCloseCaption } as CCSUsrMsgCloseCaption;
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
  }
};

export const CCSUsrMsgCloseCaptionDirect = {
  encode(
    message: CCSUsrMsgCloseCaptionDirect,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.hash);
    writer.uint32(16).int32(message.duration);
    writer.uint32(24).bool(message.fromPlayer);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgCloseCaptionDirect {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgCloseCaptionDirect
    } as CCSUsrMsgCloseCaptionDirect;
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
  }
};

export const CCSUsrMsgSendAudio = {
  encode(
    message: CCSUsrMsgSendAudio,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.radioSound);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgSendAudio {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgSendAudio } as CCSUsrMsgSendAudio;
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
  }
};

export const CCSUsrMsgRawAudio = {
  encode(message: CCSUsrMsgRawAudio, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.pitch);
    writer.uint32(16).int32(message.entidx);
    writer.uint32(29).float(message.duration);
    writer.uint32(34).string(message.voiceFilename);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgRawAudio {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgRawAudio } as CCSUsrMsgRawAudio;
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
  }
};

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
    writer.uint32(16).bool(message.playerModEnable);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgVoiceMask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgVoiceMask } as CCSUsrMsgVoiceMask;
    message.playerMasks = [];
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
  }
};

export const CCSUsrMsgVoiceMask_PlayerMask = {
  encode(
    message: CCSUsrMsgVoiceMask_PlayerMask,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.gameRulesMask);
    writer.uint32(16).int32(message.banMasks);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgVoiceMask_PlayerMask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgVoiceMask_PlayerMask
    } as CCSUsrMsgVoiceMask_PlayerMask;
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
  }
};

export const CCSUsrMsgDamage = {
  encode(message: CCSUsrMsgDamage, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.amount);
    if (
      message.inflictorWorldPos !== undefined &&
      message.inflictorWorldPos !== undefined
    ) {
      CMsgVector.encode(
        message.inflictorWorldPos,
        writer.uint32(18).fork()
      ).ldelim();
    }
    writer.uint32(24).int32(message.victimEntindex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgDamage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgDamage } as CCSUsrMsgDamage;
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
  }
};

export const CCSUsrMsgRadioText = {
  encode(
    message: CCSUsrMsgRadioText,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.msgDst);
    writer.uint32(16).int32(message.client);
    writer.uint32(26).string(message.msgName);
    for (const v of message.params) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgRadioText {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgRadioText } as CCSUsrMsgRadioText;
    message.params = [];
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
  }
};

export const CCSUsrMsgHintText = {
  encode(message: CCSUsrMsgHintText, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgHintText {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgHintText } as CCSUsrMsgHintText;
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
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgKeyHintText {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgKeyHintText } as CCSUsrMsgKeyHintText;
    message.hints = [];
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
  }
};

export const CCSUsrMsgProcessSpottedEntityUpdate = {
  encode(
    message: CCSUsrMsgProcessSpottedEntityUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.newUpdate);
    for (const v of message.entityUpdates) {
      CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgProcessSpottedEntityUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgProcessSpottedEntityUpdate
    } as CCSUsrMsgProcessSpottedEntityUpdate;
    message.entityUpdates = [];
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
  }
};

export const CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = {
  encode(
    message: CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entityIdx);
    writer.uint32(16).int32(message.classId);
    writer.uint32(24).int32(message.originX);
    writer.uint32(32).int32(message.originY);
    writer.uint32(40).int32(message.originZ);
    writer.uint32(48).int32(message.angleY);
    writer.uint32(56).bool(message.defuser);
    writer.uint32(64).bool(message.playerHasDefuser);
    writer.uint32(72).bool(message.playerHasC4);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate
    } as CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate;
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgSendPlayerItemDrops {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgSendPlayerItemDrops
    } as CCSUsrMsgSendPlayerItemDrops;
    message.entityUpdates = [];
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
  }
};

export const CCSUsrMsgSendPlayerItemFound = {
  encode(
    message: CCSUsrMsgSendPlayerItemFound,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined && message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    writer.uint32(16).int32(message.entindex);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgSendPlayerItemFound {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgSendPlayerItemFound
    } as CCSUsrMsgSendPlayerItemFound;
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
  }
};

export const CCSUsrMsgReloadEffect = {
  encode(
    message: CCSUsrMsgReloadEffect,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entidx);
    writer.uint32(16).int32(message.actanim);
    writer.uint32(29).float(message.originX);
    writer.uint32(37).float(message.originY);
    writer.uint32(45).float(message.originZ);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgReloadEffect {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgReloadEffect } as CCSUsrMsgReloadEffect;
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
  }
};

export const CCSUsrMsgWeaponSound = {
  encode(
    message: CCSUsrMsgWeaponSound,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entidx);
    writer.uint32(21).float(message.originX);
    writer.uint32(29).float(message.originY);
    writer.uint32(37).float(message.originZ);
    writer.uint32(42).string(message.sound);
    writer.uint32(53).float(message.timestamp);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgWeaponSound {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgWeaponSound } as CCSUsrMsgWeaponSound;
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
  }
};

export const CCSUsrMsgUpdateScreenHealthBar = {
  encode(
    message: CCSUsrMsgUpdateScreenHealthBar,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entidx);
    writer.uint32(21).float(message.healthratioOld);
    writer.uint32(29).float(message.healthratioNew);
    writer.uint32(32).int32(message.style);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgUpdateScreenHealthBar {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgUpdateScreenHealthBar
    } as CCSUsrMsgUpdateScreenHealthBar;
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
  }
};

export const CCSUsrMsgEntityOutlineHighlight = {
  encode(
    message: CCSUsrMsgEntityOutlineHighlight,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entidx);
    writer.uint32(16).bool(message.removehighlight);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgEntityOutlineHighlight {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgEntityOutlineHighlight
    } as CCSUsrMsgEntityOutlineHighlight;
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
  }
};

export const CCSUsrMsgAdjustMoney = {
  encode(
    message: CCSUsrMsgAdjustMoney,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.amount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgAdjustMoney {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgAdjustMoney } as CCSUsrMsgAdjustMoney;
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
  }
};

export const CCSUsrMsgReportHit = {
  encode(
    message: CCSUsrMsgReportHit,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(13).float(message.posX);
    writer.uint32(21).float(message.posY);
    writer.uint32(37).float(message.timestamp);
    writer.uint32(29).float(message.posZ);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgReportHit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgReportHit } as CCSUsrMsgReportHit;
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
  }
};

export const CCSUsrMsgKillCam = {
  encode(message: CCSUsrMsgKillCam, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.obsMode);
    writer.uint32(16).int32(message.firstTarget);
    writer.uint32(24).int32(message.secondTarget);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgKillCam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgKillCam } as CCSUsrMsgKillCam;
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
  }
};

export const CCSUsrMsgDesiredTimescale = {
  encode(
    message: CCSUsrMsgDesiredTimescale,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(13).float(message.desiredTimescale);
    writer.uint32(21).float(message.durationRealtimeSec);
    writer.uint32(24).int32(message.interpolatorType);
    writer.uint32(37).float(message.startBlendTime);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgDesiredTimescale {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgDesiredTimescale
    } as CCSUsrMsgDesiredTimescale;
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
  }
};

export const CCSUsrMsgCurrentTimescale = {
  encode(
    message: CCSUsrMsgCurrentTimescale,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(13).float(message.curTimescale);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgCurrentTimescale {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgCurrentTimescale
    } as CCSUsrMsgCurrentTimescale;
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
  }
};

export const CCSUsrMsgAchievementEvent = {
  encode(
    message: CCSUsrMsgAchievementEvent,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.achievement);
    writer.uint32(16).int32(message.count);
    writer.uint32(24).int32(message.userId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgAchievementEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgAchievementEvent
    } as CCSUsrMsgAchievementEvent;
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
  }
};

export const CCSUsrMsgMatchEndConditions = {
  encode(
    message: CCSUsrMsgMatchEndConditions,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.fraglimit);
    writer.uint32(16).int32(message.mpMaxrounds);
    writer.uint32(24).int32(message.mpWinlimit);
    writer.uint32(32).int32(message.mpTimelimit);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgMatchEndConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgMatchEndConditions
    } as CCSUsrMsgMatchEndConditions;
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
  }
};

export const CCSUsrMsgPlayerStatsUpdate = {
  encode(
    message: CCSUsrMsgPlayerStatsUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.version);
    for (const v of message.stats) {
      CCSUsrMsgPlayerStatsUpdate_Stat.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    writer.uint32(40).int32(message.userId);
    writer.uint32(48).int32(message.crc);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgPlayerStatsUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgPlayerStatsUpdate
    } as CCSUsrMsgPlayerStatsUpdate;
    message.stats = [];
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
  }
};

export const CCSUsrMsgPlayerStatsUpdate_Stat = {
  encode(
    message: CCSUsrMsgPlayerStatsUpdate_Stat,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.idx);
    writer.uint32(16).int32(message.delta);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgPlayerStatsUpdate_Stat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgPlayerStatsUpdate_Stat
    } as CCSUsrMsgPlayerStatsUpdate_Stat;
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
  }
};

export const CCSUsrMsgDisplayInventory = {
  encode(
    message: CCSUsrMsgDisplayInventory,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.display);
    writer.uint32(16).int32(message.userId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgDisplayInventory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgDisplayInventory
    } as CCSUsrMsgDisplayInventory;
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
  }
};

export const CCSUsrMsgQuestProgress = {
  encode(
    message: CCSUsrMsgQuestProgress,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.questId);
    writer.uint32(16).uint32(message.normalPoints);
    writer.uint32(24).uint32(message.bonusPoints);
    writer.uint32(32).bool(message.isEventQuest);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgQuestProgress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgQuestProgress } as CCSUsrMsgQuestProgress;
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
  }
};

export const CCSUsrMsgScoreLeaderboardData = {
  encode(
    message: CCSUsrMsgScoreLeaderboardData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined && message.data !== undefined) {
      ScoreLeaderboardData.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgScoreLeaderboardData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgScoreLeaderboardData
    } as CCSUsrMsgScoreLeaderboardData;
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
  }
};

export const CCSUsrMsgPlayerDecalDigitalSignature = {
  encode(
    message: CCSUsrMsgPlayerDecalDigitalSignature,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined && message.data !== undefined) {
      PlayerDecalDigitalSignature.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgPlayerDecalDigitalSignature {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgPlayerDecalDigitalSignature
    } as CCSUsrMsgPlayerDecalDigitalSignature;
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
  }
};

export const CCSUsrMsgXRankGet = {
  encode(message: CCSUsrMsgXRankGet, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.modeIdx);
    writer.uint32(16).int32(message.controller);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgXRankGet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgXRankGet } as CCSUsrMsgXRankGet;
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
  }
};

export const CCSUsrMsgXRankUpd = {
  encode(message: CCSUsrMsgXRankUpd, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.modeIdx);
    writer.uint32(16).int32(message.controller);
    writer.uint32(24).int32(message.ranking);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgXRankUpd {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgXRankUpd } as CCSUsrMsgXRankUpd;
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
  }
};

export const CCSUsrMsgCallVoteFailed = {
  encode(
    message: CCSUsrMsgCallVoteFailed,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.reason);
    writer.uint32(16).int32(message.time);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgCallVoteFailed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgCallVoteFailed
    } as CCSUsrMsgCallVoteFailed;
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
  }
};

export const CCSUsrMsgVoteStart = {
  encode(
    message: CCSUsrMsgVoteStart,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.team);
    writer.uint32(16).int32(message.entIdx);
    writer.uint32(24).int32(message.voteType);
    writer.uint32(34).string(message.dispStr);
    writer.uint32(42).string(message.detailsStr);
    writer.uint32(50).string(message.otherTeamStr);
    writer.uint32(56).bool(message.isYesNoVote);
    writer.uint32(64).int32(message.entidxTarget);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgVoteStart {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgVoteStart } as CCSUsrMsgVoteStart;
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
  }
};

export const CCSUsrMsgVotePass = {
  encode(message: CCSUsrMsgVotePass, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.team);
    writer.uint32(16).int32(message.voteType);
    writer.uint32(26).string(message.dispStr);
    writer.uint32(34).string(message.detailsStr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgVotePass {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgVotePass } as CCSUsrMsgVotePass;
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
  }
};

export const CCSUsrMsgVoteFailed = {
  encode(
    message: CCSUsrMsgVoteFailed,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.team);
    writer.uint32(16).int32(message.reason);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgVoteFailed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgVoteFailed } as CCSUsrMsgVoteFailed;
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
  }
};

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
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgVoteSetup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgVoteSetup } as CCSUsrMsgVoteSetup;
    message.potentialIssues = [];
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
  }
};

export const CCSUsrMsgSendLastKillerDamageToClient = {
  encode(
    message: CCSUsrMsgSendLastKillerDamageToClient,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.numHitsGiven);
    writer.uint32(16).int32(message.damageGiven);
    writer.uint32(24).int32(message.numHitsTaken);
    writer.uint32(32).int32(message.damageTaken);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgSendLastKillerDamageToClient {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgSendLastKillerDamageToClient
    } as CCSUsrMsgSendLastKillerDamageToClient;
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgServerRankUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgServerRankUpdate
    } as CCSUsrMsgServerRankUpdate;
    message.rankUpdate = [];
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
  }
};

export const CCSUsrMsgServerRankUpdate_RankUpdate = {
  encode(
    message: CCSUsrMsgServerRankUpdate_RankUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.accountId);
    writer.uint32(16).int32(message.rankOld);
    writer.uint32(24).int32(message.rankNew);
    writer.uint32(32).int32(message.numWins);
    writer.uint32(45).float(message.rankChange);
    writer.uint32(48).int32(message.rankTypeId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgServerRankUpdate_RankUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgServerRankUpdate_RankUpdate
    } as CCSUsrMsgServerRankUpdate_RankUpdate;
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
  }
};

export const CCSUsrMsgXpUpdate = {
  encode(message: CCSUsrMsgXpUpdate, writer: Writer = Writer.create()): Writer {
    if (message.data !== undefined && message.data !== undefined) {
      CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgXpUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgXpUpdate } as CCSUsrMsgXpUpdate;
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
  }
};

export const CCSUsrMsgItemPickup = {
  encode(
    message: CCSUsrMsgItemPickup,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.item);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgItemPickup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgItemPickup } as CCSUsrMsgItemPickup;
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
  }
};

export const CCSUsrMsgShowMenu = {
  encode(message: CCSUsrMsgShowMenu, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.bitsValidSlots);
    writer.uint32(16).int32(message.displayTime);
    writer.uint32(26).string(message.menuString);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgShowMenu {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgShowMenu } as CCSUsrMsgShowMenu;
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
  }
};

export const CCSUsrMsgBarTime = {
  encode(message: CCSUsrMsgBarTime, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.time);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgBarTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgBarTime } as CCSUsrMsgBarTime;
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
  }
};

export const CCSUsrMsgAmmoDenied = {
  encode(
    message: CCSUsrMsgAmmoDenied,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.ammoIdx);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgAmmoDenied {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgAmmoDenied } as CCSUsrMsgAmmoDenied;
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
  }
};

export const CCSUsrMsgMarkAchievement = {
  encode(
    message: CCSUsrMsgMarkAchievement,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.achievement);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgMarkAchievement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgMarkAchievement
    } as CCSUsrMsgMarkAchievement;
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
  }
};

export const CCSUsrMsgMatchStatsUpdate = {
  encode(
    message: CCSUsrMsgMatchStatsUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.update);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgMatchStatsUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgMatchStatsUpdate
    } as CCSUsrMsgMatchStatsUpdate;
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
  }
};

export const CCSUsrMsgItemDrop = {
  encode(message: CCSUsrMsgItemDrop, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.itemid);
    writer.uint32(16).bool(message.death);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgItemDrop {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgItemDrop } as CCSUsrMsgItemDrop;
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
  }
};

export const CCSUsrMsgGlowPropTurnOff = {
  encode(
    message: CCSUsrMsgGlowPropTurnOff,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entidx);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgGlowPropTurnOff {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgGlowPropTurnOff
    } as CCSUsrMsgGlowPropTurnOff;
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
  }
};

export const CCSUsrMsgRoundBackupFilenames = {
  encode(
    message: CCSUsrMsgRoundBackupFilenames,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.count);
    writer.uint32(16).int32(message.index);
    writer.uint32(26).string(message.filename);
    writer.uint32(34).string(message.nicename);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundBackupFilenames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundBackupFilenames
    } as CCSUsrMsgRoundBackupFilenames;
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
  }
};

export const CCSUsrMsgSSUI = {
  encode(message: CCSUsrMsgSSUI, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.show);
    writer.uint32(21).float(message.startTime);
    writer.uint32(29).float(message.endTime);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgSSUI {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgSSUI } as CCSUsrMsgSSUI;
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
  }
};

export const CCSUsrMsgSurvivalStats = {
  encode(
    message: CCSUsrMsgSurvivalStats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.xuid);
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
    writer.uint32(32).int32(message.ticknumber);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgSurvivalStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgSurvivalStats } as CCSUsrMsgSurvivalStats;
    message.facts = [];
    message.users = [];
    message.damages = [];
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
  }
};

export const CCSUsrMsgSurvivalStats_Fact = {
  encode(
    message: CCSUsrMsgSurvivalStats_Fact,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(16).int32(message.display);
    writer.uint32(24).int32(message.value);
    writer.uint32(37).float(message.interestingness);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgSurvivalStats_Fact {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgSurvivalStats_Fact
    } as CCSUsrMsgSurvivalStats_Fact;
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
  }
};

export const CCSUsrMsgSurvivalStats_Placement = {
  encode(
    message: CCSUsrMsgSurvivalStats_Placement,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.xuid);
    writer.uint32(16).int32(message.teamnumber);
    writer.uint32(24).int32(message.placement);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgSurvivalStats_Placement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgSurvivalStats_Placement
    } as CCSUsrMsgSurvivalStats_Placement;
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
  }
};

export const CCSUsrMsgSurvivalStats_Damage = {
  encode(
    message: CCSUsrMsgSurvivalStats_Damage,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.xuid);
    writer.uint32(16).int32(message.to);
    writer.uint32(24).int32(message.toHits);
    writer.uint32(32).int32(message.from);
    writer.uint32(40).int32(message.fromHits);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgSurvivalStats_Damage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgSurvivalStats_Damage
    } as CCSUsrMsgSurvivalStats_Damage;
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
  }
};

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
    writer.uint32(16).int32(message.scene);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgEndOfMatchAllPlayersData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgEndOfMatchAllPlayersData
    } as CCSUsrMsgEndOfMatchAllPlayersData;
    message.allplayerdata = [];
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
  }
};

export const CCSUsrMsgEndOfMatchAllPlayersData_Accolade = {
  encode(
    message: CCSUsrMsgEndOfMatchAllPlayersData_Accolade,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eaccolade);
    writer.uint32(21).float(message.value);
    writer.uint32(24).int32(message.position);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgEndOfMatchAllPlayersData_Accolade {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgEndOfMatchAllPlayersData_Accolade
    } as CCSUsrMsgEndOfMatchAllPlayersData_Accolade;
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
  }
};

export const CCSUsrMsgEndOfMatchAllPlayersData_PlayerData = {
  encode(
    message: CCSUsrMsgEndOfMatchAllPlayersData_PlayerData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.entindex);
    writer.uint32(16).uint64(message.xuid);
    writer.uint32(26).string(message.name);
    writer.uint32(32).int32(message.teamnumber);
    if (message.nomination !== undefined && message.nomination !== undefined) {
      CCSUsrMsgEndOfMatchAllPlayersData_Accolade.encode(
        message.nomination,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.items) {
      CEconItemPreviewDataBlock.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).int32(message.playercolor);
    writer.uint32(64).bool(message.isbot);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData
    } as CCSUsrMsgEndOfMatchAllPlayersData_PlayerData;
    message.items = [];
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
          message.nomination = CCSUsrMsgEndOfMatchAllPlayersData_Accolade.decode(
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
  }
};

export const CCSUsrMsgRoundImpactScoreData = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData,
    writer: Writer = Writer.create()
  ): Writer {
    if (
      message.initConditions !== undefined &&
      message.initConditions !== undefined
    ) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundImpactScoreData
    } as CCSUsrMsgRoundImpactScoreData;
    message.allRisEventData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initConditions = CCSUsrMsgRoundImpactScoreData_InitialConditions.decode(
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
  }
};

export const CCSUsrMsgRoundImpactScoreData_RisEvent = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(13).float(message.timestamp);
    writer.uint32(16).int32(message.terroristOdds);
    writer.uint32(24).int32(message.ctAlive);
    writer.uint32(32).int32(message.tAlive);
    if (message.victimData !== undefined && message.victimData !== undefined) {
      CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.encode(
        message.victimData,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (
      message.objectiveData !== undefined &&
      message.objectiveData !== undefined
    ) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundImpactScoreData_RisEvent
    } as CCSUsrMsgRoundImpactScoreData_RisEvent;
    message.allDamageData = [];
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
          message.victimData = CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.objectiveData = CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.decode(
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
  }
};

export const CCSUsrMsgRoundImpactScoreData_RisEvent_Victim = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent_Victim,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.teamNumber);
    writer.uint32(16).int32(message.entindex);
    writer.uint32(24).uint64(message.xuid);
    writer.uint32(32).int32(message.color);
    writer.uint32(40).bool(message.isBot);
    writer.uint32(48).bool(message.isDead);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim
    } as CCSUsrMsgRoundImpactScoreData_RisEvent_Victim;
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
  }
};

export const CCSUsrMsgRoundImpactScoreData_RisEvent_Objective = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent_Objective,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.type);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective
    } as CCSUsrMsgRoundImpactScoreData_RisEvent_Objective;
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
  }
};

export const CCSUsrMsgRoundImpactScoreData_RisEvent_Damage = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_RisEvent_Damage,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.targetEntindex);
    writer.uint32(16).uint64(message.targetXuid);
    writer.uint32(24).int32(message.healthRemoved);
    writer.uint32(32).int32(message.numHits);
    writer.uint32(40).int32(message.returnHealthRemoved);
    writer.uint32(48).int32(message.numReturnHits);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage
    } as CCSUsrMsgRoundImpactScoreData_RisEvent_Damage;
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
  }
};

export const CCSUsrMsgRoundImpactScoreData_InitialConditions = {
  encode(
    message: CCSUsrMsgRoundImpactScoreData_InitialConditions,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.ctEquipValue);
    writer.uint32(16).int32(message.tEquipValue);
    writer.uint32(24).int32(message.terroristOdds);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgRoundImpactScoreData_InitialConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgRoundImpactScoreData_InitialConditions
    } as CCSUsrMsgRoundImpactScoreData_InitialConditions;
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
  }
};

export const CCSUsrMsgCurrentRoundOdds = {
  encode(
    message: CCSUsrMsgCurrentRoundOdds,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.odds);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgCurrentRoundOdds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgCurrentRoundOdds
    } as CCSUsrMsgCurrentRoundOdds;
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
  }
};

export const CCSUsrMsgDeepStats = {
  encode(
    message: CCSUsrMsgDeepStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.stats !== undefined && message.stats !== undefined) {
      CMsgGCCStrike15ClientDeepStats.encode(
        message.stats,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgDeepStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgDeepStats } as CCSUsrMsgDeepStats;
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
  }
};

export const CCSUsrMsgResetHud = {
  encode(message: CCSUsrMsgResetHud, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.reset);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgResetHud {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgResetHud } as CCSUsrMsgResetHud;
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
  }
};

export const CCSUsrMsgGameTitle = {
  encode(
    message: CCSUsrMsgGameTitle,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.dummy);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgGameTitle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgGameTitle } as CCSUsrMsgGameTitle;
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
  }
};

export const CCSUsrMsgRequestState = {
  encode(
    message: CCSUsrMsgRequestState,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.dummy);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgRequestState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgRequestState } as CCSUsrMsgRequestState;
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
  }
};

export const CCSUsrMsgStopSpectatorMode = {
  encode(
    message: CCSUsrMsgStopSpectatorMode,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.dummy);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgStopSpectatorMode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgStopSpectatorMode
    } as CCSUsrMsgStopSpectatorMode;
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
  }
};

export const CCSUsrMsgDisconnectToLobby = {
  encode(
    message: CCSUsrMsgDisconnectToLobby,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.dummy);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgDisconnectToLobby {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgDisconnectToLobby
    } as CCSUsrMsgDisconnectToLobby;
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
  }
};

export const CCSUsrMsgWarmupHasEnded = {
  encode(
    message: CCSUsrMsgWarmupHasEnded,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.dummy);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgWarmupHasEnded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgWarmupHasEnded
    } as CCSUsrMsgWarmupHasEnded;
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
  }
};

export const CCSUsrMsgClientInfo = {
  encode(
    message: CCSUsrMsgClientInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.dummy);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CCSUsrMsgClientInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCCSUsrMsgClientInfo } as CCSUsrMsgClientInfo;
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
  }
};

export const CCSUsrMsgServerRankRevealAll = {
  encode(
    message: CCSUsrMsgServerRankRevealAll,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.secondsTillShutdown);
    if (
      message.reservation !== undefined &&
      message.reservation !== undefined
    ) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CCSUsrMsgServerRankRevealAll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCCSUsrMsgServerRankRevealAll
    } as CCSUsrMsgServerRankRevealAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsTillShutdown = reader.int32();
          break;
        case 2:
          message.reservation = CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
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
  }
};
