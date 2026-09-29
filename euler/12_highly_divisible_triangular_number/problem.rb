def first_triangular_number_with_more_than(divisor_count)

end

def find_triangle_num(idx)
    (1..idx).reduce(0) { |acc, x| acc + x }
end

def divisor_count_triangle(num)

end

# p first_triangular_number_with_more_than(5) # 28

p find_triangle_num(1)
p find_triangle_num(2)
p find_triangle_num(3)
p find_triangle_num(4)
p find_triangle_num(5)
p find_triangle_num(6)
p find_triangle_num(7)

p first_triangular_number_with_more_than(5) # 28