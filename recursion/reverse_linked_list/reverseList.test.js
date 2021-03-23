const { reverseList, ListNode } = require('./reverseList')

test('example 1', () => {
    let a = new ListNode(1)
    let b = new ListNode(2)
    a.next = b
    let c = new ListNode(3)
    b.next = c
    let d = new ListNode(4)
    c.next = d

    reverseList(a)

    expect(d.next).toEqual(c)
    expect(c.next).toEqual(b)
    expect(b.next).toEqual(a)
    expect(a.next).toEqual(null)
})
