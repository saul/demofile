"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CChinaAgreementSessionsStartAgreementSessionInGameResponse = exports.CChinaAgreementSessionsStartAgreementSessionInGameRequest = exports.CMsgDPPartnerMicroTxnsResponse = exports.CMsgDPPartnerMicroTxns_PartnerInfo = exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn = exports.CMsgDPPartnerMicroTxns = exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = exports.CMsgNotificationOfSuspiciousActivity = exports.CMsgGCHUpdateSession_ExtraField = exports.CMsgGCHUpdateSession = exports.CMsgGCMsgSetOptions_MessageRange = exports.CMsgGCMsgSetOptions = exports.CMsgGCMsgMasterSetClientMsgRoutingResponse = exports.CMsgGCMsgMasterSetWebAPIRoutingResponse = exports.CMsgGCMsgMasterSetClientMsgRouting_Entry = exports.CMsgGCMsgMasterSetClientMsgRouting = exports.CMsgGCMsgMasterSetWebAPIRouting_Entry = exports.CMsgGCMsgMasterSetWebAPIRouting = exports.CMsgGCRoutingInfo = exports.CMsgGCGetPartnerAccountLinkResponse = exports.CMsgGCGetPartnerAccountLink = exports.CMsgGCHAccountVacStatusChange = exports.CGCSystemMsgGetPurchaseTrustResponse = exports.CGCSystemMsgGetPurchaseTrustRequest = exports.CMsgGCMsgWebAPIJobRequestForwardResponse = exports.CMsgGCMsgMasterSetDirectoryResponse = exports.CMsgGCMsgMasterSetDirectory_SubGC = exports.CMsgGCMsgMasterSetDirectory = exports.CMsgGCCheckFriendshipResponse = exports.CMsgGCCheckFriendship = exports.CMsgGCGetPersonaNamesResponse_PersonaName = exports.CMsgGCGetPersonaNamesResponse = exports.CMsgGCGetPersonaNames = exports.CGCSystemMsgGetAccountDetailsResponse = exports.CGCSystemMsgGetAccountDetails = exports.CMsgAMGrantGuestPasses2Response = exports.CMsgAMGrantGuestPasses2 = exports.CMsgGCGetEmailTemplateResponse = exports.CMsgGCGetEmailTemplate = exports.CMsgAMSendEmailResponse = exports.CMsgAMSendEmail_PersonaNameReplacementToken = exports.CMsgAMSendEmail_ReplacementToken = exports.CMsgAMSendEmail = exports.CGCMsgGetSystemStatsResponse = exports.CGCMsgGetSystemStats = exports.CGCMsgSystemStatsSchema = exports.CGCMsgGetIPLocationResponse = exports.CIPLocationInfo = exports.CGCMsgGetIPLocation = exports.CMsgAMAddFreeLicenseResponse = exports.CMsgAMAddFreeLicense = exports.CGCMsgSQLStatsResponse = exports.CGCMsgSQLStats = exports.CGCMsgMemCachedStatsResponse = exports.CGCMsgMemCachedStats = exports.CGCMsgMemCachedDelete = exports.CGCMsgMemCachedSet_KeyPair = exports.CGCMsgMemCachedSet = exports.CGCMsgMemCachedGetResponse_ValueTag = exports.CGCMsgMemCachedGetResponse = exports.CGCMsgMemCachedGet = exports.CMsgGCGetCommandListResponse = exports.CMsgGCGetCommandList = exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks = exports.CMsgAMGetUserGameStatsResponse_Stats = exports.CMsgAMGetUserGameStatsResponse = exports.CMsgAMGetUserGameStats = exports.CMsgAMGetLicensesResponse = exports.CMsgPackageLicense = exports.CMsgAMGetLicenses = exports.CMsgNotifyWatchdog = exports.CMsgAMFindAccountsResponse = exports.CMsgAMFindAccounts = exports.CMsgHttpResponse_ResponseHeader = exports.CMsgHttpResponse = exports.CMsgWebAPIRequest = exports.CMsgHttpRequest_QueryParam = exports.CMsgHttpRequest_RequestHeader = exports.CMsgHttpRequest = exports.CMsgWebAPIKey = exports.CMsgProtoBufHeader = exports.CMsgDPPartnerMicroTxnsResponse_EErrorCode = exports.CMsgGCMsgSetOptions_Option = exports.CMsgGCRoutingInfo_RoutingMethod = exports.GCProtoBufMsgSrc = exports.protobufPackage = void 0;
/* tslint:disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const baseCMsgProtoBufHeader = {
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
const baseCMsgWebAPIKey = {
    status: 0,
    accountId: 0,
    publisherGroupId: 0,
    keyId: 0,
    domain: ""
};
const baseCMsgHttpRequest = {
    requestMethod: 0,
    hostname: "",
    url: "",
    absoluteTimeout: 0
};
const baseCMsgHttpRequest_RequestHeader = {
    name: "",
    value: ""
};
const baseCMsgHttpRequest_QueryParam = {
    name: ""
};
const baseCMsgWebAPIRequest = {
    UNUSEDJobName: "",
    interfaceName: "",
    methodName: "",
    version: 0,
    routingAppId: 0
};
const baseCMsgHttpResponse = {
    statusCode: 0
};
const baseCMsgHttpResponse_ResponseHeader = {
    name: "",
    value: ""
};
const baseCMsgAMFindAccounts = {
    searchType: 0,
    searchString: ""
};
const baseCMsgAMFindAccountsResponse = {
    steamId: Long.UZERO
};
const baseCMsgNotifyWatchdog = {
    source: 0,
    alertType: 0,
    alertDestination: 0,
    critical: false,
    time: 0,
    appid: 0,
    text: ""
};
const baseCMsgAMGetLicenses = {
    steamid: Long.UZERO
};
const baseCMsgPackageLicense = {
    packageId: 0,
    timeCreated: 0,
    ownerId: 0
};
const baseCMsgAMGetLicensesResponse = {
    result: 0
};
const baseCMsgAMGetUserGameStats = {
    steamId: Long.UZERO,
    gameId: Long.UZERO,
    stats: 0
};
const baseCMsgAMGetUserGameStatsResponse = {
    steamId: Long.UZERO,
    gameId: Long.UZERO,
    eresult: 0
};
const baseCMsgAMGetUserGameStatsResponse_Stats = {
    statId: 0,
    statValue: 0
};
const baseCMsgAMGetUserGameStatsResponse_AchievementBlocks = {
    achievementId: 0,
    achievementBitId: 0,
    unlockTime: 0
};
const baseCMsgGCGetCommandList = {
    appId: 0,
    commandPrefix: ""
};
const baseCMsgGCGetCommandListResponse = {
    commandName: ""
};
const baseCGCMsgMemCachedGet = {
    keys: ""
};
const baseCGCMsgMemCachedGetResponse = {};
const baseCGCMsgMemCachedGetResponse_ValueTag = {
    found: false
};
const baseCGCMsgMemCachedSet = {};
const baseCGCMsgMemCachedSet_KeyPair = {
    name: ""
};
const baseCGCMsgMemCachedDelete = {
    keys: ""
};
const baseCGCMsgMemCachedStats = {};
const baseCGCMsgMemCachedStatsResponse = {
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
const baseCGCMsgSQLStats = {
    schemaCatalog: 0
};
const baseCGCMsgSQLStatsResponse = {
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
const baseCMsgAMAddFreeLicense = {
    steamid: Long.UZERO,
    ipPublic: 0,
    packageid: 0,
    storeCountryCode: ""
};
const baseCMsgAMAddFreeLicenseResponse = {
    eresult: 0,
    purchaseResultDetail: 0,
    transid: Long.UZERO
};
const baseCGCMsgGetIPLocation = {
    ips: 0
};
const baseCIPLocationInfo = {
    ip: 0,
    latitude: 0,
    longitude: 0,
    country: "",
    state: "",
    city: ""
};
const baseCGCMsgGetIPLocationResponse = {};
const baseCGCMsgSystemStatsSchema = {
    gcAppId: 0
};
const baseCGCMsgGetSystemStats = {};
const baseCGCMsgGetSystemStatsResponse = {
    gcAppId: 0,
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
const baseCMsgAMSendEmail = {
    steamid: Long.UZERO,
    emailMsgType: 0,
    emailFormat: 0,
    sourceGc: 0
};
const baseCMsgAMSendEmail_ReplacementToken = {
    tokenName: "",
    tokenValue: ""
};
const baseCMsgAMSendEmail_PersonaNameReplacementToken = {
    steamid: Long.UZERO,
    tokenName: ""
};
const baseCMsgAMSendEmailResponse = {
    eresult: 0
};
const baseCMsgGCGetEmailTemplate = {
    appId: 0,
    emailMsgType: 0,
    emailLang: 0,
    emailFormat: 0
};
const baseCMsgGCGetEmailTemplateResponse = {
    eresult: 0,
    templateExists: false,
    template: ""
};
const baseCMsgAMGrantGuestPasses2 = {
    steamId: Long.UZERO,
    packageId: 0,
    passesToGrant: 0,
    daysToExpiration: 0,
    action: 0
};
const baseCMsgAMGrantGuestPasses2Response = {
    eresult: 0,
    passesGranted: 0
};
const baseCGCSystemMsgGetAccountDetails = {
    steamid: Long.UZERO,
    appid: 0
};
const baseCGCSystemMsgGetAccountDetailsResponse = {
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
const baseCMsgGCGetPersonaNames = {
    steamids: Long.UZERO
};
const baseCMsgGCGetPersonaNamesResponse = {
    failedLookupSteamids: Long.UZERO
};
const baseCMsgGCGetPersonaNamesResponse_PersonaName = {
    steamid: Long.UZERO,
    personaName: ""
};
const baseCMsgGCCheckFriendship = {
    steamidLeft: Long.UZERO,
    steamidRight: Long.UZERO
};
const baseCMsgGCCheckFriendshipResponse = {
    success: false,
    foundFriendship: false
};
const baseCMsgGCMsgMasterSetDirectory = {
    masterDirIndex: 0
};
const baseCMsgGCMsgMasterSetDirectory_SubGC = {
    dirIndex: 0,
    name: "",
    box: "",
    commandLine: "",
    gcBinary: ""
};
const baseCMsgGCMsgMasterSetDirectoryResponse = {
    eresult: 0
};
const baseCMsgGCMsgWebAPIJobRequestForwardResponse = {
    dirIndex: 0
};
const baseCGCSystemMsgGetPurchaseTrustRequest = {
    steamid: Long.UZERO
};
const baseCGCSystemMsgGetPurchaseTrustResponse = {
    hasPriorPurchaseHistory: false,
    hasNoRecentPasswordResets: false,
    isWalletCashTrusted: false,
    timeAllTrusted: 0
};
const baseCMsgGCHAccountVacStatusChange = {
    steamId: Long.UZERO,
    appId: 0,
    rtimeVacbanStarts: 0,
    isBannedNow: false,
    isBannedFuture: false
};
const baseCMsgGCGetPartnerAccountLink = {
    steamid: Long.UZERO
};
const baseCMsgGCGetPartnerAccountLinkResponse = {
    pwid: 0,
    nexonid: 0,
    ageclass: 0,
    idVerified: false,
    isAdult: false
};
const baseCMsgGCRoutingInfo = {
    dirIndex: 0,
    method: 0,
    fallback: 0,
    protobufField: 0,
    webapiParam: ""
};
const baseCMsgGCMsgMasterSetWebAPIRouting = {};
const baseCMsgGCMsgMasterSetWebAPIRouting_Entry = {
    interfaceName: "",
    methodName: ""
};
const baseCMsgGCMsgMasterSetClientMsgRouting = {};
const baseCMsgGCMsgMasterSetClientMsgRouting_Entry = {
    msgType: 0
};
const baseCMsgGCMsgMasterSetWebAPIRoutingResponse = {
    eresult: 0
};
const baseCMsgGCMsgMasterSetClientMsgRoutingResponse = {
    eresult: 0
};
const baseCMsgGCMsgSetOptions = {
    options: 0
};
const baseCMsgGCMsgSetOptions_MessageRange = {
    low: 0,
    high: 0
};
const baseCMsgGCHUpdateSession = {
    steamId: Long.UZERO,
    appId: 0,
    online: false,
    serverSteamId: Long.UZERO,
    serverAddr: 0,
    serverPort: 0,
    osType: 0,
    clientAddr: 0,
    ownerId: Long.UZERO,
    cmSessionSysid: 0,
    cmSessionIdentifier: 0,
    depotIds: 0
};
const baseCMsgGCHUpdateSession_ExtraField = {
    name: "",
    value: ""
};
const baseCMsgNotificationOfSuspiciousActivity = {
    steamid: Long.UZERO,
    appid: 0
};
const baseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances = {
    appInstanceCount: 0,
    otherSteamids: Long.UZERO
};
const baseCMsgDPPartnerMicroTxns = {
    appid: 0,
    gcName: ""
};
const baseCMsgDPPartnerMicroTxns_PartnerMicroTxn = {
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
const baseCMsgDPPartnerMicroTxns_PartnerInfo = {
    partnerId: 0,
    partnerName: "",
    currencyCode: "",
    currencyName: ""
};
const baseCMsgDPPartnerMicroTxnsResponse = {
    eresult: 0,
    eerrorcode: 0
};
const baseCChinaAgreementSessionsStartAgreementSessionInGameRequest = {
    appid: 0,
    steamid: Long.UZERO,
    clientIpaddress: ""
};
const baseCChinaAgreementSessionsStartAgreementSessionInGameResponse = {
    agreementUrl: ""
};
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
exports.CMsgProtoBufHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.clientSteamId);
        writer.uint32(16).int32(message.clientSessionId);
        writer.uint32(24).uint32(message.sourceAppId);
        writer.uint32(81).fixed64(message.jobIdSource);
        writer.uint32(89).fixed64(message.jobIdTarget);
        writer.uint32(98).string(message.targetJobName);
        writer.uint32(104).int32(message.eresult);
        writer.uint32(114).string(message.errorMessage);
        writer.uint32(120).uint32(message.ip);
        writer.uint32(1600).int32(message.gcMsgSrc);
        writer.uint32(1608).uint32(message.gcDirIndexSource);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgProtoBufHeader };
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
    }
};
exports.CMsgWebAPIKey = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.status);
        writer.uint32(16).uint32(message.accountId);
        writer.uint32(24).uint32(message.publisherGroupId);
        writer.uint32(32).uint32(message.keyId);
        writer.uint32(42).string(message.domain);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgWebAPIKey };
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
    }
};
exports.CMsgHttpRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.requestMethod);
        writer.uint32(18).string(message.hostname);
        writer.uint32(26).string(message.url);
        for (const v of message.headers) {
            exports.CMsgHttpRequest_RequestHeader.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.getParams) {
            exports.CMsgHttpRequest_QueryParam.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.postParams) {
            exports.CMsgHttpRequest_QueryParam.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).bytes(message.body);
        writer.uint32(64).uint32(message.absoluteTimeout);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgHttpRequest };
        message.headers = [];
        message.getParams = [];
        message.postParams = [];
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
    }
};
exports.CMsgHttpRequest_RequestHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgHttpRequest_RequestHeader
        };
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
    }
};
exports.CMsgHttpRequest_QueryParam = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).bytes(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgHttpRequest_QueryParam
        };
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
    }
};
exports.CMsgWebAPIRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.UNUSEDJobName);
        writer.uint32(18).string(message.interfaceName);
        writer.uint32(26).string(message.methodName);
        writer.uint32(32).uint32(message.version);
        if (message.apiKey !== undefined && message.apiKey !== undefined) {
            exports.CMsgWebAPIKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
        }
        if (message.request !== undefined && message.request !== undefined) {
            exports.CMsgHttpRequest.encode(message.request, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(56).uint32(message.routingAppId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgWebAPIRequest };
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
    }
};
exports.CMsgHttpResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.statusCode);
        for (const v of message.headers) {
            exports.CMsgHttpResponse_ResponseHeader.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).bytes(message.body);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgHttpResponse };
        message.headers = [];
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
    }
};
exports.CMsgHttpResponse_ResponseHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgHttpResponse_ResponseHeader
        };
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
    }
};
exports.CMsgAMFindAccounts = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.searchType);
        writer.uint32(18).string(message.searchString);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgAMFindAccounts };
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
    }
};
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMFindAccountsResponse
        };
        message.steamId = [];
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
    }
};
exports.CMsgNotifyWatchdog = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.source);
        writer.uint32(16).uint32(message.alertType);
        writer.uint32(24).uint32(message.alertDestination);
        writer.uint32(32).bool(message.critical);
        writer.uint32(40).uint32(message.time);
        writer.uint32(48).uint32(message.appid);
        writer.uint32(58).string(message.text);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgNotifyWatchdog };
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
    }
};
exports.CMsgAMGetLicenses = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgAMGetLicenses };
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
    }
};
exports.CMsgPackageLicense = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.packageId);
        writer.uint32(16).uint32(message.timeCreated);
        writer.uint32(24).uint32(message.ownerId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgPackageLicense };
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
    }
};
exports.CMsgAMGetLicensesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.license) {
            exports.CMsgPackageLicense.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(16).uint32(message.result);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMGetLicensesResponse
        };
        message.license = [];
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
    }
};
exports.CMsgAMGetUserGameStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamId);
        writer.uint32(17).fixed64(message.gameId);
        writer.uint32(26).fork();
        for (const v of message.stats) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgAMGetUserGameStats };
        message.stats = [];
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
    }
};
exports.CMsgAMGetUserGameStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamId);
        writer.uint32(17).fixed64(message.gameId);
        writer.uint32(24).int32(message.eresult);
        for (const v of message.stats) {
            exports.CMsgAMGetUserGameStatsResponse_Stats.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.achievementBlocks) {
            exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMGetUserGameStatsResponse
        };
        message.stats = [];
        message.achievementBlocks = [];
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
    }
};
exports.CMsgAMGetUserGameStatsResponse_Stats = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.statId);
        writer.uint32(16).uint32(message.statValue);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMGetUserGameStatsResponse_Stats
        };
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
    }
};
exports.CMsgAMGetUserGameStatsResponse_AchievementBlocks = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.achievementId);
        writer.uint32(16).uint32(message.achievementBitId);
        writer.uint32(29).fixed32(message.unlockTime);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMGetUserGameStatsResponse_AchievementBlocks
        };
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
    }
};
exports.CMsgGCGetCommandList = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.appId);
        writer.uint32(18).string(message.commandPrefix);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCGetCommandList };
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
    }
};
exports.CMsgGCGetCommandListResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.commandName) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCGetCommandListResponse
        };
        message.commandName = [];
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
    }
};
exports.CGCMsgMemCachedGet = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgMemCachedGet };
        message.keys = [];
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
    }
};
exports.CGCMsgMemCachedGetResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.values) {
            exports.CGCMsgMemCachedGetResponse_ValueTag.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgMemCachedGetResponse
        };
        message.values = [];
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
    }
};
exports.CGCMsgMemCachedGetResponse_ValueTag = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.found);
        writer.uint32(18).bytes(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgMemCachedGetResponse_ValueTag
        };
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
    }
};
exports.CGCMsgMemCachedSet = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.keys) {
            exports.CGCMsgMemCachedSet_KeyPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgMemCachedSet };
        message.keys = [];
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
    }
};
exports.CGCMsgMemCachedSet_KeyPair = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).bytes(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgMemCachedSet_KeyPair
        };
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
    }
};
exports.CGCMsgMemCachedDelete = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgMemCachedDelete };
        message.keys = [];
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
    }
};
exports.CGCMsgMemCachedStats = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgMemCachedStats };
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
exports.CGCMsgMemCachedStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint64(message.currConnections);
        writer.uint32(16).uint64(message.cmdGet);
        writer.uint32(24).uint64(message.cmdSet);
        writer.uint32(32).uint64(message.cmdFlush);
        writer.uint32(40).uint64(message.getHits);
        writer.uint32(48).uint64(message.getMisses);
        writer.uint32(56).uint64(message.deleteHits);
        writer.uint32(64).uint64(message.deleteMisses);
        writer.uint32(72).uint64(message.bytesRead);
        writer.uint32(80).uint64(message.bytesWritten);
        writer.uint32(88).uint64(message.limitMaxbytes);
        writer.uint32(96).uint64(message.currItems);
        writer.uint32(104).uint64(message.evictions);
        writer.uint32(112).uint64(message.bytes);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgMemCachedStatsResponse
        };
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
    }
};
exports.CGCMsgSQLStats = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.schemaCatalog);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgSQLStats };
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
    }
};
exports.CGCMsgSQLStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.threads);
        writer.uint32(16).uint32(message.threadsConnected);
        writer.uint32(24).uint32(message.threadsActive);
        writer.uint32(32).uint32(message.operationsSubmitted);
        writer.uint32(40).uint32(message.preparedStatementsExecuted);
        writer.uint32(48).uint32(message.nonPreparedStatementsExecuted);
        writer.uint32(56).uint32(message.deadlockRetries);
        writer.uint32(64).uint32(message.operationsTimedOutInQueue);
        writer.uint32(72).uint32(message.errors);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgSQLStatsResponse };
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
    }
};
exports.CMsgAMAddFreeLicense = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        writer.uint32(16).uint32(message.ipPublic);
        writer.uint32(24).uint32(message.packageid);
        writer.uint32(34).string(message.storeCountryCode);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgAMAddFreeLicense };
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
    }
};
exports.CMsgAMAddFreeLicenseResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eresult);
        writer.uint32(16).int32(message.purchaseResultDetail);
        writer.uint32(25).fixed64(message.transid);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMAddFreeLicenseResponse
        };
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
    }
};
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgGetIPLocation };
        message.ips = [];
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
    }
};
exports.CIPLocationInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.ip);
        writer.uint32(21).float(message.latitude);
        writer.uint32(29).float(message.longitude);
        writer.uint32(34).string(message.country);
        writer.uint32(42).string(message.state);
        writer.uint32(50).string(message.city);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCIPLocationInfo };
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
    }
};
exports.CGCMsgGetIPLocationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.infos) {
            exports.CIPLocationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgGetIPLocationResponse
        };
        message.infos = [];
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
    }
};
exports.CGCMsgSystemStatsSchema = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.gcAppId);
        writer.uint32(18).bytes(message.schemaKv);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgSystemStatsSchema
        };
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
    }
};
exports.CGCMsgGetSystemStats = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCGCMsgGetSystemStats };
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
exports.CGCMsgGetSystemStatsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.gcAppId);
        writer.uint32(18).bytes(message.statsKv);
        writer.uint32(24).uint32(message.activeJobs);
        writer.uint32(32).uint32(message.yieldingJobs);
        writer.uint32(40).uint32(message.userSessions);
        writer.uint32(48).uint32(message.gameServerSessions);
        writer.uint32(56).uint32(message.socaches);
        writer.uint32(64).uint32(message.socachesToUnload);
        writer.uint32(72).uint32(message.socachesLoading);
        writer.uint32(80).uint32(message.writebackQueue);
        writer.uint32(88).uint32(message.steamidLocks);
        writer.uint32(96).uint32(message.logonQueue);
        writer.uint32(104).uint32(message.logonJobs);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCMsgGetSystemStatsResponse
        };
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
    }
};
exports.CMsgAMSendEmail = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        writer.uint32(16).uint32(message.emailMsgType);
        writer.uint32(24).uint32(message.emailFormat);
        for (const v of message.personaNameTokens) {
            exports.CMsgAMSendEmail_PersonaNameReplacementToken.encode(v, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(48).uint32(message.sourceGc);
        for (const v of message.tokens) {
            exports.CMsgAMSendEmail_ReplacementToken.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgAMSendEmail };
        message.personaNameTokens = [];
        message.tokens = [];
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
    }
};
exports.CMsgAMSendEmail_ReplacementToken = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.tokenName);
        writer.uint32(18).string(message.tokenValue);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMSendEmail_ReplacementToken
        };
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
    }
};
exports.CMsgAMSendEmail_PersonaNameReplacementToken = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        writer.uint32(18).string(message.tokenName);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMSendEmail_PersonaNameReplacementToken
        };
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
    }
};
exports.CMsgAMSendEmailResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.eresult);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMSendEmailResponse
        };
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
    }
};
exports.CMsgGCGetEmailTemplate = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.appId);
        writer.uint32(16).uint32(message.emailMsgType);
        writer.uint32(24).int32(message.emailLang);
        writer.uint32(32).int32(message.emailFormat);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCGetEmailTemplate };
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
    }
};
exports.CMsgGCGetEmailTemplateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.eresult);
        writer.uint32(16).bool(message.templateExists);
        writer.uint32(26).string(message.template);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCGetEmailTemplateResponse
        };
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
    }
};
exports.CMsgAMGrantGuestPasses2 = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamId);
        writer.uint32(16).uint32(message.packageId);
        writer.uint32(24).int32(message.passesToGrant);
        writer.uint32(32).int32(message.daysToExpiration);
        writer.uint32(40).int32(message.action);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMGrantGuestPasses2
        };
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
    }
};
exports.CMsgAMGrantGuestPasses2Response = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eresult);
        writer.uint32(16).int32(message.passesGranted);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgAMGrantGuestPasses2Response
        };
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
    }
};
exports.CGCSystemMsgGetAccountDetails = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        writer.uint32(16).uint32(message.appid);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCSystemMsgGetAccountDetails
        };
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
    }
};
exports.CGCSystemMsgGetAccountDetailsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.eresultDeprecated);
        writer.uint32(18).string(message.accountName);
        writer.uint32(26).string(message.personaName);
        writer.uint32(32).bool(message.isProfilePublic);
        writer.uint32(40).bool(message.isInventoryPublic);
        writer.uint32(56).bool(message.isVacBanned);
        writer.uint32(64).bool(message.isCyberCafe);
        writer.uint32(72).bool(message.isSchoolAccount);
        writer.uint32(80).bool(message.isLimited);
        writer.uint32(88).bool(message.isSubscribed);
        writer.uint32(96).uint32(message.package);
        writer.uint32(104).bool(message.isFreeTrialAccount);
        writer.uint32(112).uint32(message.freeTrialExpiration);
        writer.uint32(120).bool(message.isLowViolence);
        writer.uint32(128).bool(message.isAccountLockedDown);
        writer.uint32(136).bool(message.isCommunityBanned);
        writer.uint32(144).bool(message.isTradeBanned);
        writer.uint32(152).uint32(message.tradeBanExpiration);
        writer.uint32(160).uint32(message.accountid);
        writer.uint32(168).uint32(message.suspensionEndTime);
        writer.uint32(178).string(message.currency);
        writer.uint32(184).uint32(message.steamLevel);
        writer.uint32(192).uint32(message.friendCount);
        writer.uint32(200).uint32(message.accountCreationTime);
        writer.uint32(216).bool(message.isSteamguardEnabled);
        writer.uint32(224).bool(message.isPhoneVerified);
        writer.uint32(232).bool(message.isTwoFactorAuthEnabled);
        writer.uint32(240).uint32(message.twoFactorEnabledTime);
        writer.uint32(248).uint32(message.phoneVerificationTime);
        writer.uint32(264).uint64(message.phoneId);
        writer.uint32(272).bool(message.isPhoneIdentifying);
        writer.uint32(280).uint32(message.rtIdentityLinked);
        writer.uint32(288).uint32(message.rtBirthDate);
        writer.uint32(298).string(message.txnCountryCode);
        writer.uint32(304).bool(message.hasAcceptedChinaSsa);
        writer.uint32(312).bool(message.isBannedSteamChina);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCSystemMsgGetAccountDetailsResponse
        };
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
    }
};
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCGetPersonaNames };
        message.steamids = [];
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
    }
};
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCGetPersonaNamesResponse
        };
        message.succeededLookups = [];
        message.failedLookupSteamids = [];
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
    }
};
exports.CMsgGCGetPersonaNamesResponse_PersonaName = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        writer.uint32(18).string(message.personaName);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCGetPersonaNamesResponse_PersonaName
        };
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
    }
};
exports.CMsgGCCheckFriendship = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamidLeft);
        writer.uint32(17).fixed64(message.steamidRight);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCCheckFriendship };
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
    }
};
exports.CMsgGCCheckFriendshipResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.success);
        writer.uint32(16).bool(message.foundFriendship);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCCheckFriendshipResponse
        };
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
    }
};
exports.CMsgGCMsgMasterSetDirectory = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.masterDirIndex);
        for (const v of message.dir) {
            exports.CMsgGCMsgMasterSetDirectory_SubGC.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetDirectory
        };
        message.dir = [];
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
    }
};
exports.CMsgGCMsgMasterSetDirectory_SubGC = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.dirIndex);
        writer.uint32(18).string(message.name);
        writer.uint32(26).string(message.box);
        writer.uint32(34).string(message.commandLine);
        writer.uint32(42).string(message.gcBinary);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetDirectory_SubGC
        };
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
    }
};
exports.CMsgGCMsgMasterSetDirectoryResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eresult);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetDirectoryResponse
        };
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
    }
};
exports.CMsgGCMsgWebAPIJobRequestForwardResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.dirIndex);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgWebAPIJobRequestForwardResponse
        };
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
    }
};
exports.CGCSystemMsgGetPurchaseTrustRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCSystemMsgGetPurchaseTrustRequest
        };
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
    }
};
exports.CGCSystemMsgGetPurchaseTrustResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.hasPriorPurchaseHistory);
        writer.uint32(16).bool(message.hasNoRecentPasswordResets);
        writer.uint32(24).bool(message.isWalletCashTrusted);
        writer.uint32(32).uint32(message.timeAllTrusted);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCGCSystemMsgGetPurchaseTrustResponse
        };
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
    }
};
exports.CMsgGCHAccountVacStatusChange = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamId);
        writer.uint32(16).uint32(message.appId);
        writer.uint32(24).uint32(message.rtimeVacbanStarts);
        writer.uint32(32).bool(message.isBannedNow);
        writer.uint32(40).bool(message.isBannedFuture);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCHAccountVacStatusChange
        };
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
    }
};
exports.CMsgGCGetPartnerAccountLink = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCGetPartnerAccountLink
        };
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
    }
};
exports.CMsgGCGetPartnerAccountLinkResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.pwid);
        writer.uint32(16).uint32(message.nexonid);
        writer.uint32(24).int32(message.ageclass);
        writer.uint32(32).bool(message.idVerified);
        writer.uint32(40).bool(message.isAdult);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCGetPartnerAccountLinkResponse
        };
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
    }
};
exports.CMsgGCRoutingInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.dirIndex) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(16).int32(message.method);
        writer.uint32(24).int32(message.fallback);
        writer.uint32(32).uint32(message.protobufField);
        writer.uint32(42).string(message.webapiParam);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCRoutingInfo };
        message.dirIndex = [];
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
    }
};
exports.CMsgGCMsgMasterSetWebAPIRouting = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCMsgMasterSetWebAPIRouting_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetWebAPIRouting
        };
        message.entries = [];
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
    }
};
exports.CMsgGCMsgMasterSetWebAPIRouting_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.interfaceName);
        writer.uint32(18).string(message.methodName);
        if (message.routing !== undefined && message.routing !== undefined) {
            exports.CMsgGCRoutingInfo.encode(message.routing, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetWebAPIRouting_Entry
        };
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
    }
};
exports.CMsgGCMsgMasterSetClientMsgRouting = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.entries) {
            exports.CMsgGCMsgMasterSetClientMsgRouting_Entry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetClientMsgRouting
        };
        message.entries = [];
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
    }
};
exports.CMsgGCMsgMasterSetClientMsgRouting_Entry = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.msgType);
        if (message.routing !== undefined && message.routing !== undefined) {
            exports.CMsgGCRoutingInfo.encode(message.routing, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetClientMsgRouting_Entry
        };
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
    }
};
exports.CMsgGCMsgMasterSetWebAPIRoutingResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eresult);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetWebAPIRoutingResponse
        };
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
    }
};
exports.CMsgGCMsgMasterSetClientMsgRoutingResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.eresult);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgMasterSetClientMsgRoutingResponse
        };
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
    }
};
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCMsgSetOptions };
        message.options = [];
        message.clientMsgRanges = [];
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
    }
};
exports.CMsgGCMsgSetOptions_MessageRange = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.low);
        writer.uint32(16).uint32(message.high);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCMsgSetOptions_MessageRange
        };
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
    }
};
exports.CMsgGCHUpdateSession = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamId);
        writer.uint32(16).uint32(message.appId);
        writer.uint32(24).bool(message.online);
        writer.uint32(33).fixed64(message.serverSteamId);
        writer.uint32(40).uint32(message.serverAddr);
        writer.uint32(48).uint32(message.serverPort);
        writer.uint32(56).uint32(message.osType);
        writer.uint32(64).uint32(message.clientAddr);
        for (const v of message.extraFields) {
            exports.CMsgGCHUpdateSession_ExtraField.encode(v, writer.uint32(74).fork()).ldelim();
        }
        writer.uint32(81).fixed64(message.ownerId);
        writer.uint32(88).uint32(message.cmSessionSysid);
        writer.uint32(96).uint32(message.cmSessionIdentifier);
        writer.uint32(106).fork();
        for (const v of message.depotIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgGCHUpdateSession };
        message.extraFields = [];
        message.depotIds = [];
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
    }
};
exports.CMsgGCHUpdateSession_ExtraField = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.value);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgGCHUpdateSession_ExtraField
        };
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
    }
};
exports.CMsgNotificationOfSuspiciousActivity = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(9).fixed64(message.steamid);
        writer.uint32(16).uint32(message.appid);
        if (message.multipleInstances !== undefined &&
            message.multipleInstances !== undefined) {
            exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.encode(message.multipleInstances, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgNotificationOfSuspiciousActivity
        };
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
    }
};
exports.CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.appInstanceCount);
        writer.uint32(18).fork();
        for (const v of message.otherSteamids) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances
        };
        message.otherSteamids = [];
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
    }
};
exports.CMsgDPPartnerMicroTxns = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.appid);
        writer.uint32(18).string(message.gcName);
        if (message.partner !== undefined && message.partner !== undefined) {
            exports.CMsgDPPartnerMicroTxns_PartnerInfo.encode(message.partner, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.transactions) {
            exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCMsgDPPartnerMicroTxns };
        message.transactions = [];
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
    }
};
exports.CMsgDPPartnerMicroTxns_PartnerMicroTxn = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.initTime);
        writer.uint32(16).uint32(message.lastUpdateTime);
        writer.uint32(24).uint64(message.txnId);
        writer.uint32(32).uint32(message.accountId);
        writer.uint32(40).uint32(message.lineItem);
        writer.uint32(48).uint64(message.itemId);
        writer.uint32(56).uint32(message.defIndex);
        writer.uint32(64).uint64(message.price);
        writer.uint32(72).uint64(message.tax);
        writer.uint32(80).uint64(message.priceUsd);
        writer.uint32(88).uint64(message.taxUsd);
        writer.uint32(96).uint32(message.purchaseType);
        writer.uint32(104).uint32(message.steamTxnType);
        writer.uint32(114).string(message.countryCode);
        writer.uint32(122).string(message.regionCode);
        writer.uint32(128).int32(message.quantity);
        writer.uint32(136).uint64(message.refTransId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgDPPartnerMicroTxns_PartnerMicroTxn
        };
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
    }
};
exports.CMsgDPPartnerMicroTxns_PartnerInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.partnerId);
        writer.uint32(18).string(message.partnerName);
        writer.uint32(26).string(message.currencyCode);
        writer.uint32(34).string(message.currencyName);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgDPPartnerMicroTxns_PartnerInfo
        };
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
    }
};
exports.CMsgDPPartnerMicroTxnsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.eresult);
        writer.uint32(16).int32(message.eerrorcode);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCMsgDPPartnerMicroTxnsResponse
        };
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
    }
};
exports.CChinaAgreementSessionsStartAgreementSessionInGameRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).uint32(message.appid);
        writer.uint32(17).fixed64(message.steamid);
        writer.uint32(26).string(message.clientIpaddress);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCChinaAgreementSessionsStartAgreementSessionInGameRequest
        };
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
    }
};
exports.CChinaAgreementSessionsStartAgreementSessionInGameResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.agreementUrl);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCChinaAgreementSessionsStartAgreementSessionInGameResponse
        };
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
    }
};
//# sourceMappingURL=steammessages.js.map