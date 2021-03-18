const { minSubArrayLen } = require('./minSubArrayLen')

/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

test('example 1', () => {
    let target = 7, nums = [2,3,1,2,4,3]

    expect(minSubArrayLen(target, nums)).toEqual(2)
})

test('example 2', () => {
    let target = 4, nums = [1,4,4]

    expect(minSubArrayLen(target, nums)).toEqual(1)   
})

test('example 3', () => {
    let target = 11, nums = [1,1,1,1,1,1,1,1]

    expect(minSubArrayLen(target, nums)).toEqual(0)    
})
