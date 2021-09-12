function digitDegree(n) {
  if (n < 10) return 0;
  let res = "" + n;
  let degree = 0;

  while (res.length > 1) {
    res =
      res
        .split("")
        .reduce((accum, curr) => parseInt(accum) + parseInt(curr), 0) + "";
    res;
    degree++;
  }

  return degree;
}

// console.log(digitDegree(100));
console.log(digitDegree(91));
