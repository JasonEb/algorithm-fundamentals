=begin
Binary search gotchas — implementations only (no side effects on require).

Each gotcha pairs a BUGGY implementation with a FIXED one. See
binary_search_gotchas_script.rb for a runnable walkthrough of each one,
or binary_search_gotchas_spec.rb for the rspec version.
=end

# Gotcha 1: `<` vs `<=` in the loop condition.
# r is an INCLUSIVE bound, so the loop needs `l <= r` to ever consider the
# case where the search has narrowed to a single candidate (l == r).
def search_buggy_off_by_one(nums, target)
  l, r = 0, nums.length - 1
  while l < r                 # BUG: should be l <= r
    m = l + (r - l) / 2
    if nums[m] < target
      l = m + 1
    elsif nums[m] > target
      r = m - 1
    else
      return m
    end
  end
  -1
end

def search_fixed_bound_mismatch(nums, target)
  l, r = 0, nums.length - 1
  while l <= r                # FIX: l == r is still a valid candidate
    m = l + (r - l) / 2
    if nums[m] < target
      l = m + 1
    elsif nums[m] > target
      r = m - 1
    else
      return m
    end
  end
  -1
end

# Gotcha 2: a branch that never shrinks the range -> infinite loop.
# With floor division, m = l + (r - l) / 2 rounds down, so m can equal l.
# Setting `l = m` (instead of `l = m + 1`) on the "go right" branch never
# shrinks [l, r] once l and r are adjacent.
def search_buggy_infinite(nums, target, max_iterations: 10_000)
  l, r = 0, nums.length - 1
  iterations = 0
  while l < r
    iterations += 1
    return :infinite_loop_detected if iterations > max_iterations

    m = l + (r - l) / 2
    if nums[m] < target
      l = m                  # BUG: should be m + 1
    else
      r = m
    end
  end
  l
end

def search_fixed_infinite(nums, target)
  l, r = 0, nums.length - 1
  while l < r
    m = l + (r - l) / 2
    if nums[m] < target
      l = m + 1               # FIX: always shrinks the range
    else
      r = m
    end
  end
  l
end

# Gotcha 3: Ruby returns nil for an out-of-range index instead of raising.
# An off-by-one bound (r = nums.length instead of nums.length - 1) doesn't
# fail where the bad read happens -- it fails later, when nil is compared.
def search_buggy_out_of_range(nums, target)
  l, r = 0, nums.length      # BUG: off-by-one, should be nums.length - 1
  while l <= r
    m = l + (r - l) / 2
    if nums[m].nil?
      raise "nums[#{m}] is nil -- read past the end of the array"
    elsif nums[m] < target
      l = m + 1
    elsif nums[m] > target
      r = m - 1
    else
      return m
    end
  end
  -1
end

# Gotcha 5: duplicates -- bisect_left / bisect_right find a specific
# boundary instead of just *any* matching index.
def bisect_left(nums, target)
  l, r = 0, nums.length
  while l < r
    m = l + (r - l) / 2
    nums[m] < target ? l = m + 1 : r = m
  end
  l
end

def bisect_right(nums, target)
  l, r = 0, nums.length
  while l < r
    m = l + (r - l) / 2
    nums[m] <= target ? l = m + 1 : r = m
  end
  l
end

# Gotcha 6: exact float equality never terminates the way you expect.
def sqrt_buggy_equality(x, max_iterations: 10_000)
  lo, hi = 0.0, [x, 1.0].max
  iterations = 0
  mid = 0.0
  while iterations < max_iterations
    iterations += 1
    mid = (lo + hi) / 2.0
    break if mid * mid == x  # BUG: essentially never true for an irrational root

    mid * mid < x ? lo = mid : hi = mid
  end
  iterations >= max_iterations ? :never_converged : mid
end

def sqrt_fixed_precision(x, epsilon: 1e-9)
  lo, hi = 0.0, [x, 1.0].max
  mid = 0.0
  while (hi - lo) > epsilon
    mid = (lo + hi) / 2.0
    mid * mid < x ? lo = mid : hi = mid
  end
  mid
end
