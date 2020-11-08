function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (a, b) => {
    // let adx = 0
    // let bdx = 0
    // let result = []
    // let aNum = a[adx]
    // let bNum = b[bdx]

    // while( adx <= a.length && bdx <= b.length ) {
    //     aNum = a[adx] || Number.POSITIVE_INFINITY
    //     bNum = b[bdx] || Number.POSITIVE_INFINITY

    //     if (aNum == Number.POSITIVE_INFINITY && bNum == Number.POSITIVE_INFINITY) {
    //         break
    //     }

    //     if (aNum < bNum) {
    //         result.push(aNum)
    //         adx++
    //     } else if (bNum <= aNum) {
    //         result.push(bNum)
    //         bdx++
    //     }
    // }

    return a
}

exports.mergeTwoLists = mergeTwoLists