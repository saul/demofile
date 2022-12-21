/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { CEngineGotvSyncPacket } from "./engine_gcmessages";

export const protobufPackage = "";

export enum ECsgoGCMsg {
  k_EMsgGCCStrike15_v2_Base = 9100,
  k_EMsgGCCStrike15_v2_MatchmakingStart = 9101,
  k_EMsgGCCStrike15_v2_MatchmakingStop = 9102,
  k_EMsgGCCStrike15_v2_MatchmakingClient2ServerPing = 9103,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate = 9104,
  k_EMsgGCCStrike15_v2_MatchmakingServerReservationResponse = 9106,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientReserve = 9107,
  k_EMsgGCCStrike15_v2_MatchmakingClient2GCHello = 9109,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientHello = 9110,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon = 9112,
  k_EMsgGCCStrike15_v2_MatchmakingGCOperationalStats = 9115,
  k_EMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate = 9117,
  k_EMsgGCCStrike15_v2_ServerNotificationForUserPenalty = 9118,
  k_EMsgGCCStrike15_v2_ClientReportPlayer = 9119,
  k_EMsgGCCStrike15_v2_ClientReportServer = 9120,
  k_EMsgGCCStrike15_v2_ClientCommendPlayer = 9121,
  k_EMsgGCCStrike15_v2_ClientReportResponse = 9122,
  k_EMsgGCCStrike15_v2_ClientCommendPlayerQuery = 9123,
  k_EMsgGCCStrike15_v2_ClientCommendPlayerQueryResponse = 9124,
  k_EMsgGCCStrike15_v2_WatchInfoUsers = 9126,
  k_EMsgGCCStrike15_v2_ClientRequestPlayersProfile = 9127,
  k_EMsgGCCStrike15_v2_PlayersProfile = 9128,
  k_EMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate = 9131,
  k_EMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment = 9132,
  k_EMsgGCCStrike15_v2_PlayerOverwatchCaseStatus = 9133,
  k_EMsgGCCStrike15_v2_GC2ClientTextMsg = 9134,
  k_EMsgGCCStrike15_v2_Client2GCTextMsg = 9135,
  k_EMsgGCCStrike15_v2_MatchEndRunRewardDrops = 9136,
  k_EMsgGCCStrike15_v2_MatchEndRewardDropsNotification = 9137,
  k_EMsgGCCStrike15_v2_ClientRequestWatchInfoFriends2 = 9138,
  k_EMsgGCCStrike15_v2_MatchList = 9139,
  k_EMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames = 9140,
  k_EMsgGCCStrike15_v2_MatchListRequestRecentUserGames = 9141,
  k_EMsgGCCStrike15_v2_GC2ServerReservationUpdate = 9142,
  k_EMsgGCCStrike15_v2_ClientVarValueNotificationInfo = 9144,
  k_EMsgGCCStrike15_v2_MatchListRequestTournamentGames = 9146,
  k_EMsgGCCStrike15_v2_MatchListRequestFullGameInfo = 9147,
  k_EMsgGCCStrike15_v2_GiftsLeaderboardRequest = 9148,
  k_EMsgGCCStrike15_v2_GiftsLeaderboardResponse = 9149,
  k_EMsgGCCStrike15_v2_ServerVarValueNotificationInfo = 9150,
  k_EMsgGCCStrike15_v2_ClientSubmitSurveyVote = 9152,
  k_EMsgGCCStrike15_v2_Server2GCClientValidate = 9153,
  k_EMsgGCCStrike15_v2_MatchListRequestLiveGameForUser = 9154,
  k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest = 9156,
  k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse = 9157,
  k_EMsgGCCStrike15_v2_AccountPrivacySettings = 9158,
  k_EMsgGCCStrike15_v2_SetMyActivityInfo = 9159,
  k_EMsgGCCStrike15_v2_MatchListRequestTournamentPredictions = 9160,
  k_EMsgGCCStrike15_v2_MatchListUploadTournamentPredictions = 9161,
  k_EMsgGCCStrike15_v2_DraftSummary = 9162,
  k_EMsgGCCStrike15_v2_ClientRequestJoinFriendData = 9163,
  k_EMsgGCCStrike15_v2_ClientRequestJoinServerData = 9164,
  k_EMsgGCCStrike15_v2_ClientRequestNewMission = 9165,
  k_EMsgGCCStrike15_v2_GC2ClientTournamentInfo = 9167,
  k_EMsgGC_GlobalGame_Subscribe = 9168,
  k_EMsgGC_GlobalGame_Unsubscribe = 9169,
  k_EMsgGC_GlobalGame_Play = 9170,
  k_EMsgGCCStrike15_v2_AcknowledgePenalty = 9171,
  k_EMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin = 9172,
  k_EMsgGCCStrike15_v2_GC2ClientGlobalStats = 9173,
  k_EMsgGCCStrike15_v2_Client2GCStreamUnlock = 9174,
  k_EMsgGCCStrike15_v2_FantasyRequestClientData = 9175,
  k_EMsgGCCStrike15_v2_FantasyUpdateClientData = 9176,
  k_EMsgGCCStrike15_v2_GCToClientSteamdatagramTicket = 9177,
  k_EMsgGCCStrike15_v2_ClientToGCRequestTicket = 9178,
  k_EMsgGCCStrike15_v2_ClientToGCRequestElevate = 9179,
  k_EMsgGCCStrike15_v2_GlobalChat = 9180,
  k_EMsgGCCStrike15_v2_GlobalChat_Subscribe = 9181,
  k_EMsgGCCStrike15_v2_GlobalChat_Unsubscribe = 9182,
  k_EMsgGCCStrike15_v2_ClientAuthKeyCode = 9183,
  k_EMsgGCCStrike15_v2_GotvSyncPacket = 9184,
  k_EMsgGCCStrike15_v2_ClientPlayerDecalSign = 9185,
  k_EMsgGCCStrike15_v2_ClientLogonFatalError = 9187,
  k_EMsgGCCStrike15_v2_ClientPollState = 9188,
  k_EMsgGCCStrike15_v2_Party_Register = 9189,
  k_EMsgGCCStrike15_v2_Party_Unregister = 9190,
  k_EMsgGCCStrike15_v2_Party_Search = 9191,
  k_EMsgGCCStrike15_v2_Party_Invite = 9192,
  k_EMsgGCCStrike15_v2_Account_RequestCoPlays = 9193,
  k_EMsgGCCStrike15_v2_ClientGCRankUpdate = 9194,
  k_EMsgGCCStrike15_v2_ClientRequestOffers = 9195,
  k_EMsgGCCStrike15_v2_ClientAccountBalance = 9196,
  k_EMsgGCCStrike15_v2_ClientPartyJoinRelay = 9197,
  k_EMsgGCCStrike15_v2_ClientPartyWarning = 9198,
  k_EMsgGCCStrike15_v2_SetEventFavorite = 9200,
  k_EMsgGCCStrike15_v2_GetEventFavorites_Request = 9201,
  k_EMsgGCCStrike15_v2_ClientPerfReport = 9202,
  k_EMsgGCCStrike15_v2_GetEventFavorites_Response = 9203,
  k_EMsgGCCStrike15_v2_ClientRequestSouvenir = 9204,
  k_EMsgGCCStrike15_v2_ClientReportValidation = 9205,
  k_EMsgGCCStrike15_v2_GC2ClientRefuseSecureMode = 9206,
  k_EMsgGCCStrike15_v2_GC2ClientRequestValidation = 9207,
  k_EMsgGCCStrike15_v2_ClientRedeemMissionReward = 9209,
  k_EMsgGCCStrike15_ClientDeepStats = 9210,
  k_EMsgGCCStrike15_StartAgreementSessionInGame = 9211,
  k_EMsgGCCStrike15_v2_GC2ClientInitSystem = 9212,
  k_EMsgGCCStrike15_v2_GC2ClientInitSystem_Response = 9213,
  k_EMsgGCCStrike15_v2_PrivateQueues = 9214,
  k_EMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt = 9215
}

export enum ECsgoSteamUserStat {
  k_ECsgoSteamUserStat_XpEarnedGames = 1,
  k_ECsgoSteamUserStat_MatchWinsCompetitive = 2,
  k_ECsgoSteamUserStat_SurvivedDangerZone = 3
}

export enum EClientReportingVersion {
  k_EClientReportingVersion_OldVersion = 0,
  k_EClientReportingVersion_BetaVersion = 1,
  k_EClientReportingVersion_SupportsTrustedMode = 2
}

export enum EInitSystemResult {
  k_EInitSystemResult_Invalid = 0,
  k_EInitSystemResult_Success = 1,
  k_EInitSystemResult_None = 2,
  k_EInitSystemResult_NotFound = 3,
  k_EInitSystemResult_Existing = 4,
  k_EInitSystemResult_FailedOpen = 5,
  k_EInitSystemResult_Mismatch = 6,
  k_EInitSystemResult_FailedInit = 7,
  k_EInitSystemResult_Max = 8
}

export interface GameServerPing {
  ping: number;
  ip: number;
  instances: number;
}

export interface DataCenterPing {
  dataCenterId: number;
  ping: number;
}

export interface DetailedSearchStatistic {
  gameType: number;
  searchTimeAvg: number;
  playersSearching: number;
}

export interface TournamentPlayer {
  accountId: number;
  playerNick: string;
  playerName: string;
  playerDob: number;
  playerFlag: string;
  playerLocation: string;
  playerDesc: string;
}

export interface TournamentTeam {
  teamId: number;
  teamTag: string;
  teamFlag: string;
  teamName: string;
  players: TournamentPlayer[];
}

export interface TournamentEvent {
  eventId: number;
  eventTag: string;
  eventName: string;
  eventTimeStart: number;
  eventTimeEnd: number;
  eventPublic: number;
  eventStageId: number;
  eventStageName: string;
  activeSectionId: number;
}

export interface GlobalStatistics {
  playersOnline: number;
  serversOnline: number;
  playersSearching: number;
  serversAvailable: number;
  ongoingMatches: number;
  searchTimeAvg: number;
  searchStatistics: DetailedSearchStatistic[];
  mainPostUrl: string;
  requiredAppidVersion: number;
  pricesheetVersion: number;
  twitchStreamsVersion: number;
  activeTournamentEventid: number;
  activeSurveyId: number;
  rtime32Cur: number;
  rtime32EventStart: number;
}

export interface OperationalStatisticDescription {
  name: string;
  idkey: number;
}

export interface OperationalStatisticElement {
  idkey: number;
  values: number[];
}

export interface OperationalStatisticsPacket {
  packetid: number;
  mstimestamp: number;
  values: OperationalStatisticElement[];
}

export interface PlayerRankingInfo {
  accountId: number;
  rankId: number;
  wins: number;
  rankChange: number;
  rankTypeId: number;
  tvControl: number;
}

export interface PlayerCommendationInfo {
  cmdFriendly: number;
  cmdTeaching: number;
  cmdLeader: number;
}

export interface PlayerMedalsInfo {
  displayItemsDefidx: number[];
  featuredDisplayItemDefidx: number;
}

export interface AccountActivity {
  activity: number;
  mode: number;
  map: number;
  matchid: Long;
}

export interface TournamentMatchSetup {
  eventId: number;
  teamIdCt: number;
  teamIdT: number;
  eventStageId: number;
}

export interface ServerHltvInfo {
  tvUdpPort: number;
  tvWatchKey: Long;
  tvSlots: number;
  tvClients: number;
  tvProxies: number;
  tvTime: number;
  gameType: number;
  gameMapgroup: string;
  gameMap: string;
  tvMasterSteamid: Long;
  tvLocalSlots: number;
  tvLocalClients: number;
  tvLocalProxies: number;
  tvRelaySlots: number;
  tvRelayClients: number;
  tvRelayProxies: number;
  tvRelayAddress: number;
  tvRelayPort: number;
  tvRelaySteamid: Long;
  flags: number;
}

export interface IpAddressMask {
  a: number;
  b: number;
  c: number;
  d: number;
  bits: number;
  token: number;
}

export interface CMsgCsgoSteamUserStatChange {
  ecsgosteamuserstat: number;
  delta: number;
  absolute: boolean;
}

export interface XpProgressData {
  xpPoints: number;
  xpCategory: number;
}

export interface MatchEndItemUpdates {
  itemId: Long;
  itemAttrDefidx: number;
  itemAttrDeltaValue: number;
}

export interface ScoreLeaderboardData {
  questId: Long;
  score: number;
  accountentries: ScoreLeaderboardData_AccountEntries[];
  matchentries: ScoreLeaderboardData_Entry[];
}

export interface ScoreLeaderboardData_Entry {
  tag: number;
  val: number;
}

export interface ScoreLeaderboardData_AccountEntries {
  accountid: number;
  entries: ScoreLeaderboardData_Entry[];
}

export interface PlayerQuestData {
  questerAccountId: number;
  questItemData: PlayerQuestData_QuestItemData[];
  xpProgressData: XpProgressData[];
  timePlayed: number;
  mmGameMode: number;
  itemUpdates: MatchEndItemUpdates[];
  operationPointsEligible: boolean;
  userstatchanges: CMsgCsgoSteamUserStatChange[];
}

export interface PlayerQuestData_QuestItemData {
  questId: Long;
  questNormalPointsEarned: number;
  questBonusPointsEarned: number;
}

export interface DeepPlayerStatsEntry {
  accountid: number;
  matchId: Long;
  mmGameMode: number;
  mapid: number;
  bStartingCt: boolean;
  matchOutcome: number;
  roundsWon: number;
  roundsLost: number;
  statScore: number;
  statDeaths: number;
  statMvps: number;
  enemyKills: number;
  enemyHeadshots: number;
  enemy2ks: number;
  enemy3ks: number;
  enemy4ks: number;
  totalDamage: number;
  engagementsEntryCount: number;
  engagementsEntryWins: number;
  engagements1v1Count: number;
  engagements1v1Wins: number;
  engagements1v2Count: number;
  engagements1v2Wins: number;
  utilityCount: number;
  utilitySuccess: number;
  flashCount: number;
  flashSuccess: number;
  mates: number[];
}

export interface DeepPlayerMatchEvent {
  accountid: number;
  matchId: Long;
  eventId: number;
  eventType: number;
  bPlayingCt: boolean;
  userPosX: number;
  userPosY: number;
  userPosZ: number;
  userDefidx: number;
  otherPosX: number;
  otherPosY: number;
  otherPosZ: number;
  otherDefidx: number;
  eventData: number;
}

export interface CMsgGCServerQuestUpdateData {
  playerQuestData: PlayerQuestData[];
  binaryData: Uint8Array;
  mmGameMode: number;
  missionlbsdata: ScoreLeaderboardData | undefined;
}

export interface CMsgGCCStrike15V2MatchmakingGCOperationalStats {
  packetid: number;
  namekeys: OperationalStatisticDescription[];
  packets: OperationalStatisticsPacket[];
}

export interface CMsgGCCStrike15V2MatchmakingGC2ServerConfirm {
  token: number;
  stamp: number;
  exchange: Long;
}

export interface CMsgGCCStrike15V2GC2ServerReservationUpdate {
  viewersExternalTotal: number;
  viewersExternalSteam: number;
}

export interface CMsgGCCStrike15V2MatchmakingStart {
  accountIds: number[];
  gameType: number;
  ticketData: string;
  clientVersion: number;
  tournamentMatch: TournamentMatchSetup | undefined;
  primeOnly: boolean;
  tvControl: number;
  lobbyId: Long;
}

export interface CMsgGCCStrike15V2MatchmakingStop {
  abandon: number;
}

export interface CMsgGCCStrike15V2MatchmakingClient2ServerPing {
  gameserverpings: GameServerPing[];
  offsetIndex: number;
  finalBatch: number;
  dataCenterPings: DataCenterPing[];
  maxPing: number;
  testToken: number;
}

export interface CMsgGCCStrike15V2MatchmakingGC2ClientUpdate {
  matchmaking: number;
  waitingAccountIdSessions: number[];
  error: string;
  ongoingmatchAccountIdSessions: number[];
  globalStats: GlobalStatistics | undefined;
  failpingAccountIdSessions: number[];
  penaltyAccountIdSessions: number[];
  failreadyAccountIdSessions: number[];
  vacbannedAccountIdSessions: number[];
  serverIpaddressMask: IpAddressMask | undefined;
  notes: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note[];
  penaltyAccountIdSessionsGreen: number[];
  insufficientlevelSessions: number[];
  vsncheckAccountIdSessions: number[];
  launcherMismatchSessions: number[];
  insecureAccountIdSessions: number[];
}

export interface CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note {
  type: number;
  regionId: number;
  regionR: number;
  distance: number;
}

export interface CDataGCCStrike15V2TournamentMatchDraft {
  eventId: number;
  eventStageId: number;
  teamId0: number;
  teamId1: number;
  mapsCount: number;
  mapsCurrent: number;
  teamIdStart: number;
  teamIdVeto1: number;
  teamIdPickn: number;
  drafts: CDataGCCStrike15V2TournamentMatchDraft_Entry[];
}

export interface CDataGCCStrike15V2TournamentMatchDraft_Entry {
  mapid: number;
  teamIdCt: number;
}

export interface CPreMatchInfoData {
  predictionsPct: number;
  draft: CDataGCCStrike15V2TournamentMatchDraft | undefined;
  stats: CPreMatchInfoData_TeamStats[];
  wins: number[];
}

export interface CPreMatchInfoData_TeamStats {
  matchInfoIdxtxt: number;
  matchInfoTxt: string;
  matchInfoTeams: string[];
}

export interface CMsgGCCStrike15V2MatchmakingGC2ServerReserve {
  accountIds: number[];
  gameType: number;
  matchId: Long;
  serverVersion: number;
  flags: number;
  rankings: PlayerRankingInfo[];
  encryptionKey: Long;
  encryptionKeyPub: Long;
  partyIds: number[];
  whitelist: IpAddressMask[];
  tvMasterSteamid: Long;
  tournamentEvent: TournamentEvent | undefined;
  tournamentTeams: TournamentTeam[];
  tournamentCastersAccountIds: number[];
  tvRelaySteamid: Long;
  preMatchData: CPreMatchInfoData | undefined;
  rtime32EventStart: number;
  tvControl: number;
}

export interface CMsgGCCStrike15V2MatchmakingServerReservationResponse {
  reservationid: Long;
  reservation: CMsgGCCStrike15V2MatchmakingGC2ServerReserve | undefined;
  map: string;
  gcReservationSent: Long;
  serverVersion: number;
  tvInfo: ServerHltvInfo | undefined;
  rewardPlayerAccounts: number[];
  idlePlayerAccounts: number[];
  rewardItemAttrDefIdx: number;
  rewardItemAttrValue: number;
  rewardItemAttrRewardIdx: number;
  rewardDropList: number;
  tournamentTag: string;
  legacySteamdatagramPort: number;
  steamdatagramRouting: number;
  testToken: number;
  flags: number;
}

export interface CMsgGCCStrike15V2MatchmakingGC2ClientReserve {
  serverid: Long;
  directUdpIp: number;
  directUdpPort: number;
  reservationid: Long;
  reservation: CMsgGCCStrike15V2MatchmakingGC2ServerReserve | undefined;
  map: string;
  serverAddress: string;
}

export interface CMsgGCCStrike15V2MatchmakingServerRoundStats {
  reservationid: Long;
  reservation: CMsgGCCStrike15V2MatchmakingGC2ServerReserve | undefined;
  map: string;
  round: number;
  kills: number[];
  assists: number[];
  deaths: number[];
  scores: number[];
  pings: number[];
  roundResult: number;
  matchResult: number;
  teamScores: number[];
  confirm: CMsgGCCStrike15V2MatchmakingGC2ServerConfirm | undefined;
  reservationStage: number;
  matchDuration: number;
  enemyKills: number[];
  enemyHeadshots: number[];
  enemy3ks: number[];
  enemy4ks: number[];
  enemy5ks: number[];
  mvps: number[];
  spectatorsCount: number;
  spectatorsCountTv: number;
  spectatorsCountLnk: number;
  enemyKillsAgg: number[];
  dropInfo: CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo | undefined;
  bSwitchedTeams: boolean;
  enemy2ks: number[];
  playerSpawned: number[];
  teamSpawnCount: number[];
  maxRounds: number;
}

export interface CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo {
  accountMvp: number;
}

export interface CMsgGCCStrike15V2MatchmakingClient2GCHello {}

export interface CMsgGCCStrike15V2MatchmakingGC2ClientHello {
  accountId: number;
  ongoingmatch: CMsgGCCStrike15V2MatchmakingGC2ClientReserve | undefined;
  globalStats: GlobalStatistics | undefined;
  penaltySeconds: number;
  penaltyReason: number;
  vacBanned: number;
  ranking: PlayerRankingInfo | undefined;
  commendation: PlayerCommendationInfo | undefined;
  medals: PlayerMedalsInfo | undefined;
  myCurrentEvent: TournamentEvent | undefined;
  myCurrentEventTeams: TournamentTeam[];
  myCurrentTeam: TournamentTeam | undefined;
  myCurrentEventStages: TournamentEvent[];
  surveyVote: number;
  activity: AccountActivity | undefined;
  playerLevel: number;
  playerCurXp: number;
  playerXpBonusFlags: number;
  rankings: PlayerRankingInfo[];
}

export interface CMsgGCCStrike15V2AccountPrivacySettings {
  settings: CMsgGCCStrike15V2AccountPrivacySettings_Setting[];
}

export interface CMsgGCCStrike15V2AccountPrivacySettings_Setting {
  settingType: number;
  settingValue: number;
}

export interface CMsgGCCStrike15V2MatchmakingGC2ClientAbandon {
  accountId: number;
  abandonedMatch: CMsgGCCStrike15V2MatchmakingGC2ClientReserve | undefined;
  penaltySeconds: number;
  penaltyReason: number;
}

export interface CMsgGCCStrike15V2ClientGCRankUpdate {
  rankings: PlayerRankingInfo[];
}

export interface CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate {
  mainPostUrl: string;
}

export interface CMsgGCCStrike15V2ServerNotificationForUserPenalty {
  accountId: number;
  reason: number;
  seconds: number;
  communicationCooldown: boolean;
}

export interface CMsgGCCStrike15V2ClientReportPlayer {
  accountId: number;
  rptAimbot: number;
  rptWallhack: number;
  rptSpeedhack: number;
  rptTeamharm: number;
  rptTextabuse: number;
  rptVoiceabuse: number;
  matchId: Long;
  reportFromDemo: boolean;
}

export interface CMsgGCCStrike15V2ClientCommendPlayer {
  accountId: number;
  matchId: Long;
  commendation: PlayerCommendationInfo | undefined;
  tokens: number;
}

export interface CMsgGCCStrike15V2ClientReportServer {
  rptPoorperf: number;
  rptAbusivemodels: number;
  rptBadmotd: number;
  rptListingabuse: number;
  rptInventoryabuse: number;
  matchId: Long;
}

export interface CMsgGCCStrike15V2ClientReportResponse {
  confirmationId: Long;
  accountId: number;
  serverIp: number;
  responseType: number;
  responseResult: number;
  tokens: number;
}

export interface CMsgGCCStrike15V2ClientRequestWatchInfoFriends {
  requestId: number;
  accountIds: number[];
  serverid: Long;
  matchid: Long;
  clientLauncher: number;
  dataCenterPings: DataCenterPing[];
}

export interface WatchableMatchInfo {
  serverIp: number;
  tvPort: number;
  tvSpectators: number;
  tvTime: number;
  tvWatchPassword: Uint8Array;
  clDecryptdataKey: Long;
  clDecryptdataKeyPub: Long;
  gameType: number;
  gameMapgroup: string;
  gameMap: string;
  serverId: Long;
  matchId: Long;
  reservationId: Long;
}

export interface CMsgGCCStrike15V2ClientRequestJoinFriendData {
  version: number;
  accountId: number;
  joinToken: number;
  joinIpp: number;
  res: CMsgGCCStrike15V2MatchmakingGC2ClientReserve | undefined;
  errormsg: string;
}

export interface CMsgGCCStrike15V2ClientRequestJoinServerData {
  version: number;
  accountId: number;
  serverid: Long;
  serverIp: number;
  serverPort: number;
  res: CMsgGCCStrike15V2MatchmakingGC2ClientReserve | undefined;
  errormsg: string;
}

export interface CMsgGCCstrike15V2ClientRequestNewMission {
  missionId: number;
  campaignId: number;
}

export interface CMsgGCCstrike15V2ClientRedeemMissionReward {
  campaignId: number;
  redeemId: number;
  redeemableBalance: number;
  expectedCost: number;
}

export interface CMsgGCCstrike15V2GC2ServerNotifyXPRewarded {
  xpProgressData: XpProgressData[];
  accountId: number;
  currentXp: number;
  currentLevel: number;
  upgradedDefidx: number;
  operationPointsAwarded: number;
}

export interface CMsgGCCStrike15ClientDeepStats {
  accountId: number;
  range: CMsgGCCStrike15ClientDeepStats_DeepStatsRange | undefined;
  matches: CMsgGCCStrike15ClientDeepStats_DeepStatsMatch[];
}

export interface CMsgGCCStrike15ClientDeepStats_DeepStatsRange {
  begin: number;
  end: number;
  frozen: boolean;
}

export interface CMsgGCCStrike15ClientDeepStats_DeepStatsMatch {
  player: DeepPlayerStatsEntry | undefined;
  events: DeepPlayerMatchEvent[];
}

export interface CMsgGCCStrike15V2WatchInfoUsers {
  requestId: number;
  accountIds: number[];
  watchableMatchInfos: WatchableMatchInfo[];
  extendedTimeout: number;
}

export interface CMsgGCCStrike15V2ClientRequestPlayersProfile {
  requestIdDeprecated: number;
  accountIdsDeprecated: number[];
  accountId: number;
  requestLevel: number;
}

export interface CMsgGCCStrike15V2PlayersProfile {
  requestId: number;
  accountProfiles: CMsgGCCStrike15V2MatchmakingGC2ClientHello[];
}

export interface CMsgGCCStrike15V2PlayerOverwatchCaseUpdate {
  caseid: Long;
  suspectid: number;
  fractionid: number;
  rptAimbot: number;
  rptWallhack: number;
  rptSpeedhack: number;
  rptTeamharm: number;
  reason: number;
}

export interface CMsgGCCStrike15V2PlayerOverwatchCaseAssignment {
  caseid: Long;
  caseurl: string;
  verdict: number;
  timestamp: number;
  throttleseconds: number;
  suspectid: number;
  fractionid: number;
  numrounds: number;
  fractionrounds: number;
  streakconvictions: number;
  reason: number;
}

export interface CMsgGCCStrike15V2PlayerOverwatchCaseStatus {
  caseid: Long;
  statusid: number;
}

export interface CClientHeaderOverwatchEvidence {
  accountid: number;
  caseid: Long;
}

export interface CMsgGCCStrike15V2GC2ClientTextMsg {
  id: number;
  type: number;
  payload: Uint8Array;
}

export interface CMsgGCCStrike15V2Client2GCTextMsg {
  id: number;
  args: Uint8Array[];
}

export interface CMsgGCCStrike15V2MatchEndRunRewardDrops {
  serverinfo: CMsgGCCStrike15V2MatchmakingServerReservationResponse | undefined;
  matchEndQuestData: CMsgGCServerQuestUpdateData | undefined;
}

export interface CEconItemPreviewDataBlock {
  accountid: number;
  itemid: Long;
  defindex: number;
  paintindex: number;
  rarity: number;
  quality: number;
  paintwear: number;
  paintseed: number;
  killeaterscoretype: number;
  killeatervalue: number;
  customname: string;
  stickers: CEconItemPreviewDataBlock_Sticker[];
  inventory: number;
  origin: number;
  questid: number;
  dropreason: number;
  musicindex: number;
  entindex: number;
}

export interface CEconItemPreviewDataBlock_Sticker {
  slot: number;
  stickerId: number;
  wear: number;
  scale: number;
  rotation: number;
  tintId: number;
}

export interface CMsgGCCStrike15V2MatchEndRewardDropsNotification {
  iteminfo: CEconItemPreviewDataBlock | undefined;
}

export interface CMsgItemAcknowledged {
  iteminfo: CEconItemPreviewDataBlock | undefined;
}

export interface CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest {
  paramS: Long;
  paramA: Long;
  paramD: Long;
  paramM: Long;
}

export interface CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse {
  iteminfo: CEconItemPreviewDataBlock | undefined;
}

export interface CMsgGCCStrike15V2MatchListRequestCurrentLiveGames {}

export interface CMsgGCCStrike15V2MatchListRequestLiveGameForUser {
  accountid: number;
}

export interface CMsgGCCStrike15V2MatchListRequestRecentUserGames {
  accountid: number;
}

export interface CMsgGCCStrike15V2MatchListRequestTournamentGames {
  eventid: number;
}

export interface CMsgGCCStrike15V2MatchListRequestFullGameInfo {
  matchid: Long;
  outcomeid: Long;
  token: number;
}

export interface CDataGCCStrike15V2MatchInfo {
  matchid: Long;
  matchtime: number;
  watchablematchinfo: WatchableMatchInfo | undefined;
  roundstatsLegacy: CMsgGCCStrike15V2MatchmakingServerRoundStats | undefined;
  roundstatsall: CMsgGCCStrike15V2MatchmakingServerRoundStats[];
}

export interface CDataGCCStrike15V2TournamentGroupTeam {
  teamId: number;
  score: number;
  correctpick: boolean;
}

export interface CDataGCCStrike15V2TournamentGroup {
  groupid: number;
  name: string;
  desc: string;
  picksDeprecated: number;
  teams: CDataGCCStrike15V2TournamentGroupTeam[];
  stageIds: number[];
  picklockuntiltime: number;
  pickableteams: number;
  pointsPerPick: number;
  picks: CDataGCCStrike15V2TournamentGroup_Picks[];
}

export interface CDataGCCStrike15V2TournamentGroup_Picks {
  pickids: number[];
}

export interface CDataGCCStrike15V2TournamentSection {
  sectionid: number;
  name: string;
  desc: string;
  groups: CDataGCCStrike15V2TournamentGroup[];
}

export interface CDataGCCStrike15V2TournamentInfo {
  sections: CDataGCCStrike15V2TournamentSection[];
  tournamentEvent: TournamentEvent | undefined;
  tournamentTeams: TournamentTeam[];
}

export interface CMsgGCCStrike15V2MatchList {
  msgrequestid: number;
  accountid: number;
  servertime: number;
  matches: CDataGCCStrike15V2MatchInfo[];
  streams: TournamentTeam[];
  tournamentinfo: CDataGCCStrike15V2TournamentInfo | undefined;
}

export interface CMsgGCCStrike15V2MatchListTournamentOperatorMgmt {
  eventid: number;
  matches: CDataGCCStrike15V2MatchInfo[];
}

export interface CMsgGCCStrike15V2Predictions {
  eventId: number;
  groupMatchTeamPicks: CMsgGCCStrike15V2Predictions_GroupMatchTeamPick[];
}

export interface CMsgGCCStrike15V2Predictions_GroupMatchTeamPick {
  sectionid: number;
  groupid: number;
  index: number;
  teamid: number;
  itemid: Long;
}

export interface CMsgGCCStrike15V2Fantasy {
  eventId: number;
  teams: CMsgGCCStrike15V2Fantasy_FantasyTeam[];
}

export interface CMsgGCCStrike15V2Fantasy_FantasySlot {
  type: number;
  pick: number;
  itemid: Long;
}

export interface CMsgGCCStrike15V2Fantasy_FantasyTeam {
  sectionid: number;
  slots: CMsgGCCStrike15V2Fantasy_FantasySlot[];
}

export interface CAttributeString {
  value: string;
}

export interface CMsgCStrike15Welcome {
  storeItemHash: number;
  timeplayedconsecutively: number;
  timeFirstPlayed: number;
  lastTimePlayed: number;
  lastIpAddress: number;
  gscookieid: Long;
  uniqueid: Long;
}

export interface CMsgGCCStrike15V2ClientVarValueNotificationInfo {
  valueName: string;
  valueInt: number;
  serverAddr: number;
  serverPort: number;
  chokedBlocks: string[];
}

export interface CMsgGCCStrike15V2ServerVarValueNotificationInfo {
  accountid: number;
  viewangles: number[];
  type: number;
  userdata: number[];
}

export interface CMsgGCCStrike15V2GiftsLeaderboardRequest {}

export interface CMsgGCCStrike15V2GiftsLeaderboardResponse {
  servertime: number;
  timePeriodSeconds: number;
  totalGiftsGiven: number;
  totalGivers: number;
  entries: CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry[];
}

export interface CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry {
  accountid: number;
  gifts: number;
}

export interface CMsgGCCStrike15V2ClientSubmitSurveyVote {
  surveyId: number;
  vote: number;
}

export interface CMsgGCCStrike15V2Server2GCClientValidate {
  accountid: number;
}

export interface CMsgGCCStrike15V2GC2ClientTournamentInfo {
  eventid: number;
  stageid: number;
  gameType: number;
  teamids: number[];
}

export interface CSOEconCoupon {
  entryid: number;
  defidx: number;
  expirationDate: number;
}

export interface CSOQuestProgress {
  questid: number;
  pointsRemaining: number;
  bonusPoints: number;
}

export interface CSOAccountSeasonalOperation {
  seasonValue: number;
  tierUnlocked: number;
  premiumTiers: number;
  missionId: number;
  missionsCompleted: number;
  redeemableBalance: number;
  seasonPassTime: number;
}

export interface CSOAccountRecurringSubscription {
  timeNextCycle: number;
  timeInitiated: number;
}

export interface CSOPersonaDataPublic {
  playerLevel: number;
  commendation: PlayerCommendationInfo | undefined;
  elevatedState: boolean;
}

export interface CMsgGCGlobalGameSubscribe {
  ticket: Long;
}

export interface CMsgGCGlobalGameUnsubscribe {
  timeleft: number;
}

export interface CMsgGCGlobalGamePlay {
  ticket: Long;
  gametimems: number;
  msperpoint: number;
}

export interface CMsgGCCStrike15V2AcknowledgePenalty {
  acknowledged: number;
}

export interface CMsgGCCStrike15V2Client2GCRequestPrestigeCoin {
  defindex: number;
  upgradeid: Long;
  hours: number;
  prestigetime: number;
}

export interface CMsgGCCStrike15V2Client2GCStreamUnlock {
  ticket: Long;
  os: number;
}

export interface CMsgGCCStrike15V2ClientToGCRequestElevate {
  stage: number;
}

export interface CMsgGCCStrike15V2ClientToGCChat {
  matchId: Long;
  text: string;
}

export interface CMsgGCCStrike15V2GCToClientChat {
  accountId: number;
  text: string;
}

export interface CMsgGCCStrike15V2ClientAuthKeyCode {
  eventid: number;
  code: string;
}

export interface CMsgGCCStrike15GotvSyncPacket {
  data: CEngineGotvSyncPacket | undefined;
}

export interface PlayerDecalDigitalSignature {
  signature: Uint8Array;
  accountid: number;
  rtime: number;
  endpos: number[];
  startpos: number[];
  right: number[];
  txDefidx: number;
  entindex: number;
  hitbox: number;
  creationtime: number;
  equipslot: number;
  traceId: number;
  normal: number[];
  tintId: number;
}

export interface CMsgGCCStrike15V2ClientPlayerDecalSign {
  data: PlayerDecalDigitalSignature | undefined;
  itemid: Long;
}

