[QIWI SDK](README.md) / Exports

# QIWI SDK

## Table of contents

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

### Namespaces

- [default](modules/default.md)

### Enumerations

- [HmacAlgorithm](enums/HmacAlgorithm.md)

### Classes

- [SecretKey](classes/SecretKey.md)

### Type Aliases

- [HOTPOptions](modules.md#hotpoptions)
- [Hmac](modules.md#hmac)
- [RandomBytes](modules.md#randombytes)
- [TOTPOptions](modules.md#totpoptions)
- [UriOptions](modules.md#urioptions)

### Functions

- [exportKey](modules.md#exportkey)
- [generateKey](modules.md#generatekey)
- [getDefaultHOTPOptions](modules.md#getdefaulthotpoptions)
- [getDefaultTOTPOptions](modules.md#getdefaulttotpoptions)
- [getKeyUri](modules.md#getkeyuri)
- [hotp](modules.md#hotp)
- [importKey](modules.md#importkey)
- [totp](modules.md#totp)

## Type Aliases

### HOTPOptions

Ƭ **HOTPOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `algorithm?` | [`HmacAlgorithm`](enums/HmacAlgorithm.md) |
| `counter` | `number` |
| `digits?` | `number` |
| `secret` | [`SecretKey`](classes/SecretKey.md) |

#### Defined in

dist/hotp.options.d.ts:3

___

### Hmac

Ƭ **Hmac**: (`algorithm`: [`HmacAlgorithm`](enums/HmacAlgorithm.md), `key`: `Uint8Array`, `message`: `Uint8Array`) => `Promise`<`Uint8Array`\>

#### Type declaration

▸ (`algorithm`, `key`, `message`): `Promise`<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`HmacAlgorithm`](enums/HmacAlgorithm.md) |
| `key` | `Uint8Array` |
| `message` | `Uint8Array` |

##### Returns

`Promise`<`Uint8Array`\>

#### Defined in

dist/crypto/hmac.d.ts:6

___

### RandomBytes

Ƭ **RandomBytes**: (`size`: `number`) => `Promise`<`Uint8Array`\>

#### Type declaration

▸ (`size`): `Promise`<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

##### Returns

`Promise`<`Uint8Array`\>

#### Defined in

dist/crypto/random.d.ts:1

___

### TOTPOptions

Ƭ **TOTPOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `algorithm?` | [`HmacAlgorithm`](enums/HmacAlgorithm.md) |
| `digits?` | `number` |
| `now?` | `Date` |
| `pad?` | `boolean` |
| `secret` | [`SecretKey`](classes/SecretKey.md) |
| `stepSeconds?` | `number` |

#### Defined in

dist/totp.options.d.ts:3

___

### UriOptions

Ƭ **UriOptions**: { `type`: ``"hotp"``  } & [`CommonOptions`](modules/internal_.md#commonoptions) & [`HOTPOptions`](modules.md#hotpoptions) \| { `type`: ``"totp"``  } & [`CommonOptions`](modules/internal_.md#commonoptions) & [`TOTPOptions`](modules.md#totpoptions)

#### Defined in

dist/uri.d.ts:7

## Functions

### exportKey

▸ **exportKey**(`key`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SecretKey`](classes/SecretKey.md) |

#### Returns

`string`

#### Defined in

dist/key.actions.d.ts:27

___

### generateKey

▸ **generateKey**(`random`, `size?`): `Promise`<[`SecretKey`](classes/SecretKey.md)\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `random` | [`RandomBytes`](modules.md#randombytes) |
| `size?` | `number` |

#### Returns

`Promise`<[`SecretKey`](classes/SecretKey.md)\>

#### Defined in

dist/key.actions.d.ts:11

___

### getDefaultHOTPOptions

▸ **getDefaultHOTPOptions**(): `Required`<[`HOTPOptions`](modules.md#hotpoptions)\>

**`Export`**

#### Returns

`Required`<[`HOTPOptions`](modules.md#hotpoptions)\>

{Required<HOTPOptions>}

#### Defined in

dist/hotp.options.d.ts:15

___

### getDefaultTOTPOptions

▸ **getDefaultTOTPOptions**(): `Required`<[`TOTPOptions`](modules.md#totpoptions)\>

**`Export`**

#### Returns

`Required`<[`TOTPOptions`](modules.md#totpoptions)\>

{Required<TOTPOptions>}

#### Defined in

dist/totp.options.d.ts:17

___

### getKeyUri

▸ **getKeyUri**(`options`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UriOptions`](modules.md#urioptions) |

#### Returns

`string`

{string}

#### Defined in

dist/uri.d.ts:19

___

### hotp

▸ **hotp**(`hmac`, `options`): `Promise`<`string`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `hmac` | [`Hmac`](modules.md#hmac) |
| `options` | [`HOTPOptions`](modules.md#hotpoptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/hotp.d.ts:11

___

### importKey

▸ **importKey**(`base32text`): [`SecretKey`](classes/SecretKey.md)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `base32text` | `string` |

#### Returns

[`SecretKey`](classes/SecretKey.md)

#### Defined in

dist/key.actions.d.ts:19

___

### totp

▸ **totp**(`hmac`, `options`): `Promise`<`string`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `hmac` | [`Hmac`](modules.md#hmac) |
| `options` | [`TOTPOptions`](modules.md#totpoptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/totp.d.ts:11
