const nQueens = require('./nQueenss');

test('passes example leetcode case 2', () => {
  let numbers = [2,3,4]
  let target = 6
  expect(twoSum(numbers, target)).toEqual([1,3]);
});
