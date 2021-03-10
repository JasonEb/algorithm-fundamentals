/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newSum = parseInt(digits.join(''))+1
    
    return String(newSum).split('').map( (n) => parseInt(n))

};

exports.plusOne = plusOne