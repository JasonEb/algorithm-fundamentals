const Trie = require('./tries.js')

describe('Trie Data Structure Tests', () =>{

    let trie = new Trie()
    
    test('it inserts', () => {
        trie.insert("apple")
        expect(trie.search("apple")).toBe(true)  
    })

    test('it recognizes no searches', () => {
        expect(trie.search("app")).toBe(false)
    })

    test('it recognizes prefixes', () => {
        expect(trie.startsWith("app")).toBe(true)
        trie.insert("app") 
        expect(trie.search("app")).toBe(true)  
    })
})