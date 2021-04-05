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
}
export interface CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo {
    accountMvp: number;
}
export interface CMsgGCCStrike15V2MatchmakingClient2GCHello {
}
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
export interface CMsgGCCStrike15V2MatchListRequestCurrentLiveGames {
}
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
}
export interface CMsgGCCStrike15V2GiftsLeaderboardRequest {
}
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
export interface CMsgGCCStrike15V2ClientRequestOffers {
}
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
}
export interface CMsgGCCStrike15V2GC2ClientRequestValidation {
    fullReport: boolean;
    module: string;
}
export declare const protobufPackage = "";
export declare enum ECsgoGCMsg {
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
    k_EMsgGCCStrike15_StartAgreementSessionInGame = 9211
}
export declare enum ECsgoSteamUserStat {
    k_ECsgoSteamUserStat_XpEarnedGames = 1,
    k_ECsgoSteamUserStat_MatchWinsCompetitive = 2,
    k_ECsgoSteamUserStat_SurvivedDangerZone = 3
}
export declare enum EClientReportingVersion {
    k_EClientReportingVersion_OldVersion = 0,
    k_EClientReportingVersion_BetaVersion = 1,
    k_EClientReportingVersion_SupportsTrustedMode = 2
}
export declare const GameServerPing: {
    encode(message: GameServerPing, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): GameServerPing;
};
export declare const DataCenterPing: {
    encode(message: DataCenterPing, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): DataCenterPing;
};
export declare const DetailedSearchStatistic: {
    encode(message: DetailedSearchStatistic, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): DetailedSearchStatistic;
};
export declare const TournamentPlayer: {
    encode(message: TournamentPlayer, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): TournamentPlayer;
};
export declare const TournamentTeam: {
    encode(message: TournamentTeam, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): TournamentTeam;
};
export declare const TournamentEvent: {
    encode(message: TournamentEvent, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): TournamentEvent;
};
export declare const GlobalStatistics: {
    encode(message: GlobalStatistics, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): GlobalStatistics;
};
export declare const OperationalStatisticDescription: {
    encode(message: OperationalStatisticDescription, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): OperationalStatisticDescription;
};
export declare const OperationalStatisticElement: {
    encode(message: OperationalStatisticElement, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): OperationalStatisticElement;
};
export declare const OperationalStatisticsPacket: {
    encode(message: OperationalStatisticsPacket, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): OperationalStatisticsPacket;
};
export declare const PlayerRankingInfo: {
    encode(message: PlayerRankingInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PlayerRankingInfo;
};
export declare const PlayerCommendationInfo: {
    encode(message: PlayerCommendationInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PlayerCommendationInfo;
};
export declare const PlayerMedalsInfo: {
    encode(message: PlayerMedalsInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PlayerMedalsInfo;
};
export declare const AccountActivity: {
    encode(message: AccountActivity, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): AccountActivity;
};
export declare const TournamentMatchSetup: {
    encode(message: TournamentMatchSetup, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): TournamentMatchSetup;
};
export declare const ServerHltvInfo: {
    encode(message: ServerHltvInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ServerHltvInfo;
};
export declare const IpAddressMask: {
    encode(message: IpAddressMask, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): IpAddressMask;
};
export declare const CMsgCsgoSteamUserStatChange: {
    encode(message: CMsgCsgoSteamUserStatChange, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgCsgoSteamUserStatChange;
};
export declare const XpProgressData: {
    encode(message: XpProgressData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): XpProgressData;
};
export declare const MatchEndItemUpdates: {
    encode(message: MatchEndItemUpdates, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): MatchEndItemUpdates;
};
export declare const ScoreLeaderboardData: {
    encode(message: ScoreLeaderboardData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ScoreLeaderboardData;
};
export declare const ScoreLeaderboardData_Entry: {
    encode(message: ScoreLeaderboardData_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ScoreLeaderboardData_Entry;
};
export declare const ScoreLeaderboardData_AccountEntries: {
    encode(message: ScoreLeaderboardData_AccountEntries, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ScoreLeaderboardData_AccountEntries;
};
export declare const PlayerQuestData: {
    encode(message: PlayerQuestData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PlayerQuestData;
};
export declare const PlayerQuestData_QuestItemData: {
    encode(message: PlayerQuestData_QuestItemData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PlayerQuestData_QuestItemData;
};
export declare const DeepPlayerStatsEntry: {
    encode(message: DeepPlayerStatsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): DeepPlayerStatsEntry;
};
export declare const DeepPlayerMatchEvent: {
    encode(message: DeepPlayerMatchEvent, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): DeepPlayerMatchEvent;
};
export declare const CMsgGCServerQuestUpdateData: {
    encode(message: CMsgGCServerQuestUpdateData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCServerQuestUpdateData;
};
export declare const CMsgGCCStrike15V2MatchmakingGCOperationalStats: {
    encode(message: CMsgGCCStrike15V2MatchmakingGCOperationalStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGCOperationalStats;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ServerConfirm: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ServerConfirm, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ServerConfirm;
};
export declare const CMsgGCCStrike15V2GC2ServerReservationUpdate: {
    encode(message: CMsgGCCStrike15V2GC2ServerReservationUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GC2ServerReservationUpdate;
};
export declare const CMsgGCCStrike15V2MatchmakingStart: {
    encode(message: CMsgGCCStrike15V2MatchmakingStart, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingStart;
};
export declare const CMsgGCCStrike15V2MatchmakingStop: {
    encode(message: CMsgGCCStrike15V2MatchmakingStop, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingStop;
};
export declare const CMsgGCCStrike15V2MatchmakingClient2ServerPing: {
    encode(message: CMsgGCCStrike15V2MatchmakingClient2ServerPing, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingClient2ServerPing;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ClientUpdate: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note;
};
export declare const CDataGCCStrike15V2TournamentMatchDraft: {
    encode(message: CDataGCCStrike15V2TournamentMatchDraft, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentMatchDraft;
};
export declare const CDataGCCStrike15V2TournamentMatchDraft_Entry: {
    encode(message: CDataGCCStrike15V2TournamentMatchDraft_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentMatchDraft_Entry;
};
export declare const CPreMatchInfoData: {
    encode(message: CPreMatchInfoData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CPreMatchInfoData;
};
export declare const CPreMatchInfoData_TeamStats: {
    encode(message: CPreMatchInfoData_TeamStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CPreMatchInfoData_TeamStats;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ServerReserve: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ServerReserve, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ServerReserve;
};
export declare const CMsgGCCStrike15V2MatchmakingServerReservationResponse: {
    encode(message: CMsgGCCStrike15V2MatchmakingServerReservationResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingServerReservationResponse;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ClientReserve: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ClientReserve, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ClientReserve;
};
export declare const CMsgGCCStrike15V2MatchmakingServerRoundStats: {
    encode(message: CMsgGCCStrike15V2MatchmakingServerRoundStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingServerRoundStats;
};
export declare const CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo: {
    encode(message: CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo;
};
export declare const CMsgGCCStrike15V2MatchmakingClient2GCHello: {
    encode(_: CMsgGCCStrike15V2MatchmakingClient2GCHello, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingClient2GCHello;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ClientHello: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ClientHello, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ClientHello;
};
export declare const CMsgGCCStrike15V2AccountPrivacySettings: {
    encode(message: CMsgGCCStrike15V2AccountPrivacySettings, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2AccountPrivacySettings;
};
export declare const CMsgGCCStrike15V2AccountPrivacySettings_Setting: {
    encode(message: CMsgGCCStrike15V2AccountPrivacySettings_Setting, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2AccountPrivacySettings_Setting;
};
export declare const CMsgGCCStrike15V2MatchmakingGC2ClientAbandon: {
    encode(message: CMsgGCCStrike15V2MatchmakingGC2ClientAbandon, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingGC2ClientAbandon;
};
export declare const CMsgGCCStrike15V2ClientGCRankUpdate: {
    encode(message: CMsgGCCStrike15V2ClientGCRankUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientGCRankUpdate;
};
export declare const CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate: {
    encode(message: CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate;
};
export declare const CMsgGCCStrike15V2ServerNotificationForUserPenalty: {
    encode(message: CMsgGCCStrike15V2ServerNotificationForUserPenalty, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ServerNotificationForUserPenalty;
};
export declare const CMsgGCCStrike15V2ClientReportPlayer: {
    encode(message: CMsgGCCStrike15V2ClientReportPlayer, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientReportPlayer;
};
export declare const CMsgGCCStrike15V2ClientCommendPlayer: {
    encode(message: CMsgGCCStrike15V2ClientCommendPlayer, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientCommendPlayer;
};
export declare const CMsgGCCStrike15V2ClientReportServer: {
    encode(message: CMsgGCCStrike15V2ClientReportServer, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientReportServer;
};
export declare const CMsgGCCStrike15V2ClientReportResponse: {
    encode(message: CMsgGCCStrike15V2ClientReportResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientReportResponse;
};
export declare const CMsgGCCStrike15V2ClientRequestWatchInfoFriends: {
    encode(message: CMsgGCCStrike15V2ClientRequestWatchInfoFriends, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientRequestWatchInfoFriends;
};
export declare const WatchableMatchInfo: {
    encode(message: WatchableMatchInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): WatchableMatchInfo;
};
export declare const CMsgGCCStrike15V2ClientRequestJoinFriendData: {
    encode(message: CMsgGCCStrike15V2ClientRequestJoinFriendData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientRequestJoinFriendData;
};
export declare const CMsgGCCStrike15V2ClientRequestJoinServerData: {
    encode(message: CMsgGCCStrike15V2ClientRequestJoinServerData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientRequestJoinServerData;
};
export declare const CMsgGCCstrike15V2ClientRequestNewMission: {
    encode(message: CMsgGCCstrike15V2ClientRequestNewMission, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCstrike15V2ClientRequestNewMission;
};
export declare const CMsgGCCstrike15V2ClientRedeemMissionReward: {
    encode(message: CMsgGCCstrike15V2ClientRedeemMissionReward, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCstrike15V2ClientRedeemMissionReward;
};
export declare const CMsgGCCstrike15V2GC2ServerNotifyXPRewarded: {
    encode(message: CMsgGCCstrike15V2GC2ServerNotifyXPRewarded, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCstrike15V2GC2ServerNotifyXPRewarded;
};
export declare const CMsgGCCStrike15ClientDeepStats: {
    encode(message: CMsgGCCStrike15ClientDeepStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15ClientDeepStats;
};
export declare const CMsgGCCStrike15ClientDeepStats_DeepStatsRange: {
    encode(message: CMsgGCCStrike15ClientDeepStats_DeepStatsRange, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15ClientDeepStats_DeepStatsRange;
};
export declare const CMsgGCCStrike15ClientDeepStats_DeepStatsMatch: {
    encode(message: CMsgGCCStrike15ClientDeepStats_DeepStatsMatch, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15ClientDeepStats_DeepStatsMatch;
};
export declare const CMsgGCCStrike15V2WatchInfoUsers: {
    encode(message: CMsgGCCStrike15V2WatchInfoUsers, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2WatchInfoUsers;
};
export declare const CMsgGCCStrike15V2ClientRequestPlayersProfile: {
    encode(message: CMsgGCCStrike15V2ClientRequestPlayersProfile, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientRequestPlayersProfile;
};
export declare const CMsgGCCStrike15V2PlayersProfile: {
    encode(message: CMsgGCCStrike15V2PlayersProfile, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PlayersProfile;
};
export declare const CMsgGCCStrike15V2PlayerOverwatchCaseUpdate: {
    encode(message: CMsgGCCStrike15V2PlayerOverwatchCaseUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PlayerOverwatchCaseUpdate;
};
export declare const CMsgGCCStrike15V2PlayerOverwatchCaseAssignment: {
    encode(message: CMsgGCCStrike15V2PlayerOverwatchCaseAssignment, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PlayerOverwatchCaseAssignment;
};
export declare const CMsgGCCStrike15V2PlayerOverwatchCaseStatus: {
    encode(message: CMsgGCCStrike15V2PlayerOverwatchCaseStatus, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PlayerOverwatchCaseStatus;
};
export declare const CClientHeaderOverwatchEvidence: {
    encode(message: CClientHeaderOverwatchEvidence, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CClientHeaderOverwatchEvidence;
};
export declare const CMsgGCCStrike15V2GC2ClientTextMsg: {
    encode(message: CMsgGCCStrike15V2GC2ClientTextMsg, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GC2ClientTextMsg;
};
export declare const CMsgGCCStrike15V2Client2GCTextMsg: {
    encode(message: CMsgGCCStrike15V2Client2GCTextMsg, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Client2GCTextMsg;
};
export declare const CMsgGCCStrike15V2MatchEndRunRewardDrops: {
    encode(message: CMsgGCCStrike15V2MatchEndRunRewardDrops, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchEndRunRewardDrops;
};
export declare const CEconItemPreviewDataBlock: {
    encode(message: CEconItemPreviewDataBlock, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CEconItemPreviewDataBlock;
};
export declare const CEconItemPreviewDataBlock_Sticker: {
    encode(message: CEconItemPreviewDataBlock_Sticker, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CEconItemPreviewDataBlock_Sticker;
};
export declare const CMsgGCCStrike15V2MatchEndRewardDropsNotification: {
    encode(message: CMsgGCCStrike15V2MatchEndRewardDropsNotification, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchEndRewardDropsNotification;
};
export declare const CMsgItemAcknowledged: {
    encode(message: CMsgItemAcknowledged, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgItemAcknowledged;
};
export declare const CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest: {
    encode(message: CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest;
};
export declare const CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse: {
    encode(message: CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse;
};
export declare const CMsgGCCStrike15V2MatchListRequestCurrentLiveGames: {
    encode(_: CMsgGCCStrike15V2MatchListRequestCurrentLiveGames, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchListRequestCurrentLiveGames;
};
export declare const CMsgGCCStrike15V2MatchListRequestLiveGameForUser: {
    encode(message: CMsgGCCStrike15V2MatchListRequestLiveGameForUser, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchListRequestLiveGameForUser;
};
export declare const CMsgGCCStrike15V2MatchListRequestRecentUserGames: {
    encode(message: CMsgGCCStrike15V2MatchListRequestRecentUserGames, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchListRequestRecentUserGames;
};
export declare const CMsgGCCStrike15V2MatchListRequestTournamentGames: {
    encode(message: CMsgGCCStrike15V2MatchListRequestTournamentGames, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchListRequestTournamentGames;
};
export declare const CMsgGCCStrike15V2MatchListRequestFullGameInfo: {
    encode(message: CMsgGCCStrike15V2MatchListRequestFullGameInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchListRequestFullGameInfo;
};
export declare const CDataGCCStrike15V2MatchInfo: {
    encode(message: CDataGCCStrike15V2MatchInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2MatchInfo;
};
export declare const CDataGCCStrike15V2TournamentGroupTeam: {
    encode(message: CDataGCCStrike15V2TournamentGroupTeam, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentGroupTeam;
};
export declare const CDataGCCStrike15V2TournamentGroup: {
    encode(message: CDataGCCStrike15V2TournamentGroup, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentGroup;
};
export declare const CDataGCCStrike15V2TournamentGroup_Picks: {
    encode(message: CDataGCCStrike15V2TournamentGroup_Picks, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentGroup_Picks;
};
export declare const CDataGCCStrike15V2TournamentSection: {
    encode(message: CDataGCCStrike15V2TournamentSection, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentSection;
};
export declare const CDataGCCStrike15V2TournamentInfo: {
    encode(message: CDataGCCStrike15V2TournamentInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CDataGCCStrike15V2TournamentInfo;
};
export declare const CMsgGCCStrike15V2MatchList: {
    encode(message: CMsgGCCStrike15V2MatchList, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2MatchList;
};
export declare const CMsgGCCStrike15V2Predictions: {
    encode(message: CMsgGCCStrike15V2Predictions, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Predictions;
};
export declare const CMsgGCCStrike15V2Predictions_GroupMatchTeamPick: {
    encode(message: CMsgGCCStrike15V2Predictions_GroupMatchTeamPick, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Predictions_GroupMatchTeamPick;
};
export declare const CMsgGCCStrike15V2Fantasy: {
    encode(message: CMsgGCCStrike15V2Fantasy, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Fantasy;
};
export declare const CMsgGCCStrike15V2Fantasy_FantasySlot: {
    encode(message: CMsgGCCStrike15V2Fantasy_FantasySlot, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Fantasy_FantasySlot;
};
export declare const CMsgGCCStrike15V2Fantasy_FantasyTeam: {
    encode(message: CMsgGCCStrike15V2Fantasy_FantasyTeam, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Fantasy_FantasyTeam;
};
export declare const CAttributeString: {
    encode(message: CAttributeString, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CAttributeString;
};
export declare const CMsgCStrike15Welcome: {
    encode(message: CMsgCStrike15Welcome, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgCStrike15Welcome;
};
export declare const CMsgGCCStrike15V2ClientVarValueNotificationInfo: {
    encode(message: CMsgGCCStrike15V2ClientVarValueNotificationInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientVarValueNotificationInfo;
};
export declare const CMsgGCCStrike15V2ServerVarValueNotificationInfo: {
    encode(message: CMsgGCCStrike15V2ServerVarValueNotificationInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ServerVarValueNotificationInfo;
};
export declare const CMsgGCCStrike15V2GiftsLeaderboardRequest: {
    encode(_: CMsgGCCStrike15V2GiftsLeaderboardRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GiftsLeaderboardRequest;
};
export declare const CMsgGCCStrike15V2GiftsLeaderboardResponse: {
    encode(message: CMsgGCCStrike15V2GiftsLeaderboardResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GiftsLeaderboardResponse;
};
export declare const CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry: {
    encode(message: CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry;
};
export declare const CMsgGCCStrike15V2ClientSubmitSurveyVote: {
    encode(message: CMsgGCCStrike15V2ClientSubmitSurveyVote, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientSubmitSurveyVote;
};
export declare const CMsgGCCStrike15V2Server2GCClientValidate: {
    encode(message: CMsgGCCStrike15V2Server2GCClientValidate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Server2GCClientValidate;
};
export declare const CMsgGCCStrike15V2GC2ClientTournamentInfo: {
    encode(message: CMsgGCCStrike15V2GC2ClientTournamentInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GC2ClientTournamentInfo;
};
export declare const CSOEconCoupon: {
    encode(message: CSOEconCoupon, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSOEconCoupon;
};
export declare const CSOQuestProgress: {
    encode(message: CSOQuestProgress, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSOQuestProgress;
};
export declare const CSOAccountSeasonalOperation: {
    encode(message: CSOAccountSeasonalOperation, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSOAccountSeasonalOperation;
};
export declare const CSOPersonaDataPublic: {
    encode(message: CSOPersonaDataPublic, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CSOPersonaDataPublic;
};
export declare const CMsgGCGlobalGameSubscribe: {
    encode(message: CMsgGCGlobalGameSubscribe, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGlobalGameSubscribe;
};
export declare const CMsgGCGlobalGameUnsubscribe: {
    encode(message: CMsgGCGlobalGameUnsubscribe, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGlobalGameUnsubscribe;
};
export declare const CMsgGCGlobalGamePlay: {
    encode(message: CMsgGCGlobalGamePlay, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGlobalGamePlay;
};
export declare const CMsgGCCStrike15V2AcknowledgePenalty: {
    encode(message: CMsgGCCStrike15V2AcknowledgePenalty, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2AcknowledgePenalty;
};
export declare const CMsgGCCStrike15V2Client2GCRequestPrestigeCoin: {
    encode(message: CMsgGCCStrike15V2Client2GCRequestPrestigeCoin, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Client2GCRequestPrestigeCoin;
};
export declare const CMsgGCCStrike15V2Client2GCStreamUnlock: {
    encode(message: CMsgGCCStrike15V2Client2GCStreamUnlock, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2Client2GCStreamUnlock;
};
export declare const CMsgGCCStrike15V2ClientToGCRequestElevate: {
    encode(message: CMsgGCCStrike15V2ClientToGCRequestElevate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientToGCRequestElevate;
};
export declare const CMsgGCCStrike15V2ClientToGCChat: {
    encode(message: CMsgGCCStrike15V2ClientToGCChat, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientToGCChat;
};
export declare const CMsgGCCStrike15V2GCToClientChat: {
    encode(message: CMsgGCCStrike15V2GCToClientChat, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GCToClientChat;
};
export declare const CMsgGCCStrike15V2ClientAuthKeyCode: {
    encode(message: CMsgGCCStrike15V2ClientAuthKeyCode, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientAuthKeyCode;
};
export declare const CMsgGCCStrike15GotvSyncPacket: {
    encode(message: CMsgGCCStrike15GotvSyncPacket, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15GotvSyncPacket;
};
export declare const PlayerDecalDigitalSignature: {
    encode(message: PlayerDecalDigitalSignature, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PlayerDecalDigitalSignature;
};
export declare const CMsgGCCStrike15V2ClientPlayerDecalSign: {
    encode(message: CMsgGCCStrike15V2ClientPlayerDecalSign, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPlayerDecalSign;
};
export declare const CMsgGCCStrike15V2ClientLogonFatalError: {
    encode(message: CMsgGCCStrike15V2ClientLogonFatalError, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientLogonFatalError;
};
export declare const CMsgGCCStrike15V2ClientPollState: {
    encode(message: CMsgGCCStrike15V2ClientPollState, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPollState;
};
export declare const CMsgGCCStrike15V2PartyRegister: {
    encode(message: CMsgGCCStrike15V2PartyRegister, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PartyRegister;
};
export declare const CMsgGCCStrike15V2PartySearch: {
    encode(message: CMsgGCCStrike15V2PartySearch, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PartySearch;
};
export declare const CMsgGCCStrike15V2PartySearchResults: {
    encode(message: CMsgGCCStrike15V2PartySearchResults, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PartySearchResults;
};
export declare const CMsgGCCStrike15V2PartySearchResults_Entry: {
    encode(message: CMsgGCCStrike15V2PartySearchResults_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PartySearchResults_Entry;
};
export declare const CMsgGCCStrike15V2PartyInvite: {
    encode(message: CMsgGCCStrike15V2PartyInvite, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2PartyInvite;
};
export declare const CMsgGCCStrike15V2AccountRequestCoPlays: {
    encode(message: CMsgGCCStrike15V2AccountRequestCoPlays, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2AccountRequestCoPlays;
};
export declare const CMsgGCCStrike15V2AccountRequestCoPlays_Player: {
    encode(message: CMsgGCCStrike15V2AccountRequestCoPlays_Player, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2AccountRequestCoPlays_Player;
};
export declare const CMsgGCCStrike15V2ClientToGCRequestTicket: {
    encode(message: CMsgGCCStrike15V2ClientToGCRequestTicket, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientToGCRequestTicket;
};
export declare const CMsgGCToClientSteamDatagramTicket: {
    encode(message: CMsgGCToClientSteamDatagramTicket, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCToClientSteamDatagramTicket;
};
export declare const CMsgGCCStrike15V2ClientRequestOffers: {
    encode(_: CMsgGCCStrike15V2ClientRequestOffers, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientRequestOffers;
};
export declare const CMsgGCCStrike15V2ClientRequestSouvenir: {
    encode(message: CMsgGCCStrike15V2ClientRequestSouvenir, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientRequestSouvenir;
};
export declare const CMsgGCCStrike15V2ClientAccountBalance: {
    encode(message: CMsgGCCStrike15V2ClientAccountBalance, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientAccountBalance;
};
export declare const CMsgGCCStrike15V2ClientPartyJoinRelay: {
    encode(message: CMsgGCCStrike15V2ClientPartyJoinRelay, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPartyJoinRelay;
};
export declare const CMsgGCCStrike15V2ClientPartyWarning: {
    encode(message: CMsgGCCStrike15V2ClientPartyWarning, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPartyWarning;
};
export declare const CMsgGCCStrike15V2ClientPartyWarning_Entry: {
    encode(message: CMsgGCCStrike15V2ClientPartyWarning_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPartyWarning_Entry;
};
export declare const CMsgGCCStrike15V2SetEventFavorite: {
    encode(message: CMsgGCCStrike15V2SetEventFavorite, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2SetEventFavorite;
};
export declare const CMsgGCCStrike15V2GetEventFavoritesRequest: {
    encode(message: CMsgGCCStrike15V2GetEventFavoritesRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GetEventFavoritesRequest;
};
export declare const CMsgGCCStrike15V2GetEventFavoritesResponse: {
    encode(message: CMsgGCCStrike15V2GetEventFavoritesResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GetEventFavoritesResponse;
};
export declare const CMsgGCCStrike15V2ClientPerfReport: {
    encode(message: CMsgGCCStrike15V2ClientPerfReport, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPerfReport;
};
export declare const CMsgGCCStrike15V2ClientPerfReport_Entry: {
    encode(message: CMsgGCCStrike15V2ClientPerfReport_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientPerfReport_Entry;
};
export declare const CVDiagnostic: {
    encode(message: CVDiagnostic, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CVDiagnostic;
};
export declare const CMsgGCCStrike15V2ClientReportValidation: {
    encode(message: CMsgGCCStrike15V2ClientReportValidation, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2ClientReportValidation;
};
export declare const CMsgGCCStrike15V2GC2ClientRefuseSecureMode: {
    encode(message: CMsgGCCStrike15V2GC2ClientRefuseSecureMode, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GC2ClientRefuseSecureMode;
};
export declare const CMsgGCCStrike15V2GC2ClientRequestValidation: {
    encode(message: CMsgGCCStrike15V2GC2ClientRequestValidation, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCStrike15V2GC2ClientRequestValidation;
};
