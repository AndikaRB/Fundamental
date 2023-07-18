
getPalindrom = (str = '') => {
    str = str.toLowerCase()
    let palindrome = str.split("").reverse().join("")
    
    if (str == palindrome) {
      return `${str} adalah sebuah palindrome`
    } else {
      return `${str} bukan sebuah palindrome`
    }
}

console.log(getPalindrom('kasuRrusakk'))

