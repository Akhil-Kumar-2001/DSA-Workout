
// Fibonacci sequence in Recursion

function Fibonacci(n){
    if (n < 2) {
        return n
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(1))
console.log(Fibonacci(5))
console.log(Fibonacci(10))


//Factorial of a Number in Recursion

function Factorial(n){
    if(n == 0){
        return 1
    }
    return n * Factorial(n-1)
}

console.log(Factorial(2))
console.log(Factorial(5))
console.log(Factorial(10))

//check the word is palindrome or not

function pali(str){
    if(str.length ===0 || str.length === 1){
        return true
    }

    if(str[0] === str[str.length-1]){
        str = str.slice(1)
        str = str.slice(0,str.length-1)
        return pali(str)
    }else{
        return false
    }
}

console.log(pali('abcba'))
console.log(pali('absddcba'))
console.log(pali('abccbabda'))