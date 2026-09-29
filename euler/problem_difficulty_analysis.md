# Problem difficulty analysis

Covers the 17 problems currently in this directory (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 20).

Problems 12, 15, 17, and 18 were added specifically because they're genuinely strong memoization/tabulation candidates in the 10–20 range — see the table below and the notes at the bottom for why each one qualifies (and why 11, 13, and 19 were checked and left out).

## Methodology

Project Euler's own crowd-sourced difficulty rating is only visible once you've solved a problem (via a logged-in account), so it isn't publicly fetchable. As a proxy, this table uses each problem's public "solved by" count from [projecteuler.net/archives](https://projecteuler.net/archives) (fetched 2026-09-28), expressed as a **retention rate relative to Problem 1**:

```
retention % = (solved by this problem / solved by Problem 1) × 100
```

Problem 1 is solved by nearly everyone who creates an account, so it serves as a reasonable baseline population. A lower retention rate means a smaller fraction of that population made it through to solve this problem.

**Caveat:** this conflates two things — genuine difficulty, and the fact that problems are typically attempted roughly in order, so later problems naturally lose solvers to attrition (people stopping) as well as to difficulty. Treat this as a difficulty *proxy*, not a precise measurement.

"General type" reflects the standard/expected approach to each problem as it's classically solved, independent of how any particular file in this repo happens to implement it.

**Memoization/tabulation fit** applies the test used repeatedly this session, rather than guessing from surface resemblance to known DP problems: does any subproblem actually get solved more than once (memoization), or is there a natural smallest-to-largest build-up where each answer is constructed from the previous one (tabulation)? A problem only gets marked Yes if that structure genuinely holds — several of these look DP-shaped but don't survive the check, and that distinction is called out explicitly rather than smoothed over.

## Table

| # | Title | Solved by | Retention % | Difficulty | General type | Memo/tabulation fit? |
|---|-------|-----------|--------------|------------|---------------|------------------------|
| 1 | Multiples of 3 or 5 | 855,007 | 100.0% | Easy | Brute force (or closed-form arithmetic series) | No — direct computation, no subproblem structure |
| 2 | Even Fibonacci numbers | 683,527 | 80.0% | Easy | Iterative / bottom-up generation | **Yes (tabulation)** — each term built from the previous two; built this session |
| 3 | Largest prime factor | 515,036 | 60.2% | Medium | Trial division (iterative factorization) | No for the search itself — no candidate is ever tested twice in a single run. The *primality check* can use a tabulated growing-primes cache (explored this session), but that only speeds up individual checks, not the core search cost |
| 4 | Largest palindrome product | 455,269 | 53.3% | Medium | Brute force (nested search) | No — exhaustive grid over fixed pairs, no overlap |
| 5 | Smallest multiple | 441,711 | 51.7% | Medium | Number theory (LCM/GCD); brute force if unoptimized | **Yes (tabulation)** — `lcm(n)` builds directly from `lcm(n-1)`; the central worked example this session |
| 6 | Sum square difference | 446,685 | 52.2% | Medium | Closed-form arithmetic / direct computation | No — direct computation, nothing to build up |
| 7 | 10001st prime | 389,260 | 45.5% | Hard | Iterative prime generation / sieve | **Yes (tabulation)** — a growing list of confirmed primes tests each new candidate, same technique explored for problem 3 |
| 8 | Largest product in a series | 331,482 | 38.8% | Hard | Brute force (sliding window) | No — sliding window is a different technique (incremental reuse of the previous window), not overlapping subproblems |
| 9 | Special Pythagorean triplet | 337,029 | 39.4% | Hard | Brute force search (or number theory via Euclid's formula) | No — brute-force/algebraic, no subproblem structure |
| 10 | Summation of primes | 316,366 | 37.0% | Hard | Sieve of Eratosthenes | **Yes (tabulation)** — a sieve *is* bottom-up tabulation: builds a full primality table in one pass |
| 12 | Highly divisible triangular number | 233,281 | 27.3% | Very Hard | Iterative generation + factorization | **Yes (tabulation)** — triangular numbers build directly from the previous one (`T(n) = T(n-1) + n`); divisor-counting can also reuse a precomputed smallest-prime-factor table |
| 14 | Longest Collatz sequence | 238,437 | 27.9% | Very Hard | Brute force + memoization (top-down) | **Yes (memoization)** — chain lengths genuinely overlap across different starting numbers; the strongest case in this list |
| 15 | Lattice paths | 202,263 | 23.7% | Very Hard | Combinatorics / grid dynamic programming | **Yes (tabulation)** — textbook 2D DP: paths to a cell = paths from above + paths from the left, massively overlapping sub-paths |
| 16 | Power digit sum | 236,751 | 27.7% | Very Hard | Big-integer arithmetic / direct computation | No — even via binary exponentiation (halving the exponent, top-down), there's no overlapping subproblem to cache, same as the `power(base, exp)` example from this session's top-down guide |
| 17 | Number letter counts | 169,665 | 19.8% | Very Hard | String construction / lookup table | **Yes (tabulation-style lookup)** — letter counts for word parts (ones, teens, tens, "hundred") get computed once and reused across every one of the 1,000 numbers |
| 18 | Maximum path sum I | 164,015 | 19.2% | Very Hard | Dynamic programming (triangle path optimization) | **Yes (tabulation)** — canonical bottom-up DP: work from the bottom row upward, each row reusing the row below's already-computed maxes |
| 20 | Factorial digit sum | 206,963 | 24.2% | Very Hard | Big-integer arithmetic / direct computation | No — straightforward iterative multiplication, each step used exactly once |

## Difficulty tiers

- **Easy** — retention ≥ 70%
- **Medium** — retention 50–69%
- **Hard** — retention 35–49%
- **Very Hard** — retention < 35%

## Notes

- Problem 5 (`05_smallest_multiple`) is the one worked through in depth this session — see `05_smallest_multiple/session_recap.md` for the full top-down/bottom-up exploration and the brute-force-to-number-theory evolution of the solution.
- Problem 2 (`02_even_fibonacci_numbers`) has its own `visual_guide.html` walking through converting a top-down, memoized recursive solution into a bottom-up rolling-window one — the clearest worked example of the tabulation fit in this table.
- Problem 3 (`03_largest_prime_factor`) is a useful counterexample: the instinct to reach for memoization/tabulation showed up repeatedly while working on it, but the outer search genuinely has no repeated subproblems within a single run. A growing-primes cache *does* speed up the primality check specifically (implemented as `V3` in `problem.rb`), which is real tabulation — just scoped to that one sub-check, not the whole algorithm. The actual fix for the search's scale problem was a different technique entirely (successive division, shrinking the target as factors are found).
- Problem 14 (Collatz) is a classic memoization candidate: chain lengths overlap heavily across starting numbers below a million, similar to the Fibonacci overlap discussed this session — a strong case for caching.
- Problems checked in the 10–20 range but **not** added, since they don't hold up under the same test: **11** (Largest product in a grid) is a brute-force scan like problem 8, no overlapping subproblems; **13** (Large sum) is pure big-integer addition, nothing to build up; **19** (Counting Sundays) is iterative date arithmetic, no subproblem structure. Problems 12, 15, 17, and 18 were the ones that survived the check, and each is a strong enough fit to be worth its own folder.
- Problem 18 in particular is worth calling out as arguably the clearest textbook DP example available across this whole collection — even more canonical than Fibonacci for teaching the bottom-up pattern, since the triangle shape makes the "each answer reuses two smaller answers" structure visually obvious.
- Data source: [projecteuler.net/archives](https://projecteuler.net/archives), fetched 2026-09-28. Solved-by counts change over time as more people solve problems; retention percentages will drift slightly on a re-fetch.
