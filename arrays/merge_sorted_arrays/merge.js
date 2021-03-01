const merge = (a,m, b, n) => {
    //maintain two pointers
    //shuffle insert order and update pointers
    let result = [] 
    let adx = 0
    let bdx = 0

    if (b.length === 0) {
        return a
    }

    while(adx < m || bdx < n) {
        //scan if elements after m 
        if (adx > m && m > 0) {
            a[adx] = Math.INFINITY
        }

        if (bdx > n && n > 0) {
            b[bdx] = Math.INFINITY
        }

        if(a[adx] < b[bdx]) {
            adx += 1
        } else {
            a.splice(adx, 0, b[bdx])
            a.pop()
            bdx += 1
            adx += 1
        }
    }

    return a
}

exports.merge = merge