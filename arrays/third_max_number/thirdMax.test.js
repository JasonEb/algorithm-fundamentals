const {thirdMax} = require('./thirdMax')

test('example 1', () => {
    let nums = [3,2,1]

    expect(thirdMax(nums)).toEqual(1)
})

test('example 2', () => {
    let nums = [1,2]

    expect(thirdMax(nums)).toEqual(2)
})

test('example 3', () => {
    let nums = [2,2,3,1]

    expect(thirdMax(nums)).toEqual(1)
})

test('example 4', () => {
    let nums = [2,2,3,1,4,5]

    expect(thirdMax(nums)).toEqual(3)
})

test('example 4', () => {
    let nums = [1,1,2]

    expect(thirdMax(nums)).toEqual(2)
})
