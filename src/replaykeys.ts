import { TextEncoder } from "util";
import { CDataGCCStrike15V2MatchInfo } from "./protobufs/cstrike15_gcmessages";

/**
 * Extracts the public encryption key from a matchmaking demo.
 * The return value of this function can be passed into `DemoFile#setEncryptionKey`.
 * @param replayDemInfo Raw byte contents of the `match730_*.dem.info` file.
 */
export function extractPublicEncryptionKey(
  replayDemInfo: Uint8Array
): Uint8Array {
  const info = CDataGCCStrike15V2MatchInfo.decode(replayDemInfo);
  return new TextEncoder().encode(
    info.watchablematchinfo!.clDecryptdataKeyPub.toString(16).toUpperCase()
  );
}
