function adjacentElementsProduct(inputArray) {
  let max = -1000 * 1000;
  for (let i = 1; i < inputArray.length; i++) {
    max = Math.max(inputArray[i] * inputArray[i - 1], max);
  }
  return max;
}
