'use strict';

var _ = require('lodash');
var assert = require('assert');
var bitBuffer = require('bit-buffer');

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

bitBuffer.BitStream.prototype.readCString = bitBuffer.BitStream.prototype.readASCIIString;
bitBuffer.BitStream.prototype.readUInt8 = bitBuffer.BitStream.prototype.readUint8;
bitBuffer.BitStream.prototype.readUInt16 = bitBuffer.BitStream.prototype.readUint16;
bitBuffer.BitStream.prototype.readUInt32 = bitBuffer.BitStream.prototype.readUint32;
bitBuffer.BitStream.prototype.writeUInt8 = bitBuffer.BitStream.prototype.writeUint8;
bitBuffer.BitStream.prototype.writeUInt16 = bitBuffer.BitStream.prototype.writeUint16;
bitBuffer.BitStream.prototype.writeUInt32 = bitBuffer.BitStream.prototype.writeUint32;

module.exports = bitBuffer;
