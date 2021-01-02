import * as bigInt from "big-integer";

const DICTIONARY = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefhijkmnopqrstuvwxyz23456789";

export function decodeShareCode(shareCode: string): ReadonlyArray<number> {
  if (!shareCode.match(/^CSGO(-[\w]{5}){5}$/))
    throw new Error(`invalid share code: ${shareCode}`);

  const code = shareCode.substr(5).replace(/\-/g, "");

  let big = bigInt.zero;
  for (let i = code.length - 1; i >= 0; --i) {
    big = big.multiply(DICTIONARY.length).plus(DICTIONARY.indexOf(code[i]));
  }

  const array = big.toArray(256).value;
  if (array.length === 18) {
    array.unshift(0);
  }

  return array;
}
