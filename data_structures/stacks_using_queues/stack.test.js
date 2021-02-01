const Stack = require('./stack')
const Stack2 = require('./stack2')

describe('Stack Using Queues w/ costly push', () => {
    let myStack = new Stack()

    test('passes examples', () => {
        expect(myStack.empty()).toEqual(true)  
        expect(myStack.push(1)).toEqual(null)
        expect(myStack.top()).toEqual(1)
        expect(myStack.push(2)).toEqual(null)
        expect(myStack.top()).toEqual(2)

        expect(myStack.pop()).toEqual(2)
        expect(myStack.empty()).toEqual(false)  
    })
})

describe('Stack Using Queues w/ costly pop', () => {
    let myStack = new Stack2()

    test('passes examples', () => {
        expect(myStack.empty()).toEqual(true)  
        expect(myStack.push(1)).toEqual(null)
        expect(myStack.top()).toEqual(1)
        expect(myStack.push(2)).toEqual(null)
        expect(myStack.top()).toEqual(2)

        expect(myStack.pop()).toEqual(2)
        expect(myStack.empty()).toEqual(false)  
    })
})