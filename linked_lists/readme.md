# Fundamental Linked List Techniques

A reference for the recurring patterns that show up across linked list
problems, with examples in both Ruby and TypeScript. The node shape
used throughout:

**Ruby**
```ruby
class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end
```

**TypeScript**
```ts
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
```

## Dummy (sentinel) head node

When an operation might remove or change the actual head of the list
(deleting duplicates, removing a node by position), create a
placeholder node pointing at the real head, operate relative to the
dummy, and return `dummy.next` at the end. This avoids writing a
special case for "what if the node I'm removing is the head."

**Ruby**
```ruby
def remove_value(head, target)
  dummy = ListNode.new(0, head)
  prev = dummy
  cur = head

  while cur
    if cur.val == target
      prev.next = cur.next
    else
      prev = cur
    end
    cur = cur.next
  end

  dummy.next
end
```

**TypeScript**
```ts
function removeValue(head: ListNode | null, target: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let cur = head;

  while (cur !== null) {
    if (cur.val === target) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }

  return dummy.next;
}
```

## Fast / slow pointers

One pointer moves one node at a time, the other moves two. The
invariant: `slow` always sits at the midpoint of the distance `fast`
has covered. Used to find the middle in one pass, or (same mechanism)
to detect a cycle — if there is one, `fast` eventually laps `slow` and
they become equal.

**Ruby**
```ruby
def middle_node(head)
  slow = head
  fast = head

  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
  end

  slow
end

def has_cycle?(head)
  slow = head
  fast = head

  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
    return true if slow == fast
  end

  false
end
```

**TypeScript**
```ts
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
```

## Gap-based two pointers

Advance one pointer `n` nodes ahead of the other first, then move both
together, one node at a time. The fixed gap between them does the
"counting" for you — useful for "find the kth node from the end"
without a separate pass to measure the list's length.

**Ruby**
```ruby
def nth_from_end(head, n)
  dummy = ListNode.new(0, head)
  lead = dummy
  trail = dummy

  (n + 1).times { lead = lead.next }

  while lead
    lead = lead.next
    trail = trail.next
  end

  trail.next
end
```

**TypeScript**
```ts
function nthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let lead: ListNode | null = dummy;
  let trail: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    lead = lead!.next;
  }

  while (lead !== null) {
    lead = lead.next;
    trail = trail!.next;
  }

  return trail!.next;
}
```

## In-place reversal

Each node only knows what comes after it, so reversing direction
requires three pointers moving together: save the next node before
overwriting the link, flip the current node's pointer backward, then
advance both `prev` and `curr`.

**Ruby**
```ruby
def reverse_list(head)
  prev = nil
  cur = head

  while cur
    nxt = cur.next
    cur.next = prev
    prev = cur
    cur = nxt
  end

  prev
end
```

**TypeScript**
```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let cur = head;

  while (cur !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}
```

## Merging two sorted lists

Two pointers, one per list, always advancing whichever points at the
smaller value, splicing existing nodes onto a result list (typically
built off a dummy head) instead of allocating new ones.

**Ruby**
```ruby
def merge_two_lists(l1, l2)
  dummy = ListNode.new(0)
  tail = dummy

  while l1 && l2
    if l1.val <= l2.val
      tail.next = l1
      l1 = l1.next
    else
      tail.next = l2
      l2 = l2.next
    end
    tail = tail.next
  end

  tail.next = l1 || l2
  dummy.next
end
```

**TypeScript**
```ts
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 ?? l2;
  return dummy.next;
}
```

## Finding where a cycle begins (Floyd's)

An extension of fast/slow cycle detection. Once `slow` and `fast` meet
inside a cycle, resetting one pointer to `head` and then advancing
both one node at a time causes them to meet again exactly at the
cycle's start. (Why this works is a provable distance argument, not a
coincidence — worth tracing through by hand on paper.)

**Ruby**
```ruby
def detect_cycle_start(head)
  slow = head
  fast = head

  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
    break if slow == fast
  end

  return nil unless fast && fast.next

  slow = head
  while slow != fast
    slow = slow.next
    fast = fast.next
  end

  slow
end
```

**TypeScript**
```ts
function detectCycleStart(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (fast === null || fast.next === null) return null;

  slow = head;
  while (slow !== fast) {
    slow = slow!.next;
    fast = fast!.next;
  }

  return slow;
}
```

## Recursive thinking

"The rest of the list" is itself a smaller linked list, which makes
several operations fall out naturally as recursion — often more
readable than the iterative version, at the cost of O(n) call-stack
space instead of O(1).

**Ruby**
```ruby
def reverse_list_recursive(head)
  return head if head.nil? || head.next.nil?

  new_head = reverse_list_recursive(head.next)
  head.next.next = head
  head.next = nil

  new_head
end
```

**TypeScript**
```ts
function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
```

## Hash map / set for identity problems

For problems about node *identity* rather than value — detecting
where two lists intersect, cloning a list that has extra pointers
(e.g. a "random" pointer), checking whether a node has been visited —
storing visited node *references* (not values) in a `Set` or `Map`
gives O(1) lookups at the cost of O(n) space. Useful as the fallback
when a pure-pointer trick isn't obvious, and sometimes the simplest
correct answer even when one exists.

**Ruby**
```ruby
def get_intersection_node(head_a, head_b)
  visited = {}

  node = head_a
  while node
    visited[node.object_id] = node
    node = node.next
  end

  node = head_b
  while node
    return node if visited[node.object_id]
    node = node.next
  end

  nil
end
```

**TypeScript**
```ts
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>();

  let node = headA;
  while (node !== null) {
    visited.add(node);
    node = node.next;
  }

  node = headB;
  while (node !== null) {
    if (visited.has(node)) return node;
    node = node.next;
  }

  return null;
}
```

Note: the intersection problem above also has an elegant O(1)-space
two-pointer solution (seen in `algo-m`/`educative` `intersection_of_two_linked_lists`) —
this hash map version is included here as the general-purpose fallback
pattern, not because it's the preferred solution for that specific
problem.
