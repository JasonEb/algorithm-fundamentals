const { isPerfectSquare } = require('./isPerfectSquare')

test('16', () => {
    expect(isPerfectSquare(16)).toEqual(true)
})

test('36', () => {
    expect(isPerfectSquare(36)).toEqual(true)
})

test('1', () => {
    expect(isPerfectSquare(1)).toEqual(true)
})

test('4', () => {
    expect(isPerfectSquare(4)).toEqual(true)
})

test('14', () => {
    expect(isPerfectSquare(14)).toEqual(false)
})

test('9', () => {
    expect(isPerfectSquare(9)).toEqual(true)
})