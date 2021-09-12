function shapeArea(n) {
  let square = n + n - 1;
  let top = square - 2;
  for (let i = n - 1; i > 0; i--) {
    square += top * 2;
    top -= 2;
  }
  return square;
}
