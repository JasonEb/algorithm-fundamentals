=begin
Remove Duplicates from Sorted Array — https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Given an integer array nums sorted in non-decreasing order, remove the
duplicates in place so each unique element appears only once, keeping
the relative order. Return the number of unique elements.
=end

def remove_duplicates(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby remove_duplicates_from_sorted_array_script.rb ----

def check(nums, expected_k)
  k = remove_duplicates(nums)
  status = k == expected_k ? "PASS" : "FAIL"
  puts "#{status}: nums[0,k]=#{nums[0, k].inspect} -> k=#{k} (expected #{expected_k})"
end

check([1, 1, 2], 2)
check([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5)
check([1, 2, 3], 3)
