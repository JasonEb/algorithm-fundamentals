/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let queue = []

    //seed initial wave
    for(let i = 1; i*i <= n; i++) {
        if (i*i == n) { return 1}
        queue.push([i*i])
    }
    
    while (queue.length > 0) {
        let nums = queue.shift()
        let sum = nums.reduce((a, b) => a + b)

        if (sum == n) {
            return nums.length
        }
    
        if(sum > n) {
            continue
        }

        for(let i = 1; i*i < n; i++){
            if ( sum + i * i == n) { return nums.length + 1}
            if (sum + i * i < n ){ 
                queue.push( [...nums, i*i] )
            }
        }
    }
    return -1
};

exports.numSquares = numSquares