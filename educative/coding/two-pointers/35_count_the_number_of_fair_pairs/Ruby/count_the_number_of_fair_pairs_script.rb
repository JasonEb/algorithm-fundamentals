=begin
Count the Number of Fair Pairs — https://leetcode.com/problems/count-the-number-of-fair-pairs/

Given a 0-indexed integer array nums of size n and two integers lower
and upper, return the number of fair pairs. A pair (i, j) is fair if
0 <= i < j < n and lower <= nums[i] + nums[j] <= upper.
=end

def count_pairs_at_most(nums, target)
end

def count_fair_pairs(nums, lower, upper)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby count_the_number_of_fair_pairs_script.rb ----

def check(nums, lower, upper, expected)
  result = count_fair_pairs(nums, lower, upper)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} lower=#{lower} upper=#{upper} -> #{result} (expected #{expected})"
end

check([0, 1, 7, 4, 4, 5], 3, 6, 6)
check([1, 7, 9, 2, 5], 11, 11, 1)
check([1, 1], 100, 200, 0)
