const { mergeTwoLists } = require('./mergeTwoList')

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const printList = (node) => {
    let result = []
    while(tail != null) {
        result.push(tail.val)
        tail = tail.next
    }    
}

test('it passes example 1', () => {
    let a = new ListNode(1)
    a.next = new ListNode(2)
    a.next.next = new ListNode(4)

    let b = new ListNode(1)
    b.next = new ListNode(3)
    b.next.next = new ListNode(4)

    let c = mergeTwoLists(a,b)
    let output = [1,1,2,3,4,4]
    let c_output = []

    while(c != null) {
        c_output.push(c.val)
        c = c.next
    }
    
    expect(c_output).toEqual(output)
})

test('it passes basic case 1', () => {
    let a = new ListNode(2)

    let b = new ListNode(1)

    let c = mergeTwoLists(a,b)
    let output = [1,2]
    let c_output = []

    while(c != null) {
        c_output.push(c.val)
        c = c.next
    }
    
    expect(c_output).toEqual(output)
})

test('it passes basic case 2', () => {
    let a = new ListNode(3)

    let b = new ListNode(1)
    b.next = new ListNode(2)

    let c = mergeTwoLists(a,b)
    let output = [1,2,3]
    let c_output = []

    while(c != null) {
        c_output.push(c.val)
        c = c.next
    }
    
    expect(c_output).toEqual(output)
})

// test('it passes edge case 2', () => {
//     let a = new ListNode()

//     let b = new ListNode()

//     let c = mergeTwoLists(a,b)
//     let output = []
//     let c_output = []

//     while(c != null) {
//         c_output.push(c.val)
//         c = c.next
//     }
    
//     expect(c_output).toEqual(output)
// })

// test('it passes edge case 3', () => {
//     let a = new ListNode()

//     let b = new ListNode(2)

//     let c = mergeTwoLists(a,b)
//     let output = [2]
//     let c_output = []

//     while(c != null) {
//         c_output.push(c.val)
//         c = c.next
//     }
    
//     expect(c_output).toEqual(output)
// })


