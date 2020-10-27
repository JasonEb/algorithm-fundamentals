const {fibonnaci} = require('./fibonnaci')

test('it does base case', () =>{
    expect(fibonnaci(1)).toEqual(1)
})

test('it does fibonnaci(2)', () =>{
    expect(fibonnaci(2)).toEqual(1)
})

test('it does fibonnaci(3)', () =>{
    expect(fibonnaci(3)).toEqual(2)
})

test('it does fibonnaci(4)', () =>{
    expect(fibonnaci(4)).toEqual(3)
})