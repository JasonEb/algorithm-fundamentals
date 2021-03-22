const { swapPairs, ListNode } = require('./swapPairs')

test('example 1', () => {
    let a = new ListNode(1)
    let b = new ListNode(2)
    a.next = b
    let c = new ListNode(3)
    b.next = c
    let d = new ListNode(4)
    c.next = d

    swapPairs(a)

    expect(b.next).toEqual(a)
    expect(a.next).toEqual(d)
    expect(d.next).toEqual(c)
})
