[surge-auth-generator](README.md) › [Globals](globals.md)

# surge-auth-generator

# surge-auth-generator
> Generate AUTH files for basic authentication in surge.sh projects

[![NPM Version][npm-image]][npm-url]

## Installation
``` bash
$ npm install --save-dev surge-auth-generator
```

## Usage
### Credentials
The package works with a custom object type for authentication credentials.  
Each property is optional and can be left out.  
The special property ```caseInsensitive``` can be used to indicate that a username is not case sensitive.
``` ts
/**
 * @interface Credential
 */
interface Credential {
    /** authentication username */
    username?: string;
    /** authentication password */
    password?: string;
    /** whether the username should be case insensitive */
    caseInsensitive?: boolean;
}
```
``` js
const generate: (credentials?: Credential | Credential[], directory?: string | undefined) => Promise<string>
@description — Write an AUTH file with given credentials

@param credentials — the credentials to be written

@param directory — the output directory (defaults to project root)
``` js
AUTH files can be created using the generate method.
All parameters are optional.
``` js
const authGenerator = require('surge-auth-generator');
authGenerator.generate({
    username: 'john',
    password: 'doe'
});
```

## License

[MIT](https://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/surge-auth-generator.svg
[npm-url]: https://www.npmjs.com/package/surge-auth-generator
