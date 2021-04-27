function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIter = function(head) {
    let prev = null
    let curr = head
    let tmp = null

    while (curr) {
        tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp  
    }

    return prev
};

var reverseList = function(head, prev = null) {
    if (head == null) {
        return prev
    }

    let curr = head
    let tmp = curr.next

    curr.next = prev
    prev = curr
    curr = tmp  
    
    return reverseList(curr, prev)
};

exports.reverseList = reverseList
exports.ListNode = ListNode