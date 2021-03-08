const sortArrayByParity = (nums) => {
    let adx = 0
    let bdx = 0
    let tmp = 0

    while( bdx < nums.length ) {
        if(nums[bdx] % 2 == 0) {
            //swap
            tmp = nums[adx]
            nums[adx] = nums[bdx]
            nums[bdx] = tmp
            adx++
        }

        bdx++
    }
    return nums
}

exports.sortArrayByParity = sortArrayByParity