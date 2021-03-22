/**
 * @param {ListNode} head
 * @return {ListNode}
**/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
    if (head == null || head.next == null) { return head }
    //swap current pair
    //then recursively call the tail
    //return new head

    let tail = swapPairs(head.next.next)
    let b = head.next 
    b.next = head
    head.next = tail

    return b
}

exports.swapPairs = swapPairs;
exports.ListNode = ListNode;