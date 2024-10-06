// Reverse an Array

function reverseArray(arr) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]


// Find the Maximum Element

function max(num) {
    let max = num[0];
    for(let i = 1; i < num.length; i++) {
        if(num[i] > max) {
            max = num[i];
        }
    }
    return max;
}

let num = [1, 2, 3, 4, 5];
console.log(max(num)); // Output: 5

// Rotate an Array

function rotateArray(nums, k) {
    k = k % nums.length;
    return nums.slice(-k).concat(nums.slice(0, -k));
}

let nums = [1, 2, 3, 4, 5];
console.log(rotateArray(nums, 2)); // Output: [4, 5, 1, 2, 3]
