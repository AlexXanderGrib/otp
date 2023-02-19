/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const charTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const byteTable = [
  0xff, 0xff, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff,
  0xff, 0xff, 0xff, 0xff, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
  0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15,
  0x16, 0x17, 0x18, 0x19, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x01, 0x02,
  0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
  0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0xff, 0xff, 0xff,
  0xff, 0xff
];

/**
 *
 *
 * @param {Uint8Array} buffer
 * @return {number}
 */
function quintetCount(buffer: Uint8Array) {
  const quintets = Math.floor(buffer.length / 5);
  return buffer.length % 5 === 0 ? quintets : quintets + 1;
}

/**
 *
 *
 * @export
 * @param {Uint8Array} plain
 * @return {string}  {string}
 */
export function encode(plain: Uint8Array): string {
  let index = 0;
  let index2 = 0;
  let shiftIndex = 0;
  let digit = 0;
  const encoded = Array.from<number>({ length: quintetCount(plain) * 8 });
  /* byte by byte isn't as pretty as quintet by quintet but tests a bit
        faster. will have to revisit. */
  while (index < plain.length) {
    const current = plain[index]!;
    if (shiftIndex > 3) {
      digit = current & (0xff >> shiftIndex);
      shiftIndex = (shiftIndex + 5) % 8;
      digit =
        (digit << shiftIndex) |
        ((index + 1 < plain.length ? plain[index + 1]! : 0) >>
          (8 - shiftIndex));
      index++;
    } else {
      digit = (current >> (8 - (shiftIndex + 5))) & 0x1f;
      shiftIndex = (shiftIndex + 5) % 8;
      if (shiftIndex === 0) index++;
    }
    encoded[index2] = charTable.codePointAt(digit)!;
    index2++;
  }
  for (index = index2; index < encoded.length; index++) {
    encoded[index] = 0x3d; // '='.charCodeAt(0)
  }

  return String.fromCodePoint(...encoded);
}

/**
 *
 *
 * @export
 * @param {string} encoded
 * @return {Uint8Array}  {Uint8Array}
 */
export function decode(encoded: string): Uint8Array {
  let shiftIndex = 0;
  let plainDigit = 0;
  let plainChar = 0;
  let plainPos = 0;

  const decoded = new Uint8Array(Math.ceil((encoded.length * 5) / 8));
  const chars = encoded.split("").map((char) => char.codePointAt(0));

  /* byte by byte isn't as pretty as octet by octet but tests a bit
        faster. will have to revisit. */
  for (let index = 0; index < encoded.length; index++) {
    if (chars[index] === 0x3d) {
      // '='
      break;
    }
    const encodedByte = chars[index]! - 0x30;
    if (encodedByte < byteTable.length) {
      plainDigit = byteTable[encodedByte]!;
      if (shiftIndex <= 3) {
        shiftIndex = (shiftIndex + 5) % 8;
        if (shiftIndex === 0) {
          plainChar |= plainDigit;
          decoded[plainPos] = plainChar;
          plainPos++;
          plainChar = 0;
        } else {
          plainChar |= 0xff & (plainDigit << (8 - shiftIndex));
        }
      } else {
        shiftIndex = (shiftIndex + 5) % 8;
        plainChar |= 0xff & (plainDigit >>> shiftIndex);
        decoded[plainPos] = plainChar;
        plainPos++;
        plainChar = 0xff & (plainDigit << (8 - shiftIndex));
      }
    } else {
      throw new Error("Invalid input - it is not base32 encoded string");
    }
  }
  return decoded.slice(0, plainPos);
}
