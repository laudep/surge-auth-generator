[surge-auth-generator](README.md)

# surge-auth-generator

## Index

### Interfaces

* [Credential](interfaces/credential.md)

### Variables

* [appRoot](README.md#approot)
* [authFile1](README.md#const-authfile1)
* [authFile2](README.md#const-authfile2)
* [authFile3](README.md#const-authfile3)
* [authFile4](README.md#const-authfile4)
* [authInCwd](README.md#const-authincwd)
* [del](README.md#del)
* [fs](README.md#fs)
* [isValid](README.md#isvalid)
* [johnDoeCredentialString](README.md#const-johndoecredentialstring)
* [path](README.md#path)
* [testCredentialString](README.md#const-testcredentialstring)
* [testCredentials](README.md#const-testcredentials)
* [testDir1](README.md#const-testdir1)
* [testDir2](README.md#const-testdir2)
* [testDir3](README.md#const-testdir3)
* [testDir4](README.md#const-testdir4)
* [testDir5](README.md#const-testdir5)
* [testDir6](README.md#const-testdir6)
* [testDir7](README.md#const-testdir7)
* [tmpDir](README.md#const-tmpdir)

### Functions

* [cleanup](README.md#const-cleanup)
* [createDirectoryIfNotExist](README.md#const-createdirectoryifnotexist)
* [createIfNotExists](README.md#const-createifnotexists)
* [expectPermissionError](README.md#const-expectpermissionerror)
* [generate](README.md#const-generate)
* [getAllCasePermutations](README.md#const-getallcasepermutations)
* [getCredentialString](README.md#const-getcredentialstring)
* [logCredential](README.md#const-logcredential)
* [readFile](README.md#const-readfile)
* [resolveDirectory](README.md#const-resolvedirectory)
* [writeAuthFile](README.md#const-writeauthfile)
* [writeFile](README.md#const-writefile)

### Object literals

* [johnDoeCredential](README.md#const-johndoecredential)
* [testCredential](README.md#const-testcredential)

## Variables

###  appRoot

• **appRoot**: *RootPath*

*Defined in [src/index.ts:3](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L3)*

*Defined in [src/__tests__/generate.test.ts:4](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L4)*

___

### `Const` authFile1

• **authFile1**: *string* = path.resolve(testDir1, 'AUTH')

*Defined in [src/__tests__/generate.test.ts:20](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L20)*

___

### `Const` authFile2

• **authFile2**: *string* = path.resolve(testDir2, 'AUTH')

*Defined in [src/__tests__/generate.test.ts:21](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L21)*

___

### `Const` authFile3

• **authFile3**: *string* = path.resolve(testDir3, 'AUTH')

*Defined in [src/__tests__/generate.test.ts:22](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L22)*

___

### `Const` authFile4

• **authFile4**: *string* = path.resolve(testDir4, 'AUTH')

*Defined in [src/__tests__/generate.test.ts:23](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L23)*

___

### `Const` authInCwd

• **authInCwd**: *string* = path.resolve(process.cwd(), 'AUTH')

*Defined in [src/__tests__/generate.test.ts:24](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L24)*

___

###  del

• **del**: *object*

*Defined in [src/__tests__/generate.test.ts:3](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L3)*

#### Type declaration:

▸ (`patterns`: string | keyof string[], `options?`: del.Options): *Promise‹string[]›*

Delete files and directories using glob patterns.

Note that glob patterns can only contain forward-slashes, not backward-slashes. Windows file paths can use backward-slashes as long as the path does not contain any glob-like characters, otherwise use `path.posix.join()` instead of `path.join()`.

**`example`** 
```
import del = require('del');

(async () => {
const deletedPaths = await del(['temp/*.js', '!temp/unicorn.js']);

console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
})();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`patterns` | string &#124; keyof string[] | See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns). - [Pattern examples with expected matches](https://github.com/sindresorhus/multimatch/blob/master/test/test.js) - [Quick globbing pattern overview](https://github.com/sindresorhus/multimatch#globbing-patterns) |
`options?` | del.Options | You can specify any of the [`globby` options](https://github.com/sindresorhus/globby#options) in addition to the `del` options. In contrast to the `globby` defaults, `expandDirectories`, `onlyFiles`, and `followSymbolicLinks` are `false` by default. |

* **sync**(`patterns`: string | keyof string[], `options?`: del.Options): *string[]*

___

###  fs

• **fs**: *"fs"*

*Defined in [src/index.ts:1](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L1)*

*Defined in [src/__tests__/generate.test.ts:1](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L1)*

___

###  isValid

• **isValid**: *any*

*Defined in [src/index.ts:4](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L4)*

___

### `Const` johnDoeCredentialString

• **johnDoeCredentialString**: *"john:doe
John:doe
jOhn:doe
JOhn:doe
joHn:doe
JoHn:doe
jOHn:doe
JOHn:doe
johN:doe
JohN:doe
jOhN:doe
JOhN:doe
joHN:doe
JoHN:doe
jOHN:doe
JOHN:doe"* = `john:doe\nJohn:doe\njOhn:doe\nJOhn:doe\njoHn:doe\nJoHn:doe\njOHn:doe\nJOHn:doe\njohN:doe\nJohN:doe\njOhN:doe\nJOhN:doe\njoHN:doe\nJoHN:doe\njOHN:doe\nJOHN:doe`

*Defined in [src/__tests__/credentials.test.ts:14](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L14)*

___

###  path

• **path**: *PlatformPath*

*Defined in [src/index.ts:2](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L2)*

*Defined in [src/__tests__/generate.test.ts:2](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L2)*

___

### `Const` testCredentialString

• **testCredentialString**: *"test:test"* = "test:test"

*Defined in [src/__tests__/credentials.test.ts:6](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L6)*

___

### `Const` testCredentials

• **testCredentials**: *[Credential](interfaces/credential.md)[]* = [
  testCredential,
  {
    username: 'john',
    password: 'doe',
  },
]

*Defined in [src/__tests__/generate.test.ts:61](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L61)*

___

### `Const` testDir1

• **testDir1**: *string* = path.resolve(__dirname, 'tmp/test1')

*Defined in [src/__tests__/generate.test.ts:13](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L13)*

___

### `Const` testDir2

• **testDir2**: *string* = path.resolve(__dirname, 'tmp/test2')

*Defined in [src/__tests__/generate.test.ts:14](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L14)*

___

### `Const` testDir3

• **testDir3**: *string* = path.resolve(__dirname, 'tmp/test3')

*Defined in [src/__tests__/generate.test.ts:15](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L15)*

___

### `Const` testDir4

• **testDir4**: *string* = path.resolve(__dirname, 'tmp/test4/test')

*Defined in [src/__tests__/generate.test.ts:16](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L16)*

___

### `Const` testDir5

• **testDir5**: *string* = path.resolve(__dirname, 'tmp/test5')

*Defined in [src/__tests__/generate.test.ts:17](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L17)*

___

### `Const` testDir6

• **testDir6**: *string* = path.resolve(__dirname, 'tmp/test6')

*Defined in [src/__tests__/generate.test.ts:18](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L18)*

___

### `Const` testDir7

• **testDir7**: *string* = path.resolve(testDir6, 'new')

*Defined in [src/__tests__/generate.test.ts:19](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L19)*

___

### `Const` tmpDir

• **tmpDir**: *string* = path.resolve(__dirname, 'tmp')

*Defined in [src/__tests__/generate.test.ts:12](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L12)*

## Functions

### `Const` cleanup

▸ **cleanup**(): *Promise‹string[]›*

*Defined in [src/__tests__/generate.test.ts:26](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L26)*

**Returns:** *Promise‹string[]›*

___

### `Const` createDirectoryIfNotExist

▸ **createDirectoryIfNotExist**(`directoryPath`: string): *Promise‹void›*

*Defined in [src/index.ts:97](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L97)*

**`description`** Creates a directory if it doesn't exist yet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directoryPath` | string | the path of the directory |

**Returns:** *Promise‹void›*

promise

___

### `Const` createIfNotExists

▸ **createIfNotExists**(`directory`: fs.PathLike): *void*

*Defined in [src/__tests__/generate.test.ts:32](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L32)*

**`description`** Create a directory if it doesn't exist

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directory` | fs.PathLike | the directory to check/create  |

**Returns:** *void*

___

### `Const` expectPermissionError

▸ **expectPermissionError**(`credential`: [Credential](interfaces/credential.md), `readonlyDir`: string, `testDir?`: undefined | string): *Promise‹void›*

*Defined in [src/__tests__/generate.test.ts:142](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`credential` | [Credential](interfaces/credential.md) |
`readonlyDir` | string |
`testDir?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

### `Const` generate

▸ **generate**(`credentials`: [Credential](interfaces/credential.md) | [Credential](interfaces/credential.md)[], `directory?`: undefined | string): *Promise‹string | ErrnoException›*

*Defined in [src/index.ts:168](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L168)*

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

*Defined in [src/index.ts:27](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L27)*

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

*Defined in [src/index.ts:62](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L62)*

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

*Defined in [src/index.ts:146](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L146)*

**`description`** Logs a credential to console

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`credential` | [Credential](interfaces/credential.md) | the credential to be logged  |

**Returns:** *void*

___

### `Const` readFile

▸ **readFile**(`filePath`: string): *Promise‹string | Buffer›*

*Defined in [src/__tests__/generate.test.ts:46](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |

**Returns:** *Promise‹string | Buffer›*

___

### `Const` resolveDirectory

▸ **resolveDirectory**(`passedDirectory?`: undefined | string): *string*

*Defined in [src/index.ts:134](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L134)*

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

*Defined in [src/index.ts:113](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L113)*

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

*Defined in [src/index.ts:78](https://github.com/laudep/surge-auth-generator/blob/a226392/src/index.ts#L78)*

**`description`** Writes a file to the filesystem

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string | the full path of the file |
`content` | string | the file contents |

**Returns:** *Promise‹string | ErrnoException›*

promise resolving in the full path of the written file

## Object literals

### `Const` johnDoeCredential

### ▪ **johnDoeCredential**: *object*

*Defined in [src/__tests__/credentials.test.ts:8](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L8)*

###  caseInsensitive

• **caseInsensitive**: *boolean* = true

*Defined in [src/__tests__/credentials.test.ts:11](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L11)*

###  password

• **password**: *string* = "doe"

*Defined in [src/__tests__/credentials.test.ts:10](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L10)*

###  username

• **username**: *string* = "john"

*Defined in [src/__tests__/credentials.test.ts:9](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L9)*

___

### `Const` testCredential

### ▪ **testCredential**: *object*

*Defined in [src/__tests__/credentials.test.ts:2](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L2)*

*Defined in [src/__tests__/generate.test.ts:56](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L56)*

###  password

• **password**: *string* = "test"

*Defined in [src/__tests__/credentials.test.ts:4](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L4)*

*Defined in [src/__tests__/generate.test.ts:58](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L58)*

###  username

• **username**: *string* = "test"

*Defined in [src/__tests__/credentials.test.ts:3](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/credentials.test.ts#L3)*

*Defined in [src/__tests__/generate.test.ts:57](https://github.com/laudep/surge-auth-generator/blob/a226392/src/__tests__/generate.test.ts#L57)*
