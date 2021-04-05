import * as Long from "long";
import { Writer, Reader } from "protobufjs/minimal";
export interface CMsgProtoBufHeader {
    clientSteamId: Long;
    clientSessionId: number;
    sourceAppId: number;
    jobIdSource: Long;
    jobIdTarget: Long;
    targetJobName: string;
    eresult: number;
    errorMessage: string;
    ip: number;
    gcMsgSrc: GCProtoBufMsgSrc;
    gcDirIndexSource: number;
}
export interface CMsgWebAPIKey {
    status: number;
    accountId: number;
    publisherGroupId: number;
    keyId: number;
    domain: string;
}
export interface CMsgHttpRequest {
    requestMethod: number;
    hostname: string;
    url: string;
    headers: CMsgHttpRequest_RequestHeader[];
    getParams: CMsgHttpRequest_QueryParam[];
    postParams: CMsgHttpRequest_QueryParam[];
    body: Uint8Array;
    absoluteTimeout: number;
}
export interface CMsgHttpRequest_RequestHeader {
    name: string;
    value: string;
}
export interface CMsgHttpRequest_QueryParam {
    name: string;
    value: Uint8Array;
}
export interface CMsgWebAPIRequest {
    UNUSEDJobName: string;
    interfaceName: string;
    methodName: string;
    version: number;
    apiKey: CMsgWebAPIKey | undefined;
    request: CMsgHttpRequest | undefined;
    routingAppId: number;
}
export interface CMsgHttpResponse {
    statusCode: number;
    headers: CMsgHttpResponse_ResponseHeader[];
    body: Uint8Array;
}
export interface CMsgHttpResponse_ResponseHeader {
    name: string;
    value: string;
}
export interface CMsgAMFindAccounts {
    searchType: number;
    searchString: string;
}
export interface CMsgAMFindAccountsResponse {
    steamId: Long[];
}
export interface CMsgNotifyWatchdog {
    source: number;
    alertType: number;
    alertDestination: number;
    critical: boolean;
    time: number;
    appid: number;
    text: string;
}
export interface CMsgAMGetLicenses {
    steamid: Long;
}
export interface CMsgPackageLicense {
    packageId: number;
    timeCreated: number;
    ownerId: number;
}
export interface CMsgAMGetLicensesResponse {
    license: CMsgPackageLicense[];
    result: number;
}
export interface CMsgAMGetUserGameStats {
    steamId: Long;
    gameId: Long;
    stats: number[];
}
export interface CMsgAMGetUserGameStatsResponse {
    steamId: Long;
    gameId: Long;
    eresult: number;
    stats: CMsgAMGetUserGameStatsResponse_Stats[];
    achievementBlocks: CMsgAMGetUserGameStatsResponse_AchievementBlocks[];
}
export interface CMsgAMGetUserGameStatsResponse_Stats {
    statId: number;
    statValue: number;
}
export interface CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    achievementId: number;
    achievementBitId: number;
    unlockTime: number;
}
export interface CMsgGCGetCommandList {
    appId: number;
    commandPrefix: string;
}
export interface CMsgGCGetCommandListResponse {
    commandName: string[];
}
export interface CGCMsgMemCachedGet {
    keys: string[];
}
export interface CGCMsgMemCachedGetResponse {
    values: CGCMsgMemCachedGetResponse_ValueTag[];
}
export interface CGCMsgMemCachedGetResponse_ValueTag {
    found: boolean;
    value: Uint8Array;
}
export interface CGCMsgMemCachedSet {
    keys: CGCMsgMemCachedSet_KeyPair[];
}
export interface CGCMsgMemCachedSet_KeyPair {
    name: string;
    value: Uint8Array;
}
export interface CGCMsgMemCachedDelete {
    keys: string[];
}
export interface CGCMsgMemCachedStats {
}
export interface CGCMsgMemCachedStatsResponse {
    currConnections: Long;
    cmdGet: Long;
    cmdSet: Long;
    cmdFlush: Long;
    getHits: Long;
    getMisses: Long;
    deleteHits: Long;
    deleteMisses: Long;
    bytesRead: Long;
    bytesWritten: Long;
    limitMaxbytes: Long;
    currItems: Long;
    evictions: Long;
    bytes: Long;
}
export interface CGCMsgSQLStats {
    schemaCatalog: number;
}
export interface CGCMsgSQLStatsResponse {
    threads: number;
    threadsConnected: number;
    threadsActive: number;
    operationsSubmitted: number;
    preparedStatementsExecuted: number;
    nonPreparedStatementsExecuted: number;
    deadlockRetries: number;
    operationsTimedOutInQueue: number;
    errors: number;
}
export interface CMsgAMAddFreeLicense {
    steamid: Long;
    ipPublic: number;
    packageid: number;
    storeCountryCode: string;
}
export interface CMsgAMAddFreeLicenseResponse {
    eresult: number;
    purchaseResultDetail: number;
    transid: Long;
}
export interface CGCMsgGetIPLocation {
    ips: number[];
}
export interface CIPLocationInfo {
    ip: number;
    latitude: number;
    longitude: number;
    country: string;
    state: string;
    city: string;
}
export interface CGCMsgGetIPLocationResponse {
    infos: CIPLocationInfo[];
}
export interface CGCMsgSystemStatsSchema {
    gcAppId: number;
    schemaKv: Uint8Array;
}
export interface CGCMsgGetSystemStats {
}
export interface CGCMsgGetSystemStatsResponse {
    gcAppId: number;
    statsKv: Uint8Array;
    activeJobs: number;
    yieldingJobs: number;
    userSessions: number;
    gameServerSessions: number;
    socaches: number;
    socachesToUnload: number;
    socachesLoading: number;
    writebackQueue: number;
    steamidLocks: number;
    logonQueue: number;
    logonJobs: number;
}
export interface CMsgAMSendEmail {
    steamid: Long;
    emailMsgType: number;
    emailFormat: number;
    personaNameTokens: CMsgAMSendEmail_PersonaNameReplacementToken[];
    sourceGc: number;
    tokens: CMsgAMSendEmail_ReplacementToken[];
}
export interface CMsgAMSendEmail_ReplacementToken {
    tokenName: string;
    tokenValue: string;
}
export interface CMsgAMSendEmail_PersonaNameReplacementToken {
    steamid: Long;
    tokenName: string;
}
export interface CMsgAMSendEmailResponse {
    eresult: number;
}
export interface CMsgGCGetEmailTemplate {
    appId: number;
    emailMsgType: number;
    emailLang: number;
    emailFormat: number;
}
export interface CMsgGCGetEmailTemplateResponse {
    eresult: number;
    templateExists: boolean;
    template: string;
}
export interface CMsgAMGrantGuestPasses2 {
    steamId: Long;
    packageId: number;
    passesToGrant: number;
    daysToExpiration: number;
    action: number;
}
export interface CMsgAMGrantGuestPasses2Response {
    eresult: number;
    passesGranted: number;
}
export interface CGCSystemMsgGetAccountDetails {
    steamid: Long;
    appid: number;
}
export interface CGCSystemMsgGetAccountDetailsResponse {
    eresultDeprecated: number;
    accountName: string;
    personaName: string;
    isProfilePublic: boolean;
    isInventoryPublic: boolean;
    isVacBanned: boolean;
    isCyberCafe: boolean;
    isSchoolAccount: boolean;
    isLimited: boolean;
    isSubscribed: boolean;
    package: number;
    isFreeTrialAccount: boolean;
    freeTrialExpiration: number;
    isLowViolence: boolean;
    isAccountLockedDown: boolean;
    isCommunityBanned: boolean;
    isTradeBanned: boolean;
    tradeBanExpiration: number;
    accountid: number;
    suspensionEndTime: number;
    currency: string;
    steamLevel: number;
    friendCount: number;
    accountCreationTime: number;
    isSteamguardEnabled: boolean;
    isPhoneVerified: boolean;
    isTwoFactorAuthEnabled: boolean;
    twoFactorEnabledTime: number;
    phoneVerificationTime: number;
    phoneId: Long;
    isPhoneIdentifying: boolean;
    rtIdentityLinked: number;
    rtBirthDate: number;
    txnCountryCode: string;
    hasAcceptedChinaSsa: boolean;
    isBannedSteamChina: boolean;
}
export interface CMsgGCGetPersonaNames {
    steamids: Long[];
}
export interface CMsgGCGetPersonaNamesResponse {
    succeededLookups: CMsgGCGetPersonaNamesResponse_PersonaName[];
    failedLookupSteamids: Long[];
}
export interface CMsgGCGetPersonaNamesResponse_PersonaName {
    steamid: Long;
    personaName: string;
}
export interface CMsgGCCheckFriendship {
    steamidLeft: Long;
    steamidRight: Long;
}
export interface CMsgGCCheckFriendshipResponse {
    success: boolean;
    foundFriendship: boolean;
}
export interface CMsgGCMsgMasterSetDirectory {
    masterDirIndex: number;
    dir: CMsgGCMsgMasterSetDirectory_SubGC[];
}
export interface CMsgGCMsgMasterSetDirectory_SubGC {
    dirIndex: number;
    name: string;
    box: string;
    commandLine: string;
    gcBinary: string;
}
export interface CMsgGCMsgMasterSetDirectoryResponse {
    eresult: number;
}
export interface CMsgGCMsgWebAPIJobRequestForwardResponse {
    dirIndex: number;
}
export interface CGCSystemMsgGetPurchaseTrustRequest {
    steamid: Long;
}
export interface CGCSystemMsgGetPurchaseTrustResponse {
    hasPriorPurchaseHistory: boolean;
    hasNoRecentPasswordResets: boolean;
    isWalletCashTrusted: boolean;
    timeAllTrusted: number;
}
export interface CMsgGCHAccountVacStatusChange {
    steamId: Long;
    appId: number;
    rtimeVacbanStarts: number;
    isBannedNow: boolean;
    isBannedFuture: boolean;
}
export interface CMsgGCGetPartnerAccountLink {
    steamid: Long;
}
export interface CMsgGCGetPartnerAccountLinkResponse {
    pwid: number;
    nexonid: number;
    ageclass: number;
    idVerified: boolean;
    isAdult: boolean;
}
export interface CMsgGCRoutingInfo {
    dirIndex: number[];
    method: CMsgGCRoutingInfo_RoutingMethod;
    fallback: CMsgGCRoutingInfo_RoutingMethod;
    protobufField: number;
    webapiParam: string;
}
export interface CMsgGCMsgMasterSetWebAPIRouting {
    entries: CMsgGCMsgMasterSetWebAPIRouting_Entry[];
}
export interface CMsgGCMsgMasterSetWebAPIRouting_Entry {
    interfaceName: string;
    methodName: string;
    routing: CMsgGCRoutingInfo | undefined;
}
export interface CMsgGCMsgMasterSetClientMsgRouting {
    entries: CMsgGCMsgMasterSetClientMsgRouting_Entry[];
}
export interface CMsgGCMsgMasterSetClientMsgRouting_Entry {
    msgType: number;
    routing: CMsgGCRoutingInfo | undefined;
}
export interface CMsgGCMsgMasterSetWebAPIRoutingResponse {
    eresult: number;
}
export interface CMsgGCMsgMasterSetClientMsgRoutingResponse {
    eresult: number;
}
export interface CMsgGCMsgSetOptions {
    options: CMsgGCMsgSetOptions_Option[];
    clientMsgRanges: CMsgGCMsgSetOptions_MessageRange[];
}
export interface CMsgGCMsgSetOptions_MessageRange {
    low: number;
    high: number;
}
export interface CMsgGCHUpdateSession {
    steamId: Long;
    appId: number;
    online: boolean;
    serverSteamId: Long;
    serverAddr: number;
    serverPort: number;
    osType: number;
    clientAddr: number;
    extraFields: CMsgGCHUpdateSession_ExtraField[];
    ownerId: Long;
    cmSessionSysid: number;
    cmSessionIdentifier: number;
    depotIds: number[];
}
export interface CMsgGCHUpdateSession_ExtraField {
    name: string;
    value: string;
}
export interface CMsgNotificationOfSuspiciousActivity {
    steamid: Long;
    appid: number;
    multipleInstances: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances | undefined;
}
export interface CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    appInstanceCount: number;
    otherSteamids: Long[];
}
export interface CMsgDPPartnerMicroTxns {
    appid: number;
    gcName: string;
    partner: CMsgDPPartnerMicroTxns_PartnerInfo | undefined;
    transactions: CMsgDPPartnerMicroTxns_PartnerMicroTxn[];
}
export interface CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    initTime: number;
    lastUpdateTime: number;
    txnId: Long;
    accountId: number;
    lineItem: number;
    itemId: Long;
    defIndex: number;
    price: Long;
    tax: Long;
    priceUsd: Long;
    taxUsd: Long;
    purchaseType: number;
    steamTxnType: number;
    countryCode: string;
    regionCode: string;
    quantity: number;
    refTransId: Long;
}
export interface CMsgDPPartnerMicroTxns_PartnerInfo {
    partnerId: number;
    partnerName: string;
    currencyCode: string;
    currencyName: string;
}
export interface CMsgDPPartnerMicroTxnsResponse {
    eresult: number;
    eerrorcode: CMsgDPPartnerMicroTxnsResponse_EErrorCode;
}
export interface CChinaAgreementSessionsStartAgreementSessionInGameRequest {
    appid: number;
    steamid: Long;
    clientIpaddress: string;
}
export interface CChinaAgreementSessionsStartAgreementSessionInGameResponse {
    agreementUrl: string;
}
export declare const protobufPackage = "";
export declare enum GCProtoBufMsgSrc {
    GCProtoBufMsgSrc_Unspecified = 0,
    GCProtoBufMsgSrc_FromSystem = 1,
    GCProtoBufMsgSrc_FromSteamID = 2,
    GCProtoBufMsgSrc_FromGC = 3,
    GCProtoBufMsgSrc_ReplySystem = 4
}
export declare enum CMsgGCRoutingInfo_RoutingMethod {
    RANDOM = 0,
    DISCARD = 1,
    CLIENT_STEAMID = 2,
    PROTOBUF_FIELD_UINT64 = 3,
    WEBAPI_PARAM_UINT64 = 4
}
export declare enum CMsgGCMsgSetOptions_Option {
    NOTIFY_USER_SESSIONS = 0,
    NOTIFY_SERVER_SESSIONS = 1,
    NOTIFY_ACHIEVEMENTS = 2,
    NOTIFY_VAC_ACTION = 3
}
export declare enum CMsgDPPartnerMicroTxnsResponse_EErrorCode {
    k_MsgValid = 0,
    k_MsgInvalidAppID = 1,
    k_MsgInvalidPartnerInfo = 2,
    k_MsgNoTransactions = 3,
    k_MsgSQLFailure = 4,
    k_MsgPartnerInfoDiscrepancy = 5,
    k_MsgTransactionInsertFailed = 7,
    k_MsgAlreadyRunning = 8,
    k_MsgInvalidTransactionData = 9
}
export declare const CMsgProtoBufHeader: {
    encode(message: CMsgProtoBufHeader, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgProtoBufHeader;
};
export declare const CMsgWebAPIKey: {
    encode(message: CMsgWebAPIKey, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgWebAPIKey;
};
export declare const CMsgHttpRequest: {
    encode(message: CMsgHttpRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgHttpRequest;
};
export declare const CMsgHttpRequest_RequestHeader: {
    encode(message: CMsgHttpRequest_RequestHeader, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgHttpRequest_RequestHeader;
};
export declare const CMsgHttpRequest_QueryParam: {
    encode(message: CMsgHttpRequest_QueryParam, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgHttpRequest_QueryParam;
};
export declare const CMsgWebAPIRequest: {
    encode(message: CMsgWebAPIRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgWebAPIRequest;
};
export declare const CMsgHttpResponse: {
    encode(message: CMsgHttpResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgHttpResponse;
};
export declare const CMsgHttpResponse_ResponseHeader: {
    encode(message: CMsgHttpResponse_ResponseHeader, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgHttpResponse_ResponseHeader;
};
export declare const CMsgAMFindAccounts: {
    encode(message: CMsgAMFindAccounts, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMFindAccounts;
};
export declare const CMsgAMFindAccountsResponse: {
    encode(message: CMsgAMFindAccountsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMFindAccountsResponse;
};
export declare const CMsgNotifyWatchdog: {
    encode(message: CMsgNotifyWatchdog, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgNotifyWatchdog;
};
export declare const CMsgAMGetLicenses: {
    encode(message: CMsgAMGetLicenses, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGetLicenses;
};
export declare const CMsgPackageLicense: {
    encode(message: CMsgPackageLicense, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgPackageLicense;
};
export declare const CMsgAMGetLicensesResponse: {
    encode(message: CMsgAMGetLicensesResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGetLicensesResponse;
};
export declare const CMsgAMGetUserGameStats: {
    encode(message: CMsgAMGetUserGameStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGetUserGameStats;
};
export declare const CMsgAMGetUserGameStatsResponse: {
    encode(message: CMsgAMGetUserGameStatsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGetUserGameStatsResponse;
};
export declare const CMsgAMGetUserGameStatsResponse_Stats: {
    encode(message: CMsgAMGetUserGameStatsResponse_Stats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGetUserGameStatsResponse_Stats;
};
export declare const CMsgAMGetUserGameStatsResponse_AchievementBlocks: {
    encode(message: CMsgAMGetUserGameStatsResponse_AchievementBlocks, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGetUserGameStatsResponse_AchievementBlocks;
};
export declare const CMsgGCGetCommandList: {
    encode(message: CMsgGCGetCommandList, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetCommandList;
};
export declare const CMsgGCGetCommandListResponse: {
    encode(message: CMsgGCGetCommandListResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetCommandListResponse;
};
export declare const CGCMsgMemCachedGet: {
    encode(message: CGCMsgMemCachedGet, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedGet;
};
export declare const CGCMsgMemCachedGetResponse: {
    encode(message: CGCMsgMemCachedGetResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedGetResponse;
};
export declare const CGCMsgMemCachedGetResponse_ValueTag: {
    encode(message: CGCMsgMemCachedGetResponse_ValueTag, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedGetResponse_ValueTag;
};
export declare const CGCMsgMemCachedSet: {
    encode(message: CGCMsgMemCachedSet, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedSet;
};
export declare const CGCMsgMemCachedSet_KeyPair: {
    encode(message: CGCMsgMemCachedSet_KeyPair, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedSet_KeyPair;
};
export declare const CGCMsgMemCachedDelete: {
    encode(message: CGCMsgMemCachedDelete, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedDelete;
};
export declare const CGCMsgMemCachedStats: {
    encode(_: CGCMsgMemCachedStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedStats;
};
export declare const CGCMsgMemCachedStatsResponse: {
    encode(message: CGCMsgMemCachedStatsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgMemCachedStatsResponse;
};
export declare const CGCMsgSQLStats: {
    encode(message: CGCMsgSQLStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgSQLStats;
};
export declare const CGCMsgSQLStatsResponse: {
    encode(message: CGCMsgSQLStatsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgSQLStatsResponse;
};
export declare const CMsgAMAddFreeLicense: {
    encode(message: CMsgAMAddFreeLicense, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMAddFreeLicense;
};
export declare const CMsgAMAddFreeLicenseResponse: {
    encode(message: CMsgAMAddFreeLicenseResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMAddFreeLicenseResponse;
};
export declare const CGCMsgGetIPLocation: {
    encode(message: CGCMsgGetIPLocation, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgGetIPLocation;
};
export declare const CIPLocationInfo: {
    encode(message: CIPLocationInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CIPLocationInfo;
};
export declare const CGCMsgGetIPLocationResponse: {
    encode(message: CGCMsgGetIPLocationResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgGetIPLocationResponse;
};
export declare const CGCMsgSystemStatsSchema: {
    encode(message: CGCMsgSystemStatsSchema, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgSystemStatsSchema;
};
export declare const CGCMsgGetSystemStats: {
    encode(_: CGCMsgGetSystemStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgGetSystemStats;
};
export declare const CGCMsgGetSystemStatsResponse: {
    encode(message: CGCMsgGetSystemStatsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCMsgGetSystemStatsResponse;
};
export declare const CMsgAMSendEmail: {
    encode(message: CMsgAMSendEmail, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMSendEmail;
};
export declare const CMsgAMSendEmail_ReplacementToken: {
    encode(message: CMsgAMSendEmail_ReplacementToken, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMSendEmail_ReplacementToken;
};
export declare const CMsgAMSendEmail_PersonaNameReplacementToken: {
    encode(message: CMsgAMSendEmail_PersonaNameReplacementToken, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMSendEmail_PersonaNameReplacementToken;
};
export declare const CMsgAMSendEmailResponse: {
    encode(message: CMsgAMSendEmailResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMSendEmailResponse;
};
export declare const CMsgGCGetEmailTemplate: {
    encode(message: CMsgGCGetEmailTemplate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetEmailTemplate;
};
export declare const CMsgGCGetEmailTemplateResponse: {
    encode(message: CMsgGCGetEmailTemplateResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetEmailTemplateResponse;
};
export declare const CMsgAMGrantGuestPasses2: {
    encode(message: CMsgAMGrantGuestPasses2, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGrantGuestPasses2;
};
export declare const CMsgAMGrantGuestPasses2Response: {
    encode(message: CMsgAMGrantGuestPasses2Response, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgAMGrantGuestPasses2Response;
};
export declare const CGCSystemMsgGetAccountDetails: {
    encode(message: CGCSystemMsgGetAccountDetails, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCSystemMsgGetAccountDetails;
};
export declare const CGCSystemMsgGetAccountDetailsResponse: {
    encode(message: CGCSystemMsgGetAccountDetailsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCSystemMsgGetAccountDetailsResponse;
};
export declare const CMsgGCGetPersonaNames: {
    encode(message: CMsgGCGetPersonaNames, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetPersonaNames;
};
export declare const CMsgGCGetPersonaNamesResponse: {
    encode(message: CMsgGCGetPersonaNamesResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetPersonaNamesResponse;
};
export declare const CMsgGCGetPersonaNamesResponse_PersonaName: {
    encode(message: CMsgGCGetPersonaNamesResponse_PersonaName, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetPersonaNamesResponse_PersonaName;
};
export declare const CMsgGCCheckFriendship: {
    encode(message: CMsgGCCheckFriendship, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCheckFriendship;
};
export declare const CMsgGCCheckFriendshipResponse: {
    encode(message: CMsgGCCheckFriendshipResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCCheckFriendshipResponse;
};
export declare const CMsgGCMsgMasterSetDirectory: {
    encode(message: CMsgGCMsgMasterSetDirectory, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetDirectory;
};
export declare const CMsgGCMsgMasterSetDirectory_SubGC: {
    encode(message: CMsgGCMsgMasterSetDirectory_SubGC, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetDirectory_SubGC;
};
export declare const CMsgGCMsgMasterSetDirectoryResponse: {
    encode(message: CMsgGCMsgMasterSetDirectoryResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetDirectoryResponse;
};
export declare const CMsgGCMsgWebAPIJobRequestForwardResponse: {
    encode(message: CMsgGCMsgWebAPIJobRequestForwardResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgWebAPIJobRequestForwardResponse;
};
export declare const CGCSystemMsgGetPurchaseTrustRequest: {
    encode(message: CGCSystemMsgGetPurchaseTrustRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCSystemMsgGetPurchaseTrustRequest;
};
export declare const CGCSystemMsgGetPurchaseTrustResponse: {
    encode(message: CGCSystemMsgGetPurchaseTrustResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CGCSystemMsgGetPurchaseTrustResponse;
};
export declare const CMsgGCHAccountVacStatusChange: {
    encode(message: CMsgGCHAccountVacStatusChange, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCHAccountVacStatusChange;
};
export declare const CMsgGCGetPartnerAccountLink: {
    encode(message: CMsgGCGetPartnerAccountLink, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetPartnerAccountLink;
};
export declare const CMsgGCGetPartnerAccountLinkResponse: {
    encode(message: CMsgGCGetPartnerAccountLinkResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCGetPartnerAccountLinkResponse;
};
export declare const CMsgGCRoutingInfo: {
    encode(message: CMsgGCRoutingInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCRoutingInfo;
};
export declare const CMsgGCMsgMasterSetWebAPIRouting: {
    encode(message: CMsgGCMsgMasterSetWebAPIRouting, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetWebAPIRouting;
};
export declare const CMsgGCMsgMasterSetWebAPIRouting_Entry: {
    encode(message: CMsgGCMsgMasterSetWebAPIRouting_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetWebAPIRouting_Entry;
};
export declare const CMsgGCMsgMasterSetClientMsgRouting: {
    encode(message: CMsgGCMsgMasterSetClientMsgRouting, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetClientMsgRouting;
};
export declare const CMsgGCMsgMasterSetClientMsgRouting_Entry: {
    encode(message: CMsgGCMsgMasterSetClientMsgRouting_Entry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetClientMsgRouting_Entry;
};
export declare const CMsgGCMsgMasterSetWebAPIRoutingResponse: {
    encode(message: CMsgGCMsgMasterSetWebAPIRoutingResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetWebAPIRoutingResponse;
};
export declare const CMsgGCMsgMasterSetClientMsgRoutingResponse: {
    encode(message: CMsgGCMsgMasterSetClientMsgRoutingResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgMasterSetClientMsgRoutingResponse;
};
export declare const CMsgGCMsgSetOptions: {
    encode(message: CMsgGCMsgSetOptions, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgSetOptions;
};
export declare const CMsgGCMsgSetOptions_MessageRange: {
    encode(message: CMsgGCMsgSetOptions_MessageRange, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCMsgSetOptions_MessageRange;
};
export declare const CMsgGCHUpdateSession: {
    encode(message: CMsgGCHUpdateSession, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCHUpdateSession;
};
export declare const CMsgGCHUpdateSession_ExtraField: {
    encode(message: CMsgGCHUpdateSession_ExtraField, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgGCHUpdateSession_ExtraField;
};
export declare const CMsgNotificationOfSuspiciousActivity: {
    encode(message: CMsgNotificationOfSuspiciousActivity, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgNotificationOfSuspiciousActivity;
};
export declare const CMsgNotificationOfSuspiciousActivity_MultipleGameInstances: {
    encode(message: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances;
};
export declare const CMsgDPPartnerMicroTxns: {
    encode(message: CMsgDPPartnerMicroTxns, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgDPPartnerMicroTxns;
};
export declare const CMsgDPPartnerMicroTxns_PartnerMicroTxn: {
    encode(message: CMsgDPPartnerMicroTxns_PartnerMicroTxn, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgDPPartnerMicroTxns_PartnerMicroTxn;
};
export declare const CMsgDPPartnerMicroTxns_PartnerInfo: {
    encode(message: CMsgDPPartnerMicroTxns_PartnerInfo, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgDPPartnerMicroTxns_PartnerInfo;
};
export declare const CMsgDPPartnerMicroTxnsResponse: {
    encode(message: CMsgDPPartnerMicroTxnsResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CMsgDPPartnerMicroTxnsResponse;
};
export declare const CChinaAgreementSessionsStartAgreementSessionInGameRequest: {
    encode(message: CChinaAgreementSessionsStartAgreementSessionInGameRequest, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CChinaAgreementSessionsStartAgreementSessionInGameRequest;
};
export declare const CChinaAgreementSessionsStartAgreementSessionInGameResponse: {
    encode(message: CChinaAgreementSessionsStartAgreementSessionInGameResponse, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CChinaAgreementSessionsStartAgreementSessionInGameResponse;
};
