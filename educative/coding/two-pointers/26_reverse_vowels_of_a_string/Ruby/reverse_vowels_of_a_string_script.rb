=begin
Reverse Vowels of a String — https://leetcode.com/problems/reverse-vowels-of-a-string/

Given a string s, reverse only the vowels (a, e, i, o, u, in either
case) in the string and return it.
=end

def reverse_vowels(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby reverse_vowels_of_a_string_script.rb ----

def check(s, expected)
  result = reverse_vowels(s)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('IceCreAm', 'AceCreIm')
check('leetcode', 'leotcede')
check('xyz', 'xyz')
