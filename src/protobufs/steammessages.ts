/* eslint-disable */
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

export interface CChinaAgreementSessionsStartAgreementSessionInGameRequest {
  appid: number;
  steamid: Long;
  clientIpaddress: string;
}

export interface CChinaAgreementSessionsStartAgreementSessionInGameResponse {
  agreementUrl: string;
}

const baseCMsgProtoBufHeader: object = {
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

const baseCMsgWebAPIKey: object = {
  status: 0,
  accountId: 0,
  publisherGroupId: 0,
  keyId: 0,
  domain: ""
};

const baseCMsgHttpRequest: object = {
  requestMethod: 0,
  hostname: "",
  url: "",
  absoluteTimeout: 0
};

const baseCMsgHttpRequest_RequestHeader: object = {
  name: "",
  value: ""
};

const baseCMsgHttpRequest_QueryParam: object = {
  name: ""
};

const baseCMsgWebAPIRequest: object = {
  UNUSEDJobName: "",
  interfaceName: "",
  methodName: "",
  version: 0,
  routingAppId: 0
};

const baseCMsgHttpResponse: object = {
  statusCode: 0
};

const baseCMsgHttpResponse_ResponseHeader: object = {
  name: "",
  value: ""
};

const baseCMsgAMFindAccounts: object = {
  searchType: 0,
  searchString: ""
};

const baseCMsgAMFindAccountsResponse: object = {
  steamId: Long.UZERO
};

const baseCMsgNotifyWatchdog: object = {
  source: 0,
  alertType: 0,
  alertDestination: 0,
  critical: false,
  time: 0,
  appid: 0,
  text: ""
};

const baseCMsgAMGetLicenses: object = {
  steamid: Long.UZERO
};

const baseCMsgPackageLicense: object = {
  packageId: 0,
  timeCreated: 0,
  ownerId: 0
};

const baseCMsgAMGetLicensesResponse: object = {
  result: 0
};

const baseCMsgAMGetUserGameStats: object = {
  steamId: Long.UZERO,
  gameId: Long.UZERO,
  stats: 0
};

const baseCMsgAMGetUserGameStatsResponse: object = {
  steamId: Long.UZERO,
  gameId: Long.UZERO,
  eresult: 0
};

const baseCMsgAMGetUserGameStatsResponse_Stats: object = {
  statId: 0,
  statValue: 0
};

const baseCMsgAMGetUserGameStatsResponse_AchievementBlocks: object = {
  achievementId: 0,
  achievementBitId: 0,
  unlockTime: 0
};

const baseCMsgGCGetCommandList: object = {
  appId: 0,
  commandPrefix: ""
};

const baseCMsgGCGetCommandListResponse: object = {
  commandName: ""
};

const baseCGCMsgMemCachedGet: object = {
  keys: ""
};

const baseCGCMsgMemCachedGetResponse: object = {};

const baseCGCMsgMemCachedGetResponse_ValueTag: object = {
  found: false
};

const baseCGCMsgMemCachedSet: object = {};

const baseCGCMsgMemCachedSet_KeyPair: object = {
  name: ""
};

const baseCGCMsgMemCachedDelete: object = {
  keys: ""
};

const baseCGCMsgMemCachedStats: object = {};

const baseCGCMsgMemCachedStatsResponse: object = {
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

const baseCGCMsgSQLStats: object = {
  schemaCatalog: 0
};

const baseCGCMsgSQLStatsResponse: object = {
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

const baseCMsgAMAddFreeLicense: object = {
  steamid: Long.UZERO,
  ipPublic: 0,
  packageid: 0,
  storeCountryCode: ""
};

const baseCMsgAMAddFreeLicenseResponse: object = {
  eresult: 0,
  purchaseResultDetail: 0,
  transid: Long.UZERO
};

const baseCGCMsgGetIPLocation: object = {
  ips: 0
};

const baseCIPLocationInfo: object = {
  ip: 0,
  latitude: 0,
  longitude: 0,
  country: "",
  state: "",
  city: ""
};

const baseCGCMsgGetIPLocationResponse: object = {};

const baseCGCMsgSystemStatsSchema: object = {
  gcAppId: 0
};

const baseCGCMsgGetSystemStats: object = {};

const baseCGCMsgGetSystemStatsResponse: object = {
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

const baseCMsgAMSendEmail: object = {
  steamid: Long.UZERO,
  emailMsgType: 0,
  emailFormat: 0,
  sourceGc: 0
};

const baseCMsgAMSendEmail_ReplacementToken: object = {
  tokenName: "",
  tokenValue: ""
};

const baseCMsgAMSendEmail_PersonaNameReplacementToken: object = {
  steamid: Long.UZERO,
  tokenName: ""
};

const baseCMsgAMSendEmailResponse: object = {
  eresult: 0
};

const baseCMsgGCGetEmailTemplate: object = {
  appId: 0,
  emailMsgType: 0,
  emailLang: 0,
  emailFormat: 0
};

const baseCMsgGCGetEmailTemplateResponse: object = {
  eresult: 0,
  templateExists: false,
  template: ""
};

const baseCMsgAMGrantGuestPasses2: object = {
  steamId: Long.UZERO,
  packageId: 0,
  passesToGrant: 0,
  daysToExpiration: 0,
  action: 0
};

const baseCMsgAMGrantGuestPasses2Response: object = {
  eresult: 0,
  passesGranted: 0
};

const baseCGCSystemMsgGetAccountDetails: object = {
  steamid: Long.UZERO,
  appid: 0
};

const baseCGCSystemMsgGetAccountDetailsResponse: object = {
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

const baseCMsgGCGetPersonaNames: object = {
  steamids: Long.UZERO
};

const baseCMsgGCGetPersonaNamesResponse: object = {
  failedLookupSteamids: Long.UZERO
};

const baseCMsgGCGetPersonaNamesResponse_PersonaName: object = {
  steamid: Long.UZERO,
  personaName: ""
};

const baseCMsgGCCheckFriendship: object = {
  steamidLeft: Long.UZERO,
  steamidRight: Long.UZERO
};

const baseCMsgGCCheckFriendshipResponse: object = {
  success: false,
  foundFriendship: false
};

const baseCMsgGCMsgMasterSetDirectory: object = {
  masterDirIndex: 0
};

const baseCMsgGCMsgMasterSetDirectory_SubGC: object = {
  dirIndex: 0,
  name: "",
  box: "",
  commandLine: "",
  gcBinary: ""
};

const baseCMsgGCMsgMasterSetDirectoryResponse: object = {
  eresult: 0
};

const baseCMsgGCMsgWebAPIJobRequestForwardResponse: object = {
  dirIndex: 0
};

const baseCGCSystemMsgGetPurchaseTrustRequest: object = {
  steamid: Long.UZERO
};

const baseCGCSystemMsgGetPurchaseTrustResponse: object = {
  hasPriorPurchaseHistory: false,
  hasNoRecentPasswordResets: false,
  isWalletCashTrusted: false,
  timeAllTrusted: 0
};

const baseCMsgGCHAccountVacStatusChange: object = {
  steamId: Long.UZERO,
  appId: 0,
  rtimeVacbanStarts: 0,
  isBannedNow: false,
  isBannedFuture: false
};

const baseCMsgGCGetPartnerAccountLink: object = {
  steamid: Long.UZERO
};

const baseCMsgGCGetPartnerAccountLinkResponse: object = {
  pwid: 0,
  nexonid: 0,
  ageclass: 0,
  idVerified: false,
  isAdult: false
};

const baseCMsgGCRoutingInfo: object = {
  dirIndex: 0,
  method: 0,
  fallback: 0,
  protobufField: 0,
  webapiParam: ""
};

const baseCMsgGCMsgMasterSetWebAPIRouting: object = {};

const baseCMsgGCMsgMasterSetWebAPIRouting_Entry: object = {
  interfaceName: "",
  methodName: ""
};

const baseCMsgGCMsgMasterSetClientMsgRouting: object = {};

const baseCMsgGCMsgMasterSetClientMsgRouting_Entry: object = {
  msgType: 0
};

const baseCMsgGCMsgMasterSetWebAPIRoutingResponse: object = {
  eresult: 0
};

const baseCMsgGCMsgMasterSetClientMsgRoutingResponse: object = {
  eresult: 0
};

const baseCMsgGCMsgSetOptions: object = {
  options: 0
};

const baseCMsgGCMsgSetOptions_MessageRange: object = {
  low: 0,
  high: 0
};

const baseCMsgGCHUpdateSession: object = {
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

const baseCMsgGCHUpdateSession_ExtraField: object = {
  name: "",
  value: ""
};

const baseCMsgNotificationOfSuspiciousActivity: object = {
  steamid: Long.UZERO,
  appid: 0
};

const baseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances: object = {
  appInstanceCount: 0,
  otherSteamids: Long.UZERO
};

const baseCMsgDPPartnerMicroTxns: object = {
  appid: 0,
  gcName: ""
};

const baseCMsgDPPartnerMicroTxns_PartnerMicroTxn: object = {
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

const baseCMsgDPPartnerMicroTxns_PartnerInfo: object = {
  partnerId: 0,
  partnerName: "",
  currencyCode: "",
  currencyName: ""
};

const baseCMsgDPPartnerMicroTxnsResponse: object = {
  eresult: 0,
  eerrorcode: 0
};

const baseCChinaAgreementSessionsStartAgreementSessionInGameRequest: object = {
  appid: 0,
  steamid: Long.UZERO,
  clientIpaddress: ""
};

const baseCChinaAgreementSessionsStartAgreementSessionInGameResponse: object = {
  agreementUrl: ""
};

export const protobufPackage = "";

export enum GCProtoBufMsgSrc {
  GCProtoBufMsgSrc_Unspecified = 0,
  GCProtoBufMsgSrc_FromSystem = 1,
  GCProtoBufMsgSrc_FromSteamID = 2,
  GCProtoBufMsgSrc_FromGC = 3,
  GCProtoBufMsgSrc_ReplySystem = 4
}

export enum CMsgGCRoutingInfo_RoutingMethod {
  RANDOM = 0,
  DISCARD = 1,
  CLIENT_STEAMID = 2,
  PROTOBUF_FIELD_UINT64 = 3,
  WEBAPI_PARAM_UINT64 = 4
}

export enum CMsgGCMsgSetOptions_Option {
  NOTIFY_USER_SESSIONS = 0,
  NOTIFY_SERVER_SESSIONS = 1,
  NOTIFY_ACHIEVEMENTS = 2,
  NOTIFY_VAC_ACTION = 3
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

export const CMsgProtoBufHeader = {
  encode(
    message: CMsgProtoBufHeader,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CMsgProtoBufHeader {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgProtoBufHeader } as CMsgProtoBufHeader;
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
  }
};

export const CMsgWebAPIKey = {
  encode(message: CMsgWebAPIKey, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.status);
    writer.uint32(16).uint32(message.accountId);
    writer.uint32(24).uint32(message.publisherGroupId);
    writer.uint32(32).uint32(message.keyId);
    writer.uint32(42).string(message.domain);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgWebAPIKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgWebAPIKey } as CMsgWebAPIKey;
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

export const CMsgHttpRequest = {
  encode(message: CMsgHttpRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.requestMethod);
    writer.uint32(18).string(message.hostname);
    writer.uint32(26).string(message.url);
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
    writer.uint32(58).bytes(message.body);
    writer.uint32(64).uint32(message.absoluteTimeout);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgHttpRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgHttpRequest } as CMsgHttpRequest;
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
  }
};

export const CMsgHttpRequest_RequestHeader = {
  encode(
    message: CMsgHttpRequest_RequestHeader,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.value);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgHttpRequest_RequestHeader {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgHttpRequest_RequestHeader
    } as CMsgHttpRequest_RequestHeader;
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

export const CMsgHttpRequest_QueryParam = {
  encode(
    message: CMsgHttpRequest_QueryParam,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).bytes(message.value);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgHttpRequest_QueryParam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgHttpRequest_QueryParam
    } as CMsgHttpRequest_QueryParam;
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

export const CMsgWebAPIRequest = {
  encode(message: CMsgWebAPIRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.UNUSEDJobName);
    writer.uint32(18).string(message.interfaceName);
    writer.uint32(26).string(message.methodName);
    writer.uint32(32).uint32(message.version);
    if (message.apiKey !== undefined && message.apiKey !== undefined) {
      CMsgWebAPIKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    if (message.request !== undefined && message.request !== undefined) {
      CMsgHttpRequest.encode(
        message.request,
        writer.uint32(50).fork()
      ).ldelim();
    }
    writer.uint32(56).uint32(message.routingAppId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgWebAPIRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgWebAPIRequest } as CMsgWebAPIRequest;
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
  }
};

export const CMsgHttpResponse = {
  encode(message: CMsgHttpResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.statusCode);
    for (const v of message.headers) {
      CMsgHttpResponse_ResponseHeader.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    writer.uint32(26).bytes(message.body);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgHttpResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgHttpResponse } as CMsgHttpResponse;
    message.headers = [];
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
  }
};

export const CMsgHttpResponse_ResponseHeader = {
  encode(
    message: CMsgHttpResponse_ResponseHeader,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.value);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgHttpResponse_ResponseHeader {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgHttpResponse_ResponseHeader
    } as CMsgHttpResponse_ResponseHeader;
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

export const CMsgAMFindAccounts = {
  encode(
    message: CMsgAMFindAccounts,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.searchType);
    writer.uint32(18).string(message.searchString);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMFindAccounts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgAMFindAccounts } as CMsgAMFindAccounts;
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMFindAccountsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMFindAccountsResponse
    } as CMsgAMFindAccountsResponse;
    message.steamId = [];
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
  }
};

export const CMsgNotifyWatchdog = {
  encode(
    message: CMsgNotifyWatchdog,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.source);
    writer.uint32(16).uint32(message.alertType);
    writer.uint32(24).uint32(message.alertDestination);
    writer.uint32(32).bool(message.critical);
    writer.uint32(40).uint32(message.time);
    writer.uint32(48).uint32(message.appid);
    writer.uint32(58).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgNotifyWatchdog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgNotifyWatchdog } as CMsgNotifyWatchdog;
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

export const CMsgAMGetLicenses = {
  encode(message: CMsgAMGetLicenses, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).fixed64(message.steamid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMGetLicenses {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgAMGetLicenses } as CMsgAMGetLicenses;
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
  }
};

export const CMsgPackageLicense = {
  encode(
    message: CMsgPackageLicense,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.packageId);
    writer.uint32(16).uint32(message.timeCreated);
    writer.uint32(24).uint32(message.ownerId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgPackageLicense {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgPackageLicense } as CMsgPackageLicense;
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

export const CMsgAMGetLicensesResponse = {
  encode(
    message: CMsgAMGetLicensesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.license) {
      CMsgPackageLicense.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.result);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMGetLicensesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMGetLicensesResponse
    } as CMsgAMGetLicensesResponse;
    message.license = [];
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
  }
};

export const CMsgAMGetUserGameStats = {
  encode(
    message: CMsgAMGetUserGameStats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamId);
    writer.uint32(17).fixed64(message.gameId);
    writer.uint32(26).fork();
    for (const v of message.stats) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMGetUserGameStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgAMGetUserGameStats } as CMsgAMGetUserGameStats;
    message.stats = [];
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
  }
};

export const CMsgAMGetUserGameStatsResponse = {
  encode(
    message: CMsgAMGetUserGameStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamId);
    writer.uint32(17).fixed64(message.gameId);
    writer.uint32(24).int32(message.eresult);
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMGetUserGameStatsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMGetUserGameStatsResponse
    } as CMsgAMGetUserGameStatsResponse;
    message.stats = [];
    message.achievementBlocks = [];
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
  }
};

