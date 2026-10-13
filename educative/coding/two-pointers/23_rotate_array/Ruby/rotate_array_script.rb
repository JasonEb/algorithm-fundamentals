=begin
Rotate Array — https://leetcode.com/problems/rotate-array/

Given an integer array nums, rotate the array to the right by k steps,
in place.
=end

def reverse_range!(nums, left, right)
end

def rotate(nums, k)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby rotate_array_script.rb ----

def check(nums, k, expected)
  rotate(nums, k)
  status = nums == expected ? "PASS" : "FAIL"
  puts "#{status}: result=#{nums.inspect} (expected #{expected.inspect})"
end

check([1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4])
check([-1, -100, 3, 99], 2, [3, 99, -1, -100])
check([1, 2, 3], 4, [3, 1, 2])
