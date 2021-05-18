/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n, pick) {
    let l = 0, r = n
    let m = 0
    while(l <= r) {
        m = l + Math.floor((r - l) / 2)
        let reply = guess(m, pick)

        if(reply == 0) {
            return m
        } else if (reply ==  1) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return r 
};

const guess = (guess, pick) => {
    if (pick == guess) { return 0 }
    return pick < guess ? -1 : 1
}

exports.guessNumber = guessNumber
