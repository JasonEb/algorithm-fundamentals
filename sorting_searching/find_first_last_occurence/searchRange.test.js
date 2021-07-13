const { searchRange } = require("./searchRange")

test('example 6', () => {
    let nums = [1,2,2,2], target = 1
    let output = [0,0]
    expect(searchRange(nums,target)).toEqual(output)
})

test('example 7', () => {
    let nums = [1,2,2,2], target = 2
    let output = [1,3]
    expect(searchRange(nums,target)).toEqual(output)
})

test('example 5', () => {
    let nums = [1], target = 1
    let output = [0,0]
    expect(searchRange(nums,target)).toEqual(output)
})

test('example 1', () => {
    let nums = [5,7,7,8,8,10], target = 8
    let output = [3,4]
    expect(searchRange(nums,target)).toEqual(output)
})

test('example 2', () => {
    let nums = [5,7,7,8,8,10], target = 6
    let output = [-1,-1]
    expect(searchRange(nums,target)).toEqual(output)
})

test('example 3', () => {
    let nums = [], target = 0
    let output = [-1,-1]
    expect(searchRange(nums,target)).toEqual(output)
})

test('example 4', () => {
    let nums = [5,5,5,8,8,10], target = 5
    let output = [0,2]
    expect(searchRange(nums,target)).toEqual(output)
})
