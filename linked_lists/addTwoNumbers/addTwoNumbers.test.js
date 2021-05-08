const { addTwoNumbers, ListNode } = require('./addTwoNumbers')

test('example 1', () => {
    let a = new ListNode(2)
    a.next = new ListNode(4)
    a.next.next = new ListNode(3)
    
    let b = new ListNode(5)
    b.next = new ListNode(6)
    b.next.next = new ListNode(4)
    
    let result = addTwoNumbers(a,b)
    expect(result.val).toEqual(7)
    result = result.next
    expect(result.val).toEqual(0)
    result = result.next
    expect(result.val).toEqual(8)
})

test('123 + 456', () => {
    let a = new ListNode(3)
    a.next = new ListNode(2)
    a.next.next = new ListNode(1)
    
    let b = new ListNode(6)
    b.next = new ListNode(5)
    b.next.next = new ListNode(4)
    
    let result = addTwoNumbers(a,b)
    expect(result.val).toEqual(9)
    result = result.next
    expect(result.val).toEqual(7)
    result = result.next
    expect(result.val).toEqual(5)
})





test('342 + 46', () => {
    let a = new ListNode(2)
    a.next = new ListNode(4)
    a.next.next = new ListNode(3)
    
    let b = new ListNode(6)
    b.next = new ListNode(4)
    
    let result = addTwoNumbers(a,b)
    expect(result.val).toEqual(8)
    result = result.next
    expect(result.val).toEqual(8)
    result = result.next
    expect(result.val).toEqual(3)
})




test('15 + 6', () => {
    //15 + 6 = 21
    let a = new ListNode(5)
    a.next = new ListNode(1)

    
    let b = new ListNode(6)

    let result = addTwoNumbers(a,b)
    expect(result.val).toEqual(1)
    result = result.next
    expect(result.val).toEqual(2)
})

test('example 2', () => {
    let a = new ListNode(0)
    let b = new ListNode(0)

    let result = addTwoNumbers(a,b)
    expect(result.val).toEqual(0)
})


test('example 3', () => {
    let a = new ListNode(9)
    let b = a
    for(let i = 0; i < 6; i++) {
        b.next = new ListNode(9)
        b = b.next
    }
    let x = new ListNode(9)
    b = x
    for(let i = 0; i < 3; i++) {
        b.next = new ListNode(9)
        b = b.next
    }

    let result = addTwoNumbers(a,x)
    expect(result.val).toEqual(8)
    result = result.next
    expect(result.val).toEqual(9)
    result = result.next
    expect(result.val).toEqual(9)
    result = result.next
    expect(result.val).toEqual(9)
    result = result.next
    expect(result.val).toEqual(0)
    result = result.next
    expect(result.val).toEqual(0)
    result = result.next
    expect(result.val).toEqual(0)
    result = result.next
    expect(result.val).toEqual(1)
    result = result.next
})