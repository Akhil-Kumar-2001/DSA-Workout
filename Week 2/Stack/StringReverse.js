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
    peek() {
        return this.items[this.items.length - 1]
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
}
function reverseString(str) {
    const stack = new Stack()
    let rev = ''
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    while (!stack.isEmpty()) {
        rev += stack.pop()
    }
    return rev
}

console.log(reverseString("original"))