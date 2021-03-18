/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let result = new Array(nums.length)

    for(let i = 0; i < nums.length; i++) {
        result[(k + i) % nums.length] = nums[i]
    }

    return result
}

exports.rotate = rotate