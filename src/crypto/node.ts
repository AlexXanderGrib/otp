import { createHmac, randomFill } from "crypto";
import type { Hmac } from "./hmac";
import type { RandomBytes } from "./random";

export const hmac: Hmac = async function hmac(algorithm, key, message) {
  return createHmac(algorithm, key).update(message).digest();
};

export const randomBytes: RandomBytes = function randomBytes(size) {
  return new Promise((resolve, reject) => {
    const buffer = new Uint8Array(size);

    randomFill(buffer, (error, buffer) => {
      if (buffer) return resolve(buffer);

      reject(error);
    });
  });
};
