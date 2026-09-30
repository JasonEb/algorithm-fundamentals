class V1
    class << self
        def power_digit_sum(exponent)
            num = 2 ** exponent
            sum = 0

            num.to_s.each_char do |digit|
                sum += digit.to_i
            end

            sum
        end
    end
end

class V2
    class << self
        # arithmetic digit extraction instead of string conversion
        def power_digit_sum(exponent)
            num = 2 ** exponent
            sum = 0

            while num > 0
                sum += num % 10
                num /= 10
            end

            sum
        end
    end
end

p V1.power_digit_sum(15) # 26
p V2.power_digit_sum(15) # 26
