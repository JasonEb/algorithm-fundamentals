/**
 * Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 *
 * Given an integer array nums, move all 0's to the end of it in place
 * while maintaining the relative order of the non-zero elements.
 */

function moveZeroes(nums: number[]): void {
  throw new Error('Not implemented');
}

// ---- driver code — no jest, just plain TS, run with: node moveZeroesScript.ts ----

function check(nums: number[], expected: number[]): void {
  let status: string;

  try {
    moveZeroes(nums);
    status = JSON.stringify(nums) === JSON.stringify(expected) ? 'PASS' : 'FAIL';
  } catch (e) {
    status = `FAIL: threw: ${(e as Error).message}`;
  }

  console.log(`${status}: result=${JSON.stringify(nums)} (expected ${JSON.stringify(expected)})`);
}

check([0, 1, 0, 3, 12], [1, 3, 12, 0, 0]);
check([0], [0]);
check([1, 2, 3], [1, 2, 3]);
