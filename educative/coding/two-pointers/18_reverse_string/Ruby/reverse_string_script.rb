=begin
Reverse String — https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as
an array of characters s, and the reversal must be done in place.
=end

def reverse_string(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby reverse_string_script.rb ----

def check(s, expected)
  reverse_string(s)
  status = s == expected ? "PASS" : "FAIL"
  puts "#{status}: result=#{s.inspect} (expected #{expected.inspect})"
end

check(['h', 'e', 'l', 'l', 'o'], ['o', 'l', 'l', 'e', 'h'])
check(['H', 'a', 'n', 'n', 'a', 'h'], ['h', 'a', 'n', 'n', 'a', 'H'])
check(['a'], ['a'])
