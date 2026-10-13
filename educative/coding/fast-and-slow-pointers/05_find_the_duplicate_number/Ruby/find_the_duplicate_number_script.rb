=begin
Find the Duplicate Number — https://leetcode.com/problems/find-the-duplicate-number/

Given an array of integers nums containing n + 1 integers where each
integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using
only constant extra space.
=end

def find_duplicate(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby find_the_duplicate_number_script.rb ----

def check(nums, expected)
  result = find_duplicate(nums)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([1, 3, 4, 2, 2], 2)
check([3, 1, 3, 4, 2], 3)
check([3, 3, 3, 3, 3], 3)
