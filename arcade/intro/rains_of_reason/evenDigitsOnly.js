function evenDigitsOnly(n) {
  return ('' + n).split("").every((val) => val % 2 === 0);
}
