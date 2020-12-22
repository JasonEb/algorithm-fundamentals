const Queue = require('./queue')

describe('Queue', () =>{
    let queue = Queue.new()

    expect(queue).toBeTruthy()
})