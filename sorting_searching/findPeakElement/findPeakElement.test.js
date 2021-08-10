const { findPeakElement } = require('./findPeakElement')

test('example 1', () => {
    let nums = [1,2,3,1]

    expect(findPeakElement(nums)).toEqual(2)
})

test('example 2', () => {
    let nums = [1,2,1,3,5,6,4]

    expect(findPeakElement(nums)).toEqual(5)
})

test('single item case', () => {
    let nums = [1]

    expect(findPeakElement(nums)).toEqual(0)
})

test('double item case', () => {
    let nums = [1, 2]

    expect(findPeakElement(nums)).toEqual(1)
})

test('all ascending case', () => {
    let nums = [1, 2, 100]

    expect(findPeakElement(nums)).toEqual(2)
})

test('all ascending case', () => {
    let nums = [1, 2, 100]

    expect(findPeakElement(nums)).toEqual(2)
})