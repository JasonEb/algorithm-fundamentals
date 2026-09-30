# Approaching special_pythagorean_triplet

**Naive cost:** O(n²) — nested loop over `a` and `b`, deriving `c` directly (already better than a naive O(n³) that would also loop over `c`).

**Where to look for improvement:** since `perimeter = a + b + c` and `a² + b² = c²` are both known up front, `b` can be solved for algebraically given `a` and `perimeter`, collapsing the inner loop entirely — O(n) instead of O(n²). This is algebraic rearrangement of a given formula, not a deep number-theory fact, so it's fair game even under a "no theorems" constraint.

**Memo/tabulation fit:** No. Brute-force/algebraic search, no subproblem structure.
