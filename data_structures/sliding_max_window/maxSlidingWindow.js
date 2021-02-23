<<<<<<< HEAD
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
=======
const Dequeue = require('./dequeue')

const maxSlidingWindow = (arr, k) => {
    const result = []
    const dq = new Dequeue()

    for (let curr = 0; curr < arr.length ; curr++) {
        let dqHasItems = !dq.isEmpty()
        
        // Remove elements in the dequeue which are outside of the current sliding window (one per iteration)
        if (dqHasItems && dq.peekFront() == curr - k) {
            dq.removeFront()
        }
    
        // Remove all elements in the dequeue which are smaller than the current element we are at since they cannot represent the max of that sliding window
        while (dqHasItems && arr[curr] > arr[dq.peekBack()]) {
            dq.removeBack()
        }

        // Add the current element to the deque
        dq.addBack(curr)

        // Once we have completed the first sliding window, we can start adding elements to our solution. By design, the element at the front of our dequeue will contain the maximum of the sliding window, which is what we are interested in.
        if (curr >= k - 1) {
            result.push(arr[dq.peekFront()])
        }
    }

    return result
>>>>>>> 5a2ca3816c11cf87c6a8d202924b667b0005ac93
}

module.exports = maxSlidingWindow
