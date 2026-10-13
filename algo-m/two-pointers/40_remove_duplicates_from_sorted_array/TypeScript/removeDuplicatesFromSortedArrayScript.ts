/**
 * Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Given a sorted list of numbers with length at least 1, remove
 * duplicates and return the new length. You must do this in place and
 * without using extra memory.
 */

function removeDuplicates(nums: number[]): number {
  let r = 0;
  let w = 0; 

  w = scanNumsForDuplicates(nums, r, w);
  return w;
}

function scanNumsForDuplicates(nums: number[], r: number, w: number): number {
  for(; r < nums.length; r++) {
    if (nums[r] !== nums[r-1]) {
      nums[w] = nums[r];
      w++;
    }
  }
  return w;
} 

// removeDuplicates([0, 0, 1, 1, 1, 2, 2])
removeDuplicates([1,1,2])



// ---- driver code — no jest, just plain TS, run with: node removeDuplicatesFromSortedArrayScript.ts ----

function check(nums: number[], expectedLength: number, expectedPrefix: number[]): void {
  let status: string;
  let length: number | string = 'n/a';

  try {
    length = removeDuplicates(nums);
    const prefixMatches = JSON.stringify(nums.slice(0, length)) === JSON.stringify(expectedPrefix);
    status = (length === expectedLength && prefixMatches) ? 'PASS' : 'FAIL';
  } catch (e) {
    status = `FAIL: threw: ${(e as Error).message}`;
  }

  console.log(`${status}: nums=${JSON.stringify(nums)} -> length=${length} (expected ${expectedLength}, prefix ${JSON.stringify(expectedPrefix)})`);
}

check([0, 0, 1, 1, 1, 2, 2], 3, [0, 1, 2]);
check([1, 1, 2], 2, [1, 2]);
check([1, 2, 3], 3, [1, 2, 3]);

export {};