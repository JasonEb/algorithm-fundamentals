const {firstTrue} = require('./firstTrue')

test('example 1', () => {
    let arr = [false, false, true, true, true]

    expect(firstTrue(arr)).toEqual(2)
})

test('all true case', () => {
    let arr = [true, true, true]

    expect(firstTrue(arr)).toEqual(0)
})

test('last true case', () => {
    let arr = [false, false, true]

    expect(firstTrue(arr)).toEqual(2)
})

test('all false case', () => {
    let arr = [false, false, false]

    expect(firstTrue(arr)).toEqual(-1)
})