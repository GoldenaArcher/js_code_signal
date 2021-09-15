function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) return 0;
  s -= min1;
  let minutes = 1;

  for (let i = 2; i <= 10; i++) {
    if (s < min2_10) return minutes;
    minutes++;
    s -= min2_10;
  }

  return minutes + Math.floor(s / min11);
}
