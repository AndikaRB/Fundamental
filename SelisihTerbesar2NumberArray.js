
//menghitung selisih terbesar dari 2 angka dalam Array
const maxDifference = (arr) => {
    let max = arr[0]
    let min = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i]
      }
  
      if (max < arr[i]) {
        max = arr[i]
      }
    }
  
    return max - min
  }
  
  console.log(maxDifference([10, 3, 7, 1, 5, 14]))