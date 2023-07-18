const fizzBuzz = (n) => {
    if (n < 1) {
      console.log("N harus lebih besar dari 0")
      return
    }
  
    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz")
      } else if (i % 5 === 0) {
        console.log("Buzz")
      } else if (i % 3 === 0) {
        console.log("Fizz")
      } else {
        console.log(i)
      }
    }
  }
  
  fizzBuzz(20)