const { mergeTwoLists } = require('./mergeTwoList')

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
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