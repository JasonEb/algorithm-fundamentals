const {sortedSquares} = require('./sortedSquares')

test('it passes example 1', ()=>{
    input =[-4,-1,0,3,10]
    output = [0,1,9,16,100]
    
    expect(sortedSquares(input)).toEqual(output)
})

test('it passes example 2', ()=>{
    input = [-7,-3,2,3,11]
    output = [4,9,9,49,121]
    
    expect(sortedSquares(input)).toEqual(output)
})

test('it passes example 3', ()=>{
    input = [1,2,3,4]
    output = [1,4,9,16]
    
    expect(sortedSquares(input)).toEqual(output)
})

test('it passes example 4', ()=>{
    input = [-4,-3,-2,-1]
    output = [1,4,9,16]
    
    expect(sortedSquares(input)).toEqual(output)
})