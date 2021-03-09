const {findMaxConsecutiveOnes} = require('./findMaxConsecutiveOnes')

test('it passes example 1', () => {
    let input = [1,0,1,1,0]
    let output = 4

    expect(findMaxConsecutiveOnes(input)).toBe(output)
})

test('it passes example 2', () => {
    let input = [1,0,1,0,1]
    let output = 3

    expect(findMaxConsecutiveOnes(input)).toBe(output)
})

test('it passes example 3', () => {
    let input = [1,1,0,0,1,1,1,1,1]
    let output = 6

    expect(findMaxConsecutiveOnes(input)).toBe(output)
})