function firstDigit(inputString) {
  for (const char of inputString) {
    if (char.match(/[0-9]/g)) {
      return char;
    }
  }
}
