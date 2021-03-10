/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length == 0) { return [] }
    let rows = matrix.length
    let columns = matrix[0].length
    let diagonals = rows + columns - 1
    let result = []
    let ans = []
    let downLeft = true

    //initialize diagonal array lines
    for(let i = 0; i < diagonals; i++) {
        result.push([])
    }

    //build diagonal downleft lines
    for(let i = 0; i < columns; i++) {
        for(let j = 0; j < rows; j++) {
            if (downLeft) {
                result[i +j].push(matrix[j][i])
            } else {
                result[i +j].push(matrix[i][j])
            }

            // if (typeof matrix[i + 1] !== 'undefined') {downLeft = !downLeft}
            if (matrix.length == 1) { continue }
            if (matrix[0].length == 1) { continue }
            downLeft = !downLeft
        }
    }

    //traverse results array
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[i].length; j++) {
            ans.push(result[i][j])
        }
    }

    return ans
}

exports.findDiagonalOrder = findDiagonalOrder