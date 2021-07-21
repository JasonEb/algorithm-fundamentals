const { search } = require('./search')

test('2 item case', () => {
    let nums = [1,3], target = 3

    expect(search(nums, target)).toEqual(1)
})


test('3 item case', () => {
    let nums = [3,1,2], target = 1

    expect(search(nums, target)).toEqual(1)
})

test('3 item error case', () => {
    let nums = [3,1,2], target = 4

    expect(search(nums, target)).toEqual(-1)
})

test('example 1', () => {
    let nums = [4,5,6,7,0,1,2], target = 0

    expect(search(nums, target)).toEqual(4)
})

test('unrotated error case', () => {
    let nums = [11,13,15,17], target = 10
    
    expect(search(nums, target)).toEqual(-1)
})


test('example 2 error case', () => {
    let nums = [4,5,6,7,0,1,2], target = 3

    expect(search(nums, target)).toEqual(-1)
})

test('1 item error case', () => {
    let nums = [1], target = 0

    expect(search(nums, target)).toEqual(-1)
})