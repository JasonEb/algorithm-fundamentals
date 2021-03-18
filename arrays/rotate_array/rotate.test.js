const { rotate } = require('./rotate')

/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

test('example 1', () => {
    let nums = [1,2,3,4,5,6,7], k = 3
    let output = [5,6,7,1,2,3,4]

    expect(rotate(nums, k)).toEqual(output)
})

test('example 2', () => {
    let nums = [-1,-100,3,99], k = 2
    let output = [3,99,-1,-100]

    expect(rotate(nums, k)).toEqual(output)
})