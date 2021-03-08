const {sortArrayByParity} = require('./sortArrayByParity')

// test('examples 1', () => {
//     let input = [3,1,2,4]

//     expect(sortArrayByParity(input)).toEqual([2,4,3,1])
// })

test('examples 2', () => {
    let input = [0,1,2]

    expect(sortArrayByParity(input)).toEqual([0,2,1])
})