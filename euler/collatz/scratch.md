Take a positive integer, like 9, and apply the following rule:
if it’s odd multiply it by 3 and add 1
if it’s even, divide it in half.
For example, applying this rule to 9 yields 28
Apply this rule repeatedly and you'll create a chain:
9 → 28 → 14 → 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1.
This particular chain requires 19 steps before it hits 1.
The Collatz conjecture says that all such chains will in fact hit 1 eventually. Calling 1 the end of a chain, for what integer less than a million is the Collatz chain the longest?

collatz(1) → 0   (already at 1)
collatz(2) → 1   (2 → 1)
collatz(3) → 7   (3 → 10 → 5 → 16 → 8 → 4 → 2 → 1)
collatz(4) → 2   (4 → 2 → 1)
collatz(5) → 5   (5 → 16 → 8 → 4 → 2 → 1)
collatz(6) → 8   (6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1)
collatz(7) → 16  (7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1)
