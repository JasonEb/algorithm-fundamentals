function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (a, b) => {
  if (!a && !b) { return }
  if (!a) return b
  if (!b) return a

  let head = null 

  if(a.val <= b.val) {
    head = a
    head.next = mergeTwoLists(a.next, b)
  } else {
    head = b
    head.next = mergeTwoLists(a, b.next)
  }

  return head
}

exports.mergeTwoLists = mergeTwoLists
exports.ListNode = ListNode