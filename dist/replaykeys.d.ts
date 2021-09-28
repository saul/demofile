/**
 * Extracts the public encryption key from a matchmaking demo.
 * The return value of this function can be passed into `DemoFile#setEncryptionKey`.
 * @param replayDemInfo Raw byte contents of the `match730_*.dem.info` file.
 */
export declare function extractPublicEncryptionKey(replayDemInfo: Uint8Array): Uint8Array;
