const solution = (answers) => {
    n = answers.length

    //convert 0's to -1
    answers.forEach ( (el,idx) => {
        if (el == 0){
            answers[idx] = -1
        }
    })

    let totalSum = answers.reduce( (sum, el) => sum += el )
    let currSum = 0

    //iterate through array to find currSum
    //if the currSum is greater than the total sum
    //return index

    for(let i = 0; i < answers.length; i++) {
        if (currSum > totalSum) {
            return i
        }
    
        currSum += answers[i]
        totalSum -= answers[i]
    }

    return answers.length
}

exports.solution = solution