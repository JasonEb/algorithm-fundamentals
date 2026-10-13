=begin
Find the Lexicographically Largest String From the Box II — https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/

Alice splits a string word into num_friends non-empty contiguous pieces
(no two rounds use the same split) and puts every piece into a box.
Return the lexicographically largest string that ever lands in the box.

Any contiguous substring of word with length at most
word.length - num_friends + 1 is achievable as a piece, so the answer is
the largest such substring.
=end

def largest_string_from_box(word, num_friends)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby find_the_lexicographically_largest_string_from_box_ii_script.rb ----

def check(word, num_friends, expected)
  result = largest_string_from_box(word, num_friends)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: word=#{word.inspect} num_friends=#{num_friends} -> #{result.inspect} (expected #{expected.inspect})"
end

check('dbca', 1, 'dbca')
check('gggg', 4, 'g')
check('abba', 2, 'bba')
