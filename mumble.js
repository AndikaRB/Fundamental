const mumble = (str) => {
  let result = ""

  for (let i = 0; i < str.length; i++) { // i = 3
    result += str[i].toUpperCase() // ABbCccDddd

    for (let j = 0; j < i; j++) { // j = 3
      result += str[i].toLowerCase()
    }
  }

  return result
}

console.log(mumble("abcd"))