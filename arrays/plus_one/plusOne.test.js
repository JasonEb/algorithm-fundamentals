// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

const { plusOne } = require('./plusOne')

test('example 1', () => {
    let digits = [1,2,3]
    let output = [1,2,4]

    expect(plusOne(digits).toEqual(output))
})

test('example 2', () => {
    let digits = [4,3,2,1]
    let output = [4,3,2,2]

    expect(plusOne(digits).toEqual(output))
})

test('example 3', () => {
    let digits = [0]
    let output = [1]

    expect(plusOne(digits).toEqual(output))
})