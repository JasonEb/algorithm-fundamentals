const { hasPathSum, TreeNode } = require('./hasPathSum')

/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
*/

const insertLevelOrder = (arr, i, n, root) => {
    if (i < n) {
        let tmp = new TreeNode(arr[i])
        root = tmp
        root.left = insertLevelOrder(arr, 2*i + 1, n, root.left)
        root.right = insertLevelOrder(arr, 2*i + 2, n, root.right)
    }

    return root
}

test('example 1 ', () => {
    let tree = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(hasPathSum(node, 22)).toEqual(true)
})

test('example 2 ', () => {
    let tree = [1,2,3]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(hasPathSum(node, 5)).toEqual(false)
})

test('small case left', () => {
    let tree = [1,2,3]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(hasPathSum(node, 3)).toEqual(true)
})

test('small case right', () => {
    let tree = [1,2,3]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(hasPathSum(node, 4)).toEqual(true)
})

test('sum being zero edge case', () => {
    let tree = [1,2]
    let n = tree.length
    let node = insertLevelOrder(tree, 0, n)

    expect(hasPathSum(node, 0)).toEqual(false)
})

