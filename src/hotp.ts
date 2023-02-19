/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Hmac } from "./crypto/hmac";
import { HOTPOptions, getDefaultHOTPOptions } from "./hotp.options";

/**
 *
 *
 * @param {string} hex
 * @return {*}  {Uint8Array}
 */
function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);

  for (let index = 0; index < bytes.length; index++) {
    const string = hex.slice(index * 2, index * 2 + 2);
    bytes[index] = Number.parseInt(string, 16);
  }

  return bytes;
}

/**
 *
 *
 * @export
 * @param {Hmac} hmac
 * @param {HOTPOptions} options
 * @return {Promise<string>}
 */
export async function hotp(hmac: Hmac, options: HOTPOptions) {
  const merged = { ...getDefaultHOTPOptions(), ...options };

  const hexCounter = merged.counter.toString(16).padStart(16, "0");
  const digest = await hmac(
    merged.algorithm,
    merged.secret.bytes,
    hexToBytes(hexCounter)
  );

  const offset = digest[digest.length - 1]! & 0xf;
  const binary =
    ((digest[offset]! & 0x7f) << 24) |
    ((digest[offset + 1]! & 0xff) << 16) |
    ((digest[offset + 2]! & 0xff) << 8) |
    (digest[offset + 3]! & 0xff);
  const token = binary % 10 ** merged.digits;
  return token.toString().padStart(merged.digits, "0");
}
