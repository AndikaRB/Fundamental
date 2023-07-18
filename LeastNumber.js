//nilai yang paling sering muncul
// myFunction = (nums) => {
//   let hashMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];

//     if (hashMap[num]) {
//       hashMap[num] += 1;
//     } else {
//       hashMap[num] = 1;
//     }
//   }

//   let result = "";
//   let maxCount = 0;
//   for (key in hashMap) {
//     if (hashMap[key] > maxCount) {
//       result = key;
//       maxCount = hashMap[key];
//     }
//   }
//   return result;
// };
// console.log(myFunction([4, 5, 4, 6, 6, 7, 7, 7]));

nilai yang paling jarang muncul
myFunction = (nums) => {
  let hashMap = {}

  for (let i = 0; i < nums.length; i++) {
      let num = nums[i]

    if (hashMap[num]) {
      hashMap[num]+=1
    } else {
      hashMap[num] = 1
    }
  }

  let result =''
  let count = 5
  for (key in hashMap) {
    if(hashMap[key] < count){
      result = key
      count = hashMap[key]
    }
  }
    return Number(result)
}
console.log(myFunction([4, 4, 5, 5, 4, 6, 6, 6, 7, 7, 7]))

//nilai yang hanya muncul sekali
// myFunction = (nums) => {
//   const hashMap = {}
//   for (let i = 0; i < nums.length; i++) {
//       let num = nums[i]

//     if (!hashMap[num]) {
//       hashMap[num] = 1
//     }
//     else {
//       hashMap[num] += 1
//     }
//   }

//   for(key in hashMap) {
//       if(hashMap[key] === 1) {
//           return Number(key)
//       }
//   }
// }

// console.log(myFunction([4,1,2,1,2]))
