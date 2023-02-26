import { HmacAlgorithm } from "./crypto/hmac";
import { SecretKey } from "./key";

export type HOTPOptions = {
  /**
   * Secret key
   */
  secret: SecretKey;

  /**
   * Incrementing counter. From 0 to Number.MAX_SAFE_INTEGER (53 bits)
   */
  counter: number;

  /**
   * Count of digits.
   * - Any other than `6` is not supported by Google Authenticator
   * @default 6
   */
  digits?: number;

  /**
   * Hash algorithms for generating new codes.
   * - Any other than `sha1` is not supported by Google Authenticator
   * @default "sha1"
   */
  algorithm?: HmacAlgorithm;
};

/**
 *
 *
 * @export
 * @return {*}  {Required<HOTPOptions>}
 */
export function getDefaultHOTPOptions(): Required<HOTPOptions> {
  return {
    algorithm: HmacAlgorithm.SHA1,
    digits: 6,
    counter: 0,
    secret: new SecretKey(new Uint8Array())
  };
}
