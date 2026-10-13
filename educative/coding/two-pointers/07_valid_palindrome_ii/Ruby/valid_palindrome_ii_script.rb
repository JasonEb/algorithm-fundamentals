=begin
Valid Palindrome II — https://leetcode.com/problems/valid-palindrome-ii/

Given a string s, return true if s can be a palindrome after deleting
at most one character from it.
=end

def palindrome_range?(s, left, right)
end

def valid_palindrome_ii?(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby valid_palindrome_ii_script.rb ----

def check(s, expected)
  result = valid_palindrome_ii?(s)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('aba', true)
check('abca', true)
check('abc', false)
check('', true)
