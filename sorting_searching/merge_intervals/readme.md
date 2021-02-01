# [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
Given a collection of intervals, merge all overlapping intervals.

```
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

## Notes 
This relied on a sorted approach, but most of the effort is done with a two-pointer technique. The intervals are scanned one by one, then during the iteration future intervals are examined to see if they can merge. Bugs occurred primarily by not paying attention to loop conditions and tracking the second pointer. 