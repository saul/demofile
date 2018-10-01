import * as _ from 'lodash';
import * as assert from 'assert';
import { BitView, BitStream } from 'bit-buffer';

export enum CoordType {
  None = 0,
  LowPrecision = 1,
  Integral = 2
}

const COORD_INTEGER_BITS = 14;
const COORD_FRACTIONAL_BITS = 5;
const COORD_DENOMINATOR = (1 << COORD_FRACTIONAL_BITS);
const COORD_RESOLUTION = (1.0 / COORD_DENOMINATOR);

// Special threshold for networking multiplayer origins
const COORD_INTEGER_BITS_MP = 11;
const COORD_FRACTIONAL_BITS_MP_LOWPRECISION = 3;
const COORD_DENOMINATOR_LOWPRECISION = (1 << COORD_FRACTIONAL_BITS_MP_LOWPRECISION);
const COORD_RESOLUTION_LOWPRECISION = (1.0 / COORD_DENOMINATOR_LOWPRECISION);

const NORMAL_FRACTIONAL_BITS = 11;
const NORMAL_DENOMINATOR = (1 << NORMAL_FRACTIONAL_BITS) - 1;
const NORMAL_RESOLUTION = (1.0 / NORMAL_DENOMINATOR);

declare module 'bit-buffer' {
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

var originalGetBits = BitView.prototype.getBits;

BitView.prototype.getBits = function (offset, bits, signed) {
  if (this.silentOverflow === true) {
    var available = (this._view.length * 8 - offset);

    if (bits > available) {
      return 0;
    }
  }

  return originalGetBits.call(this, offset, bits, signed);
};

BitStream.prototype.readString = function (bytes: number) {
  return _.map(new Array(bytes), () => String.fromCharCode(this.readUInt8())).join('');
};

BitStream.prototype.readBytes = function (bytes: number) {
  return new Buffer(_.map(_.range(bytes), () => this.readUInt8()));
};

BitStream.prototype.readOneBit = function () {
  return this.readBits(1, false) === 1;
};

BitStream.prototype.readUBits = function (bits: number) {
  return this.readBits(bits, false);
};

BitStream.prototype.readSBits = function (bits: number) {
  return this.readBits(bits, true);
};

BitStream.prototype.readUBitVar = function () {
  var ret = this.readUBits(6);

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

BitStream.prototype.readBitCoord = function () {
  var intval = Number(this.readOneBit());
  var fractval = Number(this.readOneBit());

  if (!intval && !fractval) {
    return 0.0;
  }

  var signbit = this.readOneBit();

  if (intval) {
    intval = this.readUBits(COORD_INTEGER_BITS) + 1;
  }

  if (fractval) {
    fractval = this.readUBits(COORD_FRACTIONAL_BITS);
  }

  var value = intval + (fractval * COORD_RESOLUTION);

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitCoordMP = function (coordType: CoordType) {
  var inBounds = this.readOneBit();
  var value = 0.0;
  var signbit = false;
  var lowPrecision = coordType === CoordType.LowPrecision;

  if (coordType === CoordType.Integral) {
    let intval = this.readOneBit();

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

    var fractval = this.readUBits(lowPrecision ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION : COORD_FRACTIONAL_BITS);

    value = intval + (fractval * (lowPrecision ? COORD_RESOLUTION_LOWPRECISION : COORD_RESOLUTION));
  }

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitNormal = function () {
  var signbit = this.readOneBit();

  var fractval = this.readUBits(NORMAL_FRACTIONAL_BITS);

  var value = fractval * NORMAL_RESOLUTION;

  if (signbit) {
    value = -value;
  }

  return value;
};

BitStream.prototype.readBitFloat = function () {
  return this.readFloat32();
};

BitStream.prototype.readBitCellCoord = function (bits, coordType) {
  var lowPrecision = coordType === CoordType.LowPrecision;

  var value = 0.0;

  if (coordType === CoordType.Integral) {
    value = this.readUBits(bits);
  } else {
    var intval = this.readUBits(bits);

    var fractval = this.readUBits(lowPrecision ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION : COORD_FRACTIONAL_BITS);

    value = intval + (fractval * (lowPrecision ? COORD_RESOLUTION_LOWPRECISION : COORD_RESOLUTION));
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