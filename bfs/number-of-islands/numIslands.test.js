const { numIslands } = require('./numIslands')

test('example 1', () => {
    let grid = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ]
    let output = 1

    expect(numIslands(grid)).toEqual(output)
})

test('example 2', () => {
    let grid = [
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"]
    ]
    let output = 3

    expect(numIslands(grid)).toEqual(output)
})