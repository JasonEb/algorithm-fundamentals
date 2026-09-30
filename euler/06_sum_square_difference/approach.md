# Approaching sum_square_difference

**Naive cost:** O(n), a single pass computing both running sums.

**Where to look for improvement:** already about as tight as a loop-based approach gets. The remaining jump (closed-form arithmetic-series formulas for both sums, giving O(1)) is a formula/theorem-based leap, not a fundamentals one — worth knowing it exists, not necessarily worth chasing if staying within "notice a pattern" territory.

**Memo/tabulation fit:** No. Direct computation, nothing built up from smaller pieces.
