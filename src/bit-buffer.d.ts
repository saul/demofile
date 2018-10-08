declare module "bit-buffer" {
  export class BitView {
    readonly buffer: ArrayBuffer;

    constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);

    /**
     * Reads `bits` number of bits starting at `offset`, twiddling the bits appropriately to return a proper 32-bit signed or unsigned value.
     * NOTE: While JavaScript numbers are 64-bit floating-point values, we don't bother with anything other than the first 32 bits.
     */
    getBits(offset: number, bits: number, signed: boolean): number;

    getInt8(offset: number): number;
    getUint8(offset: number): number;
    getInt16(offset: number): number;
    getUint16(offset: number): number;
    getInt32(offset: number): number;
    getUint32(offset: number): number;
    getFloat32(offset: number): number;
    getFloat64(offset: number): number;

    /**
     * Set `bits` number of bits at `offset`.
     */
    setBits(offset: number, value: number, bits: number): void;

    setInt8(offset: number, value: number): number;
    setUint8(offset: number, value: number): number;
    setInt16(offset: number, value: number): number;
    setUint16(offset: number, value: number): number;
    setInt32(offset: number, value: number): number;
    setUint32(offset: number, value: number): number;
    setFloat32(offset: number, value: number): number;
    setFloat64(offset: number, value: number): number;
  }

  export class BitStream {
    /**
     * Get/set the current index in bytes
     */
    byteIndex: number;

    /**
     * Underlying BitView
     */
    readonly view: BitView;

    /**
     * Get the length of the stream in bits
     */
    readonly length: number;

    /**
     * The number of bits left in the stream
     */
    readonly bitsLeft: number;

    /**
     * Get/set the current index in bits
     */
    index: number;

    // Defined by ext/bitbuffer.ts
    static from: (array: Uint8Array) => BitStream;

    constructor(
      view: BitView | ArrayBuffer | Buffer,
      byteOffset?: number,
      byteLength?: number
    );
    readBits(bits: number, signed: boolean): number;
    writeBits(value: number, bits: number): void;
    readUint8(): number;
    readUint16(): number;
    readUint32(): number;
    readInt8(): number;
    readInt16(): number;
    readInt32(): number;
    writeUint8(value: number): void;
    writeUint16(value: number): void;
    writeUint32(value: number): void;
    writeInt8(value: number): void;
    writeInt16(value: number): void;
    writeInt32(value: number): void;
    readFloat32(): number;
    readFloat64(): number;
    writeFloat32(value: number): void;
    writeFloat64(value: number): void;
    readBoolean(): boolean;
    writeBoolean(value: boolean): void;
    readASCIIString(maxLength?: number): string;
    readUTF8String(maxLength?: number): string;
    writeASCIIString(string: string, maxLength?: number): string;
    writeUTF8String(string: string, maxLength?: number): string;
    readBitStream(length: number): BitStream;
    readArrayBuffer(length: number): ArrayBuffer;
  }
}
