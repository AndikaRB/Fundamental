//mencari bilangan yg genap/ganjil yang berbeda pada sebuah Array
const differ = (arr) => {
    let oddArr = []
    let evenArr = []
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArr.push(arr[i])
      } else {
        oddArr.push(arr[i])
      }
    }
  
    if (oddArr.length > evenArr.length) {
      return evenArr[0]
    }
  
    return oddArr[0]
  }
  
  console.log(differ([2, -3, 6, 100, 88, 96, 110]))