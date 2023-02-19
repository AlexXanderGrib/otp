import { exportKey, generateKey, getKeyUri, HmacAlgorithm } from "..";
import { randomBytes } from "../crypto-node";

describe("URI generator", () => {
  test("totp", async () => {
    const secret = await generateKey(randomBytes);
    const uri = getKeyUri({
      secret,
      type: "totp",
      name: "Account",
      issuer: "Test",
      algorithm: HmacAlgorithm.SHA256
    });

    expect(uri).toContain("issuer=Test");
    expect(uri).toContain("Test:Account");
    expect(uri).toContain("period=30");
    expect(uri).toContain("digits=6");
    expect(uri).toContain("algorithm=SHA256");
    expect(uri).toContain(`secret=${exportKey(secret)}`);
    expect(uri).toContain("otpauth://totp/");
  });

  test("hotp", async () => {
    const secret = await generateKey(randomBytes);
    const uri = getKeyUri({
      secret,
      type: "hotp",
      counter: 11,
      name: "Account",
      issuer: "Test",
      digits: 8
    });

    expect(uri).toContain("counter=11");
    expect(uri).toContain("digits=8");
    expect(uri).toContain("algorithm=SHA1");

    expect(uri).toContain("otpauth://hotp/");
  });
});
