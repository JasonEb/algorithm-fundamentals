=begin
Find Pivot Index — https://leetcode.com/problems/find-pivot-index/

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to
the left of the index is equal to the sum of all the numbers strictly to
the index's right.

If the index is on the left edge of the array, the left sum is 0 because
there are no elements to the left. This also applies to the right edge.

Return the leftmost pivot index. If no such index exists, return -1.
=end

def pivot_index(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby find_pivot_idx_script.rb ----

def check(nums, expected)
  result = pivot_index(nums)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([1, 7, 3, 6, 5, 6], 3)
check([1, 2, 3], -1)
check([2, 1, -1], 0)
check([0], 0)
check([-1, -1, -1, 0, 1, 1], 0)
