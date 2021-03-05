const {validMountainArray} = require('./validMountainArray')

test('examples 1', () => {
    let input = [2,1]
    let output = false

    expect(validMountainArray(input)).toEqual(output)
})

test('examples 2', () => {
    let input = [3,5,5]
    let output = false

    expect(validMountainArray(input)).toEqual(output)
})

test('examples 3', () => {
    let input = [0,3,2,1]
    let output = true

    expect(validMountainArray(input)).toEqual(output)
})

test('examples 4', () => {
    let input = [0,2,3,4,5,2,1,0]
    let output = true

    expect(validMountainArray(input)).toEqual(output)
})


test('all ascending edgecase', () => {
    let input = [0,1,2,3,4,5,6,7,8,9]
    let output = false

    expect(validMountainArray(input)).toEqual(output)
})

test('all descending edgecase', () => {
    let input = [5,4,3,2,1,0]
    let output = false

    expect(validMountainArray(input)).toEqual(output)
})