class Dequeue {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.items[0] = element
        }
        return true
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }

        let result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    removeBack() {
        if (this.isEmpty() {
            return undefined
        }

        let result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--
        return result
    }

    isEmpty() {
        return this.count == 0
    }
}

module.exports = {
    Dequeue
};