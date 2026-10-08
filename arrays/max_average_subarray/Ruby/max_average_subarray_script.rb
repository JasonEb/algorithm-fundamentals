def max_average_subarray(nums, k)
  # TODO: implement
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby max_average_subarray_script.rb ----

def check(nums, k, expected)
  result = max_average_subarray(nums, k)
  ok = !result.nil? && (result - expected).abs < 1e-5

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect}, k=#{k} -> #{result.inspect} (expected #{expected})"
end

check([1, 12, -5, -6, 50, 3], 4, 12.75)
check([5], 1, 5.0)
check([1, 2, 3, 4], 4, 2.5)
check([-1, -12, -5, -6, -50, -3], 4, -6.0)
