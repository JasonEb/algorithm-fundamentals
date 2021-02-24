const findMaxConsecutiveOnes = (arr) => {
    //iterate through array
    //count consecutive, keep track of biggest count 
    //return count 
    let max = 0
    let curr = 0
    arr.forEach( (num) => {
        if(num == 1){
            curr += 1
        } else {
            max = Math.max(max, curr)
            curr = 0
        }
    })
    
    max = Math.max(max, curr)
    
    return max
}

exports.findMaxConsecutiveOnes = findMaxConsecutiveOnes