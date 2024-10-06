
// --------------------- Insertion Sort ----------------------

function insertionSortdesce(arr) {

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] < num) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = num
    }

}

const arr = [10, 20, -4, 0, 8, -5, 2, 6]

insertionSortdesce(arr)

console.log(arr)

//output : [-5,-4,0,2,6,8,10,20]