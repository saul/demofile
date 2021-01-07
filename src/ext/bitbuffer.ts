import * as assert from "assert";
import { BitStream, BitView } from "bit-buffer";
import * as _ from "lodash";

const COORD_INTEGER_BITS = 14;
const COORD_FRACTIONAL_BITS = 5;
const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

// Special threshold for networking multiplayer origins
const COORD_INTEGER_BITS_MP = 11;
const COORD_FRACTIONAL_BITS_MP_LOWPRECISION = 3;
const COORD_DENOMINATOR_LOWPRECISION =
  1 << COORD_FRACTIONAL_BITS_MP_LOWPRECISION;
const COORD_RESOLUTION_LOWPRECISION = 1.0 / COORD_DENOMINATOR_LOWPRECISION;

const NORMAL_FRACTIONAL_BITS = 11;
const NORMAL_DENOMINATOR = (1 << NORMAL_FRACTIONAL_BITS) - 1;
const NORMAL_RESOLUTION = 1.0 / NORMAL_DENOMINATOR;

const MAX_VAR_INT32_BYTES = 5;

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

BitStream.from = function from(array: Uint8Array) {
  return new BitStream(
    array.buffer as ArrayBuffer,
    array.byteOffset,
    array.byteLength
  );
};

BitStream.prototype.readString = function (this: BitStream, bytes: number) {
  return new Array(bytes)
    .fill(0)
    .map(() => String.fromCharCode(this.readUInt8()))
    .join("");
};

BitStream.prototype.readBytes = function (this: BitStream, bytes: number) {
  const arr = new Array(bytes);
  for (let i = 0; i < bytes; ++i) {
    arr[i] = this.readUInt8();
  }
  return Buffer.from(arr);
};

BitStream.prototype.readOneBit = function (this: BitStream) {
  return this.readBits(1, false) === 1;
};

BitStream.prototype.readUBits = BitStream.prototype.readBits as (
  bits: number
) => number;

BitStream.prototype.readSBits = function (this: BitStream, bits: number) {
  return this.readBits(bits, true);
};

BitStream.prototype.readUBitVar = function (this: BitStream) {
  let ret = this.readUBits(6);

  switch (ret & (16 | 32)) {
    case 16:
      ret = (ret & 15) | (this.readUBits(4) << 4);
      break;

    case 32:
      ret = (ret & 15) | (this.readUBits(8) << 4);
      break;

    case 48:
      ret = (ret & 15) | (this.readUBits(32 - 4) << 4);
      break;
  }

  return ret;
};

BitStream.prototype.readBitCoord = function (this: BitStream) {
  let intval = this.readOneBit() ? 1 : 0;
  let fractval = this.readOneBit() ? 1 : 0;

  if (!intval && !fractval) {
    return 0.0;
  }

  const signbit = this.readOneBit();

  if (intval) {
    intval = this.readUBits(COORD_INTEGER_BITS) + 1;
  }

  if (fractval) {
    fractval = this.readUBits(COORD_FRACTIONAL_BITS);
  }

  let value = intval + fractval * COORD_RESOLUTION;

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readUVarInt32 = function (this: BitStream) {
  let result = 0;
  let count = 0;
  let bytes: number;

  do {
    if (count === MAX_VAR_INT32_BYTES) {
      return result;
    }
    bytes = this.readUInt8();
    result |= (bytes & 0x7f) << (7 * count);
    ++count;
  } while (bytes & 0x80);

  return result;
};

BitStream.prototype.readVarInt32 = function (this: BitStream) {
  const result = this.readUVarInt32();
  return (result >> 1) ^ -(result & 1);
};

BitStream.prototype.readBitCoordMPNone = function (this: BitStream) {
  const inBounds = this.readOneBit();
  let intval = this.readOneBit() ? 1 : 0;
  const signbit = this.readOneBit();

  if (intval) {
    if (inBounds) {
      intval = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
    } else {
      intval = this.readUBits(COORD_INTEGER_BITS) + 1;
    }
  }

  const fractval = this.readUBits(COORD_FRACTIONAL_BITS);

  let value = intval + fractval * COORD_RESOLUTION;

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitCoordMPLowPrecision = function (this: BitStream) {
  const inBounds = this.readOneBit();
  let intval = this.readOneBit() ? 1 : 0;
  const signbit = this.readOneBit();

  if (intval) {
    if (inBounds) {
      intval = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
    } else {
      intval = this.readUBits(COORD_INTEGER_BITS) + 1;
    }
  }

  const fractval = this.readUBits(COORD_FRACTIONAL_BITS_MP_LOWPRECISION);

  let value = intval + fractval * COORD_RESOLUTION_LOWPRECISION;

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitCoordMPIntegral = function (this: BitStream) {
  const inBounds = this.readOneBit();
  if (!this.readOneBit()) {
    return 0.0;
  }

  const signbit = this.readOneBit();

  let value;
  if (inBounds) {
    value = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
  } else {
    value = this.readUBits(COORD_INTEGER_BITS) + 1;
  }

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitNormal = function (this: BitStream) {
  const signbit = this.readOneBit();

  const fractval = this.readUBits(NORMAL_FRACTIONAL_BITS);

  let value = fractval * NORMAL_RESOLUTION;

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitCellCoordNone = function (this: BitStream, bits) {
  const intval = this.readUBits(bits);
  const fractval = this.readUBits(COORD_FRACTIONAL_BITS);
  return intval + fractval * COORD_RESOLUTION;
};

BitStream.prototype.readBitCellCoordLowPrecision = function (
  this: BitStream,
  bits
) {
  const intval = this.readUBits(bits);
  const fractval = this.readUBits(COORD_FRACTIONAL_BITS_MP_LOWPRECISION);
  return intval + fractval * COORD_RESOLUTION_LOWPRECISION;
};

BitStream.prototype.readBitCellCoordIntegral = function (
  this: BitStream,
  bits
) {
  return this.readUBits(bits);
};

BitStream.prototype.readCString = function (this: BitStream) {
  let s = "";

  while (true) {
    const c = this.readUint8();

    // Stop appending chars once we hit 0x00
    if (c === 0x00) {
      break;
    }

    s += String.fromCharCode(c);
  }

  return s;
};

BitStream.prototype.readUInt8 = BitStream.prototype.readUint8;
BitStream.prototype.readUInt16 = BitStream.prototype.readUint16;
BitStream.prototype.readUInt32 = BitStream.prototype.readUint32;
BitStream.prototype.writeUInt8 = BitStream.prototype.writeUint8;
BitStream.prototype.writeUInt16 = BitStream.prototype.writeUint16;
BitStream.prototype.writeUInt32 = BitStream.prototype.writeUint32;

export { BitStream, BitView };
