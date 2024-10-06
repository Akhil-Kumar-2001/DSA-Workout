

// Remove any node from stack

// Remove middle node from stack

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }

    getSize() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }

    // remove any node from stack
    deleteNode(value) {
        const tempStack = []

        while (!this.isEmpty()) {
            const item = this.pop()
            if (item !== value) {
                tempStack.push(item)
            }
        }
        while (tempStack.length > 0) {
            this.push(tempStack.pop())
        }
    }

    //remove middle node from stack

    removeMid() {
        const size = this.getSize()
        if (size === 0) {
            return null
        }
        let mid = Math.floor(size / 2)
        const tempStack = []

        for (let i = 0; i < size; i++) {
            let item = this.pop()
            if (i !== mid) {
                tempStack.push(item)
            }
        }
        while (tempStack.length > 0) {
            this.push(tempStack.pop())
        }
    }
}

const stack = new Stack()

stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.print()
stack.deleteNode(30)
stack.removeMid()
stack.print()