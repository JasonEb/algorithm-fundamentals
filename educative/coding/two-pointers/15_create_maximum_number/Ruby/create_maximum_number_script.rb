=begin
Create Maximum Number — https://leetcode.com/problems/create-maximum-number/

You are given two arrays of digits nums1 and nums2 and an integer k.
Create the maximum number of length k by choosing a subsequence from
each array (preserving relative order) and merging the two
subsequences, preserving the relative order of each. Return the result
as an array of digits.
=end

def max_subsequence(nums, k)
end

def greater_suffix?(a, i, b, j)
end

def merge(a, b)
end

def create_maximum(nums1, nums2, k)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby create_maximum_number_script.rb ----

def check(nums1, nums2, k, expected)
  result = create_maximum(nums1, nums2, k)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums1=#{nums1.inspect} nums2=#{nums2.inspect} k=#{k} -> #{result.inspect} (expected #{expected.inspect})"
end

check([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5, [9, 8, 6, 5, 3])
check([6, 7], [6, 0, 4], 5, [6, 7, 6, 0, 4])
check([3, 9], [8, 9], 3, [9, 8, 9])
