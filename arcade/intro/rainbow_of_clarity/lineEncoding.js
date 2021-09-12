const updateArray = (arr, occurance, char) => {
  if (occurance === 1) arr.push(char);
  else arr.push(`${occurance}${char}`);
};

function lineEncoding(s) {
  let encoding = [];
  let index = 1;
  let currChar = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currChar) {
      index++;
    } else {
      updateArray(encoding, index, currChar);
      index = 1;
      currChar = s[i];
    }
  }

  updateArray(encoding, index, currChar);

  encoding;

  return encoding.join("");
}

console.log(lineEncoding("aabbbc"));
