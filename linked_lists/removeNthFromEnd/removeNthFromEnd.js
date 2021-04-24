function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd_v1 = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head //this addresses edgecase
    let a = head
    let length = 0
    while(a != null) {
        length++
        a = a.next 
    }

    length -= n 
    a = dummy
    
    while(length > 0) {
        a = a.next 
        length--
    }

    a.next = a.next.next

    return dummy.next 
};

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null)

    dummy.next = head

    //move to create gap
    a = dummy 
    b = dummy

    for(let i = 1; i <= n + 1; i++) {
        a = a.next
    }

    while(a) {
        a = a.next
        b = b.next
    }
    
    b.next = b.next.next 
    return dummy.next
}

exports.ListNode = ListNode
exports.removeNthFromEnd = removeNthFromEnd

