import {
  exportKey,
  generateKey,
  getKeyUri,
  HmacAlgorithm,
  HOTP,
  TOTP
} from "..";
import { hmac, randomBytes } from "../crypto-node";

describe("URI generator", () => {
  const name = "Account";
  const issuer = "Test";

  test("totp", () => {
    const secret = generateKey(randomBytes);
    const totp = new TOTP(hmac, {
      secret,
      algorithm: HmacAlgorithm.SHA256
    });

    const uri = getKeyUri({
      secret,
      type: "totp",
      name,
      issuer,
      algorithm: HmacAlgorithm.SHA256
    });

    expect(totp.getUri(name, issuer)).toBe(uri);
    expect(uri).toContain("issuer=Test");
    expect(uri).toContain("Test:Account");
    expect(uri).toContain("period=30");
    expect(uri).toContain("digits=6");
    expect(uri).toContain("algorithm=SHA256");
    expect(uri).toContain(`secret=${exportKey(secret)}`);
    expect(uri).toContain("otpauth://totp/");
  });

  test("hotp", () => {
    const secret = generateKey(randomBytes);
    const hotp = new HOTP(hmac, { secret, counter: 11, digits: 8 });

    const uri = getKeyUri({
      ...hotp.options,
      type: "hotp",
      name,
      issuer
    });

    expect(uri).toBe(hotp.getUri(name, issuer));
    expect(uri).toContain("counter=11");
    expect(uri).toContain("digits=8");
    expect(uri).toContain("algorithm=SHA1");

    expect(uri).toContain("otpauth://hotp/");
  });
});
