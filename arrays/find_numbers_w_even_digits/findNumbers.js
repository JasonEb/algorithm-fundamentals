const findNumbers = (arr) => {
    let count = 0 
    let digits = 0
    arr.forEach( (num) => {
        digits = String(num).length

        digits % 2 == 0 ? count++ : null 
    })

    return count
}

exports.findNumbers = findNumbers