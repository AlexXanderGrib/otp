import { Hmac, HmacAlgorithm } from "./hmac";
import type { RandomBytes } from "./random";

export const hmac: Hmac = async function hmac(algorithm, key, message) {
  let name: string;

  switch (algorithm) {
    case HmacAlgorithm.SHA1: {
      name = "SHA-1";
      break;
    }
    case HmacAlgorithm.SHA256: {
      name = "SHA-256";
      break;
    }
    case HmacAlgorithm.SHA512: {
      name = "SHA-512";
      break;
    }

    default: {
      throw new Error(`Invalid hmac algorithm: "${algorithm}"`);
    }
  }

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    {
      name: "HMAC",
      hash: { name }
    },
    false,
    ["sign", "verify"]
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, message);
  return new Uint8Array(signature);
};

export const randomBytes: RandomBytes = async function randomBytes(size) {
  const buffer = new Uint8Array(size);

  return crypto.getRandomValues(buffer);
};
