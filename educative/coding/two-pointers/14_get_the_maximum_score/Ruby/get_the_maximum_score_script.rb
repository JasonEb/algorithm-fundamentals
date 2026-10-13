=begin
Get the Maximum Score — https://leetcode.com/problems/get-the-maximum-score/

You are given two sorted arrays of distinct integers nums1 and nums2. A
valid path walks one array left to right, and at any value shared by
both arrays you may switch to the other array. The score of a path is
the sum of the values visited. Return the maximum score over all valid
paths, modulo 10^9 + 7.
=end

def max_sum(nums1, nums2)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby get_the_maximum_score_script.rb ----

def check(nums1, nums2, expected)
  result = max_sum(nums1, nums2)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums1=#{nums1.inspect} nums2=#{nums2.inspect} -> #{result} (expected #{expected})"
end

check([2, 4, 5, 8, 10], [4, 6, 8, 9], 30)
check([1, 3, 5, 7, 9], [3, 5, 100], 109)
check([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 40)
