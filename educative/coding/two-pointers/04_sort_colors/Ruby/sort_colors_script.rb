=begin
Sort Colors — https://leetcode.com/problems/sort-colors/

Given an array nums with n objects colored red, white, or blue (encoded
as 0, 1, and 2), sort them in place so that objects of the same color
are adjacent, in the order red, white, and blue — without using a
library sort.
=end

def sort_colors(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby sort_colors_script.rb ----

def check(nums, expected)
  sort_colors(nums)
  status = nums == expected ? "PASS" : "FAIL"
  puts "#{status}: result=#{nums.inspect} (expected #{expected.inspect})"
end

check([2, 0, 2, 1, 1, 0], [0, 0, 1, 1, 2, 2])
check([2, 0, 1], [0, 1, 2])
check([0], [0])
check([0, 1, 2], [0, 1, 2])
