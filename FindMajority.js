const findMajority = (arr = []) => {
    const hashMap = {}
  
    for (digit of arr) {
      if (!hashMap[digit]) {
        hashMap[digit] = 1
      } else {
        hashMap[digit] += 1
      }
      
    if (hashMap[digit] > arr.length / 2) {
    return digit
    }
    }
  }
  
  console.log(findMajority([4, 4, 4, 4, 4, 4, 1, 3, 4, 4, 4]))