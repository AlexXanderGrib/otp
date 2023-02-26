import { createHmac, randomFillSync } from "crypto";
import type { Hmac } from "./hmac";
import type { RandomBytes } from "./random";

export const hmac: Hmac = async function hmac(algorithm, key, message) {
  return createHmac(algorithm, key).update(message).digest();
};

export const randomBytes: RandomBytes = function randomBytes(size) {
  return randomFillSync(new Uint8Array(size));
};
