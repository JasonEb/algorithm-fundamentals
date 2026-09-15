=begin
Valid Palindrome — https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads
the same forward and backward.

Given a string s, return true if it is a palindrome, or false otherwise.
=end

def valid_palindrome_naive(str)
  x = str.downcase.gsub(/[^a-z0-9]/, '')

  x == x.reverse
end

# a b b a
#     l 
#   r


def valid_palindrome(str)
  str = str.downcase.gsub(/[^a-z0-9]/, '')

  l, r = 0, str.length - 1

  while ( l < r)
    return false if str[l] != str[r]
    l += 1
    r -= 1
  end

  true
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby valid_palindrome_script.rb ----

def check(s, expected)
  result = valid_palindrome(s)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('A man, a plan, a canal: Panama', true)
check('race a car', false)
check(' ', true)
check('0P', false)
check('ab_a', true)
