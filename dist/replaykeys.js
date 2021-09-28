"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPublicEncryptionKey = void 0;
const util_1 = require("util");
const cstrike15_gcmessages_1 = require("./protobufs/cstrike15_gcmessages");
/**
 * Extracts the public encryption key from a matchmaking demo.
 * The return value of this function can be passed into `DemoFile#setEncryptionKey`.
 * @param replayDemInfo Raw byte contents of the `match730_*.dem.info` file.
 */
function extractPublicEncryptionKey(replayDemInfo) {
    const info = cstrike15_gcmessages_1.CDataGCCStrike15V2MatchInfo.decode(replayDemInfo);
    return new util_1.TextEncoder().encode(info.watchablematchinfo.clDecryptdataKeyPub.toString(16).toUpperCase());
}
exports.extractPublicEncryptionKey = extractPublicEncryptionKey;
//# sourceMappingURL=replaykeys.js.map