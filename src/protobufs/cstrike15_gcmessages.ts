/* eslint-disable */
import * as Long from "long";
import { CEngineGotvSyncPacket } from "./engine_gcmessages";
import { Writer, Reader } from "protobufjs/minimal";

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
  requestId_deprecated: number;
  accountIds_deprecated: number[];
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
  picks_deprecated: number;
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

const baseGameServerPing: object = {
  ping: 0,
  ip: 0,
  instances: 0
};

const baseDataCenterPing: object = {
  dataCenterId: 0,
  ping: 0
};

const baseDetailedSearchStatistic: object = {
  gameType: 0,
  searchTimeAvg: 0,
  playersSearching: 0
};

const baseTournamentPlayer: object = {
  accountId: 0,
  playerNick: "",
  playerName: "",
  playerDob: 0,
  playerFlag: "",
  playerLocation: "",
  playerDesc: ""
};

const baseTournamentTeam: object = {
  teamId: 0,
  teamTag: "",
  teamFlag: "",
  teamName: ""
};

const baseTournamentEvent: object = {
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

const baseGlobalStatistics: object = {
  playersOnline: 0,
  serversOnline: 0,
  playersSearching: 0,
  serversAvailable: 0,
  ongoingMatches: 0,
  searchTimeAvg: 0,
  mainPostUrl: "",
  requiredAppidVersion: 0,
  pricesheetVersion: 0,
  twitchStreamsVersion: 0,
  activeTournamentEventid: 0,
  activeSurveyId: 0,
  rtime32Cur: 0,
  rtime32EventStart: 0
};

const baseOperationalStatisticDescription: object = {
  name: "",
  idkey: 0
};

const baseOperationalStatisticElement: object = {
  idkey: 0,
  values: 0
};

const baseOperationalStatisticsPacket: object = {
  packetid: 0,
  mstimestamp: 0
};

const basePlayerRankingInfo: object = {
  accountId: 0,
  rankId: 0,
  wins: 0,
  rankChange: 0,
  rankTypeId: 0,
  tvControl: 0
};

const basePlayerCommendationInfo: object = {
  cmdFriendly: 0,
  cmdTeaching: 0,
  cmdLeader: 0
};

const basePlayerMedalsInfo: object = {
  displayItemsDefidx: 0,
  featuredDisplayItemDefidx: 0
};

const baseAccountActivity: object = {
  activity: 0,
  mode: 0,
  map: 0,
  matchid: Long.UZERO
};

const baseTournamentMatchSetup: object = {
  eventId: 0,
  teamIdCt: 0,
  teamIdT: 0,
  eventStageId: 0
};

const baseServerHltvInfo: object = {
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

const baseIpAddressMask: object = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  bits: 0,
  token: 0
};

const baseCMsgCsgoSteamUserStatChange: object = {
  ecsgosteamuserstat: 0,
  delta: 0,
  absolute: false
};

const baseXpProgressData: object = {
  xpPoints: 0,
  xpCategory: 0
};

const baseMatchEndItemUpdates: object = {
  itemId: Long.UZERO,
  itemAttrDefidx: 0,
  itemAttrDeltaValue: 0
};

const baseScoreLeaderboardData: object = {
  questId: Long.UZERO,
  score: 0
};

const baseScoreLeaderboardData_Entry: object = {
  tag: 0,
  val: 0
};

const baseScoreLeaderboardData_AccountEntries: object = {
  accountid: 0
};

const basePlayerQuestData: object = {
  questerAccountId: 0,
  timePlayed: 0,
  mmGameMode: 0,
  operationPointsEligible: false
};

const basePlayerQuestData_QuestItemData: object = {
  questId: Long.UZERO,
  questNormalPointsEarned: 0,
  questBonusPointsEarned: 0
};

const baseDeepPlayerStatsEntry: object = {
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
  mates: 0
};

const baseDeepPlayerMatchEvent: object = {
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

const baseCMsgGCServerQuestUpdateData: object = {
  mmGameMode: 0
};

const baseCMsgGCCStrike15V2MatchmakingGCOperationalStats: object = {
  packetid: 0
};

const baseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm: object = {
  token: 0,
  stamp: 0,
  exchange: Long.UZERO
};

const baseCMsgGCCStrike15V2GC2ServerReservationUpdate: object = {
  viewersExternalTotal: 0,
  viewersExternalSteam: 0
};

const baseCMsgGCCStrike15V2MatchmakingStart: object = {
  accountIds: 0,
  gameType: 0,
  ticketData: "",
  clientVersion: 0,
  primeOnly: false,
  tvControl: 0
};

const baseCMsgGCCStrike15V2MatchmakingStop: object = {
  abandon: 0
};

const baseCMsgGCCStrike15V2MatchmakingClient2ServerPing: object = {
  offsetIndex: 0,
  finalBatch: 0,
  maxPing: 0,
  testToken: 0
};

const baseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate: object = {
  matchmaking: 0,
  waitingAccountIdSessions: 0,
  error: "",
  ongoingmatchAccountIdSessions: 0,
  failpingAccountIdSessions: 0,
  penaltyAccountIdSessions: 0,
  failreadyAccountIdSessions: 0,
  vacbannedAccountIdSessions: 0,
  penaltyAccountIdSessionsGreen: 0,
  insufficientlevelSessions: 0,
  vsncheckAccountIdSessions: 0,
  launcherMismatchSessions: 0,
  insecureAccountIdSessions: 0
};

const baseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note: object = {
  type: 0,
  regionId: 0,
  regionR: 0,
  distance: 0
};

const baseCDataGCCStrike15V2TournamentMatchDraft: object = {
  eventId: 0,
  eventStageId: 0,
  teamId0: 0,
  teamId1: 0,
  mapsCount: 0,
  mapsCurrent: 0,
  teamIdStart: 0,
  teamIdVeto1: 0,
  teamIdPickn: 0
};

const baseCDataGCCStrike15V2TournamentMatchDraft_Entry: object = {
  mapid: 0,
  teamIdCt: 0
};

const baseCPreMatchInfoData: object = {
  predictionsPct: 0,
  wins: 0
};

const baseCPreMatchInfoData_TeamStats: object = {
  matchInfoIdxtxt: 0,
  matchInfoTxt: "",
  matchInfoTeams: ""
};

const baseCMsgGCCStrike15V2MatchmakingGC2ServerReserve: object = {
  accountIds: 0,
  gameType: 0,
  matchId: Long.UZERO,
  serverVersion: 0,
  flags: 0,
  encryptionKey: Long.UZERO,
  encryptionKeyPub: Long.UZERO,
  partyIds: 0,
  tvMasterSteamid: Long.UZERO,
  tournamentCastersAccountIds: 0,
  tvRelaySteamid: Long.UZERO,
  rtime32EventStart: 0,
  tvControl: 0
};

const baseCMsgGCCStrike15V2MatchmakingServerReservationResponse: object = {
  reservationid: Long.UZERO,
  map: "",
  gcReservationSent: Long.UZERO,
  serverVersion: 0,
  rewardPlayerAccounts: 0,
  idlePlayerAccounts: 0,
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

const baseCMsgGCCStrike15V2MatchmakingGC2ClientReserve: object = {
  serverid: Long.UZERO,
  directUdpIp: 0,
  directUdpPort: 0,
  reservationid: Long.UZERO,
  map: "",
  serverAddress: ""
};

const baseCMsgGCCStrike15V2MatchmakingServerRoundStats: object = {
  reservationid: Long.UZERO,
  map: "",
  round: 0,
  kills: 0,
  assists: 0,
  deaths: 0,
  scores: 0,
  pings: 0,
  roundResult: 0,
  matchResult: 0,
  teamScores: 0,
  reservationStage: 0,
  matchDuration: 0,
  enemyKills: 0,
  enemyHeadshots: 0,
  enemy3ks: 0,
  enemy4ks: 0,
  enemy5ks: 0,
  mvps: 0,
  spectatorsCount: 0,
  spectatorsCountTv: 0,
  spectatorsCountLnk: 0,
  enemyKillsAgg: 0,
  bSwitchedTeams: false,
  enemy2ks: 0,
  playerSpawned: 0,
  teamSpawnCount: 0,
  maxRounds: 0
};

const baseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo: object = {
  accountMvp: 0
};

const baseCMsgGCCStrike15V2MatchmakingClient2GCHello: object = {};

const baseCMsgGCCStrike15V2MatchmakingGC2ClientHello: object = {
  accountId: 0,
  penaltySeconds: 0,
  penaltyReason: 0,
  vacBanned: 0,
  surveyVote: 0,
  playerLevel: 0,
  playerCurXp: 0,
  playerXpBonusFlags: 0
};

const baseCMsgGCCStrike15V2AccountPrivacySettings: object = {};

const baseCMsgGCCStrike15V2AccountPrivacySettings_Setting: object = {
  settingType: 0,
  settingValue: 0
};

const baseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon: object = {
  accountId: 0,
  penaltySeconds: 0,
  penaltyReason: 0
};

const baseCMsgGCCStrike15V2ClientGCRankUpdate: object = {};

const baseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate: object = {
  mainPostUrl: ""
};

const baseCMsgGCCStrike15V2ServerNotificationForUserPenalty: object = {
  accountId: 0,
  reason: 0,
  seconds: 0,
  communicationCooldown: false
};

const baseCMsgGCCStrike15V2ClientReportPlayer: object = {
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

const baseCMsgGCCStrike15V2ClientCommendPlayer: object = {
  accountId: 0,
  matchId: Long.UZERO,
  tokens: 0
};

const baseCMsgGCCStrike15V2ClientReportServer: object = {
  rptPoorperf: 0,
  rptAbusivemodels: 0,
  rptBadmotd: 0,
  rptListingabuse: 0,
  rptInventoryabuse: 0,
  matchId: Long.UZERO
};

const baseCMsgGCCStrike15V2ClientReportResponse: object = {
  confirmationId: Long.UZERO,
  accountId: 0,
  serverIp: 0,
  responseType: 0,
  responseResult: 0,
  tokens: 0
};

const baseCMsgGCCStrike15V2ClientRequestWatchInfoFriends: object = {
  requestId: 0,
  accountIds: 0,
  serverid: Long.UZERO,
  matchid: Long.UZERO,
  clientLauncher: 0
};

const baseWatchableMatchInfo: object = {
  serverIp: 0,
  tvPort: 0,
  tvSpectators: 0,
  tvTime: 0,
  clDecryptdataKey: Long.UZERO,
  clDecryptdataKeyPub: Long.UZERO,
  gameType: 0,
  gameMapgroup: "",
  gameMap: "",
  serverId: Long.UZERO,
  matchId: Long.UZERO,
  reservationId: Long.UZERO
};

const baseCMsgGCCStrike15V2ClientRequestJoinFriendData: object = {
  version: 0,
  accountId: 0,
  joinToken: 0,
  joinIpp: 0,
  errormsg: ""
};

const baseCMsgGCCStrike15V2ClientRequestJoinServerData: object = {
  version: 0,
  accountId: 0,
  serverid: Long.UZERO,
  serverIp: 0,
  serverPort: 0,
  errormsg: ""
};

const baseCMsgGCCstrike15V2ClientRequestNewMission: object = {
  missionId: 0,
  campaignId: 0
};

const baseCMsgGCCstrike15V2ClientRedeemMissionReward: object = {
  campaignId: 0,
  redeemId: 0,
  redeemableBalance: 0,
  expectedCost: 0
};

const baseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded: object = {
  accountId: 0,
  currentXp: 0,
  currentLevel: 0,
  upgradedDefidx: 0,
  operationPointsAwarded: 0
};

const baseCMsgGCCStrike15ClientDeepStats: object = {
  accountId: 0
};

const baseCMsgGCCStrike15ClientDeepStats_DeepStatsRange: object = {
  begin: 0,
  end: 0,
  frozen: false
};

const baseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch: object = {};

const baseCMsgGCCStrike15V2WatchInfoUsers: object = {
  requestId: 0,
  accountIds: 0,
  extendedTimeout: 0
};

const baseCMsgGCCStrike15V2ClientRequestPlayersProfile: object = {
  requestId_deprecated: 0,
  accountIds_deprecated: 0,
  accountId: 0,
  requestLevel: 0
};

const baseCMsgGCCStrike15V2PlayersProfile: object = {
  requestId: 0
};

const baseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate: object = {
  caseid: Long.UZERO,
  suspectid: 0,
  fractionid: 0,
  rptAimbot: 0,
  rptWallhack: 0,
  rptSpeedhack: 0,
  rptTeamharm: 0,
  reason: 0
};

const baseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment: object = {
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

const baseCMsgGCCStrike15V2PlayerOverwatchCaseStatus: object = {
  caseid: Long.UZERO,
  statusid: 0
};

const baseCClientHeaderOverwatchEvidence: object = {
  accountid: 0,
  caseid: Long.UZERO
};

const baseCMsgGCCStrike15V2GC2ClientTextMsg: object = {
  id: 0,
  type: 0
};

const baseCMsgGCCStrike15V2Client2GCTextMsg: object = {
  id: 0
};

const baseCMsgGCCStrike15V2MatchEndRunRewardDrops: object = {};

const baseCEconItemPreviewDataBlock: object = {
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
  inventory: 0,
  origin: 0,
  questid: 0,
  dropreason: 0,
  musicindex: 0,
  entindex: 0
};

const baseCEconItemPreviewDataBlock_Sticker: object = {
  slot: 0,
  stickerId: 0,
  wear: 0,
  scale: 0,
  rotation: 0,
  tintId: 0
};

const baseCMsgGCCStrike15V2MatchEndRewardDropsNotification: object = {};

const baseCMsgItemAcknowledged: object = {};

const baseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest: object = {
  paramS: Long.UZERO,
  paramA: Long.UZERO,
  paramD: Long.UZERO,
  paramM: Long.UZERO
};

const baseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse: object = {};

const baseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames: object = {};

const baseCMsgGCCStrike15V2MatchListRequestLiveGameForUser: object = {
  accountid: 0
};

const baseCMsgGCCStrike15V2MatchListRequestRecentUserGames: object = {
  accountid: 0
};

const baseCMsgGCCStrike15V2MatchListRequestTournamentGames: object = {
  eventid: 0
};

const baseCMsgGCCStrike15V2MatchListRequestFullGameInfo: object = {
  matchid: Long.UZERO,
  outcomeid: Long.UZERO,
  token: 0
};

const baseCDataGCCStrike15V2MatchInfo: object = {
  matchid: Long.UZERO,
  matchtime: 0
};

const baseCDataGCCStrike15V2TournamentGroupTeam: object = {
  teamId: 0,
  score: 0,
  correctpick: false
};

const baseCDataGCCStrike15V2TournamentGroup: object = {
  groupid: 0,
  name: "",
  desc: "",
  picks_deprecated: 0,
  stageIds: 0,
  picklockuntiltime: 0,
  pickableteams: 0,
  pointsPerPick: 0
};

const baseCDataGCCStrike15V2TournamentGroup_Picks: object = {
  pickids: 0
};

const baseCDataGCCStrike15V2TournamentSection: object = {
  sectionid: 0,
  name: "",
  desc: ""
};

const baseCDataGCCStrike15V2TournamentInfo: object = {};

const baseCMsgGCCStrike15V2MatchList: object = {
  msgrequestid: 0,
  accountid: 0,
  servertime: 0
};

const baseCMsgGCCStrike15V2Predictions: object = {
  eventId: 0
};

const baseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick: object = {
  sectionid: 0,
  groupid: 0,
  index: 0,
  teamid: 0,
  itemid: Long.UZERO
};

const baseCMsgGCCStrike15V2Fantasy: object = {
  eventId: 0
};

const baseCMsgGCCStrike15V2Fantasy_FantasySlot: object = {
  type: 0,
  pick: 0,
  itemid: Long.UZERO
};

const baseCMsgGCCStrike15V2Fantasy_FantasyTeam: object = {
  sectionid: 0
};

const baseCAttributeString: object = {
  value: ""
};

const baseCMsgCStrike15Welcome: object = {
  storeItemHash: 0,
  timeplayedconsecutively: 0,
  timeFirstPlayed: 0,
  lastTimePlayed: 0,
  lastIpAddress: 0,
  gscookieid: Long.UZERO,
  uniqueid: Long.UZERO
};

const baseCMsgGCCStrike15V2ClientVarValueNotificationInfo: object = {
  valueName: "",
  valueInt: 0,
  serverAddr: 0,
  serverPort: 0,
  chokedBlocks: ""
};

const baseCMsgGCCStrike15V2ServerVarValueNotificationInfo: object = {
  accountid: 0,
  viewangles: 0,
  type: 0,
  userdata: 0
};

const baseCMsgGCCStrike15V2GiftsLeaderboardRequest: object = {};

const baseCMsgGCCStrike15V2GiftsLeaderboardResponse: object = {
  servertime: 0,
  timePeriodSeconds: 0,
  totalGiftsGiven: 0,
  totalGivers: 0
};

const baseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry: object = {
  accountid: 0,
  gifts: 0
};

const baseCMsgGCCStrike15V2ClientSubmitSurveyVote: object = {
  surveyId: 0,
  vote: 0
};

const baseCMsgGCCStrike15V2Server2GCClientValidate: object = {
  accountid: 0
};

const baseCMsgGCCStrike15V2GC2ClientTournamentInfo: object = {
  eventid: 0,
  stageid: 0,
  gameType: 0,
  teamids: 0
};

const baseCSOEconCoupon: object = {
  entryid: 0,
  defidx: 0,
  expirationDate: 0
};

const baseCSOQuestProgress: object = {
  questid: 0,
  pointsRemaining: 0,
  bonusPoints: 0
};

const baseCSOAccountSeasonalOperation: object = {
  seasonValue: 0,
  tierUnlocked: 0,
  premiumTiers: 0,
  missionId: 0,
  missionsCompleted: 0,
  redeemableBalance: 0,
  seasonPassTime: 0
};

const baseCSOAccountRecurringSubscription: object = {
  timeNextCycle: 0,
  timeInitiated: 0
};

const baseCSOPersonaDataPublic: object = {
  playerLevel: 0,
  elevatedState: false
};

const baseCMsgGCGlobalGameSubscribe: object = {
  ticket: Long.UZERO
};

const baseCMsgGCGlobalGameUnsubscribe: object = {
  timeleft: 0
};

const baseCMsgGCGlobalGamePlay: object = {
  ticket: Long.UZERO,
  gametimems: 0,
  msperpoint: 0
};

const baseCMsgGCCStrike15V2AcknowledgePenalty: object = {
  acknowledged: 0
};

const baseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin: object = {
  defindex: 0,
  upgradeid: Long.UZERO,
  hours: 0,
  prestigetime: 0
};

const baseCMsgGCCStrike15V2Client2GCStreamUnlock: object = {
  ticket: Long.UZERO,
  os: 0
};

const baseCMsgGCCStrike15V2ClientToGCRequestElevate: object = {
  stage: 0
};

const baseCMsgGCCStrike15V2ClientToGCChat: object = {
  matchId: Long.UZERO,
  text: ""
};

const baseCMsgGCCStrike15V2GCToClientChat: object = {
  accountId: 0,
  text: ""
};

const baseCMsgGCCStrike15V2ClientAuthKeyCode: object = {
  eventid: 0,
  code: ""
};

const baseCMsgGCCStrike15GotvSyncPacket: object = {};

const basePlayerDecalDigitalSignature: object = {
  accountid: 0,
  rtime: 0,
  endpos: 0,
  startpos: 0,
  right: 0,
  txDefidx: 0,
  entindex: 0,
  hitbox: 0,
  creationtime: 0,
  equipslot: 0,
  traceId: 0,
  normal: 0,
  tintId: 0
};

const baseCMsgGCCStrike15V2ClientPlayerDecalSign: object = {
  itemid: Long.UZERO
};

const baseCMsgGCCStrike15V2ClientLogonFatalError: object = {
  errorcode: 0,
  message: "",
  country: ""
};

const baseCMsgGCCStrike15V2ClientPollState: object = {
  pollid: 0,
  names: "",
  values: 0
};

const baseCMsgGCCStrike15V2PartyRegister: object = {
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

const baseCMsgGCCStrike15V2PartySearch: object = {
  ver: 0,
  apr: 0,
  ark: 0,
  grps: 0,
  launcher: 0,
  gameType: 0
};

const baseCMsgGCCStrike15V2PartySearchResults: object = {};

const baseCMsgGCCStrike15V2PartySearchResults_Entry: object = {
  id: 0,
  grp: 0,
  gameType: 0,
  apr: 0,
  ark: 0,
  loc: 0,
  accountid: 0
};

const baseCMsgGCCStrike15V2PartyInvite: object = {
  accountid: 0,
  lobbyid: 0
};

const baseCMsgGCCStrike15V2AccountRequestCoPlays: object = {
  servertime: 0
};

const baseCMsgGCCStrike15V2AccountRequestCoPlays_Player: object = {
  accountid: 0,
  rtcoplay: 0,
  online: false
};

const baseCMsgGCCStrike15V2ClientToGCRequestTicket: object = {
  authorizedSteamId: Long.UZERO,
  authorizedPublicIp: 0,
  gameserverSteamId: Long.UZERO,
  gameserverSdrRouting: ""
};

const baseCMsgGCToClientSteamDatagramTicket: object = {};

const baseCMsgGCCStrike15V2ClientRequestOffers: object = {};

const baseCMsgGCCStrike15V2ClientRequestSouvenir: object = {
  itemid: Long.UZERO,
  matchid: Long.UZERO,
  eventid: 0
};

const baseCMsgGCCStrike15V2ClientAccountBalance: object = {
  amount: Long.UZERO,
  url: ""
};

const baseCMsgGCCStrike15V2ClientPartyJoinRelay: object = {
  accountid: 0,
  lobbyid: Long.UZERO
};

const baseCMsgGCCStrike15V2ClientPartyWarning: object = {};

const baseCMsgGCCStrike15V2ClientPartyWarning_Entry: object = {
  accountid: 0,
  warntype: 0
};

const baseCMsgGCCStrike15V2SetEventFavorite: object = {
  eventid: Long.UZERO,
  isFavorite: false
};

const baseCMsgGCCStrike15V2GetEventFavoritesRequest: object = {
  allEvents: false
};

const baseCMsgGCCStrike15V2GetEventFavoritesResponse: object = {
  allEvents: false,
  jsonFavorites: "",
  jsonFeatured: ""
};

const baseCMsgGCCStrike15V2ClientPerfReport: object = {};

const baseCMsgGCCStrike15V2ClientPerfReport_Entry: object = {
  perfcounter: 0,
  length: 0,
  sourceid: 0,
  status: 0
};

const baseCVDiagnostic: object = {
  id: 0,
  extended: 0,
  value: Long.UZERO,
  stringValue: ""
};

const baseCMsgGCCStrike15V2ClientReportValidation: object = {
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
  diagnostic5: Long.UZERO
};

const baseCMsgGCCStrike15V2GC2ClientRefuseSecureMode: object = {
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

const baseCMsgGCCStrike15V2GC2ClientRequestValidation: object = {
  fullReport: false,
  module: ""
};

const baseCMsgGCCStrike15V2GC2ClientInitSystem: object = {
  load: false,
  name: "",
  outputname: "",
  cookie: 0,
  manifest: ""
};

const baseCMsgGCCStrike15V2GC2ClientInitSystemResponse: object = {
  success: false,
  diagnostic: "",
  response: 0,
  errorCode1: 0,
  errorCode2: 0,
  handle: Long.ZERO,
  einitResult: 0,
  auxSystem1: 0,
  auxSystem2: 0
};

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
  k_EMsgGCCStrike15_v2_PrivateQueues = 9214
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

export const GameServerPing = {
  encode(message: GameServerPing, writer: Writer = Writer.create()): Writer {
    writer.uint32(16).int32(message.ping);
    writer.uint32(24).uint32(message.ip);
    writer.uint32(40).uint32(message.instances);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameServerPing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameServerPing } as GameServerPing;
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
  }
};

export const DataCenterPing = {
  encode(message: DataCenterPing, writer: Writer = Writer.create()): Writer {
    writer.uint32(13).fixed32(message.dataCenterId);
    writer.uint32(16).sint32(message.ping);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DataCenterPing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataCenterPing } as DataCenterPing;
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
  }
};

export const DetailedSearchStatistic = {
  encode(
    message: DetailedSearchStatistic,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.gameType);
    writer.uint32(16).uint32(message.searchTimeAvg);
    writer.uint32(32).uint32(message.playersSearching);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DetailedSearchStatistic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetailedSearchStatistic
    } as DetailedSearchStatistic;
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
  }
};

export const TournamentPlayer = {
  encode(message: TournamentPlayer, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.accountId);
    writer.uint32(18).string(message.playerNick);
    writer.uint32(26).string(message.playerName);
    writer.uint32(32).uint32(message.playerDob);
    writer.uint32(42).string(message.playerFlag);
    writer.uint32(50).string(message.playerLocation);
    writer.uint32(58).string(message.playerDesc);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TournamentPlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTournamentPlayer } as TournamentPlayer;
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
  }
};

export const TournamentTeam = {
  encode(message: TournamentTeam, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.teamId);
    writer.uint32(18).string(message.teamTag);
    writer.uint32(26).string(message.teamFlag);
    writer.uint32(34).string(message.teamName);
    for (const v of message.players) {
      TournamentPlayer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TournamentTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTournamentTeam } as TournamentTeam;
    message.players = [];
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
  }
};

