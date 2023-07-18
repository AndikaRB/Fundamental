//mencari kata yg paling sering muncul
const mostWords = (sentence) => {
    const words = sentence.split(" ")
    // aku,suka,apel,karena,apel,aku,apel
    let wordMap = {}
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
  
      if (wordMap[word]) {
        wordMap[word] += 1
      } else {
        wordMap[word] = 1
      }
    }
  
    let maxKey = ""
    let maxCount = 0
  
    Object.keys(wordMap).forEach((key) => {
      if (wordMap[key] > maxCount) {
        maxKey = key
        maxCount = wordMap[key]
      }
    })
  
    return maxKey
  }
  
  console.log(mostWords("aku suka apel karena apel aku apel"))