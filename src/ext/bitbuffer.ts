import * as assert from "assert";
import { BitStream, BitView } from "bit-buffer";
import * as _ from "lodash";

export enum CoordType {
  None = 0,
  LowPrecision = 1,
  Integral = 2
}

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
    writeUInt8(value: number): void;
    writeUInt16(value: number): void;
    writeUInt32(value: number): void;
  }
}

const originalGetBits = BitView.prototype.getBits;

BitView.prototype.getBits = function(this: BitView, offset, bits, signed) {
  if (this.silentOverflow === true) {
    const available = this._view.length * 8 - offset;

    if (bits > available) {
      return 0;
    }
  }

  return originalGetBits.call(this, offset, bits, signed);
};

BitStream.from = function from(array: Uint8Array) {
  return new BitStream(
    array.buffer as ArrayBuffer,
    array.byteOffset,
    array.byteLength
  );
};

BitStream.prototype.readString = function(this: BitStream, bytes: number) {
  return new Array(bytes)
    .fill(0)
    .map(() => String.fromCharCode(this.readUInt8()))
    .join("");
};

BitStream.prototype.readBytes = function(this: BitStream, bytes: number) {
  return Buffer.from(new Array(bytes).fill(0).map(() => this.readUInt8()));
};

BitStream.prototype.readOneBit = function(this: BitStream) {
  return this.readBits(1, false) === 1;
};

BitStream.prototype.readUBits = function(this: BitStream, bits: number) {
  return this.readBits(bits, false);
};

BitStream.prototype.readSBits = function(this: BitStream, bits: number) {
  return this.readBits(bits, true);
};

BitStream.prototype.readUBitVar = function(this: BitStream) {
  let ret = this.readUBits(6);

  switch (ret & (16 | 32)) {
    case 16:
      ret = (ret & 15) | (this.readUBits(4) << 4);
      assert(ret >= 16);
      break;

    case 32:
      ret = (ret & 15) | (this.readUBits(8) << 4);
      assert(ret >= 256);
      break;

    case 48:
      ret = (ret & 15) | (this.readUBits(32 - 4) << 4);
      assert(ret >= 4096);
      break;
  }

  return ret;
};

BitStream.prototype.readBitCoord = function(this: BitStream) {
  let intval = Number(this.readOneBit());
  let fractval = Number(this.readOneBit());

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

BitStream.prototype.readBitCoordMP = function(
  this: BitStream,
  coordType: CoordType
) {
  const inBounds = this.readOneBit();
  let value = 0.0;
  let signbit = false;
  const lowPrecision = coordType === CoordType.LowPrecision;

  if (coordType === CoordType.Integral) {
    const intval = this.readOneBit();

    if (intval) {
      signbit = this.readOneBit();

      if (inBounds) {
        value = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
      } else {
        value = this.readUBits(COORD_INTEGER_BITS) + 1;
      }
    }
  } else {
    let intval = Number(this.readOneBit());
    signbit = this.readOneBit();

    if (intval) {
      if (inBounds) {
        intval = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
      } else {
        intval = this.readUBits(COORD_INTEGER_BITS) + 1;
      }
    }

    const fractval = this.readUBits(
      lowPrecision
        ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION
        : COORD_FRACTIONAL_BITS
    );

    value =
      intval +
      fractval *
        (lowPrecision ? COORD_RESOLUTION_LOWPRECISION : COORD_RESOLUTION);
  }

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitNormal = function(this: BitStream) {
  const signbit = this.readOneBit();

  const fractval = this.readUBits(NORMAL_FRACTIONAL_BITS);

  let value = fractval * NORMAL_RESOLUTION;

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitFloat = function(this: BitStream) {
  return this.readFloat32();
};

BitStream.prototype.readBitCellCoord = function(
  this: BitStream,
  bits,
  coordType
) {
  const lowPrecision = coordType === CoordType.LowPrecision;

  let value;

  if (coordType === CoordType.Integral) {
    value = this.readUBits(bits);
  } else {
    const intval = this.readUBits(bits);

    const fractval = this.readUBits(
      lowPrecision
        ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION
        : COORD_FRACTIONAL_BITS
    );

    value =
      intval +
      fractval *
        (lowPrecision ? COORD_RESOLUTION_LOWPRECISION : COORD_RESOLUTION);
  }

  return value;
};

BitStream.prototype.readCString = BitStream.prototype.readASCIIString;
BitStream.prototype.readUInt8 = BitStream.prototype.readUint8;
BitStream.prototype.readUInt16 = BitStream.prototype.readUint16;
BitStream.prototype.readUInt32 = BitStream.prototype.readUint32;
BitStream.prototype.writeUInt8 = BitStream.prototype.writeUint8;
BitStream.prototype.writeUInt16 = BitStream.prototype.writeUint16;
BitStream.prototype.writeUInt32 = BitStream.prototype.writeUint32;

export { BitStream, BitView };
