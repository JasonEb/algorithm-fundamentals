/**
 * Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * Given the head of a singly linked list, return the middle node. If
 * there are two middle nodes, return the second one.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  throw new Error('Not implemented');
}

// ---- driver code — no jest, just plain TS, run with: node middleOfTheLinkedListScript.ts ----

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
    result = listToArray(middleNode(arrayToList(arr)));
  } catch (e) {
    result = `threw: ${(e as Error).message}`;
  }

  const status = JSON.stringify(result) === JSON.stringify(expected) ? 'PASS' : 'FAIL';
  console.log(`${status}: arr=${JSON.stringify(arr)} -> ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
}

check([1, 2, 3, 4, 5], [3, 4, 5]);
check([1, 2, 3, 4, 5, 6], [4, 5, 6]);
check([1], [1]);