export const CMsgAMGetUserGameStatsResponse_Stats = {
  encode(
    message: CMsgAMGetUserGameStatsResponse_Stats,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.statId);
    writer.uint32(16).uint32(message.statValue);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMGetUserGameStatsResponse_Stats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMGetUserGameStatsResponse_Stats
    } as CMsgAMGetUserGameStatsResponse_Stats;
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

export const CMsgAMGetUserGameStatsResponse_AchievementBlocks = {
  encode(
    message: CMsgAMGetUserGameStatsResponse_AchievementBlocks,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.achievementId);
    writer.uint32(16).uint32(message.achievementBitId);
    writer.uint32(29).fixed32(message.unlockTime);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMGetUserGameStatsResponse_AchievementBlocks
    } as CMsgAMGetUserGameStatsResponse_AchievementBlocks;
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

export const CMsgGCGetCommandList = {
  encode(
    message: CMsgGCGetCommandList,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.appId);
    writer.uint32(18).string(message.commandPrefix);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgGCGetCommandList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCGetCommandList } as CMsgGCGetCommandList;
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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGetCommandListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGetCommandListResponse
    } as CMsgGCGetCommandListResponse;
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
  decode(input: Uint8Array | Reader, length?: number): CGCMsgMemCachedGet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgMemCachedGet } as CGCMsgMemCachedGet;
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
    input: Uint8Array | Reader,
    length?: number
  ): CGCMsgMemCachedGetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgMemCachedGetResponse
    } as CGCMsgMemCachedGetResponse;
    message.values = [];
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
  }
};

