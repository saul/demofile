"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCSUsrMsgServerRankRevealAll = exports.CCSUsrMsgClientInfo = exports.CCSUsrMsgWarmupHasEnded = exports.CCSUsrMsgDisconnectToLobby = exports.CCSUsrMsgStopSpectatorMode = exports.CCSUsrMsgRequestState = exports.CCSUsrMsgGameTitle = exports.CCSUsrMsgResetHud = exports.CCSUsrMsgDeepStats = exports.CCSUsrMsgCurrentRoundOdds = exports.CCSUsrMsgRoundImpactScoreData_InitialConditions = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim = exports.CCSUsrMsgRoundImpactScoreData_RisEvent = exports.CCSUsrMsgRoundImpactScoreData = exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData = exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade = exports.CCSUsrMsgEndOfMatchAllPlayersData = exports.CCSUsrMsgSurvivalStats_Damage = exports.CCSUsrMsgSurvivalStats_Placement = exports.CCSUsrMsgSurvivalStats_Fact = exports.CCSUsrMsgSurvivalStats = exports.CCSUsrMsgSSUI = exports.CCSUsrMsgRoundBackupFilenames = exports.CCSUsrMsgGlowPropTurnOff = exports.CCSUsrMsgItemDrop = exports.CCSUsrMsgMatchStatsUpdate = exports.CCSUsrMsgMarkAchievement = exports.CCSUsrMsgAmmoDenied = exports.CCSUsrMsgBarTime = exports.CCSUsrMsgShowMenu = exports.CCSUsrMsgItemPickup = exports.CCSUsrMsgXpUpdate = exports.CCSUsrMsgServerRankUpdate_RankUpdate = exports.CCSUsrMsgServerRankUpdate = exports.CCSUsrMsgSendLastKillerDamageToClient = exports.CCSUsrMsgVoteSetup = exports.CCSUsrMsgVoteFailed = exports.CCSUsrMsgVotePass = exports.CCSUsrMsgVoteStart = exports.CCSUsrMsgCallVoteFailed = exports.CCSUsrMsgXRankUpd = exports.CCSUsrMsgXRankGet = exports.CCSUsrMsgPlayerDecalDigitalSignature = exports.CCSUsrMsgScoreLeaderboardData = exports.CCSUsrMsgQuestProgress = exports.CCSUsrMsgDisplayInventory = exports.CCSUsrMsgPlayerStatsUpdate_Stat = exports.CCSUsrMsgPlayerStatsUpdate = exports.CCSUsrMsgMatchEndConditions = exports.CCSUsrMsgAchievementEvent = exports.CCSUsrMsgCurrentTimescale = exports.CCSUsrMsgDesiredTimescale = exports.CCSUsrMsgKillCam = exports.CCSUsrMsgReportHit = exports.CCSUsrMsgAdjustMoney = exports.CCSUsrMsgEntityOutlineHighlight = exports.CCSUsrMsgUpdateScreenHealthBar = exports.CCSUsrMsgWeaponSound = exports.CCSUsrMsgReloadEffect = exports.CCSUsrMsgSendPlayerItemFound = exports.CCSUsrMsgSendPlayerItemDrops = exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = exports.CCSUsrMsgProcessSpottedEntityUpdate = exports.CCSUsrMsgKeyHintText = exports.CCSUsrMsgHintText = exports.CCSUsrMsgRadioText = exports.CCSUsrMsgDamage = exports.CCSUsrMsgVoiceMask_PlayerMask = exports.CCSUsrMsgVoiceMask = exports.CCSUsrMsgRawAudio = exports.CCSUsrMsgSendAudio = exports.CCSUsrMsgCloseCaptionDirect = exports.CCSUsrMsgCloseCaption = exports.CCSUsrMsgRumble = exports.CCSUsrMsgFade = exports.CCSUsrMsgShake = exports.CCSUsrMsgHudMsg = exports.CCSUsrMsgTextMsg = exports.CCSUsrMsgSayText2 = exports.CCSUsrMsgSayText = exports.CCSUsrMsgHudText = exports.CCSUsrMsgTrain = exports.CCSUsrMsgGeiger = exports.CCSUsrMsgVGUIMenu_Subkey = exports.CCSUsrMsgVGUIMenu = exports.ECSUsrMsgDisconnectToLobbyAction = exports.ECstrike15UserMessages = exports.protobufPackage = void 0;
/* tslint:disable */
const netmessages_1 = require("./netmessages");
const cstrike15_gcmessages_1 = require("./cstrike15_gcmessages");
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const baseCCSUsrMsgVGUIMenu = {
    name: "",
    show: false
};
const baseCCSUsrMsgVGUIMenu_Subkey = {
    name: "",
    str: ""
};
const baseCCSUsrMsgGeiger = {
    range: 0
};
const baseCCSUsrMsgTrain = {
    train: 0
};
const baseCCSUsrMsgHudText = {
    text: ""
};
const baseCCSUsrMsgSayText = {
    entIdx: 0,
    text: "",
    chat: false,
    textallchat: false
};
const baseCCSUsrMsgSayText2 = {
    entIdx: 0,
    chat: false,
    msgName: "",
    params: "",
    textallchat: false
};
const baseCCSUsrMsgTextMsg = {
    msgDst: 0,
    params: ""
};
const baseCCSUsrMsgHudMsg = {
    channel: 0,
    effect: 0,
    fadeInTime: 0,
    fadeOutTime: 0,
    holdTime: 0,
    fxTime: 0,
    text: ""
};
const baseCCSUsrMsgShake = {
    command: 0,
    localAmplitude: 0,
    frequency: 0,
    duration: 0
};
const baseCCSUsrMsgFade = {
    duration: 0,
    holdTime: 0,
    flags: 0
};
const baseCCSUsrMsgRumble = {
    index: 0,
    data: 0,
    flags: 0
};
const baseCCSUsrMsgCloseCaption = {
    hash: 0,
    duration: 0,
    fromPlayer: false,
    cctoken: ""
};
const baseCCSUsrMsgCloseCaptionDirect = {
    hash: 0,
    duration: 0,
    fromPlayer: false
};
const baseCCSUsrMsgSendAudio = {
    radioSound: ""
};
const baseCCSUsrMsgRawAudio = {
    pitch: 0,
    entidx: 0,
    duration: 0,
    voiceFilename: ""
};
const baseCCSUsrMsgVoiceMask = {
    playerModEnable: false
};
const baseCCSUsrMsgVoiceMask_PlayerMask = {
    gameRulesMask: 0,
    banMasks: 0
};
const baseCCSUsrMsgDamage = {
    amount: 0,
    victimEntindex: 0
};
const baseCCSUsrMsgRadioText = {
    msgDst: 0,
    client: 0,
    msgName: "",
    params: ""
};
const baseCCSUsrMsgHintText = {
    text: ""
};
const baseCCSUsrMsgKeyHintText = {
    hints: ""
};
const baseCCSUsrMsgProcessSpottedEntityUpdate = {
    newUpdate: false
};
const baseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = {
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
const baseCCSUsrMsgSendPlayerItemDrops = {};
const baseCCSUsrMsgSendPlayerItemFound = {
    entindex: 0
};
const baseCCSUsrMsgReloadEffect = {
    entidx: 0,
    actanim: 0,
    originX: 0,
    originY: 0,
    originZ: 0
};
const baseCCSUsrMsgWeaponSound = {
    entidx: 0,
    originX: 0,
    originY: 0,
    originZ: 0,
    sound: "",
    timestamp: 0
};
const baseCCSUsrMsgUpdateScreenHealthBar = {
    entidx: 0,
    healthratioOld: 0,
    healthratioNew: 0,
    style: 0
};
const baseCCSUsrMsgEntityOutlineHighlight = {
    entidx: 0,
    removehighlight: false
};
const baseCCSUsrMsgAdjustMoney = {
    amount: 0
};
const baseCCSUsrMsgReportHit = {
    posX: 0,
    posY: 0,
    timestamp: 0,
    posZ: 0
};
const baseCCSUsrMsgKillCam = {
    obsMode: 0,
    firstTarget: 0,
    secondTarget: 0
};
const baseCCSUsrMsgDesiredTimescale = {
    desiredTimescale: 0,
    durationRealtimeSec: 0,
    interpolatorType: 0,
    startBlendTime: 0
};
const baseCCSUsrMsgCurrentTimescale = {
    curTimescale: 0
};
const baseCCSUsrMsgAchievementEvent = {
    achievement: 0,
    count: 0,
    userId: 0
};
const baseCCSUsrMsgMatchEndConditions = {
    fraglimit: 0,
    mpMaxrounds: 0,
    mpWinlimit: 0,
    mpTimelimit: 0
};
const baseCCSUsrMsgPlayerStatsUpdate = {
    version: 0,
    userId: 0,
    crc: 0
};
const baseCCSUsrMsgPlayerStatsUpdate_Stat = {
    idx: 0,
    delta: 0
};
const baseCCSUsrMsgDisplayInventory = {
    display: false,
    userId: 0
};
const baseCCSUsrMsgQuestProgress = {
    questId: 0,
    normalPoints: 0,
    bonusPoints: 0,
    isEventQuest: false
};
const baseCCSUsrMsgScoreLeaderboardData = {};
const baseCCSUsrMsgPlayerDecalDigitalSignature = {};
const baseCCSUsrMsgXRankGet = {
    modeIdx: 0,
    controller: 0
};
const baseCCSUsrMsgXRankUpd = {
    modeIdx: 0,
    controller: 0,
    ranking: 0
};
const baseCCSUsrMsgCallVoteFailed = {
    reason: 0,
    time: 0
};
const baseCCSUsrMsgVoteStart = {
    team: 0,
    entIdx: 0,
    voteType: 0,
    dispStr: "",
    detailsStr: "",
    otherTeamStr: "",
    isYesNoVote: false,
    entidxTarget: 0
};
const baseCCSUsrMsgVotePass = {
    team: 0,
    voteType: 0,
    dispStr: "",
    detailsStr: ""
};
const baseCCSUsrMsgVoteFailed = {
    team: 0,
    reason: 0
};
const baseCCSUsrMsgVoteSetup = {
    potentialIssues: ""
};
const baseCCSUsrMsgSendLastKillerDamageToClient = {
    numHitsGiven: 0,
    damageGiven: 0,
    numHitsTaken: 0,
    damageTaken: 0
};
const baseCCSUsrMsgServerRankUpdate = {};
const baseCCSUsrMsgServerRankUpdate_RankUpdate = {
    accountId: 0,
    rankOld: 0,
    rankNew: 0,
    numWins: 0,
    rankChange: 0,
    rankTypeId: 0
};
const baseCCSUsrMsgXpUpdate = {};
const baseCCSUsrMsgItemPickup = {
    item: ""
};
const baseCCSUsrMsgShowMenu = {
    bitsValidSlots: 0,
    displayTime: 0,
    menuString: ""
};
const baseCCSUsrMsgBarTime = {
    time: ""
};
const baseCCSUsrMsgAmmoDenied = {
    ammoIdx: 0
};
const baseCCSUsrMsgMarkAchievement = {
    achievement: ""
};
const baseCCSUsrMsgMatchStatsUpdate = {
    update: ""
};
const baseCCSUsrMsgItemDrop = {
    itemid: Long.ZERO,
    death: false
};
const baseCCSUsrMsgGlowPropTurnOff = {
    entidx: 0
};
const baseCCSUsrMsgRoundBackupFilenames = {
    count: 0,
    index: 0,
    filename: "",
    nicename: ""
};
const baseCCSUsrMsgSSUI = {
    show: false,
    startTime: 0,
    endTime: 0
};
const baseCCSUsrMsgSurvivalStats = {
    xuid: Long.UZERO,
    ticknumber: 0
};
const baseCCSUsrMsgSurvivalStats_Fact = {
    type: 0,
    display: 0,
    value: 0,
    interestingness: 0
};
const baseCCSUsrMsgSurvivalStats_Placement = {
    xuid: Long.UZERO,
    teamnumber: 0,
    placement: 0
};
const baseCCSUsrMsgSurvivalStats_Damage = {
    xuid: Long.UZERO,
    to: 0,
    toHits: 0,
    from: 0,
    fromHits: 0
};
const baseCCSUsrMsgEndOfMatchAllPlayersData = {
    scene: 0
};
const baseCCSUsrMsgEndOfMatchAllPlayersData_Accolade = {
    eaccolade: 0,
    value: 0,
    position: 0
};
const baseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData = {
    entindex: 0,
    xuid: Long.UZERO,
    name: "",
    teamnumber: 0,
    playercolor: 0,
    isbot: false
};
const baseCCSUsrMsgRoundImpactScoreData = {};
const baseCCSUsrMsgRoundImpactScoreData_RisEvent = {
    timestamp: 0,
    terroristOdds: 0,
    ctAlive: 0,
    tAlive: 0
};
const baseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim = {
    teamNumber: 0,
    entindex: 0,
    xuid: Long.UZERO,
    color: 0,
    isBot: false,
    isDead: false
};
const baseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective = {
    type: 0
};
const baseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage = {
    targetEntindex: 0,
    targetXuid: Long.UZERO,
    healthRemoved: 0,
    numHits: 0,
    returnHealthRemoved: 0,
    numReturnHits: 0
};
const baseCCSUsrMsgRoundImpactScoreData_InitialConditions = {
    ctEquipValue: 0,
    tEquipValue: 0,
    terroristOdds: 0
};
const baseCCSUsrMsgCurrentRoundOdds = {
    odds: 0
};
const baseCCSUsrMsgDeepStats = {};
const baseCCSUsrMsgResetHud = {
    reset: false
};
const baseCCSUsrMsgGameTitle = {
    dummy: 0
};
const baseCCSUsrMsgRequestState = {
    dummy: 0
};
const baseCCSUsrMsgStopSpectatorMode = {
    dummy: 0
};
const baseCCSUsrMsgDisconnectToLobby = {
    dummy: 0
};
const baseCCSUsrMsgWarmupHasEnded = {
    dummy: 0
};
const baseCCSUsrMsgClientInfo = {
    dummy: 0
};
const baseCCSUsrMsgServerRankRevealAll = {
    secondsTillShutdown: 0
};
exports.protobufPackage = "";
var ECstrike15UserMessages;
(function (ECstrike15UserMessages) {
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_VGUIMenu"] = 1] = "CS_UM_VGUIMenu";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_Geiger"] = 2] = "CS_UM_Geiger";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_Train"] = 3] = "CS_UM_Train";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_HudText"] = 4] = "CS_UM_HudText";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SayText"] = 5] = "CS_UM_SayText";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SayText2"] = 6] = "CS_UM_SayText2";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_TextMsg"] = 7] = "CS_UM_TextMsg";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_HudMsg"] = 8] = "CS_UM_HudMsg";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ResetHud"] = 9] = "CS_UM_ResetHud";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_GameTitle"] = 10] = "CS_UM_GameTitle";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_Shake"] = 12] = "CS_UM_Shake";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_Fade"] = 13] = "CS_UM_Fade";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_Rumble"] = 14] = "CS_UM_Rumble";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_CloseCaption"] = 15] = "CS_UM_CloseCaption";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_CloseCaptionDirect"] = 16] = "CS_UM_CloseCaptionDirect";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SendAudio"] = 17] = "CS_UM_SendAudio";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_RawAudio"] = 18] = "CS_UM_RawAudio";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_VoiceMask"] = 19] = "CS_UM_VoiceMask";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_RequestState"] = 20] = "CS_UM_RequestState";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_Damage"] = 21] = "CS_UM_Damage";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_RadioText"] = 22] = "CS_UM_RadioText";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_HintText"] = 23] = "CS_UM_HintText";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_KeyHintText"] = 24] = "CS_UM_KeyHintText";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ProcessSpottedEntityUpdate"] = 25] = "CS_UM_ProcessSpottedEntityUpdate";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ReloadEffect"] = 26] = "CS_UM_ReloadEffect";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_AdjustMoney"] = 27] = "CS_UM_AdjustMoney";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_UpdateTeamMoney"] = 28] = "CS_UM_UpdateTeamMoney";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_StopSpectatorMode"] = 29] = "CS_UM_StopSpectatorMode";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_KillCam"] = 30] = "CS_UM_KillCam";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_DesiredTimescale"] = 31] = "CS_UM_DesiredTimescale";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_CurrentTimescale"] = 32] = "CS_UM_CurrentTimescale";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_AchievementEvent"] = 33] = "CS_UM_AchievementEvent";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_MatchEndConditions"] = 34] = "CS_UM_MatchEndConditions";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_DisconnectToLobby"] = 35] = "CS_UM_DisconnectToLobby";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_PlayerStatsUpdate"] = 36] = "CS_UM_PlayerStatsUpdate";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_DisplayInventory"] = 37] = "CS_UM_DisplayInventory";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_WarmupHasEnded"] = 38] = "CS_UM_WarmupHasEnded";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ClientInfo"] = 39] = "CS_UM_ClientInfo";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_XRankGet"] = 40] = "CS_UM_XRankGet";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_XRankUpd"] = 41] = "CS_UM_XRankUpd";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_CallVoteFailed"] = 45] = "CS_UM_CallVoteFailed";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_VoteStart"] = 46] = "CS_UM_VoteStart";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_VotePass"] = 47] = "CS_UM_VotePass";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_VoteFailed"] = 48] = "CS_UM_VoteFailed";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_VoteSetup"] = 49] = "CS_UM_VoteSetup";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ServerRankRevealAll"] = 50] = "CS_UM_ServerRankRevealAll";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SendLastKillerDamageToClient"] = 51] = "CS_UM_SendLastKillerDamageToClient";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ServerRankUpdate"] = 52] = "CS_UM_ServerRankUpdate";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ItemPickup"] = 53] = "CS_UM_ItemPickup";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ShowMenu"] = 54] = "CS_UM_ShowMenu";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_BarTime"] = 55] = "CS_UM_BarTime";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_AmmoDenied"] = 56] = "CS_UM_AmmoDenied";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_MarkAchievement"] = 57] = "CS_UM_MarkAchievement";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_MatchStatsUpdate"] = 58] = "CS_UM_MatchStatsUpdate";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ItemDrop"] = 59] = "CS_UM_ItemDrop";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_GlowPropTurnOff"] = 60] = "CS_UM_GlowPropTurnOff";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SendPlayerItemDrops"] = 61] = "CS_UM_SendPlayerItemDrops";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_RoundBackupFilenames"] = 62] = "CS_UM_RoundBackupFilenames";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SendPlayerItemFound"] = 63] = "CS_UM_SendPlayerItemFound";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ReportHit"] = 64] = "CS_UM_ReportHit";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_XpUpdate"] = 65] = "CS_UM_XpUpdate";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_QuestProgress"] = 66] = "CS_UM_QuestProgress";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_ScoreLeaderboardData"] = 67] = "CS_UM_ScoreLeaderboardData";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_PlayerDecalDigitalSignature"] = 68] = "CS_UM_PlayerDecalDigitalSignature";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_WeaponSound"] = 69] = "CS_UM_WeaponSound";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_UpdateScreenHealthBar"] = 70] = "CS_UM_UpdateScreenHealthBar";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_EntityOutlineHighlight"] = 71] = "CS_UM_EntityOutlineHighlight";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SSUI"] = 72] = "CS_UM_SSUI";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_SurvivalStats"] = 73] = "CS_UM_SurvivalStats";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_DisconnectToLobby2"] = 74] = "CS_UM_DisconnectToLobby2";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_EndOfMatchAllPlayersData"] = 75] = "CS_UM_EndOfMatchAllPlayersData";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_RoundImpactScoreData"] = 79] = "CS_UM_RoundImpactScoreData";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_CurrentRoundOdds"] = 80] = "CS_UM_CurrentRoundOdds";
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_DeepStats"] = 81] = "CS_UM_DeepStats";
})(ECstrike15UserMessages = exports.ECstrike15UserMessages || (exports.ECstrike15UserMessages = {}));
var ECSUsrMsgDisconnectToLobbyAction;
(function (ECSUsrMsgDisconnectToLobbyAction) {
    ECSUsrMsgDisconnectToLobbyAction[ECSUsrMsgDisconnectToLobbyAction["k_ECSUsrMsg_DisconnectToLobby_Action_Default"] = 0] = "k_ECSUsrMsg_DisconnectToLobby_Action_Default";
    ECSUsrMsgDisconnectToLobbyAction[ECSUsrMsgDisconnectToLobbyAction["k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue"] = 1] = "k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue";
})(ECSUsrMsgDisconnectToLobbyAction = exports.ECSUsrMsgDisconnectToLobbyAction || (exports.ECSUsrMsgDisconnectToLobbyAction = {}));
exports.CCSUsrMsgVGUIMenu = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(16).bool(message.show);
        for (const v of message.subkeys) {
            exports.CCSUsrMsgVGUIMenu_Subkey.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgVGUIMenu };
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
                    message.subkeys.push(exports.CCSUsrMsgVGUIMenu_Subkey.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgVGUIMenu_Subkey = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.str);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgVGUIMenu_Subkey
        };
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
exports.CCSUsrMsgGeiger = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.range);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgGeiger };
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
exports.CCSUsrMsgTrain = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.train);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgTrain };
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
exports.CCSUsrMsgHudText = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.text);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgHudText };
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
exports.CCSUsrMsgSayText = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entIdx);
        writer.uint32(18).string(message.text);
        writer.uint32(24).bool(message.chat);
        writer.uint32(32).bool(message.textallchat);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgSayText };
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
exports.CCSUsrMsgSayText2 = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entIdx);
        writer.uint32(16).bool(message.chat);
        writer.uint32(26).string(message.msgName);
        for (const v of message.params) {
            writer.uint32(34).string(v);
        }
        writer.uint32(40).bool(message.textallchat);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgSayText2 };
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
exports.CCSUsrMsgTextMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.msgDst);
        for (const v of message.params) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgTextMsg };
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
exports.CCSUsrMsgHudMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.channel);
        if (message.pos !== undefined && message.pos !== undefined) {
            netmessages_1.CMsgVector2D.encode(message.pos, writer.uint32(18).fork()).ldelim();
        }
        if (message.clr1 !== undefined && message.clr1 !== undefined) {
            netmessages_1.CMsgRGBA.encode(message.clr1, writer.uint32(26).fork()).ldelim();
        }
        if (message.clr2 !== undefined && message.clr2 !== undefined) {
            netmessages_1.CMsgRGBA.encode(message.clr2, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(40).int32(message.effect);
        writer.uint32(53).float(message.fadeInTime);
        writer.uint32(61).float(message.fadeOutTime);
        writer.uint32(77).float(message.holdTime);
        writer.uint32(85).float(message.fxTime);
        writer.uint32(90).string(message.text);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgHudMsg };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = reader.int32();
                    break;
                case 2:
                    message.pos = netmessages_1.CMsgVector2D.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.clr1 = netmessages_1.CMsgRGBA.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.clr2 = netmessages_1.CMsgRGBA.decode(reader, reader.uint32());
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
exports.CCSUsrMsgShake = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.command);
        writer.uint32(21).float(message.localAmplitude);
        writer.uint32(29).float(message.frequency);
        writer.uint32(37).float(message.duration);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgShake };
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
exports.CCSUsrMsgFade = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.duration);
        writer.uint32(16).int32(message.holdTime);
        writer.uint32(24).int32(message.flags);
        if (message.clr !== undefined && message.clr !== undefined) {
            netmessages_1.CMsgRGBA.encode(message.clr, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgFade };
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
                    message.clr = netmessages_1.CMsgRGBA.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgRumble = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.index);
        writer.uint32(16).int32(message.data);
        writer.uint32(24).int32(message.flags);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgRumble };
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
exports.CCSUsrMsgCloseCaption = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.hash);
        writer.uint32(16).int32(message.duration);
        writer.uint32(24).bool(message.fromPlayer);
        writer.uint32(34).string(message.cctoken);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgCloseCaption };
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
exports.CCSUsrMsgCloseCaptionDirect = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.hash);
        writer.uint32(16).int32(message.duration);
        writer.uint32(24).bool(message.fromPlayer);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgCloseCaptionDirect
        };
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
exports.CCSUsrMsgSendAudio = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.radioSound);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgSendAudio };
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
exports.CCSUsrMsgRawAudio = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.pitch);
        writer.uint32(16).int32(message.entidx);
        writer.uint32(29).float(message.duration);
        writer.uint32(34).string(message.voiceFilename);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgRawAudio };
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
exports.CCSUsrMsgVoiceMask = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.playerMasks) {
            exports.CCSUsrMsgVoiceMask_PlayerMask.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(16).bool(message.playerModEnable);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgVoiceMask };
        message.playerMasks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerMasks.push(exports.CCSUsrMsgVoiceMask_PlayerMask.decode(reader, reader.uint32()));
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
exports.CCSUsrMsgVoiceMask_PlayerMask = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.gameRulesMask);
        writer.uint32(16).int32(message.banMasks);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgVoiceMask_PlayerMask
        };
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
exports.CCSUsrMsgDamage = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.amount);
        if (message.inflictorWorldPos !== undefined &&
            message.inflictorWorldPos !== undefined) {
            netmessages_1.CMsgVector.encode(message.inflictorWorldPos, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(24).int32(message.victimEntindex);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgDamage };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.int32();
                    break;
                case 2:
                    message.inflictorWorldPos = netmessages_1.CMsgVector.decode(reader, reader.uint32());
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
exports.CCSUsrMsgRadioText = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.msgDst);
        writer.uint32(16).int32(message.client);
        writer.uint32(26).string(message.msgName);
        for (const v of message.params) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgRadioText };
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
exports.CCSUsrMsgHintText = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.text);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgHintText };
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
exports.CCSUsrMsgKeyHintText = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.hints) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgKeyHintText };
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
exports.CCSUsrMsgProcessSpottedEntityUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.newUpdate);
        for (const v of message.entityUpdates) {
            exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgProcessSpottedEntityUpdate
        };
        message.entityUpdates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newUpdate = reader.bool();
                    break;
                case 2:
                    message.entityUpdates.push(exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate
        };
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
exports.CCSUsrMsgSendPlayerItemDrops = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entityUpdates) {
            cstrike15_gcmessages_1.CEconItemPreviewDataBlock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgSendPlayerItemDrops
        };
        message.entityUpdates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entityUpdates.push(cstrike15_gcmessages_1.CEconItemPreviewDataBlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgSendPlayerItemFound = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.iteminfo !== undefined && message.iteminfo !== undefined) {
            cstrike15_gcmessages_1.CEconItemPreviewDataBlock.encode(message.iteminfo, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(16).int32(message.entindex);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgSendPlayerItemFound
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iteminfo = cstrike15_gcmessages_1.CEconItemPreviewDataBlock.decode(reader, reader.uint32());
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
exports.CCSUsrMsgReloadEffect = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entidx);
        writer.uint32(16).int32(message.actanim);
        writer.uint32(29).float(message.originX);
        writer.uint32(37).float(message.originY);
        writer.uint32(45).float(message.originZ);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgReloadEffect };
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
exports.CCSUsrMsgWeaponSound = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entidx);
        writer.uint32(21).float(message.originX);
        writer.uint32(29).float(message.originY);
        writer.uint32(37).float(message.originZ);
        writer.uint32(42).string(message.sound);
        writer.uint32(53).float(message.timestamp);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgWeaponSound };
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
exports.CCSUsrMsgUpdateScreenHealthBar = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entidx);
        writer.uint32(21).float(message.healthratioOld);
        writer.uint32(29).float(message.healthratioNew);
        writer.uint32(32).int32(message.style);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgUpdateScreenHealthBar
        };
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
exports.CCSUsrMsgEntityOutlineHighlight = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entidx);
        writer.uint32(16).bool(message.removehighlight);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgEntityOutlineHighlight
        };
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
exports.CCSUsrMsgAdjustMoney = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.amount);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgAdjustMoney };
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
exports.CCSUsrMsgReportHit = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.posX);
        writer.uint32(21).float(message.posY);
        writer.uint32(37).float(message.timestamp);
        writer.uint32(29).float(message.posZ);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgReportHit };
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
exports.CCSUsrMsgKillCam = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.obsMode);
        writer.uint32(16).int32(message.firstTarget);
        writer.uint32(24).int32(message.secondTarget);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgKillCam };
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
exports.CCSUsrMsgDesiredTimescale = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.desiredTimescale);
        writer.uint32(21).float(message.durationRealtimeSec);
        writer.uint32(24).int32(message.interpolatorType);
        writer.uint32(37).float(message.startBlendTime);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgDesiredTimescale
        };
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
exports.CCSUsrMsgCurrentTimescale = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.curTimescale);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgCurrentTimescale
        };
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
exports.CCSUsrMsgAchievementEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.achievement);
        writer.uint32(16).int32(message.count);
        writer.uint32(24).int32(message.userId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgAchievementEvent
        };
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
exports.CCSUsrMsgMatchEndConditions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.fraglimit);
        writer.uint32(16).int32(message.mpMaxrounds);
        writer.uint32(24).int32(message.mpWinlimit);
        writer.uint32(32).int32(message.mpTimelimit);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgMatchEndConditions
        };
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
exports.CCSUsrMsgPlayerStatsUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.version);
        for (const v of message.stats) {
            exports.CCSUsrMsgPlayerStatsUpdate_Stat.encode(v, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(40).int32(message.userId);
        writer.uint32(48).int32(message.crc);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgPlayerStatsUpdate
        };
        message.stats = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 4:
                    message.stats.push(exports.CCSUsrMsgPlayerStatsUpdate_Stat.decode(reader, reader.uint32()));
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
exports.CCSUsrMsgPlayerStatsUpdate_Stat = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.idx);
        writer.uint32(16).int32(message.delta);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgPlayerStatsUpdate_Stat
        };
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
exports.CCSUsrMsgDisplayInventory = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.display);
        writer.uint32(16).int32(message.userId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgDisplayInventory
        };
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
exports.CCSUsrMsgQuestProgress = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.questId);
        writer.uint32(16).uint32(message.normalPoints);
        writer.uint32(24).uint32(message.bonusPoints);
        writer.uint32(32).bool(message.isEventQuest);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgQuestProgress };
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
exports.CCSUsrMsgScoreLeaderboardData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined && message.data !== undefined) {
            cstrike15_gcmessages_1.ScoreLeaderboardData.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgScoreLeaderboardData
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = cstrike15_gcmessages_1.ScoreLeaderboardData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgPlayerDecalDigitalSignature = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined && message.data !== undefined) {
            cstrike15_gcmessages_1.PlayerDecalDigitalSignature.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgPlayerDecalDigitalSignature
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = cstrike15_gcmessages_1.PlayerDecalDigitalSignature.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgXRankGet = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.modeIdx);
        writer.uint32(16).int32(message.controller);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgXRankGet };
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
exports.CCSUsrMsgXRankUpd = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.modeIdx);
        writer.uint32(16).int32(message.controller);
        writer.uint32(24).int32(message.ranking);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgXRankUpd };
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
exports.CCSUsrMsgCallVoteFailed = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.reason);
        writer.uint32(16).int32(message.time);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgCallVoteFailed
        };
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
exports.CCSUsrMsgVoteStart = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgVoteStart };
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
exports.CCSUsrMsgVotePass = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.team);
        writer.uint32(16).int32(message.voteType);
        writer.uint32(26).string(message.dispStr);
        writer.uint32(34).string(message.detailsStr);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgVotePass };
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
exports.CCSUsrMsgVoteFailed = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.team);
        writer.uint32(16).int32(message.reason);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgVoteFailed };
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
exports.CCSUsrMsgVoteSetup = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.potentialIssues) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgVoteSetup };
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
exports.CCSUsrMsgSendLastKillerDamageToClient = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.numHitsGiven);
        writer.uint32(16).int32(message.damageGiven);
        writer.uint32(24).int32(message.numHitsTaken);
        writer.uint32(32).int32(message.damageTaken);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgSendLastKillerDamageToClient
        };
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
exports.CCSUsrMsgServerRankUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.rankUpdate) {
            exports.CCSUsrMsgServerRankUpdate_RankUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgServerRankUpdate
        };
        message.rankUpdate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rankUpdate.push(exports.CCSUsrMsgServerRankUpdate_RankUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgServerRankUpdate_RankUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.accountId);
        writer.uint32(16).int32(message.rankOld);
        writer.uint32(24).int32(message.rankNew);
        writer.uint32(32).int32(message.numWins);
        writer.uint32(45).float(message.rankChange);
        writer.uint32(48).int32(message.rankTypeId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgServerRankUpdate_RankUpdate
        };
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
exports.CCSUsrMsgXpUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined && message.data !== undefined) {
            cstrike15_gcmessages_1.CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgXpUpdate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = cstrike15_gcmessages_1.CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgItemPickup = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.item);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgItemPickup };
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
exports.CCSUsrMsgShowMenu = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.bitsValidSlots);
        writer.uint32(16).int32(message.displayTime);
        writer.uint32(26).string(message.menuString);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgShowMenu };
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
exports.CCSUsrMsgBarTime = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.time);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgBarTime };
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
exports.CCSUsrMsgAmmoDenied = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.ammoIdx);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgAmmoDenied };
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
exports.CCSUsrMsgMarkAchievement = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.achievement);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgMarkAchievement
        };
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
exports.CCSUsrMsgMatchStatsUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.update);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgMatchStatsUpdate
        };
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
exports.CCSUsrMsgItemDrop = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int64(message.itemid);
        writer.uint32(16).bool(message.death);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgItemDrop };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.itemid = reader.int64();
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
exports.CCSUsrMsgGlowPropTurnOff = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entidx);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgGlowPropTurnOff
        };
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
exports.CCSUsrMsgRoundBackupFilenames = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.count);
        writer.uint32(16).int32(message.index);
        writer.uint32(26).string(message.filename);
        writer.uint32(34).string(message.nicename);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundBackupFilenames
        };
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
exports.CCSUsrMsgSSUI = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.show);
        writer.uint32(21).float(message.startTime);
        writer.uint32(29).float(message.endTime);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgSSUI };
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
exports.CCSUsrMsgSurvivalStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint64(message.xuid);
        for (const v of message.facts) {
            exports.CCSUsrMsgSurvivalStats_Fact.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.users) {
            exports.CCSUsrMsgSurvivalStats_Placement.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.damages) {
            exports.CCSUsrMsgSurvivalStats_Damage.encode(v, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(32).int32(message.ticknumber);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgSurvivalStats };
        message.facts = [];
        message.users = [];
        message.damages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.xuid = reader.uint64();
                    break;
                case 2:
                    message.facts.push(exports.CCSUsrMsgSurvivalStats_Fact.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.users.push(exports.CCSUsrMsgSurvivalStats_Placement.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.damages.push(exports.CCSUsrMsgSurvivalStats_Damage.decode(reader, reader.uint32()));
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
exports.CCSUsrMsgSurvivalStats_Fact = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        writer.uint32(16).int32(message.display);
        writer.uint32(24).int32(message.value);
        writer.uint32(37).float(message.interestingness);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgSurvivalStats_Fact
        };
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
exports.CCSUsrMsgSurvivalStats_Placement = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint64(message.xuid);
        writer.uint32(16).int32(message.teamnumber);
        writer.uint32(24).int32(message.placement);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgSurvivalStats_Placement
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.xuid = reader.uint64();
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
exports.CCSUsrMsgSurvivalStats_Damage = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint64(message.xuid);
        writer.uint32(16).int32(message.to);
        writer.uint32(24).int32(message.toHits);
        writer.uint32(32).int32(message.from);
        writer.uint32(40).int32(message.fromHits);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgSurvivalStats_Damage
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.xuid = reader.uint64();
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
exports.CCSUsrMsgEndOfMatchAllPlayersData = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.allplayerdata) {
            exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(16).int32(message.scene);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgEndOfMatchAllPlayersData
        };
        message.allplayerdata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allplayerdata.push(exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.decode(reader, reader.uint32()));
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
exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eaccolade);
        writer.uint32(21).float(message.value);
        writer.uint32(24).int32(message.position);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgEndOfMatchAllPlayersData_Accolade
        };
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
exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.entindex);
        writer.uint32(16).uint64(message.xuid);
        writer.uint32(26).string(message.name);
        writer.uint32(32).int32(message.teamnumber);
        if (message.nomination !== undefined && message.nomination !== undefined) {
            exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade.encode(message.nomination, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.items) {
            cstrike15_gcmessages_1.CEconItemPreviewDataBlock.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(56).int32(message.playercolor);
        writer.uint32(64).bool(message.isbot);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData
        };
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entindex = reader.int32();
                    break;
                case 2:
                    message.xuid = reader.uint64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.teamnumber = reader.int32();
                    break;
                case 5:
                    message.nomination = exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.items.push(cstrike15_gcmessages_1.CEconItemPreviewDataBlock.decode(reader, reader.uint32()));
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
exports.CCSUsrMsgRoundImpactScoreData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.initConditions !== undefined &&
            message.initConditions !== undefined) {
            exports.CCSUsrMsgRoundImpactScoreData_InitialConditions.encode(message.initConditions, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allRisEventData) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundImpactScoreData
        };
        message.allRisEventData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initConditions = exports.CCSUsrMsgRoundImpactScoreData_InitialConditions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allRisEventData.push(exports.CCSUsrMsgRoundImpactScoreData_RisEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgRoundImpactScoreData_RisEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(13).float(message.timestamp);
        writer.uint32(16).int32(message.terroristOdds);
        writer.uint32(24).int32(message.ctAlive);
        writer.uint32(32).int32(message.tAlive);
        if (message.victimData !== undefined && message.victimData !== undefined) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.encode(message.victimData, writer.uint32(42).fork()).ldelim();
        }
        if (message.objectiveData !== undefined &&
            message.objectiveData !== undefined) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.encode(message.objectiveData, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.allDamageData) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundImpactScoreData_RisEvent
        };
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
                    message.victimData = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.objectiveData = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.allDamageData.push(exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.teamNumber);
        writer.uint32(16).int32(message.entindex);
        writer.uint32(24).uint64(message.xuid);
        writer.uint32(32).int32(message.color);
        writer.uint32(40).bool(message.isBot);
        writer.uint32(48).bool(message.isDead);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim
        };
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
                    message.xuid = reader.uint64();
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
exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective
        };
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
exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.targetEntindex);
        writer.uint32(16).uint64(message.targetXuid);
        writer.uint32(24).int32(message.healthRemoved);
        writer.uint32(32).int32(message.numHits);
        writer.uint32(40).int32(message.returnHealthRemoved);
        writer.uint32(48).int32(message.numReturnHits);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetEntindex = reader.int32();
                    break;
                case 2:
                    message.targetXuid = reader.uint64();
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
exports.CCSUsrMsgRoundImpactScoreData_InitialConditions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.ctEquipValue);
        writer.uint32(16).int32(message.tEquipValue);
        writer.uint32(24).int32(message.terroristOdds);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgRoundImpactScoreData_InitialConditions
        };
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
exports.CCSUsrMsgCurrentRoundOdds = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.odds);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgCurrentRoundOdds
        };
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
exports.CCSUsrMsgDeepStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.stats !== undefined && message.stats !== undefined) {
            cstrike15_gcmessages_1.CMsgGCCStrike15ClientDeepStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgDeepStats };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stats = cstrike15_gcmessages_1.CMsgGCCStrike15ClientDeepStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.CCSUsrMsgResetHud = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.reset);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgResetHud };
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
exports.CCSUsrMsgGameTitle = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dummy);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgGameTitle };
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
exports.CCSUsrMsgRequestState = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dummy);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgRequestState };
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
exports.CCSUsrMsgStopSpectatorMode = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dummy);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgStopSpectatorMode
        };
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
exports.CCSUsrMsgDisconnectToLobby = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dummy);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgDisconnectToLobby
        };
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
exports.CCSUsrMsgWarmupHasEnded = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dummy);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgWarmupHasEnded
        };
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
exports.CCSUsrMsgClientInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.dummy);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCCSUsrMsgClientInfo };
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
exports.CCSUsrMsgServerRankRevealAll = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.secondsTillShutdown);
        if (message.reservation !== undefined &&
            message.reservation !== undefined) {
            cstrike15_gcmessages_1.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(message.reservation, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCCSUsrMsgServerRankRevealAll
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secondsTillShutdown = reader.int32();
                    break;
                case 2:
                    message.reservation = cstrike15_gcmessages_1.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
//# sourceMappingURL=cstrike15_usermessages.js.map