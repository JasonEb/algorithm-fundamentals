const { ListNode, removeElements } = require('./removeElements')

test('example 1', () =>{
    let a = new ListNode(1)
    let b = new ListNode(2)
    let c = new ListNode(6)
    let d = new ListNode(3)
    let e = new ListNode(4)
    let f = new ListNode(5)
    let g = new ListNode(6)

    a.next = b
    b.next = c
    c.next = d
    d.next = e
    e.next = f

    let result = removeElements(a, 6)

    expect(result.val).toEqual(1)
    result = result.next
    expect(result.val).toEqual(2)
    result = result.next
    expect(result.val).toEqual(3)
    result = result.next
    expect(result.val).toEqual(4)
    result = result.next
    expect(result.val).toEqual(5)
    result = result.next
    expect(result).toEqual(null)
})

test('example 2', () =>{
    let a = new ListNode(6)
    let b = new ListNode(2)
    let c = new ListNode(6)
    let d = new ListNode(6)
    let e = new ListNode(4)
    let f = new ListNode(5)
    let g = new ListNode(6)

    a.next = b
    b.next = c
    c.next = d
    d.next = e
    e.next = f
    f.next = g

    let result = removeElements(a, 6)

    expect(result.val).toEqual(2)
    result = result.next
    expect(result.val).toEqual(4)
    result = result.next
    expect(result.val).toEqual(5)
    result = result.next
    expect(result).toEqual(null)
})