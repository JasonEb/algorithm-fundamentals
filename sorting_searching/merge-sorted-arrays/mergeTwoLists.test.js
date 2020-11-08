const { mergeTwoLists } = require('./mergeTwoList')

test('it passes example 1', () => {
    let a = [1,2,4]
    let b = [1,3,4]

    let result = mergeTwoLists(a,b)
    let output = [1,1,2,3,4,4]
    
    expect(result).toEqual(output)
})