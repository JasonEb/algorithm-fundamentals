const { ListNode, removeNthFromEnd } = require('./removeNthFromEnd')

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

    removeNthFromEnd(a, 2)
    expect(c.next).toEqual(e)
})

test('example 2', () =>{
    let a = new ListNode(1)

    removeNthFromEnd(a, 1)
    expect(a).toEqual(null)
})

test('example 3', () =>{
    let a = new ListNode(1)
    let b = new ListNode(2)

    removeNthFromEnd(a, 1)
    expect(a.next).toEqual(null)
})