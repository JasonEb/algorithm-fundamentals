require 'benchmark'
require 'set'

class V1
    class << self
        def summation_of_primes(limit)
            primes = []
            start = 2
            curr = 2
        
            while(curr < limit)
                if is_prime?(curr)
                    primes << curr
                end
                curr += 1
            end
        
            primes.sum
        end
        
        def is_prime?(num)
            return false if num <= 1
            divisor = 2
        
            while(divisor < num )
                return false if num % divisor == 0
                divisor += 1
            end
        
            true
        end
    end
end

class V2
    class << self
        def summation_of_primes(limit)
            sum = 0
            start = 2
            curr = 2
        
            while(curr < limit)
                if is_prime?(curr)
                    sum += curr
                end
                curr += 1
            end
        
            sum
        end
        
        def is_prime?(num)
            return false if num <= 1
            return true if num == 2
            return false if num.even?

            divisor = 3
            while divisor < num
                return false if num % divisor == 0
                divisor += 2   # only odd candidates
            end
            true
        end
    end
end

class V3
    class << self
        def summation_of_primes(limit)
            sum = 0
            primes = []
            curr = 2

            while(curr < limit)
                if is_prime?(curr, primes)
                    primes << curr
                    sum += curr
                end
                curr += 1
            end

            sum
        end

        # check number against known primes
        def is_prime?(num, primes)
            return false if num <= 1
            
            idx = 0

            while idx < primes.size
                return false if num % primes[idx] == 0
                idx += 1
            end

            true
        end
    end
end

class V4
    class << self
        def summation_of_primes(limit)
            sum = 0
            factors = Set.new
            curr = 2

            while(curr < limit)
                if is_prime?(curr, factors, limit)
                    factors << curr
                    sum += curr
                end
                curr += 1
            end

            sum
        end

        # after each prime is discovered, built multiples up to a bound
        # then check each number against that map. If it's not in the map, it must be prime
        # then add to that map with the multiples of that prime
        #
        # bound is just `limit` here - unlike problem 7 (find the nth prime,
        # where the final value isn't known ahead of time), this problem already
        # gives an explicit value ceiling, so there's nothing to guess or extend
        def is_prime?(num, factors, bound)
            return false if num <= 1
            return false if factors.include?(num)

            # populate map
            idx = 2
            while (num * idx < bound)
                factors << num * idx

                idx += 1
            end

            true
        end
    end
end

# # 2 + 3 + 5 + 7 = 17
# p Benchmark.realtime { puts V1.summation_of_primes(10000) }  # 17
# p Benchmark.realtime { puts V2.summation_of_primes(10000) } 
p Benchmark.realtime { puts V3.summation_of_primes(10000) } 
p Benchmark.realtime { puts V4.summation_of_primes(10000) } 
p Benchmark.realtime { puts V4.summation_of_primes(2_000_000) } 
# p V1.summation_of_primes(3) # 2
# p V1.summation_of_primes(4) # 5
# p V1.summation_of_primes(5) # 5