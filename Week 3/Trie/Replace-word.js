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

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0)
    }

    deleteHelper(node, word, index) {
        if (index === word.length) {
            if (!node.endOfWord) {
                return false
            }
            node.endOfWord = false
            return Object.keys(node.children).length === 0
        }
        let char = word[index]
        if (!node.children[char]) {
            return false;
        }
        let deleteChild = this.deleteHelper(node.children[char], word, index + 1)
        if (deleteChild) {
            delete node.children[char]
            return Object.keys(node.children).length === 0 && !node.endOfWord
        }
        return false
    }

    // replace the word in trie

    replace(oldWord, newWord) {
        if (this.search(oldWord)) {
            this.delete(oldWord)
            this.Insert(newWord)
        }
    }
}

const trie = new Trie()
trie.Insert("catepiller")
trie.Insert("cat")
trie.Insert("car")
trie.Insert("dog")

trie.replace("dog", "dove")