[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / TOTP

# Class: TOTP

[index](../modules/index.md).TOTP

**`Export`**

## Table of contents

### Constructors

- [constructor](index.TOTP.md#constructor)

### Properties

- [\_hmac](index.TOTP.md#_hmac)
- [options](index.TOTP.md#options)

### Methods

- [checkCode](index.TOTP.md#checkcode)
- [generateCode](index.TOTP.md#generatecode)
- [getUri](index.TOTP.md#geturi)

## Constructors

### constructor

• **new TOTP**(`_hmac`, `options`)

Creates an instance of TOTP.

**`Memberof`**

TOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hmac` | [`Hmac`](../modules/index.md#hmac) |
| `options` | [`TOTPOptions`](../modules/index.md#totpoptions) |

#### Defined in

dist/totp.class.d.ts:18

## Properties

### \_hmac

• `Private` `Readonly` **\_hmac**: `any`

#### Defined in

dist/totp.class.d.ts:10

___

### options

• **options**: [`TOTPOptions`](../modules/index.md#totpoptions)

#### Defined in

dist/totp.class.d.ts:11

## Methods

### checkCode

▸ **checkCode**(`code`, `overrides?`): `Promise`<`boolean`\>

**`Memberof`**

TOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `overrides?` | `Partial`<[`TOTPOptions`](../modules/index.md#totpoptions)\> |

#### Returns

`Promise`<`boolean`\>

{Promise<boolean>}

#### Defined in

dist/totp.class.d.ts:36

___

### generateCode

▸ **generateCode**(`overrides?`): `Promise`<`string`\>

**`Memberof`**

TOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Partial`<[`TOTPOptions`](../modules/index.md#totpoptions)\> |

#### Returns

`Promise`<`string`\>

{Promise<string>}

#### Defined in

dist/totp.class.d.ts:43

___

### getUri

▸ **getUri**(`name`, `issuer`): `string`

**`Memberof`**

TOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `issuer` | `string` |

#### Returns

`string`

{string}

#### Defined in

dist/totp.class.d.ts:27
