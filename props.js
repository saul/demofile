'use strict';

var _ = require('lodash');
var assert = require('assert');
var Long = require('long');
var bitBuffer = require('./ext/bitbuffer');

const DPT_Int = 0;
const DPT_Float = 1;
const DPT_Vector = 2;
const DPT_VectorXY = 3; // Only encodes the XY of a vector, ignores Z
const DPT_String = 4;
const DPT_Array = 5;	// An array of the base types (can't be of datatables).
const DPT_DataTable = 6;
const DPT_Int64 = 7;

const SPROP_UNSIGNED = (1 << 0); // Unsigned integer data.
const SPROP_COORD = (1 << 1); // If this is set, the float/vector is treated like a world coordinate. Note that the bit count is ignored in this case.
const SPROP_NOSCALE = (1 << 2); // For floating point, don't scale into range, just take value as is.
const SPROP_ROUNDDOWN = (1 << 3); // For floating point, limit high value to range minus one bit unit
const SPROP_ROUNDUP = (1 << 4); // For floating point, limit low value to range minus one bit unit
const SPROP_NORMAL = (1 << 5); // If this is set, the vector is treated like a normal (only valid for vectors)
const SPROP_EXCLUDE = (1 << 6); // This is an exclude prop (not excludED, but it points at another prop to be excluded).
const SPROP_XYZE = (1 << 7); // Use XYZ/Exponent encoding for vectors.
const SPROP_INSIDEARRAY = (1 << 8); // This tells us that the property is inside an array, so it shouldn't be put into the flattened property list. Its array will point at it when it needs to.
const SPROP_PROXY_ALWAYS_YES = (1 << 9); // Set for datatable props using one of the default datatable proxies like SendProxy_DataTableToDataTable that always send the data to all clients.
const SPROP_IS_A_VECTOR_ELEM = (1 << 10); // Set automatically if SPROP_VECTORELEM is used.
const SPROP_COLLAPSIBLE = (1 << 11); // Set automatically if it's a datatable with an offset of 0 that doesn't change the pointer (ie: for all automatically-chained base classes).
const SPROP_COORD_MP = (1 << 12); // Like SPROP_COORD, but special handling for multiplayer games
const SPROP_COORD_MP_LOWPRECISION = (1 << 13); // Like SPROP_COORD, but special handling for multiplayer games where the fractional component only gets a 3 bits instead of 5
const SPROP_COORD_MP_INTEGRAL = (1 << 14); // SPROP_COORD_MP, but coordinates are rounded to integral boundaries
const SPROP_CELL_COORD = (1 << 15); // Like SPROP_COORD, but special encoding for cell coordinates that can't be negative, bit count indicate maximum value
const SPROP_CELL_COORD_LOWPRECISION = (1 << 16); // Like SPROP_CELL_COORD, but special handling where the fractional component only gets a 3 bits instead of 5
const SPROP_CELL_COORD_INTEGRAL = (1 << 17); // SPROP_CELL_COORD, but coordinates are rounded to integral boundaries
const SPROP_CHANGES_OFTEN = (1 << 18); // this is an often changed field, moved to head of sendtable so it gets a small index
const SPROP_VARINT = (1 << 19); // use var int encoded (google protobuf style), note you want to include SPROP_UNSIGNED if needed, its more efficient

const DT_MAX_STRING_BITS = 9;

class PropDecoder {
  constructor(entityBitBuffer, flattenedProp) {
    this.bitbuf = entityBitBuffer;
    this.flattenedProp = flattenedProp;
    this.sendProp = this.flattenedProp.prop;
    this.flags = this.sendProp.flags;
  }

  decode() {
    assert(this.sendProp.type !== DPT_DataTable);

    switch (this.sendProp.type) {
      case DPT_Int:
        return this.intDecode();
      case DPT_Float:
        return this.floatDecode();
      case DPT_Vector:
        return this.vectorDecode();
      case DPT_VectorXY:
        return this.vectorXYDecode();
      case DPT_String:
        return this.stringDecode();
      case DPT_Int64:
        return this.int64Decode();
      case DPT_Array:
        return this.arrayDecode();
      default:
        throw 'Unsupported send prop type';
    }
  }

  intDecode() {
    /*eslint-disable no-unreachable*/

    if ((this.flags & SPROP_VARINT) !== 0) {
      throw 'Not implemented'; // TODO

      if ((this.flags & SPROP_UNSIGNED) !== 0) {
        return this.bitbuf.readVarint32();
      } else {
        return this.bitbuf.readSignedVarint32();
      }
    } else {
      if ((this.flags & SPROP_UNSIGNED) !== 0) {
        if (this.sendProp.numBits === 1) {
          return this.bitbuf.readUBits(1) !== 0;
        } else {
          return this.bitbuf.readUBits(this.sendProp.numBits);
        }
      } else {
        return this.bitbuf.readSBits(this.sendProp.numBits);
      }
    }

    /*eslint-enable no-unreachable*/
  }

