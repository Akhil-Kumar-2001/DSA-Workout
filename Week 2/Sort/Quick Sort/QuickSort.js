function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[j] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return arr
}

const arr = [85, 746, 52, 55, -82, 2, -566]

console.log(bubbleSort(arr)) // output  : [-566,-82,2,52,55,85,746]