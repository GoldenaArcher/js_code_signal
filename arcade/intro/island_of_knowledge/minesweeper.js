function minesweeper(matrix) {
  return matrix.map((row, rowIndex) =>
    row.map((col, colIndex) => findMines(matrix, rowIndex, colIndex))
  );
}

const isMine = (row, colNum) => {
  return row && row[colNum] ? 1 : 0;
};

const findMines = (matrix, rowIndex, colIndex) => {
  let totalMines = 0;
  const rowAbove = rowIndex !== 0 ? matrix[rowIndex - 1] : null;
  const rowBelow = rowIndex < matrix.length - 1 ? matrix[rowIndex + 1] : null;
  const currentRow = matrix[rowIndex];

  // check mine on the left
  if (colIndex !== 0) {
    totalMines += isMine(rowAbove, colIndex - 1);
    totalMines += isMine(rowBelow, colIndex - 1);
    totalMines += isMine(currentRow, colIndex - 1);
  }

  // check mine directly above and below
  totalMines += isMine(rowAbove, colIndex);
  totalMines += isMine(rowBelow, colIndex);

  // check the mine on the right
  if (colIndex < currentRow.length - 1) {
    totalMines += isMine(rowAbove, colIndex + 1);
    totalMines += isMine(rowBelow, colIndex + 1);
    totalMines += isMine(currentRow, colIndex + 1);
  }

  return totalMines;
};

console.log(
  minesweeper(
    (matrix = [
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ])
  )
);
