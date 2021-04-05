import * as um from "./protobufs/cstrike15_usermessages";
export declare type UserMessageName = "VGUIMenu" | "Geiger" | "Train" | "HudText" | "SayText" | "SayText2" | "TextMsg" | "HudMsg" | "ResetHud" | "GameTitle" | "Shake" | "Fade" | "Rumble" | "CloseCaption" | "CloseCaptionDirect" | "SendAudio" | "RawAudio" | "VoiceMask" | "RequestState" | "Damage" | "RadioText" | "HintText" | "KeyHintText" | "ProcessSpottedEntityUpdate" | "ReloadEffect" | "AdjustMoney" | "StopSpectatorMode" | "KillCam" | "DesiredTimescale" | "CurrentTimescale" | "AchievementEvent" | "MatchEndConditions" | "DisconnectToLobby" | "PlayerStatsUpdate" | "DisplayInventory" | "WarmupHasEnded" | "ClientInfo" | "XRankGet" | "XRankUpd" | "CallVoteFailed" | "VoteStart" | "VotePass" | "VoteFailed" | "VoteSetup" | "ServerRankRevealAll" | "SendLastKillerDamageToClient" | "ServerRankUpdate" | "ItemPickup" | "ShowMenu" | "BarTime" | "AmmoDenied" | "MarkAchievement" | "MatchStatsUpdate" | "ItemDrop" | "GlowPropTurnOff" | "SendPlayerItemDrops" | "RoundBackupFilenames" | "SendPlayerItemFound" | "ReportHit" | "XpUpdate" | "QuestProgress" | "ScoreLeaderboardData" | "PlayerDecalDigitalSignature" | "WeaponSound" | "UpdateScreenHealthBar" | "EntityOutlineHighlight" | "SSUI" | "SurvivalStats" | "EndOfMatchAllPlayersData" | "RoundImpactScoreData" | "CurrentRoundOdds" | "DeepStats";
interface IUserMessageDescriptor {
    name: UserMessageName;
    class: {
        decode: (buffer: Uint8Array) => any;
    };
}
export declare let userMessages: IUserMessageDescriptor[];
interface IUserMessageEvent {
    name: string;
    msg: any;
}
declare module "./usermessages" {
    interface UserMessages {
        /**
         * Fired when any user message is sent.
         * @note Fired after specific event is fired.
         */
        on(message: "message", listener: (event: IUserMessageEvent) => void): this;
        emit(message: "message", event: IUserMessageEvent): boolean;
        emit(message: UserMessageName, msg: any): boolean;
        on(message: "VGUIMenu", listener: (msg: um.CCSUsrMsgVGUIMenu) => void): this;
        on(message: "Geiger", listener: (msg: um.CCSUsrMsgGeiger) => void): this;
        on(message: "Train", listener: (msg: um.CCSUsrMsgTrain) => void): this;
        on(message: "HudText", listener: (msg: um.CCSUsrMsgHudText) => void): this;
        on(message: "SayText", listener: (msg: um.CCSUsrMsgSayText) => void): this;
        on(message: "SayText2", listener: (msg: um.CCSUsrMsgSayText2) => void): this;
        on(message: "TextMsg", listener: (msg: um.CCSUsrMsgTextMsg) => void): this;
        on(message: "HudMsg", listener: (msg: um.CCSUsrMsgHudMsg) => void): this;
        on(message: "ResetHud", listener: (msg: um.CCSUsrMsgResetHud) => void): this;
        on(message: "GameTitle", listener: (msg: um.CCSUsrMsgGameTitle) => void): this;
        on(message: "Shake", listener: (msg: um.CCSUsrMsgShake) => void): this;
        on(message: "Fade", listener: (msg: um.CCSUsrMsgFade) => void): this;
        on(message: "Rumble", listener: (msg: um.CCSUsrMsgRumble) => void): this;
        on(message: "CloseCaption", listener: (msg: um.CCSUsrMsgCloseCaption) => void): this;
        on(message: "CloseCaptionDirect", listener: (msg: um.CCSUsrMsgCloseCaptionDirect) => void): this;
        on(message: "SendAudio", listener: (msg: um.CCSUsrMsgSendAudio) => void): this;
        on(message: "RawAudio", listener: (msg: um.CCSUsrMsgRawAudio) => void): this;
        on(message: "VoiceMask", listener: (msg: um.CCSUsrMsgVoiceMask) => void): this;
        on(message: "RequestState", listener: (msg: um.CCSUsrMsgRequestState) => void): this;
        on(message: "Damage", listener: (msg: um.CCSUsrMsgDamage) => void): this;
        on(message: "RadioText", listener: (msg: um.CCSUsrMsgRadioText) => void): this;
        on(message: "HintText", listener: (msg: um.CCSUsrMsgHintText) => void): this;
        on(message: "KeyHintText", listener: (msg: um.CCSUsrMsgKeyHintText) => void): this;
        on(message: "ProcessSpottedEntityUpdate", listener: (msg: um.CCSUsrMsgProcessSpottedEntityUpdate) => void): this;
        on(message: "ReloadEffect", listener: (msg: um.CCSUsrMsgReloadEffect) => void): this;
        on(message: "AdjustMoney", listener: (msg: um.CCSUsrMsgAdjustMoney) => void): this;
        on(message: "StopSpectatorMode", listener: (msg: um.CCSUsrMsgStopSpectatorMode) => void): this;
        on(message: "KillCam", listener: (msg: um.CCSUsrMsgKillCam) => void): this;
        on(message: "DesiredTimescale", listener: (msg: um.CCSUsrMsgDesiredTimescale) => void): this;
        on(message: "CurrentTimescale", listener: (msg: um.CCSUsrMsgCurrentTimescale) => void): this;
        on(message: "AchievementEvent", listener: (msg: um.CCSUsrMsgAchievementEvent) => void): this;
        on(message: "MatchEndConditions", listener: (msg: um.CCSUsrMsgMatchEndConditions) => void): this;
        on(message: "DisconnectToLobby", listener: (msg: um.CCSUsrMsgDisconnectToLobby) => void): this;
        on(message: "PlayerStatsUpdate", listener: (msg: um.CCSUsrMsgPlayerStatsUpdate) => void): this;
        on(message: "DisplayInventory", listener: (msg: um.CCSUsrMsgDisplayInventory) => void): this;
        on(message: "WarmupHasEnded", listener: (msg: um.CCSUsrMsgWarmupHasEnded) => void): this;
        on(message: "ClientInfo", listener: (msg: um.CCSUsrMsgClientInfo) => void): this;
        on(message: "XRankGet", listener: (msg: um.CCSUsrMsgXRankGet) => void): this;
        on(message: "XRankUpd", listener: (msg: um.CCSUsrMsgXRankUpd) => void): this;
        on(message: "CallVoteFailed", listener: (msg: um.CCSUsrMsgCallVoteFailed) => void): this;
        on(message: "VoteStart", listener: (msg: um.CCSUsrMsgVoteStart) => void): this;
        on(message: "VotePass", listener: (msg: um.CCSUsrMsgVotePass) => void): this;
        on(message: "VoteFailed", listener: (msg: um.CCSUsrMsgVoteFailed) => void): this;
        on(message: "VoteSetup", listener: (msg: um.CCSUsrMsgVoteSetup) => void): this;
        on(message: "ServerRankRevealAll", listener: (msg: um.CCSUsrMsgServerRankRevealAll) => void): this;
        on(message: "SendLastKillerDamageToClient", listener: (msg: um.CCSUsrMsgSendLastKillerDamageToClient) => void): this;
        on(message: "ServerRankUpdate", listener: (msg: um.CCSUsrMsgServerRankUpdate) => void): this;
        on(message: "ItemPickup", listener: (msg: um.CCSUsrMsgItemPickup) => void): this;
        on(message: "ShowMenu", listener: (msg: um.CCSUsrMsgShowMenu) => void): this;
        on(message: "BarTime", listener: (msg: um.CCSUsrMsgBarTime) => void): this;
        on(message: "AmmoDenied", listener: (msg: um.CCSUsrMsgAmmoDenied) => void): this;
        on(message: "MarkAchievement", listener: (msg: um.CCSUsrMsgMarkAchievement) => void): this;
        on(message: "MatchStatsUpdate", listener: (msg: um.CCSUsrMsgMatchStatsUpdate) => void): this;
        on(message: "ItemDrop", listener: (msg: um.CCSUsrMsgItemDrop) => void): this;
        on(message: "GlowPropTurnOff", listener: (msg: um.CCSUsrMsgGlowPropTurnOff) => void): this;
        on(message: "SendPlayerItemDrops", listener: (msg: um.CCSUsrMsgSendPlayerItemDrops) => void): this;
        on(message: "RoundBackupFilenames", listener: (msg: um.CCSUsrMsgRoundBackupFilenames) => void): this;
        on(message: "SendPlayerItemFound", listener: (msg: um.CCSUsrMsgSendPlayerItemFound) => void): this;
        on(message: "ReportHit", listener: (msg: um.CCSUsrMsgReportHit) => void): this;
        on(message: "XpUpdate", listener: (msg: um.CCSUsrMsgXpUpdate) => void): this;
        on(message: "QuestProgress", listener: (msg: um.CCSUsrMsgQuestProgress) => void): this;
        on(message: "ScoreLeaderboardData", listener: (msg: um.CCSUsrMsgScoreLeaderboardData) => void): this;
        on(message: "PlayerDecalDigitalSignature", listener: (msg: um.CCSUsrMsgPlayerDecalDigitalSignature) => void): this;
        on(message: "WeaponSound", listener: (msg: um.CCSUsrMsgWeaponSound) => void): this;
        on(message: "UpdateScreenHealthBar", listener: (msg: um.CCSUsrMsgUpdateScreenHealthBar) => void): this;
        on(message: "EntityOutlineHighlight", listener: (msg: um.CCSUsrMsgEntityOutlineHighlight) => void): this;
        on(message: "SSUI", listener: (msg: um.CCSUsrMsgSSUI) => void): this;
        on(message: "SurvivalStats", listener: (msg: um.CCSUsrMsgSurvivalStats) => void): this;
        on(message: "EndOfMatchAllPlayersData", listener: (msg: um.CCSUsrMsgEndOfMatchAllPlayersData) => void): this;
        on(message: "RoundImpactScoreData", listener: (msg: um.CCSUsrMsgRoundImpactScoreData) => void): this;
        on(message: "CurrentRoundOdds", listener: (msg: um.CCSUsrMsgCurrentRoundOdds) => void): this;
        on(message: "DeepStats", listener: (msg: um.CCSUsrMsgDeepStats) => void): this;
    }
}
export {};
