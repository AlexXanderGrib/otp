import { SecretKey, importKey, exportKey, generateKey } from "..";
import { randomBytes } from "../crypto-node";

describe(SecretKey.name, () => {
  test("Key", () => {
    const key = generateKey(randomBytes, 20);
    expect(key.bytes.length).toBe(20);

    expect(importKey(exportKey(key)).bytes).toEqual(key.bytes);
  });
});
