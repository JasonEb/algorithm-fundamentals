=begin
Sum of Square Numbers — https://leetcode.com/problems/sum-of-square-numbers/

Given a non-negative integer c, return true if there exist two
integers a and b such that a^2 + b^2 == c.
=end

def judge_square_sum?(c)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby sum_of_square_numbers_script.rb ----

def check(c, expected)
  result = judge_square_sum?(c)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: c=#{c} -> #{result.inspect} (expected #{expected.inspect})"
end

check(5, true)
check(3, false)
check(0, true)
check(4, true)
