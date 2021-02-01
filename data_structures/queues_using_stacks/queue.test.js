const Queue = require('./queue')
const Queue2 = require('./queue2')

describe('Queue Using Queues w/ costly pop', () => {
    let myQueue = new Queue()

    test('passes examples', () => {
        expect(myQueue.empty()).toEqual(true)

        //push 3 (3)
        expect(myQueue.push(3)).toEqual(null)
        expect(myQueue.peek()).toEqual(3)
        expect(myQueue.empty()).toEqual(false)

        //push 2 (3 2)
        expect(myQueue.push(2)).toEqual(null)
        expect(myQueue.peek()).toEqual(3)
        expect(myQueue.empty()).toEqual(false)

        //push 1 (3 2 1)
        expect(myQueue.push(1)).toEqual(null)
        expect(myQueue.peek()).toEqual(3)
        expect(myQueue.empty()).toEqual(false)  

        //pop 
        expect(myQueue.pop()).toEqual(3)
        expect(myQueue.peek()).toEqual(2)
        expect(myQueue.pop()).toEqual(2)
        expect(myQueue.peek()).toEqual(1)
        expect(myQueue.empty()).toEqual(false)  

        expect(myQueue.pop()).toEqual(1)
        expect(myQueue.empty()).toEqual(true)  
    })
})

// describe('Queue Using Queues w/ costly pop', () => {
//     let myQueue = new Queue2()

//     test('passes examples', () => {
//         expect(myQueue.empty()).toEqual(true)  
//         expect(myQueue.push(1)).toEqual(null)
//         expect(myQueue.top()).toEqual(1)
//         expect(myQueue.push(2)).toEqual(null)
//         expect(myQueue.top()).toEqual(2)

//         expect(myQueue.pop()).toEqual(2)
//         expect(myQueue.empty()).toEqual(false)  
//     })
// })