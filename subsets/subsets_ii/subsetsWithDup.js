const subsetsWithDup = (nums) => {
    let sol = []
    let candidate = []
    nums = nums.sort( (a,b) => { return a < b })
    traverse(sol, candidate, nums)
    return sol
}

const traverse = (sol, candidate, nums, idx = 0) => {
    sol.push(candidate)
    if (idx == nums.length) {
        return 
    }

    for (let i = idx; i < nums.length; ++i) {
        if(i != idx && nums[i] == nums[i - 1]){
            //what?
        }
        candidates.push(nums[i])
        traverse(sol, candidates, nums, i + 1)
        candidates.pop()
    }
}
exports.subsetsWithDup = subsetsWithDup