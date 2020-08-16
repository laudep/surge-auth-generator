import { getAllCasePermutations } from '../index';

test('empty string case permutations', () => {
  expect(getAllCasePermutations('')).toEqual([]);
});

test('abc case permutations', () => {
  expect(getAllCasePermutations('abc')).toEqual([
    'abc',
    'Abc',
    'aBc',
    'ABc',
    'abC',
    'AbC',
    'aBC',
    'ABC',
  ]);
});