export const TournamentEvent = {
  encode(message: TournamentEvent, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.eventId);
    writer.uint32(18).string(message.eventTag);
    writer.uint32(26).string(message.eventName);
    writer.uint32(32).uint32(message.eventTimeStart);
    writer.uint32(40).uint32(message.eventTimeEnd);
    writer.uint32(48).int32(message.eventPublic);
    writer.uint32(56).int32(message.eventStageId);
    writer.uint32(66).string(message.eventStageName);
    writer.uint32(72).uint32(message.activeSectionId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TournamentEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTournamentEvent } as TournamentEvent;
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
  }
};

export const GlobalStatistics = {
  encode(message: GlobalStatistics, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.playersOnline);
    writer.uint32(16).uint32(message.serversOnline);
    writer.uint32(24).uint32(message.playersSearching);
    writer.uint32(32).uint32(message.serversAvailable);
    writer.uint32(40).uint32(message.ongoingMatches);
    writer.uint32(48).uint32(message.searchTimeAvg);
    for (const v of message.searchStatistics) {
      DetailedSearchStatistic.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.mainPostUrl);
    writer.uint32(72).uint32(message.requiredAppidVersion);
    writer.uint32(80).uint32(message.pricesheetVersion);
    writer.uint32(88).uint32(message.twitchStreamsVersion);
    writer.uint32(96).uint32(message.activeTournamentEventid);
    writer.uint32(104).uint32(message.activeSurveyId);
    writer.uint32(112).uint32(message.rtime32Cur);
    writer.uint32(120).uint32(message.rtime32EventStart);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GlobalStatistics {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGlobalStatistics } as GlobalStatistics;
    message.searchStatistics = [];
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
  }
};

