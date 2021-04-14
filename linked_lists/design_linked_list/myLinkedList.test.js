const { MyLinkedList, Node } = require('./myLinkedList')

describe('Design linkedlist', () => {
    let ll = new MyLinkedList()

    test('it adds at head', () => {
        ll.addAtHead('c')

        expect(ll.head.val).toEqual('c')
        expect(ll.length).toEqual(1)

        ll.addAtHead('b')
        expect(ll.head.val).toEqual('b')
        expect(ll.head.next.val).toEqual('c')

        ll.addAtHead('a')
        expect(ll.head.val).toEqual('a')
        expect(ll.head.next.val).toEqual('b')
        expect(ll.head.next.next.val).toEqual('c')
        expect(ll.length).toEqual(3)
    })

    test('it gets', () => {
        expect(ll.get(0)).toEqual('a')
        expect(ll.get(1)).toEqual('b')
        expect(ll.get(2)).toEqual('c')

        expect(ll.get(10)).toEqual(-1)
    })

    test('it adds at tail', () => {
        ll.addAtTail('e')
        expect(ll.get(3)).toEqual('e')
    })

    test('it adds at index', () => {
        ll.addAtIndex(3, 'd')
        expect(ll.get(2)).toEqual('c')
        expect(ll.get(3)).toEqual('d')
        expect(ll.get(4)).toEqual('e')
    })

    test('it deletes at index', () => {
        ll.deleteAtIndex(3)

        expect(ll.get(2)).toEqual('c')
        expect(ll.get(3)).toEqual('e')
        expect(ll.get(4)).toEqual(-1)
    })

    test('it deletes at tail', () => {
        //a➔b➔c➔e
        //0  1  2  3 
        ll.deleteAtIndex(3)

        expect(ll.get(2)).toEqual('c')
        expect(ll.get(3)).toEqual(-1)
        expect(ll.length).toEqual(3)
    })

    test('wrong answer 1', () => {
        //a➔b➔c➔e
        //0  1  2  3 
        let list = new MyLinkedList()
        list.addAtHead(1)
        list.deleteAtIndex(0)

        expect(list.get(0)).toEqual(-1)
    })

    test('wrong answer 2', () => {

        let list = new MyLinkedList()
        list.addAtHead(1)
        list.addAtTail(3)
        list.addAtIndex(1,2)
        expect(list.get(1)).toEqual(2)
        list.deleteAtIndex(0)
        expect(list.get(0)).toEqual(2)
    })
})