export const CGCMsgMemCachedGetResponse_ValueTag = {
  encode(
    message: CGCMsgMemCachedGetResponse_ValueTag,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.found);
    writer.uint32(18).bytes(message.value);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCMsgMemCachedGetResponse_ValueTag {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgMemCachedGetResponse_ValueTag
    } as CGCMsgMemCachedGetResponse_ValueTag;
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
  decode(input: Uint8Array | Reader, length?: number): CGCMsgMemCachedSet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgMemCachedSet } as CGCMsgMemCachedSet;
    message.keys = [];
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
  }
};

export const CGCMsgMemCachedSet_KeyPair = {
  encode(
    message: CGCMsgMemCachedSet_KeyPair,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).bytes(message.value);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCMsgMemCachedSet_KeyPair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgMemCachedSet_KeyPair
    } as CGCMsgMemCachedSet_KeyPair;
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
  decode(input: Uint8Array | Reader, length?: number): CGCMsgMemCachedDelete {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgMemCachedDelete } as CGCMsgMemCachedDelete;
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

export const CGCMsgMemCachedStats = {
  encode(_: CGCMsgMemCachedStats, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CGCMsgMemCachedStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgMemCachedStats } as CGCMsgMemCachedStats;
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

export const CGCMsgMemCachedStatsResponse = {
  encode(
    message: CGCMsgMemCachedStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCMsgMemCachedStatsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgMemCachedStatsResponse
    } as CGCMsgMemCachedStatsResponse;
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
  }
};

