/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(arr, i = 0) {
    if(i >= Math.floor(arr.length / 2)) { return arr }
    
    let tmp = arr[i]
    arr[i] = arr[ arr.length - 1 - i]
    arr[ arr.length - 1 - i] = tmp
    
    reverseString(arr, ++i)
};

exports.reverseString = reverseString