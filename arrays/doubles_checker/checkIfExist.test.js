const {checkIfExist} = require('./checkIfExist')

test('example 1', () => {
    let arr = [10,2,5,3]

    expect(checkIfExist(arr)).toBe(true)
})

test('example 2', () => {
    let arr = [7,1,14,11]

    expect(checkIfExist(arr)).toBe(true)
})

test('example 3', () => {
    let arr = [3,1,7,11]

    expect(checkIfExist(arr)).toBe(false)
})

test('negative integers example', () => {
    let arr = [-2,0,10,-19,4,6,-8]

    expect(checkIfExist(arr)).toBe(false)
})