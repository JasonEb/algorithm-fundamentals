=begin
Binary search gotchas — runnable walkthrough.

Run with: ruby binary_search_gotchas_script.rb
=end

require_relative 'binary_search_gotchas'

def check(label, actual, expected)
  ok = actual == expected
  puts "  [#{ok ? 'PASS' : 'FAIL'}] #{label} -> got #{actual.inspect}, expected #{expected.inspect}"
  ok
end

puts "=" * 70
puts "GOTCHA 1: `<` vs `<=` in the loop condition"
puts "=" * 70
puts <<~EXPLAIN
  r starts as an INCLUSIVE bound (nums.length - 1), so the loop condition
  needs to be `l <= r` to ever consider the case where the search has
  narrowed down to a single candidate (l == r). Using `l < r` instead
  skips that last comparison entirely -- most visible on a one-element
  array, where the loop body never runs at all.
EXPLAIN

check("buggy: single-element array, target present", search_buggy_off_by_one([5], 5), -1)
check("fixed: single-element array, target present", search_fixed_bound_mismatch([5], 5), 0)
puts

puts "=" * 70
puts "GOTCHA 2: bound that never shrinks -> infinite loop"
puts "=" * 70
puts <<~EXPLAIN
  With floor division, m = l + (r - l) / 2 rounds DOWN. If the update on
  the "go right" branch sets `l = m` instead of `l = m + 1`, and l and r
  are adjacent (r == l + 1), m recomputes to l again forever. We cap the
  iteration count so the demo terminates instead of hanging the process.
EXPLAIN

nums = [1, 2, 3, 4]
check("buggy: adjacent bounds spin forever", search_buggy_infinite(nums, 4), :infinite_loop_detected)
check("fixed: adjacent bounds converge", search_fixed_infinite(nums, 4), 3)
puts

puts "=" * 70
puts "GOTCHA 3: nil from an out-of-range index, not an exception"
puts "=" * 70
puts <<~EXPLAIN
  Ruby arrays don't raise on out-of-range reads the way many languages do
  (nums[nums.length] just returns nil). An off-by-one bound like
  `r = nums.length` (instead of `nums.length - 1`) doesn't blow up loudly
  at the bad index -- it fails later and confusingly, the moment nil gets
  compared with `<` or `>`.
EXPLAIN

nums = [2, 4, 6, 8]
begin
  search_buggy_out_of_range(nums, 100)
  check("buggy: reads past the array end", false, true)
rescue RuntimeError => e
  check("buggy: raises on the nil read (#{e.message})", true, true)
end
puts

puts "=" * 70
puts "GOTCHA 4: the array has to actually be sorted"
puts "=" * 70
puts <<~EXPLAIN
  Binary search assumes a sorted collection to decide which half to
  discard. On unsorted input it doesn't raise -- it just silently returns
  a wrong answer (often -1 for a value that's present).
EXPLAIN

unsorted = [8, 1, 6, 3, 9, 2]
result = search_fixed_bound_mismatch(unsorted, 3) # 3 IS in the array, at index 3
check("unsorted array gives a wrong (not just slow) answer", result == 3, false)
puts "  (3 is present at index #{unsorted.index(3)}, but binary search on" \
     " unsorted input returned #{result.inspect})"
puts

puts "=" * 70
puts "GOTCHA 5: duplicates -- 'found' isn't 'found the one you wanted'"
puts "=" * 70
puts <<~EXPLAIN
  A plain binary search returns *some* index equal to target, not
  necessarily the first or last one. Use bisect_left / bisect_right style
  searches when you need a specific boundary (e.g. count of occurrences,
  or the insertion point).
EXPLAIN

nums = [1, 3, 3, 3, 3, 5, 8]
plain_hit = search_fixed_bound_mismatch(nums, 3)
check("plain search lands *somewhere* in the run of 3s", (1..4).cover?(plain_hit), true)
check("bisect_left finds the first 3", bisect_left(nums, 3), 1)
check("bisect_right finds the index just past the last 3", bisect_right(nums, 3), 5)
check("count of 3s via bisect_right - bisect_left", bisect_right(nums, 3) - bisect_left(nums, 3), 4)
puts

puts "=" * 70
puts "GOTCHA 6: exact float equality never terminates the way you expect"
puts "=" * 70
puts <<~EXPLAIN
  Searching over a continuous range (e.g. Math.sqrt via binary search)
  can't rely on `mid == target` -- floats almost never land on an exact
  value. Terminate on a precision threshold instead.
EXPLAIN

check("buggy: exact-equality sqrt(2) never converges", sqrt_buggy_equality(2), :never_converged)
fixed_result = sqrt_fixed_precision(2)
check("fixed: precision-based sqrt(2) is close enough", (fixed_result - Math.sqrt(2)).abs < 1e-6, true)
puts

puts "=" * 70
puts "GOTCHA 7: no bignum overflow in Ruby (unlike C/Java/C++)"
puts "=" * 70
puts <<~EXPLAIN
  In languages with fixed-width integers, `(l + r) / 2` can overflow when
  l and r are both near the max int value, silently wrapping to a negative
  number. Ruby's Integer auto-promotes to an arbitrary-precision Bignum,
  so this specific bug class doesn't exist here -- but `l + (r - l) / 2`
  is still worth using as a portable habit if the code might get ported.
EXPLAIN

huge = (2**62)
mid_naive = (huge + huge) / 2
check("Ruby handles huge l + r without overflowing", mid_naive, huge)
puts

puts "=" * 70
puts "All demos complete."
puts "=" * 70
