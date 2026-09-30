# Approaching lattice_paths

**Naive cost:** O(2ⁿ) — plain recursion with **massive** overlap. `count_paths(right, down)` gets re-derived independently every time a different path passes through the same `(right, down)` position, and there are enormous numbers of paths that do.

**Memo/tabulation fit: Yes, strongly — the clearest fit among all the naive solutions written this session.** This is the textbook 2D grid DP: the number of ways to reach any cell is the sum of the ways to reach the cell above and the cell to the left. Building a table bottom-up (or top-down with memoization) turns O(2ⁿ) into O(n²). At the real `grid_size = 20`, the naive version is not just slow — it's completely infeasible, which is exactly what makes this the highest-priority one to revisit.
