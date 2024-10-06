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
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true
    }

    countWord(node = this.root) {
        let count = 0
        if (node.endOfWord) {
            count++
        }
        for (let char in node.children) {
            count += this.countWord(node.children[char])
        }
        return count
    }

}

const trie = new Trie()

trie.Insert("catepiller")
trie.Insert("cat")
trie.Insert("car")
trie.Insert("dog")

console.log(trie.countWord())