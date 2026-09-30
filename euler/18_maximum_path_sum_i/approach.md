# Approaching max_path_sum

**Naive cost:** O(2ʳᵒʷˢ) — for 15 rows that's 16,384 paths, explicitly called out in the problem statement as fine to brute-force at this size.

**Memo/tabulation fit: Yes, strongly.** Same overlap issue as lattice paths: many different root-to-leaf paths pass through the same `(row, col)` cell, and `find_max` re-derives that cell's best downstream sum independently every time. The canonical fix is bottom-up: start from the last row, and for each row above, replace each cell with `cell + max(the two cells below it)` — by the time you reach the top, that single remaining value is the answer. This is arguably the cleanest textbook DP example in the whole collection, since the triangle shape makes "each answer reuses two smaller answers" visually obvious. It's also the one the problem statement itself warns won't scale to brute force at 100 rows (problem 67) — the real reason to build the bottom-up version now.
