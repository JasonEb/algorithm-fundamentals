=begin
Next Permutation — https://leetcode.com/problems/next-permutation/

Given an array of integers nums, rearrange it into the lexicographically
next greater permutation, in place. If no such permutation exists,
rearrange it into the lowest possible order (sorted ascending).
=end

def next_permutation(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby next_permutation_script.rb ----

def check(nums, expected)
  next_permutation(nums)
  status = nums == expected ? "PASS" : "FAIL"
  puts "#{status}: result=#{nums.inspect} (expected #{expected.inspect})"
end

check([1, 2, 3], [1, 3, 2])
check([3, 2, 1], [1, 2, 3])
check([1, 1, 5], [1, 5, 1])
