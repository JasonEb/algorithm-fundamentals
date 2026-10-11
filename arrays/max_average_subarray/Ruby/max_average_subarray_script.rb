class V1
  class << self 
    def max_average_subarray(nums, k)
      # one loop to walk from the start
      # then a nested loop to find the average of k integers

      (0..(nums.length - k)).each do |i|
        (i...(i + k)).each do |j|
          print " #{nums[j]} "
        end
      end

      nil
    end
  end
end

puts V1.max_average_subarray([1, 12, -5, -6, 50, 3], 4)

class V2
  class << self 
    def max_average_subarray(nums, k)
      # walk through nums
      # keep a count of k window size
      # once it hits k window size, start adding/substracting values
    end
  end
end

# ---- driver code — no rspec, just plain Ruby, run with: ruby max_average_subarray_script.rb ----

def check(nums, k, expected)
  result = max_average_subarray(nums, k)
  ok = !result.nil? && (result - expected).abs < 1e-5

  status = ok ? "PASS" : "FAIL"
  puts "#{status}: nums=#{nums.inspect}, k=#{k} -> #{result.inspect} (expected #{expected})"
end

# check([1, 12, -5, -6, 50, 3], 4, 12.75)
# check([5], 1, 5.0)
# check([1, 2, 3, 4], 4, 2.5)
# check([-1, -12, -5, -6, -50, -3], 4, -6.0)
