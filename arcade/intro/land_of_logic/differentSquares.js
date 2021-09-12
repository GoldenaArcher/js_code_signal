function differentSquares(matrix) {
  const matriSet = new Set();

  for (let row = 1; row < matrix.length; row++) {
    const currRow = matrix[row];
    for (let col = 1; col < currRow.length; col++) {
      matriSet.add(getMatrix(matrix, row, col));
    }
  }

  return matriSet.size;
}

const getMatrix = (matrix, row, col) => {
  const firstRow = matrix[row - 1];
  const secondRow = matrix[row];

  return (
    "" + firstRow[col - 1] + firstRow[col] + secondRow[col - 1] + secondRow[col]
  );
};

matrix = [
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1],
];

console.log(differentSquares(matrix));
