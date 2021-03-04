const checkIfExist = (arr) => {
    //double iterate through array for each combinations

    let i = 0
    let j = 1

    for(i = 0; i < arr.length; i++) {
        let a = arr[i]
        for(j = i + 1; j< arr.length; j++) {
            let b = arr[j]
            if (a == 2*b || 2*a == b) {
                return true
            }
        }
    }
    return false
}

exports.checkIfExist = checkIfExist

