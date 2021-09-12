function extractEachKth(inputArray, k) {
  const returnArr = [];

  inputArray.forEach((val, index) => {
    if ((index + 1) % k === 0);
    else returnArr.push(val);
  });

  return returnArr;
}
