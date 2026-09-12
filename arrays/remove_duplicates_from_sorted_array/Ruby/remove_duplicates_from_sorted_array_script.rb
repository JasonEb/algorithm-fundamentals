=begin
Remove Duplicates from Sorted Array — https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Given an integer array nums sorted in non-decreasing order, remove the
duplicates in place such that each unique element appears only once. The
relative order of the elements should be kept the same.

Let k be the number of unique elements in nums. After removing duplicates,
return k.

The first k elements of nums must contain the unique numbers in sorted
order. Elements after index k - 1 don't matter — the judge only checks the
first k.
=end

def remove_duplicates(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby remove_duplicates_from_sorted_array_script.rb ----

def check(nums, expected)
  k = remove_duplicates(nums)
  kept = nums[0...k] rescue nil
  ok = k == expected.length && kept == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> k=#{k.inspect}, nums[0...k]=#{kept.inspect} (expected #{expected.inspect})"
end

check([1, 1, 2], [1, 2])
check([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4])
check([5], [5])
check([1, 2, 3], [1, 2, 3])
check([9, 9, 9, 9], [9])
