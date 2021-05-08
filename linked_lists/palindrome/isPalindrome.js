function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if (head.next == null) { return true }
    //find the length
    //use it to find paired node
    let a = head
    let length = 0
    while(a) {
        length++ 
        a = a.next
    }

    let mid = Math.floor(length / 2)
    //get to halfway
    a = head 
    let i = 0
    for(i = 0; i < mid; i++) {
        a = a.next
    }
    //reverse
    let prev = null
    let curr = a
    let tmp = null

    while(curr) {
        tmp = curr.next
        curr.next = prev 
        prev = curr
        curr = tmp
    }

    let b = prev 
    a = head
    //now traverse
    for(let i = 0; i < mid; i++) {
        if(a.val != b.val) { return false}
        a = a.next
        b = b.next 
    }
    return true
};

var isPalindrome_2 = function(head) {
    if (head.next == null) { return true }
    //find the length
    //use it to find paired node
    let a = head
    let length = 0
    while(a) {
        length++ 
        a = a.next
    }
    let i = 0
    let j = length - i
    a = head
    let b = a
    let mid = Math.floor(length / 2)

    while(i < mid) {
        j = length - 1
        let moves = j - i
        //move second pointer to paired node
        while(moves > 0) {
            b = b.next
            moves--
        }
        //check value
        if(a.val != b.val) { return false }

        a = a.next
        b = a
        length--
        i++
    }


    return true
};

exports.isPalindrome = isPalindrome
exports.ListNode = ListNode
