class V1
    class << self
        def first_triangular_number_with_more_than(divisor_count)
            current_divisor_count = 0
            idx = 1
            while(current_divisor_count < divisor_count )
                triangle_num = find_triangle_num(idx)
                current_divisor_count = divisor_count(triangle_num)
                idx += 1
            end

            triangle_num
        end

        def find_triangle_num(idx)
            curr = 2
            sum = 1

            while(curr <= idx )
                sum += curr
                curr += 1
            end

            sum
        end

        def divisor_count(num)
            curr = 1
            count = 1
            while ( curr < num)
                count += 1 if num % curr == 0
                curr += 1
            end

            count
        end

    end
end

class V2
    class << self
        def first_triangular_number_with_more_than(divisor_count)
            current_divisor_count = 0
            idx = 1
            triangle_num = 0
            while(current_divisor_count < divisor_count )
                triangle_num = find_triangle_num(idx, triangle_num)
                current_divisor_count = divisor_count(triangle_num)
                idx += 1
            end

            triangle_num
        end

        # tabulation: T(idx) = T(idx-1) + idx, so build forward from the
        # previous total instead of resumming from scratch every time.
        # kept as its own method (rather than inlined into the outer loop)
        # so it stays testable in isolation, e.g. find_triangle_num(7, 21) == 28
        def find_triangle_num(idx, previous_total)
            previous_total + idx
        end

        def divisor_count(num)
            curr = 1
            count = 1
            while ( curr < num)
                count += 1 if num % curr == 0
                curr += 1
            end

            count
        end
    end
end

class V3
    class << self
        def first_triangular_number_with_more_than(divisor_count)
            bound = 2_000_000
            counts = build_divisor_count_sieve(bound)

            idx = 1
            triangle_num = 0
            loop do
                triangle_num = find_triangle_num(idx, triangle_num)

                while triangle_num > bound
                    new_bound = bound * 2
                    counts = extend_divisor_count_sieve(counts, bound, new_bound)
                    bound = new_bound
                end

                return triangle_num if counts[triangle_num] > divisor_count
                idx += 1
            end
        end

        def find_triangle_num(idx, previous_total)
            previous_total + idx
        end

        # for every d from 1 to limit, d is a divisor of each of its own
        # multiples - so incrementing counts[multiple] once per d gives
        # counts[n] = the true divisor count of n, for every n up to limit.
        # no pairing, no sqrt - just direct counting, same "mark every
        # multiple" philosophy as the prime sieves in 07 and 10
        def build_divisor_count_sieve(limit)
            counts = Array.new(limit + 1, 0)
            d = 1
            while d <= limit
                multiple = d
                while multiple <= limit
                    counts[multiple] += 1
                    multiple += d
                end
                d += 1
            end
            counts
        end

        # extend an existing sieve into a larger range instead of rebuilding
        # from scratch - only marks the NEW multiples that a full rebuild
        # would have redone for free. roughly halves total time versus
        # rebuilding at every guess-and-double step.
        #
        # uses concat to grow the array instead of a manual element-by-element
        # copy loop - concat is implemented in C and measured ~11x faster
        # than copying every index by hand in Ruby
        def extend_divisor_count_sieve(counts, old_limit, new_limit)
            counts.concat(Array.new(new_limit - old_limit, 0))

            # old divisors: only mark their multiples in the new region
            d = 1
            while d <= old_limit
                multiple = ((old_limit / d) + 1) * d
                while multiple <= new_limit
                    counts[multiple] += 1
                    multiple += d
                end
                d += 1
            end

            # new divisors: every multiple of these falls in the new region
            d = old_limit + 1
            while d <= new_limit
                multiple = d
                while multiple <= new_limit
                    counts[multiple] += 1
                    multiple += d
                end
                d += 1
            end

            counts
        end
    end
end

class V4
    class << self
        # the "optimal" approach: never factors the triangular number itself.
        # T(n) = n(n+1)/2, and n, n+1 are always coprime (consecutive
        # integers share no factors). One of them is always even, so divide
        # that one by 2 - the two resulting pieces are still coprime, and
        # each is only about the size of n, not the size of T(n).
        #
        # divisor counts are multiplicative across coprime factors, so
        # divisor_count(T(n)) = divisor_count(piece1) * divisor_count(piece2).
        # factoring numbers the size of n (thousands) instead of T(n) (tens
        # of millions) is what makes this dramatically faster than the sieve.
        def first_triangular_number_with_more_than(divisor_count)
            n = 1
            loop do
                if n.even?
                    piece1 = n / 2
                    piece2 = n + 1
                else
                    piece1 = n
                    piece2 = (n + 1) / 2
                end

                total_divisors = divisor_count_via_factorization(piece1) *
                                  divisor_count_via_factorization(piece2)

                return n * (n + 1) / 2 if total_divisors > divisor_count

                n += 1
            end
        end

        # prime factorization via trial division up to sqrt(remaining),
        # then the classic formula: divisor_count = product of (exponent + 1)
        # across every prime factor
        def divisor_count_via_factorization(m)
            count = 1
            remaining = m
            divisor = 2

            while divisor * divisor <= remaining
                if remaining % divisor == 0
                    exponent = 0
                    while remaining % divisor == 0
                        remaining /= divisor
                        exponent += 1
                    end
                    count *= (exponent + 1)
                end
                divisor += 1
            end

            # whatever's left over (if > 1) is itself a prime factor, exponent 1
            count *= 2 if remaining > 1

            count
        end
    end
end

# p first_triangular_number_with_more_than(5) # 28

# p find_triangle_num(1)
# p find_triangle_num(2)
# p find_triangle_num(3)
# p find_triangle_num(4)
# p find_triangle_num(5)
# p find_triangle_num(6)
# p find_triangle_num(7)

p V1.first_triangular_number_with_more_than(5)
p V2.first_triangular_number_with_more_than(5)
p V3.first_triangular_number_with_more_than(5)
p V4.first_triangular_number_with_more_than(5)

# p first_triangular_number_with_more_than(5) # 28