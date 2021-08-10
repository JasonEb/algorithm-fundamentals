const { findClosestElements } = require('./findClosestElements')

test('example 1', () => {
    let arr = [1,2,3,4,5], k = 4, x = 3, output = [1,2,3,4]

    expect(findClosestElements(arr, k, x)).toEqual(output)
})

test('example 2', () => {
    let arr = [1,2,3,4,5], k = 3, x = 2, output = [1,2,3]

    expect(findClosestElements(arr, k, x)).toEqual(output)
})

test('example 3', () => {
    let arr = [1,3], k = 1, x = 2, output = [1]

    expect(findClosestElements(arr, k, x)).toEqual(output)
})