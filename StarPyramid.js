// print star pyramid odd number lowest row number based on input

// function printStarPyramid(input) {
//   if (input % 2 === 0) {
//     input--; // Adjust input to the nearest odd number
//   }

//   const numRows = Math.ceil(input / 2);

//   for (let i = 1; i <= numRows; i++) {
//     let spaces = " ".repeat(numRows - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }

// printStarPyramid(9);

// // console.log() outside
// function printStarPyramid(input) {
//   if (input % 2 === 0) {
//     input--; // Adjust input to the nearest odd number
//   }

//   const numRows = Math.ceil(input / 2);
//   let pyramid = "";

//   for (let i = 1; i <= numRows; i++) {
//     let spaces = " ".repeat(numRows - i);
//     let stars = "*".repeat(2 * i - 1);
//     pyramid += spaces + stars + "\n";
//   }

//   return pyramid;
// }

// console.log(printStarPyramid(9));

// print pyramid number of row based of Input
// function printStarPyramid(numRows) {
//   for (let i = 1; i <= numRows; i++) {
//     let spaces = " ".repeat(numRows - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }

// printStarPyramid(5);

// console.log() outside

function printStarPyramid(numRows) {
  let pyramid = "";

  for (let i = 1; i <= numRows; i++) {
    let spaces = " ".repeat(numRows - i);
    let stars = "*".repeat(2 * i - 1);
    pyramid += spaces + stars + "\n";
  }

  return pyramid;
}

const pyramidResult = printStarPyramid(5);
console.log(pyramidResult);
