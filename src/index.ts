/**
 *
 *
 * @export
 * @class Example
 * @template T
 */
export class Example<T> {
  /**
   * Creates an instance of Example.
   * @param {T} value
   * @memberof Example
   */
  constructor(public readonly value: T) {}
}

// Default export should exist to not crash when importing in ESM
// See ../index.mjs
export default Example;
