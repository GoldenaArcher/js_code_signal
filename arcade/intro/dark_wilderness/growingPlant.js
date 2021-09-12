function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let plantHeight = 0;
  let date = 0;
  while (true) {
    date++;
    date;
    plantHeight += upSpeed;
    plantHeight;
    if (plantHeight >= desiredHeight) return date;
    plantHeight -= downSpeed;
  }
}

console.log(growingPlant(100, 10, 910));
