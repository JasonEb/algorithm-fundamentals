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
class V1
  class << self
    def valid_palindrome?(s)
      l, r = 0, s.length - 1
      while (l < r)
        a,b = s[l].downcase, s[r].downcase
    
        while (l < r && !is_alphanumeric?(a))
            l += 1
            a = s[l].downcase
        end    
    
        while (l < r && !is_alphanumeric?(b))
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
  end
end

# "super clean" style — single pass, no nested skip-loops, uses `next`
# instead of inner `while` loops to skip past non-alphanumeric chars.
class V2
  class << self
    def valid_palindrome?(s)
      l, r = 0, s.length - 1
      while l < r
        unless alphanumeric?(s[l])
          l += 1
          next
        end
        unless alphanumeric?(s[r])
          r -= 1
          next
        end
        return false if s[l].downcase != s[r].downcase
        l += 1
        r -= 1
      end
      true
    end

    def alphanumeric?(c)
      c.match?(/[a-z0-9]/i)
    end
  end
end

# puts valid_palindrome?("abba")
puts V1.valid_palindrome?('A man, a plan, a canal: Panama')
puts V2.valid_palindrome?('A man, a plan, a canal: Panama')

# ---- driver code — no rspec, just plain Ruby, run with: ruby valid_palindrome_script.rb ----

def check(klass, s, expected)
  result = klass.valid_palindrome?(s)
  status = result == expected ? "PASS" : "FAIL"
  puts "#{status}: #{klass}: s=#{s.inspect} -> #{result.inspect} (expected #{expected.inspect})"
end

[V1, V2].each do |klass|
  check(klass, 'A man, a plan, a canal: Panama', true)
  check(klass, 'race a car', false)
  check(klass, ' ', true)
  check(klass, 'Aa', true)
end
