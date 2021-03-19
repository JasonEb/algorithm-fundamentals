const { reverseWords } = require('./reverseWords')

/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

test('example 1', () => {
    let s = "Let's take LeetCode contest"

    expect(reverseWords(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
})

test('example 2', () => {
    let s = "God Ding"

    expect(reverseWords(s)).toEqual("doG gniD")
})