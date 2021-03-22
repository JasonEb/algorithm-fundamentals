const {reverseString} = require('./reverseString')

test('example 1', () => {
    let str = "hello".split('')
    reverseString(str)
    expect(str).toEqual(["o","l","l","e","h"])
})

test('example 2', () => {
    let str = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
    reverseString(str)
    let output = ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
    expect(str).toEqual(output)
})