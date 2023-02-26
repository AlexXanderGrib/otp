import type { Hmac } from "./crypto/hmac";
import { totp } from "./totp";
import type { TOTPOptions } from "./totp.options";
import { getKeyUri } from "./uri";

/**
 *
 *
 * @export
 * @class TOTP
 */
export class TOTP {
  /**
   * Creates an instance of TOTP.
   * @param {Hmac} _hmac
   * @param {TOTPOptions} options
   * @memberof TOTP
   */
  constructor(private readonly _hmac: Hmac, public options: TOTPOptions) {}

  /**
   *
   *
   * @param {string} name
   * @param {string} issuer
   * @return {string}  {string}
   * @memberof TOTP
   */
  getUri(name: string, issuer: string): string {
    return getKeyUri({ type: "totp", name, issuer, ...this.options });
  }

  /**
   *
   *
   * @param {string} code
   * @param {Partial<TOTPOptions>} [overrides]
   * @return {Promise<boolean>}  {Promise<boolean>}
   * @memberof TOTP
   */
  async checkCode(
    code: string,
    overrides?: Partial<TOTPOptions>
  ): Promise<boolean> {
    return code === (await this.generateCode(overrides));
  }

  /**
   *
   * @param {Partial<TOTPOptions>} [overrides={}]
   * @return {Promise<string>} {Promise<string>}
   * @memberof TOTP
   */
  async generateCode(overrides: Partial<TOTPOptions> = {}): Promise<string> {
    return await totp(this._hmac, { ...this.options, ...overrides });
  }
}
