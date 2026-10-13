=begin
String Compression — https://leetcode.com/problems/string-compression/

Given an array of characters chars, compress it in place: each group of
consecutive repeating characters is replaced by the character followed
by the group's length (omitted if the length is 1). Return the new
length of the array.
=end

def compress(chars)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby string_compression_script.rb ----

def check(chars, expected_len, expected_chars)
  len = compress(chars)
  status = (len == expected_len && chars[0, len] == expected_chars) ? "PASS" : "FAIL"
  puts "#{status}: len=#{len} chars=#{chars[0, len].inspect} (expected #{expected_len}, #{expected_chars.inspect})"
end

check(['a', 'a', 'b', 'b', 'c', 'c', 'c'], 6, ['a', '2', 'b', '2', 'c', '3'])
check(['a'], 1, ['a'])
check(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'], 4, ['a', 'b', '1', '2'])
