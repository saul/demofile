"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDecoder = exports.SPROP_VARINT = exports.SPROP_CHANGES_OFTEN = exports.SPROP_CELL_COORD_INTEGRAL = exports.SPROP_CELL_COORD_LOWPRECISION = exports.SPROP_CELL_COORD = exports.SPROP_COORD_MP_INTEGRAL = exports.SPROP_COORD_MP_LOWPRECISION = exports.SPROP_COORD_MP = exports.SPROP_COLLAPSIBLE = exports.SPROP_IS_A_VECTOR_ELEM = exports.SPROP_PROXY_ALWAYS_YES = exports.SPROP_INSIDEARRAY = exports.SPROP_XYZE = exports.SPROP_EXCLUDE = exports.SPROP_NORMAL = exports.SPROP_ROUNDUP = exports.SPROP_ROUNDDOWN = exports.SPROP_NOSCALE = exports.SPROP_COORD = exports.SPROP_UNSIGNED = void 0;
const assert = require("assert");
const Long = require("long");
const assert_exists_1 = require("./assert-exists");
const consts_1 = require("./consts");
const entityhandle_1 = require("./entityhandle");
exports.SPROP_UNSIGNED = 1 << 0; // Unsigned integer data.
exports.SPROP_COORD = 1 << 1; // If this is set, the float/vector is treated like a world coordinate. Note that the bit count is ignored in this case.
exports.SPROP_NOSCALE = 1 << 2; // For floating point, don't scale into range, just take value as is.
exports.SPROP_ROUNDDOWN = 1 << 3; // For floating point, limit high value to range minus one bit unit
exports.SPROP_ROUNDUP = 1 << 4; // For floating point, limit low value to range minus one bit unit
exports.SPROP_NORMAL = 1 << 5; // If this is set, the vector is treated like a normal (only valid for vectors)
exports.SPROP_EXCLUDE = 1 << 6; // This is an exclude prop (not excludED, but it points at another prop to be excluded).
exports.SPROP_XYZE = 1 << 7; // Use XYZ/Exponent encoding for vectors.
exports.SPROP_INSIDEARRAY = 1 << 8; // This tells us that the property is inside an array, so it shouldn't be put into the flattened property list. Its array will point at it when it needs to.
exports.SPROP_PROXY_ALWAYS_YES = 1 << 9; // Set for datatable props using one of the default datatable proxies like SendProxy_DataTableToDataTable that always send the data to all clients.
exports.SPROP_IS_A_VECTOR_ELEM = 1 << 10; // Set automatically if SPROP_VECTORELEM is used.
exports.SPROP_COLLAPSIBLE = 1 << 11; // Set automatically if it's a datatable with an offset of 0 that doesn't change the pointer (ie: for all automatically-chained base classes).
exports.SPROP_COORD_MP = 1 << 12; // Like SPROP_COORD, but special handling for multiplayer games
exports.SPROP_COORD_MP_LOWPRECISION = 1 << 13; // Like SPROP_COORD, but special handling for multiplayer games where the fractional component only gets a 3 bits instead of 5
exports.SPROP_COORD_MP_INTEGRAL = 1 << 14; // SPROP_COORD_MP, but coordinates are rounded to integral boundaries
exports.SPROP_CELL_COORD = 1 << 15; // Like SPROP_COORD, but special encoding for cell coordinates that can't be negative, bit count indicate maximum value
exports.SPROP_CELL_COORD_LOWPRECISION = 1 << 16; // Like SPROP_CELL_COORD, but special handling where the fractional component only gets a 3 bits instead of 5
exports.SPROP_CELL_COORD_INTEGRAL = 1 << 17; // SPROP_CELL_COORD, but coordinates are rounded to integral boundaries
exports.SPROP_CHANGES_OFTEN = 1 << 18; // this is an often changed field, moved to head of sendtable so it gets a small index
exports.SPROP_VARINT = 1 << 19; // use var int encoded (google protobuf style), note you want to include SPROP_UNSIGNED if needed, its more efficient
const DT_MAX_STRING_BITS = 9;
function makeIntDecoder(sendProp) {
    if ((sendProp.flags & exports.SPROP_VARINT) !== 0) {
        if ((sendProp.flags & exports.SPROP_UNSIGNED) !== 0) {
            return bitbuf => bitbuf.readUVarInt32();
        }
        else {
            return bitbuf => bitbuf.readVarInt32();
        }
    }
    else {
        const numBits = sendProp.numBits;
        if ((sendProp.flags & exports.SPROP_UNSIGNED) !== 0) {
            if ((sendProp.flags & exports.SPROP_NOSCALE) !== 0 &&
                sendProp.numBits === consts_1.NUM_NETWORKED_EHANDLE_BITS) {
                return bitbuf => new entityhandle_1.EntityHandle(bitbuf.readUBits(numBits));
            }
            else if (numBits === 1) {
                return bitbuf => bitbuf.readOneBit();
            }
            else {
                return bitbuf => bitbuf.readUBits(numBits);
            }
        }
        else {
            return bitbuf => bitbuf.readSBits(numBits);
        }
    }
}
function makeSpecialFloatDecoder(sendProp) {
    if ((sendProp.flags & exports.SPROP_COORD) !== 0) {
        return bitbuf => bitbuf.readBitCoord();
    }
    else if ((sendProp.flags & exports.SPROP_COORD_MP) !== 0) {
        return bitbuf => bitbuf.readBitCoordMPNone();
    }
    else if ((sendProp.flags & exports.SPROP_COORD_MP_LOWPRECISION) !== 0) {
        return bitbuf => bitbuf.readBitCoordMPLowPrecision();
    }
    else if ((sendProp.flags & exports.SPROP_COORD_MP_INTEGRAL) !== 0) {
        return bitbuf => bitbuf.readBitCoordMPIntegral();
    }
    else if ((sendProp.flags & exports.SPROP_NOSCALE) !== 0) {
        return bitbuf => bitbuf.readFloat32();
    }
    else if ((sendProp.flags & exports.SPROP_NORMAL) !== 0) {
        return bitbuf => bitbuf.readBitNormal();
    }
    else if ((sendProp.flags & exports.SPROP_CELL_COORD) !== 0) {
        return bitbuf => bitbuf.readBitCellCoordNone(sendProp.numBits);
    }
    else if ((sendProp.flags & exports.SPROP_CELL_COORD_LOWPRECISION) !== 0) {
        return bitbuf => bitbuf.readBitCellCoordLowPrecision(sendProp.numBits);
    }
    else if ((sendProp.flags & exports.SPROP_CELL_COORD_INTEGRAL) !== 0) {
        return bitbuf => bitbuf.readUBits(sendProp.numBits);
    }
    else {
        return undefined;
    }
}
function makeFloatDecoder(sendProp) {
    const special = makeSpecialFloatDecoder(sendProp);
    if (special !== undefined) {
        return special;
    }
    const numBits = sendProp.numBits;
    const maxValue = (1 << numBits) - 1;
    const lowValue = sendProp.lowValue;
    const highValue = sendProp.highValue;
    return bitbuf => {
        const interp = bitbuf.readUBits(numBits);
        const fVal = interp / maxValue;
        return lowValue + (highValue - lowValue) * fVal;
    };
}
function makeVectorDecoder(sendProp) {
    const floatDecode = makeFloatDecoder(sendProp);
    const isNormal = (sendProp.flags & exports.SPROP_NORMAL) !== 0;
    if (isNormal) {
        return bitbuf => {
            const v = {
                x: floatDecode(bitbuf),
                y: floatDecode(bitbuf),
                z: 0.0
            };
            const signBit = bitbuf.readOneBit();
            const v0v0v1v1 = v.x * v.x + v.y * v.y;
            if (v0v0v1v1 < 1.0) {
                v.z = Math.sqrt(1.0 - v0v0v1v1);
            }
            else {
                v.z = 0.0;
            }
            if (signBit) {
                v.z *= -1.0;
            }
            return v;
        };
    }
    else {
        return bitbuf => ({
            x: floatDecode(bitbuf),
            y: floatDecode(bitbuf),
            z: floatDecode(bitbuf)
        });
    }
}
function makeVectorXYDecoder(sendProp) {
    const floatDecode = makeFloatDecoder(sendProp);
    return bitbuf => ({
        x: floatDecode(bitbuf),
        y: floatDecode(bitbuf),
        z: 0.0
    });
}
function makeStringDecoder(_sendProp) {
    return bitbuf => {
        const len = bitbuf.readUBits(DT_MAX_STRING_BITS);
        return bitbuf.readString(len);
    };
}
function makeInt64Decoder(sendProp) {
    if ((sendProp.flags & exports.SPROP_VARINT) !== 0) {
        if ((sendProp.flags & exports.SPROP_UNSIGNED) !== 0) {
            throw new Error("64-bit unsigned varint not implemented"); // TODO
        }
        else {
            throw new Error("64-bit signed varint not implemented"); // TODO
        }
    }
    else {
        const highBits = sendProp.numBits - 32;
        if ((sendProp.flags & exports.SPROP_UNSIGNED) !== 0) {
            return bitbuf => {
                const lowInt = bitbuf.readUBits(32);
                const highInt = bitbuf.readUBits(highBits);
                return Long.fromBits(lowInt, highInt, false);
            };
        }
        else {
            return bitbuf => {
                const neg = bitbuf.readOneBit();
                const lowInt = bitbuf.readUBits(32);
                const highInt = bitbuf.readUBits(highBits - 1);
                return Long.fromBits(lowInt, highInt, !neg);
            };
        }
    }
}
function makeValueDecoder(sendProp) {
    switch (sendProp.type) {
        case 0 /* PropType.Int */:
            return makeIntDecoder(sendProp);
        case 1 /* PropType.Float */:
            return makeFloatDecoder(sendProp);
        case 2 /* PropType.Vector */:
            return makeVectorDecoder(sendProp);
        case 3 /* PropType.VectorXY */:
            return makeVectorXYDecoder(sendProp);
        case 4 /* PropType.String */:
            return makeStringDecoder(sendProp);
        case 7 /* PropType.Int64 */:
            return makeInt64Decoder(sendProp);
        default:
            throw new Error(`Unsupported send prop type ${sendProp.type}`);
    }
}
function makeArrayDecoder(sendProp, arrayElementProp) {
    const maxElements = sendProp.numElements;
    const numBits = (Math.log2(maxElements) | 0) + 1;
    const elementDecoder = makeValueDecoder(arrayElementProp);
    return bitbuf => {
        const numElements = bitbuf.readUBits(numBits);
        const array = new Array(numElements);
        for (let i = 0; i < numElements; ++i) {
            array[i] = elementDecoder(bitbuf);
        }
        return array;
    };
}
function makeDecoder(sendProp, arrayElementProp) {
    const type = sendProp.type;
    assert(type !== 6 /* PropType.DataTable */);
    if (type === 5 /* PropType.Array */) {
        return makeArrayDecoder(sendProp, (0, assert_exists_1.default)(arrayElementProp, "array prop with no element prop"));
    }
    else {
        return makeValueDecoder(sendProp);
    }
}
exports.makeDecoder = makeDecoder;
//# sourceMappingURL=props.js.map