=begin
Move Zeroes — https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it in place
while maintaining the relative order of the non-zero elements.
=end

def move_zeroes(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby move_zeroes_script.rb ----

def check(nums, expected)
  move_zeroes(nums)
  status = nums == expected ? "PASS" : "FAIL"
  puts "#{status}: result=#{nums.inspect} (expected #{expected.inspect})"
end

check([0, 1, 0, 3, 12], [1, 3, 12, 0, 0])
check([0], [0])
check([1, 2, 3], [1, 2, 3])
