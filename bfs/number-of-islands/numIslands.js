/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    for(let r = 0; r < grid.length ; r++){
        for(let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == "1"){
                count++
                bfs(grid, r, c)
            }
        }
    }
    return count
};

const DELTAS = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0]
]

const bfs = (grid, sr, sc) => {
    let queue = [[sr,sc]]
    while(queue.length > 0) {
        let coord = queue.pop()
        let r = coord[0]
        let c = coord[1]
        grid[r][c] = "x"
        
        DELTAS.forEach ( (dir) => {
            let x = dir[0] + c
            let y = dir[1] + r

            let withinBoundsY = 0 <= y && y < grid.length
            let withinBoundsX = 0 <= x && x < grid[0].length

            if(withinBoundsX && withinBoundsY) {
                if (grid[y][x] == "1") { queue.push([y, x]) }
            }
        })
    }

    return grid
}

exports.numIslands = numIslands