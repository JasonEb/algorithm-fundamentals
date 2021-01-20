const { shuffle } = require('./shuffle')

test('it passes example 1', () => {
    let nums = [2,5,1,3,4,7]
    let n = 3
    let output = [2,3,5,4,1,7]
    let result = shuffle(nums, n)

    expect(result).toEqual(output)
})

test('it passes example 2', () => {
    let nums = [1,2,3,4,4,3,2,1]
    let n = 4
    let output = [1,4,2,3,3,2,4,1]
    let result = shuffle(nums, n)

    expect(result).toEqual(output)
})

test('it passes example 3', () => {
    let nums = [2,5,1,3,4,7]
    let n = 3
    let output = [2,3,5,4,1,7]
    let result = shuffle(nums, n)

    expect(result).toEqual(output)
})