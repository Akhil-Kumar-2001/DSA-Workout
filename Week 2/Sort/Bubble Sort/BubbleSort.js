// --------------------- Bubble sort ----------------------

function bubbleSort(arr) {

    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

console.log(bubbleSort([10, 2, -3, 5, -7, 20, 9]))

//output : [ -7 , -3 , 2 , 5 , 9 , 10 , 20 ]

