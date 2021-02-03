const nextGreatestLetter = (letters, target) => {
    //set low, hi index
    //maintain loop, exit when lo > hi 
    //each iteration, examine if target is lower or higher than target
    //update lo, hi accordingly
    //return target if it equals

    let lo = 0
    let hi = letters.length

    while(lo < hi) {
        mid = Math.floor((lo + hi) / 2)
        let letter = letters[mid]

        if (target == letter) {
            return letter
        } else if ( target > letter) {
            hi -= 1
        } else {
            lo += 1
        }
    }
    return letters[mid]
}

exports.nextGreatestLetter = nextGreatestLetter