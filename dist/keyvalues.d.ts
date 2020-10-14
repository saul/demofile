/// <reference types="long" />
/// <reference types="bytebuffer" />
interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
export declare type KeyValuesPrimitive = string | number | Color | Long | {
    [key: string]: KeyValues;
};
export declare type KeyValues = KeyValuesPrimitive[] | KeyValuesPrimitive;
export declare function parseBinaryKeyValues(buffer: ByteBuffer): {
    [name: string]: KeyValues;
};
export {};
