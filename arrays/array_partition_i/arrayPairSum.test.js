const { arrayPairSum } = require('./arrayPairSum')

/*
*/

test('example 1', () => {
    let nums = [1,4,3,2]

    expect(arrayPairSum(nums)).toEqual(4)
})

test('example 2', () => {
    let nums = [6,2,6,5,1,2]

    expect(arrayPairSum(nums)).toEqual(9)
})