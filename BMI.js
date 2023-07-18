// Formula BMI
// Formula: weight / (height ^ 2)
const BMI = (weight = 0, height = 0) => {
  if (weight <= 0 || height <= 0) {
    return "Weight dan height harus lebih dari 0";
  }

  let score = weight / height ** 2;
  score = Number(score.toFixed(2));

  if (score > 39.9) {
    return score + " || obesity";
  } else if (score >= 30 && score <= 39.9) {
    return score + " || very overweight";
  } else if (score >= 25 && score <= 29.9) {
    return score + " || overweight";
  } else if (score >= 18.5 && score <= 24.9) {
    return score + " || ideal";
  } else if (score < 18.5) {
    return score + " || less weight";
  }
};

console.log(BMI(50, 1.55));
