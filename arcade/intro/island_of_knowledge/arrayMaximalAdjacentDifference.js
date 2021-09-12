function arrayMaximalAdjacentDifference(inputArray) {
  let max = -1;

  for (let i = 1; i < inputArray.length; i++) {
    max = Math.max(max, Math.abs(inputArray[i] - inputArray[i - 1]));
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference((inputArray = [2, 4, 1, 0])));