export const CGCMsgSQLStats = {
  encode(message: CGCMsgSQLStats, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.schemaCatalog);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CGCMsgSQLStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgSQLStats } as CGCMsgSQLStats;
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

export const CGCMsgSQLStatsResponse = {
  encode(
    message: CGCMsgSQLStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CGCMsgSQLStatsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgSQLStatsResponse } as CGCMsgSQLStatsResponse;
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

export const CMsgAMAddFreeLicense = {
  encode(
    message: CMsgAMAddFreeLicense,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    writer.uint32(16).uint32(message.ipPublic);
    writer.uint32(24).uint32(message.packageid);
    writer.uint32(34).string(message.storeCountryCode);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMAddFreeLicense {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgAMAddFreeLicense } as CMsgAMAddFreeLicense;
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
  }
};

export const CMsgAMAddFreeLicenseResponse = {
  encode(
    message: CMsgAMAddFreeLicenseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eresult);
    writer.uint32(16).int32(message.purchaseResultDetail);
    writer.uint32(25).fixed64(message.transid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMAddFreeLicenseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMAddFreeLicenseResponse
    } as CMsgAMAddFreeLicenseResponse;
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
  }
};

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
  decode(input: Uint8Array | Reader, length?: number): CGCMsgGetIPLocation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgGetIPLocation } as CGCMsgGetIPLocation;
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
  }
};

