function isIPv4Address(inputString) {
  const bits = inputString.split(".");

  if (bits.length !== 4) return false;

  for (const bit of bits) {
    // string of four numbers
    if (isNaN(bit)) return false;
    // each between 0 and 255 inclusive
    if (bit < 0 || bit > 255) return false;
    // All numbers should be present without leading zeros.
    if ((bit.length > 1 && bit[0] === "0") || bit.length < 1) return false;
  }

  return true;
}

console.log(isIPv4Address("172.16.254.1"));
console.log(isIPv4Address("1..0.1"));
