const { maxUniqueSplit } = require('./maxUniqueSplit')

test('example 1', () => {
    let s = "ababccc"

    expect(maxUniqueSplit(s)).toEqual(5)
})

test('example 2', () => {
    let s = "aba"

    expect(maxUniqueSplit(s)).toEqual(2)
})

test('example 3', () => {
    let s = "aa"

    expect(maxUniqueSplit(s)).toEqual(1)
})