export const CIPLocationInfo = {
  encode(message: CIPLocationInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.ip);
    writer.uint32(21).float(message.latitude);
    writer.uint32(29).float(message.longitude);
    writer.uint32(34).string(message.country);
    writer.uint32(42).string(message.state);
    writer.uint32(50).string(message.city);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CIPLocationInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIPLocationInfo } as CIPLocationInfo;
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
    input: Uint8Array | Reader,
    length?: number
  ): CGCMsgGetIPLocationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgGetIPLocationResponse
    } as CGCMsgGetIPLocationResponse;
    message.infos = [];
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
  }
};

export const CGCMsgSystemStatsSchema = {
  encode(
    message: CGCMsgSystemStatsSchema,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.gcAppId);
    writer.uint32(18).bytes(message.schemaKv);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CGCMsgSystemStatsSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgSystemStatsSchema
    } as CGCMsgSystemStatsSchema;
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

export const CGCMsgGetSystemStats = {
  encode(_: CGCMsgGetSystemStats, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CGCMsgGetSystemStats {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCGCMsgGetSystemStats } as CGCMsgGetSystemStats;
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

export const CGCMsgGetSystemStatsResponse = {
  encode(
    message: CGCMsgGetSystemStatsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCMsgGetSystemStatsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCMsgGetSystemStatsResponse
    } as CGCMsgGetSystemStatsResponse;
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

export const CMsgAMSendEmail = {
  encode(message: CMsgAMSendEmail, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).fixed64(message.steamid);
    writer.uint32(16).uint32(message.emailMsgType);
    writer.uint32(24).uint32(message.emailFormat);
    for (const v of message.personaNameTokens) {
      CMsgAMSendEmail_PersonaNameReplacementToken.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    writer.uint32(48).uint32(message.sourceGc);
    for (const v of message.tokens) {
      CMsgAMSendEmail_ReplacementToken.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMSendEmail {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgAMSendEmail } as CMsgAMSendEmail;
    message.personaNameTokens = [];
    message.tokens = [];
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
  }
};

export const CMsgAMSendEmail_ReplacementToken = {
  encode(
    message: CMsgAMSendEmail_ReplacementToken,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.tokenName);
    writer.uint32(18).string(message.tokenValue);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMSendEmail_ReplacementToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMSendEmail_ReplacementToken
    } as CMsgAMSendEmail_ReplacementToken;
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

export const CMsgAMSendEmail_PersonaNameReplacementToken = {
  encode(
    message: CMsgAMSendEmail_PersonaNameReplacementToken,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    writer.uint32(18).string(message.tokenName);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMSendEmail_PersonaNameReplacementToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMSendEmail_PersonaNameReplacementToken
    } as CMsgAMSendEmail_PersonaNameReplacementToken;
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
  }
};

export const CMsgAMSendEmailResponse = {
  encode(
    message: CMsgAMSendEmailResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eresult);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMSendEmailResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMSendEmailResponse
    } as CMsgAMSendEmailResponse;
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

export const CMsgGCGetEmailTemplate = {
  encode(
    message: CMsgGCGetEmailTemplate,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.appId);
    writer.uint32(16).uint32(message.emailMsgType);
    writer.uint32(24).int32(message.emailLang);
    writer.uint32(32).int32(message.emailFormat);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgGCGetEmailTemplate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCGetEmailTemplate } as CMsgGCGetEmailTemplate;
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

export const CMsgGCGetEmailTemplateResponse = {
  encode(
    message: CMsgGCGetEmailTemplateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eresult);
    writer.uint32(16).bool(message.templateExists);
    writer.uint32(26).string(message.template);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGetEmailTemplateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGetEmailTemplateResponse
    } as CMsgGCGetEmailTemplateResponse;
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

export const CMsgAMGrantGuestPasses2 = {
  encode(
    message: CMsgAMGrantGuestPasses2,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamId);
    writer.uint32(16).uint32(message.packageId);
    writer.uint32(24).int32(message.passesToGrant);
    writer.uint32(32).int32(message.daysToExpiration);
    writer.uint32(40).int32(message.action);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgAMGrantGuestPasses2 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMGrantGuestPasses2
    } as CMsgAMGrantGuestPasses2;
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
  }
};

export const CMsgAMGrantGuestPasses2Response = {
  encode(
    message: CMsgAMGrantGuestPasses2Response,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eresult);
    writer.uint32(16).int32(message.passesGranted);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgAMGrantGuestPasses2Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgAMGrantGuestPasses2Response
    } as CMsgAMGrantGuestPasses2Response;
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

export const CGCSystemMsgGetAccountDetails = {
  encode(
    message: CGCSystemMsgGetAccountDetails,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    writer.uint32(16).uint32(message.appid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCSystemMsgGetAccountDetails {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCSystemMsgGetAccountDetails
    } as CGCSystemMsgGetAccountDetails;
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
  }
};

export const CGCSystemMsgGetAccountDetailsResponse = {
  encode(
    message: CGCSystemMsgGetAccountDetailsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCSystemMsgGetAccountDetailsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCSystemMsgGetAccountDetailsResponse
    } as CGCSystemMsgGetAccountDetailsResponse;
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
  }
};

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
  decode(input: Uint8Array | Reader, length?: number): CMsgGCGetPersonaNames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCGetPersonaNames } as CMsgGCGetPersonaNames;
    message.steamids = [];
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGetPersonaNamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGetPersonaNamesResponse
    } as CMsgGCGetPersonaNamesResponse;
    message.succeededLookups = [];
    message.failedLookupSteamids = [];
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
  }
};

