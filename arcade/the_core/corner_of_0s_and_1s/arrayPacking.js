function arrayPacking(a) {
  const bitArr = a.reduce(
    (accum, curr) => accum.concat(curr.toString(2).padStart(8, "0")),
    []
  );

  const minIndex = findSmallest(bitArr);
  console.log(minIndex);
  [bitArr[minIndex], bitArr[0]] = [bitArr[0], bitArr[minIndex]];

  console.log(bitArr);

  return parseInt(bitArr.join(""), 2);
}

// the least significant bits

const findSmallest = (arr) => {
  let minNum = 257,
    minIndex = 0;
  arr.forEach((num, index) => {
    if (num < minNum) {
      minNum = num;
      minIndex = index;
    }
  });

  return minIndex;
};

// console.log(arrayPacking((a = [24, 85, 0])));
console.log(arrayPacking((a = [23, 45, 39])));
