const preorderTraversal = (root) => {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res;
}

//recursive 
const preorderTraversal2 = (root, stack = [], res = []) => {
    if (!root) return [];
    stack.push(root);
    res.push(root.val);
    if (root.left) preorderTraversal2(root.left, stack, res);
    if (root.right) preorderTraversal2(root.right, stack, res);
    return res;
}

exports.preorderTraversal = preorderTraversal