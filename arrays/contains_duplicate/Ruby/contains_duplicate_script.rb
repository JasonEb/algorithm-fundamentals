=begin
Contains Duplicate — https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least
twice in the array, and return false if every element is distinct.
=end

# nums = 

def contains_duplicate_hash(nums)
  seen = Hash.new(false)

  nums.each do |num|
    return true if seen[num] == true

    seen[num] = true
  end

  false
end

def contains_duplicate(nums)
  nums.sort!

  (1...nums.length).each do |x|
    cur, prv = nums[x], nums[x-1]
    return true if cur == prv
  end
  false
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby contains_duplicate_script.rb ----

def check(nums, expected)
  result = contains_duplicate(nums)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

nums = [2,1,2]

check([1, 2, 3, 1], true)
check([1, 2, 3, 4], false)
check([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true)
check([7], false)
check([-1, -2, -3, -1], true)
