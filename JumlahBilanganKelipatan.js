//menjumlah bilangan kelipatan tertentu
myFunction = (N) => {
  if (typeof N !== "number" || isNaN(N)) {
    throw new Error("N has to be Number");
  }
  total = 0;
  for (let i = 1; i < N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
};

console.log(myFunction(15));
