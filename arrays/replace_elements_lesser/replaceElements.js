const replaceElements = (arr) => {
    //iterate through array
    //keep track of biggest
    let i = arr.length - 1
    let max = -1
    let a = 0

    for (i = arr.length - 1; i >= 0; i-- ) {
        a = arr[i]
        arr[i] = max
        max = Math.max(arr[i], a)
    }

    return arr
}

exports.replaceElements = replaceElements