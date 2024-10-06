//Fibonacci Sequence

"The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones"

//Example
const fib = [ 0,1,1,2,3,5,8,13,21 ]


// Fibonacci sequence

function Fibonacci (n){
    const fi =[0 ,1]
    for(let i = 2 ; i < n ; i++){
        fi[i]  = fi[i-1] + fi[i-2]
    }
    return fi
}

console.log(Fibonacci(7))
