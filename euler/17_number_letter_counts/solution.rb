class V1
    class << self
        ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
                "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
                "seventeen", "eighteen", "nineteen"]
        TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

        def number_letter_counts(upper_bound)
            total = 0
            n = 1
            while n <= upper_bound
                total += words_for(n).length
                n += 1
            end
            total
        end

        def words_for(n)
            return "onethousand" if n == 1000

            words = ""

            if n >= 100
                words += ONES[n / 100] + "hundred"
                n = n % 100
                words += "and" if n > 0
            end

            if n >= 20
                words += TENS[n / 10]
                n = n % 10
                words += ONES[n] if n > 0
            elsif n > 0
                words += ONES[n]
            end

            words
        end
    end
end

class V2
    class << self
        # same lookup-table idea as V1, but store the LENGTHS directly
        # instead of building word strings just to measure them afterward -
        # avoids the string concatenation/allocation overhead entirely
        ONES_LEN = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4,
                    3, 6, 6, 8, 8, 7, 7, 9, 8, 8]
        TENS_LEN = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6]
        HUNDRED_LEN = 7
        AND_LEN = 3
        THOUSAND_LEN = 8

        def number_letter_counts(upper_bound)
            total = 0
            n = 1
            while n <= upper_bound
                total += word_length_for(n)
                n += 1
            end
            total
        end

        def word_length_for(n)
            return ONES_LEN[1] + THOUSAND_LEN if n == 1000

            length = 0

            if n >= 100
                length += ONES_LEN[n / 100] + HUNDRED_LEN
                n = n % 100
                length += AND_LEN if n > 0
            end

            if n >= 20
                length += TENS_LEN[n / 10]
                n = n % 10
                length += ONES_LEN[n] if n > 0
            elsif n > 0
                length += ONES_LEN[n]
            end

            length
        end
    end
end

p V1.number_letter_counts(5) # 19
p V2.number_letter_counts(5) # 19
