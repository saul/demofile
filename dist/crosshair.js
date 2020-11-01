"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeCrosshairCode = exports.CrosshairStyle = void 0;
const sharecode_1 = require("./sharecode");
var CrosshairStyle;
(function (CrosshairStyle) {
    CrosshairStyle[CrosshairStyle["Default"] = 0] = "Default";
    CrosshairStyle[CrosshairStyle["DefaultStatic"] = 1] = "DefaultStatic";
    CrosshairStyle[CrosshairStyle["Classic"] = 2] = "Classic";
    CrosshairStyle[CrosshairStyle["ClassicDynamic"] = 3] = "ClassicDynamic";
    CrosshairStyle[CrosshairStyle["ClassicStatic"] = 4] = "ClassicStatic";
})(CrosshairStyle = exports.CrosshairStyle || (exports.CrosshairStyle = {}));
function decodeCrosshairCode(shareCode) {
    function signed(byte) {
        return byte > 127 ? -(~byte & 0xff) - 1 : byte;
    }
    const bytes = sharecode_1.decodeShareCode(shareCode);
    if (bytes[1] !== bytes.slice(2).reduce((x, y) => x + y) % 256) {
        throw new Error("invalid crosshair code");
    }
    return {
        outline: bytes[4] / 2,
        red: bytes[5],
        green: bytes[6],
        blue: bytes[7],
        alpha: bytes[8],
        splitDistance: bytes[9],
        innerSplitAlpha: (bytes[11] >> 4) / 10,
        hasOutline: !!(bytes[11] & 8),
        outerSplitAlpha: (bytes[12] & 0xf) / 10,
        splitSizeRatio: (bytes[12] >> 4) / 10,
        thickness: bytes[13] / 10,
        length: bytes[15] / 10,
        gap: signed(bytes[3]) / 10,
        hasCenterDot: !!((bytes[14] >> 4) & 1),
        hasAlpha: !!((bytes[14] >> 4) & 4),
        isTStyle: !!((bytes[14] >> 4) & 8),
        style: CrosshairStyle[(bytes[14] & 0xf) >> 1]
    };
}
exports.decodeCrosshairCode = decodeCrosshairCode;
//# sourceMappingURL=crosshair.js.map