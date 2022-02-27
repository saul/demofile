"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMsgAMGrantGuestPasses2 = exports.CMsgGCGetEmailTemplateResponse = exports.CMsgGCGetEmailTemplate = exports.CMsgAMSendEmailResponse = exports.CMsgAMSendEmail_PersonaNameReplacementToken = exports.CMsgAMSendEmail_ReplacementToken = exports.CMsgAMSendEmail = exports.CGCMsgGetSystemStatsResponse = exports.CGCMsgGetSystemStats = exports.CGCMsgSystemStatsSchema = exports.CGCMsgGetIPLocationResponse = exports.CIPLocationInfo = exports.CGCMsgGetIPLocation = exports.CMsgAMAddFreeLicenseResponse = exports.CMsgAMAddFreeLicense = exports.CGCMsgSQLStatsResponse = exports.CGCMsgSQLStats = exports.CGCMsgMemCachedStatsResponse = exports.CGCMsgMemCachedStats = exports.CGCMsgMemCachedDelete = exports.CGCMsgMemCachedSet_KeyPair = exports.CGCMsgMemCachedSet = exports.CGCMsgMemCachedGetResponse_ValueTag = exports.CGCMsgMemCachedGetResponse = exports.CGCMsgMemCachedGet = exports.CMsgGCGetCommandListResponse = exports.CMsgGCGetCommandList = exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks = exports.CMsgAMGetUserGameStatsResponse_Stats = exports.CMsgAMGetUserGameStatsResponse = exports.CMsgAMGetUserGameStats = exports.CMsgAMGetLicensesResponse = exports.CMsgPackageLicense = exports.CMsgAMGetLicenses = exports.CMsgNotifyWatchdog = exports.CMsgAMFindAccountsResponse = exports.CMsgAMFindAccounts = exports.CMsgHttpResponse_ResponseHeader = exports.CMsgHttpResponse = exports.CMsgWebAPIRequest = exports.CMsgHttpRequest_QueryParam = exports.CMsgHttpRequest_RequestHeader = exports.CMsgHttpRequest = exports.CMsgWebAPIKey = exports.CMsgProtoBufHeader = exports.CMsgDPPartnerMicroTxnsResponse_EErrorCode = exports.CMsgGCMsgSetOptions_Option = exports.CMsgGCRoutingInfo_RoutingMethod = exports.GCProtoBufMsgSrc = exports.protobufPackage = void 0;
exports.CChinaAgreementSessionsStartAgreementSessionInGameResponse = exports.CChinaAgreementSessionsStartAgreementSessionInGameRequest = exports.CMsgDPPartnerMicroTxnsResponse = exports.CMsgDPPartnerMicroTxns_PartnerInfo = exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn = exports.CMsgDPPartnerMicroTxns = exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = exports.CMsgNotificationOfSuspiciousActivity = exports.CMsgGCHUpdateSession_ExtraField = exports.CMsgGCHUpdateSession = exports.CMsgGCMsgSetOptions_MessageRange = exports.CMsgGCMsgSetOptions = exports.CMsgGCMsgMasterSetClientMsgRoutingResponse = exports.CMsgGCMsgMasterSetWebAPIRoutingResponse = exports.CMsgGCMsgMasterSetClientMsgRouting_Entry = exports.CMsgGCMsgMasterSetClientMsgRouting = exports.CMsgGCMsgMasterSetWebAPIRouting_Entry = exports.CMsgGCMsgMasterSetWebAPIRouting = exports.CMsgGCRoutingInfo = exports.CMsgGCGetPartnerAccountLinkResponse = exports.CMsgGCGetPartnerAccountLink = exports.CMsgGCHAccountVacStatusChange = exports.CGCSystemMsgGetPurchaseTrustResponse = exports.CGCSystemMsgGetPurchaseTrustRequest = exports.CMsgGCMsgWebAPIJobRequestForwardResponse = exports.CMsgGCMsgMasterSetDirectoryResponse = exports.CMsgGCMsgMasterSetDirectory_SubGC = exports.CMsgGCMsgMasterSetDirectory = exports.CMsgGCCheckFriendshipResponse = exports.CMsgGCCheckFriendship = exports.CMsgGCGetPersonaNamesResponse_PersonaName = exports.CMsgGCGetPersonaNamesResponse = exports.CMsgGCGetPersonaNames = exports.CGCSystemMsgGetAccountDetailsResponse = exports.CGCSystemMsgGetAccountDetails = exports.CMsgAMGrantGuestPasses2Response = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
exports.protobufPackage = "";
var GCProtoBufMsgSrc;
(function (GCProtoBufMsgSrc) {
    GCProtoBufMsgSrc[GCProtoBufMsgSrc["GCProtoBufMsgSrc_Unspecified"] = 0] = "GCProtoBufMsgSrc_Unspecified";
    GCProtoBufMsgSrc[GCProtoBufMsgSrc["GCProtoBufMsgSrc_FromSystem"] = 1] = "GCProtoBufMsgSrc_FromSystem";
    GCProtoBufMsgSrc[GCProtoBufMsgSrc["GCProtoBufMsgSrc_FromSteamID"] = 2] = "GCProtoBufMsgSrc_FromSteamID";
    GCProtoBufMsgSrc[GCProtoBufMsgSrc["GCProtoBufMsgSrc_FromGC"] = 3] = "GCProtoBufMsgSrc_FromGC";
    GCProtoBufMsgSrc[GCProtoBufMsgSrc["GCProtoBufMsgSrc_ReplySystem"] = 4] = "GCProtoBufMsgSrc_ReplySystem";
})(GCProtoBufMsgSrc = exports.GCProtoBufMsgSrc || (exports.GCProtoBufMsgSrc = {}));
var CMsgGCRoutingInfo_RoutingMethod;
(function (CMsgGCRoutingInfo_RoutingMethod) {
    CMsgGCRoutingInfo_RoutingMethod[CMsgGCRoutingInfo_RoutingMethod["RANDOM"] = 0] = "RANDOM";
    CMsgGCRoutingInfo_RoutingMethod[CMsgGCRoutingInfo_RoutingMethod["DISCARD"] = 1] = "DISCARD";
    CMsgGCRoutingInfo_RoutingMethod[CMsgGCRoutingInfo_RoutingMethod["CLIENT_STEAMID"] = 2] = "CLIENT_STEAMID";
    CMsgGCRoutingInfo_RoutingMethod[CMsgGCRoutingInfo_RoutingMethod["PROTOBUF_FIELD_UINT64"] = 3] = "PROTOBUF_FIELD_UINT64";
    CMsgGCRoutingInfo_RoutingMethod[CMsgGCRoutingInfo_RoutingMethod["WEBAPI_PARAM_UINT64"] = 4] = "WEBAPI_PARAM_UINT64";
})(CMsgGCRoutingInfo_RoutingMethod = exports.CMsgGCRoutingInfo_RoutingMethod || (exports.CMsgGCRoutingInfo_RoutingMethod = {}));
var CMsgGCMsgSetOptions_Option;
(function (CMsgGCMsgSetOptions_Option) {
    CMsgGCMsgSetOptions_Option[CMsgGCMsgSetOptions_Option["NOTIFY_USER_SESSIONS"] = 0] = "NOTIFY_USER_SESSIONS";
    CMsgGCMsgSetOptions_Option[CMsgGCMsgSetOptions_Option["NOTIFY_SERVER_SESSIONS"] = 1] = "NOTIFY_SERVER_SESSIONS";
    CMsgGCMsgSetOptions_Option[CMsgGCMsgSetOptions_Option["NOTIFY_ACHIEVEMENTS"] = 2] = "NOTIFY_ACHIEVEMENTS";
    CMsgGCMsgSetOptions_Option[CMsgGCMsgSetOptions_Option["NOTIFY_VAC_ACTION"] = 3] = "NOTIFY_VAC_ACTION";
})(CMsgGCMsgSetOptions_Option = exports.CMsgGCMsgSetOptions_Option || (exports.CMsgGCMsgSetOptions_Option = {}));
var CMsgDPPartnerMicroTxnsResponse_EErrorCode;
(function (CMsgDPPartnerMicroTxnsResponse_EErrorCode) {
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgValid"] = 0] = "k_MsgValid";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgInvalidAppID"] = 1] = "k_MsgInvalidAppID";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgInvalidPartnerInfo"] = 2] = "k_MsgInvalidPartnerInfo";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgNoTransactions"] = 3] = "k_MsgNoTransactions";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgSQLFailure"] = 4] = "k_MsgSQLFailure";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgPartnerInfoDiscrepancy"] = 5] = "k_MsgPartnerInfoDiscrepancy";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgTransactionInsertFailed"] = 7] = "k_MsgTransactionInsertFailed";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgAlreadyRunning"] = 8] = "k_MsgAlreadyRunning";
    CMsgDPPartnerMicroTxnsResponse_EErrorCode[CMsgDPPartnerMicroTxnsResponse_EErrorCode["k_MsgInvalidTransactionData"] = 9] = "k_MsgInvalidTransactionData";
})(CMsgDPPartnerMicroTxnsResponse_EErrorCode = exports.CMsgDPPartnerMicroTxnsResponse_EErrorCode || (exports.CMsgDPPartnerMicroTxnsResponse_EErrorCode = {}));
function createBaseCMsgProtoBufHeader() {
    return {
        clientSteamId: Long.UZERO,
        clientSessionId: 0,
        sourceAppId: 0,
        jobIdSource: Long.UZERO,
        jobIdTarget: Long.UZERO,
        targetJobName: "",
        eresult: 0,
        errorMessage: "",
        ip: 0,
        gcMsgSrc: 0,
        gcDirIndexSource: 0
    };
}
exports.CMsgProtoBufHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.clientSteamId.isZero()) {
            writer.uint32(9).fixed64(message.clientSteamId);
        }
        if (message.clientSessionId !== 0) {
            writer.uint32(16).int32(message.clientSessionId);
        }
        if (message.sourceAppId !== 0) {
            writer.uint32(24).uint32(message.sourceAppId);
        }
        if (!message.jobIdSource.isZero()) {
            writer.uint32(81).fixed64(message.jobIdSource);
        }
        if (!message.jobIdTarget.isZero()) {
            writer.uint32(89).fixed64(message.jobIdTarget);
        }
        if (message.targetJobName !== "") {
            writer.uint32(98).string(message.targetJobName);
        }
        if (message.eresult !== 0) {
            writer.uint32(104).int32(message.eresult);
        }
        if (message.errorMessage !== "") {
            writer.uint32(114).string(message.errorMessage);
        }
        if (message.ip !== 0) {
            writer.uint32(120).uint32(message.ip);
        }
        if (message.gcMsgSrc !== 0) {
            writer.uint32(1600).int32(message.gcMsgSrc);
        }
        if (message.gcDirIndexSource !== 0) {
            writer.uint32(1608).uint32(message.gcDirIndexSource);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgProtoBufHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientSteamId = reader.fixed64();
                    break;
                case 2:
                    message.clientSessionId = reader.int32();
                    break;
                case 3:
                    message.sourceAppId = reader.uint32();
                    break;
                case 10:
                    message.jobIdSource = reader.fixed64();
                    break;
                case 11:
                    message.jobIdTarget = reader.fixed64();
                    break;
                case 12:
                    message.targetJobName = reader.string();
                    break;
                case 13:
                    message.eresult = reader.int32();
                    break;
                case 14:
                    message.errorMessage = reader.string();
                    break;
                case 15:
                    message.ip = reader.uint32();
                    break;
                case 200:
                    message.gcMsgSrc = reader.int32();
                    break;
                case 201:
                    message.gcDirIndexSource = reader.uint32();
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
        const message = createBaseCMsgProtoBufHeader();
        message.clientSteamId =
            object.clientSteamId !== undefined && object.clientSteamId !== null
                ? Long.fromValue(object.clientSteamId)
                : Long.UZERO;
        message.clientSessionId = (_a = object.clientSessionId) !== null && _a !== void 0 ? _a : 0;
        message.sourceAppId = (_b = object.sourceAppId) !== null && _b !== void 0 ? _b : 0;
        message.jobIdSource =
            object.jobIdSource !== undefined && object.jobIdSource !== null
                ? Long.fromValue(object.jobIdSource)
                : Long.UZERO;
        message.jobIdTarget =
            object.jobIdTarget !== undefined && object.jobIdTarget !== null
                ? Long.fromValue(object.jobIdTarget)
                : Long.UZERO;
        message.targetJobName = (_c = object.targetJobName) !== null && _c !== void 0 ? _c : "";
        message.eresult = (_d = object.eresult) !== null && _d !== void 0 ? _d : 0;
        message.errorMessage = (_e = object.errorMessage) !== null && _e !== void 0 ? _e : "";
        message.ip = (_f = object.ip) !== null && _f !== void 0 ? _f : 0;
        message.gcMsgSrc = (_g = object.gcMsgSrc) !== null && _g !== void 0 ? _g : 0;
        message.gcDirIndexSource = (_h = object.gcDirIndexSource) !== null && _h !== void 0 ? _h : 0;
        return message;
    }
};
function createBaseCMsgWebAPIKey() {
    return { status: 0, accountId: 0, publisherGroupId: 0, keyId: 0, domain: "" };
}
exports.CMsgWebAPIKey = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).uint32(message.status);
        }
        if (message.accountId !== 0) {
            writer.uint32(16).uint32(message.accountId);
        }
        if (message.publisherGroupId !== 0) {
            writer.uint32(24).uint32(message.publisherGroupId);
        }
        if (message.keyId !== 0) {
            writer.uint32(32).uint32(message.keyId);
        }
        if (message.domain !== "") {
            writer.uint32(42).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgWebAPIKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.uint32();
                    break;
                case 2:
                    message.accountId = reader.uint32();
                    break;
                case 3:
                    message.publisherGroupId = reader.uint32();
                    break;
                case 4:
                    message.keyId = reader.uint32();
                    break;
                case 5:
                    message.domain = reader.string();
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
        const message = createBaseCMsgWebAPIKey();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.accountId = (_b = object.accountId) !== null && _b !== void 0 ? _b : 0;
        message.publisherGroupId = (_c = object.publisherGroupId) !== null && _c !== void 0 ? _c : 0;
        message.keyId = (_d = object.keyId) !== null && _d !== void 0 ? _d : 0;
        message.domain = (_e = object.domain) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseCMsgHttpRequest() {
    return {
        requestMethod: 0,
        hostname: "",
        url: "",
        headers: [],
        getParams: [],
        postParams: [],
        body: new Uint8Array(),
        absoluteTimeout: 0
    };
}
exports.CMsgHttpRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.requestMethod !== 0) {
            writer.uint32(8).uint32(message.requestMethod);
        }
        if (message.hostname !== "") {
            writer.uint32(18).string(message.hostname);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        for (const v of message.headers) {
            exports.CMsgHttpRequest_RequestHeader.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.getParams) {
            exports.CMsgHttpRequest_QueryParam.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.postParams) {
            exports.CMsgHttpRequest_QueryParam.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.body.length !== 0) {
            writer.uint32(58).bytes(message.body);
        }
        if (message.absoluteTimeout !== 0) {
            writer.uint32(64).uint32(message.absoluteTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgHttpRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestMethod = reader.uint32();
                    break;
                case 2:
                    message.hostname = reader.string();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.headers.push(exports.CMsgHttpRequest_RequestHeader.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.getParams.push(exports.CMsgHttpRequest_QueryParam.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.postParams.push(exports.CMsgHttpRequest_QueryParam.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.body = reader.bytes();
                    break;
                case 8:
                    message.absoluteTimeout = reader.uint32();
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
        const message = createBaseCMsgHttpRequest();
        message.requestMethod = (_a = object.requestMethod) !== null && _a !== void 0 ? _a : 0;
        message.hostname = (_b = object.hostname) !== null && _b !== void 0 ? _b : "";
        message.url = (_c = object.url) !== null && _c !== void 0 ? _c : "";
        message.headers =
            ((_d = object.headers) === null || _d === void 0 ? void 0 : _d.map(e => exports.CMsgHttpRequest_RequestHeader.fromPartial(e))) ||
                [];
        message.getParams =
            ((_e = object.getParams) === null || _e === void 0 ? void 0 : _e.map(e => exports.CMsgHttpRequest_QueryParam.fromPartial(e))) ||
                [];
        message.postParams =
            ((_f = object.postParams) === null || _f === void 0 ? void 0 : _f.map(e => exports.CMsgHttpRequest_QueryParam.fromPartial(e))) ||
                [];
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.absoluteTimeout = (_h = object.absoluteTimeout) !== null && _h !== void 0 ? _h : 0;
        return message;
    }
};
function createBaseCMsgHttpRequest_RequestHeader() {
    return { name: "", value: "" };
}
exports.CMsgHttpRequest_RequestHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgHttpRequest_RequestHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        const message = createBaseCMsgHttpRequest_RequestHeader();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgHttpRequest_QueryParam() {
    return { name: "", value: new Uint8Array() };
}
exports.CMsgHttpRequest_QueryParam = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgHttpRequest_QueryParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
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
        const message = createBaseCMsgHttpRequest_QueryParam();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseCMsgWebAPIRequest() {
    return {
        UNUSEDJobName: "",
        interfaceName: "",
        methodName: "",
        version: 0,
        apiKey: undefined,
        request: undefined,
        routingAppId: 0
    };
}
exports.CMsgWebAPIRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.UNUSEDJobName !== "") {
            writer.uint32(10).string(message.UNUSEDJobName);
        }
        if (message.interfaceName !== "") {
            writer.uint32(18).string(message.interfaceName);
        }
        if (message.methodName !== "") {
            writer.uint32(26).string(message.methodName);
        }
        if (message.version !== 0) {
            writer.uint32(32).uint32(message.version);
        }
        if (message.apiKey !== undefined) {
            exports.CMsgWebAPIKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
        }
        if (message.request !== undefined) {
            exports.CMsgHttpRequest.encode(message.request, writer.uint32(50).fork()).ldelim();
        }
        if (message.routingAppId !== 0) {
            writer.uint32(56).uint32(message.routingAppId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgWebAPIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UNUSEDJobName = reader.string();
                    break;
                case 2:
                    message.interfaceName = reader.string();
                    break;
                case 3:
                    message.methodName = reader.string();
                    break;
                case 4:
                    message.version = reader.uint32();
                    break;
                case 5:
                    message.apiKey = exports.CMsgWebAPIKey.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.request = exports.CMsgHttpRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.routingAppId = reader.uint32();
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
        const message = createBaseCMsgWebAPIRequest();
        message.UNUSEDJobName = (_a = object.UNUSEDJobName) !== null && _a !== void 0 ? _a : "";
        message.interfaceName = (_b = object.interfaceName) !== null && _b !== void 0 ? _b : "";
        message.methodName = (_c = object.methodName) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : 0;
        message.apiKey =
            object.apiKey !== undefined && object.apiKey !== null
                ? exports.CMsgWebAPIKey.fromPartial(object.apiKey)
                : undefined;
        message.request =
            object.request !== undefined && object.request !== null
                ? exports.CMsgHttpRequest.fromPartial(object.request)
                : undefined;
        message.routingAppId = (_e = object.routingAppId) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseCMsgHttpResponse() {
    return { statusCode: 0, headers: [], body: new Uint8Array() };
}
exports.CMsgHttpResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.statusCode !== 0) {
            writer.uint32(8).uint32(message.statusCode);
        }
        for (const v of message.headers) {
            exports.CMsgHttpResponse_ResponseHeader.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.body.length !== 0) {
            writer.uint32(26).bytes(message.body);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgHttpResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statusCode = reader.uint32();
                    break;
                case 2:
                    message.headers.push(exports.CMsgHttpResponse_ResponseHeader.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.body = reader.bytes();
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
        const message = createBaseCMsgHttpResponse();
        message.statusCode = (_a = object.statusCode) !== null && _a !== void 0 ? _a : 0;
        message.headers =
            ((_b = object.headers) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgHttpResponse_ResponseHeader.fromPartial(e))) || [];
        message.body = (_c = object.body) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseCMsgHttpResponse_ResponseHeader() {
    return { name: "", value: "" };
}
exports.CMsgHttpResponse_ResponseHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgHttpResponse_ResponseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        const message = createBaseCMsgHttpResponse_ResponseHeader();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgAMFindAccounts() {
    return { searchType: 0, searchString: "" };
}
exports.CMsgAMFindAccounts = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.searchType !== 0) {
            writer.uint32(8).uint32(message.searchType);
        }
        if (message.searchString !== "") {
            writer.uint32(18).string(message.searchString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMFindAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchType = reader.uint32();
                    break;
                case 2:
                    message.searchString = reader.string();
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
        const message = createBaseCMsgAMFindAccounts();
        message.searchType = (_a = object.searchType) !== null && _a !== void 0 ? _a : 0;
        message.searchString = (_b = object.searchString) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgAMFindAccountsResponse() {
    return { steamId: [] };
}
exports.CMsgAMFindAccountsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.steamId) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMFindAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.steamId.push(reader.fixed64());
                        }
                    }
                    else {
                        message.steamId.push(reader.fixed64());
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
        const message = createBaseCMsgAMFindAccountsResponse();
        message.steamId = ((_a = object.steamId) === null || _a === void 0 ? void 0 : _a.map(e => Long.fromValue(e))) || [];
        return message;
    }
};
function createBaseCMsgNotifyWatchdog() {
    return {
        source: 0,
        alertType: 0,
        alertDestination: 0,
        critical: false,
        time: 0,
        appid: 0,
        text: ""
    };
}
exports.CMsgNotifyWatchdog = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.source !== 0) {
            writer.uint32(8).uint32(message.source);
        }
        if (message.alertType !== 0) {
            writer.uint32(16).uint32(message.alertType);
        }
        if (message.alertDestination !== 0) {
            writer.uint32(24).uint32(message.alertDestination);
        }
        if (message.critical === true) {
            writer.uint32(32).bool(message.critical);
        }
        if (message.time !== 0) {
            writer.uint32(40).uint32(message.time);
        }
        if (message.appid !== 0) {
            writer.uint32(48).uint32(message.appid);
        }
        if (message.text !== "") {
            writer.uint32(58).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgNotifyWatchdog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.uint32();
                    break;
                case 2:
                    message.alertType = reader.uint32();
                    break;
                case 3:
                    message.alertDestination = reader.uint32();
                    break;
                case 4:
                    message.critical = reader.bool();
                    break;
                case 5:
                    message.time = reader.uint32();
                    break;
                case 6:
                    message.appid = reader.uint32();
                    break;
                case 7:
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
        const message = createBaseCMsgNotifyWatchdog();
        message.source = (_a = object.source) !== null && _a !== void 0 ? _a : 0;
        message.alertType = (_b = object.alertType) !== null && _b !== void 0 ? _b : 0;
        message.alertDestination = (_c = object.alertDestination) !== null && _c !== void 0 ? _c : 0;
        message.critical = (_d = object.critical) !== null && _d !== void 0 ? _d : false;
        message.time = (_e = object.time) !== null && _e !== void 0 ? _e : 0;
        message.appid = (_f = object.appid) !== null && _f !== void 0 ? _f : 0;
        message.text = (_g = object.text) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseCMsgAMGetLicenses() {
    return { steamid: Long.UZERO };
}
exports.CMsgAMGetLicenses = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGetLicenses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgAMGetLicenses();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgPackageLicense() {
    return { packageId: 0, timeCreated: 0, ownerId: 0 };
}
exports.CMsgPackageLicense = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.packageId !== 0) {
            writer.uint32(8).uint32(message.packageId);
        }
        if (message.timeCreated !== 0) {
            writer.uint32(16).uint32(message.timeCreated);
        }
        if (message.ownerId !== 0) {
            writer.uint32(24).uint32(message.ownerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgPackageLicense();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packageId = reader.uint32();
                    break;
                case 2:
                    message.timeCreated = reader.uint32();
                    break;
                case 3:
                    message.ownerId = reader.uint32();
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
        const message = createBaseCMsgPackageLicense();
        message.packageId = (_a = object.packageId) !== null && _a !== void 0 ? _a : 0;
        message.timeCreated = (_b = object.timeCreated) !== null && _b !== void 0 ? _b : 0;
        message.ownerId = (_c = object.ownerId) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCMsgAMGetLicensesResponse() {
    return { license: [], result: 0 };
}
exports.CMsgAMGetLicensesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.license) {
            exports.CMsgPackageLicense.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== 0) {
            writer.uint32(16).uint32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGetLicensesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.license.push(exports.CMsgPackageLicense.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.result = reader.uint32();
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
        const message = createBaseCMsgAMGetLicensesResponse();
        message.license =
            ((_a = object.license) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgPackageLicense.fromPartial(e))) || [];
        message.result = (_b = object.result) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgAMGetUserGameStats() {
    return { steamId: Long.UZERO, gameId: Long.UZERO, stats: [] };
}
exports.CMsgAMGetUserGameStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamId.isZero()) {
            writer.uint32(9).fixed64(message.steamId);
        }
        if (!message.gameId.isZero()) {
            writer.uint32(17).fixed64(message.gameId);
        }
        writer.uint32(26).fork();
        for (const v of message.stats) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGetUserGameStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamId = reader.fixed64();
                    break;
                case 2:
                    message.gameId = reader.fixed64();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.stats.push(reader.uint32());
                        }
                    }
                    else {
                        message.stats.push(reader.uint32());
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
        const message = createBaseCMsgAMGetUserGameStats();
        message.steamId =
            object.steamId !== undefined && object.steamId !== null
                ? Long.fromValue(object.steamId)
                : Long.UZERO;
        message.gameId =
            object.gameId !== undefined && object.gameId !== null
                ? Long.fromValue(object.gameId)
                : Long.UZERO;
        message.stats = ((_a = object.stats) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgAMGetUserGameStatsResponse() {
    return {
        steamId: Long.UZERO,
        gameId: Long.UZERO,
        eresult: 0,
        stats: [],
        achievementBlocks: []
    };
}
exports.CMsgAMGetUserGameStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamId.isZero()) {
            writer.uint32(9).fixed64(message.steamId);
        }
        if (!message.gameId.isZero()) {
            writer.uint32(17).fixed64(message.gameId);
        }
        if (message.eresult !== 0) {
            writer.uint32(24).int32(message.eresult);
        }
        for (const v of message.stats) {
            exports.CMsgAMGetUserGameStatsResponse_Stats.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.achievementBlocks) {
            exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGetUserGameStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamId = reader.fixed64();
                    break;
                case 2:
                    message.gameId = reader.fixed64();
                    break;
                case 3:
                    message.eresult = reader.int32();
                    break;
                case 4:
                    message.stats.push(exports.CMsgAMGetUserGameStatsResponse_Stats.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.achievementBlocks.push(exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgAMGetUserGameStatsResponse();
        message.steamId =
            object.steamId !== undefined && object.steamId !== null
                ? Long.fromValue(object.steamId)
                : Long.UZERO;
        message.gameId =
            object.gameId !== undefined && object.gameId !== null
                ? Long.fromValue(object.gameId)
                : Long.UZERO;
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        message.stats =
            ((_b = object.stats) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgAMGetUserGameStatsResponse_Stats.fromPartial(e))) || [];
        message.achievementBlocks =
            ((_c = object.achievementBlocks) === null || _c === void 0 ? void 0 : _c.map(e => exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgAMGetUserGameStatsResponse_Stats() {
    return { statId: 0, statValue: 0 };
}
exports.CMsgAMGetUserGameStatsResponse_Stats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.statId !== 0) {
            writer.uint32(8).uint32(message.statId);
        }
        if (message.statValue !== 0) {
            writer.uint32(16).uint32(message.statValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGetUserGameStatsResponse_Stats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statId = reader.uint32();
                    break;
                case 2:
                    message.statValue = reader.uint32();
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
        const message = createBaseCMsgAMGetUserGameStatsResponse_Stats();
        message.statId = (_a = object.statId) !== null && _a !== void 0 ? _a : 0;
        message.statValue = (_b = object.statValue) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks() {
    return { achievementId: 0, achievementBitId: 0, unlockTime: 0 };
}
exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.achievementId !== 0) {
            writer.uint32(8).uint32(message.achievementId);
        }
        if (message.achievementBitId !== 0) {
            writer.uint32(16).uint32(message.achievementBitId);
        }
        if (message.unlockTime !== 0) {
            writer.uint32(29).fixed32(message.unlockTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.achievementId = reader.uint32();
                    break;
                case 2:
                    message.achievementBitId = reader.uint32();
                    break;
                case 3:
                    message.unlockTime = reader.fixed32();
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
        const message = createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks();
        message.achievementId = (_a = object.achievementId) !== null && _a !== void 0 ? _a : 0;
        message.achievementBitId = (_b = object.achievementBitId) !== null && _b !== void 0 ? _b : 0;
        message.unlockTime = (_c = object.unlockTime) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseCMsgGCGetCommandList() {
    return { appId: 0, commandPrefix: "" };
}
exports.CMsgGCGetCommandList = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.appId !== 0) {
            writer.uint32(8).uint32(message.appId);
        }
        if (message.commandPrefix !== "") {
            writer.uint32(18).string(message.commandPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetCommandList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint32();
                    break;
                case 2:
                    message.commandPrefix = reader.string();
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
        const message = createBaseCMsgGCGetCommandList();
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : 0;
        message.commandPrefix = (_b = object.commandPrefix) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgGCGetCommandListResponse() {
    return { commandName: [] };
}
exports.CMsgGCGetCommandListResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.commandName) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetCommandListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commandName.push(reader.string());
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
        const message = createBaseCMsgGCGetCommandListResponse();
        message.commandName = ((_a = object.commandName) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCGCMsgMemCachedGet() {
    return { keys: [] };
}
exports.CGCMsgMemCachedGet = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedGet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.string());
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
        const message = createBaseCGCMsgMemCachedGet();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCGCMsgMemCachedGetResponse() {
    return { values: [] };
}
exports.CGCMsgMemCachedGetResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.values) {
            exports.CGCMsgMemCachedGetResponse_ValueTag.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(exports.CGCMsgMemCachedGetResponse_ValueTag.decode(reader, reader.uint32()));
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
        const message = createBaseCGCMsgMemCachedGetResponse();
        message.values =
            ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(e => exports.CGCMsgMemCachedGetResponse_ValueTag.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCGCMsgMemCachedGetResponse_ValueTag() {
    return { found: false, value: new Uint8Array() };
}
exports.CGCMsgMemCachedGetResponse_ValueTag = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.found === true) {
            writer.uint32(8).bool(message.found);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedGetResponse_ValueTag();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.found = reader.bool();
                    break;
                case 2:
                    message.value = reader.bytes();
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
        const message = createBaseCGCMsgMemCachedGetResponse_ValueTag();
        message.found = (_a = object.found) !== null && _a !== void 0 ? _a : false;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseCGCMsgMemCachedSet() {
    return { keys: [] };
}
exports.CGCMsgMemCachedSet = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.keys) {
            exports.CGCMsgMemCachedSet_KeyPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(exports.CGCMsgMemCachedSet_KeyPair.decode(reader, reader.uint32()));
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
        const message = createBaseCGCMsgMemCachedSet();
        message.keys =
            ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(e => exports.CGCMsgMemCachedSet_KeyPair.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCGCMsgMemCachedSet_KeyPair() {
    return { name: "", value: new Uint8Array() };
}
exports.CGCMsgMemCachedSet_KeyPair = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedSet_KeyPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
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
        const message = createBaseCGCMsgMemCachedSet_KeyPair();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseCGCMsgMemCachedDelete() {
    return { keys: [] };
}
exports.CGCMsgMemCachedDelete = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedDelete();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.string());
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
        const message = createBaseCGCMsgMemCachedDelete();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCGCMsgMemCachedStats() {
    return {};
}
exports.CGCMsgMemCachedStats = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedStats();
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
        const message = createBaseCGCMsgMemCachedStats();
        return message;
    }
};
function createBaseCGCMsgMemCachedStatsResponse() {
    return {
        currConnections: Long.UZERO,
        cmdGet: Long.UZERO,
        cmdSet: Long.UZERO,
        cmdFlush: Long.UZERO,
        getHits: Long.UZERO,
        getMisses: Long.UZERO,
        deleteHits: Long.UZERO,
        deleteMisses: Long.UZERO,
        bytesRead: Long.UZERO,
        bytesWritten: Long.UZERO,
        limitMaxbytes: Long.UZERO,
        currItems: Long.UZERO,
        evictions: Long.UZERO,
        bytes: Long.UZERO
    };
}
exports.CGCMsgMemCachedStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.currConnections.isZero()) {
            writer.uint32(8).uint64(message.currConnections);
        }
        if (!message.cmdGet.isZero()) {
            writer.uint32(16).uint64(message.cmdGet);
        }
        if (!message.cmdSet.isZero()) {
            writer.uint32(24).uint64(message.cmdSet);
        }
        if (!message.cmdFlush.isZero()) {
            writer.uint32(32).uint64(message.cmdFlush);
        }
        if (!message.getHits.isZero()) {
            writer.uint32(40).uint64(message.getHits);
        }
        if (!message.getMisses.isZero()) {
            writer.uint32(48).uint64(message.getMisses);
        }
        if (!message.deleteHits.isZero()) {
            writer.uint32(56).uint64(message.deleteHits);
        }
        if (!message.deleteMisses.isZero()) {
            writer.uint32(64).uint64(message.deleteMisses);
        }
        if (!message.bytesRead.isZero()) {
            writer.uint32(72).uint64(message.bytesRead);
        }
        if (!message.bytesWritten.isZero()) {
            writer.uint32(80).uint64(message.bytesWritten);
        }
        if (!message.limitMaxbytes.isZero()) {
            writer.uint32(88).uint64(message.limitMaxbytes);
        }
        if (!message.currItems.isZero()) {
            writer.uint32(96).uint64(message.currItems);
        }
        if (!message.evictions.isZero()) {
            writer.uint32(104).uint64(message.evictions);
        }
        if (!message.bytes.isZero()) {
            writer.uint32(112).uint64(message.bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgMemCachedStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currConnections = reader.uint64();
                    break;
                case 2:
                    message.cmdGet = reader.uint64();
                    break;
                case 3:
                    message.cmdSet = reader.uint64();
                    break;
                case 4:
                    message.cmdFlush = reader.uint64();
                    break;
                case 5:
                    message.getHits = reader.uint64();
                    break;
                case 6:
                    message.getMisses = reader.uint64();
                    break;
                case 7:
                    message.deleteHits = reader.uint64();
                    break;
                case 8:
                    message.deleteMisses = reader.uint64();
                    break;
                case 9:
                    message.bytesRead = reader.uint64();
                    break;
                case 10:
                    message.bytesWritten = reader.uint64();
                    break;
                case 11:
                    message.limitMaxbytes = reader.uint64();
                    break;
                case 12:
                    message.currItems = reader.uint64();
                    break;
                case 13:
                    message.evictions = reader.uint64();
                    break;
                case 14:
                    message.bytes = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCGCMsgMemCachedStatsResponse();
        message.currConnections =
            object.currConnections !== undefined && object.currConnections !== null
                ? Long.fromValue(object.currConnections)
                : Long.UZERO;
        message.cmdGet =
            object.cmdGet !== undefined && object.cmdGet !== null
                ? Long.fromValue(object.cmdGet)
                : Long.UZERO;
        message.cmdSet =
            object.cmdSet !== undefined && object.cmdSet !== null
                ? Long.fromValue(object.cmdSet)
                : Long.UZERO;
        message.cmdFlush =
            object.cmdFlush !== undefined && object.cmdFlush !== null
                ? Long.fromValue(object.cmdFlush)
                : Long.UZERO;
        message.getHits =
            object.getHits !== undefined && object.getHits !== null
                ? Long.fromValue(object.getHits)
                : Long.UZERO;
        message.getMisses =
            object.getMisses !== undefined && object.getMisses !== null
                ? Long.fromValue(object.getMisses)
                : Long.UZERO;
        message.deleteHits =
            object.deleteHits !== undefined && object.deleteHits !== null
                ? Long.fromValue(object.deleteHits)
                : Long.UZERO;
        message.deleteMisses =
            object.deleteMisses !== undefined && object.deleteMisses !== null
                ? Long.fromValue(object.deleteMisses)
                : Long.UZERO;
        message.bytesRead =
            object.bytesRead !== undefined && object.bytesRead !== null
                ? Long.fromValue(object.bytesRead)
                : Long.UZERO;
        message.bytesWritten =
            object.bytesWritten !== undefined && object.bytesWritten !== null
                ? Long.fromValue(object.bytesWritten)
                : Long.UZERO;
        message.limitMaxbytes =
            object.limitMaxbytes !== undefined && object.limitMaxbytes !== null
                ? Long.fromValue(object.limitMaxbytes)
                : Long.UZERO;
        message.currItems =
            object.currItems !== undefined && object.currItems !== null
                ? Long.fromValue(object.currItems)
                : Long.UZERO;
        message.evictions =
            object.evictions !== undefined && object.evictions !== null
                ? Long.fromValue(object.evictions)
                : Long.UZERO;
        message.bytes =
            object.bytes !== undefined && object.bytes !== null
                ? Long.fromValue(object.bytes)
                : Long.UZERO;
        return message;
    }
};
function createBaseCGCMsgSQLStats() {
    return { schemaCatalog: 0 };
}
exports.CGCMsgSQLStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.schemaCatalog !== 0) {
            writer.uint32(8).uint32(message.schemaCatalog);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgSQLStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaCatalog = reader.uint32();
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
        const message = createBaseCGCMsgSQLStats();
        message.schemaCatalog = (_a = object.schemaCatalog) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCGCMsgSQLStatsResponse() {
    return {
        threads: 0,
        threadsConnected: 0,
        threadsActive: 0,
        operationsSubmitted: 0,
        preparedStatementsExecuted: 0,
        nonPreparedStatementsExecuted: 0,
        deadlockRetries: 0,
        operationsTimedOutInQueue: 0,
        errors: 0
    };
}
exports.CGCMsgSQLStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.threads !== 0) {
            writer.uint32(8).uint32(message.threads);
        }
        if (message.threadsConnected !== 0) {
            writer.uint32(16).uint32(message.threadsConnected);
        }
        if (message.threadsActive !== 0) {
            writer.uint32(24).uint32(message.threadsActive);
        }
        if (message.operationsSubmitted !== 0) {
            writer.uint32(32).uint32(message.operationsSubmitted);
        }
        if (message.preparedStatementsExecuted !== 0) {
            writer.uint32(40).uint32(message.preparedStatementsExecuted);
        }
        if (message.nonPreparedStatementsExecuted !== 0) {
            writer.uint32(48).uint32(message.nonPreparedStatementsExecuted);
        }
        if (message.deadlockRetries !== 0) {
            writer.uint32(56).uint32(message.deadlockRetries);
        }
        if (message.operationsTimedOutInQueue !== 0) {
            writer.uint32(64).uint32(message.operationsTimedOutInQueue);
        }
        if (message.errors !== 0) {
            writer.uint32(72).uint32(message.errors);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgSQLStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threads = reader.uint32();
                    break;
                case 2:
                    message.threadsConnected = reader.uint32();
                    break;
                case 3:
                    message.threadsActive = reader.uint32();
                    break;
                case 4:
                    message.operationsSubmitted = reader.uint32();
                    break;
                case 5:
                    message.preparedStatementsExecuted = reader.uint32();
                    break;
                case 6:
                    message.nonPreparedStatementsExecuted = reader.uint32();
                    break;
                case 7:
                    message.deadlockRetries = reader.uint32();
                    break;
                case 8:
                    message.operationsTimedOutInQueue = reader.uint32();
                    break;
                case 9:
                    message.errors = reader.uint32();
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
        const message = createBaseCGCMsgSQLStatsResponse();
        message.threads = (_a = object.threads) !== null && _a !== void 0 ? _a : 0;
        message.threadsConnected = (_b = object.threadsConnected) !== null && _b !== void 0 ? _b : 0;
        message.threadsActive = (_c = object.threadsActive) !== null && _c !== void 0 ? _c : 0;
        message.operationsSubmitted = (_d = object.operationsSubmitted) !== null && _d !== void 0 ? _d : 0;
        message.preparedStatementsExecuted = (_e = object.preparedStatementsExecuted) !== null && _e !== void 0 ? _e : 0;
        message.nonPreparedStatementsExecuted =
            (_f = object.nonPreparedStatementsExecuted) !== null && _f !== void 0 ? _f : 0;
        message.deadlockRetries = (_g = object.deadlockRetries) !== null && _g !== void 0 ? _g : 0;
        message.operationsTimedOutInQueue = (_h = object.operationsTimedOutInQueue) !== null && _h !== void 0 ? _h : 0;
        message.errors = (_j = object.errors) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
function createBaseCMsgAMAddFreeLicense() {
    return {
        steamid: Long.UZERO,
        ipPublic: 0,
        packageid: 0,
        storeCountryCode: ""
    };
}
exports.CMsgAMAddFreeLicense = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        if (message.ipPublic !== 0) {
            writer.uint32(16).uint32(message.ipPublic);
        }
        if (message.packageid !== 0) {
            writer.uint32(24).uint32(message.packageid);
        }
        if (message.storeCountryCode !== "") {
            writer.uint32(34).string(message.storeCountryCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMAddFreeLicense();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.ipPublic = reader.uint32();
                    break;
                case 3:
                    message.packageid = reader.uint32();
                    break;
                case 4:
                    message.storeCountryCode = reader.string();
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
        const message = createBaseCMsgAMAddFreeLicense();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.ipPublic = (_a = object.ipPublic) !== null && _a !== void 0 ? _a : 0;
        message.packageid = (_b = object.packageid) !== null && _b !== void 0 ? _b : 0;
        message.storeCountryCode = (_c = object.storeCountryCode) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCMsgAMAddFreeLicenseResponse() {
    return { eresult: 0, purchaseResultDetail: 0, transid: Long.UZERO };
}
exports.CMsgAMAddFreeLicenseResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).int32(message.eresult);
        }
        if (message.purchaseResultDetail !== 0) {
            writer.uint32(16).int32(message.purchaseResultDetail);
        }
        if (!message.transid.isZero()) {
            writer.uint32(25).fixed64(message.transid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMAddFreeLicenseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 2:
                    message.purchaseResultDetail = reader.int32();
                    break;
                case 3:
                    message.transid = reader.fixed64();
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
        const message = createBaseCMsgAMAddFreeLicenseResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        message.purchaseResultDetail = (_b = object.purchaseResultDetail) !== null && _b !== void 0 ? _b : 0;
        message.transid =
            object.transid !== undefined && object.transid !== null
                ? Long.fromValue(object.transid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCGCMsgGetIPLocation() {
    return { ips: [] };
}
exports.CGCMsgGetIPLocation = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.ips) {
            writer.fixed32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgGetIPLocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ips.push(reader.fixed32());
                        }
                    }
                    else {
                        message.ips.push(reader.fixed32());
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
        const message = createBaseCGCMsgGetIPLocation();
        message.ips = ((_a = object.ips) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    }
};
function createBaseCIPLocationInfo() {
    return { ip: 0, latitude: 0, longitude: 0, country: "", state: "", city: "" };
}
exports.CIPLocationInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.ip !== 0) {
            writer.uint32(8).uint32(message.ip);
        }
        if (message.latitude !== 0) {
            writer.uint32(21).float(message.latitude);
        }
        if (message.longitude !== 0) {
            writer.uint32(29).float(message.longitude);
        }
        if (message.country !== "") {
            writer.uint32(34).string(message.country);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        if (message.city !== "") {
            writer.uint32(50).string(message.city);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCIPLocationInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ip = reader.uint32();
                    break;
                case 2:
                    message.latitude = reader.float();
                    break;
                case 3:
                    message.longitude = reader.float();
                    break;
                case 4:
                    message.country = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                case 6:
                    message.city = reader.string();
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
        const message = createBaseCIPLocationInfo();
        message.ip = (_a = object.ip) !== null && _a !== void 0 ? _a : 0;
        message.latitude = (_b = object.latitude) !== null && _b !== void 0 ? _b : 0;
        message.longitude = (_c = object.longitude) !== null && _c !== void 0 ? _c : 0;
        message.country = (_d = object.country) !== null && _d !== void 0 ? _d : "";
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : "";
        message.city = (_f = object.city) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseCGCMsgGetIPLocationResponse() {
    return { infos: [] };
}
exports.CGCMsgGetIPLocationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.infos) {
            exports.CIPLocationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgGetIPLocationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.infos.push(exports.CIPLocationInfo.decode(reader, reader.uint32()));
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
        const message = createBaseCGCMsgGetIPLocationResponse();
        message.infos =
            ((_a = object.infos) === null || _a === void 0 ? void 0 : _a.map(e => exports.CIPLocationInfo.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCGCMsgSystemStatsSchema() {
    return { gcAppId: 0, schemaKv: new Uint8Array() };
}
exports.CGCMsgSystemStatsSchema = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gcAppId !== 0) {
            writer.uint32(8).uint32(message.gcAppId);
        }
        if (message.schemaKv.length !== 0) {
            writer.uint32(18).bytes(message.schemaKv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgSystemStatsSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gcAppId = reader.uint32();
                    break;
                case 2:
                    message.schemaKv = reader.bytes();
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
        const message = createBaseCGCMsgSystemStatsSchema();
        message.gcAppId = (_a = object.gcAppId) !== null && _a !== void 0 ? _a : 0;
        message.schemaKv = (_b = object.schemaKv) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseCGCMsgGetSystemStats() {
    return {};
}
exports.CGCMsgGetSystemStats = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgGetSystemStats();
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
        const message = createBaseCGCMsgGetSystemStats();
        return message;
    }
};
function createBaseCGCMsgGetSystemStatsResponse() {
    return {
        gcAppId: 0,
        statsKv: new Uint8Array(),
        activeJobs: 0,
        yieldingJobs: 0,
        userSessions: 0,
        gameServerSessions: 0,
        socaches: 0,
        socachesToUnload: 0,
        socachesLoading: 0,
        writebackQueue: 0,
        steamidLocks: 0,
        logonQueue: 0,
        logonJobs: 0
    };
}
exports.CGCMsgGetSystemStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gcAppId !== 0) {
            writer.uint32(8).uint32(message.gcAppId);
        }
        if (message.statsKv.length !== 0) {
            writer.uint32(18).bytes(message.statsKv);
        }
        if (message.activeJobs !== 0) {
            writer.uint32(24).uint32(message.activeJobs);
        }
        if (message.yieldingJobs !== 0) {
            writer.uint32(32).uint32(message.yieldingJobs);
        }
        if (message.userSessions !== 0) {
            writer.uint32(40).uint32(message.userSessions);
        }
        if (message.gameServerSessions !== 0) {
            writer.uint32(48).uint32(message.gameServerSessions);
        }
        if (message.socaches !== 0) {
            writer.uint32(56).uint32(message.socaches);
        }
        if (message.socachesToUnload !== 0) {
            writer.uint32(64).uint32(message.socachesToUnload);
        }
        if (message.socachesLoading !== 0) {
            writer.uint32(72).uint32(message.socachesLoading);
        }
        if (message.writebackQueue !== 0) {
            writer.uint32(80).uint32(message.writebackQueue);
        }
        if (message.steamidLocks !== 0) {
            writer.uint32(88).uint32(message.steamidLocks);
        }
        if (message.logonQueue !== 0) {
            writer.uint32(96).uint32(message.logonQueue);
        }
        if (message.logonJobs !== 0) {
            writer.uint32(104).uint32(message.logonJobs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCMsgGetSystemStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gcAppId = reader.uint32();
                    break;
                case 2:
                    message.statsKv = reader.bytes();
                    break;
                case 3:
                    message.activeJobs = reader.uint32();
                    break;
                case 4:
                    message.yieldingJobs = reader.uint32();
                    break;
                case 5:
                    message.userSessions = reader.uint32();
                    break;
                case 6:
                    message.gameServerSessions = reader.uint32();
                    break;
                case 7:
                    message.socaches = reader.uint32();
                    break;
                case 8:
                    message.socachesToUnload = reader.uint32();
                    break;
                case 9:
                    message.socachesLoading = reader.uint32();
                    break;
                case 10:
                    message.writebackQueue = reader.uint32();
                    break;
                case 11:
                    message.steamidLocks = reader.uint32();
                    break;
                case 12:
                    message.logonQueue = reader.uint32();
                    break;
                case 13:
                    message.logonJobs = reader.uint32();
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
        const message = createBaseCGCMsgGetSystemStatsResponse();
        message.gcAppId = (_a = object.gcAppId) !== null && _a !== void 0 ? _a : 0;
        message.statsKv = (_b = object.statsKv) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.activeJobs = (_c = object.activeJobs) !== null && _c !== void 0 ? _c : 0;
        message.yieldingJobs = (_d = object.yieldingJobs) !== null && _d !== void 0 ? _d : 0;
        message.userSessions = (_e = object.userSessions) !== null && _e !== void 0 ? _e : 0;
        message.gameServerSessions = (_f = object.gameServerSessions) !== null && _f !== void 0 ? _f : 0;
        message.socaches = (_g = object.socaches) !== null && _g !== void 0 ? _g : 0;
        message.socachesToUnload = (_h = object.socachesToUnload) !== null && _h !== void 0 ? _h : 0;
        message.socachesLoading = (_j = object.socachesLoading) !== null && _j !== void 0 ? _j : 0;
        message.writebackQueue = (_k = object.writebackQueue) !== null && _k !== void 0 ? _k : 0;
        message.steamidLocks = (_l = object.steamidLocks) !== null && _l !== void 0 ? _l : 0;
        message.logonQueue = (_m = object.logonQueue) !== null && _m !== void 0 ? _m : 0;
        message.logonJobs = (_o = object.logonJobs) !== null && _o !== void 0 ? _o : 0;
        return message;
    }
};
function createBaseCMsgAMSendEmail() {
    return {
        steamid: Long.UZERO,
        emailMsgType: 0,
        emailFormat: 0,
        personaNameTokens: [],
        sourceGc: 0,
        tokens: []
    };
}
exports.CMsgAMSendEmail = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        if (message.emailMsgType !== 0) {
            writer.uint32(16).uint32(message.emailMsgType);
        }
        if (message.emailFormat !== 0) {
            writer.uint32(24).uint32(message.emailFormat);
        }
        for (const v of message.personaNameTokens) {
            exports.CMsgAMSendEmail_PersonaNameReplacementToken.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.sourceGc !== 0) {
            writer.uint32(48).uint32(message.sourceGc);
        }
        for (const v of message.tokens) {
            exports.CMsgAMSendEmail_ReplacementToken.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMSendEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.emailMsgType = reader.uint32();
                    break;
                case 3:
                    message.emailFormat = reader.uint32();
                    break;
                case 5:
                    message.personaNameTokens.push(exports.CMsgAMSendEmail_PersonaNameReplacementToken.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.sourceGc = reader.uint32();
                    break;
                case 7:
                    message.tokens.push(exports.CMsgAMSendEmail_ReplacementToken.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgAMSendEmail();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.emailMsgType = (_a = object.emailMsgType) !== null && _a !== void 0 ? _a : 0;
        message.emailFormat = (_b = object.emailFormat) !== null && _b !== void 0 ? _b : 0;
        message.personaNameTokens =
            ((_c = object.personaNameTokens) === null || _c === void 0 ? void 0 : _c.map(e => exports.CMsgAMSendEmail_PersonaNameReplacementToken.fromPartial(e))) || [];
        message.sourceGc = (_d = object.sourceGc) !== null && _d !== void 0 ? _d : 0;
        message.tokens =
            ((_e = object.tokens) === null || _e === void 0 ? void 0 : _e.map(e => exports.CMsgAMSendEmail_ReplacementToken.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgAMSendEmail_ReplacementToken() {
    return { tokenName: "", tokenValue: "" };
}
exports.CMsgAMSendEmail_ReplacementToken = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tokenName !== "") {
            writer.uint32(10).string(message.tokenName);
        }
        if (message.tokenValue !== "") {
            writer.uint32(18).string(message.tokenValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMSendEmail_ReplacementToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenName = reader.string();
                    break;
                case 2:
                    message.tokenValue = reader.string();
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
        const message = createBaseCMsgAMSendEmail_ReplacementToken();
        message.tokenName = (_a = object.tokenName) !== null && _a !== void 0 ? _a : "";
        message.tokenValue = (_b = object.tokenValue) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgAMSendEmail_PersonaNameReplacementToken() {
    return { steamid: Long.UZERO, tokenName: "" };
}
exports.CMsgAMSendEmail_PersonaNameReplacementToken = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        if (message.tokenName !== "") {
            writer.uint32(18).string(message.tokenName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMSendEmail_PersonaNameReplacementToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.tokenName = reader.string();
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
        const message = createBaseCMsgAMSendEmail_PersonaNameReplacementToken();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.tokenName = (_a = object.tokenName) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCMsgAMSendEmailResponse() {
    return { eresult: 0 };
}
exports.CMsgAMSendEmailResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).uint32(message.eresult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMSendEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
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
        const message = createBaseCMsgAMSendEmailResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCGetEmailTemplate() {
    return { appId: 0, emailMsgType: 0, emailLang: 0, emailFormat: 0 };
}
exports.CMsgGCGetEmailTemplate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.appId !== 0) {
            writer.uint32(8).uint32(message.appId);
        }
        if (message.emailMsgType !== 0) {
            writer.uint32(16).uint32(message.emailMsgType);
        }
        if (message.emailLang !== 0) {
            writer.uint32(24).int32(message.emailLang);
        }
        if (message.emailFormat !== 0) {
            writer.uint32(32).int32(message.emailFormat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetEmailTemplate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint32();
                    break;
                case 2:
                    message.emailMsgType = reader.uint32();
                    break;
                case 3:
                    message.emailLang = reader.int32();
                    break;
                case 4:
                    message.emailFormat = reader.int32();
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
        const message = createBaseCMsgGCGetEmailTemplate();
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : 0;
        message.emailMsgType = (_b = object.emailMsgType) !== null && _b !== void 0 ? _b : 0;
        message.emailLang = (_c = object.emailLang) !== null && _c !== void 0 ? _c : 0;
        message.emailFormat = (_d = object.emailFormat) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCMsgGCGetEmailTemplateResponse() {
    return { eresult: 0, templateExists: false, template: "" };
}
exports.CMsgGCGetEmailTemplateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).uint32(message.eresult);
        }
        if (message.templateExists === true) {
            writer.uint32(16).bool(message.templateExists);
        }
        if (message.template !== "") {
            writer.uint32(26).string(message.template);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetEmailTemplateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                case 2:
                    message.templateExists = reader.bool();
                    break;
                case 3:
                    message.template = reader.string();
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
        const message = createBaseCMsgGCGetEmailTemplateResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        message.templateExists = (_b = object.templateExists) !== null && _b !== void 0 ? _b : false;
        message.template = (_c = object.template) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCMsgAMGrantGuestPasses2() {
    return {
        steamId: Long.UZERO,
        packageId: 0,
        passesToGrant: 0,
        daysToExpiration: 0,
        action: 0
    };
}
exports.CMsgAMGrantGuestPasses2 = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamId.isZero()) {
            writer.uint32(9).fixed64(message.steamId);
        }
        if (message.packageId !== 0) {
            writer.uint32(16).uint32(message.packageId);
        }
        if (message.passesToGrant !== 0) {
            writer.uint32(24).int32(message.passesToGrant);
        }
        if (message.daysToExpiration !== 0) {
            writer.uint32(32).int32(message.daysToExpiration);
        }
        if (message.action !== 0) {
            writer.uint32(40).int32(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGrantGuestPasses2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamId = reader.fixed64();
                    break;
                case 2:
                    message.packageId = reader.uint32();
                    break;
                case 3:
                    message.passesToGrant = reader.int32();
                    break;
                case 4:
                    message.daysToExpiration = reader.int32();
                    break;
                case 5:
                    message.action = reader.int32();
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
        const message = createBaseCMsgAMGrantGuestPasses2();
        message.steamId =
            object.steamId !== undefined && object.steamId !== null
                ? Long.fromValue(object.steamId)
                : Long.UZERO;
        message.packageId = (_a = object.packageId) !== null && _a !== void 0 ? _a : 0;
        message.passesToGrant = (_b = object.passesToGrant) !== null && _b !== void 0 ? _b : 0;
        message.daysToExpiration = (_c = object.daysToExpiration) !== null && _c !== void 0 ? _c : 0;
        message.action = (_d = object.action) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCMsgAMGrantGuestPasses2Response() {
    return { eresult: 0, passesGranted: 0 };
}
exports.CMsgAMGrantGuestPasses2Response = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).int32(message.eresult);
        }
        if (message.passesGranted !== 0) {
            writer.uint32(16).int32(message.passesGranted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgAMGrantGuestPasses2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 2:
                    message.passesGranted = reader.int32();
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
        const message = createBaseCMsgAMGrantGuestPasses2Response();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        message.passesGranted = (_b = object.passesGranted) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCGCSystemMsgGetAccountDetails() {
    return { steamid: Long.UZERO, appid: 0 };
}
exports.CGCSystemMsgGetAccountDetails = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        if (message.appid !== 0) {
            writer.uint32(16).uint32(message.appid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCSystemMsgGetAccountDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.appid = reader.uint32();
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
        const message = createBaseCGCSystemMsgGetAccountDetails();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.appid = (_a = object.appid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCGCSystemMsgGetAccountDetailsResponse() {
    return {
        eresultDeprecated: 0,
        accountName: "",
        personaName: "",
        isProfilePublic: false,
        isInventoryPublic: false,
        isVacBanned: false,
        isCyberCafe: false,
        isSchoolAccount: false,
        isLimited: false,
        isSubscribed: false,
        package: 0,
        isFreeTrialAccount: false,
        freeTrialExpiration: 0,
        isLowViolence: false,
        isAccountLockedDown: false,
        isCommunityBanned: false,
        isTradeBanned: false,
        tradeBanExpiration: 0,
        accountid: 0,
        suspensionEndTime: 0,
        currency: "",
        steamLevel: 0,
        friendCount: 0,
        accountCreationTime: 0,
        isSteamguardEnabled: false,
        isPhoneVerified: false,
        isTwoFactorAuthEnabled: false,
        twoFactorEnabledTime: 0,
        phoneVerificationTime: 0,
        phoneId: Long.UZERO,
        isPhoneIdentifying: false,
        rtIdentityLinked: 0,
        rtBirthDate: 0,
        txnCountryCode: "",
        hasAcceptedChinaSsa: false,
        isBannedSteamChina: false
    };
}
exports.CGCSystemMsgGetAccountDetailsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresultDeprecated !== 0) {
            writer.uint32(8).uint32(message.eresultDeprecated);
        }
        if (message.accountName !== "") {
            writer.uint32(18).string(message.accountName);
        }
        if (message.personaName !== "") {
            writer.uint32(26).string(message.personaName);
        }
        if (message.isProfilePublic === true) {
            writer.uint32(32).bool(message.isProfilePublic);
        }
        if (message.isInventoryPublic === true) {
            writer.uint32(40).bool(message.isInventoryPublic);
        }
        if (message.isVacBanned === true) {
            writer.uint32(56).bool(message.isVacBanned);
        }
        if (message.isCyberCafe === true) {
            writer.uint32(64).bool(message.isCyberCafe);
        }
        if (message.isSchoolAccount === true) {
            writer.uint32(72).bool(message.isSchoolAccount);
        }
        if (message.isLimited === true) {
            writer.uint32(80).bool(message.isLimited);
        }
        if (message.isSubscribed === true) {
            writer.uint32(88).bool(message.isSubscribed);
        }
        if (message.package !== 0) {
            writer.uint32(96).uint32(message.package);
        }
        if (message.isFreeTrialAccount === true) {
            writer.uint32(104).bool(message.isFreeTrialAccount);
        }
        if (message.freeTrialExpiration !== 0) {
            writer.uint32(112).uint32(message.freeTrialExpiration);
        }
        if (message.isLowViolence === true) {
            writer.uint32(120).bool(message.isLowViolence);
        }
        if (message.isAccountLockedDown === true) {
            writer.uint32(128).bool(message.isAccountLockedDown);
        }
        if (message.isCommunityBanned === true) {
            writer.uint32(136).bool(message.isCommunityBanned);
        }
        if (message.isTradeBanned === true) {
            writer.uint32(144).bool(message.isTradeBanned);
        }
        if (message.tradeBanExpiration !== 0) {
            writer.uint32(152).uint32(message.tradeBanExpiration);
        }
        if (message.accountid !== 0) {
            writer.uint32(160).uint32(message.accountid);
        }
        if (message.suspensionEndTime !== 0) {
            writer.uint32(168).uint32(message.suspensionEndTime);
        }
        if (message.currency !== "") {
            writer.uint32(178).string(message.currency);
        }
        if (message.steamLevel !== 0) {
            writer.uint32(184).uint32(message.steamLevel);
        }
        if (message.friendCount !== 0) {
            writer.uint32(192).uint32(message.friendCount);
        }
        if (message.accountCreationTime !== 0) {
            writer.uint32(200).uint32(message.accountCreationTime);
        }
        if (message.isSteamguardEnabled === true) {
            writer.uint32(216).bool(message.isSteamguardEnabled);
        }
        if (message.isPhoneVerified === true) {
            writer.uint32(224).bool(message.isPhoneVerified);
        }
        if (message.isTwoFactorAuthEnabled === true) {
            writer.uint32(232).bool(message.isTwoFactorAuthEnabled);
        }
        if (message.twoFactorEnabledTime !== 0) {
            writer.uint32(240).uint32(message.twoFactorEnabledTime);
        }
        if (message.phoneVerificationTime !== 0) {
            writer.uint32(248).uint32(message.phoneVerificationTime);
        }
        if (!message.phoneId.isZero()) {
            writer.uint32(264).uint64(message.phoneId);
        }
        if (message.isPhoneIdentifying === true) {
            writer.uint32(272).bool(message.isPhoneIdentifying);
        }
        if (message.rtIdentityLinked !== 0) {
            writer.uint32(280).uint32(message.rtIdentityLinked);
        }
        if (message.rtBirthDate !== 0) {
            writer.uint32(288).uint32(message.rtBirthDate);
        }
        if (message.txnCountryCode !== "") {
            writer.uint32(298).string(message.txnCountryCode);
        }
        if (message.hasAcceptedChinaSsa === true) {
            writer.uint32(304).bool(message.hasAcceptedChinaSsa);
        }
        if (message.isBannedSteamChina === true) {
            writer.uint32(312).bool(message.isBannedSteamChina);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCSystemMsgGetAccountDetailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresultDeprecated = reader.uint32();
                    break;
                case 2:
                    message.accountName = reader.string();
                    break;
                case 3:
                    message.personaName = reader.string();
                    break;
                case 4:
                    message.isProfilePublic = reader.bool();
                    break;
                case 5:
                    message.isInventoryPublic = reader.bool();
                    break;
                case 7:
                    message.isVacBanned = reader.bool();
                    break;
                case 8:
                    message.isCyberCafe = reader.bool();
                    break;
                case 9:
                    message.isSchoolAccount = reader.bool();
                    break;
                case 10:
                    message.isLimited = reader.bool();
                    break;
                case 11:
                    message.isSubscribed = reader.bool();
                    break;
                case 12:
                    message.package = reader.uint32();
                    break;
                case 13:
                    message.isFreeTrialAccount = reader.bool();
                    break;
                case 14:
                    message.freeTrialExpiration = reader.uint32();
                    break;
                case 15:
                    message.isLowViolence = reader.bool();
                    break;
                case 16:
                    message.isAccountLockedDown = reader.bool();
                    break;
                case 17:
                    message.isCommunityBanned = reader.bool();
                    break;
                case 18:
                    message.isTradeBanned = reader.bool();
                    break;
                case 19:
                    message.tradeBanExpiration = reader.uint32();
                    break;
                case 20:
                    message.accountid = reader.uint32();
                    break;
                case 21:
                    message.suspensionEndTime = reader.uint32();
                    break;
                case 22:
                    message.currency = reader.string();
                    break;
                case 23:
                    message.steamLevel = reader.uint32();
                    break;
                case 24:
                    message.friendCount = reader.uint32();
                    break;
                case 25:
                    message.accountCreationTime = reader.uint32();
                    break;
                case 27:
                    message.isSteamguardEnabled = reader.bool();
                    break;
                case 28:
                    message.isPhoneVerified = reader.bool();
                    break;
                case 29:
                    message.isTwoFactorAuthEnabled = reader.bool();
                    break;
                case 30:
                    message.twoFactorEnabledTime = reader.uint32();
                    break;
                case 31:
                    message.phoneVerificationTime = reader.uint32();
                    break;
                case 33:
                    message.phoneId = reader.uint64();
                    break;
                case 34:
                    message.isPhoneIdentifying = reader.bool();
                    break;
                case 35:
                    message.rtIdentityLinked = reader.uint32();
                    break;
                case 36:
                    message.rtBirthDate = reader.uint32();
                    break;
                case 37:
                    message.txnCountryCode = reader.string();
                    break;
                case 38:
                    message.hasAcceptedChinaSsa = reader.bool();
                    break;
                case 39:
                    message.isBannedSteamChina = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
        const message = createBaseCGCSystemMsgGetAccountDetailsResponse();
        message.eresultDeprecated = (_a = object.eresultDeprecated) !== null && _a !== void 0 ? _a : 0;
        message.accountName = (_b = object.accountName) !== null && _b !== void 0 ? _b : "";
        message.personaName = (_c = object.personaName) !== null && _c !== void 0 ? _c : "";
        message.isProfilePublic = (_d = object.isProfilePublic) !== null && _d !== void 0 ? _d : false;
        message.isInventoryPublic = (_e = object.isInventoryPublic) !== null && _e !== void 0 ? _e : false;
        message.isVacBanned = (_f = object.isVacBanned) !== null && _f !== void 0 ? _f : false;
        message.isCyberCafe = (_g = object.isCyberCafe) !== null && _g !== void 0 ? _g : false;
        message.isSchoolAccount = (_h = object.isSchoolAccount) !== null && _h !== void 0 ? _h : false;
        message.isLimited = (_j = object.isLimited) !== null && _j !== void 0 ? _j : false;
        message.isSubscribed = (_k = object.isSubscribed) !== null && _k !== void 0 ? _k : false;
        message.package = (_l = object.package) !== null && _l !== void 0 ? _l : 0;
        message.isFreeTrialAccount = (_m = object.isFreeTrialAccount) !== null && _m !== void 0 ? _m : false;
        message.freeTrialExpiration = (_o = object.freeTrialExpiration) !== null && _o !== void 0 ? _o : 0;
        message.isLowViolence = (_p = object.isLowViolence) !== null && _p !== void 0 ? _p : false;
        message.isAccountLockedDown = (_q = object.isAccountLockedDown) !== null && _q !== void 0 ? _q : false;
        message.isCommunityBanned = (_r = object.isCommunityBanned) !== null && _r !== void 0 ? _r : false;
        message.isTradeBanned = (_s = object.isTradeBanned) !== null && _s !== void 0 ? _s : false;
        message.tradeBanExpiration = (_t = object.tradeBanExpiration) !== null && _t !== void 0 ? _t : 0;
        message.accountid = (_u = object.accountid) !== null && _u !== void 0 ? _u : 0;
        message.suspensionEndTime = (_v = object.suspensionEndTime) !== null && _v !== void 0 ? _v : 0;
        message.currency = (_w = object.currency) !== null && _w !== void 0 ? _w : "";
        message.steamLevel = (_x = object.steamLevel) !== null && _x !== void 0 ? _x : 0;
        message.friendCount = (_y = object.friendCount) !== null && _y !== void 0 ? _y : 0;
        message.accountCreationTime = (_z = object.accountCreationTime) !== null && _z !== void 0 ? _z : 0;
        message.isSteamguardEnabled = (_0 = object.isSteamguardEnabled) !== null && _0 !== void 0 ? _0 : false;
        message.isPhoneVerified = (_1 = object.isPhoneVerified) !== null && _1 !== void 0 ? _1 : false;
        message.isTwoFactorAuthEnabled = (_2 = object.isTwoFactorAuthEnabled) !== null && _2 !== void 0 ? _2 : false;
        message.twoFactorEnabledTime = (_3 = object.twoFactorEnabledTime) !== null && _3 !== void 0 ? _3 : 0;
        message.phoneVerificationTime = (_4 = object.phoneVerificationTime) !== null && _4 !== void 0 ? _4 : 0;
        message.phoneId =
            object.phoneId !== undefined && object.phoneId !== null
                ? Long.fromValue(object.phoneId)
                : Long.UZERO;
        message.isPhoneIdentifying = (_5 = object.isPhoneIdentifying) !== null && _5 !== void 0 ? _5 : false;
        message.rtIdentityLinked = (_6 = object.rtIdentityLinked) !== null && _6 !== void 0 ? _6 : 0;
        message.rtBirthDate = (_7 = object.rtBirthDate) !== null && _7 !== void 0 ? _7 : 0;
        message.txnCountryCode = (_8 = object.txnCountryCode) !== null && _8 !== void 0 ? _8 : "";
        message.hasAcceptedChinaSsa = (_9 = object.hasAcceptedChinaSsa) !== null && _9 !== void 0 ? _9 : false;
        message.isBannedSteamChina = (_10 = object.isBannedSteamChina) !== null && _10 !== void 0 ? _10 : false;
        return message;
    }
};
function createBaseCMsgGCGetPersonaNames() {
    return { steamids: [] };
}
exports.CMsgGCGetPersonaNames = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.steamids) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetPersonaNames();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.steamids.push(reader.fixed64());
                        }
                    }
                    else {
                        message.steamids.push(reader.fixed64());
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
        const message = createBaseCMsgGCGetPersonaNames();
        message.steamids = ((_a = object.steamids) === null || _a === void 0 ? void 0 : _a.map(e => Long.fromValue(e))) || [];
        return message;
    }
};
function createBaseCMsgGCGetPersonaNamesResponse() {
    return { succeededLookups: [], failedLookupSteamids: [] };
}
exports.CMsgGCGetPersonaNamesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.succeededLookups) {
            exports.CMsgGCGetPersonaNamesResponse_PersonaName.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.failedLookupSteamids) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetPersonaNamesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.succeededLookups.push(exports.CMsgGCGetPersonaNamesResponse_PersonaName.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.failedLookupSteamids.push(reader.fixed64());
                        }
                    }
                    else {
                        message.failedLookupSteamids.push(reader.fixed64());
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
        const message = createBaseCMsgGCGetPersonaNamesResponse();
        message.succeededLookups =
            ((_a = object.succeededLookups) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCGetPersonaNamesResponse_PersonaName.fromPartial(e))) || [];
        message.failedLookupSteamids =
            ((_b = object.failedLookupSteamids) === null || _b === void 0 ? void 0 : _b.map(e => Long.fromValue(e))) || [];
        return message;
    }
};
function createBaseCMsgGCGetPersonaNamesResponse_PersonaName() {
    return { steamid: Long.UZERO, personaName: "" };
}
exports.CMsgGCGetPersonaNamesResponse_PersonaName = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        if (message.personaName !== "") {
            writer.uint32(18).string(message.personaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetPersonaNamesResponse_PersonaName();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.personaName = reader.string();
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
        const message = createBaseCMsgGCGetPersonaNamesResponse_PersonaName();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.personaName = (_a = object.personaName) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCMsgGCCheckFriendship() {
    return { steamidLeft: Long.UZERO, steamidRight: Long.UZERO };
}
exports.CMsgGCCheckFriendship = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamidLeft.isZero()) {
            writer.uint32(9).fixed64(message.steamidLeft);
        }
        if (!message.steamidRight.isZero()) {
            writer.uint32(17).fixed64(message.steamidRight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCheckFriendship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamidLeft = reader.fixed64();
                    break;
                case 2:
                    message.steamidRight = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCCheckFriendship();
        message.steamidLeft =
            object.steamidLeft !== undefined && object.steamidLeft !== null
                ? Long.fromValue(object.steamidLeft)
                : Long.UZERO;
        message.steamidRight =
            object.steamidRight !== undefined && object.steamidRight !== null
                ? Long.fromValue(object.steamidRight)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCCheckFriendshipResponse() {
    return { success: false, foundFriendship: false };
}
exports.CMsgGCCheckFriendshipResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        if (message.foundFriendship === true) {
            writer.uint32(16).bool(message.foundFriendship);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCCheckFriendshipResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.foundFriendship = reader.bool();
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
        const message = createBaseCMsgGCCheckFriendshipResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        message.foundFriendship = (_b = object.foundFriendship) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetDirectory() {
    return { masterDirIndex: 0, dir: [] };
}
exports.CMsgGCMsgMasterSetDirectory = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.masterDirIndex !== 0) {
            writer.uint32(8).uint32(message.masterDirIndex);
        }
        for (const v of message.dir) {
            exports.CMsgGCMsgMasterSetDirectory_SubGC.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetDirectory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.masterDirIndex = reader.uint32();
                    break;
                case 2:
                    message.dir.push(exports.CMsgGCMsgMasterSetDirectory_SubGC.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgGCMsgMasterSetDirectory();
        message.masterDirIndex = (_a = object.masterDirIndex) !== null && _a !== void 0 ? _a : 0;
        message.dir =
            ((_b = object.dir) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCMsgMasterSetDirectory_SubGC.fromPartial(e))) ||
                [];
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetDirectory_SubGC() {
    return { dirIndex: 0, name: "", box: "", commandLine: "", gcBinary: "" };
}
exports.CMsgGCMsgMasterSetDirectory_SubGC = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dirIndex !== 0) {
            writer.uint32(8).uint32(message.dirIndex);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.box !== "") {
            writer.uint32(26).string(message.box);
        }
        if (message.commandLine !== "") {
            writer.uint32(34).string(message.commandLine);
        }
        if (message.gcBinary !== "") {
            writer.uint32(42).string(message.gcBinary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetDirectory_SubGC();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dirIndex = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.box = reader.string();
                    break;
                case 4:
                    message.commandLine = reader.string();
                    break;
                case 5:
                    message.gcBinary = reader.string();
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
        const message = createBaseCMsgGCMsgMasterSetDirectory_SubGC();
        message.dirIndex = (_a = object.dirIndex) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.box = (_c = object.box) !== null && _c !== void 0 ? _c : "";
        message.commandLine = (_d = object.commandLine) !== null && _d !== void 0 ? _d : "";
        message.gcBinary = (_e = object.gcBinary) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetDirectoryResponse() {
    return { eresult: 0, message: "" };
}
exports.CMsgGCMsgMasterSetDirectoryResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).int32(message.eresult);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetDirectoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
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
        const message = createBaseCMsgGCMsgMasterSetDirectoryResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgGCMsgWebAPIJobRequestForwardResponse() {
    return { dirIndex: 0 };
}
exports.CMsgGCMsgWebAPIJobRequestForwardResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dirIndex !== 0) {
            writer.uint32(8).uint32(message.dirIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgWebAPIJobRequestForwardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dirIndex = reader.uint32();
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
        const message = createBaseCMsgGCMsgWebAPIJobRequestForwardResponse();
        message.dirIndex = (_a = object.dirIndex) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCGCSystemMsgGetPurchaseTrustRequest() {
    return { steamid: Long.UZERO };
}
exports.CGCSystemMsgGetPurchaseTrustRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCSystemMsgGetPurchaseTrustRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCGCSystemMsgGetPurchaseTrustRequest();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCGCSystemMsgGetPurchaseTrustResponse() {
    return {
        hasPriorPurchaseHistory: false,
        hasNoRecentPasswordResets: false,
        isWalletCashTrusted: false,
        timeAllTrusted: 0
    };
}
exports.CGCSystemMsgGetPurchaseTrustResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hasPriorPurchaseHistory === true) {
            writer.uint32(8).bool(message.hasPriorPurchaseHistory);
        }
        if (message.hasNoRecentPasswordResets === true) {
            writer.uint32(16).bool(message.hasNoRecentPasswordResets);
        }
        if (message.isWalletCashTrusted === true) {
            writer.uint32(24).bool(message.isWalletCashTrusted);
        }
        if (message.timeAllTrusted !== 0) {
            writer.uint32(32).uint32(message.timeAllTrusted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCGCSystemMsgGetPurchaseTrustResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hasPriorPurchaseHistory = reader.bool();
                    break;
                case 2:
                    message.hasNoRecentPasswordResets = reader.bool();
                    break;
                case 3:
                    message.isWalletCashTrusted = reader.bool();
                    break;
                case 4:
                    message.timeAllTrusted = reader.uint32();
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
        const message = createBaseCGCSystemMsgGetPurchaseTrustResponse();
        message.hasPriorPurchaseHistory = (_a = object.hasPriorPurchaseHistory) !== null && _a !== void 0 ? _a : false;
        message.hasNoRecentPasswordResets =
            (_b = object.hasNoRecentPasswordResets) !== null && _b !== void 0 ? _b : false;
        message.isWalletCashTrusted = (_c = object.isWalletCashTrusted) !== null && _c !== void 0 ? _c : false;
        message.timeAllTrusted = (_d = object.timeAllTrusted) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseCMsgGCHAccountVacStatusChange() {
    return {
        steamId: Long.UZERO,
        appId: 0,
        rtimeVacbanStarts: 0,
        isBannedNow: false,
        isBannedFuture: false
    };
}
exports.CMsgGCHAccountVacStatusChange = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamId.isZero()) {
            writer.uint32(9).fixed64(message.steamId);
        }
        if (message.appId !== 0) {
            writer.uint32(16).uint32(message.appId);
        }
        if (message.rtimeVacbanStarts !== 0) {
            writer.uint32(24).uint32(message.rtimeVacbanStarts);
        }
        if (message.isBannedNow === true) {
            writer.uint32(32).bool(message.isBannedNow);
        }
        if (message.isBannedFuture === true) {
            writer.uint32(40).bool(message.isBannedFuture);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCHAccountVacStatusChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamId = reader.fixed64();
                    break;
                case 2:
                    message.appId = reader.uint32();
                    break;
                case 3:
                    message.rtimeVacbanStarts = reader.uint32();
                    break;
                case 4:
                    message.isBannedNow = reader.bool();
                    break;
                case 5:
                    message.isBannedFuture = reader.bool();
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
        const message = createBaseCMsgGCHAccountVacStatusChange();
        message.steamId =
            object.steamId !== undefined && object.steamId !== null
                ? Long.fromValue(object.steamId)
                : Long.UZERO;
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : 0;
        message.rtimeVacbanStarts = (_b = object.rtimeVacbanStarts) !== null && _b !== void 0 ? _b : 0;
        message.isBannedNow = (_c = object.isBannedNow) !== null && _c !== void 0 ? _c : false;
        message.isBannedFuture = (_d = object.isBannedFuture) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseCMsgGCGetPartnerAccountLink() {
    return { steamid: Long.UZERO };
}
exports.CMsgGCGetPartnerAccountLink = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetPartnerAccountLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCMsgGCGetPartnerAccountLink();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgGCGetPartnerAccountLinkResponse() {
    return {
        pwid: 0,
        nexonid: 0,
        ageclass: 0,
        idVerified: false,
        isAdult: false
    };
}
exports.CMsgGCGetPartnerAccountLinkResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pwid !== 0) {
            writer.uint32(8).uint32(message.pwid);
        }
        if (message.nexonid !== 0) {
            writer.uint32(16).uint32(message.nexonid);
        }
        if (message.ageclass !== 0) {
            writer.uint32(24).int32(message.ageclass);
        }
        if (message.idVerified === true) {
            writer.uint32(32).bool(message.idVerified);
        }
        if (message.isAdult === true) {
            writer.uint32(40).bool(message.isAdult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCGetPartnerAccountLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pwid = reader.uint32();
                    break;
                case 2:
                    message.nexonid = reader.uint32();
                    break;
                case 3:
                    message.ageclass = reader.int32();
                    break;
                case 4:
                    message.idVerified = reader.bool();
                    break;
                case 5:
                    message.isAdult = reader.bool();
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
        const message = createBaseCMsgGCGetPartnerAccountLinkResponse();
        message.pwid = (_a = object.pwid) !== null && _a !== void 0 ? _a : 0;
        message.nexonid = (_b = object.nexonid) !== null && _b !== void 0 ? _b : 0;
        message.ageclass = (_c = object.ageclass) !== null && _c !== void 0 ? _c : 0;
        message.idVerified = (_d = object.idVerified) !== null && _d !== void 0 ? _d : false;
        message.isAdult = (_e = object.isAdult) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseCMsgGCRoutingInfo() {
    return {
        dirIndex: [],
        method: 0,
        fallback: 0,
        protobufField: 0,
        webapiParam: ""
    };
}
exports.CMsgGCRoutingInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.dirIndex) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        if (message.fallback !== 0) {
            writer.uint32(24).int32(message.fallback);
        }
        if (message.protobufField !== 0) {
            writer.uint32(32).uint32(message.protobufField);
        }
        if (message.webapiParam !== "") {
            writer.uint32(42).string(message.webapiParam);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCRoutingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.dirIndex.push(reader.uint32());
                        }
                    }
                    else {
                        message.dirIndex.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.method = reader.int32();
                    break;
                case 3:
                    message.fallback = reader.int32();
                    break;
                case 4:
                    message.protobufField = reader.uint32();
                    break;
                case 5:
                    message.webapiParam = reader.string();
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
        const message = createBaseCMsgGCRoutingInfo();
        message.dirIndex = ((_a = object.dirIndex) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        message.fallback = (_c = object.fallback) !== null && _c !== void 0 ? _c : 0;
        message.protobufField = (_d = object.protobufField) !== null && _d !== void 0 ? _d : 0;
        message.webapiParam = (_e = object.webapiParam) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetWebAPIRouting() {
    return { entries: [] };
}
exports.CMsgGCMsgMasterSetWebAPIRouting = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCMsgMasterSetWebAPIRouting_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetWebAPIRouting();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CMsgGCMsgMasterSetWebAPIRouting_Entry.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgGCMsgMasterSetWebAPIRouting();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCMsgMasterSetWebAPIRouting_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry() {
    return { interfaceName: "", methodName: "", routing: undefined };
}
exports.CMsgGCMsgMasterSetWebAPIRouting_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        if (message.methodName !== "") {
            writer.uint32(18).string(message.methodName);
        }
        if (message.routing !== undefined) {
            exports.CMsgGCRoutingInfo.encode(message.routing, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceName = reader.string();
                    break;
                case 2:
                    message.methodName = reader.string();
                    break;
                case 3:
                    message.routing = exports.CMsgGCRoutingInfo.decode(reader, reader.uint32());
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
        const message = createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry();
        message.interfaceName = (_a = object.interfaceName) !== null && _a !== void 0 ? _a : "";
        message.methodName = (_b = object.methodName) !== null && _b !== void 0 ? _b : "";
        message.routing =
            object.routing !== undefined && object.routing !== null
                ? exports.CMsgGCRoutingInfo.fromPartial(object.routing)
                : undefined;
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetClientMsgRouting() {
    return { entries: [] };
}
exports.CMsgGCMsgMasterSetClientMsgRouting = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCMsgMasterSetClientMsgRouting_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetClientMsgRouting();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CMsgGCMsgMasterSetClientMsgRouting_Entry.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgGCMsgMasterSetClientMsgRouting();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map(e => exports.CMsgGCMsgMasterSetClientMsgRouting_Entry.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry() {
    return { msgType: 0, routing: undefined };
}
exports.CMsgGCMsgMasterSetClientMsgRouting_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msgType !== 0) {
            writer.uint32(8).uint32(message.msgType);
        }
        if (message.routing !== undefined) {
            exports.CMsgGCRoutingInfo.encode(message.routing, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.uint32();
                    break;
                case 2:
                    message.routing = exports.CMsgGCRoutingInfo.decode(reader, reader.uint32());
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
        const message = createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry();
        message.msgType = (_a = object.msgType) !== null && _a !== void 0 ? _a : 0;
        message.routing =
            object.routing !== undefined && object.routing !== null
                ? exports.CMsgGCRoutingInfo.fromPartial(object.routing)
                : undefined;
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse() {
    return { eresult: 0 };
}
exports.CMsgGCMsgMasterSetWebAPIRoutingResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).int32(message.eresult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
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
        const message = createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse() {
    return { eresult: 0 };
}
exports.CMsgGCMsgMasterSetClientMsgRoutingResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).int32(message.eresult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
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
        const message = createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCMsgGCMsgSetOptions() {
    return { options: [], clientMsgRanges: [] };
}
exports.CMsgGCMsgSetOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.options) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.clientMsgRanges) {
            exports.CMsgGCMsgSetOptions_MessageRange.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgSetOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.options.push(reader.int32());
                        }
                    }
                    else {
                        message.options.push(reader.int32());
                    }
                    break;
                case 2:
                    message.clientMsgRanges.push(exports.CMsgGCMsgSetOptions_MessageRange.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgGCMsgSetOptions();
        message.options = ((_a = object.options) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        message.clientMsgRanges =
            ((_b = object.clientMsgRanges) === null || _b === void 0 ? void 0 : _b.map(e => exports.CMsgGCMsgSetOptions_MessageRange.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgGCMsgSetOptions_MessageRange() {
    return { low: 0, high: 0 };
}
exports.CMsgGCMsgSetOptions_MessageRange = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.low !== 0) {
            writer.uint32(8).uint32(message.low);
        }
        if (message.high !== 0) {
            writer.uint32(16).uint32(message.high);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCMsgSetOptions_MessageRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.low = reader.uint32();
                    break;
                case 2:
                    message.high = reader.uint32();
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
        const message = createBaseCMsgGCMsgSetOptions_MessageRange();
        message.low = (_a = object.low) !== null && _a !== void 0 ? _a : 0;
        message.high = (_b = object.high) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCMsgGCHUpdateSession() {
    return {
        steamId: Long.UZERO,
        appId: 0,
        online: false,
        serverSteamId: Long.UZERO,
        serverAddr: 0,
        serverPort: 0,
        osType: 0,
        clientAddr: 0,
        extraFields: [],
        ownerId: Long.UZERO,
        cmSessionSysid: 0,
        cmSessionIdentifier: 0,
        depotIds: []
    };
}
exports.CMsgGCHUpdateSession = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamId.isZero()) {
            writer.uint32(9).fixed64(message.steamId);
        }
        if (message.appId !== 0) {
            writer.uint32(16).uint32(message.appId);
        }
        if (message.online === true) {
            writer.uint32(24).bool(message.online);
        }
        if (!message.serverSteamId.isZero()) {
            writer.uint32(33).fixed64(message.serverSteamId);
        }
        if (message.serverAddr !== 0) {
            writer.uint32(40).uint32(message.serverAddr);
        }
        if (message.serverPort !== 0) {
            writer.uint32(48).uint32(message.serverPort);
        }
        if (message.osType !== 0) {
            writer.uint32(56).uint32(message.osType);
        }
        if (message.clientAddr !== 0) {
            writer.uint32(64).uint32(message.clientAddr);
        }
        for (const v of message.extraFields) {
            exports.CMsgGCHUpdateSession_ExtraField.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (!message.ownerId.isZero()) {
            writer.uint32(81).fixed64(message.ownerId);
        }
        if (message.cmSessionSysid !== 0) {
            writer.uint32(88).uint32(message.cmSessionSysid);
        }
        if (message.cmSessionIdentifier !== 0) {
            writer.uint32(96).uint32(message.cmSessionIdentifier);
        }
        writer.uint32(106).fork();
        for (const v of message.depotIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCHUpdateSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamId = reader.fixed64();
                    break;
                case 2:
                    message.appId = reader.uint32();
                    break;
                case 3:
                    message.online = reader.bool();
                    break;
                case 4:
                    message.serverSteamId = reader.fixed64();
                    break;
                case 5:
                    message.serverAddr = reader.uint32();
                    break;
                case 6:
                    message.serverPort = reader.uint32();
                    break;
                case 7:
                    message.osType = reader.uint32();
                    break;
                case 8:
                    message.clientAddr = reader.uint32();
                    break;
                case 9:
                    message.extraFields.push(exports.CMsgGCHUpdateSession_ExtraField.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.ownerId = reader.fixed64();
                    break;
                case 11:
                    message.cmSessionSysid = reader.uint32();
                    break;
                case 12:
                    message.cmSessionIdentifier = reader.uint32();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.depotIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.depotIds.push(reader.uint32());
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseCMsgGCHUpdateSession();
        message.steamId =
            object.steamId !== undefined && object.steamId !== null
                ? Long.fromValue(object.steamId)
                : Long.UZERO;
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : 0;
        message.online = (_b = object.online) !== null && _b !== void 0 ? _b : false;
        message.serverSteamId =
            object.serverSteamId !== undefined && object.serverSteamId !== null
                ? Long.fromValue(object.serverSteamId)
                : Long.UZERO;
        message.serverAddr = (_c = object.serverAddr) !== null && _c !== void 0 ? _c : 0;
        message.serverPort = (_d = object.serverPort) !== null && _d !== void 0 ? _d : 0;
        message.osType = (_e = object.osType) !== null && _e !== void 0 ? _e : 0;
        message.clientAddr = (_f = object.clientAddr) !== null && _f !== void 0 ? _f : 0;
        message.extraFields =
            ((_g = object.extraFields) === null || _g === void 0 ? void 0 : _g.map(e => exports.CMsgGCHUpdateSession_ExtraField.fromPartial(e))) || [];
        message.ownerId =
            object.ownerId !== undefined && object.ownerId !== null
                ? Long.fromValue(object.ownerId)
                : Long.UZERO;
        message.cmSessionSysid = (_h = object.cmSessionSysid) !== null && _h !== void 0 ? _h : 0;
        message.cmSessionIdentifier = (_j = object.cmSessionIdentifier) !== null && _j !== void 0 ? _j : 0;
        message.depotIds = ((_k = object.depotIds) === null || _k === void 0 ? void 0 : _k.map(e => e)) || [];
        return message;
    }
};
function createBaseCMsgGCHUpdateSession_ExtraField() {
    return { name: "", value: "" };
}
exports.CMsgGCHUpdateSession_ExtraField = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgGCHUpdateSession_ExtraField();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        const message = createBaseCMsgGCHUpdateSession_ExtraField();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCMsgNotificationOfSuspiciousActivity() {
    return { steamid: Long.UZERO, appid: 0, multipleInstances: undefined };
}
exports.CMsgNotificationOfSuspiciousActivity = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (!message.steamid.isZero()) {
            writer.uint32(9).fixed64(message.steamid);
        }
        if (message.appid !== 0) {
            writer.uint32(16).uint32(message.appid);
        }
        if (message.multipleInstances !== undefined) {
            exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.encode(message.multipleInstances, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgNotificationOfSuspiciousActivity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.multipleInstances = exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.decode(reader, reader.uint32());
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
        const message = createBaseCMsgNotificationOfSuspiciousActivity();
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.appid = (_a = object.appid) !== null && _a !== void 0 ? _a : 0;
        message.multipleInstances =
            object.multipleInstances !== undefined &&
                object.multipleInstances !== null
                ? exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.fromPartial(object.multipleInstances)
                : undefined;
        return message;
    }
};
function createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances() {
    return { appInstanceCount: 0, otherSteamids: [] };
}
exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.appInstanceCount !== 0) {
            writer.uint32(8).uint32(message.appInstanceCount);
        }
        writer.uint32(18).fork();
        for (const v of message.otherSteamids) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appInstanceCount = reader.uint32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.otherSteamids.push(reader.fixed64());
                        }
                    }
                    else {
                        message.otherSteamids.push(reader.fixed64());
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
        const message = createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances();
        message.appInstanceCount = (_a = object.appInstanceCount) !== null && _a !== void 0 ? _a : 0;
        message.otherSteamids =
            ((_b = object.otherSteamids) === null || _b === void 0 ? void 0 : _b.map(e => Long.fromValue(e))) || [];
        return message;
    }
};
function createBaseCMsgDPPartnerMicroTxns() {
    return { appid: 0, gcName: "", partner: undefined, transactions: [] };
}
exports.CMsgDPPartnerMicroTxns = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.appid !== 0) {
            writer.uint32(8).uint32(message.appid);
        }
        if (message.gcName !== "") {
            writer.uint32(18).string(message.gcName);
        }
        if (message.partner !== undefined) {
            exports.CMsgDPPartnerMicroTxns_PartnerInfo.encode(message.partner, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.transactions) {
            exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgDPPartnerMicroTxns();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.gcName = reader.string();
                    break;
                case 3:
                    message.partner = exports.CMsgDPPartnerMicroTxns_PartnerInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.transactions.push(exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn.decode(reader, reader.uint32()));
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
        const message = createBaseCMsgDPPartnerMicroTxns();
        message.appid = (_a = object.appid) !== null && _a !== void 0 ? _a : 0;
        message.gcName = (_b = object.gcName) !== null && _b !== void 0 ? _b : "";
        message.partner =
            object.partner !== undefined && object.partner !== null
                ? exports.CMsgDPPartnerMicroTxns_PartnerInfo.fromPartial(object.partner)
                : undefined;
        message.transactions =
            ((_c = object.transactions) === null || _c === void 0 ? void 0 : _c.map(e => exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn.fromPartial(e))) || [];
        return message;
    }
};
function createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn() {
    return {
        initTime: 0,
        lastUpdateTime: 0,
        txnId: Long.UZERO,
        accountId: 0,
        lineItem: 0,
        itemId: Long.UZERO,
        defIndex: 0,
        price: Long.UZERO,
        tax: Long.UZERO,
        priceUsd: Long.UZERO,
        taxUsd: Long.UZERO,
        purchaseType: 0,
        steamTxnType: 0,
        countryCode: "",
        regionCode: "",
        quantity: 0,
        refTransId: Long.UZERO
    };
}
exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.initTime !== 0) {
            writer.uint32(8).uint32(message.initTime);
        }
        if (message.lastUpdateTime !== 0) {
            writer.uint32(16).uint32(message.lastUpdateTime);
        }
        if (!message.txnId.isZero()) {
            writer.uint32(24).uint64(message.txnId);
        }
        if (message.accountId !== 0) {
            writer.uint32(32).uint32(message.accountId);
        }
        if (message.lineItem !== 0) {
            writer.uint32(40).uint32(message.lineItem);
        }
        if (!message.itemId.isZero()) {
            writer.uint32(48).uint64(message.itemId);
        }
        if (message.defIndex !== 0) {
            writer.uint32(56).uint32(message.defIndex);
        }
        if (!message.price.isZero()) {
            writer.uint32(64).uint64(message.price);
        }
        if (!message.tax.isZero()) {
            writer.uint32(72).uint64(message.tax);
        }
        if (!message.priceUsd.isZero()) {
            writer.uint32(80).uint64(message.priceUsd);
        }
        if (!message.taxUsd.isZero()) {
            writer.uint32(88).uint64(message.taxUsd);
        }
        if (message.purchaseType !== 0) {
            writer.uint32(96).uint32(message.purchaseType);
        }
        if (message.steamTxnType !== 0) {
            writer.uint32(104).uint32(message.steamTxnType);
        }
        if (message.countryCode !== "") {
            writer.uint32(114).string(message.countryCode);
        }
        if (message.regionCode !== "") {
            writer.uint32(122).string(message.regionCode);
        }
        if (message.quantity !== 0) {
            writer.uint32(128).int32(message.quantity);
        }
        if (!message.refTransId.isZero()) {
            writer.uint32(136).uint64(message.refTransId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initTime = reader.uint32();
                    break;
                case 2:
                    message.lastUpdateTime = reader.uint32();
                    break;
                case 3:
                    message.txnId = reader.uint64();
                    break;
                case 4:
                    message.accountId = reader.uint32();
                    break;
                case 5:
                    message.lineItem = reader.uint32();
                    break;
                case 6:
                    message.itemId = reader.uint64();
                    break;
                case 7:
                    message.defIndex = reader.uint32();
                    break;
                case 8:
                    message.price = reader.uint64();
                    break;
                case 9:
                    message.tax = reader.uint64();
                    break;
                case 10:
                    message.priceUsd = reader.uint64();
                    break;
                case 11:
                    message.taxUsd = reader.uint64();
                    break;
                case 12:
                    message.purchaseType = reader.uint32();
                    break;
                case 13:
                    message.steamTxnType = reader.uint32();
                    break;
                case 14:
                    message.countryCode = reader.string();
                    break;
                case 15:
                    message.regionCode = reader.string();
                    break;
                case 16:
                    message.quantity = reader.int32();
                    break;
                case 17:
                    message.refTransId = reader.uint64();
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
        const message = createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn();
        message.initTime = (_a = object.initTime) !== null && _a !== void 0 ? _a : 0;
        message.lastUpdateTime = (_b = object.lastUpdateTime) !== null && _b !== void 0 ? _b : 0;
        message.txnId =
            object.txnId !== undefined && object.txnId !== null
                ? Long.fromValue(object.txnId)
                : Long.UZERO;
        message.accountId = (_c = object.accountId) !== null && _c !== void 0 ? _c : 0;
        message.lineItem = (_d = object.lineItem) !== null && _d !== void 0 ? _d : 0;
        message.itemId =
            object.itemId !== undefined && object.itemId !== null
                ? Long.fromValue(object.itemId)
                : Long.UZERO;
        message.defIndex = (_e = object.defIndex) !== null && _e !== void 0 ? _e : 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? Long.fromValue(object.price)
                : Long.UZERO;
        message.tax =
            object.tax !== undefined && object.tax !== null
                ? Long.fromValue(object.tax)
                : Long.UZERO;
        message.priceUsd =
            object.priceUsd !== undefined && object.priceUsd !== null
                ? Long.fromValue(object.priceUsd)
                : Long.UZERO;
        message.taxUsd =
            object.taxUsd !== undefined && object.taxUsd !== null
                ? Long.fromValue(object.taxUsd)
                : Long.UZERO;
        message.purchaseType = (_f = object.purchaseType) !== null && _f !== void 0 ? _f : 0;
        message.steamTxnType = (_g = object.steamTxnType) !== null && _g !== void 0 ? _g : 0;
        message.countryCode = (_h = object.countryCode) !== null && _h !== void 0 ? _h : "";
        message.regionCode = (_j = object.regionCode) !== null && _j !== void 0 ? _j : "";
        message.quantity = (_k = object.quantity) !== null && _k !== void 0 ? _k : 0;
        message.refTransId =
            object.refTransId !== undefined && object.refTransId !== null
                ? Long.fromValue(object.refTransId)
                : Long.UZERO;
        return message;
    }
};
function createBaseCMsgDPPartnerMicroTxns_PartnerInfo() {
    return { partnerId: 0, partnerName: "", currencyCode: "", currencyName: "" };
}
exports.CMsgDPPartnerMicroTxns_PartnerInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.partnerId !== 0) {
            writer.uint32(8).uint32(message.partnerId);
        }
        if (message.partnerName !== "") {
            writer.uint32(18).string(message.partnerName);
        }
        if (message.currencyCode !== "") {
            writer.uint32(26).string(message.currencyCode);
        }
        if (message.currencyName !== "") {
            writer.uint32(34).string(message.currencyName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgDPPartnerMicroTxns_PartnerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partnerId = reader.uint32();
                    break;
                case 2:
                    message.partnerName = reader.string();
                    break;
                case 3:
                    message.currencyCode = reader.string();
                    break;
                case 4:
                    message.currencyName = reader.string();
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
        const message = createBaseCMsgDPPartnerMicroTxns_PartnerInfo();
        message.partnerId = (_a = object.partnerId) !== null && _a !== void 0 ? _a : 0;
        message.partnerName = (_b = object.partnerName) !== null && _b !== void 0 ? _b : "";
        message.currencyCode = (_c = object.currencyCode) !== null && _c !== void 0 ? _c : "";
        message.currencyName = (_d = object.currencyName) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseCMsgDPPartnerMicroTxnsResponse() {
    return { eresult: 0, eerrorcode: 0 };
}
exports.CMsgDPPartnerMicroTxnsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.eresult !== 0) {
            writer.uint32(8).uint32(message.eresult);
        }
        if (message.eerrorcode !== 0) {
            writer.uint32(16).int32(message.eerrorcode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgDPPartnerMicroTxnsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                case 2:
                    message.eerrorcode = reader.int32();
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
        const message = createBaseCMsgDPPartnerMicroTxnsResponse();
        message.eresult = (_a = object.eresult) !== null && _a !== void 0 ? _a : 0;
        message.eerrorcode = (_b = object.eerrorcode) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCChinaAgreementSessionsStartAgreementSessionInGameRequest() {
    return { appid: 0, steamid: Long.UZERO, clientIpaddress: "" };
}
exports.CChinaAgreementSessionsStartAgreementSessionInGameRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.appid !== 0) {
            writer.uint32(8).uint32(message.appid);
        }
        if (!message.steamid.isZero()) {
            writer.uint32(17).fixed64(message.steamid);
        }
        if (message.clientIpaddress !== "") {
            writer.uint32(26).string(message.clientIpaddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                case 3:
                    message.clientIpaddress = reader.string();
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
        const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameRequest();
        message.appid = (_a = object.appid) !== null && _a !== void 0 ? _a : 0;
        message.steamid =
            object.steamid !== undefined && object.steamid !== null
                ? Long.fromValue(object.steamid)
                : Long.UZERO;
        message.clientIpaddress = (_b = object.clientIpaddress) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCChinaAgreementSessionsStartAgreementSessionInGameResponse() {
    return { agreementUrl: "" };
}
exports.CChinaAgreementSessionsStartAgreementSessionInGameResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.agreementUrl !== "") {
            writer.uint32(10).string(message.agreementUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementUrl = reader.string();
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
        const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameResponse();
        message.agreementUrl = (_a = object.agreementUrl) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=steammessages.js.map