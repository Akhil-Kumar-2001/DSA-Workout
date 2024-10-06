class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    // for suffix trie the insert become

    Insert(word) {
        for (let i = 0; i < word.length; i++) {
            let curr = this.root
            for (let j = i; j < word.length; j++) {
                let char = word[j]
                if (!curr.children[char]) {
                    curr.children[char] = new TrieNode()
                }
                curr = curr.children[char]
            }
            curr.endOfWord = true
        }
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }

    endsWith(suffix) {
        let node = this.root
        for (let char of suffix) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }
}

const trie = new Trie()
trie.Insert("mango")
trie.Insert("man")
trie.Insert("catepiller")
trie.Insert("cat")
trie.Insert("car")

console.log(trie.search("man"))
console.log(trie.endsWith("go"))