export const OperationalStatisticDescription = {
  encode(
    message: OperationalStatisticDescription,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(16).uint32(message.idkey);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): OperationalStatisticDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOperationalStatisticDescription
    } as OperationalStatisticDescription;
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
  }
};

export const OperationalStatisticElement = {
  encode(
    message: OperationalStatisticElement,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.idkey);
    writer.uint32(18).fork();
    for (const v of message.values) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): OperationalStatisticElement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOperationalStatisticElement
    } as OperationalStatisticElement;
    message.values = [];
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
  }
};

export const OperationalStatisticsPacket = {
  encode(
    message: OperationalStatisticsPacket,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.packetid);
    writer.uint32(16).int32(message.mstimestamp);
    for (const v of message.values) {
      OperationalStatisticElement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): OperationalStatisticsPacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOperationalStatisticsPacket
    } as OperationalStatisticsPacket;
    message.values = [];
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
  }
};

export const PlayerRankingInfo = {
  encode(message: PlayerRankingInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.accountId);
    writer.uint32(16).uint32(message.rankId);
    writer.uint32(24).uint32(message.wins);
    writer.uint32(37).float(message.rankChange);
    writer.uint32(48).uint32(message.rankTypeId);
    writer.uint32(56).uint32(message.tvControl);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlayerRankingInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerRankingInfo } as PlayerRankingInfo;
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
  }
};

export const PlayerCommendationInfo = {
  encode(
    message: PlayerCommendationInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.cmdFriendly);
    writer.uint32(16).uint32(message.cmdTeaching);
    writer.uint32(32).uint32(message.cmdLeader);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlayerCommendationInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerCommendationInfo } as PlayerCommendationInfo;
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
  }
};

export const PlayerMedalsInfo = {
  encode(message: PlayerMedalsInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(58).fork();
    for (const v of message.displayItemsDefidx) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(64).uint32(message.featuredDisplayItemDefidx);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlayerMedalsInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerMedalsInfo } as PlayerMedalsInfo;
    message.displayItemsDefidx = [];
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
  }
};

export const AccountActivity = {
  encode(message: AccountActivity, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.activity);
    writer.uint32(16).uint32(message.mode);
    writer.uint32(24).uint32(message.map);
    writer.uint32(32).uint64(message.matchid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AccountActivity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountActivity } as AccountActivity;
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
  }
};

export const TournamentMatchSetup = {
  encode(
    message: TournamentMatchSetup,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eventId);
    writer.uint32(16).int32(message.teamIdCt);
    writer.uint32(24).int32(message.teamIdT);
    writer.uint32(32).int32(message.eventStageId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TournamentMatchSetup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTournamentMatchSetup } as TournamentMatchSetup;
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
  }
};

export const ServerHltvInfo = {
  encode(message: ServerHltvInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.tvUdpPort);
    writer.uint32(16).uint64(message.tvWatchKey);
    writer.uint32(24).uint32(message.tvSlots);
    writer.uint32(32).uint32(message.tvClients);
    writer.uint32(40).uint32(message.tvProxies);
    writer.uint32(48).uint32(message.tvTime);
    writer.uint32(64).uint32(message.gameType);
    writer.uint32(74).string(message.gameMapgroup);
    writer.uint32(82).string(message.gameMap);
    writer.uint32(88).uint64(message.tvMasterSteamid);
    writer.uint32(96).uint32(message.tvLocalSlots);
    writer.uint32(104).uint32(message.tvLocalClients);
    writer.uint32(112).uint32(message.tvLocalProxies);
    writer.uint32(120).uint32(message.tvRelaySlots);
    writer.uint32(128).uint32(message.tvRelayClients);
    writer.uint32(136).uint32(message.tvRelayProxies);
    writer.uint32(144).uint32(message.tvRelayAddress);
    writer.uint32(152).uint32(message.tvRelayPort);
    writer.uint32(160).uint64(message.tvRelaySteamid);
    writer.uint32(168).uint32(message.flags);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ServerHltvInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerHltvInfo } as ServerHltvInfo;
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
  }
};

export const IpAddressMask = {
  encode(message: IpAddressMask, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.a);
    writer.uint32(16).uint32(message.b);
    writer.uint32(24).uint32(message.c);
    writer.uint32(32).uint32(message.d);
    writer.uint32(40).uint32(message.bits);
    writer.uint32(48).uint32(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): IpAddressMask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIpAddressMask } as IpAddressMask;
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
  }
};

export const CMsgCsgoSteamUserStatChange = {
  encode(
    message: CMsgCsgoSteamUserStatChange,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.ecsgosteamuserstat);
    writer.uint32(16).int32(message.delta);
    writer.uint32(24).bool(message.absolute);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgCsgoSteamUserStatChange {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgCsgoSteamUserStatChange
    } as CMsgCsgoSteamUserStatChange;
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
  }
};

export const XpProgressData = {
  encode(message: XpProgressData, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.xpPoints);
    writer.uint32(16).int32(message.xpCategory);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): XpProgressData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseXpProgressData } as XpProgressData;
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
  }
};

export const MatchEndItemUpdates = {
  encode(
    message: MatchEndItemUpdates,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.itemId);
    writer.uint32(16).uint32(message.itemAttrDefidx);
    writer.uint32(24).uint32(message.itemAttrDeltaValue);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MatchEndItemUpdates {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMatchEndItemUpdates } as MatchEndItemUpdates;
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
  }
};

export const ScoreLeaderboardData = {
  encode(
    message: ScoreLeaderboardData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.questId);
    writer.uint32(16).uint32(message.score);
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
  decode(input: Uint8Array | Reader, length?: number): ScoreLeaderboardData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScoreLeaderboardData } as ScoreLeaderboardData;
    message.accountentries = [];
    message.matchentries = [];
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
  }
};

export const ScoreLeaderboardData_Entry = {
  encode(
    message: ScoreLeaderboardData_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.tag);
    writer.uint32(16).uint32(message.val);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): ScoreLeaderboardData_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScoreLeaderboardData_Entry
    } as ScoreLeaderboardData_Entry;
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
  }
};

export const ScoreLeaderboardData_AccountEntries = {
  encode(
    message: ScoreLeaderboardData_AccountEntries,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    for (const v of message.entries) {
      ScoreLeaderboardData_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): ScoreLeaderboardData_AccountEntries {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScoreLeaderboardData_AccountEntries
    } as ScoreLeaderboardData_AccountEntries;
    message.entries = [];
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
  }
};

export const PlayerQuestData = {
  encode(message: PlayerQuestData, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.questerAccountId);
    for (const v of message.questItemData) {
      PlayerQuestData_QuestItemData.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.xpProgressData) {
      XpProgressData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).uint32(message.timePlayed);
    writer.uint32(40).uint32(message.mmGameMode);
    for (const v of message.itemUpdates) {
      MatchEndItemUpdates.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).bool(message.operationPointsEligible);
    for (const v of message.userstatchanges) {
      CMsgCsgoSteamUserStatChange.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlayerQuestData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerQuestData } as PlayerQuestData;
    message.questItemData = [];
    message.xpProgressData = [];
    message.itemUpdates = [];
    message.userstatchanges = [];
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
  }
};

export const PlayerQuestData_QuestItemData = {
  encode(
    message: PlayerQuestData_QuestItemData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.questId);
    writer.uint32(16).int32(message.questNormalPointsEarned);
    writer.uint32(24).int32(message.questBonusPointsEarned);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): PlayerQuestData_QuestItemData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePlayerQuestData_QuestItemData
    } as PlayerQuestData_QuestItemData;
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
  }
};

export const DeepPlayerStatsEntry = {
  encode(
    message: DeepPlayerStatsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint64(message.matchId);
    writer.uint32(24).uint32(message.mmGameMode);
    writer.uint32(32).uint32(message.mapid);
    writer.uint32(40).bool(message.bStartingCt);
    writer.uint32(48).uint32(message.matchOutcome);
    writer.uint32(56).uint32(message.roundsWon);
    writer.uint32(64).uint32(message.roundsLost);
    writer.uint32(72).uint32(message.statScore);
    writer.uint32(96).uint32(message.statDeaths);
    writer.uint32(104).uint32(message.statMvps);
    writer.uint32(112).uint32(message.enemyKills);
    writer.uint32(120).uint32(message.enemyHeadshots);
    writer.uint32(128).uint32(message.enemy2ks);
    writer.uint32(136).uint32(message.enemy3ks);
    writer.uint32(144).uint32(message.enemy4ks);
    writer.uint32(152).uint32(message.totalDamage);
    writer.uint32(184).uint32(message.engagementsEntryCount);
    writer.uint32(192).uint32(message.engagementsEntryWins);
    writer.uint32(200).uint32(message.engagements1v1Count);
    writer.uint32(208).uint32(message.engagements1v1Wins);
    writer.uint32(216).uint32(message.engagements1v2Count);
    writer.uint32(224).uint32(message.engagements1v2Wins);
    writer.uint32(232).uint32(message.utilityCount);
    writer.uint32(240).uint32(message.utilitySuccess);
    writer.uint32(256).uint32(message.flashCount);
    writer.uint32(264).uint32(message.flashSuccess);
    writer.uint32(274).fork();
    for (const v of message.mates) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeepPlayerStatsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeepPlayerStatsEntry } as DeepPlayerStatsEntry;
    message.mates = [];
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
  }
};

export const DeepPlayerMatchEvent = {
  encode(
    message: DeepPlayerMatchEvent,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint64(message.matchId);
    writer.uint32(24).uint32(message.eventId);
    writer.uint32(32).uint32(message.eventType);
    writer.uint32(40).bool(message.bPlayingCt);
    writer.uint32(48).int32(message.userPosX);
    writer.uint32(56).int32(message.userPosY);
    writer.uint32(96).int32(message.userPosZ);
    writer.uint32(64).uint32(message.userDefidx);
    writer.uint32(72).int32(message.otherPosX);
    writer.uint32(80).int32(message.otherPosY);
    writer.uint32(104).int32(message.otherPosZ);
    writer.uint32(88).uint32(message.otherDefidx);
    writer.uint32(112).int32(message.eventData);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeepPlayerMatchEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeepPlayerMatchEvent } as DeepPlayerMatchEvent;
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
  }
};

