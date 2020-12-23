class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(val) {
        this.queue.push(val)
        return val
    }

    dequeue() {
        let val = this.queue[0]
        this.queue = this.queue.slice(1, this.queue.length)
        return val
    }

    peek() {
        return this.queue[this.queue.length - 1]
    }
}

module.exports = Queue