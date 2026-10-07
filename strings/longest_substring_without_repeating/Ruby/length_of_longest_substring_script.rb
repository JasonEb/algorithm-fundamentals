def length_of_longest_substring(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby length_of_longest_substring_script.rb ----

def check(s, expected)
  result = length_of_longest_substring(s)
  ok = result == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('abcabcbb', 3)
check('bbbbb', 1)
check('pwwkew', 3)
check('', 0)
check('abcdef', 6)
