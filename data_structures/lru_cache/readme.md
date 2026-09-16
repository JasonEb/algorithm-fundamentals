# [LRU Cache](https://leetcode.com/problems/lru-cache/)

```
Design a data structure that follows the constraints of a Least Recently
Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size
  capacity.
- int get(int key) Return the value of the key if the key exists,
  otherwise return -1.
- void put(int key, int value) Update the value of the key if the key
  exists. Otherwise, add the key-value pair to the cache. If the number
  of keys exceeds capacity from this operation, evict the least recently
  used key.

The functions get and put must each run in O(1) average time complexity.
```

**Example**

```
LRUCache(2)
put(1, 1)  # cache is {1=1}
put(2, 2)  # cache is {1=1, 2=2}
get(1)     # returns 1
put(3, 3)  # LRU key was 2, evicts key 2, cache is {1=1, 3=3}
get(2)     # returns -1 (not found)
put(4, 4)  # LRU key was 1, evicts key 1, cache is {4=4, 3=3}
get(1)     # returns -1 (not found)
get(3)     # returns 3
get(4)     # returns 4
```

Also a common practical (non-LeetCode) system-design interview question, not just a LeetCode Medium.
