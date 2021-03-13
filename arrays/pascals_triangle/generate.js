/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let rows = [ [1], [1,1]]

    if (numRows == 1) { return [[1]] }
    if (numRows == 2) { return rows }
    if (numRows == 0) { return [] }

    let idx = 2
    let row = []
    let jdx = 1

    while ( idx < numRows ) {
        row = Array()
        let prev = rows[idx - 1]
        let prevMid = Math.floor(prev.length / 2)
        jdx = 1
        for(let i = 0; i <= prevMid; i++) {
            if (i == 0) {
                row[i] = 1
                row[idx] = 1
                continue
            }

            row[jdx] = prev[i] + prev[i - 1]
            row[idx - jdx] = prev[i] + prev[i - 1]
            jdx++
        }

        debugger
        rows.push(row)
        idx++
    }

    return rows
};

exports.generate = generate