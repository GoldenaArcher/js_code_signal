function lateRide(n) {
  return ("" + Math.floor(n / 60) + (n % 60))
    .split("")
    .reduce((accum, curr) => parseInt(accum) + parseInt(curr));
}

console.log(lateRide(808));
