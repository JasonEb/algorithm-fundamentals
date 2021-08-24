const { openLock } = require('./openLock')

test('example 1', () => {
    let deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"
    let output = 6

    expect(openLock(deadends, target)).toEqual(output)
})

test('example 2', () => {
    let deadends = ["8888"], target = "0009"
    let output = 1

    expect(openLock(deadends, target)).toEqual(output)
})

test('example 3', () => {
    let deadends = ["8888"], target = "0009"
    let output = 1

    expect(openLock(deadends, target)).toEqual(output)
})

test('example 4', () => {
    let deadends = ["0000"], target = "8888"
    let output = -1
3
    expect(openLock(deadends, target)).toEqual(output)
})