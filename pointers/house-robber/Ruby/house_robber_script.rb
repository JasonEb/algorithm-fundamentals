=begin
House Robber — https://leetcode.com/problems/house-robber/

You are a professional robber planning to rob houses along a street. Each
house has a certain amount of money stashed, the only constraint stopping
you from robbing each of them is that adjacent houses have security systems
connected and it will automatically contact the police if two adjacent
houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
return the maximum amount of money you can rob tonight without alerting the
police.

Constraints: 1 <= nums.length <= 100, 0 <= nums[i] <= 400
=end

def rob(nums)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby house_robber_script.rb ----

def check(nums, expected)
  actual = rob(nums)

  shown = nums.length > 12 ? "#{nums.length} houses" : nums.inspect

  status = actual == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{shown} -> #{actual.inspect} (expected #{expected})"
end

check([1, 2, 3, 1], 4)
check([2, 7, 9, 3, 1], 12)
check([2, 7, 1, 1, 9], 16)
check([5], 5)
check([2, 1], 2)
check([1, 2], 2)
check([0, 0, 0], 0)
check([100, 1, 1, 100], 200)
check([1, 2, 3, 4, 5], 9)

# Plain recursion makes about 2^n calls, so 100 houses will not finish without
# memoization or a loop. Uncomment once your solution caches or iterates.
# check([400] * 100, 20_000)
