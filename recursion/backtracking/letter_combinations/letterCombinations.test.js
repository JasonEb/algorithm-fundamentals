const letterCombinations = require('./letterCombinations')

test('it passes case 1', () => {
    expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})