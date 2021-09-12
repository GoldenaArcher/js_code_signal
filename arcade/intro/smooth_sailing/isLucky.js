function isLucky(n) {
  const nStr = "" + n;

  let sumOfFirstHalf = 0,
    sumOfLastHalf = 0;

  for (let i = 0; i < nStr.length / 2; i++) {
    sumOfFirstHalf += parseInt(nStr[i]);
  }

  for (let i = nStr.length / 2; i < nStr.length; i++) {
    sumOfLastHalf += parseInt(nStr[i]);
  }

  return sumOfFirstHalf === sumOfLastHalf;
}
