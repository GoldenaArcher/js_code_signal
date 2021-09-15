function killKthBit(n, k) {
  console.log((~(1 << (k - 1))).toString(2));
  return n & ~(1 << (k - 1));
}

console.log(killKthBit(27, 3));
