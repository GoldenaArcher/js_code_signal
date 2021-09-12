function stringsRearrangement(inputArray) {
  const allResults = permutator(inputArray);

  allResults;

  return allResults.some((result) => {
    for (let i = 0; i < result.length - 1; i++) {
      if (findDiff(result[i], result[i + 1]) === 1) continue;
      return false;
    }
    return true;
  });
}

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const findDiff = (s1, s2) => {
  let diff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    else {
      diff++;
      if (diff > 2) return diff;
    }
  }
  return diff;
};

console.log(stringsRearrangement(["aba", "bbb", "bab"]));
