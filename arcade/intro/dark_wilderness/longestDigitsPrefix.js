function longestDigitsPrefix(inputString) {
  let index = 0;
  for (const char of inputString) {
    if (char.match(/[0-9]/)) {
      index++;
    } else {
      break;
    }
  }
  return inputString.slice(0, index);
}

console.log(longestDigitsPrefix("0123456789"));
