import { HmacAlgorithm } from "./crypto/hmac";
import { SecretKey } from "./key";

export type TOTPOptions = {
  /**
   * Secret key
   */
  secret: SecretKey;

  /**
   * Interval in seconds between code generation
   * - Any other than `30` is not supported by Google Authenticator
   * @default 30
   */
  stepSeconds?: number;

  /**
   * Current date
   * @default Date()
   */
  now?: Date;

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

  /**
   * Enables padding of secret key.
   * - `true` - compatible with [RFC6238](https://www.ietf.org/rfc/rfc6238.txt)
   * - `false` - compatible with Google Authenticator
   *
   * @default false
   */
  pad?: boolean;
};

/**
 *
 *
 * @export
 * @return {*}  {Required<TOTPOptions>}
 */
export function getDefaultTOTPOptions(): Required<TOTPOptions> {
  return {
    algorithm: HmacAlgorithm.SHA1,
    digits: 6,
    now: new Date(),
    secret: new SecretKey(new Uint8Array()),
    stepSeconds: 30,
    pad: false
  };
}
