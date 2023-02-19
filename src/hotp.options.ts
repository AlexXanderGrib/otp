import { HmacAlgorithm } from "./crypto/hmac";
import { SecretKey } from "./key";

export type HOTPOptions = {
  secret: SecretKey;
  counter: number;
  digits?: number;
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
