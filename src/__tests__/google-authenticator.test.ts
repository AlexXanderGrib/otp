import { hmac } from "../crypto-node";
import { importKey } from "../key.actions";
import { TOTP } from "../totp.class";

describe("Google Authenticator Compatability", () => {
  test("Short Secret", async () => {
    const now = new Date(1_676_775_285_396);
    const secret = importKey("2XHHO3OW7NZZO5WX");
    const totp = new TOTP(hmac, { secret, now });

    const code = await totp.generateCode();
    expect(code).toBe("434004");
  });

  test("Long Code", async () => {
    const now = new Date(1_676_775_462_270);
    const secret = importKey("NTMCQKWW4DJ2WD2SJAVFLOACB6MTLGR6");
    const totp = new TOTP(hmac, { secret, now });

    const isValid = await totp.checkCode("351221");
    expect(isValid).toBeTruthy();
  });
});
