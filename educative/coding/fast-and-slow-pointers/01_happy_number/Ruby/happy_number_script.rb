=begin
Happy Number — https://leetcode.com/problems/happy-number/

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of
  the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or
  it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
=end

def happy_number?(n)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby happy_number_script.rb ----

def check(n, expected)
  result = happy_number?(n)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: n=#{n} -> #{result.inspect} (expected #{expected.inspect})"
end

check(19, true)
check(2, false)
