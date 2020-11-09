const { combinations } = require('./combinations')

test('it passes test 1', () => {
    let str = "abc"
    let output = ["", "a", "ab", "abc", "ac", "b", "bc", "c"]

    expect(combinations(str)).toEqual(output)
})