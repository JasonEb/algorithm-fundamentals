const Stack = require('./stack')

describe("Stack", () => {
    let stack = new Stack()

    expect(stack).toBeTruthy()

    test('pushes elements', () => {
        stack.push(1)
        expect(stack.peek()).toEqual(1)
    })

    test('pops elements', () => {
        stack.push(100)
        expect(stack.peek()).toEqual(100)
        stack.pop()
        expect(stack.peek()).toEqual(1)
    })
})