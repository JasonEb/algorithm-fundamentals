class V1
    class << self
        def special_pythagorean_triplet(perimeter)
            a = 1
            while a < perimeter
                b = a + 1
                while b < perimeter
                    c = perimeter - a - b
                    return a * b * c if c > b && a * a + b * b == c * c
                    b += 1
                end
                a += 1
            end

            nil
        end
    end
end

class V2
    class << self
        # solve for b algebraically given a and perimeter instead of
        # searching for it - collapses the inner loop entirely.
        # from a + b + c = perimeter and a^2 + b^2 = c^2:
        #   b = perimeter * (perimeter - 2a) / (2 * (perimeter - a))
        def special_pythagorean_triplet(perimeter)
            a = 1
            while a < perimeter
                numerator = perimeter * (perimeter - 2 * a)
                denominator = 2 * (perimeter - a)

                if denominator != 0 && numerator % denominator == 0
                    b = numerator / denominator
                    c = perimeter - a - b
                    return a * b * c if b > a && c > b
                end

                a += 1
            end

            nil
        end
    end
end

p V1.special_pythagorean_triplet(12) # 60  (3 + 4 + 5 = 12, product = 60)
p V2.special_pythagorean_triplet(12) # 60
