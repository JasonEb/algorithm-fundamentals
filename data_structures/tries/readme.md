# [Tries](https://leetcode.com/problems/implement-trie-prefix-tree/)
Implement a trie with insert, search, and startsWith methods.

Example
```javascript

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

## Notes
A `Trie` is a tree with 26 nodes representing a letter from the Alphabet, in lowercase. As words are added to the tree, each node will grow. The final "letter" or node of the word will have it marked to indicate that word in particular exists in the Trie. 

Insert works by examining each node and filling the characters in, while marking isWord. Search and startswith both operate by probing the tree to see which branches match in both value and if it's valid with isWord. These operations are O(M) in Time and Space, where M represents the total amount of characters in the input of insert, search, and startsWith. 

## References
[Data Structure: Tries](https://www.youtube.com/watch?v=giiaIofn31A)
[JavaScript Trie Implementation](https://www.softnami.com/posts_pr/trie-tree-with-javascript.html)