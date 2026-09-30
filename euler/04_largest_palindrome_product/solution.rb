class V1
    class << self
        def largest_palindrome_product(digits)
            min = 10 ** (digits - 1)
            max = (10 ** digits) - 1
            largest = 0

            a = min
            while a <= max
                b = a
                while b <= max
                    product = a * b
                    largest = product if palindrome?(product) && product > largest
                    b += 1
                end
                a += 1
            end

            largest
        end

        def palindrome?(num)
            num.to_s == num.to_s.reverse
        end
    end
end

class V2
    class << self
        def largest_palindrome_product(digits)
            max = (10 ** digits) - 1
            min = 10 ** (digits - 1)
            largest = 0

            # search from the largest products downward, so once we find a hit
            # we can prune away any branch that can no longer beat it
            a = max
            while a >= min
                break if a * max <= largest # nothing left can beat what we have

                b = max
                while b >= a
                    product = a * b
                    break if product <= largest # products only shrink as b decreases

                    largest = product if palindrome?(product)
                    b -= 1
                end
                a -= 1
            end

            largest
        end

        def palindrome?(num)
            num.to_s == num.to_s.reverse
        end
    end
end

p V1.largest_palindrome_product(2) # 9009
p V2.largest_palindrome_product(2) # 9009
