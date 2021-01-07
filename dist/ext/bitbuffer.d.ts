/// <reference types="node" />
import { BitStream, BitView } from "bit-buffer";
declare module "bit-buffer" {
    interface BitStream {
        readString(bytes: number): string;
        readBytes(bytes: number): Buffer;
        readOneBit(): boolean;
        readUBits(bits: number): number;
        readSBits(bits: number): number;
        readUBitVar(): number;
        readBitCoord(): number;
        readBitCoordMPNone(): number;
        readBitCoordMPLowPrecision(): number;
        readBitCoordMPIntegral(): number;
        readBitNormal(): number;
        readBitCellCoordNone(bits: number): number;
        readBitCellCoordLowPrecision(bits: number): number;
        readBitCellCoordIntegral(bits: number): number;
        readCString(): string;
        readUInt8(): number;
        readUInt16(): number;
        readUInt32(): number;
        readUVarInt32(): number;
        readVarInt32(): number;
        writeUInt8(value: number): void;
        writeUInt16(value: number): void;
        writeUInt32(value: number): void;
    }
}
export { BitStream, BitView };