export const CMsgGCGetPersonaNamesResponse_PersonaName = {
  encode(
    message: CMsgGCGetPersonaNamesResponse_PersonaName,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    writer.uint32(18).string(message.personaName);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGetPersonaNamesResponse_PersonaName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGetPersonaNamesResponse_PersonaName
    } as CMsgGCGetPersonaNamesResponse_PersonaName;
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
  }
};

export const CMsgGCCheckFriendship = {
  encode(
    message: CMsgGCCheckFriendship,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamidLeft);
    writer.uint32(17).fixed64(message.steamidRight);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CMsgGCCheckFriendship {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCCheckFriendship } as CMsgGCCheckFriendship;
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
  }
};

export const CMsgGCCheckFriendshipResponse = {
  encode(
    message: CMsgGCCheckFriendshipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.success);
    writer.uint32(16).bool(message.foundFriendship);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCCheckFriendshipResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCCheckFriendshipResponse
    } as CMsgGCCheckFriendshipResponse;
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

export const CMsgGCMsgMasterSetDirectory = {
  encode(
    message: CMsgGCMsgMasterSetDirectory,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.masterDirIndex);
    for (const v of message.dir) {
      CMsgGCMsgMasterSetDirectory_SubGC.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetDirectory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetDirectory
    } as CMsgGCMsgMasterSetDirectory;
    message.dir = [];
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
  }
};

export const CMsgGCMsgMasterSetDirectory_SubGC = {
  encode(
    message: CMsgGCMsgMasterSetDirectory_SubGC,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.dirIndex);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.box);
    writer.uint32(34).string(message.commandLine);
    writer.uint32(42).string(message.gcBinary);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetDirectory_SubGC {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetDirectory_SubGC
    } as CMsgGCMsgMasterSetDirectory_SubGC;
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

export const CMsgGCMsgMasterSetDirectoryResponse = {
  encode(
    message: CMsgGCMsgMasterSetDirectoryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eresult);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetDirectoryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetDirectoryResponse
    } as CMsgGCMsgMasterSetDirectoryResponse;
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

export const CMsgGCMsgWebAPIJobRequestForwardResponse = {
  encode(
    message: CMsgGCMsgWebAPIJobRequestForwardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.dirIndex);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgWebAPIJobRequestForwardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgWebAPIJobRequestForwardResponse
    } as CMsgGCMsgWebAPIJobRequestForwardResponse;
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

