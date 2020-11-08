function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (a, b) => {
    if (a == null) { return b }

    let a_probe = a
    let b_probe = b
    let tmp = new ListNode()

    while(a_probe != null && b_probe!= null) {
        if (a_probe.val <= b_probe.val) {
            tmp = a_probe
            a_probe = a_probe.next
            tmp.next = b_probe
        } else {
            // assume b_probe.val < 
            tmp = b_probe 
            b_probe = b_probe.next
            tmp.next = a_probe
        }
    }

    return a
}

exports.mergeTwoLists = mergeTwoLists