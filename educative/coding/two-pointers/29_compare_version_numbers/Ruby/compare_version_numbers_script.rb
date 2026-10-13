=begin
Compare Version Numbers — https://leetcode.com/problems/compare-version-numbers/

Given two version numbers version1 and version2, each a dot-separated
sequence of revisions, compare them. Treat each revision as an integer
(ignoring leading zeros) and a missing trailing revision as 0. Return
-1, 0, or 1 depending on whether version1 is less than, equal to, or
greater than version2.
=end

def compare_version(version1, version2)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby compare_version_numbers_script.rb ----

def check(version1, version2, expected)
  result = compare_version(version1, version2)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: version1=#{version1.inspect} version2=#{version2.inspect} -> #{result} (expected #{expected})"
end

check('1.01', '1.001', 0)
check('1.0', '1.0.0', 0)
check('0.1', '1.1', -1)
check('1.0.1', '1', 1)
