
// check the BST Tree is empty

class  Node {
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class Binary{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
}

const BST = new Binary()

console.log('Tree is empty ?',BST.isEmpty())