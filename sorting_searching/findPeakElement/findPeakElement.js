/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length == 1) { return 0 }
    let l = 0, r = nums.length - 1
    let m = -1

    while(l < r) {
        m = Math.trunc(l + (r-l)/2)

        if(nums[m] > nums[m + 1]) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
};

exports.findPeakElement = findPeakElement