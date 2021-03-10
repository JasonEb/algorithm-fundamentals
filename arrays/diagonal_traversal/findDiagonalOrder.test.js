/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order.

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]
*/

const { findDiagonalOrder } = require('./findDiagonalOrder')

test('3 x 3 example', () => {
    let input = [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]

    let output = [1,2,4,7,5,3,6,8,9]

    expect(findDiagonalOrder(input)).toEqual(output)
})

test('one row case', () => {
    let input = [
        [2,3]
    ]

    let output = [2,3]

    expect(findDiagonalOrder(input)).toEqual(output)
})

test('one column case', () => {
    let input = [
        [2],
        [3]
    ]

    let output = [2,3]

    expect(findDiagonalOrder(input)).toEqual(output)
})

test('2 x 2 case', () => {
    let input = [
        [1,2],
        [3,4]
    ]

    let output = [1,2,3,4]
    expect(findDiagonalOrder(input)).toEqual(output)
})

test('3 x 2 case', () => {
    let input = [
        [1, 2],
        [3, 4],
        [5, 6]
    ]

    let output = [1, 2, 3, 5, 4, 6]
    expect(findDiagonalOrder(input)).toEqual(output)
})

test('2 x 3 case', () => {
    let input = [
        [1, 2, 3],
        [4, 5, 6]
    ]

    let output = [1, 2, 4, 5, 3, 6]
    expect(findDiagonalOrder(input)).toEqual(output)
})