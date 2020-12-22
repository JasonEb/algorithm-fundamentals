class Stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        this.stack.push(value)
        return value
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }
}

module.exports = Stack

