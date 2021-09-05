function checkPalindrome(inputString) {
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - i - 1])
      return false;
  }
  return true;
}
