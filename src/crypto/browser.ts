import { Hmac, HmacAlgorithm } from "./hmac";
import type { RandomBytes } from "./random";

const algorithmMap = new Map<HmacAlgorithm, string>([
  [HmacAlgorithm.SHA1, "SHA-1"],
  [HmacAlgorithm.SHA256, "SHA-256"],
  [HmacAlgorithm.SHA512, "SHA-512"]
]);

export const hmac: Hmac = async function hmac(algorithm, key, message) {
  const name = algorithmMap.get(algorithm);

  if (!name) {
    throw new Error(`Invalid algorithm: "${algorithm}"`);
  }

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: { name } },
    false,
    ["sign", "verify"]
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, message);
  return new Uint8Array(signature);
};

export const randomBytes: RandomBytes = function randomBytes(size) {
  const buffer = new Uint8Array(size);

  return crypto.getRandomValues(buffer);
};
