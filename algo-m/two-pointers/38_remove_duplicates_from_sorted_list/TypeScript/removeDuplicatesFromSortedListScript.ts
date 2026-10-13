/**
 * Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * Given the head of a sorted linked list, delete all duplicates such
 * that each element appears only once. Return the linked list sorted
 * as well.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  throw new Error('Not implemented');
}

// ---- driver code — no jest, just plain TS, run with: node removeDuplicatesFromSortedListScript.ts ----

function arrayToList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let cur = dummy;
  for (const val of arr) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function check(arr: number[], expected: number[]): void {
  let result: number[] | string;

  try {
    result = listToArray(deleteDuplicates(arrayToList(arr)));
  } catch (e) {
    result = `threw: ${(e as Error).message}`;
  }

  const status = JSON.stringify(result) === JSON.stringify(expected) ? 'PASS' : 'FAIL';
  console.log(`${status}: arr=${JSON.stringify(arr)} -> ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
}

check([1, 1, 2], [1, 2]);
check([1, 1, 2, 3, 3], [1, 2, 3]);
check([1, 2, 3], [1, 2, 3]);
