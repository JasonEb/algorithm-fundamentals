const { guessNumber } = require('./guessNumber')

test('example 1', () => {
    let n = 10; pick = 6

    expect(guessNumber(n,pick)).toEqual(pick)
})

test('example 2', () => {
    let n = 1; pick = 1

    expect(guessNumber(n,pick)).toEqual(pick)
})

test('example 3', () => {
    let n = 2; pick = 1

    expect(guessNumber(n,pick)).toEqual(pick)
})

test('example 4', () => {
    let n = 2; pick = 2

    expect(guessNumber(n,pick)).toEqual(pick)
})