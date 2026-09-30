class V1
    class << self
        def lattice_paths(grid_size)
            count_paths(grid_size, grid_size)
        end

        # naive: plain recursion, no memoization - re-derives the same
        # (right, down) subproblem many times over, so this is impractical
        # at the real grid_size of 20 (exponential blow-up)
        def count_paths(right, down)
            return 1 if right == 0 || down == 0

            count_paths(right - 1, down) + count_paths(right, down - 1)
        end
    end
end

class V2
    class << self
        # bottom-up tabulation: paths[r][c] = paths[r-1][c] + paths[r][c-1],
        # since a cell can only be reached from above or from the left.
        # turns V1's O(2^n) into O(n^2)
        def lattice_paths(grid_size)
            paths = Array.new(grid_size + 1) { Array.new(grid_size + 1, 0) }

            row = 0
            while row <= grid_size
                col = 0
                while col <= grid_size
                    if row == 0 || col == 0
                        paths[row][col] = 1
                    else
                        paths[row][col] = paths[row - 1][col] + paths[row][col - 1]
                    end
                    col += 1
                end
                row += 1
            end

            paths[grid_size][grid_size]
        end
    end
end

p V1.lattice_paths(2) # 6
p V2.lattice_paths(2) # 6
