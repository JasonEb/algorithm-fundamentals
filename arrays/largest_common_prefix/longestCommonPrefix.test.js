const {longestCommonPrefix} = require('./longestCommonPrefix')

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

test('example 1', () => {
    let strs = ["flower","flow","flight"]

    expect(longestCommonPrefix(strs)).toEqual("fl")
})

test('example 2', () => {
    let strs = ["dog","racecar","car"]

    expect(longestCommonPrefix(strs)).toEqual("")
})

test('returning letters edegecase', () => {
    let strs = ["aca","cba"]

    expect(longestCommonPrefix(strs)).toEqual("")
})