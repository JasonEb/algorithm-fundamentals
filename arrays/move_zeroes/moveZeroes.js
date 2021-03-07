/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let adx = 0
    let bdx = 0
    let zeroCount = 0
    //iterate through array
    //if curr is not zero, rewrite a[bdx]
    for(adx = 0; adx < nums.length; adx++) {
        if (nums[adx] != 0 ) {
            nums[bdx] = nums[adx]
            bdx++ 
        } else {
            //it is zero and must be counted
            zeroCount++
        }
    }

    while(zeroCount > 0) {
        nums[bdx] = 0
        bdx++
        zeroCount--
    }

    return nums
};

exports.moveZeroes = moveZeroes