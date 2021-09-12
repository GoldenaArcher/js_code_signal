function sudoku(grid) {
  let valid = true;
  // chech each row
  valid = grid.every(
    (row) => row.reduce((accu, curr) => accu.add(curr), new Set()).size === 9
  );

  if (!valid) return false;

  valid;
  // check each col
  if (!validCol(grid)) return false;

  valid;

  if (!validSubGrids(grid)) return false;

  valid;

  return true;
}

const validSubGrid = (grid, i, j) => {
  const set = new Set();
  for (let row = i; row < i + 3; row++) {
    for (let col = j; col < j + 3; col++) {
      set.add(grid[row][col]);
    }
  }
  return set.size === 9;
};

const validSubGrids = (grid) => {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!validSubGrid(grid, i, j)) return false;
    }
  }
  return true;
};

const validCol = (grid) => {
  const set = new Set();
  for (let i = 0; i < 9; i++) {
    console.log(set);
    i;
    for (let j = 0; j < 9; j++) {
      console.log(grid[i][j]);
      set.add(grid[j][i]);
    }
    if (set.size !== 9) return false;
  }
  return true;
};

console.log(
  sudoku(
    (grid = [
      [1, 3, 2, 5, 4, 6, 9, 2, 7],
      [4, 6, 5, 8, 7, 9, 3, 8, 1],
      [7, 9, 8, 2, 1, 3, 6, 5, 4],
      [9, 2, 1, 4, 3, 5, 8, 7, 6],
      [3, 5, 4, 7, 6, 8, 2, 1, 9],
      [6, 8, 7, 1, 9, 2, 5, 4, 3],
      [5, 7, 6, 9, 8, 1, 4, 3, 2],
      [2, 4, 3, 6, 5, 7, 1, 9, 8],
      [8, 1, 9, 3, 2, 4, 7, 6, 5],
    ])
  )
);
