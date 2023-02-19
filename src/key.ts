/**
 *
 *
 * @export
 * @class SecretKey
 */
export class SecretKey {
  /**
   * Creates an instance of SecretKey.
   * @param {Uint8Array} bytes
   * @memberof SecretKey
   */
  constructor(public readonly bytes: Uint8Array) {}
}
