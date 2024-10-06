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
        return node.endOfWord
    }

    // print word as array

    printWords(node = this.root, currWord = "", res = []) {
        if (node.endOfWord) {
            res.push(currWord)
        }
        for (let char in node.children) {
            this.printWords(node.children[char], currWord + char, res)
        }
        return res
    }

    // auto complete

    autoComplete(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectWord(node, word, list)
        return list 
    }

    collectWord(node, word, list) {
        if (node.endOfWord) {
            list.push(word)
        }
        for (let char in node.children) {
            this.collectWord(node.children[char], word + char, list)
        }
    }

    // delete operation
    delete(word) {
        this.deleteHelper(this.root, word, 0)
    }

    deleteHelper(node, word, index) {
        if (index === word.length) {
            if (!node.endOfWord) {
                return false
            }
            node.endOfWord = false;
            return Object.keys(node.children).length === 0
        }
        let char = word[index]
        if (!node.children[char]) return false
        let deleteChild = this.deleteHelper(node.children[char], word, index + 1)
        if (deleteChild) {
            delete node.children[char]
            return Object.keys(node.children).length === 0 && !node.endOfWord
        }
        return false
    }
}


let trie = new Trie()
trie.Insert("apple")
trie.Insert("app")
trie.Insert("banana")
trie.Insert("band")
trie.Insert("bandit")


console.log(trie.search("apple"))
console.log(trie.search("ale"))
console.log(trie.search("band"))
console.log(trie.printWords())
console.log(trie.autoComplete("ban"))
console.log(trie.autoComplete("bat"))
trie.delete("app")
console.log(trie.printWords())
console.log(trie.search("app"))