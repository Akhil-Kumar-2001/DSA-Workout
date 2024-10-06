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

    Insert(word) {
        let curr = this.root
        word = word.toLowerCase()
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true
    }

    search(word) {
        let node = this.root
        word = word.toLowerCase()
        for (let char of word) {
            if (!node.children[char]) return false
            node = node.children[char]
        }
        return node.endOfWord
    }

    startsWith(prefix) {
        let node = this.root
        prefix = prefix.toLowerCase()
        for (let char of prefix) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }
}


const trie = new Trie()
trie.Insert("apple")
trie.Insert("app")
trie.Insert("banana")
trie.Insert("band")
trie.Insert("bandit")

console.log(trie.startsWith("APP"))