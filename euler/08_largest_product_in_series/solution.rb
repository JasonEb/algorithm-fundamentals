class V1
    class << self
        def largest_product_in_series(digits_string, series_length)
            digits = digits_string.chars.map(&:to_i)
            largest = 0

            start = 0
            while start <= digits.length - series_length
                product = 1
                i = start
                while i < start + series_length
                    product *= digits[i]
                    i += 1
                end
                largest = product if product > largest
                start += 1
            end

            largest
        end
    end
end

# small illustrative example - paste the real 1000-digit number from the
# Project Euler problem page into scratch.md / a call here to solve for real
class V2
    class << self
        # sliding window: reuse the previous window's product instead of
        # recomputing from scratch, tracking zero_count separately since
        # dividing a zero back out isn't possible
        def largest_product_in_series(digits_string, series_length)
            digits = digits_string.chars.map(&:to_i)

            product = 1
            zero_count = 0
            i = 0
            while i < series_length
                zero_count += 1 if digits[i] == 0
                product *= digits[i] if digits[i] != 0
                i += 1
            end

            largest = zero_count == 0 ? product : 0

            start = 1
            while start <= digits.length - series_length
                leaving = digits[start - 1]
                entering = digits[start + series_length - 1]

                if leaving == 0
                    zero_count -= 1
                else
                    product /= leaving
                end

                if entering == 0
                    zero_count += 1
                else
                    product *= entering
                end

                current = zero_count == 0 ? product : 0
                largest = current if current > largest

                start += 1
            end

            largest
        end
    end
end

p V1.largest_product_in_series("9989", 2) # 81
p V2.largest_product_in_series("9989", 2) # 81
