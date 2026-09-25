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

=begin
What is the value of "no houses left"?
- 0
What do you add if you take house i, and where does the next call start?
- i + 2 because it has to skip a house
Where does the next call start if you skip?
- i + 1
How do you combine take and skip?
- should take the higher value between the take and skip
=end

def rob_naive(houses, idx = 0)
  return 0 if idx >= houses.length

          # 1                 # 3
  take = houses[idx] + rob(houses, idx + 2)
          # 2
  skip = rob(houses, idx + 1 )

  if (take > skip)
    return take
  else
    return skip
  end
end

=begin
rob(0)
  rob(2)
    rob(4)
    rob(3)
  rob(1)
    rob(3)
    rob(2)
      rob(4)
rob(3)
=end



def rob(houses, idx = 0, memo = {}, depth: 0)
  puts "#{'  ' * depth}rob(#{idx})"
  return 0 if idx >= houses.length

          # 1                 # 3
  take = houses[idx] + rob(houses, idx + 2, depth: depth + 1)
          # 2
  skip = rob(houses, idx + 1, depth: depth + 1)

  if (take > skip)
    return take
  else
    return skip
  end
end

rob([1,2,3]) # 4




# ---- driver code — no rspec, just plain Ruby, run with: ruby house_robber_script.rb ----

def check(nums, expected)
  actual = rob(nums)

  shown = nums.length > 12 ? "#{nums.length} houses" : nums.inspect

  status = actual == expected ? "PASS" : "FAIL"
  puts "#{status}: nums=#{shown} -> #{actual.inspect} (expected #{expected})"
end


# check([1, 2, 3, 1], 4)
# check([2, 7, 9, 3, 1], 12)
# check([2, 7, 1, 1, 9], 16)
# check([5], 5)
# check([2, 1], 2)
# check([1, 2], 2)
# check([0, 0, 0], 0)
# check([100, 1, 1, 100], 200)
# check([1, 2, 3, 4, 5], 9)

# Plain recursion makes about 2^n calls, so 100 houses will not finish without
# memoization or a loop. Uncomment once your solution caches or iterates.
# check([400] * 100, 20_000)
