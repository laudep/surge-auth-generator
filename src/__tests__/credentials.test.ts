import { getCredentialString } from '../index';
const testCredential = {
  username: 'test',
  password: 'test',
};
const testCredentialString = 'test:test';

const johnDoeCredential = {
  username: 'john',
  password: 'doe',
  caseInsensitive: true,
};

const johnDoeCredentialString = `john:doe\nJohn:doe\njOhn:doe\nJOhn:doe\njoHn:doe\nJoHn:doe\njOHn:doe\nJOHn:doe\njohN:doe\nJohN:doe\njOhN:doe\nJOhN:doe\njoHN:doe\nJoHN:doe\njOHN:doe\nJOHN:doe`;

test('standard case sensitive credentials to string', () => {
  expect(getCredentialString(testCredential)).toEqual(testCredentialString);
});

test('empty credentials to string', () => {
  expect(getCredentialString({})).toEqual(':');
});

test('case insensitive credentials to string', () => {
  expect(getCredentialString(johnDoeCredential)).toEqual(
    johnDoeCredentialString,
  );
});

test('username only to string', () => {
  expect(getCredentialString({ username: 'foo' })).toEqual('foo:');
});

test('password only to string', () => {
  expect(getCredentialString({ password: 'bar' })).toEqual(':bar');
});
