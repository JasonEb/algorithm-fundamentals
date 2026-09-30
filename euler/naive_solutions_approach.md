# Approaching the naive solutions

Covers the 9 naive `V1` solutions just written (04, 06, 08, 09, 15, 16, 17, 18, 20). Each problem's own breakdown — naive cost, the concrete pattern to look for when improving it, and an honest memo/tabulation fit — now lives in that problem's own directory as `approach.md`, so it travels with the code it's about:

- [04_largest_palindrome_product/approach.md](04_largest_palindrome_product/approach.md)
- [06_sum_square_difference/approach.md](06_sum_square_difference/approach.md)
- [08_largest_product_in_series/approach.md](08_largest_product_in_series/approach.md)
- [09_special_pythagorean_triplet/approach.md](09_special_pythagorean_triplet/approach.md)
- [15_lattice_paths/approach.md](15_lattice_paths/approach.md)
- [16_power_digit_sum/approach.md](16_power_digit_sum/approach.md)
- [17_number_letter_counts/approach.md](17_number_letter_counts/approach.md)
- [18_maximum_path_sum_i/approach.md](18_maximum_path_sum_i/approach.md)
- [20_factorial_digit_sum/approach.md](20_factorial_digit_sum/approach.md)

The memo/tabulation verdicts use the same test applied throughout this session: does a subproblem actually get solved more than once, or is there a genuine smallest-to-largest build-up? Not every DP-shaped-looking problem survives that test (08 in particular looks DP-shaped but isn't), and that's called out explicitly in each file rather than smoothed over.

## Priority order, if picking where to go next

1. **18 (max path sum)** and **15 (lattice paths)** — genuine, strong DP fits, and 15 is the one where the naive version is actually infeasible at real scale, not just slow.
2. **09 (Pythagorean triplet)** — a clean O(n²) → O(n) win via algebra, no new technique required.
3. **08 (product in series)** — a real but more delicate win (sliding window with zero-handling), good practice for incremental-computation thinking.
4. **04 (palindrome product)** — a search-narrowing exercise, same family as earlier problems this session.
5. **06, 16, 20** — already close to their practical ceiling without reaching for closed-form formulas; lower priority for further work.
