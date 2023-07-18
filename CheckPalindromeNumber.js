//mencari bilangan palindrome
const palindrome = (num) => {
    let palindrome = num
    let reverse = 0
  
    while (palindrome > 0) {
      let lastDigit = palindrome % 10
      reverse = (reverse * 10) + lastDigit
      palindrome = parseInt(palindrome / 10)
    }
  
    if (reverse === num) {
      return true
    }
  
    return false
  }
  
  console.log(palindrome(12345))