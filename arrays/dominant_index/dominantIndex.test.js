const {dominantIndex} = require('./dominantIndex')

test('edge case example', () => {
    let input = [0,0,1,2]

    expect(dominantIndex(input)).toEqual(3)
})