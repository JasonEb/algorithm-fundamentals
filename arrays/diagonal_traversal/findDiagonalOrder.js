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

    //build diagonal lines list
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            result[i + j].push(matrix[i][j])
        }
    }

    //flip even index diagonals 
    for(let i = 0; i < result.length; i++) {
        if(i % 2 == 0) {
            result[i] = result[i].reverse()
        }
    }
    
    //store answers
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[i].length; j++) {
            ans.push(result[i][j])
        }
    }

    return ans
}

exports.findDiagonalOrder = findDiagonalOrder