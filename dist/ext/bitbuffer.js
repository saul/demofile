"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitView = exports.BitStream = void 0;
const bit_buffer_1 = require("bit-buffer");
Object.defineProperty(exports, "BitStream", { enumerable: true, get: function () { return bit_buffer_1.BitStream; } });
Object.defineProperty(exports, "BitView", { enumerable: true, get: function () { return bit_buffer_1.BitView; } });
const COORD_INTEGER_BITS = 14;
const COORD_FRACTIONAL_BITS = 5;
const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;
// Special threshold for networking multiplayer origins
const COORD_INTEGER_BITS_MP = 11;
const COORD_FRACTIONAL_BITS_MP_LOWPRECISION = 3;
const COORD_DENOMINATOR_LOWPRECISION = 1 << COORD_FRACTIONAL_BITS_MP_LOWPRECISION;
const COORD_RESOLUTION_LOWPRECISION = 1.0 / COORD_DENOMINATOR_LOWPRECISION;
const NORMAL_FRACTIONAL_BITS = 11;
const NORMAL_DENOMINATOR = (1 << NORMAL_FRACTIONAL_BITS) - 1;
const NORMAL_RESOLUTION = 1.0 / NORMAL_DENOMINATOR;
const MAX_VAR_INT32_BYTES = 5;
bit_buffer_1.BitStream.from = function from(array) {
    return new bit_buffer_1.BitStream(array.buffer, array.byteOffset, array.byteLength);
};
bit_buffer_1.BitStream.prototype.readString = function (bytes) {
    let s = "";
    let record = true;
    for (let i = 0; i < bytes; ++i) {
        const c = this.readUint8();
        // Stop appending chars once we hit 0x00
        if (c === 0x00) {
            record = false;
        }
        else if (record) {
            s += String.fromCharCode(c);
        }
    }
    return s;
};
bit_buffer_1.BitStream.prototype.readBytes = function (bytes) {
    const arr = new Array(bytes);
    for (let i = 0; i < bytes; ++i) {
        arr[i] = this.readUInt8();
    }
    return Buffer.from(arr);
};
bit_buffer_1.BitStream.prototype.readOneBit = function () {
    return this.readBits(1, false) === 1;
};
bit_buffer_1.BitStream.prototype.readUBits = bit_buffer_1.BitStream.prototype.readBits;
bit_buffer_1.BitStream.prototype.readSBits = function (bits) {
    return this.readBits(bits, true);
};
bit_buffer_1.BitStream.prototype.readUBitVar = function () {
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
bit_buffer_1.BitStream.prototype.readBitCoord = function () {
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
bit_buffer_1.BitStream.prototype.readUVarInt32 = function () {
    let result = 0;
    let count = 0;
    let bytes;
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
bit_buffer_1.BitStream.prototype.readVarInt32 = function () {
    const result = this.readUVarInt32();
    return (result >> 1) ^ -(result & 1);
};
bit_buffer_1.BitStream.prototype.readBitCoordMPNone = function () {
    const inBounds = this.readOneBit();
    let intval = this.readOneBit() ? 1 : 0;
    const signbit = this.readOneBit();
    if (intval) {
        if (inBounds) {
            intval = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
        }
        else {
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
bit_buffer_1.BitStream.prototype.readBitCoordMPLowPrecision = function () {
    const inBounds = this.readOneBit();
    let intval = this.readOneBit() ? 1 : 0;
    const signbit = this.readOneBit();
    if (intval) {
        if (inBounds) {
            intval = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
        }
        else {
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
bit_buffer_1.BitStream.prototype.readBitCoordMPIntegral = function () {
    const inBounds = this.readOneBit();
    if (!this.readOneBit()) {
        return 0.0;
    }
    const signbit = this.readOneBit();
    let value;
    if (inBounds) {
        value = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
    }
    else {
        value = this.readUBits(COORD_INTEGER_BITS) + 1;
    }
    if (signbit) {
        value = -value;
    }
    return value;
};
bit_buffer_1.BitStream.prototype.readBitNormal = function () {
    const signbit = this.readOneBit();
    const fractval = this.readUBits(NORMAL_FRACTIONAL_BITS);
    let value = fractval * NORMAL_RESOLUTION;
    if (signbit) {
        value = -value;
    }
    return value;
};
bit_buffer_1.BitStream.prototype.readBitCellCoordNone = function (bits) {
    const intval = this.readUBits(bits);
    const fractval = this.readUBits(COORD_FRACTIONAL_BITS);
    return intval + fractval * COORD_RESOLUTION;
};
bit_buffer_1.BitStream.prototype.readBitCellCoordLowPrecision = function (bits) {
    const intval = this.readUBits(bits);
    const fractval = this.readUBits(COORD_FRACTIONAL_BITS_MP_LOWPRECISION);
    return intval + fractval * COORD_RESOLUTION_LOWPRECISION;
};
bit_buffer_1.BitStream.prototype.readBitCellCoordIntegral = function (bits) {
    return this.readUBits(bits);
};
bit_buffer_1.BitStream.prototype.readCString = function () {
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
bit_buffer_1.BitStream.prototype.readUInt8 = bit_buffer_1.BitStream.prototype.readUint8;
bit_buffer_1.BitStream.prototype.readUInt16 = bit_buffer_1.BitStream.prototype.readUint16;
bit_buffer_1.BitStream.prototype.readUInt32 = bit_buffer_1.BitStream.prototype.readUint32;
bit_buffer_1.BitStream.prototype.writeUInt8 = bit_buffer_1.BitStream.prototype.writeUint8;
bit_buffer_1.BitStream.prototype.writeUInt16 = bit_buffer_1.BitStream.prototype.writeUint16;
bit_buffer_1.BitStream.prototype.writeUInt32 = bit_buffer_1.BitStream.prototype.writeUint32;
//# sourceMappingURL=bitbuffer.js.map