const { preorderTraversal } = require('./preorderTraversal')

test('it passes example 1', () =>{
    let root = [1,null,2,3]
    let output = [1,2,3]

    expect(preorderTraversal(root)).toEqual(output)
})

test('it passes example 2', () =>{
    let root = [1,null,3,2,4,null,5,6]
    let output = [1,3,5,6,2,4]

    expect(preorderTraversal(root)).toEqual(output)
})

test('it passes example 3', () => {
    let root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
    let output = [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

    expect(preorderTraversal(root)).toEqual(output)
})