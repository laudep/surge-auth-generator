import fs = require('fs');
import path = require('path');
import appRoot = require('app-root-path');
import isValid = require('is-valid-path');

/**
 * User authentication credentials
 *
 * @interface Credential
 */
export interface Credential {
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
export const getAllCasePermutations = (
  input: string | undefined,
): string[] => {
  if (!input || typeof input === undefined) {
    return [];
  }
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
  return Array.from(new Set(stringPermutations));
};

/**
 * @description Generate AUTH file string for given credentials
 * @param credentials the credentials to convert to AUTH file string
 * @returns the credential string
 * @example
 * // returns 'foo:bar'
 * getCredentialString({username: 'foo', password: 'bar', isCaseInsensitive: false});
 */
export const getCredentialString = (credential: Credential) => {
  const { username, password, caseInsensitive } = credential;

  return caseInsensitive
    ? getAllCasePermutations(username)
        .map((name) => `${name}:${password || ''}`)
        .join('\n')
    : `${username || ''}:${password || ''}`;
};

/**
 * @description Writes a file to the filesystem
 * @param filePath the full path of the file
 * @param content the file contents
 * @returns promise resolving in the full path of the written file
 */
const writeFile = (
  filePath: string,
  content: string,
): Promise<string | NodeJS.ErrnoException> =>
  new Promise((resolveWrite, rejectWrite) => {
    fs.promises
      .writeFile(filePath, content)
      .then(() => {
        console.log(`File generated at ${filePath}`);
        resolveWrite(filePath);
      })
      .catch((error) => rejectWrite(error));
  });

/**
 * @description Creates a directory if it doesn't exist yet
 * @param directoryPath the path of the directory
 * @returns promise
 */
const createDirectoryIfNotExist = async (directoryPath: string) => {
  const directoryExists = await fs.promises
    .access(directoryPath)
    .then(() => true)
    .catch(() => false);
  if (!directoryExists) {
    await fs.promises.mkdir(directoryPath, { recursive: true });
  }
};

/**
 * @description Write an AUTH file to the file system
 * @param content the file contents
 * @param directory the output directory
 * @returns promise resolving in the full path of the written file
 */
export const writeAuthFile = async (
  content: string,
  directory: string | undefined,
): Promise<string | NodeJS.ErrnoException> => {
  const outDir = path.resolve(directory ? directory : '');
  const outPath = path.resolve(outDir, 'AUTH');

  // check whether path contains invalid characters
  if (!isValid(outDir)) {
    throw new Error('Invalid path');
  }

  await createDirectoryIfNotExist(outDir);
  return await writeFile(outPath, content);
};

/**
 * @description Resolves a directory path
 * @param [passedDirectory] the path to be solved
 * @returns the resolved directory or the current app root when no directory supplied)
 */
const resolveDirectory = (passedDirectory?: string) => {
  if (!passedDirectory) {
    // set output directory to app root when no directory specified
    passedDirectory = appRoot.path;
  }
  return path.resolve(passedDirectory);
};

/**
 * @description Logs a credential to console
 * @param credential the credential to be logged
 */
const logCredential = (credential: Credential) => {
  const { username, password, caseInsensitive } = credential;
  const caseSensitiveString = ` (${
    caseInsensitive ? 'not ' : ''
  }case sensitive)`;
  console.log(
    `${
      username
        ? `Set username: ${username}${caseSensitiveString}`
        : 'No username set.'
    } (${caseSensitiveString})`,
  );
  console.log(
    `${password ? `Set password: ${password}` : 'No password set.'}`,
  );
};

/**
 * @description Write an AUTH file with given credentials
 * @param [credentials={}] the credentials to be written
 * @param [directory=require.main.filename] the output directory (defaults to project root)
 */
export const generate = (
  credentials: Credential | Credential[] = {},
  directory?: string,
): Promise<string | NodeJS.ErrnoException> =>
  new Promise(async (resolveGenerate, rejectGenerate) => {
    console.log('Generating AUTH file...');

    const fileContents = Array.isArray(credentials)
      ? credentials
          .map((credential) => getCredentialString(credential))
          .join('\n')
      : getCredentialString(credentials);

    Array.isArray(credentials)
      ? console.log('Multiple credentials set.')
      : logCredential(credentials);

    writeAuthFile(fileContents, resolveDirectory(directory))
      .then((authFilePath) => resolveGenerate(authFilePath))
      .catch((error) => rejectGenerate(error));
  });
