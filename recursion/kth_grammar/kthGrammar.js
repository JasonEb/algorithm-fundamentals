/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */


var kthGrammar = function(N, K) {
    if( N == 1) { return "0" }
    if(K%2 == 0) {
        let j = Math.floor(K/2)
        if (kthGrammar(N-1, j) == "0") { return "1" }
        else { return 0 }
    }
    else{
        let j = Math.floor((K+1)/2)
        if (kthGrammar(N-1, j) == "0" ) { return "0" }
        else { return "1" }
    }
}

var recursiveKthGrammar = function(N, K) {
    let row = kthRows(N-1)

    return row[K - 1]
};

const kthRows = (row, rows = ["0"]) => {
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