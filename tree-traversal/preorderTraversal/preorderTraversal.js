const buildTree = (arr, root, i, n) => {

    if ( i < n ) { 
        let temp = new TreeNode(arr[i])
        root = temp

        root.left = buildTree(arr, root.left, 2*i + 1, n)
        root.right = buildTree(arr, root.right, 2*i + 2, n)
    }

    return root
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const preorder = (root, result = []) => {
    if (root == null) { return result }

    result += root.value

    preorderTraversal(root.left, result)
    preorderTraversal(root.right, result)

    return result
}

const preorderTraversal = (arr) => {
    let rootNode = buildTree(arr)
    let n = arr.length / 

    let result = preorder(rootNode)

    return result
}

exports.preorderTraversal = preorderTraversal