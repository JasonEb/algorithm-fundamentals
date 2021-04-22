function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd = function(head, n) {
    let a = head
    let length = 0
    while(a != null) {
        length++
        a = a.next 
    }

    let idx = length - n + 1

    a = head
    while(idx > 0) {
        a = a.next 
        idx--
    }

    let c = a.next.next
    a.next = c

    return head  
};

exports.ListNode = ListNode
exports.removeNthFromEnd = removeNthFromEnd

