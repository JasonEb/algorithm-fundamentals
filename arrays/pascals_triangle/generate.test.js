const { generate } = require('./generate')
/*
Given an integer numRows, return the first numRows of Pascal's triangle.
*/

test('5 rows', () => {
    let numRows = 5
    let output = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    expect(generate(numRows)).toEqual(output)
})

test('1 row', () => {
    let numRows = 1
    let output = [[1]]

    expect(generate(numRows)).toEqual(output)
})