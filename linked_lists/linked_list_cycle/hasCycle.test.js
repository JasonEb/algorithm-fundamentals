const { hasCycle, hasCycle_2, ListNode} = require('./hasCycle')

describe('has cycle 1', () => {
    test('example 1', () => {
        let a = new ListNode(3)
        let b = new ListNode(2)
        let c = new ListNode(0)
        let d = new ListNode(-4)

        a.next = b
        b.next = c
        c.next = d
        d.next = b

        expect(hasCycle(a)).toEqual(true)
    })

    test('example 2', () => {
        let a = new ListNode(1)
        let b = new ListNode(2)

        a.next = b
        b.next = a

        expect(hasCycle(a)).toEqual(true)
    })

    test('example 3', () => {
        let a = new ListNode(1)

        expect(hasCycle(a)).toEqual(false)
    })
})

describe('has cycle 2', () => {
    test('example 1', () => {
        let a = new ListNode(3)
        let b = new ListNode(2)
        let c = new ListNode(0)
        let d = new ListNode(-4)

        a.next = b
        b.next = c
        c.next = d
        d.next = b

        expect(hasCycle_2(a)).toEqual(b)
    })

    test('example 2', () => {
        let a = new ListNode(1)
        let b = new ListNode(2)

        a.next = b
        b.next = a

        expect(hasCycle_2(a)).toEqual(a)
    })

    test('example 3', () => {
        let a = new ListNode(1)

        expect(hasCycle_2(a)).toEqual(null)
    })
})