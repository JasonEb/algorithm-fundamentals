# [Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/)

```
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
```

### Two Pointer Method

```
    //have 2 left and right pointers
    //move left pointer until it's no longer greater than the previous
    //move right pointer until it's no longer lesser than the previous
    // if l == r 
    // it must be a mountain
```

The approach is to walk two points towards the middle and stop when it's no longer ascending. Then we examine if the pointer indices are the same, while considering edge cases. 