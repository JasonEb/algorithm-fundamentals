const { search } = require('./search')

test('example 1', () => {
    let nums = [4,5,6,7,0,1,2], target = 0
    expect(search(nums, target)).toEqual(4)
})

test('example 2', () => {
    let nums = [4,5,6,7,0,1,2], target = 3
    expect(search(nums, target)).toEqual(-1)
})

test('example 3', () => {
    let nums = [4,5,6,7,0,1,2], target = 0
    expect(search(nums, target)).toEqual(4)
})