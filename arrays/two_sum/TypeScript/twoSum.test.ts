import { twoSum } from './twoSum';

// Checks correctness rather than a hardcoded index pair, since a valid
// answer's index order can depend on your approach.
function check(nums: number[], target: number, expectedLength = 2): void {
  const result = twoSum(nums, target);
  const [i, j] = result;

  expect(result.length).toEqual(expectedLength);
  expect(i).not.toEqual(j);
  expect(nums[i] + nums[j]).toEqual(target);
}

describe('twoSum', () => {
  test('example 1', () => {
    check([2, 7, 11, 15], 9);
  });

  test('example 2', () => {
    check([3, 2, 4], 6);
  });

  test('handles duplicate values summing to target', () => {
    check([3, 3], 6);
  });

  test('handles negative numbers', () => {
    check([-3, 4, 3, 90], 0);
  });
});
