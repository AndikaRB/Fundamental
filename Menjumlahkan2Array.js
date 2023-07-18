sumArray = (arr1 = [], arr2 = []) => {
  let output = [];

  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i] + arr2[i]);
  }

  return output;
};

console.log(sumArray([1, 2, 3], [3, 2, 1]));

//   let output1 = sumArray([1, 2, 3], [3, 2, 1])
//   let output2 = sumArray([4, 5, 6], [7, 8, 9])

//   console.log(sumArray(output1, output2))
