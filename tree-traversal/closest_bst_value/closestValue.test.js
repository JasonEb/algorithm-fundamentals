const { TreeNode, closestValue } = require('./closestValue')

test('example 1', () => {
    let e = new TreeNode(3)
    let d = new TreeNode(1)
    let b = new TreeNode(2,d,e)
    let c = new TreeNode(5)
    let a = new TreeNode(4, b, c)

    expect(closestValue(a, 3.714286)).toEqual(4)
})

test('example 1', () => {
    let a = new TreeNode(1)

    expect(closestValue(a, 3.714286)).toEqual(1)
})

test('2 item example', () => {
    let b = new TreeNode(1)
    let a = new TreeNode(2, b, null)

    expect(closestValue(a, 5.571429)).toEqual(2)
})