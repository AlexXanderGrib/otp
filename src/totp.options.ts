import { HmacAlgorithm } from "./crypto/hmac";
import { SecretKey } from "./key";

export type TOTPOptions = {
  secret: SecretKey;
  stepSeconds?: number;
  now?: Date;
  digits?: number;
  algorithm?: HmacAlgorithm;
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