export interface CMsgGCCStrike15V2ClientLogonFatalError {
  errorcode: number;
  message: string;
  country: string;
}

export interface CMsgGCCStrike15V2ClientPollState {
  pollid: number;
  names: string[];
  values: number[];
}

export interface CMsgGCCStrike15V2PartyRegister {
  id: number;
  ver: number;
  apr: number;
  ark: number;
  nby: number;
  grp: number;
  slots: number;
  launcher: number;
  gameType: number;
}

export interface CMsgGCCStrike15V2PartySearch {
  ver: number;
  apr: number;
  ark: number;
  grps: number[];
  launcher: number;
  gameType: number;
}

export interface CMsgGCCStrike15V2PartySearchResults {
  entries: CMsgGCCStrike15V2PartySearchResults_Entry[];
}

export interface CMsgGCCStrike15V2PartySearchResults_Entry {
  id: number;
  grp: number;
  gameType: number;
  apr: number;
  ark: number;
  loc: number;
  accountid: number;
}

export interface CMsgGCCStrike15V2PartyInvite {
  accountid: number;
  lobbyid: number;
}

export interface CMsgGCCStrike15V2AccountRequestCoPlays {
  players: CMsgGCCStrike15V2AccountRequestCoPlays_Player[];
  servertime: number;
}

export interface CMsgGCCStrike15V2AccountRequestCoPlays_Player {
  accountid: number;
  rtcoplay: number;
  online: boolean;
}

export interface CMsgGCCStrike15V2ClientToGCRequestTicket {
  authorizedSteamId: Long;
  authorizedPublicIp: number;
  gameserverSteamId: Long;
  gameserverSdrRouting: string;
}

export interface CMsgGCToClientSteamDatagramTicket {
  serializedTicket: Uint8Array;
}

export interface CMsgGCCStrike15V2ClientRequestOffers {}

export interface CMsgGCCStrike15V2ClientRequestSouvenir {
  itemid: Long;
  matchid: Long;
  eventid: number;
}

export interface CMsgGCCStrike15V2ClientAccountBalance {
  amount: Long;
  url: string;
}

export interface CMsgGCCStrike15V2ClientPartyJoinRelay {
  accountid: number;
  lobbyid: Long;
}

export interface CMsgGCCStrike15V2ClientPartyWarning {
  entries: CMsgGCCStrike15V2ClientPartyWarning_Entry[];
}

export interface CMsgGCCStrike15V2ClientPartyWarning_Entry {
  accountid: number;
  warntype: number;
}

export interface CMsgGCCStrike15V2SetEventFavorite {
  eventid: Long;
  isFavorite: boolean;
}

export interface CMsgGCCStrike15V2GetEventFavoritesRequest {
  allEvents: boolean;
}

export interface CMsgGCCStrike15V2GetEventFavoritesResponse {
  allEvents: boolean;
  jsonFavorites: string;
  jsonFeatured: string;
}

export interface CMsgGCCStrike15V2ClientPerfReport {
  entries: CMsgGCCStrike15V2ClientPerfReport_Entry[];
}

export interface CMsgGCCStrike15V2ClientPerfReport_Entry {
  perfcounter: number;
  length: number;
  reference: Uint8Array;
  actual: Uint8Array;
  sourceid: number;
  status: number;
}

export interface CVDiagnostic {
  id: number;
  extended: number;
  value: Long;
  stringValue: string;
}

export interface CMsgGCCStrike15V2ClientReportValidation {
  fileReport: string;
  commandLine: string;
  totalFiles: number;
  internalError: number;
  trustTime: number;
  countPending: number;
  countCompleted: number;
  processId: number;
  osversion: number;
  clientreportversion: number;
  statusId: number;
  diagnostic1: number;
  diagnostic2: Long;
  diagnostic3: Long;
  lastLaunchData: string;
  reportCount: number;
  clientTime: Long;
  diagnostic4: Long;
  diagnostic5: Long;
  diagnostics: CVDiagnostic[];
}

export interface CMsgGCCStrike15V2GC2ClientRefuseSecureMode {
  fileReport: string;
  offerInsecureMode: boolean;
  offerSecureMode: boolean;
  showUnsignedUi: boolean;
  kickUser: boolean;
  showTrustedUi: boolean;
  showWarningNotTrusted: boolean;
  showWarningNotTrusted2: boolean;
  filesPreventedTrusted: string;
}

export interface CMsgGCCStrike15V2GC2ClientRequestValidation {
  fullReport: boolean;
  module: string;
}

export interface CMsgGCCStrike15V2GC2ClientInitSystem {
  load: boolean;
  name: string;
  outputname: string;
  keyData: Uint8Array;
  shaHash: Uint8Array;
  cookie: number;
  manifest: string;
  systemPackage: Uint8Array;
  loadSystem: boolean;
}

export interface CMsgGCCStrike15V2GC2ClientInitSystemResponse {
  success: boolean;
  diagnostic: string;
  shaHash: Uint8Array;
  response: number;
  errorCode1: number;
  errorCode2: number;
  handle: Long;
  einitResult: EInitSystemResult;
  auxSystem1: number;
  auxSystem2: number;
}

function createBaseGameServerPing(): GameServerPing {
  return { ping: 0, ip: 0, instances: 0 };
}

