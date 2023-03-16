import { Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
export declare const protobufPackage = "";
export declare enum GCProtoBufMsgSrc {
    GCProtoBufMsgSrc_Unspecified = 0,
    GCProtoBufMsgSrc_FromSystem = 1,
    GCProtoBufMsgSrc_FromSteamID = 2,
    GCProtoBufMsgSrc_FromGC = 3,
    GCProtoBufMsgSrc_ReplySystem = 4
}
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
    message: string;
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
export declare enum CMsgGCRoutingInfo_RoutingMethod {
    RANDOM = 0,
    DISCARD = 1,
    CLIENT_STEAMID = 2,
    PROTOBUF_FIELD_UINT64 = 3,
    WEBAPI_PARAM_UINT64 = 4
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
export declare enum CMsgGCMsgSetOptions_Option {
    NOTIFY_USER_SESSIONS = 0,
    NOTIFY_SERVER_SESSIONS = 1,
    NOTIFY_ACHIEVEMENTS = 2,
    NOTIFY_VAC_ACTION = 3
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
export interface CChinaAgreementSessionsStartAgreementSessionInGameRequest {
    appid: number;
    steamid: Long;
    clientIpaddress: string;
}
export interface CChinaAgreementSessionsStartAgreementSessionInGameResponse {
    agreementUrl: string;
}
export declare const CMsgProtoBufHeader: {
    encode(message: CMsgProtoBufHeader, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgProtoBufHeader;
    fromPartial<I extends {
        clientSteamId?: string | number | Long | undefined;
        clientSessionId?: number | undefined;
        sourceAppId?: number | undefined;
        jobIdSource?: string | number | Long | undefined;
        jobIdTarget?: string | number | Long | undefined;
        targetJobName?: string | undefined;
        eresult?: number | undefined;
        errorMessage?: string | undefined;
        ip?: number | undefined;
        gcMsgSrc?: GCProtoBufMsgSrc | undefined;
        gcDirIndexSource?: number | undefined;
    } & {
        clientSteamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["clientSteamId"], keyof Long>, never>) | undefined;
        clientSessionId?: number | undefined;
        sourceAppId?: number | undefined;
        jobIdSource?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["jobIdSource"], keyof Long>, never>) | undefined;
        jobIdTarget?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["jobIdTarget"], keyof Long>, never>) | undefined;
        targetJobName?: string | undefined;
        eresult?: number | undefined;
        errorMessage?: string | undefined;
        ip?: number | undefined;
        gcMsgSrc?: GCProtoBufMsgSrc | undefined;
        gcDirIndexSource?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgProtoBufHeader>, never>>(object: I): CMsgProtoBufHeader;
};
export declare const CMsgWebAPIKey: {
    encode(message: CMsgWebAPIKey, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgWebAPIKey;
    fromPartial<I extends {
        status?: number | undefined;
        accountId?: number | undefined;
        publisherGroupId?: number | undefined;
        keyId?: number | undefined;
        domain?: string | undefined;
    } & {
        status?: number | undefined;
        accountId?: number | undefined;
        publisherGroupId?: number | undefined;
        keyId?: number | undefined;
        domain?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgWebAPIKey>, never>>(object: I): CMsgWebAPIKey;
};
export declare const CMsgHttpRequest: {
    encode(message: CMsgHttpRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgHttpRequest;
    fromPartial<I extends {
        requestMethod?: number | undefined;
        hostname?: string | undefined;
        url?: string | undefined;
        headers?: {
            name?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
        getParams?: {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        postParams?: {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        body?: Uint8Array | undefined;
        absoluteTimeout?: number | undefined;
    } & {
        requestMethod?: number | undefined;
        hostname?: string | undefined;
        url?: string | undefined;
        headers?: ({
            name?: string | undefined;
            value?: string | undefined;
        }[] & ({
            name?: string | undefined;
            value?: string | undefined;
        } & {
            name?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["headers"][number], keyof CMsgHttpRequest_RequestHeader>, never>)[] & Record<Exclude<keyof I["headers"], keyof {
            name?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
        getParams?: ({
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            name?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["getParams"][number], keyof CMsgHttpRequest_QueryParam>, never>)[] & Record<Exclude<keyof I["getParams"], keyof {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        postParams?: ({
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            name?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["postParams"][number], keyof CMsgHttpRequest_QueryParam>, never>)[] & Record<Exclude<keyof I["postParams"], keyof {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        body?: Uint8Array | undefined;
        absoluteTimeout?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgHttpRequest>, never>>(object: I): CMsgHttpRequest;
};
export declare const CMsgHttpRequest_RequestHeader: {
    encode(message: CMsgHttpRequest_RequestHeader, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgHttpRequest_RequestHeader;
    fromPartial<I extends {
        name?: string | undefined;
        value?: string | undefined;
    } & {
        name?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgHttpRequest_RequestHeader>, never>>(object: I): CMsgHttpRequest_RequestHeader;
};
export declare const CMsgHttpRequest_QueryParam: {
    encode(message: CMsgHttpRequest_QueryParam, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgHttpRequest_QueryParam;
    fromPartial<I extends {
        name?: string | undefined;
        value?: Uint8Array | undefined;
    } & {
        name?: string | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CMsgHttpRequest_QueryParam>, never>>(object: I): CMsgHttpRequest_QueryParam;
};
export declare const CMsgWebAPIRequest: {
    encode(message: CMsgWebAPIRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgWebAPIRequest;
    fromPartial<I extends {
        UNUSEDJobName?: string | undefined;
        interfaceName?: string | undefined;
        methodName?: string | undefined;
        version?: number | undefined;
        apiKey?: {
            status?: number | undefined;
            accountId?: number | undefined;
            publisherGroupId?: number | undefined;
            keyId?: number | undefined;
            domain?: string | undefined;
        } | undefined;
        request?: {
            requestMethod?: number | undefined;
            hostname?: string | undefined;
            url?: string | undefined;
            headers?: {
                name?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            getParams?: {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
            postParams?: {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
            body?: Uint8Array | undefined;
            absoluteTimeout?: number | undefined;
        } | undefined;
        routingAppId?: number | undefined;
    } & {
        UNUSEDJobName?: string | undefined;
        interfaceName?: string | undefined;
        methodName?: string | undefined;
        version?: number | undefined;
        apiKey?: ({
            status?: number | undefined;
            accountId?: number | undefined;
            publisherGroupId?: number | undefined;
            keyId?: number | undefined;
            domain?: string | undefined;
        } & {
            status?: number | undefined;
            accountId?: number | undefined;
            publisherGroupId?: number | undefined;
            keyId?: number | undefined;
            domain?: string | undefined;
        } & Record<Exclude<keyof I["apiKey"], keyof CMsgWebAPIKey>, never>) | undefined;
        request?: ({
            requestMethod?: number | undefined;
            hostname?: string | undefined;
            url?: string | undefined;
            headers?: {
                name?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            getParams?: {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
            postParams?: {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
            body?: Uint8Array | undefined;
            absoluteTimeout?: number | undefined;
        } & {
            requestMethod?: number | undefined;
            hostname?: string | undefined;
            url?: string | undefined;
            headers?: ({
                name?: string | undefined;
                value?: string | undefined;
            }[] & ({
                name?: string | undefined;
                value?: string | undefined;
            } & {
                name?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["request"]["headers"][number], keyof CMsgHttpRequest_RequestHeader>, never>)[] & Record<Exclude<keyof I["request"]["headers"], keyof {
                name?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
            getParams?: ({
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                name?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["request"]["getParams"][number], keyof CMsgHttpRequest_QueryParam>, never>)[] & Record<Exclude<keyof I["request"]["getParams"], keyof {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            postParams?: ({
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                name?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["request"]["postParams"][number], keyof CMsgHttpRequest_QueryParam>, never>)[] & Record<Exclude<keyof I["request"]["postParams"], keyof {
                name?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            body?: Uint8Array | undefined;
            absoluteTimeout?: number | undefined;
        } & Record<Exclude<keyof I["request"], keyof CMsgHttpRequest>, never>) | undefined;
        routingAppId?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgWebAPIRequest>, never>>(object: I): CMsgWebAPIRequest;
};
export declare const CMsgHttpResponse: {
    encode(message: CMsgHttpResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgHttpResponse;
    fromPartial<I extends {
        statusCode?: number | undefined;
        headers?: {
            name?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
        body?: Uint8Array | undefined;
    } & {
        statusCode?: number | undefined;
        headers?: ({
            name?: string | undefined;
            value?: string | undefined;
        }[] & ({
            name?: string | undefined;
            value?: string | undefined;
        } & {
            name?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["headers"][number], keyof CMsgHttpResponse_ResponseHeader>, never>)[] & Record<Exclude<keyof I["headers"], keyof {
            name?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
        body?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CMsgHttpResponse>, never>>(object: I): CMsgHttpResponse;
};
export declare const CMsgHttpResponse_ResponseHeader: {
    encode(message: CMsgHttpResponse_ResponseHeader, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgHttpResponse_ResponseHeader;
    fromPartial<I extends {
        name?: string | undefined;
        value?: string | undefined;
    } & {
        name?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgHttpResponse_ResponseHeader>, never>>(object: I): CMsgHttpResponse_ResponseHeader;
};
export declare const CMsgAMFindAccounts: {
    encode(message: CMsgAMFindAccounts, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMFindAccounts;
    fromPartial<I extends {
        searchType?: number | undefined;
        searchString?: string | undefined;
    } & {
        searchType?: number | undefined;
        searchString?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMFindAccounts>, never>>(object: I): CMsgAMFindAccounts;
};
export declare const CMsgAMFindAccountsResponse: {
    encode(message: CMsgAMFindAccountsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMFindAccountsResponse;
    fromPartial<I extends {
        steamId?: (string | number | Long)[] | undefined;
    } & {
        steamId?: ((string | number | Long)[] & (string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamId"][number], keyof Long>, never>))[] & Record<Exclude<keyof I["steamId"], keyof (string | number | Long)[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "steamId">, never>>(object: I): CMsgAMFindAccountsResponse;
};
export declare const CMsgNotifyWatchdog: {
    encode(message: CMsgNotifyWatchdog, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgNotifyWatchdog;
    fromPartial<I extends {
        source?: number | undefined;
        alertType?: number | undefined;
        alertDestination?: number | undefined;
        critical?: boolean | undefined;
        time?: number | undefined;
        appid?: number | undefined;
        text?: string | undefined;
    } & {
        source?: number | undefined;
        alertType?: number | undefined;
        alertDestination?: number | undefined;
        critical?: boolean | undefined;
        time?: number | undefined;
        appid?: number | undefined;
        text?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgNotifyWatchdog>, never>>(object: I): CMsgNotifyWatchdog;
};
export declare const CMsgAMGetLicenses: {
    encode(message: CMsgAMGetLicenses, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGetLicenses;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "steamid">, never>>(object: I): CMsgAMGetLicenses;
};
export declare const CMsgPackageLicense: {
    encode(message: CMsgPackageLicense, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgPackageLicense;
    fromPartial<I extends {
        packageId?: number | undefined;
        timeCreated?: number | undefined;
        ownerId?: number | undefined;
    } & {
        packageId?: number | undefined;
        timeCreated?: number | undefined;
        ownerId?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgPackageLicense>, never>>(object: I): CMsgPackageLicense;
};
export declare const CMsgAMGetLicensesResponse: {
    encode(message: CMsgAMGetLicensesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGetLicensesResponse;
    fromPartial<I extends {
        license?: {
            packageId?: number | undefined;
            timeCreated?: number | undefined;
            ownerId?: number | undefined;
        }[] | undefined;
        result?: number | undefined;
    } & {
        license?: ({
            packageId?: number | undefined;
            timeCreated?: number | undefined;
            ownerId?: number | undefined;
        }[] & ({
            packageId?: number | undefined;
            timeCreated?: number | undefined;
            ownerId?: number | undefined;
        } & {
            packageId?: number | undefined;
            timeCreated?: number | undefined;
            ownerId?: number | undefined;
        } & Record<Exclude<keyof I["license"][number], keyof CMsgPackageLicense>, never>)[] & Record<Exclude<keyof I["license"], keyof {
            packageId?: number | undefined;
            timeCreated?: number | undefined;
            ownerId?: number | undefined;
        }[]>, never>) | undefined;
        result?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGetLicensesResponse>, never>>(object: I): CMsgAMGetLicensesResponse;
};
export declare const CMsgAMGetUserGameStats: {
    encode(message: CMsgAMGetUserGameStats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGetUserGameStats;
    fromPartial<I extends {
        steamId?: string | number | Long | undefined;
        gameId?: string | number | Long | undefined;
        stats?: number[] | undefined;
    } & {
        steamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamId"], keyof Long>, never>) | undefined;
        gameId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["gameId"], keyof Long>, never>) | undefined;
        stats?: (number[] & number[] & Record<Exclude<keyof I["stats"], keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGetUserGameStats>, never>>(object: I): CMsgAMGetUserGameStats;
};
export declare const CMsgAMGetUserGameStatsResponse: {
    encode(message: CMsgAMGetUserGameStatsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGetUserGameStatsResponse;
    fromPartial<I extends {
        steamId?: string | number | Long | undefined;
        gameId?: string | number | Long | undefined;
        eresult?: number | undefined;
        stats?: {
            statId?: number | undefined;
            statValue?: number | undefined;
        }[] | undefined;
        achievementBlocks?: {
            achievementId?: number | undefined;
            achievementBitId?: number | undefined;
            unlockTime?: number | undefined;
        }[] | undefined;
    } & {
        steamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamId"], keyof Long>, never>) | undefined;
        gameId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["gameId"], keyof Long>, never>) | undefined;
        eresult?: number | undefined;
        stats?: ({
            statId?: number | undefined;
            statValue?: number | undefined;
        }[] & ({
            statId?: number | undefined;
            statValue?: number | undefined;
        } & {
            statId?: number | undefined;
            statValue?: number | undefined;
        } & Record<Exclude<keyof I["stats"][number], keyof CMsgAMGetUserGameStatsResponse_Stats>, never>)[] & Record<Exclude<keyof I["stats"], keyof {
            statId?: number | undefined;
            statValue?: number | undefined;
        }[]>, never>) | undefined;
        achievementBlocks?: ({
            achievementId?: number | undefined;
            achievementBitId?: number | undefined;
            unlockTime?: number | undefined;
        }[] & ({
            achievementId?: number | undefined;
            achievementBitId?: number | undefined;
            unlockTime?: number | undefined;
        } & {
            achievementId?: number | undefined;
            achievementBitId?: number | undefined;
            unlockTime?: number | undefined;
        } & Record<Exclude<keyof I["achievementBlocks"][number], keyof CMsgAMGetUserGameStatsResponse_AchievementBlocks>, never>)[] & Record<Exclude<keyof I["achievementBlocks"], keyof {
            achievementId?: number | undefined;
            achievementBitId?: number | undefined;
            unlockTime?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGetUserGameStatsResponse>, never>>(object: I): CMsgAMGetUserGameStatsResponse;
};
export declare const CMsgAMGetUserGameStatsResponse_Stats: {
    encode(message: CMsgAMGetUserGameStatsResponse_Stats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGetUserGameStatsResponse_Stats;
    fromPartial<I extends {
        statId?: number | undefined;
        statValue?: number | undefined;
    } & {
        statId?: number | undefined;
        statValue?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGetUserGameStatsResponse_Stats>, never>>(object: I): CMsgAMGetUserGameStatsResponse_Stats;
};
export declare const CMsgAMGetUserGameStatsResponse_AchievementBlocks: {
    encode(message: CMsgAMGetUserGameStatsResponse_AchievementBlocks, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGetUserGameStatsResponse_AchievementBlocks;
    fromPartial<I extends {
        achievementId?: number | undefined;
        achievementBitId?: number | undefined;
        unlockTime?: number | undefined;
    } & {
        achievementId?: number | undefined;
        achievementBitId?: number | undefined;
        unlockTime?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGetUserGameStatsResponse_AchievementBlocks>, never>>(object: I): CMsgAMGetUserGameStatsResponse_AchievementBlocks;
};
export declare const CMsgGCGetCommandList: {
    encode(message: CMsgGCGetCommandList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetCommandList;
    fromPartial<I extends {
        appId?: number | undefined;
        commandPrefix?: string | undefined;
    } & {
        appId?: number | undefined;
        commandPrefix?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCGetCommandList>, never>>(object: I): CMsgGCGetCommandList;
};
export declare const CMsgGCGetCommandListResponse: {
    encode(message: CMsgGCGetCommandListResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetCommandListResponse;
    fromPartial<I extends {
        commandName?: string[] | undefined;
    } & {
        commandName?: (string[] & string[] & Record<Exclude<keyof I["commandName"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "commandName">, never>>(object: I): CMsgGCGetCommandListResponse;
};
export declare const CGCMsgMemCachedGet: {
    encode(message: CGCMsgMemCachedGet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedGet;
    fromPartial<I extends {
        keys?: string[] | undefined;
    } & {
        keys?: (string[] & string[] & Record<Exclude<keyof I["keys"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keys">, never>>(object: I): CGCMsgMemCachedGet;
};
export declare const CGCMsgMemCachedGetResponse: {
    encode(message: CGCMsgMemCachedGetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedGetResponse;
    fromPartial<I extends {
        values?: {
            found?: boolean | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        values?: ({
            found?: boolean | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            found?: boolean | undefined;
            value?: Uint8Array | undefined;
        } & {
            found?: boolean | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["values"][number], keyof CGCMsgMemCachedGetResponse_ValueTag>, never>)[] & Record<Exclude<keyof I["values"], keyof {
            found?: boolean | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "values">, never>>(object: I): CGCMsgMemCachedGetResponse;
};
export declare const CGCMsgMemCachedGetResponse_ValueTag: {
    encode(message: CGCMsgMemCachedGetResponse_ValueTag, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedGetResponse_ValueTag;
    fromPartial<I extends {
        found?: boolean | undefined;
        value?: Uint8Array | undefined;
    } & {
        found?: boolean | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CGCMsgMemCachedGetResponse_ValueTag>, never>>(object: I): CGCMsgMemCachedGetResponse_ValueTag;
};
export declare const CGCMsgMemCachedSet: {
    encode(message: CGCMsgMemCachedSet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedSet;
    fromPartial<I extends {
        keys?: {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        keys?: ({
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            name?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["keys"][number], keyof CGCMsgMemCachedSet_KeyPair>, never>)[] & Record<Exclude<keyof I["keys"], keyof {
            name?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keys">, never>>(object: I): CGCMsgMemCachedSet;
};
export declare const CGCMsgMemCachedSet_KeyPair: {
    encode(message: CGCMsgMemCachedSet_KeyPair, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedSet_KeyPair;
    fromPartial<I extends {
        name?: string | undefined;
        value?: Uint8Array | undefined;
    } & {
        name?: string | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CGCMsgMemCachedSet_KeyPair>, never>>(object: I): CGCMsgMemCachedSet_KeyPair;
};
export declare const CGCMsgMemCachedDelete: {
    encode(message: CGCMsgMemCachedDelete, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedDelete;
    fromPartial<I extends {
        keys?: string[] | undefined;
    } & {
        keys?: (string[] & string[] & Record<Exclude<keyof I["keys"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keys">, never>>(object: I): CGCMsgMemCachedDelete;
};
export declare const CGCMsgMemCachedStats: {
    encode(_: CGCMsgMemCachedStats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedStats;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CGCMsgMemCachedStats;
};
export declare const CGCMsgMemCachedStatsResponse: {
    encode(message: CGCMsgMemCachedStatsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedStatsResponse;
    fromPartial<I extends {
        currConnections?: string | number | Long | undefined;
        cmdGet?: string | number | Long | undefined;
        cmdSet?: string | number | Long | undefined;
        cmdFlush?: string | number | Long | undefined;
        getHits?: string | number | Long | undefined;
        getMisses?: string | number | Long | undefined;
        deleteHits?: string | number | Long | undefined;
        deleteMisses?: string | number | Long | undefined;
        bytesRead?: string | number | Long | undefined;
        bytesWritten?: string | number | Long | undefined;
        limitMaxbytes?: string | number | Long | undefined;
        currItems?: string | number | Long | undefined;
        evictions?: string | number | Long | undefined;
        bytes?: string | number | Long | undefined;
    } & {
        currConnections?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["currConnections"], keyof Long>, never>) | undefined;
        cmdGet?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["cmdGet"], keyof Long>, never>) | undefined;
        cmdSet?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["cmdSet"], keyof Long>, never>) | undefined;
        cmdFlush?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["cmdFlush"], keyof Long>, never>) | undefined;
        getHits?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["getHits"], keyof Long>, never>) | undefined;
        getMisses?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["getMisses"], keyof Long>, never>) | undefined;
        deleteHits?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["deleteHits"], keyof Long>, never>) | undefined;
        deleteMisses?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["deleteMisses"], keyof Long>, never>) | undefined;
        bytesRead?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["bytesRead"], keyof Long>, never>) | undefined;
        bytesWritten?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["bytesWritten"], keyof Long>, never>) | undefined;
        limitMaxbytes?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["limitMaxbytes"], keyof Long>, never>) | undefined;
        currItems?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["currItems"], keyof Long>, never>) | undefined;
        evictions?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["evictions"], keyof Long>, never>) | undefined;
        bytes?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["bytes"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CGCMsgMemCachedStatsResponse>, never>>(object: I): CGCMsgMemCachedStatsResponse;
};
export declare const CGCMsgSQLStats: {
    encode(message: CGCMsgSQLStats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgSQLStats;
    fromPartial<I extends {
        schemaCatalog?: number | undefined;
    } & {
        schemaCatalog?: number | undefined;
    } & Record<Exclude<keyof I, "schemaCatalog">, never>>(object: I): CGCMsgSQLStats;
};
export declare const CGCMsgSQLStatsResponse: {
    encode(message: CGCMsgSQLStatsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgSQLStatsResponse;
    fromPartial<I extends {
        threads?: number | undefined;
        threadsConnected?: number | undefined;
        threadsActive?: number | undefined;
        operationsSubmitted?: number | undefined;
        preparedStatementsExecuted?: number | undefined;
        nonPreparedStatementsExecuted?: number | undefined;
        deadlockRetries?: number | undefined;
        operationsTimedOutInQueue?: number | undefined;
        errors?: number | undefined;
    } & {
        threads?: number | undefined;
        threadsConnected?: number | undefined;
        threadsActive?: number | undefined;
        operationsSubmitted?: number | undefined;
        preparedStatementsExecuted?: number | undefined;
        nonPreparedStatementsExecuted?: number | undefined;
        deadlockRetries?: number | undefined;
        operationsTimedOutInQueue?: number | undefined;
        errors?: number | undefined;
    } & Record<Exclude<keyof I, keyof CGCMsgSQLStatsResponse>, never>>(object: I): CGCMsgSQLStatsResponse;
};
export declare const CMsgAMAddFreeLicense: {
    encode(message: CMsgAMAddFreeLicense, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMAddFreeLicense;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
        ipPublic?: number | undefined;
        packageid?: number | undefined;
        storeCountryCode?: string | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        ipPublic?: number | undefined;
        packageid?: number | undefined;
        storeCountryCode?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMAddFreeLicense>, never>>(object: I): CMsgAMAddFreeLicense;
};
export declare const CMsgAMAddFreeLicenseResponse: {
    encode(message: CMsgAMAddFreeLicenseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMAddFreeLicenseResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
        purchaseResultDetail?: number | undefined;
        transid?: string | number | Long | undefined;
    } & {
        eresult?: number | undefined;
        purchaseResultDetail?: number | undefined;
        transid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["transid"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMAddFreeLicenseResponse>, never>>(object: I): CMsgAMAddFreeLicenseResponse;
};
export declare const CGCMsgGetIPLocation: {
    encode(message: CGCMsgGetIPLocation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgGetIPLocation;
    fromPartial<I extends {
        ips?: number[] | undefined;
    } & {
        ips?: (number[] & number[] & Record<Exclude<keyof I["ips"], keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ips">, never>>(object: I): CGCMsgGetIPLocation;
};
export declare const CIPLocationInfo: {
    encode(message: CIPLocationInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CIPLocationInfo;
    fromPartial<I extends {
        ip?: number | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
    } & {
        ip?: number | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
    } & Record<Exclude<keyof I, keyof CIPLocationInfo>, never>>(object: I): CIPLocationInfo;
};
export declare const CGCMsgGetIPLocationResponse: {
    encode(message: CGCMsgGetIPLocationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgGetIPLocationResponse;
    fromPartial<I extends {
        infos?: {
            ip?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            country?: string | undefined;
            state?: string | undefined;
            city?: string | undefined;
        }[] | undefined;
    } & {
        infos?: ({
            ip?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            country?: string | undefined;
            state?: string | undefined;
            city?: string | undefined;
        }[] & ({
            ip?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            country?: string | undefined;
            state?: string | undefined;
            city?: string | undefined;
        } & {
            ip?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            country?: string | undefined;
            state?: string | undefined;
            city?: string | undefined;
        } & Record<Exclude<keyof I["infos"][number], keyof CIPLocationInfo>, never>)[] & Record<Exclude<keyof I["infos"], keyof {
            ip?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            country?: string | undefined;
            state?: string | undefined;
            city?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "infos">, never>>(object: I): CGCMsgGetIPLocationResponse;
};
export declare const CGCMsgSystemStatsSchema: {
    encode(message: CGCMsgSystemStatsSchema, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgSystemStatsSchema;
    fromPartial<I extends {
        gcAppId?: number | undefined;
        schemaKv?: Uint8Array | undefined;
    } & {
        gcAppId?: number | undefined;
        schemaKv?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CGCMsgSystemStatsSchema>, never>>(object: I): CGCMsgSystemStatsSchema;
};
export declare const CGCMsgGetSystemStats: {
    encode(_: CGCMsgGetSystemStats, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgGetSystemStats;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CGCMsgGetSystemStats;
};
export declare const CGCMsgGetSystemStatsResponse: {
    encode(message: CGCMsgGetSystemStatsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCMsgGetSystemStatsResponse;
    fromPartial<I extends {
        gcAppId?: number | undefined;
        statsKv?: Uint8Array | undefined;
        activeJobs?: number | undefined;
        yieldingJobs?: number | undefined;
        userSessions?: number | undefined;
        gameServerSessions?: number | undefined;
        socaches?: number | undefined;
        socachesToUnload?: number | undefined;
        socachesLoading?: number | undefined;
        writebackQueue?: number | undefined;
        steamidLocks?: number | undefined;
        logonQueue?: number | undefined;
        logonJobs?: number | undefined;
    } & {
        gcAppId?: number | undefined;
        statsKv?: Uint8Array | undefined;
        activeJobs?: number | undefined;
        yieldingJobs?: number | undefined;
        userSessions?: number | undefined;
        gameServerSessions?: number | undefined;
        socaches?: number | undefined;
        socachesToUnload?: number | undefined;
        socachesLoading?: number | undefined;
        writebackQueue?: number | undefined;
        steamidLocks?: number | undefined;
        logonQueue?: number | undefined;
        logonJobs?: number | undefined;
    } & Record<Exclude<keyof I, keyof CGCMsgGetSystemStatsResponse>, never>>(object: I): CGCMsgGetSystemStatsResponse;
};
export declare const CMsgAMSendEmail: {
    encode(message: CMsgAMSendEmail, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMSendEmail;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
        emailMsgType?: number | undefined;
        emailFormat?: number | undefined;
        personaNameTokens?: {
            steamid?: string | number | Long | undefined;
            tokenName?: string | undefined;
        }[] | undefined;
        sourceGc?: number | undefined;
        tokens?: {
            tokenName?: string | undefined;
            tokenValue?: string | undefined;
        }[] | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        emailMsgType?: number | undefined;
        emailFormat?: number | undefined;
        personaNameTokens?: ({
            steamid?: string | number | Long | undefined;
            tokenName?: string | undefined;
        }[] & ({
            steamid?: string | number | Long | undefined;
            tokenName?: string | undefined;
        } & {
            steamid?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["personaNameTokens"][number]["steamid"], keyof Long>, never>) | undefined;
            tokenName?: string | undefined;
        } & Record<Exclude<keyof I["personaNameTokens"][number], keyof CMsgAMSendEmail_PersonaNameReplacementToken>, never>)[] & Record<Exclude<keyof I["personaNameTokens"], keyof {
            steamid?: string | number | Long | undefined;
            tokenName?: string | undefined;
        }[]>, never>) | undefined;
        sourceGc?: number | undefined;
        tokens?: ({
            tokenName?: string | undefined;
            tokenValue?: string | undefined;
        }[] & ({
            tokenName?: string | undefined;
            tokenValue?: string | undefined;
        } & {
            tokenName?: string | undefined;
            tokenValue?: string | undefined;
        } & Record<Exclude<keyof I["tokens"][number], keyof CMsgAMSendEmail_ReplacementToken>, never>)[] & Record<Exclude<keyof I["tokens"], keyof {
            tokenName?: string | undefined;
            tokenValue?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMSendEmail>, never>>(object: I): CMsgAMSendEmail;
};
export declare const CMsgAMSendEmail_ReplacementToken: {
    encode(message: CMsgAMSendEmail_ReplacementToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMSendEmail_ReplacementToken;
    fromPartial<I extends {
        tokenName?: string | undefined;
        tokenValue?: string | undefined;
    } & {
        tokenName?: string | undefined;
        tokenValue?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMSendEmail_ReplacementToken>, never>>(object: I): CMsgAMSendEmail_ReplacementToken;
};
export declare const CMsgAMSendEmail_PersonaNameReplacementToken: {
    encode(message: CMsgAMSendEmail_PersonaNameReplacementToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMSendEmail_PersonaNameReplacementToken;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
        tokenName?: string | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        tokenName?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMSendEmail_PersonaNameReplacementToken>, never>>(object: I): CMsgAMSendEmail_PersonaNameReplacementToken;
};
export declare const CMsgAMSendEmailResponse: {
    encode(message: CMsgAMSendEmailResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMSendEmailResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
    } & {
        eresult?: number | undefined;
    } & Record<Exclude<keyof I, "eresult">, never>>(object: I): CMsgAMSendEmailResponse;
};
export declare const CMsgGCGetEmailTemplate: {
    encode(message: CMsgGCGetEmailTemplate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetEmailTemplate;
    fromPartial<I extends {
        appId?: number | undefined;
        emailMsgType?: number | undefined;
        emailLang?: number | undefined;
        emailFormat?: number | undefined;
    } & {
        appId?: number | undefined;
        emailMsgType?: number | undefined;
        emailLang?: number | undefined;
        emailFormat?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCGetEmailTemplate>, never>>(object: I): CMsgGCGetEmailTemplate;
};
export declare const CMsgGCGetEmailTemplateResponse: {
    encode(message: CMsgGCGetEmailTemplateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetEmailTemplateResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
        templateExists?: boolean | undefined;
        template?: string | undefined;
    } & {
        eresult?: number | undefined;
        templateExists?: boolean | undefined;
        template?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCGetEmailTemplateResponse>, never>>(object: I): CMsgGCGetEmailTemplateResponse;
};
export declare const CMsgAMGrantGuestPasses2: {
    encode(message: CMsgAMGrantGuestPasses2, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGrantGuestPasses2;
    fromPartial<I extends {
        steamId?: string | number | Long | undefined;
        packageId?: number | undefined;
        passesToGrant?: number | undefined;
        daysToExpiration?: number | undefined;
        action?: number | undefined;
    } & {
        steamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamId"], keyof Long>, never>) | undefined;
        packageId?: number | undefined;
        passesToGrant?: number | undefined;
        daysToExpiration?: number | undefined;
        action?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGrantGuestPasses2>, never>>(object: I): CMsgAMGrantGuestPasses2;
};
export declare const CMsgAMGrantGuestPasses2Response: {
    encode(message: CMsgAMGrantGuestPasses2Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgAMGrantGuestPasses2Response;
    fromPartial<I extends {
        eresult?: number | undefined;
        passesGranted?: number | undefined;
    } & {
        eresult?: number | undefined;
        passesGranted?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgAMGrantGuestPasses2Response>, never>>(object: I): CMsgAMGrantGuestPasses2Response;
};
export declare const CGCSystemMsgGetAccountDetails: {
    encode(message: CGCSystemMsgGetAccountDetails, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCSystemMsgGetAccountDetails;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
        appid?: number | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        appid?: number | undefined;
    } & Record<Exclude<keyof I, keyof CGCSystemMsgGetAccountDetails>, never>>(object: I): CGCSystemMsgGetAccountDetails;
};
export declare const CGCSystemMsgGetAccountDetailsResponse: {
    encode(message: CGCSystemMsgGetAccountDetailsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCSystemMsgGetAccountDetailsResponse;
    fromPartial<I extends {
        eresultDeprecated?: number | undefined;
        accountName?: string | undefined;
        personaName?: string | undefined;
        isProfilePublic?: boolean | undefined;
        isInventoryPublic?: boolean | undefined;
        isVacBanned?: boolean | undefined;
        isCyberCafe?: boolean | undefined;
        isSchoolAccount?: boolean | undefined;
        isLimited?: boolean | undefined;
        isSubscribed?: boolean | undefined;
        package?: number | undefined;
        isFreeTrialAccount?: boolean | undefined;
        freeTrialExpiration?: number | undefined;
        isLowViolence?: boolean | undefined;
        isAccountLockedDown?: boolean | undefined;
        isCommunityBanned?: boolean | undefined;
        isTradeBanned?: boolean | undefined;
        tradeBanExpiration?: number | undefined;
        accountid?: number | undefined;
        suspensionEndTime?: number | undefined;
        currency?: string | undefined;
        steamLevel?: number | undefined;
        friendCount?: number | undefined;
        accountCreationTime?: number | undefined;
        isSteamguardEnabled?: boolean | undefined;
        isPhoneVerified?: boolean | undefined;
        isTwoFactorAuthEnabled?: boolean | undefined;
        twoFactorEnabledTime?: number | undefined;
        phoneVerificationTime?: number | undefined;
        phoneId?: string | number | Long | undefined;
        isPhoneIdentifying?: boolean | undefined;
        rtIdentityLinked?: number | undefined;
        rtBirthDate?: number | undefined;
        txnCountryCode?: string | undefined;
        hasAcceptedChinaSsa?: boolean | undefined;
        isBannedSteamChina?: boolean | undefined;
    } & {
        eresultDeprecated?: number | undefined;
        accountName?: string | undefined;
        personaName?: string | undefined;
        isProfilePublic?: boolean | undefined;
        isInventoryPublic?: boolean | undefined;
        isVacBanned?: boolean | undefined;
        isCyberCafe?: boolean | undefined;
        isSchoolAccount?: boolean | undefined;
        isLimited?: boolean | undefined;
        isSubscribed?: boolean | undefined;
        package?: number | undefined;
        isFreeTrialAccount?: boolean | undefined;
        freeTrialExpiration?: number | undefined;
        isLowViolence?: boolean | undefined;
        isAccountLockedDown?: boolean | undefined;
        isCommunityBanned?: boolean | undefined;
        isTradeBanned?: boolean | undefined;
        tradeBanExpiration?: number | undefined;
        accountid?: number | undefined;
        suspensionEndTime?: number | undefined;
        currency?: string | undefined;
        steamLevel?: number | undefined;
        friendCount?: number | undefined;
        accountCreationTime?: number | undefined;
        isSteamguardEnabled?: boolean | undefined;
        isPhoneVerified?: boolean | undefined;
        isTwoFactorAuthEnabled?: boolean | undefined;
        twoFactorEnabledTime?: number | undefined;
        phoneVerificationTime?: number | undefined;
        phoneId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["phoneId"], keyof Long>, never>) | undefined;
        isPhoneIdentifying?: boolean | undefined;
        rtIdentityLinked?: number | undefined;
        rtBirthDate?: number | undefined;
        txnCountryCode?: string | undefined;
        hasAcceptedChinaSsa?: boolean | undefined;
        isBannedSteamChina?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CGCSystemMsgGetAccountDetailsResponse>, never>>(object: I): CGCSystemMsgGetAccountDetailsResponse;
};
export declare const CMsgGCGetPersonaNames: {
    encode(message: CMsgGCGetPersonaNames, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetPersonaNames;
    fromPartial<I extends {
        steamids?: (string | number | Long)[] | undefined;
    } & {
        steamids?: ((string | number | Long)[] & (string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamids"][number], keyof Long>, never>))[] & Record<Exclude<keyof I["steamids"], keyof (string | number | Long)[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "steamids">, never>>(object: I): CMsgGCGetPersonaNames;
};
export declare const CMsgGCGetPersonaNamesResponse: {
    encode(message: CMsgGCGetPersonaNamesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetPersonaNamesResponse;
    fromPartial<I extends {
        succeededLookups?: {
            steamid?: string | number | Long | undefined;
            personaName?: string | undefined;
        }[] | undefined;
        failedLookupSteamids?: (string | number | Long)[] | undefined;
    } & {
        succeededLookups?: ({
            steamid?: string | number | Long | undefined;
            personaName?: string | undefined;
        }[] & ({
            steamid?: string | number | Long | undefined;
            personaName?: string | undefined;
        } & {
            steamid?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["succeededLookups"][number]["steamid"], keyof Long>, never>) | undefined;
            personaName?: string | undefined;
        } & Record<Exclude<keyof I["succeededLookups"][number], keyof CMsgGCGetPersonaNamesResponse_PersonaName>, never>)[] & Record<Exclude<keyof I["succeededLookups"], keyof {
            steamid?: string | number | Long | undefined;
            personaName?: string | undefined;
        }[]>, never>) | undefined;
        failedLookupSteamids?: ((string | number | Long)[] & (string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["failedLookupSteamids"][number], keyof Long>, never>))[] & Record<Exclude<keyof I["failedLookupSteamids"], keyof (string | number | Long)[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCGetPersonaNamesResponse>, never>>(object: I): CMsgGCGetPersonaNamesResponse;
};
export declare const CMsgGCGetPersonaNamesResponse_PersonaName: {
    encode(message: CMsgGCGetPersonaNamesResponse_PersonaName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetPersonaNamesResponse_PersonaName;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
        personaName?: string | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        personaName?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCGetPersonaNamesResponse_PersonaName>, never>>(object: I): CMsgGCGetPersonaNamesResponse_PersonaName;
};
export declare const CMsgGCCheckFriendship: {
    encode(message: CMsgGCCheckFriendship, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCCheckFriendship;
    fromPartial<I extends {
        steamidLeft?: string | number | Long | undefined;
        steamidRight?: string | number | Long | undefined;
    } & {
        steamidLeft?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamidLeft"], keyof Long>, never>) | undefined;
        steamidRight?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamidRight"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCCheckFriendship>, never>>(object: I): CMsgGCCheckFriendship;
};
export declare const CMsgGCCheckFriendshipResponse: {
    encode(message: CMsgGCCheckFriendshipResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCCheckFriendshipResponse;
    fromPartial<I extends {
        success?: boolean | undefined;
        foundFriendship?: boolean | undefined;
    } & {
        success?: boolean | undefined;
        foundFriendship?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCCheckFriendshipResponse>, never>>(object: I): CMsgGCCheckFriendshipResponse;
};
export declare const CMsgGCMsgMasterSetDirectory: {
    encode(message: CMsgGCMsgMasterSetDirectory, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetDirectory;
    fromPartial<I extends {
        masterDirIndex?: number | undefined;
        dir?: {
            dirIndex?: number | undefined;
            name?: string | undefined;
            box?: string | undefined;
            commandLine?: string | undefined;
            gcBinary?: string | undefined;
        }[] | undefined;
    } & {
        masterDirIndex?: number | undefined;
        dir?: ({
            dirIndex?: number | undefined;
            name?: string | undefined;
            box?: string | undefined;
            commandLine?: string | undefined;
            gcBinary?: string | undefined;
        }[] & ({
            dirIndex?: number | undefined;
            name?: string | undefined;
            box?: string | undefined;
            commandLine?: string | undefined;
            gcBinary?: string | undefined;
        } & {
            dirIndex?: number | undefined;
            name?: string | undefined;
            box?: string | undefined;
            commandLine?: string | undefined;
            gcBinary?: string | undefined;
        } & Record<Exclude<keyof I["dir"][number], keyof CMsgGCMsgMasterSetDirectory_SubGC>, never>)[] & Record<Exclude<keyof I["dir"], keyof {
            dirIndex?: number | undefined;
            name?: string | undefined;
            box?: string | undefined;
            commandLine?: string | undefined;
            gcBinary?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgMasterSetDirectory>, never>>(object: I): CMsgGCMsgMasterSetDirectory;
};
export declare const CMsgGCMsgMasterSetDirectory_SubGC: {
    encode(message: CMsgGCMsgMasterSetDirectory_SubGC, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetDirectory_SubGC;
    fromPartial<I extends {
        dirIndex?: number | undefined;
        name?: string | undefined;
        box?: string | undefined;
        commandLine?: string | undefined;
        gcBinary?: string | undefined;
    } & {
        dirIndex?: number | undefined;
        name?: string | undefined;
        box?: string | undefined;
        commandLine?: string | undefined;
        gcBinary?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgMasterSetDirectory_SubGC>, never>>(object: I): CMsgGCMsgMasterSetDirectory_SubGC;
};
export declare const CMsgGCMsgMasterSetDirectoryResponse: {
    encode(message: CMsgGCMsgMasterSetDirectoryResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetDirectoryResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
        message?: string | undefined;
    } & {
        eresult?: number | undefined;
        message?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgMasterSetDirectoryResponse>, never>>(object: I): CMsgGCMsgMasterSetDirectoryResponse;
};
export declare const CMsgGCMsgWebAPIJobRequestForwardResponse: {
    encode(message: CMsgGCMsgWebAPIJobRequestForwardResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgWebAPIJobRequestForwardResponse;
    fromPartial<I extends {
        dirIndex?: number | undefined;
    } & {
        dirIndex?: number | undefined;
    } & Record<Exclude<keyof I, "dirIndex">, never>>(object: I): CMsgGCMsgWebAPIJobRequestForwardResponse;
};
export declare const CGCSystemMsgGetPurchaseTrustRequest: {
    encode(message: CGCSystemMsgGetPurchaseTrustRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCSystemMsgGetPurchaseTrustRequest;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "steamid">, never>>(object: I): CGCSystemMsgGetPurchaseTrustRequest;
};
export declare const CGCSystemMsgGetPurchaseTrustResponse: {
    encode(message: CGCSystemMsgGetPurchaseTrustResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CGCSystemMsgGetPurchaseTrustResponse;
    fromPartial<I extends {
        hasPriorPurchaseHistory?: boolean | undefined;
        hasNoRecentPasswordResets?: boolean | undefined;
        isWalletCashTrusted?: boolean | undefined;
        timeAllTrusted?: number | undefined;
    } & {
        hasPriorPurchaseHistory?: boolean | undefined;
        hasNoRecentPasswordResets?: boolean | undefined;
        isWalletCashTrusted?: boolean | undefined;
        timeAllTrusted?: number | undefined;
    } & Record<Exclude<keyof I, keyof CGCSystemMsgGetPurchaseTrustResponse>, never>>(object: I): CGCSystemMsgGetPurchaseTrustResponse;
};
export declare const CMsgGCHAccountVacStatusChange: {
    encode(message: CMsgGCHAccountVacStatusChange, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCHAccountVacStatusChange;
    fromPartial<I extends {
        steamId?: string | number | Long | undefined;
        appId?: number | undefined;
        rtimeVacbanStarts?: number | undefined;
        isBannedNow?: boolean | undefined;
        isBannedFuture?: boolean | undefined;
    } & {
        steamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamId"], keyof Long>, never>) | undefined;
        appId?: number | undefined;
        rtimeVacbanStarts?: number | undefined;
        isBannedNow?: boolean | undefined;
        isBannedFuture?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCHAccountVacStatusChange>, never>>(object: I): CMsgGCHAccountVacStatusChange;
};
export declare const CMsgGCGetPartnerAccountLink: {
    encode(message: CMsgGCGetPartnerAccountLink, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetPartnerAccountLink;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "steamid">, never>>(object: I): CMsgGCGetPartnerAccountLink;
};
export declare const CMsgGCGetPartnerAccountLinkResponse: {
    encode(message: CMsgGCGetPartnerAccountLinkResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCGetPartnerAccountLinkResponse;
    fromPartial<I extends {
        pwid?: number | undefined;
        nexonid?: number | undefined;
        ageclass?: number | undefined;
        idVerified?: boolean | undefined;
        isAdult?: boolean | undefined;
    } & {
        pwid?: number | undefined;
        nexonid?: number | undefined;
        ageclass?: number | undefined;
        idVerified?: boolean | undefined;
        isAdult?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCGetPartnerAccountLinkResponse>, never>>(object: I): CMsgGCGetPartnerAccountLinkResponse;
};
export declare const CMsgGCRoutingInfo: {
    encode(message: CMsgGCRoutingInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCRoutingInfo;
    fromPartial<I extends {
        dirIndex?: number[] | undefined;
        method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
        fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
        protobufField?: number | undefined;
        webapiParam?: string | undefined;
    } & {
        dirIndex?: (number[] & number[] & Record<Exclude<keyof I["dirIndex"], keyof number[]>, never>) | undefined;
        method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
        fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
        protobufField?: number | undefined;
        webapiParam?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCRoutingInfo>, never>>(object: I): CMsgGCRoutingInfo;
};
export declare const CMsgGCMsgMasterSetWebAPIRouting: {
    encode(message: CMsgGCMsgMasterSetWebAPIRouting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetWebAPIRouting;
    fromPartial<I extends {
        entries?: {
            interfaceName?: string | undefined;
            methodName?: string | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        entries?: ({
            interfaceName?: string | undefined;
            methodName?: string | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        }[] & ({
            interfaceName?: string | undefined;
            methodName?: string | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        } & {
            interfaceName?: string | undefined;
            methodName?: string | undefined;
            routing?: ({
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } & {
                dirIndex?: (number[] & number[] & Record<Exclude<keyof I["entries"][number]["routing"]["dirIndex"], keyof number[]>, never>) | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } & Record<Exclude<keyof I["entries"][number]["routing"], keyof CMsgGCRoutingInfo>, never>) | undefined;
        } & Record<Exclude<keyof I["entries"][number], keyof CMsgGCMsgMasterSetWebAPIRouting_Entry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            interfaceName?: string | undefined;
            methodName?: string | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "entries">, never>>(object: I): CMsgGCMsgMasterSetWebAPIRouting;
};
export declare const CMsgGCMsgMasterSetWebAPIRouting_Entry: {
    encode(message: CMsgGCMsgMasterSetWebAPIRouting_Entry, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetWebAPIRouting_Entry;
    fromPartial<I extends {
        interfaceName?: string | undefined;
        methodName?: string | undefined;
        routing?: {
            dirIndex?: number[] | undefined;
            method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            protobufField?: number | undefined;
            webapiParam?: string | undefined;
        } | undefined;
    } & {
        interfaceName?: string | undefined;
        methodName?: string | undefined;
        routing?: ({
            dirIndex?: number[] | undefined;
            method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            protobufField?: number | undefined;
            webapiParam?: string | undefined;
        } & {
            dirIndex?: (number[] & number[] & Record<Exclude<keyof I["routing"]["dirIndex"], keyof number[]>, never>) | undefined;
            method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            protobufField?: number | undefined;
            webapiParam?: string | undefined;
        } & Record<Exclude<keyof I["routing"], keyof CMsgGCRoutingInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgMasterSetWebAPIRouting_Entry>, never>>(object: I): CMsgGCMsgMasterSetWebAPIRouting_Entry;
};
export declare const CMsgGCMsgMasterSetClientMsgRouting: {
    encode(message: CMsgGCMsgMasterSetClientMsgRouting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetClientMsgRouting;
    fromPartial<I extends {
        entries?: {
            msgType?: number | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        entries?: ({
            msgType?: number | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        }[] & ({
            msgType?: number | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        } & {
            msgType?: number | undefined;
            routing?: ({
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } & {
                dirIndex?: (number[] & number[] & Record<Exclude<keyof I["entries"][number]["routing"]["dirIndex"], keyof number[]>, never>) | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } & Record<Exclude<keyof I["entries"][number]["routing"], keyof CMsgGCRoutingInfo>, never>) | undefined;
        } & Record<Exclude<keyof I["entries"][number], keyof CMsgGCMsgMasterSetClientMsgRouting_Entry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            msgType?: number | undefined;
            routing?: {
                dirIndex?: number[] | undefined;
                method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
                protobufField?: number | undefined;
                webapiParam?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "entries">, never>>(object: I): CMsgGCMsgMasterSetClientMsgRouting;
};
export declare const CMsgGCMsgMasterSetClientMsgRouting_Entry: {
    encode(message: CMsgGCMsgMasterSetClientMsgRouting_Entry, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetClientMsgRouting_Entry;
    fromPartial<I extends {
        msgType?: number | undefined;
        routing?: {
            dirIndex?: number[] | undefined;
            method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            protobufField?: number | undefined;
            webapiParam?: string | undefined;
        } | undefined;
    } & {
        msgType?: number | undefined;
        routing?: ({
            dirIndex?: number[] | undefined;
            method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            protobufField?: number | undefined;
            webapiParam?: string | undefined;
        } & {
            dirIndex?: (number[] & number[] & Record<Exclude<keyof I["routing"]["dirIndex"], keyof number[]>, never>) | undefined;
            method?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            fallback?: CMsgGCRoutingInfo_RoutingMethod | undefined;
            protobufField?: number | undefined;
            webapiParam?: string | undefined;
        } & Record<Exclude<keyof I["routing"], keyof CMsgGCRoutingInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgMasterSetClientMsgRouting_Entry>, never>>(object: I): CMsgGCMsgMasterSetClientMsgRouting_Entry;
};
export declare const CMsgGCMsgMasterSetWebAPIRoutingResponse: {
    encode(message: CMsgGCMsgMasterSetWebAPIRoutingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetWebAPIRoutingResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
    } & {
        eresult?: number | undefined;
    } & Record<Exclude<keyof I, "eresult">, never>>(object: I): CMsgGCMsgMasterSetWebAPIRoutingResponse;
};
export declare const CMsgGCMsgMasterSetClientMsgRoutingResponse: {
    encode(message: CMsgGCMsgMasterSetClientMsgRoutingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetClientMsgRoutingResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
    } & {
        eresult?: number | undefined;
    } & Record<Exclude<keyof I, "eresult">, never>>(object: I): CMsgGCMsgMasterSetClientMsgRoutingResponse;
};
export declare const CMsgGCMsgSetOptions: {
    encode(message: CMsgGCMsgSetOptions, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgSetOptions;
    fromPartial<I extends {
        options?: CMsgGCMsgSetOptions_Option[] | undefined;
        clientMsgRanges?: {
            low?: number | undefined;
            high?: number | undefined;
        }[] | undefined;
    } & {
        options?: (CMsgGCMsgSetOptions_Option[] & CMsgGCMsgSetOptions_Option[] & Record<Exclude<keyof I["options"], keyof CMsgGCMsgSetOptions_Option[]>, never>) | undefined;
        clientMsgRanges?: ({
            low?: number | undefined;
            high?: number | undefined;
        }[] & ({
            low?: number | undefined;
            high?: number | undefined;
        } & {
            low?: number | undefined;
            high?: number | undefined;
        } & Record<Exclude<keyof I["clientMsgRanges"][number], keyof CMsgGCMsgSetOptions_MessageRange>, never>)[] & Record<Exclude<keyof I["clientMsgRanges"], keyof {
            low?: number | undefined;
            high?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgSetOptions>, never>>(object: I): CMsgGCMsgSetOptions;
};
export declare const CMsgGCMsgSetOptions_MessageRange: {
    encode(message: CMsgGCMsgSetOptions_MessageRange, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgSetOptions_MessageRange;
    fromPartial<I extends {
        low?: number | undefined;
        high?: number | undefined;
    } & {
        low?: number | undefined;
        high?: number | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCMsgSetOptions_MessageRange>, never>>(object: I): CMsgGCMsgSetOptions_MessageRange;
};
export declare const CMsgGCHUpdateSession: {
    encode(message: CMsgGCHUpdateSession, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCHUpdateSession;
    fromPartial<I extends {
        steamId?: string | number | Long | undefined;
        appId?: number | undefined;
        online?: boolean | undefined;
        serverSteamId?: string | number | Long | undefined;
        serverAddr?: number | undefined;
        serverPort?: number | undefined;
        osType?: number | undefined;
        clientAddr?: number | undefined;
        extraFields?: {
            name?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
        ownerId?: string | number | Long | undefined;
        cmSessionSysid?: number | undefined;
        cmSessionIdentifier?: number | undefined;
        depotIds?: number[] | undefined;
    } & {
        steamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamId"], keyof Long>, never>) | undefined;
        appId?: number | undefined;
        online?: boolean | undefined;
        serverSteamId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["serverSteamId"], keyof Long>, never>) | undefined;
        serverAddr?: number | undefined;
        serverPort?: number | undefined;
        osType?: number | undefined;
        clientAddr?: number | undefined;
        extraFields?: ({
            name?: string | undefined;
            value?: string | undefined;
        }[] & ({
            name?: string | undefined;
            value?: string | undefined;
        } & {
            name?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["extraFields"][number], keyof CMsgGCHUpdateSession_ExtraField>, never>)[] & Record<Exclude<keyof I["extraFields"], keyof {
            name?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
        ownerId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["ownerId"], keyof Long>, never>) | undefined;
        cmSessionSysid?: number | undefined;
        cmSessionIdentifier?: number | undefined;
        depotIds?: (number[] & number[] & Record<Exclude<keyof I["depotIds"], keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCHUpdateSession>, never>>(object: I): CMsgGCHUpdateSession;
};
export declare const CMsgGCHUpdateSession_ExtraField: {
    encode(message: CMsgGCHUpdateSession_ExtraField, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgGCHUpdateSession_ExtraField;
    fromPartial<I extends {
        name?: string | undefined;
        value?: string | undefined;
    } & {
        name?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgGCHUpdateSession_ExtraField>, never>>(object: I): CMsgGCHUpdateSession_ExtraField;
};
export declare const CMsgNotificationOfSuspiciousActivity: {
    encode(message: CMsgNotificationOfSuspiciousActivity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgNotificationOfSuspiciousActivity;
    fromPartial<I extends {
        steamid?: string | number | Long | undefined;
        appid?: number | undefined;
        multipleInstances?: {
            appInstanceCount?: number | undefined;
            otherSteamids?: (string | number | Long)[] | undefined;
        } | undefined;
    } & {
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        appid?: number | undefined;
        multipleInstances?: ({
            appInstanceCount?: number | undefined;
            otherSteamids?: (string | number | Long)[] | undefined;
        } & {
            appInstanceCount?: number | undefined;
            otherSteamids?: ((string | number | Long)[] & (string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["multipleInstances"]["otherSteamids"][number], keyof Long>, never>))[] & Record<Exclude<keyof I["multipleInstances"]["otherSteamids"], keyof (string | number | Long)[]>, never>) | undefined;
        } & Record<Exclude<keyof I["multipleInstances"], keyof CMsgNotificationOfSuspiciousActivity_MultipleGameInstances>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgNotificationOfSuspiciousActivity>, never>>(object: I): CMsgNotificationOfSuspiciousActivity;
};
export declare const CMsgNotificationOfSuspiciousActivity_MultipleGameInstances: {
    encode(message: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances;
    fromPartial<I extends {
        appInstanceCount?: number | undefined;
        otherSteamids?: (string | number | Long)[] | undefined;
    } & {
        appInstanceCount?: number | undefined;
        otherSteamids?: ((string | number | Long)[] & (string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["otherSteamids"][number], keyof Long>, never>))[] & Record<Exclude<keyof I["otherSteamids"], keyof (string | number | Long)[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgNotificationOfSuspiciousActivity_MultipleGameInstances>, never>>(object: I): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances;
};
export declare const CMsgDPPartnerMicroTxns: {
    encode(message: CMsgDPPartnerMicroTxns, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns;
    fromPartial<I extends {
        appid?: number | undefined;
        gcName?: string | undefined;
        partner?: {
            partnerId?: number | undefined;
            partnerName?: string | undefined;
            currencyCode?: string | undefined;
            currencyName?: string | undefined;
        } | undefined;
        transactions?: {
            initTime?: number | undefined;
            lastUpdateTime?: number | undefined;
            txnId?: string | number | Long | undefined;
            accountId?: number | undefined;
            lineItem?: number | undefined;
            itemId?: string | number | Long | undefined;
            defIndex?: number | undefined;
            price?: string | number | Long | undefined;
            tax?: string | number | Long | undefined;
            priceUsd?: string | number | Long | undefined;
            taxUsd?: string | number | Long | undefined;
            purchaseType?: number | undefined;
            steamTxnType?: number | undefined;
            countryCode?: string | undefined;
            regionCode?: string | undefined;
            quantity?: number | undefined;
            refTransId?: string | number | Long | undefined;
        }[] | undefined;
    } & {
        appid?: number | undefined;
        gcName?: string | undefined;
        partner?: ({
            partnerId?: number | undefined;
            partnerName?: string | undefined;
            currencyCode?: string | undefined;
            currencyName?: string | undefined;
        } & {
            partnerId?: number | undefined;
            partnerName?: string | undefined;
            currencyCode?: string | undefined;
            currencyName?: string | undefined;
        } & Record<Exclude<keyof I["partner"], keyof CMsgDPPartnerMicroTxns_PartnerInfo>, never>) | undefined;
        transactions?: ({
            initTime?: number | undefined;
            lastUpdateTime?: number | undefined;
            txnId?: string | number | Long | undefined;
            accountId?: number | undefined;
            lineItem?: number | undefined;
            itemId?: string | number | Long | undefined;
            defIndex?: number | undefined;
            price?: string | number | Long | undefined;
            tax?: string | number | Long | undefined;
            priceUsd?: string | number | Long | undefined;
            taxUsd?: string | number | Long | undefined;
            purchaseType?: number | undefined;
            steamTxnType?: number | undefined;
            countryCode?: string | undefined;
            regionCode?: string | undefined;
            quantity?: number | undefined;
            refTransId?: string | number | Long | undefined;
        }[] & ({
            initTime?: number | undefined;
            lastUpdateTime?: number | undefined;
            txnId?: string | number | Long | undefined;
            accountId?: number | undefined;
            lineItem?: number | undefined;
            itemId?: string | number | Long | undefined;
            defIndex?: number | undefined;
            price?: string | number | Long | undefined;
            tax?: string | number | Long | undefined;
            priceUsd?: string | number | Long | undefined;
            taxUsd?: string | number | Long | undefined;
            purchaseType?: number | undefined;
            steamTxnType?: number | undefined;
            countryCode?: string | undefined;
            regionCode?: string | undefined;
            quantity?: number | undefined;
            refTransId?: string | number | Long | undefined;
        } & {
            initTime?: number | undefined;
            lastUpdateTime?: number | undefined;
            txnId?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["txnId"], keyof Long>, never>) | undefined;
            accountId?: number | undefined;
            lineItem?: number | undefined;
            itemId?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["itemId"], keyof Long>, never>) | undefined;
            defIndex?: number | undefined;
            price?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["price"], keyof Long>, never>) | undefined;
            tax?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["tax"], keyof Long>, never>) | undefined;
            priceUsd?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["priceUsd"], keyof Long>, never>) | undefined;
            taxUsd?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["taxUsd"], keyof Long>, never>) | undefined;
            purchaseType?: number | undefined;
            steamTxnType?: number | undefined;
            countryCode?: string | undefined;
            regionCode?: string | undefined;
            quantity?: number | undefined;
            refTransId?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["transactions"][number]["refTransId"], keyof Long>, never>) | undefined;
        } & Record<Exclude<keyof I["transactions"][number], keyof CMsgDPPartnerMicroTxns_PartnerMicroTxn>, never>)[] & Record<Exclude<keyof I["transactions"], keyof {
            initTime?: number | undefined;
            lastUpdateTime?: number | undefined;
            txnId?: string | number | Long | undefined;
            accountId?: number | undefined;
            lineItem?: number | undefined;
            itemId?: string | number | Long | undefined;
            defIndex?: number | undefined;
            price?: string | number | Long | undefined;
            tax?: string | number | Long | undefined;
            priceUsd?: string | number | Long | undefined;
            taxUsd?: string | number | Long | undefined;
            purchaseType?: number | undefined;
            steamTxnType?: number | undefined;
            countryCode?: string | undefined;
            regionCode?: string | undefined;
            quantity?: number | undefined;
            refTransId?: string | number | Long | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgDPPartnerMicroTxns>, never>>(object: I): CMsgDPPartnerMicroTxns;
};
export declare const CMsgDPPartnerMicroTxns_PartnerMicroTxn: {
    encode(message: CMsgDPPartnerMicroTxns_PartnerMicroTxn, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns_PartnerMicroTxn;
    fromPartial<I extends {
        initTime?: number | undefined;
        lastUpdateTime?: number | undefined;
        txnId?: string | number | Long | undefined;
        accountId?: number | undefined;
        lineItem?: number | undefined;
        itemId?: string | number | Long | undefined;
        defIndex?: number | undefined;
        price?: string | number | Long | undefined;
        tax?: string | number | Long | undefined;
        priceUsd?: string | number | Long | undefined;
        taxUsd?: string | number | Long | undefined;
        purchaseType?: number | undefined;
        steamTxnType?: number | undefined;
        countryCode?: string | undefined;
        regionCode?: string | undefined;
        quantity?: number | undefined;
        refTransId?: string | number | Long | undefined;
    } & {
        initTime?: number | undefined;
        lastUpdateTime?: number | undefined;
        txnId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["txnId"], keyof Long>, never>) | undefined;
        accountId?: number | undefined;
        lineItem?: number | undefined;
        itemId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["itemId"], keyof Long>, never>) | undefined;
        defIndex?: number | undefined;
        price?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["price"], keyof Long>, never>) | undefined;
        tax?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["tax"], keyof Long>, never>) | undefined;
        priceUsd?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["priceUsd"], keyof Long>, never>) | undefined;
        taxUsd?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["taxUsd"], keyof Long>, never>) | undefined;
        purchaseType?: number | undefined;
        steamTxnType?: number | undefined;
        countryCode?: string | undefined;
        regionCode?: string | undefined;
        quantity?: number | undefined;
        refTransId?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["refTransId"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CMsgDPPartnerMicroTxns_PartnerMicroTxn>, never>>(object: I): CMsgDPPartnerMicroTxns_PartnerMicroTxn;
};
export declare const CMsgDPPartnerMicroTxns_PartnerInfo: {
    encode(message: CMsgDPPartnerMicroTxns_PartnerInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns_PartnerInfo;
    fromPartial<I extends {
        partnerId?: number | undefined;
        partnerName?: string | undefined;
        currencyCode?: string | undefined;
        currencyName?: string | undefined;
    } & {
        partnerId?: number | undefined;
        partnerName?: string | undefined;
        currencyCode?: string | undefined;
        currencyName?: string | undefined;
    } & Record<Exclude<keyof I, keyof CMsgDPPartnerMicroTxns_PartnerInfo>, never>>(object: I): CMsgDPPartnerMicroTxns_PartnerInfo;
};
export declare const CMsgDPPartnerMicroTxnsResponse: {
    encode(message: CMsgDPPartnerMicroTxnsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxnsResponse;
    fromPartial<I extends {
        eresult?: number | undefined;
        eerrorcode?: CMsgDPPartnerMicroTxnsResponse_EErrorCode | undefined;
    } & {
        eresult?: number | undefined;
        eerrorcode?: CMsgDPPartnerMicroTxnsResponse_EErrorCode | undefined;
    } & Record<Exclude<keyof I, keyof CMsgDPPartnerMicroTxnsResponse>, never>>(object: I): CMsgDPPartnerMicroTxnsResponse;
};
export declare const CChinaAgreementSessionsStartAgreementSessionInGameRequest: {
    encode(message: CChinaAgreementSessionsStartAgreementSessionInGameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CChinaAgreementSessionsStartAgreementSessionInGameRequest;
    fromPartial<I extends {
        appid?: number | undefined;
        steamid?: string | number | Long | undefined;
        clientIpaddress?: string | undefined;
    } & {
        appid?: number | undefined;
        steamid?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["steamid"], keyof Long>, never>) | undefined;
        clientIpaddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof CChinaAgreementSessionsStartAgreementSessionInGameRequest>, never>>(object: I): CChinaAgreementSessionsStartAgreementSessionInGameRequest;
};
export declare const CChinaAgreementSessionsStartAgreementSessionInGameResponse: {
    encode(message: CChinaAgreementSessionsStartAgreementSessionInGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CChinaAgreementSessionsStartAgreementSessionInGameResponse;
    fromPartial<I extends {
        agreementUrl?: string | undefined;
    } & {
        agreementUrl?: string | undefined;
    } & Record<Exclude<keyof I, "agreementUrl">, never>>(object: I): CChinaAgreementSessionsStartAgreementSessionInGameResponse;
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
