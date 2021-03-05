const validMountainArray = (arr) => {
    if (arr.length < 3) {
        return false
    }

    let l = 0
    let r = arr.length - 1

    while(arr[l] < arr[l + 1]) {
        l++ 
    }

    while(arr[r] < arr[r - 1]) {
        r-- 
    }

    if(l == 0 && r == 0) { return false }
    if(l == arr.length - 1 && r == arr.length -1){ return false }

    return l == r
}

exports.validMountainArray = validMountainArray