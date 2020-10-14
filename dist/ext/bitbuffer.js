"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitView = exports.BitStream = exports.CoordType = void 0;
const assert = require("assert");
const bit_buffer_1 = require("bit-buffer");
Object.defineProperty(exports, "BitStream", { enumerable: true, get: function () { return bit_buffer_1.BitStream; } });
Object.defineProperty(exports, "BitView", { enumerable: true, get: function () { return bit_buffer_1.BitView; } });
var CoordType;
(function (CoordType) {
    CoordType[CoordType["None"] = 0] = "None";
    CoordType[CoordType["LowPrecision"] = 1] = "LowPrecision";
    CoordType[CoordType["Integral"] = 2] = "Integral";
})(CoordType = exports.CoordType || (exports.CoordType = {}));
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
const originalGetBits = bit_buffer_1.BitView.prototype.getBits;
bit_buffer_1.BitView.prototype.getBits = function (offset, bits, signed) {
    if (this.silentOverflow === true) {
        const available = this._view.length * 8 - offset;
        if (bits > available) {
            return 0;
        }
    }
    return originalGetBits.call(this, offset, bits, signed);
};
bit_buffer_1.BitStream.from = function from(array) {
    return new bit_buffer_1.BitStream(array.buffer, array.byteOffset, array.byteLength);
};
bit_buffer_1.BitStream.prototype.readString = function (bytes) {
    return new Array(bytes)
        .fill(0)
        .map(() => String.fromCharCode(this.readUInt8()))
        .join("");
};
bit_buffer_1.BitStream.prototype.readBytes = function (bytes) {
    return Buffer.from(new Array(bytes).fill(0).map(() => this.readUInt8()));
};
bit_buffer_1.BitStream.prototype.readOneBit = function () {
    return this.readBits(1, false) === 1;
};
bit_buffer_1.BitStream.prototype.readUBits = function (bits) {
    return this.readBits(bits, false);
};
bit_buffer_1.BitStream.prototype.readSBits = function (bits) {
    return this.readBits(bits, true);
};
bit_buffer_1.BitStream.prototype.readUBitVar = function () {
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
bit_buffer_1.BitStream.prototype.readBitCoord = function () {
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
bit_buffer_1.BitStream.prototype.readBitCoordMP = function (coordType) {
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
            }
            else {
                value = this.readUBits(COORD_INTEGER_BITS) + 1;
            }
        }
    }
    else {
        let intval = Number(this.readOneBit());
        signbit = this.readOneBit();
        if (intval) {
            if (inBounds) {
                intval = this.readUBits(COORD_INTEGER_BITS_MP) + 1;
            }
            else {
                intval = this.readUBits(COORD_INTEGER_BITS) + 1;
            }
        }
        const fractval = this.readUBits(lowPrecision
            ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION
            : COORD_FRACTIONAL_BITS);
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
bit_buffer_1.BitStream.prototype.readBitNormal = function () {
    const signbit = this.readOneBit();
    const fractval = this.readUBits(NORMAL_FRACTIONAL_BITS);
    let value = fractval * NORMAL_RESOLUTION;
    if (signbit) {
        value = -value;
    }
    return value;
};
bit_buffer_1.BitStream.prototype.readBitFloat = function () {
    return this.readFloat32();
};
bit_buffer_1.BitStream.prototype.readBitCellCoord = function (bits, coordType) {
    const lowPrecision = coordType === CoordType.LowPrecision;
    let value;
    if (coordType === CoordType.Integral) {
        value = this.readUBits(bits);
    }
    else {
        const intval = this.readUBits(bits);
        const fractval = this.readUBits(lowPrecision
            ? COORD_FRACTIONAL_BITS_MP_LOWPRECISION
            : COORD_FRACTIONAL_BITS);
        value =
            intval +
                fractval *
                    (lowPrecision ? COORD_RESOLUTION_LOWPRECISION : COORD_RESOLUTION);
    }
    return value;
};
bit_buffer_1.BitStream.prototype.readCString = bit_buffer_1.BitStream.prototype.readASCIIString;
bit_buffer_1.BitStream.prototype.readUInt8 = bit_buffer_1.BitStream.prototype.readUint8;
bit_buffer_1.BitStream.prototype.readUInt16 = bit_buffer_1.BitStream.prototype.readUint16;
bit_buffer_1.BitStream.prototype.readUInt32 = bit_buffer_1.BitStream.prototype.readUint32;
bit_buffer_1.BitStream.prototype.writeUInt8 = bit_buffer_1.BitStream.prototype.writeUint8;
bit_buffer_1.BitStream.prototype.writeUInt16 = bit_buffer_1.BitStream.prototype.writeUint16;
bit_buffer_1.BitStream.prototype.writeUInt32 = bit_buffer_1.BitStream.prototype.writeUint32;
//# sourceMappingURL=bitbuffer.js.map