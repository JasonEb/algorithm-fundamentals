=begin
Strobogrammatic Number — https://leetcode.com/problems/strobogrammatic-number/

Given a string num which represents an integer, return true if num is a
strobogrammatic number — a number that looks the same when rotated 180
degrees (looked at upside down).
=end

ROTATIONS = { '0' => '0', '1' => '1', '6' => '9', '8' => '8', '9' => '6' }.freeze

def strobogrammatic?(num)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby strobogrammatic_number_script.rb ----

def check(num, expected)
  result = strobogrammatic?(num)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: num=#{num.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('69', true)
check('88', true)
check('962', false)
check('1', true)