export const CMsgGCServerQuestUpdateData = {
  encode(
    message: CMsgGCServerQuestUpdateData,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.playerQuestData) {
      PlayerQuestData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).bytes(message.binaryData);
    writer.uint32(24).uint32(message.mmGameMode);
    if (
      message.missionlbsdata !== undefined &&
      message.missionlbsdata !== undefined
    ) {
      ScoreLeaderboardData.encode(
        message.missionlbsdata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCServerQuestUpdateData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCServerQuestUpdateData
    } as CMsgGCServerQuestUpdateData;
    message.playerQuestData = [];
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
  }
};

export const CMsgGCCStrike15V2MatchmakingGCOperationalStats = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGCOperationalStats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.packetid);
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGCOperationalStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGCOperationalStats
    } as CMsgGCCStrike15V2MatchmakingGCOperationalStats;
    message.namekeys = [];
    message.packets = [];
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
  }
};

export const CMsgGCCStrike15V2MatchmakingGC2ServerConfirm = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ServerConfirm,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.token);
    writer.uint32(16).uint32(message.stamp);
    writer.uint32(24).uint64(message.exchange);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ServerConfirm {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm
    } as CMsgGCCStrike15V2MatchmakingGC2ServerConfirm;
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
  }
};

export const CMsgGCCStrike15V2GC2ServerReservationUpdate = {
  encode(
    message: CMsgGCCStrike15V2GC2ServerReservationUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.viewersExternalTotal);
    writer.uint32(16).uint32(message.viewersExternalSteam);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ServerReservationUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ServerReservationUpdate
    } as CMsgGCCStrike15V2GC2ServerReservationUpdate;
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
  }
};

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
    writer.uint32(16).uint32(message.gameType);
    writer.uint32(26).string(message.ticketData);
    writer.uint32(32).uint32(message.clientVersion);
    if (
      message.tournamentMatch !== undefined &&
      message.tournamentMatch !== undefined
    ) {
      TournamentMatchSetup.encode(
        message.tournamentMatch,
        writer.uint32(42).fork()
      ).ldelim();
    }
    writer.uint32(48).bool(message.primeOnly);
    writer.uint32(56).uint32(message.tvControl);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingStart {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingStart
    } as CMsgGCCStrike15V2MatchmakingStart;
    message.accountIds = [];
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CMsgGCCStrike15V2MatchmakingStop = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingStop,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.abandon);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingStop {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingStop
    } as CMsgGCCStrike15V2MatchmakingStop;
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
  }
};

export const CMsgGCCStrike15V2MatchmakingClient2ServerPing = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingClient2ServerPing,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.gameserverpings) {
      GameServerPing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).int32(message.offsetIndex);
    writer.uint32(24).int32(message.finalBatch);
    for (const v of message.dataCenterPings) {
      DataCenterPing.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).uint32(message.maxPing);
    writer.uint32(53).fixed32(message.testToken);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingClient2ServerPing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingClient2ServerPing
    } as CMsgGCCStrike15V2MatchmakingClient2ServerPing;
    message.gameserverpings = [];
    message.dataCenterPings = [];
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
  }
};

export const CMsgGCCStrike15V2MatchmakingGC2ClientUpdate = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.matchmaking);
    writer.uint32(18).fork();
    for (const v of message.waitingAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).string(message.error);
    writer.uint32(50).fork();
    for (const v of message.ongoingmatchAccountIdSessions) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (
      message.globalStats !== undefined &&
      message.globalStats !== undefined
    ) {
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
    if (
      message.serverIpaddressMask !== undefined &&
      message.serverIpaddressMask !== undefined
    ) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate
    } as CMsgGCCStrike15V2MatchmakingGC2ClientUpdate;
    message.waitingAccountIdSessions = [];
    message.ongoingmatchAccountIdSessions = [];
    message.failpingAccountIdSessions = [];
    message.penaltyAccountIdSessions = [];
    message.failreadyAccountIdSessions = [];
    message.vacbannedAccountIdSessions = [];
    message.notes = [];
    message.penaltyAccountIdSessionsGreen = [];
    message.insufficientlevelSessions = [];
    message.vsncheckAccountIdSessions = [];
    message.launcherMismatchSessions = [];
    message.insecureAccountIdSessions = [];
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
  }
};

export const CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(16).int32(message.regionId);
    writer.uint32(29).float(message.regionR);
    writer.uint32(37).float(message.distance);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note
    } as CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note;
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
  }
};

export const CDataGCCStrike15V2TournamentMatchDraft = {
  encode(
    message: CDataGCCStrike15V2TournamentMatchDraft,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eventId);
    writer.uint32(16).int32(message.eventStageId);
    writer.uint32(24).int32(message.teamId0);
    writer.uint32(32).int32(message.teamId1);
    writer.uint32(40).int32(message.mapsCount);
    writer.uint32(48).int32(message.mapsCurrent);
    writer.uint32(56).int32(message.teamIdStart);
    writer.uint32(64).int32(message.teamIdVeto1);
    writer.uint32(72).int32(message.teamIdPickn);
    for (const v of message.drafts) {
      CDataGCCStrike15V2TournamentMatchDraft_Entry.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentMatchDraft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentMatchDraft
    } as CDataGCCStrike15V2TournamentMatchDraft;
    message.drafts = [];
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
  }
};

export const CDataGCCStrike15V2TournamentMatchDraft_Entry = {
  encode(
    message: CDataGCCStrike15V2TournamentMatchDraft_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.mapid);
    writer.uint32(16).int32(message.teamIdCt);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentMatchDraft_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentMatchDraft_Entry
    } as CDataGCCStrike15V2TournamentMatchDraft_Entry;
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
  }
};

export const CPreMatchInfoData = {
  encode(message: CPreMatchInfoData, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.predictionsPct);
    if (message.draft !== undefined && message.draft !== undefined) {
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
  decode(input: Uint8Array | Reader, length?: number): CPreMatchInfoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCPreMatchInfoData } as CPreMatchInfoData;
    message.stats = [];
    message.wins = [];
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
  }
};

export const CPreMatchInfoData_TeamStats = {
  encode(
    message: CPreMatchInfoData_TeamStats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.matchInfoIdxtxt);
    writer.uint32(18).string(message.matchInfoTxt);
    for (const v of message.matchInfoTeams) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CPreMatchInfoData_TeamStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCPreMatchInfoData_TeamStats
    } as CPreMatchInfoData_TeamStats;
    message.matchInfoTeams = [];
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
  }
};

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
    writer.uint32(16).uint32(message.gameType);
    writer.uint32(24).uint64(message.matchId);
    writer.uint32(32).uint32(message.serverVersion);
    writer.uint32(144).uint32(message.flags);
    for (const v of message.rankings) {
      PlayerRankingInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(48).uint64(message.encryptionKey);
    writer.uint32(56).uint64(message.encryptionKeyPub);
    writer.uint32(66).fork();
    for (const v of message.partyIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.whitelist) {
      IpAddressMask.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(80).uint64(message.tvMasterSteamid);
    if (
      message.tournamentEvent !== undefined &&
      message.tournamentEvent !== undefined
    ) {
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
    writer.uint32(112).uint64(message.tvRelaySteamid);
    if (
      message.preMatchData !== undefined &&
      message.preMatchData !== undefined
    ) {
      CPreMatchInfoData.encode(
        message.preMatchData,
        writer.uint32(122).fork()
      ).ldelim();
    }
    writer.uint32(128).uint32(message.rtime32EventStart);
    writer.uint32(136).uint32(message.tvControl);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ServerReserve {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ServerReserve
    } as CMsgGCCStrike15V2MatchmakingGC2ServerReserve;
    message.accountIds = [];
    message.rankings = [];
    message.partyIds = [];
    message.whitelist = [];
    message.tournamentTeams = [];
    message.tournamentCastersAccountIds = [];
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
  }
};

export const CMsgGCCStrike15V2MatchmakingServerReservationResponse = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingServerReservationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.reservationid);
    if (
      message.reservation !== undefined &&
      message.reservation !== undefined
    ) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    writer.uint32(26).string(message.map);
    writer.uint32(32).uint64(message.gcReservationSent);
    writer.uint32(40).uint32(message.serverVersion);
    if (message.tvInfo !== undefined && message.tvInfo !== undefined) {
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
    writer.uint32(72).uint32(message.rewardItemAttrDefIdx);
    writer.uint32(80).uint32(message.rewardItemAttrValue);
    writer.uint32(88).uint32(message.rewardItemAttrRewardIdx);
    writer.uint32(96).uint32(message.rewardDropList);
    writer.uint32(106).string(message.tournamentTag);
    writer.uint32(112).uint32(message.legacySteamdatagramPort);
    writer.uint32(136).uint32(message.steamdatagramRouting);
    writer.uint32(125).fixed32(message.testToken);
    writer.uint32(128).uint32(message.flags);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingServerReservationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingServerReservationResponse
    } as CMsgGCCStrike15V2MatchmakingServerReservationResponse;
    message.rewardPlayerAccounts = [];
    message.idlePlayerAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationid = reader.uint64() as Long;
          break;
        case 2:
          message.reservation = CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
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
  }
};

export const CMsgGCCStrike15V2MatchmakingGC2ClientReserve = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientReserve,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.serverid);
    writer.uint32(16).uint32(message.directUdpIp);
    writer.uint32(24).uint32(message.directUdpPort);
    writer.uint32(32).uint64(message.reservationid);
    if (
      message.reservation !== undefined &&
      message.reservation !== undefined
    ) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(42).fork()
      ).ldelim();
    }
    writer.uint32(50).string(message.map);
    writer.uint32(58).string(message.serverAddress);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientReserve {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ClientReserve
    } as CMsgGCCStrike15V2MatchmakingGC2ClientReserve;
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
          message.reservation = CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
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
  }
};

export const CMsgGCCStrike15V2MatchmakingServerRoundStats = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingServerRoundStats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.reservationid);
    if (
      message.reservation !== undefined &&
      message.reservation !== undefined
    ) {
      CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(
        message.reservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    writer.uint32(26).string(message.map);
    writer.uint32(32).int32(message.round);
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
    writer.uint32(80).int32(message.roundResult);
    writer.uint32(88).int32(message.matchResult);
    writer.uint32(98).fork();
    for (const v of message.teamScores) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.confirm !== undefined && message.confirm !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.encode(
        message.confirm,
        writer.uint32(106).fork()
      ).ldelim();
    }
    writer.uint32(112).int32(message.reservationStage);
    writer.uint32(120).int32(message.matchDuration);
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
    writer.uint32(176).uint32(message.spectatorsCount);
    writer.uint32(184).uint32(message.spectatorsCountTv);
    writer.uint32(192).uint32(message.spectatorsCountLnk);
    writer.uint32(202).fork();
    for (const v of message.enemyKillsAgg) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.dropInfo !== undefined && message.dropInfo !== undefined) {
      CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.encode(
        message.dropInfo,
        writer.uint32(210).fork()
      ).ldelim();
    }
    writer.uint32(216).bool(message.bSwitchedTeams);
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
    writer.uint32(248).uint32(message.maxRounds);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingServerRoundStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingServerRoundStats
    } as CMsgGCCStrike15V2MatchmakingServerRoundStats;
    message.kills = [];
    message.assists = [];
    message.deaths = [];
    message.scores = [];
    message.pings = [];
    message.teamScores = [];
    message.enemyKills = [];
    message.enemyHeadshots = [];
    message.enemy3ks = [];
    message.enemy4ks = [];
    message.enemy5ks = [];
    message.mvps = [];
    message.enemyKillsAgg = [];
    message.enemy2ks = [];
    message.playerSpawned = [];
    message.teamSpawnCount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationid = reader.uint64() as Long;
          break;
        case 2:
          message.reservation = CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(
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
          message.dropInfo = CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.decode(
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
  }
};

export const CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountMvp);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo
    } as CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo;
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
  }
};

