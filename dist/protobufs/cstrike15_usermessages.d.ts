import { CMsgVector2D, CMsgRGBA, CMsgVector } from "./netmessages";
import { CEconItemPreviewDataBlock, ScoreLeaderboardData, PlayerDecalDigitalSignature, CMsgGCCstrike15V2GC2ServerNotifyXPRewarded, CMsgGCCStrike15ClientDeepStats, CMsgGCCStrike15V2MatchmakingGC2ServerReserve } from "./cstrike15_gcmessages";
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
export declare const protobufPackage = "";
export declare enum ECstrike15UserMessages {
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
export declare enum ECSUsrMsgDisconnectToLobbyAction {
    k_ECSUsrMsg_DisconnectToLobby_Action_Default = 0,
    k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue = 1
}
export declare const CCSUsrMsgVGUIMenu: {
    encode(message: CCSUsrMsgVGUIMenu, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVGUIMenu;
};
export declare const CCSUsrMsgVGUIMenu_Subkey: {
    encode(message: CCSUsrMsgVGUIMenu_Subkey, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVGUIMenu_Subkey;
};
export declare const CCSUsrMsgGeiger: {
    encode(message: CCSUsrMsgGeiger, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgGeiger;
};
export declare const CCSUsrMsgTrain: {
    encode(message: CCSUsrMsgTrain, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgTrain;
};
export declare const CCSUsrMsgHudText: {
    encode(message: CCSUsrMsgHudText, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgHudText;
};
export declare const CCSUsrMsgSayText: {
    encode(message: CCSUsrMsgSayText, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSayText;
};
export declare const CCSUsrMsgSayText2: {
    encode(message: CCSUsrMsgSayText2, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSayText2;
};
export declare const CCSUsrMsgTextMsg: {
    encode(message: CCSUsrMsgTextMsg, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgTextMsg;
};
export declare const CCSUsrMsgHudMsg: {
    encode(message: CCSUsrMsgHudMsg, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgHudMsg;
};
export declare const CCSUsrMsgShake: {
    encode(message: CCSUsrMsgShake, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgShake;
};
export declare const CCSUsrMsgFade: {
    encode(message: CCSUsrMsgFade, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgFade;
};
export declare const CCSUsrMsgRumble: {
    encode(message: CCSUsrMsgRumble, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRumble;
};
export declare const CCSUsrMsgCloseCaption: {
    encode(message: CCSUsrMsgCloseCaption, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgCloseCaption;
};
export declare const CCSUsrMsgCloseCaptionDirect: {
    encode(message: CCSUsrMsgCloseCaptionDirect, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgCloseCaptionDirect;
};
export declare const CCSUsrMsgSendAudio: {
    encode(message: CCSUsrMsgSendAudio, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSendAudio;
};
export declare const CCSUsrMsgRawAudio: {
    encode(message: CCSUsrMsgRawAudio, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRawAudio;
};
export declare const CCSUsrMsgVoiceMask: {
    encode(message: CCSUsrMsgVoiceMask, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVoiceMask;
};
export declare const CCSUsrMsgVoiceMask_PlayerMask: {
    encode(message: CCSUsrMsgVoiceMask_PlayerMask, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVoiceMask_PlayerMask;
};
export declare const CCSUsrMsgDamage: {
    encode(message: CCSUsrMsgDamage, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgDamage;
};
export declare const CCSUsrMsgRadioText: {
    encode(message: CCSUsrMsgRadioText, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRadioText;
};
export declare const CCSUsrMsgHintText: {
    encode(message: CCSUsrMsgHintText, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgHintText;
};
export declare const CCSUsrMsgKeyHintText: {
    encode(message: CCSUsrMsgKeyHintText, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgKeyHintText;
};
export declare const CCSUsrMsgProcessSpottedEntityUpdate: {
    encode(message: CCSUsrMsgProcessSpottedEntityUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgProcessSpottedEntityUpdate;
};
export declare const CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate: {
    encode(message: CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate;
};
export declare const CCSUsrMsgSendPlayerItemDrops: {
    encode(message: CCSUsrMsgSendPlayerItemDrops, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSendPlayerItemDrops;
};
export declare const CCSUsrMsgSendPlayerItemFound: {
    encode(message: CCSUsrMsgSendPlayerItemFound, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSendPlayerItemFound;
};
export declare const CCSUsrMsgReloadEffect: {
    encode(message: CCSUsrMsgReloadEffect, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgReloadEffect;
};
export declare const CCSUsrMsgWeaponSound: {
    encode(message: CCSUsrMsgWeaponSound, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgWeaponSound;
};
export declare const CCSUsrMsgUpdateScreenHealthBar: {
    encode(message: CCSUsrMsgUpdateScreenHealthBar, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgUpdateScreenHealthBar;
};
export declare const CCSUsrMsgEntityOutlineHighlight: {
    encode(message: CCSUsrMsgEntityOutlineHighlight, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgEntityOutlineHighlight;
};
export declare const CCSUsrMsgAdjustMoney: {
    encode(message: CCSUsrMsgAdjustMoney, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgAdjustMoney;
};
export declare const CCSUsrMsgReportHit: {
    encode(message: CCSUsrMsgReportHit, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgReportHit;
};
export declare const CCSUsrMsgKillCam: {
    encode(message: CCSUsrMsgKillCam, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgKillCam;
};
export declare const CCSUsrMsgDesiredTimescale: {
    encode(message: CCSUsrMsgDesiredTimescale, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgDesiredTimescale;
};
export declare const CCSUsrMsgCurrentTimescale: {
    encode(message: CCSUsrMsgCurrentTimescale, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgCurrentTimescale;
};
export declare const CCSUsrMsgAchievementEvent: {
    encode(message: CCSUsrMsgAchievementEvent, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgAchievementEvent;
};
export declare const CCSUsrMsgMatchEndConditions: {
    encode(message: CCSUsrMsgMatchEndConditions, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgMatchEndConditions;
};
export declare const CCSUsrMsgPlayerStatsUpdate: {
    encode(message: CCSUsrMsgPlayerStatsUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgPlayerStatsUpdate;
};
export declare const CCSUsrMsgPlayerStatsUpdate_Stat: {
    encode(message: CCSUsrMsgPlayerStatsUpdate_Stat, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgPlayerStatsUpdate_Stat;
};
export declare const CCSUsrMsgDisplayInventory: {
    encode(message: CCSUsrMsgDisplayInventory, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgDisplayInventory;
};
export declare const CCSUsrMsgQuestProgress: {
    encode(message: CCSUsrMsgQuestProgress, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgQuestProgress;
};
export declare const CCSUsrMsgScoreLeaderboardData: {
    encode(message: CCSUsrMsgScoreLeaderboardData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgScoreLeaderboardData;
};
export declare const CCSUsrMsgPlayerDecalDigitalSignature: {
    encode(message: CCSUsrMsgPlayerDecalDigitalSignature, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgPlayerDecalDigitalSignature;
};
export declare const CCSUsrMsgXRankGet: {
    encode(message: CCSUsrMsgXRankGet, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgXRankGet;
};
export declare const CCSUsrMsgXRankUpd: {
    encode(message: CCSUsrMsgXRankUpd, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgXRankUpd;
};
export declare const CCSUsrMsgCallVoteFailed: {
    encode(message: CCSUsrMsgCallVoteFailed, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgCallVoteFailed;
};
export declare const CCSUsrMsgVoteStart: {
    encode(message: CCSUsrMsgVoteStart, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVoteStart;
};
export declare const CCSUsrMsgVotePass: {
    encode(message: CCSUsrMsgVotePass, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVotePass;
};
export declare const CCSUsrMsgVoteFailed: {
    encode(message: CCSUsrMsgVoteFailed, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVoteFailed;
};
export declare const CCSUsrMsgVoteSetup: {
    encode(message: CCSUsrMsgVoteSetup, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgVoteSetup;
};
export declare const CCSUsrMsgSendLastKillerDamageToClient: {
    encode(message: CCSUsrMsgSendLastKillerDamageToClient, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSendLastKillerDamageToClient;
};
export declare const CCSUsrMsgServerRankUpdate: {
    encode(message: CCSUsrMsgServerRankUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgServerRankUpdate;
};
export declare const CCSUsrMsgServerRankUpdate_RankUpdate: {
    encode(message: CCSUsrMsgServerRankUpdate_RankUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgServerRankUpdate_RankUpdate;
};
export declare const CCSUsrMsgXpUpdate: {
    encode(message: CCSUsrMsgXpUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgXpUpdate;
};
export declare const CCSUsrMsgItemPickup: {
    encode(message: CCSUsrMsgItemPickup, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgItemPickup;
};
export declare const CCSUsrMsgShowMenu: {
    encode(message: CCSUsrMsgShowMenu, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgShowMenu;
};
export declare const CCSUsrMsgBarTime: {
    encode(message: CCSUsrMsgBarTime, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgBarTime;
};
export declare const CCSUsrMsgAmmoDenied: {
    encode(message: CCSUsrMsgAmmoDenied, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgAmmoDenied;
};
export declare const CCSUsrMsgMarkAchievement: {
    encode(message: CCSUsrMsgMarkAchievement, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgMarkAchievement;
};
export declare const CCSUsrMsgMatchStatsUpdate: {
    encode(message: CCSUsrMsgMatchStatsUpdate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgMatchStatsUpdate;
};
export declare const CCSUsrMsgItemDrop: {
    encode(message: CCSUsrMsgItemDrop, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgItemDrop;
};
export declare const CCSUsrMsgGlowPropTurnOff: {
    encode(message: CCSUsrMsgGlowPropTurnOff, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgGlowPropTurnOff;
};
export declare const CCSUsrMsgRoundBackupFilenames: {
    encode(message: CCSUsrMsgRoundBackupFilenames, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundBackupFilenames;
};
export declare const CCSUsrMsgSSUI: {
    encode(message: CCSUsrMsgSSUI, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSSUI;
};
export declare const CCSUsrMsgSurvivalStats: {
    encode(message: CCSUsrMsgSurvivalStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSurvivalStats;
};
export declare const CCSUsrMsgSurvivalStats_Fact: {
    encode(message: CCSUsrMsgSurvivalStats_Fact, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSurvivalStats_Fact;
};
export declare const CCSUsrMsgSurvivalStats_Placement: {
    encode(message: CCSUsrMsgSurvivalStats_Placement, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSurvivalStats_Placement;
};
export declare const CCSUsrMsgSurvivalStats_Damage: {
    encode(message: CCSUsrMsgSurvivalStats_Damage, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgSurvivalStats_Damage;
};
export declare const CCSUsrMsgEndOfMatchAllPlayersData: {
    encode(message: CCSUsrMsgEndOfMatchAllPlayersData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgEndOfMatchAllPlayersData;
};
export declare const CCSUsrMsgEndOfMatchAllPlayersData_Accolade: {
    encode(message: CCSUsrMsgEndOfMatchAllPlayersData_Accolade, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgEndOfMatchAllPlayersData_Accolade;
};
export declare const CCSUsrMsgEndOfMatchAllPlayersData_PlayerData: {
    encode(message: CCSUsrMsgEndOfMatchAllPlayersData_PlayerData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData;
};
export declare const CCSUsrMsgRoundImpactScoreData: {
    encode(message: CCSUsrMsgRoundImpactScoreData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundImpactScoreData;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent_Victim: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent_Victim, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent_Objective: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent_Objective, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent_Damage: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent_Damage, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage;
};
export declare const CCSUsrMsgRoundImpactScoreData_InitialConditions: {
    encode(message: CCSUsrMsgRoundImpactScoreData_InitialConditions, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_InitialConditions;
};
export declare const CCSUsrMsgCurrentRoundOdds: {
    encode(message: CCSUsrMsgCurrentRoundOdds, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgCurrentRoundOdds;
};
export declare const CCSUsrMsgDeepStats: {
    encode(message: CCSUsrMsgDeepStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgDeepStats;
};
export declare const CCSUsrMsgResetHud: {
    encode(message: CCSUsrMsgResetHud, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgResetHud;
};
export declare const CCSUsrMsgGameTitle: {
    encode(message: CCSUsrMsgGameTitle, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgGameTitle;
};
export declare const CCSUsrMsgRequestState: {
    encode(message: CCSUsrMsgRequestState, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgRequestState;
};
export declare const CCSUsrMsgStopSpectatorMode: {
    encode(message: CCSUsrMsgStopSpectatorMode, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgStopSpectatorMode;
};
export declare const CCSUsrMsgDisconnectToLobby: {
    encode(message: CCSUsrMsgDisconnectToLobby, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgDisconnectToLobby;
};
export declare const CCSUsrMsgWarmupHasEnded: {
    encode(message: CCSUsrMsgWarmupHasEnded, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgWarmupHasEnded;
};
export declare const CCSUsrMsgClientInfo: {
    encode(message: CCSUsrMsgClientInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgClientInfo;
};
export declare const CCSUsrMsgServerRankRevealAll: {
    encode(message: CCSUsrMsgServerRankRevealAll, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CCSUsrMsgServerRankRevealAll;
};
