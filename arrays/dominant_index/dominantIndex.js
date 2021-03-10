/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = nums[0]
    let newMax = 0
    let ans = 0
    
    for (let i = 0; i < nums.length; i++) {
        newMax = Math.max(nums[i], max)
        if (newMax != max) {
            ans = i
            max = newMax
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if(i == ans) { continue }
        if (2 * nums[i] > max) { return -1 }
    }
    
    return ans
};

exports.dominantIndex = dominantIndex