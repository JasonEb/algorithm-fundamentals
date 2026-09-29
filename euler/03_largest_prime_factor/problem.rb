class V1
    class << self
        def largest_prime_factor(num)
            max = 1
            x = num
            prime_factors = {}
            while ( x > 0)
                if prime_factor?(x, num)
                    max = max > x ? max : x
                end
                x -= 1
            end

            max
        end

        def prime_factor?(candidate, original)
            # 1 divides everything but isn't considered prime, so exclude it up front
            return false if candidate == 1

            # step 1: is candidate a factor of original at all?
            # (does it divide evenly, with no remainder?)
            return false if (original % candidate) != 0

            # step 2: is candidate itself prime?
            # (does anything between candidate-1 and 2 divide it evenly?
            #  note this only checks candidate's own divisors - original
            #  never appears here, since primality is a property of candidate alone)
            x = candidate - 1
            while ( x > 1 )
                return false if (candidate % x) == 0
                x -= 1
            end

            # survived both checks: candidate is a factor of original, and is prime
            true
        end
    end
end

class V2
    class << self
        def largest_prime_factor(num)
            max = 1
            x = num
            prime_factors = {}
            while ( x > 0)
                if prime_factor?(x, num)
                    max = max > x ? max : x
                end
                x -= 1
            end

            max
        end

        def prime_factor?(candidate, original)
            return false if candidate == 1
            return false if (original % candidate) != 0

            x = candidate - 1
            while ( x > 1 )
                return false if (candidate % x) == 0
                x -= 1
            end

            true
        end
    end
end

class V3
    class << self
        def largest_prime_factor(num)
            max = 1
            x = num
            prime_factors = {}

            # ascending pre-pass: populate prime_factors with every prime below num,
            # so it is fully built before the descending search below needs it.
            # a candidate here only needs testing against already-confirmed primes -
            # any composite divisor would already have been caught by one of its
            # own (smaller, already-known) prime factors.
            candidate = 2
            while candidate < num
                if prime_factors.keys.none? { |p| candidate % p == 0 }
                    prime_factors[candidate] = true
                end
                candidate += 1
            end

            # familiar descending search - first hit is the largest, so break immediately
            while ( x > 0)
                if prime_factor?(x, num, prime_factors)
                    max = max > x ? max : x
                    break
                end
                x -= 1
            end

            max
        end

        def prime_factor?(candidate, original, prime_factors)
            return false if candidate == 1
            return false if (original % candidate) != 0
            prime_factors[candidate] == true
        end
    end
end

def largest_prime_factor(num)
  divisor = 2       # smallest possible factor to try
  last_factor = 1   # tracks the largest prime factor found so far

  while num > 1
    if num % divisor == 0
      # divisor evenly divides what's left of num — it's a factor.
      # divide it out, shrinking num for the next round.
      num = num / divisor
      last_factor = divisor

      # don't advance divisor here — the SAME divisor might divide
      # again (e.g. num = 8 needs divisor = 2 checked three times)
    else
      # divisor doesn't divide evenly — try the next candidate
      divisor += 1
    end
  end

  last_factor
end

# p largest_prime_factor(13195) # 29

# p V1.largest_prime_factor(10) # 5
p V1.largest_prime_factor(13195) # 29
p V3.largest_prime_factor(600851475143)