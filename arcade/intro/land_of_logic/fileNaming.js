function fileNaming(names) {
  const map = new Map();
  return names.map((name) => {
    if (!map.has(name)) {
      map.set(name, 1);
      return name;
    } else {
      let digit = map.get(name);
      let newName = `${name}(${digit})`;
      while (map.has(newName)) {
        digit++;
        newName = `${name}(${digit})`;
      }

      newName;
      map.set(newName, 1);
      map.set(name, digit);
      return newName;
    }
  });

  updatedNames;
}

// console.log(fileNaming((names = ["doc", "doc", "image", "doc(1)", "doc"])));
console.log(
  fileNaming(
    (names = ["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"])
  )
);
