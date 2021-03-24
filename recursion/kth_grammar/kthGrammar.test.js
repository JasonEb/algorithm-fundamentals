const { kthGrammar } = require('./kthGrammar')
/*
On the first row, we write a 0.
Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01,
and each occurrence of 1 with 10.

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01 10 10 01

Given row N and index K, 
return the K-th indexed symbol in row N. 
(The values of K are 1-indexed.) (1 indexed).
*/

test('N = 1, K = 1', () => {
    let N = 1, K = 1
    expect(kthGrammar(N,K)).toEqual("0")
})

test('N = 2, K = 1', () => {
    let N = 2, K = 1
    expect(kthGrammar(N,K)).toEqual("0")
})

test('N = 2, K = 2', () => {
    let N = 2, K = 2
    expect(kthGrammar(N,K)).toEqual("1")
})

test('N = 3, K = 2', () => {
    let N = 3, K = 1
    expect(kthGrammar(N, K)).toEqual("0")
})

// test('N = 4, K = 5', () => {
//     let N = 4, K = 5
//     expect(kthGrammar(N,K)).toEqual("1")
// })

// test('N = 30, K = 434991989', () => {
//     let N = 30, K = 434991989
//     expect(kthGrammar(N, K)).toEqual("0")
// })