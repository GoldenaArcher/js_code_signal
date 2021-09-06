function allLongestStrings(inputArray) {
  const map = new Map();
  for (const input of inputArray) {
    if (map.has(input.length)) {
      map.get(input.length).push(input);
    } else {
      map.set(input.length, [input]);
    }
  }

  let longestNum = -1,
    longestArr = [];
  for (const [key, value] of map.entries()) {
    if (key > longestNum) {
      longestNum = key;
      longestArr = value;
    }
  }
  return longestArr;
}
