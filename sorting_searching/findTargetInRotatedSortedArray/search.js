/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1

    const findPivotIdx = (nums) => {
        let l = 0, r = nums.length - 1 
        let m = - 1
        while(l <= r ) {
            m = Math.trunc(l + (r-l)/2)

            if(nums[m] > nums[m+1]) {
                return m + 1
            } else {
                if (nums[m] < nums[l]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
        }
        return 0 
    }

    const bsearch = (nums, l = 0, r = 0, target) => {
        let m = 0

        while(l <= r) {
            m = Math.trunc(l + (r-l)/2)
            if(nums[m] == target){
                return m
            }

            if(nums[m] > target) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return - 1
    }

    let pdx = findPivotIdx(nums)

    debugger

    //depending on the pivot index
    //search on the left side or right side
    //look at target and compare to first element
    if (pdx == 0) {
        result = bsearch(nums, l = 0, r = nums.length - 1, target)
    }
    else if(target < nums[0]) {
        result = bsearch(nums, l = pdx, r = nums.length - 1, target)
    } else {
        result = bsearch(nums, l = 0, r = pdx, target)
    }

    return result
};

exports.search = search