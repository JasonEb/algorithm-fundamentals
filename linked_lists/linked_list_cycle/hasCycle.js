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

var hasCycle_2 = function(head) {
    if(head == null ) { return null }
    let a = head
    let b = head

    while(b != null && b.next != null) {
        b = b.next.next
        a = a.next
        if (a == b) { break }
    }

    if (b == null || b.next == null) { return null } 

    a = head
    while(a != b) {
        a = a.next
        b = b.next
    }
    return a
};

exports.ListNode = ListNode
exports.hasCycle = hasCycle
exports.hasCycle_2 = hasCycle_2