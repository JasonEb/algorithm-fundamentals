/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {

    let directions = [[0,1], [1,0], [-1,0], [0,-1]]
    let stack = [ [sr, sc ]]
    let oldColor = image[sr][sc]
    let r, c
    while(stack.length > 0){
        debugger
        let coord = stack.pop()
        r = coord[0]
        c = coord[1]
        image[r][c] = newColor
        //iterate all 4 directions
        //if its the same number add to stack
        if (image[r + 1] != null && image[r + 1][c] != null && image[r + 1][c] == oldColor && image[r + 1][c] != newColor ){
            stack.push([r + 1, c])
        }
        if (image[r] != null && image[r][c + 1] != null && image[r][c + 1] == oldColor && image[r][c + 1] != newColor) { stack.push([r, c + 1])}
        if (image[r - 1] != null && image[r - 1][c] != null && image[r - 1][c] == oldColor && image[r - 1][c] != newColor) { stack.push([r - 1, c])}
        if (image[r] != null && image[r][c - 1] != null && image[r][c - 1] == oldColor && image[r][c - 1] != newColor) { stack.push([r, c - 1])}
    }

    return image
};

exports.floodFill = floodFill 