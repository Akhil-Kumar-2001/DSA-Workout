// heapsort using min-heap for descending order

class MinHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] >= this.heap[parentIndex]) {
                break
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }

    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return min
    }

    bubbleDown(index) {
        let length = this.heap.length
        while (true) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let smallest = index
            if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex
            }
            if (rightIndex < length &&o,iklpikik, this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex
            }
            if (smallest === index) {
                break
            }
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest
        }
    }
}

function heapSort(array) {
    let minheap = new MinHeap()
    let sortedArry = []
    // Insert all elements into the heap
    for (let value of array) {
        minheap.insert(value)
    }

    while (minheap.heap.length > 0) {
        sortedArry.push(minheap.remove())
    }
    return sortedArry
}

    let array = [4, 10, 3, 5, 1, 7];
console.log(heapSort(array))