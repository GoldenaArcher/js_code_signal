function palindromeRearranging(inputString) {
  const key = new Set();

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (key.has(char)) {
      key.delete(char);
    } else {
      key.add(char);
    }
  }

  return [...key.keys()].length <= 1;
}

console.log(palindromeRearranging("aabb"));
