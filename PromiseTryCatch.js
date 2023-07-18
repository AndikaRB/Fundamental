// const myPromise = new Promise((resolve, reject) => {
//     let isError = true
  
//     if (isError) {
//       return reject({
//         code: "41432",
//         message: "Process error"
//       })
//     } else {
//       return resolve("Process success!")
//     }
  
//     console.log("Test")
//   })
  
//   const myFunction = async () => {
    // myPromise
    //   .then((res) => {
    //     console.log(res)
    //   }) // akan dijalanin kalau promise resolved (success)
    //   .catch((err) => {
    //     console.log(err)
    //   }) // akan dijalanin kalau promise rejected (error)
    //   .finally(() => {
    //     console.log("Promise selesai")
    //   }) // akan dijalanin kalau promise selesai (success maupun error)
  
//     try {
//       const result = await myPromise
//       console.log(result)
//     } catch (err) {
//       console.log(err)
//     } finally {
//       console.log("Promise selesai")
//     }
//   }
  
//   myFunction()


const myFunction = async () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  myFunction()