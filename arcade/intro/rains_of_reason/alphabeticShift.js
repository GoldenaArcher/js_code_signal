function alphabeticShift(inputString) {
  const strArr = inputString.split("");
  return strArr.map((char) => {
    if (char === "z") return 'a';
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join('');
}
