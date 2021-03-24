const { kthGrammar } = require('./kthGrammar')
/*
On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).
*/

test('N = 1, K = 1', () => {
    let N = 1, K = 1
    expect(kthGrammar(N,K)).toEqual(0)
})

test('N = 2, K = 1', () => {
    let N = 1, K = 1
    expect(kthGrammar(N,K)).toEqual(0)
})

test('N = 2, K = 2', () => {
    let N = 1, K = 1
    expect(kthGrammar(N,K)).toEqual(1)
})

test('N = 4, K = 5', () => {
    let N = 1, K = 1
    expect(kthGrammar(N,K)).toEqual(1)
})