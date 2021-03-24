/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let row = kthRows(N-1)

    return row[K - 1]
};

const kthRows = (row, rows = ["0"]) => {
    debugger
    if (row == 0) { return rows[0] }
    //grab prevrow
    //make new row and return it
    let prevRow = kthRows(row - 1, rows)
    let newRow = ''

    prevRow.split('').map( (num) => {
        if (num == "0" ) {
            newRow += "01"
        } else {
            newRow += "10"
        }
    })

    rows[row] = newRow

    return rows[row]
}

exports.kthGrammar = kthGrammar