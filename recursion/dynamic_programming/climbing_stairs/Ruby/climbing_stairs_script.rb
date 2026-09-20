=begin
Climbing Stairs — https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can
you climb to the top?

Constraints: 1 <= n <= 45
=end

# 4 
# 1,1,1,1
# 1,1,2
# 1,2,1
# 2,1,1
# 2,2

# 1

# 2
# 1, 1
# 2

def climb_stairs(n, count = 0)
  return 0 if n < 0
  return 1 if n == 0

  climb_stairs(n - 1, count + 1) + climb_stairs(n - 2, count + 1)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby climbing_stairs_script.rb ----

def check(n, expected)
  actual = climb_stairs(n)

  status = actual == expected ? "PASS" : "FAIL"
  puts "#{status}: n=#{n} -> #{actual.inspect} (expected #{expected})"
end

# check(1, 1)
check(2, 2)
# check(3, 3)
# check(4, 5)
# check(5, 8)
# check(10, 89)
# check(45, 1_836_311_903)
