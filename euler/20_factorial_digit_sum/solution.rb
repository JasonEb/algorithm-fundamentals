class V1
    class << self
        def factorial_digit_sum(n)
            factorial = 1
            i = 2
            while i <= n
                factorial *= i
                i += 1
            end

            sum = 0
            factorial.to_s.each_char do |digit|
                sum += digit.to_i
            end

            sum
        end
    end
end

class V2
    class << self
        # arithmetic digit extraction instead of string conversion
        def factorial_digit_sum(n)
            factorial = 1
            i = 2
            while i <= n
                factorial *= i
                i += 1
            end

            sum = 0
            while factorial > 0
                sum += factorial % 10
                factorial /= 10
            end

            sum
        end
    end
end

p V1.factorial_digit_sum(10) # 27
p V2.factorial_digit_sum(10) # 27
