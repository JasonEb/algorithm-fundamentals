const { rob } = require('./houseRobber')

test('example 1', () => {
    let nums = [1,2,3,1]

    expect(rob(nums)).toEqual(4)
})

test('example 2', () => {
    let nums = [2,7,9,3,1]

    expect(rob(nums)).toEqual(12)
})

test('example 3', () => {
    let nums = [2,7,1,1,9]

    expect(rob(nums)).toEqual(12)
})