/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //find pivot
    //base l, r on the 
    
    let l = 0, r = nums.length - 1
    let m = null

    while(l < r) {
        m = l + Math.floor((r - l)/2)

        if(nums[m] == target) {
            return m
        } else if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return - 1
};

exports.search = search