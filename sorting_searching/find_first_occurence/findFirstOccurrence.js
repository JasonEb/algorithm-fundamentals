const findFirstOccurrence = (arr, target) => {
    let l = 0, r = arr.length - 1
    let bdx = -1
    while(l <= r) {
        let m = Math.floor( l + (r - l)/2)

        if(arr[m] == target) {
            bdx = m
            r = m - 1
        } else if (arr[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return bdx  
}

exports.findFirstOccurrence = findFirstOccurrence

