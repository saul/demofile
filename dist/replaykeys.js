"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPublicEncryptionKey = exports.decodeEncryptionKey = void 0;
const util_1 = require("util");
const cstrike15_gcmessages_1 = require("./protobufs/cstrike15_gcmessages");
/**
 * Decodes an encryption key encoded as a uint64 into a Uint8Array.
 * @param key Encryption key encoded as a uint64.
 * @returns 16-byte encryption key as a Uint8Array.
 */
function decodeEncryptionKey(key) {
    return new util_1.TextEncoder().encode(key.toString(16).padStart(16, "0").toUpperCase());
}
exports.decodeEncryptionKey = decodeEncryptionKey;
/**
 * Extracts the public encryption key from a matchmaking demo.
 * The return value of this function can be passed into `DemoFile#setEncryptionKey`.
 * @param replayDemInfo Raw byte contents of the `match730_*.dem.info` file.
 */
function extractPublicEncryptionKey(replayDemInfo) {
    const matchInfo = cstrike15_gcmessages_1.CDataGCCStrike15V2MatchInfo.decode(replayDemInfo);
    return decodeEncryptionKey(matchInfo.watchablematchinfo.clDecryptdataKeyPub);
}
exports.extractPublicEncryptionKey = extractPublicEncryptionKey;
//# sourceMappingURL=replaykeys.js.map