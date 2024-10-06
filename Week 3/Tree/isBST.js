class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            return this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                return this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                return this.insertNode(root.right, newNode)
            }
        }
    }

    isBST(root, min = -Infinity, max = Infinity) {
        if (root === null) {
            return true;
        }
        if (root.value <= min || root.value >= max) {
            return false
        }
        return this.isBST(root.left, min, root.value) &&
            this.isBST(root.right, root.value, max)
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(2);

console.log(bst.isBST(bst.root))