
// --------------------- insertion Sort ----------------------

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > num) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = num
    }
}

const arr = [1, 4, -5, 8, -6, 5, 1, 3, 9]
insertionSort(arr)
console.log(arr)