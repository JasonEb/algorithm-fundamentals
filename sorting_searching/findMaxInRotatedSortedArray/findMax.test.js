const { findMax } = require('./findMax')



test('example 1', () => {
    let nums = [3,4,5,1,2], output = 5

    expect(findMax(nums)).toEqual(output)
})

test('unrotated example', () => {
    let nums = [0,1,2,4,5,6,7], output = 7

    expect(findMax(nums)).toEqual(output)
})

test('example 2', () => {
    let nums = [4,5,6,7,0,1,2], output = 7

    expect(findMax(nums)).toEqual(output)
})

test('example 3', () => {
    let nums = [11,13,15,17], output = 17

    expect(findMax(nums)).toEqual(output)
})

test('3 item example', () => {
    let nums = [3,1,2], output = 3

    expect(findMax(nums)).toEqual(output)
})