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

# The previous versions brute-force the candidate space by going trhough every integer with 
# divisby_by_all?. So instead, the candidate space we're lookign at are multiples.

def search(n, limit, prev_answer)
  return limit if limit % n == 0
  search(n, limit + prev_answer, prev_answer)
end

def smallest_multiple(n)
  return 1 if n == 1

  prev_answer = smallest_multiple(n - 1)
  search(n, prev_answer, prev_answer)
end