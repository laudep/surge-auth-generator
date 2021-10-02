surge-auth-generator

# surge-auth-generator

## Table of contents

### Interfaces

- [Credential](interfaces/Credential.md)

### Functions

- [generate](README.md#generate)
- [getAllCasePermutations](README.md#getallcasepermutations)
- [getCredentialString](README.md#getcredentialstring)
- [writeAuthFile](README.md#writeauthfile)

## Functions

### generate

▸ `Const` **generate**(`credentials?`, `directory?`): `Promise`<`string` \| `ErrnoException`\>

**`description`** Write an AUTH file with given credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`Credential`](interfaces/Credential.md) \| [`Credential`](interfaces/Credential.md)[] |
| `directory?` | `string` |

#### Returns

`Promise`<`string` \| `ErrnoException`\>

#### Defined in

[index.ts:167](https://github.com/laudep/surge-auth-generator/blob/14e13ea/src/index.ts#L167)

___

### getAllCasePermutations

▸ `Const` **getAllCasePermutations**(`input`): `string`[]

**`description`** Generate all case permutations for a given string

**`see`** adopted from [stackoverflow answer](https://stackoverflow.com/a/27995370)

**`license`** [Creative Commons licence 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| `string` | the string for which to determine permutations |

#### Returns

`string`[]

all possible case permutations

#### Defined in

[index.ts:27](https://github.com/laudep/surge-auth-generator/blob/14e13ea/src/index.ts#L27)

___

### getCredentialString

▸ `Const` **getCredentialString**(`credential`): `string`

**`description`** Generate AUTH file string for given credentials

**`example`**
// returns 'foo:bar'
getCredentialString({username: 'foo', password: 'bar', isCaseInsensitive: false});

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](interfaces/Credential.md) |

#### Returns

`string`

the credential string

#### Defined in

[index.ts:62](https://github.com/laudep/surge-auth-generator/blob/14e13ea/src/index.ts#L62)

___

### writeAuthFile

▸ `Const` **writeAuthFile**(`content`, `directory`): `Promise`<`string` \| `ErrnoException`\>

**`description`** Write an AUTH file to the file system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | the file contents |
| `directory` | `undefined` \| `string` | the output directory |

#### Returns

`Promise`<`string` \| `ErrnoException`\>

promise resolving in the full path of the written file

#### Defined in

[index.ts:113](https://github.com/laudep/surge-auth-generator/blob/14e13ea/src/index.ts#L113)
