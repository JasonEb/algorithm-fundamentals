const Queue = require('./queue')

describe('Queue', () =>{
    let queue = new Queue()

    expect(queue).toBeTruthy()

    test('it enqueues', ()=>{
        queue.enqueue(1)
        expect(queue.peek()).toEqual(1)
        queue.enqueue(10)
        expect(queue.peek()).toEqual(10)
    })

    test('it dequeues', ()=>{
        queue.dequeue()
        queue.enqueue(2)
        expect(queue.peek()).toEqual(2)
    })
})