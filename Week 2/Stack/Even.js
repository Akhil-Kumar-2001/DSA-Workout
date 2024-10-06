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

    print() {
        console.log(this.items)
    }

    isEmpty() {
        return this.items.length === 0
    }

    getSize() {
        return this.item.length
    }

    evenStack() {
        const evenStack = new Stack()
        let tem = []
        while (!this.isEmpty()) {
            let item = this.pop()
            if (item % 2 === 0) {   
                evenStack.push(item)
            }
            tem.push(item)
        }
        while (tem.length > 0) {
            this.push(tem.pop())
        }
        return evenStack
    }

}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(30)
stack.push(75)
stack.push(103)
stack.push(10)
stack.print()  //output : 20,30,75,103,10
console.log(stack.evenStack())  //output : 10,20,30,75,103,