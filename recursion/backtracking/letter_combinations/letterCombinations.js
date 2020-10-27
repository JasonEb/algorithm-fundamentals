const letterCombinations = (input) => {
    if ( input.length == 0 ){ return "" }

    const keyMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    
    let sol = []
    let candidate = ''
    let digits = [...input]

    tracker(sol, 0, candidate, keyMap, digits)

    return sol
}

const tracker = (sol, idx, candidate, keyMap, digits) => {
    if (idx == digits.length) {
        sol.push(candidate)
        return
    }

    //iterate through each key's map
    //select first key, then explore the following key
    let key = digits[idx]
    let keyValues = keyMap[key] || ''
    let values = [...keyValues]

    values.forEach ( (char) => {
        candidate += char
        tracker(sol, idx + 1, candidate, keyMap, digits)
        candidate = candidate.substring(0, candidate.length - 1)
    })
}

module.exports = letterCombinations