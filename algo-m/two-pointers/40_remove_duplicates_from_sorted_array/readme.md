# [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

```
Given a sorted list of numbers with length at least 1, remove duplicates
and return the new length. You must do this in place and without using
extra memory.
```

## Notes

- **Don't nest a `while` inside a `for` when both move the same index.**
  My first attempt had a `while` loop advancing `r` inside a `for` loop
  that also advances `r`. After the `while` finished a duplicate run,
  the `for` loop's own `r++` fired on top of that and skipped the very
  index that needed to be checked next — a unique value silently never
  got visited at all. One pointer, one loop advancing it, is the fix.
- **Write on "this is new," not on "I found a duplicate."** The cleaner
  shape is a single forward pass: for each `r`, write `nums[r]` into
  `nums[w]` (and advance `w`) only when it differs from the last value
  kept. That naturally handles the final element too, so there's no
  separate "handle the tail" step needed after the loop.
- **Compare against `nums[w - 1]`, the last value actually kept** — not
  `nums[r - 1]`, the previous raw input position. For this problem the
  input's sortedness happens to make `r - 1` agree with `w - 1`, but
  `w - 1` is correct by definition regardless of the input's shape, so
  it's the better habit to default to.
- **There's an equivalent `slow`/`fast` convention** where `slow` means
  something slightly different from my `w`: instead of "the next empty
  slot to write into," `slow` is "the index of the last value already
  kept." That's why that version compares `arr[fast] !== arr[slow]`
  directly, with no `- 1` — `arr[slow]` *is* the last kept value by
  definition. It starts at `0` because `arr[0]` is trivially already
  kept (nothing comes before it to duplicate), and the function returns
  `slow + 1` at the end since `slow` is an index, not a count. Same
  underlying idea as `w - 1`, just shifted by one in what the pointer
  itself is defined to mean.

## Solution

```ts
function removeDuplicates(arr: number[]): number {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1;
}
```
