=begin
Remove Element — https://leetcode.com/problems/remove-element/

Given an integer array nums and an integer val, remove all occurrences of val
in nums in place. The order of the elements may be changed.

Then return the number of elements in nums which are not equal to val (call
this k).

The first k elements of nums must contain the elements not equal to val, in
any order. Elements after index k don't matter — the judge only checks the
first k.
=end
# 2
# 3 2 2 3
#       r
#   w
# 3 3
# 2
# 0 1 2 2 3 0 4 2 5 
#                 r
#             w
# 0 1 3 0 4 5

# 0 1 2 3 4 5 6 7
# 0 1 2 2 3 0 4 2
#           r
#       w
# 0 1 3 

# 3 2 2 3
#       r
#     w
# 2 2

# increment wdx after writing?
# return w - 1?
  # use two pointers 
  # one read index rdx, one write rdx
  # rdx goes fast and scans for val 
  # wdx writes 
def remove_element(nums, val)

  rdx, wdx = 0,0
  while( rdx < nums.length )
    if ( nums[rdx] == val)
      while (nums[rdx] == val)
        rdx += 1
      end
      # nums[wdx] = nums[rdx]
      # wdx += 1
    else 
      nums[wdx] = nums[rdx]
      wdx += 1
      rdx += 1
    end
  end
  
  wdx
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby remove_element_script.rb ----

def check(nums, val, expected)
  k = remove_element(nums, val)
  kept = nums[0...k].sort rescue nil
  ok = k == expected.length && kept == expected.sort

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect}, val=#{val} -> k=#{k.inspect}, nums[0...k]=#{kept.inspect} (expected #{expected.inspect})"
end

check([3, 2, 2, 3], 3, [2, 2])
check([0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 3, 0, 4])
# check([], 5, [])
# check([1, 2, 3], 9, [1, 2, 3])
# check([7, 7, 7], 7, [])
