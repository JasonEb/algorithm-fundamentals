const {findNumbers} = require('./findNumbers')

test('it passes example 1', () => {
    let input = [12,345,2,6,7896]
    
    expect(findNumbers(input)).toBe(2)
})