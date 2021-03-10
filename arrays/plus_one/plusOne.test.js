// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

const { plusOne } = require('./plusOne')

test('example 1', () => {
    let digits = [1,2,3]
    let output = [1,2,4]

    expect(plusOne(digits)).toEqual(output)
})

test('example 1a', () => {
    let digits = [1,2,9]
    let output = [1,3,0]

    expect(plusOne(digits)).toEqual(output)
})

test('example 1b', () => {
    let digits = [1,9,9]
    let output = [2,0,0]

    expect(plusOne(digits)).toEqual(output)
})

test('example 2', () => {
    let digits = [4,3,2,1]
    let output = [4,3,2,2]

    expect(plusOne(digits)).toEqual(output)
})

test('example 3', () => {
    let digits = [0]
    let output = [1]

    expect(plusOne(digits)).toEqual(output)
})

test('example 4', () => {
    let digits = [9]
    let output = [1, 0]

    expect(plusOne(digits)).toEqual(output)
})

test('max integer case', () => {
    let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
    let output = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

    expect(plusOne(digits)).toEqual(output)
})