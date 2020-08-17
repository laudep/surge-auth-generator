<p align="center">
  <img height="250" src="https://surge.sh/images/logos/svg/surge-logo.svg">
</p>
<h1 align="center"> surge-auth-generator </h1>
<p align="center">
  <b>Generate AUTH files for basic authentication in surge.sh projects</b>
</p>

[![NPM Version][npm-badge]][npm-url] 
[![License][license-badge]][license-url]
[![Codecov][codecov-badge]][codecov-url]
[![Github Actions][actions-badge]][actions-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Description
surge-auth-generator helps generate AUTH files for setting up basic authentication on surge.sh projects.  
It makes supporting case insensitive users a breeze.  
See [surge help](https://surge.sh/help/adding-password-protection-to-a-project) for more info on authentication using AUTH files.
> <img width="400" src="https://surge.sh/images/help/adding-password-protection-to-a-project.gif">
## Installation
``` bash
$ npm install --save-dev surge-auth-generator
```

## Usage
### Import
``` js
const authGenerator = require('surge-auth-generator');
authGenerator.generate(credentials, directory);
```
or 
``` js
const { generate } = require('surge-auth-generator');
generate(credentials, directory);
```
### Examples

Create AUTH file in project root for john:doe.
``` js
authGenerator.generate({
    username: 'john',
    password: 'doe'
});
```

Create AUTH file with case insensitive username in project root  
(so authentication will work for 'John', 'john', 'JOHN', ...).
``` js
authGenerator.generate({
    username: 'john',
    password: 'doe',
    caseInsensitive: 'true'
});
```

Create AUTH file in dist folder for multiple users.

``` js
authGenerator.generate(
    [{
        username: 'john',
        password: 'doe'
    }, {
        username: 'jane',
        password: 'doe'
    }, {
        username: 'foo',
        password: 'bar'
    }], "dist");
```

## Documentation
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

### Generate function
AUTH files can be created using the generate function.  
The method takes in a credential object or an array of credentials and an optional output path.  
All parameters are optional.  
The output path defaults to the current project's root directory.

``` js
const generate: (credentials?: Credential | Credential[], directory?: string | undefined) => Promise<string>
```


## License

[MIT](https://opensource.org/licenses/MIT)

[npm-badge]: https://img.shields.io/npm/v/surge-auth-generator.svg
[npm-url]: https://www.npmjs.com/package/surge-auth-generator
[license-badge]: https://img.shields.io/github/license/laudep/surge-auth-generator
[license-url]: https://github.com/laudep/surge-auth-generator/blob/master/LICENSE
[codecov-badge]: https://codecov.io/gh/laudep/surge-auth-generator/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/laudep/surge-auth-generator
[actions-badge]: https://github.com/laudep/surge-auth-generator/workflows/CI/badge.svg
[actions-url]: https://github.com/laudep/surge-auth-generator/actions
[daviddm-image]: https://img.shields.io/david/dev/laudep/surge-auth-generator
[daviddm-url]: https://david-dm.org/laudep/surge-auth-generator
