const {merge, isOverlap} = require('./merge')

test('it passes example 3', () => {
    let intervals = [[1,4],[0,2],[3,5]]
    let output =  [[0,5]]

    expect(merge(intervals)).toEqual(output)
})

test('it passes example 1', () => {
    let intervals = [[1,3],[2,6],[8,10],[15,18]]
    let output = [[1,6],[8,10],[15,18]]

    expect(merge(intervals)).toEqual(output)
})

test('it passes example 2', () => {
    let intervals = [[1,4],[4,5]]
    let output = [[1,5]]

    expect(merge(intervals)).toEqual(output)
})


test('it passes an unsorted example', () => {
    let intervals = [[1,7],[0,5]]
    let output = [[0,7]]

    expect(merge(intervals)).toEqual(output)
})

test('it recognizes connecting overlap', () => {
    let a = [1,2]
    let b = [2,3]

    expect(isOverlap(a,b)).toEqual(true)
})

test('it recognizes inner overlaps', () => {
    let a = [1,10]
    let b = [2,3]

    expect(isOverlap(a,b)).toEqual(true)
})

test('it recognizes no overlaps', () => {
    let a = [8,10]
    let b = [15,18]

    expect(isOverlap(a,b)).toEqual(false)
})

test('it recognizes first number being larger', () => {
    let a = [0,4]
    let b = [3,5]

    expect(isOverlap(a,b)).toEqual(true)
})
// is overLap testing