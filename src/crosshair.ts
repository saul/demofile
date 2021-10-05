import { decodeShareCode } from "./sharecode";

export enum CrosshairStyle {
  Default = 0,
  DefaultStatic,
  Classic,
  ClassicDynamic,
  ClassicStatic
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

export function decodeCrosshairCode(shareCode: string): ICrosshairInfo {
  function signed(byte: number): number {
    return byte > 127 ? -(~byte & 0xff) - 1 : byte;
  }

  const bytes = decodeShareCode(shareCode);

  if (bytes[1] !== bytes.slice(2).reduce((x, y) => x + y) % 256) {
    throw new Error("invalid crosshair code");
  }

  return {
    outline: bytes[4]! / 2,
    red: bytes[5]!,
    green: bytes[6]!,
    blue: bytes[7]!,
    alpha: bytes[8]!,
    splitDistance: bytes[9]!,

    innerSplitAlpha: (bytes[11]! >> 4) / 10,
    hasOutline: !!(bytes[11]! & 8),
    outerSplitAlpha: (bytes[12]! & 0xf) / 10,
    splitSizeRatio: (bytes[12]! >> 4) / 10,

    thickness: bytes[13]! / 10,
    length: bytes[15]! / 10,
    gap: signed(bytes[3]!) / 10,

    hasCenterDot: !!((bytes[14]! >> 4) & 1),
    hasAlpha: !!((bytes[14]! >> 4) & 4),
    isTStyle: !!((bytes[14]! >> 4) & 8),

    style: CrosshairStyle[
      (bytes[14]! & 0xf) >> 1
    ] as keyof typeof CrosshairStyle
  };
}
