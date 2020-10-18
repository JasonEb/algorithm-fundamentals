const removeDuplicates = (nums) => {
    if (nums.length == 0) {
        return 0
    }

    let n = 0

    for (let i = 0; i < nums.length; ++i) {
        let isFirstNumber = i == 0
        let curr = nums[i]
        let prevNum = nums[i - 1]

        if (isFirstNumber || curr != prevNum) {
            nums[n++] = nums[i]
        }
    }

    nums = nums.slice(0, n)
    
    return n
}

module.exports = removeDuplicates