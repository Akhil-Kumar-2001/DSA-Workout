
//---------- sort the array of strings using quick sort ------------------------

function strQuick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        } 
    }
    return [...strQuick(left),pivot,...strQuick(right)]

}

const arr = ['apple','orange','pineapple','grape']

console.log(strQuick(arr))