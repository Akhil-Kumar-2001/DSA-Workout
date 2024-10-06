function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
    const sortedArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}


const num = [85, 746, 52, 55, -82, 2, -566]

console.log(mergeSort(num));

//output : [-566, -82,  2,52,  55, 85,746 ]