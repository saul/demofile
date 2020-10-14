import Long = require("long");
import { ISendProp } from "./entities";
import { EntityHandle } from "./entityhandle";
import { BitStream } from "./ext/bitbuffer";
import { Vector } from "./sendtabletypes";
export declare const enum PropType {
    Int = 0,
    Float = 1,
    Vector = 2,
    VectorXY = 3,
    String = 4,
    Array = 5,
    DataTable = 6,
    Int64 = 7
}
export declare const SPROP_UNSIGNED: number;
export declare const SPROP_COORD: number;
export declare const SPROP_NOSCALE: number;
export declare const SPROP_ROUNDDOWN: number;
export declare const SPROP_ROUNDUP: number;
export declare const SPROP_NORMAL: number;
export declare const SPROP_EXCLUDE: number;
export declare const SPROP_XYZE: number;
export declare const SPROP_INSIDEARRAY: number;
export declare const SPROP_PROXY_ALWAYS_YES: number;
export declare const SPROP_IS_A_VECTOR_ELEM: number;
export declare const SPROP_COLLAPSIBLE: number;
export declare const SPROP_COORD_MP: number;
export declare const SPROP_COORD_MP_LOWPRECISION: number;
export declare const SPROP_COORD_MP_INTEGRAL: number;
export declare const SPROP_CELL_COORD: number;
export declare const SPROP_CELL_COORD_LOWPRECISION: number;
export declare const SPROP_CELL_COORD_INTEGRAL: number;
export declare const SPROP_CHANGES_OFTEN: number;
export declare const SPROP_VARINT: number;
export declare type PropPrimitive = string | number | boolean | Long | Vector | EntityHandle;
export declare type PropValue = PropPrimitive | PropPrimitive[];
export declare function makeDecoder(sendProp: ISendProp, arrayElementProp: ISendProp | undefined): (bitbuf: BitStream) => PropValue;
