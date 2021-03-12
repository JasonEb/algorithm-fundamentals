/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

const {spiralOrder} = require('./spiralOrder')

test('example 1 - 3x3', () => {
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    let output = [1,2,3,6,9,8,7,4,5]
    
    expect(spiralOrder(matrix)).toEqual(output)
})

test('example 2 - 4x3', () => {
    let matrix = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]
    ]

    let output = [1,2,3,4,8,12,11,10,9,5,6,7]
    
    expect(spiralOrder(matrix)).toEqual(output)
})

test('2x2', () => {
    let matrix = [
        [1,2],
        [3,4]
    ]

    let output = [1,2,4,3]
    
    expect(spiralOrder(matrix)).toEqual(output)
})

test('2 rows x 3 columns', () => {
    let matrix = [
        [1,2,3],
        [4,5,6]
    ]

    let output = [1,2,3,6,5,4]
    
    expect(spiralOrder(matrix)).toEqual(output)
})

test('3 rows x 2 columns', () => {
    let matrix = [
        [1,2],
        [3,4],
        [5,6]
    ]

    let output = [1,2,4,6,5,3]
    
    expect(spiralOrder(matrix)).toEqual(output)
})

test('1x3', () => {
    let matrix = [
        [1],
        [2],
        [3]
    ]

    let output = [1,2,3]
    
    expect(spiralOrder(matrix)).toEqual(output)
})

test('3x1', () => {
    let matrix = [
        [1], [2], [3]
    ]

    let output = [1,2,3]
    
    expect(spiralOrder(matrix)).toEqual(output)
})