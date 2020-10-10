const twoSum = require('./twoSums');

test('passes example 1', () => {
  let numbers = [2,7,11,15]
  let target = 9
  expect(twoSum(numbers, target)).toEqual([1,2]);
});

test('passes example 2', () => {
  let numbers = [2,3,4]
  let target = 6
  expect(twoSum(numbers, target)).toEqual([1,3]);
});

test('passes example 3', () => {
  let numbers = [-1,0]
  let target = -1
  expect(twoSum(numbers, target)).toEqual([1,2]);
});