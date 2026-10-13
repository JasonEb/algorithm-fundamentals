=begin
3Sum — https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and
nums[i] + nums[j] + nums[k] == 0.

The solution set must not contain duplicate triplets.
=end

# -1 0 1  2 -1 -4
# x            r

# -1 0 1  2 -1 -4

# -4, -1, -1, 0, 1, 2

# x, l, r
# -1, 0, 2 = 

def three_sum(nums)
  nums.sort!
  result = []

  (0..nums.size - 2).each do |x|
    # check for repeats
    next if x > 0 && nums[x] == nums[x - 1]

    l = x + 1
    r = nums.size - 1

    while(l < r)
      sum = nums[x] + nums[l] + nums[r]

      if (sum == 0)
        result << [nums[x],nums[l],nums[r]]

        # after recording a match, we need to make sure we get no repeats
        l += 1
        r -= 1
        l += 1 while l < r && nums[l] == nums[l - 1]
        r -= 1 while l < r && nums[r] == nums[r + 1]
      end

      if(sum > 0)
        r -= 1
      end

      if(sum < 0)
        l += 1
      end
    end
  end

  result
end

print three_sum([-1, 0, 1, 2, -1, -4])
# ---- driver code — no rspec, just plain Ruby, run with: ruby three_sum_script.rb ----

def check(nums, expected)
  result = three_sum(nums).map(&:sort).sort
  expected_sorted = expected.map(&:sort).sort
  status = result == expected_sorted ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> #{result.inspect} (expected #{expected_sorted.inspect})"
end

check([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]])
check([0, 1, 1], [])
check([0, 0, 0], [[0, 0, 0]])
