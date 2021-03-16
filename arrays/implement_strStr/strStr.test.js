/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const {strStr} = require('./strStr')

test('examples 1', () => {
    let haystack = "hello"
    let needle = "ll"

    expect(strStr(haystack,needle)).toEqual(2)
})

test('examples 1', () => {
    let haystack = ""
    let needle = "a"

    expect(strStr(haystack,needle)).toEqual(-1)
})