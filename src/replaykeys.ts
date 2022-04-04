import * as Long from "long";
import { TextEncoder } from "util";
import { CDataGCCStrike15V2MatchInfo } from "./protobufs/cstrike15_gcmessages";

/**
 * Decodes an encryption key encoded as a uint64 into a Uint8Array.
 * @param key Encryption key encoded as a uint64.
 * @returns 16-byte encryption key as a Uint8Array.
 */
export function decodeEncryptionKey(key: Long): Uint8Array {
  return new TextEncoder().encode(
    key.toString(16).padStart(16, "0").toUpperCase()
  );
}

/**
 * Extracts the public encryption key from a matchmaking demo.
 * The return value of this function can be passed into `DemoFile#setEncryptionKey`.
 * @param replayDemInfo Raw byte contents of the `match730_*.dem.info` file.
 */
export function extractPublicEncryptionKey(
  replayDemInfo: Uint8Array
): Uint8Array {
  const matchInfo = CDataGCCStrike15V2MatchInfo.decode(replayDemInfo);
  return decodeEncryptionKey(matchInfo.watchablematchinfo!.clDecryptdataKeyPub);
}
