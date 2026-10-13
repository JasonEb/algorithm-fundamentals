# [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

```
Given the head of a singly linked list, return the middle node. If
there are two middle nodes, return the second one.
```

## Notes

- **The invariant:** at every point in the loop, `slow` has taken
  exactly half as many steps as `fast` — so `slow` always sits at the
  midpoint of the segment from `head` to wherever `fast` currently is.
  True trivially at the start (both at `head`, 0 steps each), and
  preserved every iteration since `slow` moves 1 node while `fast`
  moves 2. The loop's terminating condition is chosen so that when it
  fires, `fast` is at the end of the *whole* list — which collapses
  the invariant's claim ("`slow` is the midpoint of head-to-fast") into
  exactly the answer wanted ("`slow` is the midpoint of the list").
- **Loop guard order matters:** `while (fast !== null && fast.next !== null)`,
  in that order. `&&` short-circuits left to right, so `fast`'s own
  null-ness is confirmed before `fast.next` is ever read. Flipped, this
  crashes on a null dereference.
- **Even-length lists land on the second middle, not the first** — a
  side effect of starting both pointers at `head` together (not
  offsetting one by a node). Worth being able to explain why, not just
  that the test passes.
- **Gotchas to watch for in this family of problems:** empty/single-node
  edge cases that make the loop body never execute at all; assuming the
  list has no cycle (this approach infinite-loops if it does); and
  reaching for a two-pass count-then-walk or an array-dump instead of
  the one-pass, O(1)-space fast/slow version — both work, but they're
  not what this pattern is actually testing.

## Related problems (same fast/slow pattern)

- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) —
  nearly identical setup (Floyd's Tortoise and Hare), but the question
  is "does `fast` ever equal `slow`?" instead of "where does `slow`
  land when `fast` runs out?"
- [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) —
  same cycle detection, plus finding *where* the cycle begins once one
  is found.
- [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) —
  uses this exact routine to find the middle, then reverses the second
  half and compares it against the first.
- [Reorder List](https://leetcode.com/problems/reorder-list/) — also
  starts by finding the midpoint with fast/slow, then reverses the
  second half and merges the two halves together.
