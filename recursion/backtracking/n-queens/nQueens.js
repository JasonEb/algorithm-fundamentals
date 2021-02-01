const solveNQueens = (n) => {
    if (n <= 1) { return [["Q"]] }
    if (n <= 2) { return [] }
    let board = makeBoard(n)
    let solutions = []
    solveBoard(board, n, 0, solutions)

    //iterate through board
    //incremently check for successful positions
    //backtrack if it doesn't lead to a success
    return solutions
}

const makeBoard = (n) => {
    let board = []
    let row = ""

    for (let x = 0; x < n; x++){
        row += "."
    }

    for (let x = 0; x < n; x++) {
        board.push(row)
    }

    return board
}

const isViable = (board, row, col) => {

    //checks row
    for (let x = 1; x <= col; x++) {
        if ( board.length == 0) { debugger }
        if (board[row][col - x] == 'Q') {
            return false;
        }
    }

    for (let x = 1; row - x >= 0 && col >= x; x++) {
        if (row == 1 && col == 2) { debugger }
        if (board[row - x][col - x] == 'Q') {
            return false;
        }
    }

    for (let x = 1; row + x < board.length && col >= x; x++) {
        if (board[row + x][col - x] == 'Q') {
            return false;
        }
    }

    return true;
}

const replaceChar = (origString, replaceChar, index) => {
    let newStringArray = origString.split("");

    newStringArray[index] = replaceChar;

    let newString = newStringArray.join("");

    return newString;
}

const solveBoard = (board, n, col, solutions) => {
    if (col == n) {
        solutions.push([...board])
        return
    }

    for (let row = 0; row < n; row++) {
        // let row be 3, col = 0
        if (isViable(board, row, col)) {

            // Place this queen in board[row][col]
            board[row] = replaceChar(board[row], "Q", col)
            // recur to place rest of the queens
            solveBoard(board, n, col + 1, solutions)

            // If placing queen in board[row][col 
            // doesn't lead to a solution, then 
            // queen from board[row][col]
            board[row] = replaceChar(board[row], ".", col)
        }
    }
}

module.exports = solveNQueens