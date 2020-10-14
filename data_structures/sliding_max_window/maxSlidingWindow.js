const maxSlidingWindow = (arr, k) => {
    //set window to first 3
    //find max of window
    //iterate to the next step
    let result = []

    for (let i = 0; i < (arr.length - k + 1); i++) {
        let window = arr.slice(i, i + k)
        result.push(findMax(window))
    }
    return result
}

const findMax = window => {
    let max = window[0]

    window.forEach( num => {
        max = Math.max(num, max)
    })

    return max
}

module.exports = maxSlidingWindow
