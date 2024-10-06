// Factorial of a Number

function Factorial(n) {
    let result = 1
    for( let i = 2 ; i <= n ; i++ ){
        result = result * i
    }
    return result
}

console.log(Factorial(5))


// Factorial of a Number using Recursion

function fact(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * fact(n - 1)
}

console.log(fact(4))
