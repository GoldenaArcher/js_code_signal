function messageFromBinaryCode(code) {
  let list = code.split("");
  let res = [];
  while (list.length > 0) {
    const letter = list.splice(0, 8);
    console.log(letter);
    res.push(String.fromCharCode(`0b${letter.join("")}`));
  }
  return res.join("");
}

console.log(
  messageFromBinaryCode("010010000110010101101100011011000110111100100001")
);
