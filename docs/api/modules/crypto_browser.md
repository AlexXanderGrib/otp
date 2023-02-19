[QIWI SDK](../README.md) / [Modules](../modules.md) / crypto-browser

# Module: crypto-browser

## Table of contents

### Functions

- [hmac](crypto_browser.md#hmac)
- [randomBytes](crypto_browser.md#randombytes)

## Functions

### hmac

▸ **hmac**(`algorithm`, `key`, `message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`HmacAlgorithm`](../enums/index.HmacAlgorithm.md) |
| `key` | `Uint8Array` |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

dist/crypto/hmac.d.ts:6

___

### randomBytes

▸ **randomBytes**(`size`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

dist/crypto/random.d.ts:1
