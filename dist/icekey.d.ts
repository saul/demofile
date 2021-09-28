export declare class IceKey {
    private static spBox;
    private static spBoxInitialised;
    private static sMod;
    private static sXor;
    private static pBox;
    private static keyrot;
    private size;
    private rounds;
    private keySchedule;
    private cipherHolder;
    private plainHolder;
    constructor(level: number);
    keySize(): number;
    blockSize(): number;
    set(key: Uint8Array): void;
    clear(): void;
    encrypt(plaintext: Uint8Array, ciphertext: Uint8Array): void;
    decrypt(ciphertext: Uint8Array, plaintext: Uint8Array): void;
    decryptUint8Array(cipherArray: Uint8Array, plainArray: Uint8Array, from?: number, to?: number): void;
    private gf_mult;
    private gf_exp7;
    private perm32;
    private spBoxInit;
    private scheduleBuild;
    private roundFunc;
}
