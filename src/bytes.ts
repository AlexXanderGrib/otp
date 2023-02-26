/* istanbul ignore file */

/**
 *
 *
 * @param {string} hex
 * @return {*}  {Uint8Array}
 */
function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);

  for (let index = 0; index < bytes.length; index++) {
    const string = hex.slice(index * 2, index * 2 + 2);
    bytes[+index] = Number.parseInt(string, 16);
  }

  return bytes;
}

/**
 *
 *
 * @param {number} number
 * @return {Uint8Array}  {Uint8Array}
 */
export function getBigIntBytes(number: number): Uint8Array {
  if (typeof BigInt !== "undefined") {
    const message = new Uint8Array(8);
    const view = new DataView(message.buffer);

    view.setBigUint64(0, BigInt(number), false);
    return message;
  }

  const hex = number.toString(16).padStart(16, "0");
  return hexToBytes(hex);
}
