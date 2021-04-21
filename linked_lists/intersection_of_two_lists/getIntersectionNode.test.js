const { ListNode, getIntersectionNode } = require('./getIntersectionNode')

test('example 1', () => {
    let a = new ListNode(4)
    let b = new ListNode(1)
    let c = new ListNode(8)
    let d = new ListNode(4)
    let e = new ListNode(5)

    a.next = b
    c.next = c
    d.next = d
    d.next = e

    let i = new ListNode(5)
    let ii = new ListNode(6)
    let iii = new ListNode(1)

    i.next = ii
    ii.next = iii
    iii.next = c

    expect(getIntersectionNode(a, i)).toEqual(c)
})

test('example 2', () => {
    let a = new ListNode(1)
    let b = new ListNode(9)
    let c = new ListNode(1)
    let d = new ListNode(2)
    let e = new ListNode(4)

    a.next = b
    c.next = c
    d.next = d
    d.next = e

    let i = new ListNode(3)

    i.next = d

    expect(getIntersectionNode(a, i)).toEqual(d)
})

test('example 3', () => {
    let a = new ListNode(2)
    let b = new ListNode(6)
    let c = new ListNode(4)

    a.next = b
    c.next = c
    
    let i = new ListNode(1)
    let ii = new ListNode(5)

    i.next = ii

    expect(getIntersectionNode(a, i)).toEqual(null)
})