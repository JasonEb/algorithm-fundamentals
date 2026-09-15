=begin
Two Sum — https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return the indices
of the two numbers that add up to target.

You may assume each input has exactly one solution, and you may not use
the same element twice. Return the answer in any order.
=end

# tar = 6
# comp = 6 - 3 = 3
# {
#   3: 0,

# }
# 3 2 4
# i

# walk through array
def two_sum(nums, tar)
  map = Hash.new

  nums.each_with_index do |num, i|
    com = tar - num
    return [i, map[com]] if map[com] != nil
  end

  map[num] = i
  nil
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby two_sum_script.rb ----

def check(nums, target)
  result = two_sum(nums, target)
  i, j = result

  ok = result.is_a?(Array) && result.length == 2 && i != j && nums[i] + nums[j] == target

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect}, target=#{target} -> #{result.inspect}"
end

check([2, 7, 11, 15], 9)
check([3, 2, 4], 6)
check([3, 3], 6)
check([-3, 4, 3, 90], 0)
