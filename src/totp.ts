import { Hmac, HmacAlgorithm } from "./crypto/hmac";
import { hotp } from "./hotp";
import { SecretKey } from "./key";
import { getDefaultTOTPOptions, TOTPOptions } from "./totp.options";

const keyLengths = new Map<HmacAlgorithm, number>([
  [HmacAlgorithm.SHA1, 20],
  [HmacAlgorithm.SHA256, 32],
  [HmacAlgorithm.SHA512, 64]
]);

/**
 *
 *
 * @param {Uint8Array} buffer
 * @param {number} length
 * @return {Uint8Array}
 */
function pad(buffer: Uint8Array, length: number): Uint8Array {
  const factor = Math.ceil(length / buffer.length);
  const double = new Uint8Array(buffer.length * factor);

  for (let index = 0; index < factor; index++) {
    double.set(buffer, buffer.length * index);
  }

  return double.slice(0, length);
}

/**
 * Generates TOTP code from secret key and options
 *
 * @export
 * @param {Hmac} hmac
 * @param {TOTPOptions} options
 * @return {Promise<string>}
 * @throws {Error} if HMAC algorithm is invalid. Use {@link HmacAlgorithm} to avoid this
 */
export async function totp(hmac: Hmac, options: TOTPOptions): Promise<string> {
  const merged = { ...getDefaultTOTPOptions(), ...options };
  const counter = Math.floor(merged.now.getTime() / 1000 / merged.stepSeconds);

  let bytes = new Uint8Array(options.secret.bytes);

  if (merged.pad) {
    const length = keyLengths.get(merged.algorithm);

    /* istanbul ignore if: invalid algorithms are not used in tests */
    if (length === undefined) {
      throw new Error(`Invalid hmac algorithm: "${merged.algorithm}"`);
    }

    if (bytes.length < length) {
      bytes = pad(bytes, length);
    }
  }

  return await hotp(hmac, {
    secret: new SecretKey(bytes),
    algorithm: merged.algorithm,
    digits: merged.digits,
    counter
  });
}
