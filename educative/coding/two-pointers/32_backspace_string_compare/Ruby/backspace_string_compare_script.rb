=begin
Backspace String Compare — https://leetcode.com/problems/backspace-string-compare/

Given two strings s and t, each representing a sequence of typed
characters where '#' means a backspace that removes the previous
character, return true if the two strings are equal once the
backspaces are applied.
=end

def next_valid_index(str, index)
end

def backspace_compare?(s, t)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby backspace_string_compare_script.rb ----

def check(s, t, expected)
  result = backspace_compare?(s, t)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} t=#{t.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('ab#c', 'ad#c', true)
check('ab##', 'c#d#', true)
check('a#c', 'b', false)
