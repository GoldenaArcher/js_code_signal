function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (maxW >= weight1 + weight2) {
    return value1 + value2;
  }

  if (value1 >= value2 && maxW >= weight1) {
    return value1;
  }

  if (value2 >= value1 && maxW >= weight2) {
    return value2;
  }

  if (maxW >= weight1) {
    return value1;
  }

  if (maxW >= weight2) {
    return value2;
  }

  return 0;
}

// console.log(
//   knapsackLight(
//     (value1 = 10),
//     (weight1 = 5),
//     (value2 = 6),
//     (weight2 = 4),
//     (maxW = 8)
//   )
// );

console.log(
  knapsackLight(
    (value1 = 15),
    (weight1 = 2),
    (value2 = 20),
    (weight2 = 3),
    (maxW = 2)
  )
);
