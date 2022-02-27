/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "";

export enum GCProtoBufMsgSrc {
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

export interface CGCMsgMemCachedStats {}

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

export interface CGCMsgGetSystemStats {}

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

export enum CMsgGCRoutingInfo_RoutingMethod {
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

export enum CMsgGCMsgSetOptions_Option {
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
  multipleInstances:
    | CMsgNotificationOfSuspiciousActivity_MultipleGameInstances
    | undefined;
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

export enum CMsgDPPartnerMicroTxnsResponse_EErrorCode {
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

function createBaseCMsgProtoBufHeader(): CMsgProtoBufHeader {
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

export const CMsgProtoBufHeader = {
  encode(
    message: CMsgProtoBufHeader,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgProtoBufHeader {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProtoBufHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientSteamId = reader.fixed64() as Long;
          break;
        case 2:
          message.clientSessionId = reader.int32();
          break;
        case 3:
          message.sourceAppId = reader.uint32();
          break;
        case 10:
          message.jobIdSource = reader.fixed64() as Long;
          break;
        case 11:
          message.jobIdTarget = reader.fixed64() as Long;
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
          message.gcMsgSrc = reader.int32() as any;
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

  fromPartial<I extends Exact<DeepPartial<CMsgProtoBufHeader>, I>>(
    object: I
  ): CMsgProtoBufHeader {
    const message = createBaseCMsgProtoBufHeader();
    message.clientSteamId =
      object.clientSteamId !== undefined && object.clientSteamId !== null
        ? Long.fromValue(object.clientSteamId)
        : Long.UZERO;
    message.clientSessionId = object.clientSessionId ?? 0;
    message.sourceAppId = object.sourceAppId ?? 0;
    message.jobIdSource =
      object.jobIdSource !== undefined && object.jobIdSource !== null
        ? Long.fromValue(object.jobIdSource)
        : Long.UZERO;
    message.jobIdTarget =
      object.jobIdTarget !== undefined && object.jobIdTarget !== null
        ? Long.fromValue(object.jobIdTarget)
        : Long.UZERO;
    message.targetJobName = object.targetJobName ?? "";
    message.eresult = object.eresult ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    message.ip = object.ip ?? 0;
    message.gcMsgSrc = object.gcMsgSrc ?? 0;
    message.gcDirIndexSource = object.gcDirIndexSource ?? 0;
    return message;
  }
};

function createBaseCMsgWebAPIKey(): CMsgWebAPIKey {
  return { status: 0, accountId: 0, publisherGroupId: 0, keyId: 0, domain: "" };
}

export const CMsgWebAPIKey = {
  encode(message: CMsgWebAPIKey, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgWebAPIKey {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgWebAPIKey>, I>>(
    object: I
  ): CMsgWebAPIKey {
    const message = createBaseCMsgWebAPIKey();
    message.status = object.status ?? 0;
    message.accountId = object.accountId ?? 0;
    message.publisherGroupId = object.publisherGroupId ?? 0;
    message.keyId = object.keyId ?? 0;
    message.domain = object.domain ?? "";
    return message;
  }
};

function createBaseCMsgHttpRequest(): CMsgHttpRequest {
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

export const CMsgHttpRequest = {
  encode(message: CMsgHttpRequest, writer: Writer = Writer.create()): Writer {
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
      CMsgHttpRequest_RequestHeader.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.getParams) {
      CMsgHttpRequest_QueryParam.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.postParams) {
      CMsgHttpRequest_QueryParam.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(58).bytes(message.body);
    }
    if (message.absoluteTimeout !== 0) {
      writer.uint32(64).uint32(message.absoluteTimeout);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgHttpRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.headers.push(
            CMsgHttpRequest_RequestHeader.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.getParams.push(
            CMsgHttpRequest_QueryParam.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.postParams.push(
            CMsgHttpRequest_QueryParam.decode(reader, reader.uint32())
          );
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

  fromPartial<I extends Exact<DeepPartial<CMsgHttpRequest>, I>>(
    object: I
  ): CMsgHttpRequest {
    const message = createBaseCMsgHttpRequest();
    message.requestMethod = object.requestMethod ?? 0;
    message.hostname = object.hostname ?? "";
    message.url = object.url ?? "";
    message.headers =
      object.headers?.map(e => CMsgHttpRequest_RequestHeader.fromPartial(e)) ||
      [];
    message.getParams =
      object.getParams?.map(e => CMsgHttpRequest_QueryParam.fromPartial(e)) ||
      [];
    message.postParams =
      object.postParams?.map(e => CMsgHttpRequest_QueryParam.fromPartial(e)) ||
      [];
    message.body = object.body ?? new Uint8Array();
    message.absoluteTimeout = object.absoluteTimeout ?? 0;
    return message;
  }
};

function createBaseCMsgHttpRequest_RequestHeader(): CMsgHttpRequest_RequestHeader {
  return { name: "", value: "" };
}

export const CMsgHttpRequest_RequestHeader = {
  encode(
    message: CMsgHttpRequest_RequestHeader,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgHttpRequest_RequestHeader {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgHttpRequest_RequestHeader>, I>>(
    object: I
  ): CMsgHttpRequest_RequestHeader {
    const message = createBaseCMsgHttpRequest_RequestHeader();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  }
};

function createBaseCMsgHttpRequest_QueryParam(): CMsgHttpRequest_QueryParam {
  return { name: "", value: new Uint8Array() };
}

export const CMsgHttpRequest_QueryParam = {
  encode(
    message: CMsgHttpRequest_QueryParam,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgHttpRequest_QueryParam {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgHttpRequest_QueryParam>, I>>(
    object: I
  ): CMsgHttpRequest_QueryParam {
    const message = createBaseCMsgHttpRequest_QueryParam();
    message.name = object.name ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};

function createBaseCMsgWebAPIRequest(): CMsgWebAPIRequest {
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

export const CMsgWebAPIRequest = {
  encode(message: CMsgWebAPIRequest, writer: Writer = Writer.create()): Writer {
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
      CMsgWebAPIKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    if (message.request !== undefined) {
      CMsgHttpRequest.encode(
        message.request,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.routingAppId !== 0) {
      writer.uint32(56).uint32(message.routingAppId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgWebAPIRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.apiKey = CMsgWebAPIKey.decode(reader, reader.uint32());
          break;
        case 6:
          message.request = CMsgHttpRequest.decode(reader, reader.uint32());
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

  fromPartial<I extends Exact<DeepPartial<CMsgWebAPIRequest>, I>>(
    object: I
  ): CMsgWebAPIRequest {
    const message = createBaseCMsgWebAPIRequest();
    message.UNUSEDJobName = object.UNUSEDJobName ?? "";
    message.interfaceName = object.interfaceName ?? "";
    message.methodName = object.methodName ?? "";
    message.version = object.version ?? 0;
    message.apiKey =
      object.apiKey !== undefined && object.apiKey !== null
        ? CMsgWebAPIKey.fromPartial(object.apiKey)
        : undefined;
    message.request =
      object.request !== undefined && object.request !== null
        ? CMsgHttpRequest.fromPartial(object.request)
        : undefined;
    message.routingAppId = object.routingAppId ?? 0;
    return message;
  }
};

function createBaseCMsgHttpResponse(): CMsgHttpResponse {
  return { statusCode: 0, headers: [], body: new Uint8Array() };
}

export const CMsgHttpResponse = {
  encode(message: CMsgHttpResponse, writer: Writer = Writer.create()): Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).uint32(message.statusCode);
    }
    for (const v of message.headers) {
      CMsgHttpResponse_ResponseHeader.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(26).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgHttpResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusCode = reader.uint32();
          break;
        case 2:
          message.headers.push(
            CMsgHttpResponse_ResponseHeader.decode(reader, reader.uint32())
          );
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

  fromPartial<I extends Exact<DeepPartial<CMsgHttpResponse>, I>>(
    object: I
  ): CMsgHttpResponse {
    const message = createBaseCMsgHttpResponse();
    message.statusCode = object.statusCode ?? 0;
    message.headers =
      object.headers?.map(e =>
        CMsgHttpResponse_ResponseHeader.fromPartial(e)
      ) || [];
    message.body = object.body ?? new Uint8Array();
    return message;
  }
};

function createBaseCMsgHttpResponse_ResponseHeader(): CMsgHttpResponse_ResponseHeader {
  return { name: "", value: "" };
}

export const CMsgHttpResponse_ResponseHeader = {
  encode(
    message: CMsgHttpResponse_ResponseHeader,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgHttpResponse_ResponseHeader {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgHttpResponse_ResponseHeader>, I>>(
    object: I
  ): CMsgHttpResponse_ResponseHeader {
    const message = createBaseCMsgHttpResponse_ResponseHeader();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  }
};

function createBaseCMsgAMFindAccounts(): CMsgAMFindAccounts {
  return { searchType: 0, searchString: "" };
}

export const CMsgAMFindAccounts = {
  encode(
    message: CMsgAMFindAccounts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.searchType !== 0) {
      writer.uint32(8).uint32(message.searchType);
    }
    if (message.searchString !== "") {
      writer.uint32(18).string(message.searchString);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgAMFindAccounts {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMFindAccounts>, I>>(
    object: I
  ): CMsgAMFindAccounts {
    const message = createBaseCMsgAMFindAccounts();
    message.searchType = object.searchType ?? 0;
    message.searchString = object.searchString ?? "";
    return message;
  }
};

function createBaseCMsgAMFindAccountsResponse(): CMsgAMFindAccountsResponse {
  return { steamId: [] };
}

export const CMsgAMFindAccountsResponse = {
  encode(
    message: CMsgAMFindAccountsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.steamId) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMFindAccountsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMFindAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamId.push(reader.fixed64() as Long);
            }
          } else {
            message.steamId.push(reader.fixed64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMFindAccountsResponse>, I>>(
    object: I
  ): CMsgAMFindAccountsResponse {
    const message = createBaseCMsgAMFindAccountsResponse();
    message.steamId = object.steamId?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseCMsgNotifyWatchdog(): CMsgNotifyWatchdog {
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

export const CMsgNotifyWatchdog = {
  encode(
    message: CMsgNotifyWatchdog,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgNotifyWatchdog {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgNotifyWatchdog>, I>>(
    object: I
  ): CMsgNotifyWatchdog {
    const message = createBaseCMsgNotifyWatchdog();
    message.source = object.source ?? 0;
    message.alertType = object.alertType ?? 0;
    message.alertDestination = object.alertDestination ?? 0;
    message.critical = object.critical ?? false;
    message.time = object.time ?? 0;
    message.appid = object.appid ?? 0;
    message.text = object.text ?? "";
    return message;
  }
};

function createBaseCMsgAMGetLicenses(): CMsgAMGetLicenses {
  return { steamid: Long.UZERO };
}

export const CMsgAMGetLicenses = {
  encode(message: CMsgAMGetLicenses, writer: Writer = Writer.create()): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgAMGetLicenses {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetLicenses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMGetLicenses>, I>>(
    object: I
  ): CMsgAMGetLicenses {
    const message = createBaseCMsgAMGetLicenses();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgPackageLicense(): CMsgPackageLicense {
  return { packageId: 0, timeCreated: 0, ownerId: 0 };
}

export const CMsgPackageLicense = {
  encode(
    message: CMsgPackageLicense,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgPackageLicense {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgPackageLicense>, I>>(
    object: I
  ): CMsgPackageLicense {
    const message = createBaseCMsgPackageLicense();
    message.packageId = object.packageId ?? 0;
    message.timeCreated = object.timeCreated ?? 0;
    message.ownerId = object.ownerId ?? 0;
    return message;
  }
};

function createBaseCMsgAMGetLicensesResponse(): CMsgAMGetLicensesResponse {
  return { license: [], result: 0 };
}

export const CMsgAMGetLicensesResponse = {
  encode(
    message: CMsgAMGetLicensesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.license) {
      CMsgPackageLicense.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== 0) {
      writer.uint32(16).uint32(message.result);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMGetLicensesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetLicensesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.license.push(
            CMsgPackageLicense.decode(reader, reader.uint32())
          );
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMGetLicensesResponse>, I>>(
    object: I
  ): CMsgAMGetLicensesResponse {
    const message = createBaseCMsgAMGetLicensesResponse();
    message.license =
      object.license?.map(e => CMsgPackageLicense.fromPartial(e)) || [];
    message.result = object.result ?? 0;
    return message;
  }
};

function createBaseCMsgAMGetUserGameStats(): CMsgAMGetUserGameStats {
  return { steamId: Long.UZERO, gameId: Long.UZERO, stats: [] };
}

export const CMsgAMGetUserGameStats = {
  encode(
    message: CMsgAMGetUserGameStats,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgAMGetUserGameStats {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetUserGameStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = reader.fixed64() as Long;
          break;
        case 2:
          message.gameId = reader.fixed64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stats.push(reader.uint32());
            }
          } else {
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMGetUserGameStats>, I>>(
    object: I
  ): CMsgAMGetUserGameStats {
    const message = createBaseCMsgAMGetUserGameStats();
    message.steamId =
      object.steamId !== undefined && object.steamId !== null
        ? Long.fromValue(object.steamId)
        : Long.UZERO;
    message.gameId =
      object.gameId !== undefined && object.gameId !== null
        ? Long.fromValue(object.gameId)
        : Long.UZERO;
    message.stats = object.stats?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgAMGetUserGameStatsResponse(): CMsgAMGetUserGameStatsResponse {
  return {
    steamId: Long.UZERO,
    gameId: Long.UZERO,
    eresult: 0,
    stats: [],
    achievementBlocks: []
  };
}

export const CMsgAMGetUserGameStatsResponse = {
  encode(
    message: CMsgAMGetUserGameStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
      CMsgAMGetUserGameStatsResponse_Stats.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.achievementBlocks) {
      CMsgAMGetUserGameStatsResponse_AchievementBlocks.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMGetUserGameStatsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetUserGameStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = reader.fixed64() as Long;
          break;
        case 2:
          message.gameId = reader.fixed64() as Long;
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        case 4:
          message.stats.push(
            CMsgAMGetUserGameStatsResponse_Stats.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.achievementBlocks.push(
            CMsgAMGetUserGameStatsResponse_AchievementBlocks.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMGetUserGameStatsResponse>, I>>(
    object: I
  ): CMsgAMGetUserGameStatsResponse {
    const message = createBaseCMsgAMGetUserGameStatsResponse();
    message.steamId =
      object.steamId !== undefined && object.steamId !== null
        ? Long.fromValue(object.steamId)
        : Long.UZERO;
    message.gameId =
      object.gameId !== undefined && object.gameId !== null
        ? Long.fromValue(object.gameId)
        : Long.UZERO;
    message.eresult = object.eresult ?? 0;
    message.stats =
      object.stats?.map(e =>
        CMsgAMGetUserGameStatsResponse_Stats.fromPartial(e)
      ) || [];
    message.achievementBlocks =
      object.achievementBlocks?.map(e =>
        CMsgAMGetUserGameStatsResponse_AchievementBlocks.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgAMGetUserGameStatsResponse_Stats(): CMsgAMGetUserGameStatsResponse_Stats {
  return { statId: 0, statValue: 0 };
}

export const CMsgAMGetUserGameStatsResponse_Stats = {
  encode(
    message: CMsgAMGetUserGameStatsResponse_Stats,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).uint32(message.statValue);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMGetUserGameStatsResponse_Stats {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgAMGetUserGameStatsResponse_Stats>, I>
  >(object: I): CMsgAMGetUserGameStatsResponse_Stats {
    const message = createBaseCMsgAMGetUserGameStatsResponse_Stats();
    message.statId = object.statId ?? 0;
    message.statValue = object.statValue ?? 0;
    return message;
  }
};

function createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks(): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
  return { achievementId: 0, achievementBitId: 0, unlockTime: 0 };
}

export const CMsgAMGetUserGameStatsResponse_AchievementBlocks = {
  encode(
    message: CMsgAMGetUserGameStatsResponse_AchievementBlocks,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<
      DeepPartial<CMsgAMGetUserGameStatsResponse_AchievementBlocks>,
      I
    >
  >(object: I): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    const message = createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks();
    message.achievementId = object.achievementId ?? 0;
    message.achievementBitId = object.achievementBitId ?? 0;
    message.unlockTime = object.unlockTime ?? 0;
    return message;
  }
};

function createBaseCMsgGCGetCommandList(): CMsgGCGetCommandList {
  return { appId: 0, commandPrefix: "" };
}

export const CMsgGCGetCommandList = {
  encode(
    message: CMsgGCGetCommandList,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.commandPrefix !== "") {
      writer.uint32(18).string(message.commandPrefix);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgGCGetCommandList {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetCommandList>, I>>(
    object: I
  ): CMsgGCGetCommandList {
    const message = createBaseCMsgGCGetCommandList();
    message.appId = object.appId ?? 0;
    message.commandPrefix = object.commandPrefix ?? "";
    return message;
  }
};

function createBaseCMsgGCGetCommandListResponse(): CMsgGCGetCommandListResponse {
  return { commandName: [] };
}

export const CMsgGCGetCommandListResponse = {
  encode(
    message: CMsgGCGetCommandListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.commandName) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGetCommandListResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetCommandListResponse>, I>>(
    object: I
  ): CMsgGCGetCommandListResponse {
    const message = createBaseCMsgGCGetCommandListResponse();
    message.commandName = object.commandName?.map(e => e) || [];
    return message;
  }
};

function createBaseCGCMsgMemCachedGet(): CGCMsgMemCachedGet {
  return { keys: [] };
}

export const CGCMsgMemCachedGet = {
  encode(
    message: CGCMsgMemCachedGet,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedGet {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedGet>, I>>(
    object: I
  ): CGCMsgMemCachedGet {
    const message = createBaseCGCMsgMemCachedGet();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  }
};

function createBaseCGCMsgMemCachedGetResponse(): CGCMsgMemCachedGetResponse {
  return { values: [] };
}

export const CGCMsgMemCachedGetResponse = {
  encode(
    message: CGCMsgMemCachedGetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.values) {
      CGCMsgMemCachedGetResponse_ValueTag.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCMsgMemCachedGetResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            CGCMsgMemCachedGetResponse_ValueTag.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedGetResponse>, I>>(
    object: I
  ): CGCMsgMemCachedGetResponse {
    const message = createBaseCGCMsgMemCachedGetResponse();
    message.values =
      object.values?.map(e =>
        CGCMsgMemCachedGetResponse_ValueTag.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCGCMsgMemCachedGetResponse_ValueTag(): CGCMsgMemCachedGetResponse_ValueTag {
  return { found: false, value: new Uint8Array() };
}

export const CGCMsgMemCachedGetResponse_ValueTag = {
  encode(
    message: CGCMsgMemCachedGetResponse_ValueTag,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.found === true) {
      writer.uint32(8).bool(message.found);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCMsgMemCachedGetResponse_ValueTag {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CGCMsgMemCachedGetResponse_ValueTag>, I>
  >(object: I): CGCMsgMemCachedGetResponse_ValueTag {
    const message = createBaseCGCMsgMemCachedGetResponse_ValueTag();
    message.found = object.found ?? false;
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};

function createBaseCGCMsgMemCachedSet(): CGCMsgMemCachedSet {
  return { keys: [] };
}

export const CGCMsgMemCachedSet = {
  encode(
    message: CGCMsgMemCachedSet,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.keys) {
      CGCMsgMemCachedSet_KeyPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedSet {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(
            CGCMsgMemCachedSet_KeyPair.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedSet>, I>>(
    object: I
  ): CGCMsgMemCachedSet {
    const message = createBaseCGCMsgMemCachedSet();
    message.keys =
      object.keys?.map(e => CGCMsgMemCachedSet_KeyPair.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCGCMsgMemCachedSet_KeyPair(): CGCMsgMemCachedSet_KeyPair {
  return { name: "", value: new Uint8Array() };
}

export const CGCMsgMemCachedSet_KeyPair = {
  encode(
    message: CGCMsgMemCachedSet_KeyPair,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCMsgMemCachedSet_KeyPair {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedSet_KeyPair>, I>>(
    object: I
  ): CGCMsgMemCachedSet_KeyPair {
    const message = createBaseCGCMsgMemCachedSet_KeyPair();
    message.name = object.name ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};

function createBaseCGCMsgMemCachedDelete(): CGCMsgMemCachedDelete {
  return { keys: [] };
}

export const CGCMsgMemCachedDelete = {
  encode(
    message: CGCMsgMemCachedDelete,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedDelete {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedDelete>, I>>(
    object: I
  ): CGCMsgMemCachedDelete {
    const message = createBaseCGCMsgMemCachedDelete();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  }
};

function createBaseCGCMsgMemCachedStats(): CGCMsgMemCachedStats {
  return {};
}

export const CGCMsgMemCachedStats = {
  encode(_: CGCMsgMemCachedStats, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgMemCachedStats {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedStats>, I>>(
    _: I
  ): CGCMsgMemCachedStats {
    const message = createBaseCGCMsgMemCachedStats();
    return message;
  }
};

function createBaseCGCMsgMemCachedStatsResponse(): CGCMsgMemCachedStatsResponse {
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

export const CGCMsgMemCachedStatsResponse = {
  encode(
    message: CGCMsgMemCachedStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCMsgMemCachedStatsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currConnections = reader.uint64() as Long;
          break;
        case 2:
          message.cmdGet = reader.uint64() as Long;
          break;
        case 3:
          message.cmdSet = reader.uint64() as Long;
          break;
        case 4:
          message.cmdFlush = reader.uint64() as Long;
          break;
        case 5:
          message.getHits = reader.uint64() as Long;
          break;
        case 6:
          message.getMisses = reader.uint64() as Long;
          break;
        case 7:
          message.deleteHits = reader.uint64() as Long;
          break;
        case 8:
          message.deleteMisses = reader.uint64() as Long;
          break;
        case 9:
          message.bytesRead = reader.uint64() as Long;
          break;
        case 10:
          message.bytesWritten = reader.uint64() as Long;
          break;
        case 11:
          message.limitMaxbytes = reader.uint64() as Long;
          break;
        case 12:
          message.currItems = reader.uint64() as Long;
          break;
        case 13:
          message.evictions = reader.uint64() as Long;
          break;
        case 14:
          message.bytes = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CGCMsgMemCachedStatsResponse>, I>>(
    object: I
  ): CGCMsgMemCachedStatsResponse {
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

function createBaseCGCMsgSQLStats(): CGCMsgSQLStats {
  return { schemaCatalog: 0 };
}

export const CGCMsgSQLStats = {
  encode(message: CGCMsgSQLStats, writer: Writer = Writer.create()): Writer {
    if (message.schemaCatalog !== 0) {
      writer.uint32(8).uint32(message.schemaCatalog);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgSQLStats {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgSQLStats>, I>>(
    object: I
  ): CGCMsgSQLStats {
    const message = createBaseCGCMsgSQLStats();
    message.schemaCatalog = object.schemaCatalog ?? 0;
    return message;
  }
};

function createBaseCGCMsgSQLStatsResponse(): CGCMsgSQLStatsResponse {
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

export const CGCMsgSQLStatsResponse = {
  encode(
    message: CGCMsgSQLStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CGCMsgSQLStatsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgSQLStatsResponse>, I>>(
    object: I
  ): CGCMsgSQLStatsResponse {
    const message = createBaseCGCMsgSQLStatsResponse();
    message.threads = object.threads ?? 0;
    message.threadsConnected = object.threadsConnected ?? 0;
    message.threadsActive = object.threadsActive ?? 0;
    message.operationsSubmitted = object.operationsSubmitted ?? 0;
    message.preparedStatementsExecuted = object.preparedStatementsExecuted ?? 0;
    message.nonPreparedStatementsExecuted =
      object.nonPreparedStatementsExecuted ?? 0;
    message.deadlockRetries = object.deadlockRetries ?? 0;
    message.operationsTimedOutInQueue = object.operationsTimedOutInQueue ?? 0;
    message.errors = object.errors ?? 0;
    return message;
  }
};

function createBaseCMsgAMAddFreeLicense(): CMsgAMAddFreeLicense {
  return {
    steamid: Long.UZERO,
    ipPublic: 0,
    packageid: 0,
    storeCountryCode: ""
  };
}

export const CMsgAMAddFreeLicense = {
  encode(
    message: CMsgAMAddFreeLicense,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgAMAddFreeLicense {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMAddFreeLicense();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMAddFreeLicense>, I>>(
    object: I
  ): CMsgAMAddFreeLicense {
    const message = createBaseCMsgAMAddFreeLicense();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.ipPublic = object.ipPublic ?? 0;
    message.packageid = object.packageid ?? 0;
    message.storeCountryCode = object.storeCountryCode ?? "";
    return message;
  }
};

function createBaseCMsgAMAddFreeLicenseResponse(): CMsgAMAddFreeLicenseResponse {
  return { eresult: 0, purchaseResultDetail: 0, transid: Long.UZERO };
}

export const CMsgAMAddFreeLicenseResponse = {
  encode(
    message: CMsgAMAddFreeLicenseResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMAddFreeLicenseResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.transid = reader.fixed64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMAddFreeLicenseResponse>, I>>(
    object: I
  ): CMsgAMAddFreeLicenseResponse {
    const message = createBaseCMsgAMAddFreeLicenseResponse();
    message.eresult = object.eresult ?? 0;
    message.purchaseResultDetail = object.purchaseResultDetail ?? 0;
    message.transid =
      object.transid !== undefined && object.transid !== null
        ? Long.fromValue(object.transid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCGCMsgGetIPLocation(): CGCMsgGetIPLocation {
  return { ips: [] };
}

export const CGCMsgGetIPLocation = {
  encode(
    message: CGCMsgGetIPLocation,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.ips) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgGetIPLocation {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          } else {
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgGetIPLocation>, I>>(
    object: I
  ): CGCMsgGetIPLocation {
    const message = createBaseCGCMsgGetIPLocation();
    message.ips = object.ips?.map(e => e) || [];
    return message;
  }
};

function createBaseCIPLocationInfo(): CIPLocationInfo {
  return { ip: 0, latitude: 0, longitude: 0, country: "", state: "", city: "" };
}

export const CIPLocationInfo = {
  encode(message: CIPLocationInfo, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CIPLocationInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CIPLocationInfo>, I>>(
    object: I
  ): CIPLocationInfo {
    const message = createBaseCIPLocationInfo();
    message.ip = object.ip ?? 0;
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    message.country = object.country ?? "";
    message.state = object.state ?? "";
    message.city = object.city ?? "";
    return message;
  }
};

function createBaseCGCMsgGetIPLocationResponse(): CGCMsgGetIPLocationResponse {
  return { infos: [] };
}

export const CGCMsgGetIPLocationResponse = {
  encode(
    message: CGCMsgGetIPLocationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.infos) {
      CIPLocationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCMsgGetIPLocationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetIPLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.infos.push(CIPLocationInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CGCMsgGetIPLocationResponse>, I>>(
    object: I
  ): CGCMsgGetIPLocationResponse {
    const message = createBaseCGCMsgGetIPLocationResponse();
    message.infos =
      object.infos?.map(e => CIPLocationInfo.fromPartial(e)) || [];
    return message;
  }
};

function createBaseCGCMsgSystemStatsSchema(): CGCMsgSystemStatsSchema {
  return { gcAppId: 0, schemaKv: new Uint8Array() };
}

export const CGCMsgSystemStatsSchema = {
  encode(
    message: CGCMsgSystemStatsSchema,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gcAppId !== 0) {
      writer.uint32(8).uint32(message.gcAppId);
    }
    if (message.schemaKv.length !== 0) {
      writer.uint32(18).bytes(message.schemaKv);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgSystemStatsSchema {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgSystemStatsSchema>, I>>(
    object: I
  ): CGCMsgSystemStatsSchema {
    const message = createBaseCGCMsgSystemStatsSchema();
    message.gcAppId = object.gcAppId ?? 0;
    message.schemaKv = object.schemaKv ?? new Uint8Array();
    return message;
  }
};

function createBaseCGCMsgGetSystemStats(): CGCMsgGetSystemStats {
  return {};
}

export const CGCMsgGetSystemStats = {
  encode(_: CGCMsgGetSystemStats, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CGCMsgGetSystemStats {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgGetSystemStats>, I>>(
    _: I
  ): CGCMsgGetSystemStats {
    const message = createBaseCGCMsgGetSystemStats();
    return message;
  }
};

function createBaseCGCMsgGetSystemStatsResponse(): CGCMsgGetSystemStatsResponse {
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

export const CGCMsgGetSystemStatsResponse = {
  encode(
    message: CGCMsgGetSystemStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCMsgGetSystemStatsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CGCMsgGetSystemStatsResponse>, I>>(
    object: I
  ): CGCMsgGetSystemStatsResponse {
    const message = createBaseCGCMsgGetSystemStatsResponse();
    message.gcAppId = object.gcAppId ?? 0;
    message.statsKv = object.statsKv ?? new Uint8Array();
    message.activeJobs = object.activeJobs ?? 0;
    message.yieldingJobs = object.yieldingJobs ?? 0;
    message.userSessions = object.userSessions ?? 0;
    message.gameServerSessions = object.gameServerSessions ?? 0;
    message.socaches = object.socaches ?? 0;
    message.socachesToUnload = object.socachesToUnload ?? 0;
    message.socachesLoading = object.socachesLoading ?? 0;
    message.writebackQueue = object.writebackQueue ?? 0;
    message.steamidLocks = object.steamidLocks ?? 0;
    message.logonQueue = object.logonQueue ?? 0;
    message.logonJobs = object.logonJobs ?? 0;
    return message;
  }
};

function createBaseCMsgAMSendEmail(): CMsgAMSendEmail {
  return {
    steamid: Long.UZERO,
    emailMsgType: 0,
    emailFormat: 0,
    personaNameTokens: [],
    sourceGc: 0,
    tokens: []
  };
}

export const CMsgAMSendEmail = {
  encode(message: CMsgAMSendEmail, writer: Writer = Writer.create()): Writer {
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
      CMsgAMSendEmail_PersonaNameReplacementToken.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.sourceGc !== 0) {
      writer.uint32(48).uint32(message.sourceGc);
    }
    for (const v of message.tokens) {
      CMsgAMSendEmail_ReplacementToken.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgAMSendEmail {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMSendEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
          break;
        case 2:
          message.emailMsgType = reader.uint32();
          break;
        case 3:
          message.emailFormat = reader.uint32();
          break;
        case 5:
          message.personaNameTokens.push(
            CMsgAMSendEmail_PersonaNameReplacementToken.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 6:
          message.sourceGc = reader.uint32();
          break;
        case 7:
          message.tokens.push(
            CMsgAMSendEmail_ReplacementToken.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMSendEmail>, I>>(
    object: I
  ): CMsgAMSendEmail {
    const message = createBaseCMsgAMSendEmail();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.emailMsgType = object.emailMsgType ?? 0;
    message.emailFormat = object.emailFormat ?? 0;
    message.personaNameTokens =
      object.personaNameTokens?.map(e =>
        CMsgAMSendEmail_PersonaNameReplacementToken.fromPartial(e)
      ) || [];
    message.sourceGc = object.sourceGc ?? 0;
    message.tokens =
      object.tokens?.map(e =>
        CMsgAMSendEmail_ReplacementToken.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgAMSendEmail_ReplacementToken(): CMsgAMSendEmail_ReplacementToken {
  return { tokenName: "", tokenValue: "" };
}

export const CMsgAMSendEmail_ReplacementToken = {
  encode(
    message: CMsgAMSendEmail_ReplacementToken,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tokenName !== "") {
      writer.uint32(10).string(message.tokenName);
    }
    if (message.tokenValue !== "") {
      writer.uint32(18).string(message.tokenValue);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMSendEmail_ReplacementToken {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgAMSendEmail_ReplacementToken>, I>
  >(object: I): CMsgAMSendEmail_ReplacementToken {
    const message = createBaseCMsgAMSendEmail_ReplacementToken();
    message.tokenName = object.tokenName ?? "";
    message.tokenValue = object.tokenValue ?? "";
    return message;
  }
};

function createBaseCMsgAMSendEmail_PersonaNameReplacementToken(): CMsgAMSendEmail_PersonaNameReplacementToken {
  return { steamid: Long.UZERO, tokenName: "" };
}

export const CMsgAMSendEmail_PersonaNameReplacementToken = {
  encode(
    message: CMsgAMSendEmail_PersonaNameReplacementToken,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMSendEmail_PersonaNameReplacementToken {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMSendEmail_PersonaNameReplacementToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgAMSendEmail_PersonaNameReplacementToken>, I>
  >(object: I): CMsgAMSendEmail_PersonaNameReplacementToken {
    const message = createBaseCMsgAMSendEmail_PersonaNameReplacementToken();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.tokenName = object.tokenName ?? "";
    return message;
  }
};

function createBaseCMsgAMSendEmailResponse(): CMsgAMSendEmailResponse {
  return { eresult: 0 };
}

export const CMsgAMSendEmailResponse = {
  encode(
    message: CMsgAMSendEmailResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgAMSendEmailResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMSendEmailResponse>, I>>(
    object: I
  ): CMsgAMSendEmailResponse {
    const message = createBaseCMsgAMSendEmailResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  }
};

function createBaseCMsgGCGetEmailTemplate(): CMsgGCGetEmailTemplate {
  return { appId: 0, emailMsgType: 0, emailLang: 0, emailFormat: 0 };
}

export const CMsgGCGetEmailTemplate = {
  encode(
    message: CMsgGCGetEmailTemplate,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgGCGetEmailTemplate {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetEmailTemplate>, I>>(
    object: I
  ): CMsgGCGetEmailTemplate {
    const message = createBaseCMsgGCGetEmailTemplate();
    message.appId = object.appId ?? 0;
    message.emailMsgType = object.emailMsgType ?? 0;
    message.emailLang = object.emailLang ?? 0;
    message.emailFormat = object.emailFormat ?? 0;
    return message;
  }
};

function createBaseCMsgGCGetEmailTemplateResponse(): CMsgGCGetEmailTemplateResponse {
  return { eresult: 0, templateExists: false, template: "" };
}

export const CMsgGCGetEmailTemplateResponse = {
  encode(
    message: CMsgGCGetEmailTemplateResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGetEmailTemplateResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetEmailTemplateResponse>, I>>(
    object: I
  ): CMsgGCGetEmailTemplateResponse {
    const message = createBaseCMsgGCGetEmailTemplateResponse();
    message.eresult = object.eresult ?? 0;
    message.templateExists = object.templateExists ?? false;
    message.template = object.template ?? "";
    return message;
  }
};

function createBaseCMsgAMGrantGuestPasses2(): CMsgAMGrantGuestPasses2 {
  return {
    steamId: Long.UZERO,
    packageId: 0,
    passesToGrant: 0,
    daysToExpiration: 0,
    action: 0
  };
}

export const CMsgAMGrantGuestPasses2 = {
  encode(
    message: CMsgAMGrantGuestPasses2,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgAMGrantGuestPasses2 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGrantGuestPasses2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = reader.fixed64() as Long;
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMGrantGuestPasses2>, I>>(
    object: I
  ): CMsgAMGrantGuestPasses2 {
    const message = createBaseCMsgAMGrantGuestPasses2();
    message.steamId =
      object.steamId !== undefined && object.steamId !== null
        ? Long.fromValue(object.steamId)
        : Long.UZERO;
    message.packageId = object.packageId ?? 0;
    message.passesToGrant = object.passesToGrant ?? 0;
    message.daysToExpiration = object.daysToExpiration ?? 0;
    message.action = object.action ?? 0;
    return message;
  }
};

function createBaseCMsgAMGrantGuestPasses2Response(): CMsgAMGrantGuestPasses2Response {
  return { eresult: 0, passesGranted: 0 };
}

export const CMsgAMGrantGuestPasses2Response = {
  encode(
    message: CMsgAMGrantGuestPasses2Response,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.passesGranted !== 0) {
      writer.uint32(16).int32(message.passesGranted);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgAMGrantGuestPasses2Response {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgAMGrantGuestPasses2Response>, I>>(
    object: I
  ): CMsgAMGrantGuestPasses2Response {
    const message = createBaseCMsgAMGrantGuestPasses2Response();
    message.eresult = object.eresult ?? 0;
    message.passesGranted = object.passesGranted ?? 0;
    return message;
  }
};

function createBaseCGCSystemMsgGetAccountDetails(): CGCSystemMsgGetAccountDetails {
  return { steamid: Long.UZERO, appid: 0 };
}

export const CGCSystemMsgGetAccountDetails = {
  encode(
    message: CGCSystemMsgGetAccountDetails,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCSystemMsgGetAccountDetails {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgGetAccountDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
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

  fromPartial<I extends Exact<DeepPartial<CGCSystemMsgGetAccountDetails>, I>>(
    object: I
  ): CGCSystemMsgGetAccountDetails {
    const message = createBaseCGCSystemMsgGetAccountDetails();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.appid = object.appid ?? 0;
    return message;
  }
};

function createBaseCGCSystemMsgGetAccountDetailsResponse(): CGCSystemMsgGetAccountDetailsResponse {
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

export const CGCSystemMsgGetAccountDetailsResponse = {
  encode(
    message: CGCSystemMsgGetAccountDetailsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCSystemMsgGetAccountDetailsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.phoneId = reader.uint64() as Long;
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

  fromPartial<
    I extends Exact<DeepPartial<CGCSystemMsgGetAccountDetailsResponse>, I>
  >(object: I): CGCSystemMsgGetAccountDetailsResponse {
    const message = createBaseCGCSystemMsgGetAccountDetailsResponse();
    message.eresultDeprecated = object.eresultDeprecated ?? 0;
    message.accountName = object.accountName ?? "";
    message.personaName = object.personaName ?? "";
    message.isProfilePublic = object.isProfilePublic ?? false;
    message.isInventoryPublic = object.isInventoryPublic ?? false;
    message.isVacBanned = object.isVacBanned ?? false;
    message.isCyberCafe = object.isCyberCafe ?? false;
    message.isSchoolAccount = object.isSchoolAccount ?? false;
    message.isLimited = object.isLimited ?? false;
    message.isSubscribed = object.isSubscribed ?? false;
    message.package = object.package ?? 0;
    message.isFreeTrialAccount = object.isFreeTrialAccount ?? false;
    message.freeTrialExpiration = object.freeTrialExpiration ?? 0;
    message.isLowViolence = object.isLowViolence ?? false;
    message.isAccountLockedDown = object.isAccountLockedDown ?? false;
    message.isCommunityBanned = object.isCommunityBanned ?? false;
    message.isTradeBanned = object.isTradeBanned ?? false;
    message.tradeBanExpiration = object.tradeBanExpiration ?? 0;
    message.accountid = object.accountid ?? 0;
    message.suspensionEndTime = object.suspensionEndTime ?? 0;
    message.currency = object.currency ?? "";
    message.steamLevel = object.steamLevel ?? 0;
    message.friendCount = object.friendCount ?? 0;
    message.accountCreationTime = object.accountCreationTime ?? 0;
    message.isSteamguardEnabled = object.isSteamguardEnabled ?? false;
    message.isPhoneVerified = object.isPhoneVerified ?? false;
    message.isTwoFactorAuthEnabled = object.isTwoFactorAuthEnabled ?? false;
    message.twoFactorEnabledTime = object.twoFactorEnabledTime ?? 0;
    message.phoneVerificationTime = object.phoneVerificationTime ?? 0;
    message.phoneId =
      object.phoneId !== undefined && object.phoneId !== null
        ? Long.fromValue(object.phoneId)
        : Long.UZERO;
    message.isPhoneIdentifying = object.isPhoneIdentifying ?? false;
    message.rtIdentityLinked = object.rtIdentityLinked ?? 0;
    message.rtBirthDate = object.rtBirthDate ?? 0;
    message.txnCountryCode = object.txnCountryCode ?? "";
    message.hasAcceptedChinaSsa = object.hasAcceptedChinaSsa ?? false;
    message.isBannedSteamChina = object.isBannedSteamChina ?? false;
    return message;
  }
};

function createBaseCMsgGCGetPersonaNames(): CMsgGCGetPersonaNames {
  return { steamids: [] };
}

export const CMsgGCGetPersonaNames = {
  encode(
    message: CMsgGCGetPersonaNames,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.steamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgGCGetPersonaNames {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPersonaNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamids.push(reader.fixed64() as Long);
            }
          } else {
            message.steamids.push(reader.fixed64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetPersonaNames>, I>>(
    object: I
  ): CMsgGCGetPersonaNames {
    const message = createBaseCMsgGCGetPersonaNames();
    message.steamids = object.steamids?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseCMsgGCGetPersonaNamesResponse(): CMsgGCGetPersonaNamesResponse {
  return { succeededLookups: [], failedLookupSteamids: [] };
}

export const CMsgGCGetPersonaNamesResponse = {
  encode(
    message: CMsgGCGetPersonaNamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.succeededLookups) {
      CMsgGCGetPersonaNamesResponse_PersonaName.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.failedLookupSteamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGetPersonaNamesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPersonaNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.succeededLookups.push(
            CMsgGCGetPersonaNamesResponse_PersonaName.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failedLookupSteamids.push(reader.fixed64() as Long);
            }
          } else {
            message.failedLookupSteamids.push(reader.fixed64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetPersonaNamesResponse>, I>>(
    object: I
  ): CMsgGCGetPersonaNamesResponse {
    const message = createBaseCMsgGCGetPersonaNamesResponse();
    message.succeededLookups =
      object.succeededLookups?.map(e =>
        CMsgGCGetPersonaNamesResponse_PersonaName.fromPartial(e)
      ) || [];
    message.failedLookupSteamids =
      object.failedLookupSteamids?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseCMsgGCGetPersonaNamesResponse_PersonaName(): CMsgGCGetPersonaNamesResponse_PersonaName {
  return { steamid: Long.UZERO, personaName: "" };
}

export const CMsgGCGetPersonaNamesResponse_PersonaName = {
  encode(
    message: CMsgGCGetPersonaNamesResponse_PersonaName,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGetPersonaNamesResponse_PersonaName {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPersonaNamesResponse_PersonaName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCGetPersonaNamesResponse_PersonaName>, I>
  >(object: I): CMsgGCGetPersonaNamesResponse_PersonaName {
    const message = createBaseCMsgGCGetPersonaNamesResponse_PersonaName();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.personaName = object.personaName ?? "";
    return message;
  }
};

function createBaseCMsgGCCheckFriendship(): CMsgGCCheckFriendship {
  return { steamidLeft: Long.UZERO, steamidRight: Long.UZERO };
}

export const CMsgGCCheckFriendship = {
  encode(
    message: CMsgGCCheckFriendship,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamidLeft.isZero()) {
      writer.uint32(9).fixed64(message.steamidLeft);
    }
    if (!message.steamidRight.isZero()) {
      writer.uint32(17).fixed64(message.steamidRight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgGCCheckFriendship {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCheckFriendship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidLeft = reader.fixed64() as Long;
          break;
        case 2:
          message.steamidRight = reader.fixed64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCCheckFriendship>, I>>(
    object: I
  ): CMsgGCCheckFriendship {
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

function createBaseCMsgGCCheckFriendshipResponse(): CMsgGCCheckFriendshipResponse {
  return { success: false, foundFriendship: false };
}

export const CMsgGCCheckFriendshipResponse = {
  encode(
    message: CMsgGCCheckFriendshipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.foundFriendship === true) {
      writer.uint32(16).bool(message.foundFriendship);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCCheckFriendshipResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCCheckFriendshipResponse>, I>>(
    object: I
  ): CMsgGCCheckFriendshipResponse {
    const message = createBaseCMsgGCCheckFriendshipResponse();
    message.success = object.success ?? false;
    message.foundFriendship = object.foundFriendship ?? false;
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetDirectory(): CMsgGCMsgMasterSetDirectory {
  return { masterDirIndex: 0, dir: [] };
}

export const CMsgGCMsgMasterSetDirectory = {
  encode(
    message: CMsgGCMsgMasterSetDirectory,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.masterDirIndex !== 0) {
      writer.uint32(8).uint32(message.masterDirIndex);
    }
    for (const v of message.dir) {
      CMsgGCMsgMasterSetDirectory_SubGC.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetDirectory {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetDirectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterDirIndex = reader.uint32();
          break;
        case 2:
          message.dir.push(
            CMsgGCMsgMasterSetDirectory_SubGC.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCMsgMasterSetDirectory>, I>>(
    object: I
  ): CMsgGCMsgMasterSetDirectory {
    const message = createBaseCMsgGCMsgMasterSetDirectory();
    message.masterDirIndex = object.masterDirIndex ?? 0;
    message.dir =
      object.dir?.map(e => CMsgGCMsgMasterSetDirectory_SubGC.fromPartial(e)) ||
      [];
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetDirectory_SubGC(): CMsgGCMsgMasterSetDirectory_SubGC {
  return { dirIndex: 0, name: "", box: "", commandLine: "", gcBinary: "" };
}

export const CMsgGCMsgMasterSetDirectory_SubGC = {
  encode(
    message: CMsgGCMsgMasterSetDirectory_SubGC,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetDirectory_SubGC {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetDirectory_SubGC>, I>
  >(object: I): CMsgGCMsgMasterSetDirectory_SubGC {
    const message = createBaseCMsgGCMsgMasterSetDirectory_SubGC();
    message.dirIndex = object.dirIndex ?? 0;
    message.name = object.name ?? "";
    message.box = object.box ?? "";
    message.commandLine = object.commandLine ?? "";
    message.gcBinary = object.gcBinary ?? "";
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetDirectoryResponse(): CMsgGCMsgMasterSetDirectoryResponse {
  return { eresult: 0, message: "" };
}

export const CMsgGCMsgMasterSetDirectoryResponse = {
  encode(
    message: CMsgGCMsgMasterSetDirectoryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetDirectoryResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetDirectoryResponse>, I>
  >(object: I): CMsgGCMsgMasterSetDirectoryResponse {
    const message = createBaseCMsgGCMsgMasterSetDirectoryResponse();
    message.eresult = object.eresult ?? 0;
    message.message = object.message ?? "";
    return message;
  }
};

function createBaseCMsgGCMsgWebAPIJobRequestForwardResponse(): CMsgGCMsgWebAPIJobRequestForwardResponse {
  return { dirIndex: 0 };
}

export const CMsgGCMsgWebAPIJobRequestForwardResponse = {
  encode(
    message: CMsgGCMsgWebAPIJobRequestForwardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).uint32(message.dirIndex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgWebAPIJobRequestForwardResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgWebAPIJobRequestForwardResponse>, I>
  >(object: I): CMsgGCMsgWebAPIJobRequestForwardResponse {
    const message = createBaseCMsgGCMsgWebAPIJobRequestForwardResponse();
    message.dirIndex = object.dirIndex ?? 0;
    return message;
  }
};

function createBaseCGCSystemMsgGetPurchaseTrustRequest(): CGCSystemMsgGetPurchaseTrustRequest {
  return { steamid: Long.UZERO };
}

export const CGCSystemMsgGetPurchaseTrustRequest = {
  encode(
    message: CGCSystemMsgGetPurchaseTrustRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCSystemMsgGetPurchaseTrustRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgGetPurchaseTrustRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CGCSystemMsgGetPurchaseTrustRequest>, I>
  >(object: I): CGCSystemMsgGetPurchaseTrustRequest {
    const message = createBaseCGCSystemMsgGetPurchaseTrustRequest();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCGCSystemMsgGetPurchaseTrustResponse(): CGCSystemMsgGetPurchaseTrustResponse {
  return {
    hasPriorPurchaseHistory: false,
    hasNoRecentPasswordResets: false,
    isWalletCashTrusted: false,
    timeAllTrusted: 0
  };
}

export const CGCSystemMsgGetPurchaseTrustResponse = {
  encode(
    message: CGCSystemMsgGetPurchaseTrustResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CGCSystemMsgGetPurchaseTrustResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CGCSystemMsgGetPurchaseTrustResponse>, I>
  >(object: I): CGCSystemMsgGetPurchaseTrustResponse {
    const message = createBaseCGCSystemMsgGetPurchaseTrustResponse();
    message.hasPriorPurchaseHistory = object.hasPriorPurchaseHistory ?? false;
    message.hasNoRecentPasswordResets =
      object.hasNoRecentPasswordResets ?? false;
    message.isWalletCashTrusted = object.isWalletCashTrusted ?? false;
    message.timeAllTrusted = object.timeAllTrusted ?? 0;
    return message;
  }
};

function createBaseCMsgGCHAccountVacStatusChange(): CMsgGCHAccountVacStatusChange {
  return {
    steamId: Long.UZERO,
    appId: 0,
    rtimeVacbanStarts: 0,
    isBannedNow: false,
    isBannedFuture: false
  };
}

export const CMsgGCHAccountVacStatusChange = {
  encode(
    message: CMsgGCHAccountVacStatusChange,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCHAccountVacStatusChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAccountVacStatusChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = reader.fixed64() as Long;
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCHAccountVacStatusChange>, I>>(
    object: I
  ): CMsgGCHAccountVacStatusChange {
    const message = createBaseCMsgGCHAccountVacStatusChange();
    message.steamId =
      object.steamId !== undefined && object.steamId !== null
        ? Long.fromValue(object.steamId)
        : Long.UZERO;
    message.appId = object.appId ?? 0;
    message.rtimeVacbanStarts = object.rtimeVacbanStarts ?? 0;
    message.isBannedNow = object.isBannedNow ?? false;
    message.isBannedFuture = object.isBannedFuture ?? false;
    return message;
  }
};

function createBaseCMsgGCGetPartnerAccountLink(): CMsgGCGetPartnerAccountLink {
  return { steamid: Long.UZERO };
}

export const CMsgGCGetPartnerAccountLink = {
  encode(
    message: CMsgGCGetPartnerAccountLink,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGetPartnerAccountLink {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPartnerAccountLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCGetPartnerAccountLink>, I>>(
    object: I
  ): CMsgGCGetPartnerAccountLink {
    const message = createBaseCMsgGCGetPartnerAccountLink();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgGCGetPartnerAccountLinkResponse(): CMsgGCGetPartnerAccountLinkResponse {
  return {
    pwid: 0,
    nexonid: 0,
    ageclass: 0,
    idVerified: false,
    isAdult: false
  };
}

export const CMsgGCGetPartnerAccountLinkResponse = {
  encode(
    message: CMsgGCGetPartnerAccountLinkResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCGetPartnerAccountLinkResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCGetPartnerAccountLinkResponse>, I>
  >(object: I): CMsgGCGetPartnerAccountLinkResponse {
    const message = createBaseCMsgGCGetPartnerAccountLinkResponse();
    message.pwid = object.pwid ?? 0;
    message.nexonid = object.nexonid ?? 0;
    message.ageclass = object.ageclass ?? 0;
    message.idVerified = object.idVerified ?? false;
    message.isAdult = object.isAdult ?? false;
    return message;
  }
};

function createBaseCMsgGCRoutingInfo(): CMsgGCRoutingInfo {
  return {
    dirIndex: [],
    method: 0,
    fallback: 0,
    protobufField: 0,
    webapiParam: ""
  };
}

export const CMsgGCRoutingInfo = {
  encode(message: CMsgGCRoutingInfo, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CMsgGCRoutingInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          } else {
            message.dirIndex.push(reader.uint32());
          }
          break;
        case 2:
          message.method = reader.int32() as any;
          break;
        case 3:
          message.fallback = reader.int32() as any;
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCRoutingInfo>, I>>(
    object: I
  ): CMsgGCRoutingInfo {
    const message = createBaseCMsgGCRoutingInfo();
    message.dirIndex = object.dirIndex?.map(e => e) || [];
    message.method = object.method ?? 0;
    message.fallback = object.fallback ?? 0;
    message.protobufField = object.protobufField ?? 0;
    message.webapiParam = object.webapiParam ?? "";
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetWebAPIRouting(): CMsgGCMsgMasterSetWebAPIRouting {
  return { entries: [] };
}

export const CMsgGCMsgMasterSetWebAPIRouting = {
  encode(
    message: CMsgGCMsgMasterSetWebAPIRouting,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entries) {
      CMsgGCMsgMasterSetWebAPIRouting_Entry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetWebAPIRouting {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            CMsgGCMsgMasterSetWebAPIRouting_Entry.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCMsgMasterSetWebAPIRouting>, I>>(
    object: I
  ): CMsgGCMsgMasterSetWebAPIRouting {
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting();
    message.entries =
      object.entries?.map(e =>
        CMsgGCMsgMasterSetWebAPIRouting_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry(): CMsgGCMsgMasterSetWebAPIRouting_Entry {
  return { interfaceName: "", methodName: "", routing: undefined };
}

export const CMsgGCMsgMasterSetWebAPIRouting_Entry = {
  encode(
    message: CMsgGCMsgMasterSetWebAPIRouting_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    if (message.methodName !== "") {
      writer.uint32(18).string(message.methodName);
    }
    if (message.routing !== undefined) {
      CMsgGCRoutingInfo.encode(
        message.routing,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.routing = CMsgGCRoutingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetWebAPIRouting_Entry>, I>
  >(object: I): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry();
    message.interfaceName = object.interfaceName ?? "";
    message.methodName = object.methodName ?? "";
    message.routing =
      object.routing !== undefined && object.routing !== null
        ? CMsgGCRoutingInfo.fromPartial(object.routing)
        : undefined;
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetClientMsgRouting(): CMsgGCMsgMasterSetClientMsgRouting {
  return { entries: [] };
}

export const CMsgGCMsgMasterSetClientMsgRouting = {
  encode(
    message: CMsgGCMsgMasterSetClientMsgRouting,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entries) {
      CMsgGCMsgMasterSetClientMsgRouting_Entry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetClientMsgRouting {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            CMsgGCMsgMasterSetClientMsgRouting_Entry.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetClientMsgRouting>, I>
  >(object: I): CMsgGCMsgMasterSetClientMsgRouting {
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting();
    message.entries =
      object.entries?.map(e =>
        CMsgGCMsgMasterSetClientMsgRouting_Entry.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry(): CMsgGCMsgMasterSetClientMsgRouting_Entry {
  return { msgType: 0, routing: undefined };
}

export const CMsgGCMsgMasterSetClientMsgRouting_Entry = {
  encode(
    message: CMsgGCMsgMasterSetClientMsgRouting_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).uint32(message.msgType);
    }
    if (message.routing !== undefined) {
      CMsgGCRoutingInfo.encode(
        message.routing,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.uint32();
          break;
        case 2:
          message.routing = CMsgGCRoutingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetClientMsgRouting_Entry>, I>
  >(object: I): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry();
    message.msgType = object.msgType ?? 0;
    message.routing =
      object.routing !== undefined && object.routing !== null
        ? CMsgGCRoutingInfo.fromPartial(object.routing)
        : undefined;
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse(): CMsgGCMsgMasterSetWebAPIRoutingResponse {
  return { eresult: 0 };
}

export const CMsgGCMsgMasterSetWebAPIRoutingResponse = {
  encode(
    message: CMsgGCMsgMasterSetWebAPIRoutingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetWebAPIRoutingResponse>, I>
  >(object: I): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    const message = createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  }
};

function createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse(): CMsgGCMsgMasterSetClientMsgRoutingResponse {
  return { eresult: 0 };
}

export const CMsgGCMsgMasterSetClientMsgRoutingResponse = {
  encode(
    message: CMsgGCMsgMasterSetClientMsgRoutingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgMasterSetClientMsgRoutingResponse>, I>
  >(object: I): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    const message = createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  }
};

function createBaseCMsgGCMsgSetOptions(): CMsgGCMsgSetOptions {
  return { options: [], clientMsgRanges: [] };
}

export const CMsgGCMsgSetOptions = {
  encode(
    message: CMsgGCMsgSetOptions,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.options) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.clientMsgRanges) {
      CMsgGCMsgSetOptions_MessageRange.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgGCMsgSetOptions {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgSetOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.options.push(reader.int32() as any);
            }
          } else {
            message.options.push(reader.int32() as any);
          }
          break;
        case 2:
          message.clientMsgRanges.push(
            CMsgGCMsgSetOptions_MessageRange.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCMsgSetOptions>, I>>(
    object: I
  ): CMsgGCMsgSetOptions {
    const message = createBaseCMsgGCMsgSetOptions();
    message.options = object.options?.map(e => e) || [];
    message.clientMsgRanges =
      object.clientMsgRanges?.map(e =>
        CMsgGCMsgSetOptions_MessageRange.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgGCMsgSetOptions_MessageRange(): CMsgGCMsgSetOptions_MessageRange {
  return { low: 0, high: 0 };
}

export const CMsgGCMsgSetOptions_MessageRange = {
  encode(
    message: CMsgGCMsgSetOptions_MessageRange,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.low !== 0) {
      writer.uint32(8).uint32(message.low);
    }
    if (message.high !== 0) {
      writer.uint32(16).uint32(message.high);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCMsgSetOptions_MessageRange {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgGCMsgSetOptions_MessageRange>, I>
  >(object: I): CMsgGCMsgSetOptions_MessageRange {
    const message = createBaseCMsgGCMsgSetOptions_MessageRange();
    message.low = object.low ?? 0;
    message.high = object.high ?? 0;
    return message;
  }
};

function createBaseCMsgGCHUpdateSession(): CMsgGCHUpdateSession {
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

export const CMsgGCHUpdateSession = {
  encode(
    message: CMsgGCHUpdateSession,
    writer: Writer = Writer.create()
  ): Writer {
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
      CMsgGCHUpdateSession_ExtraField.encode(
        v!,
        writer.uint32(74).fork()
      ).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): CMsgGCHUpdateSession {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHUpdateSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = reader.fixed64() as Long;
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.online = reader.bool();
          break;
        case 4:
          message.serverSteamId = reader.fixed64() as Long;
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
          message.extraFields.push(
            CMsgGCHUpdateSession_ExtraField.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.ownerId = reader.fixed64() as Long;
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
          } else {
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCHUpdateSession>, I>>(
    object: I
  ): CMsgGCHUpdateSession {
    const message = createBaseCMsgGCHUpdateSession();
    message.steamId =
      object.steamId !== undefined && object.steamId !== null
        ? Long.fromValue(object.steamId)
        : Long.UZERO;
    message.appId = object.appId ?? 0;
    message.online = object.online ?? false;
    message.serverSteamId =
      object.serverSteamId !== undefined && object.serverSteamId !== null
        ? Long.fromValue(object.serverSteamId)
        : Long.UZERO;
    message.serverAddr = object.serverAddr ?? 0;
    message.serverPort = object.serverPort ?? 0;
    message.osType = object.osType ?? 0;
    message.clientAddr = object.clientAddr ?? 0;
    message.extraFields =
      object.extraFields?.map(e =>
        CMsgGCHUpdateSession_ExtraField.fromPartial(e)
      ) || [];
    message.ownerId =
      object.ownerId !== undefined && object.ownerId !== null
        ? Long.fromValue(object.ownerId)
        : Long.UZERO;
    message.cmSessionSysid = object.cmSessionSysid ?? 0;
    message.cmSessionIdentifier = object.cmSessionIdentifier ?? 0;
    message.depotIds = object.depotIds?.map(e => e) || [];
    return message;
  }
};

function createBaseCMsgGCHUpdateSession_ExtraField(): CMsgGCHUpdateSession_ExtraField {
  return { name: "", value: "" };
}

export const CMsgGCHUpdateSession_ExtraField = {
  encode(
    message: CMsgGCHUpdateSession_ExtraField,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgGCHUpdateSession_ExtraField {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<I extends Exact<DeepPartial<CMsgGCHUpdateSession_ExtraField>, I>>(
    object: I
  ): CMsgGCHUpdateSession_ExtraField {
    const message = createBaseCMsgGCHUpdateSession_ExtraField();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  }
};

function createBaseCMsgNotificationOfSuspiciousActivity(): CMsgNotificationOfSuspiciousActivity {
  return { steamid: Long.UZERO, appid: 0, multipleInstances: undefined };
}

export const CMsgNotificationOfSuspiciousActivity = {
  encode(
    message: CMsgNotificationOfSuspiciousActivity,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.steamid.isZero()) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.multipleInstances !== undefined) {
      CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.encode(
        message.multipleInstances,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgNotificationOfSuspiciousActivity {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNotificationOfSuspiciousActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = reader.fixed64() as Long;
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.multipleInstances = CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgNotificationOfSuspiciousActivity>, I>
  >(object: I): CMsgNotificationOfSuspiciousActivity {
    const message = createBaseCMsgNotificationOfSuspiciousActivity();
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.appid = object.appid ?? 0;
    message.multipleInstances =
      object.multipleInstances !== undefined &&
      object.multipleInstances !== null
        ? CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.fromPartial(
            object.multipleInstances
          )
        : undefined;
    return message;
  }
};

function createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances(): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
  return { appInstanceCount: 0, otherSteamids: [] };
}

export const CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = {
  encode(
    message: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    const reader = input instanceof Reader ? input : new Reader(input);
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
              message.otherSteamids.push(reader.fixed64() as Long);
            }
          } else {
            message.otherSteamids.push(reader.fixed64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CMsgNotificationOfSuspiciousActivity_MultipleGameInstances>,
      I
    >
  >(object: I): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    const message = createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances();
    message.appInstanceCount = object.appInstanceCount ?? 0;
    message.otherSteamids =
      object.otherSteamids?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseCMsgDPPartnerMicroTxns(): CMsgDPPartnerMicroTxns {
  return { appid: 0, gcName: "", partner: undefined, transactions: [] };
}

export const CMsgDPPartnerMicroTxns = {
  encode(
    message: CMsgDPPartnerMicroTxns,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gcName !== "") {
      writer.uint32(18).string(message.gcName);
    }
    if (message.partner !== undefined) {
      CMsgDPPartnerMicroTxns_PartnerInfo.encode(
        message.partner,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.transactions) {
      CMsgDPPartnerMicroTxns_PartnerMicroTxn.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.partner = CMsgDPPartnerMicroTxns_PartnerInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.transactions.push(
            CMsgDPPartnerMicroTxns_PartnerMicroTxn.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDPPartnerMicroTxns>, I>>(
    object: I
  ): CMsgDPPartnerMicroTxns {
    const message = createBaseCMsgDPPartnerMicroTxns();
    message.appid = object.appid ?? 0;
    message.gcName = object.gcName ?? "";
    message.partner =
      object.partner !== undefined && object.partner !== null
        ? CMsgDPPartnerMicroTxns_PartnerInfo.fromPartial(object.partner)
        : undefined;
    message.transactions =
      object.transactions?.map(e =>
        CMsgDPPartnerMicroTxns_PartnerMicroTxn.fromPartial(e)
      ) || [];
    return message;
  }
};

function createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn(): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
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

export const CMsgDPPartnerMicroTxns_PartnerMicroTxn = {
  encode(
    message: CMsgDPPartnerMicroTxns_PartnerMicroTxn,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    const reader = input instanceof Reader ? input : new Reader(input);
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
          message.txnId = reader.uint64() as Long;
          break;
        case 4:
          message.accountId = reader.uint32();
          break;
        case 5:
          message.lineItem = reader.uint32();
          break;
        case 6:
          message.itemId = reader.uint64() as Long;
          break;
        case 7:
          message.defIndex = reader.uint32();
          break;
        case 8:
          message.price = reader.uint64() as Long;
          break;
        case 9:
          message.tax = reader.uint64() as Long;
          break;
        case 10:
          message.priceUsd = reader.uint64() as Long;
          break;
        case 11:
          message.taxUsd = reader.uint64() as Long;
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
          message.refTransId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgDPPartnerMicroTxns_PartnerMicroTxn>, I>
  >(object: I): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    const message = createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn();
    message.initTime = object.initTime ?? 0;
    message.lastUpdateTime = object.lastUpdateTime ?? 0;
    message.txnId =
      object.txnId !== undefined && object.txnId !== null
        ? Long.fromValue(object.txnId)
        : Long.UZERO;
    message.accountId = object.accountId ?? 0;
    message.lineItem = object.lineItem ?? 0;
    message.itemId =
      object.itemId !== undefined && object.itemId !== null
        ? Long.fromValue(object.itemId)
        : Long.UZERO;
    message.defIndex = object.defIndex ?? 0;
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
    message.purchaseType = object.purchaseType ?? 0;
    message.steamTxnType = object.steamTxnType ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.regionCode = object.regionCode ?? "";
    message.quantity = object.quantity ?? 0;
    message.refTransId =
      object.refTransId !== undefined && object.refTransId !== null
        ? Long.fromValue(object.refTransId)
        : Long.UZERO;
    return message;
  }
};

function createBaseCMsgDPPartnerMicroTxns_PartnerInfo(): CMsgDPPartnerMicroTxns_PartnerInfo {
  return { partnerId: 0, partnerName: "", currencyCode: "", currencyName: "" };
}

export const CMsgDPPartnerMicroTxns_PartnerInfo = {
  encode(
    message: CMsgDPPartnerMicroTxns_PartnerInfo,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgDPPartnerMicroTxns_PartnerInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<DeepPartial<CMsgDPPartnerMicroTxns_PartnerInfo>, I>
  >(object: I): CMsgDPPartnerMicroTxns_PartnerInfo {
    const message = createBaseCMsgDPPartnerMicroTxns_PartnerInfo();
    message.partnerId = object.partnerId ?? 0;
    message.partnerName = object.partnerName ?? "";
    message.currencyCode = object.currencyCode ?? "";
    message.currencyName = object.currencyName ?? "";
    return message;
  }
};

function createBaseCMsgDPPartnerMicroTxnsResponse(): CMsgDPPartnerMicroTxnsResponse {
  return { eresult: 0, eerrorcode: 0 };
}

export const CMsgDPPartnerMicroTxnsResponse = {
  encode(
    message: CMsgDPPartnerMicroTxnsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.eerrorcode !== 0) {
      writer.uint32(16).int32(message.eerrorcode);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CMsgDPPartnerMicroTxnsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPPartnerMicroTxnsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        case 2:
          message.eerrorcode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDPPartnerMicroTxnsResponse>, I>>(
    object: I
  ): CMsgDPPartnerMicroTxnsResponse {
    const message = createBaseCMsgDPPartnerMicroTxnsResponse();
    message.eresult = object.eresult ?? 0;
    message.eerrorcode = object.eerrorcode ?? 0;
    return message;
  }
};

function createBaseCChinaAgreementSessionsStartAgreementSessionInGameRequest(): CChinaAgreementSessionsStartAgreementSessionInGameRequest {
  return { appid: 0, steamid: Long.UZERO, clientIpaddress: "" };
}

export const CChinaAgreementSessionsStartAgreementSessionInGameRequest = {
  encode(
    message: CChinaAgreementSessionsStartAgreementSessionInGameRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CChinaAgreementSessionsStartAgreementSessionInGameRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.steamid = reader.fixed64() as Long;
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

  fromPartial<
    I extends Exact<
      DeepPartial<CChinaAgreementSessionsStartAgreementSessionInGameRequest>,
      I
    >
  >(object: I): CChinaAgreementSessionsStartAgreementSessionInGameRequest {
    const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameRequest();
    message.appid = object.appid ?? 0;
    message.steamid =
      object.steamid !== undefined && object.steamid !== null
        ? Long.fromValue(object.steamid)
        : Long.UZERO;
    message.clientIpaddress = object.clientIpaddress ?? "";
    return message;
  }
};

function createBaseCChinaAgreementSessionsStartAgreementSessionInGameResponse(): CChinaAgreementSessionsStartAgreementSessionInGameResponse {
  return { agreementUrl: "" };
}

export const CChinaAgreementSessionsStartAgreementSessionInGameResponse = {
  encode(
    message: CChinaAgreementSessionsStartAgreementSessionInGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.agreementUrl !== "") {
      writer.uint32(10).string(message.agreementUrl);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CChinaAgreementSessionsStartAgreementSessionInGameResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
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

  fromPartial<
    I extends Exact<
      DeepPartial<CChinaAgreementSessionsStartAgreementSessionInGameResponse>,
      I
    >
  >(object: I): CChinaAgreementSessionsStartAgreementSessionInGameResponse {
    const message = createBaseCChinaAgreementSessionsStartAgreementSessionInGameResponse();
    message.agreementUrl = object.agreementUrl ?? "";
    return message;
  }
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
