import rewire = require('rewire');

const lib = rewire('../index');
const getAllCasePermutations = lib.__get__('getAllCasePermutations');

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
    'abc',
  ]);
});
