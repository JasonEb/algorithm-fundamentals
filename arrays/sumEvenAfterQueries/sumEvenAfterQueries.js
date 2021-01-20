const sumEvenAfterQueries = (A, queries) => {
    let result = []
    let idx = 0
    let sum = 0
    let evens = []
    
    queries.forEach( (query) => {
        idx = query[1]
        A[idx] += query[0]
        evens = A.filter( (el) => el % 2 == 0 )
        if(evens.length > 0 ){ sum = evens.reduce( (sum, el) => sum += el ) }
        result.push(sum)
    })
    return result
}

exports.sumEvenAfterQueries = sumEvenAfterQueries

