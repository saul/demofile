import assert = require("assert");
import _ = require("lodash");
import Long = require("long");
import assertExists from "ts-assert-exists";
import { NUM_NETWORKED_EHANDLE_BITS } from "./consts";
import { ISendProp } from "./entities";
import { EntityHandle } from "./entityhandle";
import { BitStream, CoordType } from "./ext/bitbuffer";
import { Vector } from "./sendtabletypes";

export const enum PropType {
  Int = 0,
  Float = 1,
  Vector = 2,
  VectorXY = 3, // Only encodes the XY of a vector, ignores Z
  String = 4,
  Array = 5, // An array of the base types (can't be of datatables).
  DataTable = 6,
  Int64 = 7
}

export const SPROP_UNSIGNED = 1 << 0; // Unsigned integer data.
export const SPROP_COORD = 1 << 1; // If this is set, the float/vector is treated like a world coordinate. Note that the bit count is ignored in this case.
export const SPROP_NOSCALE = 1 << 2; // For floating point, don't scale into range, just take value as is.
export const SPROP_ROUNDDOWN = 1 << 3; // For floating point, limit high value to range minus one bit unit
export const SPROP_ROUNDUP = 1 << 4; // For floating point, limit low value to range minus one bit unit
export const SPROP_NORMAL = 1 << 5; // If this is set, the vector is treated like a normal (only valid for vectors)
export const SPROP_EXCLUDE = 1 << 6; // This is an exclude prop (not excludED, but it points at another prop to be excluded).
export const SPROP_XYZE = 1 << 7; // Use XYZ/Exponent encoding for vectors.
export const SPROP_INSIDEARRAY = 1 << 8; // This tells us that the property is inside an array, so it shouldn't be put into the flattened property list. Its array will point at it when it needs to.
export const SPROP_PROXY_ALWAYS_YES = 1 << 9; // Set for datatable props using one of the default datatable proxies like SendProxy_DataTableToDataTable that always send the data to all clients.
export const SPROP_IS_A_VECTOR_ELEM = 1 << 10; // Set automatically if SPROP_VECTORELEM is used.
export const SPROP_COLLAPSIBLE = 1 << 11; // Set automatically if it's a datatable with an offset of 0 that doesn't change the pointer (ie: for all automatically-chained base classes).
export const SPROP_COORD_MP = 1 << 12; // Like SPROP_COORD, but special handling for multiplayer games
export const SPROP_COORD_MP_LOWPRECISION = 1 << 13; // Like SPROP_COORD, but special handling for multiplayer games where the fractional component only gets a 3 bits instead of 5
export const SPROP_COORD_MP_INTEGRAL = 1 << 14; // SPROP_COORD_MP, but coordinates are rounded to integral boundaries
export const SPROP_CELL_COORD = 1 << 15; // Like SPROP_COORD, but special encoding for cell coordinates that can't be negative, bit count indicate maximum value
export const SPROP_CELL_COORD_LOWPRECISION = 1 << 16; // Like SPROP_CELL_COORD, but special handling where the fractional component only gets a 3 bits instead of 5
export const SPROP_CELL_COORD_INTEGRAL = 1 << 17; // SPROP_CELL_COORD, but coordinates are rounded to integral boundaries
export const SPROP_CHANGES_OFTEN = 1 << 18; // this is an often changed field, moved to head of sendtable so it gets a small index
export const SPROP_VARINT = 1 << 19; // use var int encoded (google protobuf style), note you want to include SPROP_UNSIGNED if needed, its more efficient

const DT_MAX_STRING_BITS = 9;

export type PropPrimitive =
  | string
  | number
  | boolean
  | Long
  | Vector
  | EntityHandle;
export type PropValue = PropPrimitive | PropPrimitive[];

export function makeDecoder(
  sendProp: ISendProp,
  arrayElementProp: ISendProp | undefined
): (bitbuf: BitStream) => PropValue {
  const type = sendProp.type as PropType;
  assert(type !== PropType.DataTable);

  if (type === PropType.Array) {
    return makeArrayDecoder(
      sendProp,
      assertExists(arrayElementProp, "array prop with no element prop")
    );
  } else {
    return makeValueDecoder(sendProp);
  }
}

function makeValueDecoder(
  sendProp: ISendProp
): (bitbuf: BitStream) => PropPrimitive {
  switch (sendProp.type as PropType) {
    case PropType.Int:
      return makeIntDecoder(sendProp);
    case PropType.Float:
      return makeFloatDecoder(sendProp);
    case PropType.Vector:
      return makeVectorDecoder(sendProp);
    case PropType.VectorXY:
      return makeVectorXYDecoder(sendProp);
    case PropType.String:
      return makeStringDecoder(sendProp);
    case PropType.Int64:
      return makeInt64Decoder(sendProp);
    default:
      throw new Error(`Unsupported send prop type ${sendProp.type}`);
  }
}

function makeIntDecoder(
  sendProp: ISendProp
): (bitbuf: BitStream) => number | EntityHandle | boolean {
  if ((sendProp.flags & SPROP_VARINT) !== 0) {
    /*eslint-disable no-unreachable*/
    if ((sendProp.flags & SPROP_UNSIGNED) !== 0) {
      throw new Error("32-bit unsigned varints not implemented"); // TODO
    } else {
      throw new Error("32-bit signed varints not implemented"); // TODO
    }
    /*eslint-enable no-unreachable*/
  } else {
    const numBits = sendProp.numBits;
    if ((sendProp.flags & SPROP_UNSIGNED) !== 0) {
      if (
        (sendProp.flags & SPROP_NOSCALE) !== 0 &&
        sendProp.numBits === NUM_NETWORKED_EHANDLE_BITS
      ) {
        return bitbuf => new EntityHandle(bitbuf.readUBits(numBits));
      } else if (numBits === 1) {
        return bitbuf => bitbuf.readOneBit();
      } else {
        return bitbuf => bitbuf.readUBits(numBits);
      }
    } else {
      return bitbuf => bitbuf.readSBits(numBits);
    }
  }
}

