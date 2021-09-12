function chessKnight(cell) {
  const letter = cell.charCodeAt(0);
  const aNum = "a".charCodeAt(0);
  const hNum = "h".charCodeAt(0);
  const num = cell[1];

  let move = 0;

  // left top
  if (letter - aNum >= 2 && 8 - num >= 2) {
    move += 2;
  } else if (
    (letter - aNum >= 1 && 8 - num >= 2) ||
    (letter - aNum >= 2 && 8 - num >= 1)
  ) {
    move += 1;
  }

  // right top
  if (hNum - letter >= 2 && 8 - num >= 2) {
    move += 2;
  } else if (
    (hNum - letter >= 1 && 8 - num >= 2) ||
    (hNum - letter >= 2 && 8 - num >= 1)
  ) {
    move += 1;
  }

  // left bottom
  if (letter - aNum >= 2 && num - 1 >= 2) {
    move += 2;
  } else if (
    (letter - aNum >= 1 && num - 1 >= 2) ||
    (letter - aNum >= 2 && num - 1 >= 1)
  ) {
    move += 1;
  }

  // right bottom
  if (hNum - letter >= 2 && num - 1 >= 2) {
    move += 2;
  } else if (
    (hNum - letter >= 1 && num - 1 >= 2) ||
    (hNum - letter >= 2 && num - 1 >= 1)
  ) {
    move += 1;
  }

  return move;
}

console.log(chessKnight((cell = "a1")));
console.log(chessKnight((cell = "c2")));
