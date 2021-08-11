/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num == 1) { return true }
    let l = 0, r = num  - 1
    let m = -1

    while(l < r) {
        m = Math.ceil( l + (r-l)/2)

        if (m*m == num) {
            return true
        } else if ( m*m < num) {
            l = m
        } else {
            r = m - 1
        }
    }
    return false
};

exports.isPerfectSquare = isPerfectSquare