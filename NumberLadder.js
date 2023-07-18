// generate output number ladder
// function generateOutput(input) {
//   const digits = input.toString().split("").map(Number);
//   const output = [];

//   let power = 1;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     const value = digits[i] * power;
//     if (value !== 0) {
//       output.push(value);
//     }
//     power *= 10;
//   }

//   return output.join("\n");
// }

// const input = 125891;
// const output = generateOutput(input);
// console.log(output);

// function generate output number reverse ladder
// function generateOutput(input) {
//   const digits = input.toString().split("").map(Number);
//   const output = [];

//   for (let i = digits.length - 1; i >= 0; i--) {
//     const value = digits[i] * Math.pow(10, i);
//     output.push(value);
//   }

//   return output.join("\n");
// }

// const input = 125891;
// const output = generateOutput(input);
// console.log(output);
