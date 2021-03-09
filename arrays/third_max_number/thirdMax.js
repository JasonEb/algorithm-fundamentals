/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length == 1) { return nums[0] }
    if (nums.length == 2) { return Math.max(nums[0], nums[1])}

    //keep track of the first,second, and third max numbers seen
    //in one traversal

    let i = 0
    let a = Number.NEGATIVE_INFINITY
    let b = Number.NEGATIVE_INFINITY
    let c = Number.NEGATIVE_INFINITY

    let curr = 0
    for(i = 0; i < nums.length; i++) {
        curr = nums[i]

        if(a == curr || b == curr || c == curr) { continue }

        if (curr > c) {
            a = b 
            b = c
            c = curr
        } else if ( curr > b) {
            a = b 
            b = curr
        }
        else if (curr > a) { a = curr }
    }

    if (a == Number.NEGATIVE_INFINITY) { return Math.max(b, c) }
    return a
};

exports.thirdMax = thirdMax