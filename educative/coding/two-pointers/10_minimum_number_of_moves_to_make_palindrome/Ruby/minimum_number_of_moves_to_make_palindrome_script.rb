=begin
Minimum Number of Moves to Make Palindrome — https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/

You are given a string s consisting only of lowercase English letters.
In one move, you can select any two adjacent characters and swap them.
Return the minimum number of moves needed to make s a palindrome.
=end

def min_moves_to_make_palindrome(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby minimum_number_of_moves_to_make_palindrome_script.rb ----

def check(s, expected)
  result = min_moves_to_make_palindrome(s.dup)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('aabb', 2)
check('letelt', 2)
check('aba', 0)
