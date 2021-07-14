const nextGreatestLetter = (letters, target) => {
    //set low, hi index
    //maintain loop, exit when lo > hi 
    //each iteration, examine if target is lower or higher than target
    //update lo, hi accordingly
    //return target if it equals

    let lo = 0
    let hi = letters.length
    let bdx = -1 //boundary index

    while(lo < hi) {
        mid = Math.floor((lo + hi) / 2)
        let letter = letters[mid]

        if(letter <= target) {
            lo = mid + 1
        } else if (letter > target) {
            hi = mid
        }
    }
    return letters[lo % letters.length]
}

exports.nextGreatestLetter = nextGreatestLetter