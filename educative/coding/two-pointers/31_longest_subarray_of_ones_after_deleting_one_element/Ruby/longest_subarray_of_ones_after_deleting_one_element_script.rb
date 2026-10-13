=begin
Longest Subarray of 1's After Deleting One Element — https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

Given a binary array nums, return the length of the longest subarray
containing only 1's after deleting at most one element from it.
=end

def longest_subarray(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby longest_subarray_of_ones_after_deleting_one_element_script.rb ----

def check(nums, expected)
  result = longest_subarray(nums)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> #{result} (expected #{expected})"
end

check([1, 1, 0, 1], 3)
check([0, 1, 1, 1, 0, 1, 1, 0, 1], 5)
check([1, 1, 1], 2)
