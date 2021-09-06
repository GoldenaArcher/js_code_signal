function commonCharacterCount(s1, s2) {
  const s1Map = getAllOccurance(s1);
  const s2Map = getAllOccurance(s2);

  const intersection = Array.from(s1Map.keys()).filter((key) => s2Map.has(key));

  let sum = 0;

  for (const key of intersection) {
    sum += Math.min(s1Map.get(key), s2Map.get(key));
  }

  return sum;
}

const getAllOccurance = (str) => {
  const map = new Map();

  for (const char of str) {
    if (map.has(char)) {
      const updatedVal = map.get(char) + 1;
      map.set(char, updatedVal);
    } else {
      map.set(char, 1);
    }
  }

  return map;
};
