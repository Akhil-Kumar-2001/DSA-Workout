class minHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    // Restore the min-heap property by moving the element at index up
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

    // Remove and return the minimum element (root) from the heap

    remove() {
        if (this.heap.length === null) return null
        if (this.heap.length === 1) return this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return min
    }

    // Restore the min-heap property by moving the element at index down

    bubbleDown(index) {
        let length = this.heap.length
        while (true) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let smallest = index

            if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex
            }
            if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
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

let minheap = new minHeap()
minheap.insert(10)
minheap.insert(20)
minheap.insert(5)
minheap.insert(30)

console.log("heap array:", minheap.heap)
console.log(minheap.remove(5))
console.log("heap array after delete:", minheap.heap)