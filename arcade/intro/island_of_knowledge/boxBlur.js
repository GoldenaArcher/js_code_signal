function boxBlur(image) {
  const blur = [];
  for (let row = 2; row < image.length; row++) {
    const currRow = image[row];
    const valueRow = [];
    for (let col = 2; col < currRow.length; col++) {
      const matrix = getMatrix(image, row, col);
      valueRow.push(computeCenter(matrix));
    }
    blur.push(valueRow);
  }
  return blur;
}

computeCenter = (matrix) => {
  let sum = 0;
  matrix.forEach((row) => {
    row.forEach((val) => {
      sum += val;
    });
  });
  return Math.floor(sum / 9);
};

const getMatrix = (image, row, col) => {
  col;
  const matrix = [];
  matrix.push(image[row - 2].slice(col - 2, col + 1));
  matrix.push(image[row - 1].slice(col - 2, col + 1));
  matrix.push(image[row].slice(col - 2, col + 1));
  return matrix;
};

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);

console.log(
  boxBlur(
    (image = [
      [7, 4, 0, 1],
      [5, 6, 2, 2],
      [6, 10, 7, 8],
      [1, 4, 2, 0],
    ])
  )
);
