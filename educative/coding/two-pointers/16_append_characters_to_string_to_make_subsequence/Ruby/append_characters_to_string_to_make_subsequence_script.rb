=begin
Append Characters to String to Make Subsequence — https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

Given two strings s and t, return the minimum number of characters that
need to be appended to the end of s so that t becomes a subsequence of
s.
=end

def append_characters(s, t)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby append_characters_to_string_to_make_subsequence_script.rb ----

def check(s, t, expected)
  result = append_characters(s, t)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} t=#{t.inspect} -> #{result} (expected #{expected})"
end

check('coaching', 'coding', 4)
check('abcde', 'a', 0)
check('z', 'abcde', 5)
