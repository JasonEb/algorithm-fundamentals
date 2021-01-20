const {sumEvenAfterQueries} = require('./sumEvenAfterQueries')

test('it passes example 1', () => {
    let A = [1,2,3,4]
    let queries = [[1,0],[-3,1],[-4,0],[2,3]]
    let output = [8,6,2,4]
    let result = sumEvenAfterQueries(A, queries)

    expect(result).toEqual(output)
})