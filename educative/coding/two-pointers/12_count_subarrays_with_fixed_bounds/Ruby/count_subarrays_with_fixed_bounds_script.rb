=begin
Count Subarrays With Fixed Bounds — https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

You are given an integer array nums and two integers min_k and max_k. A
fixed-bound subarray is a subarray where the minimum value is exactly
min_k and the maximum value is exactly max_k. Return the number of
fixed-bound subarrays.
=end

def count_subarrays(nums, min_k, max_k)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby count_subarrays_with_fixed_bounds_script.rb ----

def check(nums, min_k, max_k, expected)
  result = count_subarrays(nums, min_k, max_k)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} min_k=#{min_k} max_k=#{max_k} -> #{result} (expected #{expected})"
end

check([1, 3, 5, 2, 7, 5], 1, 5, 2)
check([1, 1, 1, 1], 1, 1, 10)
check([9, 9, 9], 1, 5, 0)
