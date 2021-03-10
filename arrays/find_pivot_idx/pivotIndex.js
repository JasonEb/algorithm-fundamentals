/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //find total sum
    //walk again and subtract totalSum until currSum matches

    let total = nums.reduce( (x,y) => x + y)
    let sum = 0
    
    for(let i = 0 ; i < nums.length; i++) {
        sum += nums[i]
        if (sum == total) {
            return i
        }
        total -= nums[i]
    }

    return -1
};

exports.pivotIndex = pivotIndex