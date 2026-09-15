# Move Zeroes (LeetCode 283) — Session Recap

## The Problem

Given an integer array `nums`, move all `0`s to the end of it while
maintaining the relative order of the non-zero elements. Must be done
**in-place**.

**Example:**
```
Input:  nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

## The Final Solution (Read/Write Two Pointers)

```ruby
def move_zeroes(nums)
  r = 0
  w = 0

  while r < nums.length
    if nums[r] != 0
      nums[w] = nums[r]
      w += 1
    end
    r += 1
  end

  while w < nums.length
    nums[w] = 0
    w += 1
  end
end
```

- `r` (read) scans every element.
- `w` (write) only advances when a non-zero value is placed.
- After the first loop, all non-zero values sit at the front, in order.
- The second loop fills everything from `w` to the end with zeroes.

## Extracted Version (Named Helper Methods)

Splitting the two loops into named methods makes the two-phase structure
explicit: compact non-zeros left, then pad the remainder with zeroes.

```ruby
def move_zeroes(nums)
  w = shift_nonzeros_left(nums)
  pad_zeroes_from(nums, w)
end

def shift_nonzeros_left(nums)
  r = 0
  w = 0

  while r < nums.length
    if nums[r] != 0
      nums[w] = nums[r]
      w += 1
    end
    r += 1
  end

  w
end

def pad_zeroes_from(nums, w)
  while w < nums.length
    nums[w] = 0
    w += 1
  end
end
```

`shift_nonzeros_left` returns `w` — the boundary between "kept" and
"to be zeroed" — which becomes the natural hand-off into
`pad_zeroes_from`.

## Mnemonic

**"W waits, R runs"** — `r` runs ahead, scanning every element; `w`
waits patiently and only moves when something worth keeping shows up.

## Key Lessons

1. **Naive-first is a valid strategy.** Starting with collecting
   non-zeros into a new array + appending zero-padding is correct and
   easy to reason about, even though it costs O(n) extra space.
   Getting *something* working before optimizing is legitimate.

2. **`each` → `while` builds intuition.** Manually managing an index
   forces you to see what a higher-level iterator was quietly doing
   for you.

3. **Two pointers isn't one technique — it's a family.** Variants
   include:
   - Opposite direction / converging (e.g. Two Sum II, Valid Palindrome)
   - Fast & slow runner (e.g. Linked List Cycle, Find Middle)
   - Read/write pointers (e.g. Remove Element, Move Zeroes, Duplicate Zeros)
   - Sliding window (e.g. Longest Substring Without Repeating Characters)
   - One pointer per array (e.g. Merge Sorted Array)

   Naming the exact variant helps recognize which problems it applies
   to later.

4. **Watch for pointers advancing in the wrong place.** A nested-loop
   attempt hit a real, common bug — a pointer that only advances
   inside a conditional branch can silently stop advancing and
   infinite-loop. This is one of the most frequent two-pointer bugs.

5. **"Which condition to check first" is a style choice, not a
   correctness one.** Checking `!= 0` (act on keep) vs. `== 0` (do
   something on skip) produce equivalent logic — recognizing when two
   approaches are equivalent, rather than assuming one is "more
   correct," is a useful debugging skill.

6. **Edge cases are worth checking deliberately.** A general
   checklist to apply before or after writing any array solution:
   - Size: empty array, single element, two elements
   - Values: all same, all zero, duplicates, negatives, overflow risk
   - Order: already sorted, reverse sorted, nearly sorted
   - Structure-specific: pointer meeting/crossing, off-by-one at
     boundaries, base cases for DP, out-of-range values for cyclic
     sort

## Next Up

Good candidates to practice next with the same step-by-step approach:
- Remove Duplicates from Sorted Array (LeetCode 26)
- Duplicate Zeros (LeetCode 1089)
