function absoluteValuesSumMinimization(a) {
  let minDistance = Infinity;
  let minVal = -1;

  a.forEach((element) => {
    const localDistance = findAbsDistance(element, a);
    if (localDistance < minDistance) {
      minVal = element;
      minDistance = localDistance;
    }
  });

  minVal;
  return minVal;
}

const findAbsDistance = (val, a) => {
  return a.reduce((accu, curr) => (accu += Math.abs(val - curr)), 0);
};

absoluteValuesSumMinimization([2, 4, 7]);
