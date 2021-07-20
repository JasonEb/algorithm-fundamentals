const { findFirstOccurrence } = require('./findFirstOccurrence')

test('example 1', () =>{
    let arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100], target = 3

    expect(findFirstOccurrence(arr, target)).toEqual(1)
})

test('example 2', () =>{
    let arr = [1, 1, 1, 1, 3, 6, 10, 10, 10, 100], target = 1

    expect(findFirstOccurrence(arr, target)).toEqual(0)
})