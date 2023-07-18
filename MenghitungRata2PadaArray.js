arrayAverage = (arr = []) => {
  let total = 0
  
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  average = (total / arr.length).toFixed(2)
  return Number(average)
} 
console.log(arrayAverage([13, 7, 5, 3, 2, 19, 6]))
