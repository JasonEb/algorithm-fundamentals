# Approaching factorial_digit_sum

**Naive cost:** O(n) for the factorial (bignum multiplication, growing more expensive as the number of digits grows), plus O(digits) for the digit sum.

**Where to look for improvement:** not much room here using fundamentals alone — the multiplication cost is inherent to computing an exact, arbitrarily large factorial, and there's no repeated subproblem to exploit.

**Memo/tabulation fit:** No. Direct computation, each multiplication used exactly once.
