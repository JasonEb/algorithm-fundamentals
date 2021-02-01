const { nextGreatestLetter } = require('./nextGreatestLetter')

test('it passes example 1', () => {
    let letters = ["c", "f", "j"]
    let target = "a"
    let output = "c"

    expect(nextGreatestLetter(letters, target)).toEqual(output)
})

test('it passes example 2', () => {
    let letters = ["c", "f", "j"]
    let target = "c"
    let output = "f"

    expect(nextGreatestLetter(letters, target)).toEqual(output)
})

test('it passes example 3', () => {
    let letters = ["c", "f", "j"]
    let target = "d"
    let output = "f"

    expect(nextGreatestLetter(letters, target)).toEqual(output)
})

test('it passes example 4', () => {
    let letters = ["c", "f", "j"]
    let target = "g"
    let output = "j"

    expect(nextGreatestLetter(letters, target)).toEqual(output)
})

test('it passes example 5', () => {
    let letters = ["c", "f", "j"]
    let target = "j"
    let output = "c"

    expect(nextGreatestLetter(letters, target)).toEqual(output)
})

test('it passes example 6', () => {
    let letters = ["c", "f", "j"]
    let target = "k"
    let output = "c"

    expect(nextGreatestLetter(letters, target)).toEqual(output)
})