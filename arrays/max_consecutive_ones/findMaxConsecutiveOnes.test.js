const {findMaxConsecutiveOnes} = require('./findMaxConsecutiveOnes')

test('it passes example 1', () => {
    let input = [1,1,0,1,1,1]
    let output = 3

    expect(findMaxConsecutiveOnes(input)).toBe(output)
})