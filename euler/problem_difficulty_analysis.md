# Problem difficulty analysis

Covers the 13 problems currently in this directory (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 16, 20).

## Methodology

Project Euler's own crowd-sourced difficulty rating is only visible once you've solved a problem (via a logged-in account), so it isn't publicly fetchable. As a proxy, this table uses each problem's public "solved by" count from [projecteuler.net/archives](https://projecteuler.net/archives) (fetched 2026-09-28), expressed as a **retention rate relative to Problem 1**:

```
retention % = (solved by this problem / solved by Problem 1) × 100
```

Problem 1 is solved by nearly everyone who creates an account, so it serves as a reasonable baseline population. A lower retention rate means a smaller fraction of that population made it through to solve this problem.

**Caveat:** this conflates two things — genuine difficulty, and the fact that problems are typically attempted roughly in order, so later problems naturally lose solvers to attrition (people stopping) as well as to difficulty. Treat this as a difficulty *proxy*, not a precise measurement.

"General type" reflects the standard/expected approach to each problem as it's classically solved, independent of how any particular file in this repo happens to implement it.

## Table

| # | Title | Solved by | Retention % | Difficulty | General type |
|---|-------|-----------|--------------|------------|---------------|
| 1 | Multiples of 3 or 5 | 855,007 | 100.0% | Easy | Brute force (or closed-form arithmetic series) |
| 2 | Even Fibonacci numbers | 683,527 | 80.0% | Easy | Iterative / bottom-up generation |
| 3 | Largest prime factor | 515,036 | 60.2% | Medium | Trial division (iterative factorization) |
| 4 | Largest palindrome product | 455,269 | 53.3% | Medium | Brute force (nested search) |
| 5 | Smallest multiple | 441,711 | 51.7% | Medium | Number theory (LCM/GCD); brute force if unoptimized |
| 6 | Sum square difference | 446,685 | 52.2% | Medium | Closed-form arithmetic / direct computation |
| 7 | 10001st prime | 389,260 | 45.5% | Hard | Iterative prime generation / sieve |
| 8 | Largest product in a series | 331,482 | 38.8% | Hard | Brute force (sliding window) |
| 9 | Special Pythagorean triplet | 337,029 | 39.4% | Hard | Brute force search (or number theory via Euclid's formula) |
| 10 | Summation of primes | 316,366 | 37.0% | Hard | Sieve of Eratosthenes |
| 14 | Longest Collatz sequence | 238,437 | 27.9% | Very Hard | Brute force + memoization (top-down) |
| 16 | Power digit sum | 236,751 | 27.7% | Very Hard | Big-integer arithmetic / direct computation |
| 20 | Factorial digit sum | 206,963 | 24.2% | Very Hard | Big-integer arithmetic / direct computation |

## Difficulty tiers

- **Easy** — retention ≥ 70%
- **Medium** — retention 50–69%
- **Hard** — retention 35–49%
- **Very Hard** — retention < 35%

## Notes

- Problem 5 (`05_smallest_multiple`) is the one worked through in depth this session — see `05_smallest_multiple/session_recap.md` for the full top-down/bottom-up exploration and the brute-force-to-number-theory evolution of the solution.
- Problem 14 (Collatz) is a classic memoization candidate: chain lengths overlap heavily across starting numbers below a million, similar to the Fibonacci overlap discussed this session — a strong case for caching.
- Data source: [projecteuler.net/archives](https://projecteuler.net/archives), fetched 2026-09-28. Solved-by counts change over time as more people solve problems; retention percentages will drift slightly on a re-fetch.
