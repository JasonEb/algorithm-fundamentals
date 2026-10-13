=begin
Next Greater Element III — https://leetcode.com/problems/next-greater-element-iii/

Given a positive integer n, find the smallest integer that has exactly
the same digits and is strictly greater than n. If no such integer
exists, or it does not fit in a 32-bit signed integer, return -1.
=end

INT32_MAX = 2**31 - 1

def next_greater_element(n)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby next_greater_element_iii_script.rb ----

def check(n, expected)
  result = next_greater_element(n)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: n=#{n} -> #{result} (expected #{expected})"
end

check(12, 21)
check(21, -1)
check(230241, 230412)
