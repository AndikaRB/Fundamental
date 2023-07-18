myFunction = (n) => {
  arr = [1, 1];

  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[arr.length - 1];
};

console.log(myFunction(3));

// function 2

function countWaysToClimbStairs(totalSteps, possibleSteps) {
  // Base cases
  if (totalSteps === 0) {
    return 1; // Reached the top
  }
  if (totalSteps < 0) {
    return 0; // Overshot the top
  }

  let totalWays = 0;

  // Recursively calculate the number of ways for each possible step
  for (const step of possibleSteps) {
    totalWays += countWaysToClimbStairs(totalSteps - step, possibleSteps);
  }

  return totalWays;
}
