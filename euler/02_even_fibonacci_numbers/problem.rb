class V1
    class << self
        def sum_of_even_fibonacci(limit)
            sum = 0

            while (limit > 0)
                num = fibs(limit)
                sum += num if num.even?
                limit -= 1
            end
            
            sum
        end

        def fibs(n)
            return 1 if n <= 1

            fibs(n - 1) + fibs(n - 2)
        end
    end
end

class V2
    class << self
        def sum_of_even_fibonacci(limit)
            sum = 0
            memo = []
            while (limit > 0)
                num = fibs(limit, memo)
                sum += num if num.even?
                limit -= 1
            end
            
            sum
        end

        def fibs(n, memo = [] )
            return 1 if n <= 1
            return memo[n] unless memo[n].nil?

            memo[n] = fibs(n - 1, memo) + fibs(n - 2, memo)
        end
    end
end

p V1.fibs(1) # 1
p V1.fibs(2) # 2
p V1.fibs(3) # 3
p V1.fibs(4) # 5

puts "sums"
p V1.sum_of_even_fibonacci(2)
p V1.sum_of_even_fibonacci(5)

