export const HmacAlgorithm = Object.freeze({
  SHA1: "sha1",
  SHA256: "sha256",
  SHA512: "sha512"
});

export type HmacAlgorithm = (typeof HmacAlgorithm)[keyof typeof HmacAlgorithm];

export type Hmac = (
  algorithm: HmacAlgorithm,
  key: Uint8Array,
  message: Uint8Array
) => Promise<Uint8Array>;
