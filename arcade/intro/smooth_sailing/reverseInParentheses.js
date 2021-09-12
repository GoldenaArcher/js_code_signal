function reverseInParentheses(inputString) {
  const stack = [];
  let inputList = inputString.split("");

  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i] === "(") {
      stack.push(i);
    } else if (inputList[i] === ")") {
      const begin = stack.pop();
      const reversedSeq = reverseString(inputList.slice(begin + 1, i));
      appendSubsequence(reversedSeq, inputList, begin + 1);
    }
  }

  return inputList.filter((char) => char !== "(" && char !== ")").join("");
}

const reverseString = (sequence) => {
  for (let i = 0; i < sequence.length / 2; i++) {
    const endIndex = sequence.length - i - 1;
    [sequence[i], sequence[endIndex]] = [sequence[endIndex], sequence[i]];
  }
  return sequence;
};

const appendSubsequence = (sequence, arr, begin) => {
  let counter = 0;

  while (counter < sequence.length) {
    arr[begin++] = sequence[counter++];
  }
};

// console.log(reverseInParentheses("(bar)"));
// console.log(reverseInParentheses("foo(bar)baz"));
// console.log(reverseInParentheses("foo(bar)baz(blim)"));
console.log(reverseInParentheses("foo(bar(baz))blim"));
