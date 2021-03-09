/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    //walk through array
    //map seen numbers to the indices of given array by flagging them negative
    //walk one more time and find hte positive nums - their indices are the missing numbers
    let result = []

    for(let i = 0; i < nums.length; i++) {
        let seen = Math.abs(nums[i]) - 1
        nums[seen] = -1 * Math.abs(nums[seen])
    }

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) { result.push(i + 1)}
    }

    return result
};

exports.findDisappearedNumbers = findDisappearedNumbers