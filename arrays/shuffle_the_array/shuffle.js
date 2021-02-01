var shuffle = function(nums, n) {
    let result = []
    let x_idx = 0
    let y_idx = n
    
    for(let i = 0; i <= n - 1; i++) {
        result.push(nums[i])
        result.push(nums[y_idx])
        
        y_idx++
    }
    
    return result
};

exports.shuffle = shuffle