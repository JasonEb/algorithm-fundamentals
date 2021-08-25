const { MinStack } = require('./minStack')

test('example 1', () => {
    let minStack = new MinStack()

    minStack.push(-2)
    minStack.push(0)
    expect(minStack.getMin()).toEqual(-2)
    minStack.push(-3)
    expect(minStack.getMin()).toEqual(-3)
})

test('large numbers example', () => {
    let minStack = new MinStack()
    // push[2147483646] null null
    minStack.push(2147483646)
    // push[2147483646] null null
    minStack.push(2147483646)
    // push[2147483647] null null
    minStack.push(2147483647)
    // top[] 2147483647 2147483647
    expect(minStack.top()).toEqual(2147483647)
    // pop[] null null
    minStack.pop()
    // getMin[] 2147483646 2147483646
    expect(minStack.getMin()).toEqual(2147483646)
    // pop[] null null
    minStack.pop()
    // getMin[] 2147483646 2147483646
    expect(minStack.getMin()).toEqual(2147483646)
    // pop[] null null
    minStack.pop()
    // push[2147483647] null null
    minStack.push(2147483647)
    // top[] 2147483647 2147483647
    expect(minStack.top()).toEqual(2147483647)
    // getMin[] 2147483646 2147483647
    expect(minStack.getMin()).toEqual(2147483647)
    // E R R O R
    // push[-2147483648] null null
    // top[] - 2147483648 - 2147483648
    // getMin[] - 2147483648 - 2147483648
    // pop[] null null
    // getMin[] 2147483646 2147483647
    // E R R O R
})
