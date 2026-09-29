class V1
    class << self
        # walk through every number up to n
        # if prime, add to result 
        # when the result.size is n, return the last
        def nth_prime(limit)
            result = []
            start = 2

            until (result.size == limit)
                result << start if is_prime?(start)
                start += 1
            end

            result.last
        end

        # if number is divisible by check, return false
        # else continue, if all numbers are not divisible then exit true
        def is_prime?(num)
            return false if num <= 1
            check = 2

            while ( check < num )
                return false if num % check == 0
                check += 1
            end

            true
        end
    end
end

class V2
    class << self
        # walk through every number up to n
        # if prime, add to result 
        # when the result.size is n, return the last
        def nth_prime(limit)
            result = 1
            primes = 0
            start = 2
            factors = Set.new

            until (primes == limit)
                if is_prime?(start, factors)
                    result = start
                    primes += 1
                end
                start += 1
            end

            result
        end

        # start 2, build factors
        # assume if it's not in the factors set, it has to be a prime
        # and if it's a prime, then add its factors to it
        def is_prime?(num, factors = Set.new)
            return false if factors.include?(num)
            return false if num <= 1

            populate(num, factors)
            true
        end

        def populate(prime, factors)
            bound = 150000
            idx = 2
            until (prime * idx > bound )
                factors << prime * idx
                idx += 1
            end
        end
    end
end

p
p V1.nth_prime(6) # 13
p V2.nth_prime(6) # 13
p V2.nth_prime(10001) # 13
