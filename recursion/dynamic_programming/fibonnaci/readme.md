# Fibonnaci

This seems to be a good introductory problem to show top-down and bottom-up solutions for fibonnaci.

## Notes
It seems that fibonnaci is a commonly cited example for Dynamic Programming. I think what is a challenge however, is that in the more traditional approach of learning programming, recursion is more emphasized. The more popular optimized implementations of fibonnaci relies on iteration. Iteration is a more intuitive approach, so I believe many programmers can go straight into the optimized version without visiting the dynamic programming process.

Overlapping problems seem to point to cached results discovered within a function call. When creating it with fibonnaci, there are two threads utilized to  split up the work. The first thread helps build the cache for future recursive calls to rely on. That's already a huge step up, but then we can refactor into a bottom's up solution with that cache. 

