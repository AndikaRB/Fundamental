//Menjumlah input Number Pada Array Hingga 1 Digit

//jumlah input Array-1
let input = 19573
input = input.toString()
let total = 0

for (let i = 0; i < input.length; i++) {
  total += Number(input[i])
}

console.log(total)

//jumlah input Array-2
var value = 12345,
sum = 0;

while (value) {
sum += value % 10;
value = Math.floor(value / 10);
}

console.log(sum);

//jumlah sampai 1 digit
getSum = (n) => {
    let sum = 0
    while (n > 0 || sum > 9) {
         if(n == 0) {
            n = sum;
            sum = 0;
         }
         sum = sum + n % 10
         n = Math.floor(n / 10)
    }
    return sum
}

console.log(getSum(123))

//cara-2 sampai 1 digit
const singleDigit = (n) => {
    if (typeof n !== "number" || isNaN(n)) {
      throw new Error("N has to be number")
    }
  
    if (n < 10) {
      return n
    }
  
    let result = 0
    let nStr = n.toString()
  
    while (nStr.length > 1) { // untuk check jumlah digit angka
      for (let i = 0; i < nStr.length; i++) { // untuk jumlahin
        result += Number(nStr[i])
      }
  
      nStr = result.toString()
      result = 0
    }
  
    return Number(nStr)
  }
  
  console.log(singleDigit(9999))