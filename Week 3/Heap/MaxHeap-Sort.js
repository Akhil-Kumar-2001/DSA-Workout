// heapsort using maxheap for ascending oreder
class maxHeap {
    constructor() {
        this.heap = []
    }

    Insert(value) {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] <= this.heap[parentIndex]) {
                break
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }

    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return max
    }

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

function maxSort(array) {
    let maxsort = new maxHeap()
    let sortedArr = []
    for (let value of array) {
        maxsort.Insert(value)
    }
    while (maxsort.heap.length > 0) {
        sortedArr.push(maxsort.remove())
    }
    return sortedArr
}

const array = [4, 10, 3, 5, 1, 7]
console.log(maxSort(array))