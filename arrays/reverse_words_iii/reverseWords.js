/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    return s.split(/ +/g)
    .filter( (word) => word != '' )
    .map( (str) => str.split('').reverse().join('') )
    .join(' ')
};

exports.reverseWords = reverseWords