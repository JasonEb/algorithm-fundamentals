# Remove Duplicates from Sorted Array (LeetCode 26) — Session Recap

## The Problem

Given an integer array `nums` sorted in non-decreasing order, remove
duplicates **in-place** so each unique element appears only once. The
relative order of elements is preserved.

**Requirements:**
- Return `k`, the number of unique elements.
- The first `k` elements of `nums` must hold the unique elements, in order.
- What's left in `nums` beyond the first `k` elements doesn't matter.

**Example:**
```
Input:  nums = [1, 1, 2, 2, 3]
Output: k = 3, nums = [1, 2, 3, _, _]
```

## Naive Version (extra array, not in-place)

```ruby
def remove_duplicates(nums)
  return nums.size if nums.size <= 1
  result = []

  nums.each_with_index do |c, i|
    n = nums[i + 1]
    result << c if c != n
  end

  result.size
end
```

Compares each element to its **next** neighbor; keeps it if they
differ. Correct, but uses O(n) extra space and doesn't satisfy the
in-place requirement.

## In-Place Version — "Look Ahead" (built first)

```ruby
def remove_duplicates(nums)
  r = 0
  w = 0

  while r < nums.length
    c = nums[r]
    n = nums[r + 1]

    if c != n
      nums[w] = nums[r]
      w += 1
    end

    r += 1
  end

  w
end
```

Compares the current value to the **next** element to decide whether
to write. Always writes the *last* occurrence of a duplicate run —
still correct, since duplicates are equal anyway.

## In-Place Version — "Look Back" (more commonly taught)

```ruby
def remove_duplicates(nums)
  return nums.size if nums.size <= 1

  w = 1
  r = 1

  while r < nums.length
    if nums[r] != nums[w - 1]
      nums[w] = nums[r]
      w += 1
    end

    r += 1
  end

  w
end
```

Compares the current value to the **last value written** (`nums[w -
1]`) instead of the next element. This directly encodes the real
rule of the problem — "is this different from the last unique value
I've kept?" — and avoids peeking past the array bounds at `nums[r +
1]`.

## Mnemonic

**"Don't ask what's next, ask what you kept"**

The "look back" version's core insight: rather than comparing a value
to its neighbor, compare it to your own last write. This generalizes
better to variants like Remove Duplicates II (allow up to 2 of each
value), where comparing against the last *k* written values is
natural, but peeking ahead is not.

## Key Lessons

1. **Two valid ways to detect "is this a duplicate?"** — compare to
   the *next* element (look ahead) or compare to the *last written*
   element (look back). Both work here since the array is sorted, but
   they generalize differently to harder variants.

2. **Return value vs. modified array are two different things.**
   Early naive attempts returned the deduplicated array itself, but
   the problem wants the *count* `k`, with `nums` mutated in-place.

3. **Watch for off-by-one indexing.** Looking ahead to `nums[r + 1]`
   naturally returns `nil` at the last index, which conveniently
   still satisfies `!=` comparisons — but it's a case worth noticing
   explicitly rather than relying on luck.

4. **Tracing by hand on adversarial inputs builds real confidence.**
   Testing against `[1,1,1]`, `[1,1,2]`, and `[1,2,2,2,3]` (duplicate
   at start, middle, and with a run of 3) surfaced whether the logic
   generalized, rather than just working on the first example.

## Next Up

- Remove Duplicates from Sorted Array II (allow each value up to twice)
- Duplicate Zeros (LeetCode 1089)
