const {solution} = require('./solution')

test('it passes example 1', () => {
    let answers = [1, 0, 0, 1, 0]
    let output = 0
    let result = solution(answers)
    expect(result).toEqual(output)
})

test('it passes example 2', () => {
    let answers = [1, 0, 0, 1, 1]
    let output = 1
    let result = solution(answers)
    expect(result).toEqual(output)
})

test('it passes example 3', () => {
    let answers = [1, 1,1, 0, 1]
    let output = 2
    let result = solution(answers)
    expect(result).toEqual(output)
})