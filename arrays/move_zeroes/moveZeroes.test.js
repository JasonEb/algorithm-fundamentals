const {moveZeroes} = require('./moveZeroes')

test('examples 1 ', () => {
    input = [0,1,0,3,12]
    output =  [1,3,12,0,0]

    expect(moveZeroes(input)).toEqual(output)
})

test('double initial zeroes case ', () => {
    input = [0, 0, 1]
    output =  [1,0,0]

    expect(moveZeroes(input)).toEqual(output)
})