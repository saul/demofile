import * as Long from "long";
import { decodeEncryptionKey } from "./replaykeys";

test("short key can be decrypted", () => {
  const key = Array.from(
    decodeEncryptionKey(Long.fromString("561318910229987923", true, 10))
  );

  expect(key).toEqual([
    48,
    55,
    67,
    65,
    51,
    52,
    57,
    51,
    50,
    57,
    70,
    55,
    67,
    50,
    53,
    51
  ]);
});
