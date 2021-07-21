/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMax = function(nums) {
    let l = 0, r = nums.length - 1
    let m = Math.trunc(r + (r-l)/2)
    let x = -1
    while (l <= r) {
        if(nums[m] > nums[0]) {
            x = m
            r = m - 1
        } else if (nums[m] <= nums[0]) {
        }
    }
    return 0    
};

exports.findMax = findMax