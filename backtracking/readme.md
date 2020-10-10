# Backtracking
The idea behind backtracking is to explore all the potential solutions for a problem, in a smart way. It builds candidate solutions incrementally and as soon as it determines that a candidate solution is not viable, it backtracks to a previous state and tries the next candidate.

Backtracking problems present you with a list of choices. Should you:

Place this piece in this position?
Add this number to the set?
Try this number in this position next?

After you have picked one of the options, it will get you a new list of choices, until you reach a state where there are no more choices: either you arrived at a solution or there is no solution.

Visually, you are moving from the root of a tree with every choice, until you get to a leaf. The basic high-level recipe (in pseudocode) for a backtracking algorithm is the following:

```C++
//C++
boolean backtracking(Node n){
    if(isLeaf(n) {
        if(isSolution(candidate)){
            sol.add(candidate);
            return true;
        } else {
            return false;
        }
    }

    //Explore all children
    for(child in n) {
        if(backtracking(child))
            return true;
    }

    return false;
}
```

This can of course change depending on the problem:

- If you need all solutions, the helper function returns nothing (void) to avoid stopping when we find the first solution.
- To backtrack, you may have to bring your program to a previous state before you can move forward
- After you choose a child, you need to detect if the candidate solution is viable or not: the definition of viable depends on the problem

But the core idea is the same: examine, in a systematic way, all paths and backtrack as soon as the current path is no longer viable.