export const CGCSystemMsgGetPurchaseTrustRequest = {
  encode(
    message: CGCSystemMsgGetPurchaseTrustRequest,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCSystemMsgGetPurchaseTrustRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCSystemMsgGetPurchaseTrustRequest
    } as CGCSystemMsgGetPurchaseTrustRequest;
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
  }
};

export const CGCSystemMsgGetPurchaseTrustResponse = {
  encode(
    message: CGCSystemMsgGetPurchaseTrustResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).bool(message.hasPriorPurchaseHistory);
    writer.uint32(16).bool(message.hasNoRecentPasswordResets);
    writer.uint32(24).bool(message.isWalletCashTrusted);
    writer.uint32(32).uint32(message.timeAllTrusted);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CGCSystemMsgGetPurchaseTrustResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCGCSystemMsgGetPurchaseTrustResponse
    } as CGCSystemMsgGetPurchaseTrustResponse;
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

export const CMsgGCHAccountVacStatusChange = {
  encode(
    message: CMsgGCHAccountVacStatusChange,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamId);
    writer.uint32(16).uint32(message.appId);
    writer.uint32(24).uint32(message.rtimeVacbanStarts);
    writer.uint32(32).bool(message.isBannedNow);
    writer.uint32(40).bool(message.isBannedFuture);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCHAccountVacStatusChange {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCHAccountVacStatusChange
    } as CMsgGCHAccountVacStatusChange;
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
  }
};

export const CMsgGCGetPartnerAccountLink = {
  encode(
    message: CMsgGCGetPartnerAccountLink,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGetPartnerAccountLink {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGetPartnerAccountLink
    } as CMsgGCGetPartnerAccountLink;
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
  }
};

export const CMsgGCGetPartnerAccountLinkResponse = {
  encode(
    message: CMsgGCGetPartnerAccountLinkResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.pwid);
    writer.uint32(16).uint32(message.nexonid);
    writer.uint32(24).int32(message.ageclass);
    writer.uint32(32).bool(message.idVerified);
    writer.uint32(40).bool(message.isAdult);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCGetPartnerAccountLinkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCGetPartnerAccountLinkResponse
    } as CMsgGCGetPartnerAccountLinkResponse;
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

export const CMsgGCRoutingInfo = {
  encode(message: CMsgGCRoutingInfo, writer: Writer = Writer.create()): Writer {
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
  decode(input: Uint8Array | Reader, length?: number): CMsgGCRoutingInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCRoutingInfo } as CMsgGCRoutingInfo;
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetWebAPIRouting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetWebAPIRouting
    } as CMsgGCMsgMasterSetWebAPIRouting;
    message.entries = [];
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
  }
};

export const CMsgGCMsgMasterSetWebAPIRouting_Entry = {
  encode(
    message: CMsgGCMsgMasterSetWebAPIRouting_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.interfaceName);
    writer.uint32(18).string(message.methodName);
    if (message.routing !== undefined && message.routing !== undefined) {
      CMsgGCRoutingInfo.encode(
        message.routing,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetWebAPIRouting_Entry
    } as CMsgGCMsgMasterSetWebAPIRouting_Entry;
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
  }
};

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
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetClientMsgRouting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetClientMsgRouting
    } as CMsgGCMsgMasterSetClientMsgRouting;
    message.entries = [];
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
  }
};

export const CMsgGCMsgMasterSetClientMsgRouting_Entry = {
  encode(
    message: CMsgGCMsgMasterSetClientMsgRouting_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.msgType);
    if (message.routing !== undefined && message.routing !== undefined) {
      CMsgGCRoutingInfo.encode(
        message.routing,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetClientMsgRouting_Entry
    } as CMsgGCMsgMasterSetClientMsgRouting_Entry;
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
  }
};

export const CMsgGCMsgMasterSetWebAPIRoutingResponse = {
  encode(
    message: CMsgGCMsgMasterSetWebAPIRoutingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eresult);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetWebAPIRoutingResponse
    } as CMsgGCMsgMasterSetWebAPIRoutingResponse;
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

export const CMsgGCMsgMasterSetClientMsgRoutingResponse = {
  encode(
    message: CMsgGCMsgMasterSetClientMsgRoutingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).int32(message.eresult);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgMasterSetClientMsgRoutingResponse
    } as CMsgGCMsgMasterSetClientMsgRoutingResponse;
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
  decode(input: Uint8Array | Reader, length?: number): CMsgGCMsgSetOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCMsgSetOptions } as CMsgGCMsgSetOptions;
    message.options = [];
    message.clientMsgRanges = [];
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
  }
};

