const merge = (a,m, b, n) => {
    let adx = m-1
    let bdx = n-1
    let cdx = m+n-1

    //walk backwards through array
    //fill the back with bigger element
    while(adx >=0 && bdx>=0) {
        if(a[adx] > b[bdx]) {
            a[cdx] = a[adx]
            cdx--
            adx--
        }
        else {
            a[cdx] = b[bdx]
            cdx--
            bdx--
        }
    }

    //once adx is done, do bdx still
    while(bdx >= 0 ) {
        a[cdx] = b[bdx]
        cdx--
        bdx--
    }

    return a
}

exports.merge = merge