function makeSpecialFloatDecoder(
  sendProp: ISendProp
): ((bitbuf: BitStream) => number) | undefined {
  if ((sendProp.flags & SPROP_COORD) !== 0) {
    return bitbuf => bitbuf.readBitCoord();
  } else if ((sendProp.flags & SPROP_COORD_MP) !== 0) {
    return bitbuf => bitbuf.readBitCoordMP(CoordType.None);
  } else if ((sendProp.flags & SPROP_COORD_MP_LOWPRECISION) !== 0) {
    return bitbuf => bitbuf.readBitCoordMP(CoordType.LowPrecision);
  } else if ((sendProp.flags & SPROP_COORD_MP_INTEGRAL) !== 0) {
    return bitbuf => bitbuf.readBitCoordMP(CoordType.Integral);
  } else if ((sendProp.flags & SPROP_NOSCALE) !== 0) {
    return bitbuf => bitbuf.readBitFloat();
  } else if ((sendProp.flags & SPROP_NORMAL) !== 0) {
    return bitbuf => bitbuf.readBitNormal();
  } else if ((sendProp.flags & SPROP_CELL_COORD) !== 0) {
    return bitbuf => bitbuf.readBitCellCoord(sendProp.numBits, CoordType.None);
  } else if ((sendProp.flags & SPROP_CELL_COORD_LOWPRECISION) !== 0) {
    return bitbuf =>
      bitbuf.readBitCellCoord(sendProp.numBits, CoordType.LowPrecision);
  } else if ((sendProp.flags & SPROP_CELL_COORD_INTEGRAL) !== 0) {
    return bitbuf =>
      bitbuf.readBitCellCoord(sendProp.numBits, CoordType.Integral);
  } else {
    return undefined;
  }
}

function makeFloatDecoder(sendProp: ISendProp): (bitbuf: BitStream) => number {
  const special = makeSpecialFloatDecoder(sendProp);

  if (special !== undefined) {
    return special;
  }

  const numBits = sendProp.numBits;
  const lowValue = sendProp.lowValue;
  const highValue = sendProp.lowValue;

  return bitbuf => {
    const interp = bitbuf.readUBits(numBits);
    const fVal = interp / ((1 << numBits) - 1);
    return lowValue + (highValue - lowValue) * fVal;
  };
}

function makeVectorDecoder(sendProp: ISendProp): (bitbuf: BitStream) => Vector {
  const floatDecode = makeFloatDecoder(sendProp);
  const isNormal = (sendProp.flags & SPROP_NORMAL) !== 0;

  return bitbuf => {
    const v = {
      x: floatDecode(bitbuf),
      y: floatDecode(bitbuf),
      z: 0.0
    };

    if (isNormal) {
      const signBit = bitbuf.readOneBit();

      const v0v0v1v1 = v.x * v.x + v.y * v.y;
      if (v0v0v1v1 < 1.0) {
        v.z = Math.sqrt(1.0 - v0v0v1v1);
      } else {
        v.z = 0.0;
      }

      if (signBit) {
        v.z *= -1.0;
      }
    } else {
      v.z = floatDecode(bitbuf);
    }

    return v;
  };
}

function makeVectorXYDecoder(
  sendProp: ISendProp
): (bitbuf: BitStream) => Vector {
  const floatDecode = makeFloatDecoder(sendProp);

  return bitbuf => ({
    x: floatDecode(bitbuf),
    y: floatDecode(bitbuf),
    z: 0.0
  });
}

function makeStringDecoder(
  _sendProp: ISendProp
): (bitbuf: BitStream) => string {
  return bitbuf => {
    const len = bitbuf.readUBits(DT_MAX_STRING_BITS);
    return bitbuf.readString(len);
  };
}

function makeInt64Decoder(sendProp: ISendProp): (bitbuf: BitStream) => Long {
  if ((sendProp.flags & SPROP_VARINT) !== 0) {
    /*eslint-disable no-unreachable*/
    if ((sendProp.flags & SPROP_UNSIGNED) !== 0) {
      throw new Error("64-bit unsigned varint not implemented"); // TODO
    } else {
      throw new Error("64-bit signed varint not implemented"); // TODO
    }
    /*eslint-enable no-unreachable*/
  } else {
    const highBits = sendProp.numBits - 32;

    if ((sendProp.flags & SPROP_UNSIGNED) !== 0) {
      return bitbuf => {
        const lowInt = bitbuf.readUBits(32);
        const highInt = bitbuf.readUBits(highBits);
        return Long.fromBits(lowInt, highInt, false);
      };
    } else {
      return bitbuf => {
        const neg = bitbuf.readOneBit();
        const lowInt = bitbuf.readUBits(32);
        const highInt = bitbuf.readUBits(highBits - 1);
        return Long.fromBits(lowInt, highInt, !neg);
      };
    }
  }
}

function makeArrayDecoder(
  sendProp: ISendProp,
  arrayElementProp: ISendProp
): (bitbuf: BitStream) => PropPrimitive[] {
  const maxElements = sendProp.numElements;
  const numBits = Math.floor(Math.log2(maxElements)) + 1;
  const elementDecoder = makeValueDecoder(arrayElementProp);

  return bitbuf => {
    const numElements = bitbuf.readUBits(numBits);
    return new Array(numElements).fill(0).map(() => elementDecoder(bitbuf));
  };
}
