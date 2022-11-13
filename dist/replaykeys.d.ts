import * as Long from "long";
/**
 * Decodes an encryption key encoded as a uint64 into a Uint8Array.
 * @param key Encryption key encoded as a uint64.
 * @returns 16-byte encryption key as a Uint8Array.
 */
export declare function decodeEncryptionKey(key: Long): Uint8Array;
/**
 * Extracts the public encryption key from a matchmaking demo.
 * The return value of this function can be passed into `DemoFile#setEncryptionKey`.
 * @param replayDemInfo Raw byte contents of the `match730_*.dem.info` file.
 */
export declare function extractPublicEncryptionKey(replayDemInfo: Uint8Array): Uint8Array;
