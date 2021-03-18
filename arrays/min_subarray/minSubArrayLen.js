/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    if (nums.length <= 1) { return 0}

    let l = 0, r = 0 
    let curr = 0
    let min = Number.POSITIVE_INFINITY  
    
    while(r < nums.length) {
        curr += nums[r]
        while (curr >= target) {
            min = Math.min(min, r + 1 - l)
            curr -= nums[l++]
        }
        r++
    }

    if (min == Number.POSITIVE_INFINITY) {
        return 0
    }

    return min
};

exports.minSubArrayLen = minSubArrayLen