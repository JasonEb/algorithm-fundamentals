const { ListNode, reverseList } = require('./reverseList')

test('example 1', () =>{
    let a = new ListNode(1)
    let b = new ListNode(2)
    let c = new ListNode(3)
    let d = new ListNode(4)
    let e = new ListNode(5)

    a.next = b
    b.next = c
    c.next = d
    d.next = e

    reverseList(a)

    expect(e.next).toEqual(d)
    expect(d.next).toEqual(c)
    expect(b.next).toEqual(a)
    expect(a.next).toEqual(null)
})

test('example 2', () =>{
    let a = new ListNode(1)
    let b = new ListNode(2)

    a.next = b

    reverseList(a)
    expect(a.next).toEqual(null)
    expect(b.next).toEqual(a)
})