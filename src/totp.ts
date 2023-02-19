import { Hmac, HmacAlgorithm } from "./crypto/hmac";
import { hotp } from "./hotp";
import { SecretKey } from "./key";
import { getDefaultTOTPOptions, TOTPOptions } from "./totp.options";

/**
 *
 *
 * @export
 * @param {Hmac} hmac
 * @param {TOTPOptions} options
 * @return {Promise<string>}
 */
export async function totp(hmac: Hmac, options: TOTPOptions) {
  const merged = { ...getDefaultTOTPOptions(), ...options };
  const counter = Math.floor(merged.now.getTime() / 1000 / merged.stepSeconds);

  let bytes = new Uint8Array(options.secret.bytes);

  if (merged.pad) {
    let minLength: number;

    switch (merged.algorithm) {
      case HmacAlgorithm.SHA1: {
        minLength = 20;
        break;
      }
      case HmacAlgorithm.SHA256: {
        minLength = 32;
        break;
      }
      case HmacAlgorithm.SHA512: {
        minLength = 64;
        break;
      }

      default: {
        throw new Error(`Invalid hmac algorithm: "${merged.algorithm}"`);
      }
    }

    while (bytes.length < minLength) {
      const double = new Uint8Array(bytes.length * 2);
      double.set(bytes, 0);
      double.set(bytes, bytes.length);
      bytes = double.slice(0, minLength);
    }
  }

  return await hotp(hmac, {
    secret: new SecretKey(bytes),
    algorithm: merged.algorithm,
    digits: merged.digits,
    counter
  });
}
