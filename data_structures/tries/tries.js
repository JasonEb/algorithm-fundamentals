class Node {
    constructor (char) {
        this.isWord = false
        this.children = new Array(26).fill(null)
        this.char = char || '\0'
    }
}

class Trie {
    constructor () {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root
        //loop through all the characters
        for (let i = 0; i < word.length; ++i) {
            //extract character
            //to select an index 1 - 25
            const idx = parseInt(word[i], 36) - 10
            let c = word[idx]

            if (curr.children[idx] === null) {
                const tmp = new Node(c)
                curr.children[idx] = tmp
                curr = tmp
            } else {
                //goes down the tree
                curr = curr.children[idx]
            }
        }

        curr.isWord = true
    }

    getNode(word) {
        let curr = this.root

        for (let i = 0; i < word.length; ++i) {
            let c = word.charAt(i)
            const idx = parseInt(word[i], 36) - 10
            if ( curr.children[idx] == null ) { return null}
            curr = curr.children[idx]
        }
        return curr
    }

    search(str) {
        let node = this.getNode(str)

        return node != null && node.isWord
    }

    startsWith(str) {
        let node = this.getNode(str)
        return node != null
    }
}

module.exports = Trie