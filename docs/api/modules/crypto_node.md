[QIWI SDK](../README.md) / [Modules](../modules.md) / crypto-node

# Module: crypto-node

## Table of contents

### Functions

- [hmac](crypto_node.md#hmac)
- [randomBytes](crypto_node.md#randombytes)

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

▸ **randomBytes**(`size`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Uint8Array`

#### Defined in

dist/crypto/random.d.ts:1
