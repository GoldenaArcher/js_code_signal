function sumUpNumbers(inputString) {
  const nums = inputString.match(/[0-9]+/g);
  return nums ? nums.reduce((accum, curr) => (accum += parseInt(curr)), 0) : 0;
}

// console.log(sumUpNumbers("2 apples, 12 oranges"));
console.log(sumUpNumbers("123450"));
