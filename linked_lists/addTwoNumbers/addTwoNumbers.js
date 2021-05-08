function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    //build two stacks
    //pop off and process digit with a carry

    let dummy = new ListNode()
    let a = dummy 
    let carry = 0

    //process
    while(l1 != null || l2 != null || carry == 1) {
        let sum = 0
        if(l1) {
            sum += l1.val
            l1 = l1.next
        }

        if(l2) {
            sum += l2.val
            l2 = l2.next
        }

        sum += carry
        carry = Math.floor(sum / 10)
        let b = new ListNode(sum % 10)
        a.next = b 
        a = a.next 
    }
    return dummy.next
};

exports.addTwoNumbers = addTwoNumbers
exports.ListNode = ListNode