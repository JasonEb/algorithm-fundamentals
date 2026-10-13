=begin
Reverse Words in a String — https://leetcode.com/problems/reverse-words-in-a-string/

Given an input string s, reverse the order of the words, where a word
is a maximal substring of non-space characters. Words in the result
should be separated by a single space, with no leading or trailing
spaces.
=end

def reverse_words(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby reverse_words_in_a_string_script.rb ----

def check(s, expected)
  result = reverse_words(s)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('  hello world  ', 'world hello')
check('a good   example', 'example good a')
check('  Bob    Loves  Alice   ', 'Alice Loves Bob')
check('hello', 'hello')
