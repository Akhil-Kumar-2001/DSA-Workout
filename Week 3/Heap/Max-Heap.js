class maxHeap {
    constructor() {
        this.heap = []
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    // Restore the max-heap property by moving the element at index up
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] <= this.heap[parentIndex]) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }

    // Remove and return the maximum element (root) from the heap
    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return max
    }
    
    // Restore the max-heap property by moving the element at index down
    bubbleDown(index) {
        let length = this.heap.length
        while (true) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let largest = index

            if (leftIndex < length && this.heap[leftIndex] > this.heap[largest]) {
                largest = leftIndex
            }
            if (rightIndex < length && this.heap[rightIndex] > this.heap[largest]) {
                largest = rightIndex
            }
            if (largest === index) {
                break
            }
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            index = largest
        }
    }
}

let maxheap = new maxHeap()
maxheap.insert(10)
maxheap.insert(20)
maxheap.insert(5)
maxheap.insert(30)
console.log("maxheap array:", maxheap.heap)
console.log(maxheap.remove())
console.log("maxheap array after remove:", maxheap.heap)