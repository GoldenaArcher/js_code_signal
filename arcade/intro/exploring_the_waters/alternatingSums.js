function alternatingSums(a) {
  let weight1 = 0,
    weight2 = 0;
  a.forEach((weight, index) => {
    index % 2 === 0 ? (weight1 += weight) : (weight2 += weight);
  });

  return [weight1, weight2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
