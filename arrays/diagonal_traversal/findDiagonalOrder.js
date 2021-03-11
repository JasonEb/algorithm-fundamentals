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
            debugger
            downLeft = (i + j) % 2 == 0 ? false : true

            // edge cases for one row or one column
            if (matrix.length == 1) {
                result[i + j].push(matrix[j][i])
                continue
            }

            if (matrix[0].length == 1) { 
                result[i + j].push(matrix[j][i])
                continue
            }

            if (downLeft) {
                result[i +j].push(matrix[i][j])
            } else {
                result[i +j].push(matrix[j][i])
            }
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