# find all numbers of 3 or 5 below limit
# sum them together

class V1
    class << self
        def find_multiples(num)
            result = []
            start = num - 1
            while (start >= 3)
                if (start % 3 == 0 || start % 5 == 0)
                    result << start
                end
                start -= 1
            end

            result
        end

        def sum_of_multiples(limit)
            multiples = find_multiples(limit)
            multiples.sum
        end
    end
end

class V2
    class << self
        def sum_of_multiples(limit)
            num = limit - 1
            sum = 0
            while (num >= 3)
                if (num % 3 == 0 || num % 5 == 0)
                    sum += num
                end
                num -= 1
            end

            sum
        end
    end
end

class V3
    class << self
        def sum_of_multiples(limit)
            sum = 0
            sum += find_sum_of_3s(limit)
            sum += find_sum_of_5s(limit)
            sum -= find_sum_of_15s(limit)
            sum
        end

        def find_sum_of_3s(limit)
            n = 1 
            sum = 0

            while ((3 * n) < limit)
                sum += 3 * n
                n += 1
            end

            sum
        end

        def find_sum_of_5s(limit)
            n = 1 
            sum = 0

            while ((5 * n) < limit)
                sum += 5 * n
                n += 1
            end

            sum
        end

        def find_sum_of_15s(limit)
            n = 1 
            sum = 0

            while ((15 * n) < limit)
                sum += 15 * n
                n += 1
            end

            sum
        end
    end
end

class V4
    class << self
        def sum_of_multiples(limit)
            sum = 0
            sum += find_sum_of_ns(limit, 3)
            sum += find_sum_of_ns(limit, 5)
            sum -= find_sum_of_ns(limit, 15)
            sum
        end

        def find_sum_of_ns(limit, n)
            multiple = 1 
            sum = 0

            while ((n * multiple) < limit)
                sum += n * multiple
                multiple += 1
            end

            sum
        end
    end
end

p V2.sum_of_multiples(100)
p V3.sum_of_multiples(100)
p V4.sum_of_multiples(100)
# p V3.find_sum_of_3s(10) # 3 + 6 + 9 = 18
# p V3.find_sum_of_5s(10) # 5
