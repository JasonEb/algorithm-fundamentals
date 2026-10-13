/**
 * Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given the head of a linked list, remove the nth node from the end of
 * the list and return its head.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  throw new Error('Not implemented');
}

// ---- driver code — no jest, just plain TS, run with: node removeNthNodeFromEndOfListScript.ts ----

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

function check(arr: number[], n: number, expected: number[]): void {
  let result: number[] | string;

  try {
    result = listToArray(removeNthFromEnd(arrayToList(arr), n));
  } catch (e) {
    result = `threw: ${(e as Error).message}`;
  }

  const status = JSON.stringify(result) === JSON.stringify(expected) ? 'PASS' : 'FAIL';
  console.log(`${status}: arr=${JSON.stringify(arr)} n=${n} -> ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
}

check([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]);
check([1], 1, []);
check([1, 2], 2, [2]);