export const CMsgGCCStrike15V2MatchmakingClient2GCHello = {
  encode(
    _: CMsgGCCStrike15V2MatchmakingClient2GCHello,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingClient2GCHello {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingClient2GCHello
    } as CMsgGCCStrike15V2MatchmakingClient2GCHello;
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

export const CMsgGCCStrike15V2MatchmakingGC2ClientHello = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientHello,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    if (
      message.ongoingmatch !== undefined &&
      message.ongoingmatch !== undefined
    ) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.ongoingmatch,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (
      message.globalStats !== undefined &&
      message.globalStats !== undefined
    ) {
      GlobalStatistics.encode(
        message.globalStats,
        writer.uint32(26).fork()
      ).ldelim();
    }
    writer.uint32(32).uint32(message.penaltySeconds);
    writer.uint32(40).uint32(message.penaltyReason);
    writer.uint32(48).int32(message.vacBanned);
    if (message.ranking !== undefined && message.ranking !== undefined) {
      PlayerRankingInfo.encode(
        message.ranking,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (
      message.commendation !== undefined &&
      message.commendation !== undefined
    ) {
      PlayerCommendationInfo.encode(
        message.commendation,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.medals !== undefined && message.medals !== undefined) {
      PlayerMedalsInfo.encode(
        message.medals,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (
      message.myCurrentEvent !== undefined &&
      message.myCurrentEvent !== undefined
    ) {
      TournamentEvent.encode(
        message.myCurrentEvent,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.myCurrentEventTeams) {
      TournamentTeam.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (
      message.myCurrentTeam !== undefined &&
      message.myCurrentTeam !== undefined
    ) {
      TournamentTeam.encode(
        message.myCurrentTeam,
        writer.uint32(98).fork()
      ).ldelim();
    }
    for (const v of message.myCurrentEventStages) {
      TournamentEvent.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    writer.uint32(112).uint32(message.surveyVote);
    if (message.activity !== undefined && message.activity !== undefined) {
      AccountActivity.encode(
        message.activity,
        writer.uint32(122).fork()
      ).ldelim();
    }
    writer.uint32(136).int32(message.playerLevel);
    writer.uint32(144).int32(message.playerCurXp);
    writer.uint32(152).int32(message.playerXpBonusFlags);
    for (const v of message.rankings) {
      PlayerRankingInfo.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientHello {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ClientHello
    } as CMsgGCCStrike15V2MatchmakingGC2ClientHello;
    message.myCurrentEventTeams = [];
    message.myCurrentEventStages = [];
    message.rankings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.ongoingmatch = CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2AccountPrivacySettings {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2AccountPrivacySettings
    } as CMsgGCCStrike15V2AccountPrivacySettings;
    message.settings = [];
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
  }
};

export const CMsgGCCStrike15V2AccountPrivacySettings_Setting = {
  encode(
    message: CMsgGCCStrike15V2AccountPrivacySettings_Setting,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.settingType);
    writer.uint32(16).uint32(message.settingValue);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2AccountPrivacySettings_Setting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2AccountPrivacySettings_Setting
    } as CMsgGCCStrike15V2AccountPrivacySettings_Setting;
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
  }
};

export const CMsgGCCStrike15V2MatchmakingGC2ClientAbandon = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingGC2ClientAbandon,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    if (
      message.abandonedMatch !== undefined &&
      message.abandonedMatch !== undefined
    ) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.abandonedMatch,
        writer.uint32(18).fork()
      ).ldelim();
    }
    writer.uint32(24).uint32(message.penaltySeconds);
    writer.uint32(32).uint32(message.penaltyReason);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingGC2ClientAbandon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon
    } as CMsgGCCStrike15V2MatchmakingGC2ClientAbandon;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.uint32();
          break;
        case 2:
          message.abandonedMatch = CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientGCRankUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientGCRankUpdate
    } as CMsgGCCStrike15V2ClientGCRankUpdate;
    message.rankings = [];
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
  }
};

export const CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate = {
  encode(
    message: CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.mainPostUrl);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate
    } as CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate;
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
  }
};

export const CMsgGCCStrike15V2ServerNotificationForUserPenalty = {
  encode(
    message: CMsgGCCStrike15V2ServerNotificationForUserPenalty,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    writer.uint32(16).uint32(message.reason);
    writer.uint32(24).uint32(message.seconds);
    writer.uint32(32).bool(message.communicationCooldown);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ServerNotificationForUserPenalty {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ServerNotificationForUserPenalty
    } as CMsgGCCStrike15V2ServerNotificationForUserPenalty;
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
  }
};

export const CMsgGCCStrike15V2ClientReportPlayer = {
  encode(
    message: CMsgGCCStrike15V2ClientReportPlayer,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    writer.uint32(16).uint32(message.rptAimbot);
    writer.uint32(24).uint32(message.rptWallhack);
    writer.uint32(32).uint32(message.rptSpeedhack);
    writer.uint32(40).uint32(message.rptTeamharm);
    writer.uint32(48).uint32(message.rptTextabuse);
    writer.uint32(56).uint32(message.rptVoiceabuse);
    writer.uint32(64).uint64(message.matchId);
    writer.uint32(72).bool(message.reportFromDemo);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientReportPlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientReportPlayer
    } as CMsgGCCStrike15V2ClientReportPlayer;
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
  }
};

export const CMsgGCCStrike15V2ClientCommendPlayer = {
  encode(
    message: CMsgGCCStrike15V2ClientCommendPlayer,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    writer.uint32(64).uint64(message.matchId);
    if (
      message.commendation !== undefined &&
      message.commendation !== undefined
    ) {
      PlayerCommendationInfo.encode(
        message.commendation,
        writer.uint32(74).fork()
      ).ldelim();
    }
    writer.uint32(80).uint32(message.tokens);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientCommendPlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientCommendPlayer
    } as CMsgGCCStrike15V2ClientCommendPlayer;
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
  }
};

export const CMsgGCCStrike15V2ClientReportServer = {
  encode(
    message: CMsgGCCStrike15V2ClientReportServer,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.rptPoorperf);
    writer.uint32(16).uint32(message.rptAbusivemodels);
    writer.uint32(24).uint32(message.rptBadmotd);
    writer.uint32(32).uint32(message.rptListingabuse);
    writer.uint32(40).uint32(message.rptInventoryabuse);
    writer.uint32(64).uint64(message.matchId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientReportServer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientReportServer
    } as CMsgGCCStrike15V2ClientReportServer;
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
  }
};

export const CMsgGCCStrike15V2ClientReportResponse = {
  encode(
    message: CMsgGCCStrike15V2ClientReportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.confirmationId);
    writer.uint32(16).uint32(message.accountId);
    writer.uint32(24).uint32(message.serverIp);
    writer.uint32(32).uint32(message.responseType);
    writer.uint32(40).uint32(message.responseResult);
    writer.uint32(48).uint32(message.tokens);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientReportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientReportResponse
    } as CMsgGCCStrike15V2ClientReportResponse;
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
  }
};

export const CMsgGCCStrike15V2ClientRequestWatchInfoFriends = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestWatchInfoFriends,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.requestId);
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(24).uint64(message.serverid);
    writer.uint32(32).uint64(message.matchid);
    writer.uint32(40).uint32(message.clientLauncher);
    for (const v of message.dataCenterPings) {
      DataCenterPing.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestWatchInfoFriends {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientRequestWatchInfoFriends
    } as CMsgGCCStrike15V2ClientRequestWatchInfoFriends;
    message.accountIds = [];
    message.dataCenterPings = [];
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
  }
};

export const WatchableMatchInfo = {
  encode(
    message: WatchableMatchInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.serverIp);
    writer.uint32(16).uint32(message.tvPort);
    writer.uint32(24).uint32(message.tvSpectators);
    writer.uint32(32).uint32(message.tvTime);
    writer.uint32(42).bytes(message.tvWatchPassword);
    writer.uint32(48).uint64(message.clDecryptdataKey);
    writer.uint32(56).uint64(message.clDecryptdataKeyPub);
    writer.uint32(64).uint32(message.gameType);
    writer.uint32(74).string(message.gameMapgroup);
    writer.uint32(82).string(message.gameMap);
    writer.uint32(88).uint64(message.serverId);
    writer.uint32(96).uint64(message.matchId);
    writer.uint32(104).uint64(message.reservationId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): WatchableMatchInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWatchableMatchInfo } as WatchableMatchInfo;
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
  }
};

export const CMsgGCCStrike15V2ClientRequestJoinFriendData = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestJoinFriendData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.version);
    writer.uint32(16).uint32(message.accountId);
    writer.uint32(24).uint32(message.joinToken);
    writer.uint32(32).uint32(message.joinIpp);
    if (message.res !== undefined && message.res !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.res,
        writer.uint32(42).fork()
      ).ldelim();
    }
    writer.uint32(50).string(message.errormsg);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestJoinFriendData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientRequestJoinFriendData
    } as CMsgGCCStrike15V2ClientRequestJoinFriendData;
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
  }
};

export const CMsgGCCStrike15V2ClientRequestJoinServerData = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestJoinServerData,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.version);
    writer.uint32(16).uint32(message.accountId);
    writer.uint32(24).uint64(message.serverid);
    writer.uint32(32).uint32(message.serverIp);
    writer.uint32(40).uint32(message.serverPort);
    if (message.res !== undefined && message.res !== undefined) {
      CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(
        message.res,
        writer.uint32(50).fork()
      ).ldelim();
    }
    writer.uint32(58).string(message.errormsg);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestJoinServerData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientRequestJoinServerData
    } as CMsgGCCStrike15V2ClientRequestJoinServerData;
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
  }
};

export const CMsgGCCstrike15V2ClientRequestNewMission = {
  encode(
    message: CMsgGCCstrike15V2ClientRequestNewMission,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(16).uint32(message.missionId);
    writer.uint32(24).uint32(message.campaignId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCstrike15V2ClientRequestNewMission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCstrike15V2ClientRequestNewMission
    } as CMsgGCCstrike15V2ClientRequestNewMission;
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
  }
};

export const CMsgGCCstrike15V2ClientRedeemMissionReward = {
  encode(
    message: CMsgGCCstrike15V2ClientRedeemMissionReward,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.campaignId);
    writer.uint32(16).uint32(message.redeemId);
    writer.uint32(24).uint32(message.redeemableBalance);
    writer.uint32(32).uint32(message.expectedCost);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCstrike15V2ClientRedeemMissionReward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCstrike15V2ClientRedeemMissionReward
    } as CMsgGCCstrike15V2ClientRedeemMissionReward;
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
  }
};

export const CMsgGCCstrike15V2GC2ServerNotifyXPRewarded = {
  encode(
    message: CMsgGCCstrike15V2GC2ServerNotifyXPRewarded,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.xpProgressData) {
      XpProgressData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.accountId);
    writer.uint32(24).uint32(message.currentXp);
    writer.uint32(32).uint32(message.currentLevel);
    writer.uint32(40).uint32(message.upgradedDefidx);
    writer.uint32(48).uint32(message.operationPointsAwarded);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCstrike15V2GC2ServerNotifyXPRewarded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded
    } as CMsgGCCstrike15V2GC2ServerNotifyXPRewarded;
    message.xpProgressData = [];
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
  }
};

export const CMsgGCCStrike15ClientDeepStats = {
  encode(
    message: CMsgGCCStrike15ClientDeepStats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    if (message.range !== undefined && message.range !== undefined) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15ClientDeepStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15ClientDeepStats
    } as CMsgGCCStrike15ClientDeepStats;
    message.matches = [];
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
  }
};

export const CMsgGCCStrike15ClientDeepStats_DeepStatsRange = {
  encode(
    message: CMsgGCCStrike15ClientDeepStats_DeepStatsRange,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.begin);
    writer.uint32(16).uint32(message.end);
    writer.uint32(24).bool(message.frozen);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15ClientDeepStats_DeepStatsRange {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15ClientDeepStats_DeepStatsRange
    } as CMsgGCCStrike15ClientDeepStats_DeepStatsRange;
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
  }
};

export const CMsgGCCStrike15ClientDeepStats_DeepStatsMatch = {
  encode(
    message: CMsgGCCStrike15ClientDeepStats_DeepStatsMatch,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.player !== undefined && message.player !== undefined) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15ClientDeepStats_DeepStatsMatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch
    } as CMsgGCCStrike15ClientDeepStats_DeepStatsMatch;
    message.events = [];
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
  }
};

export const CMsgGCCStrike15V2WatchInfoUsers = {
  encode(
    message: CMsgGCCStrike15V2WatchInfoUsers,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.requestId);
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.watchableMatchInfos) {
      WatchableMatchInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(40).uint32(message.extendedTimeout);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2WatchInfoUsers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2WatchInfoUsers
    } as CMsgGCCStrike15V2WatchInfoUsers;
    message.accountIds = [];
    message.watchableMatchInfos = [];
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
  }
};

