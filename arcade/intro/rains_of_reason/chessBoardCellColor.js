function chessBoardCellColor(cell1, cell2) {
  console.log(isDark(cell1));
  console.log(isDark(cell2));

  return isDark(cell1) === isDark(cell2);
}

const isDark = (cell) => {
  console.log(cell.charCodeAt(0));
  console.log(cell[1] % 2 !== 0);
  return (
    (cell.charCodeAt(0) % 2 !== 0 && cell[1] % 2 !== 0) ||
    (cell.charCodeAt(0) % 2 === 0 && cell[1] % 2 === 0)
  );
};

// chessBoardCellColor("A1", "H3");

console.log(chessBoardCellColor("B3", "H8"));
