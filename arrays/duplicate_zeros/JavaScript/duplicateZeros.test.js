const {duplicateZeros} = require('./duplicateZeros')

test('it passes example 1', () => {
    let input = [1,0,2,3,0,4,5,0]
    let answer = [1,0,0,2,3,0,0,4]
    duplicateZeros(input)

    expect(input).toEqual(answer)
})

test('it passes example 2', () => {
    let input = [1,2,3]
    let answer = [1,2,3]
    duplicateZeros(input)

    expect(input).toEqual(answer)
})

test('it passes example 3', () => {
    let input = [0,1,2,3]
    let answer = [0,0,1,2]
    duplicateZeros(input)

    expect(input).toEqual(answer)
})

test('it passes example 4', () => {
    let input = [1,2,3,0]
    let answer = [1,2,3,0]
    duplicateZeros(input)

    expect(input).toEqual(answer)
})

test('it passes example 5', () => {
    let input =  [8,4,5,0,0,0,0,7]
    let answer = [8,4,5,0,0,0,0,0]

    duplicateZeros(input)

    expect(input).toEqual(answer)
})


