// iterative approach

function removeVowels(str){
    let vowels = ['a','e','i','o','u']
    for(let i=0 ;i<str.length ; i++){
        if(vowels.includes(str[i].toLowerCase())){
            str = str.replace(str[i],'')
        }
    }
    return str
}
// BigO - O(n2)


// recursive approach

// function removeVowels(str,index){
//     if(index >= str.length){
//         return str
//     }
//     let vowels = 'aeiouAEIVOU'
//     if(vowels.includes(str[index])){
//         str = str.slice(0,index) + str.slice(index+1)
//         return removeVowels(str,index)
//     }else{
//         return removeVowels(str,index+1)
//     }
// }

console.log(removeVowels('hello WOrld',0))


// Length of Longest substring in a string without repeating  characters 

let str = 'abcabcdababcde'

function find(str,len=0,i=0){
    if(i>=str.length){
        return len;
    }
    let res =''
    while(i < str.length && !res.includes(str[i])){
        res+=str[i]
        i++
    }
    if(len < res.length){
        len = res.length
    }
    return find(str,len,i)
}

console.log(find(str))


// remove target from the string


let strr = 'akhil kumar'

function remove(strr,target,index=0){
    if(index >= strr.length-1){
        return strr
    }
    
    if(strr[index]===target){
        strr = strr.slice(0,index) + strr.slice(index+1)
    }
    index++
    return remove(strr,target,index)
}

console.log(remove(strr,'a'))

// reverse string

function reverseString(stri) {
    // Base case: if the string is empty, return an empty string
    if (stri === "") {
        return "";
    } else {
        // Recursive case: return the last character plus the reverse of the remaining string
        return reverseString(stri.substr(1)) + stri.charAt(0);
    }
}

let stri = "akhil";
let reversedStr = reverseString(stri);
console.log(reversedStr);  // Output: "lihka"



// reverseString("akhil")
//  -> reverseString("khil")
//      -> reverseString("hil")
//          -> reverseString("il")
//              -> reverseString("l")
//                  -> reverseString("") (Base case reached)
//                  <- return "" + "l"  = "l"
//              <- return "l" + "i"   = "li"
//          <- return "li" + "h"  = "lih"
//      <- return "lih" + "k"  = "lihk"
//  <- return "lihk" + "a"  = "lihka"



let s = "abcdddeeeeaabbbcd";

var largeGroupPositions = function(s,n=[],i=0) {
    if(i>=s.length)return n
    let count  = 1;
    while(i+count < s.length && s[i] === s[i+count]){
        count ++;
       
    }
    if(count >=3){
        n.push([i,i+count-1])
    }
    return largeGroupPositions(s,n,i+count)
    
};

console.log(largeGroupPositions(s))



// let s = "abcdddeeeeaabbbcd";

// var largeGroupPositions = function(s, n = [], i = 0) {
//     let len = s.length;
//     while (i < len) {
//         let count = 1;
//         let start = i;
       
//         while (i + 1 < len && s[i] === s[i + 1]) {
//             count++;
//             i++;
//         }
//         if (count >= 3) {
//             n.push([start, i]);
//         }

//         i++;
//     }
//     return n;
// };

// console.log(largeGroupPositions(s));

