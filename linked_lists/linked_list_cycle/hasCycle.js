function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    if(head == null ) { return false }
    let a = head
    let b = head.next

    while(a != b) {
        if(b == null || b.next == null) { return false}
        
        b = b.next.next
        a = a.next
    }

    return true
};

exports.ListNode = ListNode
exports.hasCycle = hasCycle