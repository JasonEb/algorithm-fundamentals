const merge = (intervals) => {
    intervals = intervals.sort( (a,b) => a[0] - b[0] )
    let output = []
    let i = 0
    let cur = []
    
    while(i < intervals.length ) {
        cur = intervals[i++]

        while(i < intervals.length && intervals[i][0] <= cur[1]) {
            cur[1] = Math.max(cur[1], intervals[i][1])
            ++i
        }
        output.push(cur)
    }

    return output
}

const isOverlap = (a, b) => {
    return a[1] >= b[0] 
}

const mergeOriginal = (intervals) => {
    intervals = intervals.sort( (a,b) => a[0] - b[0] )
    let output = []

    let i = 0
    while(i < intervals.length ) {
        let cur = intervals[i]
        let nxtIdx = i + 1
        let nxt = intervals[nxtIdx] || [Number.INFINITY,Number.INFINITY]
        let candidate = []

        while( isOverlap(cur, nxt) ) {
            candidate = [cur[0], Math.max(cur[1], nxt[1])]
            nxt = intervals[++nxtIdx] || [Number.INFINITY,Number.INFINITY]
            cur = candidate
        }

        if ( candidate.length == 0) {
            output.push(cur)
            ++i
        } else {
            output.push(candidate)
            i = nxtIdx
        }
    }

    return output
}

exports.merge = merge
exports.isOverlap = isOverlap