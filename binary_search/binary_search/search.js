/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0, r = nums.length - 1, m = Math.floor(l + (r - l) / 2) 
    let guess = nums[m] 
    while ( l <= r) {
        m = Math.floor(l + (r - l) / 2) 
        guess = nums[m]
        
        if (target < guess) {
            r = m - 1
        } else if ( target > guess) {
            l = m + 1
        } else {
            return m
        }
    }

    return -1
    
};

exports.search = search 