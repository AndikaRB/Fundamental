//mencari bilangan yang duplicat dari sebuah Array
checkDuplicate = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j])
            return arr[j];
        }
    }
    return false
}

console.log(checkDuplicate([1,2,3,1]))

// mencari semua bilangan yg duplicat pada array 

checkDuplicate = (arr) => {
    let dup = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                dup.push(arr[i])
            }
        }
    }
    return dup
}

console.log(checkDuplicate([2, 1, 3, 1, 2, 3]))
