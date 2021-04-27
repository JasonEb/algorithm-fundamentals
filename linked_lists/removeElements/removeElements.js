function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}
var removeElements = function(head, val) {
    let a = new ListNode()
    a.next = head
    let b = a
    
    while(b && b.next) {
        if (b.next.val == val) {
            b.next = b.next.next
        } else {
            b = b.next 
        }
    }
    return a.next
};

exports.ListNode = ListNode
exports.removeElements = removeElements