export const GameServerPing = {
  encode(message: GameServerPing, writer: Writer = Writer.create()): Writer {
    if (message.ping !== 0) {
      writer.uint32(16).int32(message.ping);
    }
    if (message.ip !== 0) {
      writer.uint32(24).uint32(message.ip);
    }
    if (message.instances !== 0) {
      writer.uint32(40).uint32(message.instances);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GameServerPing {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameServerPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.ping = reader.int32();
          break;
        case 3:
          message.ip = reader.uint32();
          break;
        case 5:
          message.instances = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<GameServerPing>, I>>(
    object: I
  ): GameServerPing {
    const message = createBaseGameServerPing();
    message.ping = object.ping ?? 0;
    message.ip = object.ip ?? 0;
    message.instances = object.instances ?? 0;
    return message;
  }
};

function createBaseDataCenterPing(): DataCenterPing {
  return { dataCenterId: 0, ping: 0 };
}

export const DataCenterPing = {
  encode(message: DataCenterPing, writer: Writer = Writer.create()): Writer {
    if (message.dataCenterId !== 0) {
      writer.uint32(13).fixed32(message.dataCenterId);
    }
    if (message.ping !== 0) {
      writer.uint32(16).sint32(message.ping);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataCenterPing {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataCenterPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataCenterId = reader.fixed32();
          break;
        case 2:
          message.ping = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<DataCenterPing>, I>>(
    object: I
  ): DataCenterPing {
    const message = createBaseDataCenterPing();
    message.dataCenterId = object.dataCenterId ?? 0;
    message.ping = object.ping ?? 0;
    return message;
  }
};

function createBaseDetailedSearchStatistic(): DetailedSearchStatistic {
  return { gameType: 0, searchTimeAvg: 0, playersSearching: 0 };
}

export const DetailedSearchStatistic = {
  encode(
    message: DetailedSearchStatistic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameType !== 0) {
      writer.uint32(8).uint32(message.gameType);
    }
    if (message.searchTimeAvg !== 0) {
      writer.uint32(16).uint32(message.searchTimeAvg);
    }
    if (message.playersSearching !== 0) {
      writer.uint32(32).uint32(message.playersSearching);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DetailedSearchStatistic {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetailedSearchStatistic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameType = reader.uint32();
          break;
        case 2:
          message.searchTimeAvg = reader.uint32();
          break;
        case 4:
          message.playersSearching = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<DetailedSearchStatistic>, I>>(
    object: I
  ): DetailedSearchStatistic {
    const message = createBaseDetailedSearchStatistic();
    message.gameType = object.gameType ?? 0;
    message.searchTimeAvg = object.searchTimeAvg ?? 0;
    message.playersSearching = object.playersSearching ?? 0;
    return message;
  }
};

function createBaseTournamentPlayer(): TournamentPlayer {
  return {
    accountId: 0,
    playerNick: "",
    playerName: "",
    playerDob: 0,
    playerFlag: "",
    playerLocation: "",
    playerDesc: ""
  };
}

export const TournamentPlayer = {
  encode(message: TournamentPlayer, writer: Writer = Writer.create()): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.playerNick !== "") {
      writer.uint32(18).string(message.playerNick);
    }
    if (message.playerName !== "") {
      writer.uint32(26).string(message.playerName);
    }
    if (message.playerDob !== 0) {
      writer.uint32(32).uint32(message.playerDob);
    }
    if (message.playerFlag !== "") {
      writer.uint32(42).string(message.playerFlag);
    }
    if (message.playerLocation !== "") {
      writer.uint32(50).string(message.playerLocation);
    }
    if (message.playerDesc !== "") {
      writer.uint32(58).string(message.playerDesc);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TournamentPlayer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.playerNick = reader.string();
          break;
        case 3:
          message.playerName = reader.string();
          break;
        case 4:
          message.playerDob = reader.uint32();
          break;
        case 5:
          message.playerFlag = reader.string();
          break;
        case 6:
          message.playerLocation = reader.string();
          break;
        case 7:
          message.playerDesc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentPlayer>, I>>(
    object: I
  ): TournamentPlayer {
    const message = createBaseTournamentPlayer();
    message.accountId = object.accountId ?? 0;
    message.playerNick = object.playerNick ?? "";
    message.playerName = object.playerName ?? "";
    message.playerDob = object.playerDob ?? 0;
    message.playerFlag = object.playerFlag ?? "";
    message.playerLocation = object.playerLocation ?? "";
    message.playerDesc = object.playerDesc ?? "";
    return message;
  }
};

function createBaseTournamentTeam(): TournamentTeam {
  return { teamId: 0, teamTag: "", teamFlag: "", teamName: "", players: [] };
}

export const TournamentTeam = {
  encode(message: TournamentTeam, writer: Writer = Writer.create()): Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).int32(message.teamId);
    }
    if (message.teamTag !== "") {
      writer.uint32(18).string(message.teamTag);
    }
    if (message.teamFlag !== "") {
      writer.uint32(26).string(message.teamFlag);
    }
    if (message.teamName !== "") {
      writer.uint32(34).string(message.teamName);
    }
    for (const v of message.players) {
      TournamentPlayer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TournamentTeam {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamId = reader.int32();
          break;
        case 2:
          message.teamTag = reader.string();
          break;
        case 3:
          message.teamFlag = reader.string();
          break;
        case 4:
          message.teamName = reader.string();
          break;
        case 5:
          message.players.push(
            TournamentPlayer.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentTeam>, I>>(
    object: I
  ): TournamentTeam {
    const message = createBaseTournamentTeam();
    message.teamId = object.teamId ?? 0;
    message.teamTag = object.teamTag ?? "";
    message.teamFlag = object.teamFlag ?? "";
    message.teamName = object.teamName ?? "";
    message.players =
      object.players?.map(e => TournamentPlayer.fromPartial(e)) || [];
    return message;
  }
};

function createBaseTournamentEvent(): TournamentEvent {
  return {
    eventId: 0,
    eventTag: "",
    eventName: "",
    eventTimeStart: 0,
    eventTimeEnd: 0,
    eventPublic: 0,
    eventStageId: 0,
    eventStageName: "",
    activeSectionId: 0
  };
}

export const TournamentEvent = {
  encode(message: TournamentEvent, writer: Writer = Writer.create()): Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.eventTag !== "") {
      writer.uint32(18).string(message.eventTag);
    }
    if (message.eventName !== "") {
      writer.uint32(26).string(message.eventName);
    }
    if (message.eventTimeStart !== 0) {
      writer.uint32(32).uint32(message.eventTimeStart);
    }
    if (message.eventTimeEnd !== 0) {
      writer.uint32(40).uint32(message.eventTimeEnd);
    }
    if (message.eventPublic !== 0) {
      writer.uint32(48).int32(message.eventPublic);
    }
    if (message.eventStageId !== 0) {
      writer.uint32(56).int32(message.eventStageId);
    }
    if (message.eventStageName !== "") {
      writer.uint32(66).string(message.eventStageName);
    }
    if (message.activeSectionId !== 0) {
      writer.uint32(72).uint32(message.activeSectionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TournamentEvent {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.int32();
          break;
        case 2:
          message.eventTag = reader.string();
          break;
        case 3:
          message.eventName = reader.string();
          break;
        case 4:
          message.eventTimeStart = reader.uint32();
          break;
        case 5:
          message.eventTimeEnd = reader.uint32();
          break;
        case 6:
          message.eventPublic = reader.int32();
          break;
        case 7:
          message.eventStageId = reader.int32();
          break;
        case 8:
          message.eventStageName = reader.string();
          break;
        case 9:
          message.activeSectionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentEvent>, I>>(
    object: I
  ): TournamentEvent {
    const message = createBaseTournamentEvent();
    message.eventId = object.eventId ?? 0;
    message.eventTag = object.eventTag ?? "";
    message.eventName = object.eventName ?? "";
    message.eventTimeStart = object.eventTimeStart ?? 0;
    message.eventTimeEnd = object.eventTimeEnd ?? 0;
    message.eventPublic = object.eventPublic ?? 0;
    message.eventStageId = object.eventStageId ?? 0;
    message.eventStageName = object.eventStageName ?? "";
    message.activeSectionId = object.activeSectionId ?? 0;
    return message;
  }
};

function createBaseGlobalStatistics(): GlobalStatistics {
  return {
    playersOnline: 0,
    serversOnline: 0,
    playersSearching: 0,
    serversAvailable: 0,
    ongoingMatches: 0,
    searchTimeAvg: 0,
    searchStatistics: [],
    mainPostUrl: "",
    requiredAppidVersion: 0,
    pricesheetVersion: 0,
    twitchStreamsVersion: 0,
    activeTournamentEventid: 0,
    activeSurveyId: 0,
    rtime32Cur: 0,
    rtime32EventStart: 0
  };
}

export const GlobalStatistics = {
  encode(message: GlobalStatistics, writer: Writer = Writer.create()): Writer {
    if (message.playersOnline !== 0) {
      writer.uint32(8).uint32(message.playersOnline);
    }
    if (message.serversOnline !== 0) {
      writer.uint32(16).uint32(message.serversOnline);
    }
    if (message.playersSearching !== 0) {
      writer.uint32(24).uint32(message.playersSearching);
    }
    if (message.serversAvailable !== 0) {
      writer.uint32(32).uint32(message.serversAvailable);
    }
    if (message.ongoingMatches !== 0) {
      writer.uint32(40).uint32(message.ongoingMatches);
    }
    if (message.searchTimeAvg !== 0) {
      writer.uint32(48).uint32(message.searchTimeAvg);
    }
    for (const v of message.searchStatistics) {
      DetailedSearchStatistic.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.mainPostUrl !== "") {
      writer.uint32(66).string(message.mainPostUrl);
    }
    if (message.requiredAppidVersion !== 0) {
      writer.uint32(72).uint32(message.requiredAppidVersion);
    }
    if (message.pricesheetVersion !== 0) {
      writer.uint32(80).uint32(message.pricesheetVersion);
    }
    if (message.twitchStreamsVersion !== 0) {
      writer.uint32(88).uint32(message.twitchStreamsVersion);
    }
    if (message.activeTournamentEventid !== 0) {
      writer.uint32(96).uint32(message.activeTournamentEventid);
    }
    if (message.activeSurveyId !== 0) {
      writer.uint32(104).uint32(message.activeSurveyId);
    }
    if (message.rtime32Cur !== 0) {
      writer.uint32(112).uint32(message.rtime32Cur);
    }
    if (message.rtime32EventStart !== 0) {
      writer.uint32(120).uint32(message.rtime32EventStart);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GlobalStatistics {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playersOnline = reader.uint32();
          break;
        case 2:
          message.serversOnline = reader.uint32();
          break;
        case 3:
          message.playersSearching = reader.uint32();
          break;
        case 4:
          message.serversAvailable = reader.uint32();
          break;
        case 5:
          message.ongoingMatches = reader.uint32();
          break;
        case 6:
          message.searchTimeAvg = reader.uint32();
          break;
        case 7:
          message.searchStatistics.push(
            DetailedSearchStatistic.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.mainPostUrl = reader.string();
          break;
        case 9:
          message.requiredAppidVersion = reader.uint32();
          break;
        case 10:
          message.pricesheetVersion = reader.uint32();
          break;
        case 11:
          message.twitchStreamsVersion = reader.uint32();
          break;
        case 12:
          message.activeTournamentEventid = reader.uint32();
          break;
        case 13:
          message.activeSurveyId = reader.uint32();
          break;
        case 14:
          message.rtime32Cur = reader.uint32();
          break;
        case 15:
          message.rtime32EventStart = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<GlobalStatistics>, I>>(
    object: I
  ): GlobalStatistics {
    const message = createBaseGlobalStatistics();
    message.playersOnline = object.playersOnline ?? 0;
    message.serversOnline = object.serversOnline ?? 0;
    message.playersSearching = object.playersSearching ?? 0;
    message.serversAvailable = object.serversAvailable ?? 0;
    message.ongoingMatches = object.ongoingMatches ?? 0;
    message.searchTimeAvg = object.searchTimeAvg ?? 0;
    message.searchStatistics =
      object.searchStatistics?.map(e =>
        DetailedSearchStatistic.fromPartial(e)
      ) || [];
    message.mainPostUrl = object.mainPostUrl ?? "";
    message.requiredAppidVersion = object.requiredAppidVersion ?? 0;
    message.pricesheetVersion = object.pricesheetVersion ?? 0;
    message.twitchStreamsVersion = object.twitchStreamsVersion ?? 0;
    message.activeTournamentEventid = object.activeTournamentEventid ?? 0;
    message.activeSurveyId = object.activeSurveyId ?? 0;
    message.rtime32Cur = object.rtime32Cur ?? 0;
    message.rtime32EventStart = object.rtime32EventStart ?? 0;
    return message;
  }
};

function createBaseOperationalStatisticDescription(): OperationalStatisticDescription {
  return { name: "", idkey: 0 };
}

export const OperationalStatisticDescription = {
  encode(
    message: OperationalStatisticDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.idkey !== 0) {
      writer.uint32(16).uint32(message.idkey);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): OperationalStatisticDescription {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationalStatisticDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.idkey = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<OperationalStatisticDescription>, I>>(
    object: I
  ): OperationalStatisticDescription {
    const message = createBaseOperationalStatisticDescription();
    message.name = object.name ?? "";
    message.idkey = object.idkey ?? 0;
    return message;
  }
};

function createBaseOperationalStatisticElement(): OperationalStatisticElement {
  return { idkey: 0, values: [] };
}

export const OperationalStatisticElement = {
  encode(
    message: OperationalStatisticElement,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idkey !== 0) {
      writer.uint32(8).uint32(message.idkey);
    }
    writer.uint32(18).fork();
    for (const v of message.values) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): OperationalStatisticElement {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationalStatisticElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idkey = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.int32());
            }
          } else {
            message.values.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<OperationalStatisticElement>, I>>(
    object: I
  ): OperationalStatisticElement {
    const message = createBaseOperationalStatisticElement();
    message.idkey = object.idkey ?? 0;
    message.values = object.values?.map(e => e) || [];
    return message;
  }
};

function createBaseOperationalStatisticsPacket(): OperationalStatisticsPacket {
  return { packetid: 0, mstimestamp: 0, values: [] };
}

export const OperationalStatisticsPacket = {
  encode(
    message: OperationalStatisticsPacket,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.packetid !== 0) {
      writer.uint32(8).int32(message.packetid);
    }
    if (message.mstimestamp !== 0) {
      writer.uint32(16).int32(message.mstimestamp);
    }
    for (const v of message.values) {
      OperationalStatisticElement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): OperationalStatisticsPacket {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationalStatisticsPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetid = reader.int32();
          break;
        case 2:
          message.mstimestamp = reader.int32();
          break;
        case 3:
          message.values.push(
            OperationalStatisticElement.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<OperationalStatisticsPacket>, I>>(
    object: I
  ): OperationalStatisticsPacket {
    const message = createBaseOperationalStatisticsPacket();
    message.packetid = object.packetid ?? 0;
    message.mstimestamp = object.mstimestamp ?? 0;
    message.values =
      object.values?.map(e => OperationalStatisticElement.fromPartial(e)) || [];
    return message;
  }
};

function createBasePlayerRankingInfo(): PlayerRankingInfo {
  return {
    accountId: 0,
    rankId: 0,
    wins: 0,
    rankChange: 0,
    rankTypeId: 0,
    tvControl: 0
  };
}

export const PlayerRankingInfo = {
  encode(message: PlayerRankingInfo, writer: Writer = Writer.create()): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.rankId !== 0) {
      writer.uint32(16).uint32(message.rankId);
    }
    if (message.wins !== 0) {
      writer.uint32(24).uint32(message.wins);
    }
    if (message.rankChange !== 0) {
      writer.uint32(37).float(message.rankChange);
    }
    if (message.rankTypeId !== 0) {
      writer.uint32(48).uint32(message.rankTypeId);
    }
    if (message.tvControl !== 0) {
      writer.uint32(56).uint32(message.tvControl);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerRankingInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRankingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.rankId = reader.uint32();
          break;
        case 3:
          message.wins = reader.uint32();
          break;
        case 4:
          message.rankChange = reader.float();
          break;
        case 6:
          message.rankTypeId = reader.uint32();
          break;
        case 7:
          message.tvControl = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerRankingInfo>, I>>(
    object: I
  ): PlayerRankingInfo {
    const message = createBasePlayerRankingInfo();
    message.accountId = object.accountId ?? 0;
    message.rankId = object.rankId ?? 0;
    message.wins = object.wins ?? 0;
    message.rankChange = object.rankChange ?? 0;
    message.rankTypeId = object.rankTypeId ?? 0;
    message.tvControl = object.tvControl ?? 0;
    return message;
  }
};

function createBasePlayerCommendationInfo(): PlayerCommendationInfo {
  return { cmdFriendly: 0, cmdTeaching: 0, cmdLeader: 0 };
}

export const PlayerCommendationInfo = {
  encode(
    message: PlayerCommendationInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cmdFriendly !== 0) {
      writer.uint32(8).uint32(message.cmdFriendly);
    }
    if (message.cmdTeaching !== 0) {
      writer.uint32(16).uint32(message.cmdTeaching);
    }
    if (message.cmdLeader !== 0) {
      writer.uint32(32).uint32(message.cmdLeader);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerCommendationInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerCommendationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cmdFriendly = reader.uint32();
          break;
        case 2:
          message.cmdTeaching = reader.uint32();
          break;
        case 4:
          message.cmdLeader = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerCommendationInfo>, I>>(
    object: I
  ): PlayerCommendationInfo {
    const message = createBasePlayerCommendationInfo();
    message.cmdFriendly = object.cmdFriendly ?? 0;
    message.cmdTeaching = object.cmdTeaching ?? 0;
    message.cmdLeader = object.cmdLeader ?? 0;
    return message;
  }
};

function createBasePlayerMedalsInfo(): PlayerMedalsInfo {
  return { displayItemsDefidx: [], featuredDisplayItemDefidx: 0 };
}

export const PlayerMedalsInfo = {
  encode(message: PlayerMedalsInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(58).fork();
    for (const v of message.displayItemsDefidx) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.featuredDisplayItemDefidx !== 0) {
      writer.uint32(64).uint32(message.featuredDisplayItemDefidx);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerMedalsInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerMedalsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.displayItemsDefidx.push(reader.uint32());
            }
          } else {
            message.displayItemsDefidx.push(reader.uint32());
          }
          break;
        case 8:
          message.featuredDisplayItemDefidx = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerMedalsInfo>, I>>(
    object: I
  ): PlayerMedalsInfo {
    const message = createBasePlayerMedalsInfo();
    message.displayItemsDefidx = object.displayItemsDefidx?.map(e => e) || [];
    message.featuredDisplayItemDefidx = object.featuredDisplayItemDefidx ?? 0;
    return message;
  }
};

function createBaseAccountActivity(): AccountActivity {
  return { activity: 0, mode: 0, map: 0, matchid: Long.UZERO };
}

export const AccountActivity = {
  encode(message: AccountActivity, writer: Writer = Writer.create()): Writer {
    if (message.activity !== 0) {
      writer.uint32(8).uint32(message.activity);
    }
    if (message.mode !== 0) {
      writer.uint32(16).uint32(message.mode);
    }
    if (message.map !== 0) {
      writer.uint32(24).uint32(message.map);
    }
    if (!message.matchid.isZero()) {
      writer.uint32(32).uint64(message.matchid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountActivity {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activity = reader.uint32();
          break;
        case 2:
          message.mode = reader.uint32();
          break;
        case 3:
          message.map = reader.uint32();
          break;
        case 4:
          message.matchid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<AccountActivity>, I>>(
    object: I
  ): AccountActivity {
    const message = createBaseAccountActivity();
    message.activity = object.activity ?? 0;
    message.mode = object.mode ?? 0;
    message.map = object.map ?? 0;
    message.matchid =
      object.matchid !== undefined && object.matchid !== null
        ? Long.fromValue(object.matchid)
        : Long.UZERO;
    return message;
  }
};

function createBaseTournamentMatchSetup(): TournamentMatchSetup {
  return { eventId: 0, teamIdCt: 0, teamIdT: 0, eventStageId: 0 };
}

export const TournamentMatchSetup = {
  encode(
    message: TournamentMatchSetup,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.teamIdCt !== 0) {
      writer.uint32(16).int32(message.teamIdCt);
    }
    if (message.teamIdT !== 0) {
      writer.uint32(24).int32(message.teamIdT);
    }
    if (message.eventStageId !== 0) {
      writer.uint32(32).int32(message.eventStageId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TournamentMatchSetup {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentMatchSetup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.int32();
          break;
        case 2:
          message.teamIdCt = reader.int32();
          break;
        case 3:
          message.teamIdT = reader.int32();
          break;
        case 4:
          message.eventStageId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentMatchSetup>, I>>(
    object: I
  ): TournamentMatchSetup {
    const message = createBaseTournamentMatchSetup();
    message.eventId = object.eventId ?? 0;
    message.teamIdCt = object.teamIdCt ?? 0;
    message.teamIdT = object.teamIdT ?? 0;
    message.eventStageId = object.eventStageId ?? 0;
    return message;
  }
};

function createBaseServerHltvInfo(): ServerHltvInfo {
  return {
    tvUdpPort: 0,
    tvWatchKey: Long.UZERO,
    tvSlots: 0,
    tvClients: 0,
    tvProxies: 0,
    tvTime: 0,
    gameType: 0,
    gameMapgroup: "",
    gameMap: "",
    tvMasterSteamid: Long.UZERO,
    tvLocalSlots: 0,
    tvLocalClients: 0,
    tvLocalProxies: 0,
    tvRelaySlots: 0,
    tvRelayClients: 0,
    tvRelayProxies: 0,
    tvRelayAddress: 0,
    tvRelayPort: 0,
    tvRelaySteamid: Long.UZERO,
    flags: 0
  };
}

export const ServerHltvInfo = {
  encode(message: ServerHltvInfo, writer: Writer = Writer.create()): Writer {
    if (message.tvUdpPort !== 0) {
      writer.uint32(8).uint32(message.tvUdpPort);
    }
    if (!message.tvWatchKey.isZero()) {
      writer.uint32(16).uint64(message.tvWatchKey);
    }
    if (message.tvSlots !== 0) {
      writer.uint32(24).uint32(message.tvSlots);
    }
    if (message.tvClients !== 0) {
      writer.uint32(32).uint32(message.tvClients);
    }
    if (message.tvProxies !== 0) {
      writer.uint32(40).uint32(message.tvProxies);
    }
    if (message.tvTime !== 0) {
      writer.uint32(48).uint32(message.tvTime);
    }
    if (message.gameType !== 0) {
      writer.uint32(64).uint32(message.gameType);
    }
    if (message.gameMapgroup !== "") {
      writer.uint32(74).string(message.gameMapgroup);
    }
    if (message.gameMap !== "") {
      writer.uint32(82).string(message.gameMap);
    }
    if (!message.tvMasterSteamid.isZero()) {
      writer.uint32(88).uint64(message.tvMasterSteamid);
    }
    if (message.tvLocalSlots !== 0) {
      writer.uint32(96).uint32(message.tvLocalSlots);
    }
    if (message.tvLocalClients !== 0) {
      writer.uint32(104).uint32(message.tvLocalClients);
    }
    if (message.tvLocalProxies !== 0) {
      writer.uint32(112).uint32(message.tvLocalProxies);
    }
    if (message.tvRelaySlots !== 0) {
      writer.uint32(120).uint32(message.tvRelaySlots);
    }
    if (message.tvRelayClients !== 0) {
      writer.uint32(128).uint32(message.tvRelayClients);
    }
    if (message.tvRelayProxies !== 0) {
      writer.uint32(136).uint32(message.tvRelayProxies);
    }
    if (message.tvRelayAddress !== 0) {
      writer.uint32(144).uint32(message.tvRelayAddress);
    }
    if (message.tvRelayPort !== 0) {
      writer.uint32(152).uint32(message.tvRelayPort);
    }
    if (!message.tvRelaySteamid.isZero()) {
      writer.uint32(160).uint64(message.tvRelaySteamid);
    }
    if (message.flags !== 0) {
      writer.uint32(168).uint32(message.flags);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServerHltvInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerHltvInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tvUdpPort = reader.uint32();
          break;
        case 2:
          message.tvWatchKey = reader.uint64() as Long;
          break;
        case 3:
          message.tvSlots = reader.uint32();
          break;
        case 4:
          message.tvClients = reader.uint32();
          break;
        case 5:
          message.tvProxies = reader.uint32();
          break;
        case 6:
          message.tvTime = reader.uint32();
          break;
        case 8:
          message.gameType = reader.uint32();
          break;
        case 9:
          message.gameMapgroup = reader.string();
          break;
        case 10:
          message.gameMap = reader.string();
          break;
        case 11:
          message.tvMasterSteamid = reader.uint64() as Long;
          break;
        case 12:
          message.tvLocalSlots = reader.uint32();
          break;
        case 13:
          message.tvLocalClients = reader.uint32();
          break;
        case 14:
          message.tvLocalProxies = reader.uint32();
          break;
        case 15:
          message.tvRelaySlots = reader.uint32();
          break;
        case 16:
          message.tvRelayClients = reader.uint32();
          break;
        case 17:
          message.tvRelayProxies = reader.uint32();
          break;
        case 18:
          message.tvRelayAddress = reader.uint32();
          break;
        case 19:
          message.tvRelayPort = reader.uint32();
          break;
        case 20:
          message.tvRelaySteamid = reader.uint64() as Long;
          break;
        case 21:
          message.flags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ServerHltvInfo>, I>>(
    object: I
  ): ServerHltvInfo {
    const message = createBaseServerHltvInfo();
    message.tvUdpPort = object.tvUdpPort ?? 0;
    message.tvWatchKey =
      object.tvWatchKey !== undefined && object.tvWatchKey !== null
        ? Long.fromValue(object.tvWatchKey)
        : Long.UZERO;
    message.tvSlots = object.tvSlots ?? 0;
    message.tvClients = object.tvClients ?? 0;
    message.tvProxies = object.tvProxies ?? 0;
    message.tvTime = object.tvTime ?? 0;
    message.gameType = object.gameType ?? 0;
    message.gameMapgroup = object.gameMapgroup ?? "";
    message.gameMap = object.gameMap ?? "";
    message.tvMasterSteamid =
      object.tvMasterSteamid !== undefined && object.tvMasterSteamid !== null
        ? Long.fromValue(object.tvMasterSteamid)
        : Long.UZERO;
    message.tvLocalSlots = object.tvLocalSlots ?? 0;
    message.tvLocalClients = object.tvLocalClients ?? 0;
    message.tvLocalProxies = object.tvLocalProxies ?? 0;
    message.tvRelaySlots = object.tvRelaySlots ?? 0;
    message.tvRelayClients = object.tvRelayClients ?? 0;
    message.tvRelayProxies = object.tvRelayProxies ?? 0;
    message.tvRelayAddress = object.tvRelayAddress ?? 0;
    message.tvRelayPort = object.tvRelayPort ?? 0;
    message.tvRelaySteamid =
      object.tvRelaySteamid !== undefined && object.tvRelaySteamid !== null
        ? Long.fromValue(object.tvRelaySteamid)
        : Long.UZERO;
    message.flags = object.flags ?? 0;
    return message;
  }
};

function createBaseIpAddressMask(): IpAddressMask {
  return { a: 0, b: 0, c: 0, d: 0, bits: 0, token: 0 };
}

export const IpAddressMask = {
  encode(message: IpAddressMask, writer: Writer = Writer.create()): Writer {
    if (message.a !== 0) {
      writer.uint32(8).uint32(message.a);
    }
    if (message.b !== 0) {
      writer.uint32(16).uint32(message.b);
    }
    if (message.c !== 0) {
      writer.uint32(24).uint32(message.c);
    }
    if (message.d !== 0) {
      writer.uint32(32).uint32(message.d);
    }
    if (message.bits !== 0) {
      writer.uint32(40).uint32(message.bits);
    }
    if (message.token !== 0) {
      writer.uint32(48).uint32(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IpAddressMask {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIpAddressMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = reader.uint32();
          break;
        case 2:
          message.b = reader.uint32();
          break;
        case 3:
          message.c = reader.uint32();
          break;
        case 4:
          message.d = reader.uint32();
          break;
        case 5:
          message.bits = reader.uint32();
          break;
        case 6:
          message.token = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<IpAddressMask>, I>>(
    object: I
  ): IpAddressMask {
    const message = createBaseIpAddressMask();
    message.a = object.a ?? 0;
    message.b = object.b ?? 0;
    message.c = object.c ?? 0;
    message.d = object.d ?? 0;
    message.bits = object.bits ?? 0;
    message.token = object.token ?? 0;
    return message;
  }
};

function createBaseCMsgCsgoSteamUserStatChange(): CMsgCsgoSteamUserStatChange {
  return { ecsgosteamuserstat: 0, delta: 0, absolute: false };
}

export const CMsgCsgoSteamUserStatChange = {
  encode(
    message: CMsgCsgoSteamUserStatChange,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ecsgosteamuserstat !== 0) {
      writer.uint32(8).int32(message.ecsgosteamuserstat);
    }
    if (message.delta !== 0) {
      writer.uint32(16).int32(message.delta);
    }
    if (message.absolute === true) {
      writer.uint32(24).bool(message.absolute);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgCsgoSteamUserStatChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCsgoSteamUserStatChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ecsgosteamuserstat = reader.int32();
          break;
        case 2:
          message.delta = reader.int32();
          break;
        case 3:
          message.absolute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCsgoSteamUserStatChange>, I>>(
    object: I
  ): CMsgCsgoSteamUserStatChange {
    const message = createBaseCMsgCsgoSteamUserStatChange();
    message.ecsgosteamuserstat = object.ecsgosteamuserstat ?? 0;
    message.delta = object.delta ?? 0;
    message.absolute = object.absolute ?? false;
    return message;
  }
};

function createBaseXpProgressData(): XpProgressData {
  return { xpPoints: 0, xpCategory: 0 };
}

export const XpProgressData = {
  encode(message: XpProgressData, writer: Writer = Writer.create()): Writer {
    if (message.xpPoints !== 0) {
      writer.uint32(8).uint32(message.xpPoints);
    }
    if (message.xpCategory !== 0) {
      writer.uint32(16).int32(message.xpCategory);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): XpProgressData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseXpProgressData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xpPoints = reader.uint32();
          break;
        case 2:
          message.xpCategory = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<XpProgressData>, I>>(
    object: I
  ): XpProgressData {
    const message = createBaseXpProgressData();
    message.xpPoints = object.xpPoints ?? 0;
    message.xpCategory = object.xpCategory ?? 0;
    return message;
  }
};

function createBaseMatchEndItemUpdates(): MatchEndItemUpdates {
  return { itemId: Long.UZERO, itemAttrDefidx: 0, itemAttrDeltaValue: 0 };
}

export const MatchEndItemUpdates = {
  encode(
    message: MatchEndItemUpdates,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.itemId.isZero()) {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.itemAttrDefidx !== 0) {
      writer.uint32(16).uint32(message.itemAttrDefidx);
    }
    if (message.itemAttrDeltaValue !== 0) {
      writer.uint32(24).uint32(message.itemAttrDeltaValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MatchEndItemUpdates {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchEndItemUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.uint64() as Long;
          break;
        case 2:
          message.itemAttrDefidx = reader.uint32();
          break;
        case 3:
          message.itemAttrDeltaValue = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MatchEndItemUpdates>, I>>(
    object: I
  ): MatchEndItemUpdates {
    const message = createBaseMatchEndItemUpdates();
    message.itemId =
      object.itemId !== undefined && object.itemId !== null
        ? Long.fromValue(object.itemId)
        : Long.UZERO;
    message.itemAttrDefidx = object.itemAttrDefidx ?? 0;
    message.itemAttrDeltaValue = object.itemAttrDeltaValue ?? 0;
    return message;
  }
};

function createBaseScoreLeaderboardData(): ScoreLeaderboardData {
  return {
    questId: Long.UZERO,
    score: 0,
    accountentries: [],
    matchentries: []
  };
}

export const ScoreLeaderboardData = {
  encode(
    message: ScoreLeaderboardData,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.questId.isZero()) {
      writer.uint32(8).uint64(message.questId);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    for (const v of message.accountentries) {
      ScoreLeaderboardData_AccountEntries.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.matchentries) {
      ScoreLeaderboardData_Entry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ScoreLeaderboardData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreLeaderboardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.uint64() as Long;
          break;
        case 2:
          message.score = reader.uint32();
          break;
        case 3:
          message.accountentries.push(
            ScoreLeaderboardData_AccountEntries.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.matchentries.push(
            ScoreLeaderboardData_Entry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ScoreLeaderboardData>, I>>(
    object: I
  ): ScoreLeaderboardData {
    const message = createBaseScoreLeaderboardData();
    message.questId =
      object.questId !== undefined && object.questId !== null
        ? Long.fromValue(object.questId)
        : Long.UZERO;
    message.score = object.score ?? 0;
    message.accountentries =
      object.accountentries?.map(e =>
        ScoreLeaderboardData_AccountEntries.fromPartial(e)
      ) || [];
    message.matchentries =
      object.matchentries?.map(e =>
        ScoreLeaderboardData_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseScoreLeaderboardData_Entry(): ScoreLeaderboardData_Entry {
  return { tag: 0, val: 0 };
}

export const ScoreLeaderboardData_Entry = {
  encode(
    message: ScoreLeaderboardData_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tag !== 0) {
      writer.uint32(8).uint32(message.tag);
    }
    if (message.val !== 0) {
      writer.uint32(16).uint32(message.val);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ScoreLeaderboardData_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreLeaderboardData_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.uint32();
          break;
        case 2:
          message.val = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ScoreLeaderboardData_Entry>, I>>(
    object: I
  ): ScoreLeaderboardData_Entry {
    const message = createBaseScoreLeaderboardData_Entry();
    message.tag = object.tag ?? 0;
    message.val = object.val ?? 0;
    return message;
  }
};

function createBaseScoreLeaderboardData_AccountEntries(): ScoreLeaderboardData_AccountEntries {
  return { accountid: 0, entries: [] };
}

export const ScoreLeaderboardData_AccountEntries = {
  encode(
    message: ScoreLeaderboardData_AccountEntries,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    for (const v of message.entries) {
      ScoreLeaderboardData_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ScoreLeaderboardData_AccountEntries {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreLeaderboardData_AccountEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.entries.push(
            ScoreLeaderboardData_Entry.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<ScoreLeaderboardData_AccountEntries>, I>
  >(object: I): ScoreLeaderboardData_AccountEntries {
    const message = createBaseScoreLeaderboardData_AccountEntries();
    message.accountid = object.accountid ?? 0;
    message.entries =
      object.entries?.map(e => ScoreLeaderboardData_Entry.fromPartial(e)) || [];
    return message;
  }
};

function createBasePlayerQuestData(): PlayerQuestData {
  return {
    questerAccountId: 0,
    questItemData: [],
    xpProgressData: [],
    timePlayed: 0,
    mmGameMode: 0,
    itemUpdates: [],
    operationPointsEligible: false,
    userstatchanges: []
  };
}

export const PlayerQuestData = {
  encode(message: PlayerQuestData, writer: Writer = Writer.create()): Writer {
    if (message.questerAccountId !== 0) {
      writer.uint32(8).uint32(message.questerAccountId);
    }
    for (const v of message.questItemData) {
      PlayerQuestData_QuestItemData.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.xpProgressData) {
      XpProgressData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.timePlayed !== 0) {
      writer.uint32(32).uint32(message.timePlayed);
    }
    if (message.mmGameMode !== 0) {
      writer.uint32(40).uint32(message.mmGameMode);
    }
    for (const v of message.itemUpdates) {
      MatchEndItemUpdates.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.operationPointsEligible === true) {
      writer.uint32(56).bool(message.operationPointsEligible);
    }
    for (const v of message.userstatchanges) {
      CMsgCsgoSteamUserStatChange.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerQuestData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerQuestData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questerAccountId = reader.uint32();
          break;
        case 2:
          message.questItemData.push(
            PlayerQuestData_QuestItemData.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.xpProgressData.push(
            XpProgressData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.timePlayed = reader.uint32();
          break;
        case 5:
          message.mmGameMode = reader.uint32();
          break;
        case 6:
          message.itemUpdates.push(
            MatchEndItemUpdates.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.operationPointsEligible = reader.bool();
          break;
        case 8:
          message.userstatchanges.push(
            CMsgCsgoSteamUserStatChange.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerQuestData>, I>>(
    object: I
  ): PlayerQuestData {
    const message = createBasePlayerQuestData();
    message.questerAccountId = object.questerAccountId ?? 0;
    message.questItemData =
      object.questItemData?.map(e =>
        PlayerQuestData_QuestItemData.fromPartial(e)
      ) || [];
    message.xpProgressData =
      object.xpProgressData?.map(e => XpProgressData.fromPartial(e)) || [];
    message.timePlayed = object.timePlayed ?? 0;
    message.mmGameMode = object.mmGameMode ?? 0;
    message.itemUpdates =
      object.itemUpdates?.map(e => MatchEndItemUpdates.fromPartial(e)) || [];
    message.operationPointsEligible = object.operationPointsEligible ?? false;
    message.userstatchanges =
      object.userstatchanges?.map(e =>
        CMsgCsgoSteamUserStatChange.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBasePlayerQuestData_QuestItemData(): PlayerQuestData_QuestItemData {
  return {
    questId: Long.UZERO,
    questNormalPointsEarned: 0,
    questBonusPointsEarned: 0
  };
}

export const PlayerQuestData_QuestItemData = {
  encode(
    message: PlayerQuestData_QuestItemData,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.questId.isZero()) {
      writer.uint32(8).uint64(message.questId);
    }
    if (message.questNormalPointsEarned !== 0) {
      writer.uint32(16).int32(message.questNormalPointsEarned);
    }
    if (message.questBonusPointsEarned !== 0) {
      writer.uint32(24).int32(message.questBonusPointsEarned);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): PlayerQuestData_QuestItemData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerQuestData_QuestItemData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.uint64() as Long;
          break;
        case 2:
          message.questNormalPointsEarned = reader.int32();
          break;
        case 3:
          message.questBonusPointsEarned = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerQuestData_QuestItemData>, I>>(
    object: I
  ): PlayerQuestData_QuestItemData {
    const message = createBasePlayerQuestData_QuestItemData();
    message.questId =
      object.questId !== undefined && object.questId !== null
        ? Long.fromValue(object.questId)
        : Long.UZERO;
    message.questNormalPointsEarned = object.questNormalPointsEarned ?? 0;
    message.questBonusPointsEarned = object.questBonusPointsEarned ?? 0;
    return message;
  }
};

function createBaseDeepPlayerStatsEntry(): DeepPlayerStatsEntry {
  return {
    accountid: 0,
    matchId: Long.UZERO,
    mmGameMode: 0,
    mapid: 0,
    bStartingCt: false,
    matchOutcome: 0,
    roundsWon: 0,
    roundsLost: 0,
    statScore: 0,
    statDeaths: 0,
    statMvps: 0,
    enemyKills: 0,
    enemyHeadshots: 0,
    enemy2ks: 0,
    enemy3ks: 0,
    enemy4ks: 0,
    totalDamage: 0,
    engagementsEntryCount: 0,
    engagementsEntryWins: 0,
    engagements1v1Count: 0,
    engagements1v1Wins: 0,
    engagements1v2Count: 0,
    engagements1v2Wins: 0,
    utilityCount: 0,
    utilitySuccess: 0,
    flashCount: 0,
    flashSuccess: 0,
    mates: []
  };
}

export const DeepPlayerStatsEntry = {
  encode(
    message: DeepPlayerStatsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.mmGameMode !== 0) {
      writer.uint32(24).uint32(message.mmGameMode);
    }
    if (message.mapid !== 0) {
      writer.uint32(32).uint32(message.mapid);
    }
    if (message.bStartingCt === true) {
      writer.uint32(40).bool(message.bStartingCt);
    }
    if (message.matchOutcome !== 0) {
      writer.uint32(48).uint32(message.matchOutcome);
    }
    if (message.roundsWon !== 0) {
      writer.uint32(56).uint32(message.roundsWon);
    }
    if (message.roundsLost !== 0) {
      writer.uint32(64).uint32(message.roundsLost);
    }
    if (message.statScore !== 0) {
      writer.uint32(72).uint32(message.statScore);
    }
    if (message.statDeaths !== 0) {
      writer.uint32(96).uint32(message.statDeaths);
    }
    if (message.statMvps !== 0) {
      writer.uint32(104).uint32(message.statMvps);
    }
    if (message.enemyKills !== 0) {
      writer.uint32(112).uint32(message.enemyKills);
    }
    if (message.enemyHeadshots !== 0) {
      writer.uint32(120).uint32(message.enemyHeadshots);
    }
    if (message.enemy2ks !== 0) {
      writer.uint32(128).uint32(message.enemy2ks);
    }
    if (message.enemy3ks !== 0) {
      writer.uint32(136).uint32(message.enemy3ks);
    }
    if (message.enemy4ks !== 0) {
      writer.uint32(144).uint32(message.enemy4ks);
    }
    if (message.totalDamage !== 0) {
      writer.uint32(152).uint32(message.totalDamage);
    }
    if (message.engagementsEntryCount !== 0) {
      writer.uint32(184).uint32(message.engagementsEntryCount);
    }
    if (message.engagementsEntryWins !== 0) {
      writer.uint32(192).uint32(message.engagementsEntryWins);
    }
    if (message.engagements1v1Count !== 0) {
      writer.uint32(200).uint32(message.engagements1v1Count);
    }
    if (message.engagements1v1Wins !== 0) {
      writer.uint32(208).uint32(message.engagements1v1Wins);
    }
    if (message.engagements1v2Count !== 0) {
      writer.uint32(216).uint32(message.engagements1v2Count);
    }
    if (message.engagements1v2Wins !== 0) {
      writer.uint32(224).uint32(message.engagements1v2Wins);
    }
    if (message.utilityCount !== 0) {
      writer.uint32(232).uint32(message.utilityCount);
    }
    if (message.utilitySuccess !== 0) {
      writer.uint32(240).uint32(message.utilitySuccess);
    }
    if (message.flashCount !== 0) {
      writer.uint32(256).uint32(message.flashCount);
    }
    if (message.flashSuccess !== 0) {
      writer.uint32(264).uint32(message.flashSuccess);
    }
    writer.uint32(274).fork();
    for (const v of message.mates) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeepPlayerStatsEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeepPlayerStatsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.matchId = reader.uint64() as Long;
          break;
        case 3:
          message.mmGameMode = reader.uint32();
          break;
        case 4:
          message.mapid = reader.uint32();
          break;
        case 5:
          message.bStartingCt = reader.bool();
          break;
        case 6:
          message.matchOutcome = reader.uint32();
          break;
        case 7:
          message.roundsWon = reader.uint32();
          break;
        case 8:
          message.roundsLost = reader.uint32();
          break;
        case 9:
          message.statScore = reader.uint32();
          break;
        case 12:
          message.statDeaths = reader.uint32();
          break;
        case 13:
          message.statMvps = reader.uint32();
          break;
        case 14:
          message.enemyKills = reader.uint32();
          break;
        case 15:
          message.enemyHeadshots = reader.uint32();
          break;
        case 16:
          message.enemy2ks = reader.uint32();
          break;
        case 17:
          message.enemy3ks = reader.uint32();
          break;
        case 18:
          message.enemy4ks = reader.uint32();
          break;
        case 19:
          message.totalDamage = reader.uint32();
          break;
        case 23:
          message.engagementsEntryCount = reader.uint32();
          break;
        case 24:
          message.engagementsEntryWins = reader.uint32();
          break;
        case 25:
          message.engagements1v1Count = reader.uint32();
          break;
        case 26:
          message.engagements1v1Wins = reader.uint32();
          break;
        case 27:
          message.engagements1v2Count = reader.uint32();
          break;
        case 28:
          message.engagements1v2Wins = reader.uint32();
          break;
        case 29:
          message.utilityCount = reader.uint32();
          break;
        case 30:
          message.utilitySuccess = reader.uint32();
          break;
        case 32:
          message.flashCount = reader.uint32();
          break;
        case 33:
          message.flashSuccess = reader.uint32();
          break;
        case 34:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mates.push(reader.uint32());
            }
          } else {
            message.mates.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<DeepPlayerStatsEntry>, I>>(
    object: I
  ): DeepPlayerStatsEntry {
    const message = createBaseDeepPlayerStatsEntry();
    message.accountid = object.accountid ?? 0;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.mmGameMode = object.mmGameMode ?? 0;
    message.mapid = object.mapid ?? 0;
    message.bStartingCt = object.bStartingCt ?? false;
    message.matchOutcome = object.matchOutcome ?? 0;
    message.roundsWon = object.roundsWon ?? 0;
    message.roundsLost = object.roundsLost ?? 0;
    message.statScore = object.statScore ?? 0;
    message.statDeaths = object.statDeaths ?? 0;
    message.statMvps = object.statMvps ?? 0;
    message.enemyKills = object.enemyKills ?? 0;
    message.enemyHeadshots = object.enemyHeadshots ?? 0;
    message.enemy2ks = object.enemy2ks ?? 0;
    message.enemy3ks = object.enemy3ks ?? 0;
    message.enemy4ks = object.enemy4ks ?? 0;
    message.totalDamage = object.totalDamage ?? 0;
    message.engagementsEntryCount = object.engagementsEntryCount ?? 0;
    message.engagementsEntryWins = object.engagementsEntryWins ?? 0;
    message.engagements1v1Count = object.engagements1v1Count ?? 0;
    message.engagements1v1Wins = object.engagements1v1Wins ?? 0;
    message.engagements1v2Count = object.engagements1v2Count ?? 0;
    message.engagements1v2Wins = object.engagements1v2Wins ?? 0;
    message.utilityCount = object.utilityCount ?? 0;
    message.utilitySuccess = object.utilitySuccess ?? 0;
    message.flashCount = object.flashCount ?? 0;
    message.flashSuccess = object.flashSuccess ?? 0;
    message.mates = object.mates?.map(e => e) || [];
    return message;
  }
};

function createBaseDeepPlayerMatchEvent(): DeepPlayerMatchEvent {
  return {
    accountid: 0,
    matchId: Long.UZERO,
    eventId: 0,
    eventType: 0,
    bPlayingCt: false,
    userPosX: 0,
    userPosY: 0,
    userPosZ: 0,
    userDefidx: 0,
    otherPosX: 0,
    otherPosY: 0,
    otherPosZ: 0,
    otherDefidx: 0,
    eventData: 0
  };
}

export const DeepPlayerMatchEvent = {
  encode(
    message: DeepPlayerMatchEvent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).uint32(message.eventId);
    }
    if (message.eventType !== 0) {
      writer.uint32(32).uint32(message.eventType);
    }
    if (message.bPlayingCt === true) {
      writer.uint32(40).bool(message.bPlayingCt);
    }
    if (message.userPosX !== 0) {
      writer.uint32(48).int32(message.userPosX);
    }
    if (message.userPosY !== 0) {
      writer.uint32(56).int32(message.userPosY);
    }
    if (message.userPosZ !== 0) {
      writer.uint32(96).int32(message.userPosZ);
    }
    if (message.userDefidx !== 0) {
      writer.uint32(64).uint32(message.userDefidx);
    }
    if (message.otherPosX !== 0) {
      writer.uint32(72).int32(message.otherPosX);
    }
    if (message.otherPosY !== 0) {
      writer.uint32(80).int32(message.otherPosY);
    }
    if (message.otherPosZ !== 0) {
      writer.uint32(104).int32(message.otherPosZ);
    }
    if (message.otherDefidx !== 0) {
      writer.uint32(88).uint32(message.otherDefidx);
    }
    if (message.eventData !== 0) {
      writer.uint32(112).int32(message.eventData);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeepPlayerMatchEvent {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeepPlayerMatchEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.matchId = reader.uint64() as Long;
          break;
        case 3:
          message.eventId = reader.uint32();
          break;
        case 4:
          message.eventType = reader.uint32();
          break;
        case 5:
          message.bPlayingCt = reader.bool();
          break;
        case 6:
          message.userPosX = reader.int32();
          break;
        case 7:
          message.userPosY = reader.int32();
          break;
        case 12:
          message.userPosZ = reader.int32();
          break;
        case 8:
          message.userDefidx = reader.uint32();
          break;
        case 9:
          message.otherPosX = reader.int32();
          break;
        case 10:
          message.otherPosY = reader.int32();
          break;
        case 13:
          message.otherPosZ = reader.int32();
          break;
        case 11:
          message.otherDefidx = reader.uint32();
          break;
        case 14:
          message.eventData = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<DeepPlayerMatchEvent>, I>>(
    object: I
  ): DeepPlayerMatchEvent {
    const message = createBaseDeepPlayerMatchEvent();
    message.accountid = object.accountid ?? 0;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.eventId = object.eventId ?? 0;
    message.eventType = object.eventType ?? 0;
    message.bPlayingCt = object.bPlayingCt ?? false;
    message.userPosX = object.userPosX ?? 0;
    message.userPosY = object.userPosY ?? 0;
    message.userPosZ = object.userPosZ ?? 0;
    message.userDefidx = object.userDefidx ?? 0;
    message.otherPosX = object.otherPosX ?? 0;
    message.otherPosY = object.otherPosY ?? 0;
    message.otherPosZ = object.otherPosZ ?? 0;
    message.otherDefidx = object.otherDefidx ?? 0;
    message.eventData = object.eventData ?? 0;
    return message;
  }
};

function createBaseCMsgGCServerQuestUpdateData(): CMsgGCServerQuestUpdateData {
  return {
    playerQuestData: [],
    binaryData: new Uint8Array(),
    mmGameMode: 0,
    missionlbsdata: undefined
  };
}

export const CMsgGCServerQuestUpdateData = {
  encode(
    message: CMsgGCServerQuestUpdateData,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.playerQuestData) {
      PlayerQuestData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.binaryData.length !== 0) {
      writer.uint32(18).bytes(message.binaryData);
    }
    if (message.mmGameMode !== 0) {
      writer.uint32(24).uint32(message.mmGameMode);
    }
    if (message.missionlbsdata !== undefined) {
      ScoreLeaderboardData.encode(
        message.missionlbsdata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCServerQuestUpdateData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCServerQuestUpdateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerQuestData.push(
            PlayerQuestData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.binaryData = reader.bytes();
          break;
        case 3:
          message.mmGameMode = reader.uint32();
          break;
        case 4:
          message.missionlbsdata = ScoreLeaderboardData.decode(
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCServerQuestUpdateData>, I>>(
    object: I
  ): CMsgGCServerQuestUpdateData {
    const message = createBaseCMsgGCServerQuestUpdateData();
    message.playerQuestData =
      object.playerQuestData?.map(e => PlayerQuestData.fromPartial(e)) || [];
    message.binaryData = object.binaryData ?? new Uint8Array();
    message.mmGameMode = object.mmGameMode ?? 0;
    message.missionlbsdata =
      object.missionlbsdata !== undefined && object.missionlbsdata !== null
        ? ScoreLeaderboardData.fromPartial(object.missionlbsdata)
        : undefined;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGCOperationalStats(): CMsgGCCStrike15V2MatchmakingGCOperationalStats {
  return { packetid: 0, namekeys: [], packets: [] };
}

export const CMsgGCCStrike15V2MatchmakingGCOperationalStats = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGCOperationalStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.packetid !== 0) {
      writer.uint32(8).int32(message.packetid);
    }
    for (const v of message.namekeys) {
      OperationalStatisticDescription.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.packets) {
      OperationalStatisticsPacket.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGCOperationalStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGCOperationalStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetid = reader.int32();
          break;
        case 2:
          message.namekeys.push(
            OperationalStatisticDescription.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.packets.push(
            OperationalStatisticsPacket.decode(reader, reader.uint32())
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
    I extends Exact<
      DeepPartial<CMsgGCCStrike15V2MatchmakingGCOperationalStats>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingGCOperationalStats {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGCOperationalStats();
    message.packetid = object.packetid ?? 0;
    message.namekeys =
      object.namekeys?.map(e =>
        OperationalStatisticDescription.fromPartial(e)
      ) || [];
    message.packets =
      object.packets?.map(e => OperationalStatisticsPacket.fromPartial(e)) ||
      [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm(): CMsgGCCStrike15V2MatchmakingGC2ServerConfirm {
  return { token: 0, stamp: 0, exchange: Long.UZERO };
}

export const CMsgGCCStrike15V2MatchmakingGC2ServerConfirm = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ServerConfirm,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.token !== 0) {
      writer.uint32(8).uint32(message.token);
    }
    if (message.stamp !== 0) {
      writer.uint32(16).uint32(message.stamp);
    }
    if (!message.exchange.isZero()) {
      writer.uint32(24).uint64(message.exchange);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ServerConfirm {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.uint32();
          break;
        case 2:
          message.stamp = reader.uint32();
          break;
        case 3:
          message.exchange = reader.uint64() as Long;
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ServerConfirm>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ServerConfirm {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm();
    message.token = object.token ?? 0;
    message.stamp = object.stamp ?? 0;
    message.exchange =
      object.exchange !== undefined && object.exchange !== null
        ? Long.fromValue(object.exchange)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ServerReservationUpdate(): CMsgGCCStrike15V2GC2ServerReservationUpdate {
  return { viewersExternalTotal: 0, viewersExternalSteam: 0 };
}

export const CMsgGCCStrike15V2GC2ServerReservationUpdate = {
  encode(
    message: CMsgGCCStrike15V2GC2ServerReservationUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.viewersExternalTotal !== 0) {
      writer.uint32(8).uint32(message.viewersExternalTotal);
    }
    if (message.viewersExternalSteam !== 0) {
      writer.uint32(16).uint32(message.viewersExternalSteam);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ServerReservationUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ServerReservationUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.viewersExternalTotal = reader.uint32();
          break;
        case 2:
          message.viewersExternalSteam = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GC2ServerReservationUpdate>, I>
  >(object: I): CMsgGCCStrike15V2GC2ServerReservationUpdate {
    const message = createBaseCMsgGCCStrike15V2GC2ServerReservationUpdate();
    message.viewersExternalTotal = object.viewersExternalTotal ?? 0;
    message.viewersExternalSteam = object.viewersExternalSteam ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingStart(): CMsgGCCStrike15V2MatchmakingStart {
  return {
    accountIds: [],
    gameType: 0,
    ticketData: "",
    clientVersion: 0,
    tournamentMatch: undefined,
    primeOnly: false,
    tvControl: 0,
    lobbyId: Long.UZERO
  };
}

export const CMsgGCCStrike15V2MatchmakingStart = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingStart,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.gameType !== 0) {
      writer.uint32(16).uint32(message.gameType);
    }
    if (message.ticketData !== "") {
      writer.uint32(26).string(message.ticketData);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(32).uint32(message.clientVersion);
    }
    if (message.tournamentMatch !== undefined) {
      TournamentMatchSetup.encode(
        message.tournamentMatch,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.primeOnly === true) {
      writer.uint32(48).bool(message.primeOnly);
    }
    if (message.tvControl !== 0) {
      writer.uint32(56).uint32(message.tvControl);
    }
    if (!message.lobbyId.isZero()) {
      writer.uint32(64).uint64(message.lobbyId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingStart {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }
          } else {
            message.accountIds.push(reader.uint32());
          }
          break;
        case 2:
          message.gameType = reader.uint32();
          break;
        case 3:
          message.ticketData = reader.string();
          break;
        case 4:
          message.clientVersion = reader.uint32();
          break;
        case 5:
          message.tournamentMatch = TournamentMatchSetup.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.primeOnly = reader.bool();
          break;
        case 7:
          message.tvControl = reader.uint32();
          break;
        case 8:
          message.lobbyId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchmakingStart>, I>
  >(object: I): CMsgGCCStrike15V2MatchmakingStart {
    const message = createBaseCMsgGCCStrike15V2MatchmakingStart();
    message.accountIds = object.accountIds?.map(e => e) || [];
    message.gameType = object.gameType ?? 0;
    message.ticketData = object.ticketData ?? "";
    message.clientVersion = object.clientVersion ?? 0;
    message.tournamentMatch =
      object.tournamentMatch !== undefined && object.tournamentMatch !== null
        ? TournamentMatchSetup.fromPartial(object.tournamentMatch)
        : undefined;
    message.primeOnly = object.primeOnly ?? false;
    message.tvControl = object.tvControl ?? 0;
    message.lobbyId =
      object.lobbyId !== undefined && object.lobbyId !== null
        ? Long.fromValue(object.lobbyId)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingStop(): CMsgGCCStrike15V2MatchmakingStop {
  return { abandon: 0 };
}

export const CMsgGCCStrike15V2MatchmakingStop = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingStop,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.abandon !== 0) {
      writer.uint32(8).int32(message.abandon);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingStop {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abandon = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchmakingStop>, I>
  >(object: I): CMsgGCCStrike15V2MatchmakingStop {
    const message = createBaseCMsgGCCStrike15V2MatchmakingStop();
    message.abandon = object.abandon ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingClient2ServerPing(): CMsgGCCStrike15V2MatchmakingClient2ServerPing {
  return {
    gameserverpings: [],
    offsetIndex: 0,
    finalBatch: 0,
    dataCenterPings: [],
    maxPing: 0,
    testToken: 0
  };
}

export const CMsgGCCStrike15V2MatchmakingClient2ServerPing = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingClient2ServerPing,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.gameserverpings) {
      GameServerPing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.offsetIndex !== 0) {
      writer.uint32(16).int32(message.offsetIndex);
    }
    if (message.finalBatch !== 0) {
      writer.uint32(24).int32(message.finalBatch);
    }
    for (const v of message.dataCenterPings) {
      DataCenterPing.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxPing !== 0) {
      writer.uint32(40).uint32(message.maxPing);
    }
    if (message.testToken !== 0) {
      writer.uint32(53).fixed32(message.testToken);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingClient2ServerPing {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingClient2ServerPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameserverpings.push(
            GameServerPing.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.offsetIndex = reader.int32();
          break;
        case 3:
          message.finalBatch = reader.int32();
          break;
        case 4:
          message.dataCenterPings.push(
            DataCenterPing.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.maxPing = reader.uint32();
          break;
        case 6:
          message.testToken = reader.fixed32();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingClient2ServerPing>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingClient2ServerPing {
    const message = createBaseCMsgGCCStrike15V2MatchmakingClient2ServerPing();
    message.gameserverpings =
      object.gameserverpings?.map(e => GameServerPing.fromPartial(e)) || [];
    message.offsetIndex = object.offsetIndex ?? 0;
    message.finalBatch = object.finalBatch ?? 0;
    message.dataCenterPings =
      object.dataCenterPings?.map(e => DataCenterPing.fromPartial(e)) || [];
    message.maxPing = object.maxPing ?? 0;
    message.testToken = object.testToken ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate(): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate {
  return {
    matchmaking: 0,
    waitingAccountIdSessions: [],
    error: "",
    ongoingmatchAccountIdSessions: [],
    globalStats: undefined,
    failpingAccountIdSessions: [],
    penaltyAccountIdSessions: [],
    failreadyAccountIdSessions: [],
    vacbannedAccountIdSessions: [],
    serverIpaddressMask: undefined,
    notes: [],
    penaltyAccountIdSessionsGreen: [],
    insufficientlevelSessions: [],
    vsncheckAccountIdSessions: [],
    launcherMismatchSessions: [],
    insecureAccountIdSessions: []
  };
}

export const CMsgGCCStrike15V2MatchmakingGC2ClientUpdate = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.matchmaking !== 0) {
      writer.uint32(8).int32(message.matchmaking);
    }
    writer.uint32(18).fork();
    for (const v of message.waitingAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    writer.uint32(50).fork();
    for (const v of message.ongoingmatchAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.globalStats !== undefined) {
      GlobalStatistics.encode(
        message.globalStats,
        writer.uint32(58).fork()
      ).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.failpingAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.penaltyAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(82).fork();
    for (const v of message.failreadyAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.vacbannedAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.serverIpaddressMask !== undefined) {
      IpAddressMask.encode(
        message.serverIpaddressMask,
        writer.uint32(98).fork()
      ).ldelim();
    }
    for (const v of message.notes) {
      CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note.encode(
        v!,
        writer.uint32(106).fork()
      ).ldelim();
    }
    writer.uint32(114).fork();
    for (const v of message.penaltyAccountIdSessionsGreen) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(122).fork();
    for (const v of message.insufficientlevelSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(130).fork();
    for (const v of message.vsncheckAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(138).fork();
    for (const v of message.launcherMismatchSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(146).fork();
    for (const v of message.insecureAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchmaking = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.waitingAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.waitingAccountIdSessions.push(reader.uint32());
          }
          break;
        case 3:
          message.error = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ongoingmatchAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.ongoingmatchAccountIdSessions.push(reader.uint32());
          }
          break;
        case 7:
          message.globalStats = GlobalStatistics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failpingAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.failpingAccountIdSessions.push(reader.uint32());
          }
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.penaltyAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.penaltyAccountIdSessions.push(reader.uint32());
          }
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failreadyAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.failreadyAccountIdSessions.push(reader.uint32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vacbannedAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.vacbannedAccountIdSessions.push(reader.uint32());
          }
          break;
        case 12:
          message.serverIpaddressMask = IpAddressMask.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.notes.push(
            CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.penaltyAccountIdSessionsGreen.push(reader.uint32());
            }
          } else {
            message.penaltyAccountIdSessionsGreen.push(reader.uint32());
          }
          break;
        case 15:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.insufficientlevelSessions.push(reader.uint32());
            }
          } else {
            message.insufficientlevelSessions.push(reader.uint32());
          }
          break;
        case 16:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vsncheckAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.vsncheckAccountIdSessions.push(reader.uint32());
          }
          break;
        case 17:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.launcherMismatchSessions.push(reader.uint32());
            }
          } else {
            message.launcherMismatchSessions.push(reader.uint32());
          }
          break;
        case 18:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.insecureAccountIdSessions.push(reader.uint32());
            }
          } else {
            message.insecureAccountIdSessions.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ClientUpdate>, I>
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate();
    message.matchmaking = object.matchmaking ?? 0;
    message.waitingAccountIdSessions =
      object.waitingAccountIdSessions?.map(e => e) || [];
    message.error = object.error ?? "";
    message.ongoingmatchAccountIdSessions =
      object.ongoingmatchAccountIdSessions?.map(e => e) || [];
    message.globalStats =
      object.globalStats !== undefined && object.globalStats !== null
        ? GlobalStatistics.fromPartial(object.globalStats)
        : undefined;
    message.failpingAccountIdSessions =
      object.failpingAccountIdSessions?.map(e => e) || [];
    message.penaltyAccountIdSessions =
      object.penaltyAccountIdSessions?.map(e => e) || [];
    message.failreadyAccountIdSessions =
      object.failreadyAccountIdSessions?.map(e => e) || [];
    message.vacbannedAccountIdSessions =
      object.vacbannedAccountIdSessions?.map(e => e) || [];
    message.serverIpaddressMask =
      object.serverIpaddressMask !== undefined &&
      object.serverIpaddressMask !== null
        ? IpAddressMask.fromPartial(object.serverIpaddressMask)
        : undefined;
    message.notes =
      object.notes?.map(e =>
        CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note.fromPartial(e)
      ) || [];
    message.penaltyAccountIdSessionsGreen =
      object.penaltyAccountIdSessionsGreen?.map(e => e) || [];
    message.insufficientlevelSessions =
      object.insufficientlevelSessions?.map(e => e) || [];
    message.vsncheckAccountIdSessions =
      object.vsncheckAccountIdSessions?.map(e => e) || [];
    message.launcherMismatchSessions =
      object.launcherMismatchSessions?.map(e => e) || [];
    message.insecureAccountIdSessions =
      object.insecureAccountIdSessions?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note(): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note {
  return { type: 0, regionId: 0, regionR: 0, distance: 0 };
}

export const CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.regionId !== 0) {
      writer.uint32(16).int32(message.regionId);
    }
    if (message.regionR !== 0) {
      writer.uint32(29).float(message.regionR);
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.regionId = reader.int32();
          break;
        case 3:
          message.regionR = reader.float();
          break;
        case 4:
          message.distance = reader.float();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note {
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note();
    message.type = object.type ?? 0;
    message.regionId = object.regionId ?? 0;
    message.regionR = object.regionR ?? 0;
    message.distance = object.distance ?? 0;
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentMatchDraft(): CDataGCCStrike15V2TournamentMatchDraft {
  return {
    eventId: 0,
    eventStageId: 0,
    teamId0: 0,
    teamId1: 0,
    mapsCount: 0,
    mapsCurrent: 0,
    teamIdStart: 0,
    teamIdVeto1: 0,
    teamIdPickn: 0,
    drafts: []
  };
}

export const CDataGCCStrike15V2TournamentMatchDraft = {
  encode(
    message: CDataGCCStrike15V2TournamentMatchDraft,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.eventStageId !== 0) {
      writer.uint32(16).int32(message.eventStageId);
    }
    if (message.teamId0 !== 0) {
      writer.uint32(24).int32(message.teamId0);
    }
    if (message.teamId1 !== 0) {
      writer.uint32(32).int32(message.teamId1);
    }
    if (message.mapsCount !== 0) {
      writer.uint32(40).int32(message.mapsCount);
    }
    if (message.mapsCurrent !== 0) {
      writer.uint32(48).int32(message.mapsCurrent);
    }
    if (message.teamIdStart !== 0) {
      writer.uint32(56).int32(message.teamIdStart);
    }
    if (message.teamIdVeto1 !== 0) {
      writer.uint32(64).int32(message.teamIdVeto1);
    }
    if (message.teamIdPickn !== 0) {
      writer.uint32(72).int32(message.teamIdPickn);
    }
    for (const v of message.drafts) {
      CDataGCCStrike15V2TournamentMatchDraft_Entry.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentMatchDraft {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentMatchDraft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.int32();
          break;
        case 2:
          message.eventStageId = reader.int32();
          break;
        case 3:
          message.teamId0 = reader.int32();
          break;
        case 4:
          message.teamId1 = reader.int32();
          break;
        case 5:
          message.mapsCount = reader.int32();
          break;
        case 6:
          message.mapsCurrent = reader.int32();
          break;
        case 7:
          message.teamIdStart = reader.int32();
          break;
        case 8:
          message.teamIdVeto1 = reader.int32();
          break;
        case 9:
          message.teamIdPickn = reader.int32();
          break;
        case 10:
          message.drafts.push(
            CDataGCCStrike15V2TournamentMatchDraft_Entry.decode(
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
    I extends Exact<DeepPartial<CDataGCCStrike15V2TournamentMatchDraft>, I>
  >(object: I): CDataGCCStrike15V2TournamentMatchDraft {
    const message = createBaseCDataGCCStrike15V2TournamentMatchDraft();
    message.eventId = object.eventId ?? 0;
    message.eventStageId = object.eventStageId ?? 0;
    message.teamId0 = object.teamId0 ?? 0;
    message.teamId1 = object.teamId1 ?? 0;
    message.mapsCount = object.mapsCount ?? 0;
    message.mapsCurrent = object.mapsCurrent ?? 0;
    message.teamIdStart = object.teamIdStart ?? 0;
    message.teamIdVeto1 = object.teamIdVeto1 ?? 0;
    message.teamIdPickn = object.teamIdPickn ?? 0;
    message.drafts =
      object.drafts?.map(e =>
        CDataGCCStrike15V2TournamentMatchDraft_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentMatchDraft_Entry(): CDataGCCStrike15V2TournamentMatchDraft_Entry {
  return { mapid: 0, teamIdCt: 0 };
}

export const CDataGCCStrike15V2TournamentMatchDraft_Entry = {
  encode(
    message: CDataGCCStrike15V2TournamentMatchDraft_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mapid !== 0) {
      writer.uint32(8).int32(message.mapid);
    }
    if (message.teamIdCt !== 0) {
      writer.uint32(16).int32(message.teamIdCt);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentMatchDraft_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentMatchDraft_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapid = reader.int32();
          break;
        case 2:
          message.teamIdCt = reader.int32();
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
      DeepPartial<CDataGCCStrike15V2TournamentMatchDraft_Entry>,
      I
    >
  >(object: I): CDataGCCStrike15V2TournamentMatchDraft_Entry {
    const message = createBaseCDataGCCStrike15V2TournamentMatchDraft_Entry();
    message.mapid = object.mapid ?? 0;
    message.teamIdCt = object.teamIdCt ?? 0;
    return message;
  }
};

function createBaseCPreMatchInfoData(): CPreMatchInfoData {
  return { predictionsPct: 0, draft: undefined, stats: [], wins: [] };
}

export const CPreMatchInfoData = {
  encode(message: CPreMatchInfoData, writer: Writer = Writer.create()): Writer {
    if (message.predictionsPct !== 0) {
      writer.uint32(8).int32(message.predictionsPct);
    }
    if (message.draft !== undefined) {
      CDataGCCStrike15V2TournamentMatchDraft.encode(
        message.draft,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.stats) {
      CPreMatchInfoData_TeamStats.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.wins) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CPreMatchInfoData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPreMatchInfoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.predictionsPct = reader.int32();
          break;
        case 4:
          message.draft = CDataGCCStrike15V2TournamentMatchDraft.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.stats.push(
            CPreMatchInfoData_TeamStats.decode(reader, reader.uint32())
          );
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wins.push(reader.int32());
            }
          } else {
            message.wins.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CPreMatchInfoData>, I>>(
    object: I
  ): CPreMatchInfoData {
    const message = createBaseCPreMatchInfoData();
    message.predictionsPct = object.predictionsPct ?? 0;
    message.draft =
      object.draft !== undefined && object.draft !== null
        ? CDataGCCStrike15V2TournamentMatchDraft.fromPartial(object.draft)
        : undefined;
    message.stats =
      object.stats?.map(e => CPreMatchInfoData_TeamStats.fromPartial(e)) || [];
    message.wins = object.wins?.map(e => e) || [];
    return message;
  }
};

function createBaseCPreMatchInfoData_TeamStats(): CPreMatchInfoData_TeamStats {
  return { matchInfoIdxtxt: 0, matchInfoTxt: "", matchInfoTeams: [] };
}

export const CPreMatchInfoData_TeamStats = {
  encode(
    message: CPreMatchInfoData_TeamStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.matchInfoIdxtxt !== 0) {
      writer.uint32(8).int32(message.matchInfoIdxtxt);
    }
    if (message.matchInfoTxt !== "") {
      writer.uint32(18).string(message.matchInfoTxt);
    }
    for (const v of message.matchInfoTeams) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CPreMatchInfoData_TeamStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPreMatchInfoData_TeamStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchInfoIdxtxt = reader.int32();
          break;
        case 2:
          message.matchInfoTxt = reader.string();
          break;
        case 3:
          message.matchInfoTeams.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CPreMatchInfoData_TeamStats>, I>>(
    object: I
  ): CPreMatchInfoData_TeamStats {
    const message = createBaseCPreMatchInfoData_TeamStats();
    message.matchInfoIdxtxt = object.matchInfoIdxtxt ?? 0;
    message.matchInfoTxt = object.matchInfoTxt ?? "";
    message.matchInfoTeams = object.matchInfoTeams?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ServerReserve(): CMsgGCCStrike15V2MatchmakingGC2ServerReserve {
  return {
    accountIds: [],
    gameType: 0,
    matchId: Long.UZERO,
    serverVersion: 0,
    flags: 0,
    rankings: [],
    encryptionKey: Long.UZERO,
    encryptionKeyPub: Long.UZERO,
    partyIds: [],
    whitelist: [],
    tvMasterSteamid: Long.UZERO,
    tournamentEvent: undefined,
    tournamentTeams: [],
    tournamentCastersAccountIds: [],
    tvRelaySteamid: Long.UZERO,
    preMatchData: undefined,
    rtime32EventStart: 0,
    tvControl: 0
  };
}

export const CMsgGCCStrike15V2MatchmakingGC2ServerReserve = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ServerReserve,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.gameType !== 0) {
      writer.uint32(16).uint32(message.gameType);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(24).uint64(message.matchId);
    }
    if (message.serverVersion !== 0) {
      writer.uint32(32).uint32(message.serverVersion);
    }
    if (message.flags !== 0) {
      writer.uint32(144).uint32(message.flags);
    }
    for (const v of message.rankings) {
      PlayerRankingInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.encryptionKey.isZero()) {
      writer.uint32(48).uint64(message.encryptionKey);
    }
    if (!message.encryptionKeyPub.isZero()) {
      writer.uint32(56).uint64(message.encryptionKeyPub);
    }
    writer.uint32(66).fork();
    for (const v of message.partyIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.whitelist) {
      IpAddressMask.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (!message.tvMasterSteamid.isZero()) {
      writer.uint32(80).uint64(message.tvMasterSteamid);
    }
    if (message.tournamentEvent !== undefined) {
      TournamentEvent.encode(
        message.tournamentEvent,
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.tournamentTeams) {
      TournamentTeam.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(106).fork();
    for (const v of message.tournamentCastersAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (!message.tvRelaySteamid.isZero()) {
      writer.uint32(112).uint64(message.tvRelaySteamid);
    }
    if (message.preMatchData !== undefined) {
      CPreMatchInfoData.encode(
        message.preMatchData,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.rtime32EventStart !== 0) {
      writer.uint32(128).uint32(message.rtime32EventStart);
    }
    if (message.tvControl !== 0) {
      writer.uint32(136).uint32(message.tvControl);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ServerReserve {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ServerReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }
          } else {
            message.accountIds.push(reader.uint32());
          }
          break;
        case 2:
          message.gameType = reader.uint32();
          break;
        case 3:
          message.matchId = reader.uint64() as Long;
          break;
        case 4:
          message.serverVersion = reader.uint32();
          break;
        case 18:
          message.flags = reader.uint32();
          break;
        case 5:
          message.rankings.push(
            PlayerRankingInfo.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.encryptionKey = reader.uint64() as Long;
          break;
        case 7:
          message.encryptionKeyPub = reader.uint64() as Long;
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.partyIds.push(reader.uint32());
            }
          } else {
            message.partyIds.push(reader.uint32());
          }
          break;
        case 9:
          message.whitelist.push(IpAddressMask.decode(reader, reader.uint32()));
          break;
        case 10:
          message.tvMasterSteamid = reader.uint64() as Long;
          break;
        case 11:
          message.tournamentEvent = TournamentEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.tournamentTeams.push(
            TournamentTeam.decode(reader, reader.uint32())
          );
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tournamentCastersAccountIds.push(reader.uint32());
            }
          } else {
            message.tournamentCastersAccountIds.push(reader.uint32());
          }
          break;
        case 14:
          message.tvRelaySteamid = reader.uint64() as Long;
          break;
        case 15:
          message.preMatchData = CPreMatchInfoData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.rtime32EventStart = reader.uint32();
          break;
        case 17:
          message.tvControl = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ServerReserve>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ServerReserve {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ServerReserve();
    message.accountIds = object.accountIds?.map(e => e) || [];
    message.gameType = object.gameType ?? 0;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.serverVersion = object.serverVersion ?? 0;
    message.flags = object.flags ?? 0;
    message.rankings =
      object.rankings?.map(e => PlayerRankingInfo.fromPartial(e)) || [];
    message.encryptionKey =
      object.encryptionKey !== undefined && object.encryptionKey !== null
        ? Long.fromValue(object.encryptionKey)
        : Long.UZERO;
    message.encryptionKeyPub =
      object.encryptionKeyPub !== undefined && object.encryptionKeyPub !== null
        ? Long.fromValue(object.encryptionKeyPub)
        : Long.UZERO;
    message.partyIds = object.partyIds?.map(e => e) || [];
    message.whitelist =
      object.whitelist?.map(e => IpAddressMask.fromPartial(e)) || [];
    message.tvMasterSteamid =
      object.tvMasterSteamid !== undefined && object.tvMasterSteamid !== null
        ? Long.fromValue(object.tvMasterSteamid)
        : Long.UZERO;
    message.tournamentEvent =
      object.tournamentEvent !== undefined && object.tournamentEvent !== null
        ? TournamentEvent.fromPartial(object.tournamentEvent)
        : undefined;
    message.tournamentTeams =
      object.tournamentTeams?.map(e => TournamentTeam.fromPartial(e)) || [];
    message.tournamentCastersAccountIds =
      object.tournamentCastersAccountIds?.map(e => e) || [];
    message.tvRelaySteamid =
      object.tvRelaySteamid !== undefined && object.tvRelaySteamid !== null
        ? Long.fromValue(object.tvRelaySteamid)
        : Long.UZERO;
    message.preMatchData =
      object.preMatchData !== undefined && object.preMatchData !== null
        ? CPreMatchInfoData.fromPartial(object.preMatchData)
        : undefined;
    message.rtime32EventStart = object.rtime32EventStart ?? 0;
    message.tvControl = object.tvControl ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingServerReservationResponse(): CMsgGCCStrike15V2MatchmakingServerReservationResponse {
  return {
    reservationid: Long.UZERO,
    reservation: undefined,
    map: "",
    gcReservationSent: Long.UZERO,
    serverVersion: 0,
    tvInfo: undefined,
    rewardPlayerAccounts: [],
    idlePlayerAccounts: [],
    rewardItemAttrDefIdx: 0,
    rewardItemAttrValue: 0,
    rewardItemAttrRewardIdx: 0,
    rewardDropList: 0,
    tournamentTag: "",
    legacySteamdatagramPort: 0,
    steamdatagramRouting: 0,
    testToken: 0,
    flags: 0
  };
}

export const CMsgGCCStrike15V2MatchmakingServerReservationResponse = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingServerReservationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.reservationid.isZero()) {
      writer.uint32(8).uint64(message.reservationid);
    }
    if (message.reservation !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.map !== "") {
      writer.uint32(26).string(message.map);
    }
    if (!message.gcReservationSent.isZero()) {
      writer.uint32(32).uint64(message.gcReservationSent);
    }
    if (message.serverVersion !== 0) {
      writer.uint32(40).uint32(message.serverVersion);
    }
    if (message.tvInfo !== undefined) {
      ServerHltvInfo.encode(message.tvInfo, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.rewardPlayerAccounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.idlePlayerAccounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.rewardItemAttrDefIdx !== 0) {
      writer.uint32(72).uint32(message.rewardItemAttrDefIdx);
    }
    if (message.rewardItemAttrValue !== 0) {
      writer.uint32(80).uint32(message.rewardItemAttrValue);
    }
    if (message.rewardItemAttrRewardIdx !== 0) {
      writer.uint32(88).uint32(message.rewardItemAttrRewardIdx);
    }
    if (message.rewardDropList !== 0) {
      writer.uint32(96).uint32(message.rewardDropList);
    }
    if (message.tournamentTag !== "") {
      writer.uint32(106).string(message.tournamentTag);
    }
    if (message.legacySteamdatagramPort !== 0) {
      writer.uint32(112).uint32(message.legacySteamdatagramPort);
    }
    if (message.steamdatagramRouting !== 0) {
      writer.uint32(136).uint32(message.steamdatagramRouting);
    }
    if (message.testToken !== 0) {
      writer.uint32(125).fixed32(message.testToken);
    }
    if (message.flags !== 0) {
      writer.uint32(128).uint32(message.flags);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingServerReservationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingServerReservationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationid = reader.uint64() as Long;
          break;
        case 2:
          message.reservation =
            CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.map = reader.string();
          break;
        case 4:
          message.gcReservationSent = reader.uint64() as Long;
          break;
        case 5:
          message.serverVersion = reader.uint32();
          break;
        case 6:
          message.tvInfo = ServerHltvInfo.decode(reader, reader.uint32());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rewardPlayerAccounts.push(reader.uint32());
            }
          } else {
            message.rewardPlayerAccounts.push(reader.uint32());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.idlePlayerAccounts.push(reader.uint32());
            }
          } else {
            message.idlePlayerAccounts.push(reader.uint32());
          }
          break;
        case 9:
          message.rewardItemAttrDefIdx = reader.uint32();
          break;
        case 10:
          message.rewardItemAttrValue = reader.uint32();
          break;
        case 11:
          message.rewardItemAttrRewardIdx = reader.uint32();
          break;
        case 12:
          message.rewardDropList = reader.uint32();
          break;
        case 13:
          message.tournamentTag = reader.string();
          break;
        case 14:
          message.legacySteamdatagramPort = reader.uint32();
          break;
        case 17:
          message.steamdatagramRouting = reader.uint32();
          break;
        case 15:
          message.testToken = reader.fixed32();
          break;
        case 16:
          message.flags = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingServerReservationResponse>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingServerReservationResponse {
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingServerReservationResponse();
    message.reservationid =
      object.reservationid !== undefined && object.reservationid !== null
        ? Long.fromValue(object.reservationid)
        : Long.UZERO;
    message.reservation =
      object.reservation !== undefined && object.reservation !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(
            object.reservation
          )
        : undefined;
    message.map = object.map ?? "";
    message.gcReservationSent =
      object.gcReservationSent !== undefined &&
      object.gcReservationSent !== null
        ? Long.fromValue(object.gcReservationSent)
        : Long.UZERO;
    message.serverVersion = object.serverVersion ?? 0;
    message.tvInfo =
      object.tvInfo !== undefined && object.tvInfo !== null
        ? ServerHltvInfo.fromPartial(object.tvInfo)
        : undefined;
    message.rewardPlayerAccounts =
      object.rewardPlayerAccounts?.map(e => e) || [];
    message.idlePlayerAccounts = object.idlePlayerAccounts?.map(e => e) || [];
    message.rewardItemAttrDefIdx = object.rewardItemAttrDefIdx ?? 0;
    message.rewardItemAttrValue = object.rewardItemAttrValue ?? 0;
    message.rewardItemAttrRewardIdx = object.rewardItemAttrRewardIdx ?? 0;
    message.rewardDropList = object.rewardDropList ?? 0;
    message.tournamentTag = object.tournamentTag ?? "";
    message.legacySteamdatagramPort = object.legacySteamdatagramPort ?? 0;
    message.steamdatagramRouting = object.steamdatagramRouting ?? 0;
    message.testToken = object.testToken ?? 0;
    message.flags = object.flags ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientReserve(): CMsgGCCStrike15V2MatchmakingGC2ClientReserve {
  return {
    serverid: Long.UZERO,
    directUdpIp: 0,
    directUdpPort: 0,
    reservationid: Long.UZERO,
    reservation: undefined,
    map: "",
    serverAddress: ""
  };
}

export const CMsgGCCStrike15V2MatchmakingGC2ClientReserve = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientReserve,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.serverid.isZero()) {
      writer.uint32(8).uint64(message.serverid);
    }
    if (message.directUdpIp !== 0) {
      writer.uint32(16).uint32(message.directUdpIp);
    }
    if (message.directUdpPort !== 0) {
      writer.uint32(24).uint32(message.directUdpPort);
    }
    if (!message.reservationid.isZero()) {
      writer.uint32(32).uint64(message.reservationid);
    }
    if (message.reservation !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.map !== "") {
      writer.uint32(50).string(message.map);
    }
    if (message.serverAddress !== "") {
      writer.uint32(58).string(message.serverAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientReserve {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverid = reader.uint64() as Long;
          break;
        case 2:
          message.directUdpIp = reader.uint32();
          break;
        case 3:
          message.directUdpPort = reader.uint32();
          break;
        case 4:
          message.reservationid = reader.uint64() as Long;
          break;
        case 5:
          message.reservation =
            CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.map = reader.string();
          break;
        case 7:
          message.serverAddress = reader.string();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ClientReserve>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ClientReserve {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientReserve();
    message.serverid =
      object.serverid !== undefined && object.serverid !== null
        ? Long.fromValue(object.serverid)
        : Long.UZERO;
    message.directUdpIp = object.directUdpIp ?? 0;
    message.directUdpPort = object.directUdpPort ?? 0;
    message.reservationid =
      object.reservationid !== undefined && object.reservationid !== null
        ? Long.fromValue(object.reservationid)
        : Long.UZERO;
    message.reservation =
      object.reservation !== undefined && object.reservation !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(
            object.reservation
          )
        : undefined;
    message.map = object.map ?? "";
    message.serverAddress = object.serverAddress ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats(): CMsgGCCStrike15V2MatchmakingServerRoundStats {
  return {
    reservationid: Long.UZERO,
    reservation: undefined,
    map: "",
    round: 0,
    kills: [],
    assists: [],
    deaths: [],
    scores: [],
    pings: [],
    roundResult: 0,
    matchResult: 0,
    teamScores: [],
    confirm: undefined,
    reservationStage: 0,
    matchDuration: 0,
    enemyKills: [],
    enemyHeadshots: [],
    enemy3ks: [],
    enemy4ks: [],
    enemy5ks: [],
    mvps: [],
    spectatorsCount: 0,
    spectatorsCountTv: 0,
    spectatorsCountLnk: 0,
    enemyKillsAgg: [],
    dropInfo: undefined,
    bSwitchedTeams: false,
    enemy2ks: [],
    playerSpawned: [],
    teamSpawnCount: [],
    maxRounds: 0
  };
}

export const CMsgGCCStrike15V2MatchmakingServerRoundStats = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingServerRoundStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.reservationid.isZero()) {
      writer.uint32(8).uint64(message.reservationid);
    }
    if (message.reservation !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.map !== "") {
      writer.uint32(26).string(message.map);
    }
    if (message.round !== 0) {
      writer.uint32(32).int32(message.round);
    }
    writer.uint32(42).fork();
    for (const v of message.kills) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.assists) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.deaths) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.scores) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.pings) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.roundResult !== 0) {
      writer.uint32(80).int32(message.roundResult);
    }
    if (message.matchResult !== 0) {
      writer.uint32(88).int32(message.matchResult);
    }
    writer.uint32(98).fork();
    for (const v of message.teamScores) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.confirm !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.encode(
        message.confirm,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.reservationStage !== 0) {
      writer.uint32(112).int32(message.reservationStage);
    }
    if (message.matchDuration !== 0) {
      writer.uint32(120).int32(message.matchDuration);
    }
    writer.uint32(130).fork();
    for (const v of message.enemyKills) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(138).fork();
    for (const v of message.enemyHeadshots) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(146).fork();
    for (const v of message.enemy3ks) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(154).fork();
    for (const v of message.enemy4ks) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(162).fork();
    for (const v of message.enemy5ks) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(170).fork();
    for (const v of message.mvps) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.spectatorsCount !== 0) {
      writer.uint32(176).uint32(message.spectatorsCount);
    }
    if (message.spectatorsCountTv !== 0) {
      writer.uint32(184).uint32(message.spectatorsCountTv);
    }
    if (message.spectatorsCountLnk !== 0) {
      writer.uint32(192).uint32(message.spectatorsCountLnk);
    }
    writer.uint32(202).fork();
    for (const v of message.enemyKillsAgg) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.dropInfo !== undefined) {
      CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.encode(
        message.dropInfo,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.bSwitchedTeams === true) {
      writer.uint32(216).bool(message.bSwitchedTeams);
    }
    writer.uint32(226).fork();
    for (const v of message.enemy2ks) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(234).fork();
    for (const v of message.playerSpawned) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(242).fork();
    for (const v of message.teamSpawnCount) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.maxRounds !== 0) {
      writer.uint32(248).uint32(message.maxRounds);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingServerRoundStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationid = reader.uint64() as Long;
          break;
        case 2:
          message.reservation =
            CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.map = reader.string();
          break;
        case 4:
          message.round = reader.int32();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.kills.push(reader.int32());
            }
          } else {
            message.kills.push(reader.int32());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assists.push(reader.int32());
            }
          } else {
            message.assists.push(reader.int32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deaths.push(reader.int32());
            }
          } else {
            message.deaths.push(reader.int32());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scores.push(reader.int32());
            }
          } else {
            message.scores.push(reader.int32());
          }
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pings.push(reader.int32());
            }
          } else {
            message.pings.push(reader.int32());
          }
          break;
        case 10:
          message.roundResult = reader.int32();
          break;
        case 11:
          message.matchResult = reader.int32();
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.teamScores.push(reader.int32());
            }
          } else {
            message.teamScores.push(reader.int32());
          }
          break;
        case 13:
          message.confirm = CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.reservationStage = reader.int32();
          break;
        case 15:
          message.matchDuration = reader.int32();
          break;
        case 16:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyKills.push(reader.int32());
            }
          } else {
            message.enemyKills.push(reader.int32());
          }
          break;
        case 17:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeadshots.push(reader.int32());
            }
          } else {
            message.enemyHeadshots.push(reader.int32());
          }
          break;
        case 18:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemy3ks.push(reader.int32());
            }
          } else {
            message.enemy3ks.push(reader.int32());
          }
          break;
        case 19:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemy4ks.push(reader.int32());
            }
          } else {
            message.enemy4ks.push(reader.int32());
          }
          break;
        case 20:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemy5ks.push(reader.int32());
            }
          } else {
            message.enemy5ks.push(reader.int32());
          }
          break;
        case 21:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mvps.push(reader.int32());
            }
          } else {
            message.mvps.push(reader.int32());
          }
          break;
        case 22:
          message.spectatorsCount = reader.uint32();
          break;
        case 23:
          message.spectatorsCountTv = reader.uint32();
          break;
        case 24:
          message.spectatorsCountLnk = reader.uint32();
          break;
        case 25:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyKillsAgg.push(reader.int32());
            }
          } else {
            message.enemyKillsAgg.push(reader.int32());
          }
          break;
        case 26:
          message.dropInfo =
            CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.decode(
              reader,
              reader.uint32()
            );
          break;
        case 27:
          message.bSwitchedTeams = reader.bool();
          break;
        case 28:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemy2ks.push(reader.int32());
            }
          } else {
            message.enemy2ks.push(reader.int32());
          }
          break;
        case 29:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerSpawned.push(reader.int32());
            }
          } else {
            message.playerSpawned.push(reader.int32());
          }
          break;
        case 30:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.teamSpawnCount.push(reader.int32());
            }
          } else {
            message.teamSpawnCount.push(reader.int32());
          }
          break;
        case 31:
          message.maxRounds = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingServerRoundStats>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingServerRoundStats {
    const message = createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats();
    message.reservationid =
      object.reservationid !== undefined && object.reservationid !== null
        ? Long.fromValue(object.reservationid)
        : Long.UZERO;
    message.reservation =
      object.reservation !== undefined && object.reservation !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(
            object.reservation
          )
        : undefined;
    message.map = object.map ?? "";
    message.round = object.round ?? 0;
    message.kills = object.kills?.map(e => e) || [];
    message.assists = object.assists?.map(e => e) || [];
    message.deaths = object.deaths?.map(e => e) || [];
    message.scores = object.scores?.map(e => e) || [];
    message.pings = object.pings?.map(e => e) || [];
    message.roundResult = object.roundResult ?? 0;
    message.matchResult = object.matchResult ?? 0;
    message.teamScores = object.teamScores?.map(e => e) || [];
    message.confirm =
      object.confirm !== undefined && object.confirm !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.fromPartial(
            object.confirm
          )
        : undefined;
    message.reservationStage = object.reservationStage ?? 0;
    message.matchDuration = object.matchDuration ?? 0;
    message.enemyKills = object.enemyKills?.map(e => e) || [];
    message.enemyHeadshots = object.enemyHeadshots?.map(e => e) || [];
    message.enemy3ks = object.enemy3ks?.map(e => e) || [];
    message.enemy4ks = object.enemy4ks?.map(e => e) || [];
    message.enemy5ks = object.enemy5ks?.map(e => e) || [];
    message.mvps = object.mvps?.map(e => e) || [];
    message.spectatorsCount = object.spectatorsCount ?? 0;
    message.spectatorsCountTv = object.spectatorsCountTv ?? 0;
    message.spectatorsCountLnk = object.spectatorsCountLnk ?? 0;
    message.enemyKillsAgg = object.enemyKillsAgg?.map(e => e) || [];
    message.dropInfo =
      object.dropInfo !== undefined && object.dropInfo !== null
        ? CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.fromPartial(
            object.dropInfo
          )
        : undefined;
    message.bSwitchedTeams = object.bSwitchedTeams ?? false;
    message.enemy2ks = object.enemy2ks?.map(e => e) || [];
    message.playerSpawned = object.playerSpawned?.map(e => e) || [];
    message.teamSpawnCount = object.teamSpawnCount?.map(e => e) || [];
    message.maxRounds = object.maxRounds ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo(): CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo {
  return { accountMvp: 0 };
}

export const CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountMvp !== 0) {
      writer.uint32(8).uint32(message.accountMvp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountMvp = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo {
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo();
    message.accountMvp = object.accountMvp ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingClient2GCHello(): CMsgGCCStrike15V2MatchmakingClient2GCHello {
  return {};
}

export const CMsgGCCStrike15V2MatchmakingClient2GCHello = {
  encode(
    _: CMsgGCCStrike15V2MatchmakingClient2GCHello,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingClient2GCHello {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingClient2GCHello();
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchmakingClient2GCHello>, I>
  >(_: I): CMsgGCCStrike15V2MatchmakingClient2GCHello {
    const message = createBaseCMsgGCCStrike15V2MatchmakingClient2GCHello();
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientHello(): CMsgGCCStrike15V2MatchmakingGC2ClientHello {
  return {
    accountId: 0,
    ongoingmatch: undefined,
    globalStats: undefined,
    penaltySeconds: 0,
    penaltyReason: 0,
    vacBanned: 0,
    ranking: undefined,
    commendation: undefined,
    medals: undefined,
    myCurrentEvent: undefined,
    myCurrentEventTeams: [],
    myCurrentTeam: undefined,
    myCurrentEventStages: [],
    surveyVote: 0,
    activity: undefined,
    playerLevel: 0,
    playerCurXp: 0,
    playerXpBonusFlags: 0,
    rankings: []
  };
}

export const CMsgGCCStrike15V2MatchmakingGC2ClientHello = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientHello,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.ongoingmatch !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.ongoingmatch,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.globalStats !== undefined) {
      GlobalStatistics.encode(
        message.globalStats,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.penaltySeconds !== 0) {
      writer.uint32(32).uint32(message.penaltySeconds);
    }
    if (message.penaltyReason !== 0) {
      writer.uint32(40).uint32(message.penaltyReason);
    }
    if (message.vacBanned !== 0) {
      writer.uint32(48).int32(message.vacBanned);
    }
    if (message.ranking !== undefined) {
      PlayerRankingInfo.encode(
        message.ranking,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.commendation !== undefined) {
      PlayerCommendationInfo.encode(
        message.commendation,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.medals !== undefined) {
      PlayerMedalsInfo.encode(
        message.medals,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.myCurrentEvent !== undefined) {
      TournamentEvent.encode(
        message.myCurrentEvent,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.myCurrentEventTeams) {
      TournamentTeam.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.myCurrentTeam !== undefined) {
      TournamentTeam.encode(
        message.myCurrentTeam,
        writer.uint32(98).fork()
      ).ldelim();
    }
    for (const v of message.myCurrentEventStages) {
      TournamentEvent.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.surveyVote !== 0) {
      writer.uint32(112).uint32(message.surveyVote);
    }
    if (message.activity !== undefined) {
      AccountActivity.encode(
        message.activity,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.playerLevel !== 0) {
      writer.uint32(136).int32(message.playerLevel);
    }
    if (message.playerCurXp !== 0) {
      writer.uint32(144).int32(message.playerCurXp);
    }
    if (message.playerXpBonusFlags !== 0) {
      writer.uint32(152).int32(message.playerXpBonusFlags);
    }
    for (const v of message.rankings) {
      PlayerRankingInfo.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientHello {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientHello();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.ongoingmatch =
            CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.globalStats = GlobalStatistics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.penaltySeconds = reader.uint32();
          break;
        case 5:
          message.penaltyReason = reader.uint32();
          break;
        case 6:
          message.vacBanned = reader.int32();
          break;
        case 7:
          message.ranking = PlayerRankingInfo.decode(reader, reader.uint32());
          break;
        case 8:
          message.commendation = PlayerCommendationInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.medals = PlayerMedalsInfo.decode(reader, reader.uint32());
          break;
        case 10:
          message.myCurrentEvent = TournamentEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.myCurrentEventTeams.push(
            TournamentTeam.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.myCurrentTeam = TournamentTeam.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.myCurrentEventStages.push(
            TournamentEvent.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.surveyVote = reader.uint32();
          break;
        case 15:
          message.activity = AccountActivity.decode(reader, reader.uint32());
          break;
        case 17:
          message.playerLevel = reader.int32();
          break;
        case 18:
          message.playerCurXp = reader.int32();
          break;
        case 19:
          message.playerXpBonusFlags = reader.int32();
          break;
        case 20:
          message.rankings.push(
            PlayerRankingInfo.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ClientHello>, I>
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ClientHello {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientHello();
    message.accountId = object.accountId ?? 0;
    message.ongoingmatch =
      object.ongoingmatch !== undefined && object.ongoingmatch !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(
            object.ongoingmatch
          )
        : undefined;
    message.globalStats =
      object.globalStats !== undefined && object.globalStats !== null
        ? GlobalStatistics.fromPartial(object.globalStats)
        : undefined;
    message.penaltySeconds = object.penaltySeconds ?? 0;
    message.penaltyReason = object.penaltyReason ?? 0;
    message.vacBanned = object.vacBanned ?? 0;
    message.ranking =
      object.ranking !== undefined && object.ranking !== null
        ? PlayerRankingInfo.fromPartial(object.ranking)
        : undefined;
    message.commendation =
      object.commendation !== undefined && object.commendation !== null
        ? PlayerCommendationInfo.fromPartial(object.commendation)
        : undefined;
    message.medals =
      object.medals !== undefined && object.medals !== null
        ? PlayerMedalsInfo.fromPartial(object.medals)
        : undefined;
    message.myCurrentEvent =
      object.myCurrentEvent !== undefined && object.myCurrentEvent !== null
        ? TournamentEvent.fromPartial(object.myCurrentEvent)
        : undefined;
    message.myCurrentEventTeams =
      object.myCurrentEventTeams?.map(e => TournamentTeam.fromPartial(e)) || [];
    message.myCurrentTeam =
      object.myCurrentTeam !== undefined && object.myCurrentTeam !== null
        ? TournamentTeam.fromPartial(object.myCurrentTeam)
        : undefined;
    message.myCurrentEventStages =
      object.myCurrentEventStages?.map(e => TournamentEvent.fromPartial(e)) ||
      [];
    message.surveyVote = object.surveyVote ?? 0;
    message.activity =
      object.activity !== undefined && object.activity !== null
        ? AccountActivity.fromPartial(object.activity)
        : undefined;
    message.playerLevel = object.playerLevel ?? 0;
    message.playerCurXp = object.playerCurXp ?? 0;
    message.playerXpBonusFlags = object.playerXpBonusFlags ?? 0;
    message.rankings =
      object.rankings?.map(e => PlayerRankingInfo.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2AccountPrivacySettings(): CMsgGCCStrike15V2AccountPrivacySettings {
  return { settings: [] };
}

export const CMsgGCCStrike15V2AccountPrivacySettings = {
  encode(
    message: CMsgGCCStrike15V2AccountPrivacySettings,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.settings) {
      CMsgGCCStrike15V2AccountPrivacySettings_Setting.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2AccountPrivacySettings {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.settings.push(
            CMsgGCCStrike15V2AccountPrivacySettings_Setting.decode(
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2AccountPrivacySettings>, I>
  >(object: I): CMsgGCCStrike15V2AccountPrivacySettings {
    const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings();
    message.settings =
      object.settings?.map(e =>
        CMsgGCCStrike15V2AccountPrivacySettings_Setting.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2AccountPrivacySettings_Setting(): CMsgGCCStrike15V2AccountPrivacySettings_Setting {
  return { settingType: 0, settingValue: 0 };
}

export const CMsgGCCStrike15V2AccountPrivacySettings_Setting = {
  encode(
    message: CMsgGCCStrike15V2AccountPrivacySettings_Setting,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.settingType !== 0) {
      writer.uint32(8).uint32(message.settingType);
    }
    if (message.settingValue !== 0) {
      writer.uint32(16).uint32(message.settingValue);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2AccountPrivacySettings_Setting {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings_Setting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.settingType = reader.uint32();
          break;
        case 2:
          message.settingValue = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2AccountPrivacySettings_Setting>,
      I
    >
  >(object: I): CMsgGCCStrike15V2AccountPrivacySettings_Setting {
    const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings_Setting();
    message.settingType = object.settingType ?? 0;
    message.settingValue = object.settingValue ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon(): CMsgGCCStrike15V2MatchmakingGC2ClientAbandon {
  return {
    accountId: 0,
    abandonedMatch: undefined,
    penaltySeconds: 0,
    penaltyReason: 0
  };
}

export const CMsgGCCStrike15V2MatchmakingGC2ClientAbandon = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientAbandon,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.abandonedMatch !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.abandonedMatch,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.penaltySeconds !== 0) {
      writer.uint32(24).uint32(message.penaltySeconds);
    }
    if (message.penaltyReason !== 0) {
      writer.uint32(32).uint32(message.penaltyReason);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientAbandon {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.abandonedMatch =
            CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.penaltySeconds = reader.uint32();
          break;
        case 4:
          message.penaltyReason = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingGC2ClientAbandon>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingGC2ClientAbandon {
    const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon();
    message.accountId = object.accountId ?? 0;
    message.abandonedMatch =
      object.abandonedMatch !== undefined && object.abandonedMatch !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(
            object.abandonedMatch
          )
        : undefined;
    message.penaltySeconds = object.penaltySeconds ?? 0;
    message.penaltyReason = object.penaltyReason ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientGCRankUpdate(): CMsgGCCStrike15V2ClientGCRankUpdate {
  return { rankings: [] };
}

export const CMsgGCCStrike15V2ClientGCRankUpdate = {
  encode(
    message: CMsgGCCStrike15V2ClientGCRankUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.rankings) {
      PlayerRankingInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientGCRankUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientGCRankUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rankings.push(
            PlayerRankingInfo.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientGCRankUpdate>, I>
  >(object: I): CMsgGCCStrike15V2ClientGCRankUpdate {
    const message = createBaseCMsgGCCStrike15V2ClientGCRankUpdate();
    message.rankings =
      object.rankings?.map(e => PlayerRankingInfo.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate(): CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate {
  return { mainPostUrl: "" };
}

export const CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mainPostUrl !== "") {
      writer.uint32(10).string(message.mainPostUrl);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainPostUrl = reader.string();
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
      DeepPartial<CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate {
    const message =
      createBaseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate();
    message.mainPostUrl = object.mainPostUrl ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ServerNotificationForUserPenalty(): CMsgGCCStrike15V2ServerNotificationForUserPenalty {
  return { accountId: 0, reason: 0, seconds: 0, communicationCooldown: false };
}

export const CMsgGCCStrike15V2ServerNotificationForUserPenalty = {
  encode(
    message: CMsgGCCStrike15V2ServerNotificationForUserPenalty,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.reason !== 0) {
      writer.uint32(16).uint32(message.reason);
    }
    if (message.seconds !== 0) {
      writer.uint32(24).uint32(message.seconds);
    }
    if (message.communicationCooldown === true) {
      writer.uint32(32).bool(message.communicationCooldown);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ServerNotificationForUserPenalty {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2ServerNotificationForUserPenalty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.reason = reader.uint32();
          break;
        case 3:
          message.seconds = reader.uint32();
          break;
        case 4:
          message.communicationCooldown = reader.bool();
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
      DeepPartial<CMsgGCCStrike15V2ServerNotificationForUserPenalty>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ServerNotificationForUserPenalty {
    const message =
      createBaseCMsgGCCStrike15V2ServerNotificationForUserPenalty();
    message.accountId = object.accountId ?? 0;
    message.reason = object.reason ?? 0;
    message.seconds = object.seconds ?? 0;
    message.communicationCooldown = object.communicationCooldown ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientReportPlayer(): CMsgGCCStrike15V2ClientReportPlayer {
  return {
    accountId: 0,
    rptAimbot: 0,
    rptWallhack: 0,
    rptSpeedhack: 0,
    rptTeamharm: 0,
    rptTextabuse: 0,
    rptVoiceabuse: 0,
    matchId: Long.UZERO,
    reportFromDemo: false
  };
}

export const CMsgGCCStrike15V2ClientReportPlayer = {
  encode(
    message: CMsgGCCStrike15V2ClientReportPlayer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.rptAimbot !== 0) {
      writer.uint32(16).uint32(message.rptAimbot);
    }
    if (message.rptWallhack !== 0) {
      writer.uint32(24).uint32(message.rptWallhack);
    }
    if (message.rptSpeedhack !== 0) {
      writer.uint32(32).uint32(message.rptSpeedhack);
    }
    if (message.rptTeamharm !== 0) {
      writer.uint32(40).uint32(message.rptTeamharm);
    }
    if (message.rptTextabuse !== 0) {
      writer.uint32(48).uint32(message.rptTextabuse);
    }
    if (message.rptVoiceabuse !== 0) {
      writer.uint32(56).uint32(message.rptVoiceabuse);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(64).uint64(message.matchId);
    }
    if (message.reportFromDemo === true) {
      writer.uint32(72).bool(message.reportFromDemo);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientReportPlayer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientReportPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.rptAimbot = reader.uint32();
          break;
        case 3:
          message.rptWallhack = reader.uint32();
          break;
        case 4:
          message.rptSpeedhack = reader.uint32();
          break;
        case 5:
          message.rptTeamharm = reader.uint32();
          break;
        case 6:
          message.rptTextabuse = reader.uint32();
          break;
        case 7:
          message.rptVoiceabuse = reader.uint32();
          break;
        case 8:
          message.matchId = reader.uint64() as Long;
          break;
        case 9:
          message.reportFromDemo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientReportPlayer>, I>
  >(object: I): CMsgGCCStrike15V2ClientReportPlayer {
    const message = createBaseCMsgGCCStrike15V2ClientReportPlayer();
    message.accountId = object.accountId ?? 0;
    message.rptAimbot = object.rptAimbot ?? 0;
    message.rptWallhack = object.rptWallhack ?? 0;
    message.rptSpeedhack = object.rptSpeedhack ?? 0;
    message.rptTeamharm = object.rptTeamharm ?? 0;
    message.rptTextabuse = object.rptTextabuse ?? 0;
    message.rptVoiceabuse = object.rptVoiceabuse ?? 0;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.reportFromDemo = object.reportFromDemo ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientCommendPlayer(): CMsgGCCStrike15V2ClientCommendPlayer {
  return {
    accountId: 0,
    matchId: Long.UZERO,
    commendation: undefined,
    tokens: 0
  };
}

export const CMsgGCCStrike15V2ClientCommendPlayer = {
  encode(
    message: CMsgGCCStrike15V2ClientCommendPlayer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(64).uint64(message.matchId);
    }
    if (message.commendation !== undefined) {
      PlayerCommendationInfo.encode(
        message.commendation,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.tokens !== 0) {
      writer.uint32(80).uint32(message.tokens);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientCommendPlayer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientCommendPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 8:
          message.matchId = reader.uint64() as Long;
          break;
        case 9:
          message.commendation = PlayerCommendationInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.tokens = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientCommendPlayer>, I>
  >(object: I): CMsgGCCStrike15V2ClientCommendPlayer {
    const message = createBaseCMsgGCCStrike15V2ClientCommendPlayer();
    message.accountId = object.accountId ?? 0;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.commendation =
      object.commendation !== undefined && object.commendation !== null
        ? PlayerCommendationInfo.fromPartial(object.commendation)
        : undefined;
    message.tokens = object.tokens ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientReportServer(): CMsgGCCStrike15V2ClientReportServer {
  return {
    rptPoorperf: 0,
    rptAbusivemodels: 0,
    rptBadmotd: 0,
    rptListingabuse: 0,
    rptInventoryabuse: 0,
    matchId: Long.UZERO
  };
}

export const CMsgGCCStrike15V2ClientReportServer = {
  encode(
    message: CMsgGCCStrike15V2ClientReportServer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.rptPoorperf !== 0) {
      writer.uint32(8).uint32(message.rptPoorperf);
    }
    if (message.rptAbusivemodels !== 0) {
      writer.uint32(16).uint32(message.rptAbusivemodels);
    }
    if (message.rptBadmotd !== 0) {
      writer.uint32(24).uint32(message.rptBadmotd);
    }
    if (message.rptListingabuse !== 0) {
      writer.uint32(32).uint32(message.rptListingabuse);
    }
    if (message.rptInventoryabuse !== 0) {
      writer.uint32(40).uint32(message.rptInventoryabuse);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(64).uint64(message.matchId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientReportServer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientReportServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rptPoorperf = reader.uint32();
          break;
        case 2:
          message.rptAbusivemodels = reader.uint32();
          break;
        case 3:
          message.rptBadmotd = reader.uint32();
          break;
        case 4:
          message.rptListingabuse = reader.uint32();
          break;
        case 5:
          message.rptInventoryabuse = reader.uint32();
          break;
        case 8:
          message.matchId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientReportServer>, I>
  >(object: I): CMsgGCCStrike15V2ClientReportServer {
    const message = createBaseCMsgGCCStrike15V2ClientReportServer();
    message.rptPoorperf = object.rptPoorperf ?? 0;
    message.rptAbusivemodels = object.rptAbusivemodels ?? 0;
    message.rptBadmotd = object.rptBadmotd ?? 0;
    message.rptListingabuse = object.rptListingabuse ?? 0;
    message.rptInventoryabuse = object.rptInventoryabuse ?? 0;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientReportResponse(): CMsgGCCStrike15V2ClientReportResponse {
  return {
    confirmationId: Long.UZERO,
    accountId: 0,
    serverIp: 0,
    responseType: 0,
    responseResult: 0,
    tokens: 0
  };
}

export const CMsgGCCStrike15V2ClientReportResponse = {
  encode(
    message: CMsgGCCStrike15V2ClientReportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.confirmationId.isZero()) {
      writer.uint32(8).uint64(message.confirmationId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.serverIp !== 0) {
      writer.uint32(24).uint32(message.serverIp);
    }
    if (message.responseType !== 0) {
      writer.uint32(32).uint32(message.responseType);
    }
    if (message.responseResult !== 0) {
      writer.uint32(40).uint32(message.responseResult);
    }
    if (message.tokens !== 0) {
      writer.uint32(48).uint32(message.tokens);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientReportResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmationId = reader.uint64() as Long;
          break;
        case 2:
          message.accountId = reader.uint32();
          break;
        case 3:
          message.serverIp = reader.uint32();
          break;
        case 4:
          message.responseType = reader.uint32();
          break;
        case 5:
          message.responseResult = reader.uint32();
          break;
        case 6:
          message.tokens = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientReportResponse>, I>
  >(object: I): CMsgGCCStrike15V2ClientReportResponse {
    const message = createBaseCMsgGCCStrike15V2ClientReportResponse();
    message.confirmationId =
      object.confirmationId !== undefined && object.confirmationId !== null
        ? Long.fromValue(object.confirmationId)
        : Long.UZERO;
    message.accountId = object.accountId ?? 0;
    message.serverIp = object.serverIp ?? 0;
    message.responseType = object.responseType ?? 0;
    message.responseResult = object.responseResult ?? 0;
    message.tokens = object.tokens ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientRequestWatchInfoFriends(): CMsgGCCStrike15V2ClientRequestWatchInfoFriends {
  return {
    requestId: 0,
    accountIds: [],
    serverid: Long.UZERO,
    matchid: Long.UZERO,
    clientLauncher: 0,
    dataCenterPings: []
  };
}

export const CMsgGCCStrike15V2ClientRequestWatchInfoFriends = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestWatchInfoFriends,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (!message.serverid.isZero()) {
      writer.uint32(24).uint64(message.serverid);
    }
    if (!message.matchid.isZero()) {
      writer.uint32(32).uint64(message.matchid);
    }
    if (message.clientLauncher !== 0) {
      writer.uint32(40).uint32(message.clientLauncher);
    }
    for (const v of message.dataCenterPings) {
      DataCenterPing.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestWatchInfoFriends {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientRequestWatchInfoFriends();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }
          } else {
            message.accountIds.push(reader.uint32());
          }
          break;
        case 3:
          message.serverid = reader.uint64() as Long;
          break;
        case 4:
          message.matchid = reader.uint64() as Long;
          break;
        case 5:
          message.clientLauncher = reader.uint32();
          break;
        case 6:
          message.dataCenterPings.push(
            DataCenterPing.decode(reader, reader.uint32())
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
    I extends Exact<
      DeepPartial<CMsgGCCStrike15V2ClientRequestWatchInfoFriends>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ClientRequestWatchInfoFriends {
    const message = createBaseCMsgGCCStrike15V2ClientRequestWatchInfoFriends();
    message.requestId = object.requestId ?? 0;
    message.accountIds = object.accountIds?.map(e => e) || [];
    message.serverid =
      object.serverid !== undefined && object.serverid !== null
        ? Long.fromValue(object.serverid)
        : Long.UZERO;
    message.matchid =
      object.matchid !== undefined && object.matchid !== null
        ? Long.fromValue(object.matchid)
        : Long.UZERO;
    message.clientLauncher = object.clientLauncher ?? 0;
    message.dataCenterPings =
      object.dataCenterPings?.map(e => DataCenterPing.fromPartial(e)) || [];
    return message;
  }
};

function createBaseWatchableMatchInfo(): WatchableMatchInfo {
  return {
    serverIp: 0,
    tvPort: 0,
    tvSpectators: 0,
    tvTime: 0,
    tvWatchPassword: new Uint8Array(),
    clDecryptdataKey: Long.UZERO,
    clDecryptdataKeyPub: Long.UZERO,
    gameType: 0,
    gameMapgroup: "",
    gameMap: "",
    serverId: Long.UZERO,
    matchId: Long.UZERO,
    reservationId: Long.UZERO
  };
}

export const WatchableMatchInfo = {
  encode(
    message: WatchableMatchInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.serverIp !== 0) {
      writer.uint32(8).uint32(message.serverIp);
    }
    if (message.tvPort !== 0) {
      writer.uint32(16).uint32(message.tvPort);
    }
    if (message.tvSpectators !== 0) {
      writer.uint32(24).uint32(message.tvSpectators);
    }
    if (message.tvTime !== 0) {
      writer.uint32(32).uint32(message.tvTime);
    }
    if (message.tvWatchPassword.length !== 0) {
      writer.uint32(42).bytes(message.tvWatchPassword);
    }
    if (!message.clDecryptdataKey.isZero()) {
      writer.uint32(48).uint64(message.clDecryptdataKey);
    }
    if (!message.clDecryptdataKeyPub.isZero()) {
      writer.uint32(56).uint64(message.clDecryptdataKeyPub);
    }
    if (message.gameType !== 0) {
      writer.uint32(64).uint32(message.gameType);
    }
    if (message.gameMapgroup !== "") {
      writer.uint32(74).string(message.gameMapgroup);
    }
    if (message.gameMap !== "") {
      writer.uint32(82).string(message.gameMap);
    }
    if (!message.serverId.isZero()) {
      writer.uint32(88).uint64(message.serverId);
    }
    if (!message.matchId.isZero()) {
      writer.uint32(96).uint64(message.matchId);
    }
    if (!message.reservationId.isZero()) {
      writer.uint32(104).uint64(message.reservationId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WatchableMatchInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchableMatchInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverIp = reader.uint32();
          break;
        case 2:
          message.tvPort = reader.uint32();
          break;
        case 3:
          message.tvSpectators = reader.uint32();
          break;
        case 4:
          message.tvTime = reader.uint32();
          break;
        case 5:
          message.tvWatchPassword = reader.bytes();
          break;
        case 6:
          message.clDecryptdataKey = reader.uint64() as Long;
          break;
        case 7:
          message.clDecryptdataKeyPub = reader.uint64() as Long;
          break;
        case 8:
          message.gameType = reader.uint32();
          break;
        case 9:
          message.gameMapgroup = reader.string();
          break;
        case 10:
          message.gameMap = reader.string();
          break;
        case 11:
          message.serverId = reader.uint64() as Long;
          break;
        case 12:
          message.matchId = reader.uint64() as Long;
          break;
        case 13:
          message.reservationId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<WatchableMatchInfo>, I>>(
    object: I
  ): WatchableMatchInfo {
    const message = createBaseWatchableMatchInfo();
    message.serverIp = object.serverIp ?? 0;
    message.tvPort = object.tvPort ?? 0;
    message.tvSpectators = object.tvSpectators ?? 0;
    message.tvTime = object.tvTime ?? 0;
    message.tvWatchPassword = object.tvWatchPassword ?? new Uint8Array();
    message.clDecryptdataKey =
      object.clDecryptdataKey !== undefined && object.clDecryptdataKey !== null
        ? Long.fromValue(object.clDecryptdataKey)
        : Long.UZERO;
    message.clDecryptdataKeyPub =
      object.clDecryptdataKeyPub !== undefined &&
      object.clDecryptdataKeyPub !== null
        ? Long.fromValue(object.clDecryptdataKeyPub)
        : Long.UZERO;
    message.gameType = object.gameType ?? 0;
    message.gameMapgroup = object.gameMapgroup ?? "";
    message.gameMap = object.gameMap ?? "";
    message.serverId =
      object.serverId !== undefined && object.serverId !== null
        ? Long.fromValue(object.serverId)
        : Long.UZERO;
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.reservationId =
      object.reservationId !== undefined && object.reservationId !== null
        ? Long.fromValue(object.reservationId)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientRequestJoinFriendData(): CMsgGCCStrike15V2ClientRequestJoinFriendData {
  return {
    version: 0,
    accountId: 0,
    joinToken: 0,
    joinIpp: 0,
    res: undefined,
    errormsg: ""
  };
}

export const CMsgGCCStrike15V2ClientRequestJoinFriendData = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestJoinFriendData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.joinToken !== 0) {
      writer.uint32(24).uint32(message.joinToken);
    }
    if (message.joinIpp !== 0) {
      writer.uint32(32).uint32(message.joinIpp);
    }
    if (message.res !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.res,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.errormsg !== "") {
      writer.uint32(50).string(message.errormsg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestJoinFriendData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientRequestJoinFriendData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.accountId = reader.uint32();
          break;
        case 3:
          message.joinToken = reader.uint32();
          break;
        case 4:
          message.joinIpp = reader.uint32();
          break;
        case 5:
          message.res = CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.errormsg = reader.string();
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
      DeepPartial<CMsgGCCStrike15V2ClientRequestJoinFriendData>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ClientRequestJoinFriendData {
    const message = createBaseCMsgGCCStrike15V2ClientRequestJoinFriendData();
    message.version = object.version ?? 0;
    message.accountId = object.accountId ?? 0;
    message.joinToken = object.joinToken ?? 0;
    message.joinIpp = object.joinIpp ?? 0;
    message.res =
      object.res !== undefined && object.res !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(object.res)
        : undefined;
    message.errormsg = object.errormsg ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientRequestJoinServerData(): CMsgGCCStrike15V2ClientRequestJoinServerData {
  return {
    version: 0,
    accountId: 0,
    serverid: Long.UZERO,
    serverIp: 0,
    serverPort: 0,
    res: undefined,
    errormsg: ""
  };
}

export const CMsgGCCStrike15V2ClientRequestJoinServerData = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestJoinServerData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (!message.serverid.isZero()) {
      writer.uint32(24).uint64(message.serverid);
    }
    if (message.serverIp !== 0) {
      writer.uint32(32).uint32(message.serverIp);
    }
    if (message.serverPort !== 0) {
      writer.uint32(40).uint32(message.serverPort);
    }
    if (message.res !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.res,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.errormsg !== "") {
      writer.uint32(58).string(message.errormsg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestJoinServerData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientRequestJoinServerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.accountId = reader.uint32();
          break;
        case 3:
          message.serverid = reader.uint64() as Long;
          break;
        case 4:
          message.serverIp = reader.uint32();
          break;
        case 5:
          message.serverPort = reader.uint32();
          break;
        case 6:
          message.res = CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.errormsg = reader.string();
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
      DeepPartial<CMsgGCCStrike15V2ClientRequestJoinServerData>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ClientRequestJoinServerData {
    const message = createBaseCMsgGCCStrike15V2ClientRequestJoinServerData();
    message.version = object.version ?? 0;
    message.accountId = object.accountId ?? 0;
    message.serverid =
      object.serverid !== undefined && object.serverid !== null
        ? Long.fromValue(object.serverid)
        : Long.UZERO;
    message.serverIp = object.serverIp ?? 0;
    message.serverPort = object.serverPort ?? 0;
    message.res =
      object.res !== undefined && object.res !== null
        ? CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(object.res)
        : undefined;
    message.errormsg = object.errormsg ?? "";
    return message;
  }
};

function createBaseCMsgGCCstrike15V2ClientRequestNewMission(): CMsgGCCstrike15V2ClientRequestNewMission {
  return { missionId: 0, campaignId: 0 };
}

export const CMsgGCCstrike15V2ClientRequestNewMission = {
  encode(
    message: CMsgGCCstrike15V2ClientRequestNewMission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.missionId !== 0) {
      writer.uint32(16).uint32(message.missionId);
    }
    if (message.campaignId !== 0) {
      writer.uint32(24).uint32(message.campaignId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCstrike15V2ClientRequestNewMission {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCstrike15V2ClientRequestNewMission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.missionId = reader.uint32();
          break;
        case 3:
          message.campaignId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCstrike15V2ClientRequestNewMission>, I>
  >(object: I): CMsgGCCstrike15V2ClientRequestNewMission {
    const message = createBaseCMsgGCCstrike15V2ClientRequestNewMission();
    message.missionId = object.missionId ?? 0;
    message.campaignId = object.campaignId ?? 0;
    return message;
  }
};

function createBaseCMsgGCCstrike15V2ClientRedeemMissionReward(): CMsgGCCstrike15V2ClientRedeemMissionReward {
  return { campaignId: 0, redeemId: 0, redeemableBalance: 0, expectedCost: 0 };
}

export const CMsgGCCstrike15V2ClientRedeemMissionReward = {
  encode(
    message: CMsgGCCstrike15V2ClientRedeemMissionReward,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignId !== 0) {
      writer.uint32(8).uint32(message.campaignId);
    }
    if (message.redeemId !== 0) {
      writer.uint32(16).uint32(message.redeemId);
    }
    if (message.redeemableBalance !== 0) {
      writer.uint32(24).uint32(message.redeemableBalance);
    }
    if (message.expectedCost !== 0) {
      writer.uint32(32).uint32(message.expectedCost);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCstrike15V2ClientRedeemMissionReward {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCstrike15V2ClientRedeemMissionReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint32();
          break;
        case 2:
          message.redeemId = reader.uint32();
          break;
        case 3:
          message.redeemableBalance = reader.uint32();
          break;
        case 4:
          message.expectedCost = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCstrike15V2ClientRedeemMissionReward>, I>
  >(object: I): CMsgGCCstrike15V2ClientRedeemMissionReward {
    const message = createBaseCMsgGCCstrike15V2ClientRedeemMissionReward();
    message.campaignId = object.campaignId ?? 0;
    message.redeemId = object.redeemId ?? 0;
    message.redeemableBalance = object.redeemableBalance ?? 0;
    message.expectedCost = object.expectedCost ?? 0;
    return message;
  }
};

function createBaseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded(): CMsgGCCstrike15V2GC2ServerNotifyXPRewarded {
  return {
    xpProgressData: [],
    accountId: 0,
    currentXp: 0,
    currentLevel: 0,
    upgradedDefidx: 0,
    operationPointsAwarded: 0
  };
}

export const CMsgGCCstrike15V2GC2ServerNotifyXPRewarded = {
  encode(
    message: CMsgGCCstrike15V2GC2ServerNotifyXPRewarded,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.xpProgressData) {
      XpProgressData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.currentXp !== 0) {
      writer.uint32(24).uint32(message.currentXp);
    }
    if (message.currentLevel !== 0) {
      writer.uint32(32).uint32(message.currentLevel);
    }
    if (message.upgradedDefidx !== 0) {
      writer.uint32(40).uint32(message.upgradedDefidx);
    }
    if (message.operationPointsAwarded !== 0) {
      writer.uint32(48).uint32(message.operationPointsAwarded);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCstrike15V2GC2ServerNotifyXPRewarded {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xpProgressData.push(
            XpProgressData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.accountId = reader.uint32();
          break;
        case 3:
          message.currentXp = reader.uint32();
          break;
        case 4:
          message.currentLevel = reader.uint32();
          break;
        case 5:
          message.upgradedDefidx = reader.uint32();
          break;
        case 6:
          message.operationPointsAwarded = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCstrike15V2GC2ServerNotifyXPRewarded>, I>
  >(object: I): CMsgGCCstrike15V2GC2ServerNotifyXPRewarded {
    const message = createBaseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded();
    message.xpProgressData =
      object.xpProgressData?.map(e => XpProgressData.fromPartial(e)) || [];
    message.accountId = object.accountId ?? 0;
    message.currentXp = object.currentXp ?? 0;
    message.currentLevel = object.currentLevel ?? 0;
    message.upgradedDefidx = object.upgradedDefidx ?? 0;
    message.operationPointsAwarded = object.operationPointsAwarded ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15ClientDeepStats(): CMsgGCCStrike15ClientDeepStats {
  return { accountId: 0, range: undefined, matches: [] };
}

export const CMsgGCCStrike15ClientDeepStats = {
  encode(
    message: CMsgGCCStrike15ClientDeepStats,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.range !== undefined) {
      CMsgGCCStrike15ClientDeepStats_DeepStatsRange.encode(
        message.range,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.matches) {
      CMsgGCCStrike15ClientDeepStats_DeepStatsMatch.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15ClientDeepStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15ClientDeepStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.range = CMsgGCCStrike15ClientDeepStats_DeepStatsRange.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.matches.push(
            CMsgGCCStrike15ClientDeepStats_DeepStatsMatch.decode(
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15ClientDeepStats>, I>>(
    object: I
  ): CMsgGCCStrike15ClientDeepStats {
    const message = createBaseCMsgGCCStrike15ClientDeepStats();
    message.accountId = object.accountId ?? 0;
    message.range =
      object.range !== undefined && object.range !== null
        ? CMsgGCCStrike15ClientDeepStats_DeepStatsRange.fromPartial(
            object.range
          )
        : undefined;
    message.matches =
      object.matches?.map(e =>
        CMsgGCCStrike15ClientDeepStats_DeepStatsMatch.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsRange(): CMsgGCCStrike15ClientDeepStats_DeepStatsRange {
  return { begin: 0, end: 0, frozen: false };
}

export const CMsgGCCStrike15ClientDeepStats_DeepStatsRange = {
  encode(
    message: CMsgGCCStrike15ClientDeepStats_DeepStatsRange,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.begin !== 0) {
      writer.uint32(8).uint32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(16).uint32(message.end);
    }
    if (message.frozen === true) {
      writer.uint32(24).bool(message.frozen);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15ClientDeepStats_DeepStatsRange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.begin = reader.uint32();
          break;
        case 2:
          message.end = reader.uint32();
          break;
        case 3:
          message.frozen = reader.bool();
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
      DeepPartial<CMsgGCCStrike15ClientDeepStats_DeepStatsRange>,
      I
    >
  >(object: I): CMsgGCCStrike15ClientDeepStats_DeepStatsRange {
    const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsRange();
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.frozen = object.frozen ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch(): CMsgGCCStrike15ClientDeepStats_DeepStatsMatch {
  return { player: undefined, events: [] };
}

export const CMsgGCCStrike15ClientDeepStats_DeepStatsMatch = {
  encode(
    message: CMsgGCCStrike15ClientDeepStats_DeepStatsMatch,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.player !== undefined) {
      DeepPlayerStatsEntry.encode(
        message.player,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.events) {
      DeepPlayerMatchEvent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15ClientDeepStats_DeepStatsMatch {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.player = DeepPlayerStatsEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.events.push(
            DeepPlayerMatchEvent.decode(reader, reader.uint32())
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
    I extends Exact<
      DeepPartial<CMsgGCCStrike15ClientDeepStats_DeepStatsMatch>,
      I
    >
  >(object: I): CMsgGCCStrike15ClientDeepStats_DeepStatsMatch {
    const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch();
    message.player =
      object.player !== undefined && object.player !== null
        ? DeepPlayerStatsEntry.fromPartial(object.player)
        : undefined;
    message.events =
      object.events?.map(e => DeepPlayerMatchEvent.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2WatchInfoUsers(): CMsgGCCStrike15V2WatchInfoUsers {
  return {
    requestId: 0,
    accountIds: [],
    watchableMatchInfos: [],
    extendedTimeout: 0
  };
}

export const CMsgGCCStrike15V2WatchInfoUsers = {
  encode(
    message: CMsgGCCStrike15V2WatchInfoUsers,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.watchableMatchInfos) {
      WatchableMatchInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.extendedTimeout !== 0) {
      writer.uint32(40).uint32(message.extendedTimeout);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2WatchInfoUsers {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2WatchInfoUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }
          } else {
            message.accountIds.push(reader.uint32());
          }
          break;
        case 3:
          message.watchableMatchInfos.push(
            WatchableMatchInfo.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.extendedTimeout = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2WatchInfoUsers>, I>>(
    object: I
  ): CMsgGCCStrike15V2WatchInfoUsers {
    const message = createBaseCMsgGCCStrike15V2WatchInfoUsers();
    message.requestId = object.requestId ?? 0;
    message.accountIds = object.accountIds?.map(e => e) || [];
    message.watchableMatchInfos =
      object.watchableMatchInfos?.map(e => WatchableMatchInfo.fromPartial(e)) ||
      [];
    message.extendedTimeout = object.extendedTimeout ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientRequestPlayersProfile(): CMsgGCCStrike15V2ClientRequestPlayersProfile {
  return {
    requestIdDeprecated: 0,
    accountIdsDeprecated: [],
    accountId: 0,
    requestLevel: 0
  };
}

export const CMsgGCCStrike15V2ClientRequestPlayersProfile = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestPlayersProfile,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestIdDeprecated !== 0) {
      writer.uint32(8).uint32(message.requestIdDeprecated);
    }
    writer.uint32(18).fork();
    for (const v of message.accountIdsDeprecated) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    if (message.requestLevel !== 0) {
      writer.uint32(32).uint32(message.requestLevel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestPlayersProfile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientRequestPlayersProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestIdDeprecated = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIdsDeprecated.push(reader.uint32());
            }
          } else {
            message.accountIdsDeprecated.push(reader.uint32());
          }
          break;
        case 3:
          message.accountId = reader.uint32();
          break;
        case 4:
          message.requestLevel = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2ClientRequestPlayersProfile>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ClientRequestPlayersProfile {
    const message = createBaseCMsgGCCStrike15V2ClientRequestPlayersProfile();
    message.requestIdDeprecated = object.requestIdDeprecated ?? 0;
    message.accountIdsDeprecated =
      object.accountIdsDeprecated?.map(e => e) || [];
    message.accountId = object.accountId ?? 0;
    message.requestLevel = object.requestLevel ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PlayersProfile(): CMsgGCCStrike15V2PlayersProfile {
  return { requestId: 0, accountProfiles: [] };
}

export const CMsgGCCStrike15V2PlayersProfile = {
  encode(
    message: CMsgGCCStrike15V2PlayersProfile,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    for (const v of message.accountProfiles) {
      CMsgGCCStrike15V2MatchmakingGC2ClientHello.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PlayersProfile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PlayersProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          message.accountProfiles.push(
            CMsgGCCStrike15V2MatchmakingGC2ClientHello.decode(
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2PlayersProfile>, I>>(
    object: I
  ): CMsgGCCStrike15V2PlayersProfile {
    const message = createBaseCMsgGCCStrike15V2PlayersProfile();
    message.requestId = object.requestId ?? 0;
    message.accountProfiles =
      object.accountProfiles?.map(e =>
        CMsgGCCStrike15V2MatchmakingGC2ClientHello.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate(): CMsgGCCStrike15V2PlayerOverwatchCaseUpdate {
  return {
    caseid: Long.UZERO,
    suspectid: 0,
    fractionid: 0,
    rptAimbot: 0,
    rptWallhack: 0,
    rptSpeedhack: 0,
    rptTeamharm: 0,
    reason: 0
  };
}

export const CMsgGCCStrike15V2PlayerOverwatchCaseUpdate = {
  encode(
    message: CMsgGCCStrike15V2PlayerOverwatchCaseUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.caseid.isZero()) {
      writer.uint32(8).uint64(message.caseid);
    }
    if (message.suspectid !== 0) {
      writer.uint32(24).uint32(message.suspectid);
    }
    if (message.fractionid !== 0) {
      writer.uint32(32).uint32(message.fractionid);
    }
    if (message.rptAimbot !== 0) {
      writer.uint32(40).uint32(message.rptAimbot);
    }
    if (message.rptWallhack !== 0) {
      writer.uint32(48).uint32(message.rptWallhack);
    }
    if (message.rptSpeedhack !== 0) {
      writer.uint32(56).uint32(message.rptSpeedhack);
    }
    if (message.rptTeamharm !== 0) {
      writer.uint32(64).uint32(message.rptTeamharm);
    }
    if (message.reason !== 0) {
      writer.uint32(72).uint32(message.reason);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PlayerOverwatchCaseUpdate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caseid = reader.uint64() as Long;
          break;
        case 3:
          message.suspectid = reader.uint32();
          break;
        case 4:
          message.fractionid = reader.uint32();
          break;
        case 5:
          message.rptAimbot = reader.uint32();
          break;
        case 6:
          message.rptWallhack = reader.uint32();
          break;
        case 7:
          message.rptSpeedhack = reader.uint32();
          break;
        case 8:
          message.rptTeamharm = reader.uint32();
          break;
        case 9:
          message.reason = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2PlayerOverwatchCaseUpdate>, I>
  >(object: I): CMsgGCCStrike15V2PlayerOverwatchCaseUpdate {
    const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate();
    message.caseid =
      object.caseid !== undefined && object.caseid !== null
        ? Long.fromValue(object.caseid)
        : Long.UZERO;
    message.suspectid = object.suspectid ?? 0;
    message.fractionid = object.fractionid ?? 0;
    message.rptAimbot = object.rptAimbot ?? 0;
    message.rptWallhack = object.rptWallhack ?? 0;
    message.rptSpeedhack = object.rptSpeedhack ?? 0;
    message.rptTeamharm = object.rptTeamharm ?? 0;
    message.reason = object.reason ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment(): CMsgGCCStrike15V2PlayerOverwatchCaseAssignment {
  return {
    caseid: Long.UZERO,
    caseurl: "",
    verdict: 0,
    timestamp: 0,
    throttleseconds: 0,
    suspectid: 0,
    fractionid: 0,
    numrounds: 0,
    fractionrounds: 0,
    streakconvictions: 0,
    reason: 0
  };
}

export const CMsgGCCStrike15V2PlayerOverwatchCaseAssignment = {
  encode(
    message: CMsgGCCStrike15V2PlayerOverwatchCaseAssignment,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.caseid.isZero()) {
      writer.uint32(8).uint64(message.caseid);
    }
    if (message.caseurl !== "") {
      writer.uint32(18).string(message.caseurl);
    }
    if (message.verdict !== 0) {
      writer.uint32(24).uint32(message.verdict);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    if (message.throttleseconds !== 0) {
      writer.uint32(40).uint32(message.throttleseconds);
    }
    if (message.suspectid !== 0) {
      writer.uint32(48).uint32(message.suspectid);
    }
    if (message.fractionid !== 0) {
      writer.uint32(56).uint32(message.fractionid);
    }
    if (message.numrounds !== 0) {
      writer.uint32(64).uint32(message.numrounds);
    }
    if (message.fractionrounds !== 0) {
      writer.uint32(72).uint32(message.fractionrounds);
    }
    if (message.streakconvictions !== 0) {
      writer.uint32(80).int32(message.streakconvictions);
    }
    if (message.reason !== 0) {
      writer.uint32(88).uint32(message.reason);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PlayerOverwatchCaseAssignment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caseid = reader.uint64() as Long;
          break;
        case 2:
          message.caseurl = reader.string();
          break;
        case 3:
          message.verdict = reader.uint32();
          break;
        case 4:
          message.timestamp = reader.uint32();
          break;
        case 5:
          message.throttleseconds = reader.uint32();
          break;
        case 6:
          message.suspectid = reader.uint32();
          break;
        case 7:
          message.fractionid = reader.uint32();
          break;
        case 8:
          message.numrounds = reader.uint32();
          break;
        case 9:
          message.fractionrounds = reader.uint32();
          break;
        case 10:
          message.streakconvictions = reader.int32();
          break;
        case 11:
          message.reason = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2PlayerOverwatchCaseAssignment>,
      I
    >
  >(object: I): CMsgGCCStrike15V2PlayerOverwatchCaseAssignment {
    const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment();
    message.caseid =
      object.caseid !== undefined && object.caseid !== null
        ? Long.fromValue(object.caseid)
        : Long.UZERO;
    message.caseurl = object.caseurl ?? "";
    message.verdict = object.verdict ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.throttleseconds = object.throttleseconds ?? 0;
    message.suspectid = object.suspectid ?? 0;
    message.fractionid = object.fractionid ?? 0;
    message.numrounds = object.numrounds ?? 0;
    message.fractionrounds = object.fractionrounds ?? 0;
    message.streakconvictions = object.streakconvictions ?? 0;
    message.reason = object.reason ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PlayerOverwatchCaseStatus(): CMsgGCCStrike15V2PlayerOverwatchCaseStatus {
  return { caseid: Long.UZERO, statusid: 0 };
}

export const CMsgGCCStrike15V2PlayerOverwatchCaseStatus = {
  encode(
    message: CMsgGCCStrike15V2PlayerOverwatchCaseStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.caseid.isZero()) {
      writer.uint32(8).uint64(message.caseid);
    }
    if (message.statusid !== 0) {
      writer.uint32(16).uint32(message.statusid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PlayerOverwatchCaseStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caseid = reader.uint64() as Long;
          break;
        case 2:
          message.statusid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2PlayerOverwatchCaseStatus>, I>
  >(object: I): CMsgGCCStrike15V2PlayerOverwatchCaseStatus {
    const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseStatus();
    message.caseid =
      object.caseid !== undefined && object.caseid !== null
        ? Long.fromValue(object.caseid)
        : Long.UZERO;
    message.statusid = object.statusid ?? 0;
    return message;
  }
};

function createBaseCClientHeaderOverwatchEvidence(): CClientHeaderOverwatchEvidence {
  return { accountid: 0, caseid: Long.UZERO };
}

export const CClientHeaderOverwatchEvidence = {
  encode(
    message: CClientHeaderOverwatchEvidence,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (!message.caseid.isZero()) {
      writer.uint32(16).uint64(message.caseid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CClientHeaderOverwatchEvidence {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientHeaderOverwatchEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.caseid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CClientHeaderOverwatchEvidence>, I>>(
    object: I
  ): CClientHeaderOverwatchEvidence {
    const message = createBaseCClientHeaderOverwatchEvidence();
    message.accountid = object.accountid ?? 0;
    message.caseid =
      object.caseid !== undefined && object.caseid !== null
        ? Long.fromValue(object.caseid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ClientTextMsg(): CMsgGCCStrike15V2GC2ClientTextMsg {
  return { id: 0, type: 0, payload: new Uint8Array() };
}

export const CMsgGCCStrike15V2GC2ClientTextMsg = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientTextMsg,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).uint32(message.type);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientTextMsg {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ClientTextMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.type = reader.uint32();
          break;
        case 3:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GC2ClientTextMsg>, I>
  >(object: I): CMsgGCCStrike15V2GC2ClientTextMsg {
    const message = createBaseCMsgGCCStrike15V2GC2ClientTextMsg();
    message.id = object.id ?? 0;
    message.type = object.type ?? 0;
    message.payload = object.payload ?? new Uint8Array();
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Client2GCTextMsg(): CMsgGCCStrike15V2Client2GCTextMsg {
  return { id: 0, args: [] };
}

export const CMsgGCCStrike15V2Client2GCTextMsg = {
  encode(
    message: CMsgGCCStrike15V2Client2GCTextMsg,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    for (const v of message.args) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Client2GCTextMsg {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Client2GCTextMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.args.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2Client2GCTextMsg>, I>
  >(object: I): CMsgGCCStrike15V2Client2GCTextMsg {
    const message = createBaseCMsgGCCStrike15V2Client2GCTextMsg();
    message.id = object.id ?? 0;
    message.args = object.args?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchEndRunRewardDrops(): CMsgGCCStrike15V2MatchEndRunRewardDrops {
  return { serverinfo: undefined, matchEndQuestData: undefined };
}

export const CMsgGCCStrike15V2MatchEndRunRewardDrops = {
  encode(
    message: CMsgGCCStrike15V2MatchEndRunRewardDrops,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.serverinfo !== undefined) {
      CMsgGCCStrike15V2MatchmakingServerReservationResponse.encode(
        message.serverinfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.matchEndQuestData !== undefined) {
      CMsgGCServerQuestUpdateData.encode(
        message.matchEndQuestData,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchEndRunRewardDrops {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchEndRunRewardDrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.serverinfo =
            CMsgGCCStrike15V2MatchmakingServerReservationResponse.decode(
              reader,
              reader.uint32()
            );
          break;
        case 4:
          message.matchEndQuestData = CMsgGCServerQuestUpdateData.decode(
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchEndRunRewardDrops>, I>
  >(object: I): CMsgGCCStrike15V2MatchEndRunRewardDrops {
    const message = createBaseCMsgGCCStrike15V2MatchEndRunRewardDrops();
    message.serverinfo =
      object.serverinfo !== undefined && object.serverinfo !== null
        ? CMsgGCCStrike15V2MatchmakingServerReservationResponse.fromPartial(
            object.serverinfo
          )
        : undefined;
    message.matchEndQuestData =
      object.matchEndQuestData !== undefined &&
      object.matchEndQuestData !== null
        ? CMsgGCServerQuestUpdateData.fromPartial(object.matchEndQuestData)
        : undefined;
    return message;
  }
};

function createBaseCEconItemPreviewDataBlock(): CEconItemPreviewDataBlock {
  return {
    accountid: 0,
    itemid: Long.UZERO,
    defindex: 0,
    paintindex: 0,
    rarity: 0,
    quality: 0,
    paintwear: 0,
    paintseed: 0,
    killeaterscoretype: 0,
    killeatervalue: 0,
    customname: "",
    stickers: [],
    inventory: 0,
    origin: 0,
    questid: 0,
    dropreason: 0,
    musicindex: 0,
    entindex: 0
  };
}

export const CEconItemPreviewDataBlock = {
  encode(
    message: CEconItemPreviewDataBlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (!message.itemid.isZero()) {
      writer.uint32(16).uint64(message.itemid);
    }
    if (message.defindex !== 0) {
      writer.uint32(24).uint32(message.defindex);
    }
    if (message.paintindex !== 0) {
      writer.uint32(32).uint32(message.paintindex);
    }
    if (message.rarity !== 0) {
      writer.uint32(40).uint32(message.rarity);
    }
    if (message.quality !== 0) {
      writer.uint32(48).uint32(message.quality);
    }
    if (message.paintwear !== 0) {
      writer.uint32(56).uint32(message.paintwear);
    }
    if (message.paintseed !== 0) {
      writer.uint32(64).uint32(message.paintseed);
    }
    if (message.killeaterscoretype !== 0) {
      writer.uint32(72).uint32(message.killeaterscoretype);
    }
    if (message.killeatervalue !== 0) {
      writer.uint32(80).uint32(message.killeatervalue);
    }
    if (message.customname !== "") {
      writer.uint32(90).string(message.customname);
    }
    for (const v of message.stickers) {
      CEconItemPreviewDataBlock_Sticker.encode(
        v!,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.inventory !== 0) {
      writer.uint32(104).uint32(message.inventory);
    }
    if (message.origin !== 0) {
      writer.uint32(112).uint32(message.origin);
    }
    if (message.questid !== 0) {
      writer.uint32(120).uint32(message.questid);
    }
    if (message.dropreason !== 0) {
      writer.uint32(128).uint32(message.dropreason);
    }
    if (message.musicindex !== 0) {
      writer.uint32(136).uint32(message.musicindex);
    }
    if (message.entindex !== 0) {
      writer.uint32(144).int32(message.entindex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CEconItemPreviewDataBlock {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconItemPreviewDataBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.itemid = reader.uint64() as Long;
          break;
        case 3:
          message.defindex = reader.uint32();
          break;
        case 4:
          message.paintindex = reader.uint32();
          break;
        case 5:
          message.rarity = reader.uint32();
          break;
        case 6:
          message.quality = reader.uint32();
          break;
        case 7:
          message.paintwear = reader.uint32();
          break;
        case 8:
          message.paintseed = reader.uint32();
          break;
        case 9:
          message.killeaterscoretype = reader.uint32();
          break;
        case 10:
          message.killeatervalue = reader.uint32();
          break;
        case 11:
          message.customname = reader.string();
          break;
        case 12:
          message.stickers.push(
            CEconItemPreviewDataBlock_Sticker.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.inventory = reader.uint32();
          break;
        case 14:
          message.origin = reader.uint32();
          break;
        case 15:
          message.questid = reader.uint32();
          break;
        case 16:
          message.dropreason = reader.uint32();
          break;
        case 17:
          message.musicindex = reader.uint32();
          break;
        case 18:
          message.entindex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CEconItemPreviewDataBlock>, I>>(
    object: I
  ): CEconItemPreviewDataBlock {
    const message = createBaseCEconItemPreviewDataBlock();
    message.accountid = object.accountid ?? 0;
    message.itemid =
      object.itemid !== undefined && object.itemid !== null
        ? Long.fromValue(object.itemid)
        : Long.UZERO;
    message.defindex = object.defindex ?? 0;
    message.paintindex = object.paintindex ?? 0;
    message.rarity = object.rarity ?? 0;
    message.quality = object.quality ?? 0;
    message.paintwear = object.paintwear ?? 0;
    message.paintseed = object.paintseed ?? 0;
    message.killeaterscoretype = object.killeaterscoretype ?? 0;
    message.killeatervalue = object.killeatervalue ?? 0;
    message.customname = object.customname ?? "";
    message.stickers =
      object.stickers?.map(e =>
        CEconItemPreviewDataBlock_Sticker.fromPartial(e)
      ) || [];
    message.inventory = object.inventory ?? 0;
    message.origin = object.origin ?? 0;
    message.questid = object.questid ?? 0;
    message.dropreason = object.dropreason ?? 0;
    message.musicindex = object.musicindex ?? 0;
    message.entindex = object.entindex ?? 0;
    return message;
  }
};

function createBaseCEconItemPreviewDataBlock_Sticker(): CEconItemPreviewDataBlock_Sticker {
  return { slot: 0, stickerId: 0, wear: 0, scale: 0, rotation: 0, tintId: 0 };
}

export const CEconItemPreviewDataBlock_Sticker = {
  encode(
    message: CEconItemPreviewDataBlock_Sticker,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.slot !== 0) {
      writer.uint32(8).uint32(message.slot);
    }
    if (message.stickerId !== 0) {
      writer.uint32(16).uint32(message.stickerId);
    }
    if (message.wear !== 0) {
      writer.uint32(29).float(message.wear);
    }
    if (message.scale !== 0) {
      writer.uint32(37).float(message.scale);
    }
    if (message.rotation !== 0) {
      writer.uint32(45).float(message.rotation);
    }
    if (message.tintId !== 0) {
      writer.uint32(48).uint32(message.tintId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CEconItemPreviewDataBlock_Sticker {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconItemPreviewDataBlock_Sticker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slot = reader.uint32();
          break;
        case 2:
          message.stickerId = reader.uint32();
          break;
        case 3:
          message.wear = reader.float();
          break;
        case 4:
          message.scale = reader.float();
          break;
        case 5:
          message.rotation = reader.float();
          break;
        case 6:
          message.tintId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CEconItemPreviewDataBlock_Sticker>, I>
  >(object: I): CEconItemPreviewDataBlock_Sticker {
    const message = createBaseCEconItemPreviewDataBlock_Sticker();
    message.slot = object.slot ?? 0;
    message.stickerId = object.stickerId ?? 0;
    message.wear = object.wear ?? 0;
    message.scale = object.scale ?? 0;
    message.rotation = object.rotation ?? 0;
    message.tintId = object.tintId ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchEndRewardDropsNotification(): CMsgGCCStrike15V2MatchEndRewardDropsNotification {
  return { iteminfo: undefined };
}

export const CMsgGCCStrike15V2MatchEndRewardDropsNotification = {
  encode(
    message: CMsgGCCStrike15V2MatchEndRewardDropsNotification,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchEndRewardDropsNotification {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchEndRewardDropsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.iteminfo = CEconItemPreviewDataBlock.decode(
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
    I extends Exact<
      DeepPartial<CMsgGCCStrike15V2MatchEndRewardDropsNotification>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchEndRewardDropsNotification {
    const message =
      createBaseCMsgGCCStrike15V2MatchEndRewardDropsNotification();
    message.iteminfo =
      object.iteminfo !== undefined && object.iteminfo !== null
        ? CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
        : undefined;
    return message;
  }
};

function createBaseCMsgItemAcknowledged(): CMsgItemAcknowledged {
  return { iteminfo: undefined };
}

export const CMsgItemAcknowledged = {
  encode(
    message: CMsgItemAcknowledged,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgItemAcknowledged {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemAcknowledged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iteminfo = CEconItemPreviewDataBlock.decode(
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

  fromPartial<I extends Exact<DeepPartial<CMsgItemAcknowledged>, I>>(
    object: I
  ): CMsgItemAcknowledged {
    const message = createBaseCMsgItemAcknowledged();
    message.iteminfo =
      object.iteminfo !== undefined && object.iteminfo !== null
        ? CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
        : undefined;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest(): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest {
  return {
    paramS: Long.UZERO,
    paramA: Long.UZERO,
    paramD: Long.UZERO,
    paramM: Long.UZERO
  };
}

export const CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest = {
  encode(
    message: CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.paramS.isZero()) {
      writer.uint32(8).uint64(message.paramS);
    }
    if (!message.paramA.isZero()) {
      writer.uint32(16).uint64(message.paramA);
    }
    if (!message.paramD.isZero()) {
      writer.uint32(24).uint64(message.paramD);
    }
    if (!message.paramM.isZero()) {
      writer.uint32(32).uint64(message.paramM);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramS = reader.uint64() as Long;
          break;
        case 2:
          message.paramA = reader.uint64() as Long;
          break;
        case 3:
          message.paramD = reader.uint64() as Long;
          break;
        case 4:
          message.paramM = reader.uint64() as Long;
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
      DeepPartial<CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest>,
      I
    >
  >(object: I): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest {
    const message =
      createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest();
    message.paramS =
      object.paramS !== undefined && object.paramS !== null
        ? Long.fromValue(object.paramS)
        : Long.UZERO;
    message.paramA =
      object.paramA !== undefined && object.paramA !== null
        ? Long.fromValue(object.paramA)
        : Long.UZERO;
    message.paramD =
      object.paramD !== undefined && object.paramD !== null
        ? Long.fromValue(object.paramD)
        : Long.UZERO;
    message.paramM =
      object.paramM !== undefined && object.paramM !== null
        ? Long.fromValue(object.paramM)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse(): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse {
  return { iteminfo: undefined };
}

export const CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse = {
  encode(
    message: CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iteminfo = CEconItemPreviewDataBlock.decode(
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
    I extends Exact<
      DeepPartial<CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse>,
      I
    >
  >(object: I): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse {
    const message =
      createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse();
    message.iteminfo =
      object.iteminfo !== undefined && object.iteminfo !== null
        ? CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
        : undefined;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames(): CMsgGCCStrike15V2MatchListRequestCurrentLiveGames {
  return {};
}

export const CMsgGCCStrike15V2MatchListRequestCurrentLiveGames = {
  encode(
    _: CMsgGCCStrike15V2MatchListRequestCurrentLiveGames,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestCurrentLiveGames {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames();
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

  fromPartial<
    I extends Exact<
      DeepPartial<CMsgGCCStrike15V2MatchListRequestCurrentLiveGames>,
      I
    >
  >(_: I): CMsgGCCStrike15V2MatchListRequestCurrentLiveGames {
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames();
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchListRequestLiveGameForUser(): CMsgGCCStrike15V2MatchListRequestLiveGameForUser {
  return { accountid: 0 };
}

export const CMsgGCCStrike15V2MatchListRequestLiveGameForUser = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestLiveGameForUser,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestLiveGameForUser {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestLiveGameForUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchListRequestLiveGameForUser>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchListRequestLiveGameForUser {
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestLiveGameForUser();
    message.accountid = object.accountid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchListRequestRecentUserGames(): CMsgGCCStrike15V2MatchListRequestRecentUserGames {
  return { accountid: 0 };
}

export const CMsgGCCStrike15V2MatchListRequestRecentUserGames = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestRecentUserGames,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestRecentUserGames {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestRecentUserGames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchListRequestRecentUserGames>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchListRequestRecentUserGames {
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestRecentUserGames();
    message.accountid = object.accountid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchListRequestTournamentGames(): CMsgGCCStrike15V2MatchListRequestTournamentGames {
  return { eventid: 0 };
}

export const CMsgGCCStrike15V2MatchListRequestTournamentGames = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestTournamentGames,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).int32(message.eventid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestTournamentGames {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestTournamentGames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventid = reader.int32();
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
      DeepPartial<CMsgGCCStrike15V2MatchListRequestTournamentGames>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchListRequestTournamentGames {
    const message =
      createBaseCMsgGCCStrike15V2MatchListRequestTournamentGames();
    message.eventid = object.eventid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchListRequestFullGameInfo(): CMsgGCCStrike15V2MatchListRequestFullGameInfo {
  return { matchid: Long.UZERO, outcomeid: Long.UZERO, token: 0 };
}

export const CMsgGCCStrike15V2MatchListRequestFullGameInfo = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestFullGameInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.matchid.isZero()) {
      writer.uint32(8).uint64(message.matchid);
    }
    if (!message.outcomeid.isZero()) {
      writer.uint32(16).uint64(message.outcomeid);
    }
    if (message.token !== 0) {
      writer.uint32(24).uint32(message.token);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestFullGameInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchListRequestFullGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchid = reader.uint64() as Long;
          break;
        case 2:
          message.outcomeid = reader.uint64() as Long;
          break;
        case 3:
          message.token = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2MatchListRequestFullGameInfo>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchListRequestFullGameInfo {
    const message = createBaseCMsgGCCStrike15V2MatchListRequestFullGameInfo();
    message.matchid =
      object.matchid !== undefined && object.matchid !== null
        ? Long.fromValue(object.matchid)
        : Long.UZERO;
    message.outcomeid =
      object.outcomeid !== undefined && object.outcomeid !== null
        ? Long.fromValue(object.outcomeid)
        : Long.UZERO;
    message.token = object.token ?? 0;
    return message;
  }
};

function createBaseCDataGCCStrike15V2MatchInfo(): CDataGCCStrike15V2MatchInfo {
  return {
    matchid: Long.UZERO,
    matchtime: 0,
    watchablematchinfo: undefined,
    roundstatsLegacy: undefined,
    roundstatsall: []
  };
}

export const CDataGCCStrike15V2MatchInfo = {
  encode(
    message: CDataGCCStrike15V2MatchInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.matchid.isZero()) {
      writer.uint32(8).uint64(message.matchid);
    }
    if (message.matchtime !== 0) {
      writer.uint32(16).uint32(message.matchtime);
    }
    if (message.watchablematchinfo !== undefined) {
      WatchableMatchInfo.encode(
        message.watchablematchinfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.roundstatsLegacy !== undefined) {
      CMsgGCCStrike15V2MatchmakingServerRoundStats.encode(
        message.roundstatsLegacy,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.roundstatsall) {
      CMsgGCCStrike15V2MatchmakingServerRoundStats.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2MatchInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2MatchInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchid = reader.uint64() as Long;
          break;
        case 2:
          message.matchtime = reader.uint32();
          break;
        case 3:
          message.watchablematchinfo = WatchableMatchInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.roundstatsLegacy =
            CMsgGCCStrike15V2MatchmakingServerRoundStats.decode(
              reader,
              reader.uint32()
            );
          break;
        case 5:
          message.roundstatsall.push(
            CMsgGCCStrike15V2MatchmakingServerRoundStats.decode(
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

  fromPartial<I extends Exact<DeepPartial<CDataGCCStrike15V2MatchInfo>, I>>(
    object: I
  ): CDataGCCStrike15V2MatchInfo {
    const message = createBaseCDataGCCStrike15V2MatchInfo();
    message.matchid =
      object.matchid !== undefined && object.matchid !== null
        ? Long.fromValue(object.matchid)
        : Long.UZERO;
    message.matchtime = object.matchtime ?? 0;
    message.watchablematchinfo =
      object.watchablematchinfo !== undefined &&
      object.watchablematchinfo !== null
        ? WatchableMatchInfo.fromPartial(object.watchablematchinfo)
        : undefined;
    message.roundstatsLegacy =
      object.roundstatsLegacy !== undefined && object.roundstatsLegacy !== null
        ? CMsgGCCStrike15V2MatchmakingServerRoundStats.fromPartial(
            object.roundstatsLegacy
          )
        : undefined;
    message.roundstatsall =
      object.roundstatsall?.map(e =>
        CMsgGCCStrike15V2MatchmakingServerRoundStats.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentGroupTeam(): CDataGCCStrike15V2TournamentGroupTeam {
  return { teamId: 0, score: 0, correctpick: false };
}

export const CDataGCCStrike15V2TournamentGroupTeam = {
  encode(
    message: CDataGCCStrike15V2TournamentGroupTeam,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).int32(message.teamId);
    }
    if (message.score !== 0) {
      writer.uint32(16).int32(message.score);
    }
    if (message.correctpick === true) {
      writer.uint32(24).bool(message.correctpick);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentGroupTeam {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentGroupTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamId = reader.int32();
          break;
        case 2:
          message.score = reader.int32();
          break;
        case 3:
          message.correctpick = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CDataGCCStrike15V2TournamentGroupTeam>, I>
  >(object: I): CDataGCCStrike15V2TournamentGroupTeam {
    const message = createBaseCDataGCCStrike15V2TournamentGroupTeam();
    message.teamId = object.teamId ?? 0;
    message.score = object.score ?? 0;
    message.correctpick = object.correctpick ?? false;
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentGroup(): CDataGCCStrike15V2TournamentGroup {
  return {
    groupid: 0,
    name: "",
    desc: "",
    picksDeprecated: 0,
    teams: [],
    stageIds: [],
    picklockuntiltime: 0,
    pickableteams: 0,
    pointsPerPick: 0,
    picks: []
  };
}

export const CDataGCCStrike15V2TournamentGroup = {
  encode(
    message: CDataGCCStrike15V2TournamentGroup,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.groupid !== 0) {
      writer.uint32(8).uint32(message.groupid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.picksDeprecated !== 0) {
      writer.uint32(32).uint32(message.picksDeprecated);
    }
    for (const v of message.teams) {
      CDataGCCStrike15V2TournamentGroupTeam.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.stageIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.picklockuntiltime !== 0) {
      writer.uint32(56).uint32(message.picklockuntiltime);
    }
    if (message.pickableteams !== 0) {
      writer.uint32(64).uint32(message.pickableteams);
    }
    if (message.pointsPerPick !== 0) {
      writer.uint32(72).uint32(message.pointsPerPick);
    }
    for (const v of message.picks) {
      CDataGCCStrike15V2TournamentGroup_Picks.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentGroup {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupid = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.picksDeprecated = reader.uint32();
          break;
        case 5:
          message.teams.push(
            CDataGCCStrike15V2TournamentGroupTeam.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stageIds.push(reader.int32());
            }
          } else {
            message.stageIds.push(reader.int32());
          }
          break;
        case 7:
          message.picklockuntiltime = reader.uint32();
          break;
        case 8:
          message.pickableteams = reader.uint32();
          break;
        case 9:
          message.pointsPerPick = reader.uint32();
          break;
        case 10:
          message.picks.push(
            CDataGCCStrike15V2TournamentGroup_Picks.decode(
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
    I extends Exact<DeepPartial<CDataGCCStrike15V2TournamentGroup>, I>
  >(object: I): CDataGCCStrike15V2TournamentGroup {
    const message = createBaseCDataGCCStrike15V2TournamentGroup();
    message.groupid = object.groupid ?? 0;
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.picksDeprecated = object.picksDeprecated ?? 0;
    message.teams =
      object.teams?.map(e =>
        CDataGCCStrike15V2TournamentGroupTeam.fromPartial(e)
      ) || [];
    message.stageIds = object.stageIds?.map(e => e) || [];
    message.picklockuntiltime = object.picklockuntiltime ?? 0;
    message.pickableteams = object.pickableteams ?? 0;
    message.pointsPerPick = object.pointsPerPick ?? 0;
    message.picks =
      object.picks?.map(e =>
        CDataGCCStrike15V2TournamentGroup_Picks.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentGroup_Picks(): CDataGCCStrike15V2TournamentGroup_Picks {
  return { pickids: [] };
}

export const CDataGCCStrike15V2TournamentGroup_Picks = {
  encode(
    message: CDataGCCStrike15V2TournamentGroup_Picks,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.pickids) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentGroup_Picks {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentGroup_Picks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pickids.push(reader.int32());
            }
          } else {
            message.pickids.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CDataGCCStrike15V2TournamentGroup_Picks>, I>
  >(object: I): CDataGCCStrike15V2TournamentGroup_Picks {
    const message = createBaseCDataGCCStrike15V2TournamentGroup_Picks();
    message.pickids = object.pickids?.map(e => e) || [];
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentSection(): CDataGCCStrike15V2TournamentSection {
  return { sectionid: 0, name: "", desc: "", groups: [] };
}

export const CDataGCCStrike15V2TournamentSection = {
  encode(
    message: CDataGCCStrike15V2TournamentSection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sectionid !== 0) {
      writer.uint32(8).uint32(message.sectionid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    for (const v of message.groups) {
      CDataGCCStrike15V2TournamentGroup.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentSection {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentSection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionid = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.groups.push(
            CDataGCCStrike15V2TournamentGroup.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<CDataGCCStrike15V2TournamentSection>, I>
  >(object: I): CDataGCCStrike15V2TournamentSection {
    const message = createBaseCDataGCCStrike15V2TournamentSection();
    message.sectionid = object.sectionid ?? 0;
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.groups =
      object.groups?.map(e =>
        CDataGCCStrike15V2TournamentGroup.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCDataGCCStrike15V2TournamentInfo(): CDataGCCStrike15V2TournamentInfo {
  return { sections: [], tournamentEvent: undefined, tournamentTeams: [] };
}

export const CDataGCCStrike15V2TournamentInfo = {
  encode(
    message: CDataGCCStrike15V2TournamentInfo,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sections) {
      CDataGCCStrike15V2TournamentSection.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.tournamentEvent !== undefined) {
      TournamentEvent.encode(
        message.tournamentEvent,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.tournamentTeams) {
      TournamentTeam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CDataGCCStrike15V2TournamentInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataGCCStrike15V2TournamentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sections.push(
            CDataGCCStrike15V2TournamentSection.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.tournamentEvent = TournamentEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.tournamentTeams.push(
            TournamentTeam.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<CDataGCCStrike15V2TournamentInfo>, I>
  >(object: I): CDataGCCStrike15V2TournamentInfo {
    const message = createBaseCDataGCCStrike15V2TournamentInfo();
    message.sections =
      object.sections?.map(e =>
        CDataGCCStrike15V2TournamentSection.fromPartial(e)
      ) || [];
    message.tournamentEvent =
      object.tournamentEvent !== undefined && object.tournamentEvent !== null
        ? TournamentEvent.fromPartial(object.tournamentEvent)
        : undefined;
    message.tournamentTeams =
      object.tournamentTeams?.map(e => TournamentTeam.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchList(): CMsgGCCStrike15V2MatchList {
  return {
    msgrequestid: 0,
    accountid: 0,
    servertime: 0,
    matches: [],
    streams: [],
    tournamentinfo: undefined
  };
}

export const CMsgGCCStrike15V2MatchList = {
  encode(
    message: CMsgGCCStrike15V2MatchList,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.msgrequestid !== 0) {
      writer.uint32(8).uint32(message.msgrequestid);
    }
    if (message.accountid !== 0) {
      writer.uint32(16).uint32(message.accountid);
    }
    if (message.servertime !== 0) {
      writer.uint32(24).uint32(message.servertime);
    }
    for (const v of message.matches) {
      CDataGCCStrike15V2MatchInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.streams) {
      TournamentTeam.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.tournamentinfo !== undefined) {
      CDataGCCStrike15V2TournamentInfo.encode(
        message.tournamentinfo,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2MatchList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgrequestid = reader.uint32();
          break;
        case 2:
          message.accountid = reader.uint32();
          break;
        case 3:
          message.servertime = reader.uint32();
          break;
        case 4:
          message.matches.push(
            CDataGCCStrike15V2MatchInfo.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.streams.push(TournamentTeam.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tournamentinfo = CDataGCCStrike15V2TournamentInfo.decode(
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2MatchList>, I>>(
    object: I
  ): CMsgGCCStrike15V2MatchList {
    const message = createBaseCMsgGCCStrike15V2MatchList();
    message.msgrequestid = object.msgrequestid ?? 0;
    message.accountid = object.accountid ?? 0;
    message.servertime = object.servertime ?? 0;
    message.matches =
      object.matches?.map(e => CDataGCCStrike15V2MatchInfo.fromPartial(e)) ||
      [];
    message.streams =
      object.streams?.map(e => TournamentTeam.fromPartial(e)) || [];
    message.tournamentinfo =
      object.tournamentinfo !== undefined && object.tournamentinfo !== null
        ? CDataGCCStrike15V2TournamentInfo.fromPartial(object.tournamentinfo)
        : undefined;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2MatchListTournamentOperatorMgmt(): CMsgGCCStrike15V2MatchListTournamentOperatorMgmt {
  return { eventid: 0, matches: [] };
}

export const CMsgGCCStrike15V2MatchListTournamentOperatorMgmt = {
  encode(
    message: CMsgGCCStrike15V2MatchListTournamentOperatorMgmt,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).int32(message.eventid);
    }
    for (const v of message.matches) {
      CDataGCCStrike15V2MatchInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2MatchListTournamentOperatorMgmt {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2MatchListTournamentOperatorMgmt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventid = reader.int32();
          break;
        case 2:
          message.matches.push(
            CDataGCCStrike15V2MatchInfo.decode(reader, reader.uint32())
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
    I extends Exact<
      DeepPartial<CMsgGCCStrike15V2MatchListTournamentOperatorMgmt>,
      I
    >
  >(object: I): CMsgGCCStrike15V2MatchListTournamentOperatorMgmt {
    const message =
      createBaseCMsgGCCStrike15V2MatchListTournamentOperatorMgmt();
    message.eventid = object.eventid ?? 0;
    message.matches =
      object.matches?.map(e => CDataGCCStrike15V2MatchInfo.fromPartial(e)) ||
      [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Predictions(): CMsgGCCStrike15V2Predictions {
  return { eventId: 0, groupMatchTeamPicks: [] };
}

export const CMsgGCCStrike15V2Predictions = {
  encode(
    message: CMsgGCCStrike15V2Predictions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    for (const v of message.groupMatchTeamPicks) {
      CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Predictions {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Predictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.uint32();
          break;
        case 2:
          message.groupMatchTeamPicks.push(
            CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.decode(
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2Predictions>, I>>(
    object: I
  ): CMsgGCCStrike15V2Predictions {
    const message = createBaseCMsgGCCStrike15V2Predictions();
    message.eventId = object.eventId ?? 0;
    message.groupMatchTeamPicks =
      object.groupMatchTeamPicks?.map(e =>
        CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick(): CMsgGCCStrike15V2Predictions_GroupMatchTeamPick {
  return { sectionid: 0, groupid: 0, index: 0, teamid: 0, itemid: Long.UZERO };
}

export const CMsgGCCStrike15V2Predictions_GroupMatchTeamPick = {
  encode(
    message: CMsgGCCStrike15V2Predictions_GroupMatchTeamPick,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sectionid !== 0) {
      writer.uint32(8).int32(message.sectionid);
    }
    if (message.groupid !== 0) {
      writer.uint32(16).int32(message.groupid);
    }
    if (message.index !== 0) {
      writer.uint32(24).int32(message.index);
    }
    if (message.teamid !== 0) {
      writer.uint32(32).int32(message.teamid);
    }
    if (!message.itemid.isZero()) {
      writer.uint32(40).uint64(message.itemid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Predictions_GroupMatchTeamPick {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionid = reader.int32();
          break;
        case 2:
          message.groupid = reader.int32();
          break;
        case 3:
          message.index = reader.int32();
          break;
        case 4:
          message.teamid = reader.int32();
          break;
        case 5:
          message.itemid = reader.uint64() as Long;
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
      DeepPartial<CMsgGCCStrike15V2Predictions_GroupMatchTeamPick>,
      I
    >
  >(object: I): CMsgGCCStrike15V2Predictions_GroupMatchTeamPick {
    const message = createBaseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick();
    message.sectionid = object.sectionid ?? 0;
    message.groupid = object.groupid ?? 0;
    message.index = object.index ?? 0;
    message.teamid = object.teamid ?? 0;
    message.itemid =
      object.itemid !== undefined && object.itemid !== null
        ? Long.fromValue(object.itemid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Fantasy(): CMsgGCCStrike15V2Fantasy {
  return { eventId: 0, teams: [] };
}

export const CMsgGCCStrike15V2Fantasy = {
  encode(
    message: CMsgGCCStrike15V2Fantasy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    for (const v of message.teams) {
      CMsgGCCStrike15V2Fantasy_FantasyTeam.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Fantasy {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Fantasy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.uint32();
          break;
        case 2:
          message.teams.push(
            CMsgGCCStrike15V2Fantasy_FantasyTeam.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2Fantasy>, I>>(
    object: I
  ): CMsgGCCStrike15V2Fantasy {
    const message = createBaseCMsgGCCStrike15V2Fantasy();
    message.eventId = object.eventId ?? 0;
    message.teams =
      object.teams?.map(e =>
        CMsgGCCStrike15V2Fantasy_FantasyTeam.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Fantasy_FantasySlot(): CMsgGCCStrike15V2Fantasy_FantasySlot {
  return { type: 0, pick: 0, itemid: Long.UZERO };
}

export const CMsgGCCStrike15V2Fantasy_FantasySlot = {
  encode(
    message: CMsgGCCStrike15V2Fantasy_FantasySlot,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.pick !== 0) {
      writer.uint32(16).int32(message.pick);
    }
    if (!message.itemid.isZero()) {
      writer.uint32(24).uint64(message.itemid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Fantasy_FantasySlot {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Fantasy_FantasySlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.pick = reader.int32();
          break;
        case 3:
          message.itemid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2Fantasy_FantasySlot>, I>
  >(object: I): CMsgGCCStrike15V2Fantasy_FantasySlot {
    const message = createBaseCMsgGCCStrike15V2Fantasy_FantasySlot();
    message.type = object.type ?? 0;
    message.pick = object.pick ?? 0;
    message.itemid =
      object.itemid !== undefined && object.itemid !== null
        ? Long.fromValue(object.itemid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Fantasy_FantasyTeam(): CMsgGCCStrike15V2Fantasy_FantasyTeam {
  return { sectionid: 0, slots: [] };
}

export const CMsgGCCStrike15V2Fantasy_FantasyTeam = {
  encode(
    message: CMsgGCCStrike15V2Fantasy_FantasyTeam,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sectionid !== 0) {
      writer.uint32(8).int32(message.sectionid);
    }
    for (const v of message.slots) {
      CMsgGCCStrike15V2Fantasy_FantasySlot.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Fantasy_FantasyTeam {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Fantasy_FantasyTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionid = reader.int32();
          break;
        case 2:
          message.slots.push(
            CMsgGCCStrike15V2Fantasy_FantasySlot.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2Fantasy_FantasyTeam>, I>
  >(object: I): CMsgGCCStrike15V2Fantasy_FantasyTeam {
    const message = createBaseCMsgGCCStrike15V2Fantasy_FantasyTeam();
    message.sectionid = object.sectionid ?? 0;
    message.slots =
      object.slots?.map(e =>
        CMsgGCCStrike15V2Fantasy_FantasySlot.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCAttributeString(): CAttributeString {
  return { value: "" };
}

export const CAttributeString = {
  encode(message: CAttributeString, writer: Writer = Writer.create()): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CAttributeString {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAttributeString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CAttributeString>, I>>(
    object: I
  ): CAttributeString {
    const message = createBaseCAttributeString();
    message.value = object.value ?? "";
    return message;
  }
};

function createBaseCMsgCStrike15Welcome(): CMsgCStrike15Welcome {
  return {
    storeItemHash: 0,
    timeplayedconsecutively: 0,
    timeFirstPlayed: 0,
    lastTimePlayed: 0,
    lastIpAddress: 0,
    gscookieid: Long.UZERO,
    uniqueid: Long.UZERO
  };
}

export const CMsgCStrike15Welcome = {
  encode(
    message: CMsgCStrike15Welcome,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storeItemHash !== 0) {
      writer.uint32(40).uint32(message.storeItemHash);
    }
    if (message.timeplayedconsecutively !== 0) {
      writer.uint32(48).uint32(message.timeplayedconsecutively);
    }
    if (message.timeFirstPlayed !== 0) {
      writer.uint32(80).uint32(message.timeFirstPlayed);
    }
    if (message.lastTimePlayed !== 0) {
      writer.uint32(96).uint32(message.lastTimePlayed);
    }
    if (message.lastIpAddress !== 0) {
      writer.uint32(104).uint32(message.lastIpAddress);
    }
    if (!message.gscookieid.isZero()) {
      writer.uint32(144).uint64(message.gscookieid);
    }
    if (!message.uniqueid.isZero()) {
      writer.uint32(152).uint64(message.uniqueid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgCStrike15Welcome {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCStrike15Welcome();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.storeItemHash = reader.uint32();
          break;
        case 6:
          message.timeplayedconsecutively = reader.uint32();
          break;
        case 10:
          message.timeFirstPlayed = reader.uint32();
          break;
        case 12:
          message.lastTimePlayed = reader.uint32();
          break;
        case 13:
          message.lastIpAddress = reader.uint32();
          break;
        case 18:
          message.gscookieid = reader.uint64() as Long;
          break;
        case 19:
          message.uniqueid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCStrike15Welcome>, I>>(
    object: I
  ): CMsgCStrike15Welcome {
    const message = createBaseCMsgCStrike15Welcome();
    message.storeItemHash = object.storeItemHash ?? 0;
    message.timeplayedconsecutively = object.timeplayedconsecutively ?? 0;
    message.timeFirstPlayed = object.timeFirstPlayed ?? 0;
    message.lastTimePlayed = object.lastTimePlayed ?? 0;
    message.lastIpAddress = object.lastIpAddress ?? 0;
    message.gscookieid =
      object.gscookieid !== undefined && object.gscookieid !== null
        ? Long.fromValue(object.gscookieid)
        : Long.UZERO;
    message.uniqueid =
      object.uniqueid !== undefined && object.uniqueid !== null
        ? Long.fromValue(object.uniqueid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientVarValueNotificationInfo(): CMsgGCCStrike15V2ClientVarValueNotificationInfo {
  return {
    valueName: "",
    valueInt: 0,
    serverAddr: 0,
    serverPort: 0,
    chokedBlocks: []
  };
}

export const CMsgGCCStrike15V2ClientVarValueNotificationInfo = {
  encode(
    message: CMsgGCCStrike15V2ClientVarValueNotificationInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.valueName !== "") {
      writer.uint32(10).string(message.valueName);
    }
    if (message.valueInt !== 0) {
      writer.uint32(16).int32(message.valueInt);
    }
    if (message.serverAddr !== 0) {
      writer.uint32(24).uint32(message.serverAddr);
    }
    if (message.serverPort !== 0) {
      writer.uint32(32).uint32(message.serverPort);
    }
    for (const v of message.chokedBlocks) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientVarValueNotificationInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientVarValueNotificationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueName = reader.string();
          break;
        case 2:
          message.valueInt = reader.int32();
          break;
        case 3:
          message.serverAddr = reader.uint32();
          break;
        case 4:
          message.serverPort = reader.uint32();
          break;
        case 5:
          message.chokedBlocks.push(reader.string());
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
      DeepPartial<CMsgGCCStrike15V2ClientVarValueNotificationInfo>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ClientVarValueNotificationInfo {
    const message = createBaseCMsgGCCStrike15V2ClientVarValueNotificationInfo();
    message.valueName = object.valueName ?? "";
    message.valueInt = object.valueInt ?? 0;
    message.serverAddr = object.serverAddr ?? 0;
    message.serverPort = object.serverPort ?? 0;
    message.chokedBlocks = object.chokedBlocks?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ServerVarValueNotificationInfo(): CMsgGCCStrike15V2ServerVarValueNotificationInfo {
  return { accountid: 0, viewangles: [], type: 0, userdata: [] };
}

export const CMsgGCCStrike15V2ServerVarValueNotificationInfo = {
  encode(
    message: CMsgGCCStrike15V2ServerVarValueNotificationInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    writer.uint32(18).fork();
    for (const v of message.viewangles) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.type !== 0) {
      writer.uint32(24).uint32(message.type);
    }
    writer.uint32(34).fork();
    for (const v of message.userdata) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ServerVarValueNotificationInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ServerVarValueNotificationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.viewangles.push(reader.uint32());
            }
          } else {
            message.viewangles.push(reader.uint32());
          }
          break;
        case 3:
          message.type = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.userdata.push(reader.uint32());
            }
          } else {
            message.userdata.push(reader.uint32());
          }
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
      DeepPartial<CMsgGCCStrike15V2ServerVarValueNotificationInfo>,
      I
    >
  >(object: I): CMsgGCCStrike15V2ServerVarValueNotificationInfo {
    const message = createBaseCMsgGCCStrike15V2ServerVarValueNotificationInfo();
    message.accountid = object.accountid ?? 0;
    message.viewangles = object.viewangles?.map(e => e) || [];
    message.type = object.type ?? 0;
    message.userdata = object.userdata?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GiftsLeaderboardRequest(): CMsgGCCStrike15V2GiftsLeaderboardRequest {
  return {};
}

export const CMsgGCCStrike15V2GiftsLeaderboardRequest = {
  encode(
    _: CMsgGCCStrike15V2GiftsLeaderboardRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GiftsLeaderboardRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardRequest();
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GiftsLeaderboardRequest>, I>
  >(_: I): CMsgGCCStrike15V2GiftsLeaderboardRequest {
    const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardRequest();
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse(): CMsgGCCStrike15V2GiftsLeaderboardResponse {
  return {
    servertime: 0,
    timePeriodSeconds: 0,
    totalGiftsGiven: 0,
    totalGivers: 0,
    entries: []
  };
}

export const CMsgGCCStrike15V2GiftsLeaderboardResponse = {
  encode(
    message: CMsgGCCStrike15V2GiftsLeaderboardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.servertime !== 0) {
      writer.uint32(8).uint32(message.servertime);
    }
    if (message.timePeriodSeconds !== 0) {
      writer.uint32(16).uint32(message.timePeriodSeconds);
    }
    if (message.totalGiftsGiven !== 0) {
      writer.uint32(24).uint32(message.totalGiftsGiven);
    }
    if (message.totalGivers !== 0) {
      writer.uint32(32).uint32(message.totalGivers);
    }
    for (const v of message.entries) {
      CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GiftsLeaderboardResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.servertime = reader.uint32();
          break;
        case 2:
          message.timePeriodSeconds = reader.uint32();
          break;
        case 3:
          message.totalGiftsGiven = reader.uint32();
          break;
        case 4:
          message.totalGivers = reader.uint32();
          break;
        case 5:
          message.entries.push(
            CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.decode(
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GiftsLeaderboardResponse>, I>
  >(object: I): CMsgGCCStrike15V2GiftsLeaderboardResponse {
    const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse();
    message.servertime = object.servertime ?? 0;
    message.timePeriodSeconds = object.timePeriodSeconds ?? 0;
    message.totalGiftsGiven = object.totalGiftsGiven ?? 0;
    message.totalGivers = object.totalGivers ?? 0;
    message.entries =
      object.entries?.map(e =>
        CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.fromPartial(
          e
        )
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry(): CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry {
  return { accountid: 0, gifts: 0 };
}

export const CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry = {
  encode(
    message: CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.gifts !== 0) {
      writer.uint32(16).uint32(message.gifts);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.gifts = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry>,
      I
    >
  >(object: I): CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry {
    const message =
      createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry();
    message.accountid = object.accountid ?? 0;
    message.gifts = object.gifts ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientSubmitSurveyVote(): CMsgGCCStrike15V2ClientSubmitSurveyVote {
  return { surveyId: 0, vote: 0 };
}

export const CMsgGCCStrike15V2ClientSubmitSurveyVote = {
  encode(
    message: CMsgGCCStrike15V2ClientSubmitSurveyVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.surveyId !== 0) {
      writer.uint32(8).uint32(message.surveyId);
    }
    if (message.vote !== 0) {
      writer.uint32(16).uint32(message.vote);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientSubmitSurveyVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientSubmitSurveyVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.surveyId = reader.uint32();
          break;
        case 2:
          message.vote = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientSubmitSurveyVote>, I>
  >(object: I): CMsgGCCStrike15V2ClientSubmitSurveyVote {
    const message = createBaseCMsgGCCStrike15V2ClientSubmitSurveyVote();
    message.surveyId = object.surveyId ?? 0;
    message.vote = object.vote ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Server2GCClientValidate(): CMsgGCCStrike15V2Server2GCClientValidate {
  return { accountid: 0 };
}

export const CMsgGCCStrike15V2Server2GCClientValidate = {
  encode(
    message: CMsgGCCStrike15V2Server2GCClientValidate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Server2GCClientValidate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Server2GCClientValidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2Server2GCClientValidate>, I>
  >(object: I): CMsgGCCStrike15V2Server2GCClientValidate {
    const message = createBaseCMsgGCCStrike15V2Server2GCClientValidate();
    message.accountid = object.accountid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ClientTournamentInfo(): CMsgGCCStrike15V2GC2ClientTournamentInfo {
  return { eventid: 0, stageid: 0, gameType: 0, teamids: [] };
}

export const CMsgGCCStrike15V2GC2ClientTournamentInfo = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientTournamentInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).uint32(message.eventid);
    }
    if (message.stageid !== 0) {
      writer.uint32(16).uint32(message.stageid);
    }
    if (message.gameType !== 0) {
      writer.uint32(24).uint32(message.gameType);
    }
    writer.uint32(34).fork();
    for (const v of message.teamids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientTournamentInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ClientTournamentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventid = reader.uint32();
          break;
        case 2:
          message.stageid = reader.uint32();
          break;
        case 3:
          message.gameType = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.teamids.push(reader.uint32());
            }
          } else {
            message.teamids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GC2ClientTournamentInfo>, I>
  >(object: I): CMsgGCCStrike15V2GC2ClientTournamentInfo {
    const message = createBaseCMsgGCCStrike15V2GC2ClientTournamentInfo();
    message.eventid = object.eventid ?? 0;
    message.stageid = object.stageid ?? 0;
    message.gameType = object.gameType ?? 0;
    message.teamids = object.teamids?.map(e => e) || [];
    return message;
  }
};

function createBaseCSOEconCoupon(): CSOEconCoupon {
  return { entryid: 0, defidx: 0, expirationDate: 0 };
}

export const CSOEconCoupon = {
  encode(message: CSOEconCoupon, writer: Writer = Writer.create()): Writer {
    if (message.entryid !== 0) {
      writer.uint32(8).uint32(message.entryid);
    }
    if (message.defidx !== 0) {
      writer.uint32(16).uint32(message.defidx);
    }
    if (message.expirationDate !== 0) {
      writer.uint32(29).fixed32(message.expirationDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSOEconCoupon {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconCoupon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entryid = reader.uint32();
          break;
        case 2:
          message.defidx = reader.uint32();
          break;
        case 3:
          message.expirationDate = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CSOEconCoupon>, I>>(
    object: I
  ): CSOEconCoupon {
    const message = createBaseCSOEconCoupon();
    message.entryid = object.entryid ?? 0;
    message.defidx = object.defidx ?? 0;
    message.expirationDate = object.expirationDate ?? 0;
    return message;
  }
};

function createBaseCSOQuestProgress(): CSOQuestProgress {
  return { questid: 0, pointsRemaining: 0, bonusPoints: 0 };
}

export const CSOQuestProgress = {
  encode(message: CSOQuestProgress, writer: Writer = Writer.create()): Writer {
    if (message.questid !== 0) {
      writer.uint32(8).uint32(message.questid);
    }
    if (message.pointsRemaining !== 0) {
      writer.uint32(16).uint32(message.pointsRemaining);
    }
    if (message.bonusPoints !== 0) {
      writer.uint32(24).uint32(message.bonusPoints);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSOQuestProgress {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOQuestProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questid = reader.uint32();
          break;
        case 2:
          message.pointsRemaining = reader.uint32();
          break;
        case 3:
          message.bonusPoints = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CSOQuestProgress>, I>>(
    object: I
  ): CSOQuestProgress {
    const message = createBaseCSOQuestProgress();
    message.questid = object.questid ?? 0;
    message.pointsRemaining = object.pointsRemaining ?? 0;
    message.bonusPoints = object.bonusPoints ?? 0;
    return message;
  }
};

function createBaseCSOAccountSeasonalOperation(): CSOAccountSeasonalOperation {
  return {
    seasonValue: 0,
    tierUnlocked: 0,
    premiumTiers: 0,
    missionId: 0,
    missionsCompleted: 0,
    redeemableBalance: 0,
    seasonPassTime: 0
  };
}

export const CSOAccountSeasonalOperation = {
  encode(
    message: CSOAccountSeasonalOperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seasonValue !== 0) {
      writer.uint32(8).uint32(message.seasonValue);
    }
    if (message.tierUnlocked !== 0) {
      writer.uint32(16).uint32(message.tierUnlocked);
    }
    if (message.premiumTiers !== 0) {
      writer.uint32(24).uint32(message.premiumTiers);
    }
    if (message.missionId !== 0) {
      writer.uint32(32).uint32(message.missionId);
    }
    if (message.missionsCompleted !== 0) {
      writer.uint32(40).uint32(message.missionsCompleted);
    }
    if (message.redeemableBalance !== 0) {
      writer.uint32(48).uint32(message.redeemableBalance);
    }
    if (message.seasonPassTime !== 0) {
      writer.uint32(56).uint32(message.seasonPassTime);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSOAccountSeasonalOperation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOAccountSeasonalOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonValue = reader.uint32();
          break;
        case 2:
          message.tierUnlocked = reader.uint32();
          break;
        case 3:
          message.premiumTiers = reader.uint32();
          break;
        case 4:
          message.missionId = reader.uint32();
          break;
        case 5:
          message.missionsCompleted = reader.uint32();
          break;
        case 6:
          message.redeemableBalance = reader.uint32();
          break;
        case 7:
          message.seasonPassTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CSOAccountSeasonalOperation>, I>>(
    object: I
  ): CSOAccountSeasonalOperation {
    const message = createBaseCSOAccountSeasonalOperation();
    message.seasonValue = object.seasonValue ?? 0;
    message.tierUnlocked = object.tierUnlocked ?? 0;
    message.premiumTiers = object.premiumTiers ?? 0;
    message.missionId = object.missionId ?? 0;
    message.missionsCompleted = object.missionsCompleted ?? 0;
    message.redeemableBalance = object.redeemableBalance ?? 0;
    message.seasonPassTime = object.seasonPassTime ?? 0;
    return message;
  }
};

function createBaseCSOAccountRecurringSubscription(): CSOAccountRecurringSubscription {
  return { timeNextCycle: 0, timeInitiated: 0 };
}

export const CSOAccountRecurringSubscription = {
  encode(
    message: CSOAccountRecurringSubscription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timeNextCycle !== 0) {
      writer.uint32(8).uint32(message.timeNextCycle);
    }
    if (message.timeInitiated !== 0) {
      writer.uint32(16).uint32(message.timeInitiated);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CSOAccountRecurringSubscription {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOAccountRecurringSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeNextCycle = reader.uint32();
          break;
        case 2:
          message.timeInitiated = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CSOAccountRecurringSubscription>, I>>(
    object: I
  ): CSOAccountRecurringSubscription {
    const message = createBaseCSOAccountRecurringSubscription();
    message.timeNextCycle = object.timeNextCycle ?? 0;
    message.timeInitiated = object.timeInitiated ?? 0;
    return message;
  }
};

function createBaseCSOPersonaDataPublic(): CSOPersonaDataPublic {
  return { playerLevel: 0, commendation: undefined, elevatedState: false };
}

export const CSOPersonaDataPublic = {
  encode(
    message: CSOPersonaDataPublic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.playerLevel !== 0) {
      writer.uint32(8).int32(message.playerLevel);
    }
    if (message.commendation !== undefined) {
      PlayerCommendationInfo.encode(
        message.commendation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.elevatedState === true) {
      writer.uint32(24).bool(message.elevatedState);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CSOPersonaDataPublic {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOPersonaDataPublic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerLevel = reader.int32();
          break;
        case 2:
          message.commendation = PlayerCommendationInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.elevatedState = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CSOPersonaDataPublic>, I>>(
    object: I
  ): CSOPersonaDataPublic {
    const message = createBaseCSOPersonaDataPublic();
    message.playerLevel = object.playerLevel ?? 0;
    message.commendation =
      object.commendation !== undefined && object.commendation !== null
        ? PlayerCommendationInfo.fromPartial(object.commendation)
        : undefined;
    message.elevatedState = object.elevatedState ?? false;
    return message;
  }
};

function createBaseCMsgGCGlobalGameSubscribe(): CMsgGCGlobalGameSubscribe {
  return { ticket: Long.UZERO };
}

export const CMsgGCGlobalGameSubscribe = {
  encode(
    message: CMsgGCGlobalGameSubscribe,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.ticket.isZero()) {
      writer.uint32(8).uint64(message.ticket);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGlobalGameSubscribe {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGlobalGameSubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCGlobalGameSubscribe>, I>>(
    object: I
  ): CMsgGCGlobalGameSubscribe {
    const message = createBaseCMsgGCGlobalGameSubscribe();
    message.ticket =
      object.ticket !== undefined && object.ticket !== null
        ? Long.fromValue(object.ticket)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCGlobalGameUnsubscribe(): CMsgGCGlobalGameUnsubscribe {
  return { timeleft: 0 };
}

export const CMsgGCGlobalGameUnsubscribe = {
  encode(
    message: CMsgGCGlobalGameUnsubscribe,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timeleft !== 0) {
      writer.uint32(8).int32(message.timeleft);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGlobalGameUnsubscribe {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGlobalGameUnsubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeleft = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCGlobalGameUnsubscribe>, I>>(
    object: I
  ): CMsgGCGlobalGameUnsubscribe {
    const message = createBaseCMsgGCGlobalGameUnsubscribe();
    message.timeleft = object.timeleft ?? 0;
    return message;
  }
};

function createBaseCMsgGCGlobalGamePlay(): CMsgGCGlobalGamePlay {
  return { ticket: Long.UZERO, gametimems: 0, msperpoint: 0 };
}

export const CMsgGCGlobalGamePlay = {
  encode(
    message: CMsgGCGlobalGamePlay,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.ticket.isZero()) {
      writer.uint32(8).uint64(message.ticket);
    }
    if (message.gametimems !== 0) {
      writer.uint32(16).uint32(message.gametimems);
    }
    if (message.msperpoint !== 0) {
      writer.uint32(24).uint32(message.msperpoint);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgGCGlobalGamePlay {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGlobalGamePlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = reader.uint64() as Long;
          break;
        case 2:
          message.gametimems = reader.uint32();
          break;
        case 3:
          message.msperpoint = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCGlobalGamePlay>, I>>(
    object: I
  ): CMsgGCGlobalGamePlay {
    const message = createBaseCMsgGCGlobalGamePlay();
    message.ticket =
      object.ticket !== undefined && object.ticket !== null
        ? Long.fromValue(object.ticket)
        : Long.UZERO;
    message.gametimems = object.gametimems ?? 0;
    message.msperpoint = object.msperpoint ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2AcknowledgePenalty(): CMsgGCCStrike15V2AcknowledgePenalty {
  return { acknowledged: 0 };
}

export const CMsgGCCStrike15V2AcknowledgePenalty = {
  encode(
    message: CMsgGCCStrike15V2AcknowledgePenalty,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.acknowledged !== 0) {
      writer.uint32(8).int32(message.acknowledged);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2AcknowledgePenalty {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2AcknowledgePenalty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledged = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2AcknowledgePenalty>, I>
  >(object: I): CMsgGCCStrike15V2AcknowledgePenalty {
    const message = createBaseCMsgGCCStrike15V2AcknowledgePenalty();
    message.acknowledged = object.acknowledged ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin(): CMsgGCCStrike15V2Client2GCRequestPrestigeCoin {
  return { defindex: 0, upgradeid: Long.UZERO, hours: 0, prestigetime: 0 };
}

export const CMsgGCCStrike15V2Client2GCRequestPrestigeCoin = {
  encode(
    message: CMsgGCCStrike15V2Client2GCRequestPrestigeCoin,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.defindex !== 0) {
      writer.uint32(8).uint32(message.defindex);
    }
    if (!message.upgradeid.isZero()) {
      writer.uint32(16).uint64(message.upgradeid);
    }
    if (message.hours !== 0) {
      writer.uint32(24).uint32(message.hours);
    }
    if (message.prestigetime !== 0) {
      writer.uint32(32).uint32(message.prestigetime);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Client2GCRequestPrestigeCoin {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defindex = reader.uint32();
          break;
        case 2:
          message.upgradeid = reader.uint64() as Long;
          break;
        case 3:
          message.hours = reader.uint32();
          break;
        case 4:
          message.prestigetime = reader.uint32();
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
      DeepPartial<CMsgGCCStrike15V2Client2GCRequestPrestigeCoin>,
      I
    >
  >(object: I): CMsgGCCStrike15V2Client2GCRequestPrestigeCoin {
    const message = createBaseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin();
    message.defindex = object.defindex ?? 0;
    message.upgradeid =
      object.upgradeid !== undefined && object.upgradeid !== null
        ? Long.fromValue(object.upgradeid)
        : Long.UZERO;
    message.hours = object.hours ?? 0;
    message.prestigetime = object.prestigetime ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2Client2GCStreamUnlock(): CMsgGCCStrike15V2Client2GCStreamUnlock {
  return { ticket: Long.UZERO, os: 0 };
}

export const CMsgGCCStrike15V2Client2GCStreamUnlock = {
  encode(
    message: CMsgGCCStrike15V2Client2GCStreamUnlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.ticket.isZero()) {
      writer.uint32(8).uint64(message.ticket);
    }
    if (message.os !== 0) {
      writer.uint32(16).int32(message.os);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2Client2GCStreamUnlock {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2Client2GCStreamUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = reader.uint64() as Long;
          break;
        case 2:
          message.os = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2Client2GCStreamUnlock>, I>
  >(object: I): CMsgGCCStrike15V2Client2GCStreamUnlock {
    const message = createBaseCMsgGCCStrike15V2Client2GCStreamUnlock();
    message.ticket =
      object.ticket !== undefined && object.ticket !== null
        ? Long.fromValue(object.ticket)
        : Long.UZERO;
    message.os = object.os ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientToGCRequestElevate(): CMsgGCCStrike15V2ClientToGCRequestElevate {
  return { stage: 0 };
}

export const CMsgGCCStrike15V2ClientToGCRequestElevate = {
  encode(
    message: CMsgGCCStrike15V2ClientToGCRequestElevate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.stage !== 0) {
      writer.uint32(8).uint32(message.stage);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientToGCRequestElevate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientToGCRequestElevate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientToGCRequestElevate>, I>
  >(object: I): CMsgGCCStrike15V2ClientToGCRequestElevate {
    const message = createBaseCMsgGCCStrike15V2ClientToGCRequestElevate();
    message.stage = object.stage ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientToGCChat(): CMsgGCCStrike15V2ClientToGCChat {
  return { matchId: Long.UZERO, text: "" };
}

export const CMsgGCCStrike15V2ClientToGCChat = {
  encode(
    message: CMsgGCCStrike15V2ClientToGCChat,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.matchId.isZero()) {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientToGCChat {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientToGCChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchId = reader.uint64() as Long;
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientToGCChat>, I>>(
    object: I
  ): CMsgGCCStrike15V2ClientToGCChat {
    const message = createBaseCMsgGCCStrike15V2ClientToGCChat();
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GCToClientChat(): CMsgGCCStrike15V2GCToClientChat {
  return { accountId: 0, text: "" };
}

export const CMsgGCCStrike15V2GCToClientChat = {
  encode(
    message: CMsgGCCStrike15V2GCToClientChat,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GCToClientChat {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GCToClientChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2GCToClientChat>, I>>(
    object: I
  ): CMsgGCCStrike15V2GCToClientChat {
    const message = createBaseCMsgGCCStrike15V2GCToClientChat();
    message.accountId = object.accountId ?? 0;
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientAuthKeyCode(): CMsgGCCStrike15V2ClientAuthKeyCode {
  return { eventid: 0, code: "" };
}

export const CMsgGCCStrike15V2ClientAuthKeyCode = {
  encode(
    message: CMsgGCCStrike15V2ClientAuthKeyCode,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).uint32(message.eventid);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientAuthKeyCode {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientAuthKeyCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventid = reader.uint32();
          break;
        case 2:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientAuthKeyCode>, I>
  >(object: I): CMsgGCCStrike15V2ClientAuthKeyCode {
    const message = createBaseCMsgGCCStrike15V2ClientAuthKeyCode();
    message.eventid = object.eventid ?? 0;
    message.code = object.code ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15GotvSyncPacket(): CMsgGCCStrike15GotvSyncPacket {
  return { data: undefined };
}

export const CMsgGCCStrike15GotvSyncPacket = {
  encode(
    message: CMsgGCCStrike15GotvSyncPacket,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined) {
      CEngineGotvSyncPacket.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15GotvSyncPacket {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15GotvSyncPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CEngineGotvSyncPacket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15GotvSyncPacket>, I>>(
    object: I
  ): CMsgGCCStrike15GotvSyncPacket {
    const message = createBaseCMsgGCCStrike15GotvSyncPacket();
    message.data =
      object.data !== undefined && object.data !== null
        ? CEngineGotvSyncPacket.fromPartial(object.data)
        : undefined;
    return message;
  }
};

function createBasePlayerDecalDigitalSignature(): PlayerDecalDigitalSignature {
  return {
    signature: new Uint8Array(),
    accountid: 0,
    rtime: 0,
    endpos: [],
    startpos: [],
    right: [],
    txDefidx: 0,
    entindex: 0,
    hitbox: 0,
    creationtime: 0,
    equipslot: 0,
    traceId: 0,
    normal: [],
    tintId: 0
  };
}

export const PlayerDecalDigitalSignature = {
  encode(
    message: PlayerDecalDigitalSignature,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.accountid !== 0) {
      writer.uint32(16).uint32(message.accountid);
    }
    if (message.rtime !== 0) {
      writer.uint32(24).uint32(message.rtime);
    }
    writer.uint32(34).fork();
    for (const v of message.endpos) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.startpos) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.right) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.txDefidx !== 0) {
      writer.uint32(56).uint32(message.txDefidx);
    }
    if (message.entindex !== 0) {
      writer.uint32(64).int32(message.entindex);
    }
    if (message.hitbox !== 0) {
      writer.uint32(72).uint32(message.hitbox);
    }
    if (message.creationtime !== 0) {
      writer.uint32(85).float(message.creationtime);
    }
    if (message.equipslot !== 0) {
      writer.uint32(88).uint32(message.equipslot);
    }
    if (message.traceId !== 0) {
      writer.uint32(96).uint32(message.traceId);
    }
    writer.uint32(106).fork();
    for (const v of message.normal) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.tintId !== 0) {
      writer.uint32(112).uint32(message.tintId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): PlayerDecalDigitalSignature {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerDecalDigitalSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.accountid = reader.uint32();
          break;
        case 3:
          message.rtime = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.endpos.push(reader.float());
            }
          } else {
            message.endpos.push(reader.float());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.startpos.push(reader.float());
            }
          } else {
            message.startpos.push(reader.float());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.right.push(reader.float());
            }
          } else {
            message.right.push(reader.float());
          }
          break;
        case 7:
          message.txDefidx = reader.uint32();
          break;
        case 8:
          message.entindex = reader.int32();
          break;
        case 9:
          message.hitbox = reader.uint32();
          break;
        case 10:
          message.creationtime = reader.float();
          break;
        case 11:
          message.equipslot = reader.uint32();
          break;
        case 12:
          message.traceId = reader.uint32();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.normal.push(reader.float());
            }
          } else {
            message.normal.push(reader.float());
          }
          break;
        case 14:
          message.tintId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerDecalDigitalSignature>, I>>(
    object: I
  ): PlayerDecalDigitalSignature {
    const message = createBasePlayerDecalDigitalSignature();
    message.signature = object.signature ?? new Uint8Array();
    message.accountid = object.accountid ?? 0;
    message.rtime = object.rtime ?? 0;
    message.endpos = object.endpos?.map(e => e) || [];
    message.startpos = object.startpos?.map(e => e) || [];
    message.right = object.right?.map(e => e) || [];
    message.txDefidx = object.txDefidx ?? 0;
    message.entindex = object.entindex ?? 0;
    message.hitbox = object.hitbox ?? 0;
    message.creationtime = object.creationtime ?? 0;
    message.equipslot = object.equipslot ?? 0;
    message.traceId = object.traceId ?? 0;
    message.normal = object.normal?.map(e => e) || [];
    message.tintId = object.tintId ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPlayerDecalSign(): CMsgGCCStrike15V2ClientPlayerDecalSign {
  return { data: undefined, itemid: Long.UZERO };
}

export const CMsgGCCStrike15V2ClientPlayerDecalSign = {
  encode(
    message: CMsgGCCStrike15V2ClientPlayerDecalSign,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined) {
      PlayerDecalDigitalSignature.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (!message.itemid.isZero()) {
      writer.uint32(16).uint64(message.itemid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPlayerDecalSign {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPlayerDecalSign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PlayerDecalDigitalSignature.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.itemid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPlayerDecalSign>, I>
  >(object: I): CMsgGCCStrike15V2ClientPlayerDecalSign {
    const message = createBaseCMsgGCCStrike15V2ClientPlayerDecalSign();
    message.data =
      object.data !== undefined && object.data !== null
        ? PlayerDecalDigitalSignature.fromPartial(object.data)
        : undefined;
    message.itemid =
      object.itemid !== undefined && object.itemid !== null
        ? Long.fromValue(object.itemid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientLogonFatalError(): CMsgGCCStrike15V2ClientLogonFatalError {
  return { errorcode: 0, message: "", country: "" };
}

export const CMsgGCCStrike15V2ClientLogonFatalError = {
  encode(
    message: CMsgGCCStrike15V2ClientLogonFatalError,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.errorcode !== 0) {
      writer.uint32(8).uint32(message.errorcode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientLogonFatalError {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientLogonFatalError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorcode = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientLogonFatalError>, I>
  >(object: I): CMsgGCCStrike15V2ClientLogonFatalError {
    const message = createBaseCMsgGCCStrike15V2ClientLogonFatalError();
    message.errorcode = object.errorcode ?? 0;
    message.message = object.message ?? "";
    message.country = object.country ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPollState(): CMsgGCCStrike15V2ClientPollState {
  return { pollid: 0, names: [], values: [] };
}

export const CMsgGCCStrike15V2ClientPollState = {
  encode(
    message: CMsgGCCStrike15V2ClientPollState,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pollid !== 0) {
      writer.uint32(8).uint32(message.pollid);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.values) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPollState {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPollState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollid = reader.uint32();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.int32());
            }
          } else {
            message.values.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPollState>, I>
  >(object: I): CMsgGCCStrike15V2ClientPollState {
    const message = createBaseCMsgGCCStrike15V2ClientPollState();
    message.pollid = object.pollid ?? 0;
    message.names = object.names?.map(e => e) || [];
    message.values = object.values?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PartyRegister(): CMsgGCCStrike15V2PartyRegister {
  return {
    id: 0,
    ver: 0,
    apr: 0,
    ark: 0,
    nby: 0,
    grp: 0,
    slots: 0,
    launcher: 0,
    gameType: 0
  };
}

export const CMsgGCCStrike15V2PartyRegister = {
  encode(
    message: CMsgGCCStrike15V2PartyRegister,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.ver !== 0) {
      writer.uint32(16).uint32(message.ver);
    }
    if (message.apr !== 0) {
      writer.uint32(24).uint32(message.apr);
    }
    if (message.ark !== 0) {
      writer.uint32(32).uint32(message.ark);
    }
    if (message.nby !== 0) {
      writer.uint32(40).uint32(message.nby);
    }
    if (message.grp !== 0) {
      writer.uint32(48).uint32(message.grp);
    }
    if (message.slots !== 0) {
      writer.uint32(56).uint32(message.slots);
    }
    if (message.launcher !== 0) {
      writer.uint32(64).uint32(message.launcher);
    }
    if (message.gameType !== 0) {
      writer.uint32(72).uint32(message.gameType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PartyRegister {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PartyRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.ver = reader.uint32();
          break;
        case 3:
          message.apr = reader.uint32();
          break;
        case 4:
          message.ark = reader.uint32();
          break;
        case 5:
          message.nby = reader.uint32();
          break;
        case 6:
          message.grp = reader.uint32();
          break;
        case 7:
          message.slots = reader.uint32();
          break;
        case 8:
          message.launcher = reader.uint32();
          break;
        case 9:
          message.gameType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2PartyRegister>, I>>(
    object: I
  ): CMsgGCCStrike15V2PartyRegister {
    const message = createBaseCMsgGCCStrike15V2PartyRegister();
    message.id = object.id ?? 0;
    message.ver = object.ver ?? 0;
    message.apr = object.apr ?? 0;
    message.ark = object.ark ?? 0;
    message.nby = object.nby ?? 0;
    message.grp = object.grp ?? 0;
    message.slots = object.slots ?? 0;
    message.launcher = object.launcher ?? 0;
    message.gameType = object.gameType ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PartySearch(): CMsgGCCStrike15V2PartySearch {
  return { ver: 0, apr: 0, ark: 0, grps: [], launcher: 0, gameType: 0 };
}

export const CMsgGCCStrike15V2PartySearch = {
  encode(
    message: CMsgGCCStrike15V2PartySearch,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ver !== 0) {
      writer.uint32(8).uint32(message.ver);
    }
    if (message.apr !== 0) {
      writer.uint32(16).uint32(message.apr);
    }
    if (message.ark !== 0) {
      writer.uint32(24).uint32(message.ark);
    }
    writer.uint32(34).fork();
    for (const v of message.grps) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.launcher !== 0) {
      writer.uint32(40).uint32(message.launcher);
    }
    if (message.gameType !== 0) {
      writer.uint32(48).uint32(message.gameType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PartySearch {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PartySearch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ver = reader.uint32();
          break;
        case 2:
          message.apr = reader.uint32();
          break;
        case 3:
          message.ark = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grps.push(reader.uint32());
            }
          } else {
            message.grps.push(reader.uint32());
          }
          break;
        case 5:
          message.launcher = reader.uint32();
          break;
        case 6:
          message.gameType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2PartySearch>, I>>(
    object: I
  ): CMsgGCCStrike15V2PartySearch {
    const message = createBaseCMsgGCCStrike15V2PartySearch();
    message.ver = object.ver ?? 0;
    message.apr = object.apr ?? 0;
    message.ark = object.ark ?? 0;
    message.grps = object.grps?.map(e => e) || [];
    message.launcher = object.launcher ?? 0;
    message.gameType = object.gameType ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PartySearchResults(): CMsgGCCStrike15V2PartySearchResults {
  return { entries: [] };
}

export const CMsgGCCStrike15V2PartySearchResults = {
  encode(
    message: CMsgGCCStrike15V2PartySearchResults,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entries) {
      CMsgGCCStrike15V2PartySearchResults_Entry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PartySearchResults {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PartySearchResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            CMsgGCCStrike15V2PartySearchResults_Entry.decode(
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2PartySearchResults>, I>
  >(object: I): CMsgGCCStrike15V2PartySearchResults {
    const message = createBaseCMsgGCCStrike15V2PartySearchResults();
    message.entries =
      object.entries?.map(e =>
        CMsgGCCStrike15V2PartySearchResults_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PartySearchResults_Entry(): CMsgGCCStrike15V2PartySearchResults_Entry {
  return { id: 0, grp: 0, gameType: 0, apr: 0, ark: 0, loc: 0, accountid: 0 };
}

export const CMsgGCCStrike15V2PartySearchResults_Entry = {
  encode(
    message: CMsgGCCStrike15V2PartySearchResults_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.grp !== 0) {
      writer.uint32(16).uint32(message.grp);
    }
    if (message.gameType !== 0) {
      writer.uint32(24).uint32(message.gameType);
    }
    if (message.apr !== 0) {
      writer.uint32(32).uint32(message.apr);
    }
    if (message.ark !== 0) {
      writer.uint32(40).uint32(message.ark);
    }
    if (message.loc !== 0) {
      writer.uint32(48).uint32(message.loc);
    }
    if (message.accountid !== 0) {
      writer.uint32(56).uint32(message.accountid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PartySearchResults_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PartySearchResults_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.grp = reader.uint32();
          break;
        case 3:
          message.gameType = reader.uint32();
          break;
        case 4:
          message.apr = reader.uint32();
          break;
        case 5:
          message.ark = reader.uint32();
          break;
        case 6:
          message.loc = reader.uint32();
          break;
        case 7:
          message.accountid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2PartySearchResults_Entry>, I>
  >(object: I): CMsgGCCStrike15V2PartySearchResults_Entry {
    const message = createBaseCMsgGCCStrike15V2PartySearchResults_Entry();
    message.id = object.id ?? 0;
    message.grp = object.grp ?? 0;
    message.gameType = object.gameType ?? 0;
    message.apr = object.apr ?? 0;
    message.ark = object.ark ?? 0;
    message.loc = object.loc ?? 0;
    message.accountid = object.accountid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2PartyInvite(): CMsgGCCStrike15V2PartyInvite {
  return { accountid: 0, lobbyid: 0 };
}

export const CMsgGCCStrike15V2PartyInvite = {
  encode(
    message: CMsgGCCStrike15V2PartyInvite,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.lobbyid !== 0) {
      writer.uint32(16).uint32(message.lobbyid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2PartyInvite {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2PartyInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.lobbyid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCStrike15V2PartyInvite>, I>>(
    object: I
  ): CMsgGCCStrike15V2PartyInvite {
    const message = createBaseCMsgGCCStrike15V2PartyInvite();
    message.accountid = object.accountid ?? 0;
    message.lobbyid = object.lobbyid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2AccountRequestCoPlays(): CMsgGCCStrike15V2AccountRequestCoPlays {
  return { players: [], servertime: 0 };
}

export const CMsgGCCStrike15V2AccountRequestCoPlays = {
  encode(
    message: CMsgGCCStrike15V2AccountRequestCoPlays,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.players) {
      CMsgGCCStrike15V2AccountRequestCoPlays_Player.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.servertime !== 0) {
      writer.uint32(16).uint32(message.servertime);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2AccountRequestCoPlays {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.players.push(
            CMsgGCCStrike15V2AccountRequestCoPlays_Player.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 2:
          message.servertime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2AccountRequestCoPlays>, I>
  >(object: I): CMsgGCCStrike15V2AccountRequestCoPlays {
    const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays();
    message.players =
      object.players?.map(e =>
        CMsgGCCStrike15V2AccountRequestCoPlays_Player.fromPartial(e)
      ) || [];
    message.servertime = object.servertime ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2AccountRequestCoPlays_Player(): CMsgGCCStrike15V2AccountRequestCoPlays_Player {
  return { accountid: 0, rtcoplay: 0, online: false };
}

export const CMsgGCCStrike15V2AccountRequestCoPlays_Player = {
  encode(
    message: CMsgGCCStrike15V2AccountRequestCoPlays_Player,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.rtcoplay !== 0) {
      writer.uint32(16).uint32(message.rtcoplay);
    }
    if (message.online === true) {
      writer.uint32(24).bool(message.online);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2AccountRequestCoPlays_Player {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.rtcoplay = reader.uint32();
          break;
        case 3:
          message.online = reader.bool();
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
      DeepPartial<CMsgGCCStrike15V2AccountRequestCoPlays_Player>,
      I
    >
  >(object: I): CMsgGCCStrike15V2AccountRequestCoPlays_Player {
    const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays_Player();
    message.accountid = object.accountid ?? 0;
    message.rtcoplay = object.rtcoplay ?? 0;
    message.online = object.online ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientToGCRequestTicket(): CMsgGCCStrike15V2ClientToGCRequestTicket {
  return {
    authorizedSteamId: Long.UZERO,
    authorizedPublicIp: 0,
    gameserverSteamId: Long.UZERO,
    gameserverSdrRouting: ""
  };
}

export const CMsgGCCStrike15V2ClientToGCRequestTicket = {
  encode(
    message: CMsgGCCStrike15V2ClientToGCRequestTicket,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.authorizedSteamId.isZero()) {
      writer.uint32(9).fixed64(message.authorizedSteamId);
    }
    if (message.authorizedPublicIp !== 0) {
      writer.uint32(21).fixed32(message.authorizedPublicIp);
    }
    if (!message.gameserverSteamId.isZero()) {
      writer.uint32(25).fixed64(message.gameserverSteamId);
    }
    if (message.gameserverSdrRouting !== "") {
      writer.uint32(42).string(message.gameserverSdrRouting);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientToGCRequestTicket {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientToGCRequestTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizedSteamId = reader.fixed64() as Long;
          break;
        case 2:
          message.authorizedPublicIp = reader.fixed32();
          break;
        case 3:
          message.gameserverSteamId = reader.fixed64() as Long;
          break;
        case 5:
          message.gameserverSdrRouting = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientToGCRequestTicket>, I>
  >(object: I): CMsgGCCStrike15V2ClientToGCRequestTicket {
    const message = createBaseCMsgGCCStrike15V2ClientToGCRequestTicket();
    message.authorizedSteamId =
      object.authorizedSteamId !== undefined &&
      object.authorizedSteamId !== null
        ? Long.fromValue(object.authorizedSteamId)
        : Long.UZERO;
    message.authorizedPublicIp = object.authorizedPublicIp ?? 0;
    message.gameserverSteamId =
      object.gameserverSteamId !== undefined &&
      object.gameserverSteamId !== null
        ? Long.fromValue(object.gameserverSteamId)
        : Long.UZERO;
    message.gameserverSdrRouting = object.gameserverSdrRouting ?? "";
    return message;
  }
};

function createBaseCMsgGCToClientSteamDatagramTicket(): CMsgGCToClientSteamDatagramTicket {
  return { serializedTicket: new Uint8Array() };
}

export const CMsgGCToClientSteamDatagramTicket = {
  encode(
    message: CMsgGCToClientSteamDatagramTicket,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.serializedTicket.length !== 0) {
      writer.uint32(130).bytes(message.serializedTicket);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCToClientSteamDatagramTicket {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientSteamDatagramTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 16:
          message.serializedTicket = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCToClientSteamDatagramTicket>, I>
  >(object: I): CMsgGCToClientSteamDatagramTicket {
    const message = createBaseCMsgGCToClientSteamDatagramTicket();
    message.serializedTicket = object.serializedTicket ?? new Uint8Array();
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientRequestOffers(): CMsgGCCStrike15V2ClientRequestOffers {
  return {};
}

export const CMsgGCCStrike15V2ClientRequestOffers = {
  encode(
    _: CMsgGCCStrike15V2ClientRequestOffers,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestOffers {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientRequestOffers();
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientRequestOffers>, I>
  >(_: I): CMsgGCCStrike15V2ClientRequestOffers {
    const message = createBaseCMsgGCCStrike15V2ClientRequestOffers();
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientRequestSouvenir(): CMsgGCCStrike15V2ClientRequestSouvenir {
  return { itemid: Long.UZERO, matchid: Long.UZERO, eventid: 0 };
}

export const CMsgGCCStrike15V2ClientRequestSouvenir = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestSouvenir,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.itemid.isZero()) {
      writer.uint32(8).uint64(message.itemid);
    }
    if (!message.matchid.isZero()) {
      writer.uint32(16).uint64(message.matchid);
    }
    if (message.eventid !== 0) {
      writer.uint32(24).int32(message.eventid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestSouvenir {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientRequestSouvenir();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemid = reader.uint64() as Long;
          break;
        case 2:
          message.matchid = reader.uint64() as Long;
          break;
        case 3:
          message.eventid = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientRequestSouvenir>, I>
  >(object: I): CMsgGCCStrike15V2ClientRequestSouvenir {
    const message = createBaseCMsgGCCStrike15V2ClientRequestSouvenir();
    message.itemid =
      object.itemid !== undefined && object.itemid !== null
        ? Long.fromValue(object.itemid)
        : Long.UZERO;
    message.matchid =
      object.matchid !== undefined && object.matchid !== null
        ? Long.fromValue(object.matchid)
        : Long.UZERO;
    message.eventid = object.eventid ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientAccountBalance(): CMsgGCCStrike15V2ClientAccountBalance {
  return { amount: Long.UZERO, url: "" };
}

export const CMsgGCCStrike15V2ClientAccountBalance = {
  encode(
    message: CMsgGCCStrike15V2ClientAccountBalance,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientAccountBalance {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientAccountBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64() as Long;
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientAccountBalance>, I>
  >(object: I): CMsgGCCStrike15V2ClientAccountBalance {
    const message = createBaseCMsgGCCStrike15V2ClientAccountBalance();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromValue(object.amount)
        : Long.UZERO;
    message.url = object.url ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPartyJoinRelay(): CMsgGCCStrike15V2ClientPartyJoinRelay {
  return { accountid: 0, lobbyid: Long.UZERO };
}

export const CMsgGCCStrike15V2ClientPartyJoinRelay = {
  encode(
    message: CMsgGCCStrike15V2ClientPartyJoinRelay,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (!message.lobbyid.isZero()) {
      writer.uint32(16).uint64(message.lobbyid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPartyJoinRelay {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPartyJoinRelay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.lobbyid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPartyJoinRelay>, I>
  >(object: I): CMsgGCCStrike15V2ClientPartyJoinRelay {
    const message = createBaseCMsgGCCStrike15V2ClientPartyJoinRelay();
    message.accountid = object.accountid ?? 0;
    message.lobbyid =
      object.lobbyid !== undefined && object.lobbyid !== null
        ? Long.fromValue(object.lobbyid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPartyWarning(): CMsgGCCStrike15V2ClientPartyWarning {
  return { entries: [] };
}

export const CMsgGCCStrike15V2ClientPartyWarning = {
  encode(
    message: CMsgGCCStrike15V2ClientPartyWarning,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entries) {
      CMsgGCCStrike15V2ClientPartyWarning_Entry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPartyWarning {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPartyWarning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            CMsgGCCStrike15V2ClientPartyWarning_Entry.decode(
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPartyWarning>, I>
  >(object: I): CMsgGCCStrike15V2ClientPartyWarning {
    const message = createBaseCMsgGCCStrike15V2ClientPartyWarning();
    message.entries =
      object.entries?.map(e =>
        CMsgGCCStrike15V2ClientPartyWarning_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPartyWarning_Entry(): CMsgGCCStrike15V2ClientPartyWarning_Entry {
  return { accountid: 0, warntype: 0 };
}

export const CMsgGCCStrike15V2ClientPartyWarning_Entry = {
  encode(
    message: CMsgGCCStrike15V2ClientPartyWarning_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.warntype !== 0) {
      writer.uint32(16).uint32(message.warntype);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPartyWarning_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPartyWarning_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.warntype = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPartyWarning_Entry>, I>
  >(object: I): CMsgGCCStrike15V2ClientPartyWarning_Entry {
    const message = createBaseCMsgGCCStrike15V2ClientPartyWarning_Entry();
    message.accountid = object.accountid ?? 0;
    message.warntype = object.warntype ?? 0;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2SetEventFavorite(): CMsgGCCStrike15V2SetEventFavorite {
  return { eventid: Long.UZERO, isFavorite: false };
}

export const CMsgGCCStrike15V2SetEventFavorite = {
  encode(
    message: CMsgGCCStrike15V2SetEventFavorite,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.eventid.isZero()) {
      writer.uint32(8).uint64(message.eventid);
    }
    if (message.isFavorite === true) {
      writer.uint32(16).bool(message.isFavorite);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2SetEventFavorite {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2SetEventFavorite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventid = reader.uint64() as Long;
          break;
        case 2:
          message.isFavorite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2SetEventFavorite>, I>
  >(object: I): CMsgGCCStrike15V2SetEventFavorite {
    const message = createBaseCMsgGCCStrike15V2SetEventFavorite();
    message.eventid =
      object.eventid !== undefined && object.eventid !== null
        ? Long.fromValue(object.eventid)
        : Long.UZERO;
    message.isFavorite = object.isFavorite ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GetEventFavoritesRequest(): CMsgGCCStrike15V2GetEventFavoritesRequest {
  return { allEvents: false };
}

export const CMsgGCCStrike15V2GetEventFavoritesRequest = {
  encode(
    message: CMsgGCCStrike15V2GetEventFavoritesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.allEvents === true) {
      writer.uint32(8).bool(message.allEvents);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GetEventFavoritesRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GetEventFavoritesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allEvents = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GetEventFavoritesRequest>, I>
  >(object: I): CMsgGCCStrike15V2GetEventFavoritesRequest {
    const message = createBaseCMsgGCCStrike15V2GetEventFavoritesRequest();
    message.allEvents = object.allEvents ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GetEventFavoritesResponse(): CMsgGCCStrike15V2GetEventFavoritesResponse {
  return { allEvents: false, jsonFavorites: "", jsonFeatured: "" };
}

export const CMsgGCCStrike15V2GetEventFavoritesResponse = {
  encode(
    message: CMsgGCCStrike15V2GetEventFavoritesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.allEvents === true) {
      writer.uint32(8).bool(message.allEvents);
    }
    if (message.jsonFavorites !== "") {
      writer.uint32(18).string(message.jsonFavorites);
    }
    if (message.jsonFeatured !== "") {
      writer.uint32(26).string(message.jsonFeatured);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GetEventFavoritesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GetEventFavoritesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allEvents = reader.bool();
          break;
        case 2:
          message.jsonFavorites = reader.string();
          break;
        case 3:
          message.jsonFeatured = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GetEventFavoritesResponse>, I>
  >(object: I): CMsgGCCStrike15V2GetEventFavoritesResponse {
    const message = createBaseCMsgGCCStrike15V2GetEventFavoritesResponse();
    message.allEvents = object.allEvents ?? false;
    message.jsonFavorites = object.jsonFavorites ?? "";
    message.jsonFeatured = object.jsonFeatured ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPerfReport(): CMsgGCCStrike15V2ClientPerfReport {
  return { entries: [] };
}

export const CMsgGCCStrike15V2ClientPerfReport = {
  encode(
    message: CMsgGCCStrike15V2ClientPerfReport,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entries) {
      CMsgGCCStrike15V2ClientPerfReport_Entry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPerfReport {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPerfReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            CMsgGCCStrike15V2ClientPerfReport_Entry.decode(
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPerfReport>, I>
  >(object: I): CMsgGCCStrike15V2ClientPerfReport {
    const message = createBaseCMsgGCCStrike15V2ClientPerfReport();
    message.entries =
      object.entries?.map(e =>
        CMsgGCCStrike15V2ClientPerfReport_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientPerfReport_Entry(): CMsgGCCStrike15V2ClientPerfReport_Entry {
  return {
    perfcounter: 0,
    length: 0,
    reference: new Uint8Array(),
    actual: new Uint8Array(),
    sourceid: 0,
    status: 0
  };
}

export const CMsgGCCStrike15V2ClientPerfReport_Entry = {
  encode(
    message: CMsgGCCStrike15V2ClientPerfReport_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.perfcounter !== 0) {
      writer.uint32(8).uint32(message.perfcounter);
    }
    if (message.length !== 0) {
      writer.uint32(16).uint32(message.length);
    }
    if (message.reference.length !== 0) {
      writer.uint32(26).bytes(message.reference);
    }
    if (message.actual.length !== 0) {
      writer.uint32(34).bytes(message.actual);
    }
    if (message.sourceid !== 0) {
      writer.uint32(40).uint32(message.sourceid);
    }
    if (message.status !== 0) {
      writer.uint32(48).uint32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientPerfReport_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientPerfReport_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perfcounter = reader.uint32();
          break;
        case 2:
          message.length = reader.uint32();
          break;
        case 3:
          message.reference = reader.bytes();
          break;
        case 4:
          message.actual = reader.bytes();
          break;
        case 5:
          message.sourceid = reader.uint32();
          break;
        case 6:
          message.status = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientPerfReport_Entry>, I>
  >(object: I): CMsgGCCStrike15V2ClientPerfReport_Entry {
    const message = createBaseCMsgGCCStrike15V2ClientPerfReport_Entry();
    message.perfcounter = object.perfcounter ?? 0;
    message.length = object.length ?? 0;
    message.reference = object.reference ?? new Uint8Array();
    message.actual = object.actual ?? new Uint8Array();
    message.sourceid = object.sourceid ?? 0;
    message.status = object.status ?? 0;
    return message;
  }
};

function createBaseCVDiagnostic(): CVDiagnostic {
  return { id: 0, extended: 0, value: Long.UZERO, stringValue: "" };
}

export const CVDiagnostic = {
  encode(message: CVDiagnostic, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.extended !== 0) {
      writer.uint32(16).uint32(message.extended);
    }
    if (!message.value.isZero()) {
      writer.uint32(24).uint64(message.value);
    }
    if (message.stringValue !== "") {
      writer.uint32(34).string(message.stringValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CVDiagnostic {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVDiagnostic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.extended = reader.uint32();
          break;
        case 3:
          message.value = reader.uint64() as Long;
          break;
        case 4:
          message.stringValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CVDiagnostic>, I>>(
    object: I
  ): CVDiagnostic {
    const message = createBaseCVDiagnostic();
    message.id = object.id ?? 0;
    message.extended = object.extended ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.UZERO;
    message.stringValue = object.stringValue ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2ClientReportValidation(): CMsgGCCStrike15V2ClientReportValidation {
  return {
    fileReport: "",
    commandLine: "",
    totalFiles: 0,
    internalError: 0,
    trustTime: 0,
    countPending: 0,
    countCompleted: 0,
    processId: 0,
    osversion: 0,
    clientreportversion: 0,
    statusId: 0,
    diagnostic1: 0,
    diagnostic2: Long.UZERO,
    diagnostic3: Long.UZERO,
    lastLaunchData: "",
    reportCount: 0,
    clientTime: Long.UZERO,
    diagnostic4: Long.UZERO,
    diagnostic5: Long.UZERO,
    diagnostics: []
  };
}

export const CMsgGCCStrike15V2ClientReportValidation = {
  encode(
    message: CMsgGCCStrike15V2ClientReportValidation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fileReport !== "") {
      writer.uint32(10).string(message.fileReport);
    }
    if (message.commandLine !== "") {
      writer.uint32(18).string(message.commandLine);
    }
    if (message.totalFiles !== 0) {
      writer.uint32(24).uint32(message.totalFiles);
    }
    if (message.internalError !== 0) {
      writer.uint32(32).uint32(message.internalError);
    }
    if (message.trustTime !== 0) {
      writer.uint32(40).uint32(message.trustTime);
    }
    if (message.countPending !== 0) {
      writer.uint32(48).uint32(message.countPending);
    }
    if (message.countCompleted !== 0) {
      writer.uint32(56).uint32(message.countCompleted);
    }
    if (message.processId !== 0) {
      writer.uint32(64).uint32(message.processId);
    }
    if (message.osversion !== 0) {
      writer.uint32(72).int32(message.osversion);
    }
    if (message.clientreportversion !== 0) {
      writer.uint32(80).uint32(message.clientreportversion);
    }
    if (message.statusId !== 0) {
      writer.uint32(88).uint32(message.statusId);
    }
    if (message.diagnostic1 !== 0) {
      writer.uint32(96).uint32(message.diagnostic1);
    }
    if (!message.diagnostic2.isZero()) {
      writer.uint32(104).uint64(message.diagnostic2);
    }
    if (!message.diagnostic3.isZero()) {
      writer.uint32(112).uint64(message.diagnostic3);
    }
    if (message.lastLaunchData !== "") {
      writer.uint32(122).string(message.lastLaunchData);
    }
    if (message.reportCount !== 0) {
      writer.uint32(128).uint32(message.reportCount);
    }
    if (!message.clientTime.isZero()) {
      writer.uint32(136).uint64(message.clientTime);
    }
    if (!message.diagnostic4.isZero()) {
      writer.uint32(144).uint64(message.diagnostic4);
    }
    if (!message.diagnostic5.isZero()) {
      writer.uint32(152).uint64(message.diagnostic5);
    }
    for (const v of message.diagnostics) {
      CVDiagnostic.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2ClientReportValidation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2ClientReportValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileReport = reader.string();
          break;
        case 2:
          message.commandLine = reader.string();
          break;
        case 3:
          message.totalFiles = reader.uint32();
          break;
        case 4:
          message.internalError = reader.uint32();
          break;
        case 5:
          message.trustTime = reader.uint32();
          break;
        case 6:
          message.countPending = reader.uint32();
          break;
        case 7:
          message.countCompleted = reader.uint32();
          break;
        case 8:
          message.processId = reader.uint32();
          break;
        case 9:
          message.osversion = reader.int32();
          break;
        case 10:
          message.clientreportversion = reader.uint32();
          break;
        case 11:
          message.statusId = reader.uint32();
          break;
        case 12:
          message.diagnostic1 = reader.uint32();
          break;
        case 13:
          message.diagnostic2 = reader.uint64() as Long;
          break;
        case 14:
          message.diagnostic3 = reader.uint64() as Long;
          break;
        case 15:
          message.lastLaunchData = reader.string();
          break;
        case 16:
          message.reportCount = reader.uint32();
          break;
        case 17:
          message.clientTime = reader.uint64() as Long;
          break;
        case 18:
          message.diagnostic4 = reader.uint64() as Long;
          break;
        case 19:
          message.diagnostic5 = reader.uint64() as Long;
          break;
        case 20:
          message.diagnostics.push(
            CVDiagnostic.decode(reader, reader.uint32())
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
    I extends Exact<DeepPartial<CMsgGCCStrike15V2ClientReportValidation>, I>
  >(object: I): CMsgGCCStrike15V2ClientReportValidation {
    const message = createBaseCMsgGCCStrike15V2ClientReportValidation();
    message.fileReport = object.fileReport ?? "";
    message.commandLine = object.commandLine ?? "";
    message.totalFiles = object.totalFiles ?? 0;
    message.internalError = object.internalError ?? 0;
    message.trustTime = object.trustTime ?? 0;
    message.countPending = object.countPending ?? 0;
    message.countCompleted = object.countCompleted ?? 0;
    message.processId = object.processId ?? 0;
    message.osversion = object.osversion ?? 0;
    message.clientreportversion = object.clientreportversion ?? 0;
    message.statusId = object.statusId ?? 0;
    message.diagnostic1 = object.diagnostic1 ?? 0;
    message.diagnostic2 =
      object.diagnostic2 !== undefined && object.diagnostic2 !== null
        ? Long.fromValue(object.diagnostic2)
        : Long.UZERO;
    message.diagnostic3 =
      object.diagnostic3 !== undefined && object.diagnostic3 !== null
        ? Long.fromValue(object.diagnostic3)
        : Long.UZERO;
    message.lastLaunchData = object.lastLaunchData ?? "";
    message.reportCount = object.reportCount ?? 0;
    message.clientTime =
      object.clientTime !== undefined && object.clientTime !== null
        ? Long.fromValue(object.clientTime)
        : Long.UZERO;
    message.diagnostic4 =
      object.diagnostic4 !== undefined && object.diagnostic4 !== null
        ? Long.fromValue(object.diagnostic4)
        : Long.UZERO;
    message.diagnostic5 =
      object.diagnostic5 !== undefined && object.diagnostic5 !== null
        ? Long.fromValue(object.diagnostic5)
        : Long.UZERO;
    message.diagnostics =
      object.diagnostics?.map(e => CVDiagnostic.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ClientRefuseSecureMode(): CMsgGCCStrike15V2GC2ClientRefuseSecureMode {
  return {
    fileReport: "",
    offerInsecureMode: false,
    offerSecureMode: false,
    showUnsignedUi: false,
    kickUser: false,
    showTrustedUi: false,
    showWarningNotTrusted: false,
    showWarningNotTrusted2: false,
    filesPreventedTrusted: ""
  };
}

export const CMsgGCCStrike15V2GC2ClientRefuseSecureMode = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientRefuseSecureMode,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fileReport !== "") {
      writer.uint32(10).string(message.fileReport);
    }
    if (message.offerInsecureMode === true) {
      writer.uint32(16).bool(message.offerInsecureMode);
    }
    if (message.offerSecureMode === true) {
      writer.uint32(24).bool(message.offerSecureMode);
    }
    if (message.showUnsignedUi === true) {
      writer.uint32(32).bool(message.showUnsignedUi);
    }
    if (message.kickUser === true) {
      writer.uint32(40).bool(message.kickUser);
    }
    if (message.showTrustedUi === true) {
      writer.uint32(48).bool(message.showTrustedUi);
    }
    if (message.showWarningNotTrusted === true) {
      writer.uint32(56).bool(message.showWarningNotTrusted);
    }
    if (message.showWarningNotTrusted2 === true) {
      writer.uint32(64).bool(message.showWarningNotTrusted2);
    }
    if (message.filesPreventedTrusted !== "") {
      writer.uint32(74).string(message.filesPreventedTrusted);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientRefuseSecureMode {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ClientRefuseSecureMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileReport = reader.string();
          break;
        case 2:
          message.offerInsecureMode = reader.bool();
          break;
        case 3:
          message.offerSecureMode = reader.bool();
          break;
        case 4:
          message.showUnsignedUi = reader.bool();
          break;
        case 5:
          message.kickUser = reader.bool();
          break;
        case 6:
          message.showTrustedUi = reader.bool();
          break;
        case 7:
          message.showWarningNotTrusted = reader.bool();
          break;
        case 8:
          message.showWarningNotTrusted2 = reader.bool();
          break;
        case 9:
          message.filesPreventedTrusted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GC2ClientRefuseSecureMode>, I>
  >(object: I): CMsgGCCStrike15V2GC2ClientRefuseSecureMode {
    const message = createBaseCMsgGCCStrike15V2GC2ClientRefuseSecureMode();
    message.fileReport = object.fileReport ?? "";
    message.offerInsecureMode = object.offerInsecureMode ?? false;
    message.offerSecureMode = object.offerSecureMode ?? false;
    message.showUnsignedUi = object.showUnsignedUi ?? false;
    message.kickUser = object.kickUser ?? false;
    message.showTrustedUi = object.showTrustedUi ?? false;
    message.showWarningNotTrusted = object.showWarningNotTrusted ?? false;
    message.showWarningNotTrusted2 = object.showWarningNotTrusted2 ?? false;
    message.filesPreventedTrusted = object.filesPreventedTrusted ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ClientRequestValidation(): CMsgGCCStrike15V2GC2ClientRequestValidation {
  return { fullReport: false, module: "" };
}

export const CMsgGCCStrike15V2GC2ClientRequestValidation = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientRequestValidation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fullReport === true) {
      writer.uint32(8).bool(message.fullReport);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientRequestValidation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ClientRequestValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullReport = reader.bool();
          break;
        case 2:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GC2ClientRequestValidation>, I>
  >(object: I): CMsgGCCStrike15V2GC2ClientRequestValidation {
    const message = createBaseCMsgGCCStrike15V2GC2ClientRequestValidation();
    message.fullReport = object.fullReport ?? false;
    message.module = object.module ?? "";
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ClientInitSystem(): CMsgGCCStrike15V2GC2ClientInitSystem {
  return {
    load: false,
    name: "",
    outputname: "",
    keyData: new Uint8Array(),
    shaHash: new Uint8Array(),
    cookie: 0,
    manifest: "",
    systemPackage: new Uint8Array(),
    loadSystem: false
  };
}

export const CMsgGCCStrike15V2GC2ClientInitSystem = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientInitSystem,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.load === true) {
      writer.uint32(8).bool(message.load);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.outputname !== "") {
      writer.uint32(26).string(message.outputname);
    }
    if (message.keyData.length !== 0) {
      writer.uint32(34).bytes(message.keyData);
    }
    if (message.shaHash.length !== 0) {
      writer.uint32(42).bytes(message.shaHash);
    }
    if (message.cookie !== 0) {
      writer.uint32(48).int32(message.cookie);
    }
    if (message.manifest !== "") {
      writer.uint32(58).string(message.manifest);
    }
    if (message.systemPackage.length !== 0) {
      writer.uint32(66).bytes(message.systemPackage);
    }
    if (message.loadSystem === true) {
      writer.uint32(72).bool(message.loadSystem);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientInitSystem {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ClientInitSystem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.load = reader.bool();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.outputname = reader.string();
          break;
        case 4:
          message.keyData = reader.bytes();
          break;
        case 5:
          message.shaHash = reader.bytes();
          break;
        case 6:
          message.cookie = reader.int32();
          break;
        case 7:
          message.manifest = reader.string();
          break;
        case 8:
          message.systemPackage = reader.bytes();
          break;
        case 9:
          message.loadSystem = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCCStrike15V2GC2ClientInitSystem>, I>
  >(object: I): CMsgGCCStrike15V2GC2ClientInitSystem {
    const message = createBaseCMsgGCCStrike15V2GC2ClientInitSystem();
    message.load = object.load ?? false;
    message.name = object.name ?? "";
    message.outputname = object.outputname ?? "";
    message.keyData = object.keyData ?? new Uint8Array();
    message.shaHash = object.shaHash ?? new Uint8Array();
    message.cookie = object.cookie ?? 0;
    message.manifest = object.manifest ?? "";
    message.systemPackage = object.systemPackage ?? new Uint8Array();
    message.loadSystem = object.loadSystem ?? false;
    return message;
  }
};

function createBaseCMsgGCCStrike15V2GC2ClientInitSystemResponse(): CMsgGCCStrike15V2GC2ClientInitSystemResponse {
  return {
    success: false,
    diagnostic: "",
    shaHash: new Uint8Array(),
    response: 0,
    errorCode1: 0,
    errorCode2: 0,
    handle: Long.ZERO,
    einitResult: 0,
    auxSystem1: 0,
    auxSystem2: 0
  };
}

export const CMsgGCCStrike15V2GC2ClientInitSystemResponse = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientInitSystemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.diagnostic !== "") {
      writer.uint32(18).string(message.diagnostic);
    }
    if (message.shaHash.length !== 0) {
      writer.uint32(26).bytes(message.shaHash);
    }
    if (message.response !== 0) {
      writer.uint32(32).int32(message.response);
    }
    if (message.errorCode1 !== 0) {
      writer.uint32(40).int32(message.errorCode1);
    }
    if (message.errorCode2 !== 0) {
      writer.uint32(48).int32(message.errorCode2);
    }
    if (!message.handle.isZero()) {
      writer.uint32(56).int64(message.handle);
    }
    if (message.einitResult !== 0) {
      writer.uint32(64).int32(message.einitResult);
    }
    if (message.auxSystem1 !== 0) {
      writer.uint32(72).int32(message.auxSystem1);
    }
    if (message.auxSystem2 !== 0) {
      writer.uint32(80).int32(message.auxSystem2);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientInitSystemResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCStrike15V2GC2ClientInitSystemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.diagnostic = reader.string();
          break;
        case 3:
          message.shaHash = reader.bytes();
          break;
        case 4:
          message.response = reader.int32();
          break;
        case 5:
          message.errorCode1 = reader.int32();
          break;
        case 6:
          message.errorCode2 = reader.int32();
          break;
        case 7:
          message.handle = reader.int64() as Long;
          break;
        case 8:
          message.einitResult = reader.int32() as any;
          break;
        case 9:
          message.auxSystem1 = reader.int32();
          break;
        case 10:
          message.auxSystem2 = reader.int32();
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
      DeepPartial<CMsgGCCStrike15V2GC2ClientInitSystemResponse>,
      I
    >
  >(object: I): CMsgGCCStrike15V2GC2ClientInitSystemResponse {
    const message = createBaseCMsgGCCStrike15V2GC2ClientInitSystemResponse();
    message.success = object.success ?? false;
    message.diagnostic = object.diagnostic ?? "";
    message.shaHash = object.shaHash ?? new Uint8Array();
    message.response = object.response ?? 0;
    message.errorCode1 = object.errorCode1 ?? 0;
    message.errorCode2 = object.errorCode2 ?? 0;
    message.handle =
      object.handle !== undefined && object.handle !== null
        ? Long.fromValue(object.handle)
        : Long.ZERO;
    message.einitResult = object.einitResult ?? 0;
    message.auxSystem1 = object.auxSystem1 ?? 0;
    message.auxSystem2 = object.auxSystem2 ?? 0;
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