export const CMsgGCCStrike15V2ClientRequestPlayersProfile = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestPlayersProfile,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.requestId_deprecated);
    writer.uint32(18).fork();
    for (const v of message.accountIds_deprecated) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(24).uint32(message.accountId);
    writer.uint32(32).uint32(message.requestLevel);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestPlayersProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientRequestPlayersProfile
    } as CMsgGCCStrike15V2ClientRequestPlayersProfile;
    message.accountIds_deprecated = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId_deprecated = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds_deprecated.push(reader.uint32());
            }
          } else {
            message.accountIds_deprecated.push(reader.uint32());
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
  }
};

export const CMsgGCCStrike15V2PlayersProfile = {
  encode(
    message: CMsgGCCStrike15V2PlayersProfile,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.requestId);
    for (const v of message.accountProfiles) {
      CMsgGCCStrike15V2MatchmakingGC2ClientHello.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PlayersProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PlayersProfile
    } as CMsgGCCStrike15V2PlayersProfile;
    message.accountProfiles = [];
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
  }
};

export const CMsgGCCStrike15V2PlayerOverwatchCaseUpdate = {
  encode(
    message: CMsgGCCStrike15V2PlayerOverwatchCaseUpdate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.caseid);
    writer.uint32(24).uint32(message.suspectid);
    writer.uint32(32).uint32(message.fractionid);
    writer.uint32(40).uint32(message.rptAimbot);
    writer.uint32(48).uint32(message.rptWallhack);
    writer.uint32(56).uint32(message.rptSpeedhack);
    writer.uint32(64).uint32(message.rptTeamharm);
    writer.uint32(72).uint32(message.reason);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PlayerOverwatchCaseUpdate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate
    } as CMsgGCCStrike15V2PlayerOverwatchCaseUpdate;
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
  }
};

export const CMsgGCCStrike15V2PlayerOverwatchCaseAssignment = {
  encode(
    message: CMsgGCCStrike15V2PlayerOverwatchCaseAssignment,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.caseid);
    writer.uint32(18).string(message.caseurl);
    writer.uint32(24).uint32(message.verdict);
    writer.uint32(32).uint32(message.timestamp);
    writer.uint32(40).uint32(message.throttleseconds);
    writer.uint32(48).uint32(message.suspectid);
    writer.uint32(56).uint32(message.fractionid);
    writer.uint32(64).uint32(message.numrounds);
    writer.uint32(72).uint32(message.fractionrounds);
    writer.uint32(80).int32(message.streakconvictions);
    writer.uint32(88).uint32(message.reason);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PlayerOverwatchCaseAssignment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment
    } as CMsgGCCStrike15V2PlayerOverwatchCaseAssignment;
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
  }
};

export const CMsgGCCStrike15V2PlayerOverwatchCaseStatus = {
  encode(
    message: CMsgGCCStrike15V2PlayerOverwatchCaseStatus,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.caseid);
    writer.uint32(16).uint32(message.statusid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PlayerOverwatchCaseStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PlayerOverwatchCaseStatus
    } as CMsgGCCStrike15V2PlayerOverwatchCaseStatus;
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
  }
};

export const CClientHeaderOverwatchEvidence = {
  encode(
    message: CClientHeaderOverwatchEvidence,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint64(message.caseid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CClientHeaderOverwatchEvidence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCClientHeaderOverwatchEvidence
    } as CClientHeaderOverwatchEvidence;
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
  }
};

export const CMsgGCCStrike15V2GC2ClientTextMsg = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientTextMsg,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.id);
    writer.uint32(16).uint32(message.type);
    writer.uint32(26).bytes(message.payload);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientTextMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ClientTextMsg
    } as CMsgGCCStrike15V2GC2ClientTextMsg;
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
  }
};

export const CMsgGCCStrike15V2Client2GCTextMsg = {
  encode(
    message: CMsgGCCStrike15V2Client2GCTextMsg,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.id);
    for (const v of message.args) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Client2GCTextMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Client2GCTextMsg
    } as CMsgGCCStrike15V2Client2GCTextMsg;
    message.args = [];
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
  }
};

export const CMsgGCCStrike15V2MatchEndRunRewardDrops = {
  encode(
    message: CMsgGCCStrike15V2MatchEndRunRewardDrops,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.serverinfo !== undefined && message.serverinfo !== undefined) {
      CMsgGCCStrike15V2MatchmakingServerReservationResponse.encode(
        message.serverinfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (
      message.matchEndQuestData !== undefined &&
      message.matchEndQuestData !== undefined
    ) {
      CMsgGCServerQuestUpdateData.encode(
        message.matchEndQuestData,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchEndRunRewardDrops {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchEndRunRewardDrops
    } as CMsgGCCStrike15V2MatchEndRunRewardDrops;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.serverinfo = CMsgGCCStrike15V2MatchmakingServerReservationResponse.decode(
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
  }
};

export const CEconItemPreviewDataBlock = {
  encode(
    message: CEconItemPreviewDataBlock,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint64(message.itemid);
    writer.uint32(24).uint32(message.defindex);
    writer.uint32(32).uint32(message.paintindex);
    writer.uint32(40).uint32(message.rarity);
    writer.uint32(48).uint32(message.quality);
    writer.uint32(56).uint32(message.paintwear);
    writer.uint32(64).uint32(message.paintseed);
    writer.uint32(72).uint32(message.killeaterscoretype);
    writer.uint32(80).uint32(message.killeatervalue);
    writer.uint32(90).string(message.customname);
    for (const v of message.stickers) {
      CEconItemPreviewDataBlock_Sticker.encode(
        v!,
        writer.uint32(98).fork()
      ).ldelim();
    }
    writer.uint32(104).uint32(message.inventory);
    writer.uint32(112).uint32(message.origin);
    writer.uint32(120).uint32(message.questid);
    writer.uint32(128).uint32(message.dropreason);
    writer.uint32(136).uint32(message.musicindex);
    writer.uint32(144).int32(message.entindex);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CEconItemPreviewDataBlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCEconItemPreviewDataBlock
    } as CEconItemPreviewDataBlock;
    message.stickers = [];
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
  }
};

export const CEconItemPreviewDataBlock_Sticker = {
  encode(
    message: CEconItemPreviewDataBlock_Sticker,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.slot);
    writer.uint32(16).uint32(message.stickerId);
    writer.uint32(29).float(message.wear);
    writer.uint32(37).float(message.scale);
    writer.uint32(45).float(message.rotation);
    writer.uint32(48).uint32(message.tintId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CEconItemPreviewDataBlock_Sticker {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCEconItemPreviewDataBlock_Sticker
    } as CEconItemPreviewDataBlock_Sticker;
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
  }
};

export const CMsgGCCStrike15V2MatchEndRewardDropsNotification = {
  encode(
    message: CMsgGCCStrike15V2MatchEndRewardDropsNotification,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined && message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchEndRewardDropsNotification {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchEndRewardDropsNotification
    } as CMsgGCCStrike15V2MatchEndRewardDropsNotification;
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
  }
};

export const CMsgItemAcknowledged = {
  encode(
    message: CMsgItemAcknowledged,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined && message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgItemAcknowledged {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgItemAcknowledged } as CMsgItemAcknowledged;
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
  }
};

export const CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest = {
  encode(
    message: CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.paramS);
    writer.uint32(16).uint64(message.paramA);
    writer.uint32(24).uint64(message.paramD);
    writer.uint32(32).uint64(message.paramM);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest
    } as CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest;
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
  }
};

export const CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse = {
  encode(
    message: CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.iteminfo !== undefined && message.iteminfo !== undefined) {
      CEconItemPreviewDataBlock.encode(
        message.iteminfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse
    } as CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse;
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
  }
};

export const CMsgGCCStrike15V2MatchListRequestCurrentLiveGames = {
  encode(
    _: CMsgGCCStrike15V2MatchListRequestCurrentLiveGames,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestCurrentLiveGames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames
    } as CMsgGCCStrike15V2MatchListRequestCurrentLiveGames;
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

export const CMsgGCCStrike15V2MatchListRequestLiveGameForUser = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestLiveGameForUser,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestLiveGameForUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchListRequestLiveGameForUser
    } as CMsgGCCStrike15V2MatchListRequestLiveGameForUser;
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
  }
};

export const CMsgGCCStrike15V2MatchListRequestRecentUserGames = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestRecentUserGames,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestRecentUserGames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchListRequestRecentUserGames
    } as CMsgGCCStrike15V2MatchListRequestRecentUserGames;
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
  }
};

export const CMsgGCCStrike15V2MatchListRequestTournamentGames = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestTournamentGames,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eventid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestTournamentGames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchListRequestTournamentGames
    } as CMsgGCCStrike15V2MatchListRequestTournamentGames;
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
  }
};

export const CMsgGCCStrike15V2MatchListRequestFullGameInfo = {
  encode(
    message: CMsgGCCStrike15V2MatchListRequestFullGameInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.matchid);
    writer.uint32(16).uint64(message.outcomeid);
    writer.uint32(24).uint32(message.token);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchListRequestFullGameInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchListRequestFullGameInfo
    } as CMsgGCCStrike15V2MatchListRequestFullGameInfo;
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
  }
};

export const CDataGCCStrike15V2MatchInfo = {
  encode(
    message: CDataGCCStrike15V2MatchInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.matchid);
    writer.uint32(16).uint32(message.matchtime);
    if (
      message.watchablematchinfo !== undefined &&
      message.watchablematchinfo !== undefined
    ) {
      WatchableMatchInfo.encode(
        message.watchablematchinfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (
      message.roundstatsLegacy !== undefined &&
      message.roundstatsLegacy !== undefined
    ) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2MatchInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2MatchInfo
    } as CDataGCCStrike15V2MatchInfo;
    message.roundstatsall = [];
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
          message.roundstatsLegacy = CMsgGCCStrike15V2MatchmakingServerRoundStats.decode(
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
  }
};

export const CDataGCCStrike15V2TournamentGroupTeam = {
  encode(
    message: CDataGCCStrike15V2TournamentGroupTeam,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.teamId);
    writer.uint32(16).int32(message.score);
    writer.uint32(24).bool(message.correctpick);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentGroupTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentGroupTeam
    } as CDataGCCStrike15V2TournamentGroupTeam;
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
  }
};

export const CDataGCCStrike15V2TournamentGroup = {
  encode(
    message: CDataGCCStrike15V2TournamentGroup,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.groupid);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.desc);
    writer.uint32(32).uint32(message.picks_deprecated);
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
    writer.uint32(56).uint32(message.picklockuntiltime);
    writer.uint32(64).uint32(message.pickableteams);
    writer.uint32(72).uint32(message.pointsPerPick);
    for (const v of message.picks) {
      CDataGCCStrike15V2TournamentGroup_Picks.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentGroup
    } as CDataGCCStrike15V2TournamentGroup;
    message.teams = [];
    message.stageIds = [];
    message.picks = [];
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
          message.picks_deprecated = reader.uint32();
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentGroup_Picks {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentGroup_Picks
    } as CDataGCCStrike15V2TournamentGroup_Picks;
    message.pickids = [];
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
  }
};

export const CDataGCCStrike15V2TournamentSection = {
  encode(
    message: CDataGCCStrike15V2TournamentSection,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.sectionid);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.desc);
    for (const v of message.groups) {
      CDataGCCStrike15V2TournamentGroup.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentSection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentSection
    } as CDataGCCStrike15V2TournamentSection;
    message.groups = [];
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
  }
};

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
    if (
      message.tournamentEvent !== undefined &&
      message.tournamentEvent !== undefined
    ) {
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
    input: Uint8Array | Reader,
    length?: number
  ): CDataGCCStrike15V2TournamentInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCDataGCCStrike15V2TournamentInfo
    } as CDataGCCStrike15V2TournamentInfo;
    message.sections = [];
    message.tournamentTeams = [];
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
  }
};

export const CMsgGCCStrike15V2MatchList = {
  encode(
    message: CMsgGCCStrike15V2MatchList,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.msgrequestid);
    writer.uint32(16).uint32(message.accountid);
    writer.uint32(24).uint32(message.servertime);
    for (const v of message.matches) {
      CDataGCCStrike15V2MatchInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.streams) {
      TournamentTeam.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (
      message.tournamentinfo !== undefined &&
      message.tournamentinfo !== undefined
    ) {
      CDataGCCStrike15V2TournamentInfo.encode(
        message.tournamentinfo,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2MatchList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2MatchList
    } as CMsgGCCStrike15V2MatchList;
    message.matches = [];
    message.streams = [];
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
  }
};

export const CMsgGCCStrike15V2Predictions = {
  encode(
    message: CMsgGCCStrike15V2Predictions,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eventId);
    for (const v of message.groupMatchTeamPicks) {
      CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Predictions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Predictions
    } as CMsgGCCStrike15V2Predictions;
    message.groupMatchTeamPicks = [];
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
  }
};

