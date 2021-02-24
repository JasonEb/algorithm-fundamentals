const sortedSquares = (nums) => {
    //keep two pointers, left and right
    //iterate, put biggest number first
    //update pointers accordingly
    //remember to reverse array

    if (!nums) return;
    let result = []
    if(nums.length === 1) {
        result[0] = Math.pow(nums[0], 2)
    }

    let ldx = 0
    let rdx = nums.length - 1
    let idx = rdx
    let leftSqr = 0
    let rightSqr = 0


    while(ldx <= rdx) {
        leftSqr = nums[ldx] * nums[ldx]
        rightSqr = nums[rdx] * nums[rdx]

        if (leftSqr < rightSqr) {
            result[idx] = rightSqr
            rdx--
        } else {
            result[idx] = leftSqr
            ldx++
        }

        idx--
    }

    return result
}

exports.sortedSquares = sortedSquares