function depositProfit(deposit, rate, threshold) {
  let year = 0;
  while (deposit < threshold) {
    deposit = deposit * (1 + rate / 100);
    year++;
  }

  return year;
}

console.log(depositProfit(100, 20, 170));
