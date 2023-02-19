import { HmacAlgorithm, SecretKey, totp } from "../index";
import { hmac } from "../crypto-node";
import { Buffer } from "buffer";

describe("TOTP/Reference", () => {
  // https://www.ietf.org/rfc/rfc6238.txt
  const secret = new SecretKey(Buffer.from("12345678901234567890", "ascii"));
  function reference(seconds: number, algorithm: HmacAlgorithm, code: string) {
    const now = new Date(seconds * 1000);

    test(`${algorithm}/${seconds}`, async () => {
      const result = await totp(hmac, {
        secret,
        algorithm,
        digits: 8,
        now,
        stepSeconds: 30,
        pad: true
      });

      expect(result).toBe(code);
    });
  }

  reference(59, HmacAlgorithm.SHA1, "94287082");
  reference(59, HmacAlgorithm.SHA256, "46119246");
  reference(59, HmacAlgorithm.SHA512, "90693936");

  reference(1_111_111_109, HmacAlgorithm.SHA1, "07081804");
  reference(1_111_111_109, HmacAlgorithm.SHA256, "68084774");
  reference(1_111_111_109, HmacAlgorithm.SHA512, "25091201");
});
