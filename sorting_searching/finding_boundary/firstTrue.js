const firstTrue = (arr) => {
    let l = 0, r = arr.length - 1
    let bdx = -1 //boundary index

    while (l <= r) {
        let m = Math.floor( (l+r) / 2)

        if (arr[m] === false) {
            l = m + 1
        } if (arr[m] === true) {
            bdx = m
            r = bdx - 1
        }
    }

    return bdx
}

exports.firstTrue = firstTrue