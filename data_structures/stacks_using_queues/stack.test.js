const Stack = require('./stack')

describe('Stack Using Queues', () => {
    let myStack = new Stack()

    test('passes examples', () => {

        expect(myStack.push(1)).toEqual(null)
        expect(myStack.top()).toEqual(1)
        expect(myStack.push(2)).toEqual(null)
        expect(myStack.top()).toEqual(2)

        expect(myStack.pop()).toEqual(2)
        expect(myStack.empty()).toEqual(false)  
    })
})