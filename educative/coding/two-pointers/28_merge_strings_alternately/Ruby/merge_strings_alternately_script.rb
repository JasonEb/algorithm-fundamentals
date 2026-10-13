=begin
Merge Strings Alternately — https://leetcode.com/problems/merge-strings-alternately/

Given two strings word1 and word2, merge them by adding letters in
alternating order, starting with word1. If one string is longer, append
its remaining letters to the end of the merged string.
=end

def merge_alternately(word1, word2)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby merge_strings_alternately_script.rb ----

def check(word1, word2, expected)
  result = merge_alternately(word1, word2)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: word1=#{word1.inspect} word2=#{word2.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('abc', 'pqr', 'apbqcr')
check('ab', 'pqrs', 'apbqrs')
check('abcd', 'pq', 'apbqcd')
