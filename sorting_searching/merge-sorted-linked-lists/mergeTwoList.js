function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const mergeTwoLists = (a, b) => {
  if (!a) return b
  if (!b) return a
    
  let a_probe = a
  let b_probe = b
  let tmp = new ListNode(Number.POSITIVE_INFINITY)
  let tail = a.val < b.val ? a : b

  while (a_probe.val != Number.POSITIVE_INFINITY && b_probe.val != Number.POSITIVE_INFINITY) {
    if (a_probe.val < b_probe.val) {
      tmp = a_probe
      a_probe = a_probe.next || new ListNode(Number.POSITIVE_INFINITY)

      //set tmp to lowest of the two probes
      //update tail
      tmp.next = a_probe.val < b_probe.val ? a_probe : b_probe
    } else {
      // assume b_probe.val <
      tmp = b_probe
      b_probe = b_probe.next || new ListNode(Number.POSITIVE_INFINITY)

      tmp.next = a_probe.val < b_probe.val ? a_probe : b_probe
    }

    tail = tail.val <= tmp.val ? tail : tmp
  }

  return tail
}

exports.mergeTwoLists = mergeTwoLists