const combinations = (str) => {
    let candidate = ''
    let result = []

    helper(str, result, candidate)
    return result
}

const helper = (str, result, candidate, i = 0) => {
    result.push(candidate)

    if (i == str.length) { return }

    for(let idx = i; idx < str.length; ++idx) {
        candidate += str[idx]
        helper(str, result, candidate, idx + 1)
        candidate = candidate.slice(0, i)
    }
}

exports.combinations = combinations