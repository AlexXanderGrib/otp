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

- [SecretKey](../classes/index.SecretKey.md)

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

| Name | Type |
| :------ | :------ |
| `algorithm?` | [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md) |
| `counter` | `number` |
| `digits?` | `number` |
| `secret` | [`SecretKey`](../classes/index.SecretKey.md) |

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
| `algorithm?` | [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md) |
| `digits?` | `number` |
| `now?` | `Date` |
| `pad?` | `boolean` |
| `secret` | [`SecretKey`](../classes/index.SecretKey.md) |
| `stepSeconds?` | `number` |

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

▸ **generateKey**(`random`, `size?`): `Promise`<[`SecretKey`](../classes/index.SecretKey.md)\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `random` | [`RandomBytes`](index.md#randombytes) |
| `size?` | `number` |

#### Returns

`Promise`<[`SecretKey`](../classes/index.SecretKey.md)\>

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

dist/hotp.options.d.ts:15

___

### getDefaultTOTPOptions

▸ **getDefaultTOTPOptions**(): `Required`<[`TOTPOptions`](index.md#totpoptions)\>

**`Export`**

#### Returns

`Required`<[`TOTPOptions`](index.md#totpoptions)\>

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
| `options` | [`UriOptions`](index.md#urioptions) |

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

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `hmac` | [`Hmac`](index.md#hmac) |
| `options` | [`TOTPOptions`](index.md#totpoptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/totp.d.ts:11
