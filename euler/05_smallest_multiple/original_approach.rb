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

# then refined into recursion

def smallest_multiple(n, limit = (1..n).reduce(1) { |acc, x| acc * x }, product = limit)
  return product if limit == 0

  product = limit if divisible_by_all?(n, limit)
  smallest_multiple(n, limit - 1, product)
end

# breaking it into smaller methods

def divisible_by_all?(n, num)
    while (n != 1 )
        return false if num % n != 0
        n -= 1
    end

    true
end

def search(n, limit, product)
  return product if limit == 0

  product = limit if divisible_by_all?(n, limit)
  search(n, limit - 1, product)
end

def smallest_multiple(n)
    product = (1..n).reduce(1) { |acc, x| acc * x }
    search(n, product, product)
end
