import { HOTPOptions, getDefaultHOTPOptions } from "./hotp.options";
import { TOTPOptions, getDefaultTOTPOptions } from "./totp.options";
import { exportKey } from "./key.actions";
import type { HmacAlgorithm } from "./crypto/hmac";

type CommonOptions = {
  issuer: string;
  name: string;
};

export type UriOptions =
  | ({ type: "hotp" } & CommonOptions & HOTPOptions)
  | ({ type: "totp" } & CommonOptions & TOTPOptions);

/**
 *
 *
 * @export
 * @param {UriOptions} options
 * @return {string}  {string}
 */
export function getKeyUri(options: UriOptions): string {
  const title = options.issuer
    ? `${encodeURIComponent(options.issuer)}:${encodeURIComponent(
        options.name
      )}`
    : encodeURIComponent(options.name);

  const url = new URL(`otpauth://${options.type}/${title}`);

  url.searchParams.set("secret", exportKey(options.secret));

  if (options.issuer) {
    url.searchParams.set("issuer", options.issuer);
  }

  let algorithm: HmacAlgorithm;
  let digits: number;

  switch (options.type) {
    case "hotp": {
      const merged = { ...getDefaultHOTPOptions(), ...options };
      algorithm = merged.algorithm;
      digits = merged.digits;
      url.searchParams.set("counter", merged.counter.toString());
      break;
    }

    case "totp": {
      const merged = { ...getDefaultTOTPOptions(), ...options };
      algorithm = merged.algorithm;
      digits = merged.digits;
      url.searchParams.set("period", merged.stepSeconds.toString());
      break;
    }

    /* istanbul ignore next: invalid types are not used in tests */
    default: {
      throw new Error(`Invalid method type: "${(options as UriOptions).type}"`);
    }
  }

  url.searchParams.set("algorithm", algorithm.toUpperCase());
  url.searchParams.set("digits", digits.toString());

  return url.toString();
}
