[QIWI SDK](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Modules

- [&lt;internal\&gt;](index._internal_.md)

### Namespaces

- [default](index.default.md)

### Enumerations

- [HmacAlgorithm](../enums/index.HmacAlgorithm.md)

### Classes

- [HOTP](../classes/index.HOTP.md)
- [SecretKey](../classes/index.SecretKey.md)
- [TOTP](../classes/index.TOTP.md)

### Type Aliases

- [HOTPOptions](index.md#hotpoptions)
- [Hmac](index.md#hmac)
- [RandomBytes](index.md#randombytes)
- [TOTPOptions](index.md#totpoptions)
- [UriOptions](index.md#urioptions)

### Functions

- [exportKey](index.md#exportkey)
- [generateKey](index.md#generatekey)
- [getDefaultHOTPOptions](index.md#getdefaulthotpoptions)
- [getDefaultTOTPOptions](index.md#getdefaulttotpoptions)
- [getKeyUri](index.md#getkeyuri)
- [hotp](index.md#hotp)
- [importKey](index.md#importkey)
- [totp](index.md#totp)

## Type Aliases

### HOTPOptions

Ƭ **HOTPOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm?` | [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md) | Hash algorithms for generating new codes. - Any other than `sha1` is not supported by Google Authenticator **`Default`** "sha1" |
| `counter` | `number` | Incrementing counter. From 0 to Number.MAX_SAFE_INTEGER (53 bits) |
| `digits?` | `number` | Count of digits. - Any other than `6` is not supported by Google Authenticator **`Default`** 6 |
| `secret` | [`SecretKey`](../classes/index.SecretKey.md) | Secret key |

#### Defined in

dist/hotp.options.d.ts:3

___

### Hmac

Ƭ **Hmac**: (`algorithm`: [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md), `key`: `Uint8Array`, `message`: `Uint8Array`) => `Promise`<`Uint8Array`\>

#### Type declaration

▸ (`algorithm`, `key`, `message`): `Promise`<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md) |
| `key` | `Uint8Array` |
| `message` | `Uint8Array` |

##### Returns

`Promise`<`Uint8Array`\>

#### Defined in

dist/crypto/hmac.d.ts:6

___

### RandomBytes

Ƭ **RandomBytes**: (`size`: `number`) => `Uint8Array`

#### Type declaration

▸ (`size`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

##### Returns

`Uint8Array`

#### Defined in

dist/crypto/random.d.ts:1

___

### TOTPOptions

Ƭ **TOTPOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm?` | [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md) | Hash algorithms for generating new codes. - Any other than `sha1` is not supported by Google Authenticator **`Default`** "sha1" |
| `digits?` | `number` | Count of digits. - Any other than `6` is not supported by Google Authenticator **`Default`** 6 |
| `now?` | `Date` | Current date **`Default`** Date() |
| `pad?` | `boolean` | Enables padding of secret key. - `true` - compatible with [RFC6238](https://www.ietf.org/rfc/rfc6238.txt) - `false` - compatible with Google Authenticator **`Default`** false |
| `secret` | [`SecretKey`](../classes/index.SecretKey.md) | Secret key |
| `stepSeconds?` | `number` | Interval in seconds between code generation - Any other than `30` is not supported by Google Authenticator **`Default`** 30 |

#### Defined in

dist/totp.options.d.ts:3

___

### UriOptions

Ƭ **UriOptions**: { `type`: ``"hotp"``  } & [`CommonOptions`](index._internal_.md#commonoptions) & [`HOTPOptions`](index.md#hotpoptions) \| { `type`: ``"totp"``  } & [`CommonOptions`](index._internal_.md#commonoptions) & [`TOTPOptions`](index.md#totpoptions)

#### Defined in

dist/uri.d.ts:7

## Functions

### exportKey

▸ **exportKey**(`key`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SecretKey`](../classes/index.SecretKey.md) |

#### Returns

`string`

#### Defined in

dist/key.actions.d.ts:27

___

### generateKey

▸ **generateKey**(`random`, `size?`): [`SecretKey`](../classes/index.SecretKey.md)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `random` | [`RandomBytes`](index.md#randombytes) |
| `size?` | `number` |

#### Returns

[`SecretKey`](../classes/index.SecretKey.md)

#### Defined in

dist/key.actions.d.ts:11

___

### getDefaultHOTPOptions

▸ **getDefaultHOTPOptions**(): `Required`<[`HOTPOptions`](index.md#hotpoptions)\>

**`Export`**

#### Returns

`Required`<[`HOTPOptions`](index.md#hotpoptions)\>

{Required<HOTPOptions>}

#### Defined in

dist/hotp.options.d.ts:31

___

### getDefaultTOTPOptions

▸ **getDefaultTOTPOptions**(): `Required`<[`TOTPOptions`](index.md#totpoptions)\>

**`Export`**

#### Returns

`Required`<[`TOTPOptions`](index.md#totpoptions)\>

{Required<TOTPOptions>}

#### Defined in

dist/totp.options.d.ts:46

___

### getKeyUri

▸ **getKeyUri**(`options`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UriOptions`](index.md#urioptions) |

#### Returns

`string`

{string}

#### Defined in

dist/uri.d.ts:19

___

### hotp

▸ **hotp**(`hmac`, `options`): `Promise`<`string`\>

Generates HOTP code from secret key, counter and options

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `hmac` | [`Hmac`](index.md#hmac) |
| `options` | [`HOTPOptions`](index.md#hotpoptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/hotp.d.ts:11

___

### importKey

▸ **importKey**(`base32text`): [`SecretKey`](../classes/index.SecretKey.md)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `base32text` | `string` |

#### Returns

[`SecretKey`](../classes/index.SecretKey.md)

#### Defined in

dist/key.actions.d.ts:19

___

### totp

▸ **totp**(`hmac`, `options`): `Promise`<`string`\>

Generates TOTP code from secret key and options

**`Export`**

**`Throws`**

if HMAC algorithm is invalid. Use [HmacAlgorithm](../enums/index.HmacAlgorithm.md) to avoid this

#### Parameters

| Name | Type |
| :------ | :------ |
| `hmac` | [`Hmac`](index.md#hmac) |
| `options` | [`TOTPOptions`](index.md#totpoptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/totp.d.ts:12
