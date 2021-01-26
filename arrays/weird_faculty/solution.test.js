const {solution} = require('./solution')

test('it passes example 1', () => {
    let input = [1, 0, 0, 1, 0]
    let output = 0
    let result = solution(input)
    expect(result).toEqual(output)
})