const {isSymmetric, TreeNode} = require('./isSymmetric')

const insertLevelOrder = (arr, i, n, root) => {
    if (i < n) {
        let tmp = new TreeNode(arr[i])
        root = tmp
        root.left = insertLevelOrder(arr, 2*i + 1, n, root.left)
        root.right = insertLevelOrder(arr, 2*i + 2, n, root.right)
    }

    return root
}

test('example 1', () => {
    let tree = [1, 2, 2, 3, 4, 4, 3]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)
    expect(node.val).toEqual(1)
    expect(node.left.val).toEqual(2)
    expect(node.right.val).toEqual(2)

    expect(isSymmetric(node)).toEqual(true)
})

test('example 2', () => {
    let tree = [1,2,2,null,3,null,3]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(isSymmetric(node)).toEqual(false)
})

test('example 2', () => {
    let tree = [1, 2, 2, 3, 4, 4, 3, 5, null, 6, 7, 7, 6, null, 5]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(isSymmetric(node)).toEqual(true)
})