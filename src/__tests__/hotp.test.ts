import { HmacAlgorithm, SecretKey, hotp } from "../index";
import { hmac } from "../crypto-node";
import { Buffer } from "buffer";

describe("HOTP/Reference", () => {
  // https://www.ietf.org/rfc/rfc4226.txt
  const secret = new SecretKey(Buffer.from("12345678901234567890", "ascii"));
  function reference(counter: number, code: string) {
    test(`Counter: ${counter}`, async () => {
      const result = await hotp(hmac, {
        secret,
        algorithm: HmacAlgorithm.SHA1,
        digits: 6,
        counter
      });

      expect(result).toBe(code);
    });
  }

  const codes = [
    "755224",
    "287082",
    "359152",
    "969429",
    "338314",
    "254676",
    "287922",
    "162583",
    "399871",
    "520489"
  ];

  for (const [index, code] of codes.entries()) {
    reference(index, code);
  }
});
