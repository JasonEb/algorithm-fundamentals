=begin
Move Zeroes — https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Note that you must do this in place, without making a copy of the array.

Constraints: 1 <= nums.length <= 10^4, -2^31 <= nums[i] <= 2^31 - 1
Follow up: minimize the total number of operations.
=end

def move_zeroes_naive(nums)
  # walk array, if not equal to zero, add to result array
  result = [] 

  nums.each do |num|
    result << num if num != 0
  end

  result
end


# 0 1 0 3 5
#         r
#       w
# 1 3 5

def move_zeroes(nums)
  # keep two pointers, r and w
  # if r is not a 0, then write it to w
  # increment w
  # then when r reaches the end , write the remaining array until 0s are gone

  r,w = 0,0

  while (r < nums.length)
    if (nums[r] != 0)
      nums[w] = nums[r]
      w += 1
    end

    r += 1
  end

  while (w < nums.length)
    nums[w] = 0
    w += 1
  end

  nums
end

print move_zeroes([0, 1, 0, 3, 12])


def check(nums, expected)
  move_zeroes(nums)
  ok = nums == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} (expected #{expected.inspect})"
end

check([0, 1, 0, 3, 12], [1, 3, 12, 0, 0])
check([0], [0])
check([0, 0, 1], [1, 0, 0])
check([1, 2, 3], [1, 2, 3])
check([0, 0, 0], [0, 0, 0])
check([1], [1])
check([4, 0, 5, 0, 0, 6], [4, 5, 6, 0, 0, 0])
