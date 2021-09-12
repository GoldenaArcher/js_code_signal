function isMAC48Address(inputString) {
  if (!/^[0-9A-F\-]*$/.test(inputString)) return false;

  const macAddr = inputString.split("-");

  if (macAddr.length !== 6) return false;

  return macAddr.every((mac) => mac.length === 2);
}

console.log(isMAC48Address("00-1B-63-84-45-E6"));
console.log(isMAC48Address("Z1-1B-63-84-45-E6"));
console.log(isMAC48Address("not a MAC-48 address"));