  decodeSpecialFloat() {
    if ((this.flags & SPROP_COORD) !== 0) {
      return this.bitbuf.readBitCoord();
    } else if ((this.flags & SPROP_COORD_MP) !== 0) {
      return this.bitbuf.readBitCoordMP(bitBuffer.CW_None);
    } else if ((this.flags & SPROP_COORD_MP_LOWPRECISION) !== 0) {
      return this.bitbuf.readBitCoordMP(bitBuffer.CW_LowPrecision);
    } else if ((this.flags & SPROP_COORD_MP_INTEGRAL) !== 0) {
      return this.bitbuf.readBitCoordMP(bitBuffer.CW_Integral);
    } else if ((this.flags & SPROP_NOSCALE) !== 0) {
      return this.bitbuf.readBitFloat();
    } else if ((this.flags & SPROP_NORMAL) !== 0) {
      return this.bitbuf.readBitNormal();
    } else if ((this.flags & SPROP_CELL_COORD) !== 0) {
      return this.bitbuf.readBitCellCoord(this.sendProp.numBits, bitBuffer.CW_None);
    } else if ((this.flags & SPROP_CELL_COORD_LOWPRECISION) !== 0) {
      return this.bitbuf.readBitCellCoord(this.sendProp.numBits, bitBuffer.CW_LowPrecision);
    } else if ((this.flags & SPROP_CELL_COORD_INTEGRAL) !== 0) {
      return this.bitbuf.readBitCellCoord(this.sendProp.numBits, bitBuffer.CW_Integral);
    }
  }

  floatDecode() {
    var special = this.decodeSpecialFloat();

    if (special !== undefined) {
      return special;
    }

    var interp = this.bitbuf.readUBits(this.sendProp.numBits);

    var fVal = interp / ((1 << this.sendProp.numBits) - 1);
    fVal = this.sendProp.lowValue + (this.sendProp.highValue - this.sendProp.lowValue) * fVal;

    return fVal;
  }

  vectorDecode() {
    var v = {
      x: this.floatDecode(),
      y: this.floatDecode()
    };

    if ((this.flags & SPROP_NORMAL) === 0) {
      v.z = this.floatDecode();
    } else {
      var signBit = this.bitbuf.readOneBit();

      var v0v0v1v1 = v.x * v.x + v.y * v.y;
      if (v0v0v1v1 < 1.0) {
        v.z = Math.sqrt(1.0 - v0v0v1v1);
      } else {
        v.z = 0.0;
      }

      if (signBit) {
        v.z *= -1.0;
      }
    }

    return v;
  }

  vectorXYDecode() {
    return {
      x: this.floatDecode(),
      y: this.floatDecode(),
      z: 0.0
    };
  }

  stringDecode() {
    var len = this.bitbuf.readUBits(DT_MAX_STRING_BITS);
    return this.bitbuf.readString(len);
  }

  int64Decode() {
    if ((this.flags & SPROP_VARINT) !== 0) {
      /*eslint-disable no-unreachable*/
      throw 'Not implemented'; // TODO

      if ((this.flags & SPROP_UNSIGNED) !== 0) {
        return this.bitbuf.readVarint64();
      } else {
        return this.bitbuf.readSignedVarint64();
      }
      /*eslint-enable no-unreachable*/
    } else {
      var highInt = 0;
      var lowInt = 0;
      var neg = false;

      if ((this.flags & SPROP_UNSIGNED) !== 0) {
        lowInt = this.bitbuf.readUBits(32);
        highInt = this.bitbuf.readUBits(this.sendProp.numBits - 32);
      } else {
        neg = this.bitbuf.readOneBit() !== 0;
        lowInt = this.bitbuf.readUBits(32);
        highInt = this.bitbuf.readUBits(this.sendProp.numBits - 32 - 1);
      }

      return Long.fromBits(lowInt, highInt, !neg);
    }
  }

  arrayDecode() {
    var maxElements = this.sendProp.numElements;
    var numBits = Math.ceil(Math.log2(maxElements)) + 1;
    var numElements = this.bitbuf.readUBits(numBits);

    var elements = _.map(_.range(numElements), () => {
      var tempProp = this.flattenedProp.arrayElementProp;

      var decoder = new PropDecoder(this.bitbuf, {prop: tempProp});
      return decoder.decode();
    });

    return elements;
  }
}

module.exports = {
  PropDecoder,
  DPT_Int,
  DPT_Float,
  DPT_Vector,
  DPT_VectorXY,
  DPT_String,
  DPT_Array,
  DPT_DataTable,
  DPT_Int64,
  SPROP_UNSIGNED,
  SPROP_COORD,
  SPROP_NOSCALE,
  SPROP_ROUNDDOWN,
  SPROP_ROUNDUP,
  SPROP_NORMAL,
  SPROP_EXCLUDE,
  SPROP_XYZE,
  SPROP_INSIDEARRAY,
  SPROP_PROXY_ALWAYS_YES,
  SPROP_IS_A_VECTOR_ELEM,
  SPROP_COLLAPSIBLE,
  SPROP_COORD_MP,
  SPROP_COORD_MP_LOWPRECISION,
  SPROP_COORD_MP_INTEGRAL,
  SPROP_CELL_COORD,
  SPROP_CELL_COORD_LOWPRECISION,
  SPROP_CELL_COORD_INTEGRAL,
  SPROP_CHANGES_OFTEN,
  SPROP_VARINT
};
