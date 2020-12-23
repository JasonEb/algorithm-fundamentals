/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queueA = []
    this.queueB = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queueA.push(x)
    return null
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 1) One by one dequeue everything except the last element from q1 and enqueue to q2.
    while(this.queueA.length != 1) {
        this.queueB.push(this.queueA.shift())
    } 
    // 2) Dequeue the last item of q1, the dequeued item is result, store it.
    let result = this.queueA.pop()
    // 3) Swap the names of q1 and q2
    let tmp = this.queueA
    this.queueA = this.queueB
    this.queueB = tmp
    // 4) Return the item stored in step 2.
    return result
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queueA[this.queueA.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queueA.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 module.exports = MyStack