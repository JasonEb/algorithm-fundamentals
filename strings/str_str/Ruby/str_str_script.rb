=begin
Find the Index of the First Occurrence in a String — https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

Given two strings needle and haystack, return the index of the first
occurrence of needle in haystack, or -1 if needle is not part of
haystack.
=end

def str_str(haystack, needle)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby str_str_script.rb ----

def check(haystack, needle, expected)
  result = str_str(haystack, needle)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: haystack=#{haystack.inspect}, needle=#{needle.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('sadbutsad', 'sad', 0)
check('leetcode', 'leeto', -1)
check('a', 'a', 0)
check('mississippi', 'issip', 4)
check('ab', 'abc', -1)
