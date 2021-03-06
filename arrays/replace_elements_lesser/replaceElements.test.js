const { replaceElements } = require('./replaceElements')

test('it passes example 1', () => {
    let arr = [17,18,5,4,6,1]
    let output = [18,6,6,6,1,-1]

    expect(replaceElements(arr)).toEqual(output)
})

test('it passes example 2', () => {
    let arr = [400]
    let output = [-1]

    expect(replaceElements(arr)).toEqual(output)
})