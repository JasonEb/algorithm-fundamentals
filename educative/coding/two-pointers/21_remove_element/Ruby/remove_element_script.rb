=begin
Remove Element — https://leetcode.com/problems/remove-element/

Given an integer array nums and an integer val, remove all occurrences
of val in nums in place and return the number of elements that are not
equal to val. The order of the remaining elements may be changed.
=end

def remove_element(nums, val)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby remove_element_script.rb ----

def check(nums, val, expected_k)
  k = remove_element(nums, val)
  status = k == expected_k ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} val=#{val} -> k=#{k} (expected #{expected_k})"
end

check([3, 2, 2, 3], 3, 2)
check([0, 1, 2, 2, 3, 0, 4, 2], 2, 5)
check([1, 2, 3], 9, 3)
