
// --------------------- Merge Sort in Decending order ----------------------

function mergeSortdesce(arr) {

    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSortdesce(leftArr), mergeSortdesce(rightArr))

}

function merge(leftArr, rightArr) {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] >= rightArr[0]) {
            sortedArr.push(leftArr.shift())

        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}


const arr = [9, 0, -5, 6, 2, -8, 18]

console.log(mergeSortdesce(arr))

//output : [-8,-5,0,2,6,9.18]