function isBeautifulString(inputString) {
  const map = new Map();
  for (const char of inputString) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let prevOccurance = map.get("a");
  map;
  for (let i = "b".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    const currOccurance = map.get(String.fromCharCode(i));
    if (!prevOccurance && currOccurance) return false;
    prevOccurance;
    currOccurance;
    if (currOccurance > prevOccurance) return false;
    console.log(String.fromCharCode(i));
    prevOccurance = currOccurance;
  }

  return true;
}

console.log(isBeautifulString("bbbaacdafe"));

console.log(isBeautifulString("bbc"));
