class V1
    class << self
        def max_path_sum(triangle)
            find_max(triangle, 0, 0)
        end

        # naive: try every root-to-leaf path via plain recursion.
        # only 16384 routes for 15 rows, so brute force is fine here -
        # the related 100-row version of this problem would need a
        # bottom-up approach instead
        def find_max(triangle, row, col)
            value = triangle[row][col]
            return value if row == triangle.length - 1

            left = find_max(triangle, row + 1, col)
            right = find_max(triangle, row + 1, col + 1)

            value + [left, right].max
        end
    end
end

example_triangle = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
]
class V2
    class << self
        # bottom-up: start from the second-to-last row and work up, replacing
        # each cell with itself plus the better of the two cells below it.
        # by the time we reach the top, that single value is the answer -
        # this is the version that actually scales to the 100-row problem 67
        def max_path_sum(triangle)
            rows = triangle.map(&:dup)

            row = rows.length - 2
            while row >= 0
                col = 0
                while col < rows[row].length
                    rows[row][col] += [rows[row + 1][col], rows[row + 1][col + 1]].max
                    col += 1
                end
                row -= 1
            end

            rows[0][0]
        end
    end
end

p V1.max_path_sum(example_triangle) # 23
p V2.max_path_sum(example_triangle) # 23
