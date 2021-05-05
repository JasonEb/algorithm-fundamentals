const { isPalindrome, ListNode } = require('./isPalindrome')

test('example 1', () => {
    let a = new ListNode(1)
    let b = new ListNode(2)
    let c = new ListNode(2)
    let d = new ListNode(1)

    a.next = b
    b.next = c
    c.next = d

    expect(isPalindrome(a)).toEqual(true)
})
test('example base case', () => {
    let a = new ListNode(1)
    expect(isPalindrome(a)).toEqual(true)
})

test('2 item example', () => {
    let a = new ListNode(3)
    let b = new ListNode(3)

    a.next = b

    expect(isPalindrome(a)).toEqual(true)
})

test('3 item example', () => {
    let a = new ListNode(1)
    let b = new ListNode(3)
    let c = new ListNode(1)

    a.next = b
    b.next = c

    expect(isPalindrome(a)).toEqual(true)
})

test('5 item example', () => {
    let a = new ListNode(1)
    let b = new ListNode(2)
    let c = new ListNode(3)
    let d = new ListNode(2)
    let e = new ListNode(1)

    a.next = b
    b.next = c
    c.next = d
    d.next = e

    expect(isPalindrome(a)).toEqual(true)
})


test('example 2', () => {
    let a = new ListNode(1)
    let b = new ListNode(2)

    a.next = b
   
    expect(isPalindrome(a)).toEqual(false)
})
