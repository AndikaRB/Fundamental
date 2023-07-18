//mencari nilai tertinggi pada array object
const studentData = (arr = []) => {
    if (arr.length === 0) {
      return "Array length harus di atas 0"
    }
  
    let currentHighest = arr[0]
    let currentLowest = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      if (currentHighest.score < arr[i].score) {
        currentHighest = arr[i]
      } else if (currentLowest.score > arr[i].score) {
        currentLowest = arr[i]
      }
    }
  
    return {
      lowest: currentLowest,
      highest: currentHighest,
    }
  }
  
  const studentArray = [
    {
      studentName: "Doraemon",
      score: 97
    },
    {
      studentName: "Naruto",
      score: 53
    },
    {
      studentName: "Sinchan",
      score: 7
    },
  ]
  
  console.log(studentData(studentArray))