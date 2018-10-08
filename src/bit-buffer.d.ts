declare module "bit-buffer" {
  export class BitView {
    public readonly buffer: ArrayBuffer;

    constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);

    /**
     * Reads `bits` number of bits starting at `offset`, twiddling the bits appropriately to return a proper 32-bit signed or unsigned value.
     * NOTE: While JavaScript numbers are 64-bit floating-point values, we don't bother with anything other than the first 32 bits.
     */
    public getBits(offset: number, bits: number, signed: boolean): number;

    public getInt8(offset: number): number;
    public getUint8(offset: number): number;
    public getInt16(offset: number): number;
    public getUint16(offset: number): number;
    public getInt32(offset: number): number;
    public getUint32(offset: number): number;
    public getFloat32(offset: number): number;
    public getFloat64(offset: number): number;

    /**
     * Set `bits` number of bits at `offset`.
     */
    public setBits(offset: number, value: number, bits: number): void;

    public setInt8(offset: number, value: number): number;
    public setUint8(offset: number, value: number): number;
    public setInt16(offset: number, value: number): number;
    public setUint16(offset: number, value: number): number;
    public setInt32(offset: number, value: number): number;
    public setUint32(offset: number, value: number): number;
    public setFloat32(offset: number, value: number): number;
    public setFloat64(offset: number, value: number): number;
  }

  export class BitStream {
    // Defined by ext/bitbuffer.ts
    public static from: (array: Uint8Array) => BitStream;
    /**
     * Get/set the current index in bytes
     */
    public byteIndex: number;

    /**
     * Underlying BitView
     */
    public readonly view: BitView;

    /**
     * Get the length of the stream in bits
     */
    public readonly length: number;

    /**
     * The number of bits left in the stream
     */
    public readonly bitsLeft: number;

    /**
     * Get/set the current index in bits
     */
    public index: number;

    constructor(
      view: BitView | ArrayBuffer | Buffer,
      byteOffset?: number,
      byteLength?: number
    );
    public readBits(bits: number, signed: boolean): number;
    public writeBits(value: number, bits: number): void;
    public readUint8(): number;
    public readUint16(): number;
    public readUint32(): number;
    public readInt8(): number;
    public readInt16(): number;
    public readInt32(): number;
    public writeUint8(value: number): void;
    public writeUint16(value: number): void;
    public writeUint32(value: number): void;
    public writeInt8(value: number): void;
    public writeInt16(value: number): void;
    public writeInt32(value: number): void;
    public readFloat32(): number;
    public readFloat64(): number;
    public writeFloat32(value: number): void;
    public writeFloat64(value: number): void;
    public readBoolean(): boolean;
    public writeBoolean(value: boolean): void;
    public readASCIIString(maxLength?: number): string;
    public readUTF8String(maxLength?: number): string;
    public writeASCIIString(str: string, maxLength?: number): string;
    public writeUTF8String(str: string, maxLength?: number): string;
    public readBitStream(length: number): BitStream;
    public readArrayBuffer(length: number): ArrayBuffer;
  }
}