export const CMsgGCCStrike15V2Predictions_GroupMatchTeamPick = {
  encode(
    message: CMsgGCCStrike15V2Predictions_GroupMatchTeamPick,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.sectionid);
    writer.uint32(16).int32(message.groupid);
    writer.uint32(24).int32(message.index);
    writer.uint32(32).int32(message.teamid);
    writer.uint32(40).uint64(message.itemid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Predictions_GroupMatchTeamPick {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick
    } as CMsgGCCStrike15V2Predictions_GroupMatchTeamPick;
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
  }
};

export const CMsgGCCStrike15V2Fantasy = {
  encode(
    message: CMsgGCCStrike15V2Fantasy,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eventId);
    for (const v of message.teams) {
      CMsgGCCStrike15V2Fantasy_FantasyTeam.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Fantasy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Fantasy
    } as CMsgGCCStrike15V2Fantasy;
    message.teams = [];
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
  }
};

export const CMsgGCCStrike15V2Fantasy_FantasySlot = {
  encode(
    message: CMsgGCCStrike15V2Fantasy_FantasySlot,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(16).int32(message.pick);
    writer.uint32(24).uint64(message.itemid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Fantasy_FantasySlot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Fantasy_FantasySlot
    } as CMsgGCCStrike15V2Fantasy_FantasySlot;
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
  }
};

export const CMsgGCCStrike15V2Fantasy_FantasyTeam = {
  encode(
    message: CMsgGCCStrike15V2Fantasy_FantasyTeam,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.sectionid);
    for (const v of message.slots) {
      CMsgGCCStrike15V2Fantasy_FantasySlot.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Fantasy_FantasyTeam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Fantasy_FantasyTeam
    } as CMsgGCCStrike15V2Fantasy_FantasyTeam;
    message.slots = [];
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
  }
};

export const CAttributeString = {
  encode(message: CAttributeString, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CAttributeString {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCAttributeString } as CAttributeString;
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
  }
};

export const CMsgCStrike15Welcome = {
  encode(
    message: CMsgCStrike15Welcome,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(40).uint32(message.storeItemHash);
    writer.uint32(48).uint32(message.timeplayedconsecutively);
    writer.uint32(80).uint32(message.timeFirstPlayed);
    writer.uint32(96).uint32(message.lastTimePlayed);
    writer.uint32(104).uint32(message.lastIpAddress);
    writer.uint32(144).uint64(message.gscookieid);
    writer.uint32(152).uint64(message.uniqueid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgCStrike15Welcome {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgCStrike15Welcome } as CMsgCStrike15Welcome;
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
  }
};

export const CMsgGCCStrike15V2ClientVarValueNotificationInfo = {
  encode(
    message: CMsgGCCStrike15V2ClientVarValueNotificationInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.valueName);
    writer.uint32(16).int32(message.valueInt);
    writer.uint32(24).uint32(message.serverAddr);
    writer.uint32(32).uint32(message.serverPort);
    for (const v of message.chokedBlocks) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientVarValueNotificationInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientVarValueNotificationInfo
    } as CMsgGCCStrike15V2ClientVarValueNotificationInfo;
    message.chokedBlocks = [];
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
  }
};

export const CMsgGCCStrike15V2ServerVarValueNotificationInfo = {
  encode(
    message: CMsgGCCStrike15V2ServerVarValueNotificationInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(18).fork();
    for (const v of message.viewangles) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(24).uint32(message.type);
    writer.uint32(34).fork();
    for (const v of message.userdata) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ServerVarValueNotificationInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ServerVarValueNotificationInfo
    } as CMsgGCCStrike15V2ServerVarValueNotificationInfo;
    message.viewangles = [];
    message.userdata = [];
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
  }
};

export const CMsgGCCStrike15V2GiftsLeaderboardRequest = {
  encode(
    _: CMsgGCCStrike15V2GiftsLeaderboardRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GiftsLeaderboardRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GiftsLeaderboardRequest
    } as CMsgGCCStrike15V2GiftsLeaderboardRequest;
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

export const CMsgGCCStrike15V2GiftsLeaderboardResponse = {
  encode(
    message: CMsgGCCStrike15V2GiftsLeaderboardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.servertime);
    writer.uint32(16).uint32(message.timePeriodSeconds);
    writer.uint32(24).uint32(message.totalGiftsGiven);
    writer.uint32(32).uint32(message.totalGivers);
    for (const v of message.entries) {
      CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GiftsLeaderboardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GiftsLeaderboardResponse
    } as CMsgGCCStrike15V2GiftsLeaderboardResponse;
    message.entries = [];
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
  }
};

export const CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry = {
  encode(
    message: CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint32(message.gifts);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry
    } as CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry;
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
  }
};

export const CMsgGCCStrike15V2ClientSubmitSurveyVote = {
  encode(
    message: CMsgGCCStrike15V2ClientSubmitSurveyVote,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.surveyId);
    writer.uint32(16).uint32(message.vote);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientSubmitSurveyVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientSubmitSurveyVote
    } as CMsgGCCStrike15V2ClientSubmitSurveyVote;
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
  }
};

export const CMsgGCCStrike15V2Server2GCClientValidate = {
  encode(
    message: CMsgGCCStrike15V2Server2GCClientValidate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Server2GCClientValidate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Server2GCClientValidate
    } as CMsgGCCStrike15V2Server2GCClientValidate;
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
  }
};

export const CMsgGCCStrike15V2GC2ClientTournamentInfo = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientTournamentInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eventid);
    writer.uint32(16).uint32(message.stageid);
    writer.uint32(24).uint32(message.gameType);
    writer.uint32(34).fork();
    for (const v of message.teamids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientTournamentInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ClientTournamentInfo
    } as CMsgGCCStrike15V2GC2ClientTournamentInfo;
    message.teamids = [];
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
  }
};

export const CSOEconCoupon = {
  encode(message: CSOEconCoupon, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.entryid);
    writer.uint32(16).uint32(message.defidx);
    writer.uint32(29).fixed32(message.expirationDate);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSOEconCoupon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSOEconCoupon } as CSOEconCoupon;
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
  }
};

export const CSOQuestProgress = {
  encode(message: CSOQuestProgress, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.questid);
    writer.uint32(16).uint32(message.pointsRemaining);
    writer.uint32(24).uint32(message.bonusPoints);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSOQuestProgress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSOQuestProgress } as CSOQuestProgress;
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
  }
};

export const CSOAccountSeasonalOperation = {
  encode(
    message: CSOAccountSeasonalOperation,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.seasonValue);
    writer.uint32(16).uint32(message.tierUnlocked);
    writer.uint32(24).uint32(message.premiumTiers);
    writer.uint32(32).uint32(message.missionId);
    writer.uint32(40).uint32(message.missionsCompleted);
    writer.uint32(48).uint32(message.redeemableBalance);
    writer.uint32(56).uint32(message.seasonPassTime);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSOAccountSeasonalOperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSOAccountSeasonalOperation
    } as CSOAccountSeasonalOperation;
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
  }
};

export const CSOAccountRecurringSubscription = {
  encode(
    message: CSOAccountRecurringSubscription,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.timeNextCycle);
    writer.uint32(16).uint32(message.timeInitiated);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CSOAccountRecurringSubscription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCSOAccountRecurringSubscription
    } as CSOAccountRecurringSubscription;
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
  }
};

export const CSOPersonaDataPublic = {
  encode(
    message: CSOPersonaDataPublic,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.playerLevel);
    if (
      message.commendation !== undefined &&
      message.commendation !== undefined
    ) {
      PlayerCommendationInfo.encode(
        message.commendation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    writer.uint32(24).bool(message.elevatedState);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CSOPersonaDataPublic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSOPersonaDataPublic } as CSOPersonaDataPublic;
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
  }
};

export const CMsgGCGlobalGameSubscribe = {
  encode(
    message: CMsgGCGlobalGameSubscribe,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.ticket);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGlobalGameSubscribe {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGlobalGameSubscribe
    } as CMsgGCGlobalGameSubscribe;
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
  }
};

export const CMsgGCGlobalGameUnsubscribe = {
  encode(
    message: CMsgGCGlobalGameUnsubscribe,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.timeleft);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGlobalGameUnsubscribe {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGlobalGameUnsubscribe
    } as CMsgGCGlobalGameUnsubscribe;
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
  }
};

export const CMsgGCGlobalGamePlay = {
  encode(
    message: CMsgGCGlobalGamePlay,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.ticket);
    writer.uint32(16).uint32(message.gametimems);
    writer.uint32(24).uint32(message.msperpoint);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgGCGlobalGamePlay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCGlobalGamePlay } as CMsgGCGlobalGamePlay;
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
  }
};

export const CMsgGCCStrike15V2AcknowledgePenalty = {
  encode(
    message: CMsgGCCStrike15V2AcknowledgePenalty,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.acknowledged);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2AcknowledgePenalty {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2AcknowledgePenalty
    } as CMsgGCCStrike15V2AcknowledgePenalty;
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
  }
};

export const CMsgGCCStrike15V2Client2GCRequestPrestigeCoin = {
  encode(
    message: CMsgGCCStrike15V2Client2GCRequestPrestigeCoin,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.defindex);
    writer.uint32(16).uint64(message.upgradeid);
    writer.uint32(24).uint32(message.hours);
    writer.uint32(32).uint32(message.prestigetime);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Client2GCRequestPrestigeCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin
    } as CMsgGCCStrike15V2Client2GCRequestPrestigeCoin;
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
  }
};

export const CMsgGCCStrike15V2Client2GCStreamUnlock = {
  encode(
    message: CMsgGCCStrike15V2Client2GCStreamUnlock,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.ticket);
    writer.uint32(16).int32(message.os);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2Client2GCStreamUnlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2Client2GCStreamUnlock
    } as CMsgGCCStrike15V2Client2GCStreamUnlock;
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
  }
};

export const CMsgGCCStrike15V2ClientToGCRequestElevate = {
  encode(
    message: CMsgGCCStrike15V2ClientToGCRequestElevate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.stage);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientToGCRequestElevate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientToGCRequestElevate
    } as CMsgGCCStrike15V2ClientToGCRequestElevate;
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
  }
};

export const CMsgGCCStrike15V2ClientToGCChat = {
  encode(
    message: CMsgGCCStrike15V2ClientToGCChat,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.matchId);
    writer.uint32(18).string(message.text);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientToGCChat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientToGCChat
    } as CMsgGCCStrike15V2ClientToGCChat;
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
  }
};

export const CMsgGCCStrike15V2GCToClientChat = {
  encode(
    message: CMsgGCCStrike15V2GCToClientChat,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountId);
    writer.uint32(18).string(message.text);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GCToClientChat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GCToClientChat
    } as CMsgGCCStrike15V2GCToClientChat;
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
  }
};

export const CMsgGCCStrike15V2ClientAuthKeyCode = {
  encode(
    message: CMsgGCCStrike15V2ClientAuthKeyCode,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eventid);
    writer.uint32(18).string(message.code);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientAuthKeyCode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientAuthKeyCode
    } as CMsgGCCStrike15V2ClientAuthKeyCode;
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
  }
};

export const CMsgGCCStrike15GotvSyncPacket = {
  encode(
    message: CMsgGCCStrike15GotvSyncPacket,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined && message.data !== undefined) {
      CEngineGotvSyncPacket.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15GotvSyncPacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15GotvSyncPacket
    } as CMsgGCCStrike15GotvSyncPacket;
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
  }
};

export const PlayerDecalDigitalSignature = {
  encode(
    message: PlayerDecalDigitalSignature,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).bytes(message.signature);
    writer.uint32(16).uint32(message.accountid);
    writer.uint32(24).uint32(message.rtime);
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
    writer.uint32(56).uint32(message.txDefidx);
    writer.uint32(64).int32(message.entindex);
    writer.uint32(72).uint32(message.hitbox);
    writer.uint32(85).float(message.creationtime);
    writer.uint32(88).uint32(message.equipslot);
    writer.uint32(96).uint32(message.traceId);
    writer.uint32(106).fork();
    for (const v of message.normal) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(112).uint32(message.tintId);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): PlayerDecalDigitalSignature {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePlayerDecalDigitalSignature
    } as PlayerDecalDigitalSignature;
    message.endpos = [];
    message.startpos = [];
    message.right = [];
    message.normal = [];
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
  }
};

