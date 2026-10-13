=begin
Valid Word Abbreviation — https://leetcode.com/problems/valid-word-abbreviation/

Given a non-empty string word and an abbreviation abbr, return whether
the abbreviation matches the word. An abbreviation replaces one or more
non-adjacent runs of characters with their count, e.g. "internationalization"
can be abbreviated as "i12iz4n". A count may not have a leading zero.
=end

def valid_word_abbreviation?(word, abbr)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby valid_word_abbreviation_script.rb ----

def check(word, abbr, expected)
  result = valid_word_abbreviation?(word, abbr)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: word=#{word.inspect} abbr=#{abbr.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('internationalization', 'i12iz4n', true)
check('apple', 'a2e', false)
check('internationalization', 'i12iz04n', false)
check('substitution', '12', true)
