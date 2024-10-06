// Check the number is power of 2 or not

function powerOfTwo(n){
    if(n < 1) {
        return false
    }
    while( n > 1 ){
        if( n % 1 !== 0 ){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(powerOfTwo(1))
console.log(powerOfTwo(5))
console.log(powerOfTwo(8))


// Big-O  = O(logn)