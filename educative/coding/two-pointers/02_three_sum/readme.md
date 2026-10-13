# [3Sum](https://leetcode.com/problems/3sum/)

```
Given an integer array nums, return all the triplets
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and
nums[i] + nums[j] + nums[k] == 0.

The solution set must not contain duplicate triplets.
```

## Notes

Approach: sort the array once, then for each index as an anchor, run a
two-pointer scan (`l`/`r` converging from the two ends) over the remainder
looking for a pair that sums to `-nums[anchor]`. The anchor loop is
exhaustive — every index gets a turn — but the inner scan isn't brute
force: because sorting the whole array also sorts every subarray within
it, the remainder after any anchor is still sorted, so `l`/`r` can move
based on whether the running sum is too high or too low instead of
checking every pair. That's what keeps it O(n²) instead of O(n³). This is
a different pattern from sliding window — there's no single growing/
shrinking contiguous range, just two pointers walking toward each other.

The first version produced duplicate triplets (e.g. `[-1, 0, 1]` twice for
`[-1, 0, 1, 2, -1, -4]`):

```ruby
# before: no dedup at all
(0..nums.size - 2).each do |x|
  l = x + 1
  r = nums.size - 1

  while(l < r)
    sum = nums[x] + nums[l] + nums[r]
    if (sum == 0)
      result << [nums[x], nums[l], nums[r]]
      l += 1
      r -= 1
    end
    r -= 1 if sum > 0
    l += 1 if sum < 0
  end
end
```

Two separate duplicate sources needed guarding, not one:

```ruby
# after: skip a duplicate anchor value entirely...
(0..nums.size - 2).each do |x|
  next if x > 0 && nums[x] == nums[x - 1]
  ...
```

```ruby
# ...and after recording a match, skip past any repeats of the
# values just used, so the same pair isn't matched again
if (sum == 0)
  result << [nums[x], nums[l], nums[r]]
  l += 1
  r -= 1
  l += 1 while l < r && nums[l] == nums[l - 1]
  r -= 1 while l < r && nums[r] == nums[r + 1]
end
```

The unconditional `l += 1; r -= 1` before those two `while` lines is
mandatory, not redundant with them. The `while`-modifier lines only run if
their condition is already true going in — right after a match, `l` and
`r` are still sitting on the values just recorded, so comparing `nums[l]`
to `nums[l - 1]` is comparing the matched value to whatever's before it,
which is usually false. Drop the unconditional step and the pointers
never advance past the match at all:

```ruby
# bug: without the plain l += 1 / r -= 1 first, this re-finds
# the same match forever whenever nums[l-1] != nums[l]
if (sum == 0)
  result << [nums[x], nums[l], nums[r]]
  l += 1 while l < r && nums[l] == nums[l - 1]
  r -= 1 while l < r && nums[r] == nums[r + 1]
end
```

A `begin...end while` (Ruby's do-while) collapses the mandatory step and
the duplicate-skip into one construct, since its body always runs at
least once before the condition is checked:

```ruby
begin
  l += 1
end while l < r && nums[l] == nums[l - 1]

begin
  r -= 1
end while l < r && nums[r] == nums[r + 1]
```

Also worth flagging: the file had a few scratch trace lines left without
a `#` prefix (plain `-4, -1, -1, 0, 1, 2` and `x, l, r` sitting as bare
top-level statements), which isn't a logic bug but is a real one —
Ruby tries to parse them as code and the whole file fails with a syntax
error before anything runs.

## Hash-based alternative

A hash set can replace the two-pointer scan: for each anchor `i`, do a
standard two-sum lookup over the remainder instead of converging pointers
over a sorted range.

```ruby
def three_sum(nums)
  result = Set.new

  (0...nums.length).each do |i|
    seen = {}
    (i + 1...nums.length).each do |j|
      complement = -(nums[i] + nums[j])
      result << [nums[i], complement, nums[j]].sort if seen[complement]
      seen[nums[j]] = true
    end
  end

  result.to_a
end
```

This is **not** an asymptotic improvement — still O(n²) overall, since the
anchor loop times the inner pass is the same shape either way; the hash
lookup just makes each inner step O(1) instead of O(1)-amortized via
pointer movement. 3Sum has no known general solution faster than O(n²)
(tied to the 3SUM conjecture), so a hash doesn't change the complexity
class, only the constant-factor behavior and the space tradeoff:

- No sort required up front, which also means the input array isn't
  mutated the way `nums.sort!` currently mutates it.
- But duplicate handling gets *harder*, not easier: the two-pointer
  version skips duplicates cheaply by comparing to the adjacent element,
  which only works because sorting puts duplicates next to each other.
  Without sorting, dedup has to happen by throwing full triplets into a
  `Set` (using `.sort` per triplet so `[1, -1, 0]` and `[-1, 0, 1]`
  collide), which costs more per insert than an integer comparison.
- Real extra memory: O(n) for the `seen` hash per anchor (versus O(1)
  extra for the two-pointer version, ignoring the sort itself), plus a
  `Set` holding every result triplet instead of a plain array.

In practice the two-pointer version is usually faster too — linear array
scans with simple comparisons are more cache-friendly than hash lookups,
even at the same Big-O. This is a "different tool, same complexity"
exercise, not a genuine speedup.