export const CMsgGCCStrike15V2ClientPlayerDecalSign = {
  encode(
    message: CMsgGCCStrike15V2ClientPlayerDecalSign,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== undefined && message.data !== undefined) {
      PlayerDecalDigitalSignature.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    writer.uint32(16).uint64(message.itemid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPlayerDecalSign {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPlayerDecalSign
    } as CMsgGCCStrike15V2ClientPlayerDecalSign;
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
  }
};

export const CMsgGCCStrike15V2ClientLogonFatalError = {
  encode(
    message: CMsgGCCStrike15V2ClientLogonFatalError,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.errorcode);
    writer.uint32(18).string(message.message);
    writer.uint32(26).string(message.country);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientLogonFatalError {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientLogonFatalError
    } as CMsgGCCStrike15V2ClientLogonFatalError;
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
  }
};

export const CMsgGCCStrike15V2ClientPollState = {
  encode(
    message: CMsgGCCStrike15V2ClientPollState,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.pollid);
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPollState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPollState
    } as CMsgGCCStrike15V2ClientPollState;
    message.names = [];
    message.values = [];
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
  }
};

export const CMsgGCCStrike15V2PartyRegister = {
  encode(
    message: CMsgGCCStrike15V2PartyRegister,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.id);
    writer.uint32(16).uint32(message.ver);
    writer.uint32(24).uint32(message.apr);
    writer.uint32(32).uint32(message.ark);
    writer.uint32(40).uint32(message.nby);
    writer.uint32(48).uint32(message.grp);
    writer.uint32(56).uint32(message.slots);
    writer.uint32(64).uint32(message.launcher);
    writer.uint32(72).uint32(message.gameType);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PartyRegister {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PartyRegister
    } as CMsgGCCStrike15V2PartyRegister;
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
  }
};

export const CMsgGCCStrike15V2PartySearch = {
  encode(
    message: CMsgGCCStrike15V2PartySearch,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.ver);
    writer.uint32(16).uint32(message.apr);
    writer.uint32(24).uint32(message.ark);
    writer.uint32(34).fork();
    for (const v of message.grps) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(40).uint32(message.launcher);
    writer.uint32(48).uint32(message.gameType);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PartySearch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PartySearch
    } as CMsgGCCStrike15V2PartySearch;
    message.grps = [];
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PartySearchResults {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PartySearchResults
    } as CMsgGCCStrike15V2PartySearchResults;
    message.entries = [];
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
  }
};

export const CMsgGCCStrike15V2PartySearchResults_Entry = {
  encode(
    message: CMsgGCCStrike15V2PartySearchResults_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.id);
    writer.uint32(16).uint32(message.grp);
    writer.uint32(24).uint32(message.gameType);
    writer.uint32(32).uint32(message.apr);
    writer.uint32(40).uint32(message.ark);
    writer.uint32(48).uint32(message.loc);
    writer.uint32(56).uint32(message.accountid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PartySearchResults_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PartySearchResults_Entry
    } as CMsgGCCStrike15V2PartySearchResults_Entry;
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
  }
};

export const CMsgGCCStrike15V2PartyInvite = {
  encode(
    message: CMsgGCCStrike15V2PartyInvite,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint32(message.lobbyid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2PartyInvite {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2PartyInvite
    } as CMsgGCCStrike15V2PartyInvite;
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
  }
};

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
    writer.uint32(16).uint32(message.servertime);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2AccountRequestCoPlays {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2AccountRequestCoPlays
    } as CMsgGCCStrike15V2AccountRequestCoPlays;
    message.players = [];
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
  }
};

export const CMsgGCCStrike15V2AccountRequestCoPlays_Player = {
  encode(
    message: CMsgGCCStrike15V2AccountRequestCoPlays_Player,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint32(message.rtcoplay);
    writer.uint32(24).bool(message.online);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2AccountRequestCoPlays_Player {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2AccountRequestCoPlays_Player
    } as CMsgGCCStrike15V2AccountRequestCoPlays_Player;
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
  }
};

export const CMsgGCCStrike15V2ClientToGCRequestTicket = {
  encode(
    message: CMsgGCCStrike15V2ClientToGCRequestTicket,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.authorizedSteamId);
    writer.uint32(21).fixed32(message.authorizedPublicIp);
    writer.uint32(25).fixed64(message.gameserverSteamId);
    writer.uint32(42).string(message.gameserverSdrRouting);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientToGCRequestTicket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientToGCRequestTicket
    } as CMsgGCCStrike15V2ClientToGCRequestTicket;
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
  }
};

export const CMsgGCToClientSteamDatagramTicket = {
  encode(
    message: CMsgGCToClientSteamDatagramTicket,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(130).bytes(message.serializedTicket);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCToClientSteamDatagramTicket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCToClientSteamDatagramTicket
    } as CMsgGCToClientSteamDatagramTicket;
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
  }
};

export const CMsgGCCStrike15V2ClientRequestOffers = {
  encode(
    _: CMsgGCCStrike15V2ClientRequestOffers,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestOffers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientRequestOffers
    } as CMsgGCCStrike15V2ClientRequestOffers;
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

export const CMsgGCCStrike15V2ClientRequestSouvenir = {
  encode(
    message: CMsgGCCStrike15V2ClientRequestSouvenir,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.itemid);
    writer.uint32(16).uint64(message.matchid);
    writer.uint32(24).int32(message.eventid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientRequestSouvenir {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientRequestSouvenir
    } as CMsgGCCStrike15V2ClientRequestSouvenir;
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
  }
};

export const CMsgGCCStrike15V2ClientAccountBalance = {
  encode(
    message: CMsgGCCStrike15V2ClientAccountBalance,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.amount);
    writer.uint32(18).string(message.url);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientAccountBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientAccountBalance
    } as CMsgGCCStrike15V2ClientAccountBalance;
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
  }
};

export const CMsgGCCStrike15V2ClientPartyJoinRelay = {
  encode(
    message: CMsgGCCStrike15V2ClientPartyJoinRelay,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint64(message.lobbyid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPartyJoinRelay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPartyJoinRelay
    } as CMsgGCCStrike15V2ClientPartyJoinRelay;
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPartyWarning {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPartyWarning
    } as CMsgGCCStrike15V2ClientPartyWarning;
    message.entries = [];
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
  }
};

export const CMsgGCCStrike15V2ClientPartyWarning_Entry = {
  encode(
    message: CMsgGCCStrike15V2ClientPartyWarning_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.accountid);
    writer.uint32(16).uint32(message.warntype);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPartyWarning_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPartyWarning_Entry
    } as CMsgGCCStrike15V2ClientPartyWarning_Entry;
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
  }
};

export const CMsgGCCStrike15V2SetEventFavorite = {
  encode(
    message: CMsgGCCStrike15V2SetEventFavorite,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.eventid);
    writer.uint32(16).bool(message.isFavorite);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2SetEventFavorite {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2SetEventFavorite
    } as CMsgGCCStrike15V2SetEventFavorite;
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
  }
};

export const CMsgGCCStrike15V2GetEventFavoritesRequest = {
  encode(
    message: CMsgGCCStrike15V2GetEventFavoritesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.allEvents);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GetEventFavoritesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GetEventFavoritesRequest
    } as CMsgGCCStrike15V2GetEventFavoritesRequest;
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
  }
};

export const CMsgGCCStrike15V2GetEventFavoritesResponse = {
  encode(
    message: CMsgGCCStrike15V2GetEventFavoritesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.allEvents);
    writer.uint32(18).string(message.jsonFavorites);
    writer.uint32(26).string(message.jsonFeatured);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GetEventFavoritesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GetEventFavoritesResponse
    } as CMsgGCCStrike15V2GetEventFavoritesResponse;
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPerfReport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPerfReport
    } as CMsgGCCStrike15V2ClientPerfReport;
    message.entries = [];
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
  }
};

export const CMsgGCCStrike15V2ClientPerfReport_Entry = {
  encode(
    message: CMsgGCCStrike15V2ClientPerfReport_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.perfcounter);
    writer.uint32(16).uint32(message.length);
    writer.uint32(26).bytes(message.reference);
    writer.uint32(34).bytes(message.actual);
    writer.uint32(40).uint32(message.sourceid);
    writer.uint32(48).uint32(message.status);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientPerfReport_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientPerfReport_Entry
    } as CMsgGCCStrike15V2ClientPerfReport_Entry;
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
  }
};

export const CVDiagnostic = {
  encode(message: CVDiagnostic, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.id);
    writer.uint32(16).uint32(message.extended);
    writer.uint32(24).uint64(message.value);
    writer.uint32(34).string(message.stringValue);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CVDiagnostic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCVDiagnostic } as CVDiagnostic;
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
  }
};

export const CMsgGCCStrike15V2ClientReportValidation = {
  encode(
    message: CMsgGCCStrike15V2ClientReportValidation,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.fileReport);
    writer.uint32(18).string(message.commandLine);
    writer.uint32(24).uint32(message.totalFiles);
    writer.uint32(32).uint32(message.internalError);
    writer.uint32(40).uint32(message.trustTime);
    writer.uint32(48).uint32(message.countPending);
    writer.uint32(56).uint32(message.countCompleted);
    writer.uint32(64).uint32(message.processId);
    writer.uint32(72).int32(message.osversion);
    writer.uint32(80).uint32(message.clientreportversion);
    writer.uint32(88).uint32(message.statusId);
    writer.uint32(96).uint32(message.diagnostic1);
    writer.uint32(104).uint64(message.diagnostic2);
    writer.uint32(112).uint64(message.diagnostic3);
    writer.uint32(122).string(message.lastLaunchData);
    writer.uint32(128).uint32(message.reportCount);
    writer.uint32(136).uint64(message.clientTime);
    writer.uint32(144).uint64(message.diagnostic4);
    writer.uint32(152).uint64(message.diagnostic5);
    for (const v of message.diagnostics) {
      CVDiagnostic.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2ClientReportValidation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2ClientReportValidation
    } as CMsgGCCStrike15V2ClientReportValidation;
    message.diagnostics = [];
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
  }
};

export const CMsgGCCStrike15V2GC2ClientRefuseSecureMode = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientRefuseSecureMode,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.fileReport);
    writer.uint32(16).bool(message.offerInsecureMode);
    writer.uint32(24).bool(message.offerSecureMode);
    writer.uint32(32).bool(message.showUnsignedUi);
    writer.uint32(40).bool(message.kickUser);
    writer.uint32(48).bool(message.showTrustedUi);
    writer.uint32(56).bool(message.showWarningNotTrusted);
    writer.uint32(64).bool(message.showWarningNotTrusted2);
    writer.uint32(74).string(message.filesPreventedTrusted);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientRefuseSecureMode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ClientRefuseSecureMode
    } as CMsgGCCStrike15V2GC2ClientRefuseSecureMode;
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
  }
};

export const CMsgGCCStrike15V2GC2ClientRequestValidation = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientRequestValidation,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.fullReport);
    writer.uint32(18).string(message.module);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientRequestValidation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ClientRequestValidation
    } as CMsgGCCStrike15V2GC2ClientRequestValidation;
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
  }
};

export const CMsgGCCStrike15V2GC2ClientInitSystem = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientInitSystem,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.load);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.outputname);
    writer.uint32(34).bytes(message.keyData);
    writer.uint32(42).bytes(message.shaHash);
    writer.uint32(48).int32(message.cookie);
    writer.uint32(58).string(message.manifest);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientInitSystem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ClientInitSystem
    } as CMsgGCCStrike15V2GC2ClientInitSystem;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  }
};

export const CMsgGCCStrike15V2GC2ClientInitSystemResponse = {
  encode(
    message: CMsgGCCStrike15V2GC2ClientInitSystemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.success);
    writer.uint32(18).string(message.diagnostic);
    writer.uint32(26).bytes(message.shaHash);
    writer.uint32(32).int32(message.response);
    writer.uint32(40).int32(message.errorCode1);
    writer.uint32(48).int32(message.errorCode2);
    writer.uint32(56).int64(message.handle);
    writer.uint32(64).int32(message.einitResult);
    writer.uint32(72).int32(message.auxSystem1);
    writer.uint32(80).int32(message.auxSystem2);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCStrike15V2GC2ClientInitSystemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCStrike15V2GC2ClientInitSystemResponse
    } as CMsgGCCStrike15V2GC2ClientInitSystemResponse;
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
  }
};
