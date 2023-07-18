const romanToInt = (str = '') => {
    const romanMap = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    }
  
    let result = 0 
  
    for(let i = 0; i < str.length; i++) {
      let char = str[i] 
      let nextChar = str[i + 1]
  
      if(romanMap[char] < romanMap[nextChar]) {
        result -= romanMap[char]
      } else {
        result += romanMap[char]
      }
    }
  
    return result
  }
  
  console.log(romanToInt('MCMXCIV'))