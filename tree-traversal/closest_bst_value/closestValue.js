function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var closestValue = function(root, target, closest = Number.NEGATIVE_INFINITY) {
    if (root == null) { return closest }
    let absDifferenceCurr = Math.abs(target - root.val)
    let absDifferencePrev = Math.abs(target - closest)
    closest = absDifferenceCurr < absDifferencePrev ? root.val : closest 

    if (root.left == null && root.right == null) {
        return closest
    }

    if(target < root.val) {
        return closestValue(root.left, target, closest)
    } {
        return closestValue(root.right, target, closest)
    }

    return -1
};

exports.TreeNode = TreeNode
exports.closestValue = closestValue