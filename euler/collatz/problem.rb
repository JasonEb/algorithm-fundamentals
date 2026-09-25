def find_steps_from_collatz(n, seen_collatz)
    steps = 0
    original_num = n
    while (n != 1 )
        if seen_collatz[n] 
            steps += seen_collatz[n]
            n = 1
        elsif (n % 2 == 0)
            steps += 1
            n = n / 2 
        else
            steps += 1
            n = n * 3 + 1
        end
    end

    seen_collatz[original_num] = steps
    steps
end

def find_largest_collatz_chain
    largest_steps = 0
    num = 1
    largest_num = 1
    seen_collatz = {} 

    while (num < 1000000)
        current_steps = find_steps_from_collatz(num, seen_collatz)
        if (current_steps > largest_steps)
            largest_steps = current_steps
            largest_num = num
        end

        num += 1
    end

    largest_num
end

def find_collatz(n, steps = 0, original = n, seen = {} )
    if n == 1
        seen[original] = steps
        return steps
    end

    if seen[n]
        steps += seen[n]
        find_collatz(1, steps, original)
    end

    return find_collatz(n / 2, steps + 1, original) if n % 2 == 0
    return find_collatz(3*n + 1, steps + 1,original) if n % 2 != 0
end

puts find_collatz(1)
puts find_collatz(2)
puts find_collatz(3)
puts find_collatz(4)
# p collatz(9) # 19
# p find_largest_collatz_chain