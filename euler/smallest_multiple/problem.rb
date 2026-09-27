def smallest_multiple(n)

    product = (1..n).reduce(1) { |acc, x| acc * x }

    limit = product
    while ( limit > 0 )
        if divisible_by_all?(n,limit)
            product = limit
        end
        limit -= 1
    end

    product
end

def divisible_by_all?(n, num)
    while (n != 1 )
        return false if num % n != 0
        n -= 1
    end

    true
end

p smallest_multiple(1)
p smallest_multiple(2)
p smallest_multiple(5)

# p smallest_multiple(10) # 2520

=begin
smallest_multiple(2) # 2
smallest_multiple(3) # 6
smallest_multiple(4) # 12
smallest_multiple(5) # 30
=end

