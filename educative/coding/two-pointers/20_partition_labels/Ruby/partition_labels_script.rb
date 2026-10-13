=begin
Partition Labels — https://leetcode.com/problems/partition-labels/

You are given a string s. Partition it into as many contiguous parts
as possible so that each letter appears in at most one part. Return a
list of the lengths of these parts.
=end

def partition_labels(s)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby partition_labels_script.rb ----

def check(s, expected)
  result = partition_labels(s)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('ababcbacadefegdehijhklij', [9, 7, 8])
check('eccbbbbdec', [10])
check('abcd', [1, 1, 1, 1])
