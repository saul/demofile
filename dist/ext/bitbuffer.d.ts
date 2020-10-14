/// <reference types="node" />
import { BitStream, BitView } from "bit-buffer";
export declare enum CoordType {
    None = 0,
    LowPrecision = 1,
    Integral = 2
}
declare module "bit-buffer" {
    interface BitView {
        silentOverflow: boolean;
        _view: Uint8Array;
    }
    interface BitStream {
        readString(bytes: number): string;
        readBytes(bytes: number): Buffer;
        readOneBit(): boolean;
        readUBits(bits: number): number;
        readSBits(bits: number): number;
        readUBitVar(): number;
        readBitCoord(): number;
        readBitCoordMP(coordType: CoordType): number;
        readBitNormal(): number;
        readBitFloat(): number;
        readBitCellCoord(bits: number, coordType: CoordType): number;
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
