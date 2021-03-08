const { heightChecker } = require('./heightChecker')

test('example 1', () => {
    let heights = [1,1,4,2,1,3]

    expect(heightChecker(heights)).toEqual(3)
})

test('example 2', () => {
    let heights = [5,1,2,3,4]
    expect(heightChecker(heights)).toEqual(5)
})

test('example 3', () => {
    let heights = [1,2,3,4,5]
    expect(heightChecker(heights)).toEqual(0)
})

test('example 4', () => {
    let heights = [2,6,8,6,5,2,4,3,7,3,7,5,6,6,2,4,4,6,8,4,5]
    expect(heightChecker(heights)).toEqual(16)
})