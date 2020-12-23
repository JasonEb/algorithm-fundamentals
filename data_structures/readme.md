# Abstract Data Structures

Stack and Queue are one of the fundamental data structures. Important to know that stacks correspond with function calls and recursion. 

### Queues and Stacks
BFS uses queue, DFS uses stack.

#### Stacks
LIFO. Used for tracing back to previous elements or operations.
```
class Stack:
    def __init__(self):
        self.stack = []
    def pop(self):
        if self.is_empty():
            return None
        else:
            return self.stack.pop()
    def push(self,val):
        return self.stack.append(val)
    def peak(self):
        if self.is_empty():
            return None
        else:
            return self.stack[-1]
    def size(self):
        return len(self.stack)
    def is_empty(self):
        return self.size() == 0
```
#### Queues
FIFO. Often used in BFS or implementing caches.
```
class Queue:
    def __init__(self):
        self.queue = []
    def enqueue(self,val):
        self.queue.insert(0,val)
    def dequeue(self):
        if self.is_empty():
            return None
        else:
            return self.queue.pop()
    def size(self):
        return len(self.queue)
    def is_empty(self):
        return self.size() == 0
```

## [Implementing Stacks using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

#### Implementing Stacks using Queues
__Method 1__ (By making push operation costly):
```
push(s, x)          // x is the element to be pushed and s is stack
  1) Enqueue x to q2
  2) One by one dequeue everything from q1 and enqueue to q2.
  3) Swap the names of q1 and q2 
// Swapping of names is done to avoid one more movement of all elements 
// from q2 to q1. 

pop(s)
  1) Dequeue an item from q1 and return it.
```

__Method 2__ (By making pop operation costly):
```
push(s,  x)
  1) Enqueue x to q1 (assuming size of q1 is unlimited).

pop(s)  
  1) One by one dequeue everything except the last element from q1 and enqueue to q2.
  2) Dequeue the last item of q1, the dequeued item is result, store it.
  3) Swap the names of q1 and q2
  4) Return the item stored in step 2.
// Swapping of names is done to avoid one more movement of all elements 
// from q2 to q1.
```

## [Implement Queues using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)

#### Implementing Queues using Stacks
__Method 1__ (By making enQueue operation costly)
```
enQueue(q, x)
  1) While stack1 is not empty, push everything from stack1 to stack2.
  2) Push x to stack1 (assuming size of stacks is unlimited).
  3) Push everything back to stack1.

deQueue(q)
  1) If stack1 is empty then error.
  2) Pop an item from stack1 and return it
```

__Method 2__ (By making deQueue operation costly)
```
enQueue(q,  x)
  1) Push x to stack1 (assuming size of stacks is unlimited).

deQueue(q)
  1) If both stacks are empty then error.
  2) If stack2 is empty
       While stack1 is not empty, push everything from stack1 to stack2.
  3) Pop the element from stack2 and return it.
```


### References
https://github.com/amandazhuyilan/Breakfast-Burrito