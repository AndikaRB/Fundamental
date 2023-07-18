
numGrade = (n) => {
    if (n >= 90 && n <= 100) {
    return "A"
    } else if (n >= 80 && n <= 89) {
    return "B"
    } else if (n >= 70 && n <= 79) {
    return "C"
    } else if (n >= 60 && n <= 69) {
    return "D"
    } else if (n <= 59 && n >= 0) {
    return "F"
    } else {
    return "Invalid"
    }
}

console.log(numGrade(95))