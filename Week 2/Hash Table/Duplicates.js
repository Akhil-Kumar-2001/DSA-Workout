// check duplicates in hash table

class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }

    set(key) {
        if (this.get(key)) {
            return true
        } else {
            const index = this.hash(key)
            this.table[index] = 1
            return this.table[index]
        }
    }
}   

const hash = new HashTable(20)
hash.set(1)
hash.set(2)
console.log(hash.set(1))
console.log(hash.set(2))