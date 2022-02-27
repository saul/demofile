"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo = exports.CMsgGCCStrike15V2MatchmakingServerRoundStats = exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve = exports.CMsgGCCStrike15V2MatchmakingServerReservationResponse = exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve = exports.CPreMatchInfoData_TeamStats = exports.CPreMatchInfoData = exports.CDataGCCStrike15V2TournamentMatchDraft_Entry = exports.CDataGCCStrike15V2TournamentMatchDraft = exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note = exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate = exports.CMsgGCCStrike15V2MatchmakingClient2ServerPing = exports.CMsgGCCStrike15V2MatchmakingStop = exports.CMsgGCCStrike15V2MatchmakingStart = exports.CMsgGCCStrike15V2GC2ServerReservationUpdate = exports.CMsgGCCStrike15V2MatchmakingGC2ServerConfirm = exports.CMsgGCCStrike15V2MatchmakingGCOperationalStats = exports.CMsgGCServerQuestUpdateData = exports.DeepPlayerMatchEvent = exports.DeepPlayerStatsEntry = exports.PlayerQuestData_QuestItemData = exports.PlayerQuestData = exports.ScoreLeaderboardData_AccountEntries = exports.ScoreLeaderboardData_Entry = exports.ScoreLeaderboardData = exports.MatchEndItemUpdates = exports.XpProgressData = exports.CMsgCsgoSteamUserStatChange = exports.IpAddressMask = exports.ServerHltvInfo = exports.TournamentMatchSetup = exports.AccountActivity = exports.PlayerMedalsInfo = exports.PlayerCommendationInfo = exports.PlayerRankingInfo = exports.OperationalStatisticsPacket = exports.OperationalStatisticElement = exports.OperationalStatisticDescription = exports.GlobalStatistics = exports.TournamentEvent = exports.TournamentTeam = exports.TournamentPlayer = exports.DetailedSearchStatistic = exports.DataCenterPing = exports.GameServerPing = exports.EInitSystemResult = exports.EClientReportingVersion = exports.ECsgoSteamUserStat = exports.ECsgoGCMsg = exports.protobufPackage = void 0;
exports.CMsgGCCStrike15V2MatchList = exports.CDataGCCStrike15V2TournamentInfo = exports.CDataGCCStrike15V2TournamentSection = exports.CDataGCCStrike15V2TournamentGroup_Picks = exports.CDataGCCStrike15V2TournamentGroup = exports.CDataGCCStrike15V2TournamentGroupTeam = exports.CDataGCCStrike15V2MatchInfo = exports.CMsgGCCStrike15V2MatchListRequestFullGameInfo = exports.CMsgGCCStrike15V2MatchListRequestTournamentGames = exports.CMsgGCCStrike15V2MatchListRequestRecentUserGames = exports.CMsgGCCStrike15V2MatchListRequestLiveGameForUser = exports.CMsgGCCStrike15V2MatchListRequestCurrentLiveGames = exports.CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse = exports.CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest = exports.CMsgItemAcknowledged = exports.CMsgGCCStrike15V2MatchEndRewardDropsNotification = exports.CEconItemPreviewDataBlock_Sticker = exports.CEconItemPreviewDataBlock = exports.CMsgGCCStrike15V2MatchEndRunRewardDrops = exports.CMsgGCCStrike15V2Client2GCTextMsg = exports.CMsgGCCStrike15V2GC2ClientTextMsg = exports.CClientHeaderOverwatchEvidence = exports.CMsgGCCStrike15V2PlayerOverwatchCaseStatus = exports.CMsgGCCStrike15V2PlayerOverwatchCaseAssignment = exports.CMsgGCCStrike15V2PlayerOverwatchCaseUpdate = exports.CMsgGCCStrike15V2PlayersProfile = exports.CMsgGCCStrike15V2ClientRequestPlayersProfile = exports.CMsgGCCStrike15V2WatchInfoUsers = exports.CMsgGCCStrike15ClientDeepStats_DeepStatsMatch = exports.CMsgGCCStrike15ClientDeepStats_DeepStatsRange = exports.CMsgGCCStrike15ClientDeepStats = exports.CMsgGCCstrike15V2GC2ServerNotifyXPRewarded = exports.CMsgGCCstrike15V2ClientRedeemMissionReward = exports.CMsgGCCstrike15V2ClientRequestNewMission = exports.CMsgGCCStrike15V2ClientRequestJoinServerData = exports.CMsgGCCStrike15V2ClientRequestJoinFriendData = exports.WatchableMatchInfo = exports.CMsgGCCStrike15V2ClientRequestWatchInfoFriends = exports.CMsgGCCStrike15V2ClientReportResponse = exports.CMsgGCCStrike15V2ClientReportServer = exports.CMsgGCCStrike15V2ClientCommendPlayer = exports.CMsgGCCStrike15V2ClientReportPlayer = exports.CMsgGCCStrike15V2ServerNotificationForUserPenalty = exports.CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate = exports.CMsgGCCStrike15V2ClientGCRankUpdate = exports.CMsgGCCStrike15V2MatchmakingGC2ClientAbandon = exports.CMsgGCCStrike15V2AccountPrivacySettings_Setting = exports.CMsgGCCStrike15V2AccountPrivacySettings = exports.CMsgGCCStrike15V2MatchmakingGC2ClientHello = exports.CMsgGCCStrike15V2MatchmakingClient2GCHello = void 0;
exports.CMsgGCCStrike15V2ClientPartyWarning = exports.CMsgGCCStrike15V2ClientPartyJoinRelay = exports.CMsgGCCStrike15V2ClientAccountBalance = exports.CMsgGCCStrike15V2ClientRequestSouvenir = exports.CMsgGCCStrike15V2ClientRequestOffers = exports.CMsgGCToClientSteamDatagramTicket = exports.CMsgGCCStrike15V2ClientToGCRequestTicket = exports.CMsgGCCStrike15V2AccountRequestCoPlays_Player = exports.CMsgGCCStrike15V2AccountRequestCoPlays = exports.CMsgGCCStrike15V2PartyInvite = exports.CMsgGCCStrike15V2PartySearchResults_Entry = exports.CMsgGCCStrike15V2PartySearchResults = exports.CMsgGCCStrike15V2PartySearch = exports.CMsgGCCStrike15V2PartyRegister = exports.CMsgGCCStrike15V2ClientPollState = exports.CMsgGCCStrike15V2ClientLogonFatalError = exports.CMsgGCCStrike15V2ClientPlayerDecalSign = exports.PlayerDecalDigitalSignature = exports.CMsgGCCStrike15GotvSyncPacket = exports.CMsgGCCStrike15V2ClientAuthKeyCode = exports.CMsgGCCStrike15V2GCToClientChat = exports.CMsgGCCStrike15V2ClientToGCChat = exports.CMsgGCCStrike15V2ClientToGCRequestElevate = exports.CMsgGCCStrike15V2Client2GCStreamUnlock = exports.CMsgGCCStrike15V2Client2GCRequestPrestigeCoin = exports.CMsgGCCStrike15V2AcknowledgePenalty = exports.CMsgGCGlobalGamePlay = exports.CMsgGCGlobalGameUnsubscribe = exports.CMsgGCGlobalGameSubscribe = exports.CSOPersonaDataPublic = exports.CSOAccountRecurringSubscription = exports.CSOAccountSeasonalOperation = exports.CSOQuestProgress = exports.CSOEconCoupon = exports.CMsgGCCStrike15V2GC2ClientTournamentInfo = exports.CMsgGCCStrike15V2Server2GCClientValidate = exports.CMsgGCCStrike15V2ClientSubmitSurveyVote = exports.CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry = exports.CMsgGCCStrike15V2GiftsLeaderboardResponse = exports.CMsgGCCStrike15V2GiftsLeaderboardRequest = exports.CMsgGCCStrike15V2ServerVarValueNotificationInfo = exports.CMsgGCCStrike15V2ClientVarValueNotificationInfo = exports.CMsgCStrike15Welcome = exports.CAttributeString = exports.CMsgGCCStrike15V2Fantasy_FantasyTeam = exports.CMsgGCCStrike15V2Fantasy_FantasySlot = exports.CMsgGCCStrike15V2Fantasy = exports.CMsgGCCStrike15V2Predictions_GroupMatchTeamPick = exports.CMsgGCCStrike15V2Predictions = exports.CMsgGCCStrike15V2MatchListTournamentOperatorMgmt = void 0;
exports.CMsgGCCStrike15V2GC2ClientInitSystemResponse = exports.CMsgGCCStrike15V2GC2ClientInitSystem = exports.CMsgGCCStrike15V2GC2ClientRequestValidation = exports.CMsgGCCStrike15V2GC2ClientRefuseSecureMode = exports.CMsgGCCStrike15V2ClientReportValidation = exports.CVDiagnostic = exports.CMsgGCCStrike15V2ClientPerfReport_Entry = exports.CMsgGCCStrike15V2ClientPerfReport = exports.CMsgGCCStrike15V2GetEventFavoritesResponse = exports.CMsgGCCStrike15V2GetEventFavoritesRequest = exports.CMsgGCCStrike15V2SetEventFavorite = exports.CMsgGCCStrike15V2ClientPartyWarning_Entry = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
const engine_gcmessages_1 = require("./engine_gcmessages");
exports.protobufPackage = "";
var ECsgoGCMsg;
(function (ECsgoGCMsg) {
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Base"] = 9100] = "k_EMsgGCCStrike15_v2_Base";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingStart"] = 9101] = "k_EMsgGCCStrike15_v2_MatchmakingStart";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingStop"] = 9102] = "k_EMsgGCCStrike15_v2_MatchmakingStop";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingClient2ServerPing"] = 9103] = "k_EMsgGCCStrike15_v2_MatchmakingClient2ServerPing";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate"] = 9104] = "k_EMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingServerReservationResponse"] = 9106] = "k_EMsgGCCStrike15_v2_MatchmakingServerReservationResponse";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingGC2ClientReserve"] = 9107] = "k_EMsgGCCStrike15_v2_MatchmakingGC2ClientReserve";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingClient2GCHello"] = 9109] = "k_EMsgGCCStrike15_v2_MatchmakingClient2GCHello";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingGC2ClientHello"] = 9110] = "k_EMsgGCCStrike15_v2_MatchmakingGC2ClientHello";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon"] = 9112] = "k_EMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingGCOperationalStats"] = 9115] = "k_EMsgGCCStrike15_v2_MatchmakingGCOperationalStats";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate"] = 9117] = "k_EMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ServerNotificationForUserPenalty"] = 9118] = "k_EMsgGCCStrike15_v2_ServerNotificationForUserPenalty";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientReportPlayer"] = 9119] = "k_EMsgGCCStrike15_v2_ClientReportPlayer";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientReportServer"] = 9120] = "k_EMsgGCCStrike15_v2_ClientReportServer";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientCommendPlayer"] = 9121] = "k_EMsgGCCStrike15_v2_ClientCommendPlayer";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientReportResponse"] = 9122] = "k_EMsgGCCStrike15_v2_ClientReportResponse";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientCommendPlayerQuery"] = 9123] = "k_EMsgGCCStrike15_v2_ClientCommendPlayerQuery";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientCommendPlayerQueryResponse"] = 9124] = "k_EMsgGCCStrike15_v2_ClientCommendPlayerQueryResponse";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_WatchInfoUsers"] = 9126] = "k_EMsgGCCStrike15_v2_WatchInfoUsers";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestPlayersProfile"] = 9127] = "k_EMsgGCCStrike15_v2_ClientRequestPlayersProfile";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_PlayersProfile"] = 9128] = "k_EMsgGCCStrike15_v2_PlayersProfile";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate"] = 9131] = "k_EMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment"] = 9132] = "k_EMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_PlayerOverwatchCaseStatus"] = 9133] = "k_EMsgGCCStrike15_v2_PlayerOverwatchCaseStatus";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientTextMsg"] = 9134] = "k_EMsgGCCStrike15_v2_GC2ClientTextMsg";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Client2GCTextMsg"] = 9135] = "k_EMsgGCCStrike15_v2_Client2GCTextMsg";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchEndRunRewardDrops"] = 9136] = "k_EMsgGCCStrike15_v2_MatchEndRunRewardDrops";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchEndRewardDropsNotification"] = 9137] = "k_EMsgGCCStrike15_v2_MatchEndRewardDropsNotification";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestWatchInfoFriends2"] = 9138] = "k_EMsgGCCStrike15_v2_ClientRequestWatchInfoFriends2";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchList"] = 9139] = "k_EMsgGCCStrike15_v2_MatchList";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames"] = 9140] = "k_EMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListRequestRecentUserGames"] = 9141] = "k_EMsgGCCStrike15_v2_MatchListRequestRecentUserGames";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ServerReservationUpdate"] = 9142] = "k_EMsgGCCStrike15_v2_GC2ServerReservationUpdate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientVarValueNotificationInfo"] = 9144] = "k_EMsgGCCStrike15_v2_ClientVarValueNotificationInfo";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListRequestTournamentGames"] = 9146] = "k_EMsgGCCStrike15_v2_MatchListRequestTournamentGames";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListRequestFullGameInfo"] = 9147] = "k_EMsgGCCStrike15_v2_MatchListRequestFullGameInfo";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GiftsLeaderboardRequest"] = 9148] = "k_EMsgGCCStrike15_v2_GiftsLeaderboardRequest";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GiftsLeaderboardResponse"] = 9149] = "k_EMsgGCCStrike15_v2_GiftsLeaderboardResponse";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ServerVarValueNotificationInfo"] = 9150] = "k_EMsgGCCStrike15_v2_ServerVarValueNotificationInfo";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientSubmitSurveyVote"] = 9152] = "k_EMsgGCCStrike15_v2_ClientSubmitSurveyVote";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Server2GCClientValidate"] = 9153] = "k_EMsgGCCStrike15_v2_Server2GCClientValidate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListRequestLiveGameForUser"] = 9154] = "k_EMsgGCCStrike15_v2_MatchListRequestLiveGameForUser";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest"] = 9156] = "k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse"] = 9157] = "k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_AccountPrivacySettings"] = 9158] = "k_EMsgGCCStrike15_v2_AccountPrivacySettings";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_SetMyActivityInfo"] = 9159] = "k_EMsgGCCStrike15_v2_SetMyActivityInfo";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListRequestTournamentPredictions"] = 9160] = "k_EMsgGCCStrike15_v2_MatchListRequestTournamentPredictions";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListUploadTournamentPredictions"] = 9161] = "k_EMsgGCCStrike15_v2_MatchListUploadTournamentPredictions";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_DraftSummary"] = 9162] = "k_EMsgGCCStrike15_v2_DraftSummary";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestJoinFriendData"] = 9163] = "k_EMsgGCCStrike15_v2_ClientRequestJoinFriendData";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestJoinServerData"] = 9164] = "k_EMsgGCCStrike15_v2_ClientRequestJoinServerData";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestNewMission"] = 9165] = "k_EMsgGCCStrike15_v2_ClientRequestNewMission";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientTournamentInfo"] = 9167] = "k_EMsgGCCStrike15_v2_GC2ClientTournamentInfo";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGC_GlobalGame_Subscribe"] = 9168] = "k_EMsgGC_GlobalGame_Subscribe";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGC_GlobalGame_Unsubscribe"] = 9169] = "k_EMsgGC_GlobalGame_Unsubscribe";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGC_GlobalGame_Play"] = 9170] = "k_EMsgGC_GlobalGame_Play";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_AcknowledgePenalty"] = 9171] = "k_EMsgGCCStrike15_v2_AcknowledgePenalty";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin"] = 9172] = "k_EMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientGlobalStats"] = 9173] = "k_EMsgGCCStrike15_v2_GC2ClientGlobalStats";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Client2GCStreamUnlock"] = 9174] = "k_EMsgGCCStrike15_v2_Client2GCStreamUnlock";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_FantasyRequestClientData"] = 9175] = "k_EMsgGCCStrike15_v2_FantasyRequestClientData";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_FantasyUpdateClientData"] = 9176] = "k_EMsgGCCStrike15_v2_FantasyUpdateClientData";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GCToClientSteamdatagramTicket"] = 9177] = "k_EMsgGCCStrike15_v2_GCToClientSteamdatagramTicket";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientToGCRequestTicket"] = 9178] = "k_EMsgGCCStrike15_v2_ClientToGCRequestTicket";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientToGCRequestElevate"] = 9179] = "k_EMsgGCCStrike15_v2_ClientToGCRequestElevate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GlobalChat"] = 9180] = "k_EMsgGCCStrike15_v2_GlobalChat";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GlobalChat_Subscribe"] = 9181] = "k_EMsgGCCStrike15_v2_GlobalChat_Subscribe";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GlobalChat_Unsubscribe"] = 9182] = "k_EMsgGCCStrike15_v2_GlobalChat_Unsubscribe";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientAuthKeyCode"] = 9183] = "k_EMsgGCCStrike15_v2_ClientAuthKeyCode";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GotvSyncPacket"] = 9184] = "k_EMsgGCCStrike15_v2_GotvSyncPacket";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientPlayerDecalSign"] = 9185] = "k_EMsgGCCStrike15_v2_ClientPlayerDecalSign";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientLogonFatalError"] = 9187] = "k_EMsgGCCStrike15_v2_ClientLogonFatalError";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientPollState"] = 9188] = "k_EMsgGCCStrike15_v2_ClientPollState";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Party_Register"] = 9189] = "k_EMsgGCCStrike15_v2_Party_Register";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Party_Unregister"] = 9190] = "k_EMsgGCCStrike15_v2_Party_Unregister";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Party_Search"] = 9191] = "k_EMsgGCCStrike15_v2_Party_Search";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Party_Invite"] = 9192] = "k_EMsgGCCStrike15_v2_Party_Invite";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_Account_RequestCoPlays"] = 9193] = "k_EMsgGCCStrike15_v2_Account_RequestCoPlays";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientGCRankUpdate"] = 9194] = "k_EMsgGCCStrike15_v2_ClientGCRankUpdate";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestOffers"] = 9195] = "k_EMsgGCCStrike15_v2_ClientRequestOffers";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientAccountBalance"] = 9196] = "k_EMsgGCCStrike15_v2_ClientAccountBalance";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientPartyJoinRelay"] = 9197] = "k_EMsgGCCStrike15_v2_ClientPartyJoinRelay";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientPartyWarning"] = 9198] = "k_EMsgGCCStrike15_v2_ClientPartyWarning";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_SetEventFavorite"] = 9200] = "k_EMsgGCCStrike15_v2_SetEventFavorite";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GetEventFavorites_Request"] = 9201] = "k_EMsgGCCStrike15_v2_GetEventFavorites_Request";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientPerfReport"] = 9202] = "k_EMsgGCCStrike15_v2_ClientPerfReport";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GetEventFavorites_Response"] = 9203] = "k_EMsgGCCStrike15_v2_GetEventFavorites_Response";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRequestSouvenir"] = 9204] = "k_EMsgGCCStrike15_v2_ClientRequestSouvenir";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientReportValidation"] = 9205] = "k_EMsgGCCStrike15_v2_ClientReportValidation";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientRefuseSecureMode"] = 9206] = "k_EMsgGCCStrike15_v2_GC2ClientRefuseSecureMode";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientRequestValidation"] = 9207] = "k_EMsgGCCStrike15_v2_GC2ClientRequestValidation";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_ClientRedeemMissionReward"] = 9209] = "k_EMsgGCCStrike15_v2_ClientRedeemMissionReward";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_ClientDeepStats"] = 9210] = "k_EMsgGCCStrike15_ClientDeepStats";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_StartAgreementSessionInGame"] = 9211] = "k_EMsgGCCStrike15_StartAgreementSessionInGame";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientInitSystem"] = 9212] = "k_EMsgGCCStrike15_v2_GC2ClientInitSystem";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_GC2ClientInitSystem_Response"] = 9213] = "k_EMsgGCCStrike15_v2_GC2ClientInitSystem_Response";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_PrivateQueues"] = 9214] = "k_EMsgGCCStrike15_v2_PrivateQueues";
    ECsgoGCMsg[ECsgoGCMsg["k_EMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt"] = 9215] = "k_EMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt";
})(ECsgoGCMsg = exports.ECsgoGCMsg || (exports.ECsgoGCMsg = {}));
var ECsgoSteamUserStat;
(function (ECsgoSteamUserStat) {
    ECsgoSteamUserStat[ECsgoSteamUserStat["k_ECsgoSteamUserStat_XpEarnedGames"] = 1] = "k_ECsgoSteamUserStat_XpEarnedGames";
    ECsgoSteamUserStat[ECsgoSteamUserStat["k_ECsgoSteamUserStat_MatchWinsCompetitive"] = 2] = "k_ECsgoSteamUserStat_MatchWinsCompetitive";
    ECsgoSteamUserStat[ECsgoSteamUserStat["k_ECsgoSteamUserStat_SurvivedDangerZone"] = 3] = "k_ECsgoSteamUserStat_SurvivedDangerZone";
})(ECsgoSteamUserStat = exports.ECsgoSteamUserStat || (exports.ECsgoSteamUserStat = {}));
var EClientReportingVersion;
(function (EClientReportingVersion) {
    EClientReportingVersion[EClientReportingVersion["k_EClientReportingVersion_OldVersion"] = 0] = "k_EClientReportingVersion_OldVersion";
    EClientReportingVersion[EClientReportingVersion["k_EClientReportingVersion_BetaVersion"] = 1] = "k_EClientReportingVersion_BetaVersion";
    EClientReportingVersion[EClientReportingVersion["k_EClientReportingVersion_SupportsTrustedMode"] = 2] = "k_EClientReportingVersion_SupportsTrustedMode";
})(EClientReportingVersion = exports.EClientReportingVersion || (exports.EClientReportingVersion = {}));
var EInitSystemResult;
(function (EInitSystemResult) {
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_Invalid"] = 0] = "k_EInitSystemResult_Invalid";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_Success"] = 1] = "k_EInitSystemResult_Success";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_None"] = 2] = "k_EInitSystemResult_None";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_NotFound"] = 3] = "k_EInitSystemResult_NotFound";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_Existing"] = 4] = "k_EInitSystemResult_Existing";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_FailedOpen"] = 5] = "k_EInitSystemResult_FailedOpen";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_Mismatch"] = 6] = "k_EInitSystemResult_Mismatch";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_FailedInit"] = 7] = "k_EInitSystemResult_FailedInit";
    EInitSystemResult[EInitSystemResult["k_EInitSystemResult_Max"] = 8] = "k_EInitSystemResult_Max";
})(EInitSystemResult = exports.EInitSystemResult || (exports.EInitSystemResult = {}));
function createBaseGameServerPing() {
    return { ping: 0, ip: 0, instances: 0 };
}
exports.GameServerPing = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGameServerPing();
        message.ping = (_a = object.ping) !== null && _a !== void 0 ? _a : 0;
        message.ip = (_b = object.ip) !== null && _b !== void 0 ? _b : 0;
        message.instances = (_c = object.instances) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseDataCenterPing() {
    return { dataCenterId: 0, ping: 0 };
}
exports.DataCenterPing = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dataCenterId !== 0) {
            writer.uint32(13).fixed32(message.dataCenterId);
        }
        if (message.ping !== 0) {
            writer.uint32(16).sint32(message.ping);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDataCenterPing();
        message.dataCenterId = (_a = object.dataCenterId) !== null && _a !== void 0 ? _a : 0;
        message.ping = (_b = object.ping) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseDetailedSearchStatistic() {
    return { gameType: 0, searchTimeAvg: 0, playersSearching: 0 };
}
exports.DetailedSearchStatistic = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDetailedSearchStatistic();
        message.gameType = (_a = object.gameType) !== null && _a !== void 0 ? _a : 0;
        message.searchTimeAvg = (_b = object.searchTimeAvg) !== null && _b !== void 0 ? _b : 0;
        message.playersSearching = (_c = object.playersSearching) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseTournamentPlayer() {
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
exports.TournamentPlayer = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseTournamentPlayer();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.playerNick = (_b = object.playerNick) !== null && _b !== void 0 ? _b : "";
        message.playerName = (_c = object.playerName) !== null && _c !== void 0 ? _c : "";
        message.playerDob = (_d = object.playerDob) !== null && _d !== void 0 ? _d : 0;
        message.playerFlag = (_e = object.playerFlag) !== null && _e !== void 0 ? _e : "";
        message.playerLocation = (_f = object.playerLocation) !== null && _f !== void 0 ? _f : "";
        message.playerDesc = (_g = object.playerDesc) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseTournamentTeam() {
    return { teamId: 0, teamTag: "", teamFlag: "", teamName: "", players: [] };
}
exports.TournamentTeam = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.TournamentPlayer.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.players.push(exports.TournamentPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTournamentTeam();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : 0;
        message.teamTag = (_b = object.teamTag) !== null && _b !== void 0 ? _b : "";
        message.teamFlag = (_c = object.teamFlag) !== null && _c !== void 0 ? _c : "";
        message.teamName = (_d = object.teamName) !== null && _d !== void 0 ? _d : "";
        message.players =
            ((_e = object.players) === null || _e === void 0 ? void 0 : _e.map(e => exports.TournamentPlayer.fromPartial(e))) || [];
        return message;
    }
};
function createBaseTournamentEvent() {
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
exports.TournamentEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseTournamentEvent();
        message.eventId = (_a = object.eventId) !== null && _a !== void 0 ? _a : 0;
        message.eventTag = (_b = object.eventTag) !== null && _b !== void 0 ? _b : "";
        message.eventName = (_c = object.eventName) !== null && _c !== void 0 ? _c : "";
        message.eventTimeStart = (_d = object.eventTimeStart) !== null && _d !== void 0 ? _d : 0;
        message.eventTimeEnd = (_e = object.eventTimeEnd) !== null && _e !== void 0 ? _e : 0;
        message.eventPublic = (_f = object.eventPublic) !== null && _f !== void 0 ? _f : 0;
        message.eventStageId = (_g = object.eventStageId) !== null && _g !== void 0 ? _g : 0;
        message.eventStageName = (_h = object.eventStageName) !== null && _h !== void 0 ? _h : "";
        message.activeSectionId = (_j = object.activeSectionId) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
function createBaseGlobalStatistics() {
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
exports.GlobalStatistics = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.DetailedSearchStatistic.encode(v, writer.uint32(58).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.searchStatistics.push(exports.DetailedSearchStatistic.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseGlobalStatistics();
        message.playersOnline = (_a = object.playersOnline) !== null && _a !== void 0 ? _a : 0;
        message.serversOnline = (_b = object.serversOnline) !== null && _b !== void 0 ? _b : 0;
        message.playersSearching = (_c = object.playersSearching) !== null && _c !== void 0 ? _c : 0;
        message.serversAvailable = (_d = object.serversAvailable) !== null && _d !== void 0 ? _d : 0;
        message.ongoingMatches = (_e = object.ongoingMatches) !== null && _e !== void 0 ? _e : 0;
        message.searchTimeAvg = (_f = object.searchTimeAvg) !== null && _f !== void 0 ? _f : 0;
        message.searchStatistics =
            ((_g = object.searchStatistics) === null || _g === void 0 ? void 0 : _g.map(e => exports.DetailedSearchStatistic.fromPartial(e))) || [];
        message.mainPostUrl = (_h = object.mainPostUrl) !== null && _h !== void 0 ? _h : "";
        message.requiredAppidVersion = (_j = object.requiredAppidVersion) !== null && _j !== void 0 ? _j : 0;
        message.pricesheetVersion = (_k = object.pricesheetVersion) !== null && _k !== void 0 ? _k : 0;
        message.twitchStreamsVersion = (_l = object.twitchStreamsVersion) !== null && _l !== void 0 ? _l : 0;
        message.activeTournamentEventid = (_m = object.activeTournamentEventid) !== null && _m !== void 0 ? _m : 0;
        message.activeSurveyId = (_o = object.activeSurveyId) !== null && _o !== void 0 ? _o : 0;
        message.rtime32Cur = (_p = object.rtime32Cur) !== null && _p !== void 0 ? _p : 0;
        message.rtime32EventStart = (_q = object.rtime32EventStart) !== null && _q !== void 0 ? _q : 0;
        return message;
    }
};
function createBaseOperationalStatisticDescription() {
    return { name: "", idkey: 0 };
}
exports.OperationalStatisticDescription = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.idkey !== 0) {
            writer.uint32(16).uint32(message.idkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOperationalStatisticDescription();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.idkey = (_b = object.idkey) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseOperationalStatisticElement() {
    return { idkey: 0, values: [] };
}
exports.OperationalStatisticElement = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOperationalStatisticElement();
        message.idkey = (_a = object.idkey) !== null && _a !== void 0 ? _a : 0;
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        return message;
    }
};
function createBaseOperationalStatisticsPacket() {
    return { packetid: 0, mstimestamp: 0, values: [] };
}
exports.OperationalStatisticsPacket = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.packetid !== 0) {
            writer.uint32(8).int32(message.packetid);
        }
        if (message.mstimestamp !== 0) {
            writer.uint32(16).int32(message.mstimestamp);
        }
        for (const v of message.values) {
            exports.OperationalStatisticElement.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.values.push(exports.OperationalStatisticElement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOperationalStatisticsPacket();
        message.packetid = (_a = object.packetid) !== null && _a !== void 0 ? _a : 0;
        message.mstimestamp = (_b = object.mstimestamp) !== null && _b !== void 0 ? _b : 0;
        message.values =
            ((_c = object.values) === null || _c === void 0 ? void 0 : _c.map(e => exports.OperationalStatisticElement.fromPartial(e))) || [];
        return message;
    }
};
function createBasePlayerRankingInfo() {
    return {
        accountId: 0,
        rankId: 0,
        wins: 0,
        rankChange: 0,
        rankTypeId: 0,
        tvControl: 0
    };
}
exports.PlayerRankingInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePlayerRankingInfo();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.rankId = (_b = object.rankId) !== null && _b !== void 0 ? _b : 0;
        message.wins = (_c = object.wins) !== null && _c !== void 0 ? _c : 0;
        message.rankChange = (_d = object.rankChange) !== null && _d !== void 0 ? _d : 0;
        message.rankTypeId = (_e = object.rankTypeId) !== null && _e !== void 0 ? _e : 0;
        message.tvControl = (_f = object.tvControl) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBasePlayerCommendationInfo() {
    return { cmdFriendly: 0, cmdTeaching: 0, cmdLeader: 0 };
}
exports.PlayerCommendationInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePlayerCommendationInfo();
        message.cmdFriendly = (_a = object.cmdFriendly) !== null && _a !== void 0 ? _a : 0;
        message.cmdTeaching = (_b = object.cmdTeaching) !== null && _b !== void 0 ? _b : 0;
        message.cmdLeader = (_c = object.cmdLeader) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBasePlayerMedalsInfo() {
    return { displayItemsDefidx: [], featuredDisplayItemDefidx: 0 };
}
exports.PlayerMedalsInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b;
        const message = createBasePlayerMedalsInfo();
        message.displayItemsDefidx = ((_a = object.displayItemsDefidx) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        message.featuredDisplayItemDefidx = (_b = object.featuredDisplayItemDefidx) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseAccountActivity() {
    return { activity: 0, mode: 0, map: 0, matchid: Long.UZERO };
}
exports.AccountActivity = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.matchid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAccountActivity();
        message.activity = (_a = object.activity) !== null && _a !== void 0 ? _a : 0;
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        message.map = (_c = object.map) !== null && _c !== void 0 ? _c : 0;
        message.matchid =
            object.matchid !== undefined && object.matchid !== null
                ? Long.fromValue(object.matchid)
                : Long.UZERO;
        return message;
    }
};
function createBaseTournamentMatchSetup() {
    return { eventId: 0, teamIdCt: 0, teamIdT: 0, eventStageId: 0 };
}
exports.TournamentMatchSetup = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTournamentMatchSetup();
        message.eventId = (_a = object.eventId) !== null && _a !== void 0 ? _a : 0;
        message.teamIdCt = (_b = object.teamIdCt) !== null && _b !== void 0 ? _b : 0;
        message.teamIdT = (_c = object.teamIdT) !== null && _c !== void 0 ? _c : 0;
        message.eventStageId = (_d = object.eventStageId) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseServerHltvInfo() {
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
exports.ServerHltvInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServerHltvInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tvUdpPort = reader.uint32();
                    break;
                case 2:
                    message.tvWatchKey = reader.uint64();
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
                    message.tvMasterSteamid = reader.uint64();
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
                    message.tvRelaySteamid = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseServerHltvInfo();
        message.tvUdpPort = (_a = object.tvUdpPort) !== null && _a !== void 0 ? _a : 0;
        message.tvWatchKey =
            object.tvWatchKey !== undefined && object.tvWatchKey !== null
                ? Long.fromValue(object.tvWatchKey)
                : Long.UZERO;
        message.tvSlots = (_b = object.tvSlots) !== null && _b !== void 0 ? _b : 0;
        message.tvClients = (_c = object.tvClients) !== null && _c !== void 0 ? _c : 0;
        message.tvProxies = (_d = object.tvProxies) !== null && _d !== void 0 ? _d : 0;
        message.tvTime = (_e = object.tvTime) !== null && _e !== void 0 ? _e : 0;
        message.gameType = (_f = object.gameType) !== null && _f !== void 0 ? _f : 0;
        message.gameMapgroup = (_g = object.gameMapgroup) !== null && _g !== void 0 ? _g : "";
        message.gameMap = (_h = object.gameMap) !== null && _h !== void 0 ? _h : "";
        message.tvMasterSteamid =
            object.tvMasterSteamid !== undefined && object.tvMasterSteamid !== null
                ? Long.fromValue(object.tvMasterSteamid)
                : Long.UZERO;
        message.tvLocalSlots = (_j = object.tvLocalSlots) !== null && _j !== void 0 ? _j : 0;
        message.tvLocalClients = (_k = object.tvLocalClients) !== null && _k !== void 0 ? _k : 0;
        message.tvLocalProxies = (_l = object.tvLocalProxies) !== null && _l !== void 0 ? _l : 0;
        message.tvRelaySlots = (_m = object.tvRelaySlots) !== null && _m !== void 0 ? _m : 0;
        message.tvRelayClients = (_o = object.tvRelayClients) !== null && _o !== void 0 ? _o : 0;
        message.tvRelayProxies = (_p = object.tvRelayProxies) !== null && _p !== void 0 ? _p : 0;
        message.tvRelayAddress = (_q = object.tvRelayAddress) !== null && _q !== void 0 ? _q : 0;
        message.tvRelayPort = (_r = object.tvRelayPort) !== null && _r !== void 0 ? _r : 0;
        message.tvRelaySteamid =
            object.tvRelaySteamid !== undefined && object.tvRelaySteamid !== null
                ? Long.fromValue(object.tvRelaySteamid)
                : Long.UZERO;
        message.flags = (_s = object.flags) !== null && _s !== void 0 ? _s : 0;
        return message;
    }
};
function createBaseIpAddressMask() {
    return { a: 0, b: 0, c: 0, d: 0, bits: 0, token: 0 };
}
exports.IpAddressMask = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseIpAddressMask();
        message.a = (_a = object.a) !== null && _a !== void 0 ? _a : 0;
        message.b = (_b = object.b) !== null && _b !== void 0 ? _b : 0;
        message.c = (_c = object.c) !== null && _c !== void 0 ? _c : 0;
        message.d = (_d = object.d) !== null && _d !== void 0 ? _d : 0;
        message.bits = (_e = object.bits) !== null && _e !== void 0 ? _e : 0;
        message.token = (_f = object.token) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCMsgCsgoSteamUserStatChange() {
    return { ecsgosteamuserstat: 0, delta: 0, absolute: false };
}
exports.CMsgCsgoSteamUserStatChange = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgCsgoSteamUserStatChange();
        message.ecsgosteamuserstat = (_a = object.ecsgosteamuserstat) !== null && _a !== void 0 ? _a : 0;
        message.delta = (_b = object.delta) !== null && _b !== void 0 ? _b : 0;
        message.absolute = (_c = object.absolute) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseXpProgressData() {
    return { xpPoints: 0, xpCategory: 0 };
}
exports.XpProgressData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.xpPoints !== 0) {
            writer.uint32(8).uint32(message.xpPoints);
        }
        if (message.xpCategory !== 0) {
            writer.uint32(16).int32(message.xpCategory);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseXpProgressData();
        message.xpPoints = (_a = object.xpPoints) !== null && _a !== void 0 ? _a : 0;
        message.xpCategory = (_b = object.xpCategory) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseMatchEndItemUpdates() {
    return { itemId: Long.UZERO, itemAttrDefidx: 0, itemAttrDeltaValue: 0 };
}
exports.MatchEndItemUpdates = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMatchEndItemUpdates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.uint64();
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMatchEndItemUpdates();
        message.itemId =
            object.itemId !== undefined && object.itemId !== null
                ? Long.fromValue(object.itemId)
                : Long.UZERO;
        message.itemAttrDefidx = (_a = object.itemAttrDefidx) !== null && _a !== void 0 ? _a : 0;
        message.itemAttrDeltaValue = (_b = object.itemAttrDeltaValue) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseScoreLeaderboardData() {
    return {
        questId: Long.UZERO,
        score: 0,
        accountentries: [],
        matchentries: []
    };
}
exports.ScoreLeaderboardData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.questId.isZero()) {
            writer.uint32(8).uint64(message.questId);
        }
        if (message.score !== 0) {
            writer.uint32(16).uint32(message.score);
        }
        for (const v of message.accountentries) {
            exports.ScoreLeaderboardData_AccountEntries.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.matchentries) {
            exports.ScoreLeaderboardData_Entry.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScoreLeaderboardData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.questId = reader.uint64();
                    break;
                case 2:
                    message.score = reader.uint32();
                    break;
                case 3:
                    message.accountentries.push(exports.ScoreLeaderboardData_AccountEntries.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.matchentries.push(exports.ScoreLeaderboardData_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseScoreLeaderboardData();
        message.questId =
            object.questId !== undefined && object.questId !== null
                ? Long.fromValue(object.questId)
                : Long.UZERO;
        message.score = (_a = object.score) !== null && _a !== void 0 ? _a : 0;
        message.accountentries =
            ((_b = object.accountentries) === null || _b === void 0 ? void 0 : _b.map(e => exports.ScoreLeaderboardData_AccountEntries.fromPartial(e))) || [];
        message.matchentries =
            ((_c = object.matchentries) === null || _c === void 0 ? void 0 : _c.map(e => exports.ScoreLeaderboardData_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseScoreLeaderboardData_Entry() {
    return { tag: 0, val: 0 };
}
exports.ScoreLeaderboardData_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tag !== 0) {
            writer.uint32(8).uint32(message.tag);
        }
        if (message.val !== 0) {
            writer.uint32(16).uint32(message.val);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseScoreLeaderboardData_Entry();
        message.tag = (_a = object.tag) !== null && _a !== void 0 ? _a : 0;
        message.val = (_b = object.val) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseScoreLeaderboardData_AccountEntries() {
    return { accountid: 0, entries: [] };
}
exports.ScoreLeaderboardData_AccountEntries = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        for (const v of message.entries) {
            exports.ScoreLeaderboardData_Entry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScoreLeaderboardData_AccountEntries();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.entries.push(exports.ScoreLeaderboardData_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseScoreLeaderboardData_AccountEntries();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.entries =
            ((_b = object.entries) === null || _b === void 0 ? void 0 : _b.map(e => exports.ScoreLeaderboardData_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBasePlayerQuestData() {
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
exports.PlayerQuestData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.questerAccountId !== 0) {
            writer.uint32(8).uint32(message.questerAccountId);
        }
        for (const v of message.questItemData) {
            exports.PlayerQuestData_QuestItemData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.xpProgressData) {
            exports.XpProgressData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.timePlayed !== 0) {
            writer.uint32(32).uint32(message.timePlayed);
        }
        if (message.mmGameMode !== 0) {
            writer.uint32(40).uint32(message.mmGameMode);
        }
        for (const v of message.itemUpdates) {
            exports.MatchEndItemUpdates.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.operationPointsEligible === true) {
            writer.uint32(56).bool(message.operationPointsEligible);
        }
        for (const v of message.userstatchanges) {
            exports.CMsgCsgoSteamUserStatChange.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayerQuestData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.questerAccountId = reader.uint32();
                    break;
                case 2:
                    message.questItemData.push(exports.PlayerQuestData_QuestItemData.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.xpProgressData.push(exports.XpProgressData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.timePlayed = reader.uint32();
                    break;
                case 5:
                    message.mmGameMode = reader.uint32();
                    break;
                case 6:
                    message.itemUpdates.push(exports.MatchEndItemUpdates.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.operationPointsEligible = reader.bool();
                    break;
                case 8:
                    message.userstatchanges.push(exports.CMsgCsgoSteamUserStatChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePlayerQuestData();
        message.questerAccountId = (_a = object.questerAccountId) !== null && _a !== void 0 ? _a : 0;
        message.questItemData =
            ((_b = object.questItemData) === null || _b === void 0 ? void 0 : _b.map(e => exports.PlayerQuestData_QuestItemData.fromPartial(e))) || [];
        message.xpProgressData =
            ((_c = object.xpProgressData) === null || _c === void 0 ? void 0 : _c.map(e => exports.XpProgressData.fromPartial(e))) || [];
        message.timePlayed = (_d = object.timePlayed) !== null && _d !== void 0 ? _d : 0;
        message.mmGameMode = (_e = object.mmGameMode) !== null && _e !== void 0 ? _e : 0;
        message.itemUpdates =
            ((_f = object.itemUpdates) === null || _f === void 0 ? void 0 : _f.map(e => exports.MatchEndItemUpdates.fromPartial(e))) || [];
        message.operationPointsEligible = (_g = object.operationPointsEligible) !== null && _g !== void 0 ? _g : false;
        message.userstatchanges =
            ((_h = object.userstatchanges) === null || _h === void 0 ? void 0 : _h.map(e => exports.CMsgCsgoSteamUserStatChange.fromPartial(e))) || [];
        return message;
    }
};
function createBasePlayerQuestData_QuestItemData() {
    return {
        questId: Long.UZERO,
        questNormalPointsEarned: 0,
        questBonusPointsEarned: 0
    };
}
exports.PlayerQuestData_QuestItemData = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayerQuestData_QuestItemData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.questId = reader.uint64();
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
    fromPartial(object) {
        var _a, _b;
        const message = createBasePlayerQuestData_QuestItemData();
        message.questId =
            object.questId !== undefined && object.questId !== null
                ? Long.fromValue(object.questId)
                : Long.UZERO;
        message.questNormalPointsEarned = (_a = object.questNormalPointsEarned) !== null && _a !== void 0 ? _a : 0;
        message.questBonusPointsEarned = (_b = object.questBonusPointsEarned) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseDeepPlayerStatsEntry() {
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
exports.DeepPlayerStatsEntry = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeepPlayerStatsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.matchId = reader.uint64();
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        const message = createBaseDeepPlayerStatsEntry();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.mmGameMode = (_b = object.mmGameMode) !== null && _b !== void 0 ? _b : 0;
        message.mapid = (_c = object.mapid) !== null && _c !== void 0 ? _c : 0;
        message.bStartingCt = (_d = object.bStartingCt) !== null && _d !== void 0 ? _d : false;
        message.matchOutcome = (_e = object.matchOutcome) !== null && _e !== void 0 ? _e : 0;
        message.roundsWon = (_f = object.roundsWon) !== null && _f !== void 0 ? _f : 0;
        message.roundsLost = (_g = object.roundsLost) !== null && _g !== void 0 ? _g : 0;
        message.statScore = (_h = object.statScore) !== null && _h !== void 0 ? _h : 0;
        message.statDeaths = (_j = object.statDeaths) !== null && _j !== void 0 ? _j : 0;
        message.statMvps = (_k = object.statMvps) !== null && _k !== void 0 ? _k : 0;
        message.enemyKills = (_l = object.enemyKills) !== null && _l !== void 0 ? _l : 0;
        message.enemyHeadshots = (_m = object.enemyHeadshots) !== null && _m !== void 0 ? _m : 0;
        message.enemy2ks = (_o = object.enemy2ks) !== null && _o !== void 0 ? _o : 0;
        message.enemy3ks = (_p = object.enemy3ks) !== null && _p !== void 0 ? _p : 0;
        message.enemy4ks = (_q = object.enemy4ks) !== null && _q !== void 0 ? _q : 0;
        message.totalDamage = (_r = object.totalDamage) !== null && _r !== void 0 ? _r : 0;
        message.engagementsEntryCount = (_s = object.engagementsEntryCount) !== null && _s !== void 0 ? _s : 0;
        message.engagementsEntryWins = (_t = object.engagementsEntryWins) !== null && _t !== void 0 ? _t : 0;
        message.engagements1v1Count = (_u = object.engagements1v1Count) !== null && _u !== void 0 ? _u : 0;
        message.engagements1v1Wins = (_v = object.engagements1v1Wins) !== null && _v !== void 0 ? _v : 0;
        message.engagements1v2Count = (_w = object.engagements1v2Count) !== null && _w !== void 0 ? _w : 0;
        message.engagements1v2Wins = (_x = object.engagements1v2Wins) !== null && _x !== void 0 ? _x : 0;
        message.utilityCount = (_y = object.utilityCount) !== null && _y !== void 0 ? _y : 0;
        message.utilitySuccess = (_z = object.utilitySuccess) !== null && _z !== void 0 ? _z : 0;
        message.flashCount = (_0 = object.flashCount) !== null && _0 !== void 0 ? _0 : 0;
        message.flashSuccess = (_1 = object.flashSuccess) !== null && _1 !== void 0 ? _1 : 0;
        message.mates = ((_2 = object.mates) === null || _2 === void 0 ? void 0 : _2.map(e => e)) || [];
        return message;
    }
};
function createBaseDeepPlayerMatchEvent() {
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
exports.DeepPlayerMatchEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeepPlayerMatchEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.matchId = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseDeepPlayerMatchEvent();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : 0;
        message.eventType = (_c = object.eventType) !== null && _c !== void 0 ? _c : 0;
        message.bPlayingCt = (_d = object.bPlayingCt) !== null && _d !== void 0 ? _d : false;
        message.userPosX = (_e = object.userPosX) !== null && _e !== void 0 ? _e : 0;
        message.userPosY = (_f = object.userPosY) !== null && _f !== void 0 ? _f : 0;
        message.userPosZ = (_g = object.userPosZ) !== null && _g !== void 0 ? _g : 0;
        message.userDefidx = (_h = object.userDefidx) !== null && _h !== void 0 ? _h : 0;
        message.otherPosX = (_j = object.otherPosX) !== null && _j !== void 0 ? _j : 0;
        message.otherPosY = (_k = object.otherPosY) !== null && _k !== void 0 ? _k : 0;
        message.otherPosZ = (_l = object.otherPosZ) !== null && _l !== void 0 ? _l : 0;
        message.otherDefidx = (_m = object.otherDefidx) !== null && _m !== void 0 ? _m : 0;
        message.eventData = (_o = object.eventData) !== null && _o !== void 0 ? _o : 0;
        return message;
    }
};
function createBaseCMsgGCServerQuestUpdateData() {
    return {
        playerQuestData: [],
        binaryData: new Uint8Array(),
        mmGameMode: 0,
        missionlbsdata: undefined
    };
}
exports.CMsgGCServerQuestUpdateData = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.playerQuestData) {
            exports.PlayerQuestData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.binaryData.length !== 0) {
            writer.uint32(18).bytes(message.binaryData);
        }
        if (message.mmGameMode !== 0) {
            writer.uint32(24).uint32(message.mmGameMode);
        }
        if (message.missionlbsdata !== undefined) {
            exports.ScoreLeaderboardData.encode(message.missionlbsdata, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCServerQuestUpdateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerQuestData.push(exports.PlayerQuestData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.binaryData = reader.bytes();
                    break;
                case 3:
                    message.mmGameMode = reader.uint32();
                    break;
                case 4:
                    message.missionlbsdata = exports.ScoreLeaderboardData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCServerQuestUpdateData();
        message.playerQuestData =
            ((_a = object.playerQuestData) === null || _a === void 0 ? void 0 : _a.map(e => exports.PlayerQuestData.fromPartial(e))) || [];
        message.binaryData = (_b = object.binaryData) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.mmGameMode = (_c = object.mmGameMode) !== null && _c !== void 0 ? _c : 0;
        message.missionlbsdata =
            object.missionlbsdata !== undefined && object.missionlbsdata !== null
                ? exports.ScoreLeaderboardData.fromPartial(object.missionlbsdata)
                : undefined;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGCOperationalStats() {
    return { packetid: 0, namekeys: [], packets: [] };
}
exports.CMsgGCCStrike15V2MatchmakingGCOperationalStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.packetid !== 0) {
            writer.uint32(8).int32(message.packetid);
        }
        for (const v of message.namekeys) {
            exports.OperationalStatisticDescription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.packets) {
            exports.OperationalStatisticsPacket.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGCOperationalStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetid = reader.int32();
                    break;
                case 2:
                    message.namekeys.push(exports.OperationalStatisticDescription.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.packets.push(exports.OperationalStatisticsPacket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGCOperationalStats();
        message.packetid = (_a = object.packetid) !== null && _a !== void 0 ? _a : 0;
        message.namekeys =
            ((_b = object.namekeys) === null || _b === void 0 ? void 0 : _b.map(e => exports.OperationalStatisticDescription.fromPartial(e))) || [];
        message.packets =
            ((_c = object.packets) === null || _c === void 0 ? void 0 : _c.map(e => exports.OperationalStatisticsPacket.fromPartial(e))) ||
                [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm() {
    return { token: 0, stamp: 0, exchange: Long.UZERO };
}
exports.CMsgGCCStrike15V2MatchmakingGC2ServerConfirm = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.exchange = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ServerConfirm();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : 0;
        message.stamp = (_b = object.stamp) !== null && _b !== void 0 ? _b : 0;
        message.exchange =
            object.exchange !== undefined && object.exchange !== null
                ? Long.fromValue(object.exchange)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ServerReservationUpdate() {
    return { viewersExternalTotal: 0, viewersExternalSteam: 0 };
}
exports.CMsgGCCStrike15V2GC2ServerReservationUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.viewersExternalTotal !== 0) {
            writer.uint32(8).uint32(message.viewersExternalTotal);
        }
        if (message.viewersExternalSteam !== 0) {
            writer.uint32(16).uint32(message.viewersExternalSteam);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2GC2ServerReservationUpdate();
        message.viewersExternalTotal = (_a = object.viewersExternalTotal) !== null && _a !== void 0 ? _a : 0;
        message.viewersExternalSteam = (_b = object.viewersExternalSteam) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingStart() {
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
exports.CMsgGCCStrike15V2MatchmakingStart = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.TournamentMatchSetup.encode(message.tournamentMatch, writer.uint32(42).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
                    message.tournamentMatch = exports.TournamentMatchSetup.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.primeOnly = reader.bool();
                    break;
                case 7:
                    message.tvControl = reader.uint32();
                    break;
                case 8:
                    message.lobbyId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCMsgGCCStrike15V2MatchmakingStart();
        message.accountIds = ((_a = object.accountIds) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        message.gameType = (_b = object.gameType) !== null && _b !== void 0 ? _b : 0;
        message.ticketData = (_c = object.ticketData) !== null && _c !== void 0 ? _c : "";
        message.clientVersion = (_d = object.clientVersion) !== null && _d !== void 0 ? _d : 0;
        message.tournamentMatch =
            object.tournamentMatch !== undefined && object.tournamentMatch !== null
                ? exports.TournamentMatchSetup.fromPartial(object.tournamentMatch)
                : undefined;
        message.primeOnly = (_e = object.primeOnly) !== null && _e !== void 0 ? _e : false;
        message.tvControl = (_f = object.tvControl) !== null && _f !== void 0 ? _f : 0;
        message.lobbyId =
            object.lobbyId !== undefined && object.lobbyId !== null
                ? Long.fromValue(object.lobbyId)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingStop() {
    return { abandon: 0 };
}
exports.CMsgGCCStrike15V2MatchmakingStop = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.abandon !== 0) {
            writer.uint32(8).int32(message.abandon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchmakingStop();
        message.abandon = (_a = object.abandon) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingClient2ServerPing() {
    return {
        gameserverpings: [],
        offsetIndex: 0,
        finalBatch: 0,
        dataCenterPings: [],
        maxPing: 0,
        testToken: 0
    };
}
exports.CMsgGCCStrike15V2MatchmakingClient2ServerPing = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.gameserverpings) {
            exports.GameServerPing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.offsetIndex !== 0) {
            writer.uint32(16).int32(message.offsetIndex);
        }
        if (message.finalBatch !== 0) {
            writer.uint32(24).int32(message.finalBatch);
        }
        for (const v of message.dataCenterPings) {
            exports.DataCenterPing.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxPing !== 0) {
            writer.uint32(40).uint32(message.maxPing);
        }
        if (message.testToken !== 0) {
            writer.uint32(53).fixed32(message.testToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingClient2ServerPing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gameserverpings.push(exports.GameServerPing.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.offsetIndex = reader.int32();
                    break;
                case 3:
                    message.finalBatch = reader.int32();
                    break;
                case 4:
                    message.dataCenterPings.push(exports.DataCenterPing.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCMsgGCCStrike15V2MatchmakingClient2ServerPing();
        message.gameserverpings =
            ((_a = object.gameserverpings) === null || _a === void 0 ? void 0 : _a.map(e => exports.GameServerPing.fromPartial(e))) || [];
        message.offsetIndex = (_b = object.offsetIndex) !== null && _b !== void 0 ? _b : 0;
        message.finalBatch = (_c = object.finalBatch) !== null && _c !== void 0 ? _c : 0;
        message.dataCenterPings =
            ((_d = object.dataCenterPings) === null || _d === void 0 ? void 0 : _d.map(e => exports.DataCenterPing.fromPartial(e))) || [];
        message.maxPing = (_e = object.maxPing) !== null && _e !== void 0 ? _e : 0;
        message.testToken = (_f = object.testToken) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate() {
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
exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.GlobalStatistics.encode(message.globalStats, writer.uint32(58).fork()).ldelim();
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
            exports.IpAddressMask.encode(message.serverIpaddressMask, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.notes) {
            exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note.encode(v, writer.uint32(106).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
                    }
                    else {
                        message.ongoingmatchAccountIdSessions.push(reader.uint32());
                    }
                    break;
                case 7:
                    message.globalStats = exports.GlobalStatistics.decode(reader, reader.uint32());
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.failpingAccountIdSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.failpingAccountIdSessions.push(reader.uint32());
                    }
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.penaltyAccountIdSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.penaltyAccountIdSessions.push(reader.uint32());
                    }
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.failreadyAccountIdSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.failreadyAccountIdSessions.push(reader.uint32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vacbannedAccountIdSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.vacbannedAccountIdSessions.push(reader.uint32());
                    }
                    break;
                case 12:
                    message.serverIpaddressMask = exports.IpAddressMask.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.notes.push(exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.penaltyAccountIdSessionsGreen.push(reader.uint32());
                        }
                    }
                    else {
                        message.penaltyAccountIdSessionsGreen.push(reader.uint32());
                    }
                    break;
                case 15:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.insufficientlevelSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.insufficientlevelSessions.push(reader.uint32());
                    }
                    break;
                case 16:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vsncheckAccountIdSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.vsncheckAccountIdSessions.push(reader.uint32());
                    }
                    break;
                case 17:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.launcherMismatchSessions.push(reader.uint32());
                        }
                    }
                    else {
                        message.launcherMismatchSessions.push(reader.uint32());
                    }
                    break;
                case 18:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.insecureAccountIdSessions.push(reader.uint32());
                        }
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate();
        message.matchmaking = (_a = object.matchmaking) !== null && _a !== void 0 ? _a : 0;
        message.waitingAccountIdSessions =
            ((_b = object.waitingAccountIdSessions) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        message.error = (_c = object.error) !== null && _c !== void 0 ? _c : "";
        message.ongoingmatchAccountIdSessions =
            ((_d = object.ongoingmatchAccountIdSessions) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.globalStats =
            object.globalStats !== undefined && object.globalStats !== null
                ? exports.GlobalStatistics.fromPartial(object.globalStats)
                : undefined;
        message.failpingAccountIdSessions =
            ((_e = object.failpingAccountIdSessions) === null || _e === void 0 ? void 0 : _e.map(e => e)) || [];
        message.penaltyAccountIdSessions =
            ((_f = object.penaltyAccountIdSessions) === null || _f === void 0 ? void 0 : _f.map(e => e)) || [];
        message.failreadyAccountIdSessions =
            ((_g = object.failreadyAccountIdSessions) === null || _g === void 0 ? void 0 : _g.map(e => e)) || [];
        message.vacbannedAccountIdSessions =
            ((_h = object.vacbannedAccountIdSessions) === null || _h === void 0 ? void 0 : _h.map(e => e)) || [];
        message.serverIpaddressMask =
            object.serverIpaddressMask !== undefined &&
                object.serverIpaddressMask !== null
                ? exports.IpAddressMask.fromPartial(object.serverIpaddressMask)
                : undefined;
        message.notes =
            ((_j = object.notes) === null || _j === void 0 ? void 0 : _j.map(e => exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note.fromPartial(e))) || [];
        message.penaltyAccountIdSessionsGreen =
            ((_k = object.penaltyAccountIdSessionsGreen) === null || _k === void 0 ? void 0 : _k.map(e => e)) || [];
        message.insufficientlevelSessions =
            ((_l = object.insufficientlevelSessions) === null || _l === void 0 ? void 0 : _l.map(e => e)) || [];
        message.vsncheckAccountIdSessions =
            ((_m = object.vsncheckAccountIdSessions) === null || _m === void 0 ? void 0 : _m.map(e => e)) || [];
        message.launcherMismatchSessions =
            ((_o = object.launcherMismatchSessions) === null || _o === void 0 ? void 0 : _o.map(e => e)) || [];
        message.insecureAccountIdSessions =
            ((_p = object.insecureAccountIdSessions) === null || _p === void 0 ? void 0 : _p.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note() {
    return { type: 0, regionId: 0, regionR: 0, distance: 0 };
}
exports.CMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note();
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientUpdate_Note();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.regionId = (_b = object.regionId) !== null && _b !== void 0 ? _b : 0;
        message.regionR = (_c = object.regionR) !== null && _c !== void 0 ? _c : 0;
        message.distance = (_d = object.distance) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentMatchDraft() {
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
exports.CDataGCCStrike15V2TournamentMatchDraft = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CDataGCCStrike15V2TournamentMatchDraft_Entry.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.drafts.push(exports.CDataGCCStrike15V2TournamentMatchDraft_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseCDataGCCStrike15V2TournamentMatchDraft();
        message.eventId = (_a = object.eventId) !== null && _a !== void 0 ? _a : 0;
        message.eventStageId = (_b = object.eventStageId) !== null && _b !== void 0 ? _b : 0;
        message.teamId0 = (_c = object.teamId0) !== null && _c !== void 0 ? _c : 0;
        message.teamId1 = (_d = object.teamId1) !== null && _d !== void 0 ? _d : 0;
        message.mapsCount = (_e = object.mapsCount) !== null && _e !== void 0 ? _e : 0;
        message.mapsCurrent = (_f = object.mapsCurrent) !== null && _f !== void 0 ? _f : 0;
        message.teamIdStart = (_g = object.teamIdStart) !== null && _g !== void 0 ? _g : 0;
        message.teamIdVeto1 = (_h = object.teamIdVeto1) !== null && _h !== void 0 ? _h : 0;
        message.teamIdPickn = (_j = object.teamIdPickn) !== null && _j !== void 0 ? _j : 0;
        message.drafts =
            ((_k = object.drafts) === null || _k === void 0 ? void 0 : _k.map(e => exports.CDataGCCStrike15V2TournamentMatchDraft_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentMatchDraft_Entry() {
    return { mapid: 0, teamIdCt: 0 };
}
exports.CDataGCCStrike15V2TournamentMatchDraft_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.mapid !== 0) {
            writer.uint32(8).int32(message.mapid);
        }
        if (message.teamIdCt !== 0) {
            writer.uint32(16).int32(message.teamIdCt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCDataGCCStrike15V2TournamentMatchDraft_Entry();
        message.mapid = (_a = object.mapid) !== null && _a !== void 0 ? _a : 0;
        message.teamIdCt = (_b = object.teamIdCt) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCPreMatchInfoData() {
    return { predictionsPct: 0, draft: undefined, stats: [], wins: [] };
}
exports.CPreMatchInfoData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.predictionsPct !== 0) {
            writer.uint32(8).int32(message.predictionsPct);
        }
        if (message.draft !== undefined) {
            exports.CDataGCCStrike15V2TournamentMatchDraft.encode(message.draft, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.stats) {
            exports.CPreMatchInfoData_TeamStats.encode(v, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.wins) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPreMatchInfoData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.predictionsPct = reader.int32();
                    break;
                case 4:
                    message.draft = exports.CDataGCCStrike15V2TournamentMatchDraft.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stats.push(exports.CPreMatchInfoData_TeamStats.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.wins.push(reader.int32());
                        }
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCPreMatchInfoData();
        message.predictionsPct = (_a = object.predictionsPct) !== null && _a !== void 0 ? _a : 0;
        message.draft =
            object.draft !== undefined && object.draft !== null
                ? exports.CDataGCCStrike15V2TournamentMatchDraft.fromPartial(object.draft)
                : undefined;
        message.stats =
            ((_b = object.stats) === null || _b === void 0 ? void 0 : _b.map(e => exports.CPreMatchInfoData_TeamStats.fromPartial(e))) || [];
        message.wins = ((_c = object.wins) === null || _c === void 0 ? void 0 : _c.map(e => e)) || [];
        return message;
    }
};
function createBaseCPreMatchInfoData_TeamStats() {
    return { matchInfoIdxtxt: 0, matchInfoTxt: "", matchInfoTeams: [] };
}
exports.CPreMatchInfoData_TeamStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.matchInfoIdxtxt !== 0) {
            writer.uint32(8).int32(message.matchInfoIdxtxt);
        }
        if (message.matchInfoTxt !== "") {
            writer.uint32(18).string(message.matchInfoTxt);
        }
        for (const v of message.matchInfoTeams) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCPreMatchInfoData_TeamStats();
        message.matchInfoIdxtxt = (_a = object.matchInfoIdxtxt) !== null && _a !== void 0 ? _a : 0;
        message.matchInfoTxt = (_b = object.matchInfoTxt) !== null && _b !== void 0 ? _b : "";
        message.matchInfoTeams = ((_c = object.matchInfoTeams) === null || _c === void 0 ? void 0 : _c.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ServerReserve() {
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
exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.PlayerRankingInfo.encode(v, writer.uint32(42).fork()).ldelim();
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
            exports.IpAddressMask.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (!message.tvMasterSteamid.isZero()) {
            writer.uint32(80).uint64(message.tvMasterSteamid);
        }
        if (message.tournamentEvent !== undefined) {
            exports.TournamentEvent.encode(message.tournamentEvent, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.tournamentTeams) {
            exports.TournamentTeam.encode(v, writer.uint32(98).fork()).ldelim();
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
            exports.CPreMatchInfoData.encode(message.preMatchData, writer.uint32(122).fork()).ldelim();
        }
        if (message.rtime32EventStart !== 0) {
            writer.uint32(128).uint32(message.rtime32EventStart);
        }
        if (message.tvControl !== 0) {
            writer.uint32(136).uint32(message.tvControl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
                        message.accountIds.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.gameType = reader.uint32();
                    break;
                case 3:
                    message.matchId = reader.uint64();
                    break;
                case 4:
                    message.serverVersion = reader.uint32();
                    break;
                case 18:
                    message.flags = reader.uint32();
                    break;
                case 5:
                    message.rankings.push(exports.PlayerRankingInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.encryptionKey = reader.uint64();
                    break;
                case 7:
                    message.encryptionKeyPub = reader.uint64();
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.partyIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.partyIds.push(reader.uint32());
                    }
                    break;
                case 9:
                    message.whitelist.push(exports.IpAddressMask.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.tvMasterSteamid = reader.uint64();
                    break;
                case 11:
                    message.tournamentEvent = exports.TournamentEvent.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.tournamentTeams.push(exports.TournamentTeam.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tournamentCastersAccountIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.tournamentCastersAccountIds.push(reader.uint32());
                    }
                    break;
                case 14:
                    message.tvRelaySteamid = reader.uint64();
                    break;
                case 15:
                    message.preMatchData = exports.CPreMatchInfoData.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ServerReserve();
        message.accountIds = ((_a = object.accountIds) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        message.gameType = (_b = object.gameType) !== null && _b !== void 0 ? _b : 0;
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.serverVersion = (_c = object.serverVersion) !== null && _c !== void 0 ? _c : 0;
        message.flags = (_d = object.flags) !== null && _d !== void 0 ? _d : 0;
        message.rankings =
            ((_e = object.rankings) === null || _e === void 0 ? void 0 : _e.map(e => exports.PlayerRankingInfo.fromPartial(e))) || [];
        message.encryptionKey =
            object.encryptionKey !== undefined && object.encryptionKey !== null
                ? Long.fromValue(object.encryptionKey)
                : Long.UZERO;
        message.encryptionKeyPub =
            object.encryptionKeyPub !== undefined && object.encryptionKeyPub !== null
                ? Long.fromValue(object.encryptionKeyPub)
                : Long.UZERO;
        message.partyIds = ((_f = object.partyIds) === null || _f === void 0 ? void 0 : _f.map(e => e)) || [];
        message.whitelist =
            ((_g = object.whitelist) === null || _g === void 0 ? void 0 : _g.map(e => exports.IpAddressMask.fromPartial(e))) || [];
        message.tvMasterSteamid =
            object.tvMasterSteamid !== undefined && object.tvMasterSteamid !== null
                ? Long.fromValue(object.tvMasterSteamid)
                : Long.UZERO;
        message.tournamentEvent =
            object.tournamentEvent !== undefined && object.tournamentEvent !== null
                ? exports.TournamentEvent.fromPartial(object.tournamentEvent)
                : undefined;
        message.tournamentTeams =
            ((_h = object.tournamentTeams) === null || _h === void 0 ? void 0 : _h.map(e => exports.TournamentTeam.fromPartial(e))) || [];
        message.tournamentCastersAccountIds =
            ((_j = object.tournamentCastersAccountIds) === null || _j === void 0 ? void 0 : _j.map(e => e)) || [];
        message.tvRelaySteamid =
            object.tvRelaySteamid !== undefined && object.tvRelaySteamid !== null
                ? Long.fromValue(object.tvRelaySteamid)
                : Long.UZERO;
        message.preMatchData =
            object.preMatchData !== undefined && object.preMatchData !== null
                ? exports.CPreMatchInfoData.fromPartial(object.preMatchData)
                : undefined;
        message.rtime32EventStart = (_k = object.rtime32EventStart) !== null && _k !== void 0 ? _k : 0;
        message.tvControl = (_l = object.tvControl) !== null && _l !== void 0 ? _l : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingServerReservationResponse() {
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
exports.CMsgGCCStrike15V2MatchmakingServerReservationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.reservationid.isZero()) {
            writer.uint32(8).uint64(message.reservationid);
        }
        if (message.reservation !== undefined) {
            exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(message.reservation, writer.uint32(18).fork()).ldelim();
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
            exports.ServerHltvInfo.encode(message.tvInfo, writer.uint32(50).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingServerReservationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservationid = reader.uint64();
                    break;
                case 2:
                    message.reservation = exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.map = reader.string();
                    break;
                case 4:
                    message.gcReservationSent = reader.uint64();
                    break;
                case 5:
                    message.serverVersion = reader.uint32();
                    break;
                case 6:
                    message.tvInfo = exports.ServerHltvInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rewardPlayerAccounts.push(reader.uint32());
                        }
                    }
                    else {
                        message.rewardPlayerAccounts.push(reader.uint32());
                    }
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.idlePlayerAccounts.push(reader.uint32());
                        }
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseCMsgGCCStrike15V2MatchmakingServerReservationResponse();
        message.reservationid =
            object.reservationid !== undefined && object.reservationid !== null
                ? Long.fromValue(object.reservationid)
                : Long.UZERO;
        message.reservation =
            object.reservation !== undefined && object.reservation !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(object.reservation)
                : undefined;
        message.map = (_a = object.map) !== null && _a !== void 0 ? _a : "";
        message.gcReservationSent =
            object.gcReservationSent !== undefined &&
                object.gcReservationSent !== null
                ? Long.fromValue(object.gcReservationSent)
                : Long.UZERO;
        message.serverVersion = (_b = object.serverVersion) !== null && _b !== void 0 ? _b : 0;
        message.tvInfo =
            object.tvInfo !== undefined && object.tvInfo !== null
                ? exports.ServerHltvInfo.fromPartial(object.tvInfo)
                : undefined;
        message.rewardPlayerAccounts =
            ((_c = object.rewardPlayerAccounts) === null || _c === void 0 ? void 0 : _c.map(e => e)) || [];
        message.idlePlayerAccounts = ((_d = object.idlePlayerAccounts) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.rewardItemAttrDefIdx = (_e = object.rewardItemAttrDefIdx) !== null && _e !== void 0 ? _e : 0;
        message.rewardItemAttrValue = (_f = object.rewardItemAttrValue) !== null && _f !== void 0 ? _f : 0;
        message.rewardItemAttrRewardIdx = (_g = object.rewardItemAttrRewardIdx) !== null && _g !== void 0 ? _g : 0;
        message.rewardDropList = (_h = object.rewardDropList) !== null && _h !== void 0 ? _h : 0;
        message.tournamentTag = (_j = object.tournamentTag) !== null && _j !== void 0 ? _j : "";
        message.legacySteamdatagramPort = (_k = object.legacySteamdatagramPort) !== null && _k !== void 0 ? _k : 0;
        message.steamdatagramRouting = (_l = object.steamdatagramRouting) !== null && _l !== void 0 ? _l : 0;
        message.testToken = (_m = object.testToken) !== null && _m !== void 0 ? _m : 0;
        message.flags = (_o = object.flags) !== null && _o !== void 0 ? _o : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientReserve() {
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
exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(message.reservation, writer.uint32(42).fork()).ldelim();
        }
        if (message.map !== "") {
            writer.uint32(50).string(message.map);
        }
        if (message.serverAddress !== "") {
            writer.uint32(58).string(message.serverAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientReserve();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverid = reader.uint64();
                    break;
                case 2:
                    message.directUdpIp = reader.uint32();
                    break;
                case 3:
                    message.directUdpPort = reader.uint32();
                    break;
                case 4:
                    message.reservationid = reader.uint64();
                    break;
                case 5:
                    message.reservation = exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientReserve();
        message.serverid =
            object.serverid !== undefined && object.serverid !== null
                ? Long.fromValue(object.serverid)
                : Long.UZERO;
        message.directUdpIp = (_a = object.directUdpIp) !== null && _a !== void 0 ? _a : 0;
        message.directUdpPort = (_b = object.directUdpPort) !== null && _b !== void 0 ? _b : 0;
        message.reservationid =
            object.reservationid !== undefined && object.reservationid !== null
                ? Long.fromValue(object.reservationid)
                : Long.UZERO;
        message.reservation =
            object.reservation !== undefined && object.reservation !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(object.reservation)
                : undefined;
        message.map = (_c = object.map) !== null && _c !== void 0 ? _c : "";
        message.serverAddress = (_d = object.serverAddress) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats() {
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
exports.CMsgGCCStrike15V2MatchmakingServerRoundStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.reservationid.isZero()) {
            writer.uint32(8).uint64(message.reservationid);
        }
        if (message.reservation !== undefined) {
            exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(message.reservation, writer.uint32(18).fork()).ldelim();
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
            exports.CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.encode(message.confirm, writer.uint32(106).fork()).ldelim();
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
            exports.CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.encode(message.dropInfo, writer.uint32(210).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservationid = reader.uint64();
                    break;
                case 2:
                    message.reservation = exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(reader, reader.uint32());
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
                    }
                    else {
                        message.kills.push(reader.int32());
                    }
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.assists.push(reader.int32());
                        }
                    }
                    else {
                        message.assists.push(reader.int32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.deaths.push(reader.int32());
                        }
                    }
                    else {
                        message.deaths.push(reader.int32());
                    }
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scores.push(reader.int32());
                        }
                    }
                    else {
                        message.scores.push(reader.int32());
                    }
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.pings.push(reader.int32());
                        }
                    }
                    else {
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
                    }
                    else {
                        message.teamScores.push(reader.int32());
                    }
                    break;
                case 13:
                    message.confirm = exports.CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.decode(reader, reader.uint32());
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
                    }
                    else {
                        message.enemyKills.push(reader.int32());
                    }
                    break;
                case 17:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.enemyHeadshots.push(reader.int32());
                        }
                    }
                    else {
                        message.enemyHeadshots.push(reader.int32());
                    }
                    break;
                case 18:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.enemy3ks.push(reader.int32());
                        }
                    }
                    else {
                        message.enemy3ks.push(reader.int32());
                    }
                    break;
                case 19:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.enemy4ks.push(reader.int32());
                        }
                    }
                    else {
                        message.enemy4ks.push(reader.int32());
                    }
                    break;
                case 20:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.enemy5ks.push(reader.int32());
                        }
                    }
                    else {
                        message.enemy5ks.push(reader.int32());
                    }
                    break;
                case 21:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.mvps.push(reader.int32());
                        }
                    }
                    else {
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
                    }
                    else {
                        message.enemyKillsAgg.push(reader.int32());
                    }
                    break;
                case 26:
                    message.dropInfo = exports.CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.decode(reader, reader.uint32());
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
                    }
                    else {
                        message.enemy2ks.push(reader.int32());
                    }
                    break;
                case 29:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.playerSpawned.push(reader.int32());
                        }
                    }
                    else {
                        message.playerSpawned.push(reader.int32());
                    }
                    break;
                case 30:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.teamSpawnCount.push(reader.int32());
                        }
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        const message = createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats();
        message.reservationid =
            object.reservationid !== undefined && object.reservationid !== null
                ? Long.fromValue(object.reservationid)
                : Long.UZERO;
        message.reservation =
            object.reservation !== undefined && object.reservation !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(object.reservation)
                : undefined;
        message.map = (_a = object.map) !== null && _a !== void 0 ? _a : "";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.kills = ((_c = object.kills) === null || _c === void 0 ? void 0 : _c.map(e => e)) || [];
        message.assists = ((_d = object.assists) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.deaths = ((_e = object.deaths) === null || _e === void 0 ? void 0 : _e.map(e => e)) || [];
        message.scores = ((_f = object.scores) === null || _f === void 0 ? void 0 : _f.map(e => e)) || [];
        message.pings = ((_g = object.pings) === null || _g === void 0 ? void 0 : _g.map(e => e)) || [];
        message.roundResult = (_h = object.roundResult) !== null && _h !== void 0 ? _h : 0;
        message.matchResult = (_j = object.matchResult) !== null && _j !== void 0 ? _j : 0;
        message.teamScores = ((_k = object.teamScores) === null || _k === void 0 ? void 0 : _k.map(e => e)) || [];
        message.confirm =
            object.confirm !== undefined && object.confirm !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ServerConfirm.fromPartial(object.confirm)
                : undefined;
        message.reservationStage = (_l = object.reservationStage) !== null && _l !== void 0 ? _l : 0;
        message.matchDuration = (_m = object.matchDuration) !== null && _m !== void 0 ? _m : 0;
        message.enemyKills = ((_o = object.enemyKills) === null || _o === void 0 ? void 0 : _o.map(e => e)) || [];
        message.enemyHeadshots = ((_p = object.enemyHeadshots) === null || _p === void 0 ? void 0 : _p.map(e => e)) || [];
        message.enemy3ks = ((_q = object.enemy3ks) === null || _q === void 0 ? void 0 : _q.map(e => e)) || [];
        message.enemy4ks = ((_r = object.enemy4ks) === null || _r === void 0 ? void 0 : _r.map(e => e)) || [];
        message.enemy5ks = ((_s = object.enemy5ks) === null || _s === void 0 ? void 0 : _s.map(e => e)) || [];
        message.mvps = ((_t = object.mvps) === null || _t === void 0 ? void 0 : _t.map(e => e)) || [];
        message.spectatorsCount = (_u = object.spectatorsCount) !== null && _u !== void 0 ? _u : 0;
        message.spectatorsCountTv = (_v = object.spectatorsCountTv) !== null && _v !== void 0 ? _v : 0;
        message.spectatorsCountLnk = (_w = object.spectatorsCountLnk) !== null && _w !== void 0 ? _w : 0;
        message.enemyKillsAgg = ((_x = object.enemyKillsAgg) === null || _x === void 0 ? void 0 : _x.map(e => e)) || [];
        message.dropInfo =
            object.dropInfo !== undefined && object.dropInfo !== null
                ? exports.CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo.fromPartial(object.dropInfo)
                : undefined;
        message.bSwitchedTeams = (_y = object.bSwitchedTeams) !== null && _y !== void 0 ? _y : false;
        message.enemy2ks = ((_z = object.enemy2ks) === null || _z === void 0 ? void 0 : _z.map(e => e)) || [];
        message.playerSpawned = ((_0 = object.playerSpawned) === null || _0 === void 0 ? void 0 : _0.map(e => e)) || [];
        message.teamSpawnCount = ((_1 = object.teamSpawnCount) === null || _1 === void 0 ? void 0 : _1.map(e => e)) || [];
        message.maxRounds = (_2 = object.maxRounds) !== null && _2 !== void 0 ? _2 : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo() {
    return { accountMvp: 0 };
}
exports.CMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountMvp !== 0) {
            writer.uint32(8).uint32(message.accountMvp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchmakingServerRoundStats_DropInfo();
        message.accountMvp = (_a = object.accountMvp) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingClient2GCHello() {
    return {};
}
exports.CMsgGCCStrike15V2MatchmakingClient2GCHello = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(_) {
        const message = createBaseCMsgGCCStrike15V2MatchmakingClient2GCHello();
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientHello() {
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
exports.CMsgGCCStrike15V2MatchmakingGC2ClientHello = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountId !== 0) {
            writer.uint32(8).uint32(message.accountId);
        }
        if (message.ongoingmatch !== undefined) {
            exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(message.ongoingmatch, writer.uint32(18).fork()).ldelim();
        }
        if (message.globalStats !== undefined) {
            exports.GlobalStatistics.encode(message.globalStats, writer.uint32(26).fork()).ldelim();
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
            exports.PlayerRankingInfo.encode(message.ranking, writer.uint32(58).fork()).ldelim();
        }
        if (message.commendation !== undefined) {
            exports.PlayerCommendationInfo.encode(message.commendation, writer.uint32(66).fork()).ldelim();
        }
        if (message.medals !== undefined) {
            exports.PlayerMedalsInfo.encode(message.medals, writer.uint32(74).fork()).ldelim();
        }
        if (message.myCurrentEvent !== undefined) {
            exports.TournamentEvent.encode(message.myCurrentEvent, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.myCurrentEventTeams) {
            exports.TournamentTeam.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.myCurrentTeam !== undefined) {
            exports.TournamentTeam.encode(message.myCurrentTeam, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.myCurrentEventStages) {
            exports.TournamentEvent.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.surveyVote !== 0) {
            writer.uint32(112).uint32(message.surveyVote);
        }
        if (message.activity !== undefined) {
            exports.AccountActivity.encode(message.activity, writer.uint32(122).fork()).ldelim();
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
            exports.PlayerRankingInfo.encode(v, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientHello();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.uint32();
                    break;
                case 2:
                    message.ongoingmatch = exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.globalStats = exports.GlobalStatistics.decode(reader, reader.uint32());
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
                    message.ranking = exports.PlayerRankingInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.commendation = exports.PlayerCommendationInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.medals = exports.PlayerMedalsInfo.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.myCurrentEvent = exports.TournamentEvent.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.myCurrentEventTeams.push(exports.TournamentTeam.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.myCurrentTeam = exports.TournamentTeam.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.myCurrentEventStages.push(exports.TournamentEvent.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.surveyVote = reader.uint32();
                    break;
                case 15:
                    message.activity = exports.AccountActivity.decode(reader, reader.uint32());
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
                    message.rankings.push(exports.PlayerRankingInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientHello();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.ongoingmatch =
            object.ongoingmatch !== undefined && object.ongoingmatch !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(object.ongoingmatch)
                : undefined;
        message.globalStats =
            object.globalStats !== undefined && object.globalStats !== null
                ? exports.GlobalStatistics.fromPartial(object.globalStats)
                : undefined;
        message.penaltySeconds = (_b = object.penaltySeconds) !== null && _b !== void 0 ? _b : 0;
        message.penaltyReason = (_c = object.penaltyReason) !== null && _c !== void 0 ? _c : 0;
        message.vacBanned = (_d = object.vacBanned) !== null && _d !== void 0 ? _d : 0;
        message.ranking =
            object.ranking !== undefined && object.ranking !== null
                ? exports.PlayerRankingInfo.fromPartial(object.ranking)
                : undefined;
        message.commendation =
            object.commendation !== undefined && object.commendation !== null
                ? exports.PlayerCommendationInfo.fromPartial(object.commendation)
                : undefined;
        message.medals =
            object.medals !== undefined && object.medals !== null
                ? exports.PlayerMedalsInfo.fromPartial(object.medals)
                : undefined;
        message.myCurrentEvent =
            object.myCurrentEvent !== undefined && object.myCurrentEvent !== null
                ? exports.TournamentEvent.fromPartial(object.myCurrentEvent)
                : undefined;
        message.myCurrentEventTeams =
            ((_e = object.myCurrentEventTeams) === null || _e === void 0 ? void 0 : _e.map(e => exports.TournamentTeam.fromPartial(e))) || [];
        message.myCurrentTeam =
            object.myCurrentTeam !== undefined && object.myCurrentTeam !== null
                ? exports.TournamentTeam.fromPartial(object.myCurrentTeam)
                : undefined;
        message.myCurrentEventStages =
            ((_f = object.myCurrentEventStages) === null || _f === void 0 ? void 0 : _f.map(e => exports.TournamentEvent.fromPartial(e))) ||
                [];
        message.surveyVote = (_g = object.surveyVote) !== null && _g !== void 0 ? _g : 0;
        message.activity =
            object.activity !== undefined && object.activity !== null
                ? exports.AccountActivity.fromPartial(object.activity)
                : undefined;
        message.playerLevel = (_h = object.playerLevel) !== null && _h !== void 0 ? _h : 0;
        message.playerCurXp = (_j = object.playerCurXp) !== null && _j !== void 0 ? _j : 0;
        message.playerXpBonusFlags = (_k = object.playerXpBonusFlags) !== null && _k !== void 0 ? _k : 0;
        message.rankings =
            ((_l = object.rankings) === null || _l === void 0 ? void 0 : _l.map(e => exports.PlayerRankingInfo.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2AccountPrivacySettings() {
    return { settings: [] };
}
exports.CMsgGCCStrike15V2AccountPrivacySettings = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.settings) {
            exports.CMsgGCCStrike15V2AccountPrivacySettings_Setting.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.settings.push(exports.CMsgGCCStrike15V2AccountPrivacySettings_Setting.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings();
        message.settings =
            ((_a = object.settings) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCCStrike15V2AccountPrivacySettings_Setting.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2AccountPrivacySettings_Setting() {
    return { settingType: 0, settingValue: 0 };
}
exports.CMsgGCCStrike15V2AccountPrivacySettings_Setting = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.settingType !== 0) {
            writer.uint32(8).uint32(message.settingType);
        }
        if (message.settingValue !== 0) {
            writer.uint32(16).uint32(message.settingValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2AccountPrivacySettings_Setting();
        message.settingType = (_a = object.settingType) !== null && _a !== void 0 ? _a : 0;
        message.settingValue = (_b = object.settingValue) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon() {
    return {
        accountId: 0,
        abandonedMatch: undefined,
        penaltySeconds: 0,
        penaltyReason: 0
    };
}
exports.CMsgGCCStrike15V2MatchmakingGC2ClientAbandon = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountId !== 0) {
            writer.uint32(8).uint32(message.accountId);
        }
        if (message.abandonedMatch !== undefined) {
            exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(message.abandonedMatch, writer.uint32(18).fork()).ldelim();
        }
        if (message.penaltySeconds !== 0) {
            writer.uint32(24).uint32(message.penaltySeconds);
        }
        if (message.penaltyReason !== 0) {
            writer.uint32(32).uint32(message.penaltyReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.uint32();
                    break;
                case 2:
                    message.abandonedMatch = exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2MatchmakingGC2ClientAbandon();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.abandonedMatch =
            object.abandonedMatch !== undefined && object.abandonedMatch !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(object.abandonedMatch)
                : undefined;
        message.penaltySeconds = (_b = object.penaltySeconds) !== null && _b !== void 0 ? _b : 0;
        message.penaltyReason = (_c = object.penaltyReason) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientGCRankUpdate() {
    return { rankings: [] };
}
exports.CMsgGCCStrike15V2ClientGCRankUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.rankings) {
            exports.PlayerRankingInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientGCRankUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rankings.push(exports.PlayerRankingInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientGCRankUpdate();
        message.rankings =
            ((_a = object.rankings) === null || _a === void 0 ? void 0 : _a.map(e => exports.PlayerRankingInfo.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate() {
    return { mainPostUrl: "" };
}
exports.CMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.mainPostUrl !== "") {
            writer.uint32(10).string(message.mainPostUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchmakingOperator2GCBlogUpdate();
        message.mainPostUrl = (_a = object.mainPostUrl) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ServerNotificationForUserPenalty() {
    return { accountId: 0, reason: 0, seconds: 0, communicationCooldown: false };
}
exports.CMsgGCCStrike15V2ServerNotificationForUserPenalty = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ServerNotificationForUserPenalty();
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2ServerNotificationForUserPenalty();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : 0;
        message.seconds = (_c = object.seconds) !== null && _c !== void 0 ? _c : 0;
        message.communicationCooldown = (_d = object.communicationCooldown) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientReportPlayer() {
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
exports.CMsgGCCStrike15V2ClientReportPlayer = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.matchId = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseCMsgGCCStrike15V2ClientReportPlayer();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.rptAimbot = (_b = object.rptAimbot) !== null && _b !== void 0 ? _b : 0;
        message.rptWallhack = (_c = object.rptWallhack) !== null && _c !== void 0 ? _c : 0;
        message.rptSpeedhack = (_d = object.rptSpeedhack) !== null && _d !== void 0 ? _d : 0;
        message.rptTeamharm = (_e = object.rptTeamharm) !== null && _e !== void 0 ? _e : 0;
        message.rptTextabuse = (_f = object.rptTextabuse) !== null && _f !== void 0 ? _f : 0;
        message.rptVoiceabuse = (_g = object.rptVoiceabuse) !== null && _g !== void 0 ? _g : 0;
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.reportFromDemo = (_h = object.reportFromDemo) !== null && _h !== void 0 ? _h : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientCommendPlayer() {
    return {
        accountId: 0,
        matchId: Long.UZERO,
        commendation: undefined,
        tokens: 0
    };
}
exports.CMsgGCCStrike15V2ClientCommendPlayer = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountId !== 0) {
            writer.uint32(8).uint32(message.accountId);
        }
        if (!message.matchId.isZero()) {
            writer.uint32(64).uint64(message.matchId);
        }
        if (message.commendation !== undefined) {
            exports.PlayerCommendationInfo.encode(message.commendation, writer.uint32(74).fork()).ldelim();
        }
        if (message.tokens !== 0) {
            writer.uint32(80).uint32(message.tokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientCommendPlayer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.uint32();
                    break;
                case 8:
                    message.matchId = reader.uint64();
                    break;
                case 9:
                    message.commendation = exports.PlayerCommendationInfo.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2ClientCommendPlayer();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.commendation =
            object.commendation !== undefined && object.commendation !== null
                ? exports.PlayerCommendationInfo.fromPartial(object.commendation)
                : undefined;
        message.tokens = (_b = object.tokens) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientReportServer() {
    return {
        rptPoorperf: 0,
        rptAbusivemodels: 0,
        rptBadmotd: 0,
        rptListingabuse: 0,
        rptInventoryabuse: 0,
        matchId: Long.UZERO
    };
}
exports.CMsgGCCStrike15V2ClientReportServer = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.matchId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2ClientReportServer();
        message.rptPoorperf = (_a = object.rptPoorperf) !== null && _a !== void 0 ? _a : 0;
        message.rptAbusivemodels = (_b = object.rptAbusivemodels) !== null && _b !== void 0 ? _b : 0;
        message.rptBadmotd = (_c = object.rptBadmotd) !== null && _c !== void 0 ? _c : 0;
        message.rptListingabuse = (_d = object.rptListingabuse) !== null && _d !== void 0 ? _d : 0;
        message.rptInventoryabuse = (_e = object.rptInventoryabuse) !== null && _e !== void 0 ? _e : 0;
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientReportResponse() {
    return {
        confirmationId: Long.UZERO,
        accountId: 0,
        serverIp: 0,
        responseType: 0,
        responseResult: 0,
        tokens: 0
    };
}
exports.CMsgGCCStrike15V2ClientReportResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirmationId = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2ClientReportResponse();
        message.confirmationId =
            object.confirmationId !== undefined && object.confirmationId !== null
                ? Long.fromValue(object.confirmationId)
                : Long.UZERO;
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.serverIp = (_b = object.serverIp) !== null && _b !== void 0 ? _b : 0;
        message.responseType = (_c = object.responseType) !== null && _c !== void 0 ? _c : 0;
        message.responseResult = (_d = object.responseResult) !== null && _d !== void 0 ? _d : 0;
        message.tokens = (_e = object.tokens) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientRequestWatchInfoFriends() {
    return {
        requestId: 0,
        accountIds: [],
        serverid: Long.UZERO,
        matchid: Long.UZERO,
        clientLauncher: 0,
        dataCenterPings: []
    };
}
exports.CMsgGCCStrike15V2ClientRequestWatchInfoFriends = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.DataCenterPing.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
                        message.accountIds.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.serverid = reader.uint64();
                    break;
                case 4:
                    message.matchid = reader.uint64();
                    break;
                case 5:
                    message.clientLauncher = reader.uint32();
                    break;
                case 6:
                    message.dataCenterPings.push(exports.DataCenterPing.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2ClientRequestWatchInfoFriends();
        message.requestId = (_a = object.requestId) !== null && _a !== void 0 ? _a : 0;
        message.accountIds = ((_b = object.accountIds) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        message.serverid =
            object.serverid !== undefined && object.serverid !== null
                ? Long.fromValue(object.serverid)
                : Long.UZERO;
        message.matchid =
            object.matchid !== undefined && object.matchid !== null
                ? Long.fromValue(object.matchid)
                : Long.UZERO;
        message.clientLauncher = (_c = object.clientLauncher) !== null && _c !== void 0 ? _c : 0;
        message.dataCenterPings =
            ((_d = object.dataCenterPings) === null || _d === void 0 ? void 0 : _d.map(e => exports.DataCenterPing.fromPartial(e))) || [];
        return message;
    }
};
function createBaseWatchableMatchInfo() {
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
exports.WatchableMatchInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.clDecryptdataKey = reader.uint64();
                    break;
                case 7:
                    message.clDecryptdataKeyPub = reader.uint64();
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
                    message.serverId = reader.uint64();
                    break;
                case 12:
                    message.matchId = reader.uint64();
                    break;
                case 13:
                    message.reservationId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseWatchableMatchInfo();
        message.serverIp = (_a = object.serverIp) !== null && _a !== void 0 ? _a : 0;
        message.tvPort = (_b = object.tvPort) !== null && _b !== void 0 ? _b : 0;
        message.tvSpectators = (_c = object.tvSpectators) !== null && _c !== void 0 ? _c : 0;
        message.tvTime = (_d = object.tvTime) !== null && _d !== void 0 ? _d : 0;
        message.tvWatchPassword = (_e = object.tvWatchPassword) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.clDecryptdataKey =
            object.clDecryptdataKey !== undefined && object.clDecryptdataKey !== null
                ? Long.fromValue(object.clDecryptdataKey)
                : Long.UZERO;
        message.clDecryptdataKeyPub =
            object.clDecryptdataKeyPub !== undefined &&
                object.clDecryptdataKeyPub !== null
                ? Long.fromValue(object.clDecryptdataKeyPub)
                : Long.UZERO;
        message.gameType = (_f = object.gameType) !== null && _f !== void 0 ? _f : 0;
        message.gameMapgroup = (_g = object.gameMapgroup) !== null && _g !== void 0 ? _g : "";
        message.gameMap = (_h = object.gameMap) !== null && _h !== void 0 ? _h : "";
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
function createBaseCMsgGCCStrike15V2ClientRequestJoinFriendData() {
    return {
        version: 0,
        accountId: 0,
        joinToken: 0,
        joinIpp: 0,
        res: undefined,
        errormsg: ""
    };
}
exports.CMsgGCCStrike15V2ClientRequestJoinFriendData = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(message.res, writer.uint32(42).fork()).ldelim();
        }
        if (message.errormsg !== "") {
            writer.uint32(50).string(message.errormsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.res = exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2ClientRequestJoinFriendData();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : 0;
        message.accountId = (_b = object.accountId) !== null && _b !== void 0 ? _b : 0;
        message.joinToken = (_c = object.joinToken) !== null && _c !== void 0 ? _c : 0;
        message.joinIpp = (_d = object.joinIpp) !== null && _d !== void 0 ? _d : 0;
        message.res =
            object.res !== undefined && object.res !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(object.res)
                : undefined;
        message.errormsg = (_e = object.errormsg) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientRequestJoinServerData() {
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
exports.CMsgGCCStrike15V2ClientRequestJoinServerData = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.encode(message.res, writer.uint32(50).fork()).ldelim();
        }
        if (message.errormsg !== "") {
            writer.uint32(58).string(message.errormsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.serverid = reader.uint64();
                    break;
                case 4:
                    message.serverIp = reader.uint32();
                    break;
                case 5:
                    message.serverPort = reader.uint32();
                    break;
                case 6:
                    message.res = exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2ClientRequestJoinServerData();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : 0;
        message.accountId = (_b = object.accountId) !== null && _b !== void 0 ? _b : 0;
        message.serverid =
            object.serverid !== undefined && object.serverid !== null
                ? Long.fromValue(object.serverid)
                : Long.UZERO;
        message.serverIp = (_c = object.serverIp) !== null && _c !== void 0 ? _c : 0;
        message.serverPort = (_d = object.serverPort) !== null && _d !== void 0 ? _d : 0;
        message.res =
            object.res !== undefined && object.res !== null
                ? exports.CMsgGCCStrike15V2MatchmakingGC2ClientReserve.fromPartial(object.res)
                : undefined;
        message.errormsg = (_e = object.errormsg) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseCMsgGCCstrike15V2ClientRequestNewMission() {
    return { missionId: 0, campaignId: 0 };
}
exports.CMsgGCCstrike15V2ClientRequestNewMission = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.missionId !== 0) {
            writer.uint32(16).uint32(message.missionId);
        }
        if (message.campaignId !== 0) {
            writer.uint32(24).uint32(message.campaignId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCstrike15V2ClientRequestNewMission();
        message.missionId = (_a = object.missionId) !== null && _a !== void 0 ? _a : 0;
        message.campaignId = (_b = object.campaignId) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCstrike15V2ClientRedeemMissionReward() {
    return { campaignId: 0, redeemId: 0, redeemableBalance: 0, expectedCost: 0 };
}
exports.CMsgGCCstrike15V2ClientRedeemMissionReward = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCstrike15V2ClientRedeemMissionReward();
        message.campaignId = (_a = object.campaignId) !== null && _a !== void 0 ? _a : 0;
        message.redeemId = (_b = object.redeemId) !== null && _b !== void 0 ? _b : 0;
        message.redeemableBalance = (_c = object.redeemableBalance) !== null && _c !== void 0 ? _c : 0;
        message.expectedCost = (_d = object.expectedCost) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded() {
    return {
        xpProgressData: [],
        accountId: 0,
        currentXp: 0,
        currentLevel: 0,
        upgradedDefidx: 0,
        operationPointsAwarded: 0
    };
}
exports.CMsgGCCstrike15V2GC2ServerNotifyXPRewarded = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.xpProgressData) {
            exports.XpProgressData.encode(v, writer.uint32(10).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.xpProgressData.push(exports.XpProgressData.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCMsgGCCstrike15V2GC2ServerNotifyXPRewarded();
        message.xpProgressData =
            ((_a = object.xpProgressData) === null || _a === void 0 ? void 0 : _a.map(e => exports.XpProgressData.fromPartial(e))) || [];
        message.accountId = (_b = object.accountId) !== null && _b !== void 0 ? _b : 0;
        message.currentXp = (_c = object.currentXp) !== null && _c !== void 0 ? _c : 0;
        message.currentLevel = (_d = object.currentLevel) !== null && _d !== void 0 ? _d : 0;
        message.upgradedDefidx = (_e = object.upgradedDefidx) !== null && _e !== void 0 ? _e : 0;
        message.operationPointsAwarded = (_f = object.operationPointsAwarded) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15ClientDeepStats() {
    return { accountId: 0, range: undefined, matches: [] };
}
exports.CMsgGCCStrike15ClientDeepStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountId !== 0) {
            writer.uint32(8).uint32(message.accountId);
        }
        if (message.range !== undefined) {
            exports.CMsgGCCStrike15ClientDeepStats_DeepStatsRange.encode(message.range, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.matches) {
            exports.CMsgGCCStrike15ClientDeepStats_DeepStatsMatch.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15ClientDeepStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.uint32();
                    break;
                case 2:
                    message.range = exports.CMsgGCCStrike15ClientDeepStats_DeepStatsRange.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.matches.push(exports.CMsgGCCStrike15ClientDeepStats_DeepStatsMatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15ClientDeepStats();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.range =
            object.range !== undefined && object.range !== null
                ? exports.CMsgGCCStrike15ClientDeepStats_DeepStatsRange.fromPartial(object.range)
                : undefined;
        message.matches =
            ((_b = object.matches) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCCStrike15ClientDeepStats_DeepStatsMatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsRange() {
    return { begin: 0, end: 0, frozen: false };
}
exports.CMsgGCCStrike15ClientDeepStats_DeepStatsRange = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsRange();
        message.begin = (_a = object.begin) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.frozen = (_c = object.frozen) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch() {
    return { player: undefined, events: [] };
}
exports.CMsgGCCStrike15ClientDeepStats_DeepStatsMatch = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.player !== undefined) {
            exports.DeepPlayerStatsEntry.encode(message.player, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.DeepPlayerMatchEvent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.player = exports.DeepPlayerStatsEntry.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.events.push(exports.DeepPlayerMatchEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15ClientDeepStats_DeepStatsMatch();
        message.player =
            object.player !== undefined && object.player !== null
                ? exports.DeepPlayerStatsEntry.fromPartial(object.player)
                : undefined;
        message.events =
            ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(e => exports.DeepPlayerMatchEvent.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2WatchInfoUsers() {
    return {
        requestId: 0,
        accountIds: [],
        watchableMatchInfos: [],
        extendedTimeout: 0
    };
}
exports.CMsgGCCStrike15V2WatchInfoUsers = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.requestId !== 0) {
            writer.uint32(8).uint32(message.requestId);
        }
        writer.uint32(18).fork();
        for (const v of message.accountIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.watchableMatchInfos) {
            exports.WatchableMatchInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.extendedTimeout !== 0) {
            writer.uint32(40).uint32(message.extendedTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
                        message.accountIds.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.watchableMatchInfos.push(exports.WatchableMatchInfo.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2WatchInfoUsers();
        message.requestId = (_a = object.requestId) !== null && _a !== void 0 ? _a : 0;
        message.accountIds = ((_b = object.accountIds) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        message.watchableMatchInfos =
            ((_c = object.watchableMatchInfos) === null || _c === void 0 ? void 0 : _c.map(e => exports.WatchableMatchInfo.fromPartial(e))) ||
                [];
        message.extendedTimeout = (_d = object.extendedTimeout) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientRequestPlayersProfile() {
    return {
        requestIdDeprecated: 0,
        accountIdsDeprecated: [],
        accountId: 0,
        requestLevel: 0
    };
}
exports.CMsgGCCStrike15V2ClientRequestPlayersProfile = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2ClientRequestPlayersProfile();
        message.requestIdDeprecated = (_a = object.requestIdDeprecated) !== null && _a !== void 0 ? _a : 0;
        message.accountIdsDeprecated =
            ((_b = object.accountIdsDeprecated) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        message.accountId = (_c = object.accountId) !== null && _c !== void 0 ? _c : 0;
        message.requestLevel = (_d = object.requestLevel) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PlayersProfile() {
    return { requestId: 0, accountProfiles: [] };
}
exports.CMsgGCCStrike15V2PlayersProfile = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.requestId !== 0) {
            writer.uint32(8).uint32(message.requestId);
        }
        for (const v of message.accountProfiles) {
            exports.CMsgGCCStrike15V2MatchmakingGC2ClientHello.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2PlayersProfile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.accountProfiles.push(exports.CMsgGCCStrike15V2MatchmakingGC2ClientHello.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2PlayersProfile();
        message.requestId = (_a = object.requestId) !== null && _a !== void 0 ? _a : 0;
        message.accountProfiles =
            ((_b = object.accountProfiles) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCCStrike15V2MatchmakingGC2ClientHello.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate() {
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
exports.CMsgGCCStrike15V2PlayerOverwatchCaseUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.caseid = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseUpdate();
        message.caseid =
            object.caseid !== undefined && object.caseid !== null
                ? Long.fromValue(object.caseid)
                : Long.UZERO;
        message.suspectid = (_a = object.suspectid) !== null && _a !== void 0 ? _a : 0;
        message.fractionid = (_b = object.fractionid) !== null && _b !== void 0 ? _b : 0;
        message.rptAimbot = (_c = object.rptAimbot) !== null && _c !== void 0 ? _c : 0;
        message.rptWallhack = (_d = object.rptWallhack) !== null && _d !== void 0 ? _d : 0;
        message.rptSpeedhack = (_e = object.rptSpeedhack) !== null && _e !== void 0 ? _e : 0;
        message.rptTeamharm = (_f = object.rptTeamharm) !== null && _f !== void 0 ? _f : 0;
        message.reason = (_g = object.reason) !== null && _g !== void 0 ? _g : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment() {
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
exports.CMsgGCCStrike15V2PlayerOverwatchCaseAssignment = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.caseid = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseAssignment();
        message.caseid =
            object.caseid !== undefined && object.caseid !== null
                ? Long.fromValue(object.caseid)
                : Long.UZERO;
        message.caseurl = (_a = object.caseurl) !== null && _a !== void 0 ? _a : "";
        message.verdict = (_b = object.verdict) !== null && _b !== void 0 ? _b : 0;
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : 0;
        message.throttleseconds = (_d = object.throttleseconds) !== null && _d !== void 0 ? _d : 0;
        message.suspectid = (_e = object.suspectid) !== null && _e !== void 0 ? _e : 0;
        message.fractionid = (_f = object.fractionid) !== null && _f !== void 0 ? _f : 0;
        message.numrounds = (_g = object.numrounds) !== null && _g !== void 0 ? _g : 0;
        message.fractionrounds = (_h = object.fractionrounds) !== null && _h !== void 0 ? _h : 0;
        message.streakconvictions = (_j = object.streakconvictions) !== null && _j !== void 0 ? _j : 0;
        message.reason = (_k = object.reason) !== null && _k !== void 0 ? _k : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PlayerOverwatchCaseStatus() {
    return { caseid: Long.UZERO, statusid: 0 };
}
exports.CMsgGCCStrike15V2PlayerOverwatchCaseStatus = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.caseid.isZero()) {
            writer.uint32(8).uint64(message.caseid);
        }
        if (message.statusid !== 0) {
            writer.uint32(16).uint32(message.statusid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.caseid = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2PlayerOverwatchCaseStatus();
        message.caseid =
            object.caseid !== undefined && object.caseid !== null
                ? Long.fromValue(object.caseid)
                : Long.UZERO;
        message.statusid = (_a = object.statusid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCClientHeaderOverwatchEvidence() {
    return { accountid: 0, caseid: Long.UZERO };
}
exports.CClientHeaderOverwatchEvidence = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (!message.caseid.isZero()) {
            writer.uint32(16).uint64(message.caseid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCClientHeaderOverwatchEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.caseid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCClientHeaderOverwatchEvidence();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.caseid =
            object.caseid !== undefined && object.caseid !== null
                ? Long.fromValue(object.caseid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ClientTextMsg() {
    return { id: 0, type: 0, payload: new Uint8Array() };
}
exports.CMsgGCCStrike15V2GC2ClientTextMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2GC2ClientTextMsg();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Client2GCTextMsg() {
    return { id: 0, args: [] };
}
exports.CMsgGCCStrike15V2Client2GCTextMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        for (const v of message.args) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2Client2GCTextMsg();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.args = ((_b = object.args) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchEndRunRewardDrops() {
    return { serverinfo: undefined, matchEndQuestData: undefined };
}
exports.CMsgGCCStrike15V2MatchEndRunRewardDrops = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.serverinfo !== undefined) {
            exports.CMsgGCCStrike15V2MatchmakingServerReservationResponse.encode(message.serverinfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.matchEndQuestData !== undefined) {
            exports.CMsgGCServerQuestUpdateData.encode(message.matchEndQuestData, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchEndRunRewardDrops();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.serverinfo = exports.CMsgGCCStrike15V2MatchmakingServerReservationResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.matchEndQuestData = exports.CMsgGCServerQuestUpdateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCStrike15V2MatchEndRunRewardDrops();
        message.serverinfo =
            object.serverinfo !== undefined && object.serverinfo !== null
                ? exports.CMsgGCCStrike15V2MatchmakingServerReservationResponse.fromPartial(object.serverinfo)
                : undefined;
        message.matchEndQuestData =
            object.matchEndQuestData !== undefined &&
                object.matchEndQuestData !== null
                ? exports.CMsgGCServerQuestUpdateData.fromPartial(object.matchEndQuestData)
                : undefined;
        return message;
    }
};
function createBaseCEconItemPreviewDataBlock() {
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
exports.CEconItemPreviewDataBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CEconItemPreviewDataBlock_Sticker.encode(v, writer.uint32(98).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCEconItemPreviewDataBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.itemid = reader.uint64();
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
                    message.stickers.push(exports.CEconItemPreviewDataBlock_Sticker.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseCEconItemPreviewDataBlock();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.itemid =
            object.itemid !== undefined && object.itemid !== null
                ? Long.fromValue(object.itemid)
                : Long.UZERO;
        message.defindex = (_b = object.defindex) !== null && _b !== void 0 ? _b : 0;
        message.paintindex = (_c = object.paintindex) !== null && _c !== void 0 ? _c : 0;
        message.rarity = (_d = object.rarity) !== null && _d !== void 0 ? _d : 0;
        message.quality = (_e = object.quality) !== null && _e !== void 0 ? _e : 0;
        message.paintwear = (_f = object.paintwear) !== null && _f !== void 0 ? _f : 0;
        message.paintseed = (_g = object.paintseed) !== null && _g !== void 0 ? _g : 0;
        message.killeaterscoretype = (_h = object.killeaterscoretype) !== null && _h !== void 0 ? _h : 0;
        message.killeatervalue = (_j = object.killeatervalue) !== null && _j !== void 0 ? _j : 0;
        message.customname = (_k = object.customname) !== null && _k !== void 0 ? _k : "";
        message.stickers =
            ((_l = object.stickers) === null || _l === void 0 ? void 0 : _l.map(e => exports.CEconItemPreviewDataBlock_Sticker.fromPartial(e))) || [];
        message.inventory = (_m = object.inventory) !== null && _m !== void 0 ? _m : 0;
        message.origin = (_o = object.origin) !== null && _o !== void 0 ? _o : 0;
        message.questid = (_p = object.questid) !== null && _p !== void 0 ? _p : 0;
        message.dropreason = (_q = object.dropreason) !== null && _q !== void 0 ? _q : 0;
        message.musicindex = (_r = object.musicindex) !== null && _r !== void 0 ? _r : 0;
        message.entindex = (_s = object.entindex) !== null && _s !== void 0 ? _s : 0;
        return message;
    }
};
function createBaseCEconItemPreviewDataBlock_Sticker() {
    return { slot: 0, stickerId: 0, wear: 0, scale: 0, rotation: 0, tintId: 0 };
}
exports.CEconItemPreviewDataBlock_Sticker = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCEconItemPreviewDataBlock_Sticker();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : 0;
        message.stickerId = (_b = object.stickerId) !== null && _b !== void 0 ? _b : 0;
        message.wear = (_c = object.wear) !== null && _c !== void 0 ? _c : 0;
        message.scale = (_d = object.scale) !== null && _d !== void 0 ? _d : 0;
        message.rotation = (_e = object.rotation) !== null && _e !== void 0 ? _e : 0;
        message.tintId = (_f = object.tintId) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchEndRewardDropsNotification() {
    return { iteminfo: undefined };
}
exports.CMsgGCCStrike15V2MatchEndRewardDropsNotification = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.iteminfo !== undefined) {
            exports.CEconItemPreviewDataBlock.encode(message.iteminfo, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchEndRewardDropsNotification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.iteminfo = exports.CEconItemPreviewDataBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCStrike15V2MatchEndRewardDropsNotification();
        message.iteminfo =
            object.iteminfo !== undefined && object.iteminfo !== null
                ? exports.CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
                : undefined;
        return message;
    }
};
function createBaseCMsgItemAcknowledged() {
    return { iteminfo: undefined };
}
exports.CMsgItemAcknowledged = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.iteminfo !== undefined) {
            exports.CEconItemPreviewDataBlock.encode(message.iteminfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgItemAcknowledged();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iteminfo = exports.CEconItemPreviewDataBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgItemAcknowledged();
        message.iteminfo =
            object.iteminfo !== undefined && object.iteminfo !== null
                ? exports.CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
                : undefined;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest() {
    return {
        paramS: Long.UZERO,
        paramA: Long.UZERO,
        paramD: Long.UZERO,
        paramM: Long.UZERO
    };
}
exports.CMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paramS = reader.uint64();
                    break;
                case 2:
                    message.paramA = reader.uint64();
                    break;
                case 3:
                    message.paramD = reader.uint64();
                    break;
                case 4:
                    message.paramM = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockRequest();
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
function createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse() {
    return { iteminfo: undefined };
}
exports.CMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.iteminfo !== undefined) {
            exports.CEconItemPreviewDataBlock.encode(message.iteminfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iteminfo = exports.CEconItemPreviewDataBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCStrike15V2Client2GCEconPreviewDataBlockResponse();
        message.iteminfo =
            object.iteminfo !== undefined && object.iteminfo !== null
                ? exports.CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
                : undefined;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames() {
    return {};
}
exports.CMsgGCCStrike15V2MatchListRequestCurrentLiveGames = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames();
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
    fromPartial(_) {
        const message = createBaseCMsgGCCStrike15V2MatchListRequestCurrentLiveGames();
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchListRequestLiveGameForUser() {
    return { accountid: 0 };
}
exports.CMsgGCCStrike15V2MatchListRequestLiveGameForUser = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestLiveGameForUser();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestLiveGameForUser();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchListRequestRecentUserGames() {
    return { accountid: 0 };
}
exports.CMsgGCCStrike15V2MatchListRequestRecentUserGames = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestRecentUserGames();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestRecentUserGames();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchListRequestTournamentGames() {
    return { eventid: 0 };
}
exports.CMsgGCCStrike15V2MatchListRequestTournamentGames = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventid !== 0) {
            writer.uint32(8).int32(message.eventid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestTournamentGames();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestTournamentGames();
        message.eventid = (_a = object.eventid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchListRequestFullGameInfo() {
    return { matchid: Long.UZERO, outcomeid: Long.UZERO, token: 0 };
}
exports.CMsgGCCStrike15V2MatchListRequestFullGameInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestFullGameInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchid = reader.uint64();
                    break;
                case 2:
                    message.outcomeid = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2MatchListRequestFullGameInfo();
        message.matchid =
            object.matchid !== undefined && object.matchid !== null
                ? Long.fromValue(object.matchid)
                : Long.UZERO;
        message.outcomeid =
            object.outcomeid !== undefined && object.outcomeid !== null
                ? Long.fromValue(object.outcomeid)
                : Long.UZERO;
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCDataGCCStrike15V2MatchInfo() {
    return {
        matchid: Long.UZERO,
        matchtime: 0,
        watchablematchinfo: undefined,
        roundstatsLegacy: undefined,
        roundstatsall: []
    };
}
exports.CDataGCCStrike15V2MatchInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.matchid.isZero()) {
            writer.uint32(8).uint64(message.matchid);
        }
        if (message.matchtime !== 0) {
            writer.uint32(16).uint32(message.matchtime);
        }
        if (message.watchablematchinfo !== undefined) {
            exports.WatchableMatchInfo.encode(message.watchablematchinfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.roundstatsLegacy !== undefined) {
            exports.CMsgGCCStrike15V2MatchmakingServerRoundStats.encode(message.roundstatsLegacy, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.roundstatsall) {
            exports.CMsgGCCStrike15V2MatchmakingServerRoundStats.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCDataGCCStrike15V2MatchInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchid = reader.uint64();
                    break;
                case 2:
                    message.matchtime = reader.uint32();
                    break;
                case 3:
                    message.watchablematchinfo = exports.WatchableMatchInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.roundstatsLegacy = exports.CMsgGCCStrike15V2MatchmakingServerRoundStats.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.roundstatsall.push(exports.CMsgGCCStrike15V2MatchmakingServerRoundStats.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCDataGCCStrike15V2MatchInfo();
        message.matchid =
            object.matchid !== undefined && object.matchid !== null
                ? Long.fromValue(object.matchid)
                : Long.UZERO;
        message.matchtime = (_a = object.matchtime) !== null && _a !== void 0 ? _a : 0;
        message.watchablematchinfo =
            object.watchablematchinfo !== undefined &&
                object.watchablematchinfo !== null
                ? exports.WatchableMatchInfo.fromPartial(object.watchablematchinfo)
                : undefined;
        message.roundstatsLegacy =
            object.roundstatsLegacy !== undefined && object.roundstatsLegacy !== null
                ? exports.CMsgGCCStrike15V2MatchmakingServerRoundStats.fromPartial(object.roundstatsLegacy)
                : undefined;
        message.roundstatsall =
            ((_b = object.roundstatsall) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCCStrike15V2MatchmakingServerRoundStats.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentGroupTeam() {
    return { teamId: 0, score: 0, correctpick: false };
}
exports.CDataGCCStrike15V2TournamentGroupTeam = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCDataGCCStrike15V2TournamentGroupTeam();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : 0;
        message.score = (_b = object.score) !== null && _b !== void 0 ? _b : 0;
        message.correctpick = (_c = object.correctpick) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentGroup() {
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
exports.CDataGCCStrike15V2TournamentGroup = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CDataGCCStrike15V2TournamentGroupTeam.encode(v, writer.uint32(42).fork()).ldelim();
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
            exports.CDataGCCStrike15V2TournamentGroup_Picks.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.teams.push(exports.CDataGCCStrike15V2TournamentGroupTeam.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.stageIds.push(reader.int32());
                        }
                    }
                    else {
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
                    message.picks.push(exports.CDataGCCStrike15V2TournamentGroup_Picks.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseCDataGCCStrike15V2TournamentGroup();
        message.groupid = (_a = object.groupid) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.desc = (_c = object.desc) !== null && _c !== void 0 ? _c : "";
        message.picksDeprecated = (_d = object.picksDeprecated) !== null && _d !== void 0 ? _d : 0;
        message.teams =
            ((_e = object.teams) === null || _e === void 0 ? void 0 : _e.map(e => exports.CDataGCCStrike15V2TournamentGroupTeam.fromPartial(e))) || [];
        message.stageIds = ((_f = object.stageIds) === null || _f === void 0 ? void 0 : _f.map(e => e)) || [];
        message.picklockuntiltime = (_g = object.picklockuntiltime) !== null && _g !== void 0 ? _g : 0;
        message.pickableteams = (_h = object.pickableteams) !== null && _h !== void 0 ? _h : 0;
        message.pointsPerPick = (_j = object.pointsPerPick) !== null && _j !== void 0 ? _j : 0;
        message.picks =
            ((_k = object.picks) === null || _k === void 0 ? void 0 : _k.map(e => exports.CDataGCCStrike15V2TournamentGroup_Picks.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentGroup_Picks() {
    return { pickids: [] };
}
exports.CDataGCCStrike15V2TournamentGroup_Picks = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.pickids) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a;
        const message = createBaseCDataGCCStrike15V2TournamentGroup_Picks();
        message.pickids = ((_a = object.pickids) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentSection() {
    return { sectionid: 0, name: "", desc: "", groups: [] };
}
exports.CDataGCCStrike15V2TournamentSection = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CDataGCCStrike15V2TournamentGroup.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.groups.push(exports.CDataGCCStrike15V2TournamentGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCDataGCCStrike15V2TournamentSection();
        message.sectionid = (_a = object.sectionid) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.desc = (_c = object.desc) !== null && _c !== void 0 ? _c : "";
        message.groups =
            ((_d = object.groups) === null || _d === void 0 ? void 0 : _d.map(e => exports.CDataGCCStrike15V2TournamentGroup.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCDataGCCStrike15V2TournamentInfo() {
    return { sections: [], tournamentEvent: undefined, tournamentTeams: [] };
}
exports.CDataGCCStrike15V2TournamentInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.sections) {
            exports.CDataGCCStrike15V2TournamentSection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tournamentEvent !== undefined) {
            exports.TournamentEvent.encode(message.tournamentEvent, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.tournamentTeams) {
            exports.TournamentTeam.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCDataGCCStrike15V2TournamentInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sections.push(exports.CDataGCCStrike15V2TournamentSection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tournamentEvent = exports.TournamentEvent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tournamentTeams.push(exports.TournamentTeam.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCDataGCCStrike15V2TournamentInfo();
        message.sections =
            ((_a = object.sections) === null || _a === void 0 ? void 0 : _a.map(e => exports.CDataGCCStrike15V2TournamentSection.fromPartial(e))) || [];
        message.tournamentEvent =
            object.tournamentEvent !== undefined && object.tournamentEvent !== null
                ? exports.TournamentEvent.fromPartial(object.tournamentEvent)
                : undefined;
        message.tournamentTeams =
            ((_b = object.tournamentTeams) === null || _b === void 0 ? void 0 : _b.map(e => exports.TournamentTeam.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchList() {
    return {
        msgrequestid: 0,
        accountid: 0,
        servertime: 0,
        matches: [],
        streams: [],
        tournamentinfo: undefined
    };
}
exports.CMsgGCCStrike15V2MatchList = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CDataGCCStrike15V2MatchInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.streams) {
            exports.TournamentTeam.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.tournamentinfo !== undefined) {
            exports.CDataGCCStrike15V2TournamentInfo.encode(message.tournamentinfo, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.matches.push(exports.CDataGCCStrike15V2MatchInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.streams.push(exports.TournamentTeam.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.tournamentinfo = exports.CDataGCCStrike15V2TournamentInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2MatchList();
        message.msgrequestid = (_a = object.msgrequestid) !== null && _a !== void 0 ? _a : 0;
        message.accountid = (_b = object.accountid) !== null && _b !== void 0 ? _b : 0;
        message.servertime = (_c = object.servertime) !== null && _c !== void 0 ? _c : 0;
        message.matches =
            ((_d = object.matches) === null || _d === void 0 ? void 0 : _d.map(e => exports.CDataGCCStrike15V2MatchInfo.fromPartial(e))) ||
                [];
        message.streams =
            ((_e = object.streams) === null || _e === void 0 ? void 0 : _e.map(e => exports.TournamentTeam.fromPartial(e))) || [];
        message.tournamentinfo =
            object.tournamentinfo !== undefined && object.tournamentinfo !== null
                ? exports.CDataGCCStrike15V2TournamentInfo.fromPartial(object.tournamentinfo)
                : undefined;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2MatchListTournamentOperatorMgmt() {
    return { eventid: 0, matches: [] };
}
exports.CMsgGCCStrike15V2MatchListTournamentOperatorMgmt = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventid !== 0) {
            writer.uint32(8).int32(message.eventid);
        }
        for (const v of message.matches) {
            exports.CDataGCCStrike15V2MatchInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2MatchListTournamentOperatorMgmt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventid = reader.int32();
                    break;
                case 2:
                    message.matches.push(exports.CDataGCCStrike15V2MatchInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2MatchListTournamentOperatorMgmt();
        message.eventid = (_a = object.eventid) !== null && _a !== void 0 ? _a : 0;
        message.matches =
            ((_b = object.matches) === null || _b === void 0 ? void 0 : _b.map(e => exports.CDataGCCStrike15V2MatchInfo.fromPartial(e))) ||
                [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Predictions() {
    return { eventId: 0, groupMatchTeamPicks: [] };
}
exports.CMsgGCCStrike15V2Predictions = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventId !== 0) {
            writer.uint32(8).uint32(message.eventId);
        }
        for (const v of message.groupMatchTeamPicks) {
            exports.CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Predictions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.uint32();
                    break;
                case 2:
                    message.groupMatchTeamPicks.push(exports.CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2Predictions();
        message.eventId = (_a = object.eventId) !== null && _a !== void 0 ? _a : 0;
        message.groupMatchTeamPicks =
            ((_b = object.groupMatchTeamPicks) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCCStrike15V2Predictions_GroupMatchTeamPick.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick() {
    return { sectionid: 0, groupid: 0, index: 0, teamid: 0, itemid: Long.UZERO };
}
exports.CMsgGCCStrike15V2Predictions_GroupMatchTeamPick = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.itemid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2Predictions_GroupMatchTeamPick();
        message.sectionid = (_a = object.sectionid) !== null && _a !== void 0 ? _a : 0;
        message.groupid = (_b = object.groupid) !== null && _b !== void 0 ? _b : 0;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : 0;
        message.teamid = (_d = object.teamid) !== null && _d !== void 0 ? _d : 0;
        message.itemid =
            object.itemid !== undefined && object.itemid !== null
                ? Long.fromValue(object.itemid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Fantasy() {
    return { eventId: 0, teams: [] };
}
exports.CMsgGCCStrike15V2Fantasy = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventId !== 0) {
            writer.uint32(8).uint32(message.eventId);
        }
        for (const v of message.teams) {
            exports.CMsgGCCStrike15V2Fantasy_FantasyTeam.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Fantasy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.uint32();
                    break;
                case 2:
                    message.teams.push(exports.CMsgGCCStrike15V2Fantasy_FantasyTeam.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2Fantasy();
        message.eventId = (_a = object.eventId) !== null && _a !== void 0 ? _a : 0;
        message.teams =
            ((_b = object.teams) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCCStrike15V2Fantasy_FantasyTeam.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Fantasy_FantasySlot() {
    return { type: 0, pick: 0, itemid: Long.UZERO };
}
exports.CMsgGCCStrike15V2Fantasy_FantasySlot = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.itemid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2Fantasy_FantasySlot();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.pick = (_b = object.pick) !== null && _b !== void 0 ? _b : 0;
        message.itemid =
            object.itemid !== undefined && object.itemid !== null
                ? Long.fromValue(object.itemid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Fantasy_FantasyTeam() {
    return { sectionid: 0, slots: [] };
}
exports.CMsgGCCStrike15V2Fantasy_FantasyTeam = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.sectionid !== 0) {
            writer.uint32(8).int32(message.sectionid);
        }
        for (const v of message.slots) {
            exports.CMsgGCCStrike15V2Fantasy_FantasySlot.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Fantasy_FantasyTeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sectionid = reader.int32();
                    break;
                case 2:
                    message.slots.push(exports.CMsgGCCStrike15V2Fantasy_FantasySlot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2Fantasy_FantasyTeam();
        message.sectionid = (_a = object.sectionid) !== null && _a !== void 0 ? _a : 0;
        message.slots =
            ((_b = object.slots) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCCStrike15V2Fantasy_FantasySlot.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCAttributeString() {
    return { value: "" };
}
exports.CAttributeString = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCAttributeString();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCMsgCStrike15Welcome() {
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
exports.CMsgCStrike15Welcome = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.gscookieid = reader.uint64();
                    break;
                case 19:
                    message.uniqueid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgCStrike15Welcome();
        message.storeItemHash = (_a = object.storeItemHash) !== null && _a !== void 0 ? _a : 0;
        message.timeplayedconsecutively = (_b = object.timeplayedconsecutively) !== null && _b !== void 0 ? _b : 0;
        message.timeFirstPlayed = (_c = object.timeFirstPlayed) !== null && _c !== void 0 ? _c : 0;
        message.lastTimePlayed = (_d = object.lastTimePlayed) !== null && _d !== void 0 ? _d : 0;
        message.lastIpAddress = (_e = object.lastIpAddress) !== null && _e !== void 0 ? _e : 0;
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
function createBaseCMsgGCCStrike15V2ClientVarValueNotificationInfo() {
    return {
        valueName: "",
        valueInt: 0,
        serverAddr: 0,
        serverPort: 0,
        chokedBlocks: []
    };
}
exports.CMsgGCCStrike15V2ClientVarValueNotificationInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2ClientVarValueNotificationInfo();
        message.valueName = (_a = object.valueName) !== null && _a !== void 0 ? _a : "";
        message.valueInt = (_b = object.valueInt) !== null && _b !== void 0 ? _b : 0;
        message.serverAddr = (_c = object.serverAddr) !== null && _c !== void 0 ? _c : 0;
        message.serverPort = (_d = object.serverPort) !== null && _d !== void 0 ? _d : 0;
        message.chokedBlocks = ((_e = object.chokedBlocks) === null || _e === void 0 ? void 0 : _e.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ServerVarValueNotificationInfo() {
    return { accountid: 0, viewangles: [], type: 0, userdata: [] };
}
exports.CMsgGCCStrike15V2ServerVarValueNotificationInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2ServerVarValueNotificationInfo();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.viewangles = ((_b = object.viewangles) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.userdata = ((_d = object.userdata) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GiftsLeaderboardRequest() {
    return {};
}
exports.CMsgGCCStrike15V2GiftsLeaderboardRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(_) {
        const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardRequest();
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse() {
    return {
        servertime: 0,
        timePeriodSeconds: 0,
        totalGiftsGiven: 0,
        totalGivers: 0,
        entries: []
    };
}
exports.CMsgGCCStrike15V2GiftsLeaderboardResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.entries.push(exports.CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse();
        message.servertime = (_a = object.servertime) !== null && _a !== void 0 ? _a : 0;
        message.timePeriodSeconds = (_b = object.timePeriodSeconds) !== null && _b !== void 0 ? _b : 0;
        message.totalGiftsGiven = (_c = object.totalGiftsGiven) !== null && _c !== void 0 ? _c : 0;
        message.totalGivers = (_d = object.totalGivers) !== null && _d !== void 0 ? _d : 0;
        message.entries =
            ((_e = object.entries) === null || _e === void 0 ? void 0 : _e.map(e => exports.CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry() {
    return { accountid: 0, gifts: 0 };
}
exports.CMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (message.gifts !== 0) {
            writer.uint32(16).uint32(message.gifts);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry();
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2GiftsLeaderboardResponse_GiftLeaderboardEntry();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.gifts = (_b = object.gifts) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientSubmitSurveyVote() {
    return { surveyId: 0, vote: 0 };
}
exports.CMsgGCCStrike15V2ClientSubmitSurveyVote = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.surveyId !== 0) {
            writer.uint32(8).uint32(message.surveyId);
        }
        if (message.vote !== 0) {
            writer.uint32(16).uint32(message.vote);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2ClientSubmitSurveyVote();
        message.surveyId = (_a = object.surveyId) !== null && _a !== void 0 ? _a : 0;
        message.vote = (_b = object.vote) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Server2GCClientValidate() {
    return { accountid: 0 };
}
exports.CMsgGCCStrike15V2Server2GCClientValidate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2Server2GCClientValidate();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ClientTournamentInfo() {
    return { eventid: 0, stageid: 0, gameType: 0, teamids: [] };
}
exports.CMsgGCCStrike15V2GC2ClientTournamentInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCMsgGCCStrike15V2GC2ClientTournamentInfo();
        message.eventid = (_a = object.eventid) !== null && _a !== void 0 ? _a : 0;
        message.stageid = (_b = object.stageid) !== null && _b !== void 0 ? _b : 0;
        message.gameType = (_c = object.gameType) !== null && _c !== void 0 ? _c : 0;
        message.teamids = ((_d = object.teamids) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        return message;
    }
};
function createBaseCSOEconCoupon() {
    return { entryid: 0, defidx: 0, expirationDate: 0 };
}
exports.CSOEconCoupon = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSOEconCoupon();
        message.entryid = (_a = object.entryid) !== null && _a !== void 0 ? _a : 0;
        message.defidx = (_b = object.defidx) !== null && _b !== void 0 ? _b : 0;
        message.expirationDate = (_c = object.expirationDate) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCSOQuestProgress() {
    return { questid: 0, pointsRemaining: 0, bonusPoints: 0 };
}
exports.CSOQuestProgress = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCSOQuestProgress();
        message.questid = (_a = object.questid) !== null && _a !== void 0 ? _a : 0;
        message.pointsRemaining = (_b = object.pointsRemaining) !== null && _b !== void 0 ? _b : 0;
        message.bonusPoints = (_c = object.bonusPoints) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCSOAccountSeasonalOperation() {
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
exports.CSOAccountSeasonalOperation = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCSOAccountSeasonalOperation();
        message.seasonValue = (_a = object.seasonValue) !== null && _a !== void 0 ? _a : 0;
        message.tierUnlocked = (_b = object.tierUnlocked) !== null && _b !== void 0 ? _b : 0;
        message.premiumTiers = (_c = object.premiumTiers) !== null && _c !== void 0 ? _c : 0;
        message.missionId = (_d = object.missionId) !== null && _d !== void 0 ? _d : 0;
        message.missionsCompleted = (_e = object.missionsCompleted) !== null && _e !== void 0 ? _e : 0;
        message.redeemableBalance = (_f = object.redeemableBalance) !== null && _f !== void 0 ? _f : 0;
        message.seasonPassTime = (_g = object.seasonPassTime) !== null && _g !== void 0 ? _g : 0;
        return message;
    }
};
function createBaseCSOAccountRecurringSubscription() {
    return { timeNextCycle: 0, timeInitiated: 0 };
}
exports.CSOAccountRecurringSubscription = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.timeNextCycle !== 0) {
            writer.uint32(8).uint32(message.timeNextCycle);
        }
        if (message.timeInitiated !== 0) {
            writer.uint32(16).uint32(message.timeInitiated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSOAccountRecurringSubscription();
        message.timeNextCycle = (_a = object.timeNextCycle) !== null && _a !== void 0 ? _a : 0;
        message.timeInitiated = (_b = object.timeInitiated) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCSOPersonaDataPublic() {
    return { playerLevel: 0, commendation: undefined, elevatedState: false };
}
exports.CSOPersonaDataPublic = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.playerLevel !== 0) {
            writer.uint32(8).int32(message.playerLevel);
        }
        if (message.commendation !== undefined) {
            exports.PlayerCommendationInfo.encode(message.commendation, writer.uint32(18).fork()).ldelim();
        }
        if (message.elevatedState === true) {
            writer.uint32(24).bool(message.elevatedState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSOPersonaDataPublic();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerLevel = reader.int32();
                    break;
                case 2:
                    message.commendation = exports.PlayerCommendationInfo.decode(reader, reader.uint32());
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCSOPersonaDataPublic();
        message.playerLevel = (_a = object.playerLevel) !== null && _a !== void 0 ? _a : 0;
        message.commendation =
            object.commendation !== undefined && object.commendation !== null
                ? exports.PlayerCommendationInfo.fromPartial(object.commendation)
                : undefined;
        message.elevatedState = (_b = object.elevatedState) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseCMsgGCGlobalGameSubscribe() {
    return { ticket: Long.UZERO };
}
exports.CMsgGCGlobalGameSubscribe = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.ticket.isZero()) {
            writer.uint32(8).uint64(message.ticket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGlobalGameSubscribe();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticket = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCGlobalGameSubscribe();
        message.ticket =
            object.ticket !== undefined && object.ticket !== null
                ? Long.fromValue(object.ticket)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCGlobalGameUnsubscribe() {
    return { timeleft: 0 };
}
exports.CMsgGCGlobalGameUnsubscribe = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.timeleft !== 0) {
            writer.uint32(8).int32(message.timeleft);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCGlobalGameUnsubscribe();
        message.timeleft = (_a = object.timeleft) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCGlobalGamePlay() {
    return { ticket: Long.UZERO, gametimems: 0, msperpoint: 0 };
}
exports.CMsgGCGlobalGamePlay = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGlobalGamePlay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticket = reader.uint64();
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCGlobalGamePlay();
        message.ticket =
            object.ticket !== undefined && object.ticket !== null
                ? Long.fromValue(object.ticket)
                : Long.UZERO;
        message.gametimems = (_a = object.gametimems) !== null && _a !== void 0 ? _a : 0;
        message.msperpoint = (_b = object.msperpoint) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2AcknowledgePenalty() {
    return { acknowledged: 0 };
}
exports.CMsgGCCStrike15V2AcknowledgePenalty = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.acknowledged !== 0) {
            writer.uint32(8).int32(message.acknowledged);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2AcknowledgePenalty();
        message.acknowledged = (_a = object.acknowledged) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin() {
    return { defindex: 0, upgradeid: Long.UZERO, hours: 0, prestigetime: 0 };
}
exports.CMsgGCCStrike15V2Client2GCRequestPrestigeCoin = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defindex = reader.uint32();
                    break;
                case 2:
                    message.upgradeid = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2Client2GCRequestPrestigeCoin();
        message.defindex = (_a = object.defindex) !== null && _a !== void 0 ? _a : 0;
        message.upgradeid =
            object.upgradeid !== undefined && object.upgradeid !== null
                ? Long.fromValue(object.upgradeid)
                : Long.UZERO;
        message.hours = (_b = object.hours) !== null && _b !== void 0 ? _b : 0;
        message.prestigetime = (_c = object.prestigetime) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2Client2GCStreamUnlock() {
    return { ticket: Long.UZERO, os: 0 };
}
exports.CMsgGCCStrike15V2Client2GCStreamUnlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.ticket.isZero()) {
            writer.uint32(8).uint64(message.ticket);
        }
        if (message.os !== 0) {
            writer.uint32(16).int32(message.os);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2Client2GCStreamUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticket = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2Client2GCStreamUnlock();
        message.ticket =
            object.ticket !== undefined && object.ticket !== null
                ? Long.fromValue(object.ticket)
                : Long.UZERO;
        message.os = (_a = object.os) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientToGCRequestElevate() {
    return { stage: 0 };
}
exports.CMsgGCCStrike15V2ClientToGCRequestElevate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.stage !== 0) {
            writer.uint32(8).uint32(message.stage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientToGCRequestElevate();
        message.stage = (_a = object.stage) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientToGCChat() {
    return { matchId: Long.UZERO, text: "" };
}
exports.CMsgGCCStrike15V2ClientToGCChat = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.matchId.isZero()) {
            writer.uint32(8).uint64(message.matchId);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientToGCChat();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchId = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientToGCChat();
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GCToClientChat() {
    return { accountId: 0, text: "" };
}
exports.CMsgGCCStrike15V2GCToClientChat = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountId !== 0) {
            writer.uint32(8).uint32(message.accountId);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2GCToClientChat();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientAuthKeyCode() {
    return { eventid: 0, code: "" };
}
exports.CMsgGCCStrike15V2ClientAuthKeyCode = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eventid !== 0) {
            writer.uint32(8).uint32(message.eventid);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2ClientAuthKeyCode();
        message.eventid = (_a = object.eventid) !== null && _a !== void 0 ? _a : 0;
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15GotvSyncPacket() {
    return { data: undefined };
}
exports.CMsgGCCStrike15GotvSyncPacket = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined) {
            engine_gcmessages_1.CEngineGotvSyncPacket.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15GotvSyncPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = engine_gcmessages_1.CEngineGotvSyncPacket.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCStrike15GotvSyncPacket();
        message.data =
            object.data !== undefined && object.data !== null
                ? engine_gcmessages_1.CEngineGotvSyncPacket.fromPartial(object.data)
                : undefined;
        return message;
    }
};
function createBasePlayerDecalDigitalSignature() {
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
exports.PlayerDecalDigitalSignature = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
                        message.endpos.push(reader.float());
                    }
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.startpos.push(reader.float());
                        }
                    }
                    else {
                        message.startpos.push(reader.float());
                    }
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.right.push(reader.float());
                        }
                    }
                    else {
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBasePlayerDecalDigitalSignature();
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.accountid = (_b = object.accountid) !== null && _b !== void 0 ? _b : 0;
        message.rtime = (_c = object.rtime) !== null && _c !== void 0 ? _c : 0;
        message.endpos = ((_d = object.endpos) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.startpos = ((_e = object.startpos) === null || _e === void 0 ? void 0 : _e.map(e => e)) || [];
        message.right = ((_f = object.right) === null || _f === void 0 ? void 0 : _f.map(e => e)) || [];
        message.txDefidx = (_g = object.txDefidx) !== null && _g !== void 0 ? _g : 0;
        message.entindex = (_h = object.entindex) !== null && _h !== void 0 ? _h : 0;
        message.hitbox = (_j = object.hitbox) !== null && _j !== void 0 ? _j : 0;
        message.creationtime = (_k = object.creationtime) !== null && _k !== void 0 ? _k : 0;
        message.equipslot = (_l = object.equipslot) !== null && _l !== void 0 ? _l : 0;
        message.traceId = (_m = object.traceId) !== null && _m !== void 0 ? _m : 0;
        message.normal = ((_o = object.normal) === null || _o === void 0 ? void 0 : _o.map(e => e)) || [];
        message.tintId = (_p = object.tintId) !== null && _p !== void 0 ? _p : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPlayerDecalSign() {
    return { data: undefined, itemid: Long.UZERO };
}
exports.CMsgGCCStrike15V2ClientPlayerDecalSign = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined) {
            exports.PlayerDecalDigitalSignature.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (!message.itemid.isZero()) {
            writer.uint32(16).uint64(message.itemid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientPlayerDecalSign();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = exports.PlayerDecalDigitalSignature.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.itemid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCStrike15V2ClientPlayerDecalSign();
        message.data =
            object.data !== undefined && object.data !== null
                ? exports.PlayerDecalDigitalSignature.fromPartial(object.data)
                : undefined;
        message.itemid =
            object.itemid !== undefined && object.itemid !== null
                ? Long.fromValue(object.itemid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientLogonFatalError() {
    return { errorcode: 0, message: "", country: "" };
}
exports.CMsgGCCStrike15V2ClientLogonFatalError = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2ClientLogonFatalError();
        message.errorcode = (_a = object.errorcode) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.country = (_c = object.country) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPollState() {
    return { pollid: 0, names: [], values: [] };
}
exports.CMsgGCCStrike15V2ClientPollState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pollid !== 0) {
            writer.uint32(8).uint32(message.pollid);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        writer.uint32(26).fork();
        for (const v of message.values) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2ClientPollState();
        message.pollid = (_a = object.pollid) !== null && _a !== void 0 ? _a : 0;
        message.names = ((_b = object.names) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        message.values = ((_c = object.values) === null || _c === void 0 ? void 0 : _c.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PartyRegister() {
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
exports.CMsgGCCStrike15V2PartyRegister = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCMsgGCCStrike15V2PartyRegister();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.ver = (_b = object.ver) !== null && _b !== void 0 ? _b : 0;
        message.apr = (_c = object.apr) !== null && _c !== void 0 ? _c : 0;
        message.ark = (_d = object.ark) !== null && _d !== void 0 ? _d : 0;
        message.nby = (_e = object.nby) !== null && _e !== void 0 ? _e : 0;
        message.grp = (_f = object.grp) !== null && _f !== void 0 ? _f : 0;
        message.slots = (_g = object.slots) !== null && _g !== void 0 ? _g : 0;
        message.launcher = (_h = object.launcher) !== null && _h !== void 0 ? _h : 0;
        message.gameType = (_j = object.gameType) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PartySearch() {
    return { ver: 0, apr: 0, ark: 0, grps: [], launcher: 0, gameType: 0 };
}
exports.CMsgGCCStrike15V2PartySearch = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCMsgGCCStrike15V2PartySearch();
        message.ver = (_a = object.ver) !== null && _a !== void 0 ? _a : 0;
        message.apr = (_b = object.apr) !== null && _b !== void 0 ? _b : 0;
        message.ark = (_c = object.ark) !== null && _c !== void 0 ? _c : 0;
        message.grps = ((_d = object.grps) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.launcher = (_e = object.launcher) !== null && _e !== void 0 ? _e : 0;
        message.gameType = (_f = object.gameType) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PartySearchResults() {
    return { entries: [] };
}
exports.CMsgGCCStrike15V2PartySearchResults = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCCStrike15V2PartySearchResults_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2PartySearchResults();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CMsgGCCStrike15V2PartySearchResults_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2PartySearchResults();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCCStrike15V2PartySearchResults_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PartySearchResults_Entry() {
    return { id: 0, grp: 0, gameType: 0, apr: 0, ark: 0, loc: 0, accountid: 0 };
}
exports.CMsgGCCStrike15V2PartySearchResults_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCMsgGCCStrike15V2PartySearchResults_Entry();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.grp = (_b = object.grp) !== null && _b !== void 0 ? _b : 0;
        message.gameType = (_c = object.gameType) !== null && _c !== void 0 ? _c : 0;
        message.apr = (_d = object.apr) !== null && _d !== void 0 ? _d : 0;
        message.ark = (_e = object.ark) !== null && _e !== void 0 ? _e : 0;
        message.loc = (_f = object.loc) !== null && _f !== void 0 ? _f : 0;
        message.accountid = (_g = object.accountid) !== null && _g !== void 0 ? _g : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2PartyInvite() {
    return { accountid: 0, lobbyid: 0 };
}
exports.CMsgGCCStrike15V2PartyInvite = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (message.lobbyid !== 0) {
            writer.uint32(16).uint32(message.lobbyid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2PartyInvite();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.lobbyid = (_b = object.lobbyid) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2AccountRequestCoPlays() {
    return { players: [], servertime: 0 };
}
exports.CMsgGCCStrike15V2AccountRequestCoPlays = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.players) {
            exports.CMsgGCCStrike15V2AccountRequestCoPlays_Player.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.servertime !== 0) {
            writer.uint32(16).uint32(message.servertime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.players.push(exports.CMsgGCCStrike15V2AccountRequestCoPlays_Player.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays();
        message.players =
            ((_a = object.players) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCCStrike15V2AccountRequestCoPlays_Player.fromPartial(e))) || [];
        message.servertime = (_b = object.servertime) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2AccountRequestCoPlays_Player() {
    return { accountid: 0, rtcoplay: 0, online: false };
}
exports.CMsgGCCStrike15V2AccountRequestCoPlays_Player = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2AccountRequestCoPlays_Player();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.rtcoplay = (_b = object.rtcoplay) !== null && _b !== void 0 ? _b : 0;
        message.online = (_c = object.online) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientToGCRequestTicket() {
    return {
        authorizedSteamId: Long.UZERO,
        authorizedPublicIp: 0,
        gameserverSteamId: Long.UZERO,
        gameserverSdrRouting: ""
    };
}
exports.CMsgGCCStrike15V2ClientToGCRequestTicket = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientToGCRequestTicket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorizedSteamId = reader.fixed64();
                    break;
                case 2:
                    message.authorizedPublicIp = reader.fixed32();
                    break;
                case 3:
                    message.gameserverSteamId = reader.fixed64();
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2ClientToGCRequestTicket();
        message.authorizedSteamId =
            object.authorizedSteamId !== undefined &&
                object.authorizedSteamId !== null
                ? Long.fromValue(object.authorizedSteamId)
                : Long.UZERO;
        message.authorizedPublicIp = (_a = object.authorizedPublicIp) !== null && _a !== void 0 ? _a : 0;
        message.gameserverSteamId =
            object.gameserverSteamId !== undefined &&
                object.gameserverSteamId !== null
                ? Long.fromValue(object.gameserverSteamId)
                : Long.UZERO;
        message.gameserverSdrRouting = (_b = object.gameserverSdrRouting) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgGCToClientSteamDatagramTicket() {
    return { serializedTicket: new Uint8Array() };
}
exports.CMsgGCToClientSteamDatagramTicket = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.serializedTicket.length !== 0) {
            writer.uint32(130).bytes(message.serializedTicket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCToClientSteamDatagramTicket();
        message.serializedTicket = (_a = object.serializedTicket) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientRequestOffers() {
    return {};
}
exports.CMsgGCCStrike15V2ClientRequestOffers = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(_) {
        const message = createBaseCMsgGCCStrike15V2ClientRequestOffers();
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientRequestSouvenir() {
    return { itemid: Long.UZERO, matchid: Long.UZERO, eventid: 0 };
}
exports.CMsgGCCStrike15V2ClientRequestSouvenir = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientRequestSouvenir();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.itemid = reader.uint64();
                    break;
                case 2:
                    message.matchid = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientRequestSouvenir();
        message.itemid =
            object.itemid !== undefined && object.itemid !== null
                ? Long.fromValue(object.itemid)
                : Long.UZERO;
        message.matchid =
            object.matchid !== undefined && object.matchid !== null
                ? Long.fromValue(object.matchid)
                : Long.UZERO;
        message.eventid = (_a = object.eventid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientAccountBalance() {
    return { amount: Long.UZERO, url: "" };
}
exports.CMsgGCCStrike15V2ClientAccountBalance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientAccountBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientAccountBalance();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? Long.fromValue(object.amount)
                : Long.UZERO;
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPartyJoinRelay() {
    return { accountid: 0, lobbyid: Long.UZERO };
}
exports.CMsgGCCStrike15V2ClientPartyJoinRelay = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (!message.lobbyid.isZero()) {
            writer.uint32(16).uint64(message.lobbyid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientPartyJoinRelay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.lobbyid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientPartyJoinRelay();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.lobbyid =
            object.lobbyid !== undefined && object.lobbyid !== null
                ? Long.fromValue(object.lobbyid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPartyWarning() {
    return { entries: [] };
}
exports.CMsgGCCStrike15V2ClientPartyWarning = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCCStrike15V2ClientPartyWarning_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientPartyWarning();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CMsgGCCStrike15V2ClientPartyWarning_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientPartyWarning();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCCStrike15V2ClientPartyWarning_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPartyWarning_Entry() {
    return { accountid: 0, warntype: 0 };
}
exports.CMsgGCCStrike15V2ClientPartyWarning_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (message.warntype !== 0) {
            writer.uint32(16).uint32(message.warntype);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2ClientPartyWarning_Entry();
        message.accountid = (_a = object.accountid) !== null && _a !== void 0 ? _a : 0;
        message.warntype = (_b = object.warntype) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2SetEventFavorite() {
    return { eventid: Long.UZERO, isFavorite: false };
}
exports.CMsgGCCStrike15V2SetEventFavorite = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.eventid.isZero()) {
            writer.uint32(8).uint64(message.eventid);
        }
        if (message.isFavorite === true) {
            writer.uint32(16).bool(message.isFavorite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2SetEventFavorite();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventid = reader.uint64();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2SetEventFavorite();
        message.eventid =
            object.eventid !== undefined && object.eventid !== null
                ? Long.fromValue(object.eventid)
                : Long.UZERO;
        message.isFavorite = (_a = object.isFavorite) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GetEventFavoritesRequest() {
    return { allEvents: false };
}
exports.CMsgGCCStrike15V2GetEventFavoritesRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.allEvents === true) {
            writer.uint32(8).bool(message.allEvents);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2GetEventFavoritesRequest();
        message.allEvents = (_a = object.allEvents) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GetEventFavoritesResponse() {
    return { allEvents: false, jsonFavorites: "", jsonFeatured: "" };
}
exports.CMsgGCCStrike15V2GetEventFavoritesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCMsgGCCStrike15V2GetEventFavoritesResponse();
        message.allEvents = (_a = object.allEvents) !== null && _a !== void 0 ? _a : false;
        message.jsonFavorites = (_b = object.jsonFavorites) !== null && _b !== void 0 ? _b : "";
        message.jsonFeatured = (_c = object.jsonFeatured) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPerfReport() {
    return { entries: [] };
}
exports.CMsgGCCStrike15V2ClientPerfReport = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCCStrike15V2ClientPerfReport_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCStrike15V2ClientPerfReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CMsgGCCStrike15V2ClientPerfReport_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCMsgGCCStrike15V2ClientPerfReport();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCCStrike15V2ClientPerfReport_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientPerfReport_Entry() {
    return {
        perfcounter: 0,
        length: 0,
        reference: new Uint8Array(),
        actual: new Uint8Array(),
        sourceid: 0,
        status: 0
    };
}
exports.CMsgGCCStrike15V2ClientPerfReport_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCMsgGCCStrike15V2ClientPerfReport_Entry();
        message.perfcounter = (_a = object.perfcounter) !== null && _a !== void 0 ? _a : 0;
        message.length = (_b = object.length) !== null && _b !== void 0 ? _b : 0;
        message.reference = (_c = object.reference) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.actual = (_d = object.actual) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.sourceid = (_e = object.sourceid) !== null && _e !== void 0 ? _e : 0;
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCVDiagnostic() {
    return { id: 0, extended: 0, value: Long.UZERO, stringValue: "" };
}
exports.CVDiagnostic = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.value = reader.uint64();
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCVDiagnostic();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.extended = (_b = object.extended) !== null && _b !== void 0 ? _b : 0;
        message.value =
            object.value !== undefined && object.value !== null
                ? Long.fromValue(object.value)
                : Long.UZERO;
        message.stringValue = (_c = object.stringValue) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2ClientReportValidation() {
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
exports.CMsgGCCStrike15V2ClientReportValidation = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CVDiagnostic.encode(v, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.diagnostic2 = reader.uint64();
                    break;
                case 14:
                    message.diagnostic3 = reader.uint64();
                    break;
                case 15:
                    message.lastLaunchData = reader.string();
                    break;
                case 16:
                    message.reportCount = reader.uint32();
                    break;
                case 17:
                    message.clientTime = reader.uint64();
                    break;
                case 18:
                    message.diagnostic4 = reader.uint64();
                    break;
                case 19:
                    message.diagnostic5 = reader.uint64();
                    break;
                case 20:
                    message.diagnostics.push(exports.CVDiagnostic.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseCMsgGCCStrike15V2ClientReportValidation();
        message.fileReport = (_a = object.fileReport) !== null && _a !== void 0 ? _a : "";
        message.commandLine = (_b = object.commandLine) !== null && _b !== void 0 ? _b : "";
        message.totalFiles = (_c = object.totalFiles) !== null && _c !== void 0 ? _c : 0;
        message.internalError = (_d = object.internalError) !== null && _d !== void 0 ? _d : 0;
        message.trustTime = (_e = object.trustTime) !== null && _e !== void 0 ? _e : 0;
        message.countPending = (_f = object.countPending) !== null && _f !== void 0 ? _f : 0;
        message.countCompleted = (_g = object.countCompleted) !== null && _g !== void 0 ? _g : 0;
        message.processId = (_h = object.processId) !== null && _h !== void 0 ? _h : 0;
        message.osversion = (_j = object.osversion) !== null && _j !== void 0 ? _j : 0;
        message.clientreportversion = (_k = object.clientreportversion) !== null && _k !== void 0 ? _k : 0;
        message.statusId = (_l = object.statusId) !== null && _l !== void 0 ? _l : 0;
        message.diagnostic1 = (_m = object.diagnostic1) !== null && _m !== void 0 ? _m : 0;
        message.diagnostic2 =
            object.diagnostic2 !== undefined && object.diagnostic2 !== null
                ? Long.fromValue(object.diagnostic2)
                : Long.UZERO;
        message.diagnostic3 =
            object.diagnostic3 !== undefined && object.diagnostic3 !== null
                ? Long.fromValue(object.diagnostic3)
                : Long.UZERO;
        message.lastLaunchData = (_o = object.lastLaunchData) !== null && _o !== void 0 ? _o : "";
        message.reportCount = (_p = object.reportCount) !== null && _p !== void 0 ? _p : 0;
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
            ((_q = object.diagnostics) === null || _q === void 0 ? void 0 : _q.map(e => exports.CVDiagnostic.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ClientRefuseSecureMode() {
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
exports.CMsgGCCStrike15V2GC2ClientRefuseSecureMode = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCMsgGCCStrike15V2GC2ClientRefuseSecureMode();
        message.fileReport = (_a = object.fileReport) !== null && _a !== void 0 ? _a : "";
        message.offerInsecureMode = (_b = object.offerInsecureMode) !== null && _b !== void 0 ? _b : false;
        message.offerSecureMode = (_c = object.offerSecureMode) !== null && _c !== void 0 ? _c : false;
        message.showUnsignedUi = (_d = object.showUnsignedUi) !== null && _d !== void 0 ? _d : false;
        message.kickUser = (_e = object.kickUser) !== null && _e !== void 0 ? _e : false;
        message.showTrustedUi = (_f = object.showTrustedUi) !== null && _f !== void 0 ? _f : false;
        message.showWarningNotTrusted = (_g = object.showWarningNotTrusted) !== null && _g !== void 0 ? _g : false;
        message.showWarningNotTrusted2 = (_h = object.showWarningNotTrusted2) !== null && _h !== void 0 ? _h : false;
        message.filesPreventedTrusted = (_j = object.filesPreventedTrusted) !== null && _j !== void 0 ? _j : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ClientRequestValidation() {
    return { fullReport: false, module: "" };
}
exports.CMsgGCCStrike15V2GC2ClientRequestValidation = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.fullReport === true) {
            writer.uint32(8).bool(message.fullReport);
        }
        if (message.module !== "") {
            writer.uint32(18).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCMsgGCCStrike15V2GC2ClientRequestValidation();
        message.fullReport = (_a = object.fullReport) !== null && _a !== void 0 ? _a : false;
        message.module = (_b = object.module) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ClientInitSystem() {
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
exports.CMsgGCCStrike15V2GC2ClientInitSystem = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCMsgGCCStrike15V2GC2ClientInitSystem();
        message.load = (_a = object.load) !== null && _a !== void 0 ? _a : false;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.outputname = (_c = object.outputname) !== null && _c !== void 0 ? _c : "";
        message.keyData = (_d = object.keyData) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.shaHash = (_e = object.shaHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.cookie = (_f = object.cookie) !== null && _f !== void 0 ? _f : 0;
        message.manifest = (_g = object.manifest) !== null && _g !== void 0 ? _g : "";
        message.systemPackage = (_h = object.systemPackage) !== null && _h !== void 0 ? _h : new Uint8Array();
        message.loadSystem = (_j = object.loadSystem) !== null && _j !== void 0 ? _j : false;
        return message;
    }
};
function createBaseCMsgGCCStrike15V2GC2ClientInitSystemResponse() {
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
exports.CMsgGCCStrike15V2GC2ClientInitSystemResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.handle = reader.int64();
                    break;
                case 8:
                    message.einitResult = reader.int32();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCMsgGCCStrike15V2GC2ClientInitSystemResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        message.diagnostic = (_b = object.diagnostic) !== null && _b !== void 0 ? _b : "";
        message.shaHash = (_c = object.shaHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.response = (_d = object.response) !== null && _d !== void 0 ? _d : 0;
        message.errorCode1 = (_e = object.errorCode1) !== null && _e !== void 0 ? _e : 0;
        message.errorCode2 = (_f = object.errorCode2) !== null && _f !== void 0 ? _f : 0;
        message.handle =
            object.handle !== undefined && object.handle !== null
                ? Long.fromValue(object.handle)
                : Long.ZERO;
        message.einitResult = (_g = object.einitResult) !== null && _g !== void 0 ? _g : 0;
        message.auxSystem1 = (_h = object.auxSystem1) !== null && _h !== void 0 ? _h : 0;
        message.auxSystem2 = (_j = object.auxSystem2) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=cstrike15_gcmessages.js.map