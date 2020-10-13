const intersect = (a, b) => {
    a.sort((a ,b) => a - b)
    b.sort((a ,b) => a - b)
    let result = []

    let l = 0
    let r = 0 

    while (l < a.length && r < b.length) {
        if (a[l] == b[r]) {
            result.push(a[l])
            ++l
            ++r
        } else if ( a[l] < b[r]) {
            ++l
        } else {
            ++r
        }
    }

    return result
}

module.exports = intersect