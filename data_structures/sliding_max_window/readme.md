# Max Sliding Window
We will use the dequeue to store indices, not values. We need this to know what elements are still part of the sliding window. For every iteration, there are four things to do.

- Remove elements in the dequeue which are outside of the current sliding window (one per iteration)
- Remove all elements in the dequeue which are smaller than the current element we are at since they cannot represent the max of that sliding window
- Add the current element to the deque
- Once we have completed the first sliding window, we can start adding elements to our solution. By design, the element at the front of our dequeue will contain the maximum of the sliding window, which is what we are interested in.

## Notes
This was a good exercise in examining the benefits of a data structure engineered with intent. The initial solution involved exhaustively looking at every window as it slide. The more optimized algorithm approach still walks through the windows, but the data structure encapsulates the algorithm for tracking max values without looking throughout the whole window. 

I think the big lesson here is that in an naive implementation - can a data structure save on Time complexity with nested loops?

### References
[Dequeue in JavaScript](https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b)

[Visualization of Algorithm](https://www.youtube.com/watch?v=ShbRCjvB_yQ)