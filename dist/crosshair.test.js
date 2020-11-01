"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crosshair_1 = require("./crosshair");
it("decode crosshair", () => {
    expect(crosshair_1.decodeCrosshairCode("CSGO-miBcy-2S2P7-h9var-ZqwE3-wmb3K")).toEqual({
        alpha: 205,
        blue: 47,
        gap: 1.0,
        green: 253,
        hasAlpha: false,
        hasCenterDot: true,
        hasOutline: true,
        innerSplitAlpha: 1,
        isTStyle: false,
        length: 3,
        outerSplitAlpha: 0.5,
        outline: 1,
        red: 55,
        splitDistance: 7,
        splitSizeRatio: 0.3,
        style: "ClassicDynamic",
        thickness: 0.5
    });
    expect(crosshair_1.decodeCrosshairCode("CSGO-TJ2Ft-7QNVV-UwtJJ-uNFVb-BVJGG")).toEqual({
        alpha: 36,
        blue: 184,
        gap: -3.5,
        green: 64,
        hasAlpha: true,
        hasCenterDot: false,
        hasOutline: false,
        innerSplitAlpha: 0.1,
        isTStyle: true,
        length: 6.1,
        outerSplitAlpha: 0.8,
        outline: 2,
        red: 123,
        splitDistance: 12,
        splitSizeRatio: 0.5,
        style: "Classic",
        thickness: 4.8
    });
});
it("invalid share code throws", () => {
    expect(() => {
        crosshair_1.decodeCrosshairCode("CZG0-TJ2Ft-7QNVV-UwtJJ-uNFVb-BVJGF");
    }).toThrowError("invalid share code");
});
it("invalid crosshair code throws", () => {
    expect(() => {
        crosshair_1.decodeCrosshairCode("CSGO-TJ2Ft-7QNVV-UwtJJ-uNFVb-BVJGF");
    }).toThrowError("invalid crosshair code");
});
//# sourceMappingURL=crosshair.test.js.map