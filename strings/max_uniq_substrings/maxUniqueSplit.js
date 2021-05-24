/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    return dfs(s, new Set(), 0)
};

const dfs = (s, seen, i) => {
    if (i == s.length) { return seen.size }

    let max = 0 

    for (let j = i; j < s.length; j++) {
        let sub = s.substring(i, j + 1)
        debugger
        if(!seen.has(sub)) {
            seen.add(sub)
            let x = dfs(s, seen, j + 1)
            max = Math.max(x, max)
            seen.delete(sub)
        }
    }

    return max 
}

exports.maxUniqueSplit = maxUniqueSplit