export declare enum CrosshairStyle {
    Default = 0,
    DefaultStatic = 1,
    Classic = 2,
    ClassicDynamic = 3,
    ClassicStatic = 4
}
export interface ICrosshairInfo {
    style: keyof typeof CrosshairStyle;
    hasCenterDot: boolean;
    length: number;
    thickness: number;
    gap: number;
    hasOutline: boolean;
    outline: number;
    red: number;
    green: number;
    blue: number;
    hasAlpha: boolean;
    alpha: number;
    splitDistance: number;
    innerSplitAlpha: number;
    outerSplitAlpha: number;
    splitSizeRatio: number;
    isTStyle: boolean;
}
export declare function decodeCrosshairCode(shareCode: string): ICrosshairInfo;
