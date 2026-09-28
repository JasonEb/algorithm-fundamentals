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

    lcm_v1(n, product, limit - 1)
end

def divisible_by_all?(n, num)
    while (n != 1 )
        return false if num % n != 0
        n -= 1
    end

    true
end

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



def lcm_inspect(n, depth = 0)
  indent = "  " * depth
  puts "#{indent}lcm(#{n}) called"

  if n == 1
    puts "#{indent}lcm(1) => 1 (base case)"
    return 1
  end

  smaller = lcm_inspect(n - 1, depth + 1)
  candidate = smaller
  step = 0
  while candidate % n != 0
    candidate += smaller
    step += 1
    puts "#{indent}  step #{step}: candidate = #{candidate} (#{candidate} % #{n} = #{candidate % n})"
  end

  puts "#{indent}lcm(#{n}) => #{candidate} (smaller=#{smaller}, steps=#{step})"
  candidate
end

def lcm(n)
    return 1 if n == 1

    smaller = lcm(n - 1)
    candidate = smaller
    while candidate % n != 0
        candidate += smaller 
    end

    candidate
end


p lcm_inspect(6)


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

