/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    
    let value = 0
    return 0; 
};

exports.rob = rob 