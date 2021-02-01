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
    this.queueB.unshift(x)
    var tmp = []
    
    while(this.queueA.length != 0) {
        this.queueB.unshift(this.queueA.pop())
    }
    
    //swap
    this.queueA = tmp
    this.queueA = this.queueB
    this.queueB = tmp
    return null
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queueA.pop()
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