function addBorder(picture) {
  const col = picture[0].length;
  const framedPic = [];
  const firstLastRow = new Array(col + 2).fill("*").join("");

  framedPic.push(firstLastRow);
  picture.forEach((row) =>
    framedPic.push(["*"].concat(row).concat("*").join(""))
  );
  framedPic.push(firstLastRow);

  return framedPic;
}

console.log(addBorder((picture = ["abc", "ded"])));
