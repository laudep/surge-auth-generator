[surge-auth-generator](README.md)

# surge-auth-generator

## Index

### Interfaces

* [Credential](interfaces/credential.md)

### Variables

* [appRoot](README.md#approot)
* [fs](README.md#fs)
* [isValid](README.md#isvalid)
* [path](README.md#path)

### Functions

* [createDirectoryIfNotExist](README.md#const-createdirectoryifnotexist)
* [generate](README.md#const-generate)
* [getAllCasePermutations](README.md#const-getallcasepermutations)
* [getCredentialString](README.md#const-getcredentialstring)
* [logCredential](README.md#const-logcredential)
* [resolveDirectory](README.md#const-resolvedirectory)
* [writeAuthFile](README.md#const-writeauthfile)
* [writeFile](README.md#const-writefile)

## Variables

###  appRoot

• **appRoot**: *RootPath*

*Defined in [index.ts:3](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L3)*

___

###  fs

• **fs**: *"fs"*

*Defined in [index.ts:1](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L1)*

___

###  isValid

• **isValid**: *any*

*Defined in [index.ts:4](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L4)*

___

###  path

• **path**: *PlatformPath*

*Defined in [index.ts:2](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L2)*

## Functions

### `Const` createDirectoryIfNotExist

▸ **createDirectoryIfNotExist**(`directoryPath`: string): *Promise‹void›*

*Defined in [index.ts:98](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L98)*

**`description`** Creates a directory if it doesn't exist yet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directoryPath` | string | the path of the directory |

**Returns:** *Promise‹void›*

promise

___

### `Const` generate

▸ **generate**(`credentials`: [Credential](interfaces/credential.md) | [Credential](interfaces/credential.md)[], `directory?`: undefined | string): *Promise‹string | ErrnoException›*

*Defined in [index.ts:169](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L169)*

**`description`** Write an AUTH file with given credentials

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`credentials` | [Credential](interfaces/credential.md) &#124; [Credential](interfaces/credential.md)[] | {} |
`directory?` | undefined &#124; string | - |

**Returns:** *Promise‹string | ErrnoException›*

___

### `Const` getAllCasePermutations

▸ **getAllCasePermutations**(`input`: string | undefined): *string[]*

*Defined in [index.ts:28](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L28)*

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

▸ **getCredentialString**(`credential`: [Credential](interfaces/credential.md)): *string*

*Defined in [index.ts:63](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L63)*

**`description`** Generate AUTH file string for given credentials

**`example`** 
// returns 'foo:bar'
getCredentialString({username: 'foo', password: 'bar', isCaseInsensitive: false});

**Parameters:**

Name | Type |
------ | ------ |
`credential` | [Credential](interfaces/credential.md) |

**Returns:** *string*

the credential string

___

### `Const` logCredential

▸ **logCredential**(`credential`: [Credential](interfaces/credential.md)): *void*

*Defined in [index.ts:147](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L147)*

**`description`** Logs a credential to console

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`credential` | [Credential](interfaces/credential.md) | the credential to be logged  |

**Returns:** *void*

___

### `Const` resolveDirectory

▸ **resolveDirectory**(`passedDirectory?`: undefined | string): *string*

*Defined in [index.ts:135](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L135)*

**`description`** Resolves a directory path

**Parameters:**

Name | Type |
------ | ------ |
`passedDirectory?` | undefined &#124; string |

**Returns:** *string*

the resolved directory or the current app root when no directory supplied)

___

### `Const` writeAuthFile

▸ **writeAuthFile**(`content`: string, `directory`: string | undefined): *Promise‹string | ErrnoException›*

*Defined in [index.ts:114](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L114)*

**`description`** Write an AUTH file to the file system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | the file contents |
`directory` | string &#124; undefined | the output directory |

**Returns:** *Promise‹string | ErrnoException›*

promise resolving in the full path of the written file

___

### `Const` writeFile

▸ **writeFile**(`filePath`: string, `content`: string): *Promise‹string | ErrnoException›*

*Defined in [index.ts:79](https://github.com/laudep/surge-auth-generator/blob/cbaa17a/src/index.ts#L79)*

**`description`** Writes a file to the filesystem

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string | the full path of the file |
`content` | string | the file contents |

**Returns:** *Promise‹string | ErrnoException›*

promise resolving in the full path of the written file
