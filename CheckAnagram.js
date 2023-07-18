//check Anagram-1
myFunction = (s, t) => {
  let len1 = s.length;
  let len2 = t.length;
  if (len1 !== len2) {
    throw new Error("Invalid Input");
  }
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};
console.log(myFunction("anagram", "nagasam"));

//check Anagram-2g
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    const word1 = str1[i];
    if (map1[word1]) {
      map1[word1] += 1;
    } else {
      map1[word1] = 1;
    }

    const word2 = str2[i];
    if (map2[word2]) {
      map2[word2] += 1;
    } else {
      map2[word2] = 1;
    }
  }

  console.log(map1);
  console.log(map2);

  for (key in map1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
};

console.log(anagram("racecar", "racecar"));
