

function isPalindrome(x) {
const str = x.toString()
return str === str.split('').reverse().join('')
}


function isPalindromeWithOutMethods(x){
    if(x<0) return false

    let original = x
    let reversed = 0

    while(x > 0){
        let lastDigit = x%10;
        reversed = reversed * 10 + lastDigit
        x = Math.floor(x/10)
    }
    return original === reversed
}





console.log(isPalindromeWithOutMethods(121)); // Output: true
console.log(isPalindromeWithOutMethods(-121)); // Output: false
console.log(isPalindromeWithOutMethods(10)); // Output: false


