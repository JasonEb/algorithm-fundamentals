class V1
    class << self
        def sum_square_difference(limit)
            sum = 0
            sum_of_squares = 0

            n = 1
            while n <= limit
                sum += n
                sum_of_squares += n * n
                n += 1
            end

            square_of_sum = sum * sum
            square_of_sum - sum_of_squares
        end
    end
end

class V2
    class << self
        # closed-form arithmetic series formulas - O(1) instead of O(n).
        # a bigger jump than the other V2s (formula-based, not just a
        # pattern noticed in the loop), but it's the natural next step
        # once the loop itself is already this tight
        def sum_square_difference(limit)
            square_of_sum = (limit * (limit + 1) / 2) ** 2
            sum_of_squares = limit * (limit + 1) * (2 * limit + 1) / 6
            square_of_sum - sum_of_squares
        end
    end
end

p V1.sum_square_difference(10) # 2640
p V2.sum_square_difference(10) # 2640
