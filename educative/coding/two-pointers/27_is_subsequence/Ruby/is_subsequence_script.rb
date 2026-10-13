=begin
Is Subsequence — https://leetcode.com/problems/is-subsequence/

Given two strings s and t, return true if s is a subsequence of t
(characters of s appear in t in the same relative order, not necessarily
contiguous).
=end

def is_subsequence?(s, t)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby is_subsequence_script.rb ----

def check(s, t, expected)
  result = is_subsequence?(s, t)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} t=#{t.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('abc', 'ahbgdc', true)
check('axc', 'ahbgdc', false)
check('', 'anything', true)
