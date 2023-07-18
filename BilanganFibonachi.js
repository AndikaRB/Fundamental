const fibo = (n) => {
  if (n <= 3) {
    return "n harus lebih besar dari 3";
  }

  let arr = [0, 1, 1];

  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
};

console.log(fibo(5));
