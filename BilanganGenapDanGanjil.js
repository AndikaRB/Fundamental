//bilangan Genap
const evenArr = (arr) => {
      let output = []
    
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          output.push(arr[i])
      }
    }
    return output
  }
  console.log(evenArr([arr]))

  //bilangan Ganjil
  const oddArr = (arr) => {
    let output = []
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        output.push(arr[i])
    }
  }
  return output
}

  console.log(oddArr([arr]))

