function circleOfNumbers(n, firstNumber) {
  // need to find the mod, since the first number can be at second half of the circle
  return (firstNumber + n / 2) % n;
}
