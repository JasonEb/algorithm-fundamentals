/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let probe = this.head
    while( index > 0) {
        if(probe == null) { return - 1}
        probe = probe.next
        --index
    }

    if (probe) { return probe.val }
    return -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    let prev = this.head
    this.head = node
    this.head.next = prev
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.length == 0) {
        return this.addAtHead(val)
    }

    let probe = this.head
    let idx = 0
    while(idx < (this.length - 1)) {
        probe = probe.next
        idx++
    }
    let node = new Node(val)
    probe.next = node
    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) { return this.addAtHead(val) }

    let a = this.head
    let j = 0
    while(j < (index - 1)) {
        a = a.next
        j++
    }
    let b = new Node(val)
    let c = a.next

    a.next = b
    b.next = c
    this.length++   
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length || index < 0 ) { return }
    if(index === 0) {
        this.head = this.head.next
        this.length--
        return this
    }

    let a = this.head
    let j = 0
    while(j < (index - 1)) {
        a = a.next
        j++
    }
    let c = null
    if(a.next) { c = a.next.next }

    a.next = c

    this.length--       
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

 var Node = function(val) {
    this.val = val;
    this.next = null;
};

 exports.MyLinkedList = MyLinkedList
 exports.Node = Node