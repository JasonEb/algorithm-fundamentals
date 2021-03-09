const findMaxConsecutiveOnes = (nums) => {
    //DP approach
    let nonFlipped = []
    let flipped = []
    let max = 0

    nums.forEach( (num, i) => {
        if (nums[i] == 1) {
            if( i >= 1 ) {
                nonFlipped[i] = 1
                flipped[i] = 1
            } else {
                nonFlipped[i] = nonFlipped[i - 1] + 1
                flipped[i] = flipped[i - 1] + 1
            }
        } else {
            nonFlipped[i] = 0
            if (i >= 1) {
                flipped[i] = 1
            } else {
                flipped[i] = flipped[i - 1] + 1
            }
        }

        max = Math.max(max, flipped[i])
    })
    
    return max
}

exports.findMaxConsecutiveOnes = findMaxConsecutiveOnes