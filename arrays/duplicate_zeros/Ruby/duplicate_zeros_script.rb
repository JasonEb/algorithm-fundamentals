=begin
Duplicate Zeros — https://leetcode.com/problems/duplicate-zeros/

Given a fixed length array arr of integers, duplicate each occurrence of
zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not
written.

Do the above modifications to the input array in place, do not return
anything from your function.
=end

# 0 1 2 3 0

# 1 0 0 2 3 0 0 4


def duplicate_zeroes_naive(arr)
  # to do this in place
  # scan array with while loop to control boundaries
  # if element is a 0, then insert it, and jump the index 
  # for now focus on adding the duplicate
  # when adding a duplicate 0, then remove the last element

  i = 0
  while (i < arr.length)
    num = arr[i]
    if (num == 0)
      arr.insert(i, 0)
      arr.pop
      i += 2
    else
      i += 1
    end
  end
  arr
end


# scan for zero counts
# then walk again to inject zeroes

def duplicate_zeroes(arr)
  # scan array for zeroes
  # find the boundary
  # 
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby duplicate_zeros_script.rb ----

def check(arr, expected)
  duplicate_zeroes(arr)
  ok = arr == expected

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: arr=#{arr.inspect} (expected #{expected.inspect})"
end

check([1, 0, 2, 3, 0, 4, 5, 0], [1, 0, 0, 2, 3, 0, 0, 4])
check([1, 2, 3], [1, 2, 3])
check([0, 1, 2, 3], [0, 0, 1, 2])
check([1, 2, 3, 0], [1, 2, 3, 0])
check([8, 4, 5, 0, 0, 0, 0, 7], [8, 4, 5, 0, 0, 0, 0, 0])
