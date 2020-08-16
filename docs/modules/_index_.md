[surge-auth-generator](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Interfaces

* [Credential](../interfaces/_index_.credential.md)

### Variables

* [appRoot](_index_.md#approot)
* [fs](_index_.md#fs)
* [path](_index_.md#path)

### Functions

* [generate](_index_.md#const-generate)
* [getAllCasePermutations](_index_.md#const-getallcasepermutations)
* [getCredentialString](_index_.md#const-getcredentialstring)
* [writeAuthFile](_index_.md#const-writeauthfile)

## Variables

###  appRoot

• **appRoot**: *RootPath*

*Defined in [index.ts:3](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L3)*

___

###  fs

• **fs**: *"fs"*

*Defined in [index.ts:1](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L1)*

___

###  path

• **path**: *PlatformPath*

*Defined in [index.ts:2](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L2)*

## Functions

### `Const` generate

▸ **generate**(`credentials`: [Credential](../interfaces/_index_.credential.md) | [Credential](../interfaces/_index_.credential.md)[], `directory?`: undefined | string): *Promise‹string›*

*Defined in [index.ts:94](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L94)*

**`description`** Write an AUTH file with given credentials

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`credentials` | [Credential](../interfaces/_index_.credential.md) &#124; [Credential](../interfaces/_index_.credential.md)[] | {} |
`directory?` | undefined &#124; string | - |

**Returns:** *Promise‹string›*

___

### `Const` getAllCasePermutations

▸ **getAllCasePermutations**(`input`: string | undefined): *string[]*

*Defined in [index.ts:26](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L26)*

**`description`** Generate all case permutations for a given string

**`see`** adopted from [stackoverflow answer](https://stackoverflow.com/a/27995370)

**`license`** [Creative Commons licence 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string &#124; undefined | the string for which to determine permutations |

**Returns:** *string[]*

all possible case permutations

___

### `Const` getCredentialString

▸ **getCredentialString**(`credential`: [Credential](../interfaces/_index_.credential.md)): *string*

*Defined in [index.ts:57](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L57)*

**`description`** Generate AUTH file string for given credentials

**`example`** 
// returns 'foo:bar'
getCredentialString({username: 'foo', password: 'bar', isCaseInsensitive: false});

**Parameters:**

Name | Type |
------ | ------ |
`credential` | [Credential](../interfaces/_index_.credential.md) |

**Returns:** *string*

the credential string

___

### `Const` writeAuthFile

▸ **writeAuthFile**(`content`: string, `directory`: string | undefined): *Promise‹string›*

*Defined in [index.ts:73](https://github.com/laudep/surge-auth-generator/blob/ebd5beb/src/index.ts#L73)*

**`description`** Write an AUTH file to the file system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | the file contents |
`directory` | string &#124; undefined | the output directory |

**Returns:** *Promise‹string›*

promise resolving in the full path of the written file
