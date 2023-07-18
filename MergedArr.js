// mergerArr dua object
const mergeArr = (arr1, arr2) => {
  let merged = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    let dataExists = false;

    for (let j = 0; j < merged.length; j++) {
      if (arr2[i].name === merged[j].name) {
        dataExists = true;
        break;
      }
    }

    if (!dataExists) {
      merged.push(arr2[i]);
    }
  }
  return merged;
};

const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeArr(arr1, arr2));

//MergedArr 2 Array Number
// const mergeArr = (arr1, arr2) => {
//   let merged = [...arr1] // copy arr1 ke dalam variable merged

//   for (let i = 0; i < arr2.length; i++) {
//     let dataExists = false

//     for (let j = 0; j < merged.length; j++) {
//       if (arr2[i] === merged[j]) {
//         dataExists = true
//         break
//       }
//     }

//     if (!dataExists) {
//       merged.push(arr2[i])
//     }
//   }
//   return merged
// }

// const arr1 = [5,4,3,2,1]

// const arr2 = [1,2,6]

// console.log(mergeArr(arr1, arr2))
