// find the Value in array

function linear(nums ,target){
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == target){
            return i
        }
    }
    return -1
}

console.log(linear([-2,4,5,7,8,9],7))