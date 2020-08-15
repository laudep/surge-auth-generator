import fs = require('fs');
import path = require('path');
import appRoot = require('app-root-path');

/**
 * User authentication credentials
 *
 * @interface Credential
 */
interface Credential {
  /** authentication username */
  username?: string;
  /** authentication password */
  password?: string;
  /** whether the username should be case insensitive during authentication */
  caseInsensitive?: boolean;
}

/**
 * @description Generate all case permutations for a given string
 * @param input the string for which to determine permutations
 * @returns all possible case permutations
 * @see adopted from {@link https://stackoverflow.com/a/27995370|stackoverflow answer}
 *  @license {@link https://creativecommons.org/licenses/by-sa/3.0/|Creative Commons licence 3.0}
 */
const getAllCasePermutations = (input: string | undefined): string[] => {
  if (!input) return [];
  const characters = input.split('');
  // amount of possible case combinations are equal to length squared
  const combinationCount = Math.pow(input.length, 2);

  const stringPermutations: string[] = [];
  for (let permIndex = 0; permIndex < combinationCount; permIndex++) {
    // update the capitalization depending on the current permutation
    /* tslint:disable:no-bitwise */
    characters.reduce((permutation, character, charIndex) => {
      characters[charIndex] =
        permutation & 1 ? character.toUpperCase() : character.toLowerCase();
      return permutation >> 1;
    }, permIndex);
    /* tslint:enable:no-bitwise */

    const result = characters.join('');
    stringPermutations.push(result);
  }
  return stringPermutations;
};

/**
 * @description Generate AUTH file string for given credentials
 * @param credentials the credentials to convert to AUTH file string
 * @returns the credential string
 * @example
 * // returns 'foo:bar'
 * getCredentialString({username: 'foo', password: 'bar', isCaseInsensitive: false});
 */
const getCredentialString = (credential: Credential) => {
  const { username, password, caseInsensitive } = credential || '';

  return caseInsensitive
    ? getAllCasePermutations(username)
        .map((name) => `${name}:${password || ''}`)
        .join('\n')
    : `${username || ''}:${password || ''}`;
};

/**
 * @description Write an AUTH file to the file system
 * @param content the file contents
 * @param directory the output directory
 * @returns promise resolving in the full path of the written file
 */
export const writeAuthFile = (
  content: string,
  directory: string | undefined,
): Promise<string> =>
  new Promise((resolve, reject) => {
    const outPath = path.resolve(directory ? directory : '', 'AUTH');
    fs.writeFile(outPath, content, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`File generated at ${outPath}`);
        resolve(outPath);
      }
    });
  });

/**
 * @description Write an AUTH file with given credentials
 * @param credentials the credentials to be written
 * @param [directory=require.main.filename] the string for which to determine permutations (defaults to project root)
 */
export const generate = (
  credentials: Credential | Credential[],
  directory?: string,
): Promise<string> =>
  new Promise(async (resolve, reject) => {
    console.log('Generating AUTH file...');
    if (!directory && typeof require.main !== 'undefined') {
      // set output directory to app root when no directory specified
      directory = appRoot.path;
    } else if (!directory) {
      directory = '';
    }
    directory = path.resolve(directory);

    let fileContents = '';
    if (Array.isArray(credentials)) {
      fileContents = credentials
        .map((credential) => getCredentialString(credential))
        .join('\n');
    } else {
      const { username, password, caseInsensitive } = credentials;
      console.log(
        `${username ? `Set username: ${username}` : 'No username set.'} (${
          caseInsensitive ? 'not ' : ''
        }case sensitive)`,
      );
      console.log(
        `${password ? `Set password: ${password}` : 'No password set.'}`,
      );

      fileContents = getCredentialString(credentials);
    }

    writeAuthFile(fileContents, directory)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
