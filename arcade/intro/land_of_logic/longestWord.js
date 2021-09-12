function longestWord(text) {
  const list = text.match(/[a-zA-Z]+/g);
  list;

  return list.reduce((accum, curr) =>
    accum.length > curr.length ? accum : curr
  );
}

console.log(longestWord("Ready, steady, go!"));
// console.log(longestWord("To be or not to be"));
