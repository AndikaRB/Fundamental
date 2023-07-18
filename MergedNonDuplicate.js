//Merged NonDuplicate pada 2 Array
const nonDuplicate = (arr1, arr2) => {
  let resultArr = []

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !resultArr.includes(arr1[i])) {
      resultArr.push(arr1[i])
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !resultArr.includes(arr2[i])) {
      resultArr.push(arr2[i])
    }
  }

  return resultArr
}

console.log(nonDuplicate([1, 3, 3, 2, 3, 2, 4], [1, 2, 3, 4]))

