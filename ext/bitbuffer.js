'use strict';

var _ = require('lodash');
var assert = require('assert');
var bitBuffer = require('bit-buffer');

const CW_None = 0;
const CW_LowPrecision = 1;
const CW_Integral = 2;

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


var originalGetBits = bitBuffer.BitView.prototype.getBits;

bitBuffer.BitView.prototype.getBits = function (offset, bits, signed) {
  if (this.silentOverflow === true) {
    var available = (this._view.length * 8 - offset);

    if (bits > available) {
      return 0;
    }
  }

  return originalGetBits.call(this, offset, bits, signed);
};

bitBuffer.BitStream.prototype.readString = function (bytes) {
  return _.map(new Array(bytes), () => String.fromCharCode(this.readUInt8())).join('');
};

bitBuffer.BitStream.prototype.readBytes = function (bytes) {
  return new Buffer(_.map(_.range(bytes), () => this.readUInt8()));
};

bitBuffer.BitStream.prototype.readOneBit = function () {
  return this.readBits(1, false);
};

bitBuffer.BitStream.prototype.readUBits = function (bits) {
  return this.readBits(bits, false);
};

bitBuffer.BitStream.prototype.readSBits = function (bits) {
  return this.readBits(bits, true);
};

bitBuffer.BitStream.prototype.readUBitVar = function () {
  var ret = this.readUBits(6);

  switch (ret & ( 16 | 32 )) {
    case 16:
      ret = ( ret & 15 ) | ( this.readUBits(4) << 4 );
      assert(ret >= 16);
      break;

    case 32:
      ret = ( ret & 15 ) | ( this.readUBits(8) << 4 );
      assert(ret >= 256);
      break;

    case 48:
      ret = ( ret & 15 ) | ( this.readUBits(32 - 4) << 4 );
      assert(ret >= 4096);
      break;
  }

  return ret;
};

bitBuffer.BitStream.prototype.readBitCoord = function () {
  var intval = this.readOneBit();
  var fractval = this.readOneBit();

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

bitBuffer.BitStream.prototype.readBitCoordMP = function (coordType) {
  var inBounds = this.readOneBit();
  var value = 0.0;
  var signbit = false;
  var lowPrecision = coordType === CW_LowPrecision;

  if (coordType === CW_Integral) {
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
    let intval = this.readOneBit();
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

bitBuffer.BitStream.prototype.readBitNormal = function () {
  var signbit = this.readOneBit();

  var fractval = this.readUBits(NORMAL_FRACTIONAL_BITS);

  var value = fractval * NORMAL_RESOLUTION;

  if (signbit) {
    value = -value;
  }

  return value;
};

bitBuffer.BitStream.prototype.readBitFloat = function () {
  return this.readFloat32();
};

bitBuffer.BitStream.prototype.readBitCellCoord = function (bits, coordType) {
  var lowPrecision = coordType === CW_LowPrecision;

  var value = 0.0;

  if (coordType === CW_Integral) {
    value = this.readUBits(bits);
  } else {
    var intval = this.readUBits(bits);

    var fractval = this.readUBits(lowPrecision ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION : COORD_FRACTIONAL_BITS);

    value = intval + (fractval * (lowPrecision ? COORD_RESOLUTION_LOWPRECISION : COORD_RESOLUTION));
  }

  return value;
};

bitBuffer.BitStream.prototype.readCString = bitBuffer.BitStream.prototype.readASCIIString;
bitBuffer.BitStream.prototype.readUInt8 = bitBuffer.BitStream.prototype.readUint8;
bitBuffer.BitStream.prototype.readUInt16 = bitBuffer.BitStream.prototype.readUint16;
bitBuffer.BitStream.prototype.readUInt32 = bitBuffer.BitStream.prototype.readUint32;
bitBuffer.BitStream.prototype.writeUInt8 = bitBuffer.BitStream.prototype.writeUint8;
bitBuffer.BitStream.prototype.writeUInt16 = bitBuffer.BitStream.prototype.writeUint16;
bitBuffer.BitStream.prototype.writeUInt32 = bitBuffer.BitStream.prototype.writeUint32;

module.exports = {
  BitView: bitBuffer.BitView,
  BitStream: bitBuffer.BitStream,
  CW_None,
  CW_LowPrecision,
  CW_Integral
};
