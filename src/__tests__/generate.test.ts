import fs = require('fs');
import path = require('path');
import del = require('del');
import appRoot = require('app-root-path');
import { generate, getCredentialString, writeAuthFile } from '../index';

const tmpDir = path.resolve(__dirname, 'tmp');
const testDir1 = path.resolve(__dirname, 'tmp/test1');
const testDir2 = path.resolve(__dirname, 'tmp/test2');
const testDir3 = path.resolve(__dirname, 'tmp/test3');
const testDir4 = path.resolve(__dirname, 'tmp/test4/test');
const authFile1 = path.resolve(testDir1, 'AUTH');
const authFile2 = path.resolve(testDir2, 'AUTH');
const authFile3 = path.resolve(testDir3, 'AUTH');
const authFile4 = path.resolve(testDir4, 'AUTH');
const authInCwd = path.resolve(process.cwd(), 'AUTH');

/**
 * @description Create a directory if it doesn't exist
 * @param directory the directory to check/create
 */
const createIfNotExists = (directory: fs.PathLike) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

beforeAll(() => {
  createIfNotExists(tmpDir);
  createIfNotExists(testDir1);
  createIfNotExists(testDir2);
  createIfNotExists(testDir3);
});

const readFile = (filePath: string): Promise<string | Buffer> =>
  new Promise((res, reject) => {
    fs.readFile(
      filePath,
      'utf8',
      (error: NodeJS.ErrnoException | null, data: string | Buffer) =>
        error ? reject(error) : res(data),
    );
  });

const testCredential = {
  username: 'test',
  password: 'test',
};

const testCredentials = [
  testCredential,
  {
    username: 'john',
    password: 'doe',
  },
];

describe('auth file with test credentials', () => {
  test('create auth file with test credentials', async () => {
    expect(await generate(testCredential, testDir1)).toEqual(authFile1);
  });

  test('read auth file with test credentials', async () => {
    const result = await readFile(authFile1);
    expect(result).toEqual('test:test');
  });
});

describe('auth file without credentials', () => {
  test('create auth file without credentials', async () => {
    expect(await generate({}, testDir2)).toEqual(authFile2);
  });

  test('read auth file without test credentials', async () => {
    readFile(authFile2).then((res) => expect(res).toEqual(':'));
  });
});

describe('auth file with array of credentials', () => {
  test('create auth file with multiple credentials', async () => {
    expect(await generate(testCredentials, testDir3)).toEqual(authFile3);
  });

  test('read auth file with multiple credentials', async () => {
    readFile(authFile3).then((res) =>
      expect(res).toEqual('test:test\njohn:doe'),
    );
  });
});

describe('auth file in unexisting folder', () => {
  test("create auth file with case insensitive username in folder that doesn't exist", async () => {
    expect(
      await generate({ username: 'foo', caseInsensitive: true }, testDir4),
    ).toEqual(authFile4);
  });

  test('read auth file with test credentials', async () => {
    const result = await readFile(authFile4);
    expect(result).toEqual(`foo:\nFoo:\nfOo:\nFOo:\nfoO:\nFoO:\nfOO:\nFOO:`);
  });
});

test('empty credentials string', async () => {
  expect(getCredentialString({})).toEqual(':');
});

test('create auth file in app root', async () => {
  expect(await generate(testCredential)).toEqual(appRoot.resolve('AUTH'));
});

test('write auth file with incorrect path', () => {
  expect(() => writeAuthFile('test', 'X:::')).rejects.toEqual('Invalid path');
});

test('write auth file without specifying path', async () => {
  const result = await writeAuthFile('test', undefined);
  expect(result).toEqual(authInCwd);
});

test('generate auth file with incorrect path and empty username', () => {
  expect(() => generate({ username: '' }, '/-+/:;/')).rejects.toEqual(
    'Invalid path',
  );
});

afterAll(async () => await del([tmpDir, appRoot.resolve('AUTH'), authInCwd]));
