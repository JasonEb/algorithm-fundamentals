const fib = (n) => {
    if (n == 0) { return 1}
    if (n == 1) { return 1}

    let prevNumber = 1
    let prevprevNumber = 0
    let fib = 1

    for(let i = 2; i <= n; i++) {
        fib = prevNumber + prevprevNumber
        prevprevNumber = prevNumber
        prevNumber = fib
    }

    return fib
}

const fibBottomUp = (n) => {
    if (n == 0) { return 0 }
    if (n == 1) { return 1}

    let fibs = [0,1]

    for(let i = 2; i <= n; i++) {
        fibs[i] = fibs[i-1] + fibs[i-2]
    }

    return fibs[n]
}


const fibCached = (n, fibs = []) => {
    if (n == 0) { return 0 }
    if (n == 1) { return 1}

    if (fibs[n]) { return fibs[n] }

    fibs[n] = fib(n-1) + fib(n-2)


    return fibs[n]
}

const fibNaive = (n) => {
    if (n == 0) { return 0 }
    if (n == 1) { return 1}

    return fib(n-1) + fib(n-2)
}

exports.fibonnaci = fib