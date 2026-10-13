=begin
Next Palindrome Using Same Digits — https://leetcode.com/problems/next-palindrome-using-same-digits/

You are given a numeric string num representing a very large palindrome.
Return the smallest palindrome larger than num that can be created by
rearranging its digits, or an empty string if no such palindrome exists.
=end

def next_permutation!(digits)
end

def next_palindrome(num)
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby next_palindrome_using_same_digits_script.rb ----

def check(num, expected)
  result = next_palindrome(num)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: num=#{num.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

check('1221', '2112')
check('32123', '')
check('45544554', '54455445')
