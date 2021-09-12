function buildPalindrome(st) {
  console.log(containPalindrome(st));
  const { hasPalindrome, index } = containPalindrome(st);

  const splitedStr = st.split("");

  const length = st.length - 1;

  if (hasPalindrome) {
    return splitedStr.concat(splitedStr.slice(0, index).reverse()).join("");
  }

  return splitedStr
    .slice(0, length)
    .concat(splitedStr[length], splitedStr.slice(0, length).reverse())
    .join("");
}

const containPalindrome = (s) => {
  let index = 0;
  let hasPalindrome = false;
  for (let i = s.length - 2; i >= 0; i--) {
    if (s[i] === s[s.length - 1]) {
      console.log("here");
      if (isPalindrome(s.slice(i, s.length))) {
        index = i;
        hasPalindrome = true;
      }
    }
  }

  hasPalindrome;
  index;

  return { hasPalindrome: hasPalindrome, index: index };
};

const isPalindrome = (s) => {
  console.log(s);
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};

console.log(buildPalindrome("abcdc"));
// console.log(buildPalindrome("abc"));
