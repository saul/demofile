"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBinaryKeyValues = void 0;
function parseValue(type, buffer) {
    switch (type) {
        case 0 /* None */:
            let inner = {};
            type = buffer.readUint8();
            while (type !== 11 /* NumTypes */) {
                const name = buffer.readCString();
                const value = parseValue(type, buffer);
                if (name === "") {
                    if (typeof value !== "string") {
                        throw new Error("Expected keyless KeyValues to have string value");
                    }
                    if (Array.isArray(inner)) {
                        inner.push(value);
                    }
                    else {
                        inner = [value];
                    }
                }
                else {
                    if (Array.isArray(inner)) {
                        throw new Error("Unexpected mix of empty and non-empty keys in KeyValues");
                    }
                    inner[name] = value;
                }
                type = buffer.readUint8();
            }
            return inner;
        case 1 /* String */:
            return buffer.readCString();
        case 2 /* Int */:
            return buffer.readInt();
        case 3 /* Float */:
            return buffer.readFloat();
        case 4 /* Ptr */:
            return buffer.readUint32();
        case 5 /* WString */:
            throw new Error("wstring values are not supported");
        case 6 /* Color */:
            return {
                r: buffer.readUint8(),
                g: buffer.readUint8(),
                b: buffer.readUint8(),
                a: buffer.readUint8()
            };
        case 7 /* UInt64 */:
            return buffer.readUint64();
        case 8 /* CompiledIntByte */:
            return buffer.readUint8();
        case 9 /* CompiledInt0 */:
            return 0;
        case 10 /* CompiledInt1 */:
            return 1;
        default:
            throw new Error(`Invalid KeyValues types ${type}`);
    }
}
function parseBinaryKeyValues(buffer) {
    const type = buffer.readUint8();
    return {
        [buffer.readCString()]: parseValue(type, buffer)
    };
}
exports.parseBinaryKeyValues = parseBinaryKeyValues;
//# sourceMappingURL=keyvalues.js.map