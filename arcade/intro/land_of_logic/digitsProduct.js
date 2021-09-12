function digitsProduct(product) {
  if (product === 0) return 10;
  if (product < 10) return product;

  let copy = product;
  let res = [];

  while (copy > 1) {
    const nextProduct = findProductDigit(copy);
    copy /= nextProduct;
    res.push(nextProduct);

    if (copy === product) break;
    if (nextProduct === -1) return -1;
  }

  if (copy > 9) return -1;

  console.log(res);

  if (res.length === 0) return -1;

  return generateSmallestCombination(res);
}

const findProductDigit = (copy) => {
  for (let i = 9; i > 1; i--) {
    if (copy % i === 0) {
      return i;
    }
  }
  return -1;
};

const generateSmallestCombination = (arr) => {
  const res = [];
  while (arr.length) {
    const minIndex = findeSmallestNum(arr);
    res.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }

  return parseInt(res.join(""));
};

const findeSmallestNum = (arr) => {
  let min = Infinity;
  let minIndex = -1;
  arr.forEach((num, index) => {
    if (num < min) {
      min = num;
      minIndex = index;
    }
  });

  return minIndex;
};

console.log(digitsProduct(484));
// console.log(digitsProduct(450));
// console.log(digitsProduct(19));
// console.log(digitsProduct(19));
