class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();

console.log(queue.isEmpty());  //output : true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());  //output : 3
queue.print();    //output : 10,20,30
console.log(queue.dequeue());  //output : 10
console.log(queue.peek());    //output : 20
queue.print();   //output : 20,30
