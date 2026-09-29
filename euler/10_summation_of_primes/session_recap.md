# Session recap: summation_of_primes (Project Euler #10)

## Starting point: naive brute force (V1)

Began with the most direct approach: for every integer from `2` up to `limit`, test primality by checking every possible divisor from `2` up to `num - 1`. Correct, but O(num) per check, O(limit) checks — the whole thing is roughly O(limit²) in the worst case.

## First round of optimization: notice patterns, don't recall theorems

Explicitly framed as interview prep — wanted improvements reachable by reasoning about the problem, not by recalling specific number-theory facts (the `√num` bound was raised and deliberately set aside for this reason throughout the session).

- **V2 — skip even numbers.** Handle `2` as a special case, then only test odd divisors. Halves the work for free, just from noticing every even number > 2 is automatically composite.
- **Considered but not built:** the `6k ± 1` pattern (every prime > 3 is of that form) as a further refinement in the same spirit.
- **V3 — test only against known primes, not every odd number.** Since any composite must have a *prime* factor, and every prime smaller than the current candidate has already been found (searching in ascending order), checking against a growing `primes` array catches everything a full scan would, with far fewer divisions. Implemented first with `primes.none? { |p| num % p == 0 }`, then translated into an explicit `while` loop with an index to see the same logic as manual iteration.
- **Refined further with a `num / 2` early cutoff** — factors pair up, so nothing bigger than half of `num` could ever be a genuine divisor. A real, if modest, improvement that didn't require `√num`.

## Issue encountered: a false "no performance gain" alarm

After building V3, a test at `limit = 100` suggested no real improvement over V2. This turned out to be a benchmarking mistake, not a code problem — `limit = 100` is far too small for the algorithmic difference to rise above Ruby's per-call overhead noise. Re-benchmarking at real scale (`10,000` / `100,000` / `500,000`) showed the truth:

| limit | V1 | V2 | V3 |
|---|---|---|---|
| 10,000 | 0.264s | 0.132s | 0.044s |
| 100,000 | 21.09s | 10.55s | 2.65s |
| 500,000 | 457.8s | 228.0s | 49.3s |

V3 was genuinely 6–9× faster than V1 and 3–4.6× faster than V2, with the gap *widening* at scale — exactly as expected, since primes get sparser relative to all integers as numbers grow. **Lesson: always benchmark at a scale large enough for the algorithmic difference to actually show.**

## The structural jump: V4, a real sieve

Recognized that V3's per-candidate cost actually *grows* over the course of a run (more known primes to check against later candidates, not fewer) — the opposite of what a sieve does, where per-candidate cost stays flat (O(1) lookup) throughout. Brought over the sieve technique already built in problem 7: instead of reactively checking each candidate against known primes via division, proactively *mark* a newly found prime's multiples as composite, so future candidates are just a set-membership lookup.

## Issues encountered and corrected in V4

**Bug 1 — the marking bound didn't cover the actual search range.** `is_prime?` hardcoded `bound = 1_000_000`, but `V4.summation_of_primes(2_000_000)` searches all the way to 2 million. Once the search passed `1_000_000`, primes found earlier had already stopped marking their multiples that far out, so composites between `1,000,000` and `2,000,000` went unmarked and were misread as prime. Reproduced the exact mechanism at a fast, small scale (`bound=100, limit=200`): correct answer `4227`, buggy V4 returned `16010` — proof the bug was real and severe, not cosmetic.

*Fix:* pass `limit` itself through as `bound`. Unlike problem 7 (find the *n*th prime, where the final value isn't known ahead of time and needs a guess-and-extend strategy), this problem already hands you an explicit value ceiling — there was never a reason to guess a smaller number in the first place.

**Bug 2 — missing `require 'set'`.** Worked fine in isolated test snippets (which explicitly required it), but failed in the actual file, which only had `require 'benchmark'`. This environment's Ruby (2.6.10) doesn't autoload `Set` the way newer Rubies might. Fixed by adding `require 'set'` alongside the existing require.

After both fixes: `V4.summation_of_primes(2_000_000) = 142913828922` in `~2.18s` — the correct, verified answer to Project Euler #10.

## Memory investigation, and a methodology correction of its own

Wanted to know how much memory the `factors` set actually costs at `limit = 2_000_000`. First attempt used `ObjectSpace.memsize_of(factors)`, which reported a misleading `40 bytes` — that method only measures an object's *shallow* size, not what it contains. For a `Set` (a thin wrapper around an internal `Hash`), that misses essentially the entire real cost.

*Correction:* measured process RSS before and after building the set instead (the same technique used for the multiples-of-3-and-5 benchmarks earlier in the session). Real result: **~125 MB** for a set holding ~2 million entries — about 65 bytes per entry, consistent with `Hash`-backed `Set` overhead in Ruby.

This surfaced the real space/time tradeoff between V3 and V4: V3 only ever stores the *primes themselves* (a relatively small list), while V4's sieve stores nearly every *composite* in the range (almost as large as the whole search space) in exchange for O(1) lookups instead of per-candidate division.

## What needed correcting, summarized

1. **Benchmark at real scale** — a "no gain" result at `limit=100` was measurement noise, not a code problem.
2. **A sieve's marking bound must cover the full search range**, not an arbitrary guessed number — this problem already provides that range explicitly as `limit`.
3. **Missing stdlib requires fail silently until the code path that needs them actually runs** — worth requiring everything a file uses up front, even if earlier tests happened not to exercise it.
4. **`ObjectSpace.memsize_of` measures shallow object size only** — for containers, process RSS delta is the honest way to measure real memory cost.
