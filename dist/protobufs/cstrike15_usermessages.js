"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCSUsrMsgVoteStart = exports.CCSUsrMsgCallVoteFailed = exports.CCSUsrMsgXRankUpd = exports.CCSUsrMsgXRankGet = exports.CCSUsrMsgPlayerDecalDigitalSignature = exports.CCSUsrMsgScoreLeaderboardData = exports.CCSUsrMsgQuestProgress = exports.CCSUsrMsgDisplayInventory = exports.CCSUsrMsgPlayerStatsUpdate_Stat = exports.CCSUsrMsgPlayerStatsUpdate = exports.CCSUsrMsgMatchEndConditions = exports.CCSUsrMsgAchievementEvent = exports.CCSUsrMsgCurrentTimescale = exports.CCSUsrMsgDesiredTimescale = exports.CCSUsrMsgKillCam = exports.CCSUsrMsgReportHit = exports.CCSUsrMsgAdjustMoney = exports.CCSUsrMsgEntityOutlineHighlight = exports.CCSUsrMsgUpdateScreenHealthBar = exports.CCSUsrMsgWeaponSound = exports.CCSUsrMsgReloadEffect = exports.CCSUsrMsgSendPlayerItemFound = exports.CCSUsrMsgSendPlayerItemDrops = exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = exports.CCSUsrMsgProcessSpottedEntityUpdate = exports.CCSUsrMsgKeyHintText = exports.CCSUsrMsgHintText = exports.CCSUsrMsgRadioText = exports.CCSUsrMsgDamage = exports.CCSUsrMsgVoiceMask_PlayerMask = exports.CCSUsrMsgVoiceMask = exports.CCSUsrMsgRawAudio = exports.CCSUsrMsgSendAudio = exports.CCSUsrMsgCloseCaptionDirect = exports.CCSUsrMsgCloseCaption = exports.CCSUsrMsgRumble = exports.CCSUsrMsgFade = exports.CCSUsrMsgShake = exports.CCSUsrMsgHudMsg = exports.CCSUsrMsgTextMsg = exports.CCSUsrMsgSayText2 = exports.CCSUsrMsgSayText = exports.CCSUsrMsgHudText = exports.CCSUsrMsgTrain = exports.CCSUsrMsgGeiger = exports.CCSUsrMsgVGUIMenu_Subkey = exports.CCSUsrMsgVGUIMenu = exports.ECSUsrMsgDisconnectToLobbyAction = exports.ECstrike15UserMessages = exports.protobufPackage = void 0;
exports.CCSUsrMsgUtilMsg = exports.CCSUsrMsgServerRankRevealAll = exports.CCSUsrMsgClientInfo = exports.CCSUsrMsgWarmupHasEnded = exports.CCSUsrMsgDisconnectToLobby = exports.CCSUsrMsgStopSpectatorMode = exports.CCSUsrMsgRequestState = exports.CCSUsrMsgGameTitle = exports.CCSUsrMsgResetHud = exports.CCSUsrMsgDeepStats = exports.CCSUsrMsgCurrentRoundOdds = exports.CCSUsrMsgRoundImpactScoreData_InitialConditions = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective = exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim = exports.CCSUsrMsgRoundImpactScoreData_RisEvent = exports.CCSUsrMsgRoundImpactScoreData = exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData = exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade = exports.CCSUsrMsgEndOfMatchAllPlayersData = exports.CCSUsrMsgSurvivalStats_Damage = exports.CCSUsrMsgSurvivalStats_Placement = exports.CCSUsrMsgSurvivalStats_Fact = exports.CCSUsrMsgSurvivalStats = exports.CCSUsrMsgSSUI = exports.CCSUsrMsgRoundBackupFilenames = exports.CCSUsrMsgGlowPropTurnOff = exports.CCSUsrMsgItemDrop = exports.CCSUsrMsgMatchStatsUpdate = exports.CCSUsrMsgMarkAchievement = exports.CCSUsrMsgAmmoDenied = exports.CCSUsrMsgBarTime = exports.CCSUsrMsgShowMenu = exports.CCSUsrMsgItemPickup = exports.CCSUsrMsgXpUpdate = exports.CCSUsrMsgServerRankUpdate_RankUpdate = exports.CCSUsrMsgServerRankUpdate = exports.CCSUsrMsgSendLastKillerDamageToClient = exports.CCSUsrMsgVoteSetup = exports.CCSUsrMsgVoteFailed = exports.CCSUsrMsgVotePass = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
const netmessages_1 = require("./netmessages");
const cstrike15_gcmessages_1 = require("./cstrike15_gcmessages");
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
    ECstrike15UserMessages[ECstrike15UserMessages["CS_UM_UtilMsg"] = 82] = "CS_UM_UtilMsg";
})(ECstrike15UserMessages = exports.ECstrike15UserMessages || (exports.ECstrike15UserMessages = {}));
var ECSUsrMsgDisconnectToLobbyAction;
(function (ECSUsrMsgDisconnectToLobbyAction) {
    ECSUsrMsgDisconnectToLobbyAction[ECSUsrMsgDisconnectToLobbyAction["k_ECSUsrMsg_DisconnectToLobby_Action_Default"] = 0] = "k_ECSUsrMsg_DisconnectToLobby_Action_Default";
    ECSUsrMsgDisconnectToLobbyAction[ECSUsrMsgDisconnectToLobbyAction["k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue"] = 1] = "k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue";
})(ECSUsrMsgDisconnectToLobbyAction = exports.ECSUsrMsgDisconnectToLobbyAction || (exports.ECSUsrMsgDisconnectToLobbyAction = {}));
function createBaseCCSUsrMsgVGUIMenu() {
    return { name: "", show: false, subkeys: [] };
}
exports.CCSUsrMsgVGUIMenu = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.show === true) {
            writer.uint32(16).bool(message.show);
        }
        for (const v of message.subkeys) {
            exports.CCSUsrMsgVGUIMenu_Subkey.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.subkeys.push(exports.CCSUsrMsgVGUIMenu_Subkey.decode(reader, reader.uint32()));
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
        const message = createBaseCCSUsrMsgVGUIMenu();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.show = (_b = object.show) !== null && _b !== void 0 ? _b : false;
        message.subkeys =
            ((_c = object.subkeys) === null || _c === void 0 ? void 0 : _c.map(e => exports.CCSUsrMsgVGUIMenu_Subkey.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCCSUsrMsgVGUIMenu_Subkey() {
    return { name: "", str: "" };
}
exports.CCSUsrMsgVGUIMenu_Subkey = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.str !== "") {
            writer.uint32(18).string(message.str);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgVGUIMenu_Subkey();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.str = (_b = object.str) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCCSUsrMsgGeiger() {
    return { range: 0 };
}
exports.CCSUsrMsgGeiger = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.range !== 0) {
            writer.uint32(8).int32(message.range);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgGeiger();
        message.range = (_a = object.range) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgTrain() {
    return { train: 0 };
}
exports.CCSUsrMsgTrain = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.train !== 0) {
            writer.uint32(8).int32(message.train);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgTrain();
        message.train = (_a = object.train) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgHudText() {
    return { text: "" };
}
exports.CCSUsrMsgHudText = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgHudText();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgSayText() {
    return { entIdx: 0, text: "", chat: false, textallchat: false };
}
exports.CCSUsrMsgSayText = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgSayText();
        message.entIdx = (_a = object.entIdx) !== null && _a !== void 0 ? _a : 0;
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        message.chat = (_c = object.chat) !== null && _c !== void 0 ? _c : false;
        message.textallchat = (_d = object.textallchat) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseCCSUsrMsgSayText2() {
    return {
        entIdx: 0,
        chat: false,
        msgName: "",
        params: [],
        textallchat: false
    };
}
exports.CCSUsrMsgSayText2 = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        if (message.textallchat === true) {
            writer.uint32(40).bool(message.textallchat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCSUsrMsgSayText2();
        message.entIdx = (_a = object.entIdx) !== null && _a !== void 0 ? _a : 0;
        message.chat = (_b = object.chat) !== null && _b !== void 0 ? _b : false;
        message.msgName = (_c = object.msgName) !== null && _c !== void 0 ? _c : "";
        message.params = ((_d = object.params) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        message.textallchat = (_e = object.textallchat) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseCCSUsrMsgTextMsg() {
    return { msgDst: 0, params: [] };
}
exports.CCSUsrMsgTextMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msgDst !== 0) {
            writer.uint32(8).int32(message.msgDst);
        }
        for (const v of message.params) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgTextMsg();
        message.msgDst = (_a = object.msgDst) !== null && _a !== void 0 ? _a : 0;
        message.params = ((_b = object.params) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        return message;
    }
};
function createBaseCCSUsrMsgHudMsg() {
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
exports.CCSUsrMsgHudMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.channel !== 0) {
            writer.uint32(8).int32(message.channel);
        }
        if (message.pos !== undefined) {
            netmessages_1.CMsgVector2D.encode(message.pos, writer.uint32(18).fork()).ldelim();
        }
        if (message.clr1 !== undefined) {
            netmessages_1.CMsgRGBA.encode(message.clr1, writer.uint32(26).fork()).ldelim();
        }
        if (message.clr2 !== undefined) {
            netmessages_1.CMsgRGBA.encode(message.clr2, writer.uint32(34).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgHudMsg();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCCSUsrMsgHudMsg();
        message.channel = (_a = object.channel) !== null && _a !== void 0 ? _a : 0;
        message.pos =
            object.pos !== undefined && object.pos !== null
                ? netmessages_1.CMsgVector2D.fromPartial(object.pos)
                : undefined;
        message.clr1 =
            object.clr1 !== undefined && object.clr1 !== null
                ? netmessages_1.CMsgRGBA.fromPartial(object.clr1)
                : undefined;
        message.clr2 =
            object.clr2 !== undefined && object.clr2 !== null
                ? netmessages_1.CMsgRGBA.fromPartial(object.clr2)
                : undefined;
        message.effect = (_b = object.effect) !== null && _b !== void 0 ? _b : 0;
        message.fadeInTime = (_c = object.fadeInTime) !== null && _c !== void 0 ? _c : 0;
        message.fadeOutTime = (_d = object.fadeOutTime) !== null && _d !== void 0 ? _d : 0;
        message.holdTime = (_e = object.holdTime) !== null && _e !== void 0 ? _e : 0;
        message.fxTime = (_f = object.fxTime) !== null && _f !== void 0 ? _f : 0;
        message.text = (_g = object.text) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseCCSUsrMsgShake() {
    return { command: 0, localAmplitude: 0, frequency: 0, duration: 0 };
}
exports.CCSUsrMsgShake = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgShake();
        message.command = (_a = object.command) !== null && _a !== void 0 ? _a : 0;
        message.localAmplitude = (_b = object.localAmplitude) !== null && _b !== void 0 ? _b : 0;
        message.frequency = (_c = object.frequency) !== null && _c !== void 0 ? _c : 0;
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgFade() {
    return { duration: 0, holdTime: 0, flags: 0, clr: undefined };
}
exports.CCSUsrMsgFade = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            netmessages_1.CMsgRGBA.encode(message.clr, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.clr = netmessages_1.CMsgRGBA.decode(reader, reader.uint32());
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
        const message = createBaseCCSUsrMsgFade();
        message.duration = (_a = object.duration) !== null && _a !== void 0 ? _a : 0;
        message.holdTime = (_b = object.holdTime) !== null && _b !== void 0 ? _b : 0;
        message.flags = (_c = object.flags) !== null && _c !== void 0 ? _c : 0;
        message.clr =
            object.clr !== undefined && object.clr !== null
                ? netmessages_1.CMsgRGBA.fromPartial(object.clr)
                : undefined;
        return message;
    }
};
function createBaseCCSUsrMsgRumble() {
    return { index: 0, data: 0, flags: 0 };
}
exports.CCSUsrMsgRumble = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgRumble();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : 0;
        message.flags = (_c = object.flags) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgCloseCaption() {
    return { hash: 0, duration: 0, fromPlayer: false, cctoken: "" };
}
exports.CCSUsrMsgCloseCaption = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgCloseCaption();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : 0;
        message.duration = (_b = object.duration) !== null && _b !== void 0 ? _b : 0;
        message.fromPlayer = (_c = object.fromPlayer) !== null && _c !== void 0 ? _c : false;
        message.cctoken = (_d = object.cctoken) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCCSUsrMsgCloseCaptionDirect() {
    return { hash: 0, duration: 0, fromPlayer: false };
}
exports.CCSUsrMsgCloseCaptionDirect = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgCloseCaptionDirect();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : 0;
        message.duration = (_b = object.duration) !== null && _b !== void 0 ? _b : 0;
        message.fromPlayer = (_c = object.fromPlayer) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseCCSUsrMsgSendAudio() {
    return { radioSound: "" };
}
exports.CCSUsrMsgSendAudio = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.radioSound !== "") {
            writer.uint32(10).string(message.radioSound);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgSendAudio();
        message.radioSound = (_a = object.radioSound) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgRawAudio() {
    return { pitch: 0, entidx: 0, duration: 0, voiceFilename: "" };
}
exports.CCSUsrMsgRawAudio = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgRawAudio();
        message.pitch = (_a = object.pitch) !== null && _a !== void 0 ? _a : 0;
        message.entidx = (_b = object.entidx) !== null && _b !== void 0 ? _b : 0;
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : 0;
        message.voiceFilename = (_d = object.voiceFilename) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCCSUsrMsgVoiceMask() {
    return { playerMasks: [], playerModEnable: false };
}
exports.CCSUsrMsgVoiceMask = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.playerMasks) {
            exports.CCSUsrMsgVoiceMask_PlayerMask.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.playerModEnable === true) {
            writer.uint32(16).bool(message.playerModEnable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgVoiceMask();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgVoiceMask();
        message.playerMasks =
            ((_a = object.playerMasks) === null || _a === void 0 ? void 0 : _a.map(e => exports.CCSUsrMsgVoiceMask_PlayerMask.fromPartial(e))) || [];
        message.playerModEnable = (_b = object.playerModEnable) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseCCSUsrMsgVoiceMask_PlayerMask() {
    return { gameRulesMask: 0, banMasks: 0 };
}
exports.CCSUsrMsgVoiceMask_PlayerMask = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gameRulesMask !== 0) {
            writer.uint32(8).int32(message.gameRulesMask);
        }
        if (message.banMasks !== 0) {
            writer.uint32(16).int32(message.banMasks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgVoiceMask_PlayerMask();
        message.gameRulesMask = (_a = object.gameRulesMask) !== null && _a !== void 0 ? _a : 0;
        message.banMasks = (_b = object.banMasks) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgDamage() {
    return { amount: 0, inflictorWorldPos: undefined, victimEntindex: 0 };
}
exports.CCSUsrMsgDamage = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.amount !== 0) {
            writer.uint32(8).int32(message.amount);
        }
        if (message.inflictorWorldPos !== undefined) {
            netmessages_1.CMsgVector.encode(message.inflictorWorldPos, writer.uint32(18).fork()).ldelim();
        }
        if (message.victimEntindex !== 0) {
            writer.uint32(24).int32(message.victimEntindex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgDamage();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgDamage();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : 0;
        message.inflictorWorldPos =
            object.inflictorWorldPos !== undefined &&
                object.inflictorWorldPos !== null
                ? netmessages_1.CMsgVector.fromPartial(object.inflictorWorldPos)
                : undefined;
        message.victimEntindex = (_b = object.victimEntindex) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgRadioText() {
    return { msgDst: 0, client: 0, msgName: "", params: [] };
}
exports.CCSUsrMsgRadioText = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgRadioText();
        message.msgDst = (_a = object.msgDst) !== null && _a !== void 0 ? _a : 0;
        message.client = (_b = object.client) !== null && _b !== void 0 ? _b : 0;
        message.msgName = (_c = object.msgName) !== null && _c !== void 0 ? _c : "";
        message.params = ((_d = object.params) === null || _d === void 0 ? void 0 : _d.map(e => e)) || [];
        return message;
    }
};
function createBaseCCSUsrMsgHintText() {
    return { text: "" };
}
exports.CCSUsrMsgHintText = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgHintText();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgKeyHintText() {
    return { hints: [] };
}
exports.CCSUsrMsgKeyHintText = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.hints) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgKeyHintText();
        message.hints = ((_a = object.hints) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCCSUsrMsgProcessSpottedEntityUpdate() {
    return { newUpdate: false, entityUpdates: [] };
}
exports.CCSUsrMsgProcessSpottedEntityUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.newUpdate === true) {
            writer.uint32(8).bool(message.newUpdate);
        }
        for (const v of message.entityUpdates) {
            exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgProcessSpottedEntityUpdate();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgProcessSpottedEntityUpdate();
        message.newUpdate = (_a = object.newUpdate) !== null && _a !== void 0 ? _a : false;
        message.entityUpdates =
            ((_b = object.entityUpdates) === null || _b === void 0 ? void 0 : _b.map(e => exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate() {
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
exports.CCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate();
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCCSUsrMsgProcessSpottedEntityUpdate_SpottedEntityUpdate();
        message.entityIdx = (_a = object.entityIdx) !== null && _a !== void 0 ? _a : 0;
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : 0;
        message.originX = (_c = object.originX) !== null && _c !== void 0 ? _c : 0;
        message.originY = (_d = object.originY) !== null && _d !== void 0 ? _d : 0;
        message.originZ = (_e = object.originZ) !== null && _e !== void 0 ? _e : 0;
        message.angleY = (_f = object.angleY) !== null && _f !== void 0 ? _f : 0;
        message.defuser = (_g = object.defuser) !== null && _g !== void 0 ? _g : false;
        message.playerHasDefuser = (_h = object.playerHasDefuser) !== null && _h !== void 0 ? _h : false;
        message.playerHasC4 = (_j = object.playerHasC4) !== null && _j !== void 0 ? _j : false;
        return message;
    }
};
function createBaseCCSUsrMsgSendPlayerItemDrops() {
    return { entityUpdates: [] };
}
exports.CCSUsrMsgSendPlayerItemDrops = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entityUpdates) {
            cstrike15_gcmessages_1.CEconItemPreviewDataBlock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgSendPlayerItemDrops();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgSendPlayerItemDrops();
        message.entityUpdates =
            ((_a = object.entityUpdates) === null || _a === void 0 ? void 0 : _a.map(e => cstrike15_gcmessages_1.CEconItemPreviewDataBlock.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCCSUsrMsgSendPlayerItemFound() {
    return { iteminfo: undefined, entindex: 0 };
}
exports.CCSUsrMsgSendPlayerItemFound = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.iteminfo !== undefined) {
            cstrike15_gcmessages_1.CEconItemPreviewDataBlock.encode(message.iteminfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.entindex !== 0) {
            writer.uint32(16).int32(message.entindex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgSendPlayerItemFound();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgSendPlayerItemFound();
        message.iteminfo =
            object.iteminfo !== undefined && object.iteminfo !== null
                ? cstrike15_gcmessages_1.CEconItemPreviewDataBlock.fromPartial(object.iteminfo)
                : undefined;
        message.entindex = (_a = object.entindex) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgReloadEffect() {
    return { entidx: 0, actanim: 0, originX: 0, originY: 0, originZ: 0 };
}
exports.CCSUsrMsgReloadEffect = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCSUsrMsgReloadEffect();
        message.entidx = (_a = object.entidx) !== null && _a !== void 0 ? _a : 0;
        message.actanim = (_b = object.actanim) !== null && _b !== void 0 ? _b : 0;
        message.originX = (_c = object.originX) !== null && _c !== void 0 ? _c : 0;
        message.originY = (_d = object.originY) !== null && _d !== void 0 ? _d : 0;
        message.originZ = (_e = object.originZ) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCCSUsrMsgWeaponSound() {
    return {
        entidx: 0,
        originX: 0,
        originY: 0,
        originZ: 0,
        sound: "",
        timestamp: 0
    };
}
exports.CCSUsrMsgWeaponSound = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCCSUsrMsgWeaponSound();
        message.entidx = (_a = object.entidx) !== null && _a !== void 0 ? _a : 0;
        message.originX = (_b = object.originX) !== null && _b !== void 0 ? _b : 0;
        message.originY = (_c = object.originY) !== null && _c !== void 0 ? _c : 0;
        message.originZ = (_d = object.originZ) !== null && _d !== void 0 ? _d : 0;
        message.sound = (_e = object.sound) !== null && _e !== void 0 ? _e : "";
        message.timestamp = (_f = object.timestamp) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCCSUsrMsgUpdateScreenHealthBar() {
    return { entidx: 0, healthratioOld: 0, healthratioNew: 0, style: 0 };
}
exports.CCSUsrMsgUpdateScreenHealthBar = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgUpdateScreenHealthBar();
        message.entidx = (_a = object.entidx) !== null && _a !== void 0 ? _a : 0;
        message.healthratioOld = (_b = object.healthratioOld) !== null && _b !== void 0 ? _b : 0;
        message.healthratioNew = (_c = object.healthratioNew) !== null && _c !== void 0 ? _c : 0;
        message.style = (_d = object.style) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgEntityOutlineHighlight() {
    return { entidx: 0, removehighlight: false };
}
exports.CCSUsrMsgEntityOutlineHighlight = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.entidx !== 0) {
            writer.uint32(8).int32(message.entidx);
        }
        if (message.removehighlight === true) {
            writer.uint32(16).bool(message.removehighlight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgEntityOutlineHighlight();
        message.entidx = (_a = object.entidx) !== null && _a !== void 0 ? _a : 0;
        message.removehighlight = (_b = object.removehighlight) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseCCSUsrMsgAdjustMoney() {
    return { amount: 0 };
}
exports.CCSUsrMsgAdjustMoney = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.amount !== 0) {
            writer.uint32(8).int32(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgAdjustMoney();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgReportHit() {
    return { posX: 0, posY: 0, timestamp: 0, posZ: 0 };
}
exports.CCSUsrMsgReportHit = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgReportHit();
        message.posX = (_a = object.posX) !== null && _a !== void 0 ? _a : 0;
        message.posY = (_b = object.posY) !== null && _b !== void 0 ? _b : 0;
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : 0;
        message.posZ = (_d = object.posZ) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgKillCam() {
    return { obsMode: 0, firstTarget: 0, secondTarget: 0 };
}
exports.CCSUsrMsgKillCam = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgKillCam();
        message.obsMode = (_a = object.obsMode) !== null && _a !== void 0 ? _a : 0;
        message.firstTarget = (_b = object.firstTarget) !== null && _b !== void 0 ? _b : 0;
        message.secondTarget = (_c = object.secondTarget) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgDesiredTimescale() {
    return {
        desiredTimescale: 0,
        durationRealtimeSec: 0,
        interpolatorType: 0,
        startBlendTime: 0
    };
}
exports.CCSUsrMsgDesiredTimescale = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgDesiredTimescale();
        message.desiredTimescale = (_a = object.desiredTimescale) !== null && _a !== void 0 ? _a : 0;
        message.durationRealtimeSec = (_b = object.durationRealtimeSec) !== null && _b !== void 0 ? _b : 0;
        message.interpolatorType = (_c = object.interpolatorType) !== null && _c !== void 0 ? _c : 0;
        message.startBlendTime = (_d = object.startBlendTime) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgCurrentTimescale() {
    return { curTimescale: 0 };
}
exports.CCSUsrMsgCurrentTimescale = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.curTimescale !== 0) {
            writer.uint32(13).float(message.curTimescale);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgCurrentTimescale();
        message.curTimescale = (_a = object.curTimescale) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgAchievementEvent() {
    return { achievement: 0, count: 0, userId: 0 };
}
exports.CCSUsrMsgAchievementEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgAchievementEvent();
        message.achievement = (_a = object.achievement) !== null && _a !== void 0 ? _a : 0;
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : 0;
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgMatchEndConditions() {
    return { fraglimit: 0, mpMaxrounds: 0, mpWinlimit: 0, mpTimelimit: 0 };
}
exports.CCSUsrMsgMatchEndConditions = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgMatchEndConditions();
        message.fraglimit = (_a = object.fraglimit) !== null && _a !== void 0 ? _a : 0;
        message.mpMaxrounds = (_b = object.mpMaxrounds) !== null && _b !== void 0 ? _b : 0;
        message.mpWinlimit = (_c = object.mpWinlimit) !== null && _c !== void 0 ? _c : 0;
        message.mpTimelimit = (_d = object.mpTimelimit) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgPlayerStatsUpdate() {
    return { version: 0, stats: [], userId: 0, crc: 0 };
}
exports.CCSUsrMsgPlayerStatsUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.version !== 0) {
            writer.uint32(8).int32(message.version);
        }
        for (const v of message.stats) {
            exports.CCSUsrMsgPlayerStatsUpdate_Stat.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.userId !== 0) {
            writer.uint32(40).int32(message.userId);
        }
        if (message.crc !== 0) {
            writer.uint32(48).int32(message.crc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgPlayerStatsUpdate();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgPlayerStatsUpdate();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : 0;
        message.stats =
            ((_b = object.stats) === null || _b === void 0 ? void 0 : _b.map(e => exports.CCSUsrMsgPlayerStatsUpdate_Stat.fromPartial(e))) ||
                [];
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : 0;
        message.crc = (_d = object.crc) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgPlayerStatsUpdate_Stat() {
    return { idx: 0, delta: 0 };
}
exports.CCSUsrMsgPlayerStatsUpdate_Stat = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.idx !== 0) {
            writer.uint32(8).int32(message.idx);
        }
        if (message.delta !== 0) {
            writer.uint32(16).int32(message.delta);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgPlayerStatsUpdate_Stat();
        message.idx = (_a = object.idx) !== null && _a !== void 0 ? _a : 0;
        message.delta = (_b = object.delta) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgDisplayInventory() {
    return { display: false, userId: 0 };
}
exports.CCSUsrMsgDisplayInventory = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.display === true) {
            writer.uint32(8).bool(message.display);
        }
        if (message.userId !== 0) {
            writer.uint32(16).int32(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgDisplayInventory();
        message.display = (_a = object.display) !== null && _a !== void 0 ? _a : false;
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgQuestProgress() {
    return { questId: 0, normalPoints: 0, bonusPoints: 0, isEventQuest: false };
}
exports.CCSUsrMsgQuestProgress = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgQuestProgress();
        message.questId = (_a = object.questId) !== null && _a !== void 0 ? _a : 0;
        message.normalPoints = (_b = object.normalPoints) !== null && _b !== void 0 ? _b : 0;
        message.bonusPoints = (_c = object.bonusPoints) !== null && _c !== void 0 ? _c : 0;
        message.isEventQuest = (_d = object.isEventQuest) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseCCSUsrMsgScoreLeaderboardData() {
    return { data: undefined };
}
exports.CCSUsrMsgScoreLeaderboardData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined) {
            cstrike15_gcmessages_1.ScoreLeaderboardData.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgScoreLeaderboardData();
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
    },
    fromPartial(object) {
        const message = createBaseCCSUsrMsgScoreLeaderboardData();
        message.data =
            object.data !== undefined && object.data !== null
                ? cstrike15_gcmessages_1.ScoreLeaderboardData.fromPartial(object.data)
                : undefined;
        return message;
    }
};
function createBaseCCSUsrMsgPlayerDecalDigitalSignature() {
    return { data: undefined };
}
exports.CCSUsrMsgPlayerDecalDigitalSignature = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined) {
            cstrike15_gcmessages_1.PlayerDecalDigitalSignature.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgPlayerDecalDigitalSignature();
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
    },
    fromPartial(object) {
        const message = createBaseCCSUsrMsgPlayerDecalDigitalSignature();
        message.data =
            object.data !== undefined && object.data !== null
                ? cstrike15_gcmessages_1.PlayerDecalDigitalSignature.fromPartial(object.data)
                : undefined;
        return message;
    }
};
function createBaseCCSUsrMsgXRankGet() {
    return { modeIdx: 0, controller: 0 };
}
exports.CCSUsrMsgXRankGet = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.modeIdx !== 0) {
            writer.uint32(8).int32(message.modeIdx);
        }
        if (message.controller !== 0) {
            writer.uint32(16).int32(message.controller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgXRankGet();
        message.modeIdx = (_a = object.modeIdx) !== null && _a !== void 0 ? _a : 0;
        message.controller = (_b = object.controller) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgXRankUpd() {
    return { modeIdx: 0, controller: 0, ranking: 0 };
}
exports.CCSUsrMsgXRankUpd = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgXRankUpd();
        message.modeIdx = (_a = object.modeIdx) !== null && _a !== void 0 ? _a : 0;
        message.controller = (_b = object.controller) !== null && _b !== void 0 ? _b : 0;
        message.ranking = (_c = object.ranking) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgCallVoteFailed() {
    return { reason: 0, time: 0 };
}
exports.CCSUsrMsgCallVoteFailed = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.reason !== 0) {
            writer.uint32(8).int32(message.reason);
        }
        if (message.time !== 0) {
            writer.uint32(16).int32(message.time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgCallVoteFailed();
        message.reason = (_a = object.reason) !== null && _a !== void 0 ? _a : 0;
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgVoteStart() {
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
exports.CCSUsrMsgVoteStart = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseCCSUsrMsgVoteStart();
        message.team = (_a = object.team) !== null && _a !== void 0 ? _a : 0;
        message.entIdx = (_b = object.entIdx) !== null && _b !== void 0 ? _b : 0;
        message.voteType = (_c = object.voteType) !== null && _c !== void 0 ? _c : 0;
        message.dispStr = (_d = object.dispStr) !== null && _d !== void 0 ? _d : "";
        message.detailsStr = (_e = object.detailsStr) !== null && _e !== void 0 ? _e : "";
        message.otherTeamStr = (_f = object.otherTeamStr) !== null && _f !== void 0 ? _f : "";
        message.isYesNoVote = (_g = object.isYesNoVote) !== null && _g !== void 0 ? _g : false;
        message.entidxTarget = (_h = object.entidxTarget) !== null && _h !== void 0 ? _h : 0;
        return message;
    }
};
function createBaseCCSUsrMsgVotePass() {
    return { team: 0, voteType: 0, dispStr: "", detailsStr: "" };
}
exports.CCSUsrMsgVotePass = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgVotePass();
        message.team = (_a = object.team) !== null && _a !== void 0 ? _a : 0;
        message.voteType = (_b = object.voteType) !== null && _b !== void 0 ? _b : 0;
        message.dispStr = (_c = object.dispStr) !== null && _c !== void 0 ? _c : "";
        message.detailsStr = (_d = object.detailsStr) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCCSUsrMsgVoteFailed() {
    return { team: 0, reason: 0 };
}
exports.CCSUsrMsgVoteFailed = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.team !== 0) {
            writer.uint32(8).int32(message.team);
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgVoteFailed();
        message.team = (_a = object.team) !== null && _a !== void 0 ? _a : 0;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgVoteSetup() {
    return { potentialIssues: [] };
}
exports.CCSUsrMsgVoteSetup = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.potentialIssues) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgVoteSetup();
        message.potentialIssues = ((_a = object.potentialIssues) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCCSUsrMsgSendLastKillerDamageToClient() {
    return { numHitsGiven: 0, damageGiven: 0, numHitsTaken: 0, damageTaken: 0 };
}
exports.CCSUsrMsgSendLastKillerDamageToClient = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgSendLastKillerDamageToClient();
        message.numHitsGiven = (_a = object.numHitsGiven) !== null && _a !== void 0 ? _a : 0;
        message.damageGiven = (_b = object.damageGiven) !== null && _b !== void 0 ? _b : 0;
        message.numHitsTaken = (_c = object.numHitsTaken) !== null && _c !== void 0 ? _c : 0;
        message.damageTaken = (_d = object.damageTaken) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgServerRankUpdate() {
    return { rankUpdate: [] };
}
exports.CCSUsrMsgServerRankUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.rankUpdate) {
            exports.CCSUsrMsgServerRankUpdate_RankUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgServerRankUpdate();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgServerRankUpdate();
        message.rankUpdate =
            ((_a = object.rankUpdate) === null || _a === void 0 ? void 0 : _a.map(e => exports.CCSUsrMsgServerRankUpdate_RankUpdate.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCCSUsrMsgServerRankUpdate_RankUpdate() {
    return {
        accountId: 0,
        rankOld: 0,
        rankNew: 0,
        numWins: 0,
        rankChange: 0,
        rankTypeId: 0
    };
}
exports.CCSUsrMsgServerRankUpdate_RankUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCCSUsrMsgServerRankUpdate_RankUpdate();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : 0;
        message.rankOld = (_b = object.rankOld) !== null && _b !== void 0 ? _b : 0;
        message.rankNew = (_c = object.rankNew) !== null && _c !== void 0 ? _c : 0;
        message.numWins = (_d = object.numWins) !== null && _d !== void 0 ? _d : 0;
        message.rankChange = (_e = object.rankChange) !== null && _e !== void 0 ? _e : 0;
        message.rankTypeId = (_f = object.rankTypeId) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseCCSUsrMsgXpUpdate() {
    return { data: undefined };
}
exports.CCSUsrMsgXpUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined) {
            cstrike15_gcmessages_1.CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgXpUpdate();
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
    },
    fromPartial(object) {
        const message = createBaseCCSUsrMsgXpUpdate();
        message.data =
            object.data !== undefined && object.data !== null
                ? cstrike15_gcmessages_1.CMsgGCCstrike15V2GC2ServerNotifyXPRewarded.fromPartial(object.data)
                : undefined;
        return message;
    }
};
function createBaseCCSUsrMsgItemPickup() {
    return { item: "" };
}
exports.CCSUsrMsgItemPickup = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.item !== "") {
            writer.uint32(10).string(message.item);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgItemPickup();
        message.item = (_a = object.item) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgShowMenu() {
    return { bitsValidSlots: 0, displayTime: 0, menuString: "" };
}
exports.CCSUsrMsgShowMenu = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgShowMenu();
        message.bitsValidSlots = (_a = object.bitsValidSlots) !== null && _a !== void 0 ? _a : 0;
        message.displayTime = (_b = object.displayTime) !== null && _b !== void 0 ? _b : 0;
        message.menuString = (_c = object.menuString) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCCSUsrMsgBarTime() {
    return { time: "" };
}
exports.CCSUsrMsgBarTime = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.time !== "") {
            writer.uint32(10).string(message.time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgBarTime();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgAmmoDenied() {
    return { ammoIdx: 0 };
}
exports.CCSUsrMsgAmmoDenied = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.ammoIdx !== 0) {
            writer.uint32(8).int32(message.ammoIdx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgAmmoDenied();
        message.ammoIdx = (_a = object.ammoIdx) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgMarkAchievement() {
    return { achievement: "" };
}
exports.CCSUsrMsgMarkAchievement = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.achievement !== "") {
            writer.uint32(10).string(message.achievement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgMarkAchievement();
        message.achievement = (_a = object.achievement) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgMatchStatsUpdate() {
    return { update: "" };
}
exports.CCSUsrMsgMatchStatsUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.update !== "") {
            writer.uint32(10).string(message.update);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgMatchStatsUpdate();
        message.update = (_a = object.update) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCCSUsrMsgItemDrop() {
    return { itemid: Long.ZERO, death: false };
}
exports.CCSUsrMsgItemDrop = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.itemid.isZero()) {
            writer.uint32(8).int64(message.itemid);
        }
        if (message.death === true) {
            writer.uint32(16).bool(message.death);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgItemDrop();
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgItemDrop();
        message.itemid =
            object.itemid !== undefined && object.itemid !== null
                ? Long.fromValue(object.itemid)
                : Long.ZERO;
        message.death = (_a = object.death) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseCCSUsrMsgGlowPropTurnOff() {
    return { entidx: 0 };
}
exports.CCSUsrMsgGlowPropTurnOff = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.entidx !== 0) {
            writer.uint32(8).int32(message.entidx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgGlowPropTurnOff();
        message.entidx = (_a = object.entidx) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgRoundBackupFilenames() {
    return { count: 0, index: 0, filename: "", nicename: "" };
}
exports.CCSUsrMsgRoundBackupFilenames = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgRoundBackupFilenames();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : 0;
        message.filename = (_c = object.filename) !== null && _c !== void 0 ? _c : "";
        message.nicename = (_d = object.nicename) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCCSUsrMsgSSUI() {
    return { show: false, startTime: 0, endTime: 0 };
}
exports.CCSUsrMsgSSUI = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgSSUI();
        message.show = (_a = object.show) !== null && _a !== void 0 ? _a : false;
        message.startTime = (_b = object.startTime) !== null && _b !== void 0 ? _b : 0;
        message.endTime = (_c = object.endTime) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgSurvivalStats() {
    return { xuid: Long.UZERO, facts: [], users: [], damages: [], ticknumber: 0 };
}
exports.CCSUsrMsgSurvivalStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.xuid.isZero()) {
            writer.uint32(8).uint64(message.xuid);
        }
        for (const v of message.facts) {
            exports.CCSUsrMsgSurvivalStats_Fact.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.users) {
            exports.CCSUsrMsgSurvivalStats_Placement.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.damages) {
            exports.CCSUsrMsgSurvivalStats_Damage.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.ticknumber !== 0) {
            writer.uint32(32).int32(message.ticknumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgSurvivalStats();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgSurvivalStats();
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.facts =
            ((_a = object.facts) === null || _a === void 0 ? void 0 : _a.map(e => exports.CCSUsrMsgSurvivalStats_Fact.fromPartial(e))) || [];
        message.users =
            ((_b = object.users) === null || _b === void 0 ? void 0 : _b.map(e => exports.CCSUsrMsgSurvivalStats_Placement.fromPartial(e))) ||
                [];
        message.damages =
            ((_c = object.damages) === null || _c === void 0 ? void 0 : _c.map(e => exports.CCSUsrMsgSurvivalStats_Damage.fromPartial(e))) ||
                [];
        message.ticknumber = (_d = object.ticknumber) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgSurvivalStats_Fact() {
    return { type: 0, display: 0, value: 0, interestingness: 0 };
}
exports.CCSUsrMsgSurvivalStats_Fact = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgSurvivalStats_Fact();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.display = (_b = object.display) !== null && _b !== void 0 ? _b : 0;
        message.value = (_c = object.value) !== null && _c !== void 0 ? _c : 0;
        message.interestingness = (_d = object.interestingness) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgSurvivalStats_Placement() {
    return { xuid: Long.UZERO, teamnumber: 0, placement: 0 };
}
exports.CCSUsrMsgSurvivalStats_Placement = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgSurvivalStats_Placement();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgSurvivalStats_Placement();
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.teamnumber = (_a = object.teamnumber) !== null && _a !== void 0 ? _a : 0;
        message.placement = (_b = object.placement) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgSurvivalStats_Damage() {
    return { xuid: Long.UZERO, to: 0, toHits: 0, from: 0, fromHits: 0 };
}
exports.CCSUsrMsgSurvivalStats_Damage = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgSurvivalStats_Damage();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCCSUsrMsgSurvivalStats_Damage();
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.to = (_a = object.to) !== null && _a !== void 0 ? _a : 0;
        message.toHits = (_b = object.toHits) !== null && _b !== void 0 ? _b : 0;
        message.from = (_c = object.from) !== null && _c !== void 0 ? _c : 0;
        message.fromHits = (_d = object.fromHits) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCCSUsrMsgEndOfMatchAllPlayersData() {
    return { allplayerdata: [], scene: 0 };
}
exports.CCSUsrMsgEndOfMatchAllPlayersData = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.allplayerdata) {
            exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.scene !== 0) {
            writer.uint32(16).int32(message.scene);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData();
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
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData();
        message.allplayerdata =
            ((_a = object.allplayerdata) === null || _a === void 0 ? void 0 : _a.map(e => exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData.fromPartial(e))) || [];
        message.scene = (_b = object.scene) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCCSUsrMsgEndOfMatchAllPlayersData_Accolade() {
    return { eaccolade: 0, value: 0, position: 0 };
}
exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_Accolade();
        message.eaccolade = (_a = object.eaccolade) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        message.position = (_c = object.position) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData() {
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
exports.CCSUsrMsgEndOfMatchAllPlayersData_PlayerData = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade.encode(message.nomination, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.items) {
            cstrike15_gcmessages_1.CEconItemPreviewDataBlock.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.playercolor !== 0) {
            writer.uint32(56).int32(message.playercolor);
        }
        if (message.isbot === true) {
            writer.uint32(64).bool(message.isbot);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData();
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
                    message.nomination =
                        exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade.decode(reader, reader.uint32());
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCCSUsrMsgEndOfMatchAllPlayersData_PlayerData();
        message.entindex = (_a = object.entindex) !== null && _a !== void 0 ? _a : 0;
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.teamnumber = (_c = object.teamnumber) !== null && _c !== void 0 ? _c : 0;
        message.nomination =
            object.nomination !== undefined && object.nomination !== null
                ? exports.CCSUsrMsgEndOfMatchAllPlayersData_Accolade.fromPartial(object.nomination)
                : undefined;
        message.items =
            ((_d = object.items) === null || _d === void 0 ? void 0 : _d.map(e => cstrike15_gcmessages_1.CEconItemPreviewDataBlock.fromPartial(e))) || [];
        message.playercolor = (_e = object.playercolor) !== null && _e !== void 0 ? _e : 0;
        message.isbot = (_f = object.isbot) !== null && _f !== void 0 ? _f : false;
        return message;
    }
};
function createBaseCCSUsrMsgRoundImpactScoreData() {
    return { initConditions: undefined, allRisEventData: [] };
}
exports.CCSUsrMsgRoundImpactScoreData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.initConditions !== undefined) {
            exports.CCSUsrMsgRoundImpactScoreData_InitialConditions.encode(message.initConditions, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allRisEventData) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgRoundImpactScoreData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initConditions =
                        exports.CCSUsrMsgRoundImpactScoreData_InitialConditions.decode(reader, reader.uint32());
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
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgRoundImpactScoreData();
        message.initConditions =
            object.initConditions !== undefined && object.initConditions !== null
                ? exports.CCSUsrMsgRoundImpactScoreData_InitialConditions.fromPartial(object.initConditions)
                : undefined;
        message.allRisEventData =
            ((_a = object.allRisEventData) === null || _a === void 0 ? void 0 : _a.map(e => exports.CCSUsrMsgRoundImpactScoreData_RisEvent.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent() {
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
exports.CCSUsrMsgRoundImpactScoreData_RisEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.encode(message.victimData, writer.uint32(42).fork()).ldelim();
        }
        if (message.objectiveData !== undefined) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.encode(message.objectiveData, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.allDamageData) {
            exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                        exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.objectiveData =
                        exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.decode(reader, reader.uint32());
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : 0;
        message.terroristOdds = (_b = object.terroristOdds) !== null && _b !== void 0 ? _b : 0;
        message.ctAlive = (_c = object.ctAlive) !== null && _c !== void 0 ? _c : 0;
        message.tAlive = (_d = object.tAlive) !== null && _d !== void 0 ? _d : 0;
        message.victimData =
            object.victimData !== undefined && object.victimData !== null
                ? exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim.fromPartial(object.victimData)
                : undefined;
        message.objectiveData =
            object.objectiveData !== undefined && object.objectiveData !== null
                ? exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective.fromPartial(object.objectiveData)
                : undefined;
        message.allDamageData =
            ((_e = object.allDamageData) === null || _e === void 0 ? void 0 : _e.map(e => exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim() {
    return {
        teamNumber: 0,
        entindex: 0,
        xuid: Long.UZERO,
        color: 0,
        isBot: false,
        isDead: false
    };
}
exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Victim = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Victim();
        message.teamNumber = (_a = object.teamNumber) !== null && _a !== void 0 ? _a : 0;
        message.entindex = (_b = object.entindex) !== null && _b !== void 0 ? _b : 0;
        message.xuid =
            object.xuid !== undefined && object.xuid !== null
                ? Long.fromValue(object.xuid)
                : Long.UZERO;
        message.color = (_c = object.color) !== null && _c !== void 0 ? _c : 0;
        message.isBot = (_d = object.isBot) !== null && _d !== void 0 ? _d : false;
        message.isDead = (_e = object.isDead) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective() {
    return { type: 0 };
}
exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Objective = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective();
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Objective();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage() {
    return {
        targetEntindex: 0,
        targetXuid: Long.UZERO,
        healthRemoved: 0,
        numHits: 0,
        returnHealthRemoved: 0,
        numReturnHits: 0
    };
}
exports.CCSUsrMsgRoundImpactScoreData_RisEvent_Damage = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_RisEvent_Damage();
        message.targetEntindex = (_a = object.targetEntindex) !== null && _a !== void 0 ? _a : 0;
        message.targetXuid =
            object.targetXuid !== undefined && object.targetXuid !== null
                ? Long.fromValue(object.targetXuid)
                : Long.UZERO;
        message.healthRemoved = (_b = object.healthRemoved) !== null && _b !== void 0 ? _b : 0;
        message.numHits = (_c = object.numHits) !== null && _c !== void 0 ? _c : 0;
        message.returnHealthRemoved = (_d = object.returnHealthRemoved) !== null && _d !== void 0 ? _d : 0;
        message.numReturnHits = (_e = object.numReturnHits) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCCSUsrMsgRoundImpactScoreData_InitialConditions() {
    return { ctEquipValue: 0, tEquipValue: 0, terroristOdds: 0 };
}
exports.CCSUsrMsgRoundImpactScoreData_InitialConditions = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCCSUsrMsgRoundImpactScoreData_InitialConditions();
        message.ctEquipValue = (_a = object.ctEquipValue) !== null && _a !== void 0 ? _a : 0;
        message.tEquipValue = (_b = object.tEquipValue) !== null && _b !== void 0 ? _b : 0;
        message.terroristOdds = (_c = object.terroristOdds) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCCSUsrMsgCurrentRoundOdds() {
    return { odds: 0 };
}
exports.CCSUsrMsgCurrentRoundOdds = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.odds !== 0) {
            writer.uint32(8).int32(message.odds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgCurrentRoundOdds();
        message.odds = (_a = object.odds) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgDeepStats() {
    return { stats: undefined };
}
exports.CCSUsrMsgDeepStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.stats !== undefined) {
            cstrike15_gcmessages_1.CMsgGCCStrike15ClientDeepStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCSUsrMsgDeepStats();
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
    },
    fromPartial(object) {
        const message = createBaseCCSUsrMsgDeepStats();
        message.stats =
            object.stats !== undefined && object.stats !== null
                ? cstrike15_gcmessages_1.CMsgGCCStrike15ClientDeepStats.fromPartial(object.stats)
                : undefined;
        return message;
    }
};
function createBaseCCSUsrMsgResetHud() {
    return { reset: false };
}
exports.CCSUsrMsgResetHud = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.reset === true) {
            writer.uint32(8).bool(message.reset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgResetHud();
        message.reset = (_a = object.reset) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseCCSUsrMsgGameTitle() {
    return { dummy: 0 };
}
exports.CCSUsrMsgGameTitle = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgGameTitle();
        message.dummy = (_a = object.dummy) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgRequestState() {
    return { dummy: 0 };
}
exports.CCSUsrMsgRequestState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgRequestState();
        message.dummy = (_a = object.dummy) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgStopSpectatorMode() {
    return { dummy: 0 };
}
exports.CCSUsrMsgStopSpectatorMode = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgStopSpectatorMode();
        message.dummy = (_a = object.dummy) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgDisconnectToLobby() {
    return { dummy: 0 };
}
exports.CCSUsrMsgDisconnectToLobby = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgDisconnectToLobby();
        message.dummy = (_a = object.dummy) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgWarmupHasEnded() {
    return { dummy: 0 };
}
exports.CCSUsrMsgWarmupHasEnded = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgWarmupHasEnded();
        message.dummy = (_a = object.dummy) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgClientInfo() {
    return { dummy: 0 };
}
exports.CCSUsrMsgClientInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a;
        const message = createBaseCCSUsrMsgClientInfo();
        message.dummy = (_a = object.dummy) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCCSUsrMsgServerRankRevealAll() {
    return { secondsTillShutdown: 0, reservation: undefined };
}
exports.CCSUsrMsgServerRankRevealAll = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.secondsTillShutdown !== 0) {
            writer.uint32(8).int32(message.secondsTillShutdown);
        }
        if (message.reservation !== undefined) {
            cstrike15_gcmessages_1.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.encode(message.reservation, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                        cstrike15_gcmessages_1.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.decode(reader, reader.uint32());
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
        const message = createBaseCCSUsrMsgServerRankRevealAll();
        message.secondsTillShutdown = (_a = object.secondsTillShutdown) !== null && _a !== void 0 ? _a : 0;
        message.reservation =
            object.reservation !== undefined && object.reservation !== null
                ? cstrike15_gcmessages_1.CMsgGCCStrike15V2MatchmakingGC2ServerReserve.fromPartial(object.reservation)
                : undefined;
        return message;
    }
};
function createBaseCCSUsrMsgUtilMsg() {
    return { utilAction: "", util1: 0, util2: 0, util3: 0, util4: 0, util5: 0 };
}
exports.CCSUsrMsgUtilMsg = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCCSUsrMsgUtilMsg();
        message.utilAction = (_a = object.utilAction) !== null && _a !== void 0 ? _a : "";
        message.util1 = (_b = object.util1) !== null && _b !== void 0 ? _b : 0;
        message.util2 = (_c = object.util2) !== null && _c !== void 0 ? _c : 0;
        message.util3 = (_d = object.util3) !== null && _d !== void 0 ? _d : 0;
        message.util4 = (_e = object.util4) !== null && _e !== void 0 ? _e : 0;
        message.util5 = (_f = object.util5) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=cstrike15_usermessages.js.map