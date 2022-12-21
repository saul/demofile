import { Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { CMsgVector2D, CMsgRGBA, CMsgVector } from "./netmessages";
import { CEconItemPreviewDataBlock, ScoreLeaderboardData, PlayerDecalDigitalSignature, CMsgGCCstrike15V2GC2ServerNotifyXPRewarded, CMsgGCCStrike15ClientDeepStats, CMsgGCCStrike15V2MatchmakingGC2ServerReserve } from "./cstrike15_gcmessages";
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
    CS_UM_DeepStats = 81,
    CS_UM_UtilMsg = 82
}
export declare enum ECSUsrMsgDisconnectToLobbyAction {
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
export declare const CCSUsrMsgVGUIMenu: {
    encode(message: CCSUsrMsgVGUIMenu, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVGUIMenu;
    fromPartial<I extends {
        name?: string | undefined;
        show?: boolean | undefined;
        subkeys?: {
            name?: string | undefined;
            str?: string | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        show?: boolean | undefined;
        subkeys?: ({
            name?: string | undefined;
            str?: string | undefined;
        }[] & ({
            name?: string | undefined;
            str?: string | undefined;
        } & {
            name?: string | undefined;
            str?: string | undefined;
        } & Record<Exclude<keyof I["subkeys"][number], keyof CCSUsrMsgVGUIMenu_Subkey>, never>)[] & Record<Exclude<keyof I["subkeys"], keyof {
            name?: string | undefined;
            str?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVGUIMenu>, never>>(object: I): CCSUsrMsgVGUIMenu;
};
export declare const CCSUsrMsgVGUIMenu_Subkey: {
    encode(message: CCSUsrMsgVGUIMenu_Subkey, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVGUIMenu_Subkey;
    fromPartial<I extends {
        name?: string | undefined;
        str?: string | undefined;
    } & {
        name?: string | undefined;
        str?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVGUIMenu_Subkey>, never>>(object: I): CCSUsrMsgVGUIMenu_Subkey;
};
export declare const CCSUsrMsgGeiger: {
    encode(message: CCSUsrMsgGeiger, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgGeiger;
    fromPartial<I extends {
        range?: number | undefined;
    } & {
        range?: number | undefined;
    } & Record<Exclude<keyof I, "range">, never>>(object: I): CCSUsrMsgGeiger;
};
export declare const CCSUsrMsgTrain: {
    encode(message: CCSUsrMsgTrain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgTrain;
    fromPartial<I extends {
        train?: number | undefined;
    } & {
        train?: number | undefined;
    } & Record<Exclude<keyof I, "train">, never>>(object: I): CCSUsrMsgTrain;
};
export declare const CCSUsrMsgHudText: {
    encode(message: CCSUsrMsgHudText, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgHudText;
    fromPartial<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & Record<Exclude<keyof I, "text">, never>>(object: I): CCSUsrMsgHudText;
};
export declare const CCSUsrMsgSayText: {
    encode(message: CCSUsrMsgSayText, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSayText;
    fromPartial<I extends {
        entIdx?: number | undefined;
        text?: string | undefined;
        chat?: boolean | undefined;
        textallchat?: boolean | undefined;
    } & {
        entIdx?: number | undefined;
        text?: string | undefined;
        chat?: boolean | undefined;
        textallchat?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSayText>, never>>(object: I): CCSUsrMsgSayText;
};
export declare const CCSUsrMsgSayText2: {
    encode(message: CCSUsrMsgSayText2, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSayText2;
    fromPartial<I extends {
        entIdx?: number | undefined;
        chat?: boolean | undefined;
        msgName?: string | undefined;
        params?: string[] | undefined;
        textallchat?: boolean | undefined;
    } & {
        entIdx?: number | undefined;
        chat?: boolean | undefined;
        msgName?: string | undefined;
        params?: (string[] & string[] & Record<Exclude<keyof I["params"], keyof string[]>, never>) | undefined;
        textallchat?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSayText2>, never>>(object: I): CCSUsrMsgSayText2;
};
export declare const CCSUsrMsgTextMsg: {
    encode(message: CCSUsrMsgTextMsg, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgTextMsg;
    fromPartial<I extends {
        msgDst?: number | undefined;
        params?: string[] | undefined;
    } & {
        msgDst?: number | undefined;
        params?: (string[] & string[] & Record<Exclude<keyof I["params"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgTextMsg>, never>>(object: I): CCSUsrMsgTextMsg;
};
export declare const CCSUsrMsgHudMsg: {
    encode(message: CCSUsrMsgHudMsg, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgHudMsg;
    fromPartial<I extends {
        channel?: number | undefined;
        pos?: {
            x?: number | undefined;
            y?: number | undefined;
        } | undefined;
        clr1?: {
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } | undefined;
        clr2?: {
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } | undefined;
        effect?: number | undefined;
        fadeInTime?: number | undefined;
        fadeOutTime?: number | undefined;
        holdTime?: number | undefined;
        fxTime?: number | undefined;
        text?: string | undefined;
    } & {
        channel?: number | undefined;
        pos?: ({
            x?: number | undefined;
            y?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
        } & Record<Exclude<keyof I["pos"], keyof CMsgVector2D>, never>) | undefined;
        clr1?: ({
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } & {
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } & Record<Exclude<keyof I["clr1"], keyof CMsgRGBA>, never>) | undefined;
        clr2?: ({
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } & {
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } & Record<Exclude<keyof I["clr2"], keyof CMsgRGBA>, never>) | undefined;
        effect?: number | undefined;
        fadeInTime?: number | undefined;
        fadeOutTime?: number | undefined;
        holdTime?: number | undefined;
        fxTime?: number | undefined;
        text?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgHudMsg>, never>>(object: I): CCSUsrMsgHudMsg;
};
export declare const CCSUsrMsgShake: {
    encode(message: CCSUsrMsgShake, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgShake;
    fromPartial<I extends {
        command?: number | undefined;
        localAmplitude?: number | undefined;
        frequency?: number | undefined;
        duration?: number | undefined;
    } & {
        command?: number | undefined;
        localAmplitude?: number | undefined;
        frequency?: number | undefined;
        duration?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgShake>, never>>(object: I): CCSUsrMsgShake;
};
export declare const CCSUsrMsgFade: {
    encode(message: CCSUsrMsgFade, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgFade;
    fromPartial<I extends {
        duration?: number | undefined;
        holdTime?: number | undefined;
        flags?: number | undefined;
        clr?: {
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } | undefined;
    } & {
        duration?: number | undefined;
        holdTime?: number | undefined;
        flags?: number | undefined;
        clr?: ({
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } & {
            r?: number | undefined;
            g?: number | undefined;
            b?: number | undefined;
            a?: number | undefined;
        } & Record<Exclude<keyof I["clr"], keyof CMsgRGBA>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgFade>, never>>(object: I): CCSUsrMsgFade;
};
export declare const CCSUsrMsgRumble: {
    encode(message: CCSUsrMsgRumble, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRumble;
    fromPartial<I extends {
        index?: number | undefined;
        data?: number | undefined;
        flags?: number | undefined;
    } & {
        index?: number | undefined;
        data?: number | undefined;
        flags?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRumble>, never>>(object: I): CCSUsrMsgRumble;
};
export declare const CCSUsrMsgCloseCaption: {
    encode(message: CCSUsrMsgCloseCaption, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgCloseCaption;
    fromPartial<I extends {
        hash?: number | undefined;
        duration?: number | undefined;
        fromPlayer?: boolean | undefined;
        cctoken?: string | undefined;
    } & {
        hash?: number | undefined;
        duration?: number | undefined;
        fromPlayer?: boolean | undefined;
        cctoken?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgCloseCaption>, never>>(object: I): CCSUsrMsgCloseCaption;
};
export declare const CCSUsrMsgCloseCaptionDirect: {
    encode(message: CCSUsrMsgCloseCaptionDirect, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgCloseCaptionDirect;
    fromPartial<I extends {
        hash?: number | undefined;
        duration?: number | undefined;
        fromPlayer?: boolean | undefined;
    } & {
        hash?: number | undefined;
        duration?: number | undefined;
        fromPlayer?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgCloseCaptionDirect>, never>>(object: I): CCSUsrMsgCloseCaptionDirect;
};
export declare const CCSUsrMsgSendAudio: {
    encode(message: CCSUsrMsgSendAudio, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSendAudio;
    fromPartial<I extends {
        radioSound?: string | undefined;
    } & {
        radioSound?: string | undefined;
    } & Record<Exclude<keyof I, "radioSound">, never>>(object: I): CCSUsrMsgSendAudio;
};
export declare const CCSUsrMsgRawAudio: {
    encode(message: CCSUsrMsgRawAudio, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRawAudio;
    fromPartial<I extends {
        pitch?: number | undefined;
        entidx?: number | undefined;
        duration?: number | undefined;
        voiceFilename?: string | undefined;
    } & {
        pitch?: number | undefined;
        entidx?: number | undefined;
        duration?: number | undefined;
        voiceFilename?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRawAudio>, never>>(object: I): CCSUsrMsgRawAudio;
};
export declare const CCSUsrMsgVoiceMask: {
    encode(message: CCSUsrMsgVoiceMask, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVoiceMask;
    fromPartial<I extends {
        playerMasks?: {
            gameRulesMask?: number | undefined;
            banMasks?: number | undefined;
        }[] | undefined;
        playerModEnable?: boolean | undefined;
    } & {
        playerMasks?: ({
            gameRulesMask?: number | undefined;
            banMasks?: number | undefined;
        }[] & ({
            gameRulesMask?: number | undefined;
            banMasks?: number | undefined;
        } & {
            gameRulesMask?: number | undefined;
            banMasks?: number | undefined;
        } & Record<Exclude<keyof I["playerMasks"][number], keyof CCSUsrMsgVoiceMask_PlayerMask>, never>)[] & Record<Exclude<keyof I["playerMasks"], keyof {
            gameRulesMask?: number | undefined;
            banMasks?: number | undefined;
        }[]>, never>) | undefined;
        playerModEnable?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVoiceMask>, never>>(object: I): CCSUsrMsgVoiceMask;
};
export declare const CCSUsrMsgVoiceMask_PlayerMask: {
    encode(message: CCSUsrMsgVoiceMask_PlayerMask, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVoiceMask_PlayerMask;
    fromPartial<I extends {
        gameRulesMask?: number | undefined;
        banMasks?: number | undefined;
    } & {
        gameRulesMask?: number | undefined;
        banMasks?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVoiceMask_PlayerMask>, never>>(object: I): CCSUsrMsgVoiceMask_PlayerMask;
};
export declare const CCSUsrMsgDamage: {
    encode(message: CCSUsrMsgDamage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgDamage;
    fromPartial<I extends {
        amount?: number | undefined;
        inflictorWorldPos?: {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } | undefined;
        victimEntindex?: number | undefined;
    } & {
        amount?: number | undefined;
        inflictorWorldPos?: ({
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
            z?: number | undefined;
        } & Record<Exclude<keyof I["inflictorWorldPos"], keyof CMsgVector>, never>) | undefined;
        victimEntindex?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgDamage>, never>>(object: I): CCSUsrMsgDamage;
};
export declare const CCSUsrMsgRadioText: {
    encode(message: CCSUsrMsgRadioText, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRadioText;
    fromPartial<I extends {
        msgDst?: number | undefined;
        client?: number | undefined;
        msgName?: string | undefined;
        params?: string[] | undefined;
    } & {
        msgDst?: number | undefined;
        client?: number | undefined;
        msgName?: string | undefined;
        params?: (string[] & string[] & Record<Exclude<keyof I["params"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRadioText>, never>>(object: I): CCSUsrMsgRadioText;
};
export declare const CCSUsrMsgHintText: {
    encode(message: CCSUsrMsgHintText, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgHintText;
    fromPartial<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & Record<Exclude<keyof I, "text">, never>>(object: I): CCSUsrMsgHintText;
};
export declare const CCSUsrMsgKeyHintText: {
    encode(message: CCSUsrMsgKeyHintText, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgKeyHintText;
    fromPartial<I extends {
        hints?: string[] | undefined;
    } & {
        hints?: (string[] & string[] & Record<Exclude<keyof I["hints"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "hints">, never>>(object: I): CCSUsrMsgKeyHintText;
};
export declare const CCSUsrMsgProcessSpottedEntityUpdate: {
    encode(message: CCSUsrMsgProcessSpottedEntityUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgProcessSpottedEntityUpdate;
    fromPartial<I extends {
        newUpdate?: boolean | undefined;
        entityUpdates?: {
            entityIdx?: number | undefined;
            classId?: number | undefined;
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            angleY?: number | undefined;
            defuser?: boolean | undefined;
            playerHasDefuser?: boolean | undefined;
            playerHasC4?: boolean | undefined;
        }[] | undefined;
    } & {
        newUpdate?: boolean | undefined;
        entityUpdates?: ({
            entityIdx?: number | undefined;
            classId?: number | undefined;
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            angleY?: number | undefined;
            defuser?: boolean | undefined;
            playerHasDefuser?: boolean | undefined;
            playerHasC4?: boolean | undefined;
        }[] & ({
            entityIdx?: number | undefined;
            classId?: number | undefined;
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            angleY?: number | undefined;
            defuser?: boolean | undefined;
            playerHasDefuser?: boolean | undefined;
            playerHasC4?: boolean | undefined;
        } & {
            entityIdx?: number | undefined;
            classId?: number | undefined;
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            angleY?: number | undefined;
            defuser?: boolean | undefined;
            playerHasDefuser?: boolean | undefined;
            playerHasC4?: boolean | undefined;
        } & Record<Exclude<keyof I["entityUpdates"][number], keyof CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate>, never>)[] & Record<Exclude<keyof I["entityUpdates"], keyof {
            entityIdx?: number | undefined;
            classId?: number | undefined;
            originX?: number | undefined;
            originY?: number | undefined;
            originZ?: number | undefined;
            angleY?: number | undefined;
            defuser?: boolean | undefined;
            playerHasDefuser?: boolean | undefined;
            playerHasC4?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgProcessSpottedEntityUpdate>, never>>(object: I): CCSUsrMsgProcessSpottedEntityUpdate;
};
export declare const CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate: {
    encode(message: CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate;
    fromPartial<I extends {
        entityIdx?: number | undefined;
        classId?: number | undefined;
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
        angleY?: number | undefined;
        defuser?: boolean | undefined;
        playerHasDefuser?: boolean | undefined;
        playerHasC4?: boolean | undefined;
    } & {
        entityIdx?: number | undefined;
        classId?: number | undefined;
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
        angleY?: number | undefined;
        defuser?: boolean | undefined;
        playerHasDefuser?: boolean | undefined;
        playerHasC4?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate>, never>>(object: I): CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate;
};
export declare const CCSUsrMsgSendPlayerItemDrops: {
    encode(message: CCSUsrMsgSendPlayerItemDrops, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSendPlayerItemDrops;
    fromPartial<I extends {
        entityUpdates?: {
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        }[] | undefined;
    } & {
        entityUpdates?: ({
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        }[] & ({
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } & {
            accountid?: number | undefined;
            itemid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["entityUpdates"][number]["itemid"], keyof Long.Long>, never>) | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: ({
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] & ({
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            } & {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            } & Record<Exclude<keyof I["entityUpdates"][number]["stickers"][number], keyof import("./cstrike15_gcmessages").CEconItemPreviewDataBlock_Sticker>, never>)[] & Record<Exclude<keyof I["entityUpdates"][number]["stickers"], keyof {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[]>, never>) | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } & Record<Exclude<keyof I["entityUpdates"][number], keyof CEconItemPreviewDataBlock>, never>)[] & Record<Exclude<keyof I["entityUpdates"], keyof {
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "entityUpdates">, never>>(object: I): CCSUsrMsgSendPlayerItemDrops;
};
export declare const CCSUsrMsgSendPlayerItemFound: {
    encode(message: CCSUsrMsgSendPlayerItemFound, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSendPlayerItemFound;
    fromPartial<I extends {
        iteminfo?: {
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } | undefined;
        entindex?: number | undefined;
    } & {
        iteminfo?: ({
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } & {
            accountid?: number | undefined;
            itemid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["iteminfo"]["itemid"], keyof Long.Long>, never>) | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: ({
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] & ({
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            } & {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            } & Record<Exclude<keyof I["iteminfo"]["stickers"][number], keyof import("./cstrike15_gcmessages").CEconItemPreviewDataBlock_Sticker>, never>)[] & Record<Exclude<keyof I["iteminfo"]["stickers"], keyof {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[]>, never>) | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } & Record<Exclude<keyof I["iteminfo"], keyof CEconItemPreviewDataBlock>, never>) | undefined;
        entindex?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSendPlayerItemFound>, never>>(object: I): CCSUsrMsgSendPlayerItemFound;
};
export declare const CCSUsrMsgReloadEffect: {
    encode(message: CCSUsrMsgReloadEffect, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgReloadEffect;
    fromPartial<I extends {
        entidx?: number | undefined;
        actanim?: number | undefined;
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
    } & {
        entidx?: number | undefined;
        actanim?: number | undefined;
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgReloadEffect>, never>>(object: I): CCSUsrMsgReloadEffect;
};
export declare const CCSUsrMsgWeaponSound: {
    encode(message: CCSUsrMsgWeaponSound, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgWeaponSound;
    fromPartial<I extends {
        entidx?: number | undefined;
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
        sound?: string | undefined;
        timestamp?: number | undefined;
    } & {
        entidx?: number | undefined;
        originX?: number | undefined;
        originY?: number | undefined;
        originZ?: number | undefined;
        sound?: string | undefined;
        timestamp?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgWeaponSound>, never>>(object: I): CCSUsrMsgWeaponSound;
};
export declare const CCSUsrMsgUpdateScreenHealthBar: {
    encode(message: CCSUsrMsgUpdateScreenHealthBar, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgUpdateScreenHealthBar;
    fromPartial<I extends {
        entidx?: number | undefined;
        healthratioOld?: number | undefined;
        healthratioNew?: number | undefined;
        style?: number | undefined;
    } & {
        entidx?: number | undefined;
        healthratioOld?: number | undefined;
        healthratioNew?: number | undefined;
        style?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgUpdateScreenHealthBar>, never>>(object: I): CCSUsrMsgUpdateScreenHealthBar;
};
export declare const CCSUsrMsgEntityOutlineHighlight: {
    encode(message: CCSUsrMsgEntityOutlineHighlight, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgEntityOutlineHighlight;
    fromPartial<I extends {
        entidx?: number | undefined;
        removehighlight?: boolean | undefined;
    } & {
        entidx?: number | undefined;
        removehighlight?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgEntityOutlineHighlight>, never>>(object: I): CCSUsrMsgEntityOutlineHighlight;
};
export declare const CCSUsrMsgAdjustMoney: {
    encode(message: CCSUsrMsgAdjustMoney, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgAdjustMoney;
    fromPartial<I extends {
        amount?: number | undefined;
    } & {
        amount?: number | undefined;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): CCSUsrMsgAdjustMoney;
};
export declare const CCSUsrMsgReportHit: {
    encode(message: CCSUsrMsgReportHit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgReportHit;
    fromPartial<I extends {
        posX?: number | undefined;
        posY?: number | undefined;
        timestamp?: number | undefined;
        posZ?: number | undefined;
    } & {
        posX?: number | undefined;
        posY?: number | undefined;
        timestamp?: number | undefined;
        posZ?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgReportHit>, never>>(object: I): CCSUsrMsgReportHit;
};
export declare const CCSUsrMsgKillCam: {
    encode(message: CCSUsrMsgKillCam, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgKillCam;
    fromPartial<I extends {
        obsMode?: number | undefined;
        firstTarget?: number | undefined;
        secondTarget?: number | undefined;
    } & {
        obsMode?: number | undefined;
        firstTarget?: number | undefined;
        secondTarget?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgKillCam>, never>>(object: I): CCSUsrMsgKillCam;
};
export declare const CCSUsrMsgDesiredTimescale: {
    encode(message: CCSUsrMsgDesiredTimescale, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgDesiredTimescale;
    fromPartial<I extends {
        desiredTimescale?: number | undefined;
        durationRealtimeSec?: number | undefined;
        interpolatorType?: number | undefined;
        startBlendTime?: number | undefined;
    } & {
        desiredTimescale?: number | undefined;
        durationRealtimeSec?: number | undefined;
        interpolatorType?: number | undefined;
        startBlendTime?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgDesiredTimescale>, never>>(object: I): CCSUsrMsgDesiredTimescale;
};
export declare const CCSUsrMsgCurrentTimescale: {
    encode(message: CCSUsrMsgCurrentTimescale, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgCurrentTimescale;
    fromPartial<I extends {
        curTimescale?: number | undefined;
    } & {
        curTimescale?: number | undefined;
    } & Record<Exclude<keyof I, "curTimescale">, never>>(object: I): CCSUsrMsgCurrentTimescale;
};
export declare const CCSUsrMsgAchievementEvent: {
    encode(message: CCSUsrMsgAchievementEvent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgAchievementEvent;
    fromPartial<I extends {
        achievement?: number | undefined;
        count?: number | undefined;
        userId?: number | undefined;
    } & {
        achievement?: number | undefined;
        count?: number | undefined;
        userId?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgAchievementEvent>, never>>(object: I): CCSUsrMsgAchievementEvent;
};
export declare const CCSUsrMsgMatchEndConditions: {
    encode(message: CCSUsrMsgMatchEndConditions, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgMatchEndConditions;
    fromPartial<I extends {
        fraglimit?: number | undefined;
        mpMaxrounds?: number | undefined;
        mpWinlimit?: number | undefined;
        mpTimelimit?: number | undefined;
    } & {
        fraglimit?: number | undefined;
        mpMaxrounds?: number | undefined;
        mpWinlimit?: number | undefined;
        mpTimelimit?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgMatchEndConditions>, never>>(object: I): CCSUsrMsgMatchEndConditions;
};
export declare const CCSUsrMsgPlayerStatsUpdate: {
    encode(message: CCSUsrMsgPlayerStatsUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgPlayerStatsUpdate;
    fromPartial<I extends {
        version?: number | undefined;
        stats?: {
            idx?: number | undefined;
            delta?: number | undefined;
        }[] | undefined;
        userId?: number | undefined;
        crc?: number | undefined;
    } & {
        version?: number | undefined;
        stats?: ({
            idx?: number | undefined;
            delta?: number | undefined;
        }[] & ({
            idx?: number | undefined;
            delta?: number | undefined;
        } & {
            idx?: number | undefined;
            delta?: number | undefined;
        } & Record<Exclude<keyof I["stats"][number], keyof CCSUsrMsgPlayerStatsUpdate_Stat>, never>)[] & Record<Exclude<keyof I["stats"], keyof {
            idx?: number | undefined;
            delta?: number | undefined;
        }[]>, never>) | undefined;
        userId?: number | undefined;
        crc?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgPlayerStatsUpdate>, never>>(object: I): CCSUsrMsgPlayerStatsUpdate;
};
export declare const CCSUsrMsgPlayerStatsUpdate_Stat: {
    encode(message: CCSUsrMsgPlayerStatsUpdate_Stat, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgPlayerStatsUpdate_Stat;
    fromPartial<I extends {
        idx?: number | undefined;
        delta?: number | undefined;
    } & {
        idx?: number | undefined;
        delta?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgPlayerStatsUpdate_Stat>, never>>(object: I): CCSUsrMsgPlayerStatsUpdate_Stat;
};
export declare const CCSUsrMsgDisplayInventory: {
    encode(message: CCSUsrMsgDisplayInventory, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgDisplayInventory;
    fromPartial<I extends {
        display?: boolean | undefined;
        userId?: number | undefined;
    } & {
        display?: boolean | undefined;
        userId?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgDisplayInventory>, never>>(object: I): CCSUsrMsgDisplayInventory;
};
export declare const CCSUsrMsgQuestProgress: {
    encode(message: CCSUsrMsgQuestProgress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgQuestProgress;
    fromPartial<I extends {
        questId?: number | undefined;
        normalPoints?: number | undefined;
        bonusPoints?: number | undefined;
        isEventQuest?: boolean | undefined;
    } & {
        questId?: number | undefined;
        normalPoints?: number | undefined;
        bonusPoints?: number | undefined;
        isEventQuest?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgQuestProgress>, never>>(object: I): CCSUsrMsgQuestProgress;
};
export declare const CCSUsrMsgScoreLeaderboardData: {
    encode(message: CCSUsrMsgScoreLeaderboardData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgScoreLeaderboardData;
    fromPartial<I extends {
        data?: {
            questId?: string | number | Long.Long | undefined;
            score?: number | undefined;
            accountentries?: {
                accountid?: number | undefined;
                entries?: {
                    tag?: number | undefined;
                    val?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            matchentries?: {
                tag?: number | undefined;
                val?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        data?: ({
            questId?: string | number | Long.Long | undefined;
            score?: number | undefined;
            accountentries?: {
                accountid?: number | undefined;
                entries?: {
                    tag?: number | undefined;
                    val?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            matchentries?: {
                tag?: number | undefined;
                val?: number | undefined;
            }[] | undefined;
        } & {
            questId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["data"]["questId"], keyof Long.Long>, never>) | undefined;
            score?: number | undefined;
            accountentries?: ({
                accountid?: number | undefined;
                entries?: {
                    tag?: number | undefined;
                    val?: number | undefined;
                }[] | undefined;
            }[] & ({
                accountid?: number | undefined;
                entries?: {
                    tag?: number | undefined;
                    val?: number | undefined;
                }[] | undefined;
            } & {
                accountid?: number | undefined;
                entries?: ({
                    tag?: number | undefined;
                    val?: number | undefined;
                }[] & ({
                    tag?: number | undefined;
                    val?: number | undefined;
                } & {
                    tag?: number | undefined;
                    val?: number | undefined;
                } & Record<Exclude<keyof I["data"]["accountentries"][number]["entries"][number], keyof import("./cstrike15_gcmessages").ScoreLeaderboardData_Entry>, never>)[] & Record<Exclude<keyof I["data"]["accountentries"][number]["entries"], keyof {
                    tag?: number | undefined;
                    val?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["data"]["accountentries"][number], keyof import("./cstrike15_gcmessages").ScoreLeaderboardData_AccountEntries>, never>)[] & Record<Exclude<keyof I["data"]["accountentries"], keyof {
                accountid?: number | undefined;
                entries?: {
                    tag?: number | undefined;
                    val?: number | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            matchentries?: ({
                tag?: number | undefined;
                val?: number | undefined;
            }[] & ({
                tag?: number | undefined;
                val?: number | undefined;
            } & {
                tag?: number | undefined;
                val?: number | undefined;
            } & Record<Exclude<keyof I["data"]["matchentries"][number], keyof import("./cstrike15_gcmessages").ScoreLeaderboardData_Entry>, never>)[] & Record<Exclude<keyof I["data"]["matchentries"], keyof {
                tag?: number | undefined;
                val?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"], keyof ScoreLeaderboardData>, never>) | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): CCSUsrMsgScoreLeaderboardData;
};
export declare const CCSUsrMsgPlayerDecalDigitalSignature: {
    encode(message: CCSUsrMsgPlayerDecalDigitalSignature, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgPlayerDecalDigitalSignature;
    fromPartial<I extends {
        data?: {
            signature?: Uint8Array | undefined;
            accountid?: number | undefined;
            rtime?: number | undefined;
            endpos?: number[] | undefined;
            startpos?: number[] | undefined;
            right?: number[] | undefined;
            txDefidx?: number | undefined;
            entindex?: number | undefined;
            hitbox?: number | undefined;
            creationtime?: number | undefined;
            equipslot?: number | undefined;
            traceId?: number | undefined;
            normal?: number[] | undefined;
            tintId?: number | undefined;
        } | undefined;
    } & {
        data?: ({
            signature?: Uint8Array | undefined;
            accountid?: number | undefined;
            rtime?: number | undefined;
            endpos?: number[] | undefined;
            startpos?: number[] | undefined;
            right?: number[] | undefined;
            txDefidx?: number | undefined;
            entindex?: number | undefined;
            hitbox?: number | undefined;
            creationtime?: number | undefined;
            equipslot?: number | undefined;
            traceId?: number | undefined;
            normal?: number[] | undefined;
            tintId?: number | undefined;
        } & {
            signature?: Uint8Array | undefined;
            accountid?: number | undefined;
            rtime?: number | undefined;
            endpos?: (number[] & number[] & Record<Exclude<keyof I["data"]["endpos"], keyof number[]>, never>) | undefined;
            startpos?: (number[] & number[] & Record<Exclude<keyof I["data"]["startpos"], keyof number[]>, never>) | undefined;
            right?: (number[] & number[] & Record<Exclude<keyof I["data"]["right"], keyof number[]>, never>) | undefined;
            txDefidx?: number | undefined;
            entindex?: number | undefined;
            hitbox?: number | undefined;
            creationtime?: number | undefined;
            equipslot?: number | undefined;
            traceId?: number | undefined;
            normal?: (number[] & number[] & Record<Exclude<keyof I["data"]["normal"], keyof number[]>, never>) | undefined;
            tintId?: number | undefined;
        } & Record<Exclude<keyof I["data"], keyof PlayerDecalDigitalSignature>, never>) | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): CCSUsrMsgPlayerDecalDigitalSignature;
};
export declare const CCSUsrMsgXRankGet: {
    encode(message: CCSUsrMsgXRankGet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgXRankGet;
    fromPartial<I extends {
        modeIdx?: number | undefined;
        controller?: number | undefined;
    } & {
        modeIdx?: number | undefined;
        controller?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgXRankGet>, never>>(object: I): CCSUsrMsgXRankGet;
};
export declare const CCSUsrMsgXRankUpd: {
    encode(message: CCSUsrMsgXRankUpd, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgXRankUpd;
    fromPartial<I extends {
        modeIdx?: number | undefined;
        controller?: number | undefined;
        ranking?: number | undefined;
    } & {
        modeIdx?: number | undefined;
        controller?: number | undefined;
        ranking?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgXRankUpd>, never>>(object: I): CCSUsrMsgXRankUpd;
};
export declare const CCSUsrMsgCallVoteFailed: {
    encode(message: CCSUsrMsgCallVoteFailed, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgCallVoteFailed;
    fromPartial<I extends {
        reason?: number | undefined;
        time?: number | undefined;
    } & {
        reason?: number | undefined;
        time?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgCallVoteFailed>, never>>(object: I): CCSUsrMsgCallVoteFailed;
};
export declare const CCSUsrMsgVoteStart: {
    encode(message: CCSUsrMsgVoteStart, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVoteStart;
    fromPartial<I extends {
        team?: number | undefined;
        entIdx?: number | undefined;
        voteType?: number | undefined;
        dispStr?: string | undefined;
        detailsStr?: string | undefined;
        otherTeamStr?: string | undefined;
        isYesNoVote?: boolean | undefined;
        entidxTarget?: number | undefined;
    } & {
        team?: number | undefined;
        entIdx?: number | undefined;
        voteType?: number | undefined;
        dispStr?: string | undefined;
        detailsStr?: string | undefined;
        otherTeamStr?: string | undefined;
        isYesNoVote?: boolean | undefined;
        entidxTarget?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVoteStart>, never>>(object: I): CCSUsrMsgVoteStart;
};
export declare const CCSUsrMsgVotePass: {
    encode(message: CCSUsrMsgVotePass, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVotePass;
    fromPartial<I extends {
        team?: number | undefined;
        voteType?: number | undefined;
        dispStr?: string | undefined;
        detailsStr?: string | undefined;
    } & {
        team?: number | undefined;
        voteType?: number | undefined;
        dispStr?: string | undefined;
        detailsStr?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVotePass>, never>>(object: I): CCSUsrMsgVotePass;
};
export declare const CCSUsrMsgVoteFailed: {
    encode(message: CCSUsrMsgVoteFailed, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVoteFailed;
    fromPartial<I extends {
        team?: number | undefined;
        reason?: number | undefined;
    } & {
        team?: number | undefined;
        reason?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgVoteFailed>, never>>(object: I): CCSUsrMsgVoteFailed;
};
export declare const CCSUsrMsgVoteSetup: {
    encode(message: CCSUsrMsgVoteSetup, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgVoteSetup;
    fromPartial<I extends {
        potentialIssues?: string[] | undefined;
    } & {
        potentialIssues?: (string[] & string[] & Record<Exclude<keyof I["potentialIssues"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "potentialIssues">, never>>(object: I): CCSUsrMsgVoteSetup;
};
export declare const CCSUsrMsgSendLastKillerDamageToClient: {
    encode(message: CCSUsrMsgSendLastKillerDamageToClient, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSendLastKillerDamageToClient;
    fromPartial<I extends {
        numHitsGiven?: number | undefined;
        damageGiven?: number | undefined;
        numHitsTaken?: number | undefined;
        damageTaken?: number | undefined;
    } & {
        numHitsGiven?: number | undefined;
        damageGiven?: number | undefined;
        numHitsTaken?: number | undefined;
        damageTaken?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSendLastKillerDamageToClient>, never>>(object: I): CCSUsrMsgSendLastKillerDamageToClient;
};
export declare const CCSUsrMsgServerRankUpdate: {
    encode(message: CCSUsrMsgServerRankUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgServerRankUpdate;
    fromPartial<I extends {
        rankUpdate?: {
            accountId?: number | undefined;
            rankOld?: number | undefined;
            rankNew?: number | undefined;
            numWins?: number | undefined;
            rankChange?: number | undefined;
            rankTypeId?: number | undefined;
        }[] | undefined;
    } & {
        rankUpdate?: ({
            accountId?: number | undefined;
            rankOld?: number | undefined;
            rankNew?: number | undefined;
            numWins?: number | undefined;
            rankChange?: number | undefined;
            rankTypeId?: number | undefined;
        }[] & ({
            accountId?: number | undefined;
            rankOld?: number | undefined;
            rankNew?: number | undefined;
            numWins?: number | undefined;
            rankChange?: number | undefined;
            rankTypeId?: number | undefined;
        } & {
            accountId?: number | undefined;
            rankOld?: number | undefined;
            rankNew?: number | undefined;
            numWins?: number | undefined;
            rankChange?: number | undefined;
            rankTypeId?: number | undefined;
        } & Record<Exclude<keyof I["rankUpdate"][number], keyof CCSUsrMsgServerRankUpdate_RankUpdate>, never>)[] & Record<Exclude<keyof I["rankUpdate"], keyof {
            accountId?: number | undefined;
            rankOld?: number | undefined;
            rankNew?: number | undefined;
            numWins?: number | undefined;
            rankChange?: number | undefined;
            rankTypeId?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "rankUpdate">, never>>(object: I): CCSUsrMsgServerRankUpdate;
};
export declare const CCSUsrMsgServerRankUpdate_RankUpdate: {
    encode(message: CCSUsrMsgServerRankUpdate_RankUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgServerRankUpdate_RankUpdate;
    fromPartial<I extends {
        accountId?: number | undefined;
        rankOld?: number | undefined;
        rankNew?: number | undefined;
        numWins?: number | undefined;
        rankChange?: number | undefined;
        rankTypeId?: number | undefined;
    } & {
        accountId?: number | undefined;
        rankOld?: number | undefined;
        rankNew?: number | undefined;
        numWins?: number | undefined;
        rankChange?: number | undefined;
        rankTypeId?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgServerRankUpdate_RankUpdate>, never>>(object: I): CCSUsrMsgServerRankUpdate_RankUpdate;
};
export declare const CCSUsrMsgXpUpdate: {
    encode(message: CCSUsrMsgXpUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgXpUpdate;
    fromPartial<I extends {
        data?: {
            xpProgressData?: {
                xpPoints?: number | undefined;
                xpCategory?: number | undefined;
            }[] | undefined;
            accountId?: number | undefined;
            currentXp?: number | undefined;
            currentLevel?: number | undefined;
            upgradedDefidx?: number | undefined;
            operationPointsAwarded?: number | undefined;
        } | undefined;
    } & {
        data?: ({
            xpProgressData?: {
                xpPoints?: number | undefined;
                xpCategory?: number | undefined;
            }[] | undefined;
            accountId?: number | undefined;
            currentXp?: number | undefined;
            currentLevel?: number | undefined;
            upgradedDefidx?: number | undefined;
            operationPointsAwarded?: number | undefined;
        } & {
            xpProgressData?: ({
                xpPoints?: number | undefined;
                xpCategory?: number | undefined;
            }[] & ({
                xpPoints?: number | undefined;
                xpCategory?: number | undefined;
            } & {
                xpPoints?: number | undefined;
                xpCategory?: number | undefined;
            } & Record<Exclude<keyof I["data"]["xpProgressData"][number], keyof import("./cstrike15_gcmessages").XpProgressData>, never>)[] & Record<Exclude<keyof I["data"]["xpProgressData"], keyof {
                xpPoints?: number | undefined;
                xpCategory?: number | undefined;
            }[]>, never>) | undefined;
            accountId?: number | undefined;
            currentXp?: number | undefined;
            currentLevel?: number | undefined;
            upgradedDefidx?: number | undefined;
            operationPointsAwarded?: number | undefined;
        } & Record<Exclude<keyof I["data"], keyof CMsgGCCstrike15V2GC2ServerNotifyXPRewarded>, never>) | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): CCSUsrMsgXpUpdate;
};
export declare const CCSUsrMsgItemPickup: {
    encode(message: CCSUsrMsgItemPickup, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgItemPickup;
    fromPartial<I extends {
        item?: string | undefined;
    } & {
        item?: string | undefined;
    } & Record<Exclude<keyof I, "item">, never>>(object: I): CCSUsrMsgItemPickup;
};
export declare const CCSUsrMsgShowMenu: {
    encode(message: CCSUsrMsgShowMenu, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgShowMenu;
    fromPartial<I extends {
        bitsValidSlots?: number | undefined;
        displayTime?: number | undefined;
        menuString?: string | undefined;
    } & {
        bitsValidSlots?: number | undefined;
        displayTime?: number | undefined;
        menuString?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgShowMenu>, never>>(object: I): CCSUsrMsgShowMenu;
};
export declare const CCSUsrMsgBarTime: {
    encode(message: CCSUsrMsgBarTime, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgBarTime;
    fromPartial<I extends {
        time?: string | undefined;
    } & {
        time?: string | undefined;
    } & Record<Exclude<keyof I, "time">, never>>(object: I): CCSUsrMsgBarTime;
};
export declare const CCSUsrMsgAmmoDenied: {
    encode(message: CCSUsrMsgAmmoDenied, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgAmmoDenied;
    fromPartial<I extends {
        ammoIdx?: number | undefined;
    } & {
        ammoIdx?: number | undefined;
    } & Record<Exclude<keyof I, "ammoIdx">, never>>(object: I): CCSUsrMsgAmmoDenied;
};
export declare const CCSUsrMsgMarkAchievement: {
    encode(message: CCSUsrMsgMarkAchievement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgMarkAchievement;
    fromPartial<I extends {
        achievement?: string | undefined;
    } & {
        achievement?: string | undefined;
    } & Record<Exclude<keyof I, "achievement">, never>>(object: I): CCSUsrMsgMarkAchievement;
};
export declare const CCSUsrMsgMatchStatsUpdate: {
    encode(message: CCSUsrMsgMatchStatsUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgMatchStatsUpdate;
    fromPartial<I extends {
        update?: string | undefined;
    } & {
        update?: string | undefined;
    } & Record<Exclude<keyof I, "update">, never>>(object: I): CCSUsrMsgMatchStatsUpdate;
};
export declare const CCSUsrMsgItemDrop: {
    encode(message: CCSUsrMsgItemDrop, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgItemDrop;
    fromPartial<I extends {
        itemid?: string | number | Long.Long | undefined;
        death?: boolean | undefined;
    } & {
        itemid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["itemid"], keyof Long.Long>, never>) | undefined;
        death?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgItemDrop>, never>>(object: I): CCSUsrMsgItemDrop;
};
export declare const CCSUsrMsgGlowPropTurnOff: {
    encode(message: CCSUsrMsgGlowPropTurnOff, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgGlowPropTurnOff;
    fromPartial<I extends {
        entidx?: number | undefined;
    } & {
        entidx?: number | undefined;
    } & Record<Exclude<keyof I, "entidx">, never>>(object: I): CCSUsrMsgGlowPropTurnOff;
};
export declare const CCSUsrMsgRoundBackupFilenames: {
    encode(message: CCSUsrMsgRoundBackupFilenames, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundBackupFilenames;
    fromPartial<I extends {
        count?: number | undefined;
        index?: number | undefined;
        filename?: string | undefined;
        nicename?: string | undefined;
    } & {
        count?: number | undefined;
        index?: number | undefined;
        filename?: string | undefined;
        nicename?: string | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRoundBackupFilenames>, never>>(object: I): CCSUsrMsgRoundBackupFilenames;
};
export declare const CCSUsrMsgSSUI: {
    encode(message: CCSUsrMsgSSUI, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSSUI;
    fromPartial<I extends {
        show?: boolean | undefined;
        startTime?: number | undefined;
        endTime?: number | undefined;
    } & {
        show?: boolean | undefined;
        startTime?: number | undefined;
        endTime?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSSUI>, never>>(object: I): CCSUsrMsgSSUI;
};
export declare const CCSUsrMsgSurvivalStats: {
    encode(message: CCSUsrMsgSurvivalStats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSurvivalStats;
    fromPartial<I extends {
        xuid?: string | number | Long.Long | undefined;
        facts?: {
            type?: number | undefined;
            display?: number | undefined;
            value?: number | undefined;
            interestingness?: number | undefined;
        }[] | undefined;
        users?: {
            xuid?: string | number | Long.Long | undefined;
            teamnumber?: number | undefined;
            placement?: number | undefined;
        }[] | undefined;
        damages?: {
            xuid?: string | number | Long.Long | undefined;
            to?: number | undefined;
            toHits?: number | undefined;
            from?: number | undefined;
            fromHits?: number | undefined;
        }[] | undefined;
        ticknumber?: number | undefined;
    } & {
        xuid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long.Long>, never>) | undefined;
        facts?: ({
            type?: number | undefined;
            display?: number | undefined;
            value?: number | undefined;
            interestingness?: number | undefined;
        }[] & ({
            type?: number | undefined;
            display?: number | undefined;
            value?: number | undefined;
            interestingness?: number | undefined;
        } & {
            type?: number | undefined;
            display?: number | undefined;
            value?: number | undefined;
            interestingness?: number | undefined;
        } & Record<Exclude<keyof I["facts"][number], keyof CCSUsrMsgSurvivalStats_Fact>, never>)[] & Record<Exclude<keyof I["facts"], keyof {
            type?: number | undefined;
            display?: number | undefined;
            value?: number | undefined;
            interestingness?: number | undefined;
        }[]>, never>) | undefined;
        users?: ({
            xuid?: string | number | Long.Long | undefined;
            teamnumber?: number | undefined;
            placement?: number | undefined;
        }[] & ({
            xuid?: string | number | Long.Long | undefined;
            teamnumber?: number | undefined;
            placement?: number | undefined;
        } & {
            xuid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["users"][number]["xuid"], keyof Long.Long>, never>) | undefined;
            teamnumber?: number | undefined;
            placement?: number | undefined;
        } & Record<Exclude<keyof I["users"][number], keyof CCSUsrMsgSurvivalStats_Placement>, never>)[] & Record<Exclude<keyof I["users"], keyof {
            xuid?: string | number | Long.Long | undefined;
            teamnumber?: number | undefined;
            placement?: number | undefined;
        }[]>, never>) | undefined;
        damages?: ({
            xuid?: string | number | Long.Long | undefined;
            to?: number | undefined;
            toHits?: number | undefined;
            from?: number | undefined;
            fromHits?: number | undefined;
        }[] & ({
            xuid?: string | number | Long.Long | undefined;
            to?: number | undefined;
            toHits?: number | undefined;
            from?: number | undefined;
            fromHits?: number | undefined;
        } & {
            xuid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["damages"][number]["xuid"], keyof Long.Long>, never>) | undefined;
            to?: number | undefined;
            toHits?: number | undefined;
            from?: number | undefined;
            fromHits?: number | undefined;
        } & Record<Exclude<keyof I["damages"][number], keyof CCSUsrMsgSurvivalStats_Damage>, never>)[] & Record<Exclude<keyof I["damages"], keyof {
            xuid?: string | number | Long.Long | undefined;
            to?: number | undefined;
            toHits?: number | undefined;
            from?: number | undefined;
            fromHits?: number | undefined;
        }[]>, never>) | undefined;
        ticknumber?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSurvivalStats>, never>>(object: I): CCSUsrMsgSurvivalStats;
};
export declare const CCSUsrMsgSurvivalStats_Fact: {
    encode(message: CCSUsrMsgSurvivalStats_Fact, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSurvivalStats_Fact;
    fromPartial<I extends {
        type?: number | undefined;
        display?: number | undefined;
        value?: number | undefined;
        interestingness?: number | undefined;
    } & {
        type?: number | undefined;
        display?: number | undefined;
        value?: number | undefined;
        interestingness?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSurvivalStats_Fact>, never>>(object: I): CCSUsrMsgSurvivalStats_Fact;
};
export declare const CCSUsrMsgSurvivalStats_Placement: {
    encode(message: CCSUsrMsgSurvivalStats_Placement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSurvivalStats_Placement;
    fromPartial<I extends {
        xuid?: string | number | Long.Long | undefined;
        teamnumber?: number | undefined;
        placement?: number | undefined;
    } & {
        xuid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long.Long>, never>) | undefined;
        teamnumber?: number | undefined;
        placement?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSurvivalStats_Placement>, never>>(object: I): CCSUsrMsgSurvivalStats_Placement;
};
export declare const CCSUsrMsgSurvivalStats_Damage: {
    encode(message: CCSUsrMsgSurvivalStats_Damage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgSurvivalStats_Damage;
    fromPartial<I extends {
        xuid?: string | number | Long.Long | undefined;
        to?: number | undefined;
        toHits?: number | undefined;
        from?: number | undefined;
        fromHits?: number | undefined;
    } & {
        xuid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long.Long>, never>) | undefined;
        to?: number | undefined;
        toHits?: number | undefined;
        from?: number | undefined;
        fromHits?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgSurvivalStats_Damage>, never>>(object: I): CCSUsrMsgSurvivalStats_Damage;
};
export declare const CCSUsrMsgEndOfMatchAllPlayersData: {
    encode(message: CCSUsrMsgEndOfMatchAllPlayersData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgEndOfMatchAllPlayersData;
    fromPartial<I extends {
        allplayerdata?: {
            entindex?: number | undefined;
            xuid?: string | number | Long.Long | undefined;
            name?: string | undefined;
            teamnumber?: number | undefined;
            nomination?: {
                eaccolade?: number | undefined;
                value?: number | undefined;
                position?: number | undefined;
            } | undefined;
            items?: {
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            }[] | undefined;
            playercolor?: number | undefined;
            isbot?: boolean | undefined;
        }[] | undefined;
        scene?: number | undefined;
    } & {
        allplayerdata?: ({
            entindex?: number | undefined;
            xuid?: string | number | Long.Long | undefined;
            name?: string | undefined;
            teamnumber?: number | undefined;
            nomination?: {
                eaccolade?: number | undefined;
                value?: number | undefined;
                position?: number | undefined;
            } | undefined;
            items?: {
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            }[] | undefined;
            playercolor?: number | undefined;
            isbot?: boolean | undefined;
        }[] & ({
            entindex?: number | undefined;
            xuid?: string | number | Long.Long | undefined;
            name?: string | undefined;
            teamnumber?: number | undefined;
            nomination?: {
                eaccolade?: number | undefined;
                value?: number | undefined;
                position?: number | undefined;
            } | undefined;
            items?: {
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            }[] | undefined;
            playercolor?: number | undefined;
            isbot?: boolean | undefined;
        } & {
            entindex?: number | undefined;
            xuid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["allplayerdata"][number]["xuid"], keyof Long.Long>, never>) | undefined;
            name?: string | undefined;
            teamnumber?: number | undefined;
            nomination?: ({
                eaccolade?: number | undefined;
                value?: number | undefined;
                position?: number | undefined;
            } & {
                eaccolade?: number | undefined;
                value?: number | undefined;
                position?: number | undefined;
            } & Record<Exclude<keyof I["allplayerdata"][number]["nomination"], keyof CCSUsrMsgEndOfMatchAllPlayersData_Accolade>, never>) | undefined;
            items?: ({
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            }[] & ({
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            } & {
                accountid?: number | undefined;
                itemid?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["allplayerdata"][number]["items"][number]["itemid"], keyof Long.Long>, never>) | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: ({
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] & ({
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                } & {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                } & Record<Exclude<keyof I["allplayerdata"][number]["items"][number]["stickers"][number], keyof import("./cstrike15_gcmessages").CEconItemPreviewDataBlock_Sticker>, never>)[] & Record<Exclude<keyof I["allplayerdata"][number]["items"][number]["stickers"], keyof {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[]>, never>) | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            } & Record<Exclude<keyof I["allplayerdata"][number]["items"][number], keyof CEconItemPreviewDataBlock>, never>)[] & Record<Exclude<keyof I["allplayerdata"][number]["items"], keyof {
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            }[]>, never>) | undefined;
            playercolor?: number | undefined;
            isbot?: boolean | undefined;
        } & Record<Exclude<keyof I["allplayerdata"][number], keyof CCSUsrMsgEndOfMatchAllPlayersData_PlayerData>, never>)[] & Record<Exclude<keyof I["allplayerdata"], keyof {
            entindex?: number | undefined;
            xuid?: string | number | Long.Long | undefined;
            name?: string | undefined;
            teamnumber?: number | undefined;
            nomination?: {
                eaccolade?: number | undefined;
                value?: number | undefined;
                position?: number | undefined;
            } | undefined;
            items?: {
                accountid?: number | undefined;
                itemid?: string | number | Long.Long | undefined;
                defindex?: number | undefined;
                paintindex?: number | undefined;
                rarity?: number | undefined;
                quality?: number | undefined;
                paintwear?: number | undefined;
                paintseed?: number | undefined;
                killeaterscoretype?: number | undefined;
                killeatervalue?: number | undefined;
                customname?: string | undefined;
                stickers?: {
                    slot?: number | undefined;
                    stickerId?: number | undefined;
                    wear?: number | undefined;
                    scale?: number | undefined;
                    rotation?: number | undefined;
                    tintId?: number | undefined;
                }[] | undefined;
                inventory?: number | undefined;
                origin?: number | undefined;
                questid?: number | undefined;
                dropreason?: number | undefined;
                musicindex?: number | undefined;
                entindex?: number | undefined;
            }[] | undefined;
            playercolor?: number | undefined;
            isbot?: boolean | undefined;
        }[]>, never>) | undefined;
        scene?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgEndOfMatchAllPlayersData>, never>>(object: I): CCSUsrMsgEndOfMatchAllPlayersData;
};
export declare const CCSUsrMsgEndOfMatchAllPlayersData_Accolade: {
    encode(message: CCSUsrMsgEndOfMatchAllPlayersData_Accolade, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgEndOfMatchAllPlayersData_Accolade;
    fromPartial<I extends {
        eaccolade?: number | undefined;
        value?: number | undefined;
        position?: number | undefined;
    } & {
        eaccolade?: number | undefined;
        value?: number | undefined;
        position?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgEndOfMatchAllPlayersData_Accolade>, never>>(object: I): CCSUsrMsgEndOfMatchAllPlayersData_Accolade;
};
export declare const CCSUsrMsgEndOfMatchAllPlayersData_PlayerData: {
    encode(message: CCSUsrMsgEndOfMatchAllPlayersData_PlayerData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData;
    fromPartial<I extends {
        entindex?: number | undefined;
        xuid?: string | number | Long.Long | undefined;
        name?: string | undefined;
        teamnumber?: number | undefined;
        nomination?: {
            eaccolade?: number | undefined;
            value?: number | undefined;
            position?: number | undefined;
        } | undefined;
        items?: {
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        }[] | undefined;
        playercolor?: number | undefined;
        isbot?: boolean | undefined;
    } & {
        entindex?: number | undefined;
        xuid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long.Long>, never>) | undefined;
        name?: string | undefined;
        teamnumber?: number | undefined;
        nomination?: ({
            eaccolade?: number | undefined;
            value?: number | undefined;
            position?: number | undefined;
        } & {
            eaccolade?: number | undefined;
            value?: number | undefined;
            position?: number | undefined;
        } & Record<Exclude<keyof I["nomination"], keyof CCSUsrMsgEndOfMatchAllPlayersData_Accolade>, never>) | undefined;
        items?: ({
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        }[] & ({
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } & {
            accountid?: number | undefined;
            itemid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["items"][number]["itemid"], keyof Long.Long>, never>) | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: ({
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] & ({
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            } & {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            } & Record<Exclude<keyof I["items"][number]["stickers"][number], keyof import("./cstrike15_gcmessages").CEconItemPreviewDataBlock_Sticker>, never>)[] & Record<Exclude<keyof I["items"][number]["stickers"], keyof {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[]>, never>) | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        } & Record<Exclude<keyof I["items"][number], keyof CEconItemPreviewDataBlock>, never>)[] & Record<Exclude<keyof I["items"], keyof {
            accountid?: number | undefined;
            itemid?: string | number | Long.Long | undefined;
            defindex?: number | undefined;
            paintindex?: number | undefined;
            rarity?: number | undefined;
            quality?: number | undefined;
            paintwear?: number | undefined;
            paintseed?: number | undefined;
            killeaterscoretype?: number | undefined;
            killeatervalue?: number | undefined;
            customname?: string | undefined;
            stickers?: {
                slot?: number | undefined;
                stickerId?: number | undefined;
                wear?: number | undefined;
                scale?: number | undefined;
                rotation?: number | undefined;
                tintId?: number | undefined;
            }[] | undefined;
            inventory?: number | undefined;
            origin?: number | undefined;
            questid?: number | undefined;
            dropreason?: number | undefined;
            musicindex?: number | undefined;
            entindex?: number | undefined;
        }[]>, never>) | undefined;
        playercolor?: number | undefined;
        isbot?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgEndOfMatchAllPlayersData_PlayerData>, never>>(object: I): CCSUsrMsgEndOfMatchAllPlayersData_PlayerData;
};
export declare const CCSUsrMsgRoundImpactScoreData: {
    encode(message: CCSUsrMsgRoundImpactScoreData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundImpactScoreData;
    fromPartial<I extends {
        initConditions?: {
            ctEquipValue?: number | undefined;
            tEquipValue?: number | undefined;
            terroristOdds?: number | undefined;
        } | undefined;
        allRisEventData?: {
            timestamp?: number | undefined;
            terroristOdds?: number | undefined;
            ctAlive?: number | undefined;
            tAlive?: number | undefined;
            victimData?: {
                teamNumber?: number | undefined;
                entindex?: number | undefined;
                xuid?: string | number | Long.Long | undefined;
                color?: number | undefined;
                isBot?: boolean | undefined;
                isDead?: boolean | undefined;
            } | undefined;
            objectiveData?: {
                type?: number | undefined;
            } | undefined;
            allDamageData?: {
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        initConditions?: ({
            ctEquipValue?: number | undefined;
            tEquipValue?: number | undefined;
            terroristOdds?: number | undefined;
        } & {
            ctEquipValue?: number | undefined;
            tEquipValue?: number | undefined;
            terroristOdds?: number | undefined;
        } & Record<Exclude<keyof I["initConditions"], keyof CCSUsrMsgRoundImpactScoreData_InitialConditions>, never>) | undefined;
        allRisEventData?: ({
            timestamp?: number | undefined;
            terroristOdds?: number | undefined;
            ctAlive?: number | undefined;
            tAlive?: number | undefined;
            victimData?: {
                teamNumber?: number | undefined;
                entindex?: number | undefined;
                xuid?: string | number | Long.Long | undefined;
                color?: number | undefined;
                isBot?: boolean | undefined;
                isDead?: boolean | undefined;
            } | undefined;
            objectiveData?: {
                type?: number | undefined;
            } | undefined;
            allDamageData?: {
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            }[] | undefined;
        }[] & ({
            timestamp?: number | undefined;
            terroristOdds?: number | undefined;
            ctAlive?: number | undefined;
            tAlive?: number | undefined;
            victimData?: {
                teamNumber?: number | undefined;
                entindex?: number | undefined;
                xuid?: string | number | Long.Long | undefined;
                color?: number | undefined;
                isBot?: boolean | undefined;
                isDead?: boolean | undefined;
            } | undefined;
            objectiveData?: {
                type?: number | undefined;
            } | undefined;
            allDamageData?: {
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            }[] | undefined;
        } & {
            timestamp?: number | undefined;
            terroristOdds?: number | undefined;
            ctAlive?: number | undefined;
            tAlive?: number | undefined;
            victimData?: ({
                teamNumber?: number | undefined;
                entindex?: number | undefined;
                xuid?: string | number | Long.Long | undefined;
                color?: number | undefined;
                isBot?: boolean | undefined;
                isDead?: boolean | undefined;
            } & {
                teamNumber?: number | undefined;
                entindex?: number | undefined;
                xuid?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["allRisEventData"][number]["victimData"]["xuid"], keyof Long.Long>, never>) | undefined;
                color?: number | undefined;
                isBot?: boolean | undefined;
                isDead?: boolean | undefined;
            } & Record<Exclude<keyof I["allRisEventData"][number]["victimData"], keyof CCSUsrMsgRoundImpactScoreData_RisEvent_Victim>, never>) | undefined;
            objectiveData?: ({
                type?: number | undefined;
            } & {
                type?: number | undefined;
            } & Record<Exclude<keyof I["allRisEventData"][number]["objectiveData"], "type">, never>) | undefined;
            allDamageData?: ({
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            }[] & ({
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            } & {
                targetEntindex?: number | undefined;
                targetXuid?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["allRisEventData"][number]["allDamageData"][number]["targetXuid"], keyof Long.Long>, never>) | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            } & Record<Exclude<keyof I["allRisEventData"][number]["allDamageData"][number], keyof CCSUsrMsgRoundImpactScoreData_RisEvent_Damage>, never>)[] & Record<Exclude<keyof I["allRisEventData"][number]["allDamageData"], keyof {
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allRisEventData"][number], keyof CCSUsrMsgRoundImpactScoreData_RisEvent>, never>)[] & Record<Exclude<keyof I["allRisEventData"], keyof {
            timestamp?: number | undefined;
            terroristOdds?: number | undefined;
            ctAlive?: number | undefined;
            tAlive?: number | undefined;
            victimData?: {
                teamNumber?: number | undefined;
                entindex?: number | undefined;
                xuid?: string | number | Long.Long | undefined;
                color?: number | undefined;
                isBot?: boolean | undefined;
                isDead?: boolean | undefined;
            } | undefined;
            objectiveData?: {
                type?: number | undefined;
            } | undefined;
            allDamageData?: {
                targetEntindex?: number | undefined;
                targetXuid?: string | number | Long.Long | undefined;
                healthRemoved?: number | undefined;
                numHits?: number | undefined;
                returnHealthRemoved?: number | undefined;
                numReturnHits?: number | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRoundImpactScoreData>, never>>(object: I): CCSUsrMsgRoundImpactScoreData;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent;
    fromPartial<I extends {
        timestamp?: number | undefined;
        terroristOdds?: number | undefined;
        ctAlive?: number | undefined;
        tAlive?: number | undefined;
        victimData?: {
            teamNumber?: number | undefined;
            entindex?: number | undefined;
            xuid?: string | number | Long.Long | undefined;
            color?: number | undefined;
            isBot?: boolean | undefined;
            isDead?: boolean | undefined;
        } | undefined;
        objectiveData?: {
            type?: number | undefined;
        } | undefined;
        allDamageData?: {
            targetEntindex?: number | undefined;
            targetXuid?: string | number | Long.Long | undefined;
            healthRemoved?: number | undefined;
            numHits?: number | undefined;
            returnHealthRemoved?: number | undefined;
            numReturnHits?: number | undefined;
        }[] | undefined;
    } & {
        timestamp?: number | undefined;
        terroristOdds?: number | undefined;
        ctAlive?: number | undefined;
        tAlive?: number | undefined;
        victimData?: ({
            teamNumber?: number | undefined;
            entindex?: number | undefined;
            xuid?: string | number | Long.Long | undefined;
            color?: number | undefined;
            isBot?: boolean | undefined;
            isDead?: boolean | undefined;
        } & {
            teamNumber?: number | undefined;
            entindex?: number | undefined;
            xuid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["victimData"]["xuid"], keyof Long.Long>, never>) | undefined;
            color?: number | undefined;
            isBot?: boolean | undefined;
            isDead?: boolean | undefined;
        } & Record<Exclude<keyof I["victimData"], keyof CCSUsrMsgRoundImpactScoreData_RisEvent_Victim>, never>) | undefined;
        objectiveData?: ({
            type?: number | undefined;
        } & {
            type?: number | undefined;
        } & Record<Exclude<keyof I["objectiveData"], "type">, never>) | undefined;
        allDamageData?: ({
            targetEntindex?: number | undefined;
            targetXuid?: string | number | Long.Long | undefined;
            healthRemoved?: number | undefined;
            numHits?: number | undefined;
            returnHealthRemoved?: number | undefined;
            numReturnHits?: number | undefined;
        }[] & ({
            targetEntindex?: number | undefined;
            targetXuid?: string | number | Long.Long | undefined;
            healthRemoved?: number | undefined;
            numHits?: number | undefined;
            returnHealthRemoved?: number | undefined;
            numReturnHits?: number | undefined;
        } & {
            targetEntindex?: number | undefined;
            targetXuid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["allDamageData"][number]["targetXuid"], keyof Long.Long>, never>) | undefined;
            healthRemoved?: number | undefined;
            numHits?: number | undefined;
            returnHealthRemoved?: number | undefined;
            numReturnHits?: number | undefined;
        } & Record<Exclude<keyof I["allDamageData"][number], keyof CCSUsrMsgRoundImpactScoreData_RisEvent_Damage>, never>)[] & Record<Exclude<keyof I["allDamageData"], keyof {
            targetEntindex?: number | undefined;
            targetXuid?: string | number | Long.Long | undefined;
            healthRemoved?: number | undefined;
            numHits?: number | undefined;
            returnHealthRemoved?: number | undefined;
            numReturnHits?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRoundImpactScoreData_RisEvent>, never>>(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent_Victim: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent_Victim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim;
    fromPartial<I extends {
        teamNumber?: number | undefined;
        entindex?: number | undefined;
        xuid?: string | number | Long.Long | undefined;
        color?: number | undefined;
        isBot?: boolean | undefined;
        isDead?: boolean | undefined;
    } & {
        teamNumber?: number | undefined;
        entindex?: number | undefined;
        xuid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["xuid"], keyof Long.Long>, never>) | undefined;
        color?: number | undefined;
        isBot?: boolean | undefined;
        isDead?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRoundImpactScoreData_RisEvent_Victim>, never>>(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent_Victim;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent_Objective: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent_Objective, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective;
    fromPartial<I extends {
        type?: number | undefined;
    } & {
        type?: number | undefined;
    } & Record<Exclude<keyof I, "type">, never>>(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent_Objective;
};
export declare const CCSUsrMsgRoundImpactScoreData_RisEvent_Damage: {
    encode(message: CCSUsrMsgRoundImpactScoreData_RisEvent_Damage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage;
    fromPartial<I extends {
        targetEntindex?: number | undefined;
        targetXuid?: string | number | Long.Long | undefined;
        healthRemoved?: number | undefined;
        numHits?: number | undefined;
        returnHealthRemoved?: number | undefined;
        numReturnHits?: number | undefined;
    } & {
        targetEntindex?: number | undefined;
        targetXuid?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["targetXuid"], keyof Long.Long>, never>) | undefined;
        healthRemoved?: number | undefined;
        numHits?: number | undefined;
        returnHealthRemoved?: number | undefined;
        numReturnHits?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRoundImpactScoreData_RisEvent_Damage>, never>>(object: I): CCSUsrMsgRoundImpactScoreData_RisEvent_Damage;
};
export declare const CCSUsrMsgRoundImpactScoreData_InitialConditions: {
    encode(message: CCSUsrMsgRoundImpactScoreData_InitialConditions, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRoundImpactScoreData_InitialConditions;
    fromPartial<I extends {
        ctEquipValue?: number | undefined;
        tEquipValue?: number | undefined;
        terroristOdds?: number | undefined;
    } & {
        ctEquipValue?: number | undefined;
        tEquipValue?: number | undefined;
        terroristOdds?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgRoundImpactScoreData_InitialConditions>, never>>(object: I): CCSUsrMsgRoundImpactScoreData_InitialConditions;
};
export declare const CCSUsrMsgCurrentRoundOdds: {
    encode(message: CCSUsrMsgCurrentRoundOdds, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgCurrentRoundOdds;
    fromPartial<I extends {
        odds?: number | undefined;
    } & {
        odds?: number | undefined;
    } & Record<Exclude<keyof I, "odds">, never>>(object: I): CCSUsrMsgCurrentRoundOdds;
};
export declare const CCSUsrMsgDeepStats: {
    encode(message: CCSUsrMsgDeepStats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgDeepStats;
    fromPartial<I extends {
        stats?: {
            accountId?: number | undefined;
            range?: {
                begin?: number | undefined;
                end?: number | undefined;
                frozen?: boolean | undefined;
            } | undefined;
            matches?: {
                player?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: number[] | undefined;
                } | undefined;
                events?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        stats?: ({
            accountId?: number | undefined;
            range?: {
                begin?: number | undefined;
                end?: number | undefined;
                frozen?: boolean | undefined;
            } | undefined;
            matches?: {
                player?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: number[] | undefined;
                } | undefined;
                events?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            accountId?: number | undefined;
            range?: ({
                begin?: number | undefined;
                end?: number | undefined;
                frozen?: boolean | undefined;
            } & {
                begin?: number | undefined;
                end?: number | undefined;
                frozen?: boolean | undefined;
            } & Record<Exclude<keyof I["stats"]["range"], keyof import("./cstrike15_gcmessages").CMsgGCCStrike15ClientDeepStats_DeepStatsRange>, never>) | undefined;
            matches?: ({
                player?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: number[] | undefined;
                } | undefined;
                events?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[] | undefined;
            }[] & ({
                player?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: number[] | undefined;
                } | undefined;
                events?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[] | undefined;
            } & {
                player?: ({
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: number[] | undefined;
                } & {
                    accountid?: number | undefined;
                    matchId?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["stats"]["matches"][number]["player"]["matchId"], keyof Long.Long>, never>) | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: (number[] & number[] & Record<Exclude<keyof I["stats"]["matches"][number]["player"]["mates"], keyof number[]>, never>) | undefined;
                } & Record<Exclude<keyof I["stats"]["matches"][number]["player"], keyof import("./cstrike15_gcmessages").DeepPlayerStatsEntry>, never>) | undefined;
                events?: ({
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[] & ({
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                } & {
                    accountid?: number | undefined;
                    matchId?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["stats"]["matches"][number]["events"][number]["matchId"], keyof Long.Long>, never>) | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                } & Record<Exclude<keyof I["stats"]["matches"][number]["events"][number], keyof import("./cstrike15_gcmessages").DeepPlayerMatchEvent>, never>)[] & Record<Exclude<keyof I["stats"]["matches"][number]["events"], keyof {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["stats"]["matches"][number], keyof import("./cstrike15_gcmessages").CMsgGCCStrike15ClientDeepStats_DeepStatsMatch>, never>)[] & Record<Exclude<keyof I["stats"]["matches"], keyof {
                player?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    mmGameMode?: number | undefined;
                    mapid?: number | undefined;
                    bStartingCt?: boolean | undefined;
                    matchOutcome?: number | undefined;
                    roundsWon?: number | undefined;
                    roundsLost?: number | undefined;
                    statScore?: number | undefined;
                    statDeaths?: number | undefined;
                    statMvps?: number | undefined;
                    enemyKills?: number | undefined;
                    enemyHeadshots?: number | undefined;
                    enemy2ks?: number | undefined;
                    enemy3ks?: number | undefined;
                    enemy4ks?: number | undefined;
                    totalDamage?: number | undefined;
                    engagementsEntryCount?: number | undefined;
                    engagementsEntryWins?: number | undefined;
                    engagements1v1Count?: number | undefined;
                    engagements1v1Wins?: number | undefined;
                    engagements1v2Count?: number | undefined;
                    engagements1v2Wins?: number | undefined;
                    utilityCount?: number | undefined;
                    utilitySuccess?: number | undefined;
                    flashCount?: number | undefined;
                    flashSuccess?: number | undefined;
                    mates?: number[] | undefined;
                } | undefined;
                events?: {
                    accountid?: number | undefined;
                    matchId?: string | number | Long.Long | undefined;
                    eventId?: number | undefined;
                    eventType?: number | undefined;
                    bPlayingCt?: boolean | undefined;
                    userPosX?: number | undefined;
                    userPosY?: number | undefined;
                    userPosZ?: number | undefined;
                    userDefidx?: number | undefined;
                    otherPosX?: number | undefined;
                    otherPosY?: number | undefined;
                    otherPosZ?: number | undefined;
                    otherDefidx?: number | undefined;
                    eventData?: number | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["stats"], keyof CMsgGCCStrike15ClientDeepStats>, never>) | undefined;
    } & Record<Exclude<keyof I, "stats">, never>>(object: I): CCSUsrMsgDeepStats;
};
export declare const CCSUsrMsgResetHud: {
    encode(message: CCSUsrMsgResetHud, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgResetHud;
    fromPartial<I extends {
        reset?: boolean | undefined;
    } & {
        reset?: boolean | undefined;
    } & Record<Exclude<keyof I, "reset">, never>>(object: I): CCSUsrMsgResetHud;
};
export declare const CCSUsrMsgGameTitle: {
    encode(message: CCSUsrMsgGameTitle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgGameTitle;
    fromPartial<I extends {
        dummy?: number | undefined;
    } & {
        dummy?: number | undefined;
    } & Record<Exclude<keyof I, "dummy">, never>>(object: I): CCSUsrMsgGameTitle;
};
export declare const CCSUsrMsgRequestState: {
    encode(message: CCSUsrMsgRequestState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgRequestState;
    fromPartial<I extends {
        dummy?: number | undefined;
    } & {
        dummy?: number | undefined;
    } & Record<Exclude<keyof I, "dummy">, never>>(object: I): CCSUsrMsgRequestState;
};
export declare const CCSUsrMsgStopSpectatorMode: {
    encode(message: CCSUsrMsgStopSpectatorMode, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgStopSpectatorMode;
    fromPartial<I extends {
        dummy?: number | undefined;
    } & {
        dummy?: number | undefined;
    } & Record<Exclude<keyof I, "dummy">, never>>(object: I): CCSUsrMsgStopSpectatorMode;
};
export declare const CCSUsrMsgDisconnectToLobby: {
    encode(message: CCSUsrMsgDisconnectToLobby, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgDisconnectToLobby;
    fromPartial<I extends {
        dummy?: number | undefined;
    } & {
        dummy?: number | undefined;
    } & Record<Exclude<keyof I, "dummy">, never>>(object: I): CCSUsrMsgDisconnectToLobby;
};
export declare const CCSUsrMsgWarmupHasEnded: {
    encode(message: CCSUsrMsgWarmupHasEnded, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgWarmupHasEnded;
    fromPartial<I extends {
        dummy?: number | undefined;
    } & {
        dummy?: number | undefined;
    } & Record<Exclude<keyof I, "dummy">, never>>(object: I): CCSUsrMsgWarmupHasEnded;
};
export declare const CCSUsrMsgClientInfo: {
    encode(message: CCSUsrMsgClientInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgClientInfo;
    fromPartial<I extends {
        dummy?: number | undefined;
    } & {
        dummy?: number | undefined;
    } & Record<Exclude<keyof I, "dummy">, never>>(object: I): CCSUsrMsgClientInfo;
};
export declare const CCSUsrMsgServerRankRevealAll: {
    encode(message: CCSUsrMsgServerRankRevealAll, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgServerRankRevealAll;
    fromPartial<I extends {
        secondsTillShutdown?: number | undefined;
        reservation?: {
            accountIds?: number[] | undefined;
            gameType?: number | undefined;
            matchId?: string | number | Long.Long | undefined;
            serverVersion?: number | undefined;
            flags?: number | undefined;
            rankings?: {
                accountId?: number | undefined;
                rankId?: number | undefined;
                wins?: number | undefined;
                rankChange?: number | undefined;
                rankTypeId?: number | undefined;
                tvControl?: number | undefined;
            }[] | undefined;
            encryptionKey?: string | number | Long.Long | undefined;
            encryptionKeyPub?: string | number | Long.Long | undefined;
            partyIds?: number[] | undefined;
            whitelist?: {
                a?: number | undefined;
                b?: number | undefined;
                c?: number | undefined;
                d?: number | undefined;
                bits?: number | undefined;
                token?: number | undefined;
            }[] | undefined;
            tvMasterSteamid?: string | number | Long.Long | undefined;
            tournamentEvent?: {
                eventId?: number | undefined;
                eventTag?: string | undefined;
                eventName?: string | undefined;
                eventTimeStart?: number | undefined;
                eventTimeEnd?: number | undefined;
                eventPublic?: number | undefined;
                eventStageId?: number | undefined;
                eventStageName?: string | undefined;
                activeSectionId?: number | undefined;
            } | undefined;
            tournamentTeams?: {
                teamId?: number | undefined;
                teamTag?: string | undefined;
                teamFlag?: string | undefined;
                teamName?: string | undefined;
                players?: {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            tournamentCastersAccountIds?: number[] | undefined;
            tvRelaySteamid?: string | number | Long.Long | undefined;
            preMatchData?: {
                predictionsPct?: number | undefined;
                draft?: {
                    eventId?: number | undefined;
                    eventStageId?: number | undefined;
                    teamId0?: number | undefined;
                    teamId1?: number | undefined;
                    mapsCount?: number | undefined;
                    mapsCurrent?: number | undefined;
                    teamIdStart?: number | undefined;
                    teamIdVeto1?: number | undefined;
                    teamIdPickn?: number | undefined;
                    drafts?: {
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    }[] | undefined;
                } | undefined;
                stats?: {
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: string[] | undefined;
                }[] | undefined;
                wins?: number[] | undefined;
            } | undefined;
            rtime32EventStart?: number | undefined;
            tvControl?: number | undefined;
        } | undefined;
    } & {
        secondsTillShutdown?: number | undefined;
        reservation?: ({
            accountIds?: number[] | undefined;
            gameType?: number | undefined;
            matchId?: string | number | Long.Long | undefined;
            serverVersion?: number | undefined;
            flags?: number | undefined;
            rankings?: {
                accountId?: number | undefined;
                rankId?: number | undefined;
                wins?: number | undefined;
                rankChange?: number | undefined;
                rankTypeId?: number | undefined;
                tvControl?: number | undefined;
            }[] | undefined;
            encryptionKey?: string | number | Long.Long | undefined;
            encryptionKeyPub?: string | number | Long.Long | undefined;
            partyIds?: number[] | undefined;
            whitelist?: {
                a?: number | undefined;
                b?: number | undefined;
                c?: number | undefined;
                d?: number | undefined;
                bits?: number | undefined;
                token?: number | undefined;
            }[] | undefined;
            tvMasterSteamid?: string | number | Long.Long | undefined;
            tournamentEvent?: {
                eventId?: number | undefined;
                eventTag?: string | undefined;
                eventName?: string | undefined;
                eventTimeStart?: number | undefined;
                eventTimeEnd?: number | undefined;
                eventPublic?: number | undefined;
                eventStageId?: number | undefined;
                eventStageName?: string | undefined;
                activeSectionId?: number | undefined;
            } | undefined;
            tournamentTeams?: {
                teamId?: number | undefined;
                teamTag?: string | undefined;
                teamFlag?: string | undefined;
                teamName?: string | undefined;
                players?: {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            tournamentCastersAccountIds?: number[] | undefined;
            tvRelaySteamid?: string | number | Long.Long | undefined;
            preMatchData?: {
                predictionsPct?: number | undefined;
                draft?: {
                    eventId?: number | undefined;
                    eventStageId?: number | undefined;
                    teamId0?: number | undefined;
                    teamId1?: number | undefined;
                    mapsCount?: number | undefined;
                    mapsCurrent?: number | undefined;
                    teamIdStart?: number | undefined;
                    teamIdVeto1?: number | undefined;
                    teamIdPickn?: number | undefined;
                    drafts?: {
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    }[] | undefined;
                } | undefined;
                stats?: {
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: string[] | undefined;
                }[] | undefined;
                wins?: number[] | undefined;
            } | undefined;
            rtime32EventStart?: number | undefined;
            tvControl?: number | undefined;
        } & {
            accountIds?: (number[] & number[] & Record<Exclude<keyof I["reservation"]["accountIds"], keyof number[]>, never>) | undefined;
            gameType?: number | undefined;
            matchId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reservation"]["matchId"], keyof Long.Long>, never>) | undefined;
            serverVersion?: number | undefined;
            flags?: number | undefined;
            rankings?: ({
                accountId?: number | undefined;
                rankId?: number | undefined;
                wins?: number | undefined;
                rankChange?: number | undefined;
                rankTypeId?: number | undefined;
                tvControl?: number | undefined;
            }[] & ({
                accountId?: number | undefined;
                rankId?: number | undefined;
                wins?: number | undefined;
                rankChange?: number | undefined;
                rankTypeId?: number | undefined;
                tvControl?: number | undefined;
            } & {
                accountId?: number | undefined;
                rankId?: number | undefined;
                wins?: number | undefined;
                rankChange?: number | undefined;
                rankTypeId?: number | undefined;
                tvControl?: number | undefined;
            } & Record<Exclude<keyof I["reservation"]["rankings"][number], keyof import("./cstrike15_gcmessages").PlayerRankingInfo>, never>)[] & Record<Exclude<keyof I["reservation"]["rankings"], keyof {
                accountId?: number | undefined;
                rankId?: number | undefined;
                wins?: number | undefined;
                rankChange?: number | undefined;
                rankTypeId?: number | undefined;
                tvControl?: number | undefined;
            }[]>, never>) | undefined;
            encryptionKey?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reservation"]["encryptionKey"], keyof Long.Long>, never>) | undefined;
            encryptionKeyPub?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reservation"]["encryptionKeyPub"], keyof Long.Long>, never>) | undefined;
            partyIds?: (number[] & number[] & Record<Exclude<keyof I["reservation"]["partyIds"], keyof number[]>, never>) | undefined;
            whitelist?: ({
                a?: number | undefined;
                b?: number | undefined;
                c?: number | undefined;
                d?: number | undefined;
                bits?: number | undefined;
                token?: number | undefined;
            }[] & ({
                a?: number | undefined;
                b?: number | undefined;
                c?: number | undefined;
                d?: number | undefined;
                bits?: number | undefined;
                token?: number | undefined;
            } & {
                a?: number | undefined;
                b?: number | undefined;
                c?: number | undefined;
                d?: number | undefined;
                bits?: number | undefined;
                token?: number | undefined;
            } & Record<Exclude<keyof I["reservation"]["whitelist"][number], keyof import("./cstrike15_gcmessages").IpAddressMask>, never>)[] & Record<Exclude<keyof I["reservation"]["whitelist"], keyof {
                a?: number | undefined;
                b?: number | undefined;
                c?: number | undefined;
                d?: number | undefined;
                bits?: number | undefined;
                token?: number | undefined;
            }[]>, never>) | undefined;
            tvMasterSteamid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reservation"]["tvMasterSteamid"], keyof Long.Long>, never>) | undefined;
            tournamentEvent?: ({
                eventId?: number | undefined;
                eventTag?: string | undefined;
                eventName?: string | undefined;
                eventTimeStart?: number | undefined;
                eventTimeEnd?: number | undefined;
                eventPublic?: number | undefined;
                eventStageId?: number | undefined;
                eventStageName?: string | undefined;
                activeSectionId?: number | undefined;
            } & {
                eventId?: number | undefined;
                eventTag?: string | undefined;
                eventName?: string | undefined;
                eventTimeStart?: number | undefined;
                eventTimeEnd?: number | undefined;
                eventPublic?: number | undefined;
                eventStageId?: number | undefined;
                eventStageName?: string | undefined;
                activeSectionId?: number | undefined;
            } & Record<Exclude<keyof I["reservation"]["tournamentEvent"], keyof import("./cstrike15_gcmessages").TournamentEvent>, never>) | undefined;
            tournamentTeams?: ({
                teamId?: number | undefined;
                teamTag?: string | undefined;
                teamFlag?: string | undefined;
                teamName?: string | undefined;
                players?: {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[] | undefined;
            }[] & ({
                teamId?: number | undefined;
                teamTag?: string | undefined;
                teamFlag?: string | undefined;
                teamName?: string | undefined;
                players?: {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[] | undefined;
            } & {
                teamId?: number | undefined;
                teamTag?: string | undefined;
                teamFlag?: string | undefined;
                teamName?: string | undefined;
                players?: ({
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[] & ({
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                } & {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                } & Record<Exclude<keyof I["reservation"]["tournamentTeams"][number]["players"][number], keyof import("./cstrike15_gcmessages").TournamentPlayer>, never>)[] & Record<Exclude<keyof I["reservation"]["tournamentTeams"][number]["players"], keyof {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["reservation"]["tournamentTeams"][number], keyof import("./cstrike15_gcmessages").TournamentTeam>, never>)[] & Record<Exclude<keyof I["reservation"]["tournamentTeams"], keyof {
                teamId?: number | undefined;
                teamTag?: string | undefined;
                teamFlag?: string | undefined;
                teamName?: string | undefined;
                players?: {
                    accountId?: number | undefined;
                    playerNick?: string | undefined;
                    playerName?: string | undefined;
                    playerDob?: number | undefined;
                    playerFlag?: string | undefined;
                    playerLocation?: string | undefined;
                    playerDesc?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            tournamentCastersAccountIds?: (number[] & number[] & Record<Exclude<keyof I["reservation"]["tournamentCastersAccountIds"], keyof number[]>, never>) | undefined;
            tvRelaySteamid?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reservation"]["tvRelaySteamid"], keyof Long.Long>, never>) | undefined;
            preMatchData?: ({
                predictionsPct?: number | undefined;
                draft?: {
                    eventId?: number | undefined;
                    eventStageId?: number | undefined;
                    teamId0?: number | undefined;
                    teamId1?: number | undefined;
                    mapsCount?: number | undefined;
                    mapsCurrent?: number | undefined;
                    teamIdStart?: number | undefined;
                    teamIdVeto1?: number | undefined;
                    teamIdPickn?: number | undefined;
                    drafts?: {
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    }[] | undefined;
                } | undefined;
                stats?: {
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: string[] | undefined;
                }[] | undefined;
                wins?: number[] | undefined;
            } & {
                predictionsPct?: number | undefined;
                draft?: ({
                    eventId?: number | undefined;
                    eventStageId?: number | undefined;
                    teamId0?: number | undefined;
                    teamId1?: number | undefined;
                    mapsCount?: number | undefined;
                    mapsCurrent?: number | undefined;
                    teamIdStart?: number | undefined;
                    teamIdVeto1?: number | undefined;
                    teamIdPickn?: number | undefined;
                    drafts?: {
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    }[] | undefined;
                } & {
                    eventId?: number | undefined;
                    eventStageId?: number | undefined;
                    teamId0?: number | undefined;
                    teamId1?: number | undefined;
                    mapsCount?: number | undefined;
                    mapsCurrent?: number | undefined;
                    teamIdStart?: number | undefined;
                    teamIdVeto1?: number | undefined;
                    teamIdPickn?: number | undefined;
                    drafts?: ({
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    }[] & ({
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    } & {
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    } & Record<Exclude<keyof I["reservation"]["preMatchData"]["draft"]["drafts"][number], keyof import("./cstrike15_gcmessages").CDataGCCStrike15V2TournamentMatchDraft_Entry>, never>)[] & Record<Exclude<keyof I["reservation"]["preMatchData"]["draft"]["drafts"], keyof {
                        mapid?: number | undefined;
                        teamIdCt?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["reservation"]["preMatchData"]["draft"], keyof import("./cstrike15_gcmessages").CDataGCCStrike15V2TournamentMatchDraft>, never>) | undefined;
                stats?: ({
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: string[] | undefined;
                }[] & ({
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: string[] | undefined;
                } & {
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: (string[] & string[] & Record<Exclude<keyof I["reservation"]["preMatchData"]["stats"][number]["matchInfoTeams"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["reservation"]["preMatchData"]["stats"][number], keyof import("./cstrike15_gcmessages").CPreMatchInfoData_TeamStats>, never>)[] & Record<Exclude<keyof I["reservation"]["preMatchData"]["stats"], keyof {
                    matchInfoIdxtxt?: number | undefined;
                    matchInfoTxt?: string | undefined;
                    matchInfoTeams?: string[] | undefined;
                }[]>, never>) | undefined;
                wins?: (number[] & number[] & Record<Exclude<keyof I["reservation"]["preMatchData"]["wins"], keyof number[]>, never>) | undefined;
            } & Record<Exclude<keyof I["reservation"]["preMatchData"], keyof import("./cstrike15_gcmessages").CPreMatchInfoData>, never>) | undefined;
            rtime32EventStart?: number | undefined;
            tvControl?: number | undefined;
        } & Record<Exclude<keyof I["reservation"], keyof CMsgGCCStrike15V2MatchmakingGC2ServerReserve>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgServerRankRevealAll>, never>>(object: I): CCSUsrMsgServerRankRevealAll;
};
export declare const CCSUsrMsgUtilMsg: {
    encode(message: CCSUsrMsgUtilMsg, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CCSUsrMsgUtilMsg;
    fromPartial<I extends {
        utilAction?: string | undefined;
        util1?: number | undefined;
        util2?: number | undefined;
        util3?: number | undefined;
        util4?: number | undefined;
        util5?: number | undefined;
    } & {
        utilAction?: string | undefined;
        util1?: number | undefined;
        util2?: number | undefined;
        util3?: number | undefined;
        util4?: number | undefined;
        util5?: number | undefined;
    } & Record<Exclude<keyof I, keyof CCSUsrMsgUtilMsg>, never>>(object: I): CCSUsrMsgUtilMsg;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
