const { subsetsWithDup } = require('./subsetsWithDup')

test( "it passes example case", () => {
    let input = [1,2,2]
    let output = [
        [2],
        [1],
        [1,2,2],
        [2,2],
        [1,2],
        []
    ]

    expect(subsetsWithDup(input)).toEqual(output)
})