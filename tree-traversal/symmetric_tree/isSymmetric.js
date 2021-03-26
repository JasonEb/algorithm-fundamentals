
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return traverse(root, root)
    //send parent node to initiate in both arguments
};

const traverse = (a, b) => {
    //reach a dead end node
    if (a == null && b == null) { return true }
    //if reach a child and it non symmetrical children
    if (a == null || b == null) { return false }
    //compare if the two nodes are equal
    //then also send their corresponding children recursively to analyze
    let mirror = a.val == b.val 
    let outerMirror = traverse(a.left, b.right)
    let innerMirror = false
    if (outerMirror) {
        innerMirror = traverse(a.right, b.left)
    }

    return mirror && outerMirror && innerMirror
} 

exports.isSymmetric = isSymmetric
exports.TreeNode = TreeNode