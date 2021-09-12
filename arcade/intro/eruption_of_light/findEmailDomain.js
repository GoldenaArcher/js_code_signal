function findEmailDomain(address) {
    const splitedAddress = address.split("@");
  return splitedAddress[splitedAddress.length - 1];
}
