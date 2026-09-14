=begin
nums = [1, 3, 5, 7, 9], target = 7

l   m   r
0   2   4
1   3   5   7   9
        ^ mid too small -> l = m + 1

    l   m   r
    3   3   4
        7   9
        ^ found it
=end
def search(nums, target)
  l, r = 0, nums.length - 1

  while l <= r
    m = l + (r - l) / 2 # avoids overflow in other languages; habit worth keeping
    guess = nums[m]

    if target < guess
      r = m - 1
    elsif target > guess
      l = m + 1
    else
      return m
    end
  end

  -1
end
