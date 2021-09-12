function deleteDigit(n) {
  let max = 0;
  const list = ("" + n).split("");

  for (let i = 0; i < list.length; i++) {
    max = Math.max(
      list
        .slice(0, i)
        .concat(list.slice(i + 1, list.length))
        .join(""),
      max
    );
  }

  return max;
}

console.log(deleteDigit((n = 152)));
