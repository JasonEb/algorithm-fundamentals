const duplicateZeros = (arr) => {
    //iterate through array
    //if detect a zero, insert a new zero
    //remove last element

    let i = 0
    let el = arr[i]

    while (i < arr.length ) {
        el = arr[i]
        if (el === 0){
            arr.splice(i, 0, 0)
            arr.pop()
            i += 2
        } else {
            i += 1
        }
    }

    return
}

exports.duplicateZeros = duplicateZeros