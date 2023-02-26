[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HOTP

# Class: HOTP

[index](../modules/index.md).HOTP

**`Export`**

## Table of contents

### Constructors

- [constructor](index.HOTP.md#constructor)

### Properties

- [\_hmac](index.HOTP.md#_hmac)
- [options](index.HOTP.md#options)

### Methods

- [checkCode](index.HOTP.md#checkcode)
- [generateCode](index.HOTP.md#generatecode)
- [getUri](index.HOTP.md#geturi)
- [increment](index.HOTP.md#increment)

## Constructors

### constructor

• **new HOTP**(`_hmac`, `options`)

Creates an instance of HOTP.

**`Memberof`**

HOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hmac` | [`Hmac`](../modules/index.md#hmac) |
| `options` | [`HOTPOptions`](../modules/index.md#hotpoptions) |

#### Defined in

dist/hotp.class.d.ts:18

## Properties

### \_hmac

• `Private` `Readonly` **\_hmac**: `any`

#### Defined in

dist/hotp.class.d.ts:10

___

### options

• **options**: [`HOTPOptions`](../modules/index.md#hotpoptions)

#### Defined in

dist/hotp.class.d.ts:11

## Methods

### checkCode

▸ **checkCode**(`code`, `overrides?`): `Promise`<`boolean`\>

**`Memberof`**

HOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `overrides?` | `Partial`<[`HOTPOptions`](../modules/index.md#hotpoptions)\> |

#### Returns

`Promise`<`boolean`\>

{Promise<boolean>}

#### Defined in

dist/hotp.class.d.ts:36

___

### generateCode

▸ **generateCode**(`overrides?`): `Promise`<`string`\>

**`Memberof`**

HOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Partial`<[`HOTPOptions`](../modules/index.md#hotpoptions)\> |

#### Returns

`Promise`<`string`\>

{Promise<string>}

#### Defined in

dist/hotp.class.d.ts:43

___

### getUri

▸ **getUri**(`name`, `issuer`): `string`

**`Memberof`**

HOTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `issuer` | `string` |

#### Returns

`string`

{string}

#### Defined in

dist/hotp.class.d.ts:27

___

### increment

▸ **increment**(): `number`

**`Memberof`**

HOTP

#### Returns

`number`

next value of the counter

#### Defined in

dist/hotp.class.d.ts:50
