function avoidObstacles(inputArray) {
  const max = Math.max(...inputArray);

  for (let i = 1; i < max; i++) {
    if (inputArray.every((el) => el % i !== 0)) {
      return i;
    }
  }

  return max + 1;
}

console.log(avoidObstacles((inputArray = [5, 3, 6, 7, 9])));
