/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1
    let p = r
    let m = -1

    while( l <= r ){
        m = Math.trunc(l + (r-l)/2)

        if(nums[m] <= nums[nums.length - 1]) {
            p = m
            r = m -1
        } else { // mid value > truly last value
            l = m + 1
        }

    }

    return nums[p]
};

exports.findMin = findMin