const { MyLinkedList, Node } = require('./myLinkedList')

describe('Design linkedlist', () => {
    let ll = new MyLinkedList()

    test('it adds at head', () => {
        ll.addAtHead(3)

        expect(ll.head.val).toEqual(3)
        expect(ll.length).toEqual(1)

        ll.addAtHead(2)
        expect(ll.head.val).toEqual(2)
        expect(ll.head.next.val).toEqual(3)

        ll.addAtHead(1)
        expect(ll.head.val).toEqual(1)
        expect(ll.head.next.val).toEqual(2)
        expect(ll.head.next.next.val).toEqual(3)
    })

    test('it gets', () => {
        ll.addAtHead(3)

        expect(ll.head.val).toEqual(3)
        expect(ll.length).toEqual(1)

        ll.addAtHead(2)
        expect(ll.head.val).toEqual(2)
        expect(ll.head.next.val).toEqual(3)
    })
})