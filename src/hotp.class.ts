import type { Hmac } from "./crypto/hmac";
import { hotp } from "./hotp";
import type { HOTPOptions } from "./hotp.options";
import { getKeyUri } from "./uri";

/**
 *
 *
 * @export
 * @class HOTP
 */
export class HOTP {
  /**
   * Creates an instance of HOTP.
   * @param {Hmac} _hmac
   * @param {HOTPOptions} options
   * @memberof HOTP
   */
  constructor(
    private readonly _hmac: Hmac,
    public options: HOTPOptions
  ) {}

  /**
   *
   *
   * @param {string} name
   * @param {string} issuer
   * @return {string}  {string}
   * @memberof HOTP
   */
  getUri(name: string, issuer: string): string {
    return getKeyUri({ type: "hotp", name, issuer, ...this.options });
  }

  /**
   *
   *
   * @param {string} code
   * @param {Partial<HOTPOptions>} [overrides]
   * @return {Promise<boolean>}  {Promise<boolean>}
   * @memberof HOTP
   */
  async checkCode(
    code: string,
    overrides?: Partial<HOTPOptions>
  ): Promise<boolean> {
    return code === (await this.generateCode(overrides));
  }

  /**
   *
   * @param {Partial<HOTPOptions>} [overrides={}]
   * @return {Promise<string>} {Promise<string>}
   * @memberof HOTP
   */
  async generateCode(overrides: Partial<HOTPOptions> = {}): Promise<string> {
    return await hotp(this._hmac, { ...this.options, ...overrides });
  }

  /**
   *
   *
   * @return {number} next value of the counter
   * @memberof HOTP
   */
  increment(): number {
    return ++this.options.counter;
  }
}
