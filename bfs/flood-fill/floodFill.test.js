const { floodFill } = require('./floodFill')

test('example 1', () => {
    let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2
    let output = [[2, 2, 2], [2, 2, 0], [2, 0, 1]]

    expect(floodFill(image, sr, sc, newColor)).toEqual(output)
})

test('example 2', () => {
    let image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, newColor = 2
    let output = [[2, 2, 2], [2, 2, 2]]

    expect(floodFill(image, sr, sc, newColor)).toEqual(output)
})

test('example 3', () => {
    let image = [[0, 0, 0], [0, 1, 1]], sr = 1, sc = 1, newColor = 1
    let output = [[0, 0, 0], [0, 1, 1]]

    expect(floodFill(image, sr, sc, newColor)).toEqual(output)
})