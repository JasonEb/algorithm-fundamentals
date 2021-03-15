const {addBinary} = require('./addBinary')

// test('example 1', () => {
//     let a = "11"
//     let b = "1"

//     expect(addBinary(a,b)).toEqual("100")
// })

// test('example 2', () => {
//     let a = "1010"
//     let b = "1011"

//     expect(addBinary(a,b)).toEqual("10101")
// })

test('all 1s case', () => {
    let a = "1111"
    let b = "1111"

    expect(addBinary(a,b)).toEqual("11110")
})