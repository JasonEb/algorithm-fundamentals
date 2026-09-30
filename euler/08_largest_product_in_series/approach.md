# Approaching largest_product_in_series

**Naive cost:** O(n × k) — recomputes the full product of `k` digits from scratch at every window position.

**Where to look for improvement:** consecutive windows overlap in all but one digit. A sliding-window approach could reuse the previous window's product, updating incrementally instead of recomputing — but multiplication doesn't undo cleanly like addition does when a `0` slides out of the window (division by zero), so this needs care around zeros, not a clean division-based reversal.

**Memo/tabulation fit:** No, and worth being precise about why — this is a different technique (incremental window reuse), not overlapping subproblems in the DP sense.
