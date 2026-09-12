# Binary Search Gotchas

Runnable Ruby demos: `Ruby/binary_search_gotchas.rb` (`ruby Ruby/binary_search_gotchas.rb`).
Each gotcha below pairs a buggy implementation with a fixed one and a test
case that tells them apart.

1. **`<` vs `<=` in the loop condition.** If `r` starts as an *inclusive*
   bound (`nums.length - 1`), the loop must run `while l <= r` so the case
   `l == r` still gets checked. `while l < r` silently skips it — most
   visible on a one-element array, where the loop body never executes.

2. **A branch that doesn't shrink the range → infinite loop.** With floor
   division, `m = l + (r - l) / 2` rounds down, so `m` can equal `l`. If
   the "go right" branch sets `l = m` instead of `l = m + 1`, and `l`/`r`
   become adjacent, `m` recomputes to the same value forever.

3. **Ruby returns `nil` for an out-of-range index instead of raising.**
   `nums[nums.length]` doesn't blow up where the bad read happens — it
   returns `nil`, and the failure only surfaces later and confusingly,
   the moment that `nil` is compared with `<` or `>`. An off-by-one bound
   (`r = nums.length` instead of `nums.length - 1`) is the usual cause.

4. **The array actually has to be sorted.** Binary search doesn't
   validate its input. On unsorted data it doesn't raise — it just
   returns a wrong answer (often "not found" for a value that's present).

5. **Duplicates: "found" isn't "found the one you wanted."** A plain
   binary search returns *some* index equal to the target, not
   necessarily the first or last one. Use `bisect_left` / `bisect_right`
   style searches when you need a specific boundary — e.g. the first
   occurrence, the insertion point, or a count via `bisect_right -
   bisect_left`.

6. **Exact float equality never terminates the way you expect.** Binary
   search over a continuous range (e.g. `sqrt` via binary search) can't
   rely on `mid * mid == x` — floats almost never land on an exact value.
   Terminate on a precision threshold (`hi - lo <= epsilon`) instead.

7. **Integer overflow is a non-issue in Ruby, unlike C/Java/C++.** In
   languages with fixed-width integers, `(l + r) / 2` can overflow when
   both are near the max int value, silently wrapping negative. Ruby's
   `Integer` auto-promotes to an arbitrary-precision Bignum, so this bug
   class doesn't exist here — but `l + (r - l) / 2` is still a good
   portable habit if the code might get translated to another language.

## Other things worth remembering (not demoed in code)

- **Rotated / not-purely-sorted arrays** (e.g. `[4, 5, 6, 7, 0, 1, 2]`)
  need a modified algorithm that first figures out which half is sorted
  before deciding where to discard — see `binary_search/search_rotated_list`.
- **`-1` as a sentinel can collide with real data** if you're returning an
  index into a structure where `-1` might otherwise be meaningful (e.g.
  returning an offset instead of an index). Prefer `nil`, or return the
  insertion point and let the caller decide.
- **Binary search isn't just for arrays.** The same "discard half the
  search space" idea applies to any monotonic predicate — e.g. "is this
  guess too high?" — even without an explicit sorted collection (see
  `binary_search/guess_number`, `binary_search/sqrt_x`).
