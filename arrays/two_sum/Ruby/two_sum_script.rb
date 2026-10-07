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
    map[num] = i
  end

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

# check([2, 7, 11, 15], 9)
# check([3, 2, 4], 6)
# check([3, 3], 6)
# check([-3, 4, 3, 90], 0)

class V1
    class << self
      def two_sum(arr, tar)
          (0...arr.size).each do |i|
            x = i + 1
            (x...arr.size).each do |j|
              num1 = arr[i]
              num2 = arr[j]
              return [i, j] if num1 + num2 == tar
            end
          end

          nil
      end
    end
end

print V1::two_sum([2, 7, 11, 15], 9)
print V1::two_sum([3, 2, 4], 6)
print V1::two_sum([3, 3], 6)
print V1::two_sum([-3, 4, 3, 90], 0)

class V2
    class << self
      def two_sum(arr, tar)
          map = Hash.new

          arr.each_with_index do |x, idx|
            # check if compliment exists
            # if not add number to map
            compliment = tar - x 
            if map.has_key?(compliment)
              return [map[compliment], idx]
            end

            map[x] = idx
          end

          nil
      end
    end
end

puts
puts "V2"
print V2::two_sum([2, 7, 11, 15], 9)
print V2::two_sum([3, 2, 4], 6)
print V2::two_sum([3, 3], 6)
print V2::two_sum([-3, 4, 3, 90], 0)