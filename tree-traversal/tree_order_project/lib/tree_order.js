function inOrderArray(root, result = []) {
    if (!root) { return result }
    
    inOrderArray(root.left, result)
    result.push(root.value)
    inOrderArray(root.right, result)

    return result
}

function postOrderArray(root, result = []) {
    if (!root) { return result }
    
    postOrderArray(root.left, result)
    postOrderArray(root.right, result)
    result.push(root.value)

    return result
}


module.exports = {
    inOrderArray,
    postOrderArray
};