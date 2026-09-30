# Approaching largest_palindrome_product

**Naive cost:** O(n²), where n = 10^digits — checks every pair `(a, b)` with `a ≤ b`, tests each product for palindrome-ness.

**Where to look for improvement:** the search doesn't need to check every pair blindly. Searching from the *largest* possible products downward, and stopping the inner loop early once the best-possible remaining product in a branch can't beat the current best, prunes a lot of dead searching. This is a search-space-narrowing idea, same family as the `smallest_multiple` and `largest_prime_factor` narrowing from earlier — not a caching technique.

**Memo/tabulation fit:** No. Exhaustive grid search over a fixed pair space, nothing repeats.
