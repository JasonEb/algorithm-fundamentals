function ListNode(val) {
    this.val = val;
    this.next = null;
}

var oddEvenList = function(head) {
    let newHead = new ListNode()
    let dummy = newHead

    let a = head
    let idx = 1
    while (a) {
        if (idx % 2 != 0) {
            newHead.next = new ListNode(a.val)
            newHead = newHead.next
        }
        idx++
        a = a.next
    }

    a = head
    idx = 1
    while (a) {
        if (newHead == null) { debugger }
        if (idx % 2 == 0) {
            newHead.next = new ListNode(a.val) 
            newHead = newHead.next
        }
        idx++
        a = a.next
    }
    return dummy.next
};

exports.oddEvenList = oddEvenList
exports.ListNode = ListNode