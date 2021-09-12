const DIRECTION = {
  RIGHT: "right",
  LEFT: "left",
  UP: "up",
  DOWN: "down",
};

function spiralNumbers(n) {
  let curr = 0;
  const res = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  res;
  let direction = DIRECTION.RIGHT;
  let row = 0,
    col = 0;

  while (curr < n * n) {
    switch (direction) {
      case DIRECTION.RIGHT:
        if (col < n && res[row][col] === 0) {
          res[row][col++] = ++curr;
        } else {
          col--;
          row++;
          direction = DIRECTION.DOWN;
        }
        break;
      case DIRECTION.DOWN:
        if (row < n && res[row][col] === 0) {
          res[row++][col] = ++curr;
        } else {
          col--;
          row--;
          direction = DIRECTION.LEFT;
        }
        break;
      case DIRECTION.LEFT:
        if (col >= 0 && res[row][col] === 0) {
          res[row][col--] = ++curr;
        } else {
          col++;
          row--;
          direction = DIRECTION.UP;
        }
        break;
      case DIRECTION.UP:
        row;
        if (col >= 0 && res[row][col] === 0) {
          res[row--][col] = ++curr;
        } else {
          col++;
          row++;
          direction = DIRECTION.RIGHT;
        }
        break;
      default:
        curr++;
        break;
    }
  }
  return res;
}

console.log(spiralNumbers(3));
