//index Number
let input = "c"
input = input.toUpperCase()
let arrAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

console.log(arrAlpha.indexOf(input) + 1)


//excel Column
const excelColumn = (s) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    s = s.toUpperCase()
  
    let result = 0
  
    for (let i = 0; i < s.length; i++) { // 1 kali
      result *= 26; // -> 0
      result += alphabet.indexOf(s[i]) + 1; // result = 0 + (9 + 1)
    }
  
    return result; // 10
  }
  
  console.log(excelColumn("J"))