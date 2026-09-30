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

# p first_triangular_number_with_more_than(5) # 28