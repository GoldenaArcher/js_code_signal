function arrayChange(inputArray) {
  //   let minDiff = 0;

  //   for (let i = 1; i < inputArray.length; i++) {
  //     let localDiff = 0;
  //     if (inputArray[i] <= inputArray[i - 1]) {
  //       localDiff = inputArray[i - 1] - inputArray[i] + 1;
  //       inputArray[i] += localDiff;
  //       minDiff += localDiff;
  //     }
  //   }

  //   return minDiff;

  return inputArray.reduce((accu, curr, index, arr) => {
    if (index === 0) return 0;
    if (arr[index - 1] >= curr) {
      const localDiff = inputArray[index - 1] - curr + 1;
      inputArray[index] += localDiff;
      return (accu += localDiff);
    }
    return accu;
  }, 0);
}

console.log(arrayChange([1, 1, 1]));
