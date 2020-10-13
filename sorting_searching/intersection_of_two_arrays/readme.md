# Intersection of Two Arrays

The implementation utilizes a two-pointer method and a sorted approach. With sorted lists, the actual search would be O(log_n). However, sorting up front makes it overall O(n log n).

Sorting in this case was achieved using the JavaScript `sort()` api, which revealed that the function sorts *alphabetically* and needs a comparator to sort numbers. It's also sorting in-place, so the array called will be changed. Due to JavaScript's interpretation, running a primitive `string` with a subtraction operator will typecast into a numerical check. 

```Javascript
let arr = [2,3,5,7,9,11]

//BAD
arr.sort()
// results into [11, 2, 3, 5, 7, 9]

//GOOD
arr.sort( (a, b) => a - b)
// results into [2, 3, 5, 7, 9, 11]
```