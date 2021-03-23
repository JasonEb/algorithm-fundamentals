/**
 * @param {ListNode} head
 * @return {ListNode}
**/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
    //tail method
    //traverse to rear
    //then redo pointers and return the modified node
    //for the previous node to update to

    if (head == null) { return head }
    if (head.next == null) {
        return head
    }

    let tail = reverseList(head.next)
    head.next.next = head
    head.next = null

    return tail
}

exports.reverseList = reverseList;
exports.ListNode = ListNode;