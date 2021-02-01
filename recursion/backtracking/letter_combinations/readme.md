# [Letter Combinations](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

## Notes

This solutions uses backtracking recursion, while managing the JavaScript's String API. The general approach is to explore each of the possible key values from the digit (ie. "2" creates "abc" values) and then build each candidate with backtracking and recursion. The recursive calls build up the candidate incrementally, and once it reaches the candidate exit condition (candidate reaches max length), it adds it to the solutions. That branch of the algorithm terminates and the next value is explored. 

Challenges here were splitting up strings using the spread operator, iterating, and carefully adding managing characters without a stock insert method between strings or arrays in JavaScript.