export const CMsgGCMsgSetOptions_MessageRange = {
  encode(
    message: CMsgGCMsgSetOptions_MessageRange,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.low);
    writer.uint32(16).uint32(message.high);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCMsgSetOptions_MessageRange {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCMsgSetOptions_MessageRange
    } as CMsgGCMsgSetOptions_MessageRange;
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

export const CMsgGCHUpdateSession = {
  encode(
    message: CMsgGCHUpdateSession,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamId);
    writer.uint32(16).uint32(message.appId);
    writer.uint32(24).bool(message.online);
    writer.uint32(33).fixed64(message.serverSteamId);
    writer.uint32(40).uint32(message.serverAddr);
    writer.uint32(48).uint32(message.serverPort);
    writer.uint32(56).uint32(message.osType);
    writer.uint32(64).uint32(message.clientAddr);
    for (const v of message.extraFields) {
      CMsgGCHUpdateSession_ExtraField.encode(
        v!,
        writer.uint32(74).fork()
      ).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): CMsgGCHUpdateSession {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgGCHUpdateSession } as CMsgGCHUpdateSession;
    message.extraFields = [];
    message.depotIds = [];
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
  }
};

export const CMsgGCHUpdateSession_ExtraField = {
  encode(
    message: CMsgGCHUpdateSession_ExtraField,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.value);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgGCHUpdateSession_ExtraField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgGCHUpdateSession_ExtraField
    } as CMsgGCHUpdateSession_ExtraField;
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

export const CMsgNotificationOfSuspiciousActivity = {
  encode(
    message: CMsgNotificationOfSuspiciousActivity,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(9).fixed64(message.steamid);
    writer.uint32(16).uint32(message.appid);
    if (
      message.multipleInstances !== undefined &&
      message.multipleInstances !== undefined
    ) {
      CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.encode(
        message.multipleInstances,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgNotificationOfSuspiciousActivity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgNotificationOfSuspiciousActivity
    } as CMsgNotificationOfSuspiciousActivity;
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
  }
};

export const CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = {
  encode(
    message: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.appInstanceCount);
    writer.uint32(18).fork();
    for (const v of message.otherSteamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances
    } as CMsgNotificationOfSuspiciousActivity_MultipleGameInstances;
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
  }
};

export const CMsgDPPartnerMicroTxns = {
  encode(
    message: CMsgDPPartnerMicroTxns,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.appid);
    writer.uint32(18).string(message.gcName);
    if (message.partner !== undefined && message.partner !== undefined) {
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
  decode(input: Uint8Array | Reader, length?: number): CMsgDPPartnerMicroTxns {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCMsgDPPartnerMicroTxns } as CMsgDPPartnerMicroTxns;
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
  }
};

export const CMsgDPPartnerMicroTxns_PartnerMicroTxn = {
  encode(
    message: CMsgDPPartnerMicroTxns_PartnerMicroTxn,
    writer: Writer = Writer.create()
  ): Writer {
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
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgDPPartnerMicroTxns_PartnerMicroTxn
    } as CMsgDPPartnerMicroTxns_PartnerMicroTxn;
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
  }
};

export const CMsgDPPartnerMicroTxns_PartnerInfo = {
  encode(
    message: CMsgDPPartnerMicroTxns_PartnerInfo,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.partnerId);
    writer.uint32(18).string(message.partnerName);
    writer.uint32(26).string(message.currencyCode);
    writer.uint32(34).string(message.currencyName);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgDPPartnerMicroTxns_PartnerInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgDPPartnerMicroTxns_PartnerInfo
    } as CMsgDPPartnerMicroTxns_PartnerInfo;
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

export const CMsgDPPartnerMicroTxnsResponse = {
  encode(
    message: CMsgDPPartnerMicroTxnsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.eresult);
    writer.uint32(16).int32(message.eerrorcode);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CMsgDPPartnerMicroTxnsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCMsgDPPartnerMicroTxnsResponse
    } as CMsgDPPartnerMicroTxnsResponse;
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
  }
};

export const CChinaAgreementSessionsStartAgreementSessionInGameRequest = {
  encode(
    message: CChinaAgreementSessionsStartAgreementSessionInGameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint32(message.appid);
    writer.uint32(17).fixed64(message.steamid);
    writer.uint32(26).string(message.clientIpaddress);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CChinaAgreementSessionsStartAgreementSessionInGameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCChinaAgreementSessionsStartAgreementSessionInGameRequest
    } as CChinaAgreementSessionsStartAgreementSessionInGameRequest;
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
  }
};

export const CChinaAgreementSessionsStartAgreementSessionInGameResponse = {
  encode(
    message: CChinaAgreementSessionsStartAgreementSessionInGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).string(message.agreementUrl);
    return writer;
  },
  decode(
    input: Uint8Array | Reader,
    length?: number
  ): CChinaAgreementSessionsStartAgreementSessionInGameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCChinaAgreementSessionsStartAgreementSessionInGameResponse
    } as CChinaAgreementSessionsStartAgreementSessionInGameResponse;
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
