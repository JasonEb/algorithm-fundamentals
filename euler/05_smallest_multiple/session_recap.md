# Session recap: smallest_multiple (Project Euler #5)

## 1. Top-down vs bottom-up recursion

- Defined the terms precisely: **top-down** is recursion — the full-size call is made first, waits on the stack while smaller calls resolve, and the answer gets built as the stack unwinds. **Bottom-up** is iteration — a loop starts at the base case and works forward, with no call ever pending on a stack.
- Built the recursive `lcm(n)`: base case `n == 1` returns 1; recursive case gets `smaller = lcm(n - 1)`, then walks forward by `smaller` until it lands on a multiple divisible by `n`.
- Traced `lcm(5)` and `lcm(6)` by hand and with instrumented `puts` logging. Found that `lcm(6) == 60`, same as `lcm(5)` — since `6 = 2 × 3` is already covered by existing factors, the while loop takes **zero** iterations.
- Worked out why `lcm(6)` stops at 60 instead of growing to `6! = 720`: any multiple of 60 (120, 180, ..., 720) would also satisfy divisibility by 6, but the loop stops at the very first hit, and 60 already qualifies.
- Hit a real `SystemStackError` at n = 8 with an earlier version that searched downward from `n!` (40,320 nested calls) — this became the concrete example for why recursion depth is a real cost, not just a theoretical one.
- Wrote the bottom-up (iterative/tabulation) equivalent of `lcm` for direct comparison.
- Generalized the distinction: top-down calls the full-size problem first and it sits waiting on the stack; bottom-up never calls the full-size problem at all — it just loops until it gets there.
- Covered the conditions favoring each approach, grounded in three contrasting examples:
  - **`lcm`** — every subproblem from 1 to n-1 is needed anyway, so bottom-up wins outright (no wasted work, no stack risk).
  - **`power(base, exp)`** via halving the exponent — only touches a sparse subset (e.g. `power(2, 8)` touches 8, 4, 2, 1, 0, skipping 3, 5, 6, 7 entirely), so top-down wins since bottom-up would compute values that were never needed.
  - **Naive Fibonacci** — overlapping subproblems (`fib(4)` makes 9 calls for only 5 distinct values), so top-down needs memoization to avoid redoing work, or bottom-up sidesteps the problem by computing each value exactly once.

**Files produced:** `visual_guide.html` (lcm call stack, while-loop walk, why lcm(6) stops at 60) and `visual_guide_topdown_vs_bottomup.html` (the general comparison guide with all three examples above and a decision table).

## 2. Improving the original brute-force approach

- Started from the original iterative code: `divisible_by_all?(n, num)` (checks divisibility against every number from `n` down to 1) plus `smallest_multiple(n)` (searches every integer from `n!` down to 1, without ever breaking, keeping whichever match is smallest).
- Converted the `while` loop into straightforward recursion (`search(n, limit, product)`) while preserving the *exact same* brute-force candidate space — same correctness, same stack-depth risk as the lcm version's original downward search.
- Asked whether memoization could help this version — concluded no. Within a single call, no `(n, limit)` pair is ever revisited; it's a straight-line traversal with no repeated subproblems, so there's nothing for a cache to catch. (Contrast with Fibonacci, where subproblems genuinely repeat.)
- Reworked the recursion to decompose on `n` instead of `limit`, recursing into `smallest_multiple(n - 1)` first. Renamed `smaller` to `prev_answer`, since the original name described a size ("a smaller number") when it actually meant "the answer to the smaller subproblem" — a value that can itself be large.
- This shrank the candidate space dramatically: instead of every integer from 1 to `n!`, `search` now only walks multiples of `prev_answer` (`prev_answer, 2×prev_answer, 3×prev_answer, ...`). `divisible_by_all?` collapsed entirely into a single `% n == 0` check, since every multiple of `prev_answer` is automatically divisible by everything from 1 to n-1.
- Proved correctness with a two-inequality argument: any true answer must be a multiple of `prev_answer` (a general LCM property — every common multiple of a set is a multiple of their LCM), and `search` returns the *smallest* such multiple that's also divisible by `n` — so the result can't be too big (it's the first hit) or too small (it's a genuine common multiple of 1..n), forcing it to be exactly right.
- Hand-traced `smallest_multiple(3)` end to end, confirming it matches `lcm(3) = 6`.
- Found and fixed a real rendering bug (via a screenshot): the "returns to caller" header and the final-answer callout were placed at nearly identical SVG coordinates in both call-stack diagrams, causing them to overlap. Repositioned with proper spacing in both files.

**Files produced:** `original_approach.rb` (the original iterative code alongside its recursive adaptations) and `visual_guide_original_approach.html` (the three-stage evolution — iterative → recursive-same-space → recursive-on-n-narrowed-space — with a call stack for n=3 and a candidate-space comparison for n=5: 120 checks down to 5).

## 3. How to improve the naive solution (interview framing)

Jumping straight to "restructure the candidate space" is a big leap for an interview setting, so laid out a more incremental, defensible progression instead:

1. **Name the complexity first.** `divisible_by_all?` is O(n) per check; the search is O(n!) candidates worst case — so O(n · n!) total. Stating this before optimizing shows you can reason about cost, not just code.
2. **Fix the wasted work from not breaking early.** The original searches top-down from `n!` without ever breaking — necessary for correctness *in that direction*, since the first hit while descending would be the largest match, not the smallest. Flipping the direction (search from 1 upward) lets you return immediately on the first hit, since ascending guarantees the first hit is the smallest. Free win, no algorithmic change.
3. **Shrink the divisibility check itself.** `divisible_by_all?` doesn't need to check every integer from 1 to n — divisibility by a composite number implies divisibility by its factors, so only the highest prime powers ≤ n actually matter (for n=10: check 8, 9, 5, 7 — not all of 1 through 10). Cuts the per-candidate check from O(n) to roughly O(π(n)).
4. **Question the search bound.** `n!` is a valid but very loose upper bound. Raising this naturally opens the door to the bigger restructuring from section 2, if the interviewer wants to keep pushing.

## Files produced this session

- `problem.rb` — instrumented `lcm` with call-depth logging
- `original_approach.rb` — original iterative code plus recursive adaptations
- `visual_guide.html`
- `visual_guide_topdown_vs_bottomup.html`
- `visual_guide_original_approach.html`
- `session_recap.md` — this file
