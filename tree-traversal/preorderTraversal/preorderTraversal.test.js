const { preorderTraversal } = require('./preorderTraversal')

test('it passes example 1', () =>{
    let root = [1,null,2,3]
    let output = [1,2,3]

    expect(preorderTraversal(root)).toEqual(output)
})