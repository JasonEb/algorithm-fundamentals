=begin
Valid Palindrome — https://leetcode.com/problems/valid-palindrome/

Given a string s, return true if it is a palindrome after converting all
uppercase letters to lowercase and removing all non-alphanumeric
characters, and false otherwise.
=end

# start on both sides
# l walks forward, r walks back 1 at a time
# - if it's a valid letter, check if they're equal
# - if they're equal, then continue
# - if not, it's not a valid_palindrome

def valid_palindrome?(s)
  l, r = 0, s.length - 1
  while (l < r)
    a,b = s[l].downcase, s[r].downcase

    while (!is_alphanumeric?(a))
        l += 1
        a = s[l].downcase
    end    

    while (!is_alphanumeric?(b))
        r -= 1
        b = s[r].downcase
    end    

    if(a != b)
      return false
    end

    l += 1
    r -= 1
  end

  true
end

def is_alphanumeric?(c)
  c.match?(/[a-z0-9]/i)
end

# puts valid_palindrome?("abba")
puts valid_palindrome?('A man, a plan, a canal: Panama')

# ---- driver code — no rspec, just plain Ruby, run with: ruby valid_palindrome_script.rb ----

# def check(s, expected)
#   result = valid_palindrome?(s)
#   status = result == expected ? "PASS" : "FAIL"
#   puts "#{status}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
# end

# check('A man, a plan, a canal: Panama', true)
# check('race a car', false)
# check(' ', true)
# check('Aa', true)
