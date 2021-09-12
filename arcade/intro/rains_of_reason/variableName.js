function variableName(name) {
  const matchChars = name.match(/[a-zA-Z0-9_]/g);

  return (
    matchChars && matchChars.length === name.length && !name[0].match(/[0-9]/g)
  );
}

console.log(variableName("var_1__Int"));
console.log(variableName("qq-q"));
