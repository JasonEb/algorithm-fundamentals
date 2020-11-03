const subsets = (nums) => {
    let sol = []
    let candidate = []
    helper(sol, candidate, nums)
    return sol
}

const helper = (sol, candidate, nums, idx = 0) => {
    sol.push([...candidate])
    if ( idx == nums.length) {
        return
    }

    for(let i = idx; i < nums.length; ++i) {
        candidate.push(nums[i])
        helper(sol, candidate, nums, i + 1)
        candidate.pop()
    }
}

exports.subsets = subsets
