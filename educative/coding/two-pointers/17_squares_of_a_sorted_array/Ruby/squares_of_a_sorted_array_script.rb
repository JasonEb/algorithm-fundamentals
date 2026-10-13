=begin
Squares of a Sorted Array — https://leetcode.com/problems/squares-of-a-sorted-array/

Given an integer array nums sorted in non-decreasing order, return an
array of the squares of each number, also sorted in non-decreasing
order.
=end

def sorted_squares(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby squares_of_a_sorted_array_script.rb ----

def check(nums, expected)
  result = sorted_squares(nums)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check([-4, -1, 0, 3, 10], [0, 1, 9, 16, 100])
check([-7, -3, 2, 3, 11], [4, 9, 9, 49, 121])
check([-5, -3, -1], [1, 9, 25])
