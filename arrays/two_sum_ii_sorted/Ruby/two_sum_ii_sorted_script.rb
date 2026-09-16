=begin
Two Sum II - Input Array Is Sorted — https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Given a 1-indexed array of integers numbers that is already sorted in
non-decreasing order, find two numbers such that they add up to a
specific target number.

Return the indices of the two numbers, index1 and index2, each
incremented by one, as an integer array [index1, index2] of length 2.

There is exactly one solution, and you may not use the same element
twice. Your solution must use only constant extra space.
=end

# tar: 15
# sum: 15
# 2 3 7 8 9
#     l
#       r

def two_sum_ii(nums, tar)

  l, r = 0, nums.length - 1

  while (l < r)
    sum = nums[l] + nums[r]
    return [l + 1, r + 1] if sum == tar
    if (sum < tar)
      l += 1
    else
      r -= 1
    end
  end

  false
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby two_sum_ii_sorted_script.rb ----

def check(numbers, target, expected)
  result = two_sum_ii(numbers, target)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: numbers=#{numbers.inspect}, target=#{target} -> #{result.inspect} (expected #{expected.inspect})"
end

check([2, 7, 11, 15], 9, [1, 2])
check([2, 3, 4], 6, [1, 3])
check([-1, 0], -1, [1, 2])
check([1, 2, 3, 4, 4, 9, 56, 90], 8, [4, 5])
check([3, 3], 6, [1, 2])
