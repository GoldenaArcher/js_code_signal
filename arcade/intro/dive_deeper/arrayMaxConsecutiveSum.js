// // Execution time limit exceeded: Program exceeded the execution time limit.
// function arrayMaxConsecutiveSum(inputArray, k) {
//   return inputArray.reduce((accum, curr, index, arr) => {
//     if (index < k - 1) return accum;
//     else {
//       return Math.max(findSum(arr.slice(index - k + 1, index + 1)), accum);
//     }
//   }, 0);
// }

const findSum = (arr) => {
  return arr.reduce((accum, curr) => (accum += curr));
};

function arrayMaxConsecutiveSum(inputArray, k) {
  let globalMax = findSum(inputArray.slice(0, k));
  let currRange = globalMax;
  for (let i = k; i < inputArray.length; i++) {
    currRange = currRange - inputArray[i - k] + inputArray[i];
    globalMax = Math.max(globalMax, currRange);
  }
  return globalMax;
}

console.log(arrayMaxConsecutiveSum((inputArray = [2, 3, 5, 1, 6]), (k = 2)));
// console.log(arrayMaxConsecutiveSum((inputArray = [1, 3, 2, 4]), (k = 3)));
