const {pivotIndex} = require('./pivotIndex')

test('example 1', () => {
    let nums = [1,7,3,6,5,6]
    let output = 3

    expect(pivotIndex(nums)).toEqual(output)
})

test('example 2', () => {
    let nums = [1,2,3]
    let output = -1

    expect(pivotIndex(nums)).toEqual(output)
})

test('example 3', () => {
    let nums = [2,1,-1]
    let output = 0

    expect(pivotIndex(nums)).toEqual(output)
})