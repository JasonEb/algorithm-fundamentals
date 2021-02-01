const sumEvenAfterQueries = (A, queries) => {
    let result = []
    let idx = 0
    let sum = 0

    //initialize evens map
    let evens = []
    A.forEach( (el,idx) => {
        if (el % 2 == 0 ) {
            evens.push(idx)
        }
    })
    
    queries.forEach( (query) => {
        idx = query[1]
        let newVal = A[idx] + query[0]

        //if the updated idx is in evens
        //check the new value and update evens
        //else the updated idx is not in the evens
        //if it's even add it
        if (evens.includes(idx)) {
            if(newVal % 2 != 0) {
                // remove from evens map
                evens = evens.filter( (el) => el != idx) 
            }
        } else {
            //if newVal is even, add it to evens
            newVal % 2 == 0 ? evens.push(idx) : false 
        }
        
        A[idx] = newVal

        //sum evens
        evens.forEach( (idx) => sum += A[idx])
        result.push(sum)
        sum = 0
    })

    return result
}

exports.sumEvenAfterQueries = sumEvenAfterQueries

