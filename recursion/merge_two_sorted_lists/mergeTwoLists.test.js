const { mergeTwoLists, ListNode } = require('./mergeTwoLists')

test('example 1', () => {
    let a = new ListNode(1)
    a.next = new ListNode(2)
    a.next.next = new ListNode(4)

    let b = new ListNode(1)
    b.next = new ListNode(3)
    b.next.next = new ListNode(4)


    let result = mergeTwoLists(a, b)

    expect(result.val).toEqual(1)
    result = result.next
    expect(result.val).toEqual(1)
    result = result.next
    expect(result.val).toEqual(2)
    result = result.next
    expect(result.val).toEqual(3)
    result = result.next
    expect(result.val).toEqual(4)
})
