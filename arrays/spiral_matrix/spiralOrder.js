/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    //traverse, keep track of boundaries
    if (matrix.length == 0 || matrix[0].length == 0) { return [] }

    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let left = 0
    let x = 0
    let y = 0
    let result = []

    while( top <= bottom && left <= right) {

        for(x = left; x <= right; x++){
            result.push(matrix[top][x])
        }
        top++
        
        for(y = top; y <= bottom; y++){
            result.push(matrix[y][right])
        }
        right--

        //if row exists
        //traverse left, update bottom
        if (top <= bottom) {
            for(x = right; x >= left; x--) {
                result.push(matrix[bottom][x])
            }
        }
        bottom--
        
        //if column exists
        //traverse up, update left
        if (left <= right) {
            for (y = bottom; y >= top; y-- ) {
                result.push(matrix[y][left])
            }
        }
        left++
    }
    return result
};

exports.spiralOrder = spiralOrder