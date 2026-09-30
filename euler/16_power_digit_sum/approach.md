# Approaching power_digit_sum

**Naive cost:** O(digits) for the digit sum; the exponentiation itself (`2 ** exponent`) is handled efficiently by Ruby's bignum implementation already, not a manual naive loop.

**Where to look for improvement:** the digit-extraction step uses `to_s` + character iteration. An arithmetic alternative (`num % 10`, `num /= 10`, repeatedly) avoids the string conversion — a technique alternative worth knowing, though the performance difference here is negligible at this problem's scale.

**Memo/tabulation fit:** No. No subproblem repeats.
