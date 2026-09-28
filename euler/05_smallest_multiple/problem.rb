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

def lcm_v1(n, product = (1..n).reduce(1) { |acc, x| acc * x }, limit = product)
    return product if limit == 1

    if divisible_by_all?(n, limit)
        product = limit
    end

    lcm(n, product, limit - 1)
end

def divisible_by_all?(n, num)
    while (n != 1 )
        return false if num % n != 0
        n -= 1
    end

    true
end

def lcm(n, product = (1..n).reduce(1) { |acc, x| acc * x },  result = 1, og = n)
    return product if n == 1

    # 120

    if divisible_by_all?(og, ?)
        product = result unless result == 1
    end

    lcm(n - 1, product, result)
end


p lcm(2)
p lcm(5)


# p smallest_multiple(1)
# p smallest_multiple(2)
# p smallest_multiple(5)

# p smallest_multiple(10) # 2520

=begin
smallest_multiple(2) # 2
smallest_multiple(3) # 6
smallest_multiple(4) # 12
smallest_multiple(5) # 30
=end

