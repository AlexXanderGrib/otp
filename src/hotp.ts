/* istanbul ignore */
import { getBigIntBytes } from "./bytes";
import type { Hmac } from "./crypto/hmac";
import { HOTPOptions, getDefaultHOTPOptions } from "./hotp.options";

/**
 * Generates HOTP code from secret key, counter and options
 *
 * @export
 * @param {Hmac} hmac
 * @param {HOTPOptions} options
 * @return {Promise<string>}
 */
export async function hotp(hmac: Hmac, options: HOTPOptions): Promise<string> {
  const merged = { ...getDefaultHOTPOptions(), ...options };

  const digest = await hmac(
    merged.algorithm,
    merged.secret.bytes,
    getBigIntBytes(merged.counter)
  );

  // Truncates offset to 0-15
  const offset = digest[digest.length - 1] & 0xf;
  const view = new DataView(digest.buffer);

  // Truncates unsigned int 32 to signed int 32
  // 0x7fffffff - is max int32 value
  const binary = view.getUint32(offset) & 0x7f_ff_ff_ff;
  return binary.toString().slice(-merged.digits);
}
