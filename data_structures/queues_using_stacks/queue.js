/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackA = []
    this.stackB = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackA.push(x)
    return null
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //move all elements to stack b
    //push to stack a
    //pop elements back from b to a

    while( this.stackA.length != 0 ){
        this.stackB.push(this.stackA.pop())
    }

    let popped = this.stackB.pop()

    while( this.stackB.length != 0 ){
        this.stackA.push(this.stackB.pop())
    }

    return popped
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stackA[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackA.length == 0
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

 module.exports = MyQueue