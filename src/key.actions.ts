import { encode, decode } from "./base32";
import type { RandomBytes } from "./crypto/random";
import { SecretKey } from "./key";

/**
 *
 *
 * @export
 * @param {RandomBytes} random
 * @param {number} [size=10]
 * @return {Promise<SecretKey>}
 */
export async function generateKey(random: RandomBytes, size = 10) {
  return new SecretKey(await random(size));
}

/**
 *
 *
 * @export
 * @param {string} base32text
 * @return {SecretKey}
 */
export function importKey(base32text: string) {
  return new SecretKey(decode(base32text));
}

/**
 *
 *
 * @export
 * @param {SecretKey} key
 * @return {string}
 */
export function exportKey(key: SecretKey) {
  return encode(key.bytes);
}
