function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((val) =>
    val === elemToReplace ? substitutionElem : val
  );
}
