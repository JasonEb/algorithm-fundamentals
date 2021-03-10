/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1
    let carry = 1

    while(carry > 0) {
        if ( i < 0 ) {
            digits.unshift(1)
            break
        }

        digits[i] += 1
        if (digits[i] > 9) {
            carry = 1
            digits[i] = 0
            i--
        } else {
            carry = 0
        }     
    }

    return digits
};

exports.plusOne = plusOne